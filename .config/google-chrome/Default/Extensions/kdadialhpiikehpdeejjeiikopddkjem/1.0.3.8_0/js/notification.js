require.config({baseUrl:"/js",paths:{jquery:"libs/jquery/jquery-min",underscore:"libs/underscore/underscore",backbone:"libs/backbone/backbone",mustache:"libs/mustache/mustache",text:"libs/require/text",less:"libs/less",iscroll:"libs/iscroll",base64:"libs/base64"}});require(["mustache","text!templates/notification.html"],function(b,a){console.log("got template:",a);var c=b.i18n_to_html(a,"snooze,dismiss,back,5_minutes,15_minutes,30_minutes,1_hour,3_hours,tomorrow".split(","));render(c)});
function render(b){$("#alert").html(b);var a=JSON.parse(document.location.hash.substring(1)),b=a.category+", "+a.alertTime,c=$("<div>"+a.title+"</div>").text(),d=a.linkUrl?"<a href='"+a.linkUrl+"' target='_blank'>"+c+"</a>":a.title;$("#task").html("<span title='"+c+"'>"+d+"</span>");$("#description").text(b);$("[data-minutes]").click(function(b){chrome.extension.sendRequest({action:"alert",alert:"snooze",minutes:$(b.target).data("minutes"),id:a.id});window.close()});$("#snooze").click(function(){$("#alert-page").removeClass("visible");
$("#snooze-page").addClass("visible")});$("#back").click(function(){$("#snooze-page").removeClass("visible");$("#alert-page").addClass("visible")});$("#done").click(function(){chrome.extension.sendRequest({action:"alert",alert:"done",id:a.id});window.close()});$("#dismiss, #task a").click(function(){chrome.extension.sendRequest({action:"alert",alert:"dismiss",id:a.id});window.close()})};