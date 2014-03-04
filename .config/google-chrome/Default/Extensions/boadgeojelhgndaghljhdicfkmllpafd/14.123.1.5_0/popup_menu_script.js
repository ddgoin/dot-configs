var f;
window.gd = !0;
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var aa = aa || {}, k = this, ba = function(a, b) {
  for (var c = a.split("."), d = b || k, e;e = c.shift();) {
    if (null != d[e]) {
      d = d[e];
    } else {
      return null;
    }
  }
  return d;
}, ca = function() {
}, da = function(a) {
  a.Aa = function() {
    return a.ub ? a.ub : a.ub = new a;
  };
}, m = function(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}, ea = function(a) {
  var b = m(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}, n = function(a) {
  return "string" == typeof a;
}, fa = function(a, b, c) {
  return a.call.apply(a.bind, arguments);
}, ga = function(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}, p = function(a, b, c) {
  p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? fa : ga;
  return p.apply(null, arguments);
}, ha = Date.now || function() {
  return+new Date;
}, q = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.qb = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.fd = function(a, c, g) {
    return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
};
Function.prototype.bind = Function.prototype.bind || function(a, b) {
  if (1 < arguments.length) {
    var c = Array.prototype.slice.call(arguments, 1);
    c.unshift(this, a);
    return p.apply(null, c);
  }
  return p(this, a);
};
var ia = function(a, b) {
  for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1);e.length && 1 < c.length;) {
    d += c.shift() + e.shift();
  }
  return d + c.join("%s");
}, pa = function(a, b) {
  if (b) {
    return a.replace(ja, "&amp;").replace(ka, "&lt;").replace(la, "&gt;").replace(ma, "&quot;").replace(na, "&#39;");
  }
  if (!oa.test(a)) {
    return a;
  }
  -1 != a.indexOf("&") && (a = a.replace(ja, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(ka, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(la, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(ma, "&quot;"));
  -1 != a.indexOf("'") && (a = a.replace(na, "&#39;"));
  return a;
}, ja = /&/g, ka = /</g, la = />/g, ma = /"/g, na = /'/g, oa = /[&<>"']/, sa = function(a, b) {
  for (var c = 0, d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(d.length, e.length), h = 0;0 == c && h < g;h++) {
    var l = d[h] || "", ib = e[h] || "", qa = RegExp("(\\d*)(\\D*)", "g"), bc = RegExp("(\\d*)(\\D*)", "g");
    do {
      var K = qa.exec(l) || ["", "", ""], L = bc.exec(ib) || ["", "", ""];
      if (0 == K[0].length && 0 == L[0].length) {
        break;
      }
      c = ra(0 == K[1].length ? 0 : parseInt(K[1], 10), 0 == L[1].length ? 0 : parseInt(L[1], 10)) || ra(0 == K[2].length, 0 == L[2].length) || ra(K[2], L[2]);
    } while (0 == c);
  }
  return c;
}, ra = function(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
};
var ta = /<[^>]*>|&[^;]+;/g, ua = function(a, b) {
  return b ? a.replace(ta, "") : a;
}, va = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"), wa = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]"), xa = /^http:\/\/.*/, ya = /\s+/, za = /\d/;
var r = function(a) {
  this.$c = "number" == typeof a ? 0 < a ? 1 : 0 > a ? -1 : null : null == a ? null : a ? -1 : 1;
};
r.prototype.Vc = function(a, b) {
  for (var c = 0, d = 0, e = !1, g = ua(a, b).split(ya), h = 0;h < g.length;h++) {
    var l = g[h];
    wa.test(ua(l, void 0)) ? (c++, d++) : xa.test(l) ? e = !0 : va.test(ua(l, void 0)) ? d++ : za.test(l) && (e = !0);
  }
  return 0 == d ? e ? 1 : 0 : 0.4 < c / d ? -1 : 1;
};
r.prototype.Fc = function(a, b) {
  return this.Wc(this.Vc(a, b));
};
r.prototype.Wc = function(a) {
  return-1 == (0 == a ? this.$c : a) ? "rtl" : "ltr";
};
if ("undefined" != typeof angular) {
  var Aa = angular.module("chrome_i18n", []);
  chrome.runtime && chrome.runtime.getManifest && chrome.runtime.getManifest().default_locale && Aa.directive("angularMessage", function() {
    return{restrict:"E", transclude:"element", replace:!0, controller:["$scope", function(a) {
      this.xa = this.ya = null;
      a.dirForText = p(function(a) {
        this.ya || (this.ya = chrome.i18n.getMessage("@@bidi_dir") || "ltr");
        this.xa || (this.xa = new r("rtl" == this.ya));
        return this.xa.Fc(a || "");
      }, this);
    }], compile:function(a, b) {
      var c = b.key, d = null, e = document.createElement("amr");
      c && !c.match(/^\d+$/) && (c = chrome.i18n.getMessage(c), null == c && e.setAttribute("id", "missing"));
      if (c) {
        var g = chrome.i18n.getMessage(c + "_ph"), d = [];
        if (null != g) {
          for (d = g.split("\ue000"), g = 0;g < d.length;++g) {
            d[g] = d[g].replace(/^{{(.*)}}$/, '<amrp dir="{{dirForText($1)}}">{{$1}}</amrp>');
          }
        }
        d = chrome.i18n.getMessage(c, d);
      } else {
        e.setAttribute("r", "nokey");
      }
      d ? e.innerHTML = d : (e.setAttribute("tl", "false"), e.innerHTML = a.html());
      a.replaceWith(e);
    }};
  });
}
;var Ba = "undefined" != typeof chrome && !!chrome.mdns && !!chrome.cast && !!chrome.cast.channel && !!chrome.browserAction && !!chrome.browserAction.openPopup;
var s = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, s);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
};
q(s, Error);
s.prototype.name = "CustomError";
var Ca = function(a, b) {
  b.unshift(a);
  s.call(this, ia.apply(null, b));
  b.shift();
};
q(Ca, s);
Ca.prototype.name = "AssertionError";
var t = function(a, b, c) {
  if (!a) {
    var d = "Assertion failed";
    if (b) {
      var d = d + (": " + b), e = Array.prototype.slice.call(arguments, 2)
    }
    throw new Ca("" + d, e || []);
  }
  return a;
}, Da = function(a, b) {
  throw new Ca("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
};
var u = Array.prototype, Ea = u.indexOf ? function(a, b, c) {
  t(null != a.length);
  return u.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (n(a)) {
    return n(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, Fa = u.forEach ? function(a, b, c) {
  t(null != a.length);
  u.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = n(a) ? a.split("") : a, g = 0;g < d;g++) {
    g in e && b.call(c, e[g], g, a);
  }
}, Ga = function(a, b, c) {
  var d = 0;
  Fa(a, function(a, g, h) {
    b.call(c, a, g, h) && ++d;
  }, c);
  return d;
}, v = function(a, b, c) {
  t: {
    for (var d = a.length, e = n(a) ? a.split("") : a, g = 0;g < d;g++) {
      if (g in e && b.call(c, e[g], g, a)) {
        b = g;
        break t;
      }
    }
    b = -1;
  }
  return 0 > b ? null : n(a) ? a.charAt(b) : a[b];
}, Ia = function(a, b) {
  var c = Ea(a, b), d;
  (d = 0 <= c) && Ha(a, c);
  return d;
}, Ha = function(a, b) {
  t(null != a.length);
  return 1 == u.splice.call(a, b, 1).length;
}, Ja = function(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}, Ka = function(a, b, c) {
  t(null != a.length);
  return 2 >= arguments.length ? u.slice.call(a, b) : u.slice.call(a, b, c);
}, Ma = function(a, b) {
  t(null != a.length);
  u.sort.call(a, b || La);
}, La = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
};
var Na = "StopIteration" in k ? k.StopIteration : Error("StopIteration"), Oa = function() {
};
Oa.prototype.next = function() {
  throw Na;
};
Oa.prototype.Yc = function() {
  return this;
};
var Pa = function(a, b, c) {
  for (var d in a) {
    if (b.call(c, a[d], d, a)) {
      return!0;
    }
  }
  return!1;
}, Qa = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
}, Ra = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
}, Sa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), Ta = function(a, b) {
  for (var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var g = 0;g < Sa.length;g++) {
      c = Sa[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
};
var w = function(a, b) {
  this.j = {};
  this.e = [];
  this.H = this.o = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1]);
    }
  } else {
    a && this.fc(a);
  }
};
w.prototype.ra = function() {
  return this.o;
};
w.prototype.da = function() {
  this.I();
  for (var a = [], b = 0;b < this.e.length;b++) {
    a.push(this.j[this.e[b]]);
  }
  return a;
};
w.prototype.S = function() {
  this.I();
  return this.e.concat();
};
w.prototype.equals = function(a, b) {
  if (this === a) {
    return!0;
  }
  if (this.o != a.ra()) {
    return!1;
  }
  var c = b || Ua;
  this.I();
  for (var d, e = 0;d = this.e[e];e++) {
    if (!c(this.get(d), a.get(d))) {
      return!1;
    }
  }
  return!0;
};
var Ua = function(a, b) {
  return a === b;
};
f = w.prototype;
f.clear = function() {
  this.j = {};
  this.H = this.o = this.e.length = 0;
};
f.remove = function(a) {
  return Object.prototype.hasOwnProperty.call(this.j, a) ? (delete this.j[a], this.o--, this.H++, this.e.length > 2 * this.o && this.I(), !0) : !1;
};
f.I = function() {
  if (this.o != this.e.length) {
    for (var a = 0, b = 0;a < this.e.length;) {
      var c = this.e[a];
      Object.prototype.hasOwnProperty.call(this.j, c) && (this.e[b++] = c);
      a++;
    }
    this.e.length = b;
  }
  if (this.o != this.e.length) {
    for (var d = {}, b = a = 0;a < this.e.length;) {
      c = this.e[a], Object.prototype.hasOwnProperty.call(d, c) || (this.e[b++] = c, d[c] = 1), a++;
    }
    this.e.length = b;
  }
};
f.get = function(a, b) {
  return Object.prototype.hasOwnProperty.call(this.j, a) ? this.j[a] : b;
};
f.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.j, a) || (this.o++, this.e.push(a), this.H++);
  this.j[a] = b;
};
f.fc = function(a) {
  var b;
  a instanceof w ? (b = a.S(), a = a.da()) : (b = Ra(a), a = Qa(a));
  for (var c = 0;c < b.length;c++) {
    this.set(b[c], a[c]);
  }
};
f.clone = function() {
  return new w(this);
};
f.Yc = function(a) {
  this.I();
  var b = 0, c = this.e, d = this.j, e = this.H, g = this, h = new Oa;
  h.next = function() {
    for (;;) {
      if (e != g.H) {
        throw Error("The map has changed since the iterator was created");
      }
      if (b >= c.length) {
        throw Na;
      }
      var h = c[b++];
      return a ? h : d[h];
    }
  };
  return h;
};
var Va = function(a) {
  if ("function" == typeof a.da) {
    return a.da();
  }
  if (n(a)) {
    return a.split("");
  }
  if (ea(a)) {
    for (var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d]);
    }
    return b;
  }
  return Qa(a);
}, Wa = function(a, b, c) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, c);
  } else {
    if (ea(a) || n(a)) {
      Fa(a, b, c);
    } else {
      var d;
      if ("function" == typeof a.S) {
        d = a.S();
      } else {
        if ("function" != typeof a.da) {
          if (ea(a) || n(a)) {
            d = [];
            for (var e = a.length, g = 0;g < e;g++) {
              d.push(g);
            }
          } else {
            d = Ra(a);
          }
        } else {
          d = void 0;
        }
      }
      for (var e = Va(a), g = e.length, h = 0;h < g;h++) {
        b.call(c, e[h], d && d[h], a);
      }
    }
  }
};
var x, Xa, Ya, Za, y = function() {
  return k.navigator ? k.navigator.userAgent : null;
};
Za = Ya = Xa = x = !1;
var z;
if (z = y()) {
  var $a = k.navigator;
  x = 0 == z.lastIndexOf("Opera", 0);
  Xa = !x && (-1 != z.indexOf("MSIE") || -1 != z.indexOf("Trident"));
  Ya = !x && -1 != z.indexOf("WebKit");
  Za = !x && !Ya && !Xa && "Gecko" == $a.product;
}
var ab = x, A = Xa, B = Za, C = Ya, bb = function() {
  var a = k.document;
  return a ? a.documentMode : void 0;
}, cb;
t: {
  var db = "", D;
  if (ab && k.opera) {
    var eb = k.opera.version, db = "function" == typeof eb ? eb() : eb
  } else {
    if (B ? D = /rv\:([^\);]+)(\)|;)/ : A ? D = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : C && (D = /WebKit\/(\S+)/), D) {
      var fb = D.exec(y()), db = fb ? fb[1] : ""
    }
  }
  if (A) {
    var gb = bb();
    if (gb > parseFloat(db)) {
      cb = String(gb);
      break t;
    }
  }
  cb = db;
}
var hb = cb, jb = {}, E = function(a) {
  return jb[a] || (jb[a] = 0 <= sa(hb, a));
}, kb = k.document, lb = kb && A ? bb() || ("CSS1Compat" == kb.compatMode ? parseInt(hb, 10) : 5) : void 0;
var nb = function(a, b) {
  try {
    var c;
    var d = ba("window.location.href");
    if (n(a)) {
      c = {message:a, name:"Unknown error", lineNumber:"Not available", fileName:d, stack:"Not available"};
    } else {
      var e, g, h = !1;
      try {
        e = a.lineNumber || a.hd || "Not available";
      } catch (l) {
        e = "Not available", h = !0;
      }
      try {
        g = a.fileName || a.filename || a.sourceURL || k.$googDebugFname || d;
      } catch (ib) {
        g = "Not available", h = !0;
      }
      c = !h && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {message:a.message || "Not available", name:a.name || "UnknownError", lineNumber:e, fileName:g, stack:a.stack || "Not available"};
    }
    return "Message: " + pa(c.message) + '\nUrl: <a href="view-source:' + c.fileName + '" target="_new">' + c.fileName + "</a>\nLine: " + c.lineNumber + "\n\nBrowser stack:\n" + pa(c.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + pa(mb(b) + "-> ");
  } catch (qa) {
    return "Exception trying to expose exception! You win, we lose. " + qa;
  }
}, mb = function(a) {
  return ob(a || arguments.callee.caller, []);
}, ob = function(a, b) {
  var c = [];
  if (0 <= Ea(b, a)) {
    c.push("[...circular reference...]");
  } else {
    if (a && 50 > b.length) {
      c.push(pb(a) + "(");
      for (var d = a.arguments, e = 0;e < d.length;e++) {
        0 < e && c.push(", ");
        var g;
        g = d[e];
        switch(typeof g) {
          case "object":
            g = g ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            g = String(g);
            break;
          case "boolean":
            g = g ? "true" : "false";
            break;
          case "function":
            g = (g = pb(g)) ? g : "[fn]";
            break;
          default:
            g = typeof g;
        }
        40 < g.length && (g = g.substr(0, 40) + "...");
        c.push(g);
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(ob(a.caller, b));
      } catch (h) {
        c.push("[exception trying to get caller]\n");
      }
    } else {
      a ? c.push("[...long stack...]") : c.push("[end]");
    }
  }
  return c.join("");
}, pb = function(a) {
  if (F[a]) {
    return F[a];
  }
  a = String(a);
  if (!F[a]) {
    var b = /function ([^\(]+)/.exec(a);
    F[a] = b ? b[1] : "[Anonymous]";
  }
  return F[a];
}, F = {};
var qb = function(a, b, c, d, e) {
  this.reset(a, b, c, d, e);
};
qb.prototype.ua = null;
qb.prototype.ta = null;
var rb = 0;
f = qb.prototype;
f.reset = function(a, b, c, d, e) {
  "number" == typeof e || rb++;
  this.yc = d || ha();
  this.s = a;
  this.wc = b;
  this.vc = c;
  delete this.ua;
  delete this.ta;
};
f.ab = function() {
  return this.vc;
};
f.lc = function() {
  return this.ua;
};
f.Hc = function(a) {
  this.ua = a;
};
f.mc = function() {
  return this.ta;
};
f.Ic = function(a) {
  this.ta = a;
};
f.qa = function() {
  return this.s;
};
f.ia = function(a) {
  this.s = a;
};
f.getMessage = function() {
  return this.wc;
};
f.bb = function() {
  return this.yc;
};
var sb = function() {
  t(!0, "Cannot use goog.debug.LogBuffer without defining goog.debug.LogBuffer.CAPACITY.");
  this.clear();
}, tb;
sb.prototype.Ec = function(a, b, c) {
  var d = (this.ob + 1) % 5E3;
  this.ob = d;
  if (this.pb) {
    return d = this.nb[d], d.reset(a, b, c), d;
  }
  this.pb = 4999 == d;
  return this.nb[d] = new qb(a, b, c);
};
sb.prototype.clear = function() {
  this.nb = Array(5E3);
  this.ob = -1;
  this.pb = !1;
};
var G = function(a) {
  this.rb = a;
};
G.prototype.ca = null;
G.prototype.s = null;
G.prototype.za = null;
G.prototype.w = null;
var H = function(a, b) {
  this.name = a;
  this.value = b;
};
H.prototype.toString = function() {
  return this.name;
};
var ub = new H("SHOUT", 1200), vb = new H("SEVERE", 1E3), wb = new H("WARNING", 900), xb = new H("INFO", 800), yb = new H("CONFIG", 700), zb = new H("FINE", 500), Ab = new H("FINER", 400);
f = G.prototype;
f.getName = function() {
  return this.rb;
};
f.Cc = function(a) {
  this.w || (this.w = []);
  this.w.push(a);
};
f.Dc = function(a) {
  var b = this.w;
  return!!b && Ia(b, a);
};
f.getParent = function() {
  return this.ca;
};
f.getChildren = function() {
  this.za || (this.za = {});
  return this.za;
};
f.ia = function(a) {
  this.s = a;
};
f.qa = function() {
  return this.s;
};
f.lb = function() {
  if (this.s) {
    return this.s;
  }
  if (this.ca) {
    return this.ca.lb();
  }
  Da("Root logger has no level set.");
  return null;
};
f.Pc = function(a) {
  return a.value >= this.lb().value;
};
f.log = function(a, b, c) {
  this.Pc(a) && ("function" == m(b) && (b = b()), this.Mc(this.Nc(a, b, c)));
};
f.Nc = function(a, b, c) {
  tb || (tb = new sb);
  var d = tb.Ec(a, b, this.rb);
  c && (d.Hc(c), d.Ic(nb(c, arguments.callee.caller)));
  return d;
};
f.Xa = function(a, b) {
  this.log(vb, a, b);
};
f.cc = function(a, b) {
  this.log(wb, a, b);
};
f.info = function(a, b) {
  this.log(xb, a, b);
};
f.config = function(a, b) {
  this.log(yb, a, b);
};
f.na = function(a, b) {
  this.log(zb, a, b);
};
f.qc = function(a, b) {
  this.log(Ab, a, b);
};
f.Mc = function(a) {
  var b = "log:" + a.getMessage();
  k.console && (k.console.timeStamp ? k.console.timeStamp(b) : k.console.markTimeline && k.console.markTimeline(b));
  k.msWriteProfilerMark && k.msWriteProfilerMark(b);
  for (b = this;b;) {
    b.Zc(a), b = b.getParent();
  }
};
f.Zc = function(a) {
  if (this.w) {
    for (var b = 0, c;c = this.w[b];b++) {
      c(a);
    }
  }
};
f.Xc = function(a) {
  this.ca = a;
};
f.Uc = function(a, b) {
  this.getChildren()[a] = b;
};
var Bb = {}, I = null, Cb = function() {
  I || (I = new G(""), Bb[""] = I, I.ia(yb));
}, Db = function() {
  Cb();
  return I;
}, J = function(a) {
  Cb();
  var b;
  if (!(b = Bb[a])) {
    b = new G(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = J(a.substr(0, c));
    c.Uc(d, b);
    b.Xc(c);
    Bb[a] = b;
  }
  return b;
};
var M = function() {
};
M.prototype.ad = !1;
M.prototype.uc = function() {
  return this.ad;
};
var Eb = function() {
  this.h = [];
  this.k = {};
};
q(Eb, M);
f = Eb.prototype;
f.hb = 1;
f.aa = 0;
f.Qc = function(a, b, c) {
  var d = this.k[a];
  d || (d = this.k[a] = []);
  var e = this.hb;
  this.h[e] = a;
  this.h[e + 1] = b;
  this.h[e + 2] = c;
  this.hb = e + 3;
  d.push(e);
  return e;
};
f.Rc = function(a, b, c) {
  if (a = this.k[a]) {
    var d = this.h;
    if (a = v(a, function(a) {
      return d[a + 1] == b && d[a + 2] == c;
    })) {
      return this.Y(a);
    }
  }
  return!1;
};
f.Y = function(a) {
  if (0 != this.aa) {
    return this.$ || (this.$ = []), this.$.push(a), !1;
  }
  var b = this.h[a];
  if (b) {
    var c = this.k[b];
    c && Ia(c, a);
    delete this.h[a];
    delete this.h[a + 1];
    delete this.h[a + 2];
  }
  return!!b;
};
f.rc = function(a, b) {
  var c = this.k[a];
  if (c) {
    this.aa++;
    for (var d = Ka(arguments, 1), e = 0, g = c.length;e < g;e++) {
      var h = c[e];
      this.h[h + 1].apply(this.h[h + 2], d);
    }
    this.aa--;
    if (this.$ && 0 == this.aa) {
      for (;c = this.$.pop();) {
        this.Y(c);
      }
    }
    return 0 != e;
  }
  return!1;
};
f.clear = function(a) {
  if (a) {
    var b = this.k[a];
    b && (Fa(b, this.Y, this), delete this.k[a]);
  } else {
    this.h.length = 0, this.k = {};
  }
};
f.ra = function(a) {
  if (a) {
    var b = this.k[a];
    return b ? b.length : 0;
  }
  a = 0;
  for (b in this.k) {
    a += this.ra(b);
  }
  return a;
};
var Fb = function(a, b, c, d) {
  this.source = a;
  this.target = b;
  this.type = c;
  this.content = d;
  this.windowUrl = null;
};
var Gb = function(a) {
  this.J = a;
  this.X = new Eb;
  this.d = J("cv.Messenger-" + a);
};
q(Gb, M);
f = Gb.prototype;
f.ga = function() {
  chrome.extension.onMessage.addListener(p(this.dd, this));
};
f.Lc = function(a, b, c, d) {
  this.d.na("Sending message to " + a + ": " + JSON.stringify(c));
  chrome.extension.sendMessage(JSON.stringify(new Fb(this.J, a, b, c)), d || ca);
};
f.Sc = function(a, b, c) {
  t("background" != this.J, "background page can NOT send message to itself");
  this.Lc("background", a, b, c);
};
f.dd = function(a, b) {
  t(n(a), "Expect a string. Got " + JSON.stringify(a));
  var c = JSON.parse(a);
  if (this.J == c.target && this.J != c.source && ("background" == this.J || "background" == c.source)) {
    var d;
    b.tab ? (d = b.tab, c.windowUrl && d.url != c.windowUrl && (d.url = c.windowUrl, d.title = "", d.favIconUrl = "")) : d = {id:-1};
    this.d.qc("Getting message from tab " + d.id + ": " + JSON.stringify(c));
    this.X.rc(c.type, d, c.content);
  }
};
f.listen = function(a, b, c) {
  return this.X.Qc(a, b, c);
};
f.tb = function(a, b, c) {
  return this.X.Rc(a, b, c);
};
f.pa = function(a) {
  return this.X.Y(a);
};
var Hb = function(a, b, c, d, e, g, h, l) {
  this.id = a;
  this.name = b;
  this.videoWidth = c;
  this.videoHeight = d;
  this.videoResolution = c + "x" + d;
  this.minVideoBitrate = e;
  this.maxVideoBitrate = g;
  this.videoQuality = h;
  this.audioBitrate = l;
}, Ib = new Hb("high", "High (720p)", 1280, 720, 2E3, 2500, 56, 128), Jb = [new Hb("highest", "Extreme (720p high bitrate)", 1280, 720, 4E3, 5E3, 56, 128), Ib, new Hb("low", "Standard (480p)", 854, 480, 750, 1500, 56, 128)];
var Kb = function(a, b) {
  this.type = a;
  this.message = b;
}, Lb = function(a, b) {
  this.id = a;
  this.isDefaultAction = b;
}, Mb = function(a, b, c, d) {
  this.captureSurface = a || "tab";
  this.lowFpsMode = b || !1;
  this.castAppNotificationDismissed = c || !1;
  this.mirrorQualityId = d || Ib.id;
}, Nb = function(a, b, c, d, e, g) {
  this.receiverActs = a || [];
  this.issue = b;
  this.isV1AppInTab = e || !1;
  this.isV2AppInTab = !!g;
  this.v2AppDomain = g || null;
  this.castOfCurrentTab = c;
  this.settings = d || new Mb("tab");
};
var N = function(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.t = !1;
  this.$a = !0;
};
N.prototype.stopPropagation = function() {
  this.t = !0;
};
N.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.$a = !1;
};
var Ob = function(a) {
  Ob[" "](a);
  return a;
};
Ob[" "] = ca;
var Pb = !A || A && 9 <= lb, Qb = A && !E("9");
!C || E("528");
B && E("1.9b") || A && E("8") || ab && E("9.5") || C && E("528");
B && !E("8") || A && E("9");
var O = function(a, b) {
  N.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.L = this.state = null;
  a && this.ga(a, b);
};
q(O, N);
O.prototype.ga = function(a, b) {
  var c = this.type = a.type;
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if (d) {
    if (B) {
      var e;
      t: {
        try {
          Ob(d.nodeName);
          e = !0;
          break t;
        } catch (g) {
        }
        e = !1;
      }
      e || (d = null);
    }
  } else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
  }
  this.relatedTarget = d;
  this.offsetX = C || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = C || void 0 !== a.offsetY ? a.offsetY : a.layerY;
  this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
  this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.state = a.state;
  this.L = a;
  a.defaultPrevented && this.preventDefault();
};
O.prototype.stopPropagation = function() {
  O.qb.stopPropagation.call(this);
  this.L.stopPropagation ? this.L.stopPropagation() : this.L.cancelBubble = !0;
};
O.prototype.preventDefault = function() {
  O.qb.preventDefault.call(this);
  var a = this.L;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, Qb) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
var Rb = "closure_listenable_" + (1E6 * Math.random() | 0), Sb = function(a) {
  try {
    return!(!a || !a[Rb]);
  } catch (b) {
    return!1;
  }
}, Tb = 0;
var Ub = function(a, b, c, d, e, g) {
  this.r = a;
  this.proxy = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.W = g;
  this.key = ++Tb;
  this.removed = this.V = !1;
};
Ub.prototype.Z = function() {
  this.removed = !0;
  this.W = this.src = this.proxy = this.r = null;
};
var Vb = function(a) {
  this.src = a;
  this.f = {};
  this.K = 0;
};
f = Vb.prototype;
f.Ac = function() {
  return this.K;
};
f.add = function(a, b, c, d, e) {
  var g = this.f[a];
  g || (g = this.f[a] = [], this.K++);
  var h = Wb(g, b, d, e);
  -1 < h ? (a = g[h], c || (a.V = !1)) : (a = new Ub(b, null, this.src, a, !!d, e), a.V = c, g.push(a));
  return a;
};
f.remove = function(a, b, c, d) {
  if (!(a in this.f)) {
    return!1;
  }
  var e = this.f[a];
  b = Wb(e, b, c, d);
  return-1 < b ? (e[b].Z(), Ha(e, b), 0 == e.length && (delete this.f[a], this.K--), !0) : !1;
};
f.jb = function(a) {
  var b = a.type;
  if (!(b in this.f)) {
    return!1;
  }
  var c = Ia(this.f[b], a);
  c && (a.Z(), 0 == this.f[b].length && (delete this.f[b], this.K--));
  return c;
};
f.removeAll = function(a) {
  var b = 0, c;
  for (c in this.f) {
    if (!a || c == a) {
      for (var d = this.f[c], e = 0;e < d.length;e++) {
        ++b, d[e].Z();
      }
      delete this.f[c];
      this.K--;
    }
  }
  return b;
};
f.va = function(a, b, c, d) {
  a = this.f[a];
  var e = -1;
  a && (e = Wb(a, b, c, d));
  return-1 < e ? a[e] : null;
};
f.hasListener = function(a, b) {
  var c = void 0 !== a, d = void 0 !== b;
  return Pa(this.f, function(e) {
    for (var g = 0;g < e.length;++g) {
      if (!(c && e[g].type != a || d && e[g].capture != b)) {
        return!0;
      }
    }
    return!1;
  });
};
var Wb = function(a, b, c, d) {
  for (var e = 0;e < a.length;++e) {
    var g = a[e];
    if (!g.removed && g.r == b && g.capture == !!c && g.W == d) {
      return e;
    }
  }
  return-1;
};
var Xb = "closure_lm_" + (1E6 * Math.random() | 0), P = {}, Yb = 0, Zb = function(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var g = 0;g < b.length;g++) {
      Zb(a, b[g], c, d, e);
    }
    return null;
  }
  c = $b(c);
  return Sb(a) ? a.listen(b, c, d, e) : ac(a, b, c, !1, d, e);
}, ac = function(a, b, c, d, e, g) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var h = !!e, l = cc(a);
  l || (a[Xb] = l = new Vb(a));
  c = l.add(b, c, d, e, g);
  if (c.proxy) {
    return c;
  }
  d = dc();
  c.proxy = d;
  d.src = a;
  d.r = c;
  a.addEventListener ? a.addEventListener(b, d, h) : a.attachEvent(b in P ? P[b] : P[b] = "on" + b, d);
  Yb++;
  return c;
}, dc = function() {
  var a = ec, b = Pb ? function(c) {
    return a.call(b.src, b.r, c);
  } : function(c) {
    c = a.call(b.src, b.r, c);
    if (!c) {
      return c;
    }
  };
  return b;
}, fc = function(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var g = 0;g < b.length;g++) {
      fc(a, b[g], c, d, e);
    }
    return null;
  }
  c = $b(c);
  return Sb(a) ? a.cd(b, c, d, e) : ac(a, b, c, !0, d, e);
}, gc = function(a, b, c, d, e) {
  if ("array" == m(b)) {
    for (var g = 0;g < b.length;g++) {
      gc(a, b[g], c, d, e);
    }
    return null;
  }
  c = $b(c);
  if (Sb(a)) {
    return a.tb(b, c, d, e);
  }
  if (!a) {
    return!1;
  }
  if (a = cc(a)) {
    if (b = a.va(b, c, !!d, e)) {
      return hc(b);
    }
  }
  return!1;
}, hc = function(a) {
  if ("number" == typeof a || !a || a.removed) {
    return!1;
  }
  var b = a.src;
  if (Sb(b)) {
    return b.pa(a);
  }
  var c = a.type, d = a.proxy;
  b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(c in P ? P[c] : P[c] = "on" + c, d);
  Yb--;
  (c = cc(b)) ? (c.jb(a), 0 == c.Ac() && (c.src = null, b[Xb] = null)) : a.Z();
  return!0;
}, jc = function(a, b, c, d) {
  var e = 1;
  if (a = cc(a)) {
    if (b = a.f[b]) {
      for (b = Ja(b), a = 0;a < b.length;a++) {
        var g = b[a];
        g && g.capture == c && !g.removed && (e &= !1 !== ic(g, d));
      }
    }
  }
  return Boolean(e);
}, ic = function(a, b) {
  var c = a.r, d = a.W || a.src;
  a.V && hc(a);
  return c.call(d, b);
}, ec = function(a, b) {
  if (a.removed) {
    return!0;
  }
  if (!Pb) {
    var c = b || ba("window.event"), d = new O(c, this), e = !0;
    if (!(0 > c.keyCode || void 0 != c.returnValue)) {
      t: {
        var g = !1;
        if (0 == c.keyCode) {
          try {
            c.keyCode = -1;
            break t;
          } catch (h) {
            g = !0;
          }
        }
        if (g || void 0 == c.returnValue) {
          c.returnValue = !0;
        }
      }
      c = [];
      for (g = d.currentTarget;g;g = g.parentNode) {
        c.push(g);
      }
      for (var g = a.type, l = c.length - 1;!d.t && 0 <= l;l--) {
        d.currentTarget = c[l], e &= jc(c[l], g, !0, d);
      }
      for (l = 0;!d.t && l < c.length;l++) {
        d.currentTarget = c[l], e &= jc(c[l], g, !1, d);
      }
    }
    return e;
  }
  return ic(a, new O(b, this));
}, cc = function(a) {
  a = a[Xb];
  return a instanceof Vb ? a : null;
}, kc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0), $b = function(a) {
  t(a, "Listener can not be null.");
  if ("function" == m(a)) {
    return a;
  }
  t(a.handleEvent, "An object listener must have handleEvent method.");
  return a[kc] || (a[kc] = function(b) {
    return a.handleEvent(b);
  });
};
var Q = function() {
  this.p = new Vb(this);
  this.sc = this;
};
q(Q, M);
Q.prototype[Rb] = !0;
f = Q.prototype;
f.ed = null;
f.kb = function() {
  return this.ed;
};
f.addEventListener = function(a, b, c, d) {
  Zb(this, a, b, c, d);
};
f.removeEventListener = function(a, b, c, d) {
  gc(this, a, b, c, d);
};
f.dispatchEvent = function(a) {
  this.gb();
  var b, c = this.kb();
  if (c) {
    b = [];
    for (var d = 1;c;c = c.kb()) {
      b.push(c), t(1E3 > ++d, "infinite loop");
    }
  }
  c = this.sc;
  d = a.type || a;
  if (n(a)) {
    a = new N(a, c);
  } else {
    if (a instanceof N) {
      a.target = a.target || c;
    } else {
      var e = a;
      a = new N(d, c);
      Ta(a, e);
    }
  }
  var e = !0, g;
  if (b) {
    for (var h = b.length - 1;!a.t && 0 <= h;h--) {
      g = a.currentTarget = b[h], e = g.ba(d, !0, a) && e;
    }
  }
  a.t || (g = a.currentTarget = c, e = g.ba(d, !0, a) && e, a.t || (e = g.ba(d, !1, a) && e));
  if (b) {
    for (h = 0;!a.t && h < b.length;h++) {
      g = a.currentTarget = b[h], e = g.ba(d, !1, a) && e;
    }
  }
  return e;
};
f.listen = function(a, b, c, d) {
  this.gb();
  return this.p.add(String(a), b, !1, c, d);
};
f.cd = function(a, b, c, d) {
  return this.p.add(String(a), b, !0, c, d);
};
f.tb = function(a, b, c, d) {
  return this.p.remove(String(a), b, c, d);
};
f.pa = function(a) {
  return this.p.jb(a);
};
f.ba = function(a, b, c) {
  a = this.p.f[String(a)];
  if (!a) {
    return!0;
  }
  a = Ja(a);
  for (var d = !0, e = 0;e < a.length;++e) {
    var g = a[e];
    if (g && !g.removed && g.capture == b) {
      var h = g.r, l = g.W || g.src;
      g.V && this.pa(g);
      d = !1 !== h.call(l, c) && d;
    }
  }
  return d && !1 != c.$a;
};
f.va = function(a, b, c, d) {
  return this.p.va(String(a), b, c, d);
};
f.hasListener = function(a, b) {
  return this.p.hasListener(void 0 !== a ? String(a) : void 0, b);
};
f.gb = function() {
  t(this.p, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
};
var lc = function(a, b, c) {
  if ("function" == m(a)) {
    c && (a = p(a, c));
  } else {
    if (a && "function" == typeof a.handleEvent) {
      a = p(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : k.setTimeout(a, b || 0);
};
var mc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), nc = C, oc = function(a, b) {
  if (nc) {
    nc = !1;
    var c = k.location;
    if (c) {
      var d = c.href;
      if (d && (d = (d = oc(3, d)) && decodeURIComponent(d)) && d != c.hostname) {
        throw nc = !0, Error();
      }
    }
  }
  return b.match(mc)[a] || null;
};
var pc = J("cv.TabUtils"), qc = null, rc = function(a) {
  a != chrome.windows.WINDOW_ID_NONE && (pc.info("Newly focused window ID: " + a), qc = a);
}, sc = function() {
  chrome.windows.getLastFocused(function(a) {
    qc || (qc = a.id);
  });
  chrome.windows.onFocusChanged.addListener(rc);
}, uc = function(a, b) {
  chrome.tabs.get(a, function(a) {
    tc(a, b);
  });
}, tc = function(a, b) {
  if (a) {
    var c = a.id;
    chrome.windows.update(a.windowId, {focused:!0}, function() {
      chrome.tabs.update(c, {active:!0}, b);
    });
  } else {
    b(null);
  }
}, vc = function(a, b, c) {
  chrome.tabs.query({url:a}, function(a) {
    a && 0 < a.length ? tc(a[0], c) : chrome.tabs.create({url:b}, c);
  });
};
var R = function() {
};
R.prototype.getMessage = function(a, b) {
  return this.bd(a, b).message;
};
R.prototype.bd = function(a, b) {
  for (var c = [], d = {}, e = /{{(\w+?)}}/g, g = e.exec(a);null != g;) {
    b ? b[g[1]] && (d[g[1]] = b[g[1]]) : d[g[1]] = d[g[1]], g = e.exec(a);
  }
  for (var h in d) {
    h && (b && (a = a.replace(RegExp("{{" + h + "}}", "g"), d[h])), c.push(h));
  }
  return{message:a, bindings:c};
};
da(R);
var wc = function() {
  this.zb = ha();
}, xc = new wc;
wc.prototype.set = function(a) {
  this.zb = a;
};
wc.prototype.reset = function() {
  this.set(ha());
};
wc.prototype.get = function() {
  return this.zb;
};
var yc = function(a) {
  this.hc = a || "";
  this.ic = xc;
};
f = yc.prototype;
f.jc = !0;
f.Ya = !0;
f.oc = !0;
f.nc = !0;
f.Za = !1;
f.pc = !1;
var S = function(a) {
  return 10 > a ? "0" + a : String(a);
}, zc = function(a, b) {
  var c = (a.bb() - b) / 1E3, d = c.toFixed(3), e = 0;
  if (1 > c) {
    e = 2;
  } else {
    for (;100 > c;) {
      e++, c *= 10;
    }
  }
  for (;0 < e--;) {
    d = " " + d;
  }
  return d;
}, Ac = function(a) {
  yc.call(this, a);
};
q(Ac, yc);
Ac.prototype.zc = function(a) {
  var b = [];
  b.push(this.hc, " ");
  if (this.Ya) {
    var c = new Date(a.bb());
    b.push("[", S(c.getFullYear() - 2E3) + S(c.getMonth() + 1) + S(c.getDate()) + " " + S(c.getHours()) + ":" + S(c.getMinutes()) + ":" + S(c.getSeconds()) + "." + S(Math.floor(c.getMilliseconds() / 10)), "] ");
  }
  this.oc && b.push("[", zc(a, this.ic.get()), "s] ");
  this.nc && b.push("[", a.ab(), "] ");
  this.pc && b.push("[", a.qa().name, "] ");
  b.push(a.getMessage());
  this.Za && a.lc() && b.push("\n", a.mc());
  this.jc && b.push("\n");
  return b.join("");
};
var Bc = function() {
  this.fb = p(this.tc, this);
  this.sa = new Ac;
  this.sa.Ya = !1;
  this.eb = this.sa.Za = !1;
  this.cb = "";
  this.kc = {};
};
Bc.prototype.Bb = function(a) {
  if (a != this.eb) {
    var b = Db();
    a ? b.Cc(this.fb) : b.Dc(this.fb);
    this.eb = a;
  }
};
Bc.prototype.tc = function(a) {
  if (!this.kc[a.ab()]) {
    var b = this.sa.zc(a), c = Cc;
    if (c) {
      switch(a.qa()) {
        case ub:
          Dc(c, "info", b);
          break;
        case vb:
          Dc(c, "error", b);
          break;
        case wb:
          Dc(c, "warn", b);
          break;
        default:
          Dc(c, "debug", b);
      }
    } else {
      window.opera ? window.opera.postError(b) : this.cb += b;
    }
  }
};
var Cc = window.console, Dc = function(a, b, c) {
  if (a[b]) {
    a[b](c);
  } else {
    a.log(c);
  }
};
!B && !A || A && A && 9 <= lb || B && E("1.9.1");
A && E("9");
var T = function(a, b, c) {
  a && a.na(b, c);
};
var Ec = function() {
};
Ec.prototype.vb = null;
Ec.prototype.Pa = function() {
  return this.vb || (this.vb = this.Tc());
};
var Fc, U = function() {
};
q(U, Ec);
U.prototype.sb = function() {
  var a = this.wb();
  return a ? new ActiveXObject(a) : new XMLHttpRequest;
};
U.prototype.Tc = function() {
  var a = {};
  this.wb() && (a[0] = !0, a[1] = !0);
  return a;
};
U.prototype.wb = function() {
  if (!this.xb && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        return new ActiveXObject(c), this.xb = c;
      } catch (d) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return this.xb;
};
Fc = new U;
var V = function(a) {
  Q.call(this);
  this.headers = new w;
  this.P = a || null;
  this.u = !1;
  this.N = this.c = null;
  this.C = this.Ja = this.O = "";
  this.F = this.ja = this.M = this.ka = !1;
  this.v = 0;
  this.Q = null;
  this.D = "";
  this.R = this.Nb = !1;
};
q(V, Q);
var Gc = V.prototype, Hc = J("goog.net.XhrIo");
Gc.d = Hc;
var Ic = /^https?$/i, Jc = ["POST", "PUT"];
V.prototype.Kc = function(a) {
  this.v = Math.max(0, a);
};
V.prototype.Jc = function(a) {
  this.D = a;
};
V.prototype.send = function(a, b, c, d) {
  if (this.c) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.O + "; newUri=" + a);
  }
  b = b ? b.toUpperCase() : "GET";
  this.O = a;
  this.C = "";
  this.Ja = b;
  this.ka = !1;
  this.u = !0;
  this.c = this.Ob();
  this.N = this.P ? this.P.Pa() : Fc.Pa();
  this.c.onreadystatechange = p(this.Ga, this);
  try {
    T(this.d, this.m("Opening Xhr")), this.ja = !0, this.c.open(b, String(a), !0), this.ja = !1;
  } catch (e) {
    T(this.d, this.m("Error opening Xhr: " + e.message));
    this.Oa(5, e);
    return;
  }
  a = c || "";
  var g = this.headers.clone();
  d && Wa(d, function(a, b) {
    g.set(b, a);
  });
  d = v(g.S(), Kc);
  c = k.FormData && a instanceof k.FormData;
  !(0 <= Ea(Jc, b)) || d || c || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Wa(g, function(a, b) {
    this.c.setRequestHeader(b, a);
  }, this);
  this.D && (this.c.responseType = this.D);
  "withCredentials" in this.c && (this.c.withCredentials = this.Nb);
  try {
    this.Ma(), 0 < this.v && (this.R = Lc(this.c), T(this.d, this.m("Will abort after " + this.v + "ms if incomplete, xhr2 " + this.R)), this.R ? (this.c.timeout = this.v, this.c.ontimeout = p(this.Qa, this)) : this.Q = lc(this.Qa, this.v, this)), T(this.d, this.m("Sending request")), this.M = !0, this.c.send(a), this.M = !1;
  } catch (h) {
    T(this.d, this.m("Send error: " + h.message)), this.Oa(5, h);
  }
};
var Lc = function(a) {
  return A && E(9) && "number" == typeof a.timeout && void 0 !== a.ontimeout;
}, Kc = function(a) {
  return "content-type" == a.toLowerCase();
};
f = V.prototype;
f.Ob = function() {
  return this.P ? this.P.sb() : Fc.sb();
};
f.Qa = function() {
  "undefined" != typeof aa && this.c && (this.C = "Timed out after " + this.v + "ms, aborting", T(this.d, this.m(this.C)), this.dispatchEvent("timeout"), this.abort(8));
};
f.Oa = function(a, b) {
  this.u = !1;
  this.c && (this.F = !0, this.c.abort(), this.F = !1);
  this.C = b;
  this.Ta();
  this.ma();
};
f.Ta = function() {
  this.ka || (this.ka = !0, this.dispatchEvent("complete"), this.dispatchEvent("error"));
};
f.abort = function() {
  this.c && this.u && (T(this.d, this.m("Aborting")), this.u = !1, this.F = !0, this.c.abort(), this.F = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), this.ma());
};
f.Ga = function() {
  this.uc() || (this.ja || this.M || this.F ? this.ib() : this.xc());
};
f.xc = function() {
  this.ib();
};
f.ib = function() {
  if (this.u && "undefined" != typeof aa) {
    if (this.N[1] && 4 == this.G() && 2 == this.T()) {
      T(this.d, this.m("Local request error detected and ignored"));
    } else {
      if (this.M && 4 == this.G()) {
        lc(this.Ga, 0, this);
      } else {
        if (this.dispatchEvent("readystatechange"), this.oa()) {
          T(this.d, this.m("Request complete"));
          this.u = !1;
          try {
            this.Va() ? (this.dispatchEvent("complete"), this.dispatchEvent("success")) : (this.C = this.bc() + " [" + this.T() + "]", this.Ta());
          } finally {
            this.ma();
          }
        }
      }
    }
  }
};
f.ma = function(a) {
  if (this.c) {
    this.Ma();
    var b = this.c, c = this.N[0] ? ca : null;
    this.N = this.c = null;
    a || this.dispatchEvent("ready");
    try {
      b.onreadystatechange = c;
    } catch (d) {
      (a = this.d) && a.Xa("Problem encountered resetting onreadystatechange: " + d.message, void 0);
    }
  }
};
f.Ma = function() {
  this.c && this.R && (this.c.ontimeout = null);
  "number" == typeof this.Q && (k.clearTimeout(this.Q), this.Q = null);
};
f.oa = function() {
  return 4 == this.G();
};
f.Va = function() {
  var a = this.T(), b;
  t: {
    switch(a) {
      case 200:
      ;
      case 201:
      ;
      case 202:
      ;
      case 204:
      ;
      case 206:
      ;
      case 304:
      ;
      case 1223:
        b = !0;
        break t;
      default:
        b = !1;
    }
  }
  return b || 0 === a && !this.Oc();
};
f.Oc = function() {
  var a = oc(1, String(this.O));
  !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1));
  return Ic.test(a ? a.toLowerCase() : "");
};
f.G = function() {
  return this.c ? this.c.readyState : 0;
};
f.T = function() {
  try {
    return 2 < this.G() ? this.c.status : -1;
  } catch (a) {
    var b = this.d;
    b && b.cc("Can not get status: " + a.message, void 0);
    return-1;
  }
};
f.bc = function() {
  try {
    return 2 < this.G() ? this.c.statusText : "";
  } catch (a) {
    return T(this.d, "Can not get status: " + a.message), "";
  }
};
f.Gc = function() {
  try {
    if (!this.c) {
      return null;
    }
    if ("response" in this.c) {
      return this.c.response;
    }
    switch(this.D) {
      case "":
      ;
      case "text":
        return this.c.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in this.c) {
          return this.c.mozResponseArrayBuffer;
        }
      ;
    }
    var a = this.d;
    a && a.Xa("Response type " + this.D + " is not supported on this browser", void 0);
    return null;
  } catch (b) {
    return T(this.d, "Can not get response: " + b.message), null;
  }
};
f.getResponseHeader = function(a) {
  return this.c && this.oa() ? this.c.getResponseHeader(a) : void 0;
};
f.getAllResponseHeaders = function() {
  return this.c && this.oa() ? this.c.getAllResponseHeaders() : "";
};
f.m = function(a) {
  return a + " [" + this.Ja + " " + this.O + " " + this.T() + "]";
};
var Mc, Nc, Oc, Pc, Qc, Rc, Sc;
Sc = Rc = Qc = Pc = Oc = Nc = Mc = !1;
var W = y();
W && (-1 != W.indexOf("Firefox") ? Mc = !0 : -1 != W.indexOf("Camino") ? Nc = !0 : -1 != W.indexOf("iPhone") || -1 != W.indexOf("iPod") ? Oc = !0 : -1 != W.indexOf("iPad") ? Pc = !0 : -1 != W.indexOf("Chrome") ? Rc = !0 : -1 != W.indexOf("Android") ? Qc = !0 : -1 != W.indexOf("Safari") && (Sc = !0));
var Tc = Mc, Uc = Nc, Vc = Oc, Wc = Pc, Xc = Qc, Yc = Rc, Zc = Sc;
var X = function(a) {
  return(a = a.exec(y())) ? a[1] : "";
}, $c = function() {
  if (Tc) {
    return X(/Firefox\/([0-9.]+)/);
  }
  if (A || ab) {
    return hb;
  }
  if (Yc) {
    return X(/Chrome\/([0-9.]+)/);
  }
  if (Zc) {
    return X(/Version\/([0-9.]+)/);
  }
  if (Vc || Wc) {
    var a;
    if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(y())) {
      return a[1] + "." + a[2];
    }
  } else {
    if (Xc) {
      return(a = X(/Android\s+([0-9.]+)/)) ? a : X(/Version\/([0-9.]+)/);
    }
    if (Uc) {
      return X(/Camino\/([0-9.]+)/);
    }
  }
  return "";
}();
var ad = chrome.i18n.getMessage("4014224501758376361", ["{{receiverName}}"]), bd = chrome.i18n.getMessage("6046507125919556913"), cd = chrome.i18n.getMessage("1189144544819350763"), dd = chrome.i18n.getMessage("3430817026795535765"), ed = chrome.i18n.getMessage("5056298333685549098", ["{{v2AppDomain}}"]), fd = chrome.i18n.getMessage("3278102219211539720"), gd = chrome.i18n.getMessage("7484752158248863804"), hd = chrome.i18n.getMessage("1717149362663359343", ["{{v2AppDomain}}"]);
chrome.i18n.getMessage("4089994756445820175");
chrome.i18n.getMessage("780135806192376347");
chrome.i18n.getMessage("2438859709710567679");
chrome.i18n.getMessage("2076488708707463944");
chrome.i18n.getMessage("3996247341169314250");
chrome.i18n.getMessage("7053128562708856478");
chrome.i18n.getMessage("8500110749168055241");
chrome.i18n.getMessage("3844709005265884931");
chrome.i18n.getMessage("4224760847878375792");
chrome.i18n.getMessage("4584454172263179470");
chrome.i18n.getMessage("5823878688587296398");
chrome.i18n.getMessage("7008828272760191653");
chrome.i18n.getMessage("2377419936291389581");
chrome.i18n.getMessage("4324962226715124466");
chrome.i18n.getMessage("6039331491778328245");
chrome.i18n.getMessage("8887833628383960193");
chrome.i18n.getMessage("6118473811359442709");
chrome.i18n.getMessage("4272010402571776761");
chrome.i18n.getMessage("482442943064110817");
chrome.i18n.getMessage("5745355507138230213");
chrome.i18n.getMessage("7029426286291560071");
chrome.i18n.getMessage("8189622236075700665");
chrome.i18n.getMessage("6018881802001125637");
chrome.i18n.getMessage("4865676252029097872");
chrome.i18n.getMessage("6988652234001902672");
chrome.i18n.getMessage("6295154563386647404", ["{{attemptNumber}}"]);
angular.module("popupMenu", ["ngSanitize", "chrome_i18n"]);
var id = function(a, b, c) {
  this.i = R.Aa();
  this.activity = a;
  this.q = !!this.activity.mediaPlayerStatus;
  this.U = this.activity.mediaPlayerStatus;
  this.Fa = this.q && null != this.U.hasPause && this.U.hasPause;
  this.Lb = this.q && this.U.timeProgress ? "/data/pause.png" : "/data/play.png";
  this.Kb = (this.Ea = this.q) && this.U.muted ? "/data/mute.png" : "/data/unmute.png";
  this.Da = "mirror_tab" == this.activity.activityType && this.activity.isLocal;
  this.Jb = "/data/mirror_quality.png";
  this.fa = "none" != b;
  this.Ib = this.ec(b, c);
  this.Hb = this.dc();
  this.Mb = this.i.getMessage(gd);
};
id.prototype.ec = function(a, b) {
  switch(a) {
    case "create_session":
      return t(null != b), this.i.getMessage(hd, {v2AppDomain:b});
    case "cast_this_tab":
      return this.i.getMessage(fd);
    case "cast_desktop":
      return this.i.getMessage(dd);
    default:
      return "";
  }
};
id.prototype.dc = function() {
  var a = this.Fa + this.Ea + this.Da, b = 1 + this.fa;
  return 2 == a && 2 == b ? ["button", "large1"] : 1 == a && 2 == b ? ["button", "large2"] : 0 == a && 2 == b ? ["button", "large3"] : 2 == a && 1 == b ? ["button", "large4"] : ["button"];
};
var jd = function(a) {
  var b = new Bc;
  Db().ia(zb);
  b.Bb(!0);
  this.d = J("cv.PopupMenu");
  this.b = new Nb([], null, null, null, !1, null);
  this.g = null;
  this.a = a;
  this.ha = new Gb("popup");
  this.A = null;
  this.i = R.Aa();
  a.init = !0;
  a.onClickLearnCastEnabledPage = p(this.Ca, this, "http://support.google.com/chromecast/go/castenabledpage");
  a.mirrorQualities = Jb;
  sc();
  this.Eb();
  this.Gb();
  this.Cb();
  this.Fb();
  this.Db();
  this.Ba();
  this.ea();
  this.ha.ga();
  this.ha.listen("event_to_popup", this.Ab, this);
  this.n("init", {});
}, Y = ["PopupMenuCtrl"], Z = k;
Y[0] in Z || !Z.execScript || Z.execScript("var " + Y[0]);
for (var $;Y.length && ($ = Y.shift());) {
  Y.length || void 0 === jd ? Z = Z[$] ? Z[$] : Z[$] = {} : Z[$] = jd;
}
jd.$inject = ["$scope"];
f = jd.prototype;
f.l = function(a) {
  this.a.component = a;
};
f.ea = function() {
  this.b.issue && "fatal" == this.b.issue.severity ? this.l("issue_notifier") : this.A ? this.l("waiting") : this.a.selectedActivity ? this.l("activity_control") : this.b.isV1AppInTab && !this.b.settings.castAppNotificationDismissed ? this.l("cast_app_notification") : this.l("receiver_picker");
};
f.Eb = function() {
  this.a.dismissCastAppNotification = p(function() {
    this.b.settings.castAppNotificationDismissed = !0;
    this.la();
    this.ea();
  }, this);
};
f.Gb = function() {
  this.Ka();
  this.a.onClickReceiver = p(this.Xb, this);
  this.a.onClickDeviceMissing = p(this.Ca, this, "http://support.google.com/chromecast/go/nodevices");
  this.a.sendFeedback = p(this.Yb, this);
  this.a.showOptions = p(this.$b, this);
  this.a.showHelp = p(this.Zb, this);
  this.a.disableProjectScreen = (1920 < window.screen.width * window.devicePixelRatio || 1080 < window.screen.height * window.devicePixelRatio) && !(0 <= sa($c, 29));
};
f.Ca = function(a) {
  vc("http://support.google.com/chromecast/go*", a, function() {
    window.close();
  });
};
f.Cb = function() {
  this.B();
  this.a.changeDevice = p(function() {
    this.l("receiver_picker");
  }, this);
  this.a.showOriginalTab = p(this.Sb, this);
  this.a.doCastAction = p(function() {
    this.g.fa && this.a.selectedActivity && this.La(this.a.selectedActivity.receiver);
  }, this);
  this.a.playOrPause = p(function() {
    this.g.q && this.Rb();
  }, this);
  this.a.muteOrUmute = p(function() {
    this.g.q && this.Qb();
  }, this);
  this.a.stopActivity = p(this.Tb, this);
};
f.Fb = function() {
  this.Ra();
  this.a.actOnIssueWithOptAct = p(this.Wa, this, !1);
  this.a.actOnIssueWithDefaultAct = p(this.Wa, this, !0);
};
f.Db = function() {
  this.Na();
  this.a.sharedState = this.a.sharedState || {};
  this.a.sharedState.selectingCaptureSurface = !1;
  this.a.updateSettings = p(this.la, this);
  this.a.toggleAudioIfTab = p(this.ac, this);
};
f.ac = function() {
  "tab" == this.b.settings.captureSurface && (this.a.settings.lowFpsMode = !this.a.settings.lowFpsMode, this.la(), this.a.sharedState.selectingCaptureSurface = !1);
};
f.la = function() {
  this.b.settings.captureSurface = this.a.settings.captureSurface;
  this.b.settings.lowFpsMode = this.a.settings.lowFpsMode;
  this.b.settings.mirrorQualityId = this.a.settings.mirrorQualityId;
  this.Sa();
  this.n("update_settings", this.b.settings);
};
f.Na = function() {
  this.a.settings = this.b.settings;
};
f.Ba = function() {
  this.a.waitingTitle = this.A ? this.i.getMessage(ad, {receiverName:this.A.receiver.name}) : "";
};
f.Ka = function() {
  Ma(this.b.receiverActs, function(a, b) {
    return a.receiver.name.localeCompare(b.receiver.name);
  });
  this.a.receiverActs = this.b.receiverActs;
  this.a.v2AppDomain = this.b.v2AppDomain;
  this.Sa();
};
f.Sa = function() {
  var a = null, a = this.b.v2AppDomain && Ba ? this.i.getMessage(ed, this.a) : "tab" == this.b.settings.captureSurface ? this.b.settings.lowFpsMode ? cd : this.i.getMessage(bd, this.a) : this.i.getMessage(dd);
  t(null != a);
  this.a.receiverListTitle = a;
};
f.gc = function() {
  return!!this.b.castOfCurrentTab && "mirror_tab" == this.b.castOfCurrentTab.activityType && this.b.castOfCurrentTab.isLocal;
};
f.Ia = function() {
  return this.b.isV2AppInTab && Ba || this.b.castOfCurrentTab || "tab" != this.b.settings.captureSurface ? Ba && this.b.isV2AppInTab && (!this.b.castOfCurrentTab || this.gc()) ? "create_session" : "desktop" == this.b.settings.captureSurface ? "cast_desktop" : "none" : "cast_this_tab";
};
f.B = function() {
  this.a.selectedActivity && (this.g = new id(this.a.selectedActivity, this.Ia(), this.b.v2AppDomain), this.a.enableMediaControls = this.g.q, this.a.showPlayPause = this.g.Fa, this.a.playPauseIcon = this.g.Lb, this.a.showMuteUnmute = this.g.Ea, this.a.muteUnmuteIcon = this.g.Kb, this.a.showMirrorQuality = this.g.Da, this.a.mirrorQualityIcon = this.g.Jb, this.a.showCastAction = this.g.fa, this.a.castActionLabel = this.g.Ib, this.a.actionClass = this.g.Hb, this.a.stopLabel = this.g.Mb, this.a.sharedState = 
  this.a.sharedState || {}, this.a.sharedState.selectingMirrorQuality = !1);
};
f.Sb = function() {
  var a = this.a.selectedActivity;
  !a || !a.tabId || 0 > a.tabId || uc(a.tabId, function(a) {
    a && window.close();
  });
};
f.Ra = function() {
  this.b.issue && (null == this.b.issue.activityId || this.a.selectedActivity && this.b.issue.activityId == this.a.selectedActivity.id) ? (this.a.issueTitle = this.b.issue.title, this.a.issueMessage = this.b.issue.message, this.a.issueOptActText = this.b.issue.optActionText, this.a.issueDefaultActText = this.b.issue.defaultActionText, this.a.showIssueOptActButton = 0 < this.b.issue.optActionText.length) : (this.a.issueTitle = "", this.a.issueMessage = "", this.a.issueOptActText = "", this.a.issueDefaultActText = 
  "", this.a.showIssueOptActButton = !1);
};
f.n = function(a, b) {
  var c = new Kb(a, b);
  this.ha.Sc("popup_menu_request", c);
  return c;
};
f.Wa = function(a) {
  this.b.issue && (a = new Lb(this.b.issue.id, a), this.d.info("Act on issue " + JSON.stringify(this.b.issue)), this.n("act_on_issue", a));
};
f.La = function(a) {
  switch(this.Ia()) {
    case "cast_this_tab":
      this.wa(a);
      this.mb(a, "tab");
      break;
    case "cast_desktop":
      this.wa(a);
      this.mb(a, "desktop");
      break;
    case "create_session":
      this.wa(a), this.Bc(a);
  }
};
f.Ua = function(a, b) {
  return{activityId:a, data:b};
};
f.Rb = function() {
  var a = this.a.selectedActivity;
  a && a.mediaPlayerStatus && (this.n(a.mediaPlayerStatus.timeProgress ? "pause_media" : "play_media", this.Ua(a.id, {})), a.mediaPlayerStatus.timeProgress = !a.mediaPlayerStatus.timeProgress, this.B());
};
f.Qb = function() {
  var a = this.a.selectedActivity;
  a && a.mediaPlayerStatus && (this.n("set_mute", this.Ua(a.id, {muted:!a.mediaPlayerStatus.muted})), a.mediaPlayerStatus.muted = !a.mediaPlayerStatus.muted, this.B());
};
f.Tb = function() {
  var a = this.a.selectedActivity;
  a && (this.d.info("Stop activity"), this.d.na("....activity was: " + JSON.stringify(a)), this.n("stop_activity", a.id), this.a.selectedActivity = null, this.l("receiver_picker"));
};
f.Xb = function(a) {
  this.A ? this.d.info("There is an activity in launch; cannot launch another activity") : a.activity ? (this.a.selectedActivity = a.activity, this.Ha(), this.B(), this.l("activity_control")) : this.La(a.receiver);
};
f.wa = function(a) {
  this.a.waitingTitle = "<b>" + this.i.getMessage(ad, {receiverName:a.name}) + "</b>";
  this.l("waiting");
};
f.mb = function(a, b) {
  this.d.info("Project " + b);
  this.n("tab" == b ? "cast_this_tab" : "launch_desktop_mirror", a.uniqueId);
};
f.Bc = function(a) {
  this.n("create_session", a.uniqueId);
};
f.Yb = function() {
  this.yb("feedback.html");
};
f.$b = function() {
  this.yb("options.html");
};
f.Zb = function() {
  vc("http://support.google.com/chromecast/go/castfromchrome*", "http://support.google.com/chromecast/go/castfromchrome", function() {
    window.close();
  });
};
f.yb = function(a) {
  a = chrome.extension.getURL(a);
  vc(a + "*", a, function() {
    window.close();
  });
};
f.Ab = function(a, b) {
  if ("model_update" == b.type) {
    this.b = b.message;
    this.Pb();
    var c = v(this.b.receiverActs, function(a) {
      return a.activity && a.activity.isInLaunch;
    });
    this.A = c ? c.activity : null;
    this.a.$apply(p(function() {
      this.a.init = !1;
      this.Ha();
      this.B();
      this.Ra();
      this.Ka();
      this.Ba();
      this.ea();
      this.Na();
      this.a.isV1AppInTab = this.b.isV1AppInTab;
    }, this));
  }
};
f.Pb = function() {
  this.Wb();
  this.a.selectedActivity || (this.b.castOfCurrentTab ? this.a.selectedActivity = this.b.castOfCurrentTab : 1 == this.Vb() && (this.a.selectedActivity = this.Ub()));
};
f.Wb = function() {
  this.a.selectedActivity && (v(this.b.receiverActs, p(function(a) {
    return a.activity && a.activity.id == this.a.selectedActivity.id;
  }, this)) || (this.a.selectedActivity = null));
};
f.Vb = function() {
  return Ga(this.b.receiverActs, function(a) {
    return a.activity && a.activity.isLocal;
  });
};
f.Ub = function() {
  var a = v(this.b.receiverActs, function(a) {
    return a.activity && a.activity.isLocal;
  });
  return a ? a.activity : null;
};
f.Ha = function() {
  if (this.a.selectedActivity) {
    if (this.a.selectedActivity.iconUrl) {
      var a = this.a.selectedActivity.iconUrl;
      this.a.selectedActivity.iconUrl = "data/default_activity.png";
      "data/default_activity.png" != a && kd(a, p(function(a) {
        a && (this.a.selectedActivity.iconUrl = a, this.a.$apply());
      }, this));
    } else {
      this.a.selectedActivity.iconUrl = "data/default_activity.png";
    }
  }
};
var kd = function(a, b) {
  var c = new V;
  c.Jc("blob");
  c.Kc(1500);
  fc(c, ["complete", "timeout"], function() {
    if (c.Va()) {
      var a = window.webkitURL.createObjectURL(c.Gc());
      b(a);
    } else {
      b(null);
    }
  });
  c.send(a, "GET");
};

