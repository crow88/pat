define(["backbone","model/data","model/token-data","view/content","view/common/_cjs_npc_get","util/navigate","util/path","constant/quest"],function(a,b,c,d,e,f,g,h){var i={SIDESTORY:24,SCRAPBOOK:26,SKIP_RESULT:27},j={631:1,1101:2},k=1528,l=d.extend({init:function(){window.SCENE_RETURN_ID_STAGE="0",window.SCENE_RETURN_ID_RAID="1",window.SCENE_RETURN_ID_LIST="2",window.SCENE_RETURN_ID_REWARD="3",window.SCENE_RETURN_ID_GACHA="4",window.SCENE_RETURN_ID_ARCHIVE="5",window.SCENE_RETURN_ID_ISLAND_RELEASE="6",window.SCENE_RETURN_ID_MYPAGE="7",window.SCENE_RETURN_ID_EVENT="8",window.SCENE_RETURN_ID_DEBUG="9",window.SCENE_RETURN_ID_COOP_QUEST="10",window.SCENE_RETURN_ID_FATE="12",window.SCENE_RETURN_ID_ARCHAIC="13",window.SCENE_RETURN_ID_APRILFOOL="14",window.SCENE_RETURN_ID_SKY="15",window.SCENE_RETURN_ID_REWARD_NOT_FATE="23",window.SCENE_RETURN_ID_ARCARUM_STAGE="25"},fowardTo:function(a,b,c,d,f,g,h,i,j){var k=this;_.isEmpty(this.cjsMessage)===!1?(Game.get$ScrollParent().scrollTop(0),e.setParams({message:{0:this.cjsMessage.join_npc_comment,get_voice:this.cjsMessage.get_voice,join_cjs:this.cjsMessage.join_cjs,chara_id:this.cjsMessage.npc_id}}),$("#cjs-npc_get").one("completeCjsPlay",function(){k._fowardTo(a,b,c,d,f,g,h,i,j)})):this._fowardTo(a,b,c,d,f,g,h,i,j)},_fowardTo:function(d,e,l,m,n,o,p,q,r){var s=n||"";this.content_close();if(d==window.SCENE_RETURN_ID_RAID)this.locationRaid(s);else if(d==window.SCENE_RETURN_ID_LIST)this.fowardQuestList(e,l,p);else if(d==window.SCENE_RETURN_ID_REWARD)this._fowardRewardPre();else if(d==window.SCENE_RETURN_ID_GACHA)window.history.back();else{if(d==window.SCENE_RETURN_ID_ARCHIVE)return void history.back();if(d==window.SCENE_RETURN_ID_ISLAND_RELEASE)a.history.navigate("quest/island/release/"+m,!0);else if(d==window.SCENE_RETURN_ID_MYPAGE)a.history.navigate("mypage",!0);else if(d==window.SCENE_RETURN_ID_EVENT){(_.isUndefined(e)||_.isNull(e))&&(e=""),(_.isUndefined(l)||_.isNull(l))&&(l=""),(_.isUndefined(m)||_.isNull(m))&&(m="");var t=g.join([m,e,l]),u=new(b.extend({urlRoot:Game.baseUri+"quest/redirect_location/"+t}));u.fetch()}else if(d==window.SCENE_RETURN_ID_COOP_QUEST)a.history.navigate("coopraid",!0);else if(d==window.SCENE_RETURN_ID_FATE){var v="quest/fate";switch(!0){case!!o:v="quest/fate/q"+o;break;case!!Game.view.popArcarumNpcId:v="quest/fate/pop/"+Game.view.popArcarumNpcId}a.history.navigate(v,!0)}else if(d==window.SCENE_RETURN_ID_ARCHAIC)a.history.navigate("archaic/numbers",!0);else if(d==window.SCENE_RETURN_ID_APRILFOOL)f.hash("comic/"+k,{refresh:!1});else if(d==window.SCENE_RETURN_ID_SKY)a.history.navigate("surprise/sky",!0);else if(d==window.SCENE_RETURN_ID_REWARD_NOT_FATE){var v="result/quest/";Game.ua.isIOS()&&Game.ua.versionCompare(Game.ua.os.version,"8")>=0?setTimeout(function(){location.hash=v},500):a.history.navigate(v,!0)}else if(+d===i.SIDESTORY)f.hash("#sidestory/story/"+e,{refresh:!1});else if(d==window.SCENE_RETURN_ID_ARCARUM_STAGE)a.history.navigate("#arcarum2/stage",!0);else if(+d===i.SCRAPBOOK)f.hash("archive/story/scrapbook_detail/"+j[+this.completedQuestId]+"/"+this.completedQuestId+"/1",{refresh:!1});else if(+d===i.SKIP_RESULT)this.requestResultSkip();else if(+d===h.SCENE_RETURN_ID.REDIRECT_URL)f.hash(q,{refresh:!1});else if(+d===h.SCENE_RETURN_ID.FROM_URL_PARAM){var w=this.nextUrl.replace(/!/g,"/");f.hash(w,{refresh:!1})}else if(+d===h.SCENE_RETURN_ID.FREE_QUEST_LIST)f.hash("quest/free");else{var x=new(c.extend({urlRoot:Game.baseUri+"quest/update_prologue_browsed_flg_already_read"}));this.stopListening(x,"sync"),this.listenToOnce(x,"sync",function(){a.history.navigate("quest/stage",!0)}),x.save()}}},requestResultSkip:function(){this.resultSkipModel=new(b.extend({urlRoot:"result/skip"})),this.resultSkipModel.fetch()},locationRaid:function(a){var c=$(".prt-scene-stage").data("duplicate-key");c||(c=$("#cnt-quest").data("duplicate-key-two")||$("#cnt-room-index").data("duplicate-key-two"));var d=new(b.extend({urlRoot:Game.baseUri+"quest/raid_info"}));this.stopListening(d,"sync"),this.listenToOnce(d,"sync",this.fowardRaid),d.set("duplicate_key",c),d.set("quest_type",a),d.save()},fowardRaid:function(a){this.stopStageEvent();var b=a.get("raid_id");1==a.get("is_multi")?f.hash("raid_multi/"+b,{refresh:!0}):f.hash("raid/"+b,{refresh:!0})},fowardQuestList:function(b,c,d){var e=b?"quest/index/"+b+"/"+c+"/"+d:"quest/index";a.history.navigate(e,!0)},_fowardRewardPre:function(){var a=new(c.extend({urlRoot:Game.baseUri+"quest/check_fate_quest_progress"}));this.stopListening(a,"sync"),this.listenToOnce(a,"sync",this._fowardReward),a.fetch()},_fowardReward:function(b){1==b.get("result")&&(Game.ua.isIOS()&&Game.ua.versionCompare(Game.ua.os.version,"8")>=0?setTimeout(function(){location.hash="#result/quest/"},500):a.history.navigate("result/quest/",!0))},removeDelimited:function(a){return a.replace(/,/g,"")},currencyFormat:function(a){for(var b=String(a);b!=(b=b.replace(/^(-?\d+)(\d{3})/,"$1,$2")););return b},startsWith:function(a,b){return 0==a.indexOf(b)},addPortion:function(a){var b=$(".ico-s").attr("data-title");$(".ico-s").attr("data-title",parseInt(b)+parseInt(a))},addPortionAll:function(a){var b=$(".ico-l").attr("data-title");$(".ico-l").attr("data-title",parseInt(b)+parseInt(a))},stopStageEvent:function(){"undefined"!=typeof stage&&createjs.Ticker.removeEventListener("tick",stage)},isNotEmpty:function(a){return"null"===a?!1:"　"===a?!1:" "===a?!1:a?!0:!1},getDurationMS:function(a){return 120*a+500}});return l});