define(["core/Logger","core/vendor/jquery.min","core/vendor/Brightline.min"],function(e,t,n){var i={interval:0,duration:5,log:function(t,n,r,i){},init:function(){var e=this;chrome.extension.sendRequest({message:"isInfoBarHidden"},function(t){t&&t.infoBarHidden!==!0?e.injectInfoBarHTML():e.isInfoBarHidden=!0})},show:function(e){var n=this;chrome.extension.sendRequest({message:"isInfoBarHidden"},function(r){r&&r.infoBarHidden!==!0&&(t("#StayFocusd-infobar-msg").html(n.getMessage(e)),t("#StayFocusd-infobar").css("color","#ffffff"),t("#StayFocusd-infobar").slideDown("fast"))})},hide:function(){chrome.extension.sendRequest({message:"isInfoBarHidden"},function(e){e&&e.infoBarHidden!==!0&&t("#StayFocusd-infobar").slideUp("fast")})},getMessage:function(e){switch(e){case"BLOCKED_BY_REFERRER":return chrome.i18n.getMessage("infoBarBlockedByReferrer")}},injectInfoBarHTML:function(){var e=this;this.loadTemplate("tpl/infobar.tpl",function(r){var i=new n(r);i.set("extensionURL",chrome.extension.getURL("/")),i.set("hideForever",chrome.i18n.getMessage("hideForever")),i.set("hideOnce",chrome.i18n.getMessage("hideOnce")),t("body").prepend(i.render()),t(document).on("click","#StayFocusd-infobar-hide",function(){e.hide()}),t(document).on("click","#StayFocusd-infobar-never-show",function(){e.hide(),chrome.extension.sendRequest({message:"hideInfoBar"})})})},loadTemplate:function(e,n){t.ajax({type:"GET",url:chrome.extension.getURL(e),dataType:"html",success:function(e){n(e)}})},handleBackgroundScriptRequest:function(e,t){var n=null,r=this;switch(e.message){case"show":n={success:r.show(e.msgType)};break;case"hide":n={success:r.hide()}}return n}};return i});