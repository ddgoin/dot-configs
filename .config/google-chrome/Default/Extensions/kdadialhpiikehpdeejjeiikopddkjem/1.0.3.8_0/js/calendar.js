require(["windows/calendarwindow","libs/less"],function(a){window.calendarWindow=new a({chromeless:!0,inAnybar:/inAnybar=true/.test(location.hash),callback:function(a){chrome.extension.sendMessage({type:"gmailCalendarPick",dateTime:+a.date,alert:a.alert})}});calendarWindow.render().show();$(document.body).append(calendarWindow.$el)});var _gaq={push:function(a){chrome.extension.sendRequest({action:"report",report:a})}};
window.onerror=function(a,b,c){_gaq.push(["_trackEvent","Exceptions","Application","["+b+" ("+c+")] "+a,null,!0])};