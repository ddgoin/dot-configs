define(["jquery"],function(h){(function(h,e,j,k){h.fn.caret=function(c,m){var a,b,f=this[0],d=h.browser.msie;if("object"===typeof c&&"number"===typeof c.start&&"number"===typeof c.end)a=c.start,b=c.end;else if("number"===typeof c&&"number"===typeof m)a=c,b=m;else if("string"===typeof c)-1<(a=f.value.indexOf(c))?b=a+c[e]:a=null;else if("[object RegExp]"===Object.prototype.toString.call(c)){var l=c.exec(f.value);null!=l&&(a=l.index,b=a+l[0][e])}if("undefined"!=typeof a)return d?(d=this[0].createTextRange(),
d.collapse(!0),d.moveStart("character",a),d.moveEnd("character",b-a),d.select()):(this[0].selectionStart=a,this[0].selectionEnd=b),this[0].focus(),this;if(d)b=document.selection,"textarea"!=this[0].tagName.toLowerCase()?(d=this.val(),a=b[j]()[k](),a.moveEnd("character",d[e]),g=""==a.text?d[e]:d.lastIndexOf(a.text),a=b[j]()[k](),a.moveStart("character",-d[e]),i=a.text[e]):(a=b[j](),b=a[k](),b.moveToElementText(this[0]),b.setEndPoint("EndToEnd",a),g=b.text[e]-a.text[e],i=g+a.text[e]);else var g=f.selectionStart,
i=f.selectionEnd;a=f.value.substring(g,i);return{start:g,end:i,text:a,replace:function(a){return f.value.substring(0,g)+a+f.value.substring(i,f.value[e])}}}})(h,"length","createRange","duplicate");return h.fn.caret});