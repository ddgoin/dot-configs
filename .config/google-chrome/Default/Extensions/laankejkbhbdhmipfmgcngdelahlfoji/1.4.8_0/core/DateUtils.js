define(["core/Logger"],function(e){var n={parseMilitaryTime:function(e){var t=e.split(":"),n=parseInt(t[0],10),r=parseInt(t[1],10),i=n>=12?"pm":"am";n=n>=12?n-12:n;var s=n==0?12:n;n=parseInt(n,10),r=parseInt(r,10),n=this.toTwoDigits(n),r=this.toTwoDigits(r);var o=i==="pm"?chrome.i18n.getMessage("timePM"):chrome.i18n.getMessage("timeAM"),u={};return u.hour=n,u.min=r,u.ampm=i,u.display=s+":"+r+" "+o,u},timestampToDisplayDate:function(e){var t=new Date(e),n={};return n.month=t.getMonth()+1,n.day=t.getDate(),n.year=t.getFullYear(),n.hours=t.getHours(),n.minutes=t.getMinutes(),n.month=this.toTwoDigits(n.month),n.day=this.toTwoDigits(n.day),n.minutes=this.toTwoDigits(n.minutes),n.ampm=n.hours>=12?chrome.i18n.getMessage("timePM"):chrome.i18n.getMessage("timeAM"),n.hours=n.hours>12?n.hours-12:n.hours,n.hours==0&&(n.hours=12,n.ampm=chrome.i18n.getMessage("timeAM")),n},hasTimePassed:function(e,t,n){e=n=="pm"?parseInt(e,10)+12:e;var r=new Date,i=r.toDateString(),s=new Date(i+" "+e+":"+t);return s<r},secondsUntilTime:function(e,t,n){e=n=="pm"?parseInt(e,10)+12:e;var r=new Date,i=r.toDateString(),s=new Date(i+" "+e+":"+t),o=s.getTime()-r.getTime();return Math.floor(o/1e3)},secondsToMinsAndSecs:function(e){return e/60===Math.floor(e/60)?e/60+" minutes":Math.floor(e/60)+" minutes and "+(e-Math.floor(e/60)*60)+" seconds"},minutesUntilTime:function(e,t,n){var r=this.secondsUntilTime(e,t,n);return Math.floor(r/60)},getTodayDateObj:function(e,t,n){e=n=="pm"?parseInt(e,10)+12:e;var r=new Date,i=r.toDateString();return new Date(i+" "+e+":"+t)},hoursToMilliseconds:function(e){return parseFloat(e)*60*60*1e3},toTwoDigits:function(e){return e<10&&(e="0"+e),e}};return n});