/**
 * Shorthand for getting background page
 */function bg(){return chrome.extension.getBackgroundPage()}requirejs.config({baseUrl:"/",waitSeconds:60}),requirejs(["core/Logger","core/Options","core/ActivityMonitor"],function(e,t,n){$(document).ready(function(){t.init(),$("#maxTimeAllowed").attr("value",bg().StayFocusd.getMaxTimeAllowed()),$("#selectAllActiveDays").click(function(){$(".activeDay").attr("checked","checked"),t.setActiveDays()}),$("#howDoesThisWork").click(function(){$("#stalkerExplanation").slideToggle()}),$("#showChallenge").click(function(){t.showChallenge()}),$("#maxTimeAllowedButton").click(function(){t.setMaxTimeAllowed($("#maxTimeAllowed").val())})})});