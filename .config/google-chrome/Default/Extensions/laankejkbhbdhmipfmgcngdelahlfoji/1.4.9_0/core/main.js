requirejs.config({baseUrl:"/",waitSeconds:60}),requirejs(["core/Logger","core/StayFocusd","core/ActivityMonitor"],function(e,t,n){t.init(),n.initBackgroundScript()});