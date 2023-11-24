define(["backbone","view/archive/abstract-detail","view/popup","view/detail/pop_npc_alter_style","lib/jquery.tabs","model/sound","model/data-loader","view/detail/_decorators/detail_npc","view/archive/story/event-scene-app","view/archive/story/pop-select-quest-branch","util/navigate","util/language-message"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m={DUNGEON:70270,REVIVAL:72520},n={NPC_LEVEL:6,CLEARED_CHAPTER:8,COMPLETED_TITLE_MISSION:19,EVOKER_LEVEL:20,VISITED_REPLICARD_MAP_DIVISION:21},o={REPLICARD_WORLD_QUEST:1,GROWTH_NPC:2},p="pose",q={LIST:"list",ARCHIVE_NPC:"archive_npc"},r="js-is-scenes-by-transcendence",s="js-is-scenes-by-encounter",t=1,u=b.extend({attr:null,event_popup_info:null,character_id:null,event_name:null,isSelectBranch:!1,isQuestBranch:!1,particularTitleId:"archive_page_title_npc",events:{"tap .btn-play-episode:not(.has-branch, .has-quest-branch)":"episode_play","tap .btn-play-episode.has-branch":"popSelectBranch","tap .btn-play-episode.has-quest-branch":"popSelectQuestBranch","tap .btn-play-encounter.has-branch":"popSelectBranch","tap .pop-select-branch .btn-usual-cancel":"popRemove","tap .pop-select-branch .btn-usual-ok":"checkSelectedBranchChar","tap .pop-select-branch .btn-select-char:not(.disabled)":"toggleBranchChar","tap .btn-event-whiteday":"valentine_story","tap .btn-play-ng":"popNgDetail","tap .btn-toquest":"quest_navigate","tap .pop-episode-info .btn-usual-cancel":"popRemove","tap .btn-play-voice":"playVoice","tap .btn-pose":"showNextImg","tap .btn-npc-switch:not(.unavailable)":"onTapSwitchNpc","tap .prt-image .btn-alter-style":"onTapAlterStyle","tap .prt-detail-area .btn-tabs":"onTapDetailTab","tap .pop-event-reward .btn-usual-close":"popEventRemove","tap .prt-episode-event .btn-episode-event:not(.sidestory)":"locationEvent","tap .prt-episode-event .btn-episode-event.sidestory":"locationSidestory","tap .prt-episode-quest .btn-accordion":"onTapBtnAccordion","tap .pop-select-quest-branch .btn-usual-cancel":"popRemove"},initialize:function(a){this.attr=a,a.type="npc",a.id_prefix="character",b.prototype.initialize.apply(this,[a]),_.extend(this.events,b.prototype.events)},addInitialPostParam:function(){return{style:t}},render:function(){this.character_id=this.detail_model.get("character_id"),f.loadArchiveVoiceData(this.character_id),this.preparePoseList(),b.prototype.render.call(this),this.initDetailNpcData(this.detail_model.toJSON(),{pageKind:h.PAGE_KIND.ARCHIVE}),this.renderDetailNpcSkill(),this.$el.find(".prt-2tabs").tabs({tabClass:"btn-tabs",tabTarg:"prt-tab-content"}),this.selectedTab=this.$el.find(".btn-tabs").first().data("id"),this.$el.find('.btn-npc-switch[data-id="'+this.character_id+'"]').addClass("selected"),this.event_popup_info&&this.pop_get_reward(),this.editLinks()},getImageName:function(a,b){var c="";if(a.style!==t&&a.style_list&&a.style_list.length)c=_.find(a.style_list,function(b){return+b.style===+a.style}).image;else{var d=this.poseList[this.currentPoseIndex]&&this.poseList[this.currentPoseIndex].suffix||"01";c=a.id+"_"+d+(b?"_"+b:"")}return c},getCurrentImageSuffix:function(){var a=this.detail_model.toJSON(),b=this.poseList.length?this.poseList[this.currentPoseIndex].suffix:"01";return a.image_suffix[b]||null},editLinks:function(){var a=this.attr;1===+a.back_flg&&a.from!==q.ARCHIVE_NPC?this.$el.find(".lis-lead-prev.back").remove():a.from===q.LIST&&this.detail_model.get("is_archive")&&this.$el.find(".prt-lead-link").append(_.template($("#tpl-link-list-npc").html(),{id:this.detail_model.get("user_npc_id")}))},switchNpcRender:function(){var a=this,c=this.detail_model.get("character_id"),d=location.hash.replace(this.character_id,c);k.hash(d,{refresh:!1,trigger:!1,replace:!0}),this.currentImageId=null,this.character_id=c,this.attr.param_id=c,f.loadArchiveVoiceData(this.character_id),this.$el.find(".btn-tabs").off(),this.preparePoseList(),b.prototype.render.call(this),this.initDetailNpcData(this.detail_model.toJSON(),{pageKind:h.PAGE_KIND.ARCHIVE}),this.renderDetailNpcSkill(),this.$el.find(".prt-2tabs").tabs({tabClass:"btn-tabs",tabTarg:"prt-tab-content"});var e=this.$el.find(".prt-2tabs .btn-tabs"),g=0;_.some(e,function(b,c){return $(b).data("id")==a.selectedTab?(g=c,!0):void 0}),this.$el.find(".btn-tabs, .prt-detail-area .prt-tab-content").removeClass("active"),this.$el.find('.btn-tabs[data-id="'+this.selectedTab+'"]').addClass("active"),this.$el.find(".prt-detail-area .prt-tab-content:eq("+g+")").addClass("active"),this.$el.find('.btn-npc-switch[data-id="'+this.character_id+'"]').addClass("selected"),this.editLinks(),this.trigger("xhrEnd")},content_close:function(){g.clear(),b.prototype.content_close.call(this)},data_extend:function(a){var b=this.detail_model.toJSON(),c={entry_event_list:b.entry_event_list,episode_list:b.episode,scenes:b.scenes,other_episode:b.other_episode,scenesByTranscendence:b.scenes_by_transcendence,transcendenceEpisode:b.transcendence_episode,poseNum:b.pose_list.length,imageName:this.getImageName(b,a.imageSuffix)};_.extend(a,c)},episode_play:function(a){this.loadStart();var b=$(a.currentTarget),c=b.data("index"),d=b.parent().data("category"),e=this.detail_model.get(d+"episode"),f=null;if(this.isSelectBranch&&(f=0<this.selectedCharList.length?this.selectedCharList.join(","):"0"),b.hasClass(r))return void k.hash(this.selectedEpisodeData.url+"/null/"+f);if(b.hasClass(s))return void k.hash(this.selectedEpisodeData.url+"/"+f);if(d){d+="_",e=this.detail_model.get(d+"episode"),this.scene_list=e.list[c].scene_list,this.questIdList=e.list[c].quest_id_list||[];var g=e.casino_flg}else this.scene_list=e[c].scene_list,this.questIdList=e[c].quest_id_list||[];var h=this.scene_list.shift(),j=this.questIdList.length>0?this.questIdList.shift():0;this.bind("sceneAllEnd",this.sceneAllEnd),this.scene_view&&this.removeSubView(this.scene_view),this.scene_view=new i({scene_id:h,forwardFlg:5,scene_list:this.scene_list,play_view:this,casino_flg:g,branch_npcs:f,isArchiveNpc:!0,questId:j,questIdList:this.questIdList,isQuestBranch:this.isQuestBranch,questBranchList:this.questBranchList}),this.addSubView(this.scene_view)},event_story_play:function(a){this.loadStart(),this.bind("sceneAllEnd",this.sceneAllEnd);var b=a.get("scene_id");this.event_popup_info=a.get("pop"),this.scene_list=[],this.scene_view&&this.removeSubView(this.scene_view),this.scene_view=new i({scene_id:b,forwardFlg:5,scene_list:this.scene_list,play_view:this}),this.addSubView(this.scene_view)},sceneAllEnd:function(){this.content_close(),this.delegateEvents(this.events),this.initialize(this.attr)},popNgDetail:function(a){var b=$(a.currentTarget),d=b.data("index"),e=b.parent().data("category"),f=this.detail_model.toJSON(),g="",h={};"other"===e?(h=f.other_episode.list[d],g=l.getMessage("archive_2")):(h=f[e+"episode"][d],g=l.getMessage("archive_3"));var i=h.is_available?l.replaceMessage("archive_5",[g]):l.replaceMessage("archive_6",[g]);if(h.condition={name:f.name},h.chapter_open_conditions.forEach(function(a){switch(a.type){case n.CLEARED_CHAPTER:h.condition.isNotClearQuest=!0,h.condition.necessaryEpisode=a.content;break;case n.NPC_LEVEL:h.condition.isNotEnoughLevel=!0,h.condition.level=a.content;break;case n.COMPLETED_TITLE_MISSION:h.condition.isNotCompleteNewWorldFoundation=!0,h.condition.title=a.content;break;case n.EVOKER_LEVEL:h.condition.isNotEnoughEvokerLevel=!0;break;case n.VISITED_REPLICARD_MAP_DIVISION:h.condition.isNotOpenWorldQuest=!0,h.condition.divisionName=a.content.division_name,h.condition.dungeonName=a.content.dungeon_name}}),h.special_conditions.length)switch(+h.special_conditions[0].type){case o.REPLICARD_WORLD_QUEST:h.condition.isNotClearWorldQuest=!0;break;case o.GROWTH_NPC:h.condition.isNotGrownCharacter=!0}this.popView=new c({className:"pop-episode-info",title:i,body:_.template($("#tpl-episode-info").html(),h),flagBtnCancel:1,flagBtnOk:0}),this.popView.render().popShow()},pop_get_reward:function(){this.popView=new c({className:"pop-event-reward "+this.event_name,title:l.getMessage("archive_9"),body:_.template($("#tpl-get-reward").html(),this.event_popup_info),flagBtnClose:1}),this.popView.render(),this.popView.popShow()},preparePoseList:function(){var a=this.detail_model.toJSON(),b=a.pose_list,c=0,d=this;this.poseList=[],_.each(b,function(a){d.poseList.push({btnClassName:"9"===a.substr(0,1)?a:"0"+ ++c,suffix:a})}),this.currentPoseIndex=0,this.poseListLength=this.poseList.length},showNextImg:function(a){this.currentPoseIndex+=1,this.currentPoseIndex>=this.poseListLength&&(this.currentPoseIndex=0);var b=this.detail_model.toJSON(),c=Game.imgUri+"/sp/assets/npc/b/",d=b.id+"_"+this.poseList[this.currentPoseIndex].suffix,e=(this.currentPoseIndex+1)%this.poseListLength,g=this.$el.find(".cnt-detail-wrapper"),h=this.getCurrentImageSuffix();h&&(d+="_"+h),g.find(".btn-pose").removeClass(p+this.poseList[this.currentPoseIndex].btnClassName).addClass(p+this.poseList[e].btnClassName),g.find(".btn-char-zoom").data("image-id",d).attr("data-image-id",d),g.find(".img-element").attr("src",c+d+".png"),this.currentImageId=d,f.loadArchiveVoiceData(this.currentImageId)},onTapDetailTab:function(a){this.selectedTab=$(a.currentTarget).data("id")},onTapSwitchNpc:function(a){var b={character_id:$(a.currentTarget).data("id"),style:t};this.updateDetailModel(b).done(this.switchNpcRender.bind(this))},updateDetailModel:function(a){return this.detail_model.clear({silent:!0}),this.trigger("xhrStart"),this.postDetail(a)},onTapAlterStyle:function(){var a=this.detail_model.toJSON(),b=new d({isArchive:!0,styleList:a.style_list,currentStyle:+a.style});this.listenToOnce(b,d.EVENT.SELECT,function(a){this.currentImageId=null,this.updateDetailModel({style:a}).done(this.render.bind(this))}.bind(this)),b.render().popShow()},quest_navigate:function(){this.content_close(),a.history.navigate("quest/fate",!0)},popRemove:function(){this.isSelectBranch=!1,this.isQuestBranch=!1,this.popView.popRemove()},playVoice:function(){var a=this.currentImageId||this.character_id;f.playSoundArrayInOrder(a,"archive_voice")},loadStart:function(){Game.loading.loadStart()},popSelectBranch:function(a){this.isSelectBranch=!0,this.selectBranchEvent=a;var b=$(a.currentTarget),d=b.data("index"),e=this.detail_model.toJSON();b.hasClass(r)?this.selectedEpisodeData=e.scenes_by_transcendence[d]:b.hasClass(s)?this.selectedEpisodeData=e.scenes[d]:this.selectedEpisodeData=e.episode[d],this.selectedEpisodeData.isCharacterId=_.some(this.selectedEpisodeData.npc_list,function(a){return a.is_character_id}),this.hasEpisodeNpc=_.some(this.selectedEpisodeData.npc_list,function(a){return a.has_npc}),this.popView=new c({className:"pop-select-branch",title:l.getMessage("archive_10"),body:_.template($("#tpl-pop-select-branch").html(),this.selectedEpisodeData),flagBtnCancel:1,flagBtnClose:0,flagBtnOk:1}),this.popView.render().popShow()},checkSelectedBranchChar:function(){this.trigger("xhrStart");var a=[],b=this,c=this.$el.find(".pop-select-branch .btn-select-char");c.each(function(c){if($(this).hasClass("selected")){var d=$(this).data("index"),e=b.selectedEpisodeData.npc_list[d].npc_id;a.push(e)}}),this.selectedCharList=a,this.episode_play(this.selectBranchEvent)},toggleBranchChar:function(a){var b=$(a.currentTarget);b.hasClass("selected")?b.removeClass("selected"):b.addClass("selected")},popSelectQuestBranch:function(a){var b=$(a.currentTarget),c=b.data().index;this.selectedEpisodeData=this.detail_model.toJSON().episode[c],this.popView=new j(this.selectedEpisodeData.quest_list,_.bind(function(b){this.popView.popRemove(),this.isQuestBranch=!0,this.questBranchList=b,this.episode_play(a)},this)),this.popView.render().popShow()},popEventRemove:function(){this.popView&&(this.popView.popRemove(),this.event_popup_info=null)},locationEvent:function(a){var b,c=this.attr,d=$(a.currentTarget),e=d.data("id"),f=d.data("location-id"),g=d.data("group-id")||null,h=this.attr.eventCategory||2,i=[e||f,c.back_flg,c.user_id,c.kind,c.attribute,c.page,c.param_id,c.active_tab];c.isSolotreasure===!0?(b="detail_npc_solotreasure",i.push(c.eventIdNum,b)):c.isEventArchive===!0?(b="detail_npc_event",i.push(c.eventName,c.eventId,c.eventController,b)):c.isSidestory===!0?(b="detail_npc_sidestory",i.push(c.storyId,b)):(b="detail_npc",i.push(null,b));var j;!!e==!0?j="archive/story/limited":_.isUndefined(c.prevHash)===!1?(j="archive/story/event/relatedstory",i=[f,c.prevHash]):_.isNull(g)?j=_.contains(m,+f)?"archive/story/chapter_valentine":"archive/story/chapter":(j="archive/story/group",i=[g,this.attr.back_flg,h]),_.each(i,function(a){j+="/"+a}),this.content_close(),k.hash(j)},locationSidestory:function(){this.content_close(),k.hash("sidestory",{refresh:!1,trriger:!0})},onTapBtnAccordion:function(a){var b=$(a.currentTarget),c=b.hasClass("open"),d=b.data("accordion-target");b.toggleClass("open"),this.toggleAccordion(d,!c)},toggleAccordion:function(a,b){var c=this.$el.find(a);c.stop(),b?c.slideDown():c.slideUp()}}).applyDecorators([h.view]).singleton();return u});