define(["model/token-data","view/popup","util/language-message"],function(a,b,c){var d={DETAIL:"detail",ARCHIVE:"archive"},e={DEFAULT:0,CHANGE_AFTER:1},f={DEFAULT:"default",TRANSFORM:"transform",SELECT:"select"},g=-1,h=8,i=function(i){return i.extend({events:Object.assign({},i.prototype.events,{"tap #btn-form-change":"onTapFormChange","tap .prt-detail-action .btn-full-auto-switch":"onTapBtnFullAutoSwitch","tap .prt-detail-action .btn-ability-transform":"onTapBtnAbilityTransform","tap .prt-detail-action .btn-ability-effect-info":"onTapAbilityEffectInfo","tap .pop-ability-effect.default .btn-usual-ok":"popDetailRemove","tap .pop-ability-effect.transform .btn-usual-ok":"onTapTransformAbilityEffectClose","tap .pop-ability-effect.select .btn-usual-ok":"onTapSelectAbilityEffectClose","tap .pop-ability-details.transform .btn-ability-effect-info":"onTapTransformPopAbilityDetailsEffectInfo","tap .pop-ability-details.select .btn-ability-effect-info":"onTapSelectPopAbilityDetailsEffectInfo","tap .pop-ability-details .btn-usual-ok":"popDetailRemove","tap .prt-detail-action .btn-ability-select":"onTapBtnAbilitySelect","tap .pop-ability-details .btn-ability-select-item":"onTapAbilitySelectItem"}),initDetailNpcData:function(a,b){function c(a){return _.compact(Object.values(a))}var f=b||{};this.formChangeIndex=e.DEFAULT;var g=c(a.ability),h=g.map(function(a){return a.form_change_display_action_ability_info?a.form_change_display_action_ability_info.action_ability[0]:a}),i=c(a.support_ability),j=c(_.omit(a.backmember_ability||{},"2")),k=c(a.appear_ability||{});this.npcDetailData={specialSkillList:[a.special_skill,a.power_up_special_skill],abilityListGroup:[g,h],data:{supportAbilityLIst:i,backMemberAbilityLIst:j,appearAbilityLIst:k,supportAbilityOfNpczenith:Object.values(a.support_ability_of_npczenith||[]),supportAbilityOfNpcevoker:a.support_ability_of_npcevoker||[],isDoll:a.is_doll,isNumbers:a.is_numbers,isArcarumNpc:a.is_arcarum_npc,showFormChangeButton:a.is_show_skill_change,isShowBgmBtn:f.pageKind===d.DETAIL,isShowQuestButton:f.pageKind===d.DETAIL,isShowFullAutoButton:f.pageKind===d.DETAIL}},f.pageKind===d.DETAIL&&(this.npcDetailData.userNpcId=a.id,this.npcDetailData.data.fullAutoSettingList=g.map(function(a){return{fullAutoSettingFlag:a.full_auto_setting_flag,userFullAutoSettingFlag:a.user_full_auto_setting_flag}}))},renderDetailNpcSkill:function(){this.$el.find("#js-detail-skill").html(_.template($("#tpl-detail-skill-npc").html(),{specialSkill:this.npcDetailData.specialSkillList[this.formChangeIndex],abilityList:this.npcDetailData.abilityListGroup[this.formChangeIndex],isFormChangeDefault:this.formChangeIndex===e.DEFAULT,data:this.npcDetailData.data}))},onTapFormChange:function(){this.formChangeIndex=+!this.formChangeIndex,this.renderDetailNpcSkill()},onTapBtnFullAutoSwitch:function(a){var b=$(a.currentTarget),c=b.hasClass("enabled"),d=+a.currentTarget.dataset.abilityIndex,e=!c;b.toggleClass("enabled",e),this.updateUserFullAutoSettingFlag(d,e),this.trigger("xhrStart"),this.postChangeFullAutoAbilityPermission({userNpcId:+this.npcDetailData.userNpcId,abilityNum:+d,autoExecuteFlag:+e}).then(this.trigger.bind(this,"xhrEnd"))},postChangeFullAutoAbilityPermission:function(b){var c=new(a.extend({urlRoot:Game.baseUri+"npc/full_auto_ability_setting"}));return c.save({user_npc_id:b.userNpcId,ability_num:b.abilityNum,auto_execute_flag:b.autoExecuteFlag})},updateUserFullAutoSettingFlag:function(a,b){this.npcDetailData.data.fullAutoSettingList[a-1].userFullAutoSettingFlag=+b},onTapAbilityEffectInfo:function(a){this.selectedAbilityIndex=a.currentTarget.dataset.abilityIndex,this.popAbilityEffect(f.DEFAULT)},onTapBtnAbilityTransform:function(a){this.selectedAbilityIndex=a.currentTarget.dataset.abilityIndex,this.popAbilityDetails(f.TRANSFORM)},onTapTransformPopAbilityDetailsEffectInfo:function(a){this.popView.popDelete({isHideMask:!1}),this.popAbilityEffect(f.TRANSFORM,+a.currentTarget.dataset.abilityIndex)},onTapSelectPopAbilityDetailsEffectInfo:function(a){this.popView.popDelete({isHideMask:!1}),this.popAbilityEffect(f.SELECT,+a.currentTarget.dataset.abilityIndex)},onTapTransformAbilityEffectClose:function(){this.popView.popDelete({isHideMask:!1}),this.popAbilityDetails(f.TRANSFORM)},onTapSelectAbilityEffectClose:function(){this.popView.popDelete({isHideMask:!1}),this.popAbilityDetails(f.SELECT,{selectedItemIndex:this.selectedItemIndex})},popAbilityEffect:function(a,d){var e,g=this,i=this.npcDetailData.abilityListGroup[this.formChangeIndex][this.selectedAbilityIndex],j="pop-ability-effect";a===f.TRANSFORM?(e=i.display_action_ability_info.action_ability[d].ability_detail,j+=" transform"):a===f.SELECT?(e=i.select_display_action_ability_info.action_ability[d].ability_detail,j+=" select"):(e=i.ability_detail,j+=" default"),this.popView=new b({className:j,title:c.getMessage("title_ability_effect"),body:_.template($("#tpl-condition-list").html(),{condition:e,isIOS:Game.ua.isIOS()}),flagBtnOk:1}),this.popView.render(),Object.values(e).reduce(function(a,b){return a+=b.length},0)>h&&this.popView.$el.find(".prt-condition-list").flexslider({selector:".prt-condition-wrapper > .lis-condition-slider",animation:"slide",animationLoop:!1,slideshow:!1,prevText:"",nextText:"",start:function(){g.popView.$el.find(".prt-condition-wrapper .lis-condition-slider").css("display","block");var a=g.popView.$el.find(".flex-viewport").height();g.popView.$el.find(".flex-direction-nav").height(a),g.popView.$el.find(".flex-nav-next").css("opacity",1)}}),this.popView.popShow()},onTapBtnAbilitySelect:function(a){this.selectedAbilityIndex=+a.currentTarget.dataset.abilityIndex,this.popAbilityDetails(f.SELECT)},getFormatActionAbilityList:function(a,b){return a.map(function(a){return{selectedAbilityIndex:b,hasEffect:Object.keys(a.ability_detail).length>0,iconName:a.class_name,name:a.name,comment:a.comment,recast:+a.recast,recast_additional_comment:a.recast_additional_comment,start_recast:a.start_recast}})},popAbilityDetails:function(a,d){var e,h=d||{},i=this.npcDetailData.abilityListGroup[this.formChangeIndex][this.selectedAbilityIndex],j="pop-ability-details",k="undefined"==typeof h.selectedItemIndex?g:h.selectedItemIndex;a===f.TRANSFORM?(e=i.display_action_ability_info.action_ability,j+=" transform"):a===f.SELECT&&(e=[i],j+=" select",this.abilitySelectItemList=this.getFormatActionAbilityList(i.select_display_action_ability_info.action_ability,+this.selectedAbilityIndex));var l=this.getFormatActionAbilityList(e,+this.selectedAbilityIndex);this.popView=new b({className:j,title:c.getMessage("title_ability_effect"),body:_.template($("#tpl-pop-ability-details").html(),{actionAbilityList:l}),flagBtnOk:1}),this.popView.render(),a===f.SELECT&&this.updateSelectItem(this.abilitySelectItemList,k),this.popView.popShow()},onTapAbilitySelectItem:function(a){var b=a.currentTarget;this.selectedItemIndex=b.classList.contains("is-selected")?g:+b.dataset.itemIndex,this.updateSelectItem(this.abilitySelectItemList,this.selectedItemIndex)},updateSelectItem:function(a,b){var c;c=b===g?this.npcDetailData.abilityListGroup[this.formChangeIndex][this.selectedAbilityIndex]:a[b],this.popView.$el.find(".js-prt-ability-info").html(_.template($("#tpl-ability-info").html(),{ability:c,index:b})),$("#js-ability-select-items").html(_.template($("#tpl-ability-select-items").html(),{abilitySelectItemList:a,selectedItemIndex:b}))},popDetailRemove:function(){this.popView&&this.popView.popRemove()}})};return{view:i,PAGE_KIND:d}});