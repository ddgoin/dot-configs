function bg(){return chrome.extension.getBackgroundPage()}define(["core/Logger","core/DateUtils","core/Notification"],function(e,t,n){var i={timer:null,interval:1,settings:{},log:function(t,n,r,i){},init:function(){this.loadSettings(),this.timer=setInterval(this.tick.bind(this),this.interval*1e3)},saveSettings:function(e){this.settings=e,e.activeDays=[],e.activeDays[0]=e.frequency==="everyDay",e.activeDays[1]=e.frequency.indexOf("every")>-1,e.activeDays[2]=e.frequency.indexOf("every")>-1,e.activeDays[3]=e.frequency.indexOf("every")>-1,e.activeDays[4]=e.frequency.indexOf("every")>-1,e.activeDays[5]=e.frequency.indexOf("every")>-1,e.activeDays[6]=e.frequency==="everyDay",this.setLocal("nuclearOptionSettings",JSON.stringify(e)),clearInterval(this.timer),this.timer=setInterval(this.tick.bind(this),this.interval*1e3)},loadSettings:function(){var e=this.getLocal("nuclearOptionSettings");if(e==undefined||e==null||e.length==0)return!1;this.settings=JSON.parse(e)},isActive:function(){this.isCurrentlyActive()?this.isExpired()&&this.deactivate():this.isStarted()&&this.activate();var e=this.isCurrentlyActive();return e},isActiveToday:function(){var e=this.getFrequency(),t=this.getLastActiveDate(),n=this.getLastExpiredDate(),r=(new Date).toDateString();if(e!="todayOnly"||t!==r&&t!==null||n===r){var i=(new Date).getDay(),s=this.getActiveDays();return s.length==0?!1:s[i]}return!0},isStarted:function(){var e=this.getStartType(),n=this.getLastActiveDate(),r=this.getLastExpiredDate(),i=(new Date).toDateString();if(!this.isActiveToday()||r==i){if(e!="atScheduledTime")return!1;var s=new Date(i+" "+this.getStartHour()+":"+this.getStartMin()+" "+this.getStartAmPm()),o=new Date(this.getExpiration());if(o>s)return!1}if(e=="now")return n===i;if(this.isActiveToday()){if(e=="atScheduledTime")return t.hasTimePassed(this.getStartHour(),this.getStartMin(),this.getStartAmPm());if(e=="whenMaxTimeAllowedExceeded")return bg().StayFocusd.isMaxTimeAllowedExceeded()}},activate:function(){var e=this.hasScheduledTime()?t.getTodayDateObj(this.getStartHour(),this.getStartMin(),this.getStartAmPm()):new Date;this.settings.expiration=e.getTime()+t.hoursToMilliseconds(this.getBlockLength()),this.settings.lastActiveDate=(new Date).toDateString(),this.settings.lastExpiredDate=null,this.settings.isCurrentlyActive=!0,this.saveSettings(this.settings),clearInterval(this.timer)},deactivate:function(){this.settings.lastExpiredDate=(new Date).toDateString(),this.settings.isCurrentlyActive=!1,this.saveSettings(this.settings)},isExpired:function(){if(this.getExpiration()===null)return!0;var e=new Date,t=new Date(this.getExpiration());return t<e},isBlockable:function(e,t){if(this.isActive()===!1)return!1;var n=this.getBlockType();switch(n){case"all":return!0;case"allExceptAllowed":return!t;case"blocked":return e;default:return!1}},hasScheduledTime:function(){return this.getStartType()=="atScheduledTime"},getSecondsUntilActive:function(){return t.secondsUntilTime(this.getStartHour(),this.getStartMin(),this.getStartAmPm())},hasSmartBomb:function(){return this.getContentType()=="smartBomb"},isCurrentlyActive:function(){return this.settings.isCurrentlyActive==undefined?!1:this.settings.isCurrentlyActive},getSmartBomb:function(){return this.settings.smartBomb==undefined?{}:this.settings.smartBomb},getContentType:function(){return this.settings.contentType==undefined?"wholeSite":this.settings.contentType},getExpiration:function(){return this.settings.expiration==undefined?null:parseInt(this.settings.expiration,10)},getLastActiveDate:function(e){return this.settings.lastActiveDate==undefined?null:this.settings.lastActiveDate},getLastExpiredDate:function(e){return this.settings.lastExpiredDate==undefined?null:this.settings.lastExpiredDate},getBlockType:function(){return this.settings.blockType==undefined?"all":this.settings.blockType},getBlockLength:function(){return this.settings.blockLength==undefined?1:parseFloat(this.settings.blockLength)},getStartType:function(){return this.settings.startType==undefined?"now":this.settings.startType},getStartHour:function(){return this.settings.startHour==undefined?"00":this.settings.startHour},getStartMin:function(){return this.settings.startMin==undefined?"00":this.settings.startMin},getStartAmPm:function(){return this.settings.startAmPm==undefined?"am":this.settings.startAmPm},getFrequency:function(){return this.settings.frequency==undefined?null:this.settings.frequency},getActiveDays:function(){return this.settings.activeDays==undefined?[]:this.settings.activeDays},setLocal:function(e,t){localStorage.setItem(e,t)},getLocal:function(e){return localStorage.getItem(e)},removeLocal:function(e){return localStorage.removeItem(e)},tick:function(){if(this.hasScheduledTime()&&!this.isActive()){var e=this.getSecondsUntilActive();n.isset(e)&&n.show("nuclear")}return!0}};return i});