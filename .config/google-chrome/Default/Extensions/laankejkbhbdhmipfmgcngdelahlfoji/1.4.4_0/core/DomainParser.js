define(["core/Logger"],function(e){var n={log:function(t,n,r,i){},getCurrentURL:function(){var e=this;chrome.tabs.getSelected(null,function(t){if(t!==undefined)return t.url})},extractFullDomain:function(e){if(!e)return null;var t=e.match(/:\/\/(.[^/]+)/);if(t==null||t.length<2){var n=e.split("/");return n[0]}return t[1]},extractBaseDomain:function(e){var t=this.extractFullDomain(e);if(!t||t.length===0)return"";var n=t.split(".");if(n.length===1)return t;var r=n[n.length-1];return r=n[n.length-2]+"."+r,this.isMultiPartDomain(t)&&(r=n[n.length-3]+"."+r),r},isMultiPartDomain:function(e){var n=e.split("."),r=[];if(n.length===1)return!1;var i=n[n.length-2];if(i.length==1)return!0;if(i.length==2&&n.length>3)return!0;if(i.length==3&&n.length>=3){r=["com","edu","gov","mil","net","org","biz","www","pro","int","web","xxx"];for(var s in r)if(r.hasOwnProperty(s)&&i==r[s])return!0}if(i.length==4&&n.length>=3){r=["info","mobi","name","jobs","kiwi","aero","asia","coop"];for(var o in r)if(r.hasOwnProperty(o)&&i==r[o])return!0}if(n.length>=3){var u=n[n.length-3];if(i.length==2&&n.length===3&&u.length>2&&u!=="www")return!0}return!1},isMoreGeneralURL:function(e,t){e=typeof e=="string"?e.toLowerCase():e,t=typeof t=="string"?t.toLowerCase():t,e=this.stripProtocol(e),t=this.stripProtocol(t);var r=this.extractBaseDomain(t);if(e===t)return!0;if(e===r)return!0;if(t.indexOf(e)===0)return!0;var i=this.extractBaseDomain(e);return i===r&&e.length<=t.length&&t.indexOf(e)>=0&&(t.indexOf("/")>=0||t.indexOf("?")>=0)?!0:r.length>i.length&&r.indexOf(e)>-1?!0:!1},matchesWildcard:function(e,t){var r=e.replace("*","");if(t.indexOf(r)==-1)return!1;var i=t.substring(0,t.indexOf(r)+r.length),s=t.substring(i.length-r.length,i.length),o=s===r;return o},stripProtocol:function(e){return e.indexOf("://")>-1?e.slice(e.indexOf("://")+3,e.length):e}};return n});