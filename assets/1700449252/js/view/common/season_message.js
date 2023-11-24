define(["backbone","view/content","view/popup","model/data","model/token-data","util/path","util/page-slider","util/language-message"],function(a,b,c,d,e,f,g,h){var i=["halloween","christmas","newyear","valentine","valentine2","white","white2","birthday"],j=0,k=1,l=5,m=0,n=1,o=1,p=2,q={valentine:o,valentine2:o,white:p,white2:p},r=200,s=1,t={RED:1,BLUE:2,GRAY:3,PURPLE:4},u={GIVE:1,RECEIVE:2,EXCHANGE:3},v=3030135e3,w={HALLOWEEN:"seasonmessage_halloween_title",CHRISTMAS:"seasonmessage_christmas_title",NEWYEAR:"seasonmessage_newyear_title",VALENTINE:"seasonmessage_valentine_title",VALENTINE2:"seasonmessage_valentine_title",WHITE:"seasonmessage_white_title",WHITE2:"seasonmessage_white_title",BIRTHDAY:"seasonmessage_birthday_title"},x={HALLOWEEN:"seasonmessage_halloween_message_title",CHRISTMAS:"seasonmessage_christmas_message_title",NEWYEAR:"seasonmessage_newyear_message_title",VALENTINE:"seasonmessage_valentine_message_title",VALENTINE2:"seasonmessage_valentine_message_title",WHITE:"seasonmessage_white_message_title",WHITE2:"seasonmessage_white_message_title",BIRTHDAY:"seasonmessage_birthday_message_title"},y=5,z=b.extend({modelJSON:null,eventName:null,eventType:null,vwTypeString:"",events:{"tap .btn-season-message.scenelist":"onTapScenarioList","tap .btn-season-message.navigate-scene":"navigateScene","tap .btn-play-eventepisode":"locationHref","tap .pop-seasonmessage-select .btn-usual-close":"popRemove","tap .pop-seasonmessage-select .btn-page-number":"onTapScenarioListPagination","tap .btn-season-message.vw-samesex":"popSameSex","tap .btn-season-message.vw-present-keyitem-comfirm":"popConfirmPresentKeyitem","tap .btn-season-message.vw-no-keyitem":"popNoKeyItem","tap .pop-vw-present-confirm .btn-usual-ok":"navigateScene","tap .pop-vw-purchase-confirm .btn-usual-ok":"purchaseKeyitem","change .pop-vw-purchase-confirm .num-set":"updateLupiPreview","tap .pop-vw-no-keyitem .btn-usual-ok:not(.disabled)":"fetchPurchaseKeyitemData","tap .btn-valentine-banner, .btn-whiteday-banner":"fetchPurchaseKeyitemData","tap .pop-vw-purchase-success .btn-usual-close":"locationSameHash",'tap [class*="pop-vw-"] .btn-usual-cancel':"popRemove",'tap [class*="pop-vw-"] .btn-usual-close':"popRemove","tap .pop-vw-first-login .btn-about-gender":"popAboutGender","tap .pop-vw-purchase-confirm .btn-about-gender":"popAboutGender","tap .pop-vw-about-gender .btn-usual-close":"popRemoveAboutGender","tap .btn-season-message.pop-season-message-single":"popMessage","tap .pop-season-message-single .btn-usual-close":"popRemove"},initialize:function(){void 0!==this.model&&(this.modelJSON=this.model.toJSON(),this.seasonMessageArray=this.createRenderData())},createRenderData:function(){var a,b=this,c=[],d=i,e=d.length;for(a=0;e>=a;a++){var f=d[a],g=b.modelJSON[f],h=q[f]||null;if("undefined"!=typeof g&&g.has_present){var j=+g.view_count,k=g.all_view_flag,l="";if(g.button_status)switch(g.button_status){case t.RED:l="btn-valentine-1";break;case t.BLUE:l="btn-valentine-2";break;case t.GRAY:l="btn-valentine-off";break;case t.PURPLE:l="btn-valentine-4"}else l="btn-"+f+(j>1&&!k?"-2":"-1");c.push({type:f,actionName:this.getClassName(g,f),btnStyleName:l,messageEventType:h}),_.isEmpty(this.vwTypeString)===!0&&_.isNull(h)===!1&&(this.vwTypeString=f)}else"undefined"!=typeof g&&g.has_present===!1&&g.message&&c.push({type:f,actionName:"pop-season-message-single",btnStyleName:"btn-"+f+"-3",messageEventType:h})}return c},getClassName:function(a,b){var c=(+a.view_count,a.all_view_flag);if("valentine"===b||"valentine2"===b||"white"===b||"white2"===b){var d="",e=+a.choco_amount||0,f=a.button_status,g=+a.present_type,h=a.need_present,j=a.recieved_choco;return d=f===t.GRAY?"vw-samesex":1==h&&!j&&_.contains([u.GIVE,u.EXCHANGE],g)?e>=s?"vw-present-keyitem-comfirm":"vw-no-keyitem":c===!0?"scenelist":"navigate-scene"}return _.contains(i,b)?c===!0?"scenelist":"navigate-scene":void 0},popSameSex:function(){if(_.isEmpty(this.vwTypeString)!==!0){var a="";switch(this.eventType="valentine"===this.vwTypeString?o:p,+this.modelJSON[this.vwTypeString].target_sex){case m:a="seasonmessage_valentine_1";break;case n:a="seasonmessage_valentine_2"}this.popView=new c({className:"pop-vw-samesex type-"+this.eventType,title:h.getMessage("seasonmessage_valentine_3"),body:h.getMessage(a),flagBtnClose:1}),this.popView.render().popShow()}},popNoKeyItem:function(a){this.eventType=$(a.currentTarget).data("type"),this.popView=new c({className:"pop-vw-no-keyitem type-"+this.eventType,title:h.getMessage("seasonmessage_valentine_4"),body:_.template($("#tpl-pop-give-vw-item-deny").html(),{eventType:this.eventType}),flagBtnCancel:1,flagBtnOk:1}),this.popView.render().popShow(),this.popView.$el.find(".btn-usual-ok").attr("data-type",this.eventType)},popConfirmPresentKeyitem:function(a){if(_.isEmpty(this.vwTypeString)!==!0){this.eventType=$(a.currentTarget).data("type");var b=$(a.currentTarget).data("event-name"),d=this.modelJSON[b],e={npcName:d.chara_name,keyItemCount:+d.choco_amount,eventType:this.eventType};+d.unique_id===v&&(e.npcName=+this.eventType===o?h.getMessage("seasonmessage_2"):h.getMessage("seasonmessage_3")),this.popView=new c({className:"pop-event-valentine pop-vw-present-confirm type-"+this.eventType,title:h.getMessage("seasonmessage_valentine_4"),body:_.template($("#tpl-pop-give-vw-item-confirm").html(),e),flagBtnCancel:1,flagBtnOk:1}),this.popView.render().popShow(),this.popView.$el.find(".btn-usual-ok").attr("data-event-name",b)}},fetchPurchaseKeyitemData:function(a){this.eventType=$(a.currentTarget).data("type");var b=new(d.extend({urlRoot:Game.baseUri+"shop/item_chocolate/"+this.eventType}));this.listenToOnce(b,"sync",this.popConfirmKeyItem),b.fetch()},popConfirmKeyItem:function(a){this.shopChocoJSON=a.toJSON();var b=this.shopChocoJSON.remain_number>0,d={maxBuyCount:+this.shopChocoJSON.max_number,price:this.shopChocoJSON.price||r,eventType:+this.eventType,isRemained:b},e=this.shopChocoJSON.lupi,f=e<d.price||b===!1?0:1,g=+this.eventType===o?"seasonmessage_valentine_6":"seasonmessage_white_1";this.popView=new c({className:"pop-vw-purchase-confirm type-"+this.eventType,title:h.getMessage(g),body:_.template($("#tpl-pop-vw-purchase-confirm").html(),d),flagBtnCancel:1,flagBtnOk:f}),this.popView.render().popShow(),this.updateLupiPreview()},updateLupiPreview:function(){var a=(this.$el.find(".prt-popup-footer .btn-usual-buy"),this.shopChocoJSON.price||r),b=this.shopChocoJSON.lupi,c=+$("#purchase-count-choco").children(":selected").val(),d=b-c*a;this.$el.find(".current-money").html(b),this.$el.find(".after-money").html(d)},purchaseKeyitem:function(){var a={num:+$("#purchase-count-choco").children(":selected").val(),type:this.eventType};this.chocoPurchaseModel=new(e.extend({urlRoot:Game.baseUri+"shop/chocolate_purchase"})),this.chocoPurchaseModel.set(a),this.stopListening(this.chocoPurchaseModel),this.listenToOnce(this.chocoPurchaseModel,"sync",this.popSuccessPurchaseKeyitem),this.listenToOnce(this.chocoPurchaseModel,"error",this.popErrorPurchaseKeyitem),this.chocoPurchaseModel.save()},popSuccessPurchaseKeyitem:function(){var a=this.chocoPurchaseModel.toJSON(),b={purchaseCount:+a.num,eventType:+a.type},d=+b.eventType===o?"seasonmessage_valentine_7":"seasonmessage_white_2";this.popView=new c({className:"pop-vw-purchase-success type-"+this.eventType,title:h.getMessage(d),body:_.template($("#tpl-pop-vw-purchase-success").html(),b),flagBtnClose:1}),this.popView.render().popShow(),this.$el.find(".prt-lupi").html(a.lupi)},popErrorPurchaseKeyitem:function(){var a=+this.eventType===o?["seasonmessage_valentine_8","seasonmessage_valentine_9"]:["seasonmessage_white_3","seasonmessage_white_4"];this.popView=new c({className:"pop-vw-purchase-error type-"+this.eventType,title:h.getMessage(a[0]),body:h.getMessage(a[1]),flagBtnClose:1}),this.popView.render().popShow()},locationSameHash:function(){a.history.fragment="",a.history.navigate(location.hash,!0)},createSceneParams:function(a){this.eventName=$(a.currentTarget).data("event-name"),this.eventObj=this.model.get(this.eventName),this.isStoryNpc=+this.eventObj.is_story_npc===k?k:j},navigateScene:function(b){this.createSceneParams(b),this.content_close();var c=_.isUndefined(this.eventObj.sex)?"":"/"+this.eventObj.sex,d=this.eventObj.scene_id+"/"+this.isStoryNpc+"/"+this.eventObj.season_event_id+"/"+this.eventObj.unique_id+"/"+this.eventObj.view_count,e="quest/season_event_scene/"+d+"/"+l+c;a.history.navigate(e,!0)},onTapScenarioList:function(a){this.createSceneParams(a),this.getScenarioList()},onTapScenarioListPagination:function(a){this.stopEventPropagation(a,!0);var b=+$(a.currentTarget).attr("page");this.getScenarioList(b)},getScenarioList:function(a){var b=Game.baseUri+f.join(["npc/season_event_scenario_list",this.eventObj.unique_id,this.eventObj.season_event_id,this.eventObj.view_count,this.eventObj.sex||0,a||1]),c=new(d.extend({urlRoot:b}));this.listenToOnce(c,"sync",function(a){this.popSeasonEventList(a.toJSON()),this.trigger("xhrEnd")}.bind(this)),this.trigger("xhrStart"),c.fetch()},popSeasonEventList:function(a){var b=this.eventObj.chara_short_name||this.eventObj.chara_name;+this.eventObj.unique_id===v&&(b=this.eventObj.chara_name,this.eventObj.button_status===t.RED?b=h.getMessage("seasonmessage_3"):this.eventObj.button_status===t.BLUE&&(b=h.getMessage("seasonmessage_2")));var d={scenarioList:a,sceneData:{isStoryNpc:this.isStoryNpc,seasonEventId:this.eventObj.season_event_id,viewCount:this.eventObj.view_count,uniqueId:this.eventObj.unique_id,sceneReturnId:l,sex:_.isUndefined(this.eventObj.sex)?!1:this.eventObj.sex},charaName:b},e=function(){this.popView.$el.find(".lis-scene-select").html(_.template($("#tpl-scene-select-list").html(),d)),this.renderPager(a)}.bind(this);0===this.$el.find(".pop-seasonmessage-select").length?(this.popView=new c({className:"pop-seasonmessage-select",title:h.getMessage(w[this.eventName.toUpperCase()]),body:_.template($("#tpl-scene-select").html(),d),flagBtnClose:1,showStartCallback:function(){e()}}),this.popView.render().popShow()):e()},renderPager:function(a){if(!(+a.count<=y)){var b={page:+a.current,first:+a.first,prev:+a.prev,next:+a.next,last:+a.last},c={paging:this.popView.$el.find(".prt-pagination-list"),text:this.popView.$el.find(".prt-pager-text")};g.render(b,!0,c)}},popRemove:function(){this.popView.popRemove()},popRemoveAboutGender:function(){this.popRemove(),this.trigger("popRemoveAboutGender")},popAboutGender:function(a){this.eventType="valentine"===this.vwTypeString||1===+$(a.currentTarget).data("event-type")?o:p,this.popView=new c({className:"pop-vw-about-gender type-"+this.eventType,title:h.getMessage("seasonmessage_4"),body:$("#tpl-pop-about-gender").html(),flagBtnCancel:0,flagBtnClose:1}),this.popView.render().popShow()},popMessage:function(a){var b=$(a.currentTarget).data("eventName");this.popView=new c({className:"pop-season-message-single type-"+this.eventType,title:h.getMessage(x[b.toUpperCase()]),body:this.modelJSON[b].message,flagBtnCancel:0,flagBtnClose:1}),this.popView.render().popShow()}});return z});