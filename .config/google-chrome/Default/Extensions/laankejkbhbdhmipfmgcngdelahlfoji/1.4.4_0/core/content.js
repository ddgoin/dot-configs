requirejs.config({baseUrl:chrome.extension.getURL("/")}),requirejs(["core/Logger","core/vendor/jquery.min","core/ActivityMonitor","core/InfoBar","core/SmartBomb","core/ReferrerMonitor"],function(e,t,n,r,i,s){chrome.extension.onRequest.addListener(function(e,t,o){var u=null;e.target=="SmartBomb"?u=i.handleBackgroundScriptRequest(e,t):e.target=="InfoBar"?u=r.handleBackgroundScriptRequest(e,t):e.target=="ReferrerMonitor"?u=s.handleBackgroundScriptRequest(e,t):u=n.handleBackgroundScriptRequest(e,t),u!==null&&o(u)}),t(window).scroll(function(){t("#StayFocusd-still-there").css("top",t(this).scrollTop()+"px"),t("#StayFocusd-infobar").css("top",t(this).scrollTop()+"px")}),t(document).ready(function(){n.initContentScript(),r.init()})});