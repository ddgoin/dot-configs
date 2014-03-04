/**
 * Shorthand for getting background page
 */function bg(){return chrome.extension.getBackgroundPage()}requirejs.config({baseUrl:"/",waitSeconds:60}),requirejs(["core/Logger","core/vendor/jquery.min","components/Popup/PopupController"],function(e,t,n){var r=new n;t(document).ready(function(){r.init()})});