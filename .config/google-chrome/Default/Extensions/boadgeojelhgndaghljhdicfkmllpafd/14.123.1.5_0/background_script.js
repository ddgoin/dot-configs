var d;
window.vM = !0;
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var aa = aa || {}, k = this, m = function(a, b, c) {
  a = a.split(".");
  c = c || k;
  a[0] in c || !c.execScript || c.execScript("var " + a[0]);
  for (var e;a.length && (e = a.shift());) {
    a.length || void 0 === b ? c = c[e] ? c[e] : c[e] = {} : c[e] = b;
  }
}, ba = function(a, b) {
  for (var c = a.split("."), e = b || k, f;f = c.shift();) {
    if (null != e[f]) {
      e = e[f];
    } else {
      return null;
    }
  }
  return e;
}, n = function() {
}, ca = function(a) {
  a.G = function() {
    return a.Ow ? a.Ow : a.Ow = new a;
  };
}, da = function(a) {
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
}, q = function(a) {
  return void 0 !== a;
}, r = function(a) {
  return "array" == da(a);
}, ea = function(a) {
  var b = da(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}, s = function(a) {
  return "string" == typeof a;
}, fa = function(a) {
  return "number" == typeof a;
}, ga = function(a) {
  return "function" == da(a);
}, ha = function(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}, ka = function(a) {
  return a[ia] || (a[ia] = ++ja);
}, ia = "closure_uid_" + (1E9 * Math.random() >>> 0), ja = 0, la = function(a, b, c) {
  return a.call.apply(a.bind, arguments);
}, ma = function(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, e);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}, t = function(a, b, c) {
  t = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
  return t.apply(null, arguments);
}, na = function(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
}, u = Date.now || function() {
  return+new Date;
}, v = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.t = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.jM = function(a, c, g) {
    return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2));
  };
};
Function.prototype.bind = Function.prototype.bind || function(a, b) {
  if (1 < arguments.length) {
    var c = Array.prototype.slice.call(arguments, 1);
    c.unshift(this, a);
    return t.apply(null, c);
  }
  return t(this, a);
};
var oa = function(a, b) {
  var c = a.length - b.length;
  return 0 <= c && a.indexOf(b, c) == c;
}, pa = function(a, b) {
  for (var c = a.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1);f.length && 1 < c.length;) {
    e += c.shift() + f.shift();
  }
  return e + c.join("%s");
}, qa = function(a) {
  return/^[\s\xa0]*$/.test(a);
}, ra = function(a, b) {
  var c = String(a).toLowerCase(), e = String(b).toLowerCase();
  return c < e ? -1 : c == e ? 0 : 1;
}, ya = function(a, b) {
  if (b) {
    return a.replace(sa, "&amp;").replace(ta, "&lt;").replace(ua, "&gt;").replace(va, "&quot;").replace(wa, "&#39;");
  }
  if (!xa.test(a)) {
    return a;
  }
  -1 != a.indexOf("&") && (a = a.replace(sa, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(ta, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(ua, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(va, "&quot;"));
  -1 != a.indexOf("'") && (a = a.replace(wa, "&#39;"));
  return a;
}, sa = /&/g, ta = /</g, ua = />/g, va = /"/g, wa = /'/g, xa = /[&<>"']/, Ca = function(a) {
  return za(a, "&") ? "document" in k ? Aa(a) : Ba(a) : a;
}, Aa = function(a, b) {
  var c = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, e;
  e = b ? b.createElement("div") : document.createElement("div");
  return a.replace(Da, function(a, b) {
    var h = c[a];
    if (h) {
      return h;
    }
    if ("#" == b.charAt(0)) {
      var l = Number("0" + b.substr(1));
      isNaN(l) || (h = String.fromCharCode(l));
    }
    h || (e.innerHTML = a + " ", h = e.firstChild.nodeValue.slice(0, -1));
    return c[a] = h;
  });
}, Ba = function(a) {
  return a.replace(/&([^;]+);/g, function(a, c) {
    switch(c) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return'"';
      default:
        if ("#" == c.charAt(0)) {
          var e = Number("0" + c.substr(1));
          if (!isNaN(e)) {
            return String.fromCharCode(e);
          }
        }
        return a;
    }
  });
}, Da = /&([^;\s<&]+);?/g, Ea = function(a, b, c) {
  c && (a = Ca(a));
  a.length > b && (a = a.substring(0, b - 3) + "...");
  c && (a = ya(a));
  return a;
}, Fa = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"}, Ga = {"'":"\\'"}, Ha = function(a) {
  a = String(a);
  if (a.quote) {
    return a.quote();
  }
  for (var b = ['"'], c = 0;c < a.length;c++) {
    var e = a.charAt(c), f = e.charCodeAt(0), g = b, h = c + 1, l;
    if (!(l = Fa[e])) {
      if (!(31 < f && 127 > f)) {
        if (e in Ga) {
          e = Ga[e];
        } else {
          if (e in Fa) {
            e = Ga[e] = Fa[e];
          } else {
            f = e;
            l = e.charCodeAt(0);
            if (31 < l && 127 > l) {
              f = e;
            } else {
              if (256 > l) {
                if (f = "\\x", 16 > l || 256 < l) {
                  f += "0";
                }
              } else {
                f = "\\u", 4096 > l && (f += "0");
              }
              f += l.toString(16).toUpperCase();
            }
            e = Ga[e] = f;
          }
        }
      }
      l = e;
    }
    g[h] = l;
  }
  b.push('"');
  return b.join("");
}, za = function(a, b) {
  return-1 != a.indexOf(b);
}, Ia = function(a, b) {
  var c = RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08"), "g");
  return a.replace(c, "");
}, Ja = function(a) {
  return Array.prototype.join.call(arguments, "");
}, Ka = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ u()).toString(36);
}, Ma = function(a, b) {
  for (var c = 0, e = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = String(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), g = Math.max(e.length, f.length), h = 0;0 == c && h < g;h++) {
    var l = e[h] || "", p = f[h] || "", B = RegExp("(\\d*)(\\D*)", "g"), G = RegExp("(\\d*)(\\D*)", "g");
    do {
      var T = B.exec(l) || ["", "", ""], P = G.exec(p) || ["", "", ""];
      if (0 == T[0].length && 0 == P[0].length) {
        break;
      }
      c = La(0 == T[1].length ? 0 : parseInt(T[1], 10), 0 == P[1].length ? 0 : parseInt(P[1], 10)) || La(0 == T[2].length, 0 == P[2].length) || La(T[2], P[2]);
    } while (0 == c);
  }
  return c;
}, La = function(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}, Na = function(a) {
  var b = Number(a);
  return 0 == b && qa(a) ? NaN : b;
}, Oa = function(a) {
  isFinite(a) && (a = String(a));
  return s(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
};
var Pa = function() {
  this.ay = u();
}, Qa = new Pa;
Pa.prototype.set = function(a) {
  this.ay = a;
};
Pa.prototype.reset = function() {
  this.set(u());
};
Pa.prototype.get = function() {
  return this.ay;
};
var Ra = function(a) {
  this.aI = a || "";
  this.bI = Qa;
};
d = Ra.prototype;
d.dI = !0;
d.al = !0;
d.lI = !0;
d.kI = !0;
d.bl = !1;
d.ep = !1;
var Sa = function(a) {
  return 10 > a ? "0" + a : String(a);
}, Ta = function(a, b) {
  var c = (a.Kw() - b) / 1E3, e = c.toFixed(3), f = 0;
  if (1 > c) {
    f = 2;
  } else {
    for (;100 > c;) {
      f++, c *= 10;
    }
  }
  for (;0 < f--;) {
    e = " " + e;
  }
  return e;
}, Ua = function(a) {
  Ra.call(this, a);
};
v(Ua, Ra);
Ua.prototype.Pw = function(a) {
  var b = [];
  b.push(this.aI, " ");
  if (this.al) {
    var c = new Date(a.Kw());
    b.push("[", Sa(c.getFullYear() - 2E3) + Sa(c.getMonth() + 1) + Sa(c.getDate()) + " " + Sa(c.getHours()) + ":" + Sa(c.getMinutes()) + ":" + Sa(c.getSeconds()) + "." + Sa(Math.floor(c.getMilliseconds() / 10)), "] ");
  }
  this.lI && b.push("[", Ta(a, this.bI.get()), "s] ");
  this.kI && b.push("[", a.hw(), "] ");
  this.ep && b.push("[", a.mp().name, "] ");
  b.push(a.getMessage());
  this.bl && a.fI() && b.push("\n", a.gI());
  this.dI && b.push("\n");
  return b.join("");
};
var Va = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, Va);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
};
v(Va, Error);
Va.prototype.name = "CustomError";
var Wa;
var Xa = function(a, b) {
  b.unshift(a);
  Va.call(this, pa.apply(null, b));
  b.shift();
};
v(Xa, Va);
Xa.prototype.name = "AssertionError";
var Ya = function(a, b, c, e) {
  var f = "Assertion failed";
  if (c) {
    var f = f + (": " + c), g = e
  } else {
    a && (f += ": " + a, g = b);
  }
  throw new Xa("" + f, g || []);
}, w = function(a, b, c) {
  a || Ya("", null, b, Array.prototype.slice.call(arguments, 2));
  return a;
}, Za = function(a, b) {
  throw new Xa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}, $a = function(a, b, c) {
  fa(a) || Ya("Expected number but got %s: %s.", [da(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
}, x = function(a, b, c) {
  s(a) || Ya("Expected string but got %s: %s.", [da(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
}, ab = function(a, b, c) {
  ha(a) || Ya("Expected object but got %s: %s.", [da(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
}, bb = function(a, b, c) {
  r(a) || Ya("Expected array but got %s: %s.", [da(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
}, cb = function(a, b, c) {
  "boolean" == typeof a || Ya("Expected boolean but got %s: %s.", [da(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
}, db = function(a, b, c, e) {
  a instanceof b || Ya("instanceof check failed.", null, c, Array.prototype.slice.call(arguments, 3));
  return a;
};
var eb = function(a, b, c, e, f) {
  this.reset(a, b, c, e, f);
};
eb.prototype.Dp = null;
eb.prototype.Cp = null;
var fb = 0;
d = eb.prototype;
d.reset = function(a, b, c, e, f) {
  "number" == typeof f || fb++;
  this.kJ = e || u();
  this.Ue = a;
  this.kx = b;
  this.jJ = c;
  delete this.Dp;
  delete this.Cp;
};
d.hw = function() {
  return this.jJ;
};
d.fI = function() {
  return this.Dp;
};
d.UJ = function(a) {
  this.Dp = a;
};
d.gI = function() {
  return this.Cp;
};
d.VJ = function(a) {
  this.Cp = a;
};
d.mp = function() {
  return this.Ue;
};
d.Gc = function(a) {
  this.Ue = a;
};
d.getMessage = function() {
  return this.kx;
};
d.pw = function(a) {
  this.kx = a;
};
d.Kw = function() {
  return this.kJ;
};
var gb = function() {
  w(!0, "Cannot use goog.debug.LogBuffer without defining goog.debug.LogBuffer.CAPACITY.");
  this.clear();
}, hb, ib = function() {
  hb || (hb = new gb);
  return hb;
};
gb.prototype.PJ = function(a, b, c) {
  var e = (this.Jp + 1) % 5E3;
  this.Jp = e;
  if (this.Kp) {
    return e = this.ie[e], e.reset(a, b, c), e;
  }
  this.Kp = 4999 == e;
  return this.ie[e] = new eb(a, b, c);
};
gb.prototype.clear = function() {
  this.ie = Array(5E3);
  this.Jp = -1;
  this.Kp = !1;
};
gb.prototype.vJ = function(a) {
  var b = this.ie;
  if (b[0]) {
    var c = this.Jp, e = this.Kp ? c : -1;
    do {
      e = (e + 1) % 5E3, a(b[e]);
    } while (e != c);
  }
};
var y = Array.prototype, jb = y.indexOf ? function(a, b, c) {
  w(null != a.length);
  return y.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (s(a)) {
    return s(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, z = y.forEach ? function(a, b, c) {
  w(null != a.length);
  y.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var e = a.length, f = s(a) ? a.split("") : a, g = 0;g < e;g++) {
    g in f && b.call(c, f[g], g, a);
  }
}, kb = function(a, b, c) {
  for (var e = s(a) ? a.split("") : a, f = a.length - 1;0 <= f;--f) {
    f in e && b.call(c, e[f], f, a);
  }
}, A = y.filter ? function(a, b, c) {
  w(null != a.length);
  return y.filter.call(a, b, c);
} : function(a, b, c) {
  for (var e = a.length, f = [], g = 0, h = s(a) ? a.split("") : a, l = 0;l < e;l++) {
    if (l in h) {
      var p = h[l];
      b.call(c, p, l, a) && (f[g++] = p);
    }
  }
  return f;
}, lb = y.map ? function(a, b, c) {
  w(null != a.length);
  return y.map.call(a, b, c);
} : function(a, b, c) {
  for (var e = a.length, f = Array(e), g = s(a) ? a.split("") : a, h = 0;h < e;h++) {
    h in g && (f[h] = b.call(c, g[h], h, a));
  }
  return f;
}, mb = y.some ? function(a, b, c) {
  w(null != a.length);
  return y.some.call(a, b, c);
} : function(a, b, c) {
  for (var e = a.length, f = s(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && b.call(c, f[g], g, a)) {
      return!0;
    }
  }
  return!1;
}, nb = y.every ? function(a, b, c) {
  w(null != a.length);
  return y.every.call(a, b, c);
} : function(a, b, c) {
  for (var e = a.length, f = s(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && !b.call(c, f[g], g, a)) {
      return!1;
    }
  }
  return!0;
}, ob = function(a, b, c) {
  var e = 0;
  z(a, function(a, g, h) {
    b.call(c, a, g, h) && ++e;
  }, c);
  return e;
}, C = function(a, b, c) {
  b = pb(a, b, c);
  return 0 > b ? null : s(a) ? a.charAt(b) : a[b];
}, pb = function(a, b, c) {
  for (var e = a.length, f = s(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && b.call(c, f[g], g, a)) {
      return g;
    }
  }
  return-1;
}, qb = function(a, b) {
  return 0 <= jb(a, b);
}, rb = function(a) {
  if (!r(a)) {
    for (var b = a.length - 1;0 <= b;b--) {
      delete a[b];
    }
  }
  a.length = 0;
}, tb = function(a, b) {
  var c = jb(a, b), e;
  (e = 0 <= c) && sb(a, c);
  return e;
}, sb = function(a, b) {
  w(null != a.length);
  return 1 == y.splice.call(a, b, 1).length;
}, ub = function(a, b, c) {
  b = pb(a, b, c);
  return 0 <= b ? (sb(a, b), !0) : !1;
}, vb = function(a) {
  return y.concat.apply(y, arguments);
}, wb = function(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), e = 0;e < b;e++) {
      c[e] = a[e];
    }
    return c;
  }
  return[];
}, yb = function(a, b, c, e) {
  w(null != a.length);
  return y.splice.apply(a, xb(arguments, 1));
}, xb = function(a, b, c) {
  w(null != a.length);
  return 2 >= arguments.length ? y.slice.call(a, b) : y.slice.call(a, b, c);
}, Ab = function(a, b) {
  w(null != a.length);
  y.sort.call(a, b || zb);
}, zb = function(a, b) {
  return a > b ? 1 : a < b ? -1 : 0;
};
var Bb = "StopIteration" in k ? k.StopIteration : Error("StopIteration"), Cb = function() {
};
Cb.prototype.next = function() {
  throw Bb;
};
Cb.prototype.Ve = function() {
  return this;
};
var Db = function(a) {
  if (a instanceof Cb) {
    return a;
  }
  if ("function" == typeof a.Ve) {
    return a.Ve(!1);
  }
  if (ea(a)) {
    var b = 0, c = new Cb;
    c.next = function() {
      for (;;) {
        if (b >= a.length) {
          throw Bb;
        }
        if (b in a) {
          return a[b++];
        }
        b++;
      }
    };
    return c;
  }
  throw Error("Not implemented");
}, Eb = function(a, b, c) {
  if (ea(a)) {
    try {
      z(a, b, c);
    } catch (e) {
      if (e !== Bb) {
        throw e;
      }
    }
  } else {
    a = Db(a);
    try {
      for (;;) {
        b.call(c, a.next(), void 0, a);
      }
    } catch (f) {
      if (f !== Bb) {
        throw f;
      }
    }
  }
};
var Fb = function(a, b, c) {
  for (var e in a) {
    b.call(c, a[e], e, a);
  }
}, Gb = function(a, b, c) {
  for (var e in a) {
    if (b.call(c, a[e], e, a)) {
      return!0;
    }
  }
  return!1;
}, Hb = function(a) {
  var b = [], c = 0, e;
  for (e in a) {
    b[c++] = a[e];
  }
  return b;
}, Ib = function(a) {
  var b = [], c = 0, e;
  for (e in a) {
    b[c++] = e;
  }
  return b;
}, Jb = function(a, b) {
  for (var c in a) {
    if (a[c] == b) {
      return!0;
    }
  }
  return!1;
}, Kb = function(a, b, c) {
  for (var e in a) {
    if (b.call(c, a[e], e, a)) {
      return e;
    }
  }
}, Lb = function(a, b, c) {
  return(b = Kb(a, b, c)) && a[b];
}, Mb = function(a) {
  for (var b in a) {
    return!1;
  }
  return!0;
}, Nb = function(a, b) {
  var c;
  (c = b in a) && delete a[b];
  return c;
}, Ob = function(a) {
  var b = {}, c;
  for (c in a) {
    b[c] = a[c];
  }
  return b;
}, Pb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), Qb = function(a, b) {
  for (var c, e, f = 1;f < arguments.length;f++) {
    e = arguments[f];
    for (c in e) {
      a[c] = e[c];
    }
    for (var g = 0;g < Pb.length;g++) {
      c = Pb[g], Object.prototype.hasOwnProperty.call(e, c) && (a[c] = e[c]);
    }
  }
};
var D = function(a, b) {
  this.S = {};
  this.ea = [];
  this.Tb = this.ra = 0;
  var c = arguments.length;
  if (1 < c) {
    if (c % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var e = 0;e < c;e += 2) {
      this.set(arguments[e], arguments[e + 1]);
    }
  } else {
    a && this.Wk(a);
  }
};
d = D.prototype;
d.L = function() {
  return this.ra;
};
d.N = function() {
  this.lg();
  for (var a = [], b = 0;b < this.ea.length;b++) {
    a.push(this.S[this.ea[b]]);
  }
  return a;
};
d.kb = function() {
  this.lg();
  return this.ea.concat();
};
d.Na = function(a) {
  return Rb(this.S, a);
};
d.tg = function(a) {
  for (var b = 0;b < this.ea.length;b++) {
    var c = this.ea[b];
    if (Rb(this.S, c) && this.S[c] == a) {
      return!0;
    }
  }
  return!1;
};
d.equals = function(a, b) {
  if (this === a) {
    return!0;
  }
  if (this.ra != a.L()) {
    return!1;
  }
  var c = b || Sb;
  this.lg();
  for (var e, f = 0;e = this.ea[f];f++) {
    if (!c(this.get(e), a.get(e))) {
      return!1;
    }
  }
  return!0;
};
var Sb = function(a, b) {
  return a === b;
};
d = D.prototype;
d.ob = function() {
  return 0 == this.ra;
};
d.clear = function() {
  this.S = {};
  this.Tb = this.ra = this.ea.length = 0;
};
d.remove = function(a) {
  return Rb(this.S, a) ? (delete this.S[a], this.ra--, this.Tb++, this.ea.length > 2 * this.ra && this.lg(), !0) : !1;
};
d.lg = function() {
  if (this.ra != this.ea.length) {
    for (var a = 0, b = 0;a < this.ea.length;) {
      var c = this.ea[a];
      Rb(this.S, c) && (this.ea[b++] = c);
      a++;
    }
    this.ea.length = b;
  }
  if (this.ra != this.ea.length) {
    for (var e = {}, b = a = 0;a < this.ea.length;) {
      c = this.ea[a], Rb(e, c) || (this.ea[b++] = c, e[c] = 1), a++;
    }
    this.ea.length = b;
  }
};
d.get = function(a, b) {
  return Rb(this.S, a) ? this.S[a] : b;
};
d.set = function(a, b) {
  Rb(this.S, a) || (this.ra++, this.ea.push(a), this.Tb++);
  this.S[a] = b;
};
d.Wk = function(a) {
  var b;
  a instanceof D ? (b = a.kb(), a = a.N()) : (b = Ib(a), a = Hb(a));
  for (var c = 0;c < b.length;c++) {
    this.set(b[c], a[c]);
  }
};
d.clone = function() {
  return new D(this);
};
d.XJ = function() {
  this.lg();
  for (var a = {}, b = 0;b < this.ea.length;b++) {
    var c = this.ea[b];
    a[c] = this.S[c];
  }
  return a;
};
d.pG = function() {
  return this.Ve(!0);
};
d.zE = function() {
  return this.Ve(!1);
};
d.Ve = function(a) {
  this.lg();
  var b = 0, c = this.ea, e = this.S, f = this.Tb, g = this, h = new Cb;
  h.next = function() {
    for (;;) {
      if (f != g.Tb) {
        throw Error("The map has changed since the iterator was created");
      }
      if (b >= c.length) {
        throw Bb;
      }
      var h = c[b++];
      return a ? h : e[h];
    }
  };
  return h;
};
var Rb = function(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
var Tb = function(a) {
  if ("function" == typeof a.L) {
    a = a.L();
  } else {
    if (ea(a) || s(a)) {
      a = a.length;
    } else {
      var b = 0, c;
      for (c in a) {
        b++;
      }
      a = b;
    }
  }
  return a;
}, Ub = function(a) {
  if ("function" == typeof a.N) {
    return a.N();
  }
  if (s(a)) {
    return a.split("");
  }
  if (ea(a)) {
    for (var b = [], c = a.length, e = 0;e < c;e++) {
      b.push(a[e]);
    }
    return b;
  }
  return Hb(a);
}, Vb = function(a) {
  if ("function" == typeof a.kb) {
    return a.kb();
  }
  if ("function" != typeof a.N) {
    if (ea(a) || s(a)) {
      var b = [];
      a = a.length;
      for (var c = 0;c < a;c++) {
        b.push(c);
      }
      return b;
    }
    return Ib(a);
  }
}, Wb = function(a, b, c) {
  if ("function" == typeof a.forEach) {
    a.forEach(b, c);
  } else {
    if (ea(a) || s(a)) {
      z(a, b, c);
    } else {
      for (var e = Vb(a), f = Ub(a), g = f.length, h = 0;h < g;h++) {
        b.call(c, f[h], e && e[h], a);
      }
    }
  }
}, Xb = function(a, b, c) {
  if ("function" == typeof a.every) {
    return a.every(b, c);
  }
  if (ea(a) || s(a)) {
    return nb(a, b, c);
  }
  for (var e = Vb(a), f = Ub(a), g = f.length, h = 0;h < g;h++) {
    if (!b.call(c, f[h], e && e[h], a)) {
      return!1;
    }
  }
  return!0;
};
var Yb = function(a) {
  this.S = new D;
  a && this.Wk(a);
}, Zb = function(a) {
  var b = typeof a;
  return "object" == b && a || "function" == b ? "o" + ka(a) : b.substr(0, 1) + a;
};
d = Yb.prototype;
d.L = function() {
  return this.S.L();
};
d.add = function(a) {
  this.S.set(Zb(a), a);
};
d.Wk = function(a) {
  a = Ub(a);
  for (var b = a.length, c = 0;c < b;c++) {
    this.add(a[c]);
  }
};
d.removeAll = function(a) {
  a = Ub(a);
  for (var b = a.length, c = 0;c < b;c++) {
    this.remove(a[c]);
  }
};
d.remove = function(a) {
  return this.S.remove(Zb(a));
};
d.clear = function() {
  this.S.clear();
};
d.ob = function() {
  return this.S.ob();
};
d.contains = function(a) {
  return this.S.Na(Zb(a));
};
d.N = function() {
  return this.S.N();
};
d.clone = function() {
  return new Yb(this);
};
d.equals = function(a) {
  return this.L() == Tb(a) && this.zI(a);
};
d.zI = function(a) {
  var b = Tb(a);
  if (this.L() > b) {
    return!1;
  }
  !(a instanceof Yb) && 5 < b && (a = new Yb(a));
  return Xb(this, function(b) {
    var e = a;
    return "function" == typeof e.contains ? e.contains(b) : "function" == typeof e.tg ? e.tg(b) : ea(e) || s(e) ? qb(e, b) : Jb(e, b);
  });
};
d.Ve = function() {
  return this.S.Ve(!1);
};
var $b, ac, bc, cc, dc, ec, fc, gc, hc, ic = function() {
  return k.navigator ? k.navigator.userAgent : null;
};
cc = bc = ac = $b = !1;
var jc;
if (jc = ic()) {
  var kc = k.navigator;
  $b = 0 == jc.lastIndexOf("Opera", 0);
  ac = !$b && (za(jc, "MSIE") || za(jc, "Trident"));
  bc = !$b && za(jc, "WebKit");
  cc = !$b && !bc && !ac && "Gecko" == kc.product;
}
var lc = $b, E = ac, mc = cc, F = bc, nc = k.navigator, oc = nc && nc.platform || "";
dc = za(oc, "Mac");
ec = za(oc, "Win");
fc = za(oc, "Linux");
var pc = ic();
gc = !!pc && za(pc, "Android");
hc = !!pc && za(pc, "iPhone");
var qc = !!pc && za(pc, "iPad"), rc = function() {
  var a = k.document;
  return a ? a.documentMode : void 0;
}, sc;
t: {
  var tc = "", uc;
  if (lc && k.opera) {
    var vc = k.opera.version, tc = "function" == typeof vc ? vc() : vc
  } else {
    if (mc ? uc = /rv\:([^\);]+)(\)|;)/ : E ? uc = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : F && (uc = /WebKit\/(\S+)/), uc) {
      var wc = uc.exec(ic()), tc = wc ? wc[1] : ""
    }
  }
  if (E) {
    var xc = rc();
    if (xc > parseFloat(tc)) {
      sc = String(xc);
      break t;
    }
  }
  sc = tc;
}
var yc = sc, zc = {}, Ac = function(a) {
  return zc[a] || (zc[a] = 0 <= Ma(yc, a));
}, Bc = k.document, Cc = Bc && E ? rc() || ("CSS1Compat" == Bc.compatMode ? parseInt(yc, 10) : 5) : void 0;
var Dc = function(a, b, c) {
  c = c || k;
  var e = c.onerror, f = !!b;
  F && !Ac("535.3") && (f = !f);
  c.onerror = function(b, c, l, p, B) {
    e && e(b, c, l, p, B);
    a({message:b, fileName:c, ow:l, lM:p, error:B});
    return f;
  };
}, Fc = function(a, b) {
  try {
    var c;
    var e = ba("window.location.href");
    if (s(a)) {
      c = {message:a, name:"Unknown error", lineNumber:"Not available", fileName:e, stack:"Not available"};
    } else {
      var f, g, h = !1;
      try {
        f = a.lineNumber || a.ow || "Not available";
      } catch (l) {
        f = "Not available", h = !0;
      }
      try {
        g = a.fileName || a.filename || a.sourceURL || k.$googDebugFname || e;
      } catch (p) {
        g = "Not available", h = !0;
      }
      c = !h && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {message:a.message || "Not available", name:a.name || "UnknownError", lineNumber:f, fileName:g, stack:a.stack || "Not available"};
    }
    return "Message: " + ya(c.message) + '\nUrl: <a href="view-source:' + c.fileName + '" target="_new">' + c.fileName + "</a>\nLine: " + c.lineNumber + "\n\nBrowser stack:\n" + ya(c.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + ya(Ec(b) + "-> ");
  } catch (B) {
    return "Exception trying to expose exception! You win, we lose. " + B;
  }
}, Ec = function(a) {
  return Gc(a || arguments.callee.caller, []);
}, Gc = function(a, b) {
  var c = [];
  if (qb(b, a)) {
    c.push("[...circular reference...]");
  } else {
    if (a && 50 > b.length) {
      c.push(Hc(a) + "(");
      for (var e = a.arguments, f = 0;f < e.length;f++) {
        0 < f && c.push(", ");
        var g;
        g = e[f];
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
            g = (g = Hc(g)) ? g : "[fn]";
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
        c.push(Gc(a.caller, b));
      } catch (h) {
        c.push("[exception trying to get caller]\n");
      }
    } else {
      a ? c.push("[...long stack...]") : c.push("[end]");
    }
  }
  return c.join("");
}, Hc = function(a) {
  if (Ic[a]) {
    return Ic[a];
  }
  a = String(a);
  if (!Ic[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Ic[a] = b ? b[1] : "[Anonymous]";
  }
  return Ic[a];
}, Ic = {};
var Jc = function(a) {
  this.jg = a;
};
Jc.prototype.Ja = null;
Jc.prototype.Ue = null;
Jc.prototype.Xp = null;
Jc.prototype.Uc = null;
var Kc = function(a, b) {
  this.name = a;
  this.value = b;
};
Kc.prototype.toString = function() {
  return this.name;
};
var Lc = new Kc("SHOUT", 1200), Mc = new Kc("SEVERE", 1E3), Nc = new Kc("WARNING", 900), Oc = new Kc("INFO", 800), Pc = new Kc("CONFIG", 700), Qc = new Kc("FINE", 500), Rc = new Kc("FINER", 400), H = new Kc("FINEST", 300);
d = Jc.prototype;
d.getName = function() {
  return this.jg;
};
d.fK = function(a) {
  this.Uc || (this.Uc = []);
  this.Uc.push(a);
};
d.kK = function(a) {
  var b = this.Uc;
  return!!b && tb(b, a);
};
d.getParent = function() {
  return this.Ja;
};
d.getChildren = function() {
  this.Xp || (this.Xp = {});
  return this.Xp;
};
d.Gc = function(a) {
  this.Ue = a;
};
d.mp = function() {
  return this.Ue;
};
d.cx = function() {
  if (this.Ue) {
    return this.Ue;
  }
  if (this.Ja) {
    return this.Ja.cx();
  }
  Za("Root logger has no level set.");
  return null;
};
d.Hf = function(a) {
  return a.value >= this.cx().value;
};
d.log = function(a, b, c) {
  this.Hf(a) && (ga(b) && (b = b()), this.gK(this.hK(a, b, c)));
};
d.hK = function(a, b, c) {
  var e = ib().PJ(a, b, this.jg);
  c && (e.UJ(c), e.VJ(Fc(c, arguments.callee.caller)));
  return e;
};
d.w = function(a, b) {
  this.log(Mc, a, b);
};
d.e = function(a, b) {
  this.log(Nc, a, b);
};
d.info = function(a, b) {
  this.log(Oc, a, b);
};
d.config = function(a, b) {
  this.log(Pc, a, b);
};
d.C = function(a, b) {
  this.log(Qc, a, b);
};
d.mC = function(a, b) {
  this.log(Rc, a, b);
};
d.Xg = function(a, b) {
  this.log(H, a, b);
};
d.gK = function(a) {
  var b = "log:" + a.getMessage();
  k.console && (k.console.timeStamp ? k.console.timeStamp(b) : k.console.markTimeline && k.console.markTimeline(b));
  k.msWriteProfilerMark && k.msWriteProfilerMark(b);
  for (b = this;b;) {
    b.KL(a), b = b.getParent();
  }
};
d.KL = function(a) {
  if (this.Uc) {
    for (var b = 0, c;c = this.Uc[b];b++) {
      c(a);
    }
  }
};
d.lL = function(a) {
  this.Ja = a;
};
d.fL = function(a, b) {
  this.getChildren()[a] = b;
};
var Sc = {}, Tc = null, Uc = function() {
  Tc || (Tc = new Jc(""), Sc[""] = Tc, Tc.Gc(Pc));
}, Vc = function() {
  Uc();
  return Tc;
}, I = function(a) {
  Uc();
  var b;
  if (!(b = Sc[a])) {
    b = new Jc(a);
    var c = a.lastIndexOf("."), e = a.substr(c + 1), c = I(a.substr(0, c));
    c.fL(e, b);
    b.lL(c);
    Sc[a] = b;
  }
  return b;
}, Wc = function(a) {
  return function(b) {
    (a || Vc()).w("Error: " + b.message + " (" + b.fileName + " @ Line: " + b.ow + ")");
  };
};
var Xc = function() {
  var a = new Ua;
  a.al = !0;
  a.ep = !0;
  a.bl = !0;
  var b = "";
  ib().vJ(function(c) {
    b += a.Pw(c) + "\n";
  });
  return b;
}, Yc = function(a, b, c, e, f) {
  a.log(e ? e : Oc, b);
  try {
    a.log(f ? f : Qc, "--the object is " + JSON.stringify(c));
  } catch (g) {
  }
};
var Zc, $c = Hb({wM:"cv", IM:"ramp", rM:"cm"}), ad = Hb({CM:"launch_service", oM:"activity_service", nM:"activity", qM:"channel_connect_request", pM:"channel_connect_accepted"}), bd = function(a, b) {
  this.type = a;
  this.message = b;
};
I("cv.ChannelMessage");
var cd = function(a) {
  return r(a) && "cm" == a[0] && ha(a[1]) && q(a[1].type);
};
var dd = function(a, b) {
  this.id = a;
  this.name = b;
  this.isTabProjected = this.ipAddress = null;
}, ed = function() {
  this.url = this.text = null;
}, fd = function(a, b) {
  this.activityType = a;
  this.receiver = b;
  this.description = this.parameters = null;
  this.disconnectPolicy = "continue";
}, gd = function(a, b) {
  this.activityId = a;
  this.status = b;
  this.errorString = null;
  this.extraData = {};
}, hd = function(a, b) {
  this.eventSequenceId = null;
  this.activityId = a;
  this.state = b;
  this.imageUrl = this.title = this.contentId = null;
  this.timeProgress = !1;
  this.error = this.mediaTracks = this.contentInfo = this.muted = this.volume = this.duration = this.position = null;
  this.hasPause = !0;
}, id = function(a) {
  this.activityId = a;
  this.status = null;
  this.success = !1;
  this.errorString = null;
}, jd = function(a, b) {
  this.id = a;
  this.type = b;
  this.selected = this.language = this.name = null;
}, kd = function(a, b, c, e) {
  this.activityId = a;
  this.cmdId = b;
  this.method = c;
  this.requests = e;
}, ld = [2, 4];
"undefined" != typeof chrome && "undefined" != typeof chrome.runtime && "undefined" != typeof chrome.runtime.getManifest || window.postMessage({source:"CastApi", event:"Hello", MM:ld}, "*");
var md = function(a, b, c, e, f) {
  this.source = a;
  this.target = b;
  this.seq = c;
  this.type = e;
  this.message = f;
}, nd = function(a, b) {
  this.activityType = a;
  this.receivers = b;
}, od = function(a, b, c) {
  this.activityId = a;
  this.namespace = b;
  this.message = c;
};
var pd = function(a, b) {
  this.cmd_id = a;
  this.type = b;
};
pd.prototype.toJson = function() {
  return JSON.stringify(["ramp", this]);
};
var qd = function(a, b, c, e) {
  a = a[c];
  null != a && (b[e ? e : c] = a);
}, J = function(a, b, c, e) {
  a = a[b];
  if (null == a) {
    if (c) {
      throw "Mandatory property " + b + " was " + a;
    }
    return q(e) ? e : null;
  }
  return a;
}, rd = function(a) {
  w(a.seq);
  var b = a.seq, c = a.message.rampRequest, e = null;
  switch(a.type) {
    case "LoadMedia":
      e = new pd(b, "LOAD");
      qd(c, e, "src");
      qd(c, e, "title");
      qd(c, e, "autoplay");
      qd(c, e, "contentInfo", "content_info");
      qd(c, e, "imageUrl", "image_url");
      break;
    case "PlayMedia":
      e = new pd(b, "PLAY");
      qd(c, e, "position");
      break;
    case "PauseMedia":
      e = new pd(b, "STOP");
      break;
    case "SetMediaVolume":
      e = new pd(b, "VOLUME");
      qd(c, e, "volume");
      qd(c, e, "muted");
      break;
    case "SelectMediaTracks":
      e = new pd(b, "SELECT_TRACKS");
      qd(c, e, "enabledTracks", "enabled");
      qd(c, e, "disabledTracks", "disabled");
      break;
    case "MediaStatus":
      e = new pd(b, "INFO");
      break;
    case "MediaKeyResponse":
      e = new pd(c.cmdId, "KEY_RESPONSE"), qd(c, e, "tokens");
  }
  return e ? {message:e, error:null} : {message:null, error:"Unknown message type"};
}, sd = function(a, b) {
  return null != a.cmd_id && null != a.type && a.type == b;
}, td = function(a) {
  if (!a) {
    return[];
  }
  var b = [];
  z(a, function(a) {
    var e = J(a, "id", !0), f = J(a, "type", !0), e = new jd(e, f);
    e.name = J(a, "name", !1);
    e.language = J(a, "lang", !1);
    e.selected = J(a, "selected", !1);
    b.push(e);
  });
  return b;
};
var ud = "undefined" != typeof chrome && !!chrome.mdns && !!chrome.cast && !!chrome.cast.channel && !!chrome.browserAction && !!chrome.browserAction.openPopup;
var vd = function(a, b, c, e, f) {
  this.guid = a;
  this.manufacturer = b || "";
  this.model = c || "";
  this.displayName = e || "Unnamed";
  this.claimCode = f || "";
  this.accessToken = this.refreshToken = this.authCode = "";
  this.accessTokenExpiryTime = 0;
  this.channelToken = "";
  this.channelTokenExpiryTime = 0;
};
vd.prototype.IB = function() {
  return!!this.guid;
};
I("cv.CloudDevice");
var wd, xd, yd, zd, Ad, Bd, Cd;
Cd = Bd = Ad = zd = yd = xd = wd = !1;
var Dd = ic();
Dd && (-1 != Dd.indexOf("Firefox") ? wd = !0 : -1 != Dd.indexOf("Camino") ? xd = !0 : -1 != Dd.indexOf("iPhone") || -1 != Dd.indexOf("iPod") ? yd = !0 : -1 != Dd.indexOf("iPad") ? zd = !0 : -1 != Dd.indexOf("Chrome") ? Bd = !0 : -1 != Dd.indexOf("Android") ? Ad = !0 : -1 != Dd.indexOf("Safari") && (Cd = !0));
var Ed = wd, Fd = xd, Gd = yd, Hd = zd, Id = Ad, Jd = Bd, Kd = Cd;
var Ld = function(a) {
  return(a = a.exec(ic())) ? a[1] : "";
}, Md = function() {
  if (Ed) {
    return Ld(/Firefox\/([0-9.]+)/);
  }
  if (E || lc) {
    return yc;
  }
  if (Jd) {
    return Ld(/Chrome\/([0-9.]+)/);
  }
  if (Kd) {
    return Ld(/Version\/([0-9.]+)/);
  }
  if (Gd || Hd) {
    var a;
    if (a = /Version\/(\S+).*Mobile\/(\S+)/.exec(ic())) {
      return a[1] + "." + a[2];
    }
  } else {
    if (Id) {
      return(a = Ld(/Android\s+([0-9.]+)/)) ? a : Ld(/Version\/([0-9.]+)/);
    }
    if (Fd) {
      return Ld(/Camino\/([0-9.]+)/);
    }
  }
  return "";
}();
var Nd = function(a, b, c, e, f, g, h, l) {
  this.id = a;
  this.name = b;
  this.videoWidth = c;
  this.videoHeight = e;
  this.videoResolution = c + "x" + e;
  this.minVideoBitrate = f;
  this.maxVideoBitrate = g;
  this.videoQuality = h;
  this.audioBitrate = l;
}, Od = new Nd("high", "High (720p)", 1280, 720, 2E3, 2500, 56, 128), Pd = [new Nd("highest", "Extreme (720p high bitrate)", 1280, 720, 4E3, 5E3, 56, 128), Od, new Nd("low", "Standard (480p)", 854, 480, 750, 1500, 56, 128)], Qd = function(a) {
  return C(Pd, function(b) {
    return b.id == a;
  });
};
var Rd = function() {
  this.videoBitrate = Od.maxVideoBitrate;
  this.minVideoBitrate = Od.minVideoBitrate;
  this.maxVideoBitrate = Od.maxVideoBitrate;
  this.videoQuality = Od.videoQuality;
  this.minWidth = Od.videoWidth;
  this.minHeight = Od.videoHeight;
  this.audioBitrate = Od.audioBitrate;
  this.useOpus = !0;
  this.bufferedMode = "on";
  this.bufferSizeMillis = 500;
  this.maxFrameRate = 30;
  this.enablePacing = Jd && 0 <= Ma(Md, 28);
  this.enableVideoTcp = this.enableAudioTcp = !1;
  this.enableAudioNack = !0;
  this.allowAutoResize = !1;
  this.captureSurface = "tab";
  this.lowFpsMode = !1;
  this.autoFeedback = this.zoomModeEnabled = !0;
  this.preferredVideoCodec = "CAST1";
}, Sd = {"640x360":[640, 360], "854x480":[854, 480], "1280x720":[1280, 720]};
d = Rd.prototype;
d.update = function(a) {
  for (var b in this) {
    ga(this[b]) || (null != a[b] && da(this[b]) == da(a[b]) ? this[b] = a[b] : I("cv.MirrorTabSettings").e("Failed to load mirror settings for key [" + b + "]:" + a[b]));
  }
};
d.XC = function(a) {
  s(a) && (a = parseInt(a, 10));
  this.maxVideoBitrate = a = Math.min(5E3, Math.max(100, a));
};
d.YC = function(a) {
  s(a) && (a = parseInt(a, 10));
  this.minVideoBitrate = a = Math.min(5E3, Math.max(100, a));
};
d.$C = function(a) {
  s(a) && (a = parseInt(a, 10));
  0 < a && (this.videoQuality = a);
};
d.Xn = function(a) {
  s(a) && (a = parseInt(a, 10));
  this.audioBitrate = Math.min(128, Math.max(56, a));
};
d.VC = function(a) {
  s(a) && (a = parseInt(a, 10));
  0 <= a && (this.bufferSizeMillis = a);
};
d.XF = function() {
  return 0 == this.bufferSizeMillis ? 0 : this.enablePacing ? this.bufferSizeMillis + 100 : this.bufferSizeMillis;
};
d.ZC = function(a) {
  this.enablePacing = a;
};
d.TC = function(a) {
  this.enableAudioTcp = a;
};
d.aD = function(a) {
  this.enableVideoTcp = a;
};
d.SC = function(a) {
  this.enableAudioNack = a;
};
d.UC = function(a) {
  this.autoFeedback = a;
};
d.kL = function(a) {
  s(a) && (a = parseInt(a, 10));
  this.minWidth = Math.max(100, a);
};
d.jL = function(a) {
  s(a) && (a = parseInt(a, 10));
  this.minHeight = Math.max(100, a);
};
d.WC = function(a) {
  s(a) && (a = parseInt(a, 10));
  1 <= a && (this.maxFrameRate = a);
};
d.vt = function(a) {
  if (a = Sd[a]) {
    this.kL(a[0]), this.jL(a[1]);
  }
};
d.QL = function() {
  return String(this.minWidth + "x" + this.minHeight);
};
d.Ol = function() {
  var a = C(Pd, function(a) {
    return a.videoResolution == this.QL() && a.videoQuality == this.videoQuality && a.minVideoBitrate == this.minVideoBitrate && a.maxVideoBitrate == this.maxVideoBitrate && a.audioBitrate == this.audioBitrate;
  }, this);
  return a ? a.id : "custom";
};
d.By = function(a) {
  if (a = Qd(a)) {
    this.vt(a.videoResolution), this.videoQuality = a.videoQuality, this.minVideoBitrate = a.minVideoBitrate, this.maxVideoBitrate = a.maxVideoBitrate, this.audioBitrate = a.audioBitrate;
  }
};
var Vd = function(a, b) {
  var c = a;
  b && (c = t(a, b));
  ga(k.setImmediate) ? k.setImmediate(c) : (Td || (Td = Ud()), Td(c));
}, Td, Ud = function() {
  var a = k.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
    var a = document.createElement("iframe");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), e = b.location.protocol + "//" + b.location.host, a = t(function(a) {
      if (a.origin == e || a.data == c) {
        this.port1.onmessage();
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, e);
    }};
  });
  if ("undefined" !== typeof a) {
    var b = new a, c = {}, e = c;
    b.port1.onmessage = function() {
      c = c.next;
      var a = c.Vx;
      c.Vx = null;
      a();
    };
    return function(a) {
      e.next = {Vx:a};
      e = e.next;
      b.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
    var b = document.createElement("script");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null;
    };
    document.documentElement.appendChild(b);
  } : function(a) {
    k.setTimeout(a, 0);
  };
};
var Wd = function(a) {
  Vd(function() {
    throw a;
  });
}, ae = function(a, b) {
  Xd || (Vd(Yd), Xd = !0);
  Zd.push(new $d(a, b));
}, Xd = !1, Zd = [], Yd = function() {
  for (;Zd.length;) {
    var a = Zd;
    Zd = [];
    for (var b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        c.NL.call(c.scope);
      } catch (e) {
        Wd(e);
      }
    }
  }
  Xd = !1;
}, $d = function(a, b) {
  this.NL = a;
  this.scope = b;
};
var be = function(a) {
  a.prototype.then = a.prototype.then;
  a.prototype.$goog_labs_Thenable = !0;
}, ce = function(a) {
  if (!a) {
    return!1;
  }
  try {
    return!!a.$goog_labs_Thenable;
  } catch (b) {
    return!1;
  }
};
var de = function(a, b) {
  this.h = 0;
  this.Oc = void 0;
  this.$b = this.Ja = null;
  this.Kk = this.Eo = !1;
  this.Ho = [];
  this.Eu(Error("created"));
  this.yu = 0;
  try {
    var c = this;
    a.call(b, function(a) {
      c.kg(2, a);
    }, function(a) {
      c.kg(3, a);
    });
  } catch (e) {
    this.kg(3, e);
  }
};
de.prototype.then = function(a, b, c) {
  this.Eu(Error("then"));
  return this.$K(ga(a) ? a : null, ga(b) ? b : null, c);
};
be(de);
d = de.prototype;
d.cancel = function(a) {
  0 == this.h && ae(function() {
    var b = new ee(a);
    this.kv(b);
  }, this);
};
d.kv = function(a) {
  0 == this.h && (this.Ja ? this.Ja.NF(this, a) : this.kg(3, a));
};
d.NF = function(a, b) {
  if (this.$b) {
    for (var c = 0, e = -1, f = 0, g;g = this.$b[f];f++) {
      if (g = g.Rk) {
        if (c++, g == a && (e = f), 0 <= e && 1 < c) {
          break;
        }
      }
    }
    0 <= e && (0 == this.h && 1 == c ? this.kv(b) : (c = this.$b.splice(e, 1)[0], this.Xu(c, 3, b)));
  }
};
d.EI = function(a) {
  this.$b && this.$b.length || 2 != this.h && 3 != this.h || this.dv();
  this.$b || (this.$b = []);
  this.$b.push(a);
};
d.$K = function(a, b, c) {
  var e = {Rk:null, Rw:null, Sw:null};
  e.Rk = new de(function(f, g) {
    e.Rw = a ? function(b) {
      try {
        var e = a.call(c, b);
        f(e);
      } catch (p) {
        g(p);
      }
    } : f;
    e.Sw = b ? function(a) {
      try {
        var e = b.call(c, a);
        !q(e) && a instanceof ee ? g(a) : f(e);
      } catch (p) {
        g(p);
      }
    } : g;
  });
  e.Rk.Ja = this;
  this.EI(e);
  return e.Rk;
};
d.lv = function(a) {
  w(1 == this.h);
  this.h = 0;
  this.kg(2, a);
};
d.mv = function(a) {
  w(1 == this.h);
  this.h = 0;
  this.kg(3, a);
};
d.kg = function(a, b) {
  if (0 == this.h) {
    if (this == b) {
      a = 3, b = new TypeError("Promise cannot resolve to itself");
    } else {
      if (ce(b)) {
        this.h = 1;
        b.then(this.lv, this.mv, this);
        return;
      }
      if (ha(b)) {
        try {
          var c = b.then;
          if (ga(c)) {
            this.$F(b, c);
            return;
          }
        } catch (e) {
          a = 3, b = e;
        }
      }
    }
    this.Oc = b;
    this.h = a;
    this.dv();
    3 != a || b instanceof ee || fe(this, b);
  }
};
d.$F = function(a, b) {
  this.h = 1;
  var c = this, e = !1, f = function(a) {
    e || (e = !0, c.lv(a));
  }, g = function(a) {
    e || (e = !0, c.mv(a));
  };
  try {
    b.call(a, f, g);
  } catch (h) {
    g(h);
  }
};
d.dv = function() {
  this.Eo || (this.Eo = !0, ae(this.WK, this));
};
d.WK = function() {
  for (;this.$b && this.$b.length;) {
    var a = this.$b;
    this.$b = [];
    for (var b = 0;b < a.length;b++) {
      this.yu++, this.Xu(a[b], this.h, this.Oc);
    }
  }
  this.Eo = !1;
};
d.Xu = function(a, b, c) {
  2 == b ? a.Rw(c) : (this.IK(), a.Sw(c));
};
d.Eu = function(a) {
  if (a.stack) {
    var b = a.stack.split("\n", 4)[3];
    a = a.message;
    a += Array(11 - a.length).join(" ");
    this.Ho.push(a + b);
  }
};
d.LK = function(a) {
  if (a && a.stack && this.Ho.length) {
    for (var b = ["Promise trace:"], c = this;c;c = c.Ja) {
      for (var e = this.yu;0 <= e;e--) {
        b.push(c.Ho[e]);
      }
      b.push("Value: [" + (3 == c.h ? "REJECTED" : "FULFILLED") + "] <" + String(c.Oc) + ">");
    }
    a.stack += "\n\n" + b.join("\n");
  }
};
d.IK = function() {
  var a;
  for (a = this;a && a.Kk;a = a.Ja) {
    a.Kk = !1;
  }
};
var fe = function(a, b) {
  a.Kk = !0;
  ae(function() {
    a.Kk && (a.LK(b), ge.call(null, b));
  });
}, ge = Wd, ee = function(a) {
  Va.call(this, a);
};
v(ee, Va);
ee.prototype.name = "cancel";
var he = function() {
};
v(he, Error);
var K = function() {
  this.h = "pending";
  this.Uc = [];
  this.$a = this.ni = void 0;
};
be(K);
var ie = function() {
  Va.call(this, "Multiple attempts to set the state of this Result");
};
v(ie, Va);
d = K.prototype;
d.Q = function() {
  return this.h;
};
d.Fa = function() {
  return this.ni;
};
d.getError = function() {
  return this.$a;
};
d.Bb = function(a, b) {
  this.Ek() ? this.Uc.push({Va:a, scope:b || null}) : a.call(b, this);
};
d.ja = function(a) {
  if (this.Ek()) {
    this.ni = a, this.h = "success", this.av();
  } else {
    if (!this.to()) {
      throw new ie;
    }
  }
};
d.Qa = function(a) {
  if (this.Ek()) {
    this.$a = a, this.h = "error", this.av();
  } else {
    if (!this.to()) {
      throw new ie;
    }
  }
};
d.av = function() {
  var a = this.Uc;
  this.Uc = [];
  for (var b = 0;b < a.length;b++) {
    var c = a[b];
    c.Va.call(c.scope, this);
  }
};
d.Ek = function() {
  return "pending" == this.h;
};
d.cancel = function() {
  return this.Ek() ? (this.Qa(new he), !0) : !1;
};
d.to = function() {
  return "error" == this.h && this.$a instanceof he;
};
d.then = function(a, b, c) {
  var e, f, g = new de(function(a, b) {
    e = a;
    f = b;
  });
  this.Bb(function(a) {
    a.to() ? g.cancel() : "success" == a.Q() ? e(a.Fa()) : "error" == a.Q() && f(a.getError());
  });
  return g.then(a, b, c);
};
var je = function() {
  this.hasNetworkSoftware = this.networkDescription = this.gpu = this.cpu = this.googleUsername = null;
};
var ke = function() {
  this.dismissClicks = this.earliestTimeToShowWarning = this.sessionsBeforeWarning = 0;
  this.intelBadCpuWarningDismissed = this.castAppNotificationDismissed = !1;
};
var L = function() {
  this.a = I("cv.Settings");
  this.U = {};
  this.OB();
  this.Zm = this.$m = this.Xm = !1;
};
ca(L);
d = L.prototype;
d.OB = function() {
  this.U.tabCaptureSettings = new Rd;
  this.U.feedback = new je;
  this.U.userNotification = new ke;
  this.U.siteTokens = {};
  this.U.customDomains = [];
  this.U.fixedIps = [];
  this.U.receiverUrl = "";
  this.U.flingEnabled = !1;
  this.U.customReceiverVersion = "";
  this.U.enableCustomReceiverVersion = !1;
  this.U.appEngineReceiverIds = [];
  this.U.enableCloud = !1;
  this.U.cloudDevice = {};
  this.U.mirrorLinkProtection = !0;
};
d.zG = function() {
  this.$m = !0;
};
d.Ke = function() {
  this.Xm ? (this.a.info("Saving settings to storage."), this.$m ? (localStorage.settings = JSON.stringify(this.U), this.Zm && (chrome.storage.local.clear(), this.Zm = !1)) : chrome.storage.local.set(this.U, t(function() {
    chrome.runtime.lastError ? this.a.e("Failed to save settings to chrome.storage.") : this.a.info("Successfully saved settings to storage.");
  }, this))) : this.a.e("Aborting saving settings before initialization.");
};
d.TB = function(a, b) {
  return q(this.U[a]) ? da(this.U[a]) != da(b) ? (this.a.e("Failed to load setting due to incompatible type: " + a), !1) : ha(b) && 0 == Ib(b).length ? !1 : !0 : (this.a.e("Not loading setting with key: " + a), !1);
};
d.Jn = function(a, b) {
  try {
    for (var c in b) {
      c in this.U && ("tabCaptureSettings" == c ? this.U.tabCaptureSettings.update(b[c]) : this.TB(c, b[c]) && (this.U[c] = b[c]));
    }
  } catch (e) {
  } finally {
    this.a.info("Storage initialized."), this.Xm = !0, a();
  }
};
d.yG = function(a) {
  if (this.Xm) {
    a();
  } else {
    if (this.a.info("Loading settings from storage."), this.$m) {
      var b = localStorage.settings;
      if (b) {
        this.Jn(a, JSON.parse(b));
      } else {
        try {
          chrome.storage.local.get(t(function(b) {
            var c = null;
            !chrome.runtime.lastError && 0 < Object.keys(b).length && (c = b, this.Zm = !0);
            this.Jn(a, c);
          }, this));
        } catch (c) {
          this.a.info("storage.local error"), a();
        }
      }
    } else {
      try {
        chrome.storage.local.get(t(this.Jn, this, a));
      } catch (e) {
        this.a.info("storage.local error"), a();
      }
    }
  }
};
d.ua = function() {
  return this.U.tabCaptureSettings;
};
d.xq = function() {
  return "";
};
d.DG = function() {
  return!1;
};
d.Dy = function() {
  return JSON.stringify({mirrorTabSettings:this.ua()});
};
d.oI = function() {
  return this.U.fixedIps;
};
d.GC = function() {
  return this.U.enableCloud;
};
d.BD = function(a) {
  this.U.feedback = a;
  this.Ke();
};
d.ij = function() {
  return this.U.userNotification;
};
d.Ck = function(a) {
  this.U.userNotification = a;
  this.Ke();
};
d.EJ = function() {
  return this.U.siteTokens;
};
d.WJ = function(a) {
  this.U.siteTokens = a;
  this.Ke();
};
d.ut = function() {
  return this.U.customDomains;
};
d.mD = function(a) {
  this.U.customDomains = a;
  this.Ke();
};
var M = function() {
};
d = M.prototype;
d.gp = !1;
d.Xf = function() {
  return this.gp;
};
d.$ = function() {
  this.gp || (this.gp = !0, this.k());
};
d.Gh = function(a) {
  this.Vk(na(le, a));
};
d.Vk = function(a, b) {
  this.Bi || (this.Bi = []);
  this.Bi.push(t(a, b));
};
d.k = function() {
  if (this.Bi) {
    for (;this.Bi.length;) {
      this.Bi.shift()();
    }
  }
};
var le = function(a) {
  a && "function" == typeof a.$ && a.$();
};
var N = function(a, b) {
  this.type = a;
  this.currentTarget = this.target = b;
  this.defaultPrevented = this.We = !1;
  this.Xv = !0;
};
N.prototype.k = function() {
};
N.prototype.$ = function() {
};
N.prototype.stopPropagation = function() {
  this.We = !0;
};
N.prototype.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Xv = !1;
};
var me = function(a) {
  me[" "](a);
  return a;
};
me[" "] = n;
var ne = function(a, b) {
  try {
    return me(a[b]), !0;
  } catch (c) {
  }
  return!1;
};
var oe = !E || E && 9 <= Cc, pe = E && !Ac("9");
!F || Ac("528");
mc && Ac("1.9b") || E && Ac("8") || lc && Ac("9.5") || F && Ac("528");
mc && !Ac("8") || E && Ac("9");
var qe = function(a, b) {
  N.call(this, a ? a.type : "");
  this.relatedTarget = this.currentTarget = this.target = null;
  this.charCode = this.keyCode = this.button = this.screenY = this.screenX = this.clientY = this.clientX = this.offsetY = this.offsetX = 0;
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.og = this.state = null;
  a && this.A(a, b);
};
v(qe, N);
d = qe.prototype;
d.A = function(a, b) {
  var c = this.type = a.type;
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var e = a.relatedTarget;
  e ? mc && (ne(e, "nodeName") || (e = null)) : "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
  this.relatedTarget = e;
  this.offsetX = F || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = F || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
  this.og = a;
  a.defaultPrevented && this.preventDefault();
};
d.stopPropagation = function() {
  qe.t.stopPropagation.call(this);
  this.og.stopPropagation ? this.og.stopPropagation() : this.og.cancelBubble = !0;
};
d.preventDefault = function() {
  qe.t.preventDefault.call(this);
  var a = this.og;
  if (a.preventDefault) {
    a.preventDefault();
  } else {
    if (a.returnValue = !1, pe) {
      try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1;
        }
      } catch (b) {
      }
    }
  }
};
d.gw = function() {
  return this.og;
};
d.k = function() {
};
var re = "closure_listenable_" + (1E6 * Math.random() | 0), se = function(a) {
  try {
    return!(!a || !a[re]);
  } catch (b) {
    return!1;
  }
}, te = 0;
var ue = function(a, b, c, e, f, g) {
  this.Ub = a;
  this.proxy = b;
  this.src = c;
  this.type = e;
  this.capture = !!f;
  this.nl = g;
  this.key = ++te;
  this.removed = this.ll = !1;
};
ue.prototype.tl = function() {
  this.removed = !0;
  this.nl = this.src = this.proxy = this.Ub = null;
};
var ve = function(a) {
  this.src = a;
  this.Wa = {};
  this.xi = 0;
};
d = ve.prototype;
d.BJ = function() {
  return this.xi;
};
d.add = function(a, b, c, e, f) {
  var g = this.Wa[a];
  g || (g = this.Wa[a] = [], this.xi++);
  var h = we(g, b, e, f);
  -1 < h ? (a = g[h], c || (a.ll = !1)) : (a = new ue(b, null, this.src, a, !!e, f), a.ll = c, g.push(a));
  return a;
};
d.remove = function(a, b, c, e) {
  if (!(a in this.Wa)) {
    return!1;
  }
  var f = this.Wa[a];
  b = we(f, b, c, e);
  return-1 < b ? (f[b].tl(), sb(f, b), 0 == f.length && (delete this.Wa[a], this.xi--), !0) : !1;
};
d.gx = function(a) {
  var b = a.type;
  if (!(b in this.Wa)) {
    return!1;
  }
  var c = tb(this.Wa[b], a);
  c && (a.tl(), 0 == this.Wa[b].length && (delete this.Wa[b], this.xi--));
  return c;
};
d.removeAll = function(a) {
  var b = 0, c;
  for (c in this.Wa) {
    if (!a || c == a) {
      for (var e = this.Wa[c], f = 0;f < e.length;f++) {
        ++b, e[f].tl();
      }
      delete this.Wa[c];
      this.xi--;
    }
  }
  return b;
};
d.Ai = function(a, b, c, e) {
  a = this.Wa[a];
  var f = -1;
  a && (f = we(a, b, c, e));
  return-1 < f ? a[f] : null;
};
d.hasListener = function(a, b) {
  var c = q(a), e = q(b);
  return Gb(this.Wa, function(f) {
    for (var g = 0;g < f.length;++g) {
      if (!(c && f[g].type != a || e && f[g].capture != b)) {
        return!0;
      }
    }
    return!1;
  });
};
var we = function(a, b, c, e) {
  for (var f = 0;f < a.length;++f) {
    var g = a[f];
    if (!g.removed && g.Ub == b && g.capture == !!c && g.nl == e) {
      return f;
    }
  }
  return-1;
};
var xe = "closure_lm_" + (1E6 * Math.random() | 0), ye = {}, ze = 0, O = function(a, b, c, e, f) {
  if (r(b)) {
    for (var g = 0;g < b.length;g++) {
      O(a, b[g], c, e, f);
    }
    return null;
  }
  c = Ae(c);
  return se(a) ? a.listen(b, c, e, f) : Be(a, b, c, !1, e, f);
}, Be = function(a, b, c, e, f, g) {
  if (!b) {
    throw Error("Invalid event type");
  }
  var h = !!f, l = Ce(a);
  l || (a[xe] = l = new ve(a));
  c = l.add(b, c, e, f, g);
  if (c.proxy) {
    return c;
  }
  e = De();
  c.proxy = e;
  e.src = a;
  e.Ub = c;
  a.addEventListener ? a.addEventListener(b, e, h) : a.attachEvent(b in ye ? ye[b] : ye[b] = "on" + b, e);
  ze++;
  return c;
}, De = function() {
  var a = Ee, b = oe ? function(c) {
    return a.call(b.src, b.Ub, c);
  } : function(c) {
    c = a.call(b.src, b.Ub, c);
    if (!c) {
      return c;
    }
  };
  return b;
}, Fe = function(a, b, c, e, f) {
  if (r(b)) {
    for (var g = 0;g < b.length;g++) {
      Fe(a, b[g], c, e, f);
    }
    return null;
  }
  c = Ae(c);
  return se(a) ? a.Tg(b, c, e, f) : Be(a, b, c, !0, e, f);
}, Ge = function(a, b, c, e, f) {
  if (r(b)) {
    for (var g = 0;g < b.length;g++) {
      Ge(a, b[g], c, e, f);
    }
    return null;
  }
  c = Ae(c);
  if (se(a)) {
    return a.Zc(b, c, e, f);
  }
  if (!a) {
    return!1;
  }
  if (a = Ce(a)) {
    if (b = a.Ai(b, c, !!e, f)) {
      return He(b);
    }
  }
  return!1;
}, He = function(a) {
  if (fa(a) || !a || a.removed) {
    return!1;
  }
  var b = a.src;
  if (se(b)) {
    return b.fg(a);
  }
  var c = a.type, e = a.proxy;
  b.removeEventListener ? b.removeEventListener(c, e, a.capture) : b.detachEvent && b.detachEvent(c in ye ? ye[c] : ye[c] = "on" + c, e);
  ze--;
  (c = Ce(b)) ? (c.gx(a), 0 == c.BJ() && (c.src = null, b[xe] = null)) : a.tl();
  return!0;
}, Ie = function(a, b) {
  if (!a) {
    return 0;
  }
  if (se(a)) {
    return a.Ku(b);
  }
  var c = Ce(a);
  if (!c) {
    return 0;
  }
  var e = 0, f;
  for (f in c.Wa) {
    if (!b || f == b) {
      for (var g = wb(c.Wa[f]), h = 0;h < g.length;++h) {
        He(g[h]) && ++e;
      }
    }
  }
  return e;
}, Je = function(a, b, c, e, f) {
  c = Ae(c);
  e = !!e;
  return se(a) ? a.Ai(b, c, e, f) : a ? (a = Ce(a)) ? a.Ai(b, c, e, f) : null : null;
}, Le = function(a, b, c, e) {
  var f = 1;
  if (a = Ce(a)) {
    if (b = a.Wa[b]) {
      for (b = wb(b), a = 0;a < b.length;a++) {
        var g = b[a];
        g && g.capture == c && !g.removed && (f &= !1 !== Ke(g, e));
      }
    }
  }
  return Boolean(f);
}, Ke = function(a, b) {
  var c = a.Ub, e = a.nl || a.src;
  a.ll && He(a);
  return c.call(e, b);
}, Me = function(a, b) {
  w(se(a), "Can not use goog.events.dispatchEvent with non-goog.events.Listenable instance.");
  return a.dispatchEvent(b);
}, Ee = function(a, b) {
  if (a.removed) {
    return!0;
  }
  if (!oe) {
    var c = b || ba("window.event"), e = new qe(c, this), f = !0;
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
      for (g = e.currentTarget;g;g = g.parentNode) {
        c.push(g);
      }
      for (var g = a.type, l = c.length - 1;!e.We && 0 <= l;l--) {
        e.currentTarget = c[l], f &= Le(c[l], g, !0, e);
      }
      for (l = 0;!e.We && l < c.length;l++) {
        e.currentTarget = c[l], f &= Le(c[l], g, !1, e);
      }
    }
    return f;
  }
  return Ke(a, new qe(b, this));
}, Ce = function(a) {
  a = a[xe];
  return a instanceof ve ? a : null;
}, Ne = "__closure_events_fn_" + (1E9 * Math.random() >>> 0), Ae = function(a) {
  w(a, "Listener can not be null.");
  if (ga(a)) {
    return a;
  }
  w(a.handleEvent, "An object listener must have handleEvent method.");
  return a[Ne] || (a[Ne] = function(b) {
    return a.handleEvent(b);
  });
};
var Q = function() {
  this.Wc = new ve(this);
  this.MI = this;
};
v(Q, M);
Q.prototype[re] = !0;
d = Q.prototype;
d.Zu = null;
d.ox = function() {
  return this.Zu;
};
d.addEventListener = function(a, b, c, e) {
  O(this, a, b, c, e);
};
d.removeEventListener = function(a, b, c, e) {
  Ge(this, a, b, c, e);
};
d.dispatchEvent = function(a) {
  this.ax();
  var b, c = this.ox();
  if (c) {
    b = [];
    for (var e = 1;c;c = c.ox()) {
      b.push(c), w(1E3 > ++e, "infinite loop");
    }
  }
  c = this.MI;
  e = a.type || a;
  if (s(a)) {
    a = new N(a, c);
  } else {
    if (a instanceof N) {
      a.target = a.target || c;
    } else {
      var f = a;
      a = new N(e, c);
      Qb(a, f);
    }
  }
  var f = !0, g;
  if (b) {
    for (var h = b.length - 1;!a.We && 0 <= h;h--) {
      g = a.currentTarget = b[h], f = g.zl(e, !0, a) && f;
    }
  }
  a.We || (g = a.currentTarget = c, f = g.zl(e, !0, a) && f, a.We || (f = g.zl(e, !1, a) && f));
  if (b) {
    for (h = 0;!a.We && h < b.length;h++) {
      g = a.currentTarget = b[h], f = g.zl(e, !1, a) && f;
    }
  }
  return f;
};
d.k = function() {
  Q.t.k.call(this);
  this.Ku();
  this.Zu = null;
};
d.listen = function(a, b, c, e) {
  this.ax();
  return this.Wc.add(String(a), b, !1, c, e);
};
d.Tg = function(a, b, c, e) {
  return this.Wc.add(String(a), b, !0, c, e);
};
d.Zc = function(a, b, c, e) {
  return this.Wc.remove(String(a), b, c, e);
};
d.fg = function(a) {
  return this.Wc.gx(a);
};
d.Ku = function(a) {
  return this.Wc ? this.Wc.removeAll(a) : 0;
};
d.zl = function(a, b, c) {
  a = this.Wc.Wa[String(a)];
  if (!a) {
    return!0;
  }
  a = wb(a);
  for (var e = !0, f = 0;f < a.length;++f) {
    var g = a[f];
    if (g && !g.removed && g.capture == b) {
      var h = g.Ub, l = g.nl || g.src;
      g.ll && this.fg(g);
      e = !1 !== h.call(l, c) && e;
    }
  }
  return e && !1 != c.Xv;
};
d.Ai = function(a, b, c, e) {
  return this.Wc.Ai(String(a), b, c, e);
};
d.hasListener = function(a, b) {
  return this.Wc.hasListener(q(a) ? String(a) : void 0, b);
};
d.ax = function() {
  w(this.Wc, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?");
};
var Oe = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"), Qe = function(a) {
  if (Pe) {
    Pe = !1;
    var b = k.location;
    if (b) {
      var c = b.href;
      if (c && (c = (c = Qe(c)[3] || null) && decodeURIComponent(c)) && c != b.hostname) {
        throw Pe = !0, Error();
      }
    }
  }
  return a.match(Oe);
}, Pe = F, Re = function(a) {
  var b = Qe(a);
  a = b[1];
  var c = b[2], e = b[3], b = b[4], f = "";
  a && (f += a + ":");
  e && (f += "//", c && (f += c + "@"), f += e, b && (f += ":" + b));
  return f;
};
var Se = ["video_playback", "audio_playback", "image_display", "slideshow", "mirror_tab"];
var Te = function(a, b) {
  N.call(this, a);
  this.activityId = b;
};
v(Te, N);
var Ue = function(a, b) {
  Te.call(this, "activity_error", a);
  this.errorMessage = b;
};
v(Ue, Te);
var Ve = function(a, b, c) {
  Te.call(this, "update_description", a);
  this.description = b;
  this.iconUrl = c;
};
v(Ve, Te);
var We = function() {
  this.source = this.text = this.iconUrl = null;
}, Xe = function(a, b) {
  Q.call(this);
  this.Kt = "ChromeCast";
  this.Yh = "unknown";
  this.Ot = null;
  this.da = a || Ka();
  this.Le = null;
  this.Je = [];
  this.h = "new";
  this.rk = null;
  this.Wd = -1;
  this.Mt = !1;
  this.Rd = new We;
  this.mediaPlayerStatus = new hd(this.da, 2);
  this.mediaPlayerStatus.timeProgress = !0;
  this.Nt = u();
  this.Lt = b || "stop";
  this.zD = !1;
  this.l = this.Jt();
};
v(Xe, Q);
d = Xe.prototype;
d.mr = function() {
  return this.Lt;
};
d.bE = function() {
  return "continue" == this.Lt;
};
d.iy = function(a) {
  return this.zD ? (this.da = a, !0) : !1;
};
d.Qb = function() {
  return this.Kt;
};
d.Bq = function(a) {
  this.Kt = a;
  return this;
};
d.vu = function() {
  var a;
  a = this.rk ? (a = Qe(this.rk)[3] || null) && decodeURIComponent(a) : null;
  return a;
};
d.Ix = function() {
  return this.rk;
};
d.fu = function(a) {
  this.rk = a;
  return this;
};
d.isInternal = function() {
  return 0 <= Se.indexOf(this.Yh);
};
d.oq = function(a) {
  this.Le = a;
  return this;
};
d.c = function() {
  return this.da;
};
d.La = function() {
  return this.Yh;
};
d.me = function(a) {
  this.Yh = a;
  this.l = this.Jt();
  return this;
};
d.pE = function() {
  return this.Mt;
};
d.wF = function(a) {
  this.Mt = a;
  return this;
};
d.Q = function() {
  return this.h;
};
d.Jt = function() {
  return I("cv.Activity." + this.La() + "." + this.c());
};
d.rf = function() {
  return this.Ot;
};
d.xF = function(a) {
  this.Ot = a;
  return this;
};
d.Pk = function(a, b) {
  var c = r(b) ? 0 <= b.indexOf(this.h) : this.h == b;
  c || this.l.info("Invalid state encountered in " + JSON.stringify(a) + ", was " + JSON.stringify(this.h) + "; expecting " + JSON.stringify(b));
  return c;
};
d.uq = function(a) {
  if (this.Pk("initialize", "new")) {
    var b = t(function(b, e) {
      b ? (this.h = "initialized", a(!0)) : a(!1, e);
    }, this);
    this.xk(b);
  } else {
    a(!0);
  }
};
d.xk = function(a) {
  a(!0);
};
d.start = function() {
  this.Pk("start", "initialized") && (this.Kf(), this.h = "playing");
};
d.Kf = n;
d.pause = function() {
  this.Pk("pause", "playing") && (this.Zo(), this.h = "paused");
};
d.Zo = n;
d.stop = function() {
  this.Pk("stop", ["initialized", "playing", "paused"]) && (this.Dd(), this.h = "stopped", this.$());
};
d.Dd = n;
d.Kg = function() {
  return this.Rd;
};
d.Jg = function(a, b, c) {
  if (!this.Rd.source || c >= this.Rd.source) {
    this.Rd.text = a ? Ea(a, 500) : null, this.Rd.iconUrl = b, this.Rd.source = c;
  }
  return this;
};
d.I = function() {
  return this.Wd;
};
d.Tl = function(a) {
  this.Wd = a;
  return this;
};
d.Ra = function() {
  return this.Je;
};
d.tq = function(a) {
  var b = pb(this.Je, function(b) {
    return b.c() == a.c();
  });
  0 <= b ? this.Je[b] = a : this.Je.push(a);
  return this;
};
d.vq = function() {
  if (!this.pE()) {
    var a = this.Rd.text;
    "mirror_tab" == this.La() && this.vu() && (a = this.vu() + " (Tab)");
    this.Sb(new Ve(this.c(), a, this.Rd.iconUrl));
  }
};
d.Ce = function(a) {
  if ("update_description" == a.type) {
    window.document.title = a.description;
    var b = document.querySelector("link[rel=icon]");
    b && (b.href = a.iconUrl || "");
  }
};
d.Sb = function(a, b) {
  this.Le ? this.Le.Sb("activity", a, b || this.Je) : Yc(this.l, "Trying to post message without activity messenger.", a, Nc);
};
d.cf = function(a, b) {
  this.Le ? this.Le.cf(a, b || this.Je) : this.l.e("Trying to post message without activity messenger");
};
d.ao = function(a, b, c, e, f) {
  this.Le ? this.Le.ao(a, b, f || this.Je, c, e) : (this.l.e("Trying to post message without activity messenger"), e && e("Trying to post message without activity messenger"));
};
d.er = function(a) {
  this.Nt = a || u();
  return this;
};
d.Az = function() {
  return this.Nt;
};
d.Ey = function(a) {
  this.mediaPlayerStatus = a;
  return this;
};
d.Sg = function() {
  return "dial_non_ramp_activity" == this.Yh || "unknown" == this.Yh ? null : this.mediaPlayerStatus;
};
d.isLocal = function() {
  return 0 <= this.Wd || -2 == this.Wd || -4 == this.Wd;
};
var Ye = function() {
  this.Pe = new D;
  this.di = new D;
};
d = Ye.prototype;
d.Ea = function(a) {
  return this.Pe.get(a) || null;
};
d.be = function() {
  return this.Pe.N();
};
d.dc = function(a) {
  return this.di.get(a) || [];
};
d.du = function(a) {
  if (this.Pe.get(a.c())) {
    throw "Activity already exists";
  }
  var b = a.Ra();
  this.Pe.set(a.c(), a);
  b.forEach(function(b) {
    var e = this.dc(b.c());
    0 < e.length ? e.push(a) : this.di.set(b.c(), [a]);
  }, this);
};
d.ze = function(a) {
  if (this.Pe.get(a.c())) {
    var b = a.Ra();
    this.Pe.remove(a.c());
    b.forEach(function(b) {
      var e = this.dc(b.c());
      ub(e, function(b) {
        return b.c() == a.c();
      });
      0 == e.length && this.di.remove(b.c());
    }, this);
  }
};
d.Lf = function(a) {
  (a = this.Ea(a)) && this.ze(a);
};
d.mk = function(a, b) {
  var c = this.dc(a);
  this.di.remove(a);
  c.forEach(function(a) {
    C(a.Ra(), function(a) {
      return this.di.Na(a.c());
    }, this) || b && a.bE() || this.Pe.remove(a.c());
  }, this);
};
var R = function(a) {
  this.D = a;
  this.ea = {};
};
v(R, M);
var Ze = [];
d = R.prototype;
d.listen = function(a, b, c, e) {
  return this.TL(a, b, c, e);
};
d.TL = function(a, b, c, e, f) {
  r(b) || (Ze[0] = b, b = Ze);
  for (var g = 0;g < b.length;g++) {
    var h = O(a, b[g], c || this.handleEvent, e || !1, f || this.D || this);
    if (!h) {
      break;
    }
    this.ea[h.key] = h;
  }
  return this;
};
d.Tg = function(a, b, c, e) {
  return this.fp(a, b, c, e);
};
d.cH = function(a, b, c, e, f) {
  return this.fp(a, b, c, e, f);
};
d.fp = function(a, b, c, e, f) {
  if (r(b)) {
    for (var g = 0;g < b.length;g++) {
      this.fp(a, b[g], c, e, f);
    }
  } else {
    a = Fe(a, b, c || this.handleEvent, e, f || this.D || this);
    if (!a) {
      return this;
    }
    this.ea[a.key] = a;
  }
  return this;
};
d.Zc = function(a, b, c, e, f) {
  if (r(b)) {
    for (var g = 0;g < b.length;g++) {
      this.Zc(a, b[g], c, e, f);
    }
  } else {
    if (a = Je(a, b, c || this.handleEvent, e, f || this.D || this)) {
      He(a), delete this.ea[a.key];
    }
  }
  return this;
};
d.removeAll = function() {
  Fb(this.ea, He);
  this.ea = {};
};
d.k = function() {
  R.t.k.call(this);
  this.removeAll();
};
d.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
var $e = function(a) {
  var b = new K;
  b.ja(a);
  return b;
}, af = function(a) {
  var b = new K;
  b.Qa(a);
  return b;
}, bf = function(a, b, c) {
  a.Bb(b, c);
}, cf = function(a, b, c) {
  bf(a, function(a) {
    "success" == a.Q() && b.call(this, a.Fa(), a);
  }, c);
}, df = function(a, b, c) {
  bf(a, function(a) {
    "error" == a.Q() && b.call(this, a.getError(), a);
  }, c);
}, ff = function(a, b, c) {
  var e = new ef([a]);
  bf(a, function(a) {
    "success" == a.Q() ? (a = b.call(c, a), e.qG(a), bf(a, function(a) {
      "success" == a.Q() ? e.ja(a.Fa()) : e.Qa(a.getError());
    })) : e.Qa(a.getError());
  });
  return e;
}, gf = function(a) {
  var b = wb(arguments), c = new ef(b), e = function(a) {
    return "pending" != a.Q();
  }, f = function() {
    "pending" == c.Q() && nb(b, e) && c.ja(b);
  };
  z(b, function(a) {
    a.Bb(f, void 0);
  });
  return c;
}, hf = function(a) {
  var b = wb(arguments), c = new ef(b), e = function(a) {
    return "success" == a.Q();
  };
  bf(gf.apply(gf, b), function(a) {
    a = a.Fa();
    nb(a, e) ? c.ja(a) : c.Qa(a);
  });
  return c;
}, ef = function(a) {
  K.call(this);
  this.$L = a;
};
v(ef, K);
ef.prototype.qG = function(a) {
  this.$L.push(a);
};
var jf = function(a, b) {
  Q.call(this);
  this.Tc = a || 1;
  this.gg = b || k;
  this.kp = t(this.ZI, this);
  this.lp = u();
};
v(jf, Q);
d = jf.prototype;
d.enabled = !1;
d.ma = null;
d.zB = function() {
  return this.Tc;
};
d.setInterval = function(a) {
  this.Tc = a;
  this.ma && this.enabled ? (this.stop(), this.start()) : this.ma && this.stop();
};
d.ZI = function() {
  if (this.enabled) {
    var a = u() - this.lp;
    0 < a && a < 0.8 * this.Tc ? this.ma = this.gg.setTimeout(this.kp, this.Tc - a) : (this.ma && (this.gg.clearTimeout(this.ma), this.ma = null), this.ys(), this.enabled && (this.ma = this.gg.setTimeout(this.kp, this.Tc), this.lp = u()));
  }
};
d.ys = function() {
  this.dispatchEvent("tick");
};
d.start = function() {
  this.enabled = !0;
  this.ma || (this.ma = this.gg.setTimeout(this.kp, this.Tc), this.lp = u());
};
d.stop = function() {
  this.enabled = !1;
  this.ma && (this.gg.clearTimeout(this.ma), this.ma = null);
};
d.k = function() {
  jf.t.k.call(this);
  this.stop();
  delete this.gg;
};
var S = function(a, b, c) {
  if (ga(a)) {
    c && (a = t(a, c));
  } else {
    if (a && "function" == typeof a.handleEvent) {
      a = t(a.handleEvent, a);
    } else {
      throw Error("Invalid listener argument");
    }
  }
  return 2147483647 < b ? -1 : k.setTimeout(a, b || 0);
};
var kf = function(a) {
  Q.call(this);
  this.X = this.Dm = this.Cm = null;
  this.h = a || "connecting";
  this.$a = null;
  this.l = I("cv.Channel");
};
v(kf, Q);
d = kf.prototype;
d.k = function() {
  kf.t.k.call(this);
  this.disconnect();
};
d.disconnect = function(a) {
  "disconnected" != this.h ? (a ? this.l.e("Disconnect channel to " + this.X + " due to error: " + a) : this.l.info("Disconnect channel to " + this.X), this.$a && this.l.e("Channel already has error when disconnecting: " + JSON.stringify(this.$a)), this.$a = a || null, this.ik(), this.sb("disconnected")) : a && this.l.e("Reporting error on disconnected channel: " + JSON.stringify(a));
};
d.Y = function() {
  return "connected" == this.h;
};
d.EE = function() {
  return "connecting" == this.h;
};
d.FE = function() {
  return "disconnected" == this.h;
};
d.Q = function() {
  return this.h;
};
d.sb = function(a) {
  var b = this.h;
  b != a && (this.h = a, this.dispatchEvent(new lf("a", b, a)), this.Cm && this.Cm(b, a));
};
d.getError = function() {
  return "disconnected" == this.h ? this.$a : null;
};
d.onMessage = function(a) {
  this.dispatchEvent(new mf("b", a));
  this.Dm && this.Dm(a);
};
d.Eq = function(a, b) {
  function c() {
    "connected" == e.Q() ? a() : "disconnected" == e.Q() && b("Channel failed to connect.");
  }
  var e = this;
  "connecting" == this.Q() ? Fe(this, "a", c) : c();
};
var lf = function(a, b, c) {
  N.call(this, a);
  this.Rg = c;
};
v(lf, N);
var mf = function(a, b) {
  N.call(this, a);
  this.message = b;
};
v(mf, N);
var nf = function(a, b, c) {
  N.call(this, a);
  this.message = b;
  this.X = c || null;
};
v(nf, N);
var of = function() {
  Q.call(this);
  this.a = I("cv.ChannelService");
  this.Ed = new D;
  this.Xi = new D;
  this.pj = new jf(18E5);
  this.r = null;
  this.lb = new R(this);
};
v(of, Q);
d = of.prototype;
d.BE = function(a) {
  this.r = a;
};
d.A = function() {
  w(this.r, "Sets activityService first");
  this.pj.start();
  this.lb.listen(this.pj, "tick", this.PG);
};
d.k = function() {
  of.t.k.call(this);
  this.pj.stop();
  this.pj.$();
  this.lb.$();
};
d.PG = function() {
  if (!this.Ed.ob()) {
    var a = [];
    Eb(this.Ed.pG(), function(b) {
      0 < this.r.dc(b).length || a.push(b);
    }, this);
    a.forEach(this.ne, this);
  }
};
d.Ul = function(a) {
  return this.Ed.Na(a);
};
d.ne = function(a) {
  this.a.info("Remove channel to " + a);
  var b = this.Ed.get(a);
  b && (this.Ed.remove(a), b.disconnect());
  if (a = this.Xi.get(a)) {
    this.a.info("existing channel removed."), a.cancel();
  }
};
d.Ry = function(a) {
  w(a.X, "New channel has no peer ID");
  w(a.Y(), "New channel is not disconnected.");
  this.a.info("Created a channel to " + a.X);
  a.Dm = t(this.un, this, a.X);
  a.Cm = t(this.lB, this, a.X);
  this.Ed.set(a.X, a);
};
d.lB = function(a, b, c) {
  "disconnected" == c && (this.a.info("Removing a disconnected channel to " + a), (b = this.Ed.get(a)) && this.ne(a), this.dispatchEvent(new nf("channel_disconnect", a)), b && b.getError() && this.dispatchEvent(new nf("channel_error", b.getError(), a)));
};
d.cf = function(a, b, c) {
  this.qn(["ramp", a], b, null, c || null);
};
d.ao = function(a, b, c, e, f) {
  -1 != $c.indexOf(a) ? (this.a.e("Attempting to post message to reserved namespace: " + a), f && f("Reserved namespace: " + a)) : this.qn([a, b], c, e, f);
};
d.Sb = function(a, b, c, e) {
  this.qn(["cv", new bd(a, b)], c, null, e || null);
};
d.qn = function(a, b, c, e) {
  0 != b.length && (this.QE(a, b), b.forEach(function(b) {
    var g = this.vj(b);
    cf(g, function(b) {
      b.send(a);
      c && c();
    }, this);
    df(g, function(a) {
      e ? e(String(a)) : this.dispatchEvent(new nf("channel_error", String(a), b.c()));
    }, this);
  }, this));
};
d.QE = function(a, b) {
  if (this.a.Hf(H)) {
    var c = "";
    b.forEach(function(a) {
      c += " " + a.c();
    });
    this.a.Xg("Posting message to" + c + ": " + JSON.stringify(a));
  }
};
d.vj = function(a) {
  var b = a.c(), c = this.Ed.get(b);
  if (c) {
    return w(c.Y(), "Channel to " + c.X + " is not connected."), $e(c);
  }
  if ((c = this.Xi.get(b)) && "pending" == c.Q()) {
    return this.a.info("Channel to " + b + " in creation..."), c;
  }
  this.a.info("Creating channel to " + b);
  c = this.xf(a);
  a = ff(c, function(a) {
    a = a.Fa();
    this.Ry(a);
    return $e(a);
  }, this);
  this.Xi.set(b, a);
  a.Bb(function() {
    this.Xi.remove(b);
  }, this);
  return a;
};
d.un = function(a, b) {
  if (b) {
    if (this.a.Xg("Received message from " + a + ": " + JSON.stringify(b)), r(b) && "ramp" == b[0] && ha(b[1]) && q(b[1].cmd_id) && q(b[1].type)) {
      this.dispatchEvent(new nf("ramp", b[1], a));
    } else {
      if (r(b) && "cv" == b[0] && ha(b[1]) && q(b[1].type) && 0 <= ad.indexOf(b[1].type)) {
        var c = b[1], e = this.yC(c.type);
        e && this.dispatchEvent(new nf(e, c.message, a));
      } else {
        r(b) && 2 == b.length && s(b[0]) && -1 == $c.indexOf(b[0]) && (ha(b[1]) || s(b[1]) || null === b[1]) ? this.dispatchEvent(new nf("custom_message", b, a)) : cd(b) || Yc(this.a, "Unrecognized channel message", b, Nc);
      }
    }
  }
};
d.yC = function(a) {
  switch(a) {
    case "launch_service":
      return "launch_service";
    case "activity_service":
      return "activity_service";
    case "activity":
      return "activity";
    default:
      return null;
  }
};
var pf = function(a, b) {
  Q.call(this);
  this.a = I("cv.ActivityService");
  this.Jc = a;
  this.T = b;
  this.lb = new R(this);
};
v(pf, Q);
var qf = function(a, b) {
  N.call(this, a);
  this.activityId = b;
};
v(qf, N);
d = pf.prototype;
d.A = function() {
  this.lb.listen(this.Jc, "activity", this.BI);
  this.lb.listen(this.Jc, "activity_service", this.CI);
  this.lb.listen(this.Jc, "channel_disconnect", this.AI);
  this.lb.listen(this.Jc, "custom_message", this.Vw);
};
d.Vw = n;
d.wf = function() {
  return this.lb;
};
d.k = function() {
  pf.t.k.call(this);
  this.lb.$();
};
d.wd = function() {
  return C(this.be(), function(a) {
    return "mirror_tab" == a.La();
  });
};
d.Ea = function(a) {
  return this.T.Ea(a);
};
d.dc = function(a) {
  return this.T.dc(a);
};
d.be = function() {
  return this.T.be();
};
d.BI = function(a) {
  w("activity" == a.type, "Got event type " + a.type + "; expect activity");
  var b = a.message, c = this.T.Ea(b.activityId);
  c ? c.Ce(b) : Yc(this.a, "Received a remote message for unknown activity: " + b.activityId, a);
};
d.CI = function(a) {
  w("activity_service" == a.type, "Got event type " + a.type + "; expect activity_service");
  var b = a.message;
  "remove_activity" == b.type ? this.eC(b.activityId) : "leave_activity" == b.type ? this.fC(b.activityId, a.X) : Yc(this.a, "Received unknown activity service message.", b);
};
d.eC = function(a) {
  this.T.Ea(a) ? (this.a.info("Peer informs activity removal: " + a), this.Jm(a), this.T.Ea(a).stop(), this.T.Lf(a), this.dispatchEvent(new qf("remove_activity", a))) : this.a.info("Activity does not exist: " + a);
};
d.fC = n;
d.AI = function(a) {
  w("channel_disconnect" == a.type);
  a = a.message;
  this.a.info("Handle peer " + a + " disconnection.");
  this.Ts(a);
};
d.Ts = n;
d.Jm = n;
d.Vq = function(a) {
  this.a.info("Inform peer to remove activity " + a.c() + " " + a.Qb() + " " + a.La());
  this.Jc.Sb("activity_service", new qf("remove_activity", a.c()), a.Ra());
};
d.pz = function(a) {
  this.a.info("Inform peer to leave activity " + a.c() + " " + a.Qb() + " " + a.La());
  this.Jc.Sb("activity_service", new qf("leave_activity", a.c()), a.Ra());
};
var rf = function(a, b, c) {
  this.Xh = a;
  this.Tc = b;
  this.D = c;
  this.Zh = t(this.oH, this);
};
v(rf, M);
d = rf.prototype;
d.xl = !1;
d.sp = 0;
d.ma = null;
d.yv = function() {
  this.ma || this.sp ? this.xl = !0 : this.qi();
};
d.stop = function() {
  this.ma && (k.clearTimeout(this.ma), this.ma = null, this.xl = !1);
};
d.pause = function() {
  this.sp++;
};
d.k = function() {
  rf.t.k.call(this);
  this.stop();
};
d.oH = function() {
  this.ma = null;
  this.xl && !this.sp && (this.xl = !1, this.qi());
};
d.qi = function() {
  this.ma = S(this.Zh, this.Tc);
  this.Xh.call(this.D);
};
var sf = function(a, b, c) {
  Te.call(this, a, b);
  this.state = c || null;
};
v(sf, Te);
var tf = function(a, b, c, e) {
  Xe.call(this, c, e);
  this.me(a);
  this.pi = b;
  new rf(function() {
    this.Sb(new sf("timeupdate", this.da, this.pi));
  }, 1E3, this);
};
v(tf, Xe);
var uf = function() {
  this.mediaUrl = "";
  this.currentTime = null;
  this.duration = 0;
  this.paused = !0;
  this.muted = !1;
  this.volume = 1;
};
d = tf.prototype;
d.rf = function() {
  return this.pi;
};
d.Kf = function() {
  this.play();
};
d.Zo = function() {
  this.pi.paused = !0;
  this.Sb(new sf("pause", this.da));
};
d.Dd = function() {
  this.pause();
};
d.play = function() {
  this.pi.paused = !1;
  this.Sb(new sf("play", this.da));
};
d.Ce = function(a) {
  tf.t.Ce.call(this, a);
  a.state && (this.pi = a.state);
  this.dispatchEvent(a);
};
var vf = function(a, b, c) {
  R.call(this, this);
  this.a = I("cv.PcStatsCollector");
  this.iC = a;
  this.kC = b;
  this.Qs = c;
  this.Oj = new jf(2E3);
  this.In = [];
  this.Rj = 0;
  this.listen(this.Oj, "tick", this.nC);
};
v(vf, R);
vf.prototype.start = function() {
  this.Oj.start();
};
vf.prototype.stop = function() {
  this.Oj.stop();
};
vf.prototype.k = function() {
  this.Oj.$();
};
vf.prototype.Bl = function() {
  0 != this.Rj && (this.kC(this.In), this.Rj = 0, this.In = []);
};
var wf = {googLocalCertificateId:!0, googRemoteCertificateId:!0, googDerBase64:!0, googFingerprint:!0};
vf.prototype.KJ = function(a) {
  if (!a) {
    return null;
  }
  !q(a.names) && q(a.local) && (a = a.local);
  if (!q(a.names) || "ssrc" != a.type) {
    return null;
  }
  this.a.C("Processing statsReport: ts = " + a.timestamp + ", type = " + a.type + ", id = " + a.id);
  var b = {};
  b.timestamp = a.timestamp;
  b.type = a.type;
  b.id = a.id;
  a.names().forEach(function(c) {
    wf[c] || (b[c] = a.stat(c));
  });
  return b == {} ? null : b;
};
vf.prototype.JK = function(a) {
  var b = [];
  a.result().forEach(function(a) {
    (a = this.KJ(a)) && b.push(a);
  }, this);
  this.In.push(b);
  this.Rj++;
  10 == this.Rj && this.Bl();
};
vf.prototype.nC = function() {
  var a = this.iC();
  a && (!this.Qs || !q(a.getLocalStreams) || a.getLocalStreams() && 0 != a.getLocalStreams().length) && (this.Qs || !q(a.getRemoteStreams) || a.getRemoteStreams() && 0 != a.getRemoteStreams().length) && a.getStats(t(this.JK, this));
};
var xf = function(a) {
  this.vg = 0;
  this.Fp = a || 100;
  this.vd = [];
};
d = xf.prototype;
d.add = function(a) {
  var b = this.vd[this.vg];
  this.vd[this.vg] = a;
  this.vg = (this.vg + 1) % this.Fp;
  return b;
};
d.get = function(a) {
  a = this.Ex(a);
  return this.vd[a];
};
d.set = function(a, b) {
  a = this.Ex(a);
  this.vd[a] = b;
};
d.L = function() {
  return this.vd.length;
};
d.ob = function() {
  return 0 == this.vd.length;
};
d.clear = function() {
  this.vg = this.vd.length = 0;
};
d.N = function() {
  return this.pp(this.L());
};
d.pp = function(a) {
  var b = this.L(), c = [];
  for (a = this.L() - a;a < b;a++) {
    c.push(this.get(a));
  }
  return c;
};
d.kb = function() {
  for (var a = [], b = this.L(), c = 0;c < b;c++) {
    a[c] = c;
  }
  return a;
};
d.Na = function(a) {
  return a < this.L();
};
d.tg = function(a) {
  for (var b = this.L(), c = 0;c < b;c++) {
    if (this.get(c) == a) {
      return!0;
    }
  }
  return!1;
};
d.Ex = function(a) {
  if (a >= this.vd.length) {
    throw Error("Out of bounds exception");
  }
  return this.vd.length < this.Fp ? a : (this.vg + Number(a)) % this.Fp;
};
var yf = function() {
  this.a = I("cv.PcStatsStore");
  this.wh = new xf(900);
  this.vh = new xf(900);
  this.Fh = null;
};
ca(yf);
yf.prototype.JG = function(a) {
  a.forEach(function(a) {
    this.wh.add(a);
  }, this);
  this.Fh && this.Fh();
};
yf.prototype.Oz = function(a) {
  a.forEach(function(a) {
    this.vh.add(a);
  }, this);
  this.Fh && this.Fh();
};
yf.prototype.reset = function() {
  this.wh.clear();
  this.vh.clear();
};
var zf = function(a, b) {
  this.senderStats = a;
  this.receiverStats = b;
};
yf.prototype.getStats = function() {
  return new zf(this.wh.N(), this.vh.N());
};
yf.prototype.pJ = function(a) {
  return this.wh.L() < a || this.vh.L() < a ? null : new zf(this.wh.pp(a), this.vh.pp(a));
};
yf.prototype.oE = function(a) {
  this.Fh = a;
};
var Af = ["VP8", "CAST1"];
var Bf = function(a) {
  this.qb = a;
};
d = Bf.prototype;
d.YF = function() {
  return this.qb;
};
d.Xn = function(a) {
  this.qb = this.qb.replace(/(m=audio.*\r\n)/g, "$1b=AS:" + a + "\r\n");
};
d.TF = function() {
  this.qb = this.qb.replace(/a=group:BUNDLE\saudio\svideo.*\r\n/, "");
};
d.nv = function(a, b, c) {
  for (var e = this.qb, f = e.replace(/[\s\S]*m=audio\s\d+\sRTP\/SAVPF((\s\d+)+)[\s\S]*/, "$1").replace(/(^\s+)|(\s+$)/g, "").split(" "), g = [], h = 0, l = f.length;h < l;++h) {
    -1 != e.search(RegExp("a=rtpmap:" + f[h] + "\\s+opus", "i")) ? g.push(f[h]) : e = e.replace(RegExp("a=rtpmap:" + f[h] + ".*\\r\\n"), "");
  }
  e = e.replace(/(m=audio\s\d+\sRTP\/SAVPF\s).*/, "$1" + g.join(" "));
  g.length && (a && (e = e.replace(RegExp("(a=fmtp:" + g[0] + ".*)\\r\\n", "i"), "$1; " + (c ? "sprop-stereo" : "stereo") + "=1\r\n")), b && (e = e.replace(RegExp("(a=fmtp:" + g[0] + ".*)\\r\\n", "i"), "$1\r\na=rtcp-fb:" + g[0] + " nack\r\n")));
  this.qb = e;
};
d.VF = function() {
  var a = this.qb;
  Af.forEach(function(b) {
    var c = a, e = Cf(c, b);
    if (e) {
      b = "a=rtcp-fb:" + e + " ccm fir";
      var f = "a=rtcp-fb:" + e + " nack", g = "a=rtcp-fb:" + e + " goog-remb", e = RegExp("(a=rtpmap:" + e + ".*)\\r\\n", "i");
      -1 == c.search(b) && (c = c.replace(e, "$1\r\n" + b + "\r\n"));
      -1 == c.search(f) && (c = c.replace(e, "$1\r\n" + f + "\r\n"));
      -1 == c.search(g) && (c = c.replace(e, "$1\r\n" + g + "\r\n"));
    }
    a = c;
  });
  this.qb = a;
};
d.UF = function() {
  for (var a = this.qb, b = Df(a), c = [], e = 0, f = b.length;e < f;++e) {
    var g = !1;
    Af.forEach(function(f) {
      -1 != a.search(RegExp("a=rtpmap:" + b[e] + "\\s+" + f, "i")) && (c.push(b[e]), g = !0);
    });
    g || (a = a.replace(RegExp("a=rtpmap:" + b[e] + ".*\\r\\n"), ""));
  }
  this.qb = a = a.replace(/(m=video\s\d+\sRTP\/SAVPF\s).*/, "$1" + c.join(" "));
};
d.ZF = function(a) {
  var b = this.qb;
  if ((a = b.match(RegExp("a=rtpmap:(\\d+)\\s" + a, "i"))) && 2 == a.length) {
    a = a[1];
    var c = Df(b), e = c.indexOf(a);
    -1 != e && (c.splice(e, 1), c.unshift(a), this.qb = b = b.replace(/(m=video\s\d+\sRTP\/SAVPF\s).*/, "$1" + c.join(" ")));
  }
};
d.ov = function(a, b, c, e) {
  var f = this.qb, g = null;
  Af.forEach(function(e) {
    e = Cf(f, e);
    g || (g = e);
    var l = f;
    e && (l = l.replace(RegExp("(a=rtpmap:" + e + ".*)\\r\\n", "i"), "$1\r\na=fmtp:" + e + " x-google-min-bitrate=" + a + "; x-google-max-bitrate=" + b + "; x-google-max-quantization=" + c + "\r\n"));
    f = l;
  });
  e && g && (f = f.replace(RegExp("(a=rtpmap:" + g + ".*)\\r\\n", "i"), "$1\r\na=x-google-buffer-latency:" + e + "\r\n"));
  this.qb = f;
};
var Df = function(a) {
  return a.replace(/[\s\S]*m=video\s\d+\sRTP\/SAVPF((\s\d+)+)[\s\S]*/, "$1").replace(/(^\s+)|(\s+$)/g, "").split(" ");
}, Cf = function(a, b) {
  for (var c = Df(a), e = 0, f = c.length;e < f;++e) {
    if (-1 != a.search(RegExp("a=rtpmap:" + c[e] + "\\s+" + b, "i"))) {
      return c[e];
    }
  }
  return "";
};
var Ef = {mandatory:{OfferToReceiveAudio:!0, OfferToReceiveVideo:!0}}, Ff = {mandatory:{IceRestart:!0, OfferToReceiveAudio:!0, OfferToReceiveVideo:!0}}, Gf = function(a, b, c) {
  Q.call(this);
  w(q(webkitRTCPeerConnection), "webkitRTCPeerConnection is not available.  Do you need to set flags?");
  this.a = I("cv.PeerConnection");
  this.$c = a;
  this.$r = b;
  this.js = Ef;
  this.F = c || new Rd;
  this.ib = this.fB();
  this.kz = !1;
  this.ye = null;
  this.gB();
};
v(Gf, Q);
d = Gf.prototype;
d.gB = function() {
  var a = t(function(a) {
    this.$c ? yf.G().JG(a) : this.$r(JSON.stringify({type:"stats", stats:a}));
  }, this);
  this.ye = new vf(t(function() {
    return this.ib;
  }, this), a, this.$c);
};
d.ic = !1;
d.se = n;
d.Ur = n;
d.LJ = function(a) {
  this.se = a;
};
d.vF = function(a) {
  this.Ur = a;
};
d.sG = function() {
  return this.ic;
};
d.qC = function() {
  return{iceServers:[{url:"stun:stun.l.google.com:19302"}]};
};
d.fB = function() {
  var a = this.qC(), b = new webkitRTCPeerConnection(a);
  b.onicecandidate = t(this.sC, this);
  b.oniceconnectionstatechange = t(this.tC, this);
  b.gM = t(this.uC, this);
  b.onopen = t(this.vC, this);
  b.onaddstream = t(this.wC, this);
  b.onremovestream = t(this.xC, this);
  this.a.info("Created webkitRTCPeerConnnection with config: " + JSON.stringify(a));
  return b;
};
d.start = function(a) {
  this.ic || (this.ic = !0, this.$c && this.UI(), a && this.ye && this.ye.start());
};
d.stop = function() {
  this.ic = !1;
  this.ib.close();
  this.ye && this.ye.stop();
};
d.addStream = function(a) {
  this.ib.addStream(a);
};
d.removeStream = function(a) {
  this.ic && this.ib.removeStream(a);
};
d.k = function() {
  this.stop();
  this.ib = null;
  this.ye && this.ye.$();
  Gf.t.k.call(this);
};
d.UI = function() {
  w(this.$c, "Must be initiator to create an offer!");
  this.a.info("Sending offer to peer.");
  this.ib.createOffer(t(this.bn, this), this.se, this.js);
};
d.Pz = function() {
  this.ib.createAnswer(t(this.bn, this), this.se, this.js);
};
d.bn = function(a) {
  var b = new Bf(a.sdp);
  this.$c ? (b.TF(), "off" != this.F.bufferedMode && b.UF(), this.F.useOpus && b.nv(!0, this.F.enableAudioNack, !0)) : (this.F.useOpus && (this.F.audioBitrate && b.Xn(this.F.audioBitrate), b.nv(!0, this.F.enableAudioNack, !1)), this.F.preferredVideoCodec && b.ZF(this.F.preferredVideoCodec), "off" != this.F.bufferedMode ? b.ov(this.F.minVideoBitrate, this.F.maxVideoBitrate, this.F.videoQuality, this.F.XF()) : b.ov(this.F.minVideoBitrate, this.F.maxVideoBitrate, this.F.videoQuality), b.VF());
  a.sdp = b.YF();
  this.ib.setLocalDescription(a, n, this.se);
  this.ns(a);
};
d.ns = function(a) {
  a = JSON.stringify(a);
  this.a.info("===>: " + a);
  this.$r(a);
};
d.SG = function(a) {
  var b = JSON.parse(a);
  "stats" != b.type && this.a.C("<===: " + a);
  if ("offer" === b.type) {
    w(!this.$c, "Must not be initiator to answer an offer!"), this.ic || this.start(), this.ib.setRemoteDescription(new RTCSessionDescription(b), n, this.se), this.Pz();
  } else {
    if ("answer" === b.type && this.ic) {
      w(this.$c, "Must be initiator to receive an answer!"), this.ib.setRemoteDescription(new RTCSessionDescription(b), n, this.se);
    } else {
      if ("candidate" === b.type && this.ic) {
        a = new RTCIceCandidate({sdpMLineIndex:b.label, sdpMid:b.id, candidate:b.candidate});
        try {
          this.Qz(a, this.$c) && (this.a.info("Adding candidate " + JSON.stringify(a)), this.ib.addIceCandidate(a));
        } catch (c) {
          this.a.w("Error calling addIceCandidate; messages out of order?", c);
        }
      } else {
        "stats" === b.type && yf.G().Oz(b.stats);
      }
    }
  }
};
d.Qz = function(a, b) {
  if (b) {
    if (this.F.enableAudioTcp && -1 != a.sdpMid.indexOf("audio") && -1 != a.candidate.indexOf("udp") || this.F.enableVideoTcp && -1 != a.sdpMid.indexOf("video") && -1 != a.candidate.indexOf("udp")) {
      return!1;
    }
  } else {
    if (this.F.enableAudioTcp && -1 != a.sdpMid.indexOf("audio") && -1 != a.candidate.indexOf("tcp") && -1 != a.candidate.indexOf("0 typ host") || this.F.enableVideoTcp && -1 != a.sdpMid.indexOf("video") && -1 != a.candidate.indexOf("tcp") && -1 != a.candidate.indexOf("0 typ host")) {
      return!1;
    }
  }
  return!0;
};
d.sC = function(a) {
  a.candidate ? this.ns({type:"candidate", label:a.candidate.sdpMLineIndex, id:a.candidate.sdpMid, candidate:a.candidate.candidate}) : this.a.info("End of candidates.");
};
d.tC = function() {
  if (this.ib) {
    var a = this.ib.iceConnectionState;
    this.a.info("New ICE connection state: " + a + ".");
    "connected" == a ? this.dispatchEvent(new N("iceconnected")) : this.$c && "disconnected" == a && (this.a.e("Ice connection state is bad."), this.kz ? (this.a.info("Restarting ICE."), this.ib.createOffer(t(this.bn, this), this.se, Ff)) : this.Ur());
  }
};
d.uC = function(a) {
  this.a.info("Session connecting.");
  this.dispatchEvent(a);
};
d.vC = function(a) {
  this.a.info("Session opened.");
  this.dispatchEvent(a);
};
d.wC = function(a) {
  this.a.info("Stream added.");
  this.dispatchEvent(a);
};
d.xC = function(a) {
  this.a.info("Stream removed.");
  this.dispatchEvent(a);
};
d.getStats = function(a) {
  this.ib.getStats(a);
};
var Hf = function(a, b, c) {
  Xe.call(this, c);
  this.me("mirror_tab");
  this.Sc = b;
  this.zoomFactor = 1;
  this.Vb = new Gf(a, t(this.QI, this), this.Sc);
  this.mediaPlayerStatus.hasPause = !1;
};
v(Hf, Xe);
Hf.prototype.xt = function() {
  return-2 == this.I();
};
Hf.prototype.ok = function() {
  return 0 <= this.I();
};
Hf.prototype.stream = null;
Hf.prototype.url = null;
var If = function(a, b, c) {
  Te.call(this, a, b);
  this.zoomFactor = c;
};
v(If, Te);
var Jf = function(a, b) {
  Te.call(this, "webrtc", b);
  this.message = a;
};
v(Jf, Te);
d = Hf.prototype;
d.zk = function() {
  return this.url;
};
d.xk = function(a) {
  this.Vb.LJ(t(this.JJ, this));
  a(!0);
};
d.Zo = function() {
  this.l.info("Pausing tab mirroring...");
  this.Zn("pause");
};
d.Dd = function() {
  this.l.info("Stopping tab mirroring...");
  this.Vb && (this.Vb.stop(), this.Vb = null);
};
d.Zn = function(a, b) {
  this.dispatchEvent(this.zx(a, b));
};
d.RF = function(a) {
  this.Sb(this.zx(a));
};
d.zx = function(a, b) {
  return new If(a, this.da, this.zoomFactor, b);
};
d.QI = function(a) {
  this.Sb(new Jf(a, this.da));
};
d.JJ = function(a) {
  this.l.e("PeerConnection error: " + a);
  this.dispatchEvent(new Ue(this.da, a));
  this.stop();
};
d.Ce = function(a) {
  Hf.t.Ce.call(this, a);
  "webrtc" == a.type && this.Vb && this.Vb.SG(a.message);
};
var Kf = function(a) {
  return lb(a, function(a) {
    a = a.toString(16);
    return 1 < a.length ? a : "0" + a;
  }).join("");
};
var Lf = null, Mf = null, Nf = null, Of = null, Pf = mc || F || lc || "function" == typeof k.atob, Rf = function(a, b) {
  Qf();
  for (var c = b ? Of : Mf, e = [], f = 0;f < a.length;) {
    var g = c[a.charAt(f++)], h = f < a.length ? c[a.charAt(f)] : 0;
    ++f;
    var l = f < a.length ? c[a.charAt(f)] : 0;
    ++f;
    var p = f < a.length ? c[a.charAt(f)] : 0;
    ++f;
    if (null == g || null == h || null == l || null == p) {
      throw Error();
    }
    e.push(g << 2 | h >> 4);
    64 != l && (e.push(h << 4 & 240 | l >> 2), 64 != p && e.push(l << 6 & 192 | p));
  }
  return e;
}, Qf = function() {
  if (!Lf) {
    Lf = {};
    Mf = {};
    Nf = {};
    Of = {};
    for (var a = 0;65 > a;a++) {
      Lf[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), Mf[Lf[a]] = a, Nf[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a), Of[Nf[a]] = a;
    }
  }
};
var Sf = function() {
  this.ud = -1;
};
var Tf = function() {
  this.ud = -1;
  this.ud = 64;
  this.Ba = [];
  this.ip = [];
  this.EH = [];
  this.ol = [];
  this.ol[0] = 128;
  for (var a = 1;a < this.ud;++a) {
    this.ol[a] = 0;
  }
  this.ml = this.rg = 0;
  this.reset();
};
v(Tf, Sf);
Tf.prototype.reset = function() {
  this.Ba[0] = 1732584193;
  this.Ba[1] = 4023233417;
  this.Ba[2] = 2562383102;
  this.Ba[3] = 271733878;
  this.Ba[4] = 3285377520;
  this.ml = this.rg = 0;
};
Tf.prototype.pl = function(a, b) {
  b || (b = 0);
  var c = this.EH;
  if (s(a)) {
    for (var e = 0;16 > e;e++) {
      c[e] = a.charCodeAt(b) << 24 | a.charCodeAt(b + 1) << 16 | a.charCodeAt(b + 2) << 8 | a.charCodeAt(b + 3), b += 4;
    }
  } else {
    for (e = 0;16 > e;e++) {
      c[e] = a[b] << 24 | a[b + 1] << 16 | a[b + 2] << 8 | a[b + 3], b += 4;
    }
  }
  for (e = 16;80 > e;e++) {
    var f = c[e - 3] ^ c[e - 8] ^ c[e - 14] ^ c[e - 16];
    c[e] = (f << 1 | f >>> 31) & 4294967295;
  }
  for (var g = this.Ba[0], h = this.Ba[1], l = this.Ba[2], p = this.Ba[3], B = this.Ba[4], G, e = 0;80 > e;e++) {
    40 > e ? 20 > e ? (f = p ^ h & (l ^ p), G = 1518500249) : (f = h ^ l ^ p, G = 1859775393) : 60 > e ? (f = h & l | p & (h | l), G = 2400959708) : (f = h ^ l ^ p, G = 3395469782), f = (g << 5 | g >>> 27) + f + B + G + c[e] & 4294967295, B = p, p = l, l = (h << 30 | h >>> 2) & 4294967295, h = g, g = f;
  }
  this.Ba[0] = this.Ba[0] + g & 4294967295;
  this.Ba[1] = this.Ba[1] + h & 4294967295;
  this.Ba[2] = this.Ba[2] + l & 4294967295;
  this.Ba[3] = this.Ba[3] + p & 4294967295;
  this.Ba[4] = this.Ba[4] + B & 4294967295;
};
Tf.prototype.update = function(a, b) {
  q(b) || (b = a.length);
  for (var c = b - this.ud, e = 0, f = this.ip, g = this.rg;e < b;) {
    if (0 == g) {
      for (;e <= c;) {
        this.pl(a, e), e += this.ud;
      }
    }
    if (s(a)) {
      for (;e < b;) {
        if (f[g] = a.charCodeAt(e), ++g, ++e, g == this.ud) {
          this.pl(f);
          g = 0;
          break;
        }
      }
    } else {
      for (;e < b;) {
        if (f[g] = a[e], ++g, ++e, g == this.ud) {
          this.pl(f);
          g = 0;
          break;
        }
      }
    }
  }
  this.rg = g;
  this.ml += b;
};
Tf.prototype.xo = function() {
  var a = [], b = 8 * this.ml;
  56 > this.rg ? this.update(this.ol, 56 - this.rg) : this.update(this.ol, this.ud - (this.rg - 56));
  for (var c = this.ud - 1;56 <= c;c--) {
    this.ip[c] = b & 255, b /= 256;
  }
  this.pl(this.ip);
  for (c = b = 0;5 > c;c++) {
    for (var e = 24;0 <= e;e -= 8) {
      a[b] = this.Ba[c] >> e & 255, ++b;
    }
  }
  return a;
};
var Uf = !mc && !E || E && E && 9 <= Cc || mc && Ac("1.9.1"), Vf = E && !Ac("9");
var Xf = function(a) {
  return a ? new Wf(9 == a.nodeType ? a : a.ownerDocument || a.document) : Wa || (Wa = new Wf);
}, Yf = function(a, b) {
  return s(b) ? a.getElementById(b) : b;
}, $f = function(a, b, c, e) {
  function f(c) {
    c && b.appendChild(s(c) ? a.createTextNode(c) : c);
  }
  for (;e < c.length;e++) {
    var g = c[e];
    !ea(g) || ha(g) && 0 < g.nodeType ? f(g) : z(Zf(g) ? wb(g) : g, f);
  }
}, ag = function(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
}, bg = function(a) {
  return Uf && void 0 != a.children ? a.children : A(a.childNodes, function(a) {
    return 1 == a.nodeType;
  });
}, cg = {SCRIPT:1, STYLE:1, HEAD:1, IFRAME:1, OBJECT:1}, dg = {IMG:" ", BR:"\n"}, fg = function(a) {
  if (Vf && "innerText" in a) {
    a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
  } else {
    var b = [];
    eg(a, b, !0);
    a = b.join("");
  }
  a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
  a = a.replace(/\u200B/g, "");
  Vf || (a = a.replace(/ +/g, " "));
  " " != a && (a = a.replace(/^\s*/, ""));
  return a;
}, eg = function(a, b, c) {
  if (!(a.nodeName in cg)) {
    if (3 == a.nodeType) {
      c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
    } else {
      if (a.nodeName in dg) {
        b.push(dg[a.nodeName]);
      } else {
        for (a = a.firstChild;a;) {
          eg(a, b, c), a = a.nextSibling;
        }
      }
    }
  }
}, Zf = function(a) {
  if (a && "number" == typeof a.length) {
    if (ha(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (ga(a)) {
      return "function" == typeof a.item;
    }
  }
  return!1;
}, Wf = function(a) {
  this.Xe = a || k.document || document;
};
d = Wf.prototype;
d.lG = function(a) {
  return Yf(this.Xe, a);
};
d.createElement = function(a) {
  return this.Xe.createElement(a);
};
d.createTextNode = function(a) {
  return this.Xe.createTextNode(String(a));
};
d.V = function() {
  var a = this.Xe;
  return a.parentWindow || a.defaultView;
};
d.appendChild = function(a, b) {
  a.appendChild(b);
};
d.append = function(a, b) {
  $f(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments, 1);
};
d.canHaveChildren = function(a) {
  if (1 != a.nodeType) {
    return!1;
  }
  switch(a.tagName) {
    case "APPLET":
    ;
    case "AREA":
    ;
    case "BASE":
    ;
    case "BR":
    ;
    case "COL":
    ;
    case "COMMAND":
    ;
    case "EMBED":
    ;
    case "FRAME":
    ;
    case "HR":
    ;
    case "IMG":
    ;
    case "INPUT":
    ;
    case "IFRAME":
    ;
    case "ISINDEX":
    ;
    case "KEYGEN":
    ;
    case "LINK":
    ;
    case "NOFRAMES":
    ;
    case "NOSCRIPT":
    ;
    case "META":
    ;
    case "OBJECT":
    ;
    case "PARAM":
    ;
    case "SCRIPT":
    ;
    case "SOURCE":
    ;
    case "STYLE":
    ;
    case "TRACK":
    ;
    case "WBR":
      return!1;
  }
  return!0;
};
d.removeNode = ag;
d.getChildren = bg;
d.isElement = function(a) {
  return ha(a) && 1 == a.nodeType;
};
d.contains = function(a, b) {
  if (a.contains && 1 == b.nodeType) {
    return a == b || a.contains(b);
  }
  if ("undefined" != typeof a.compareDocumentPosition) {
    return a == b || Boolean(a.compareDocumentPosition(b) & 16);
  }
  for (;b && a != b;) {
    b = b.parentNode;
  }
  return b == a;
};
var gg = function(a, b, c) {
  this.Xh = a;
  this.Tc = b || 0;
  this.D = c;
  this.Zh = t(this.qi, this);
};
v(gg, M);
d = gg.prototype;
d.da = 0;
d.k = function() {
  gg.t.k.call(this);
  this.stop();
  delete this.Xh;
  delete this.D;
};
d.start = function(a) {
  this.stop();
  this.da = S(this.Zh, q(a) ? a : this.Tc);
};
d.stop = function() {
  this.Nc() && k.clearTimeout(this.da);
  this.da = 0;
};
d.yv = function() {
  this.stop();
  this.qi();
};
d.Nc = function() {
  return 0 != this.da;
};
d.qi = function() {
  this.da = 0;
  this.Xh && this.Xh.call(this.D);
};
var hg = function(a) {
  a = String(a);
  if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")");
    } catch (b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
}, ig = function(a) {
  return eval("(" + a + ")");
}, kg = function(a, b) {
  return(new jg(b)).he(a);
}, jg = function(a) {
  this.El = a;
};
jg.prototype.he = function(a) {
  var b = [];
  this.Rp(a, b);
  return b.join("");
};
jg.prototype.Rp = function(a, b) {
  switch(typeof a) {
    case "string":
      this.ux(a, b);
      break;
    case "number":
      this.rK(a, b);
      break;
    case "boolean":
      b.push(a);
      break;
    case "undefined":
      b.push("null");
      break;
    case "object":
      if (null == a) {
        b.push("null");
        break;
      }
      if (r(a)) {
        this.qK(a, b);
        break;
      }
      this.sK(a, b);
      break;
    case "function":
      break;
    default:
      throw Error("Unknown type: " + typeof a);;
  }
};
var lg = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\u000b"}, mg = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
jg.prototype.ux = function(a, b) {
  b.push('"', a.replace(mg, function(a) {
    if (a in lg) {
      return lg[a];
    }
    var b = a.charCodeAt(0), f = "\\u";
    16 > b ? f += "000" : 256 > b ? f += "00" : 4096 > b && (f += "0");
    return lg[a] = f + b.toString(16);
  }), '"');
};
jg.prototype.rK = function(a, b) {
  b.push(isFinite(a) && !isNaN(a) ? a : "null");
};
jg.prototype.qK = function(a, b) {
  var c = a.length;
  b.push("[");
  for (var e = "", f = 0;f < c;f++) {
    b.push(e), e = a[f], this.Rp(this.El ? this.El.call(a, String(f), e) : e, b), e = ",";
  }
  b.push("]");
};
jg.prototype.sK = function(a, b) {
  b.push("{");
  var c = "", e;
  for (e in a) {
    if (Object.prototype.hasOwnProperty.call(a, e)) {
      var f = a[e];
      "function" != typeof f && (b.push(c), this.ux(e, b), b.push(":"), this.Rp(this.El ? this.El.call(a, e, f) : f, b), c = ",");
    }
  }
  b.push("}");
};
var ng = function(a, b) {
  var c = I(a);
  b && c && c.Gc(b);
  return c;
}, og = function(a, b, c, e) {
  a && a.log(b, c, e);
}, pg = function(a, b, c) {
  a && a.w(b, c);
}, qg = function(a, b, c) {
  a && a.e(b, c);
}, U = function(a, b, c) {
  a && a.info(b, c);
}, V = function(a, b, c) {
  a && a.C(b, c);
};
var rg = function() {
  this.lk = {};
};
v(rg, M);
d = rg.prototype;
d.l = ng("goog.messaging.AbstractChannel");
d.connect = function(a) {
  a && a();
};
d.Y = function() {
  return!0;
};
d.sg = function(a, b, c) {
  this.lk[a] = {Va:b, uv:!!c};
};
d.uG = function(a, b) {
  var c = this.fJ(a, b);
  if (c) {
    var e = this.eJ(a, b, c.uv);
    null != e && c.Va(e);
  }
};
d.fJ = function(a, b) {
  var c = this.lk[a];
  if (c) {
    return c;
  }
  if (this.Wt) {
    return{Va:na(this.Wt, a), uv:ha(b)};
  }
  qg(this.l, 'Unknown service name "' + a + '"');
  return null;
};
d.eJ = function(a, b, c) {
  if (c && s(b)) {
    try {
      return hg(b);
    } catch (e) {
      return qg(this.l, "Expected JSON payload for " + a + ', was "' + b + '"'), null;
    }
  } else {
    if (!c && !s(b)) {
      return kg(b);
    }
  }
  return b;
};
d.k = function() {
  rg.t.k.call(this);
  delete this.l;
  delete this.lk;
  delete this.Wt;
};
var W = function(a, b) {
  var c;
  a instanceof W ? (this.Yb = q(b) ? b : a.oF(), this.Jd(a.ld()), this.Gk(a.Bo()), this.Ne(a.fc()), this.bi(a.vk()), this.Oe(a.eg()), this.Yf(a.Yl().clone()), this.Fk(a.Ao())) : a && (c = Qe(String(a))) ? (this.Yb = !!b, this.Jd(c[1] || "", !0), this.Gk(c[2] || "", !0), this.Ne(c[3] || "", !0), this.bi(c[4]), this.Oe(c[5] || "", !0), this.Yf(c[6] || "", !0), this.Fk(c[7] || "", !0)) : (this.Yb = !!b, this.yc = new sg(null, null, this.Yb));
};
d = W.prototype;
d.yg = "";
d.Qp = "";
d.Op = "";
d.Cl = null;
d.rc = "";
d.Pp = "";
d.SL = !1;
d.Yb = !1;
d.toString = function() {
  var a = [], b = this.ld();
  b && a.push(tg(b, ug), ":");
  if (b = this.fc()) {
    a.push("//");
    var c = this.Bo();
    c && a.push(tg(c, ug), "@");
    a.push(encodeURIComponent(String(b)));
    b = this.vk();
    null != b && a.push(":", String(b));
  }
  if (b = this.eg()) {
    this.Oo() && "/" != b.charAt(0) && a.push("/"), a.push(tg(b, "/" == b.charAt(0) ? vg : wg));
  }
  (b = this.SH()) && a.push("?", b);
  (b = this.Ao()) && a.push("#", tg(b, xg));
  return a.join("");
};
d.resolve = function(a) {
  var b = this.clone(), c = a.cv();
  c ? b.Jd(a.ld()) : c = a.HF();
  c ? b.Gk(a.Bo()) : c = a.Oo();
  c ? b.Ne(a.fc()) : c = a.FF();
  var e = a.eg();
  if (c) {
    b.bi(a.vk());
  } else {
    if (c = a.bv()) {
      if ("/" != e.charAt(0)) {
        if (this.Oo() && !this.bv()) {
          e = "/" + e;
        } else {
          var f = b.eg().lastIndexOf("/");
          -1 != f && (e = b.eg().substr(0, f + 1) + e);
        }
      }
      f = e;
      if (".." == f || "." == f) {
        e = "";
      } else {
        if (za(f, "./") || za(f, "/.")) {
          for (var e = 0 == f.lastIndexOf("/", 0), f = f.split("/"), g = [], h = 0;h < f.length;) {
            var l = f[h++];
            "." == l ? e && h == f.length && g.push("") : ".." == l ? ((1 < g.length || 1 == g.length && "" != g[0]) && g.pop(), e && h == f.length && g.push("")) : (g.push(l), e = !0);
          }
          e = g.join("/");
        } else {
          e = f;
        }
      }
    }
  }
  c ? b.Oe(e) : c = a.GF();
  c ? b.Yf(a.DF()) : c = a.EF();
  c && b.Fk(a.Ao());
  return b;
};
d.clone = function() {
  return new W(this);
};
d.ld = function() {
  return this.yg;
};
d.Jd = function(a, b) {
  this.Vc();
  if (this.yg = b ? yg(a) : a) {
    this.yg = this.yg.replace(/:$/, "");
  }
  return this;
};
d.cv = function() {
  return!!this.yg;
};
d.Bo = function() {
  return this.Qp;
};
d.Gk = function(a, b) {
  this.Vc();
  this.Qp = b ? yg(a) : a;
  return this;
};
d.HF = function() {
  return!!this.Qp;
};
d.fc = function() {
  return this.Op;
};
d.Ne = function(a, b) {
  this.Vc();
  this.Op = b ? yg(a) : a;
  return this;
};
d.Oo = function() {
  return!!this.Op;
};
d.vk = function() {
  return this.Cl;
};
d.bi = function(a) {
  this.Vc();
  if (a) {
    a = Number(a);
    if (isNaN(a) || 0 > a) {
      throw Error("Bad port number " + a);
    }
    this.Cl = a;
  } else {
    this.Cl = null;
  }
  return this;
};
d.FF = function() {
  return null != this.Cl;
};
d.eg = function() {
  return this.rc;
};
d.Oe = function(a, b) {
  this.Vc();
  this.rc = b ? yg(a) : a;
  return this;
};
d.bv = function() {
  return!!this.rc;
};
d.GF = function() {
  return "" !== this.yc.toString();
};
d.Yf = function(a, b) {
  this.Vc();
  a instanceof sg ? (this.yc = a, this.yc.zp(this.Yb)) : (b || (a = tg(a, zg)), this.yc = new sg(a, null, this.Yb));
  return this;
};
d.SH = function() {
  return this.yc.toString();
};
d.DF = function() {
  return this.yc.nw();
};
d.Yl = function() {
  return this.yc;
};
d.ha = function(a, b) {
  this.Vc();
  this.yc.set(a, b);
  return this;
};
d.Ij = function(a, b) {
  this.Vc();
  r(b) || (b = [String(b)]);
  this.yc.cp(a, b);
  return this;
};
d.Ao = function() {
  return this.Pp;
};
d.Fk = function(a, b) {
  this.Vc();
  this.Pp = b ? yg(a) : a;
  return this;
};
d.EF = function() {
  return!!this.Pp;
};
d.Uf = function() {
  this.Vc();
  this.ha("zx", Ka());
  return this;
};
d.Vc = function() {
  if (this.SL) {
    throw Error("Tried to modify a read-only Uri");
  }
};
d.zp = function(a) {
  this.Yb = a;
  this.yc && this.yc.zp(a);
  return this;
};
d.oF = function() {
  return this.Yb;
};
var Ag = function(a, b) {
  return a instanceof W ? a.clone() : new W(a, b);
}, Bg = function(a, b, c, e, f, g, h, l) {
  l = new W(null, l);
  a && l.Jd(a);
  b && l.Gk(b);
  c && l.Ne(c);
  e && l.bi(e);
  f && l.Oe(f);
  g && l.Yf(g);
  h && l.Fk(h);
  return l;
}, yg = function(a) {
  return a ? decodeURIComponent(a) : "";
}, tg = function(a, b) {
  return s(a) ? encodeURI(a).replace(b, Cg) : null;
}, Cg = function(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
}, ug = /[#\/\?@]/g, wg = /[\#\?:]/g, vg = /[\#\?]/g, zg = /[\#\?@]/g, xg = /#/g, sg = function(a, b, c) {
  this.de = a || null;
  this.Yb = !!c;
};
sg.prototype.sd = function() {
  if (!this.Aa && (this.Aa = new D, this.ra = 0, this.de)) {
    for (var a = this.de.split("&"), b = 0;b < a.length;b++) {
      var c = a[b].indexOf("="), e = null, f = null;
      0 <= c ? (e = a[b].substring(0, c), f = a[b].substring(c + 1)) : e = a[b];
      e = decodeURIComponent(e.replace(/\+/g, " "));
      e = this.Re(e);
      this.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "");
    }
  }
};
var Dg = function(a, b, c) {
  b = Vb(a);
  if ("undefined" == typeof b) {
    throw Error("Keys are undefined");
  }
  c = new sg(null, null, c);
  a = Ub(a);
  for (var e = 0;e < b.length;e++) {
    var f = b[e], g = a[e];
    r(g) ? c.cp(f, g) : c.add(f, g);
  }
  return c;
};
d = sg.prototype;
d.Aa = null;
d.ra = null;
d.L = function() {
  this.sd();
  return this.ra;
};
d.add = function(a, b) {
  this.sd();
  this.mg();
  a = this.Re(a);
  var c = this.Aa.get(a);
  c || this.Aa.set(a, c = []);
  c.push(b);
  this.ra++;
  return this;
};
d.remove = function(a) {
  this.sd();
  a = this.Re(a);
  return this.Aa.Na(a) ? (this.mg(), this.ra -= this.Aa.get(a).length, this.Aa.remove(a)) : !1;
};
d.clear = function() {
  this.mg();
  this.Aa = null;
  this.ra = 0;
};
d.ob = function() {
  this.sd();
  return 0 == this.ra;
};
d.Na = function(a) {
  this.sd();
  a = this.Re(a);
  return this.Aa.Na(a);
};
d.tg = function(a) {
  var b = this.N();
  return qb(b, a);
};
d.kb = function() {
  this.sd();
  for (var a = this.Aa.N(), b = this.Aa.kb(), c = [], e = 0;e < b.length;e++) {
    for (var f = a[e], g = 0;g < f.length;g++) {
      c.push(b[e]);
    }
  }
  return c;
};
d.N = function(a) {
  this.sd();
  var b = [];
  if (s(a)) {
    this.Na(a) && (b = vb(b, this.Aa.get(this.Re(a))));
  } else {
    a = this.Aa.N();
    for (var c = 0;c < a.length;c++) {
      b = vb(b, a[c]);
    }
  }
  return b;
};
d.set = function(a, b) {
  this.sd();
  this.mg();
  a = this.Re(a);
  this.Na(a) && (this.ra -= this.Aa.get(a).length);
  this.Aa.set(a, [b]);
  this.ra++;
  return this;
};
d.get = function(a, b) {
  var c = a ? this.N(a) : [];
  return 0 < c.length ? String(c[0]) : b;
};
d.cp = function(a, b) {
  this.remove(a);
  0 < b.length && (this.mg(), this.Aa.set(this.Re(a), wb(b)), this.ra += b.length);
};
d.toString = function() {
  if (this.de) {
    return this.de;
  }
  if (!this.Aa) {
    return "";
  }
  for (var a = [], b = this.Aa.kb(), c = 0;c < b.length;c++) {
    for (var e = b[c], f = encodeURIComponent(String(e)), e = this.N(e), g = 0;g < e.length;g++) {
      var h = f;
      "" !== e[g] && (h += "=" + encodeURIComponent(String(e[g])));
      a.push(h);
    }
  }
  return this.de = a.join("&");
};
d.nw = function() {
  return yg(this.toString());
};
d.mg = function() {
  this.de = null;
};
d.clone = function() {
  var a = new sg;
  a.de = this.de;
  this.Aa && (a.Aa = this.Aa.clone(), a.ra = this.ra);
  return a;
};
d.Re = function(a) {
  a = String(a);
  this.Yb && (a = a.toLowerCase());
  return a;
};
d.zp = function(a) {
  a && !this.Yb && (this.sd(), this.mg(), Wb(this.Aa, function(a, c) {
    var e = c.toLowerCase();
    c != e && (this.remove(c), this.cp(e, a));
  }, this));
  this.Yb = a;
};
d.extend = function(a) {
  for (var b = 0;b < arguments.length;b++) {
    Wb(arguments[b], function(a, b) {
      this.add(b, a);
    }, this);
  }
};
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
var Eg = function(a, b) {
  this.md = [];
  this.iv = a;
  this.wu = b || null;
  this.ji = this.Fv = !1;
  this.Oc = void 0;
  this.So = this.Bu = this.Fo = !1;
  this.Lk = 0;
  this.Ja = null;
  this.Jk = 0;
  this.$o = null;
  if (Error.captureStackTrace) {
    var c = {stack:""};
    Error.captureStackTrace(c, Eg);
    "string" == typeof c.stack && (this.$o = c.stack.replace(/^[^\n]*\n/, ""));
  }
};
d = Eg.prototype;
d.cancel = function(a) {
  if (this.vc()) {
    this.Oc instanceof Eg && this.Oc.cancel();
  } else {
    if (this.Ja) {
      var b = this.Ja;
      delete this.Ja;
      a ? b.cancel(a) : b.wH();
    }
    this.iv ? this.iv.call(this.wu, this) : this.So = !0;
    this.vc() || this.Kv(new Fg(this));
  }
};
d.wH = function() {
  this.Jk--;
  0 >= this.Jk && this.cancel();
};
d.Su = function(a, b) {
  this.Fo = !1;
  this.Lp(a, b);
};
d.Lp = function(a, b) {
  this.Fv = !0;
  this.Oc = b;
  this.ji = !a;
  this.vw();
};
d.yx = function() {
  if (this.vc()) {
    if (!this.So) {
      throw new Gg(this);
    }
    this.So = !1;
  }
};
d.Va = function(a) {
  this.yx();
  this.xx(a);
  this.Lp(!0, a);
};
d.Kv = function(a) {
  this.yx();
  this.xx(a);
  this.Lu(a);
  this.Lp(!1, a);
};
d.Lu = function(a) {
  this.$o && ha(a) && a.stack && /^[^\n]+(\n   [^\n]+)+/.test(a.stack) && (a.stack = a.stack + "\nDEFERRED OPERATION:\n" + this.$o);
};
d.xx = function(a) {
  w(!(a instanceof Eg), "An execution sequence may not be initiated with a blocking Deferred.");
};
d.Xj = function(a, b) {
  return this.Nk(a, null, b);
};
d.Nk = function(a, b, c) {
  w(!this.Bu, "Blocking Deferreds can not be re-used");
  this.md.push([a, b, c]);
  this.vc() && this.vw();
  return this;
};
d.then = function(a, b, c) {
  var e, f, g = new de(function(a, b) {
    e = a;
    f = b;
  });
  this.Nk(e, function(a) {
    a instanceof Fg ? g.cancel() : f(a);
  });
  return g.then(a, b, c);
};
be(Eg);
d = Eg.prototype;
d.bJ = function(a) {
  this.Nk(a.Va, a.Kv, a);
  return this;
};
d.Tf = function(a) {
  return this.Xj(t(a.MK, a));
};
d.MK = function(a) {
  var b = new Eg;
  this.bJ(b);
  a && (b.Ja = this, this.Jk++);
  return b;
};
d.vc = function() {
  return this.Fv;
};
d.RE = function(a) {
  return a instanceof Error;
};
d.Tu = function() {
  return mb(this.md, function(a) {
    return ga(a[1]);
  });
};
d.vw = function() {
  if (this.Lk && this.vc() && this.Tu()) {
    var a = this.Lk, b = Hg[a];
    b && (b.SE(), delete Hg[a]);
    this.Lk = 0;
  }
  this.Ja && (this.Ja.Jk--, delete this.Ja);
  for (var a = this.Oc, c = b = !1;this.md.length && !this.Fo;) {
    var e = this.md.shift(), f = e[0], g = e[1], e = e[2];
    if (f = this.ji ? g : f) {
      try {
        var h = f.call(e || this.wu, a);
        q(h) && (this.ji = this.ji && (h == a || this.RE(h)), this.Oc = a = h);
        ce(a) && (this.Fo = c = !0);
      } catch (l) {
        a = l, this.ji = !0, this.Lu(a), this.Tu() || (b = !0);
      }
    }
  }
  this.Oc = a;
  c && (h = t(this.Su, this, !0), c = t(this.Su, this, !1), a instanceof Eg ? (a.Nk(h, c), a.Bu = !0) : a.then(h, c));
  b && (a = new Ig(a), Hg[a.da] = a, this.Lk = a.da);
};
var Gg = function() {
  Va.call(this);
};
v(Gg, Va);
Gg.prototype.message = "Deferred has already fired";
Gg.prototype.name = "AlreadyCalledError";
var Fg = function() {
  Va.call(this);
};
v(Fg, Va);
Fg.prototype.message = "Deferred was canceled";
Fg.prototype.name = "CanceledError";
var Ig = function(a) {
  this.da = k.setTimeout(t(this.cI, this), 0);
  this.$a = a;
};
Ig.prototype.cI = function() {
  w(Hg[this.da], "Cannot throw an error that is not scheduled.");
  delete Hg[this.da];
  throw this.$a;
};
Ig.prototype.SE = function() {
  k.clearTimeout(this.da);
};
var Hg = {};
var Jg = {1:"NativeMessagingTransport", 2:"FrameElementMethodTransport", 3:"IframeRelayTransport", 4:"IframePollingTransport", 5:"FlashTransport", 6:"NixTransport", 7:"DirectTransport"}, Kg = ["pu", "lru", "pru", "lpu", "ppu"], Lg = {}, Ng = function(a, b) {
  for (var c = b || Mg, e = c.length, f = "";0 < a--;) {
    f += c.charAt(Math.floor(Math.random() * e));
  }
  return f;
}, Mg = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", X = ng("goog.net.xpc");
var Og = function(a) {
  this.eb = a || Xf();
};
v(Og, M);
Og.prototype.Ye = 0;
Og.prototype.V = function() {
  return this.eb.V();
};
Og.prototype.getName = function() {
  return Jg[this.Ye] || "";
};
var Pg = function(a, b) {
  this.eb = b || Xf();
  this.g = a;
  this.q = new R(this);
  this.Gh(this.q);
  this.Mc = new jf(100, this.V());
  this.Gh(this.Mc);
  this.mb = new Eg;
  this.nb = new Eg;
  this.fb = new Eg;
  this.Rn = Ng(10);
  this.Qd = null;
  this.Nf = {};
  this.IC = this.g.name;
  this.g.Vj(this.g.name + "_" + this.g.Lb());
  this.Ta = !1;
  this.fb.Tf(this.mb);
  this.fb.Tf(this.nb);
  this.fb.Xj(this.ak, this);
  this.fb.Va(!0);
  this.q.listen(this.Mc, "tick", this.Nh);
  U(X, "DirectTransport created. role=" + this.g.Lb());
};
v(Pg, Og);
var Qg = {}, Tg = function(a) {
  var b = new Rg(a.channelName, a.service, a.payload);
  a = b.yo;
  var c = b.service, b = b.payload;
  V(X, "messageReceived: channel=" + a + ", service=" + c + ", payload=" + b);
  var e = Lg[a];
  if (e) {
    return e.uc(c, b), !0;
  }
  var e = Sg(b)[0], f;
  for (f in Lg) {
    var g = Lg[f];
    if (1 == g.Lb() && !g.Y() && "tp" == c && "SETUP" == e) {
      return g.Vj(a), g.uc(c, b), !0;
    }
  }
  U(X, "channel name mismatch; message ignored.");
  return!1;
};
d = Pg.prototype;
d.Ye = 7;
d.dl = function(a) {
  a = Sg(a);
  var b = a[1];
  switch(a[0]) {
    case "SETUP_ACK":
      this.mb.vc() || this.mb.Va(!0);
      break;
    case "SETUP":
      this.$k(), null != this.Qd && this.Qd != b && (U(X, "Sending SETUP and changing peer ID to: " + b), this.Uh()), this.Qd = b;
  }
};
d.Uh = function() {
  var a;
  a = "SETUP," + this.Rn;
  this.send("tp", a);
};
d.$k = function() {
  this.send("tp", "SETUP_ACK");
  this.nb.vc() || this.nb.Va(!0);
};
d.connect = function() {
  var a = this.V();
  if (a) {
    var b = ka(a);
    0 == (Qg[b] || 0) && null == ba("crosswindowmessaging.channel", a) && m("crosswindowmessaging.channel", Tg, a);
    Qg[b]++;
    this.Ta = !0;
    this.Nh();
  } else {
    V(X, "connect(): no window to initialize.");
  }
};
d.Nh = function() {
  this.g.Y() ? this.Mc.stop() : (this.Mc.start(), this.Uh());
};
d.send = function(a, b) {
  if (this.g.Ok()) {
    var c = new Rg(this.IC + "_" + this.pF(), a, b);
    this.g.hi().directSyncMode ? this.Yu(c) : this.Nf[ka(c)] = S(t(this.Yu, this, c), 0);
  } else {
    V(X, "send(): window not ready");
  }
};
d.Yu = function(a) {
  var b = ka(a);
  this.Nf[b] && delete this.Nf[b];
  try {
    var c = ba("crosswindowmessaging.channel", this.g.Ok());
  } catch (e) {
    qg(X, "Can't access other window, ignoring.", e);
    return;
  }
  if (null === c) {
    qg(X, "Peer window had no global function.");
  } else {
    try {
      c(a.LF()), U(X, "send(): channelName=" + a.yo + " service=" + a.service + " payload=" + a.payload);
    } catch (f) {
      qg(X, "Error performing call, ignoring.", f);
    }
  }
};
d.pF = function() {
  return 0 == this.g.Lb() ? 1 : 0;
};
d.ak = function() {
  this.g.Pc(0);
};
d.k = function() {
  if (this.Ta) {
    var a = this.V(), b = ka(a);
    1 == --Qg[b] && m("crosswindowmessaging.channel", null, a);
  }
  this.Nf && (Fb(this.Nf, function(a) {
    k.clearTimeout(a);
  }), this.Nf = null);
  this.mb && (this.mb.cancel(), delete this.mb);
  this.nb && (this.nb.cancel(), delete this.nb);
  this.fb && (this.fb.cancel(), delete this.fb);
  Pg.t.k.call(this);
};
var Sg = function(a) {
  a = a.split(",");
  a[1] = a[1] || null;
  return a;
}, Rg = function(a, b, c) {
  this.yo = a;
  this.service = b;
  this.payload = c;
};
Rg.prototype.LF = function() {
  return{channelName:this.yo, service:this.service, payload:this.payload};
};
var Ug = function(a, b) {
  this.eb = b || Xf();
  this.g = a;
  this.ci = [];
  this.$D = t(this.nF, this);
};
v(Ug, Og);
d = Ug.prototype;
d.Ye = 2;
d.vo = !1;
d.ma = 0;
d.connect = function() {
  0 == this.g.Lb() ? (this.kd = this.g.ru(), this.kd.XPC_toOuter = t(this.mu, this)) : this.ku();
};
d.ku = function() {
  var a = !0;
  try {
    this.kd || (this.kd = this.V().frameElement), this.kd && this.kd.XPC_toOuter && (this.$n = this.kd.XPC_toOuter, this.kd.XPC_toOuter.XPC_toInner = t(this.mu, this), a = !1, this.send("tp", "SETUP_ACK"), this.g.Pc());
  } catch (b) {
    pg(X, "exception caught while attempting setup: " + b);
  }
  a && (this.Au || (this.Au = t(this.ku, this)), this.V().setTimeout(this.Au, 100));
};
d.dl = function(a) {
  if (0 != this.g.Lb() || this.g.Y() || "SETUP_ACK" != a) {
    throw Error("Got unexpected transport message.");
  }
  this.$n = this.kd.XPC_toOuter.XPC_toInner;
  this.g.Pc();
};
d.mu = function(a, b) {
  this.vo || 0 != this.ci.length ? (this.ci.push({serviceName:a, payload:b}), 1 == this.ci.length && (this.ma = this.V().setTimeout(this.$D, 1))) : this.g.uc(a, b);
};
d.nF = function() {
  for (;this.ci.length;) {
    var a = this.ci.shift();
    this.g.uc(a.serviceName, a.payload);
  }
};
d.send = function(a, b) {
  this.vo = !0;
  this.$n(a, b);
  this.vo = !1;
};
d.k = function() {
  Ug.t.k.call(this);
  this.kd = this.$n = null;
};
var Vg = function(a, b) {
  this.eb = b || Xf();
  this.g = a;
  this.ai = this.g.hi().ppu;
  this.IE = this.g.hi().lpu;
  this.Hk = [];
}, Wg, Xg;
v(Vg, Og);
d = Vg.prototype;
d.NE = 5;
d.Ye = 4;
d.md = 0;
d.Zf = !1;
d.Ta = !1;
d.Qu = null;
d.qk = function() {
  return "googlexpc_" + this.g.name + "_msg";
};
d.pk = function() {
  return "googlexpc_" + this.g.name + "_ack";
};
d.Uu = function() {
  return!this.Xf() && this.g.Fu();
};
d.qo = function() {
  try {
    if (this.Uu()) {
      return this.g.Ok().frames || {};
    }
  } catch (a) {
    V(X, "error retrieving peer frames");
  }
  return{};
};
d.uo = function(a) {
  return this.qo()[a];
};
d.connect = function() {
  this.Uu() && (V(X, "transport connect called"), this.Ta || (V(X, "initializing..."), this.dJ(), this.Ta = !0), this.cJ());
};
d.dJ = function() {
  var a = this.qk();
  this.dg = this.ro(a);
  this.io = this.V().frames[a];
  a = this.pk();
  this.cg = this.ro(a);
  this.ho = this.V().frames[a];
};
d.ro = function(a) {
  og(X, H, "constructing sender frame: " + a);
  var b = document.createElement("iframe"), c = b.style;
  c.position = "absolute";
  c.top = "-10px";
  c.left = "10px";
  c.width = "1px";
  c.height = "1px";
  b.id = b.name = a;
  b.src = this.ai + "#INITIAL";
  this.V().document.body.appendChild(b);
  return b;
};
d.eE = function() {
  this.Qu || 0 < this.NE-- || (og(X, H, "Inner peer reconnect triggered."), this.g.Vj(Ng(10)), og(X, H, "switching channels: " + this.g.name), this.Mu(), this.Ta = !1, this.Qu = this.ro("googlexpc_reconnect_" + this.g.name));
};
d.fE = function() {
  og(X, H, "outerPeerReconnect called");
  for (var a = this.qo(), b = a.length, c = 0;c < b;c++) {
    var e;
    try {
      a[c] && a[c].name && (e = a[c].name);
    } catch (f) {
    }
    if (e) {
      var g = e.split("_");
      if (3 == g.length && "googlexpc" == g[0] && "reconnect" == g[1]) {
        this.g.name = g[2];
        this.Mu();
        this.Ta = !1;
        break;
      }
    }
  }
};
d.Mu = function() {
  og(X, H, "deconstructSenderFrames called");
  this.dg && (this.dg.parentNode.removeChild(this.dg), this.io = this.dg = null);
  this.cg && (this.cg.parentNode.removeChild(this.cg), this.ho = this.cg = null);
};
d.cJ = function() {
  this.ou(this.qk()) && this.ou(this.pk()) ? (V(X, "foreign frames present"), this.tt = new Yg(this, this.uo(this.qk()), t(this.hE, this)), this.rt = new Yg(this, this.uo(this.pk()), t(this.gE, this)), this.Rt()) : (og(X, H, "foreign frames not (yet) present"), 1 == this.g.Lb() ? this.eE() : 0 == this.g.Lb() && this.fE(), this.V().setTimeout(t(this.connect, this), 100));
};
d.ou = function(a) {
  og(X, H, "checking for receive frame: " + a);
  try {
    var b = this.uo(a);
    if (!b || 0 != b.location.href.indexOf(this.IE)) {
      return!1;
    }
  } catch (c) {
    return!1;
  }
  return!0;
};
d.Rt = function() {
  var a = this.qo();
  a[this.pk()] && a[this.qk()] ? (this.wv = new Zg(this.ai, this.io), this.sk = new Zg(this.ai, this.ho), V(X, "local frames ready"), this.V().setTimeout(t(function() {
    this.wv.send("SETUP");
    this.Zf = !0;
    V(X, "SETUP sent");
  }, this), 100)) : (this.Lv || (this.Lv = t(this.Rt, this)), this.V().setTimeout(this.Lv, 100), V(X, "local frames not (yet) present"));
};
d.tu = function() {
  if (this.wo && this.eu) {
    if (this.g.Pc(), this.ig) {
      V(X, "delivering queued messages (" + this.ig.length + ")");
      for (var a = 0, b;a < this.ig.length;a++) {
        b = this.ig[a], this.g.uc(b.service, b.payload);
      }
      delete this.ig;
    }
  } else {
    og(X, H, "checking if connected: ack sent:" + this.wo + ", ack rcvd: " + this.eu);
  }
};
d.hE = function(a) {
  og(X, H, "msg received: " + a);
  if ("SETUP" == a) {
    this.sk && (this.sk.send("SETUP_ACK"), og(X, H, "SETUP_ACK sent"), this.wo = !0, this.tu());
  } else {
    if (this.g.Y() || this.wo) {
      var b = a.indexOf("|"), c = a.substring(0, b);
      a = a.substring(b + 1);
      b = c.indexOf(",");
      if (-1 == b) {
        var e;
        this.sk.send("ACK:" + c);
        this.Iu(a);
      } else {
        e = c.substring(0, b), this.sk.send("ACK:" + e), c = c.substring(b + 1).split("/"), b = parseInt(c[0], 10), c = parseInt(c[1], 10), 1 == b && (this.Ko = []), this.Ko.push(a), b == c && (this.Iu(this.Ko.join("")), delete this.Ko);
      }
    } else {
      qg(X, "received msg, but channel is not connected");
    }
  }
};
d.gE = function(a) {
  og(X, H, "ack received: " + a);
  "SETUP_ACK" == a ? (this.Zf = !1, this.eu = !0, this.tu()) : this.g.Y() ? this.Zf ? parseInt(a.split(":")[1], 10) == this.md ? (this.Zf = !1, this.xu()) : qg(X, "got ack with wrong sequence") : qg(X, "got unexpected ack") : qg(X, "received ack, but channel not connected");
};
d.xu = function() {
  if (!this.Zf && this.Hk.length) {
    var a = this.Hk.shift();
    ++this.md;
    this.wv.send(this.md + a);
    og(X, H, "msg sent: " + this.md + a);
    this.Zf = !0;
  }
};
d.Iu = function(a) {
  var b = a.indexOf(":"), c = a.substr(0, b);
  a = a.substring(b + 1);
  this.g.Y() ? this.g.uc(c, a) : ((this.ig || (this.ig = [])).push({service:c, payload:a}), og(X, H, "queued delivery"));
};
d.Dl = 3800;
d.send = function(a, b) {
  var c = a + ":" + b;
  if (!E || b.length <= this.Dl) {
    this.Hk.push("|" + c);
  } else {
    for (var e = b.length, f = Math.ceil(e / this.Dl), g = 0, h = 1;g < e;) {
      this.Hk.push("," + h + "/" + f + "|" + c.substr(g, this.Dl)), h++, g += this.Dl;
    }
  }
  this.xu();
};
d.k = function() {
  Vg.t.k.call(this);
  var a = $g;
  tb(a, this.tt);
  tb(a, this.rt);
  this.tt = this.rt = null;
  ag(this.dg);
  ag(this.cg);
  this.io = this.ho = this.dg = this.cg = null;
};
var $g = [], ah = t(function() {
  var a = $g, b, c = !1;
  try {
    for (var e = 0;b = a[e];e++) {
      c = c || b.vm();
    }
  } catch (f) {
    if (U(X, "receive_() failed: " + f), b.gb.g.yF(), !a.length) {
      return;
    }
  }
  a = u();
  c && (Wg = a);
  Xg = window.setTimeout(ah, 1E3 > a - Wg ? 10 : 100);
}, Vg), ch = function() {
  V(X, "starting receive-timer");
  Wg = u();
  Xg && window.clearTimeout(Xg);
  Xg = window.setTimeout(ah, 10);
}, Zg = function(a, b) {
  this.ai = a;
  this.Ax = b;
  this.Mp = 0;
};
Zg.prototype.send = function(a) {
  this.Mp = ++this.Mp % 2;
  a = this.ai + "#" + this.Mp + encodeURIComponent(a);
  try {
    F ? this.Ax.location.href = a : this.Ax.location.replace(a);
  } catch (b) {
    pg(X, "sending failed", b);
  }
  ch();
};
var Yg = function(a, b, c) {
  this.gb = a;
  this.jx = b;
  this.aJ = c;
  this.ix = this.jx.location.href.split("#")[0] + "#INITIAL";
  $g.push(this);
  ch();
};
Yg.prototype.vm = function() {
  var a = this.jx.location.href;
  if (a != this.ix) {
    this.ix = a;
    if (a = a.split("#")[1]) {
      a = a.substr(1), this.aJ(decodeURIComponent(a));
    }
    return!0;
  }
  return!1;
};
var eh = function(a, b) {
  this.eb = b || Xf();
  this.g = a;
  this.uE = this.g.hi().pru;
  this.Cu = this.g.hi().ifrid;
  F && dh();
};
v(eh, Og);
if (F) {
  var fh = [], gh = 0, dh = function() {
    gh || (gh = window.setTimeout(function() {
      hh();
    }, 1E3));
  }, hh = function(a) {
    var b = u();
    for (a = a || 3E3;fh.length && b - fh[0].timestamp >= a;) {
      var c = fh.shift().LE;
      ag(c);
      og(X, H, "iframe removed");
    }
    gh = window.setTimeout(ih, 1E3);
  }, ih = function() {
    hh();
  }
}
var jh = {};
eh.prototype.Ye = 3;
eh.prototype.connect = function() {
  this.V().xpcRelay || (this.V().xpcRelay = kh);
  this.send("tp", "SETUP");
};
var kh = function(a, b) {
  var c = b.indexOf(":"), e = b.substr(0, c), f = b.substr(c + 1);
  if (E && -1 != (c = e.indexOf("|"))) {
    var g = e.substr(0, c), e = e.substr(c + 1), c = e.indexOf("+"), h = e.substr(0, c), c = parseInt(e.substr(c + 1), 10), l = jh[h];
    l || (l = jh[h] = {qx:[], sx:0, px:0});
    za(e, "++") && (l.px = c + 1);
    l.qx[c] = f;
    l.sx++;
    if (l.sx != l.px) {
      return;
    }
    f = l.qx.join("");
    delete jh[h];
  } else {
    var g = e
  }
  Lg[a].uc(g, decodeURIComponent(f));
};
eh.prototype.dl = function(a) {
  "SETUP" == a ? (this.send("tp", "SETUP_ACK"), this.g.Pc()) : "SETUP_ACK" == a && this.g.Pc();
};
eh.prototype.send = function(a, b) {
  var c = encodeURIComponent(b), e = c.length;
  if (E && 1800 < e) {
    for (var f = Ka(), g = 0, h = 0;g < e;h++) {
      var l = c.substr(g, 1800), g = g + 1800;
      this.Bl(a, l, f + (g >= e ? "++" : "+") + h);
    }
  } else {
    this.Bl(a, c);
  }
};
eh.prototype.Bl = function(a, b, c) {
  if (E) {
    var e = this.V().document.createElement("div");
    e.innerHTML = '<iframe onload="this.xpcOnload()"></iframe>';
    e = e.childNodes[0];
    e.xpcOnload = lh;
  } else {
    e = this.V().document.createElement("iframe"), F ? fh.push({timestamp:u(), LE:e}) : O(e, "load", lh);
  }
  var f = e.style;
  f.visibility = "hidden";
  f.width = e.style.height = "0px";
  f.position = "absolute";
  f = this.uE;
  f += "#" + this.g.name;
  this.Cu && (f += "," + this.Cu);
  f += "|" + a;
  c && (f += "|" + c);
  f += ":" + b;
  e.src = f;
  this.V().document.body.appendChild(e);
  og(X, H, "msg sent: " + f);
};
var lh = function() {
  og(X, H, "iframe-load");
  ag(this);
};
eh.prototype.k = function() {
  eh.t.k.call(this);
  F && hh(0);
};
var mh = function(a, b, c, e, f) {
  this.eb = c || Xf();
  this.g = a;
  this.Cb = f || 2;
  w(1 <= this.Cb);
  w(2 >= this.Cb);
  this.pt = b || "*";
  this.q = new R(this);
  this.Mc = new jf(100, this.V());
  this.Yj = !!e;
  this.mb = new Eg;
  this.nb = new Eg;
  this.fb = new Eg;
  this.Rn = Ng(10);
  this.Qd = null;
  this.Yj ? 1 == this.g.Lb() ? this.fb.Tf(this.mb) : this.fb.Tf(this.nb) : (this.fb.Tf(this.mb), 2 == this.Cb && this.fb.Tf(this.nb));
  this.fb.Xj(this.ak, this);
  this.fb.Va(!0);
  this.q.listen(this.Mc, "tick", this.Nh);
  U(X, "NativeMessagingTransport created.  protocolVersion=" + this.Cb + ", oneSidedHandshake=" + this.Yj + ", role=" + this.g.Lb());
};
v(mh, Og);
mh.prototype.Yd = null;
mh.prototype.Ta = !1;
mh.prototype.Ye = 1;
var nh = {};
mh.prototype.il = function(a) {
  return null == this.Yd || this.Yd == a;
};
var ph = function(a) {
  var b = a.gw().data;
  if (!s(b)) {
    return!1;
  }
  var c = b.indexOf("|"), e = b.indexOf(":");
  if (-1 == c || -1 == e) {
    return!1;
  }
  var f = b.substring(0, c), c = b.substring(c + 1, e), b = b.substring(e + 1);
  V(X, "messageReceived: channel=" + f + ", service=" + c + ", payload=" + b);
  if (e = Lg[f]) {
    return e.uc(c, b, a.gw().origin), !0;
  }
  a = oh(b)[0];
  for (var g in Lg) {
    if (e = Lg[g], 1 == e.Lb() && !e.Y() && "tp" == c && ("SETUP" == a || "SETUP_NTPV2" == a)) {
      return e.Vj(f), e.uc(c, b), !0;
    }
  }
  U(X, 'channel name mismatch; message ignored"');
  return!1;
};
d = mh.prototype;
d.dl = function(a) {
  var b = oh(a);
  a = b[1];
  switch(b[0]) {
    case "SETUP_ACK":
      this.cl(1);
      this.mb.vc() || this.mb.Va(!0);
      break;
    case "SETUP_ACK_NTPV2":
      2 == this.Cb && (this.cl(2), this.mb.vc() || this.mb.Va(!0));
      break;
    case "SETUP":
      this.cl(1);
      this.$k(1);
      break;
    case "SETUP_NTPV2":
      2 == this.Cb && (b = this.Yd, this.cl(2), this.$k(2), 1 != b && null == this.Qd || this.Qd == a || (U(X, "Sending SETUP and changing peer ID to: " + a), this.Uh()), this.Qd = a);
  }
};
d.Uh = function() {
  w(!(1 == this.Cb && 2 == this.Yd));
  if (2 == this.Cb && this.il(2)) {
    var a;
    a = "SETUP_NTPV2," + this.Rn;
    this.send("tp", a);
  }
  this.il(1) && this.send("tp", "SETUP");
};
d.$k = function(a) {
  w(1 != this.Cb || 2 != a, "Shouldn't try to send a v2 setup ack in v1 mode.");
  if (2 == this.Cb && this.il(2) && 2 == a) {
    this.send("tp", "SETUP_ACK_NTPV2");
  } else {
    if (this.il(1) && 1 == a) {
      this.send("tp", "SETUP_ACK");
    } else {
      return;
    }
  }
  this.nb.vc() || this.nb.Va(!0);
};
d.cl = function(a) {
  a > this.Yd && (this.Yd = a);
  1 == this.Yd && (this.nb.vc() || this.Yj || this.nb.Va(!0), this.Qd = null);
};
d.connect = function() {
  var a = this.V(), b = ka(a), c = nh[b];
  fa(c) || (c = 0);
  0 == c && O(a.postMessage ? a : a.document, "message", ph, !1, mh);
  nh[b] = c + 1;
  this.Ta = !0;
  this.Nh();
};
d.Nh = function() {
  var a = 0 == this.g.Lb();
  this.Yj && a || this.g.Y() || this.Xf() ? this.Mc.stop() : (this.Mc.start(), this.Uh());
};
d.send = function(a, b) {
  var c = this.g.Ok();
  c ? (this.send = function(a, b) {
    var g = this, h = this.g.name;
    this.ck = S(function() {
      g.ck = 0;
      try {
        var l = c.postMessage ? c : c.document;
        l.postMessage ? (l.postMessage(h + "|" + a + ":" + b, g.pt), V(X, "send(): service=" + a + " payload=" + b + " to hostname=" + g.pt)) : qg(X, "Peer window had no postMessage function.");
      } catch (p) {
        qg(X, "Error performing postMessage, ignoring.", p);
      }
    }, 0);
  }, this.send(a, b)) : V(X, "send(): window not ready");
};
d.ak = function() {
  this.g.Pc(1 == this.Cb || 1 == this.Yd ? 200 : void 0);
};
d.k = function() {
  if (this.Ta) {
    var a = this.V(), b = ka(a), c = nh[b];
    nh[b] = c - 1;
    1 == c && Ge(a.postMessage ? a : a.document, "message", ph, !1, mh);
  }
  this.ck && (k.clearTimeout(this.ck), this.ck = 0);
  le(this.q);
  delete this.q;
  le(this.Mc);
  delete this.Mc;
  this.mb.cancel();
  delete this.mb;
  this.nb.cancel();
  delete this.nb;
  this.fb.cancel();
  delete this.fb;
  delete this.send;
  mh.t.k.call(this);
};
var oh = function(a) {
  a = a.split(",");
  a[1] = a[1] || null;
  return a;
};
var qh = function(a, b) {
  this.eb = b || Xf();
  this.g = a;
  this.au = a.at || "";
  this.cu = a.rat || "";
  var c = this.V();
  if (!c.nix_setup_complete) {
    try {
      c.execScript("Class GCXPC____NIXVBS_wrapper\n Private m_Transport\nPrivate m_Auth\nPublic Sub SetTransport(transport)\nIf isEmpty(m_Transport) Then\nSet m_Transport = transport\nEnd If\nEnd Sub\nPublic Sub SetAuth(auth)\nIf isEmpty(m_Auth) Then\nm_Auth = auth\nEnd If\nEnd Sub\nPublic Function GetAuthToken()\n GetAuthToken = m_Auth\nEnd Function\nPublic Sub SendMessage(service, payload)\n Call m_Transport.GCXPC____NIXJS_handle_message(service, payload)\nEnd Sub\nPublic Sub CreateChannel(channel)\n Call m_Transport.GCXPC____NIXJS_create_channel(channel)\nEnd Sub\nPublic Sub GCXPC____NIXVBS_container()\n End Sub\nEnd Class\n Function GCXPC____NIXVBS_get_wrapper(transport, auth)\nDim wrap\nSet wrap = New GCXPC____NIXVBS_wrapper\nwrap.SetTransport transport\nwrap.SetAuth auth\nSet GCXPC____NIXVBS_get_wrapper = wrap\nEnd Function", 
      "vbscript"), c.nix_setup_complete = !0;
    } catch (e) {
      pg(X, "exception caught while attempting global setup: " + e);
    }
  }
  this.GCXPC____NIXJS_handle_message = this.xE;
  this.GCXPC____NIXJS_create_channel = this.wE;
};
v(qh, Og);
d = qh.prototype;
d.Ye = 6;
d.hg = !1;
d.Vd = null;
d.connect = function() {
  0 == this.g.Lb() ? this.zu() : this.ju();
};
d.zu = function() {
  if (!this.hg) {
    var a = this.g.ru();
    try {
      a.contentWindow.opener = (0,this.V().GCXPC____NIXVBS_get_wrapper)(this, this.au), this.hg = !0;
    } catch (b) {
      pg(X, "exception caught while attempting setup: " + b);
    }
    this.hg || this.V().setTimeout(t(this.zu, this), 100);
  }
};
d.ju = function() {
  if (!this.hg) {
    try {
      var a = this.V().opener;
      if (a && "GCXPC____NIXVBS_container" in a) {
        this.Vd = a;
        if (this.Vd.GetAuthToken() != this.cu) {
          pg(X, "Invalid auth token from other party");
          return;
        }
        this.Vd.CreateChannel((0,this.V().GCXPC____NIXVBS_get_wrapper)(this, this.au));
        this.hg = !0;
        this.g.Pc();
      }
    } catch (b) {
      pg(X, "exception caught while attempting setup: " + b);
      return;
    }
    this.hg || this.V().setTimeout(t(this.ju, this), 100);
  }
};
d.wE = function(a) {
  "unknown" == typeof a && "GCXPC____NIXVBS_container" in a || pg(X, "Invalid NIX channel given to createChannel_");
  this.Vd = a;
  this.Vd.GetAuthToken() != this.cu ? pg(X, "Invalid auth token from other party") : this.g.Pc();
};
d.xE = function(a, b) {
  this.V().setTimeout(t(function() {
    this.g.uc(a, b);
  }, this), 1);
};
d.send = function(a, b) {
  "unknown" !== typeof this.Vd && pg(X, "NIX channel not connected");
  this.Vd.SendMessage(a, b);
};
d.k = function() {
  qh.t.k.call(this);
  this.Vd = null;
};
var sh = function(a, b) {
  this.lk = {};
  for (var c = 0, e;e = Kg[c];c++) {
    if (e in a && !/^https?:\/\//.test(a[e])) {
      throw Error("URI " + a[e] + " is invalid for field " + e);
    }
  }
  this.fa = a;
  this.name = this.fa.cn || Ng(10);
  this.eb = b || Xf();
  this.yk = [];
  this.nk = new R(this);
  a.lpu = a.lpu || Re(this.eb.V().location.href) + "/robots.txt";
  a.ppu = a.ppu || Re(a.pu || "") + "/robots.txt";
  Lg[this.name] = this;
  Je(window, "unload", rh) || Fe(window, "unload", rh);
  U(X, "CrossPageChannel created: " + this.name);
};
v(sh, rg);
var th = /^%*tp$/, uh = /^%+tp$/;
d = sh.prototype;
d.ae = null;
d.Qc = null;
d.gb = null;
d.h = 1;
d.Y = function() {
  return 2 == this.h;
};
d.rd = null;
d.$h = null;
d.hi = function() {
  return this.fa;
};
d.ru = function() {
  return this.$h;
};
d.sv = function(a) {
  this.rd = a;
};
d.Ok = function() {
  return this.rd;
};
d.Fu = function() {
  try {
    return!!this.rd && !Boolean(this.rd.closed);
  } catch (a) {
    return!1;
  }
};
d.YG = function() {
  var a;
  if (ga(document.postMessage) || ga(window.postMessage) || E && window.postMessage) {
    a = 1;
  } else {
    if (mc) {
      a = 2;
    } else {
      if (E && this.fa.pru) {
        a = 3;
      } else {
        var b;
        if (b = E) {
          b = !1;
          try {
            a = window.opener, window.opener = {}, b = ne(window, "opener"), window.opener = a;
          } catch (c) {
          }
        }
        a = b ? 6 : 4;
      }
    }
  }
  return a;
};
d.kG = function() {
  if (!this.gb) {
    this.fa.tp || (this.fa.tp = this.YG());
    switch(this.fa.tp) {
      case 1:
        this.gb = new mh(this, this.fa.ph, this.eb, !!this.fa.osh, this.fa.nativeProtocolVersion || 2);
        break;
      case 6:
        this.gb = new qh(this, this.eb);
        break;
      case 2:
        this.gb = new Ug(this, this.eb);
        break;
      case 3:
        this.gb = new eh(this, this.eb);
        break;
      case 4:
        this.gb = new Vg(this, this.eb);
        break;
      case 7:
        var a;
        if (a = this.rd) {
          try {
            a = window.document.domain == this.rd.document.domain;
          } catch (b) {
            a = !1;
          }
        }
        a ? this.gb = new Pg(this, this.eb) : U(X, "DirectTransport not supported for this window, peer window in different security context or not set yet.");
    }
    if (this.gb) {
      U(X, "Transport created: " + this.gb.getName());
    } else {
      throw Error("CrossPageChannel: No suitable transport found!");
    }
  }
};
d.GH = function() {
  var a = {};
  a.cn = this.name;
  a.tp = this.fa.tp;
  a.osh = this.fa.osh;
  this.fa.lru && (a.pru = this.fa.lru);
  this.fa.lpu && (a.ppu = this.fa.lpu);
  this.fa.ppu && (a.lpu = this.fa.ppu);
  var b = this.fa.role;
  b && (a.role = 1 == b ? 0 : 1);
  return a;
};
d.eH = function(a, b, c) {
  U(X, "createPeerIframe()");
  var e = this.fa.ifrid;
  e || (e = this.fa.ifrid = "xpcpeer" + Ng(4));
  var f = Xf(a).createElement("IFRAME");
  f.id = f.name = e;
  b ? b(f) : f.style.width = f.style.height = "100%";
  this.nu();
  this.Qc = new Eg(void 0, this);
  var g = this.aH(c);
  this.nk.cH(f, "load", this.Qc.Va, !1, this.Qc);
  mc || F ? window.setTimeout(t(function() {
    a.appendChild(f);
    f.src = g.toString();
    U(X, "peer iframe created (" + e + ")");
  }, this), 1) : (f.src = g.toString(), a.appendChild(f), U(X, "peer iframe created (" + e + ")"));
  return f;
};
d.nu = function() {
  this.Qc && (this.Qc.cancel(), this.Qc = null);
  this.yk.length = 0;
  this.nk.removeAll();
};
d.aH = function(a) {
  var b = this.fa.pu;
  s(b) && (b = this.fa.pu = new W(b));
  !1 !== a && b.ha("xpc", kg(this.GH()));
  return b;
};
d.connect = function(a) {
  this.zo = a || n;
  this.Qc ? this.Qc.Xj(this.mx) : this.mx();
};
d.mx = function() {
  U(X, "continueConnection_()");
  this.Qc = null;
  this.fa.ifrid && (this.$h = this.eb.lG(this.fa.ifrid));
  if (this.$h) {
    var a = this.$h.contentWindow;
    a || (a = window.frames[this.fa.ifrid]);
    this.sv(a);
  }
  if (!this.rd) {
    if (window == window.top) {
      throw Error("CrossPageChannel: Can't connect, peer window-object not set.");
    }
    this.sv(window.parent);
  }
  this.kG();
  for (this.gb.connect();0 < this.yk.length;) {
    this.yk.shift()();
  }
};
d.close = function() {
  this.nu();
  this.h = 3;
  le(this.gb);
  this.zo = this.gb = null;
  le(this.ae);
  this.ae = null;
  U(X, 'Channel "' + this.name + '" closed');
};
d.Pc = function(a) {
  this.Y() || this.ae && this.ae.Nc() || (this.h = 2, U(X, 'Channel "' + this.name + '" connected'), le(this.ae), q(a) ? (this.ae = new gg(this.zo, a), this.ae.start()) : (this.ae = null, this.zo()));
};
d.ak = sh.prototype.Pc;
d.yF = function() {
  U(X, "Transport Error");
  this.close();
};
d.send = function(a, b) {
  this.Y() ? this.Fu() ? (ha(b) && (b = kg(b)), this.gb.send(this.RH(a), b)) : (pg(X, "Peer has disappeared."), this.close()) : pg(X, "Can't send. Channel not connected.");
};
d.uc = function(a, b, c) {
  this.Qc ? this.yk.push(t(this.uc, this, a, b, c)) : this.wG(c) ? this.Xf() ? qg(X, "CrossPageChannel::xpcDeliver(): Disposed.") : a && "tp" != a ? this.Y() ? this.uG(this.AG(a), b) : U(X, "CrossPageChannel::xpcDeliver(): Not connected.") : this.gb.dl(b) : qg(X, 'Message received from unapproved origin "' + c + '" - rejected.');
};
d.RH = function(a) {
  th.test(a) && (a = "%" + a);
  return a.replace(/[%:|]/g, encodeURIComponent);
};
d.AG = function(a) {
  a = a.replace(/%[0-9a-f]{2}/gi, decodeURIComponent);
  return uh.test(a) ? a.substring(1) : a;
};
d.Lb = function() {
  var a = this.fa.role;
  return fa(a) ? a : window.parent == this.rd ? 1 : 0;
};
d.Vj = function(a) {
  V(X, "changing channel name to " + a);
  delete Lg[this.name];
  this.name = a;
  Lg[a] = this;
};
d.wG = function(a) {
  var b = this.fa.ph;
  return qa(null == a ? "" : String(a)) || qa(null == b ? "" : String(b)) || a == this.fa.ph;
};
d.k = function() {
  this.close();
  this.$h = this.rd = null;
  delete Lg[this.name];
  le(this.nk);
  delete this.nk;
  sh.t.k.call(this);
};
var rh = function() {
  for (var a in Lg) {
    le(Lg[a]);
  }
};
var vh = function() {
};
vh.prototype.Sx = null;
vh.prototype.yr = function() {
  return this.Sx || (this.Sx = this.bL());
};
var wh, xh = function() {
};
v(xh, vh);
xh.prototype.Mx = function() {
  var a = this.Xx();
  return a ? new ActiveXObject(a) : new XMLHttpRequest;
};
xh.prototype.bL = function() {
  var a = {};
  this.Xx() && (a[0] = !0, a[1] = !0);
  return a;
};
xh.prototype.Xx = function() {
  if (!this.Yx && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var a = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        return new ActiveXObject(c), this.Yx = c;
      } catch (e) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return this.Yx;
};
wh = new xh;
var yh = function(a) {
  Q.call(this);
  this.headers = new D;
  this.mj = a || null;
  this.ia = !1;
  this.cj = this.J = null;
  this.jr = this.bh = "";
  this.tf = 0;
  this.Ya = "";
  this.we = this.ym = this.$i = this.Em = !1;
  this.cd = 0;
  this.nj = null;
  this.Af = "";
  this.oj = this.qr = !1;
};
v(yh, Q);
yh.prototype.a = ng("goog.net.XhrIo");
var zh = /^https?$/i, Ah = ["POST", "PUT"], Bh = [];
d = yh.prototype;
d.wy = function() {
  this.$();
  tb(Bh, this);
};
d.jl = function(a) {
  this.cd = Math.max(0, a);
};
d.Tv = function(a) {
  this.Af = a;
};
d.Uv = function() {
  return this.Af;
};
d.XK = function(a) {
  this.qr = a;
};
d.send = function(a, b, c, e) {
  if (this.J) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.bh + "; newUri=" + a);
  }
  b = b ? b.toUpperCase() : "GET";
  this.bh = a;
  this.Ya = "";
  this.tf = 0;
  this.jr = b;
  this.Em = !1;
  this.ia = !0;
  this.J = this.iz();
  this.cj = this.mj ? this.mj.yr() : wh.yr();
  this.J.onreadystatechange = t(this.Xq, this);
  try {
    V(this.a, this.dd("Opening Xhr")), this.ym = !0, this.J.open(b, String(a), !0), this.ym = !1;
  } catch (f) {
    V(this.a, this.dd("Error opening Xhr: " + f.message));
    this.$a(5, f);
    return;
  }
  a = c || "";
  var g = this.headers.clone();
  e && Wb(e, function(a, b) {
    g.set(b, a);
  });
  e = C(g.kb(), Ch);
  c = k.FormData && a instanceof k.FormData;
  !qb(Ah, b) || e || c || g.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  Wb(g, function(a, b) {
    this.J.setRequestHeader(b, a);
  }, this);
  this.Af && (this.J.responseType = this.Af);
  "withCredentials" in this.J && (this.J.withCredentials = this.qr);
  try {
    this.xr(), 0 < this.cd && (this.oj = Dh(this.J), V(this.a, this.dd("Will abort after " + this.cd + "ms if incomplete, xhr2 " + this.oj)), this.oj ? (this.J.timeout = this.cd, this.J.ontimeout = t(this.jf, this)) : this.nj = S(this.jf, this.cd, this)), V(this.a, this.dd("Sending request")), this.$i = !0, this.J.send(a), this.$i = !1;
  } catch (h) {
    V(this.a, this.dd("Send error: " + h.message)), this.$a(5, h);
  }
};
var Dh = function(a) {
  return E && Ac(9) && fa(a.timeout) && q(a.ontimeout);
}, Ch = function(a) {
  return "content-type" == a.toLowerCase();
};
d = yh.prototype;
d.iz = function() {
  return this.mj ? this.mj.Mx() : wh.Mx();
};
d.jf = function() {
  "undefined" != typeof aa && this.J && (this.Ya = "Timed out after " + this.cd + "ms, aborting", this.tf = 8, V(this.a, this.dd(this.Ya)), this.dispatchEvent("timeout"), this.abort(8));
};
d.$a = function(a, b) {
  this.ia = !1;
  this.J && (this.we = !0, this.J.abort(), this.we = !1);
  this.Ya = b;
  this.tf = a;
  this.Er();
  this.bj();
};
d.Er = function() {
  this.Em || (this.Em = !0, this.dispatchEvent("complete"), this.dispatchEvent("error"));
};
d.abort = function(a) {
  this.J && this.ia && (V(this.a, this.dd("Aborting")), this.ia = !1, this.we = !0, this.J.abort(), this.we = !1, this.tf = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), this.bj());
};
d.k = function() {
  this.J && (this.ia && (this.ia = !1, this.we = !0, this.J.abort(), this.we = !1), this.bj(!0));
  yh.t.k.call(this);
};
d.Xq = function() {
  this.Xf() || (this.ym || this.$i || this.we ? this.dx() : this.WI());
};
d.WI = function() {
  this.dx();
};
d.dx = function() {
  if (this.ia && "undefined" != typeof aa) {
    if (this.cj[1] && 4 == this.zd() && 2 == this.Da()) {
      V(this.a, this.dd("Local request error detected and ignored"));
    } else {
      if (this.$i && 4 == this.zd()) {
        S(this.Xq, 0, this);
      } else {
        if (this.dispatchEvent("readystatechange"), this.Vm()) {
          V(this.a, this.dd("Request complete"));
          this.ia = !1;
          try {
            this.pa() ? (this.dispatchEvent("complete"), this.dispatchEvent("success")) : (this.tf = 6, this.Ya = this.km() + " [" + this.Da() + "]", this.Er());
          } finally {
            this.bj();
          }
        }
      }
    }
  }
};
d.bj = function(a) {
  if (this.J) {
    this.xr();
    var b = this.J, c = this.cj[0] ? n : null;
    this.cj = this.J = null;
    a || this.dispatchEvent("ready");
    try {
      b.onreadystatechange = c;
    } catch (e) {
      pg(this.a, "Problem encountered resetting onreadystatechange: " + e.message);
    }
  }
};
d.xr = function() {
  this.J && this.oj && (this.J.ontimeout = null);
  fa(this.nj) && (k.clearTimeout(this.nj), this.nj = null);
};
d.Nc = function() {
  return!!this.J;
};
d.Vm = function() {
  return 4 == this.zd();
};
d.pa = function() {
  var a = this.Da(), b;
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
  return b || 0 === a && !this.sJ();
};
d.sJ = function() {
  var a = Qe(String(this.bh))[1] || null;
  !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1));
  return zh.test(a ? a.toLowerCase() : "");
};
d.zd = function() {
  return this.J ? this.J.readyState : 0;
};
d.Da = function() {
  try {
    return 2 < this.zd() ? this.J.status : -1;
  } catch (a) {
    return qg(this.a, "Can not get status: " + a.message), -1;
  }
};
d.km = function() {
  try {
    return 2 < this.zd() ? this.J.statusText : "";
  } catch (a) {
    return V(this.a, "Can not get status: " + a.message), "";
  }
};
d.gj = function() {
  return String(this.bh);
};
d.cc = function() {
  try {
    return this.J ? this.J.responseText : "";
  } catch (a) {
    return V(this.a, "Can not get responseText: " + a.message), "";
  }
};
d.Zr = function() {
  try {
    return this.J ? this.J.responseXML : null;
  } catch (a) {
    return V(this.a, "Can not get responseXML: " + a.message), null;
  }
};
d.Jq = function(a) {
  if (this.J) {
    var b = this.J.responseText;
    a && 0 == b.indexOf(a) && (b = b.substring(a.length));
    return hg(b);
  }
};
d.getResponseHeader = function(a) {
  return this.J && this.Vm() ? this.J.getResponseHeader(a) : void 0;
};
d.getAllResponseHeaders = function() {
  return this.J && this.Vm() ? this.J.getAllResponseHeaders() : "";
};
d.Hi = function() {
  return this.tf;
};
d.Ze = function() {
  return s(this.Ya) ? this.Ya : String(this.Ya);
};
d.dd = function(a) {
  return a + " [" + this.jr + " " + this.bh + " " + this.Da() + "]";
};
var Eh = function(a) {
  kf.call(this, a.Q());
  this.hh = a;
  this.X = a.X;
  var b = new R(this);
  b.listen(a, "b", this.dn);
  b.listen(a, "a", this.Jo);
  this.Gh(b);
};
v(Eh, kf);
Eh.prototype.ik = function() {
  this.hh.disconnect();
};
Eh.prototype.send = function(a) {
  this.hh.send(a);
};
Eh.prototype.dn = function(a) {
  this.onMessage(a.message);
};
Eh.prototype.Jo = function(a) {
  this.sb(a.Rg);
};
I("cv.AppEngineChannel");
new D;
var Gh = function(a, b) {
  Q.call(this);
  this.tB = q(a) ? a : !0;
  this.Bn = b || Fh;
  this.Nj = this.Bn(this.Ch);
};
v(Gh, Q);
d = Gh.prototype;
d.Kb = null;
d.ya = null;
d.If = void 0;
d.Cn = !1;
d.Ch = 0;
d.a = ng("goog.net.WebSocket");
var Fh = function(a) {
  return Math.min(1E3 * Math.pow(2, a), 6E4);
};
d = Gh.prototype;
d.open = function(a, b) {
  w(k.WebSocket, "This browser does not support WebSocket");
  w(!this.fs(), "The WebSocket is already open");
  this.es();
  this.ya = a;
  (this.If = b) ? (U(this.a, "Opening the WebSocket on " + this.ya + " with protocol " + this.If), this.Kb = new WebSocket(this.ya, this.If)) : (U(this.a, "Opening the WebSocket on " + this.ya), this.Kb = new WebSocket(this.ya));
  this.Kb.onopen = t(this.RA, this);
  this.Kb.onclose = t(this.Ui, this);
  this.Kb.onmessage = t(this.nn, this);
  this.Kb.onerror = t(this.v, this);
};
d.close = function() {
  this.es();
  this.Kb && (U(this.a, "Closing the WebSocket."), this.Cn = !0, this.Kb.close(), this.Kb = null);
};
d.send = function(a) {
  w(this.fs(), "Cannot send without an open socket");
  this.Kb.send(a);
};
d.fs = function() {
  return!!this.Kb && 1 == this.Kb.readyState;
};
d.RA = function() {
  U(this.a, "WebSocket opened on " + this.ya);
  this.dispatchEvent("f");
  this.Ch = 0;
  this.Nj = this.Bn(this.Ch);
};
d.Ui = function(a) {
  U(this.a, "The WebSocket on " + this.ya + " closed.");
  this.dispatchEvent("c");
  this.Kb = null;
  this.Cn ? (U(this.a, "The WebSocket closed normally."), this.ya = null, this.If = void 0) : (pg(this.a, "The WebSocket disconnected unexpectedly: " + a.data), this.tB && (U(this.a, "Seconds until next reconnect attempt: " + Math.floor(this.Nj / 1E3)), this.Dn = S(t(this.open, this, this.ya, this.If), this.Nj, this), this.Ch++, this.Nj = this.Bn(this.Ch)));
  this.Cn = !1;
};
d.nn = function(a) {
  this.dispatchEvent(new Hh(a.data));
};
d.v = function(a) {
  a = a.data;
  pg(this.a, "An error occurred: " + a);
  this.dispatchEvent(new Ih(a));
};
d.es = function() {
  null != this.Dn && k.clearTimeout(this.Dn);
  this.Dn = null;
};
d.k = function() {
  Gh.t.k.call(this);
  this.close();
};
var Hh = function(a) {
  N.call(this, "e");
  this.message = a;
};
v(Hh, N);
var Ih = function(a) {
  N.call(this, "d");
  this.data = a;
};
v(Ih, N);
var Jh = function(a) {
  Eh.call(this, a);
  this.a = I("cv.OrderedChannel");
  this.oh = new D;
  this.sh = [];
  this.jn = this.rs = 0;
  this.ma = new jf(3E3);
  O(this.ma, "tick", t(this.KB, this));
};
v(Jh, Eh);
var Kh = function(a) {
  this.timestamp = u();
  this.message = a;
  this.AB = 0;
}, Lh = function(a, b) {
  this.seqNum = a;
  this.body = b;
};
d = Jh.prototype;
d.send = function(a) {
  a = new Lh(this.rs++, a);
  Jh.t.send.call(this, a);
  this.oh.set(a.seqNum, new Kh(a));
  this.ma.start();
};
d.dn = function(a) {
  a = a.message;
  var b = a.seqNum;
  if (-1 == b) {
    this.oh.remove(a.body);
  } else {
    if (-2 == b) {
      this.xs();
    } else {
      this.hh.send(this.iB(b));
      var c = b - this.jn;
      if (0 > c || void 0 !== this.sh[c]) {
        this.a.info("Duplicate message received with seq num: " + b);
      } else {
        for (this.sh[c] = a.body;void 0 !== this.sh[0];) {
          a = this.sh.shift(), this.jn++, Jh.t.dn.call(this, new mf("b", a));
        }
      }
    }
  }
};
d.ik = function() {
  this.hh.send(this.iK());
  this.xs();
};
d.xs = function() {
  this.rs = 0;
  this.oh.clear();
  this.jn = 0;
  this.sh = [];
};
d.KB = function() {
  var a = this.oh.kb();
  if (0 == a.length) {
    this.ma.stop();
  } else {
    if (100 < a.length) {
      this.disconnect("Too many messages queued up in reliable channel.");
    } else {
      this.a.info("Retransmitting up to " + a.length + " messages.");
      var b = u(), c;
      for (c in a) {
        var e = this.oh.get(a[c]);
        if (10 <= e.AB++) {
          this.disconnect("Exhausted maximum retries for message.");
          break;
        }
        b - e.timestamp >= this.ma.zB() && this.hh.send(e.message);
      }
    }
  }
};
d.iB = function(a) {
  return new Lh(-1, a);
};
d.iK = function() {
  return new Lh(-2, {});
};
var Mh = function(a, b, c) {
  Eh.call(this, a);
  w(!c || 0 < c);
  this.kn = b || "ping";
  this.Cs = c || 5E3;
  this.En = 2E4;
  this.a = I("cv.TimeoutChannel");
  this.Cj = this.Dj = this.Pm = null;
  this.NB = setTimeout(t(this.RB, this), 6E3);
  this.a.info("Creating...");
  this.Eq(t(this.SB, this), n);
};
v(Mh, Eh);
d = Mh.prototype;
d.send = function(a) {
  Mh.t.send.call(this, a);
  u();
};
d.onMessage = function(a) {
  Mh.t.onMessage.call(this, a);
  this.Pm = u();
  cd(a) && ("ping" == a[1].type ? (this.a.C("Got ping from " + this.X), this.Or()) : "pong" == a[1].type && this.a.C("Got pong from " + this.X));
};
d.Jo = function(a) {
  Mh.t.Jo.call(this, a);
  "connected" != a.Rg && (clearTimeout(this.Cj), this.Cj = null, clearTimeout(this.Dj), this.Dj = null);
};
d.RB = function() {
  "connecting" == this.Q() && (this.a.e("failed to connect in 6 seconds"), this.disconnect("failed to connect in 6 seconds"));
};
d.oK = function() {
  var a = t(function() {
    this.Y() && (this.Pm ? u() > this.Pm + this.En ? this.disconnect("liveness timeout") : this.Dj = setTimeout(a, this.En) : this.disconnect("liveness timeout - heartbeat never received"));
  }, this);
  this.Dj = setTimeout(a, this.En);
};
d.nK = function() {
  var a = t(function() {
    this.Y() && (this.Or(), this.Cj = setTimeout(a, this.Cs));
  }, this);
  this.Cj = setTimeout(a, this.Cs);
};
d.Or = function() {
  var a = {type:this.kn};
  this.a.C("Sending " + this.kn + " to " + this.X);
  this.send(["cm", a]);
};
d.SB = function() {
  clearTimeout(this.NB);
  "ping" == this.kn && this.nK();
  this.oK();
};
var Nh = function(a) {
  kf.call(this);
  this.a = I("cv.WebSocketChannel");
  this.q = new R(this);
  this.Ge = new Gh(!1);
  this.ya = a;
  this.q.listen(this.Ge, "f", this.cB);
  this.q.listen(this.Ge, "e", this.bB);
  this.q.listen(this.Ge, "d", this.aB);
  this.q.listen(this.Ge, "c", this.$A);
  this.Ge.open(this.ya);
};
v(Nh, kf);
d = Nh.prototype;
d.k = function() {
  this.q.$();
  Nh.t.k.call(this);
};
d.cB = function() {
  this.a.info("On WebSocket open: " + this.ya);
  this.sb("connected");
};
d.bB = function(a) {
  this.onMessage(ab(JSON.parse(a.message)));
};
d.$A = function() {
  this.a.info("On WebSocket close: " + this.ya);
  this.disconnect();
};
d.aB = function(a) {
  this.a.e("On WebSocket error: " + this.ya + ", " + a.data);
  this.disconnect(a.data);
};
d.ik = function() {
  this.a.info("Closing WebSocket channel");
  this.Ge.close();
};
d.send = function(a) {
  this.Ge.send(JSON.stringify(a));
};
var Oh = function(a) {
  this.appName = "ChromeCast";
  this.senderId = a;
};
var Ph = function() {
  this.Te = this.R = 0;
  this.ge = [];
};
d = Ph.prototype;
d.Dk = function(a) {
  this.ge[this.Te++] = a;
};
d.Wf = function() {
  if (this.R != this.Te) {
    var a = this.ge[this.R];
    delete this.ge[this.R];
    this.R++;
    return a;
  }
};
d.L = function() {
  return this.Te - this.R;
};
d.ob = function() {
  return 0 == this.Te - this.R;
};
d.clear = function() {
  this.Te = this.R = this.ge.length = 0;
};
d.contains = function(a) {
  return qb(this.ge, a);
};
d.remove = function(a) {
  a = jb(this.ge, a);
  if (0 > a) {
    return!1;
  }
  a == this.R ? this.Wf() : (sb(this.ge, a), this.Te--);
  return!0;
};
d.N = function() {
  return this.ge.slice(this.R, this.Te);
};
var Qh = function(a, b) {
  this.hv = a || 0;
  this.Qe = b || 10;
  if (this.hv > this.Qe) {
    throw Error("[goog.structs.Pool] Min can not be greater than max");
  }
  this.od = new Ph;
  this.Xd = new Yb;
  this.Po = 0;
  this.rp = null;
  this.Ik();
};
v(Qh, M);
d = Qh.prototype;
d.Mk = function() {
  var a = u();
  if (!(null != this.rp && a - this.rp < this.Po)) {
    var b = this.zJ();
    b && (this.rp = a, this.Xd.add(b));
    return b;
  }
};
d.Ro = function(a) {
  return this.Xd.remove(a) ? (this.hp(a), !0) : !1;
};
d.zJ = function() {
  for (var a;0 < this.zv() && (a = this.od.Wf(), !this.Vo(a));) {
    this.Ik();
  }
  !a && this.L() < this.Qe && (a = this.Wo());
  return a;
};
d.hp = function(a) {
  this.Xd.remove(a);
  this.Vo(a) && this.L() < this.Qe ? this.od.Dk(a) : this.fo(a);
};
d.Ik = function() {
  for (var a = this.od;this.L() < this.hv;) {
    a.Dk(this.Wo());
  }
  for (;this.L() > this.Qe && 0 < this.zv();) {
    this.fo(a.Wf());
  }
};
d.Wo = function() {
  return{};
};
d.fo = function(a) {
  if ("function" == typeof a.$) {
    a.$();
  } else {
    for (var b in a) {
      a[b] = null;
    }
  }
};
d.Vo = function(a) {
  return "function" == typeof a.LL ? a.LL() : !0;
};
d.contains = function(a) {
  return this.od.contains(a) || this.Xd.contains(a);
};
d.L = function() {
  return this.od.L() + this.Xd.L();
};
d.qE = function() {
  return this.Xd.L();
};
d.zv = function() {
  return this.od.L();
};
d.ob = function() {
  return this.od.ob() && this.Xd.ob();
};
d.k = function() {
  Qh.t.k.call(this);
  if (0 < this.qE()) {
    throw Error("[goog.structs.Pool] Objects not released");
  }
  delete this.Xd;
  for (var a = this.od;!a.ob();) {
    this.fo(a.Wf());
  }
  delete this.od;
};
var Rh = function(a, b) {
  this.zi = a;
  this.ni = b;
};
Rh.prototype.getKey = function() {
  return this.zi;
};
Rh.prototype.Fa = function() {
  return this.ni;
};
Rh.prototype.clone = function() {
  return new Rh(this.zi, this.ni);
};
var Sh = function(a) {
  this.ac = [];
  a && this.SJ(a);
};
d = Sh.prototype;
d.tv = function(a, b) {
  var c = this.ac;
  c.push(new Rh(a, b));
  this.TJ(c.length - 1);
};
d.SJ = function(a) {
  var b, c;
  if (a instanceof Sh) {
    if (b = a.kb(), c = a.N(), 0 >= a.L()) {
      a = this.ac;
      for (var e = 0;e < b.length;e++) {
        a.push(new Rh(b[e], c[e]));
      }
      return;
    }
  } else {
    b = Ib(a), c = Hb(a);
  }
  for (e = 0;e < b.length;e++) {
    this.tv(b[e], c[e]);
  }
};
d.remove = function() {
  var a = this.ac, b = a.length, c = a[0];
  if (!(0 >= b)) {
    return 1 == b ? rb(a) : (a[0] = a.pop(), this.JI(0)), c.Fa();
  }
};
d.JI = function(a) {
  for (var b = this.ac, c = b.length, e = b[a];a < c >> 1;) {
    var f = this.CJ(a), g = this.DJ(a), f = g < c && b[g].getKey() < b[f].getKey() ? g : f;
    if (b[f].getKey() > e.getKey()) {
      break;
    }
    b[a] = b[f];
    a = f;
  }
  b[a] = e;
};
d.TJ = function(a) {
  for (var b = this.ac, c = b[a];0 < a;) {
    var e = this.RJ(a);
    if (b[e].getKey() > c.getKey()) {
      b[a] = b[e], a = e;
    } else {
      break;
    }
  }
  b[a] = c;
};
d.CJ = function(a) {
  return 2 * a + 1;
};
d.DJ = function(a) {
  return 2 * a + 2;
};
d.RJ = function(a) {
  return a - 1 >> 1;
};
d.N = function() {
  for (var a = this.ac, b = [], c = a.length, e = 0;e < c;e++) {
    b.push(a[e].Fa());
  }
  return b;
};
d.kb = function() {
  for (var a = this.ac, b = [], c = a.length, e = 0;e < c;e++) {
    b.push(a[e].getKey());
  }
  return b;
};
d.tg = function(a) {
  return mb(this.ac, function(b) {
    return b.Fa() == a;
  });
};
d.Na = function(a) {
  return mb(this.ac, function(b) {
    return b.getKey() == a;
  });
};
d.clone = function() {
  return new Sh(this);
};
d.L = function() {
  return this.ac.length;
};
d.ob = function() {
  return 0 == this.ac.length;
};
d.clear = function() {
  rb(this.ac);
};
var Th = function() {
  Sh.call(this);
};
v(Th, Sh);
Th.prototype.Dk = function(a, b) {
  this.tv(a, b);
};
Th.prototype.Wf = function() {
  return this.remove();
};
var Uh = function(a, b) {
  this.Hu = void 0;
  this.Ak = new Th;
  Qh.call(this, a, b);
};
v(Uh, Qh);
d = Uh.prototype;
d.Mk = function(a, b) {
  if (!a) {
    var c = Uh.t.Mk.call(this);
    c && this.Po && (this.Hu = k.setTimeout(t(this.fl, this), this.Po));
    return c;
  }
  this.Ak.Dk(q(b) ? b : 100, a);
  this.fl();
};
d.fl = function() {
  for (var a = this.Ak;0 < a.L();) {
    var b = this.Mk();
    if (b) {
      a.Wf().apply(this, [b]);
    } else {
      break;
    }
  }
};
d.hp = function(a) {
  Uh.t.hp.call(this, a);
  this.fl();
};
d.Ik = function() {
  Uh.t.Ik.call(this);
  this.fl();
};
d.k = function() {
  Uh.t.k.call(this);
  k.clearTimeout(this.Hu);
  this.Ak.clear();
  this.Ak = null;
};
var Vh = function(a, b, c) {
  Uh.call(this, b, c);
  this.jp = a;
};
v(Vh, Uh);
Vh.prototype.Wo = function() {
  var a = new yh, b = this.jp;
  b && Wb(b, function(b, e) {
    a.headers.set(e, b);
  });
  return a;
};
Vh.prototype.Vo = function(a) {
  return!a.Xf() && !a.Nc();
};
var Wh = function(a, b, c, e, f) {
  Q.call(this);
  this.Do = q(a) ? a : 1;
  this.cd = q(f) ? Math.max(0, f) : 0;
  this.Vf = new Vh(b, c, e);
  this.tc = new D;
  this.q = new R(this);
};
v(Wh, Q);
var Xh = "ready complete success error abort timeout".split(" ");
d = Wh.prototype;
d.jl = function(a) {
  this.cd = Math.max(0, a);
};
d.send = function(a, b, c, e, f, g, h, l, p) {
  if (this.tc.get(a)) {
    throw Error("[goog.net.XhrManager] ID in use");
  }
  b = new Yh(b, t(this.OI, this, a), c, e, f, h, q(l) ? l : this.Do, p);
  this.tc.set(a, b);
  a = t(this.NI, this, a);
  this.Vf.Mk(a, g);
  return b;
};
d.abort = function(a, b) {
  var c = this.tc.get(a);
  if (c) {
    var e = c.Id;
    c.qI(!0);
    b && (e && (this.Zv(e, c.Qo()), Fe(e, "ready", function() {
      this.Vf.Ro(e);
    }, !1, this)), this.tc.remove(a));
    e && e.abort();
  }
};
d.NI = function(a, b) {
  var c = this.tc.get(a);
  c && !c.Id ? (this.WG(b, c.Qo()), b.jl(this.cd), b.Tv(c.Uv()), c.Id = b, this.dispatchEvent(new Zh("ready", this, a, b)), this.pg(a, b), c.ZG() && b.abort()) : this.Vf.Ro(b);
};
d.OI = function(a, b) {
  var c = b.target;
  switch(b.type) {
    case "ready":
      this.pg(a, c);
      break;
    case "complete":
      return this.GJ(a, c, b);
    case "success":
      this.IJ(a, c);
      break;
    case "timeout":
    ;
    case "error":
      this.HJ(a, c);
      break;
    case "abort":
      this.FJ(a, c);
  }
  return null;
};
d.pg = function(a, b) {
  var c = this.tc.get(a);
  !c || c.HH() || c.Yo() ? (c && (this.Zv(b, c.Qo()), this.tc.remove(a)), this.Vf.Ro(b)) : (c.LH(), b.send(c.zk(), c.KH(), c.IH(), c.JH()));
};
d.GJ = function(a, b, c) {
  var e = this.tc.get(a);
  if (7 == b.Hi() || b.pa() || e.Yo()) {
    if (this.dispatchEvent(new Zh("complete", this, a, b)), e && (e.PH(!0), e.rw())) {
      return e.rw().call(b, c);
    }
  }
  return null;
};
d.FJ = function(a, b) {
  this.dispatchEvent(new Zh("abort", this, a, b));
};
d.IJ = function(a, b) {
  this.dispatchEvent(new Zh("success", this, a, b));
};
d.HJ = function(a, b) {
  this.tc.get(a).Yo() && this.dispatchEvent(new Zh("error", this, a, b));
};
d.Zv = function(a, b, c) {
  this.q.Zc(a, c || Xh, b);
};
d.WG = function(a, b, c) {
  this.q.listen(a, c || Xh, b);
};
d.k = function() {
  Wh.t.k.call(this);
  this.Vf.$();
  this.Vf = null;
  this.q.$();
  this.q = null;
  var a = this.tc;
  Wb(a, function(a) {
    a.$();
  });
  a.clear();
  this.tc = null;
};
var Zh = function(a, b, c, e) {
  N.call(this, a, b);
  this.id = c;
  this.Id = e;
};
v(Zh, N);
var Yh = function(a, b, c, e, f, g, h, l) {
  this.ya = a;
  this.lH = c || "GET";
  this.jH = e;
  this.jp = f || null;
  this.Do = q(h) ? h : 1;
  this.$v = 0;
  this.aw = this.bw = !1;
  this.mH = b;
  this.iH = g;
  this.Af = l || "";
  this.Id = null;
};
d = Yh.prototype;
d.zk = function() {
  return this.ya;
};
d.KH = function() {
  return this.lH;
};
d.IH = function() {
  return this.jH;
};
d.JH = function() {
  return this.jp;
};
d.LH = function() {
  this.$v++;
};
d.Yo = function() {
  return this.$v > this.Do;
};
d.PH = function(a) {
  this.bw = a;
};
d.HH = function() {
  return this.bw;
};
d.qI = function(a) {
  this.aw = a;
};
d.ZG = function() {
  return this.aw;
};
d.Qo = function() {
  return this.mH;
};
d.rw = function() {
  return this.iH;
};
d.Uv = function() {
  return this.Af;
};
var $h = function(a, b, c, e, f, g, h) {
  this.BB = a ? a : "https://www-googleapis-staging.sandbox.google.com/deviceregistry/v1";
  this.rH = b ? b : "https://accounts.google.com/o/oauth2/token";
  this.pH = c ? c : "919648714761-l7s11uoekiqlmod1oiv9tcjj2f1ca7dm.apps.googleusercontent.com";
  this.qH = e ? e : "QVdYPt9YzQIEto4plJysXS_Z";
  this.Ut = f ? f : "https://client-channel.google.com";
  this.Tt = g ? g : "test";
  this.PF = h ? h : "echo_service";
  this.rE = "AIzaSyAOZM8ZYeov685QMjXT3sC7XNizfrTEKjA";
};
var ai = function(a) {
  Q.call(this);
  this.a = I("cv.CloudXhrManager");
  this.ub = a || new $h;
  this.nc = new Wh(0, null, 1, 10, 5E3);
  this.cC = 0;
  this.xB = new W(this.ub.BB);
};
v(ai, Q);
var bi = function(a, b) {
  this.response = a;
  this.Id = b;
};
ai.prototype.Wv = function(a, b) {
  var c = b.target, e = null;
  if (c.pa()) {
    try {
      e = c.Jq();
    } catch (f) {
      c.cc() && this.a.info("Failed to parse response JSON: " + c.cc());
    }
  }
  void 0 === e && (e = null);
  a.ja(new bi(e, c));
};
ai.prototype.xA = function(a) {
  a.client_id = this.ub.pH;
  a.client_secret = this.ub.qH;
  var b = new K;
  this.nc.send(this.Vv(), this.ub.rH, "POST", Dg(a).nw(), {"Content-Type":"application/x-www-form-urlencoded"}, 0, t(this.Wv, this, b));
  return b;
};
ai.prototype.Vv = function() {
  return(++this.cC % 1E3).toString();
};
ai.prototype.zm = function(a, b, c, e, f) {
  w("GET" == b || "POST" == b || "DELETE" == b);
  var g = {"Content-Type":"application/json"};
  f && (g.Authorization = "Bearer " + f);
  f = this.xB.clone();
  f.Oe(f.eg() + "/" + a);
  e && f.Yf(e);
  a = null;
  c && (a = JSON.stringify(c));
  c = new K;
  this.nc.send(this.Vv(), f.toString(), b, a, g, 1, t(this.Wv, this, c));
  return c;
};
var ci = function(a) {
  this.a = I("cv.CloudAuth");
  this.bd = a;
  this.ur = "";
  this.uh = null;
};
ci.prototype.Um = function() {
  var a = new K;
  if (this.ur) {
    return this.bA();
  }
  var b = chrome.identity;
  if (!b) {
    return this.a.e("chrome.identity permission required for auth."), a.Qa(), a;
  }
  b.getAuthToken({interactive:!0}, t(function(b) {
    a.ja(q(b) ? b : "");
  }, this));
  return a;
};
ci.prototype.bA = function() {
  var a = new K;
  !this.uh || this.uh.dB() ? this.eB(this.ur, !1).Bb(t(function(b) {
    b = b.Fa();
    b.accessToken ? (this.uh = new di(b.accessToken, b.Rr), a.ja(this.uh.ec())) : (this.a.info("Failed to retrieve debug access token"), a.ja(""));
  }, this)) : a.ja(this.uh.ec());
  return a;
};
var di = function(a, b) {
  this.ZK = a;
  this.Tp = b ? u() + 1E3 * b : 0;
};
di.prototype.dB = function() {
  return this.Lx() && u() > this.Tp;
};
di.prototype.GE = function() {
  return this.Lx() && u() > this.Tp + 6E5;
};
di.prototype.Lx = function() {
  return 0 != this.Tp;
};
di.prototype.ec = function() {
  return this.ZK;
};
var ei = function() {
  this.accessToken = "";
  this.Rr = 0;
  this.refreshToken = "";
};
ci.prototype.eB = function(a, b) {
  var c = {};
  b ? Qb(c, {code:a, grant_type:"authorization_code", redirect_uri:"oob"}) : Qb(c, {refresh_token:a, grant_type:"refresh_token"});
  var e = new K;
  this.bd.xA(c).Bb(t(function(a) {
    var b = new ei;
    "success" == a.Q() && ((a = a.Fa().response) ? (a.refresh_token && (b.refreshToken = a.refresh_token), a.access_token && (b.accessToken = a.access_token, b.Rr = a.expires_in), e.ja(b)) : (this.a.info("Failed to retrieve access token."), e.Qa()));
  }, this));
  return e;
};
var fi = function(a) {
  this.Xe = a;
}, gi = /\s*;\s*/;
d = fi.prototype;
d.isEnabled = function() {
  return navigator.cookieEnabled;
};
d.OK = function(a) {
  return!/[;=\s]/.test(a);
};
d.PK = function(a) {
  return!/[;\r\n]/.test(a);
};
d.set = function(a, b, c, e, f, g) {
  if (!this.OK(a)) {
    throw Error('Invalid cookie name "' + a + '"');
  }
  if (!this.PK(b)) {
    throw Error('Invalid cookie value "' + b + '"');
  }
  q(c) || (c = -1);
  f = f ? ";domain=" + f : "";
  e = e ? ";path=" + e : "";
  g = g ? ";secure" : "";
  c = 0 > c ? "" : 0 == c ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(u() + 1E3 * c)).toUTCString();
  this.SK(a + "=" + b + f + e + c + g);
};
d.get = function(a, b) {
  for (var c = a + "=", e = this.Sp(), f = 0, g;g = e[f];f++) {
    if (0 == g.lastIndexOf(c, 0)) {
      return g.substr(c.length);
    }
    if (g == a) {
      return "";
    }
  }
  return b;
};
d.remove = function(a, b, c) {
  var e = this.Na(a);
  this.set(a, "", 0, b, c);
  return e;
};
d.kb = function() {
  return this.Gl().keys;
};
d.N = function() {
  return this.Gl().Fx;
};
d.ob = function() {
  return!this.Up();
};
d.L = function() {
  return this.Up() ? this.Sp().length : 0;
};
d.Na = function(a) {
  return q(this.get(a));
};
d.tg = function(a) {
  for (var b = this.Gl().Fx, c = 0;c < b.length;c++) {
    if (b[c] == a) {
      return!0;
    }
  }
  return!1;
};
d.clear = function() {
  for (var a = this.Gl().keys, b = a.length - 1;0 <= b;b--) {
    this.remove(a[b]);
  }
};
d.SK = function(a) {
  this.Xe.cookie = a;
};
d.Up = function() {
  return this.Xe.cookie;
};
d.Sp = function() {
  return(this.Up() || "").split(gi);
};
d.Gl = function() {
  for (var a = this.Sp(), b = [], c = [], e, f, g = 0;f = a[g];g++) {
    e = f.indexOf("="), -1 == e ? (b.push(""), c.push(f)) : (b.push(f.substring(0, e)), c.push(f.substring(e + 1)));
  }
  return{keys:b, Fx:c};
};
var hi = new fi(document);
hi.DM = 3950;
var ii = null;
var ji = function(a, b, c, e, f) {
  a = new W(a);
  var g = a.fc();
  if ("client-channel.google.com" == g) {
    var h;
    if (!ii) {
      try {
        h = !!k.chrome.loadTimes().wasFetchedViaSpdy;
      } catch (l) {
        h = !1;
      }
      h ? ii = "0" : (h = parseInt(hi.get("llbcs", "-1"), 10), isNaN(h) && (h = -1), h = ((h + 1) % 30).toString(), hi.set("llbcs", h, -1, "/", void 0, !1), ii = h);
    }
    (h = ii) && a.Ne(h + "." + g);
  }
  this.nh = a;
  this.Vi = e || null;
  this.Cw = b;
  this.$H = f || null;
  this.vI = c;
};
d = ji.prototype;
d.Gx = function() {
  return this.nh.toString();
};
d.hf = function() {
  return this.Cw;
};
d.mf = function() {
  return this.Vi;
};
d.kr = function() {
  return this.vI;
};
d.Hx = function() {
  var a = this.Cw, b = this.$H, c = new ki;
  c.tK(a);
  null != b && c.uK(b);
  return c;
};
d.rF = function(a) {
  var b = new fi(document), c = window.__OVERRIDE_SID;
  null == c && (c = b.get("SID"));
  if (c) {
    var e = 0 == a.indexOf("https:") || 0 == a.indexOf("chrome-extension:"), c = e ? window.__SAPISID : window.__APISID;
    null == c && (c = b.get(e ? "SAPISID" : "APISID"));
    c ? (b = e ? "SAPISIDHASH" : "APISIDHASH", e = new Tf, e.reset(), e.update([c, a].join(" ")), a = Kf(e.xo()), a = {scheme:b, hash:a.toLowerCase()}) : a = null;
  } else {
    a = null;
  }
  return a;
};
var li = function(a, b) {
  this.wJ = new jg(a);
  this.gd = b ? ig : hg;
};
li.prototype.stringify = function(a) {
  return this.wJ.he(a);
};
li.prototype.parse = function(a) {
  return this.gd(a);
};
var mi = function(a, b, c, e, f) {
  this.g = a;
  this.j = b;
  this.fd = c;
  this.Gb = e;
  this.$g = f || 1;
  this.jf = 45E3;
  this.q = new R(this);
  this.ek = new jf;
  this.ek.setInterval(250);
};
d = mi.prototype;
d.Ib = null;
d.qc = !1;
d.bg = null;
d.oo = null;
d.Qj = null;
d.Ph = null;
d.Ac = null;
d.Hb = null;
d.Rf = null;
d.Ha = null;
d.Ih = 0;
d.sc = null;
d.Gf = null;
d.Ya = null;
d.va = -1;
d.gt = !0;
d.He = !1;
d.Of = 0;
d.Uj = null;
var ni = function(a, b) {
  switch(a) {
    case 0:
      return "Non-200 return code (" + b + ")";
    case 1:
      return "XMLHTTP failure (no data)";
    case 2:
      return "HttpConnection timeout";
    default:
      return "Unknown error";
  }
}, oi = {}, pi = {};
d = mi.prototype;
d.Bc = function(a) {
  this.Ib = a;
};
d.setTimeout = function(a) {
  this.jf = a;
};
d.Vt = function(a) {
  this.Of = a;
};
d.St = function(a, b, c) {
  this.Ph = 1;
  this.Ac = a.clone().Uf();
  this.Rf = b;
  this.zs = c;
  this.Hw(null);
};
d.Kn = function(a, b, c, e) {
  this.Ph = 1;
  this.Ac = a.clone().Uf();
  this.Rf = null;
  this.zs = b;
  e && (this.gt = !1);
  this.Hw(c);
};
d.Hw = function(a) {
  this.Qj = u();
  this.zf();
  this.Hb = this.Ac.clone();
  this.Hb.Ij("t", this.$g);
  this.Ih = 0;
  this.Ha = this.g.Wn(this.g.bk() ? a : null);
  0 < this.Of && (this.Uj = new rf(t(this.ht, this, this.Ha), this.Of));
  this.q.listen(this.Ha, "readystatechange", this.EC);
  a = this.Ib ? Ob(this.Ib) : {};
  this.Rf ? (this.Gf = "POST", a["Content-Type"] = "application/x-www-form-urlencoded", this.Ha.send(this.Hb, this.Gf, this.Rf, a)) : (this.Gf = "GET", this.gt && !F && (a.Connection = "close"), this.Ha.send(this.Hb, this.Gf, null, a));
  this.g.hc(1);
  this.j.FC(this.Gf, this.Hb, this.Gb, this.$g, this.Rf);
};
d.EC = function(a) {
  a = a.target;
  var b = this.Uj;
  b && 3 == a.zd() ? (this.j.debug("Throttling readystatechange."), b.yv()) : this.ht(a);
};
d.ht = function(a) {
  try {
    a == this.Ha ? this.HD() : this.j.e("Called back with an unexpected xmlhttp");
  } catch (b) {
    this.j.debug("Failed call to OnXmlHttpReadyStateChanged_"), this.Ha && this.Ha.cc() ? this.j.Pd(b, "ResponseText: " + this.Ha.cc()) : this.j.Pd(b, "No response text");
  } finally {
  }
};
d.HD = function() {
  var a = this.Ha.zd(), b = this.Ha.Hi(), c = this.Ha.Da();
  if (E && !(E && 10 <= Cc) || F && !Ac("420+")) {
    if (4 > a) {
      return;
    }
  } else {
    if (3 > a || 3 == a && !lc && !this.Ha.cc()) {
      return;
    }
  }
  this.He || 4 != a || 7 == b || (8 == b || 0 >= c ? this.g.hc(3) : this.g.hc(2));
  this.yj();
  this.va = b = this.Ha.Da();
  (c = this.Ha.cc()) || this.j.debug("No response text for uri " + this.Hb + " status " + b);
  this.qc = 200 == b;
  this.j.VB(this.Gf, this.Hb, this.Gb, this.$g, a, b);
  this.qc ? (4 == a && this.Xc(), this.zs ? (this.Ms(a, c), lc && this.qc && 3 == a && this.UB()) : (this.j.Dh(this.Gb, c, null), this.Gn(c)), this.qc && !this.He && (4 == a ? this.g.Pj(this) : (this.qc = !1, this.zf()))) : (400 == b && 0 < c.indexOf("Unknown SID") ? (this.Ya = 3, Y(13), this.j.e("XMLHTTP Unknown SID (" + this.Gb + ")")) : (this.Ya = 0, Y(14), this.j.e("XMLHTTP Bad status " + b + " (" + this.Gb + ")")), this.Xc(), this.wj());
};
d.Ms = function(a, b) {
  for (var c = !0;!this.He && this.Ih < b.length;) {
    var e = this.sE(b);
    if (e == pi) {
      4 == a && (this.Ya = 4, Y(15), c = !1);
      this.j.Dh(this.Gb, null, "[Incomplete Response]");
      break;
    } else {
      if (e == oi) {
        this.Ya = 4;
        Y(16);
        this.j.Dh(this.Gb, b, "[Invalid Chunk]");
        c = !1;
        break;
      } else {
        this.j.Dh(this.Gb, e, null), this.Gn(e);
      }
    }
  }
  4 == a && 0 == b.length && (this.Ya = 1, Y(17), c = !1);
  this.qc = this.qc && c;
  c || (this.j.Dh(this.Gb, b, "[Invalid Chunked Response]"), this.Xc(), this.wj());
};
d.CH = function() {
  var a = this.Ha.zd(), b = this.Ha.cc();
  this.Ih < b.length && (this.yj(), this.Ms(a, b), this.qc && 4 != a && this.zf());
};
d.UB = function() {
  this.q.listen(this.ek, "tick", this.CH);
  this.ek.start();
};
d.sE = function(a) {
  var b = this.Ih, c = a.indexOf("\n", b);
  if (-1 == c) {
    return pi;
  }
  b = Number(a.substring(b, c));
  if (isNaN(b)) {
    return oi;
  }
  c += 1;
  if (c + b > a.length) {
    return pi;
  }
  a = a.substr(c, b);
  this.Ih = c + b;
  return a;
};
d.mt = function(a, b) {
  this.Ph = 3;
  this.Ac = a.clone().Uf();
  this.hJ(b);
};
d.hJ = function(a) {
  this.Qj = u();
  this.zf();
  var b = a ? window.location.hostname : "";
  this.Hb = this.Ac.clone();
  this.Hb.ha("DOMAIN", b);
  this.Hb.ha("t", this.$g);
  try {
    this.sc = new ActiveXObject("htmlfile");
  } catch (c) {
    this.j.w("ActiveX blocked");
    this.Xc();
    this.Ya = 7;
    Y(22);
    this.wj();
    return;
  }
  var e = "<html><body>";
  a && (e += '<script>document.domain="' + b + '"\x3c/script>');
  e += "</body></html>";
  this.sc.open();
  this.sc.write(e);
  this.sc.close();
  this.sc.parentWindow.m = t(this.MC, this);
  this.sc.parentWindow.d = t(this.kt, this, !0);
  this.sc.parentWindow.rpcClose = t(this.kt, this, !1);
  a = this.sc.createElement("div");
  this.sc.parentWindow.document.body.appendChild(a);
  a.innerHTML = '<iframe src="' + this.Hb + '"></iframe>';
  this.j.NC("GET", this.Hb, this.Gb, this.$g);
  this.g.hc(1);
};
d.MC = function(a) {
  qi(t(this.ZL, this, a), 0);
};
d.ZL = function(a) {
  this.He || (this.j.JF(this.Gb, a), this.yj(), this.Gn(a), this.zf());
};
d.kt = function(a) {
  qi(t(this.YL, this, a), 0);
};
d.YL = function(a) {
  this.He || (this.j.CD(this.Gb, a), this.Xc(), this.qc = a, this.g.Pj(this), this.g.hc(4));
};
d.ID = function(a) {
  this.Ph = 2;
  this.Ac = a.clone().Uf();
  this.gJ();
};
d.gJ = function() {
  (new Image).src = this.Ac;
  this.Qj = u();
  this.zf();
};
d.cancel = function() {
  this.He = !0;
  this.Xc();
};
d.zf = function() {
  this.oo = u() + this.jf;
  this.Zt(this.jf);
};
d.Zt = function(a) {
  if (null != this.bg) {
    throw Error("WatchDog timer not null");
  }
  this.bg = qi(t(this.HK, this), a);
};
d.yj = function() {
  this.bg && (k.clearTimeout(this.bg), this.bg = null);
};
d.HK = function() {
  this.bg = null;
  var a = u();
  0 <= a - this.oo ? this.XD() : (this.j.e("WatchDog timer called too early"), this.Zt(this.oo - a));
};
d.XD = function() {
  this.qc && this.j.w("Received watchdog timeout even though request loaded successfully");
  this.j.eD(this.Hb);
  2 != this.Ph && this.g.hc(3);
  this.Xc();
  this.Ya = 2;
  Y(18);
  this.wj();
};
d.wj = function() {
  this.g.fv() || this.He || this.g.Pj(this);
};
d.Xc = function() {
  this.yj();
  le(this.Uj);
  this.Uj = null;
  this.ek.stop();
  this.q.removeAll();
  if (this.Ha) {
    var a = this.Ha;
    this.Ha = null;
    a.abort();
    a.$();
  }
  this.sc && (this.sc = null);
};
d.Vs = function() {
  return this.qc;
};
d.Ze = function() {
  return this.Ya;
};
d.Lc = function() {
  return this.va;
};
d.of = function() {
  return this.fd;
};
d.TD = function() {
  return this.Gb;
};
d.Qn = function() {
  return this.Rf;
};
d.On = function() {
  return this.Qj;
};
d.Gn = function(a) {
  try {
    this.g.bu(this, a), this.g.hc(4);
  } catch (b) {
    this.j.Pd(b, "Error in httprequest callback");
  }
};
var ri = function() {
  this.a = ng("goog.net.BrowserChannel");
};
d = ri.prototype;
d.Jw = function() {
  return this.a;
};
d.FC = function(a, b, c, e, f) {
  this.info("XMLHTTP REQ (" + c + ") [attempt " + e + "]: " + a + "\n" + b + "\n" + this.WL(f));
};
d.VB = function(a, b, c, e, f, g) {
  this.info("XMLHTTP RESP (" + c + ") [ attempt " + e + "]: " + a + "\n" + b + "\n" + f + " " + g);
};
d.Dh = function(a, b, c) {
  this.info("XMLHTTP TEXT (" + a + "): " + this.$x(b) + (c ? " " + c : ""));
};
d.NC = function(a, b, c, e) {
  this.info("TRIDENT REQ (" + c + ") [ attempt " + e + "]: " + a + "\n" + b);
};
d.JF = function(a, b) {
  this.info("TRIDENT TEXT (" + a + "): " + this.$x(b));
};
d.CD = function(a, b) {
  this.info("TRIDENT TEXT (" + a + "): " + b ? "success" : "failure");
};
d.eD = function(a) {
  this.info("TIMEOUT: " + a);
};
d.debug = function(a) {
  this.info(a);
};
d.Pd = function(a, b) {
  this.w((b || "Exception") + a);
};
d.info = function(a) {
  U(this.a, a);
};
d.e = function(a) {
  qg(this.a, a);
};
d.w = function(a) {
  pg(this.a, a);
};
d.$x = function(a) {
  if (!a || "y2f%" == a) {
    return a;
  }
  try {
    var b = ig(a);
    if (b) {
      for (var c = 0;c < b.length;c++) {
        r(b[c]) && this.VL(b[c]);
      }
    }
    return kg(b);
  } catch (e) {
    return this.debug("Exception parsing expected JS array - probably was not JS"), a;
  }
};
d.VL = function(a) {
  if (!(2 > a.length || (a = a[1], !r(a) || 1 > a.length))) {
    var b = a[0];
    if ("noop" != b && "stop" != b) {
      for (b = 1;b < a.length;b++) {
        a[b] = "";
      }
    }
  }
};
d.WL = function(a) {
  if (!a) {
    return null;
  }
  var b = "";
  a = a.split("&");
  for (var c = 0;c < a.length;c++) {
    var e = a[c].split("=");
    if (1 < e.length) {
      var f = e[0], e = e[1], g = f.split("_"), b = 2 <= g.length && "type" == g[1] ? b + (f + "=" + e + "&") : b + (f + "=redacted&")
    }
  }
  return b;
};
var ti = function(a, b, c, e, f) {
  (new ri).debug("TestLoadImageWithRetries: " + f);
  if (0 == e) {
    c(!1);
  } else {
    var g = f || 0;
    e--;
    si(a, b, function(f) {
      f ? c(!0) : k.setTimeout(function() {
        ti(a, b, c, e, g);
      }, g);
    });
  }
}, si = function(a, b, c) {
  var e = new ri;
  e.debug("TestLoadImage: loading " + a);
  var f = new Image;
  f.onload = function() {
    try {
      e.debug("TestLoadImage: loaded"), ui(f), c(!0);
    } catch (a) {
      e.Pd(a);
    }
  };
  f.onerror = function() {
    try {
      e.debug("TestLoadImage: error"), ui(f), c(!1);
    } catch (a) {
      e.Pd(a);
    }
  };
  f.onabort = function() {
    try {
      e.debug("TestLoadImage: abort"), ui(f), c(!1);
    } catch (a) {
      e.Pd(a);
    }
  };
  f.ontimeout = function() {
    try {
      e.debug("TestLoadImage: timeout"), ui(f), c(!1);
    } catch (a) {
      e.Pd(a);
    }
  };
  k.setTimeout(function() {
    if (f.ontimeout) {
      f.ontimeout();
    }
  }, b);
  f.src = a;
}, ui = function(a) {
  a.onload = null;
  a.onerror = null;
  a.onabort = null;
  a.ontimeout = null;
};
var vi = function(a, b) {
  this.g = a;
  this.j = b;
  this.gd = new li(null, !0);
};
d = vi.prototype;
d.Ib = null;
d.xb = null;
d.$j = !1;
d.zh = null;
d.Zj = null;
d.Tn = null;
d.rc = null;
d.h = null;
d.va = -1;
d.Kc = null;
d.Hh = null;
d.Bc = function(a) {
  this.Ib = a;
};
d.Wu = function(a) {
  this.gd = a;
};
d.connect = function(a) {
  this.rc = a;
  a = this.g.jt(this.rc);
  Y(3);
  this.zh = u();
  var b = this.g.OC();
  null != b ? (this.Kc = this.g.yh(b[0]), (this.Hh = b[1]) ? (this.h = 1, this.ct()) : (this.h = 2, this.Mn())) : (a.Ij("MODE", "init"), this.xb = new mi(this, this.j, void 0, void 0, void 0), this.xb.Bc(this.Ib), this.xb.Kn(a, !1, null, !0), this.h = 0);
};
d.ct = function() {
  var a = this.g.no(this.Hh, "/mail/images/cleardot.gif");
  a.Uf();
  ti(a.toString(), 5E3, t(this.UE, this), 3, 2E3);
  this.hc(1);
};
d.UE = function(a) {
  a ? (this.h = 2, this.Mn()) : (Y(4), this.g.aE(this));
  a && this.hc(2);
};
d.Mn = function() {
  this.j.debug("TestConnection: starting stage 2");
  var a = this.g.lD();
  null != a ? (this.j.debug("TestConnection: skipping stage 2, precomputed result is " + a ? "Buffered" : "Unbuffered"), Y(5), a ? (Y(11), this.g.Jh(this, !1)) : (Y(12), this.g.Jh(this, !0))) : (this.xb = new mi(this, this.j, void 0, void 0, void 0), this.xb.Bc(this.Ib), a = this.g.Ws(this.Kc, this.rc), Y(5), !E || E && 10 <= Cc ? (a.Ij("TYPE", "xmlhttp"), this.xb.Kn(a, !1, this.Kc, !1)) : (a.Ij("TYPE", "html"), this.xb.mt(a, Boolean(this.Kc))));
};
d.Wn = function(a) {
  return this.g.Wn(a);
};
d.abort = function() {
  this.xb && (this.xb.cancel(), this.xb = null);
  this.va = -1;
};
d.fv = function() {
  return!1;
};
d.bu = function(a, b) {
  this.va = a.Lc();
  if (0 == this.h) {
    if (this.j.debug("TestConnection: Got data for stage 1"), b) {
      try {
        var c = this.gd.parse(b);
      } catch (e) {
        this.j.Pd(e);
        this.g.Un(this, 4);
        return;
      }
      this.Kc = this.g.yh(c[0]);
      this.Hh = c[1];
    } else {
      this.j.debug("TestConnection: Null responseText"), this.g.Un(this, 4);
    }
  } else {
    2 == this.h && (this.$j ? (Y(7), this.Tn = u()) : "11111" == b ? (Y(6), this.$j = !0, this.Zj = u(), this.LC() && (this.va = 200, this.xb.cancel(), this.j.debug("Test connection succeeded; using streaming connection"), Y(12), this.g.Jh(this, !0))) : (Y(8), this.Zj = this.Tn = u(), this.$j = !1));
  }
};
d.Pj = function() {
  this.va = this.xb.Lc();
  if (!this.xb.Vs()) {
    this.j.debug("TestConnection: request failed, in state " + this.h), 0 == this.h ? Y(9) : 2 == this.h && Y(10), this.g.Un(this, this.xb.Ze());
  } else {
    if (0 == this.h) {
      this.j.debug("TestConnection: request complete for initial check"), this.Hh ? (this.h = 1, this.ct()) : (this.h = 2, this.Mn());
    } else {
      if (2 == this.h) {
        this.j.debug("TestConnection: request complete for stage 2");
        var a = !1;
        (a = !E || E && 10 <= Cc ? this.$j : 200 > this.Tn - this.Zj ? !1 : !0) ? (this.j.debug("Test connection succeeded; using streaming connection"), Y(12), this.g.Jh(this, !0)) : (this.j.debug("Test connection failed; not using streaming"), Y(11), this.g.Jh(this, !1));
      }
    }
  }
};
d.Lc = function() {
  return this.va;
};
d.bk = function() {
  return this.g.bk();
};
d.Nc = function() {
  return this.g.Nc();
};
d.LC = function() {
  var a = this.Zj - this.zh;
  return!E || E && 10 <= Cc || 500 > a;
};
d.hc = function(a) {
  this.g.hc(a);
};
var wi = function(a, b, c) {
  this.zt = a || null;
  this.h = 1;
  this.yb = [];
  this.hd = [];
  this.j = new ri;
  this.gd = new li(null, !0);
  this.YD = b || null;
  this.ZD = null != c ? c : null;
}, xi = function(a, b) {
  this.$w = a;
  this.map = b;
};
d = wi.prototype;
d.Ib = null;
d.gi = null;
d.Jb = null;
d.Ia = null;
d.rc = null;
d.fk = null;
d.ft = null;
d.Kc = null;
d.TH = !0;
d.Rh = 0;
d.GD = 0;
d.gL = !1;
d.D = null;
d.Ud = null;
d.jd = null;
d.Se = null;
d.Zd = null;
d.co = null;
d.zF = !0;
d.Sj = -1;
d.rv = -1;
d.va = -1;
d.Pf = 0;
d.Sf = 0;
d.Av = 5E3;
d.Bv = 1E4;
d.hL = 2;
d.Xt = 2E4;
d.Of = 0;
d.Vp = !1;
d.Mf = 8;
var yi = new Q, zi = function(a, b) {
  N.call(this, "statevent", a);
  this.stat = b;
};
v(zi, N);
var Ai = function(a, b) {
  N.call(this, "timingevent", a);
  this.size = b;
};
v(Ai, N);
var Bi = function(a) {
  N.call(this, "serverreachability", a);
};
v(Bi, N);
d = wi.prototype;
d.connect = function(a, b, c, e, f) {
  this.j.debug("connect()");
  Y(0);
  this.rc = b;
  this.gi = c || {};
  e && q(f) && (this.gi.OSID = e, this.gi.OAID = f);
  this.rG(a);
};
d.disconnect = function() {
  this.j.debug("disconnect()");
  this.Ct();
  if (3 == this.h) {
    var a = this.Rh++, b = this.fk.clone();
    b.ha("SID", this.fd);
    b.ha("RID", a);
    b.ha("TYPE", "terminate");
    this.Kh(b);
    (new mi(this, this.j, this.fd, a, void 0)).ID(b);
  }
  this.Ui();
};
d.of = function() {
  return this.fd;
};
d.rG = function(a) {
  this.j.debug("connectTest_()");
  this.Sn() && (this.Zd = new vi(this, this.j), this.Zd.Bc(this.Ib), this.Zd.Wu(this.gd), this.Zd.connect(a));
};
d.AF = function() {
  this.j.debug("connectChannel_()");
  this.WF(1, 0);
  this.fk = this.jt(this.rc);
  this.Vn();
};
d.Ct = function() {
  this.Zd && (this.Zd.abort(), this.Zd = null);
  this.Ia && (this.Ia.cancel(), this.Ia = null);
  this.jd && (k.clearTimeout(this.jd), this.jd = null);
  this.Tj();
  this.Jb && (this.Jb.cancel(), this.Jb = null);
  this.Ud && (k.clearTimeout(this.Ud), this.Ud = null);
};
d.Bc = function(a) {
  this.Ib = a;
};
d.Vt = function(a) {
  this.Of = a;
};
d.tA = function(a) {
  this.D = a;
};
d.FK = function() {
  return!this.co;
};
d.Fj = function(a, b) {
  if (0 == this.h) {
    throw Error("Invalid operation: sending map when state is closed");
  }
  1E3 == this.yb.length && this.j.w("Already have 1000 queued maps upon queueing " + kg(a));
  this.yb.push(new xi(this.GD++, a, b));
  2 != this.h && 3 != this.h || this.Vn();
};
d.nD = function() {
  return this.gL ? 0 : this.hL;
};
d.lE = function() {
  return 3;
};
d.fv = function() {
  return 0 == this.h;
};
d.Q = function() {
  return this.h;
};
d.Lc = function() {
  return this.va;
};
d.Wu = function(a) {
  this.gd = a;
};
d.Vn = function() {
  this.Jb || this.Ud || (this.Ud = qi(t(this.Ft, this), 0), this.Pf = 0);
};
d.dD = function(a) {
  if (this.Jb || this.Ud) {
    return this.j.w("Request already in progress"), !1;
  }
  if (1 == this.h || this.Pf >= this.nD()) {
    return!1;
  }
  this.j.debug("Going to retry POST");
  this.Ud = qi(t(this.Ft, this, a), this.yt(this.Pf));
  this.Pf++;
  return!0;
};
d.Ft = function(a) {
  this.Ud = null;
  this.vK(a);
};
d.vK = function(a) {
  this.j.debug("startForwardChannel_");
  this.Sn() && (1 == this.h ? a ? this.j.w("Not supposed to retry the open") : (this.yD(), this.h = 2) : 3 == this.h && (a ? this.Ht(a) : 0 == this.yb.length ? this.j.debug("startForwardChannel_ returned: nothing to send") : this.Jb ? this.j.w("startForwardChannel_ returned: connection already in progress") : (this.Ht(), this.j.debug("startForwardChannel_ finished, sent request"))));
};
d.yD = function() {
  this.j.debug("open_()");
  this.Rh = Math.floor(1E5 * Math.random());
  var a = this.Rh++, b = new mi(this, this.j, "", a, void 0);
  b.Bc(this.Ib);
  var c = this.ko(), e = this.fk.clone();
  e.ha("RID", a);
  this.zt && e.ha("CVER", this.zt);
  this.Kh(e);
  b.St(e, c, !0);
  this.Jb = b;
};
d.Ht = function(a) {
  var b;
  a ? 6 < this.Mf ? (this.UD(), b = this.Rh - 1, a = this.ko()) : (b = a.TD(), a = a.Qn()) : (b = this.Rh++, a = this.ko());
  var c = this.fk.clone();
  c.ha("SID", this.fd);
  c.ha("RID", b);
  c.ha("AID", this.Sj);
  this.Kh(c);
  b = new mi(this, this.j, this.fd, b, this.Pf + 1);
  b.Bc(this.Ib);
  b.setTimeout(Math.round(0.5 * this.Xt) + Math.round(0.5 * this.Xt * Math.random()));
  this.Jb = b;
  b.St(c, a, !0);
};
d.Kh = function(a) {
  if (this.D) {
    var b = this.D.Yv(this);
    b && Wb(b, function(b, e) {
      a.ha(e, b);
    });
  }
};
d.ko = function() {
  var a = Math.min(this.yb.length, 1E3), b = ["count=" + a], c;
  6 < this.Mf && 0 < a ? (c = this.yb[0].$w, b.push("ofs=" + c)) : c = 0;
  for (var e = 0;e < a;e++) {
    var f = this.yb[e].$w, g = this.yb[e].map, f = 6 >= this.Mf ? e : f - c;
    try {
      Wb(g, function(a, c) {
        b.push("req" + f + "_" + c + "=" + encodeURIComponent(a));
      });
    } catch (h) {
      b.push("req" + f + "_type=" + encodeURIComponent("_badmap"));
    }
  }
  this.hd = this.hd.concat(this.yb.splice(0, a));
  return b.join("&");
};
d.UD = function() {
  this.yb = this.hd.concat(this.yb);
  this.hd.length = 0;
};
d.bt = function() {
  this.Ia || this.jd || (this.wt = 1, this.jd = qi(t(this.qu, this), 0), this.Sf = 0);
};
d.Nn = function() {
  if (this.Ia || this.jd) {
    return this.j.w("Request already in progress"), !1;
  }
  if (this.Sf >= this.lE()) {
    return!1;
  }
  this.j.debug("Going to retry GET");
  this.wt++;
  this.jd = qi(t(this.qu, this), this.yt(this.Sf));
  this.Sf++;
  return!0;
};
d.qu = function() {
  this.jd = null;
  this.mK();
};
d.mK = function() {
  if (this.Sn()) {
    this.j.debug("Creating new HttpRequest");
    this.Ia = new mi(this, this.j, this.fd, "rpc", this.wt);
    this.Ia.Bc(this.Ib);
    this.Ia.Vt(this.Of);
    var a = this.ft.clone();
    a.ha("RID", "rpc");
    a.ha("SID", this.fd);
    a.ha("CI", this.co ? "0" : "1");
    a.ha("AID", this.Sj);
    this.Kh(a);
    !E || E && 10 <= Cc ? (a.ha("TYPE", "xmlhttp"), this.Ia.Kn(a, !0, this.Kc, !1)) : (a.ha("TYPE", "html"), this.Ia.mt(a, Boolean(this.Kc)));
    this.j.debug("New Request created");
  }
};
d.Sn = function() {
  if (this.D) {
    var a = this.D.OE(this);
    if (0 != a) {
      return this.j.debug("Handler returned error code from okToMakeRequest"), this.Wb(a), !1;
    }
  }
  return!0;
};
d.Jh = function(a, b) {
  this.j.debug("Test Connection Finished");
  this.co = this.zF && b;
  this.va = a.Lc();
  this.AF();
};
d.Un = function(a) {
  this.j.debug("Test Connection Failed");
  this.va = a.Lc();
  this.Wb(2);
};
d.aE = function() {
  this.j.debug("Test Connection Blocked");
  this.va = this.Zd.Lc();
  this.Wb(9);
};
d.bu = function(a, b) {
  if (0 != this.h && (this.Ia == a || this.Jb == a)) {
    if (this.va = a.Lc(), this.Jb == a && 3 == this.h) {
      if (7 < this.Mf) {
        var c;
        try {
          c = this.gd.parse(b);
        } catch (e) {
          c = null;
        }
        r(c) && 3 == c.length ? this.jD(c) : (this.j.debug("Bad POST response data returned"), this.Wb(11));
      } else {
        "y2f%" != b && (this.j.debug("Bad data returned - missing/invald magic cookie"), this.Wb(11));
      }
    } else {
      this.Ia == a && this.Tj(), qa(b) || (c = this.gd.parse(b), w(r(c)), this.kD(c));
    }
  }
};
d.jD = function(a) {
  if (0 == a[0]) {
    this.cG();
  } else {
    this.rv = a[1];
    var b = this.rv - this.Sj;
    0 < b && (a = a[2], this.j.debug(a + " bytes (in " + b + " arrays) are outstanding on the BackChannel"), this.iG(a) && !this.Se && (this.Se = qi(t(this.dG, this), 6E3)));
  }
};
d.cG = function() {
  this.j.debug("Server claims our backchannel is missing.");
  if (this.jd) {
    this.j.debug("But we are currently starting the request.");
  } else {
    if (this.Ia) {
      if (this.Ia.On() + 3E3 < this.Jb.On()) {
        this.Tj(), this.Ia.cancel(), this.Ia = null;
      } else {
        return;
      }
    } else {
      this.j.e("We do not have a BackChannel established");
    }
    this.Nn();
    Y(19);
  }
};
d.iG = function(a) {
  return 37500 > a && !this.FK() && 0 == this.Sf;
};
d.yh = function(a) {
  return this.TH ? this.D ? this.D.yh(a) : a : null;
};
d.dG = function() {
  null != this.Se && (this.Se = null, this.Ia.cancel(), this.Ia = null, this.Nn(), Y(20));
};
d.Tj = function() {
  null != this.Se && (k.clearTimeout(this.Se), this.Se = null);
};
d.Pj = function(a) {
  this.j.debug("Request complete");
  var b;
  if (this.Ia == a) {
    this.Tj(), this.Ia = null, b = 2;
  } else {
    if (this.Jb == a) {
      this.Jb = null, b = 1;
    } else {
      return;
    }
  }
  this.va = a.Lc();
  if (0 != this.h) {
    if (a.Vs()) {
      1 == b ? (b = u() - a.On(), yi.dispatchEvent(new Ai(yi, a.Qn() ? a.Qn().length : 0, b, this.Pf)), this.Vn(), this.zb(), this.hd.length = 0) : this.bt();
    } else {
      var c = a.Ze();
      if (3 == c || 7 == c || 0 == c && 0 < this.va) {
        this.j.debug("Not retrying due to error type");
      } else {
        this.j.debug("Maybe retrying, last error: " + ni(c, this.va));
        if (1 == b && this.dD(a) || 2 == b && this.Nn()) {
          return;
        }
        this.j.debug("Exceeded max number of retries");
      }
      this.j.debug("Error: HTTP request failed");
      switch(c) {
        case 1:
          this.Wb(5);
          break;
        case 4:
          this.Wb(10);
          break;
        case 3:
          this.Wb(6);
          break;
        case 7:
          this.Wb(12);
          break;
        default:
          this.Wb(2);
      }
    }
  }
};
d.yt = function(a) {
  var b = this.Av + Math.floor(Math.random() * this.Bv);
  this.Nc() || (this.j.debug("Inactive channel"), b *= 2);
  return b * a;
};
d.Di = function(a, b) {
  this.Av = a;
  this.Bv = b;
};
d.kD = function(a) {
  for (var b = this.D && this.D.jo ? [] : null, c = 0;c < a.length;c++) {
    var e = a[c];
    this.Sj = e[0];
    e = e[1];
    2 == this.h ? "c" == e[0] ? (this.fd = e[1], this.Kc = this.yh(e[2]), e = e[3], this.Mf = null != e ? e : 6, this.h = 3, this.D && this.D.xe(this), this.ft = this.Ws(this.Kc, this.rc), this.bt()) : "stop" == e[0] && this.Wb(7) : 3 == this.h && ("stop" == e[0] ? (b && 0 != b.length && (this.D.jo(this, b), b.length = 0), this.Wb(7)) : "noop" != e[0] && (b ? b.push(e) : this.D && this.D.Me(this, e)), this.Sf = 0);
  }
  b && 0 != b.length && this.D.jo(this, b);
};
d.WF = function(a) {
  if (!qb(arguments, this.h)) {
    throw Error("Unexpected channel state: " + this.h);
  }
};
d.Wb = function(a) {
  this.j.info("Error code " + a);
  if (2 == a || 9 == a) {
    var b = null;
    this.D && (b = this.D.dE(this));
    var c = t(this.iE, this);
    b || (b = new W("//www.google.com/images/cleardot.gif"), b.Uf());
    si(b.toString(), 1E4, c);
  } else {
    Y(2);
  }
  this.v(a);
};
d.iE = function(a) {
  a ? (this.j.info("Successfully pinged google.com"), Y(2)) : (this.j.info("Failed to ping google.com"), Y(1), this.v(8));
};
d.zb = function() {
};
d.v = function(a) {
  this.j.debug("HttpChannel: error - " + a);
  this.h = 0;
  this.D && this.D.Fd(this, a);
  this.Ui();
  this.Ct();
};
d.Ui = function() {
  this.h = 0;
  this.va = -1;
  if (this.D) {
    if (0 == this.hd.length && 0 == this.yb.length) {
      this.D.ad(this);
    } else {
      this.j.debug("Number of undelivered maps, pending: " + this.hd.length + ", outgoing: " + this.yb.length);
      var a = wb(this.hd), b = wb(this.yb);
      this.hd.length = 0;
      this.yb.length = 0;
      this.D.ad(this, a, b);
    }
  }
};
d.jt = function(a) {
  a = this.no(null, a);
  this.j.debug("GetForwardChannelUri: " + a);
  return a;
};
d.OC = function() {
  return this.YD;
};
d.lD = function() {
  return this.ZD;
};
d.Ws = function(a, b) {
  var c = this.no(this.bk() ? a : null, b);
  this.j.debug("GetBackChannelUri: " + c);
  return c;
};
d.no = function(a, b, c) {
  var e = Ag(b);
  if ("" != e.fc()) {
    a && e.Ne(a + "." + e.fc()), e.bi(c || e.vk());
  } else {
    var f = window.location, e = Bg(f.protocol, null, a ? a + "." + f.hostname : f.hostname, c || f.port, b)
  }
  this.gi && Wb(this.gi, function(a, b) {
    e.ha(b, a);
  });
  e.ha("VER", this.Mf);
  this.Kh(e);
  return e;
};
d.Wn = function(a) {
  if (a && !this.Vp) {
    throw Error("Can't create secondary domain capable XhrIo object.");
  }
  a = new yh;
  a.XK(this.Vp);
  return a;
};
d.Nc = function() {
  return!!this.D && this.D.Nc(this);
};
var qi = function(a, b) {
  if (!ga(a)) {
    throw Error("Fn must not be null and must be a function");
  }
  return k.setTimeout(function() {
    a();
  }, b);
};
wi.prototype.hc = function(a) {
  yi.dispatchEvent(new Bi(yi, a));
};
var Y = function(a) {
  yi.dispatchEvent(new zi(yi, a));
};
wi.prototype.bk = function() {
  return this.Vp || !(!E || E && 10 <= Cc);
};
var Ci = function() {
};
d = Ci.prototype;
d.jo = null;
d.OE = function() {
  return 0;
};
d.xe = function() {
};
d.Me = function() {
};
d.Fd = function() {
};
d.ad = function() {
};
d.Yv = function() {
  return{};
};
d.dE = function() {
  return null;
};
d.Nc = function() {
  return!0;
};
d.yh = function(a) {
  return a;
};
var Di = function() {
};
var Ei = function(a, b, c) {
  this.yH = a;
  this.jg = b.name || null;
  this.xH = b.ab || null;
  this.Mv = b.iM;
  this.zc = {};
  for (a = 0;a < c.length;a++) {
    b = c[a], this.zc[b.Nb()] = b;
  }
};
d = Ei.prototype;
d.getName = function() {
  return this.jg;
};
d.Co = function() {
  return this.xH;
};
d.ce = function() {
  return this.Mv ? this.Mv.xa() : null;
};
d.Th = function() {
  var a = Hb(this.zc);
  Ab(a, function(a, c) {
    return a.Nb() - c.Nb();
  });
  return a;
};
d.kH = function() {
  return this.zc;
};
d.bo = function(a) {
  return Lb(this.zc, function(b) {
    return b.getName() == a;
  }) || null;
};
d.NH = function(a) {
  w(!/[^0-9]/.test(a));
  return this.zc[parseInt(a, 10)] || null;
};
d.yw = function() {
  return new this.yH;
};
var Fi = function(a, b, c) {
  this.Ja = a;
  w(!/[^0-9]/.test(b));
  this.oG = b;
  this.jg = c.name;
  this.nG = !!c.hM;
  this.Yk = c.B;
  this.Mo = c.type;
  this.Uo = !1;
  switch(this.Yk) {
    case 3:
    ;
    case 4:
    ;
    case 6:
    ;
    case 16:
    ;
    case 18:
      this.Uo = !0;
  }
  this.To = c.defaultValue;
};
d = Fi.prototype;
d.Nb = function() {
  return this.oG;
};
d.ce = function() {
  return this.Ja.xa();
};
d.getName = function() {
  return this.jg;
};
d.FH = function() {
  if (void 0 === this.To) {
    var a = this.Mo;
    this.To = a === Boolean ? !1 : a === Number ? 0 : a === String ? this.Uo ? "0" : "" : new a;
  }
  return this.To;
};
d.Rc = function() {
  return this.Yk;
};
d.vi = function() {
  return this.Mo;
};
d.SI = function() {
  return this.Uo;
};
d.Sv = function() {
  w(this.ki(), "Expected message or group");
  return this.Mo.xa();
};
d.ki = function() {
  return 11 == this.Yk || 10 == this.Yk;
};
d.Xb = function() {
  return this.nG;
};
var Z = function() {
  this.Ob = {};
  this.zc = this.xa().kH();
  this.pb = this.Jv = null;
};
d = Z.prototype;
d.QH = function(a, b) {
  w(!this.zc[a], "Field is not unknown in this message");
  w(1 <= a, "Tag is not valid");
  w(null !== b, "Value cannot be null");
  this.Ob[a] = b;
  this.pb && delete this.pb[a];
};
d.Hv = function(a, b) {
  var c = b || this, e;
  for (e in this.Ob) {
    var f = Number(e);
    this.zc[f] || a.call(c, f, this.Ob[e]);
  }
};
d.xa = function() {
  var a = this.constructor, b;
  if (!(b = a.hx)) {
    var c;
    b = a.$I;
    var e = [], f;
    for (f in b) {
      b.hasOwnProperty(f) && (w(!/[^0-9]/.test(f), "Keys must be numeric"), 0 == f ? c = b[0] : e.push(new Fi(a, f, b[f])));
    }
    w(c);
    c = new Ei(a, c, e);
    b = a.hx = c;
  }
  return b;
};
d.pd = function(a) {
  w(a.ce() == this.xa(), "The current message does not contain the given field");
  return this.hb(a.Nb());
};
d.mG = function(a) {
  w(a.ce() == this.xa(), "The current message does not contain the given field");
  return this.YH(a.Nb());
};
d.eo = function(a) {
  w(a.ce() == this.xa(), "The current message does not contain the given field");
  return this.ZH(a.Nb());
};
d.get = function(a, b) {
  w(a.ce() == this.xa(), "The current message does not contain the given field");
  return this.aa(a.Nb(), b);
};
d.set = function(a, b) {
  w(a.ce() == this.xa(), "The current message does not contain the given field");
  this.M(a.Nb(), b);
};
d.add = function(a, b) {
  w(a.ce() == this.xa(), "The current message does not contain the given field");
  this.XH(a.Nb(), b);
};
d.clear = function(a) {
  w(a.ce() == this.xa(), "The current message does not contain the given field");
  this.xw(a.Nb());
};
d.equals = function(a) {
  if (!a || this.constructor != a.constructor) {
    return!1;
  }
  for (var b = this.xa().Th(), c = 0;c < b.length;c++) {
    var e = b[c];
    if (this.pd(e) != a.pd(e)) {
      return!1;
    }
    if (this.pd(e)) {
      var f = e.ki(), g = this.ng(e), h = a.ng(e);
      if (e.Xb()) {
        if (g.length != h.length) {
          return!1;
        }
        for (e = 0;e < g.length;e++) {
          var l = g[e], p = h[e];
          if (f ? !l.equals(p) : l != p) {
            return!1;
          }
        }
      } else {
        if (f ? !g.equals(h) : g != h) {
          return!1;
        }
      }
    }
  }
  return!0;
};
d.zj = function(a) {
  w(this.constructor == a.constructor, "The source message must have the same type.");
  this != a && (this.Ob = {}, this.pb && (this.pb = {}), this.gv(a));
};
d.gv = function(a) {
  w(this.constructor == a.constructor, "The source message must have the same type.");
  for (var b = this.xa().Th(), c = 0;c < b.length;c++) {
    var e = b[c];
    if (a.pd(e)) {
      this.pb && delete this.pb[e.Nb()];
      var f = e.ki();
      if (e.Xb()) {
        for (var g = a.mG(e), h = 0;h < g.length;h++) {
          this.add(e, f ? g[h].clone() : g[h]);
        }
      } else {
        g = a.ng(e), f ? (f = this.ng(e)) ? f.gv(g) : this.set(e, g.clone()) : this.set(e, g);
      }
    }
  }
};
d.clone = function() {
  var a = new this.constructor;
  a.zj(this);
  return a;
};
d.ee = function(a) {
  w(this.zc[a], "No field found for the given tag");
  return this.zc[a];
};
d.hb = function(a) {
  w(this.zc[a], "No field found for the given tag");
  return null != this.Ob[a];
};
d.ng = function(a) {
  var b = a.Nb(), c = this.Ob[b];
  return null == c ? null : this.Jv ? b in this.pb ? this.pb[b] : (a = this.Jv.kM(this, a, c), this.pb[b] = a) : c;
};
d.aa = function(a, b) {
  var c = this.ee(a), e = this.ng(c);
  if (c.Xb()) {
    return w(r(e)), c = b || 0, w(0 <= c && c < e.length, "Given index is out of bounds"), e[c];
  }
  w(!r(e));
  return e;
};
d.Hl = function(a, b) {
  return this.hb(a) ? this.aa(a, b) : this.ee(a).FH();
};
d.YH = function(a) {
  w(this.ee(a).Xb(), "Cannot call fieldArray on a non-repeated field");
  a = this.ee(a);
  a = this.ng(a);
  w(null == a || r(a));
  return a || [];
};
d.ZH = function(a) {
  return this.ee(a).Xb() ? (this.hb(a) && w(r(this.Ob[a])), this.hb(a) ? this.Ob[a].length : 0) : this.hb(a) ? 1 : 0;
};
d.M = function(a, b) {
  var c = this.ee(a);
  w(!c.Xb(), "Cannot call set on a repeated field");
  this.lw(c, b);
  this.Ob[a] = b;
  this.pb && (this.pb[a] = b);
};
d.XH = function(a, b) {
  var c = this.ee(a);
  w(c.Xb(), "Cannot call add on a non-repeated field");
  this.lw(c, b);
  this.Ob[a] || (this.Ob[a] = []);
  this.Ob[a].push(b);
  this.pb && delete this.pb[a];
};
d.lw = function(a, b) {
  14 == a.Rc() ? $a(b) : w(b.constructor == a.vi());
};
d.xw = function(a) {
  w(this.ee(a), "Unknown field");
  delete this.Ob[a];
  this.pb && delete this.pb[a];
};
var $ = function(a, b) {
  a.$I = b;
  a.xa = function() {
    return a.hx || (new a).xa();
  };
};
var ki = function() {
  Z.apply(this);
};
v(ki, Z);
d = ki.prototype;
d.mf = function() {
  return this.aa(1);
};
d.Rv = function() {
  return this.Hl(1);
};
d.Qm = function(a) {
  this.M(1, a);
};
d.Zi = function() {
  return this.hb(1);
};
d.hf = function() {
  return this.aa(2);
};
d.tK = function(a) {
  this.M(2, a);
};
d.uA = function() {
  return this.Hl(3);
};
d.vA = function(a) {
  this.M(3, a);
};
d.$u = function() {
  return this.aa(4);
};
d.uK = function(a) {
  this.M(4, a);
};
d.bH = function() {
  return this.hb(4);
};
d.vG = function() {
  return this.aa(5);
};
var Gi = function() {
  Z.apply(this);
};
v(Gi, Z);
d = Gi.prototype;
d.Db = function() {
  return this.aa(1);
};
d.Lm = function(a) {
  this.M(1, a);
};
d.ld = function() {
  return this.aa(2);
};
d.Jd = function(a) {
  this.M(2, a);
};
d.cv = function() {
  return this.hb(2);
};
d.ec = function() {
  return this.aa(3);
};
d.No = function(a) {
  this.M(3, a);
};
d.RG = function() {
  return this.hb(3);
};
d.mf = function() {
  return this.aa(4);
};
d.Rv = function() {
  return this.Hl(4);
};
d.Qm = function(a) {
  this.M(4, a);
};
d.Zi = function() {
  return this.hb(4);
};
$(ki, {0:{name:"BrowserChannelConfig", ab:"buzz.channel.proto.BrowserChannelConfig"}, 1:{name:"authuser", B:4, type:Number}, 2:{name:"client_type", B:9, type:String}, 3:{name:"init_delay_ms", B:5, type:Number}, 4:{name:"service_override", B:9, type:String}, 5:{name:"gapi_src", B:9, type:String}});
$(Gi, {0:{name:"AuthenticationParameters", ab:"buzz.channel.proto.AuthenticationParameters"}, 1:{name:"origin", B:9, type:String}, 2:{name:"scheme", B:5, type:Number}, 3:{name:"token", B:9, type:String}, 4:{name:"authuser", B:13, type:Number}});
var Hi = function() {
  Z.apply(this);
};
v(Hi, Z);
Hi.prototype.hn = function(a) {
  this.M(2, a);
};
Hi.prototype.getData = function() {
  return this.aa(3);
};
Hi.prototype.setData = function(a) {
  this.M(3, a);
};
Hi.prototype.clearData = function() {
  this.xw(3);
};
var Ii = function() {
  Z.apply(this);
};
v(Ii, Z);
Ii.prototype.$p = function(a) {
  this.M(1, a);
};
Ii.prototype.aq = function(a) {
  this.M(2, a);
};
var Ji = function() {
  Z.apply(this);
};
v(Ji, Z);
Ji.prototype.setVersion = function(a) {
  this.M(1, a);
};
var Ki = function() {
  Z.apply(this);
};
v(Ki, Z);
Ki.prototype.setVersion = function(a) {
  this.M(1, a);
};
Ki.prototype.VK = function(a) {
  this.M(2, a);
};
Ki.prototype.UK = function(a) {
  this.M(3, a);
};
Ki.prototype.RK = function(a) {
  this.M(4, a);
};
var Li = function() {
  Z.apply(this);
};
v(Li, Z);
Li.prototype.lj = function() {
  return this.aa(1);
};
Li.prototype.mL = function(a) {
  this.M(1, a);
};
Li.prototype.Bm = function() {
  return this.aa(2);
};
Li.prototype.nL = function(a) {
  this.M(2, a);
};
var Mi = function() {
  Z.apply(this);
};
v(Mi, Z);
d = Mi.prototype;
d.Tr = function() {
  return this.aa(1);
};
d.cs = function(a) {
  this.M(1, a);
};
d.CA = function(a) {
  this.M(2, a);
};
d.DA = function(a) {
  this.M(3, a);
};
d.zA = function(a) {
  this.M(4, a);
};
var Ni = function() {
  Z.apply(this);
};
v(Ni, Z);
d = Ni.prototype;
d.ds = function(a) {
  this.M(1, a);
};
d.BA = function(a) {
  this.M(2, a);
};
d.AA = function(a) {
  this.M(3, a);
};
d.EA = function(a) {
  this.M(4, a);
};
d.hn = function(a) {
  this.M(5, a);
};
var Oi = function() {
  Z.apply(this);
};
v(Oi, Z);
var Pi = function() {
  Z.apply(this);
};
v(Pi, Z);
Pi.prototype.of = function() {
  return this.aa(1);
};
Pi.prototype.rl = function(a) {
  this.M(1, a);
};
var Qi = function() {
  Z.apply(this);
};
v(Qi, Z);
Qi.prototype.of = function() {
  return this.aa(1);
};
Qi.prototype.rl = function(a) {
  this.M(1, a);
};
Qi.prototype.getMessage = function() {
  return this.aa(2);
};
Qi.prototype.pw = function(a) {
  this.M(2, a);
};
var Ri = function() {
  Z.apply(this);
};
v(Ri, Z);
d = Ri.prototype;
d.of = function() {
  return this.aa(1);
};
d.rl = function(a) {
  this.M(1, a);
};
d.or = function() {
  return this.aa(2);
};
d.az = function() {
  return this.Hl(3);
};
d.Da = function() {
  return this.aa(4);
};
d.pr = function() {
  return this.hb(4);
};
var Si = function() {
  Z.apply(this);
};
v(Si, Z);
d = Si.prototype;
d.Tr = function() {
  return this.aa(1);
};
d.cs = function(a) {
  this.M(1, a);
};
d.fA = function() {
  return this.aa(2);
};
d.lA = function() {
  return this.hb(2);
};
d.eA = function() {
  return this.aa(3);
};
d.kA = function() {
  return this.hb(3);
};
d.hA = function() {
  return this.aa(4);
};
d.mA = function() {
  return this.hb(4);
};
var Ti = function() {
  Z.apply(this);
};
v(Ti, Z);
Ti.prototype.ds = function(a) {
  this.M(1, a);
};
Ti.prototype.gA = function() {
  return this.aa(4);
};
Ti.prototype.hn = function(a) {
  this.M(5, a);
};
var Ui = function() {
  Z.apply(this);
};
v(Ui, Z);
Ui.prototype.Rq = function() {
  return this.aa(1);
};
Ui.prototype.Kg = function() {
  return this.aa(2);
};
Ui.prototype.Jg = function(a) {
  this.M(2, a);
};
var Vi = function() {
  Z.apply(this);
};
v(Vi, Z);
Vi.prototype.Da = function() {
  return this.aa(1);
};
Vi.prototype.pr = function() {
  return this.hb(1);
};
Vi.prototype.vz = function() {
  return this.aa(2);
};
Vi.prototype.wz = function() {
  return this.hb(2);
};
$(Hi, {0:{name:"LcsMessage", ab:"buzz.channel.LcsMessage"}, 1:{name:"session", B:9, type:String}, 2:{name:"message_id", B:9, type:String}, 3:{name:"data", B:9, type:String}});
$(Ii, {0:{name:"Version", ab:"buzz.channel.Version"}, 1:{name:"major_version", B:5, type:Number}, 2:{name:"minor_version", B:5, type:Number}});
$(Ji, {0:{name:"ProtocolVersion", ab:"buzz.channel.ProtocolVersion"}, 1:{name:"version", B:11, type:Ii}});
$(Ki, {0:{name:"ClientVersion", ab:"buzz.channel.ClientVersion"}, 1:{name:"version", B:11, type:Ii}, 2:{name:"platform", B:9, type:String}, 3:{name:"language", B:9, type:String}, 4:{name:"application_info", B:9, type:String}});
$(Li, {0:{name:"SessionId", ab:"buzz.channel.SessionId"}, 1:{name:"service_name", B:9, type:String}, 2:{name:"session_name", B:9, type:String}});
$(Mi, {0:{name:"ClientToServerMessage", ab:"buzz.channel.ClientToServerMessage"}, 1:{name:"header", B:11, type:Ni}, 2:{name:"init_endpoint_message", B:11, type:Oi}, 3:{name:"init_session_message", B:11, type:Pi}, 4:{name:"client_data_message", B:11, type:Qi}, 5:{name:"send_on_disconnect_message", B:11, type:Qi}});
$(Ni, {0:{name:"ClientHeader", ab:"buzz.channel.ClientHeader"}, 1:{name:"protocol_version", B:11, type:Ji}, 2:{name:"client_version", B:11, type:Ki}, 3:{name:"client_time_ms", B:3, type:Number}, 4:{name:"max_known_server_time_ms", B:3, type:Number}, 5:{name:"message_id", B:9, type:String}});
$(Oi, {0:{name:"InitEndpointMessage", ab:"buzz.channel.InitEndpointMessage"}});
$(Pi, {0:{name:"InitSessionMessage", ab:"buzz.channel.InitSessionMessage"}, 1:{name:"session_id", B:11, type:Li}});
$(Qi, {0:{name:"DataMessage", ab:"buzz.channel.DataMessage"}, 1:{name:"session_id", B:11, type:Li}, 2:{name:"message", B:9, type:String}});
$(Ri, {0:{name:"SessionStatusMessage", ab:"buzz.channel.SessionStatusMessage"}, 1:{name:"session_id", B:11, type:Li}, 2:{name:"address", B:9, type:String}, 3:{name:"is_broadcast_to_user", B:8, type:Boolean}, 4:{name:"status", B:11, type:Ui}});
$(Si, {0:{name:"ServerToClientMessage", ab:"buzz.channel.ServerToClientMessage"}, 1:{name:"header", B:11, type:Ti}, 2:{name:"server_data_message", B:11, type:Qi}, 3:{name:"channel_status_message", B:11, type:Vi}, 4:{name:"session_status_message", B:11, type:Ri}});
$(Ti, {0:{name:"ServerHeader", ab:"buzz.channel.ServerHeader"}, 1:{name:"protocol_version", B:11, type:Ji}, 4:{name:"server_time_ms", B:3, type:Number}, 5:{name:"message_id", B:9, type:String}});
$(Ui, {0:{name:"StatusP", ab:"buzz.channel.StatusP"}, 1:{name:"code", B:5, type:Number}, 2:{name:"description", B:9, type:String}});
$(Vi, {0:{name:"ChannelStatusMessage", ab:"buzz.channel.ChannelStatusMessage"}, 1:{name:"status", B:11, type:Ui}, 2:{name:"jid_resource", B:9, type:String}});
var Xi = function(a, b) {
  var c = Array.prototype.slice.call(arguments), e = c.shift();
  if ("undefined" == typeof e) {
    throw Error("[goog.string.format] Template required");
  }
  return e.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g, function(a, b, e, l, p, B, G, T) {
    if ("%" == B) {
      return "%";
    }
    var P = c.shift();
    if ("undefined" == typeof P) {
      throw Error("[goog.string.format] Not enough arguments");
    }
    arguments[0] = P;
    return Wi[B].apply(null, arguments);
  });
}, Wi = {s:function(a, b, c) {
  return isNaN(c) || "" == c || a.length >= c ? a : a = -1 < b.indexOf("-", 0) ? a + Array(c - a.length + 1).join(" ") : Array(c - a.length + 1).join(" ") + a;
}, f:function(a, b, c, e, f) {
  e = a.toString();
  isNaN(f) || "" == f || (e = a.toFixed(f));
  var g;
  g = 0 > a ? "-" : 0 <= b.indexOf("+") ? "+" : 0 <= b.indexOf(" ") ? " " : "";
  0 <= a && (e = g + e);
  if (isNaN(c) || e.length >= c) {
    return e;
  }
  e = isNaN(f) ? Math.abs(a).toString() : Math.abs(a).toFixed(f);
  a = c - e.length - g.length;
  return e = 0 <= b.indexOf("-", 0) ? g + e + Array(a + 1).join(" ") : g + Array(a + 1).join(0 <= b.indexOf("0", 0) ? "0" : " ") + e;
}, d:function(a, b, c, e, f, g, h, l) {
  return Wi.f(parseInt(a, 10), b, c, e, 0, g, h, l);
}};
Wi.i = Wi.d;
Wi.u = Wi.d;
var Yi = function(a) {
  this.a = I(a);
};
d = Yi.prototype;
d.log = function(a, b, c) {
  this.UL(arguments);
};
d.w = function(a, b) {
  this.Il(Mc, arguments);
};
d.e = function(a, b) {
  this.Il(Nc, arguments);
};
d.info = function(a, b) {
  this.Il(Oc, arguments);
};
d.C = function(a, b) {
  this.Il(Qc, arguments);
};
d.Hf = function(a) {
  return this.a.Hf(a);
};
d.Gc = function(a) {
  this.a.Gc(a);
};
d.UL = function(a) {
  if (this.a.Hf(a[0])) {
    var b = Array.prototype.slice.call(a);
    a = b.shift();
    b = Xi.apply(null, b);
    this.a.log(a, b);
  }
};
d.Il = function(a, b) {
  if (this.a.Hf(a)) {
    var c = Xi.apply(null, b);
    this.a.log(a, c);
  }
};
var Zi = function() {
};
Zi.prototype.Ov = function(a, b) {
  return a.ki() ? this.he(b) : b;
};
Zi.prototype.Pr = function(a, b) {
  var c = a.yw();
  this.Rx(c, b);
  w(c instanceof Z);
  return c;
};
Zi.prototype.sw = function(a, b) {
  if (a.ki()) {
    return b instanceof Z ? b : this.Pr(a.Sv(), b);
  }
  if (14 == a.Rc() || !a.SI()) {
    return b;
  }
  var c = a.vi();
  if (c === String) {
    if (fa(b)) {
      return String(b);
    }
  } else {
    if (c === Number && s(b) && /^-?[0-9]+$/.test(b)) {
      return Number(b);
    }
  }
  return b;
};
var $i = function(a) {
  this.Cv = a;
};
v($i, Zi);
$i.prototype.he = function(a) {
  for (var b = a.xa().Th(), c = {}, e = 0;e < b.length;e++) {
    var f = b[e], g = 1 == this.Cv ? f.getName() : f.Nb();
    if (a.pd(f)) {
      if (f.Xb()) {
        var h = [];
        c[g] = h;
        for (g = 0;g < a.eo(f);g++) {
          h.push(this.Ov(f, a.get(f, g)));
        }
      } else {
        c[g] = this.Ov(f, a.get(f));
      }
    }
  }
  a.Hv(function(a, b) {
    c[a] = b;
  });
  return c;
};
$i.prototype.Rx = function(a, b) {
  var c = a.xa(), e;
  for (e in b) {
    var f, g = b[e], h = !/[^0-9]/.test(e);
    h ? f = c.NH(e) : (w(1 == this.Cv), f = c.bo(e));
    if (f) {
      if (f.Xb()) {
        for (w(r(g)), h = 0;h < g.length;h++) {
          a.add(f, this.sw(f, g[h]));
        }
      } else {
        w(!r(g)), a.set(f, this.sw(f, g));
      }
    } else {
      h ? a.QH(Number(e), g) : w(f);
    }
  }
};
var aj = function(a, b) {
  this.Qk = !!a;
  this.fx = !!b;
};
v(aj, Zi);
d = aj.prototype;
d.Rx = function(a, b) {
  a.xa();
  var c = new bj;
  return c.parse(a, b.toString(), this.Qk) ? null : c.getError();
};
d.he = function(a) {
  var b = new cj;
  this.wp(a, b);
  return b.toString();
};
d.wp = function(a, b) {
  var c = a.xa().Th();
  z(c, function(c) {
    this.yI(a, c, b);
  }, this);
  a.Hv(function(a, c) {
    this.np(a, c, b);
  }, this);
};
d.np = function(a, b, c) {
  if (null != b) {
    if (r(b)) {
      z(b, function(b) {
        this.np(a, b, c);
      }, this);
    } else {
      if (ha(b)) {
        c.append(a);
        c.append(" {");
        c.sl();
        c.tw();
        if (b instanceof Z) {
          this.wp(b, c);
        } else {
          for (var e in b) {
            var f = Oa(e);
            w(isFinite(f) && 0 == f % 1);
            this.np(f, b[e], c);
          }
        }
        c.qw();
        c.append("}");
      } else {
        s(b) && (b = Ha(b)), c.append(a), c.append(": "), c.append(b.toString());
      }
      c.sl();
    }
  }
};
d.uI = function(a, b, c) {
  switch(b.Rc()) {
    case 1:
    ;
    case 2:
    ;
    case 3:
    ;
    case 4:
    ;
    case 5:
    ;
    case 13:
    ;
    case 6:
    ;
    case 7:
    ;
    case 8:
    ;
    case 15:
    ;
    case 16:
    ;
    case 17:
    ;
    case 18:
      c.append(a);
      break;
    case 12:
    ;
    case 9:
      a = Ha(a.toString());
      c.append(a);
      break;
    case 14:
      if (!this.fx) {
        var e = !1;
        Fb(b.vi(), function(b, g) {
          b == a && (c.append(g), e = !0);
        });
      }
      e && !this.fx || c.append(a.toString());
      break;
    case 10:
    ;
    case 11:
      this.wp(a, c);
  }
};
d.yI = function(a, b, c) {
  if (a.pd(b)) {
    for (var e = a.eo(b), f = 0;f < e;++f) {
      c.append(b.getName());
      11 == b.Rc() || 10 == b.Rc() ? (c.append(" {"), c.sl(), c.tw()) : c.append(": ");
      this.uI(a.get(b, f), b, c);
      if (11 == b.Rc() || 10 == b.Rc()) {
        c.qw(), c.append("}");
      }
      c.sl();
    }
  }
};
var cj = function() {
  this.xg = 0;
  this.ie = [];
  this.Ip = !0;
};
d = cj.prototype;
d.toString = function() {
  return this.ie.join("");
};
d.tw = function() {
  this.xg += 2;
};
d.qw = function() {
  this.xg -= 2;
  w(0 <= this.xg);
};
d.append = function(a) {
  if (this.Ip) {
    for (var b = 0;b < this.xg;++b) {
      this.ie.push(" ");
    }
    this.Ip = !1;
  }
  this.ie.push(a.toString());
};
d.sl = function() {
  this.ie.push("\n");
  this.Ip = !0;
};
var ej = function(a, b) {
  this.lJ = !!b;
  this.oJ = a;
  this.yi = 0;
  this.Hp = a;
  this.Bp = {type:dj, value:null};
};
ej.prototype.getCurrent = function() {
  return this.Bp;
};
var dj = /---end---/, fj = /^-?[a-zA-Z][a-zA-Z0-9_]*/, gj = /^(0x[0-9a-f]+)|(([-])?[0-9][0-9]*(\.?[0-9]+)?([f])?)/, hj = /^"([^"\\]|\\.)*"/, ij = /^\s/, jj = {AM:dj, BM:fj, EM:gj, zM:/^#.*/, FM:/^{/, sM:/^}/, HM:/^</, uM:/^>/, GM:/^\[/, tM:/^\]/, KM:hj, xM:/^:/, yM:/^,/, JM:/^;/, LM:ij};
ej.prototype.next = function() {
  for (;this.GK();) {
    if (this.getCurrent().type != ij || !this.lJ) {
      return!0;
    }
  }
  this.Bp = {type:dj, value:null};
  return!1;
};
ej.prototype.GK = function() {
  if (this.yi >= this.oJ.length) {
    return!1;
  }
  var a = this.Hp, b = null;
  Fb(jj, function(c) {
    if (!b && c != dj) {
      var e = c.exec(a);
      e && 0 == e.index && (b = {type:c, value:e[0]});
    }
  });
  b && (this.Bp = b, this.yi += b.value.length, this.Hp = this.Hp.substring(b.value.length));
  return!!b;
};
var bj = function() {
  this.td = this.$a = null;
  this.Qk = !1;
};
d = bj.prototype;
d.parse = function(a, b, c) {
  this.$a = null;
  this.Qk = !!c;
  this.td = new ej(b, !0);
  this.td.next();
  return this.hl(a, "");
};
d.getError = function() {
  return this.$a;
};
d.tb = function(a) {
  this.$a = a;
};
d.hl = function(a, b) {
  for (;!this.up(">") && !this.up("}") && !this.kl(dj);) {
    if (!this.RI(a)) {
      return!1;
    }
  }
  if (b) {
    if (!this.li(b)) {
      return!1;
    }
  } else {
    this.kl(dj) || this.tb("Expected END token");
  }
  return!0;
};
d.pv = function(a, b) {
  var c = this.QJ(b);
  if (null === c) {
    return!1;
  }
  b.Xb() ? a.add(b, c) : a.set(b, c);
  return!0;
};
var kj = function(a) {
  a = za(a, ".") ? parseFloat(a) : Oa(a);
  w(!isNaN(a));
  w(isFinite(a));
  return a;
};
d = bj.prototype;
d.QJ = function(a) {
  switch(a.Rc()) {
    case 1:
    ;
    case 2:
      if (a = this.Tk()) {
        if (a = /^-?inf(?:inity)?f?$/i.test(a) ? Infinity * (0 == a.lastIndexOf("-", 0) ? -1 : 1) : /^nanf?$/i.test(a) ? NaN : null, null != a) {
          return a;
        }
      }
    ;
    case 5:
    ;
    case 13:
    ;
    case 7:
    ;
    case 15:
    ;
    case 17:
      var b = this.qp();
      return b ? kj(b) : null;
    case 3:
    ;
    case 4:
    ;
    case 6:
    ;
    case 16:
    ;
    case 18:
      return(b = this.qp()) ? a.vi() == Number ? kj(b) : b : null;
    case 8:
      a = this.Tk();
      if (!a) {
        return null;
      }
      switch(a) {
        case "true":
          return!0;
        case "false":
          return!1;
        default:
          return this.tb("Unknown type for bool: " + a), null;
      }
    ;
    case 14:
      if (this.kl(gj)) {
        return(b = this.qp()) ? kj(b) : null;
      }
      b = this.Tk();
      if (!b) {
        return null;
      }
      a = a.vi()[b];
      return null == a ? (this.tb("Unknown enum value: " + b), null) : a;
    case 12:
    ;
    case 9:
      return this.UH();
  }
};
d.aG = function(a, b) {
  var c = "";
  if (this.bc("<")) {
    c = ">";
  } else {
    if (!this.li("{")) {
      return!1;
    }
    c = "}";
  }
  var e = b.Sv().yw();
  if (!this.hl(e, c)) {
    return!1;
  }
  b.Xb() ? a.add(b, e) : a.set(b, e);
  return!0;
};
d.bG = function() {
  this.bc(":");
  if (this.bc("[")) {
    for (;;) {
      this.td.next();
      if (this.bc("]")) {
        break;
      }
      if (!this.li(",")) {
        return!1;
      }
    }
    return!0;
  }
  if (this.bc("<")) {
    return this.hl(null, ">");
  }
  if (this.bc("{")) {
    return this.hl(null, "}");
  }
  this.td.next();
  return!0;
};
d.RI = function(a) {
  var b = this.Tk();
  if (!b) {
    return this.tb("Missing field name"), !1;
  }
  var c = null;
  a && (c = a.xa().bo(b.toString()));
  if (null == c) {
    if (this.Qk) {
      return this.bG();
    }
    this.tb("Unknown field: " + b);
    return!1;
  }
  if (11 == c.Rc() || 10 == c.Rc()) {
    if (this.bc(":"), !this.aG(a, c)) {
      return!1;
    }
  } else {
    if (!this.li(":")) {
      return!1;
    }
    if (c.Xb() && this.bc("[")) {
      for (;;) {
        if (!this.pv(a, c)) {
          return!1;
        }
        if (this.bc("]")) {
          break;
        }
        if (!this.li(",")) {
          return!1;
        }
      }
    } else {
      if (!this.pv(a, c)) {
        return!1;
      }
    }
  }
  this.bc(",") || this.bc(";");
  return!0;
};
d.bc = function(a) {
  return this.up(a) ? (this.td.next(), !0) : !1;
};
d.Yp = function(a) {
  if (!this.kl(a)) {
    return this.tb("Expected token type: " + a), null;
  }
  a = this.td.getCurrent().value;
  this.td.next();
  return a;
};
d.Tk = function() {
  return this.Yp(fj);
};
d.qp = function() {
  return this.Yp(gj);
};
d.UH = function() {
  var a = this.Yp(hj);
  return a ? hg(a).toString() : null;
};
d.li = function(a) {
  return this.bc(a) ? !0 : (this.tb('Expected token "' + a + '"'), !1);
};
d.up = function(a) {
  return this.td.getCurrent().value == a;
};
d.kl = function(a) {
  return this.td.getCurrent().type == a;
};
var lj = new $i, mj = new aj, nj = function(a) {
  a = lj.he(a);
  return kg(a);
};
try {
  var oj = window.JSON.parse;
} catch (pj) {
  oj = hg;
}
Z.prototype.toString = function() {
  return mj.he(this);
};
var qj = function(a) {
  this.l = a;
};
qj.prototype.ve = function(a) {
  var b = a.xa(), c = this.tE()[b.getName()];
  w(c, "no validator specification for %s", b.Co());
  for (var e = b.Th(), f = 0;f < e.length;++f) {
    w(e[f].getName() in c, "field %s unspecified in %s", e[f].getName(), b.Co());
  }
  for (var g in c) {
    var e = c[g], h = b.bo(g);
    w(h instanceof Fi, "no field descriptor for %s in %s", g, b.Co());
    for (f = 0;f < e.length;++f) {
      if (!e[f](h, a)) {
        return!1;
      }
      for (var l = 0;l < a.eo(h);++l) {
        var p = a.get(h, l);
        if (p instanceof Z && !this.ve(p)) {
          return this.l.w("field %s (index %d) failed validation in %s", g, l, a), !1;
        }
      }
    }
  }
  return!0;
};
qj.prototype.required = function(a, b) {
  var c = b.pd(a);
  c || this.l.w("required field %s missing from %s", a.getName(), b);
  return c;
};
qj.prototype.fH = function(a, b, c) {
  var e = !c.pd(b) || c.get(b) >= a;
  e || this.l.w("%s must be greater than or equal to %d; was %d", b.getName(), a, c.get(b));
  return e;
};
qj.prototype.gH = function(a, b) {
  var c = !b.pd(a) || "" != b.get(a);
  c || this.l.w("%s must be non-empty", a.getName());
  return c;
};
var rj = function(a) {
  this.l = a;
  a = function() {
    return!0;
  };
  var b = t(this.required, this), c = t(this.fH, this, 0), e = t(this.gH, this);
  this.hH = {Version:{major_version:[b, c], minor_version:[b, c]}, ProtocolVersion:{version:[b]}, ClientVersion:{version:[b], platform:[b], language:[b, e], application_info:[b, e]}, ClientToServerMessage:{header:[b], init_endpoint_message:[a], init_session_message:[a], client_data_message:[a], send_on_disconnect_message:[a]}, ClientHeader:{protocol_version:[b], client_version:[b], client_time_ms:[b], max_known_server_time_ms:[b], message_id:[a]}, SessionId:{service_name:[b, e], session_name:[a]}, 
  InitEndpointMessage:{}, InitSessionMessage:{session_id:[b]}, SessionStatusMessage:{session_id:[b], address:[a, e], is_broadcast_to_user:[a], status:[a]}, DataMessage:{session_id:[b], message:[b, e]}, ServerToClientMessage:{header:[b], server_data_message:[a], channel_status_message:[a], session_status_message:[a]}, ServerHeader:{protocol_version:[b], server_time_ms:[b, c], message_id:[a, e]}, StatusP:{code:[b], description:[a]}, ChannelStatusMessage:{status:[b], jid_resource:[a]}};
};
v(rj, qj);
rj.prototype.tE = function() {
  return this.hH;
};
rj.prototype.yA = function(a) {
  return this.ve(a);
};
rj.prototype.nA = function(a) {
  return this.ve(a) ? !0 : !1;
};
var sj = function() {
  var a;
  return ec ? (a = /Windows NT ([0-9.]+)/, (a = a.exec(ic())) ? a[1] : "0") : dc ? (a = /10[_.][0-9_.]+/, (a = a.exec(ic())) ? a[0].replace(/_/g, ".") : "10") : gc ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(ic())) ? a[1] : "") : hc || qc ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(ic())) ? a[1].replace(/_/g, ".") : "") : "";
}();
var tj = new Ji, uj = new Ii;
uj.$p(3);
uj.aq(2);
tj.setVersion(uj);
var vj = new Ii;
vj.$p(3);
vj.aq(2);
var wj = new Ii;
wj.$p(3);
wj.aq(2);
var xj = function(a, b, c) {
  var e = new Ki;
  e.setVersion(wj);
  e.VK(a);
  e.UK(b);
  e.RK(c);
  return e;
}, yj = function(a, b) {
  var c = new Li;
  c.mL(a);
  null != b && c.nL(b);
  return c;
};
var zj = {APISIDHASH:1, SAPISIDHASH:2, OAuth:3}, Aj = {1:"APISIDHASH", 2:"SAPISIDHASH", 3:"OAuth"};
var Cj = function(a, b, c, e) {
  this.g = a;
  this.cm = b;
  this.Ii = e;
  a = Math.floor(1048576 * Math.random());
  this.Hd = c ? a + "_" + Bj++ : null;
  this.Cf = !1;
}, Bj = 0;
Cj.prototype.open = function() {
  w(!this.Cf);
  this.Cf = !0;
  this.g.sm(this);
};
Cj.prototype.send = function(a) {
  w(this.Cf);
  this.g.QF(this, a);
};
Cj.prototype.$y = function(a) {
  w(null == this.Hd);
  this.Hd = a;
};
var Dj = function(a, b) {
  this.Mg = b;
  w(16 >= this.Mg.hf().length);
  this.Wi = [];
  this.Lg = new D;
  this.Oi = new D;
  this.Z = null;
  this.a = new Yi("HangingGetChannel");
  this.Kq = new rj(this.a);
  this.hm = a;
  this.Cf = !1;
  this.P = new Gi;
  this.P.Lm(Re(self.location.href));
  this.P.Jd(2);
  var c = b.mf();
  null != c && this.P.Qm(c);
  this.dz = this.im = 0;
  this.kh = !1;
};
d = Dj.prototype;
d.$t = function(a) {
  this.P.Jd(3);
  this.P.No(a);
  this.mn();
};
d.open = function() {
  w(!this.kh);
  w(null == this.Z);
  this.P.Zi() && this.P.mf();
  this.Z = this.Mg.ws(this);
  this.mn();
  this.Z.start();
  this.a.info("Started a browser channel.");
};
d.close = function() {
  w(!this.kh);
  null != this.Z && this.Z.close();
};
d.$ = function() {
  this.close();
  this.kh = !0;
};
d.Xf = function() {
  return this.kh;
};
d.mn = function() {
  if (3 != this.P.ld()) {
    var a = this.Mg.rF(this.P.Db());
    if (null != a) {
      var b = a.scheme, a = a.hash;
      a != this.P.ec() && (b = w(zj[b], "unknown auth scheme: " + b), this.P.Jd(b), this.P.No(a));
    } else {
      this.P.No("");
    }
  }
  this.Z && this.Z.Lo(this.P);
};
d.xe = function() {
  this.op(new Oi);
};
d.jA = function(a) {
  var b = a.Da().Rq();
  if (1 == b) {
    this.Cr(!0);
    for (var c = this.Lg.N(), b = 0;b < c.length;++b) {
      this.sm(c[b]);
    }
    c = this.Oi.N();
    for (b = 0;b < c.length;++b) {
      this.sm(c[b]);
    }
    b = {};
    a.wz() && (b.fM = a.vz());
    this.hm.xz(this, b);
  } else {
    this.a.e("Received non-SUCCESS status %s from server", b);
  }
};
d.iA = function(a) {
  var b = a.of(), c = b.Bm();
  if (null == c) {
    this.a.e("Ignoring session-ready message without a session name");
  } else {
    var e = this.Cq(b);
    if (null == e && this.Mg.kr()) {
      for (var f = 0;f < this.Wi.length;++f) {
        var g = this.Wi[f], h = b.lj();
        if (g.cm == h) {
          e = g;
          e.$y(c);
          this.Wi.splice(f, 1);
          a.az() ? this.Oi.Na(h) ? this.a.e("Duplicate session for the same broadcast service (%s): this is not supported and will be ignored", h) : this.Oi.set(h, e) : this.Lg.set(e.Hd, e);
          break;
        }
      }
    }
    null == e ? this.a.e("Received address for unknown session: %s, %s", b, a.toString()) : a.pr() && 1 != a.Da().Rq() ? (this.a.e("Failed to initialize session with service %s: %s", b.lj(), a.Da().Kg()), e.Ii.cz ? e.Ii.cz(e, {eM:!1, description:a.Da().Kg()}) : this.a.info("onSessionError() not implemented by handler")) : (this.a.info("Address %s assigned for session %s with service %s", a.or(), b.Bm(), b.lj()), e.Ii.bz(e, a.or()));
  }
};
d.Me = function(a) {
  for (var b = 0;b < a.length;b++) {
    var c = a[b].p, e = this.dA(c);
    if (null == e) {
      this.a.w("Cannot deserialize s2c message: %s", c);
    } else {
      if (this.a.C("Received server message: %s", e), this.Kq.nA(e)) {
        if (c = e.Tr(), this.im = Math.max(this.im, c.gA()), e.kA() && this.jA(e.eA()), e.mA() && (c = e.hA(), w(null != c), this.iA(c)), e.lA()) {
          var c = e.fA(), f = c.of(), g = this.Cq(f);
          null == g ? this.a.info("Received message for unknown session: %s, %s", f, e) : g.Ii.vm(g, c.getMessage());
        }
      } else {
        this.a.w("Received invalid server message: %s", e);
      }
    }
  }
};
d.Fd = function(a) {
  this.a.info("Error %s", a);
  this.mn();
  this.hm.onError(this, new Di(a));
};
d.ad = function() {
  this.Cr(!1);
  this.hm.AK(this);
};
d.Cr = function(a) {
  this.Cf = a;
};
d.FG = function(a, b) {
  w(!this.kh);
  w(this.Cf);
  var c = this.Mg.kr(), e = new Cj(this, a, !c, b);
  c ? this.Wi.push(e) : this.Lg.set(e.Hd, e);
  return e;
};
d.Gj = function() {
  null != this.Z ? (this.a.info("Asking browser channel to reconnect now!"), this.Z.Gj()) : this.a.info("Not asking browser channel to reconnect now because it does not exist yet!");
};
d.Cq = function(a) {
  var b = this.Lg.get(a.Bm(), null);
  null == b && (b = this.Oi.get(a.lj(), null));
  return b;
};
d.sm = function(a) {
  var b = a.cm;
  a = a.Hd;
  var c = new Pi;
  c.rl(yj(b, a));
  this.op(c);
};
d.QF = function(a, b) {
  w(null != a.Hd);
  w(this.Lg.Na(a.Hd));
  var c = a.cm, e = a.Hd, f = new Qi;
  f.rl(yj(c, e));
  f.pw(b);
  this.op(f);
};
d.op = function(a) {
  var b = "c" + ++this.dz, c = u(), e = this.im, f = new Ni;
  f.ds(tj);
  f.AA(c);
  f.EA(e);
  f.hn(b);
  f.BA(xj(sj, "JS", "lcsclient"));
  b = new Mi;
  b.cs(f);
  a instanceof Oi ? b.CA(a) : a instanceof Pi ? b.DA(a) : a instanceof Qi && b.zA(a);
  this.Kq.yA(b) ? (a = {}, f = nj(b), a.p = f, this.Z.Fj(a)) : this.a.w("Attempted to send invalid client message: %s", b.toString());
};
d.dA = function(a) {
  var b;
  t: {
    var c = Si.xa();
    b = this.a;
    var e;
    try {
      e = oj(a);
    } catch (f) {
      b && b.info("Exception parsing json (%s): %s", a, f);
      b = null;
      break t;
    }
    a = lj.Pr(c, e);
    null == a ? (b && b.e("Incoming msg is unparseable: %s", e), b = null) : b = a;
  }
  return b;
};
var Ej = function(a, b, c) {
  w(0 < c);
  w(0 < b);
  this.Gp = b;
  this.tJ = c;
  this.uJ = a;
  w(0 < this.Gp);
  this.reset();
};
Ej.prototype.reset = function() {
  this.wg = this.Gp;
  this.rx = !1;
};
Ej.prototype.Ri = function() {
  var a = 0;
  if (this.rx) {
    var a = Math.ceil(this.uJ() * this.wg), b = this.Gp * this.tJ;
    this.wg <= b && (this.wg *= 2, this.wg > b && (this.wg = b));
  }
  this.rx = !0;
  return a;
};
var Fj = function(a, b, c) {
  this.Cb = "2";
  this.Ac = a;
  c.Zi() && (this.Vi = c.mf());
  w(null != c.hf());
  this.pf = c;
  this.D = b;
  this.Gd = this.h = 0;
  this.a = new Yi("BrowserChannelImpl");
  this.Qi = new Ej(Math.random, 1E4, 180);
  this.Yi = new Ej(Math.random, 6E4, 30);
  this.Yi.Ri();
  this.P = new Gi;
  this.lm = 5;
  this.va = -1;
  this.Pg = !1;
  this.om = null;
};
v(Fj, Ci);
d = Fj.prototype;
d.vf = function(a) {
  a != this.h && (this.h = a, this.Gd++);
};
d.Lo = function(a) {
  var b = !this.P || this.P.ec() !== a.ec();
  this.P = a.clone();
  this.Vi && this.P.Qm(this.Vi);
  this.Z && (a = {}, this.Fr(a), this.Z.Bc(a));
  this.Pg && b && (this.Pg = !1, this.Gj());
};
d.start = function() {
  w(0 == this.h);
  this.vf(1);
  this.open(!1);
};
d.open = function(a) {
  if (1 != this.h) {
    this.a.info("Not opening since not closed (state = %s)", this.h);
  } else {
    this.vf(2);
    a = (a ? this.Yi : this.Qi).Ri() + this.pf.uA();
    this.pf.vA(0);
    var b = this.Gd;
    S(function() {
      this.Yr(b);
    }, a, this);
  }
};
d.Gj = function() {
  switch(this.h) {
    case 1:
    ;
    case 2:
      0 < this.lm ? (this.a.info("Opening immediately in response to user request"), this.lm--, this.Pg = !1, this.Yr(this.Gd)) : this.a.info("Ignoring immediate connect request open because budget exhausted");
      break;
    default:
      this.a.info("Ignoring request to open immediately because already open(ing)");
  }
};
d.Yr = function(a) {
  w(this.pf.hf());
  if (this.Gd != a) {
    this.a.info("Not opening since state has changed (%s vs. %s)", a, this.Gd);
  } else {
    w(null == this.Z);
    this.vf(3);
    a = this.Ac + "/cbp";
    var b = this.Ac + "/bind";
    this.Z = new wi(this.Cb);
    this.Z.tA(this);
    var c = {};
    this.as(c);
    var e = {};
    this.Fr(e);
    this.Z.Bc(e);
    this.Pg ? (this.a.info("Skipping connect because waiting for auth change."), this.Fd(this.Z, 2), this.ad(this.Z)) : this.Z.connect(a, b, c);
  }
};
d.as = function(a) {
  this.P.Zi() && (a.authuser = this.P.mf());
  a.ctype = this.pf.hf();
  this.pf.bH() && (a.service = this.pf.$u());
  this.om && (a.gsessionid = this.om);
};
d.Fr = function(a) {
  if (this.P.RG()) {
    var b = this.P.ld(), c = w(Aj[b], "Unknown auth scheme: " + b);
    a.Authorization = c + " " + this.P.ec();
    3 != b && (a["X-Origin"] = this.P.Db(), a["X-Goog-AuthUser"] = this.P.Rv());
  }
};
d.Yv = function(a) {
  w(a == this.Z);
  a = {};
  this.as(a);
  return a;
};
d.close = function() {
  this.vf(1);
  null != this.Z && this.Z.disconnect();
};
d.Fj = function(a) {
  null != this.Z && this.Z.Fj(a);
};
d.xe = function(a) {
  w(a == this.Z);
  this.vf(4);
  this.Yi.reset();
  this.Yi.Ri();
  var b = this.Gd;
  S(function() {
    this.Gd != b ? this.a.info("Not resetting delay generator because state changed (%d vs. %d)", b, this.Gd) : (this.Qi.reset(), this.lm = 5);
  }, 3E5, this);
  this.D.xe();
};
d.Me = function(a, b) {
  w(a == this.Z);
  for (var c = 0;c < b.length;c++) {
    var e = b[c].gsid;
    if (e) {
      this.om = e;
      b.splice(c, 1);
      break;
    }
  }
  0 < b.length && this.D.Me(b);
};
d.Fd = function(a, b) {
  w(a == this.Z);
  this.va = a.Lc();
  this.D.Fd(b);
};
d.ad = function(a) {
  w(a == this.Z);
  a = this.h;
  this.vf(1);
  if (4 == a || 3 == a) {
    a = !1;
    switch(this.va) {
      case 401:
        this.Pg = !0;
        break;
      case 403:
        a = !0;
    }
    this.open(a);
  }
  this.va = -1;
  this.Z = null;
  this.D.ad();
};
var Gj = function(a, b, c, e, f) {
  ji.call(this, a, b, c, e, f);
};
v(Gj, ji);
Gj.prototype.ws = function(a) {
  return new Fj(this.Gx(), a, this.Hx());
};
var Hj = function(a, b, c) {
  this.VG = a;
  this.gl = b;
  this.TG = c;
  this.Qi = new Ej(Math.random, 5E3, 128);
  this.wb = null;
};
Hj.prototype.Fs = function() {
  this.wb = new sh(this.VG);
  this.wb.eH(Yf(document, this.gl));
  S(this.dH, this.Qi.Ri() + 5E3, this);
  this.wb.connect(t(function() {
    w(this.wb.Y());
    this.TG(this.wb);
  }, this));
};
Hj.prototype.dH = function() {
  if (!this.wb.Y()) {
    this.wb.close();
    for (var a = bg(Yf(document, this.gl)), b = 0;b < a.length;++b) {
      ag(a[b]);
    }
    this.Fs();
  }
};
var Ij = function(a, b, c, e) {
  this.mh = a;
  this.UA = b;
  this.config = e;
  this.D = c;
  this.P = null;
};
d = Ij.prototype;
d.xG = function() {
  return null != this.P && 3 == this.P.ld();
};
d.onConnect = function() {
  this.Jw().info("Cross-iframe rpc mechanism ready; opening browser channel");
  this.P && this.Lo(this.P);
  this.ql("s", []);
};
d.XB = function() {
  var a = new W(this.mh), b = nj(this.config);
  a.ha("cfg", b);
  a.ha("ctype", this.config.hf());
  (b = this.config.vG()) && a.ha("gapi_src", b);
  (b = this.config.$u()) && a.ha("service", b);
  this.xG() && a.ha("oauth_token", this.P.ec());
  return a.toString();
};
d.OJ = function() {
  this.sg("cha", t(this.Me, this));
  this.sg("co", t(this.xe, this));
  this.sg("cc", t(this.ad, this));
  this.sg("ce", t(this.Fd, this));
};
d.close = function() {
};
d.Lo = function(a) {
  this.P = a;
  a = lj.he(this.P);
  this.ql("uap", a);
};
d.Fj = function(a) {
  this.ql("sm", a);
};
d.Gj = function() {
  this.ql("tcn", []);
};
d.xe = function() {
  this.D.xe();
};
d.Me = function(a) {
  this.D.Me(a);
};
d.ad = function() {
  this.D.ad();
};
d.Fd = function(a) {
  this.D.Fd(a);
};
var Jj = function(a, b, c, e) {
  Ij.call(this, a, b, c, e);
  this.wb = null;
  this.a = new Yi("XpcBrowserChannelClient");
};
v(Jj, Ij);
d = Jj.prototype;
d.YB = function(a) {
  this.wb = a;
  this.OJ();
  this.onConnect();
};
d.start = function() {
  w(!this.wb);
  this.a.info("Attempting to connect cross-page channel");
  var a = this.XB(), b = {};
  b.pu = a;
  b.ppu = this.mh + "xpc_blank";
  b.lpu = this.mh + "xpc_blank";
  b.pru = this.mh + "xpc_relay";
  b.lru = this.mh + "xpc_relay";
  this.$B = new Hj(b, this.UA, t(this.YB, this));
  this.$B.Fs();
};
d.sg = function(a, b) {
  this.wb.sg(a, b, !0);
};
d.ql = function(a, b) {
  this.wb && this.wb.Y() && this.wb.send(a, b || []);
};
d.Jw = function() {
  return this.a;
};
var Kj = function(a, b, c, e, f, g) {
  ji.call(this, a, b, c, f, g);
  this.gl = e;
};
v(Kj, ji);
Kj.prototype.ws = function(a) {
  return new Jj(this.Gx(), this.gl, a, this.Hx());
};
var Lj = function(a, b) {
  w(b instanceof ji);
  return new Dj(a, b);
};
var Mj = function(a, b) {
  kf.call(this);
  this.X = b;
  this.l = I("cv.CloudChannel");
  this.Fc = a;
  this.ag = this.Sd = null;
  this.Fc.BF(this.X, this);
};
v(Mj, kf);
d = Mj.prototype;
d.wrap = function() {
  return new Jh(this);
};
d.gu = function() {
  if (this.ag) {
    return this.ag;
  }
  var a = new K;
  !this.Sd || this.Sd.GE() ? (this.ag = a, this.Fc.HE(this.X).Bb(t(function(a) {
    a = a.Fa();
    this.Yn(a);
    a ? this.ag.ja(null) : this.ag.Qa();
    this.ag = null;
  }, this))) : a.ja(null);
  return a;
};
d.Yn = function(a) {
  this.Fc.Y() ? this.Sd && this.Sd.ec() == a.ec() || (a && (this.Sd = a), this.sb("connected")) : this.sb("disconnected");
};
d.ik = function() {
  this.Fc.tI(this.X);
};
d.send = function(a) {
  "connected" == this.Q() && this.Sd ? this.gu().Bb(t(function() {
    this.Sd ? this.Fc.sendMessage(this.Sd.ec(), a) : this.l.info("Error getting token for send.");
  }, this)) : (this.l.info("Not sending message since disconnected or no reply token."), this.l.C("  the message is: " + a));
};
var Nj = function(a, b, c, e, f) {
  this.l = I("cv.CloudLcsChannel");
  this.rb = a;
  this.ub = b;
  this.Og = c;
  this.Gt = e;
  this.it = f ? f : n;
  this.Td = null;
  this.Lh = new D;
  this.g = null;
  this.kk = "";
  this.It = new jf(354E4);
  O(this.It, "tick", t(this.ED, this));
};
d = Nj.prototype;
d.xz = function(a) {
  this.l.info("Channel opened.");
  this.kk || (this.l.info("Opening new session."), a.FG(this.ub.PF, this).open());
};
d.AK = function() {
  this.l.info("Channel closed.");
  this.uu();
};
d.onError = function(a, b) {
  this.l.e("Channel error: " + b);
  this.uu();
};
d.vm = function(a, b) {
  this.l.C("Received payload: " + b + ".");
  this.SF(b);
};
d.bz = function(a, b) {
  this.kk = b;
  this.Td.ja(null);
};
d.HE = function(a) {
  return this.Og.connect(a, this.kk);
};
d.qz = function(a) {
  if (null != this.Td) {
    return this.Td;
  }
  this.Td = new K;
  var b = null, b = a ? new Kj(this.ub.Ut + "/client-channel/client/client-js", this.ub.Tt, !0, "lcsclient", void 0, void 0) : new Gj(this.ub.Ut + "/client-channel/channel", this.ub.Tt, !0, void 0, void 0);
  this.g = Lj(this, b);
  this.Gt(t(function(a) {
    this.l.info("Opened browser channel.");
    this.g.$t(a);
    this.It.start();
    this.g.open();
  }, this));
  return this.Td;
};
d.rz = function(a, b) {
  var c = new Mj(this, a);
  c.gu();
  return b ? c : c.wrap();
};
d.BF = function(a, b) {
  this.Lh.set(a, b);
};
d.tI = function(a) {
  this.Lh.remove(a);
};
d.Y = function() {
  return!!this.Td && "success" == this.Td.Q();
};
d.sendMessage = function(a, b) {
  if (this.rb) {
    if (a) {
      var c = {from:this.rb, body:b};
      this.l.C("Sending message: " + JSON.stringify(c));
      this.Og.DE(a, this.ub.rE, JSON.stringify(c));
    } else {
      this.l.info("Failed to send message due to channel token not set.");
    }
  } else {
    this.l.info("Dropping sent message for disabled channel");
  }
};
d.uu = function() {
  this.kk = "";
  this.Td = this.g = null;
  for (var a = this.Lh.N(), b = 0;b < a.length;b++) {
    a[b].disconnect();
  }
  this.Lh.clear();
};
d.SF = function(a) {
  if (this.rb) {
    try {
      var b = JSON.parse(a), c = b.authToken, e = JSON.parse(b.message), f = e.from, g = this.Lh.get(f);
      this.it != n && (g ? c && g.Yn(new di(c)) : (this.l.info("Creating new logical channel for receiver."), g = new Mj(this, f), g.Yn(c ? new di(c) : null), this.it(g.wrap())));
      e.body && (this.l.C("Received message: " + JSON.stringify(e.body)), g.onMessage(e.body));
    } catch (h) {
      this.l.e("Error handling message: " + a);
    }
  } else {
    this.l.info("Dropping received message for disabled channel");
  }
};
d.ED = function() {
  this.Gt(t(function(a) {
    this.g.$t(a);
  }, this));
};
var Oj = function(a, b) {
  this.a = I("cv.CloudRegistry");
  this.bd = a;
  this.ih = b || new ci(this.bd);
};
d = Oj.prototype;
d.nr = function(a, b) {
  return qa(a) ? Ja("devices", "/", b) : Ja("devices", "/", a, "/", b);
};
d.jC = function(a) {
  ff(this.ih.Um(), t(function(a) {
    return this.bd.zm("devices", "GET", {}, null, a.Fa());
  }, this)).Bb(t(this.vH, this, a));
};
d.vH = function(a, b) {
  var c = b.Fa(), e = c.response;
  if (200 != c.Id.Da() && 304 != c.Id.Da() || !e) {
    this.a.info("Failed to get cloud device list."), a([], !1);
  } else {
    var c = 0, e = e.resources, f = [];
    for (c in e) {
      var g, h = e[c], l = g = null, p = null, B = null, G = null;
      g = h.guid || null;
      var G = h.claimCode || null, T = h.properties;
      T && (l = T.manufacturer, p = T.model);
      (h = h.settings) && (B = h.displayName);
      g = new vd(g, l, p, B, G);
      g.IB() ? f.push(g) : this.a.info("Invalid cloud device retrieved");
    }
    a(f, !0);
  }
};
d.connect = function(a, b) {
  var c = new K, e = {};
  b && (e.lcsInfo = {lcsAddress:b});
  ff(this.ih.Um(), t(function(b) {
    return this.bd.zm(this.nr(a, "connect"), "POST", e, null, b.Fa());
  }, this)).Bb(t(function(a) {
    (a = a.Fa().response) && a.token && a.token.authToken && a.token.expirationSecs ? c.ja(new di(a.token.authToken, a.token.expirationSecs)) : c.ja(null);
  }, this));
  return c;
};
d.DE = function(a, b, c) {
  var e = new K;
  if (!a) {
    return e.Qa(), this.a.e("Send failed since device channel token was not set"), e;
  }
  a = {authToken:a, message:c};
  var f = new sg;
  f.set("key", b);
  this.bd.zm(this.nr("", "send"), "POST", a, f).Bb(t(function(a) {
    a = a.Fa().Id.Da();
    204 != a && 200 != a ? (this.a.e("Send of message (" + c + ") failed with status: " + a), e.Qa()) : e.ja(null);
  }, this));
  return e;
};
var Pj = function(a, b, c, e, f, g, h) {
  this.action = a;
  this.activityType = b;
  this.activityId = c;
  this.initParams = e;
  this.senderId = f;
  this.receiverId = g;
  this.disconnectPolicy = h || "stop";
};
var Qj = function() {
  this.a = I("cv.Retry");
  this.Es = this.xh = 0;
  this.Ds = 1;
  this.Ah = 0;
  this.wn = void 0;
  this.Kj = this.zb = this.sn = null;
  this.Lj = 0;
  this.Mj = !1;
  this.yn = this.Bh = null;
};
v(Qj, M);
d = Qj.prototype;
d.start = function(a, b, c) {
  if (this.ex()) {
    throw Error("Cannot call Retry.start more than once.");
  }
  if (!this.xh) {
    throw Error("Cannot use AsyncRetry without setting a nonzero retry delay.");
  }
  this.sn = a;
  this.XI = b || null;
  this.Kj = c || null;
  S(t(this.fw, this), 0);
};
d.fw = function() {
  this.Bh = null;
  if (this.Ah && this.Lj >= this.Ah) {
    this.abort(this.wn);
  } else {
    if (!this.Mj) {
      this.yn = new Rj(this, this.Lj);
      this.Lj++;
      try {
        this.sn(this.yn);
      } finally {
        this.Mj || (this.Bh = S(t(this.fw, this), this.xh)), this.VH();
      }
    }
  }
};
d.VH = function() {
  var a = this.xh * this.Ds;
  this.Es && (a = Math.min(a, this.Es));
  this.xh = a;
};
d.Ml = function(a, b) {
  this.Ah = a;
  this.wn = b;
  return this;
};
d.Di = function(a) {
  w(0 < a);
  this.xh = a;
  return this;
};
d.hq = function(a) {
  w(1 <= a);
  this.Ds = a;
  return this;
};
d.NJ = function(a) {
  if (!this.ex()) {
    throw Error("Not started yet.");
  }
  this.Dx(this.XI, a);
};
d.abort = function(a) {
  this.Dx(this.Kj, a);
};
d.MJ = function(a) {
  a === this.yn && this.Ah && (this.Lj < this.Ah || this.abort(this.wn));
};
d.Dx = function(a, b) {
  null != this.Bh && (k.clearTimeout(this.Bh), this.Bh = null);
  this.Mj || (this.Mj = !0, a && a(b));
};
d.k = function() {
  Qj.t.k.call(this);
  this.abort();
};
d.ex = function() {
  return null != this.sn;
};
var Rj = function(a, b) {
  this.yi = b;
  this.pg = a;
  this.ug = !1;
};
Rj.prototype.Bg = function() {
  this.ug || (this.ug = !0, this.pg.MJ(this));
};
Rj.prototype.Jl = function(a) {
  this.ug || (this.ug = !0, this.pg.NJ(a));
};
Rj.prototype.abort = function(a) {
  this.ug || (this.ug = !0, this.pg.abort(a));
};
Rj.prototype.rm = function() {
  return this.yi;
};
var Sj = function() {
  return null != ic() && -1 != ic().indexOf("CrOS");
};
var Tj = function(a) {
  this.da = a || "sender-" + Ka();
};
Tj.prototype.c = function() {
  return this.da;
};
Tj.prototype.Ad = function() {
  return this.da;
};
var Uj = function() {
  this.a = I("cv.Setup");
  this.Ta = !1;
};
v(Uj, M);
Uj.prototype.A = function() {
  this.Ta ? this.a.info("Already been set up. Skipping.") : (this.rC(), this.Ta = !0);
};
var Vj = function(a) {
  return function() {
    a.A();
    a.OH();
  };
};
var Wj = function(a) {
  if ("undefined" != typeof DOMParser) {
    return(new DOMParser).parseFromString(a, "application/xml");
  }
  if ("undefined" != typeof ActiveXObject) {
    var b = new ActiveXObject("MSXML2.DOMDocument");
    if (b) {
      b.resolveExternals = !1;
      b.validateOnParse = !1;
      try {
        b.setProperty("ProhibitDTD", !0), b.setProperty("MaxXMLSize", 2048), b.setProperty("MaxElementDepth", 256);
      } catch (c) {
      }
    }
    b.loadXML(a);
    return b;
  }
  throw Error("Your browser does not support loading xml documents");
};
var Yj = function(a) {
  this.nh = a;
  this.Tb = Xj[1];
  this.a = I("cv.SetupApi");
  this.q = new R(this);
  this.uB();
};
v(Yj, M);
var Xj = ["3", "4"];
d = Yj.prototype;
d.setVersion = function(a) {
  qb(Xj, a) ? this.Tb = a : this.a.w("Unsupported version: " + a);
};
d.Ll = function(a) {
  this.nh.Ne(a);
};
d.QG = function(a) {
  var b = this.nh.clone();
  b.Oe(a);
  return b;
};
d.JC = function(a, b) {
  if ("scan_ssid" in a) {
    var c = a.scan_ssid;
    if (0 != c && 1 != c) {
      return this.a.w("connectWifi called with invalid scan_ssid = " + c.toString()), function() {
      };
    }
  }
  return this.Od("/setup/connect_wifi", "POST", b, a);
};
d.Ci = function(a, b, c) {
  if ((b || c) && 0 < Ma("4", this.Tb)) {
    return this.a.w("eurekaInfo with optional parameters is not supportedon " + this.Tb), function() {
    };
  }
  var e = b && qb(b, "sign"), f = [];
  if (b) {
    for (var g = ["sign", "detail"], h = 0;h < b.length;++h) {
      if (!qb(g, b[h])) {
        return this.a.w("Invalid options value: " + b[h]), function() {
        };
      }
    }
    f.push("options=" + b.join(","));
  }
  c && f.push("nonce=" + c);
  return this.Od("/setup/eureka_info", "GET", a, null, 0 < f.length ? new sg(f.join("&")) : null, e ? 4E4 : null, e ? 2 : null);
};
d.ZB = function(a, b) {
  var c = ["now", "fdr", "ota", "idle"];
  0 >= Ma("4", this.Tb) && c.push("set recovery");
  return qb(c, a) ? this.Od("/setup/reboot", "POST", b, {params:a}) : (this.a.w("Invalid params value: " + a), function() {
  });
};
d.vE = function(a) {
  return 0 < Ma("4", this.Tb) ? (this.a.w("saveWifi is not supported on version " + this.Tb), function() {
  }) : this.Od("/setup/save_wifi", "POST", a, void 0, void 0, 2E4, 2);
};
d.Yy = function(a) {
  return this.Od("/setup/scan_results", "GET", a);
};
d.kB = function(a) {
  return this.Od("/setup/scan_wifi", "POST", a, void 0, void 0, void 0, 1);
};
d.oz = function(a, b) {
  return this.Od("/setup/set_eureka_info", "POST", b, a);
};
d.QC = function(a) {
  return this.Od("/setup/supported_timezones", "GET", a, null, null, 2E4, 2);
};
d.k = function() {
  Fb(this.wk, function(a) {
    a.$();
  });
  this.q.$();
  Yj.t.k.call(this);
};
d.uB = function() {
  this.wk = {};
  this.CK = 1;
};
d.iL = function(a) {
  if (!this.wk[a]) {
    var b = new Wh;
    b.jl(a);
    this.wk[a] = b;
  }
  return this.wk[a];
};
d.kw = function(a, b, c, e, f, g, h) {
  var l = "" + this.CK++;
  h = h || 4;
  var p = this.iL(g || 1E4);
  p.send(l, a, b, c, e, void 0, f, h - 1);
  return t(function() {
    p.abort(l, !0);
  }, this);
};
d.Od = function(a, b, c, e, f, g, h) {
  var l = function(a) {
    var e = null;
    a.target.pa() && "GET" == b && (e = a.target.cc(), e = JSON.parse(e));
    c(e, a.target);
  }, p = this.nh.clone();
  p.Oe(a);
  f && p.Yf(f);
  if ("GET" == b) {
    return this.kw(p.toString(), b, null, null, l, g, h);
  }
  if ("POST" == b) {
    return this.kw(p.toString(), b, JSON.stringify(e), {"Content-Type":"application/json"}, l, g, h);
  }
};
var Zj = [[0xfa8fca300000, 0xfa8fca3fffff], [0xfa8fca500000, 0xfa8fca9fffff], [111971074048, 111971139583]], ak = ["Eureka Dongle", "Chromekey"], bk = function(a) {
  if (!(a && "WiFi" in a && "BSSID" in a.WiFi)) {
    return!1;
  }
  var b = function(a) {
    a = a.replace(/:/g, "").toLowerCase();
    return 12 != a.length ? -1 : parseInt(a, 16);
  }(a.WiFi.BSSID);
  return!!C(Zj, function(a) {
    return b >= a[0] && b <= a[1];
  });
}, ck = function(a) {
  return a && a.wpa_auth ? 1 != a.wpa_auth : !1;
}, dk = function(a) {
  return 21 == a || 31 == a || 11 == a;
}, fk = function(a, b) {
  ek(a.deviceDescriptionUrl, "device_description", b);
}, gk = function(a) {
  var b = Wj(a);
  if (!b) {
    return null;
  }
  var c = b.querySelector("root > device > manufacturer");
  a = b.querySelector("root > device > modelName");
  if (!c || !a) {
    return null;
  }
  c = fg(c);
  a = fg(a);
  a = "Google Inc." == c && qb(ak, a);
  var e = b.querySelector("root > URLBase"), c = b.querySelector("root > device > friendlyName"), b = b.querySelector("root > device > UDN");
  if (!e || !c || !b) {
    return null;
  }
  e = fg(e);
  e = Ag(e).fc();
  c = fg(c);
  b = fg(b);
  return{name:c, ipAddress:e, udn:b, isChromecast:a};
}, hk = function(a, b, c) {
  ek(a + (oa(a, "/") ? "ChromeCast" : "/ChromeCast"), "app_info", function(a) {
    (a = a.target) && a.pa() ? b() : c();
  });
}, ek = function(a, b, c) {
  b = new yh;
  b.Tv("text");
  b.jl(7E3);
  Fe(b, ["complete", "timeout"], c);
  b.send(new W(a), "GET");
};
var ik = function(a) {
  Q.call(this);
  this.yd = a;
  this.a = I("cv.DongleDialMonitor");
  this.ia = !1;
  this.oc = 0;
  this.Jf = [];
  this.rh = 0;
  this.vb = {};
  this.gn = [];
};
v(ik, Q);
var jk = function(a) {
  N.call(this, "device-list-updated");
  this.st = a;
};
v(jk, N);
d = ik.prototype;
d.start = function() {
  this.ia ? this.a.info("Already started.") : (this.ia = !0, this.ps = t(this.Kd, this), this.yd.onDeviceList.addListener(this.ps), this.qs = t(this.v, this), this.yd.onError.addListener(this.qs), this.refresh());
};
d.stop = function() {
  this.ia ? (this.ia = !1, this.yd.onDeviceList.removeListener(this.ps), this.yd.onError.removeListener(this.qs)) : this.a.info("Stopping, but not started.");
};
d.k = function() {
  ik.t.k.call(this);
  this.stop();
  Fb(this.vb, function(a) {
    a.Nd && clearTimeout(a.Nd);
  });
  this.vb = {};
};
d.refresh = function() {
  this.yd.discoverNow(t(function(a) {
    this.a.info("Discover now called with result " + a);
  }, this));
};
d.Pl = function(a) {
  var b = Kb(this.vb, function(b) {
    return!!b.description && b.description.udn == a && 0 == b.status;
  });
  b && (tb(this.Jf, this.vb[b].description), this.Hs(b));
  this.gn.push(a);
};
d.v = function(a) {
  this.a.info("Encountered dial error: " + a.code);
  this.Kd([]);
};
d.Kd = function(a) {
  this.oc++;
  this.rh = a.length;
  this.Jf = [];
  this.a.info("Got new dial device list: generation: " + this.oc + ", size: " + this.rh);
  0 == a.length ? this.tn() : z(a, function(a) {
    this.Hn(a, t(this.pn, this), t(this.Aj, this));
  }, this);
  this.gn = [];
};
d.tn = function() {
  0 < this.rh || (Ab(this.Jf, function(a, b) {
    return ra(a.name, b.name);
  }), this.a.info("Dispatch new device list generation: " + this.oc + " with " + this.Jf.length + " entries."), Me(this, new jk(this.Jf)));
};
d.pn = function(a, b, c) {
  var e = this.vb[b];
  !e || e.fn > a ? this.a.info("Description for " + b + " obsolete") : qb(this.gn, c.udn) ? (this.a.info("Ignoring invalidated description for: " + b), this.Aj(a, b)) : (this.wB(b), e.description = c, e.status = 0, e.vn != this.oc ? this.a.info("Cache entry refreshed, but the device is not part of the current generation.") : (this.a.info("Adding device to the list: " + b), --this.rh, this.Jf.push(c), this.tn()));
};
d.Aj = function(a, b) {
  var c = this.vb[b];
  !c || c.fn > a ? this.a.info("Error for an obolete request for " + b) : (this.Hs(b), c.vn == this.oc && (this.a.info("Removing device from the current generation " + b), --this.rh, this.tn()));
};
d.wB = function(a) {
  var b = this.vb[a];
  b && (b.Nd && clearTimeout(b.Nd), b.Nd = setTimeout(t(this.iJ, this, a), 18E5));
};
d.Hs = function(a) {
  var b = this.vb[a];
  b && (b.Nd && clearTimeout(b.Nd), Nb(this.vb, a));
};
d.iJ = function(a) {
  var b = this.vb[a];
  b && (b.Nd = null, 0 == b.status && (this.a.info("Discarding device's cache entry as it expired " + a), Nb(this.vb, a)));
};
d.Hn = function(a, b, c) {
  var e = this.GB(a);
  0 == e.status ? (w(e.description), b(this.oc, a.deviceLabel, e.description)) : 1 != e.status && (e.status = 1, e.fn = this.oc, e = t(function(e, g, h) {
    var l = g = null;
    (h = h.target) && h.pa() && (g = gk(h.cc()), l = h.getResponseHeader("Application-URL") || null);
    g && l ? (this.a.info("Got device description, verifying it supports ChromeCast"), hk(l, t(b, null, e, a.deviceLabel, g), t(c, null, e, a.deviceLabel))) : (this.a.info("Failed to get description or app url. Description: " + !!g + "; app url: " + !!l), c(e, a.deviceLabel));
  }, this), fk(a, t(e, null, this.oc, a.deviceLabel)));
};
d.GB = function(a) {
  this.vb[a.deviceLabel] || (this.vb[a.deviceLabel] = {status:2, configId:a.configId, fn:this.oc, vn:this.oc, Nd:null, description:null});
  var b = this.vb[a.deviceLabel];
  b.vn = this.oc;
  a.configId && b.configId == a.configId || (b.configId = a.configId, b.status = 2);
  return b;
};
var kk = function(a) {
  Q.call(this);
  this.H = a;
  this.qh = this.Yc = this.tm = null;
  this.Md = 0;
  this.za = {};
  this.Ua = "";
  this.De = void 0;
  this.Ta = !1;
  this.jh = 0;
  this.a = I("cv.NetworkMonitor");
};
v(kk, Q);
var lk = function(a) {
  N.call(this, "wifi-added");
  this.Ki = a;
};
v(lk, N);
var mk = function(a) {
  N.call(this, "wifi-removed");
  this.Zl = a;
};
v(mk, N);
var nk = function(a) {
  N.call(this, "wifi-connected");
  this.Ki = a;
};
v(nk, N);
var ok = function(a) {
  N.call(this, "wifi-disconnected");
  this.Zl = a;
};
v(ok, N);
var pk = function() {
  N.call(this, "no-wifi");
};
v(pk, N);
d = kk.prototype;
d.k = function() {
  kk.t.k.call(this);
  this.H.onNetworkListChanged.removeListener(this.tm);
  this.H.onNetworksChanged.removeListener(this.Yc);
  this.Md = 0;
  this.Tm();
};
d.start = function() {
  this.Yc = t(this.Hm, this);
  this.H.onNetworksChanged.addListener(this.Yc);
  this.tm = t(this.Bs, this);
  this.H.onNetworkListChanged.addListener(this.tm);
  this.H.getVisibleNetworks("All", t(function(a) {
    this.Ta ? this.a.info("Monitor already initialized on getVisibleNetworks callback") : this.Bs(lb(a, function(a) {
      return a.GUID;
    }));
  }, this));
};
d.Us = function() {
  this.a.info("Remember " + this.Ua);
  this.De = this.Ua;
};
d.Ar = function() {
  this.a.info("Clear remembered");
  this.De = void 0;
};
d.sq = function(a) {
  void 0 != this.De && this.Ua != this.De && (this.a.info("Reconnecting " + this.De), this.Ua && this.H.startDisconnect(this.Ua), this.De && this.H.startConnect(this.De));
  a && this.Ar();
};
d.am = function() {
  return this.Ua;
};
d.Yq = function() {
  return this.Ta && 0 == this.jh;
};
d.Hq = function() {
  this.Md++;
  this.a.info("Rescan loop requested; request count: " + this.Md);
  this.Tm();
};
d.Nr = function() {
  0 < this.Md && (this.Md--, this.a.info("Rescan canceled; request count: " + this.Md));
  this.Tm();
};
d.rA = function(a) {
  this.H.getVisibleNetworks("All", function(b) {
    b = A(b, function(a) {
      return "Connected" == a.ConnectionState || "Connecting" == a.ConnectionState;
    });
    a(lb(b, function(a) {
      return a.Type;
    }));
  });
};
d.Tm = function() {
  "requestNetworkScan" in this.H && (0 < this.Md && !this.qh ? (this.a.info("Starting scan interval"), this.H.requestNetworkScan(), this.qh = setInterval(t(function() {
    this.H.requestNetworkScan();
  }, this), 1E4)) : 0 >= this.Md && this.qh && (this.a.info("Cancelling scan interval"), clearInterval(this.qh), this.qh = null));
};
d.vB = function(a) {
  return(a = this.za[a]) && a.pc || null;
};
d.Kl = function(a) {
  var b = [];
  Fb(this.za, function(c) {
    c.pc && a(c.pc) && b.push(c.pc);
  });
  return b;
};
d.Bs = function(a) {
  var b = {}, c = [];
  z(a, function(a) {
    a in this.za ? b[a] = this.za[a] : c.push({network:a, type:"added"});
  }, this);
  a = c.length;
  Fb(this.za, function(a, f) {
    f in b || 4 == a.status || c.push({network:f, type:"removed"});
  }, this);
  this.a.info("Network list changed: " + kg(c));
  a += a - c.length;
  this.za = b;
  kb(c, function(a) {
    "added" == a.type ? this.CB(a.network) : "removed" == a.type && this.DB(a.network);
  }, this);
  if (a || !this.Ta) {
    this.Ta = !0, this.jh += a, this.a.info("New network count: " + this.jh), this.ms();
  }
};
d.Hm = function(a) {
  z(a, function(a) {
    this.za[a] && 4 != this.za[a].status && (this.Ua && this.Ua != a ? this.za[a].status = this.hI(this.za[a].status) : this.Gs(a));
  }, this);
};
d.CB = function(a) {
  this.za[a] = {pc:null, status:1};
  this.zn(a, t(this.An, this));
};
d.zn = function(a, b) {
  var c = null;
  this.za[a] && this.za[a].pc && this.za[a].pc.Name && (c = this.za[a].pc.Name);
  var e = t(function(c) {
    this.H.getProperties(a, t(function(a) {
      a ? (a = Ob(a), a.Name = c, b(a)) : b(null);
    }, this));
  }, this);
  c ? e(c) : this.H.getVisibleNetworks("All", t(function(c) {
    (c = C(c, function(b) {
      return b.GUID == a;
    })) ? e(c.Name) : (this.a.info("Network not found among visible networks: " + a), b(null));
  }, this));
};
d.DB = function(a) {
  this.As(a);
  Me(this, new mk(a));
};
d.As = function(a) {
  this.Ua == a && (this.a.e("Network disconnected: " + this.Ua), this.Ua = "", Me(this, new ok(a)), this.wA());
};
d.fj = function(a) {
  this.a.info("Network connected " + a + "; currently connected: " + this.Ua);
  this.Ua || (this.Ua = a, Me(this, new nk(this.za[a].pc)));
};
d.ms = function() {
  this.Yq() && (this.a.e("No Wi-Fi detected."), Me(this, new pk));
};
d.hI = function(a) {
  return 1 == a ? 2 : 3;
};
d.An = function(a) {
  if (a) {
    var b = a.GUID, c = a.ConnectionState;
    if (b && this.za[b] && c && 4 != this.za[b].status) {
      if (a.WiFi) {
        var e = this.za[b], f = !e.pc;
        e.pc = a;
        f && Me(this, new lk(a));
        1 == e.status && (e.status = 0);
        2 == e.status ? this.Ua && this.Ua != b ? e.status = 3 : (this.a.info("Refetching properties for " + b), e.status = 1, this.zn(b, t(this.An, this))) : "Connected" == c ? this.fj(b) : "Connecting" != c && this.As(b);
      } else {
        this.a.info("Detected non WiFi network: " + b), this.za[b].status = 4, this.jh--, this.ms();
      }
    }
  }
};
d.Gs = function(a) {
  var b = this.za[a];
  4 != b.status && (1 == b.status ? b.status = 2 : (b.status = 1, this.zn(a, t(this.An, this))));
};
d.wA = function() {
  if (!this.Ua) {
    var a = [];
    Fb(this.za, function(b, c) {
      3 == b.status ? a.push(c) : 0 == b.status && "Connected" == b.pc.ConnectionState && (this.a.info("Found new connected network synchronously: " + c), this.fj(c));
    }, this);
    this.Ua || (this.a.info("Refresh networks to find a connected one: " + kg(a)), z(a, function(a) {
      this.Gs(a);
    }, this));
  }
};
var qk = function() {
  Q.call(this);
  this.a = I("cv.UserActionNotifier");
};
v(qk, Q);
var rk = function() {
  N.call(this, "network-selection-shown");
};
v(rk, N);
qk.prototype.JD = function() {
  this.a.info("Dispatching network-selection-shown");
  Me(this, new rk);
};
var tk = function(a, b, c, e, f, g) {
  this.af = a;
  this.ga = b;
  this.K = c;
  this.my = e;
  this.ny = f;
  this.v = g;
  this.$l = this.n = this.ia = !1;
  this.Aq = !0;
  this.a = I("cv.ChromekeyAvailableNetworkScanner");
  this.la = this.ah = null;
};
d = tk.prototype;
d.start = function() {
  this.ia || this.n || (this.a.info("Start task."), this.ah = t(this.WA, this), O(this.af, "network-selection-shown", this.ah), this.dm());
};
d.Ic = function(a) {
  return "flow-select-network" != a && "flow-edit-device" != a;
};
d.cancel = function() {
  this.n || (this.a.info("Cancel task"), this.n = !0, this.la && (this.la(), this.la = null), this.ah && (Ge(this.af, "network-selection-shown", this.ah), this.ah = null));
};
d.WA = function() {
  this.bM();
};
d.bM = function() {
  this.n || (this.ia ? (this.a.info("Schedule rescan."), this.$l = !0) : this.dm());
};
d.dm = function() {
  this.ia = !0;
  this.a.info("Scan wifis");
  this.la = this.ga.kB(t(this.jB, this));
};
d.jB = function(a, b) {
  this.n || (b.pa() || this.a.e("Scan wifi failed. Wifi list may be stale."), this.la = this.ga.Yy(t(this.Xy, this)));
};
d.Xy = function(a, b) {
  if (!this.n) {
    if (this.a.info("Got scan results."), this.la = null, b.pa()) {
      var c = A(a, function(a) {
        return this.my(a);
      }, this), e = lb(c, function(a) {
        return{name:a.ssid, value:a};
      }, this), c = pb(c, function(a) {
        return a.ssid == this.K.ssid;
      }, this);
      this.ny(e, c);
      this.Aq = !1;
      setTimeout(t(function() {
        this.n || (this.a.info("Allowing further scan-wifi requests."), this.ia = !1, this.$l && (this.$l = !1, this.dm()));
      }, this), 3E3);
    } else {
      this.a.e("Scan results request failed."), this.Aq && (this.a.e("Report error on the first scan results failure."), this.cancel(), this.v());
    }
  }
};
var uk = function(a, b, c) {
  this.o = a;
  this.Si = b;
  this.Li = c;
  this.ia = this.n = !1;
  this.ej = this.dj = this.gc = null;
  this.pm = !1;
  this.a = I("cv.NetworkWaiter");
}, vk = function(a, b, c) {
  return new uk(a, b, c);
};
uk.prototype.cancel = function() {
  this.n || (this.a.info("Task canceled"), this.n = !0, this.gc && (Ge(this.o, "wifi-added", this.gc), this.gc = null), this.dj && (clearTimeout(this.dj), this.dj = null), this.ej && (clearTimeout(this.ej), this.ej = null), this.pm && (this.o.Nr(), this.pm = !1));
};
uk.prototype.Ic = function() {
  return!0;
};
uk.prototype.start = function(a, b, c) {
  if (!this.ia && !this.n) {
    this.a.info("Task started");
    var e = this.o.Kl(a);
    0 < e.length ? (this.a.info("Network found imediatelly."), this.cancel(), this.Si(e[0])) : (this.gc = t(this.fm, this, a), O(this.o, "wifi-added", this.gc), this.ej = setTimeout(t(function() {
      this.a.info("Rescan loop requested");
      this.pm = !0;
      this.o.Hq();
    }, this), b), this.dj = setTimeout(t(function() {
      this.a.e("Task timed out.");
      this.cancel();
      this.Li();
    }, this), c));
  }
};
uk.prototype.fm = function(a, b) {
  var c = b.Ki;
  !this.n && a(c) && (this.a.info("Network found."), this.cancel(), this.Si(c));
};
var wk = function(a, b, c, e) {
  this.H = a;
  this.o = b;
  this.zb = c;
  this.v = e;
  this.ia = this.n = !1;
  this.Ld = "";
  this.Qg = this.Ti = this.Yc = null;
  this.a = I("cv.NetworkConnector");
}, xk = function(a, b, c, e) {
  return new wk(a, b, c, e);
};
d = wk.prototype;
d.cancel = function() {
  this.n || (this.a.info("Canceling task."), this.n = !0, this.Yc && (this.H.onNetworksChanged.removeListener(this.Yc), this.Yc = null), this.Ti && (clearTimeout(this.Ti), this.Ti = null), this.Qg && (this.Qg.cancel(), this.Qg = null));
};
d.Ic = function() {
  return!0;
};
d.start = function(a) {
  this.ia || this.n || (this.ia = !0, this.a.info("Starting task"), this.Qg = vk(this.o, t(this.yy, this), t(function() {
    this.n || (this.a.e("Network waiter failed"), this.cancel(), this.v());
  }, this)), this.Qg.start(a, 0, 2E4));
};
d.yy = function(a) {
  this.n || (this.Ld = a.GUID, this.a.info("Network to be connected found; guid: " + this.Ld), this.o.am() == this.Ld ? (this.a.info("Network already connected."), this.cancel(), this.zb(this.Ld)) : (this.Yc = t(this.Hm, this), this.H.onNetworksChanged.addListener(this.Yc), this.H.startConnect(this.Ld, t(this.yz, this))));
};
d.yz = function() {
  this.n || (this.Ti = setTimeout(t(function() {
    this.a.e("Network connector timed out");
    this.cancel();
    this.v();
  }, this), 3E4));
};
d.Hm = function(a) {
  this.n || (a = C(a, function(a) {
    return a == this.Ld;
  }, this)) && this.H.getProperties(a, t(this.OF, this));
};
d.OF = function(a) {
  if (!this.n) {
    var b = a && a.ConnectionState;
    this.a.info("New network connection state for guid " + this.Ld + ":" + b);
    a && "NotConnected" != b ? "Connected" == b && (this.cancel(), this.zb(this.Ld)) : (this.cancel(), this.v());
  }
};
var yk = function(a, b, c) {
  this.jv = a;
  this.Zh = b;
  this.xv = c;
  this.n = !1;
  this.la = null;
};
d = yk.prototype;
d.cancel = function() {
  this.n = !0;
  this.la && (this.la(), this.la = null);
};
d.Ic = function(a) {
  return this.xv ? this.xv(a) : !0;
};
d.start = function() {
  this.n || this.jv(t(this.Ev, this));
};
d.je = function() {
  this.n || (this.la = this.jv(t(this.Ev, this)), w(!!this.la));
};
d.Ev = function() {
  this.n || (this.la = null, this.cancel(), this.Zh.apply(null, arguments));
};
var zk = function(a, b, c, e) {
  this.o = a;
  this.Dt = b;
  this.Et = c;
  this.v = e;
  this.n = !1;
  this.nd = [];
  this.Vh = this.Wh = this.gc = this.$d = null;
  this.lo = !1;
};
d = zk.prototype;
d.cancel = function() {
  this.n || (this.n = !0, this.gc && (Ge(this.o, "wifi-added", this.gc), this.gc = null), this.Wh && (Ge(this.o, "wifi-removed", this.Wh), this.Wh = null), this.Vh && (Ge(this.o, "no-wifi", this.Vh), this.Vh = null), this.$d && (clearTimeout(this.$d), this.$d = null), this.o.Nr());
};
d.Ic = function() {
  return!0;
};
d.start = function() {
  this.n || (this.o.Yq() ? this.hu(null) : (this.nd = this.o.Kl(bk), Ab(this.nd, this.Dt), this.Et(this.nd), this.gc = t(this.fm, this), O(this.o, "wifi-added", this.gc), this.Wh = t(this.cE, this), O(this.o, "wifi-removed", this.Wh), this.Vh = t(this.hu, this), O(this.o, "no-wifi", this.Vh), this.o.Hq(), this.po()));
};
d.po = function() {
  this.n || (this.nd.length && this.$d ? (clearTimeout(this.$d), this.$d = null) : this.nd.length || this.$d || (this.$d = setTimeout(t(function() {
    this.n || (this.cancel(), this.v(1));
  }, this), 15E3)));
};
d.fm = function(a) {
  a = a.Ki;
  if (!this.n && bk(a)) {
    for (var b = this.nd, c, e = this.Dt || zb, f = 0, g = b.length;f < g;) {
      var h = f + g >> 1, l;
      l = e(a, b[h]);
      0 < l ? f = h + 1 : (g = h, c = !l);
    }
    c = c ? f : ~f;
    0 > c && yb(b, -(c + 1), 0, a);
    this.Dv();
    this.po();
  }
};
d.cE = function(a) {
  var b = a.Zl;
  this.n || (a = pb(this.nd, function(a) {
    return a && a.GUID == b;
  }), 0 <= a && (sb(this.nd, a), this.Dv(), this.po()));
};
d.Dv = function() {
  this.lo || (this.lo = !0, setTimeout(t(function() {
    this.lo = !1;
    this.n || this.Et(this.nd);
  }, this), 1E3));
};
d.hu = function() {
  this.cancel();
  this.v(0);
};
var Ak = function(a, b, c) {
  this.ga = a;
  this.Si = b;
  this.Li = c;
  this.n = !1;
  this.gm = null;
  this.Vg = 0;
  this.xj = new Qj;
  this.xj.Ml(25);
  this.xj.Di(7E3);
  this.la = null;
  this.a = I("cv.ConnectedSetupStateWaiter");
};
d = Ak.prototype;
d.cancel = function() {
  this.n || (this.la && (this.la(), this.la = null), this.a.info("Task canceled"), this.n = !0, this.xj.abort());
};
d.Ic = function() {
  return!0;
};
d.start = function() {
  this.a.info("Task started");
  this.xj.start(t(this.oC, this), t(this.zb, this), t(this.Kj, this));
};
d.oC = function(a) {
  this.n || (this.la ? (++this.Vg, a.Bg()) : this.la = this.ga.Ci(t(this.PE, this, a)));
};
d.PE = function(a, b, c) {
  if (!this.n) {
    var e = this.la = null;
    c.pa() ? e = b.setup_state : this.a.e("Chromekey info failed.");
    if (!e || this.gm && e == this.gm) {
      ++this.Vg, 6 < this.Vg ? (this.a.w("Setup state not changed for " + this.Vg + " iterations. Failing."), a.abort()) : a.Bg();
    } else {
      this.a.info("Setup state changed to " + e);
      this.gm = e;
      this.Vg = 0;
      t: {
        switch(e) {
          case 60:
          ;
          case 61:
          ;
          case 62:
            c = !0;
            break t;
          default:
            c = !1;
        }
      }
      c ? (this.a.info("Chromekey connected"), a.Jl(b)) : (b = this.Gy(e), 0 != b ? (this.a.w("Bad setup state"), this.cancel(), this.Li(b)) : a.Bg());
    }
  }
};
d.zb = function(a) {
  this.n || this.Si(ab(a));
};
d.Kj = function() {
  this.n || this.Li(1);
};
d.Gy = function(a) {
  switch(a) {
    case 21:
      return 2;
    case 31:
      return 3;
    case 41:
      return 4;
    default:
      return 0;
  }
};
var Bk = function(a, b, c) {
  this.H = a;
  this.o = b;
  this.v = c;
  this.ic = this.n = !1;
  this.re = this.eh = null;
  this.zq = 0;
  this.yq = !0;
  this.a = I("cv.KeepNetworkConnectedTask");
};
d = Bk.prototype;
d.cancel = function() {
  this.n || (this.a.info("Task canceled"), this.n = !0, this.eh && (Ge(this.o, "wifi-disconnected", this.eh), this.eh = null), this.re && (this.re.cancel(), this.re = null));
};
d.Ic = function() {
  return!1;
};
d.Ei = function(a) {
  this.yq = a;
};
d.start = function(a) {
  this.ic || this.n || (this.ic = !0, this.a.info("Task started for network: " + a), this.eh = t(this.qA, this, a), O(this.o, "wifi-disconnected", this.eh));
};
d.qA = function(a, b) {
  this.n || this.re || b.Zl != a || (this.yq ? 2 <= this.zq ? (this.a.w("Network disconnected. The max number of allowed reconnects exceeded."), this.cancel(), this.v()) : (this.re = xk(this.H, this.o, t(function() {
    ++this.zq;
    this.re = null;
  }, this), t(function(a) {
    this.n || (this.a.e("Reconnect failed for " + a), this.cancel(), this.v());
  }, this)), this.a.e("Reconnecting " + a), this.re.start(function(b) {
    return b.GUID == a;
  })) : (this.a.w("Network disconnected. Fail as reconnecting is not allowed"), this.cancel(), this.v()));
};
var Ck = function(a) {
  this.ga = a;
  this.n = !1;
  this.la = this.Sk = null;
};
Ck.prototype.Ic = function(a) {
  return!a || "flow-setup-started" == a || "flow-select-device" == a || "flow-success" == a;
};
Ck.prototype.cancel = function() {
  this.n || (this.n = !0, this.Sk && (clearInterval(this.Sk), this.Sk = null), this.la && (this.la(), this.la = null));
};
Ck.prototype.start = function() {
  this.Sk = setInterval(t(function() {
    this.la = this.ga.Ci(t(function() {
      this.la = null;
    }, this));
  }, this), 45E3);
};
var Dk = function(a, b, c) {
  this.Ka = a;
  this.zb = b;
  this.v = c;
  this.n = !1;
  this.a = I("cv.CastDeviceWaiter");
  this.sj = this.ue = this.fh = null;
};
Dk.prototype.cancel = function() {
  this.n || (this.n = !0, this.a.info("CastDeviceWaiter task canceled."), this.fh && (Ge(this.Ka, "device-list-updated", this.fh), this.fh = null), this.ue && (clearTimeout(this.ue), this.ue = null), this.sj && (clearInterval(this.sj), this.sj = null));
};
Dk.prototype.Ic = function() {
  return!0;
};
Dk.prototype.start = function(a, b) {
  this.n || (this.a.info("Cast device waiter task started."), setTimeout(t(function() {
    this.n || (this.a.w("The cast device waiter task timed out."), this.cancel(), this.v());
  }, this), b), this.sj = setInterval(t(function() {
    this.n || (this.a.info("Triggering dial monitor refresh."), this.Ka.refresh());
  }, this), Math.min(b / 2 + 1, 3E4)), this.Ka.Pl(a), this.fh = t(this.Kd, this, a), O(this.Ka, "device-list-updated", this.fh), this.Ka.refresh());
};
Dk.prototype.Kd = function(a, b) {
  if (!this.n) {
    var c = C(b.st, function(b) {
      return b.udn == a;
    });
    c && (this.cancel(), this.zb(c));
  }
};
var Ek = function(a, b, c, e, f) {
  this.H = a;
  this.o = b;
  this.Ka = c;
  this.zb = e;
  this.v = f;
  this.ia = this.n = !1;
  this.sf = this.ue = this.Ig = this.nm = null;
  this.a = I("cv.ChromecastSetupNetworkVerifier");
}, Fk = [{value:2400, min:2400, max:2500}, {value:5E3, min:4900, max:5900}];
d = Ek.prototype;
d.cancel = function() {
  this.n || (this.n = !0, this.sf && (this.sf.cancel(), this.sf = null));
};
d.Ic = function() {
  return!0;
};
d.start = function(a, b, c) {
  this.n || this.ia || (this.ia = !0, this.a.info("Task started."), this.nm = a, this.ue = c ? 14E4 : 3E4, this.sf = a = xk(this.H, this.o, t(this.fj, this), t(this.tb, this, "network-connect-failed")), a.start(function(a) {
    return a.Name == b;
  }));
};
d.fj = function(a) {
  this.n || (this.a.info("Network connected; guid: " + a), this.Ig = a, this.sf = a = new yk(t(this.o.rA, this.o), t(this.sA, this), null), a.start());
};
d.sA = function(a) {
  this.n || (this.a.info("Connected network types: " + kg(a)), qb(a, "VPN") ? this.tb("vpn-connected") : this.nB());
};
d.nB = function() {
  this.a.info("Verified that VPN not connected.");
  w(this.nm);
  w(this.ue);
  var a;
  a = t(this.PB, this);
  var b = t(this.QB, this);
  this.sf = a = new Dk(this.Ka, a, b);
  a.start(this.nm, this.ue);
};
d.PB = function(a) {
  this.a.info("Chromecast found on the network.");
  if (this.o.am() != this.Ig) {
    this.a.e("Network connection lost."), this.tb("network-connect-failed");
  } else {
    var b = this.hr(), b = !!b && b.gr && 5E3 != b.fr;
    this.cancel();
    this.zb(a, b);
  }
};
d.QB = function() {
  this.a.w("Failed to find the Chromecast on the selected network");
  if (this.o.am() != this.Ig) {
    this.a.e("Network connection lost."), this.tb("network-connect-failed");
  } else {
    var a = this.hr();
    a && a.gr && 5E3 == a.fr ? this.tb("not-found-dual-band") : this.tb("not-found");
  }
};
d.tb = function(a) {
  this.a.info("Encountered an error: " + a);
  this.cancel();
  this.v(a);
};
d.hr = function() {
  w(this.Ig);
  var a = this.o.vB(this.Ig);
  if (!(a && a.WiFi && a.WiFi.FrequencyList && a.WiFi.Frequency)) {
    return this.a.info("Frequency information not exposed"), null;
  }
  var b = function(a) {
    var b = C(Fk, function(b) {
      return a >= b.min && a <= b.max;
    });
    return b ? b.value : -1;
  }, c = function(a, c) {
    return!!C(a, function(a) {
      return(a = b(a)) && a == c;
    });
  }, e = c(a.WiFi.FrequencyList, 2400), c = c(a.WiFi.FrequencyList, 5E3);
  this.a.info("Conencted frequency: " + a.WiFi.Frequency);
  this.a.info("Found frequecy list: " + kg(a.WiFi.FrequencyList));
  this.a.info("The network frequency status: has 2.4 GHz: " + e + "; has 5 GHZ: " + c);
  return{fr:b(a.WiFi.Frequency), gr:e && c};
};
var Gk = {Zp:null, Al:function() {
  Gk.Zp || (Gk.Zp = chrome.extension.getBackgroundPage().chromeKeySetupLogUtils);
  return Gk.Zp;
}, cy:null, QK:function(a) {
  Gk.cy = a;
}, jq:function(a) {
  Gk.Al().QK(a);
}, lt:function() {
  return Xc();
}, pK:function() {
  return Gk.cy;
}, tk:function() {
  var a = chrome.extension.getViews({type:"tab"}), b = function(a, b) {
    return C(a, function(a) {
      return!!a && !!a.document && !!a.document.body && a.document.body.id == b;
    });
  }, c = b(a, "dongle-setup");
  c || (a = b(a, "options")) && (c = b(a.frames, "dongle-setup"));
  return c ? c.chromeKeySetupLogUtils.lt() : Gk.Al().pK() || "";
}, Wx:null, TK:function(a) {
  Gk.Wx = a;
}, NK:function() {
  return Gk.Wx;
}, Qv:function(a) {
  Gk.Al().TK(a);
}, OL:function() {
  return Gk.Al().NK();
}};
m("chromeKeySetupLogUtils", Gk, void 0);
m("getChromeKeySetupLogs", Gk.tk, void 0);
m("getChromeKeySetupExternalLogsUrl", Gk.OL, void 0);
var Hk = /<[^>]*>|&[^;]+;/g, Ik = function(a, b) {
  return b ? a.replace(Hk, "") : a;
}, Jk = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"), Kk = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]"), Lk = /^http:\/\/.*/, Mk = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff][^\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc]*$"), 
Nk = RegExp("[\u0591-\u07ff\u200f\ufb1d-\ufdff\ufe70-\ufefc][^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0800-\u1fff\u200e\u2c00-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*$"), Ok = /\s+/, Pk = /\d/;
var Qk = function(a) {
  this.zg = "number" == typeof a ? 0 < a ? 1 : 0 > a ? -1 : null : null == a ? null : a ? -1 : 1;
};
d = Qk.prototype;
d.Nx = function(a, b) {
  for (var c = 0, e = 0, f = !1, g = Ik(a, b).split(Ok), h = 0;h < g.length;h++) {
    var l = g[h];
    Kk.test(Ik(l, void 0)) ? (c++, e++) : Lk.test(l) ? f = !0 : Jk.test(Ik(l, void 0)) ? e++ : Pk.test(l) && (f = !0);
  }
  return 0 == e ? f ? 1 : 0 : 0.4 < c / e ? -1 : 1;
};
d.DK = function(a, b) {
  return 0 > a * b;
};
d.EK = function(a, b, c, e) {
  return e && (this.DK(b, this.zg) || 1 == this.zg && Nk.test(Ik(a, c)) || -1 == this.zg && Mk.test(Ik(a, c))) ? 1 == this.zg ? "\u200e" : "\u200f" : "";
};
d.vx = function(a, b) {
  return this.cL(this.Nx(a, b));
};
d.cL = function(a) {
  return-1 == (0 == a ? this.zg : a) ? "rtl" : "ltr";
};
d.RC = function(a, b, c) {
  return this.cM(null, a, b, c);
};
d.cM = function(a, b, c, e) {
  null == a && (a = this.Nx(b, c));
  return this.eL(a, b, c, e);
};
d.eL = function(a, b, c, e) {
  e = e || void 0 == e;
  var f = [];
  0 != a && a != this.zg ? (f.push(-1 == a ? "\u202b" : "\u202a"), f.push(b), f.push("\u202c")) : f.push(b);
  f.push(this.EK(b, a, c, e));
  return f.join("");
};
var Rk = function() {
};
Rk.prototype.getMessage = function(a, b) {
  return this.PL(a, b).message;
};
Rk.prototype.PL = function(a, b) {
  for (var c = [], e = {}, f = /{{(\w+?)}}/g, g = f.exec(a);null != g;) {
    b ? b[g[1]] && (e[g[1]] = b[g[1]]) : e[g[1]] = e[g[1]], g = f.exec(a);
  }
  for (var h in e) {
    h && (b && (a = a.replace(RegExp("{{" + h + "}}", "g"), e[h])), c.push(h));
  }
  return{message:a, bindings:c};
};
ca(Rk);
var bl = function(a) {
  var b = null;
  switch(a) {
    case "ok-button":
      b = Sk;
      break;
    case "cancel-button":
      b = Tk;
      break;
    case "save-button":
      b = Uk;
      break;
    case "set-up-button":
      b = Vk;
      break;
    case "continue-button":
      b = Wk;
      break;
    case "accept-button":
      b = Xk;
      break;
    case "reject-button":
      b = Yk;
      break;
    case "try-again-button":
      b = Zk;
      break;
    case "go-back-button":
      b = $k;
      break;
    case "factory-reset-button":
      b = al;
  }
  return b ? Rk.G().getMessage(b) : a;
}, kl = function(a) {
  var b = null;
  switch(a) {
    case "network-settings":
      b = cl;
      break;
    case "network-name":
      b = dl;
      break;
    case "default-network-name":
      b = el;
      break;
    case "join-other-option":
      b = fl;
      break;
    case "network-security":
      b = gl;
      break;
    case "network-password":
      b = hl;
      break;
    case "device-name":
      b = il;
      break;
    case "time-zone":
      b = jl;
  }
  return b ? Rk.G().getMessage(b) : a;
}, Sk = chrome.i18n.getMessage("1510649369757220975"), Tk = chrome.i18n.getMessage("2581331321407676861"), Uk = chrome.i18n.getMessage("2305903324116609221"), Vk = chrome.i18n.getMessage("3789857023572978851"), Wk = chrome.i18n.getMessage("3314869243569608808"), Xk = chrome.i18n.getMessage("8856112728107888349"), Yk = chrome.i18n.getMessage("7011099479208813570"), Zk = chrome.i18n.getMessage("7353352715326499943"), $k = chrome.i18n.getMessage("6392158336204151356"), al = chrome.i18n.getMessage("6098003662202355499"), 
cl = chrome.i18n.getMessage("7658849483698059550"), dl = chrome.i18n.getMessage("4300512446110878511"), el = chrome.i18n.getMessage("3056813071145570503"), fl = chrome.i18n.getMessage("1892665409887570919"), gl = chrome.i18n.getMessage("8674892226531837727"), hl = chrome.i18n.getMessage("145446834822743302"), il = chrome.i18n.getMessage("4625206607880030589"), jl = chrome.i18n.getMessage("7820166559915208245"), ll = chrome.i18n.getMessage("4840042422099634973"), ml = chrome.i18n.getMessage("641484418525870522"), 
nl = chrome.i18n.getMessage("222617673884818958"), ol = chrome.i18n.getMessage("3876918464251814494"), pl = chrome.i18n.getMessage("7658112972707584352"), ql = chrome.i18n.getMessage("6940187082832386692"), rl = chrome.i18n.getMessage("7411261365841051403"), sl = chrome.i18n.getMessage("3771614655693813994"), tl = chrome.i18n.getMessage("7594287593369134847"), ul = chrome.i18n.getMessage("2400591522298944337"), vl = chrome.i18n.getMessage("4044189874405410369"), wl = chrome.i18n.getMessage("1736891338067720192"), 
xl = chrome.i18n.getMessage("2780948202169029885"), yl = chrome.i18n.getMessage("3533191964283341369"), zl = chrome.i18n.getMessage("6678977886592726172"), Al = chrome.i18n.getMessage("5971299147202640199"), Bl = chrome.i18n.getMessage("6228766303262090274");
var Cl = function() {
  this.a = I("cv.PinGenerator");
};
d = Cl.prototype;
d.jy = function(a) {
  a = this.wK(a);
  if (!a) {
    return null;
  }
  a = this.yK(a, [{action:"step", code:48, optional:!1}, {action:"step", code:48, optional:!1}, {action:"skip", code:160, optional:!0}, {action:"skip", code:2, optional:!1}, {action:"skip", code:48, optional:!1}, {action:"skip", code:48, optional:!1}, {action:"skip", code:48, optional:!1}, {action:"skip", code:48, optional:!1}, {action:"return", code:48, optional:!1}]);
  return a ? (a = this.xK(a)) ? this.zK(a) : null : null;
};
d.wK = function(a) {
  a = a.replace(/[\r\n]/g, "");
  a = a.replace("-----BEGIN CERTIFICATE-----", "");
  a = a.replace("-----END CERTIFICATE-----", "");
  try {
    return Rf(a);
  } catch (b) {
    return this.a.w("Failed to convert the certificate from PEM to DER format"), null;
  }
};
d.Vz = function(a, b) {
  if (b + 1 >= a.length) {
    return this.a.w("Length byte out of certificate bounds: at " + b + "; cert length: " + a.length), null;
  }
  if (!(a[b + 1] & 128)) {
    return{length:a[b + 1], Ym:1};
  }
  var c = a[b + 1] & 127;
  if (b + c + 1 >= a.length) {
    return this.a.w("Length info out of certificate bounds at: " + b + " length bytes count: " + c + "; certificate length: " + a.length), null;
  }
  if (2 < c) {
    return this.a.w("Block length over 16 bits not allowed; at " + b), null;
  }
  for (var e = 0, f = 2;f <= c + 1;f++) {
    e = e << 8 | a[b + f];
  }
  return{length:e, Ym:c + 1};
};
d.yK = function(a, b) {
  var c = 0, e = -1;
  if (65535 < a.length) {
    return this.a.w("Certificate too long: " + a.length), null;
  }
  for (;b.length;) {
    var f = b.shift();
    e++;
    this.a.info("step: " + e + ", start: " + c);
    if (a[c] != f.code) {
      if (f.optional) {
        this.a.e("Skipping instruction " + f.code + " at step " + e);
        continue;
      }
      this.a.w("Expected certificate byte cert[" + c + "] to be " + f.code + ", but found " + a[c] + " at step " + e + " instead.");
      return null;
    }
    var g = this.Vz(a, c);
    if (!g) {
      return this.a.w("Invalid certificate block length at step " + e), null;
    }
    var h = c + g.length + g.Ym;
    if (h >= a.length) {
      return this.a.w("The certificate data block at " + c + " does not fit the certificate size."), null;
    }
    switch(f.action) {
      case "step":
        c += g.Ym + 1;
        continue;
      case "skip":
        c = h + 1;
        continue;
      case "return":
        return xb(a, c, h + 1);
      default:
        return this.a.w("Invalid certificate parsing intstruction: " + f.action), null;
    }
  }
  this.a.w("Incomplete certificate parsing instructions");
  return null;
};
d.xK = function(a) {
  var b = new Tf;
  b.update(a);
  return b.xo();
};
d.Jx = function(a) {
  for (var b = a.length, c = 0, e = 0;e < b - 1;e++) {
    c += a[e];
  }
  c = (a[b - 1] + 16 * c) % 24;
  a = 65 + c;
  73 <= a && a++;
  79 <= a && a++;
  return String.fromCharCode(a);
};
d.Kx = function(a) {
  return String.fromCharCode(50 + a[a.length - 1] % 8);
};
d.Fl = function(a, b, c, e) {
  for (var f = [], g = 0;g < e;g++) {
    f[g] = a[b + g] ^ a[c + g];
  }
  return f;
};
d.zK = function(a) {
  var b = [];
  b[0] = this.Jx(this.Fl(a, 0, 16, 4));
  b[1] = this.Kx(this.Fl(a, 4, 16, 4));
  b[2] = this.Jx(this.Fl(a, 8, 16, 4));
  b[3] = this.Kx(this.Fl(a, 12, 16, 4));
  return b;
};
var Dl = {id:"generic", priority:2, iconClass:"error-icon-default", title:ll, feedbackLink:{show:!0}, okButton:{show:!0, type:"try-again-button", next:"reinit-setup"}, cancelButton:{show:!0, type:"cancel-button", next:"cancel-setup"}}, El = {id:"no-wifi", priority:1, iconClass:"error-icon-network", title:ml, feedbackLink:{show:!1}, okButton:{show:!0, type:"try-again-button", next:"reinit-setup"}, cancelButton:{show:!0, type:"cancel-button", next:"cancel-setup"}}, Fl = {id:"no-chromecasts", priority:2, 
iconClass:"error-icon-default", title:nl, feedbackLink:{show:!0}, okButton:{show:!0, type:"try-again-button", next:"reinit-setup"}, cancelButton:{show:!0, type:"cancel-button", next:"cancel-setup"}}, Gl = {id:"no-chromecasts-setup-one-exists", priority:2, iconClass:"error-icon-default", title:ol, feedbackLink:{show:!0}, okButton:{show:!0, type:"ok-button", next:"cancel-setup"}, cancelButton:{show:!1, type:null, next:null}}, Hl = {id:"invalid-chromecast", priority:1, iconClass:"error-icon-default", 
title:ll, feedbackLink:{show:!0}, okButton:{show:!0, type:"ok-button", next:"cancel-setup"}, cancelButton:{show:!1, type:null, next:null}}, Il = {id:"chromecast-disconnected", priority:1, iconClass:"error-icon-default", title:pl, feedbackLink:{show:!0}, okButton:{show:!0, type:"try-again-button", next:"reinit-setup"}, cancelButton:{show:!0, type:"cancel-button", next:"cancel-setup"}}, Jl = {id:"chromecast-name-too-long", priority:3, iconClass:"error-icon-default", title:ql, feedbackLink:{show:!1}, 
okButton:{show:!0, type:"ok-button", next:"pop-previous-state"}, cancelButton:{show:!1, type:null, next:null}}, Kl = {id:"chromecast-connection-failed", priority:2, iconClass:"error-icon-network", title:rl, feedbackLink:{show:!0}, okButton:{show:!0, type:"try-again-button", next:"pop-previous-state"}, cancelButton:{show:!0, type:"cancel-button", next:"cancel-setup"}}, Ll = {id:"chromecast-unreachable", priority:1, iconClass:"error-icon-default", title:ll, feedbackLink:{show:!0}, okButton:{show:!0, 
type:"try-again-button", next:"reinit-setup"}, cancelButton:{show:!0, type:"cancel-button", next:"cancel-setup"}}, Ml = {id:"chromecast-save-failed", priority:1, iconClass:"error-icon-default", title:ll, feedbackLink:{show:!0}, okButton:{show:!0, type:"ok-button", next:"cancel-setup"}, cancelButton:{show:!1, type:null, next:null}}, Nl = {id:"connect-to-setup-network", priority:1, iconClass:"error-icon-default", title:sl, feedbackLink:{show:!1}, okButton:{show:!0, type:"try-again-button", next:"verify-setup"}, 
cancelButton:{show:!0, type:"go-back-button", next:"retry-setup"}}, Ol = {id:"vpn-connected", priority:1, iconClass:"error-icon-default", title:tl, feedbackLink:{show:!1}, okButton:{show:!0, type:"try-again-button", next:"verify-setup"}, cancelButton:{show:!1, type:null, next:null}}, Pl = {id:"success-dual-band-warning", priority:1, iconClass:"error-icon-none", title:ul, feedbackLink:{show:!1}, okButton:{show:!0, type:"ok-button", next:"succeeed-setup"}, cancelButton:{show:!1, type:null, next:null}}, 
Ql = {id:"setup-chromecast-not-found-on-dual-band", priority:1, iconClass:"error-icon-default", title:ll, feedbackLink:{show:!0}, okButton:{show:!0, type:"ok-button", next:"cancel-setup"}, cancelButton:{show:!1, type:null, next:null}}, Rl = {id:"setup-chromecast-not-found", priority:1, iconClass:"error-icon-default", title:vl, feedbackLink:{show:!0}, okButton:{show:!0, type:"try-again-button", next:"retry-setup"}, cancelButton:{show:!0, type:"cancel-button", next:"cancel-setup"}};
"undefined" != typeof angular && angular.module("dongleSetup", ["ngSanitize", "chrome_i18n"]);
var Sl = function(a) {
  I("cv").Gc(Qc);
  this.b = a;
  this.fq = Sj() ? "ChromeOS" : ec ? "Windows" : dc ? "Mac" : fc ? "Linux" : "Other";
  this.ga = new Yj(new W("http://192.168.255.249:8008"));
  this.H = chrome.networkingPrivate || null;
  this.yd = chrome.dial || null;
  this.Gg = Gk;
  this.K = null;
  this.a = I("cv.DongleSetupFlowCtrl");
  this.$e = this.Ma = null;
  this.fy(this.b);
  this.Fi();
  this.Gg.jq(null);
  (this.o = this.ey()) && this.o.start();
  (this.Ka = this.dy()) && this.Ka.start();
  this.af = new qk;
  this.lq = chrome && chrome.i18n ? chrome.i18n.getMessage("@@bidi_dir") : "ltr";
  this.df = new Qk("rtl" == this.lq);
  this.Pa = [];
  this.Ab = 0;
  this.gy() && this.gq();
  O(window, "beforeunload", t(this.Xc, this));
};
m("dongle.DongleSetupFlowCtrl", Sl, void 0);
Sl.$inject = ["$scope"];
d = Sl.prototype;
d.v = function(a) {
  this.a.e("Encountered an error: " + a.id);
  "flow-error" == this.b.flowId && this.b.error.priority <= a.priority || (this.Ma && this.Ma.Ei(!1), this.b.error = a, this.ta("flow-error"));
};
d.mq = function(a) {
  var b = function(a, b) {
    for (var f = 0;f < b.length;++f) {
      if (!(b[f] in a)) {
        return!1;
      }
    }
    return!0;
  };
  return a && b(a, ["public_key", "ssdp_udn", "name", "hotspot_bssid", "sign"]) && b(a.sign, ["certificate", "nonce", "signed_data"]) ? {certificate:a.sign.certificate, deviceSerial:a.ssdp_udn, nonce:a.sign.nonce, publicKey:a.public_key, signedData:a.sign.signed_data, deviceSsid:a.name, deviceBssid:a.hotspot_bssid} : (this.a.w("Missing required fields."), null);
};
d.hy = function() {
  w(!!this.o);
  var a = new zk(this.o, function(a, c) {
    return ra(a.Name, c.Name) || ra(a.GUID, c.GUID);
  }, this.na(function(a) {
    this.b.deviceList = a;
    if (1 == a.length) {
      this.b.device = a[0];
    } else {
      var c = this.b.device && this.b.device.GUID;
      this.b.device = C(this.b.deviceList, function(a) {
        return a.GUID == c;
      });
    }
  }), this.na(function(a) {
    switch(a) {
      case 0:
        this.v(El);
        break;
      case 1:
        a = this.b.castDeviceList && C(this.b.castDeviceList, function(a) {
          return a.isChromecast;
        }) ? Gl : Fl;
        this.v(a);
        break;
      default:
        this.a.e("Unknown hotspot scanner error"), this.v(Dl);
    }
  }));
  this.Pa.push(a);
  Tl(t(a.start, a));
};
d.Nl = function() {
  this.Ka && this.Ka.refresh();
};
d.Ps = function(a) {
  var b = this.lr();
  if (Mb(b)) {
    this.Rl(a);
  } else {
    var c = this.na(function(b, c) {
      c.pa() ? this.Rl(a) : (this.a.w("Saving non network settings failed"), this.v(Ml));
    }), b = new yk(t(this.ga.oz, this.ga, b), c, null);
    this.Pa.push(b);
    b.je();
  }
};
d.vy = function(a) {
  var b = new yk(t(this.ga.vE, this.ga), this.na(function(b, e) {
    e.pa() ? this.Ps(a) : this.v(Ml);
  }), null);
  this.Pa.push(b);
  b.je();
};
d.kq = function() {
  this.a.info("Verifying Chromecast visible on the selected network.");
  var a = t(function(a, b) {
    this.ga.Ll(a.ipAddress);
    this.vy(b);
  }, this), b = this.na(function(a) {
    switch(a) {
      case "network-connect-failed":
        this.v(Nl);
        break;
      case "vpn-connected":
        this.v(Ol);
        break;
      case "not-found":
        this.v(Rl);
        break;
      case "not-found-dual-band":
        this.v(Ql);
        break;
      default:
        this.a.w("Unknown setup network verifier error"), this.v(Dl);
    }
  }), c = 2 == this.Ab, e = "uuid:" + this.K.ssdp_udn, f = this.Cg().ssid;
  w(this.H);
  w(this.o);
  w(this.Ka);
  a = new Ek(this.H, this.o, this.Ka, a, b);
  this.Pa.push(a);
  a.start(e, f, c);
};
d.iq = function() {
  var a = this.Cg();
  this.b.customNetworkSecurity = a.wpa_auth;
  this.b.networkName = a.ssid;
  this.b.selectCustomNetwork = !0;
  this.b.disableConfirmPasswordButton = !0;
  this.ta("flow-invalid-password");
};
d.KC = function(a, b) {
  var c = this.na(function(a) {
    3 == a ? (this.Ma && this.Ma.Ei(!1), this.iq()) : this.v(Kl);
  }), e = t(function(a) {
    this.K = a;
    this.Ma && (this.Ma.cancel(), this.Ma = null);
    this.kq();
  }, this), f = 400 == b.Da();
  2 != this.Ab || f ? b.pa() ? (c = new Ak(this.ga, e, c), this.Pa.push(c), c.start()) : (this.a.w("connectWifi failed with status: " + b.Da()), this.na(function() {
    this.v(f ? Kl : Ll);
  })()) : e(this.K);
};
d.et = function(a, b, c) {
  var e = {ssid:a.ssid, wpa_auth:a.wpa_auth};
  this.b.selectCustomNetwork && (e.scan_ssid = 1);
  !c && b ? this.v(Hl) : (c && (e.enc_passwd = c), "wpa_cipher" in a && (e.wpa_cipher = a.wpa_cipher), "wpa_id" in a && (e.wpa_id = a.wpa_id), a = new yk(t(this.ga.JC, this.ga, e), t(this.KC, this), null), this.Pa.push(a), a.je(), this.Ka.Pl("uuid:" + this.K.ssdp_udn));
};
d.At = function() {
  this.ta("flow-setup-started");
  var a = this.Cg();
  if (this.dt(a)) {
    if (this.Ma && this.Ma.Ei(!0), ck(a)) {
      var b = this.b.networkPassword, c = this.mq(this.K);
      if (c) {
        var e;
        t: {
          switch(a.wpa_auth) {
            case 2:
            ;
            case 3:
              e = !!b && 5 <= b.length && 64 >= b.length && !b.match(/[^\x20-\x7E]/);
              break t;
            case 5:
            ;
            case 7:
              e = b ? 64 == b.length ? !b.match(/[^0-9A-Fa-f]/) : 8 <= b.length && 63 >= b.length && !b.match(/[^\x20-\x7E]/) : !1;
              break t;
            default:
              e = !0;
          }
        }
        e ? (a = new yk(t(this.H.verifyAndEncryptData, this.H, c, b), t(this.et, this, a, !0), null), this.Pa.push(a), a.start()) : this.iq();
      } else {
        this.v(Hl);
      }
    } else {
      this.et(a, !1, null);
    }
  } else {
    this.Ps(!1);
  }
};
d.lr = function() {
  var a = {};
  this.b.friendlyName && this.b.friendlyName != this.K.name && (a.name = this.b.friendlyName);
  this.b.timezone && this.b.timezone != this.K.timezone && (a.timezone = this.b.timezone);
  if (this.b.showOptInOptions) {
    var b = this.b.optIn;
    b.stats != this.K.opt_in.crash && (a.opt_in = a.opt_in || {}, a.opt_in.crash = b.stats);
    b.stats != this.K.opt_in.stats && (a.opt_in = a.opt_in || {}, a.opt_in.stats = b.stats);
    "device_id" in this.K.opt_in && b.deviceId != this.K.opt_in.device_id && (a.opt_in = a.opt_in || {}, a.opt_in.device_id = b.deviceId);
  }
  return a;
};
d.dt = function(a) {
  return a ? 60 != this.K.setup_state ? !0 : ck(a) ? !!this.b.networkPassword : a.ssid != this.K.ssid : !1;
};
d.Vu = function() {
  24 < this.b.friendlyName.length ? this.v(Jl) : (this.b.connecting = !0, this.At());
};
d.dF = function() {
  this.ta(this.b.previousFlowId);
  this.At();
};
d.bD = function(a) {
  w(!!this.H);
  var b = !1, c = new tk(this.af, this.ga, this.K, function(a) {
    var b;
    if (b = a) {
      a = a.wpa_auth, b = 0 != a && 4 != a && 6 != a && 8 != a;
    }
    return b;
  }, this.na(function(c, f) {
    b || (this.ta(a), b = !0);
    this.b.networkOptions = c;
    if (!this.b.selectCustomNetwork) {
      var g = this.b.network;
      if (g) {
        var h = C(c, function(a) {
          return a.value.ssid == g.ssid;
        }, this), g = h && h.value
      } else {
        0 <= f && (g = c[f].value);
      }
      this.b.network = g;
      this.b.networkName = g && g.ssid;
    }
  }), this.na(function() {
    this.v(Ll);
  }));
  this.Pa.push(c);
  c.start();
};
d.cD = function(a) {
  var b = this.na(function(b, e) {
    e.pa() ? (z(b, function(a) {
      a.display_string = this.df.RC(a.display_string);
    }, this), this.b.supportedTimezones = b, this.b.timezone = a) : (this.b.supportedTimezones = [], this.b.timezone = null);
  }), b = new yk(t(this.ga.QC, this.ga), b, function(a) {
    return "flow-edit-device" != a;
  });
  this.Pa.push(b);
  b.je();
};
d.ta = function(a) {
  a == this.b.flowId ? this.a.e("Updating flow to current state.") : (this.a.info("Flow updated to " + a), this.Pa = A(this.Pa, function(b) {
    var c = b.Ic(a);
    c && b.cancel();
    return!c;
  }), "flow-setup-started" != a && (!this.b.flowId && a ? this.rq(!0) : !a && this.b.flowId && this.rq(!1), this.b.previousFlowId = this.b.flowId, this.b.flowId = a, a || (this.Ab = 0, this.Fi(), this.Ma && (this.Ma.cancel(), this.Ma = null), this.o && this.o.sq(!0), this.dq(this.b), this.K = null, this.b.connecting = !1, this.Nl()), "flow-select-device" == a && (this.Fi(), this.Ma && (this.Ma.cancel(), this.Ma = null), this.b.device = null, this.b.deviceToSetup = "", this.o && this.o.sq(!1), this.hy()), 
  "flow-error" == a && (this.b.connecting = !1)));
};
d.gF = function() {
  return this.K ? !this.dt(this.Cg()) && Mb(this.lr()) : !0;
};
d.cF = function(a) {
  this.b.network = a.value;
  this.b.networkName = a.name;
  this.b.showNetworkOptions = !1;
  this.b.selectCustomNetwork = !1;
  this.b.networkPassword = "";
};
d.bF = function() {
  this.b.network = null;
  this.b.networkName = null;
  this.b.customNetworkSecurity = 1;
  this.b.selectCustomNetwork = !0;
  this.b.showNetworkOptions = !1;
  this.b.networkPassword = "";
};
d.Cg = function() {
  return this.b.selectCustomNetwork ? this.b.networkName ? {ssid:this.b.networkName, wpa_auth:this.b.customNetworkSecurity} : null : this.b.network;
};
d.hF = function() {
  return!this.b.selectCustomNetwork && this.b.network && this.K && this.K.connected && this.b.network.ssid == this.K.ssid && 60 == this.K.setup_state;
};
d.fF = function() {
  return!ck(this.b.selectCustomNetwork ? {ssid:"", wpa_auth:this.b.customNetworkSecurity} : this.b.network);
};
d.VE = function(a, b) {
  var c;
  a ? (c = (a.signal_level || 0) + 120, 100 < c && (c = 100), 0 > c && (c = 0), c = Math.ceil(c / 25), c = {"background-position":"0 " + -(b + 25 * c) + "px"}) : c = {display:"none"};
  return c;
};
d.jF = function(a) {
  this.b.showNetworkOptions = !this.b.showNetworkOptions;
  this.b.showNetworkOptions && this.af.JD();
  a.stopPropagation();
};
d.WE = function(a) {
  return a ? this.df.vx(a) : this.lq;
};
d.fy = function(a) {
  "ChromeOS" == this.fq ? (a.allowAdd = !0, a.allowEdit = !0) : (a.allowAdd = !1, a.allowEdit = !1);
  a.onAddDevice = t(this.gq, this);
  a.onEditDevice = t(this.$E, this);
  a.onSetup = t(this.eF, this);
  a.onCancel = t(this.YE, this);
  a.onContinue = t(this.qq, this);
  a.onFactoryReset = t(this.aF, this);
  a.onNetworkOK = t(this.Vu, this);
  a.onPasswordConfirmed = t(this.dF, this);
  a.updateFlow = t(this.ta, this);
  a.updateFlowAfterError = t(this.kF, this);
  a.onSave = t(this.Vu, this);
  a.onDeviceSelected = t(this.ZE, this);
  a.shouldHidePasswordField = t(this.hF, this);
  a.shouldDisablePasswordField = t(this.fF, this);
  a.networkNeedsPassword = ck;
  a.shouldDisableSaveButton = t(this.gF, this);
  a.toggleNetworkOptions = t(this.jF, this);
  a.onNetworkSelected = t(this.cF, this);
  a.onJoinOtherNetwork = t(this.bF, this);
  a.getNetworkIconStyle = t(this.VE, this);
  a.getNetwork = t(this.Cg, this);
  a.startSetup = t(this.pq, this);
  a.getButtonLabel = bl;
  a.getDirection = t(this.WE, this);
  a.getInputLabel = kl;
  a.os = this.fq;
  a.networkingApiSupported = !!this.H;
  a.flowId = null;
  a.castDeviceList = [];
  a.activeNetworkName = null;
  a.customNetworkSupportedSecurity = [{value:1, name:xl}, {value:2, name:yl}, {value:3, name:zl}, {value:5, name:Al}, {value:7, name:Bl}];
  this.dq(a);
};
d.dq = function(a) {
  a.device = null;
  a.deviceList = [];
  a.networkOptions = [];
  a.network = null;
  a.networkName = null;
  a.networkPassword = "";
  a.showNetworkPassword = !1;
  a.disableConfirmPasswordButton = !0;
  a.friendlyName = "";
  a.castDeviceList && 1 == a.castDeviceList.length || (a.castDevice = null);
  a.connecting = !1;
  a.error = {};
  a.deviceToSetup = "";
  a.nameAfterFactoryReset = null;
  a.showNetworkOptions = !1;
  a.selectCustomNetwork = !1;
  a.customNetworkSecurity = 1;
  a.timezone = null;
  a.supportedTimezones = [];
  a.showOptInOptions = !1;
  a.optIn = {stats:!0, deviceId:!1};
  a.pin = [];
};
d.ey = function() {
  if (!this.H) {
    return this.a.e("Failed to create a network monitor: networking api not available."), null;
  }
  var a = new kk(this.H);
  O(a, "wifi-connected", this.na(function(a) {
    this.Nl();
    this.b.activeNetworkName = a.Ki.Name;
  }));
  O(a, "wifi-disconnected", this.na(function() {
    this.b.activeNetworkName = null;
    this.b.castDeviceList = [];
    this.Fi();
  }));
  return a;
};
d.dy = function() {
  if (!this.yd) {
    return null;
  }
  var a = new ik(this.yd);
  O(a, "device-list-updated", this.na(function(a) {
    a = a.st;
    var c = null;
    if (1 == a.length) {
      c = a[0];
    } else {
      if (this.b.castDevice) {
        var e = this.b.castDevice.udn, c = C(a, function(a) {
          return a.udn == e;
        })
      }
    }
    this.b.castDeviceList = a;
    this.b.castDevice = c;
  }));
  return a;
};
d.gq = function() {
  this.H ? (this.Ab = 1, this.ta("flow-select-device")) : this.ta("flow-network-api-unavailable");
};
d.cq = function(a, b, c) {
  c.pa() ? (this.K = b, (b = this.mq(b)) ? b.nonce != a ? (this.a.w("Invalid nonce value received."), this.na(function() {
    this.v(Hl);
  })()) : (a = new yk(t(this.H.verifyDestination, this.H, b), t(this.Zy, this), null), this.Pa.push(a), a.start()) : this.na(function() {
    this.v(Hl);
  })()) : (this.a.w("eurekaInfo failed."), this.na(function() {
    this.v(Ll);
  })());
};
d.Zy = function(a) {
  if (a) {
    if (this.ga.setVersion(this.K.version.toString()), this.ly(), 2 != this.Ab && (a = new Ck(this.ga), this.Pa.push(a), a.start()), dk(this.K.setup_state)) {
      var b = this.ky().jy(this.K.sign.certificate);
      b ? this.na(function() {
        this.b.pin = b;
        this.ta("flow-confirm-pin");
      })() : this.na(function() {
        this.v(Dl);
      })();
    } else {
      this.a.info("WPA already configured. Skip pin."), this.na(this.pq)();
    }
  } else {
    this.K = null, this.na(function() {
      this.v(Hl);
    })();
  }
};
d.pq = function() {
  this.ta("flow-connect-to-device");
  var a = null, a = 1 == this.Ab ? "flow-select-network" : "flow-edit-device";
  this.Ma && this.Ma.Ei(!1);
  this.b.pin = [];
  this.b.connecting = !1;
  this.b.timezone = null;
  this.b.supportedTimezones = [];
  this.b.selectCustomNetwork = null;
  this.b.network = null;
  this.b.networkPassword = "";
  this.b.showNetworkPassword = !1;
  this.b.showOptInOptions = "flow-edit-device" == a;
  this.K.opt_in && (this.b.optIn = {stats:this.K.opt_in.crash && this.K.opt_in.stats, deviceId:this.K.opt_in.device_id});
  this.b.friendlyName = 1 != this.Ab ? this.K.name : "";
  "flow-edit-device" == a && this.cD(this.K.timezone);
  this.bD(a);
};
d.$E = function() {
  if (this.H) {
    w(!!this.o);
    this.b.deviceToSetup = this.b.castDevice.name;
    this.ta("flow-connect-to-device");
    this.ga.Ll(this.b.castDevice.ipAddress);
    this.o.Us();
    var a = this.bq(), b = t(function(a, b, c) {
      c.pa() && 61 == b.setup_state ? (this.$e = b.hotspot_bssid, this.Ab = 3, this.na(function() {
        this.ta("flow-setup-notice");
      })()) : (this.Ab = 2, this.cq(a, b, c));
    }, this, a), c = t(function(b) {
      return this.ga.Ci(b, ["sign"], a);
    }, this), b = new yk(c, b, null);
    this.Pa.push(b);
    b.je();
  } else {
    this.ta("flow-network-api-unavailable");
  }
};
d.eF = function() {
  w(!!this.o);
  this.b.deviceToSetup = this.b.device.Name;
  this.$e = this.b.device.WiFi.BSSID;
  this.o.Us();
  this.ta("flow-setup-notice");
};
d.YE = function() {
  this.ta(null);
};
d.qq = function() {
  this.ta("flow-connect-to-device");
  this.$e || this.a.e("Hotspot BSSID is not set");
  if (bk({WiFi:{BSSID:this.$e}})) {
    var a = t(function(a) {
      this.a.info("Hotspot connected.");
      this.ga.Ll("192.168.255.249");
      w(!!this.H);
      w(!!this.o);
      var b = this.na(t(this.v, this, Il));
      this.Ma = new Bk(this.H, this.o, b);
      this.Ma.start(a);
      var c = this.bq();
      a = t(function(a) {
        return this.ga.Ci(a, ["sign"], c);
      }, this);
      a = new yk(a, t(this.cq, this, c), null);
      this.Pa.push(a);
      a.je();
    }, this), b = this.na(t(this.v, this, Il)), c = t(function(a) {
      return a && a.WiFi && !ra(a.WiFi.BSSID, this.$e || "");
    }, this);
    w(!!this.H);
    w(!!this.o);
    a = xk(this.H, this.o, a, b);
    this.Pa.push(a);
    a.start(c);
  } else {
    this.a.w("Trying to connect to non-Chromekey network."), this.v(Hl);
  }
};
d.aF = function() {
  w(!!this.o);
  if (this.WB(wl)) {
    this.b.nameAfterFactoryReset = null;
    this.ta("flow-factory-reset");
    var a = "uuid:" + this.K.ssdp_udn, b = this.na(function(b) {
      this.Ka.Pl(a);
      this.Nl();
      this.b.nameAfterFactoryReset = b.Name;
    }), c = this.na(function() {
      this.v(Dl);
    }), e = [], f = this.K.hotspot_bssid, g = function(a) {
      return!qb(e, a.Name) && !ra(f, a.WiFi.BSSID);
    }, h = this.o.Kl(g);
    z(h, function(a) {
      e.push(a.Name);
    });
    h = t(function(a, e) {
      w(!!this.o);
      if (e.pa()) {
        var f = new uk(this.o, b, c);
        this.Pa.push(f);
        f.start(g, 6E4, 18E4);
      } else {
        c();
      }
    }, this);
    h = new yk(t(this.ga.ZB, this.ga, "fdr"), h, null);
    this.Pa.push(h);
    h.je();
  }
};
d.kF = function(a) {
  this.b.error = {};
  if ("flow-error" != this.b.flowId) {
    this.a.w("Trying to invoke error action " + a + " from non-error flow " + this.b.flowId), this.v(Dl);
  } else {
    var b = this.b.previousFlowId;
    if ("verify-setup" != a && "retry-setup" != a || "flow-edit-device" != !b || "flow-select-network" != !b) {
      switch(a) {
        case "pop-previous-state":
          this.ta(b);
          break;
        case "verify-setup":
          this.b.connecting = !0;
          this.ta(b);
          this.kq();
          break;
        case "retry-setup":
          this.$e = this.K.hotspot_bssid;
          2 == this.Ab && (this.Ab = 3);
          this.qq();
          break;
        case "reinit-setup":
          this.ta(1 == this.Ab ? "flow-select-device" : null);
          break;
        case "cancel-setup":
          this.ta(null);
          break;
        case "succeeed-setup":
          this.Rl(!1);
          break;
        default:
          this.a.w("Invalid error action found: " + a), this.v(Dl);
      }
    } else {
      this.a.w("Trying to perform error action " + a + " with wrong pre-error flow: " + b), this.v(Dl);
    }
  }
};
d.ZE = function(a, b, c) {
  this.b[c] = this.b[b][a];
};
d.Rl = function(a) {
  this.o && this.o.Ar();
  a ? this.v(Pl) : (1 == this.Ab && chrome.tabs.getCurrent(function(a) {
    w(!!a);
    chrome.windows.update(a.windowId, {focused:!0}, function() {
      chrome.tabs.update(a.id, {url:"https://cast.google.com/chromecast/setup?np=fi", active:!0});
    });
  }), this.ta(null));
};
d.gy = function() {
  var a = function(a) {
    return a && a.location && a.location.href ? "true" == (new W(a.location.href)).Yl().get("showFlow") : !1;
  };
  return this.o && (a(window) || a(window.parent));
};
d.Xc = function() {
  this.ta(null);
  this.o && (Ie(this.o), this.o.$());
  this.Ka && (Ie(this.Ka), this.Ka.$());
  this.af.$();
  this.Gg.jq(this.Gg.lt());
  this.b = null;
};
d.ly = function() {
  var a = null;
  this.K && (a = this.ga.QG("/setup/get_log_report").toString());
  this.Gg.Qv(a);
};
d.rq = function(a) {
  var b = window;
  b && b.parent && b.parent.notifyChromekeySetupActive && b.parent.notifyChromekeySetupActive(a);
};
d.Fi = function() {
  this.Gg.Qv(null);
};
d.WB = function(a) {
  return confirm(a);
};
d.na = function(a) {
  var b = this, c = this.b;
  return function() {
    var e = arguments;
    c.$apply(function() {
      a.apply(b, e);
    });
  };
};
d.ky = function() {
  this.Zx || (this.Zx = new Cl);
  return this.Zx;
};
d.bq = function() {
  return Ka();
};
var Tl = function(a) {
  setTimeout(a, 0);
};
var Ul = function(a) {
  this.so = new D;
  this.iu = new D;
  this.ei = new D;
  this.bx = a;
};
d = Ul.prototype;
d.A = function() {
  var a = this.bx.EJ();
  a && this.ei.Wk(a);
};
d.lu = function(a, b) {
  return a + " : " + b;
};
d.kE = function(a) {
  var b = Ka();
  this.ei.set(a, b);
  this.bx.WJ(this.ei.XJ());
};
d.yE = function(a, b) {
  w(b.Bd());
  this.ei.Na(a) || this.kE(a);
  var c = this.ei.get(a), e = new Tf;
  e.update(b.Bd());
  e.update(c);
  c = e.xo();
  if (!ea(c)) {
    throw Error("encodeByteArray takes an array as a parameter");
  }
  Qf();
  for (var e = Nf, f = [], g = 0;g < c.length;g += 3) {
    var h = c[g], l = g + 1 < c.length, p = l ? c[g + 1] : 0, B = g + 2 < c.length, G = B ? c[g + 2] : 0, T = h >> 2, h = (h & 3) << 4 | p >> 4, p = (p & 15) << 2 | G >> 6, G = G & 63;
    B || (G = 64, l || (p = 64));
    f.push(e[T], e[h], e[p], e[G]);
  }
  c = "uuid:" + f.join("");
  this.so.set(this.lu(a, b.c()), c);
  this.iu.set(c, b.c());
};
d.Gm = function(a, b) {
  var c = this.lu(a, b.c());
  this.so.Na(c) || this.yE(a, b);
  return this.so.get(c);
};
d.Xw = function(a) {
  return this.iu.get(a, null);
};
var Vl = function(a, b, c, e) {
  this.source = a;
  this.target = b;
  this.type = c;
  this.content = e;
  this.windowUrl = null;
};
var Wl = function() {
  this.Zb = [];
  this.xc = {};
};
v(Wl, M);
d = Wl.prototype;
d.zi = 1;
d.wl = 0;
d.Bx = function(a, b, c) {
  var e = this.xc[a];
  e || (e = this.xc[a] = []);
  var f = this.zi;
  this.Zb[f] = a;
  this.Zb[f + 1] = b;
  this.Zb[f + 2] = c;
  this.zi = f + 3;
  e.push(f);
  return f;
};
d.Cx = function(a, b, c) {
  if (a = this.xc[a]) {
    var e = this.Zb;
    if (a = C(a, function(a) {
      return e[a + 1] == b && e[a + 2] == c;
    })) {
      return this.wi(a);
    }
  }
  return!1;
};
d.wi = function(a) {
  if (0 != this.wl) {
    return this.ii || (this.ii = []), this.ii.push(a), !1;
  }
  var b = this.Zb[a];
  if (b) {
    var c = this.xc[b];
    c && tb(c, a);
    delete this.Zb[a];
    delete this.Zb[a + 1];
    delete this.Zb[a + 2];
  }
  return!!b;
};
d.Sm = function(a, b) {
  var c = this.xc[a];
  if (c) {
    this.wl++;
    for (var e = xb(arguments, 1), f = 0, g = c.length;f < g;f++) {
      var h = c[f];
      this.Zb[h + 1].apply(this.Zb[h + 2], e);
    }
    this.wl--;
    if (this.ii && 0 == this.wl) {
      for (;c = this.ii.pop();) {
        this.wi(c);
      }
    }
    return 0 != f;
  }
  return!1;
};
d.clear = function(a) {
  if (a) {
    var b = this.xc[a];
    b && (z(b, this.wi, this), delete this.xc[a]);
  } else {
    this.Zb.length = 0, this.xc = {};
  }
};
d.L = function(a) {
  if (a) {
    var b = this.xc[a];
    return b ? b.length : 0;
  }
  a = 0;
  for (b in this.xc) {
    a += this.L(b);
  }
  return a;
};
d.k = function() {
  Wl.t.k.call(this);
  delete this.Zb;
  delete this.xc;
  delete this.ii;
};
var Xl = function(a) {
  this.Ie = a;
  this.lc = new Wl;
  this.a = I("cv.Messenger-" + a);
};
v(Xl, M);
d = Xl.prototype;
d.A = function() {
  chrome.extension.onMessage.addListener(t(this.nn, this));
};
d.ss = function(a, b, c, e) {
  w("background" == this.Ie, "Only background page can talk to tab");
  chrome.tabs.sendMessage(a, JSON.stringify(new Vl(this.Ie, "content", b, c)), e || n);
};
d.BK = function(a, b, c, e) {
  this.a.C("Sending message to " + a + ": " + JSON.stringify(c));
  chrome.extension.sendMessage(JSON.stringify(new Vl(this.Ie, a, b, c)), e || n);
};
d.RD = function(a, b, c, e) {
  w("background" == this.Ie, "Only background page can talk to other extension pages");
  w("background" != a, "background page can NOT send message to itself");
  this.BK(a, b, c, e);
};
d.nn = function(a, b) {
  w(s(a), "Expect a string. Got " + JSON.stringify(a));
  var c = JSON.parse(a);
  if (this.Ie == c.target && this.Ie != c.source && ("background" == this.Ie || "background" == c.source)) {
    var e;
    b.tab ? (e = b.tab, c.windowUrl && e.url != c.windowUrl && (e.url = c.windowUrl, e.title = "", e.favIconUrl = "")) : e = {id:-1};
    this.a.mC("Getting message from tab " + e.id + ": " + JSON.stringify(c));
    this.lc.Sm(c.type, e, c.content);
  }
};
d.listen = function(a, b, c) {
  return this.lc.Bx(a, b, c);
};
d.Zc = function(a, b, c) {
  return this.lc.Cx(a, b, c);
};
d.fg = function(a) {
  return this.lc.wi(a);
};
d.k = function() {
  Xl.t.k.call(this);
  this.lc.$();
};
var Yl = function() {
  this.Ub = t(this.Kd, this);
  this.Sr = t(this.Ns, this);
  this.th = !1;
  this.ed = 0;
  this.a = I("cv2.DeviceService");
};
v(Yl, M);
d = Yl.prototype;
d.fG = function(a) {
  this.lx = a;
};
d.hG = function(a) {
  this.gh = a;
};
d.gG = function(a) {
  this.Uk = a;
};
d.A = function() {
  w(this.lx);
  w(this.gh);
  w(this.Uk);
  this.start();
};
d.start = function() {
  this.th ? this.a.info("Already started.") : (this.a.info("Starting..."), this.th = this.Kf());
};
d.stop = function() {
  this.th ? (this.Dd(), this.th = !1) : this.a.info("Was not started.");
};
d.k = function() {
  this.stop();
};
d.discoverNow = function() {
  this.th ? (this.a.C("Discover now"), this.Ls()) : this.a.info("Not started. Ignoring discover().");
};
d.Fn = function() {
};
d.Kd = function(a) {
  this.a.info("onDeviceList returned " + a.length + " devices");
  this.a.C("....the list is: " + JSON.stringify(a));
  0 == a.length ? this.Lr() : (this.ed += a.length, z(a, t(function(a) {
    this.Fn(a, t(this.pn, this), t(this.Aj, this));
  }, this)));
};
d.pn = function(a) {
  0 != this.ed && (this.lx(a), this.ed--, 0 == this.ed && this.gh());
};
d.Aj = function(a) {
  0 != this.ed && (this.a.e("Unable to process device: " + a), this.ed--, 0 == this.ed && this.gh());
};
d.Ns = function() {
};
d.Lr = function() {
  this.wx();
  this.ed = 0;
  this.Uk();
};
var Zl = function() {
  N.call(this, "receiver_list");
};
v(Zl, N);
var $l = function(a) {
  N.call(this, "remove_receiver");
  this.receiver = a;
};
v($l, N);
var am = function(a) {
  Q.call(this);
  this.Xk = a;
  this.q = new R(this);
  this.jb = new D;
  this.nf = new Yb;
  this.Xk.fG(t(this.eG, this));
  this.Xk.hG(t(this.gh, this));
  this.Xk.gG(t(this.Uk, this));
};
v(am, Q);
d = am.prototype;
d.a = I("cv2.DiscoveryService");
d.Dc = function() {
  var a = A(this.jb.N(), function(a) {
    return!a.Bk();
  });
  a.sort(function(a, c) {
    return a.c() < c.c() ? -1 : a.c() == c.c() ? 0 : 1;
  });
  return a;
};
d.refresh = function() {
  this.Xk.discoverNow();
};
d.register = function(a) {
  this.jb.Na(a.c()) || (this.a.info("Registering receiver with id " + a.c()), this.jb.set(a.c(), a), this.Ef());
};
d.Ir = function(a) {
  for (var b = this.jb.kb(), c = 0, e = b.length;c < e;c++) {
    var f = this.jb.get(b[c]);
    f && a(f) && (this.jb.remove(b[c]), this.Ks(f));
  }
  this.Ef();
};
d.gf = function(a) {
  return(a = this.jb.get(a, null)) && a.Bk() ? null : a;
};
d.Ql = function(a) {
  return C(this.jb.N(), function(b) {
    return!b.Bk() && b.Bd() == a;
  });
};
d.HG = function(a) {
  return A(this.Dc(), function(b) {
    return "available" == b.Wm(a);
  });
};
d.Qq = function() {
  this.Ef();
};
d.eG = function(a) {
  var b = !1;
  this.nf.add(a.c());
  var c = this.jb.get(a.c());
  c ? c.equals(a) || (this.a.info("Merging with existing receiver " + c.c()), c.zj(a), b = !0) : (this.a.info("Adding new receiver " + a.c()), this.jb.set(a.c(), a), b = !0);
  b && this.Ef();
};
d.gh = function() {
  this.a.info("onDevicesFinished");
  this.Rs(this.nf) && this.Ef();
  this.nf.clear();
};
d.Uk = function() {
  this.nf.clear();
  this.Rs(this.nf) && this.Ef();
};
d.Rs = function(a) {
  for (var b = !1, c = this.jb.kb(), e = 0, f = c.length;e < f;e++) {
    if (!a.contains(c[e])) {
      var g = this.jb.get(c[e]);
      g.dh() || (g.Os(!0), this.a.info("Removing receiver " + c[e] + " from map."), this.jb.remove(c[e]), this.Ks(g), b = !0);
    }
  }
  return b;
};
d.Ef = function() {
  this.dispatchEvent(new Zl(this.Dc()));
};
d.Ks = function(a) {
  this.dispatchEvent(new $l(a));
};
d.k = function() {
  this.nf.clear();
  this.jb.clear();
  this.jb = null;
  this.q.$();
  am.t.k.call(this);
};
var bm = function(a, b) {
  this.type = a;
  this.message = b;
}, dm = function(a, b, c, e, f, g, h, l, p) {
  this.id = a;
  this.receiver = new cm(b.id, b.uniqueId, Ca(b.name));
  this.activityType = c;
  this.iconUrl = e || null;
  this.title = f || "";
  this.isInLaunch = g;
  this.mediaPlayerStatus = h || null;
  this.tabId = l || null;
  this.isLocal = p;
}, cm = function(a, b, c) {
  this.id = a;
  this.uniqueId = b;
  this.name = c;
}, em = function(a, b, c, e, f, g, h) {
  this.id = a;
  this.title = b;
  this.message = c;
  this.defaultActionText = e;
  this.optActionText = f || "";
  this.severity = g || "fatal";
  this.activityId = h || null;
}, fm = function(a, b) {
  this.receiver = a;
  this.activity = b;
}, gm = function(a, b, c, e) {
  this.captureSurface = a || "tab";
  this.lowFpsMode = b || !1;
  this.castAppNotificationDismissed = c || !1;
  this.mirrorQualityId = e || Od.id;
}, hm = function(a, b, c, e, f, g) {
  this.receiverActs = a || [];
  this.issue = b;
  this.isV1AppInTab = f || !1;
  this.isV2AppInTab = !!g;
  this.v2AppDomain = g || null;
  this.castOfCurrentTab = c;
  this.settings = e || new gm("tab");
}, im = function() {
  this.timeProgress = !1;
  this.muted = null;
  this.hasPause = !0;
};
var jm = function(a, b, c, e, f) {
  this.ap = a;
  this.ri = b;
  this.ti = c;
  this.ya = e;
  this.si = this.qg = !1;
  if (!(a = f)) {
    for (b = a = 0;b < c.length;++b) {
      a = 31 * a + c.charCodeAt(b), a %= 4294967296;
    }
    a = "receiver.v2." + a;
  }
  this.da = a;
}, km = function(a) {
  var b = C(a.serviceData, function(a) {
    return 0 == a.lastIndexOf("id=", 0);
  }), c = a.serviceName.indexOf("._googlecast.");
  if (!b || -1 == c) {
    return null;
  }
  var e = a.serviceHostPort.substring(a.serviceHostPort.indexOf(":") + 1), c = a.serviceName.substring(0, c), b = b.substring(3).toLowerCase();
  return new jm(a.ipAddress, c, b, "casts://" + a.ipAddress + ":" + e);
};
d = jm.prototype;
d.isLocal = function() {
  return!0;
};
d.uw = function() {
  return!0;
};
d.c = function() {
  return this.da;
};
d.Bd = function() {
  return this.ti;
};
d.zk = function() {
  return this.ya;
};
d.Ad = function() {
  return this.ri;
};
d.Bk = function() {
  return this.qg;
};
d.dh = function() {
  return this.si;
};
d.Rm = function() {
  return!1;
};
d.equals = function(a) {
  return a instanceof jm ? this.ti == a.ti && this.ri == a.ri && this.qg == a.qg && this.ya == a.ya && this.si == a.si : !1;
};
d.zj = function(a) {
  a instanceof jm && (this.ti = a.ti, this.da = a.da, this.ri = a.ri, this.qg = a.qg, this.ya = a.ya, this.ap = a.ap, this.si = a.si);
};
d.Os = function(a) {
  this.qg = a;
};
d.FD = function() {
  return this.ap;
};
var lm = function() {
  Yl.call(this);
  this.a = I("cv2.MdnsService");
  this.en = t(this.pC, this);
  this.jc = this.Xr = null;
};
v(lm, Yl);
lm.prototype.pC = function(a) {
  this.jc && 1E3 > u() - this.jc || this.Ub(a);
};
var mm = {serviceType:"_googlecast._tcp.local"};
d = lm.prototype;
d.Kf = function() {
  if (q(chrome.mdns)) {
    return chrome.mdns.onServiceList.addListener(this.en, mm), this.Xr = setInterval(t(this.discoverNow, this), 5E4), !0;
  }
  this.a.e("MDNS API not available, aborting start...");
  return!1;
};
d.Dd = function() {
  q(chrome.mdns) && (chrome.mdns.onServiceList.removeListener(this.Ub), clearInterval(this.Xr));
};
d.Ls = function() {
  q(chrome.mdns) && (this.jc = u(), chrome.mdns.onServiceList.removeListener(this.en), chrome.mdns.onServiceList.addListener(this.en, mm));
};
d.wx = function() {
};
d.Fn = function(a, b, c) {
  (a = km(a)) ? b(a) : c("Invalid MDNS service");
};
chrome.cast.fi = {TAB_AND_ORIGIN_SCOPED:"tab_and_origin_scoped", ORIGIN_SCOPED:"origin_scoped", PAGE_SCOPED:"page_scoped"};
m("chrome.cast.AutoJoinPolicy", chrome.cast.fi, void 0);
chrome.cast.Zg = {CREATE_SESSION:"create_session", CAST_THIS_TAB:"cast_this_tab"};
m("chrome.cast.DefaultActionPolicy", chrome.cast.Zg, void 0);
chrome.cast.Wp = {VIDEO_OUT:"video_out", AUDIO_OUT:"audio_out", VIDEO_IN:"video_in", AUDIO_IN:"audio_in"};
m("chrome.cast.Capability", chrome.cast.Wp, void 0);
chrome.cast.oa = {CANCEL:"cancel", TIMEOUT:"timeout", API_NOT_INITIALIZED:"api_not_initialized", INVALID_PARAMETER:"invalid_parameter", EXTENSION_NOT_COMPATIBLE:"extension_not_compatible", EXTENSION_MISSING:"extension_missing", RECEIVER_UNAVAILABLE:"receiver_unavailable", SESSION_ERROR:"session_error", CHANNEL_ERROR:"channel_error", LOAD_MEDIA_FAILED:"load_media_failed"};
m("chrome.cast.ErrorCode", chrome.cast.oa, void 0);
chrome.cast.Xo = {AVAILABLE:"available", UNAVAILABLE:"unavailable"};
m("chrome.cast.ReceiverAvailability", chrome.cast.Xo, void 0);
chrome.cast.FL = {CHROME:"chrome", IOS:"ios", ANDROID:"android"};
m("chrome.cast.SenderPlatform", chrome.cast.FL, void 0);
chrome.cast.VERSION = [1, 0];
m("chrome.cast.VERSION", chrome.cast.VERSION, void 0);
chrome.cast.Yg = function(a, b) {
  this.code = a;
  this.description = b || null;
  this.details = null;
};
m("chrome.cast.Error", chrome.cast.Yg, void 0);
chrome.cast.EL = function(a) {
  this.platform = a;
  this.packageId = this.url = null;
};
m("chrome.cast.SenderApplication", chrome.cast.EL, void 0);
chrome.cast.sL = function(a) {
  this.url = a;
  this.width = this.height = null;
};
m("chrome.cast.Image", chrome.cast.sL, void 0);
chrome.cast.Qx = function(a, b) {
  this.level = q(a) ? a : null;
  this.muted = q(b) ? b : null;
};
m("chrome.cast.Volume", chrome.cast.Qx, void 0);
var nm = {STOP_MEDIA:"STOP", MEDIA_SET_VOLUME:"SET_VOLUME", MEDIA_GET_STATUS:"GET_STATUS"};
var om = function(a, b, c) {
  this.sessionId = a;
  this.namespaceName = b;
  this.message = c;
};
var pm = function(a) {
  this.type = "STOP";
  this.requestId = null;
  this.sessionId = a || null;
};
chrome.cast.media.vL = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
m("chrome.cast.media.MediaCommand", chrome.cast.media.vL, void 0);
chrome.cast.media.Ag = {GENERIC:0, TV_SHOW:1, MOVIE:2, MUSIC_TRACK:3, PHOTO:4};
m("chrome.cast.media.MetadataType", chrome.cast.media.Ag, void 0);
chrome.cast.media.Px = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
m("chrome.cast.media.PlayerState", chrome.cast.media.Px, void 0);
chrome.cast.media.CL = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
m("chrome.cast.media.ResumeState", chrome.cast.media.CL, void 0);
chrome.cast.media.Im = {BUFFERED:"buffered", LIVE:"live", OTHER:"other"};
m("chrome.cast.media.StreamType", chrome.cast.media.Im, void 0);
chrome.cast.media.zL = function() {
  this.customData = null;
};
m("chrome.cast.media.PauseRequest", chrome.cast.media.zL, void 0);
chrome.cast.media.BL = function() {
  this.customData = null;
};
m("chrome.cast.media.PlayRequest", chrome.cast.media.BL, void 0);
chrome.cast.media.DL = function() {
  this.customData = this.resumeState = this.currentTime = null;
};
m("chrome.cast.media.SeekRequest", chrome.cast.media.DL, void 0);
chrome.cast.media.HL = function() {
  this.customData = null;
};
m("chrome.cast.media.StopRequest", chrome.cast.media.HL, void 0);
chrome.cast.media.JL = function(a) {
  this.volume = a;
  this.customData = null;
};
m("chrome.cast.media.VolumeRequest", chrome.cast.media.JL, void 0);
chrome.cast.media.tL = function(a) {
  this.type = "LOAD";
  this.sessionId = this.requestId = null;
  this.media = a;
  this.autoplay = !0;
  this.customData = this.currentTime = null;
};
m("chrome.cast.media.LoadRequest", chrome.cast.media.tL, void 0);
chrome.cast.media.rL = function() {
  this.type = chrome.cast.media.Ag.GENERIC;
  this.releaseYear = this.images = this.subtitle = this.title = null;
};
m("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.rL, void 0);
chrome.cast.media.xL = function() {
  this.type = chrome.cast.media.Ag.MOVIE;
  this.releaseYear = this.images = this.subtitle = this.studio = this.title = null;
};
m("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.xL, void 0);
chrome.cast.media.IL = function() {
  this.type = chrome.cast.media.Ag.TV_SHOW;
  this.releaseYear = this.images = this.episodeNumber = this.seasonNumber = this.episodeTitle = this.seriesTitle = null;
};
m("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.IL, void 0);
chrome.cast.media.yL = function() {
  this.type = chrome.cast.media.Ag.MUSIC_TRACK;
  this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.albumName = null;
};
m("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.yL, void 0);
chrome.cast.media.AL = function() {
  this.type = chrome.cast.media.Ag.PHOTO;
  this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = null;
};
m("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.AL, void 0);
chrome.cast.media.wL = function(a, b) {
  this.contentId = a;
  this.streamType = chrome.cast.media.Im.BUFFERED;
  this.contentType = b;
  this.customData = this.duration = this.metadata = null;
};
m("chrome.cast.media.MediaInfo", chrome.cast.media.wL, void 0);
chrome.cast.media.uL = function(a, b) {
  this.sessionId = a;
  this.mediaSessionId = b;
  this.media = null;
  this.playbackRate = 1;
  this.playerState = chrome.cast.media.Px.IDLE;
  this.currentTime = 0;
  this.supportedMediaCommands = [];
  this.volume = new chrome.cast.Qx;
  this.customData = null;
};
m("chrome.cast.media.Media", chrome.cast.media.uL, void 0);
chrome.cast.media.qL = "CC1AD845";
m("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.qL, void 0);
chrome.cast.pL = function(a, b, c, e, f) {
  this.sessionRequest = a;
  this.sessionListener = b;
  this.receiverListener = c;
  this.autoJoinPolicy = e || chrome.cast.fi.TAB_AND_ORIGIN_SCOPED;
  this.defaultActionPolicy = f || chrome.cast.Zg.CREATE_SESSION;
};
m("chrome.cast.ApiConfig", chrome.cast.pL, void 0);
chrome.cast.GL = function(a, b) {
  this.appId = a;
  this.capabilities = b || [chrome.cast.Wp.VIDEO_OUT, chrome.cast.Wp.AUDIO_OUT];
};
m("chrome.cast.SessionRequest", chrome.cast.GL, void 0);
chrome.cast.Nu = function(a, b, c, e) {
  this.label = a;
  this.friendlyName = b;
  this.capabilities = c || [];
  this.volume = e || null;
};
m("chrome.cast.Receiver", chrome.cast.Nu, void 0);
chrome.cast.Ou = function(a, b, c, e, f) {
  this.sessionId = a;
  this.appId = b;
  this.displayName = c;
  this.statusText = null;
  this.appImages = e;
  this.receiver = f;
  this.senderApps = [];
  this.namespaces = [];
  this.customData = null;
  this.media = [];
  this.transportId = "";
};
m("chrome.cast.Session", chrome.cast.Ou, void 0);
var qm = function(a) {
  return "urn:x-cast:com.google.cast." + a;
}, rm = qm("tp.connection"), sm = qm("tp.heartbeat"), tm = qm("receiver"), um = qm("media"), vm = function(a) {
  switch(a) {
    case rm:
    ;
    case sm:
    ;
    case tm:
    ;
    case um:
      return!0;
    default:
      return!1;
  }
};
var wm = function() {
  this.type = "GET_STATUS";
  this.requestId = null;
};
var xm = function() {
  return I("cv2.ApiDataUtils");
}, ym = function(a, b) {
  if (!b.applications || 1 != b.applications.length) {
    return null;
  }
  var c = b.applications[0], e = new chrome.cast.Ou(c.sessionId, c.appId, c.displayName, c.appImages, new chrome.cast.Nu(a.c(), a.Ad()));
  e.senderApps = c.senderApps;
  e.namespaces = c.namespaces || [];
  e.transportId = c.transportId;
  e.receiver.volume = b.volume;
  return e;
}, zm = function(a, b) {
  if (a.statusText != b.statusText) {
    return xm().C("session status text has been changed."), !0;
  }
  for (var c = a.namespaces || [], e = b.namespaces || [], f = 0;f < c.length;f++) {
    if (!e.some(function(a) {
      return a.name == c[f].name;
    })) {
      return xm().C("session name spaces have been changed."), !0;
    }
  }
  return a.receiver.volume.level != b.receiver.volume.level || a.receiver.volume.muted != b.receiver.volume.muted ? (xm().C("session receiver volume changed"), !0) : JSON.stringify(a.customData) != JSON.stringify(b.customData) ? (xm().C("session custom data has been changed."), !0) : !1;
};
var Am = function(a) {
  return a ? null != a.level ? fa(a.level) && 0 <= a.level && 1 >= a.level : "boolean" == typeof a.muted : !1;
};
var Bm = function(a, b, c, e) {
  this.type = a;
  this.message = b;
  this.seqNum = c || null;
  this.clientId = e || null;
  this.appOrigin = null;
};
var Cm = function(a) {
  this.type = "LAUNCH";
  this.requestId = null;
  this.appId = a;
};
var Dm = function() {
  this.type = "CONNECT";
  this.origin = {};
};
var Em = function(a, b) {
  N.call(this, "cast_channel_message");
  this.message = a;
  this.receiverId = b;
};
v(Em, N);
var Fm = function(a, b) {
  N.call(this, "cast_channel_error");
  this.error = a;
  this.receiverId = b;
};
v(Fm, N);
var Gm = function(a) {
  Q.call(this);
  this.rb = a;
  this.a = I("cv2.CastChannelService");
  this.rj = new D;
  this.hj = new D;
  this.Eh = new D;
  this.Km = new D;
};
v(Gm, Q);
d = Gm.prototype;
d.A = function() {
  q(chrome.cast.channel) && (chrome.cast.channel.onMessage.addListener(t(this.un, this)), chrome.cast.channel.onError.addListener(t(this.Qh, this)));
};
d.Ni = function(a, b, c, e, f) {
  var g = f || "receiver-0";
  a = this.vj(a.c(), a.zk());
  return ff(a, function(a) {
    return this.Gr(a.Fa(), b, c, e, g);
  }, this);
};
d.$G = function(a, b) {
  var c = this.rj.get(a);
  if (c) {
    var e = this.Eh.get(c.channelId);
    e && e.remove(b.destinationId + "#" + b.sourceId);
    e = {namespace_:rm, data:JSON.stringify({type:"CLOSE"}), sourceId:b.destinationId, destinationId:b.sourceId};
    chrome.cast.channel.send(c, e, n);
  }
};
d.un = function(a, b) {
  this.a.info("Got message from " + JSON.stringify(a));
  this.a.C("....message was: " + JSON.stringify(b));
  var c = this.hj.get(a.channelId);
  if (c) {
    if (vm(b.namespace_)) {
      var e = JSON.parse(b.data);
      if ("CLOSE" == e.type) {
        this.cA(a, b);
        return;
      }
      if ("PING" == e.type) {
        c = {namespace_:sm, data:JSON.stringify({type:"PONG"}), sourceId:b.destinationId, destinationId:b.sourceId};
        chrome.cast.channel.send(a, c, n);
        return;
      }
    }
    this.dispatchEvent(new Em(b, c));
  } else {
    this.a.e("This message is from unknown receiver.");
  }
};
d.cA = function(a, b) {
  var c = this.Eh.get(a.url);
  if (c) {
    var e = b.destinationId + "#" + b.sourceId;
    this.a.info("Removing virtual connection " + e);
    c.remove(e);
  }
};
d.Qh = function(a) {
  this.a.info("Channel error: " + JSON.stringify(a));
  var b = this.hj.get(a.channelId);
  if (b) {
    this.hj.remove(a.channelId);
    this.rj.remove(b);
    this.Eh.remove(a.channelId);
    chrome.cast.channel.close(a, n);
    var c = this.vj(b, a.url);
    df(c, function() {
      this.a.info("Failed to re-connect to receiver: " + b);
      this.dispatchEvent(new Fm(a.errorState, b));
    }, this);
    cf(c, function(a) {
      this.a.info("Re-connected to receiver: " + b);
      this.Gr(a, tm, new wm, this.rb, "receiver-0");
    }, this);
  }
};
d.vj = function(a, b) {
  var c = this.rj.get(a);
  if (c && "open" == c.readyState) {
    return $e(c);
  }
  var e = this.Km.get(a);
  if (e && "pending" == e.Q()) {
    return this.a.info("Using pending creation to " + a), e;
  }
  e = new K;
  this.Km.set(a, e);
  this.a.info("Connecting to " + a);
  chrome.cast.channel.open(b, t(function(b) {
    this.a.info("Open-channel result: " + JSON.stringify(b));
    this.Km.remove(a);
    "open" == b.readyState ? (this.rj.set(a, b), this.hj.set(b.channelId, a), e.ja(b)) : e.Qa(b.errorState);
  }, this));
  S(function() {
    "pending" == e.Q() && (this.a.e("Timeout when opening channel to receiver " + a), e.cancel());
  }, 5E3, this);
  return e;
};
d.Gr = function(a, b, c, e, f) {
  this.hB(a, e, f);
  b = {namespace_:b, data:s(c) ? c : JSON.stringify(c), sourceId:e, destinationId:f};
  this.a.info("Channel is sending message");
  this.a.C("....message was: " + JSON.stringify(b));
  var g = new K;
  chrome.cast.channel.send(a, b, t(function(a) {
    a.errorState ? g.Qa("Failed to send message") : g.ja(!0);
  }, this));
  return g;
};
d.hB = function(a, b, c) {
  var e = this.Eh.get(a.channelId), f = b + "#" + c;
  e && e.contains(f) || (b = {namespace_:rm, data:JSON.stringify(new Dm), sourceId:b, destinationId:c}, this.a.info("Sending virtual connection request" + JSON.stringify(b)), e ? e.add(f) : (e = new Yb, e.add(f), this.Eh.set(a.channelId, e)), chrome.cast.channel.send(a, b, n));
};
var Hm = function(a, b) {
  this.bp = a;
  this.Bw = b;
  this.ui = u();
  this.Iw = null;
  this.Aw = chrome.cast.fi.TAB_AND_ORIGIN_SCOPED;
  this.Dw = chrome.cast.Zg.CREATE_SESSION;
  this.ul = null;
  this.Gw = !0;
};
d = Hm.prototype;
d.sB = function(a) {
  this.Iw = a;
};
d.ff = function() {
  return this.Iw;
};
d.qB = function(a) {
  this.Aw = a;
};
d.Pu = function() {
  return this.Aw;
};
d.rB = function(a) {
  this.Dw = a;
};
d.dr = function() {
  return this.Dw;
};
d.wI = function(a) {
  this.Gw = a;
};
d.Y = function() {
  return this.Gw;
};
d.Mm = function() {
  this.ui = u();
};
d.ew = function() {
  return this.ui;
};
d.ka = function() {
  return this.bp;
};
d.Db = function() {
  return this.Bw;
};
d.Lm = function(a) {
  this.Bw = a;
};
d.I = function() {
  return this.ul ? this.ul.id : null;
};
d.Ew = function() {
  return this.ul;
};
d.Uz = function(a) {
  this.ul = a;
};
var Im = function() {
  this.a = I("cv2.CastClientRecord");
  this.qa = [];
};
d = Im.prototype;
d.A = function() {
};
d.em = function(a, b) {
  if (this.Hj(a)) {
    return this.a.info("Client already exists."), null;
  }
  var c = new Hm(a, b);
  this.qa.push(c);
  return c;
};
d.Mr = function(a) {
  return ub(this.qa, function(b) {
    return b.ka() == a;
  });
};
d.Hc = function(a, b) {
  return C(this.qa, function(c) {
    return c.ka() == a && (c.Y() || b);
  });
};
d.Hj = function(a, b) {
  return!!this.Hc(a, b);
};
d.Zk = function(a) {
  return a ? this.qa : A(this.qa, function(a) {
    return a.Y();
  });
};
d.Xl = function(a, b) {
  return A(this.qa, function(c) {
    return c.I() == a && (c.Y() || b);
  });
};
d.mF = function(a, b, c) {
  return A(this.qa, function(e) {
    return e.I() == a && e.Db() == b && (e.Y() || c);
  });
};
d.lF = function(a, b) {
  return A(this.qa, function(c) {
    return c.Db() == a && (c.Y() || b);
  });
};
d.xy = function(a, b) {
  var c = [];
  a.forEach(function(a) {
    (a = this.Hc(a, b)) && c.push(a.I());
  }, this);
  return c;
};
var Jm = function(a) {
  N.call(this, "new_session");
  this.sessionId = a;
};
v(Jm, N);
var Km = function(a) {
  N.call(this, "session_removal");
  this.sessionId = a;
};
v(Km, N);
var Lm = function(a) {
  N.call(this, "session_update");
  this.sessionId = a;
};
v(Lm, N);
var Mm = function(a, b) {
  this.lh = new Yb;
  this.receiverId = a;
  this.session = b;
}, Nm = function() {
  this.a = I("cv2.SessionRecords");
  this.cb = [];
};
d = Nm.prototype;
d.Iq = function(a, b, c) {
  var e = C(this.cb, function(a) {
    return a.receiverId == b;
  });
  e && e.session.sessionId != c.sessionId ? this.a.e("Only support one session per receiver") : (this.a.info("Adding new session: " + a + ", " + b + ", " + c.sessionId), e || (e = new Mm(b, c), this.cb.push(e)), a && e.lh.add(a));
};
d.ar = function(a) {
  this.a.info("Removing session " + a);
  this.cb = A(this.cb, function(b) {
    return b.session.sessionId != a;
  });
};
d.DI = function(a) {
  this.a.info("Removing session by receiver ID " + a);
  this.cb = A(this.cb, function(b) {
    return b.receiverId != a;
  });
};
d.ef = function(a) {
  var b = C(this.cb, function(b) {
    return b.session.sessionId == a;
  });
  return b ? b.lh.N() : [];
};
d.Nq = function(a) {
  var b = C(this.cb, function(b) {
    return b.receiverId == a;
  });
  return b ? b.session : null;
};
d.Oq = function(a) {
  var b = C(this.cb, function(b) {
    return b.session.sessionId == a;
  });
  return b ? b.receiverId : null;
};
d.Sz = function(a, b) {
  var c = C(this.cb, function(c) {
    return c.lh.contains(a) && c.session.sessionId == b;
  });
  return c ? c.receiverId : null;
};
d.Ug = function(a) {
  var b = C(this.cb, function(b) {
    return b.session.sessionId == a;
  });
  return b ? b.session : null;
};
d.lz = function(a, b) {
  var c = C(this.cb, function(c) {
    return c.session.appId == a && c.receiverId == b;
  }, this);
  return c ? c.session : null;
};
d.rr = function(a, b) {
  var c = C(this.cb, function(c) {
    return c.session.transportId == b && c.receiverId == a;
  }, this);
  return c ? c.session : null;
};
d.Ru = function(a, b) {
  var c = [];
  this.cb.forEach(function(e) {
    e.session.appId == b && e.lh.contains(a) && c.push(e.session);
  }, this);
  return c;
};
d.uH = function(a) {
  var b = C(this.cb, function(b) {
    return b.session.sessionId == a.sessionId;
  });
  b && (b.session.statusText = a.statusText, b.session.namespaces = a.namespaces, b.session.customData = a.customData, b.session.receiver.volume = a.receiver.volume);
};
d.EG = function(a) {
  return this.cb.some(function(b) {
    return b.lh.contains(a);
  });
};
var Om = function() {
  this.Ff = new D;
  this.a = I("cv.TabMessenger");
  this.lc = new Wl;
};
d = Om.prototype;
d.A = function() {
  chrome.runtime.onConnect.addListener(t(this.XL, this));
};
d.hC = function(a) {
  this.a.C("Sending to api: " + JSON.stringify(a));
  var b = this.Ff.get(a.clientId);
  b ? b.postMessage(a) : this.a.e("Trying to send message without existing port for clientId " + a.clientId);
};
d.XL = function(a) {
  this.a.C("App connecting: " + JSON.stringify({clientId:a.name, sender:a.sender}));
  this.Ff.get(a.name) && this.a.info("Replacing existing port for client ID:" + a.name);
  this.Ff.set(a.name, a);
  a.onMessage.addListener(t(this.FB, this));
  a.onDisconnect.addListener(t(this.EB, this, a.name));
};
d.FB = function(a) {
  this.a.info("API message");
  this.a.C("....message was: " + JSON.stringify(a));
  var b = this.Ff.get(a.clientId);
  b ? this.lc.Sm(a.type, b.sender, a) : this.a.e("Got message without existing port for clientId " + a.clientId);
};
d.EB = function(a) {
  this.a.info("Client disconnected " + a);
  var b = new Bm("client_disconnect", null);
  b.clientId = a;
  var c = this.Ff.get(a);
  c && (this.Ff.remove(a), this.lc.Sm(b.type, c.sender, b));
};
d.listen = function(a, b, c) {
  return this.lc.Bx(a, b, c);
};
d.Zc = function(a, b, c) {
  return this.lc.Cx(a, b, c);
};
d.fg = function(a) {
  return this.lc.wi(a);
};
var Pm = function(a, b, c, e, f) {
  Q.call(this);
  this.W = a;
  this.rb = b;
  this.a = I("cv2.CastService");
  this.tr = 1E3 * Math.floor(1E5 * Math.random());
  this.ba = new Im;
  this.ca = new Nm;
  this.uf = new D;
  this.O = c;
  this.Wl = e;
  this.sa = new Gm(this.rb);
  this.oe = null;
  this.q = new R(this);
  this.Fq = f;
};
v(Pm, Q);
d = Pm.prototype;
d.Kr = function() {
  var a = this.tr++;
  0 == a && (a = this.tr++);
  return a;
};
d.A = function() {
  this.W.listen("extension_version", this.sD, this);
  this.W.listen("request_session", this.wD, this);
  this.W.listen("client_init", this.rD, this);
  this.W.listen("v2_message", this.oD, this);
  this.W.listen("app_message", this.pD, this);
  this.W.listen("client_disconnect", this.qD, this);
  this.ba.A();
  this.sa.A();
  this.Fq.A();
  this.q.listen(this.sa, "cast_channel_message", this.uD);
  this.q.listen(this.sa, "cast_channel_error", this.Qh);
  this.q.listen(this.O, "receiver_list", this.tD);
  this.q.listen(this.O, "remove_receiver", this.vD);
};
d.k = function() {
  Pm.t.k.call(this);
  this.q.$();
};
d.tD = function() {
  this.ba.Zk().forEach(function(a) {
    this.hs(a);
  }, this);
  this.xI();
};
d.vD = function() {
};
d.xI = function() {
  this.O.Dc().forEach(function(a) {
    this.jI(a);
  }, this);
};
d.jI = function(a) {
  this.a.info("Query receiver status: " + JSON.stringify(a));
  var b = new wm;
  b.requestId = this.Kr();
  b = this.sa.Ni(a, tm, b, this.rb);
  df(b, function() {
    this.a.info("Failed to connect to receiver: " + a.c());
  }, this);
};
d.Qh = function(a) {
  this.a.info("Channel error. Removing session on receiver: " + a.receiverId);
  this.Dr(a.receiverId);
};
d.uD = function(a) {
  var b = a.receiverId;
  a = a.message;
  this.a.info("Receive message from " + JSON.stringify(b));
  this.a.C("....message was: " + JSON.stringify(a));
  vm(a.namespace_) ? this.MB(b, a) : this.LB(b, a);
};
d.MB = function(a, b) {
  if (this.Yz(a, b)) {
    var c = JSON.parse(b.data);
    switch(c.type) {
      case "RECEIVER_STATUS":
        this.aA(a, b);
        break;
      case "MEDIA_STATUS":
        this.$z(a, b);
        break;
      case "LAUNCH_ERROR":
      ;
      case "INVALID_REQUEST":
      ;
      case "LOAD_CANCELLED":
      ;
      case "LOAD_FAILED":
      ;
      case "INVALID_PLAYER_STATE":
        this.Zz(a, b);
        break;
      default:
        this.a.e("Unknown Cast protocol message"), this.a.C("....message was: " + JSON.stringify(c));
    }
  } else {
    this.a.info("Invalid destination"), this.a.C("....message was: " + JSON.stringify(b));
  }
};
d.Yz = function(a, b) {
  if ("*" == b.destinationId || b.destinationId == this.rb || this.ba.Hj(b.destinationId)) {
    return!0;
  }
  this.sa.$G(a, b);
  return!1;
};
d.LB = function(a, b) {
  if (b.sourceId && "*" != b.sourceId && "receiver-0" != b.sourceId) {
    var c = this.ca.rr(a, b.sourceId);
    if (c) {
      var e = [];
      if ("*" == b.destinationId) {
        e = this.ca.ef(c.sessionId);
      } else {
        e = this.ba.Hc(b.destinationId);
        if (!e) {
          this.a.e("App message received for unknown destination id " + b.destinationId + ".  Ignoring.");
          return;
        }
        e = [e.ka()];
      }
      var f = new om(c.sessionId, b.namespace_, b.data);
      e.forEach(function(a) {
        this.Oa(new Bm("app_message", f, null, a));
      }, this);
    } else {
      this.a.e("No session for incoming app message");
    }
  } else {
    this.a.e("App message received from illegal source id " + b.sourceId + ".  Ignoring.");
  }
};
d.$z = function(a, b) {
  var c = JSON.parse(b.data);
  if (c) {
    var e = this.ca.rr(a, b.sourceId);
    if (e) {
      c.status && c.status.forEach(function(a) {
        a.sessionId = e.sessionId;
      });
      var f = !1;
      fa(c.requestId) && (f = this.vr(c.requestId, c));
      var g = this.ca.ef(e.sessionId);
      if (!f || 1 < g.length) {
        this.a.info("Sending media status to clients..."), g.forEach(function(a) {
          this.Oa(new Bm("v2_message", c, null, a));
        }, this);
      }
    } else {
      this.a.e("No session for the incoming media status");
    }
  }
};
d.Zz = function(a, b) {
  var c = JSON.parse(b.data);
  if (c) {
    var e = String(c.requestId);
    if (e) {
      var f = this.uf.get(e);
      f && (f.Qa(new chrome.cast.Yg(chrome.cast.oa.SESSION_ERROR, c.reason || c.type)), this.uf.remove(e));
    }
  }
};
d.Dr = function(a) {
  var b = this.ca.Nq(a);
  b && (this.zr(b.sessionId), this.ca.DI(a), this.dispatchEvent(new Km(b.sessionId)));
};
d.zr = function(a) {
  var b = this.ca.Ug(a);
  b && this.ca.ef(b.sessionId).forEach(function(a) {
    this.Oa(new Bm("remove_session", b.sessionId, null, a));
  }, this);
};
d.aA = function(a, b) {
  var c = JSON.parse(b.data);
  if (c && (!fa(c.requestId) || !this.vr(c.requestId, c.status))) {
    var e = this.O.gf(a);
    e ? (c = c.status && ym(e, c.status)) && c.sessionId && "00000000-0000-0000-0000-000000000000" != c.appId && c.namespaces && 0 != c.namespaces.length ? this.ca.Ug(c.sessionId) ? this.Pq(c) : (this.ca.Iq(null, a, c), this.dispatchEvent(new Jm(c.sessionId))) : this.Dr(a) : this.a.e("Got message from receiver " + a + ", but device discovery no longer knows it");
  }
};
d.Pq = function(a) {
  var b = this.ca.Ug(a.sessionId);
  b && zm(b, a) && (this.ca.uH(a), this.ca.ef(a.sessionId).forEach(function(b) {
    this.Oa(new Bm("update_session", a, null, b));
  }, this), this.dispatchEvent(new Lm(b.sessionId)));
};
d.sD = function(a, b) {
  this.Ec(b, a);
  var c = chrome.runtime.getManifest().version;
  this.Oa(new Bm("extension_version", c, b.seqNum, b.clientId));
};
d.Ec = function(a, b) {
  var c = x(a.clientId), e = this.ba.Hc(c);
  e && e.Db() && e.Db() != a.appOrigin && (this.a.e("Exiting client has different origin"), this.ba.Mr(a.clientId), e = null);
  e || (e = this.ba.em(c, a.appOrigin), b && b.tab && e.Uz(b.tab));
  e.Mm();
  return e;
};
d.Lq = function(a, b) {
  var c = this.ca.Sz(a, b);
  return c ? this.O.gf(c) : (this.a.e("No receiver found"), null);
};
d.gz = function(a, b) {
  var c = this.Ec(a), e = a.message;
  e && null != e.volume && Am(e.volume) && (null != e.expectedVolume ? Am(e.expectedVolume) : 1) ? (delete e.sessionId, c = this.te(!0, e, b, tm, c.ka(), "receiver-0"), cf(c, function(c) {
    c = ym(b, c);
    w(c);
    this.Pq(c);
    this.Oa(new Bm("set_receiver_volume_success", void 0, a.seqNum, a.clientId));
  }, this), this.lf(c, a, chrome.cast.oa.CHANNEL_ERROR)) : this.bb(c, a, chrome.cast.oa.INVALID_PARAMETER, "");
};
d.oD = function(a, b) {
  this.Pi(b);
  var c = this.Ec(b, a), e = b.message.sessionId;
  if (e) {
    var f = this.Lq(x(b.clientId), e);
    if (f) {
      switch(b.message.type) {
        case "STOP":
          this.hz(b, f);
          break;
        case "LOAD":
          var g = b.message, h;
          (h = !g || !s(g.sessionId) || null == g.media || null != g.autoplay && "boolean" != typeof g.autoplay || null != g.currentTime && !fa(g.currentTime)) || (g = g.media, h = !(g && s(g.contentId) && !(1E3 < g.contentId.length) && Jb(chrome.cast.media.Im, g.streamType) && s(g.contentType) && (null == g.duration || fa(g.duration))));
          if (h) {
            this.bb(c, b, chrome.cast.oa.INVALID_PARAMETER, "");
            break;
          }
        ;
        case "PAUSE":
        ;
        case "PLAY":
        ;
        case "SEEK":
        ;
        case "STOP_MEDIA":
        ;
        case "MEDIA_SET_VOLUME":
        ;
        case "MEDIA_GET_STATUS":
          this.fz(b, f, e);
          break;
        case "SET_VOLUME":
          this.gz(b, f);
          break;
        default:
          this.a.e("Unknown request"), this.a.C("....message was: " + JSON.stringify(b));
      }
    } else {
      this.bb(c, b, chrome.cast.oa.SESSION_ERROR, "No receiver for this session");
    }
  } else {
    this.bb(c, b, chrome.cast.oa.INVALID_PARAMETER, "Missing session ID"), this.a.e("No session ID");
  }
};
d.NA = function(a) {
  var b = new pm(a), c = this.ca.Oq(a);
  if (c) {
    var e = this.O.gf(c);
    e ? (b = this.te(!0, b, e, tm, this.rb), cf(b, t(function() {
      this.zr(a);
      this.ca.ar(a);
      this.dispatchEvent(new Km(a));
    }, this))) : this.a.e("No receiver with ID " + c);
  } else {
    this.a.e("No receiver for session " + a);
  }
};
d.hz = function(a, b) {
  var c = a.message;
  if (c.sessionId) {
    var e = this.te(!0, c, b, tm, x(a.clientId)), f = function() {
      var b = x(c.sessionId);
      this.ca.ef(b).forEach(function(c) {
        this.Oa(new Bm("remove_session", b, c == a.clientId ? a.seqNum : null, c));
      }, this);
      this.ca.ar(b);
      this.dispatchEvent(new Km(b));
    };
    cf(e, f, this);
    df(e, f, this);
  } else {
    this.bb(this.Ec(a), a, chrome.cast.oa.INVALID_PARAMETER, "session ID is missing");
  }
};
d.fz = function(a, b, c) {
  var e = a.message.type, f = 3E3;
  "LOAD" == e ? f = 864E5 : "SEEK" == e && (f = 5E3);
  e in nm && (a.message.type = nm[e]);
  c = this.ca.Ug(c);
  b = this.te(!0, ab(a.message), b, um, x(a.clientId), c.transportId, f);
  cf(b, function(b) {
    this.Oa(new Bm("v2_message", b, a.seqNum, a.clientId));
  }, this);
  this.lf(b, a, chrome.cast.oa.CHANNEL_ERROR);
};
d.pD = function(a, b) {
  this.Pi(b);
  var c = this.Ec(b, a), e = b.message;
  if (e && null != e.sessionId && null != e.namespaceName && !vm(e.namespaceName)) {
    var f = this.Lq(x(b.clientId), e.sessionId);
    if (f) {
      var g = this.ca.Ug(e.sessionId);
      C(g.namespaces, function(a) {
        return a.name == e.namespaceName;
      }) ? (f = this.sa.Ni(f, e.namespaceName, e.message, c.ka(), g.transportId), cf(f, function() {
        this.Oa(new Bm("app_message_success", {}, b.seqNum, b.clientId));
      }, this), df(f, function() {
        this.a.info("No channel to receiver.");
        this.bb(c, b, chrome.cast.oa.CHANNEL_ERROR, "Channel to receiver not available");
      }, this)) : (this.a.info("No namespace " + e.namespaceName + " in session " + g.sessionId), this.bb(c, b, chrome.cast.oa.INVALID_PARAMETER, "Invalid namespace"));
    } else {
      this.bb(c, b, chrome.cast.oa.SESSION_ERROR, "No receiver for this session"), this.a.e("No receiver for app message");
    }
  } else {
    this.bb(c, b, chrome.cast.oa.INVALID_PARAMETER, "");
  }
};
d.qD = function(a, b) {
  x(b.clientId);
  var c = this.ba.Hc(b.clientId);
  c && c.wI(!1);
};
d.Pi = function(a) {
  "log_message" != a.type && Yc(this.a, "App request: " + a.type, a);
};
d.bb = function(a, b, c, e) {
  a = new chrome.cast.Yg(c);
  a.description = e;
  this.Oa(new Bm("error", a, b.seqNum, b.clientId));
};
d.pB = function(a) {
  var b = [];
  a.Pu() == chrome.cast.fi.TAB_AND_ORIGIN_SCOPED ? b = this.KE(a.I(), a.Db(), !0) : a.Pu() == chrome.cast.fi.ORIGIN_SCOPED && (b = this.JE(a.Db(), !0));
  b.forEach(function(b) {
    var e = new Bm("request_session", a.ff());
    e.clientId = a.ka();
    e.appOrigin = a.Db();
    b = this.ca.Oq(b.sessionId);
    this.Dg(e, x(b));
  }, this);
};
d.KE = function(a, b, c) {
  if (!b || !a) {
    return[];
  }
  a = this.ba.mF(a, b, c);
  var e = new D;
  a.forEach(function(a) {
    this.ca.Ru(a.ka(), a.ff().appId).forEach(function(a) {
      e.set(a.sessionId, a);
    });
  }, this);
  return e.N();
};
d.JE = function(a, b) {
  if (!a) {
    return[];
  }
  var c = this.ba.lF(a, b), e = new D;
  c.forEach(function(a) {
    this.ca.Ru(a.ka(), a.ff().appId).forEach(function(a) {
      e.set(a.sessionId, a);
    });
  }, this);
  return e.N();
};
d.Mq = function(a, b) {
  if (!a || !this.Wl.Iy(a.id)) {
    return!1;
  }
  var c;
  if (b) {
    c = this.ba.Hc(x(b.clientId));
  } else {
    c = this.ba.Xl(a.id);
    var e = ob(c, function(a) {
      return a.dr() == chrome.cast.Zg.CREATE_SESSION;
    });
    if (1 != e) {
      return this.a.info("# of fling by default " + e), !1;
    }
    c = C(c, function(a) {
      return a.dr() == chrome.cast.Zg.CREATE_SESSION;
    });
  }
  if (!c) {
    return!1;
  }
  var e = x(this.Wl.Hy()), f = Ia(e, "-");
  0 == f.lastIndexOf("uuid:", 0) && (f = f.substring(5));
  this.a.info("Stopping mirroring at receiver " + e);
  this.Wl.Jy();
  return(e = this.O.Ql(f)) ? (this.a.info("Auto transition from mirroring to flinging"), b ? f = b : (f = new Bm("request_session", c.ff()), f.clientId = c.ka(), f.appOrigin = c.Db()), this.Dg(f, e.c()), !0) : !1;
};
d.rD = function(a, b) {
  this.a.info("Client init request");
  this.a.C("....request was: " + JSON.stringify(b));
  var c = b.message, e = this.Ec(b, a);
  e.sB(c.sessionRequest);
  e.qB(c.autoJoinPolicy);
  e.rB(c.defaultActionPolicy);
  e.Lm(b.appOrigin);
  this.Mq(a.tab) || this.hs(e);
  this.pB(e);
};
d.hs = function(a) {
  var b = 0 < this.O.Dc().length ? chrome.cast.Xo.AVAILABLE : chrome.cast.Xo.UNAVAILABLE;
  this.Oa(new Bm("receiver_availability", b, null, a.ka()));
};
d.ND = function(a) {
  var b = [], c = this.O.Dc();
  this.a.info("there are " + c.length + " receivers");
  c.forEach(function(c) {
    var f = new cm(c.c(), c.Bd(), c.Ad());
    c = this.ca.Nq(c.c());
    var g = null;
    if (c) {
      var g = c.appImages && 0 < c.appImages.length ? c.appImages[0].url : null, h = this.ca.ef(c.sessionId), l = 1 < h.length || 1 == h.length && h[0] != this.rb, h = this.ba.xy(h), g = new dm(c.sessionId, f, "v2_app", g, c.statusText || c.displayName, !1, null, -1 < h.indexOf(a) ? a : 0 < h.length ? h[0] : -3, l);
      this.a.C("Popup activity : " + JSON.stringify(g));
    }
    b.push(new fm(f, g));
  }, this);
  return b;
};
d.MD = function(a) {
  var b = null;
  (a = this.ba.Xl(a)) && 0 < a.length && a[0].Ew() && (b = (new W(a[0].Ew().url)).fc()) && 0 == b.indexOf("www.") && (b = b.substr(4));
  return b;
};
d.OA = function(a) {
  if (this.oe) {
    this.oe.ja(a), this.oe = null;
  } else {
    var b = t(function(b) {
      if (b) {
        var e = this.ba.Xl(b.id);
        if (0 != e.length) {
          if (1 < e.length) {
            this.a.e("More than one active clients in the tab " + b.id);
          } else {
            if (b = e[0], b.ff()) {
              var e = a.message, f = new Bm("request_session", b.ff());
              f.clientId = b.ka();
              f.appOrigin = b.Db();
              this.Dg(f, e);
            }
          }
        }
      }
    }, this);
    Qm(b);
  }
};
d.wD = function(a, b) {
  this.a.info("Request session");
  this.a.C("....request was: " + JSON.stringify(b));
  var c = b.message, e = this.Ec(b, a);
  c && null != c.appId ? 0 == this.O.Dc().length ? this.bb(e, b, chrome.cast.oa.RECEIVER_UNAVAILABLE, "") : q(chrome.browserAction.openPopup) ? a.tab ? this.Fy(b) || (c = t(function(c) {
    c ? this.Mq(a.tab, b) || chrome.browserAction.openPopup(t(function(a) {
      if (a) {
        var c = new K;
        this.oe = c;
        cf(c, function(a) {
          "create_session" == a.type ? this.Dg(b, a.message) : (this.a.info("User did not select device to cast."), this.bb(e, b, chrome.cast.oa.CANCEL, "Canceled by user"));
        }, this);
        this.lf(c, b, chrome.cast.oa.CANCEL);
        a.addEventListener("unload", t(function() {
          this.a.info("Popup window closed.");
          this.oe && (this.a.info("User closed popup; cancelling request session"), this.oe.Qa(new chrome.cast.Yg(chrome.cast.oa.CANCEL, "User closed popup")), this.oe = null);
        }, this), !1);
      } else {
        this.bb(e, b, chrome.cast.oa.CANCEL, "Failed to open popup menu");
      }
    }, this)) : this.a.info("Discard session request from inactive tab: " + JSON.stringify(a));
  }, this), Rm(a.tab.id, c)) : this.a.e("only handle tab request now") : this.bb(e, b, chrome.cast.oa.CANCEL, "Chrome version is too old.") : this.bb(e, b, chrome.cast.oa.INVALID_PARAMETER, "");
};
d.Fy = function(a) {
  if (!localStorage.AutoTestingIp) {
    return!1;
  }
  var b = this.Ec(a), c = localStorage.AutoTestingIp, e = C(this.O.Dc(), function(a) {
    return a.FD() == c;
  });
  e ? this.Dg(a, e.c()) : this.bb(b, a, chrome.cast.oa.RECEIVER_UNAVAILABLE, "No auto testing device found");
  return!0;
};
d.Dg = function(a, b) {
  var c = this.O.gf(b);
  c || (c = this.O.Ql(b));
  if (c) {
    this.a.info("The device is: " + JSON.stringify(c));
    var e = this.Ec(a), f = this.ca.lz(a.message.appId, c.c());
    f ? this.mz(a, f, c, e) : this.nz(a, c, e);
  } else {
    this.a.info("NO device found");
  }
};
d.nz = function(a, b, c) {
  var e = this.te(!0, new Cm(a.message.appId), b, tm, c.ka(), "receiver-0", 1E4);
  cf(e, function(e) {
    e = ym(b, e);
    w(e);
    this.vv(!1, a, b, e);
    this.sa.Ni(b, rm, new Dm, c.ka(), e.transportId);
  }, this);
  this.lf(e, a, chrome.cast.oa.CHANNEL_ERROR);
};
d.mz = function(a, b, c, e) {
  e = this.te(!1, new Dm, c, rm, e.ka(), b.transportId);
  cf(e, t(this.vv, this, !0, a, c, b));
  this.lf(e, a, chrome.cast.oa.CHANNEL_ERROR);
};
d.vv = function(a, b, c, e) {
  if (b.clientId) {
    this.a.info(a ? "Joined session." : "Got new session.");
    var f = e.namespaces.some(function(a) {
      return a.name == um;
    });
    a && f ? (this.a.info("found media namespace"), a = this.te(!0, {type:"GET_STATUS"}, c, um, b.clientId, e.transportId), cf(a, t(this.Vr, this, b, c, e)), this.lf(a, b, chrome.cast.oa.CHANNEL_ERROR)) : (this.a.info("did not find media namespace"), this.Vr(b, c, e, null));
  } else {
    this.a.e("Missing client ID.");
  }
};
d.Vr = function(a, b, c, e) {
  a.clientId ? (this.ca.Iq(a.clientId, b.c(), c), this.a.info("Dispatching CastServiceNewSessionEvent"), this.dispatchEvent(new Jm(c.sessionId)), e && (c.media = e.status), this.Oa(new Bm("new_session", c, a.seqNum, a.clientId))) : this.a.e("Missing client ID.");
};
d.gC = function(a) {
  if (-1 != ["new_session", "update_session"].indexOf(a.type)) {
    var b = a.message, b = Ob(b);
    a.message = b;
    b.receiver = Ob(b.receiver);
    var c = b.receiver.label, e = this.O.gf(c);
    ab(e);
    a = this.ba.Hc(x(a.clientId));
    ab(a);
    b.receiver.label = this.Fq.Gm(x(a.Db()), e);
    this.a.info("Updated receiver ID " + c + " to per site ID " + b.receiver.label);
  }
};
d.Oa = function(a) {
  Yc(this.a, "Sending message to client " + a.clientId + ":" + a.type, a);
  this.gC(a);
  this.W.hC(a);
};
d.te = function(a, b, c, e, f, g, h) {
  a && (b.requestId = this.Kr());
  var l = this.sa.Ni(c, e, b, f, g);
  a && (l = new K, this.uf.set(b.requestId, l));
  S(function() {
    l.cancel();
  }, h || 3E3);
  return l;
};
d.lf = function(a, b, c) {
  var e = this.Ec(b);
  df(a, function(a) {
    var g;
    a instanceof he ? (g = chrome.cast.oa.TIMEOUT, a = "Timeout at extension") : a instanceof chrome.cast.Yg ? (g = a.code, a = a.description) : g = c;
    this.bb(e, b, g, a);
  }, this);
};
d.vr = function(a, b) {
  var c = String(a), e = this.uf.get(c);
  e && (e.ja(b), this.uf.remove(c));
  return!!e;
};
d.mi = function() {
  return this.ba.Zk().some(function(a) {
    return this.ca.EG(a.ka());
  }, this);
};
d.tH = function() {
  return!this.uf.ob();
};
var Sm = I("cv.TabUtils"), Tm = null, Um = function(a) {
  a != chrome.windows.WINDOW_ID_NONE && (Sm.info("Newly focused window ID: " + a), Tm = a);
}, Vm = function() {
  chrome.windows.getLastFocused(function(a) {
    Tm || (Tm = a.id);
  });
  chrome.windows.onFocusChanged.addListener(Um);
}, Qm = function(a) {
  Tm ? chrome.tabs.query({active:!0, windowId:Tm}, function(b) {
    b && 1 == b.length ? a(b[0]) : a(null);
  }) : a(null);
}, Rm = function(a, b) {
  chrome.tabs.get(a, function(a) {
    a && a.active || b(!1);
    chrome.windows.get(a.windowId, function(a) {
      b(a ? a.focused : !1);
    });
  });
}, Wm = function(a, b) {
  chrome.windows.getLastFocused(function(c) {
    chrome.tabs.query({active:!0, windowId:c.id}, function(e) {
      if (e && 0 != e.length) {
        var f = e[0];
        f.width && f.height ? (e = c.width / f.width, 5.1 < e || 0.24 > e ? (Sm.info("Invalid computed zoom level: " + e), b(!1)) : (f = Math.round(c.width / a + (c.height - f.height * e)), Sm.info("Win resizing: width = " + c.width + ", height = " + c.height + ", newHeight = " + f + ", zoomLevel = " + e), chrome.windows.update(c.id, {height:f}), b(!0))) : (Sm.info("Failed to get inner tab dimension"), b(!1));
      }
    });
  });
}, Ym = function(a, b) {
  chrome.tabs.get(a, function(a) {
    Xm(a, b);
  });
}, Xm = function(a, b) {
  if (a) {
    var c = a.id;
    chrome.windows.update(a.windowId, {focused:!0}, function() {
      chrome.tabs.update(c, {active:!0}, b);
    });
  } else {
    b(null);
  }
}, Zm = function(a) {
  if (Qe(a)[1]) {
    return Re(a);
  }
  Sm.e("Got a URL without scheme: " + a);
  return Re("http://" + a);
};
var $m = function(a, b) {
  w(a || b, "Must specify one of localData or registryData");
  this.Ca = a || null;
  this.Xa = b || null;
  this.Nw = new D;
};
d = $m.prototype;
d.kc = function() {
  return this.Ca;
};
d.sr = function() {
  return this.Xa;
};
d.equals = function(a) {
  if (!(a instanceof $m)) {
    return!1;
  }
  if (this.Ca) {
    if (!this.Ca.equals(a.Ca)) {
      return!1;
    }
  } else {
    if (a.Ca) {
      return!1;
    }
  }
  if (this.Xa) {
    if (!this.Xa.equals(a.Xa)) {
      return!1;
    }
  } else {
    if (a.Xa) {
      return!1;
    }
  }
  return!0;
};
d.zj = function(a) {
  a instanceof $m && (this.Ca = a.Ca, this.Xa = a.Xa);
};
d.Bk = function() {
  return(!this.Ca || this.Ca.fe) && (!this.Xa || this.Xa.fe);
};
d.Os = function(a) {
  this.Ca && (this.Ca.fe = a);
  this.Xa && (this.Xa.fe = a);
};
d.c = function() {
  return this.Ca ? this.Ca.id : this.Xa.id;
};
d.Bd = function() {
  return!this.Ca || this.Ca.fe ? this.Xa.id : this.Ca.uniqueId;
};
d.Ad = function() {
  return this.Ca && !this.Ca.fe ? this.Ca.friendlyName : this.Xa && !this.Xa.fe ? this.Xa.friendlyName : "";
};
d.Wm = function(a) {
  return this.Nw.get(a, "unknown");
};
d.yf = function(a, b) {
  w("available" == b || "unavailable" == b);
  this.Nw.set(a, b);
};
d.XE = function() {
  return "available" == this.Wm("ChromeCast");
};
d.dh = function() {
  return null != this.Ca && this.Ca.dh;
};
d.isLocal = function() {
  return null != this.kc();
};
d.uw = function() {
  return!1;
};
var an = function(a, b, c, e, f, g, h) {
  this.id = a;
  this.Df = b;
  this.friendlyName = c;
  this.uniqueId = e;
  this.ipAddress = f;
  this.mc = g;
  this.configId = h || null;
  this.dh = this.fe = !1;
  this.ve();
};
an.prototype.a = I("cv.Receiver.LocalData");
an.prototype.equals = function(a) {
  return a ? this.id == a.id && this.Df == a.Df && this.friendlyName == a.friendlyName && this.ipAddress == a.ipAddress && this.mc == a.mc : !1;
};
an.prototype.ve = function() {
  w(this.id, "id not set");
  w(this.uniqueId, "uniqueId not set");
  w(this.ipAddress, "ipAddress not set");
  w(this.mc, "appUrl not set");
};
var bn = function(a, b) {
  this.id = a;
  this.friendlyName = b;
  this.fe = !1;
  this.Ww = "appEngine";
};
bn.prototype.equals = function(a) {
  return a ? this.id == a.id && this.friendlyName == a.friendlyName : !1;
};
$m.prototype.Rm = function() {
  return null != this.Xa && "cloud" == this.Xa.Ww;
};
var cn = function(a, b) {
  var c = new bn(a, b + " (Cloud)");
  c.Ww = "cloud";
  c = new $m(null, c);
  c.yf("ChromeCast", "available");
  return c;
};
$m.prototype.YK = function() {
  var a = new dd(this.c(), this.Ad());
  this.kc() && (a.ipAddress = this.kc().ipAddress);
  return a;
};
$m.prototype.iF = function() {
  return new cm(this.c(), this.Bd(), this.Ad());
};
var dn = function(a, b, c) {
  of.call(this);
  this.a = I("cv.sender.ChannelService");
  this.Wy = b;
  this.Vl = c || null;
  this.Bf = null;
  this.O = a;
};
v(dn, of);
d = dn.prototype;
d.A = function() {
  dn.t.A.call(this);
  this.lb.listen(this.O, "remove_receiver", this.CE);
};
d.CE = function(a) {
  this.ne(a.receiver.c());
};
d.xf = function(a) {
  this.a.info("Attempting to create a channel to " + a.c());
  if (!(a instanceof $m)) {
    return af("Sender-to-sender connection is not supported");
  }
  var b;
  a.kc() ? (this.a.info("Creating local channel..."), b = this.Wy.xf(a)) : b = this.tz(a);
  S(function() {
    "pending" == b.Q() && (this.a.info("Channel creation timeout"), b.cancel());
  }, 8E3, this);
  return ff(b, function(a) {
    return this.uz(a.Fa());
  }, this);
};
d.tz = function(a) {
  if (!a.sr()) {
    return af("No registry data: " + a.c());
  }
  if (a.Rm()) {
    return null != this.Bf ? (this.a.info("Creating Cloud LCS channel..."), this.Bf.xf(a)) : af("No proper cloud channel factory exists");
  }
  this.a.info("Creating AppEngine channel...");
  return this.Vl.xf(a);
};
d.pA = function(a) {
  w(null == this.Bf);
  this.Bf = a;
};
d.uz = function(a) {
  if (a.Y()) {
    return $e(a);
  }
  if (a.FE()) {
    return af(a.getError() || "New channel to " + a.X + "was disconnected already.");
  }
  var b = new K;
  Fe(a, "a", function(c) {
    "pending" == b.Q() && ("connected" == c.Rg ? b.ja(a) : b.Qa(a.getError() || "Error creating channel to " + a.X));
  }, void 0, this);
  S(function() {
    a.EE() && a.disconnect("Channel is not connected in 3 seconds");
  }, 3E3, this);
  return b;
};
var en = function() {
  this.OG = this.bm = null;
  this.Gv = [];
}, fn = function() {
  this.imageUrl = this.description = null;
}, gn = function() {
  this.name = "unknown";
  this.state = "error";
  this.MG = null;
  this.LG = !0;
  this.el = this.serviceData = this.NG = null;
  this.extraData = {};
}, jn = function(a, b) {
  w(a.kc(), "Receiver must be available via LAN to support DIAL.");
  this.Sa = a;
  var c;
  (c = b) || (hn || (hn = new Wh(3, null, 1, 10, 2E3)), c = hn);
  this.nc = c;
  this.a = I("cv.DialClient");
}, hn = null, kn = 999;
d = jn.prototype;
d.launchApp = function(a, b, c) {
  var e = (++kn).toString();
  this.nc.send(e, this.Ep(a), "POST", c, null, 0, this.tx("launchApp", "POST", b));
  return e;
};
d.Qr = function(a, b) {
  var c = (++kn).toString();
  this.nc.send(c, this.Ep(a), "DELETE", null, null, 0, this.tx("stopApp", "DELETE", b), 0);
  return c;
};
d.Gq = function(a) {
  var b = (++kn).toString();
  this.nc.send(b, this.Sa.kc().mc, "GET", null, null, 0, t(this.iw, this, a));
  return b;
};
d.mm = function(a, b) {
  var c = (++kn).toString();
  this.nc.send(c, this.Ep(a), "GET", null, null, 0, t(this.iw, this, b));
  return c;
};
d.iw = function(a, b) {
  var c = b.target;
  this.Bj("GetAppInfo", "GET", c);
  if (c.pa()) {
    var e = c.Zr();
    e || (e = Wj(c.cc()));
    if (e) {
      var f = e.getElementsByTagName("service");
      if (f && 1 == f.length) {
        for (var e = new gn, g = 0, h = f[0].childNodes.length;g < h;g++) {
          var l = f[0].childNodes[g];
          if ("state" == l.nodeName) {
            e.state = l.textContent;
          } else {
            if ("name" == l.nodeName) {
              e.name = l.textContent;
            } else {
              if ("link" == l.nodeName) {
                e.NG = l.getAttribute("href");
              } else {
                if ("options" == l.nodeName) {
                  e.LG = "true" == l.getAttribute("allowStop");
                } else {
                  if ("servicedata" == l.nodeName && "urn:chrome.google.com:cast" == l.namespaceURI) {
                    for (var p = e, B = new en, G = 0, T = l.childNodes.length;G < T;G++) {
                      var P = l.childNodes[G];
                      if ("connectionSvcURL" == P.nodeName) {
                        B.bm = P.textContent;
                      } else {
                        if ("applicationContext" == P.nodeName) {
                          B.OG = P.textContent;
                        } else {
                          if ("protocols" == P.nodeName) {
                            for (var bh = 0;bh < P.childNodes.length;bh++) {
                              var sk = P.childNodes[bh];
                              "protocol" == sk.nodeName && B.Gv.push(sk.textContent);
                            }
                          }
                        }
                      }
                    }
                    p.serviceData = B;
                  } else {
                    if ("activity-status" == l.nodeName && "urn:chrome.google.com:cast" == l.namespaceURI) {
                      p = e;
                      B = new fn;
                      G = 0;
                      for (T = l.childNodes.length;G < T;G++) {
                        P = l.childNodes[G], "description" == P.nodeName ? B.description = P.textContent : "image" == P.nodeName && (B.imageUrl = P.getAttribute("src"));
                      }
                      p.el = B;
                    } else {
                      e.extraData[l.nodeName] = l.textContent;
                    }
                  }
                }
              }
            }
          }
        }
        if ("unknown" == e.name) {
          a(c, null, "GET response missing name value");
        } else {
          if ("error" == e.state) {
            a(c, null, "GET response missing state value");
          } else {
            if ((f = /installable=(.+)/.exec(e.state)) && f[1]) {
              e.state = "installable", e.MG = f[1];
            } else {
              if ("running" != e.state && "stopped" != e.state) {
                a(c, null, "GET response has invalid state value");
                return;
              }
            }
            a(c, e, null);
          }
        }
      } else {
        a(c, null, "Invalid GET response (invalid service)");
      }
    } else {
      a(c, null, "Empty response");
    }
  } else {
    a(c, null, "Request to " + c.gj() + " failed");
  }
};
d.Ep = function(a) {
  var b = this.Sa.kc().mc;
  "/" != b.charAt(b.length - 1) && (b += "/");
  return b + a;
};
d.abort = function(a) {
  this.nc.abort(a);
};
d.Bj = function(a, b, c) {
  b = "[" + a + "]: " + b + " " + c.gj() + " => " + c.Da() + " (" + c.km() + ")";
  c.pa() ? (this.a.info(b), (c = c.cc()) && 0 < c.length && this.a.C("[" + a + "]: " + c)) : (b += ", error = " + c.Hi() + " (" + c.Ze() + ")", this.a.info(b));
};
d.tx = function(a, b, c) {
  return t(function(e) {
    e = e.target;
    this.Bj(a, b, e);
    c(e);
  }, this);
};
var mn = function(a, b) {
  this.Qe = a || null;
  this.Be = !!b;
  this.S = new D;
  this.R = new ln("", void 0);
  this.R.next = this.R.Pb = this.R;
};
d = mn.prototype;
d.Uw = function(a) {
  (a = this.S.get(a)) && this.Be && (a.remove(), this.Fw(a));
  return a;
};
d.get = function(a, b) {
  var c = this.Uw(a);
  return c ? c.value : b;
};
d.set = function(a, b) {
  var c = this.Uw(a);
  c ? c.value = b : (c = new ln(a, b), this.S.set(a, c), this.Fw(c));
};
d.WH = function() {
  return this.R.Pb.value;
};
d.shift = function() {
  return this.ww(this.R.next);
};
d.pop = function() {
  return this.ww(this.R.Pb);
};
d.remove = function(a) {
  return(a = this.S.get(a)) ? (this.removeNode(a), !0) : !1;
};
d.removeNode = function(a) {
  a.remove();
  this.S.remove(a.key);
};
d.L = function() {
  return this.S.L();
};
d.ob = function() {
  return this.S.ob();
};
d.kb = function() {
  return this.map(function(a, b) {
    return b;
  });
};
d.N = function() {
  return this.map(function(a) {
    return a;
  });
};
d.contains = function(a) {
  return this.some(function(b) {
    return b == a;
  });
};
d.Na = function(a) {
  return this.S.Na(a);
};
d.clear = function() {
  this.dw(0);
};
d.forEach = function(a, b) {
  for (var c = this.R.next;c != this.R;c = c.next) {
    a.call(b, c.value, c.key, this);
  }
};
d.map = function(a, b) {
  for (var c = [], e = this.R.next;e != this.R;e = e.next) {
    c.push(a.call(b, e.value, e.key, this));
  }
  return c;
};
d.some = function(a, b) {
  for (var c = this.R.next;c != this.R;c = c.next) {
    if (a.call(b, c.value, c.key, this)) {
      return!0;
    }
  }
  return!1;
};
d.every = function(a, b) {
  for (var c = this.R.next;c != this.R;c = c.next) {
    if (!a.call(b, c.value, c.key, this)) {
      return!1;
    }
  }
  return!0;
};
d.Fw = function(a) {
  this.Be ? (a.next = this.R.next, a.Pb = this.R, this.R.next = a, a.next.Pb = a) : (a.Pb = this.R.Pb, a.next = this.R, this.R.Pb = a, a.Pb.next = a);
  null != this.Qe && this.dw(this.Qe);
};
d.dw = function(a) {
  for (var b = this.S.L();b > a;b--) {
    this.removeNode(this.Be ? this.R.Pb : this.R.next);
  }
};
d.ww = function(a) {
  this.R != a && this.removeNode(a);
  return a.value;
};
var ln = function(a, b) {
  this.key = a;
  this.value = b;
};
ln.prototype.remove = function() {
  this.Pb.next = this.next;
  this.next.Pb = this.Pb;
  delete this.Pb;
  delete this.next;
};
var nn = chrome.i18n.getMessage("8879729374562274188"), on = chrome.i18n.getMessage("9217039427324387516"), pn = chrome.i18n.getMessage("872641383564597641"), qn = chrome.i18n.getMessage("7864119253243497594"), rn = chrome.i18n.getMessage("1104234694810969409"), sn = chrome.i18n.getMessage("2884726392788153618"), tn = chrome.i18n.getMessage("4687947362658561907"), un = chrome.i18n.getMessage("2942203478948533213"), vn = chrome.i18n.getMessage("8847227464712783239"), wn = chrome.i18n.getMessage("7661531377295243900"), 
xn = chrome.i18n.getMessage("2480373522051304868"), yn = chrome.i18n.getMessage("3268013795447421317"), zn = chrome.i18n.getMessage("8119187687393606810"), An = chrome.i18n.getMessage("5453859777568475949"), Bn = chrome.i18n.getMessage("6181212922679547742"), Cn = chrome.i18n.getMessage("3051639087648999069"), Dn = chrome.i18n.getMessage("2352372781778823685"), En = chrome.i18n.getMessage("3507952913562640185"), Fn = chrome.i18n.getMessage("1443898800503846063"), Gn = chrome.i18n.getMessage("4157951843472785441"), 
Hn = chrome.i18n.getMessage("4223394109936547558");
chrome.i18n.getMessage("8288732448265345962");
chrome.i18n.getMessage("1318160328466758792");
var In = chrome.i18n.getMessage("5849296180435940955"), Jn = chrome.i18n.getMessage("2081143677025752994");
var Kn = function(a, b) {
  this.title = a;
  this.message = b;
}, Ln = {};
Ln.activity_error = new Kn(nn, on);
Ln.channel_error = new Kn(pn, qn);
Ln.launch_failure = new Kn(rn, sn);
Ln.device_offline = new Kn(tn, un);
Ln.bad_device = new Kn(vn, wn);
Ln.session_quality_network = new Kn(xn, yn);
Ln.session_quality_encoding = new Kn(zn, An);
Ln.unsupported_plugin_detected = new Kn(Bn, Cn);
Ln.known_issue_bad_intel_cpu = new Kn(Dn, En);
Ln.chrome_too_old_for_v2 = new Kn(Fn, Gn);
var Mn = function(a, b) {
  this.displayText = a;
  this.Va = b;
}, Nn = new Mn(Hn), On = function(a) {
  return new Mn(In, function() {
    window.open(a);
  });
}, Pn = function(a, b, c, e, f, g, h) {
  this.id = Ka();
  this.timestamp = (new Date).getTime();
  this.type = a;
  this.title = b;
  this.message = c;
  this.defaultAction = e;
  this.optAction = f;
  this.severity = g || "fatal";
  this.activityId = h || null;
};
Pn.prototype.SD = function() {
  return new em(this.id, this.title, this.message, this.defaultAction.displayText, this.optAction ? this.optAction.displayText : null, this.ML(this.severity), this.activityId);
};
Pn.prototype.ML = function(a) {
  return "fatal" == a ? "fatal" : "warning";
};
var Qn = function() {
  Q.call(this);
  this.wc = new mn;
};
v(Qn, Q);
ca(Qn);
var Rn = function(a, b, c, e, f, g, h) {
  a = new Pn(a, e || Ln[a].title, f || Ln[a].message, b, c, g || "fatal", h);
  Qn.G().rI(a);
  return a.id;
};
d = Qn.prototype;
d.k = function() {
  Qn.t.k.call(this);
  this.wc.clear();
};
d.Sh = function() {
  return 0 < this.wc.L();
};
d.rI = function(a) {
  this.wc.set(a.id, a);
  this.dispatchEvent("new_issue");
};
d.qt = function(a, b) {
  var c = this.wc.get(a);
  if (c) {
    var e = null;
    b ? e = c.defaultAction.Va : c.optAction && (e = c.optAction.Va);
    e && e();
    this.wc.remove(a);
    this.vp();
  }
};
d.AJ = function() {
  this.Sh() && (this.wc.clear(), this.vp());
};
d.PC = function(a) {
  if (this.Sh() && a) {
    var b = [];
    this.wc.N().forEach(function(c) {
      c.activityId == a && b.push(c.id);
    }, this);
    this.mw(b);
  }
};
d.XG = function(a) {
  if (this.Sh()) {
    var b = [];
    this.wc.N().forEach(function(c) {
      c.type == a && b.push(c.id);
    }, this);
    this.mw(b);
  }
};
d.mw = function(a) {
  a.forEach(function(a) {
    this.wc.remove(a);
  }, this);
  a.length && this.vp();
};
d.vp = function() {
  this.dispatchEvent("remove_issue");
};
d.Pt = function() {
  var a = C(this.wc.N(), function(a) {
    return "known_issue_bad_intel_cpu" == a.type;
  });
  return a ? a : this.wc.WH() || null;
};
var Sn = function() {
  Ye.call(this);
  this.uk = new D;
  this.$f = new D;
};
v(Sn, Ye);
d = Sn.prototype;
d.kj = function(a) {
  return this.uk.get(a) || null;
};
d.qe = function(a) {
  return this.$f.get(a) || [];
};
d.Am = function(a) {
  return A(this.be(), function(b) {
    return b.Ix() && b.Ix() == a;
  });
};
d.du = function(a) {
  this.Hr(-1, a);
};
d.Hr = function(a, b) {
  Sn.t.du.call(this, b);
  this.uk.set(b.c(), a);
  var c = this.$f.get(a);
  c ? c.push(b) : this.$f.set(a, [b]);
};
d.mk = function(a) {
  var b = this.dc(a);
  Sn.t.mk.call(this, a);
  b.forEach(function(a) {
    this.Ea(a.c()) || this.ze(a);
  }, this);
};
d.ze = function(a) {
  var b = a.c(), c = this.kj(b);
  this.uk.remove(b);
  var e = this.$f.get(c);
  ub(e, function(a) {
    return a.c() == b;
  });
  0 == e.length && this.$f.remove(c);
  Sn.t.ze.call(this, a);
};
d.Lf = function(a) {
  this.Ea(a) && this.ze(this.Ea(a));
};
d.pI = function(a) {
  this.qe(a).forEach(function(a) {
    this.uk.remove(a.c());
    Sn.t.ze.call(this, a);
  }, this);
  this.$f.remove(a);
};
var Tn = function(a, b, c, e) {
  w(q(chrome.tabCapture), "chrome.tabCapture not available. Did you set the flag?");
  Hf.call(this, !0, b, e);
  this.Tl(a);
  this.Gu = t(this.KF, this);
  this.zh = null;
  this.W = c;
  this.Io = new jf(5E3);
  this.Gh(this.Io);
  this.q = new R(this);
  this.Gh(this.q);
  this.Pn = !1;
  this.Wj = null;
};
v(Tn, Hf);
var Un = new D, Vn = function(a) {
  var b = Un.get(a);
  b && (Un.remove(a), b.ended || b.stop());
}, Wn = function(a, b) {
  Vn(a);
  Un.set(a, b);
};
d = Tn.prototype;
d.rf = function() {
  return{tab_id:this.I(), settings:this.Sc};
};
d.ev = function() {
  var a = {audio:!0, video:!0, audioConstraints:{mandatory:{googEchoCancellation:!1, googAutoGainControl:!1, googNoiseSuppression:!1, googHighpassFilter:!1}}, videoConstraints:{mandatory:{minWidth:this.Sc.minWidth, minHeight:this.Sc.minHeight, maxWidth:this.Sc.minWidth, maxHeight:this.Sc.minHeight, maxFrameRate:this.Sc.lowFpsMode ? 1 : this.Sc.maxFrameRate}}};
  this.Sc.enablePacing && (a.videoConstraints.mandatory.googLeakyBucket = !0);
  return a;
};
d.jE = function() {
  var a = {audio:!1, video:{mandatory:{chromeMediaSource:"screen", maxWidth:1920, maxHeight:1080, googLeakyBucket:!0}}}, b = Sj() && 0 <= Ma(Md, "30.0.1584.0"), c = ec && 0 <= Ma(Md, 31);
  if (b || c) {
    a.audio = {mandatory:{chromeMediaSource:"system"}};
  }
  return a;
};
d.xk = function(a) {
  Tn.t.xk.call(this, n);
  O(this.Vb, "iceconnected", t(this.qF, this));
  this.Vb.vF(t(this.sF, this));
  Vn(this.I());
  this.xt() ? this.tF(a) : this.uF(a);
};
d.tF = function(a) {
  w(this.xt());
  this.l.info("Starting desktop capture");
  navigator.webkitGetUserMedia(this.jE(), t(this.Qt, this, a), t(function() {
    this.l.e("Failed to capture desktop");
    a(!1, "Failed to capture desktop");
  }, this));
};
d.uF = function(a) {
  w(this.ok());
  this.l.info("Starting capture on tab id " + this.I());
  this.l.info("  media constraints: " + JSON.stringify(this.ev()));
  Ym(this.I(), t(function() {
    chrome.tabCapture.capture(this.ev(), t(function(b) {
      S(this.MF, 6E3, this);
      this.Qt(a, b);
    }, this));
  }, this));
};
d.Kf = function() {
  this.Vb.sG() ? this.l.info("Tab mirroring already started.") : (this.l.info("Starting tab mirroring..."), w(this.stream, "Expecting non-null stream"), this.zh = Date.now(), this.Vb.start(this.ok()), this.Zn("start"), this.ok() && this.tG());
};
d.tG = function() {
  w(this.ok());
  chrome.tabCapture.onStatusChanged.addListener(this.Gu);
  this.Vk(t(chrome.tabCapture.onStatusChanged.removeListener, chrome.tabCapture.onStatusChanged, this.Gu));
  var a = this.W.listen("full_screen_video_status", this.IF, this);
  this.Vk(t(this.W.fg, this.W, a));
  a = this.W.listen("unsupported_plugin_detected", this.ot, this);
  this.Vk(t(this.W.fg, this.W, a));
  this.q.listen(this.Io, "tick", this.CF);
  this.Io.start();
  this.nt();
};
d.Qt = function(a, b) {
  var c = chrome.extension.lastError;
  c ? (c = JSON.stringify(c), this.l.e("Error: " + c), -1 != c.indexOf("permission") && (c = "Please enable the Tab Capture API in flags and manifest.", this.l.e(c)), a(!1, c)) : b ? "stopped" == this.Q() ? (b.stop(), a(!1, "The activity was stopped.")) : (b.onended = t(function() {
    this.l.info("Get stream ended event.");
    this.dispatchEvent(new Te("activity_request_stop", this.c()));
  }, this), Wn(this.I(), b), this.stream = b, this.url = window.webkitURL.createObjectURL(this.stream), this.l.info("Got stream with URL"), this.Vb.addStream(this.stream), a(!0)) : (this.l.e("Failed to get stream."), a(!1, "Failed to get stream."));
};
d.Dd = function() {
  Tn.t.Dd.call(this);
  this.stream && (this.l.info("Stopping local stream..."), this.stream.stop(), Vn(this.I()));
  this.stream = null;
  this.Zn("stop");
  Qn.G().PC(this.c());
};
d.ty = function() {
  this.zh = null;
};
d.Ce = function(a) {
  Tn.t.Ce.call(this, a);
  "performance" == a.type && this.l.info("Remote performance event: " + JSON.stringify(a.message));
};
d.KF = function(a) {
  this.l.info("Got flash video full screen status update");
  this.qv(a.fullscreen);
};
d.IF = function(a, b) {
  a.id == this.I() && (this.l.info("Got video tab full screen status update"), this.qv(cb(b)));
};
d.UG = function() {
  if ("stopped" != this.Q()) {
    try {
      this.ot({id:this.I()}, !1), this.nt();
    } catch (a) {
      this.l.e("Inject content script failed");
    }
  }
};
d.nt = function() {
  chrome.tabs.get(this.I(), t(function(a) {
    if (a.url && 0 != a.url.lastIndexOf("chrome://", 0)) {
      try {
        chrome.tabs.executeScript(this.I(), {file:"mirror_content_script.js"});
      } catch (b) {
        this.l.info("Failed to inject content script");
      }
    }
  }, this));
};
d.qv = function(a) {
  "new" != this.Q() && "initialized" != this.Q() && "stopped" != this.Q() && (this.zoomFactor = 1, a && this.Sc.zoomModeEnabled && (this.zoomFactor = Math.max(1, 16 / 9 / (window.screen.width / window.screen.height))), this.l.info("sending ZOOM message, zoom=" + this.zoomFactor), this.RF("zoom"));
};
d.ot = function(a, b) {
  if (a.id == this.I()) {
    this.l.C("Unsupported plugin: " + b);
    var c = cb(b);
    c && !this.Pn ? this.Wj = Rn("unsupported_plugin_detected", Nn, On("http://support.google.com/chromecast/go/nativeplugins"), void 0, void 0, "warning", this.c()) : !c && this.Pn && this.Wj && (Qn.G().qt(this.Wj, !0), this.Wj = null);
    this.Pn = c;
  }
};
d.CF = function() {
  this.W.ss(this.I(), "detect_unsupported_plugin", {});
};
d.sF = function() {
  this.su();
};
d.su = function() {
  Rn("channel_error", Nn);
  this.dispatchEvent(new Te("activity_request_stop", this.c()));
};
d.qF = function() {
  if (0 <= Ma(Md, 31)) {
    var a = 0, b = t(function() {
      a++;
      this.l.info("Checking certificate " + a);
      if (3 < a) {
        this.l.e("No certificate"), this.su();
      } else {
        var c = t(function(a) {
          a ? this.l.info("Got certificate") : S(b, 1E3);
        }, this);
        this.mE(c);
      }
    }, this);
    b();
  }
};
d.mE = function(a) {
  var b = t(function(b) {
    b = b.result() || [];
    for (var e = 0;e < b.length;e++) {
      var f = b[e].stat("googDerBase64");
      if (f) {
        Pf ? f = k.atob(f) : (f = Rf(f, void 0), f = String.fromCharCode.apply(null, f));
        f = Xn(f);
        f instanceof Array && f[0] instanceof Array && f[0][0] instanceof Array ? (f = f[0][0], f = 5 > f.length ? null : {issuer:Yn(f[1]), subject:Yn(f[3])}) : f = null;
        if (f.issuer && "Google Inc" == f.issuer.organizationName && "Eureka Gen1 ICA" == f.issuer.commonName) {
          a(!0);
          return;
        }
        f.issuer ? this.l.info("Wrong issuer: " + f.issuer.organizationName + ", " + f.issuer.commonName) : this.l.info("Got PEM without issuer.");
      } else {
        this.l.info("PEM is null.");
      }
    }
    a(!1);
  }, this);
  this.Vb.getStats(b);
};
d.MF = function() {
  "stopped" != this.Q() && chrome.tabs.get(this.I(), function(a) {
    if (a) {
      var b = a.windowId;
      chrome.windows.get(b, function(a) {
        if (a && "fullscreen" != a.state) {
          var e = a.height;
          chrome.windows.update(b, {height:e - 1}, n);
          S(function() {
            chrome.windows.update(b, {height:e}, n);
          }, 50);
        }
      });
    }
  });
};
var Zn = function(a, b) {
  N.call(this, "media_status");
  this.cmdId = a;
  this.status = b;
};
v(Zn, N);
var $n = function(a) {
  N.call(this, "media_key_request");
  this.Pv = a;
};
v($n, N);
var ao = function(a, b, c) {
  N.call(this, "custom_message");
  this.activityId = a;
  this.namespace = b;
  this.message = c;
};
v(ao, N);
var bo = function(a) {
  pf.call(this, a, new Sn);
  this.a = I("cv.sender.ActivityService");
};
v(bo, pf);
d = bo.prototype;
d.A = function() {
  bo.t.A.call(this);
  this.lb.listen(this.Jc, "ramp", this.ME);
  this.lb.listen(this.Jc, "channel_error", this.Qh);
};
d.Ts = function(a) {
  var b = this.T.dc(a);
  b.forEach(function(a) {
    w(1 == a.Ra().length, "Expect activity " + a.c() + " has exactly one peer.");
    this.Jm(a.c());
    a.stop();
  }, this);
  this.T.mk(a);
  b.forEach(function(a) {
    this.dispatchEvent(new qf("remove_activity", a.c()));
  }, this);
};
d.Jm = function(a) {
  this.wf().Zc(this.T.Ea(a), "activity_error", this.aj);
};
d.mi = function() {
  return mb(this.be(), function(a) {
    return a.isLocal();
  });
};
d.sH = function() {
  return mb(this.be(), function(a) {
    return!a.isInternal() && a.isLocal();
  });
};
d.Ji = function(a) {
  var b = this.T.dc(a);
  return 0 < b.length ? (w(1 == b.length, "receiver " + a + " has more than one activities"), b[0]) : null;
};
d.Jy = function() {
  var a = this.wd();
  a && this.ke(a.c());
};
d.Iy = function(a) {
  return!!this.jk(a);
};
d.Hy = function() {
  var a = this.wd();
  return a ? a.Ra()[0].Bd() : null;
};
d.jk = function(a) {
  return(a = C(this.T.qe(a), function(a) {
    return "mirror_tab" == a.La();
  })) && db(a, Tn);
};
d.zz = function() {
  return A(this.be(), function(a) {
    return!a.isInternal();
  });
};
d.Wq = function(a) {
  this.T.Lf(a);
  this.dispatchEvent(new qf("remove_activity", a));
};
d.qe = function(a) {
  return this.T.qe(a);
};
d.Am = function(a) {
  return this.T.Am(a);
};
d.kj = function(a) {
  return this.T.kj(a);
};
d.nq = function(a, b) {
  this.a.info("Add new activity: " + b.c());
  this.T.Hr(a, b);
  this.wf().Tg(b, "activity_error", this.aj);
  this.wf().Tg(b, "activity_request_stop", function(a) {
    this.ke(a.activityId);
  });
  this.dispatchEvent(new qf("new_activity", b.c()));
};
d.aj = function(a) {
  w("activity_error" == a.type);
  this.a.info("Handle activity error: " + a.errorMessage);
  this.T.kj(a.activityId);
  var b = this.T.Ea(a.activityId);
  this.Vq(b);
  this.T.Lf(a.activityId);
  Rn("activity_error", Nn);
};
d.zH = function(a) {
  this.a.info("Handling tab closing: " + a);
  a = this.T.qe(a).slice(0);
  a.forEach(function(a) {
    this.T.ze(a);
  }, this);
  return this.JB(a);
};
d.DH = function(a, b) {
  var c = this.T.Ea(a);
  if (!c) {
    return this.a.info("Trying to leave a non-existing activity: " + a), af("non-existing activity");
  }
  this.a.info("Leaving activity: " + a);
  this.T.Lf(a);
  return this.Js(c, b);
};
d.ke = function(a, b) {
  var c = this.T.Ea(a);
  if (!c) {
    return this.a.info("Trying to stop a non-existing activity: " + a), af("non-existing activity");
  }
  this.a.info("Stopping activity: " + a);
  this.T.Lf(a);
  return this.wm(c, b);
};
d.oy = function(a, b) {
  var c = this.T.dc(a);
  this.T.mk(a);
  return this.jw(c, b);
};
d.uy = function(a, b) {
  var c = this.T.qe(a);
  this.T.pI(a);
  return this.jw(c, b);
};
d.ez = function(a) {
  var b = a.Ra()[0];
  w(b.isLocal(), "not a local receiver");
  var b = new jn(b), c = new K;
  b.Qr(a.Qb(), function(b) {
    b.pa() ? c.ja(null) : c.Qa("Failed to stop " + a.Qb());
  });
  return c;
};
d.wm = function(a, b) {
  this.a.info("Stopping activity: " + a.La() + " " + a.c());
  var c = new K;
  a.stop();
  this.wf().Zc(a, "activity_error", this.aj);
  var e = a.Ra()[0];
  a.isInternal() ? (this.Vq(a), c.ja(null)) : e.isLocal() ? c = this.ez(a) : c.ja(null);
  b || this.Jc.ne(e.c());
  this.dispatchEvent(new qf("remove_activity", a.c()));
  return c;
};
d.Js = function(a, b) {
  if (!a.isInternal()) {
    return af();
  }
  if ("mirror_tab" == a.La()) {
    return this.wm(a, b);
  }
  this.a.info("Leaving activity: " + a.La() + " " + a.c());
  this.wf().Zc(a, "activity_error", this.aj);
  var c = a.Ra()[0];
  this.pz(a);
  b || this.Jc.ne(c.c());
  this.dispatchEvent(new qf("leave_activity", a.c()));
  return $e(null);
};
d.jw = function(a, b) {
  if (0 == a.length) {
    return $e(null);
  }
  var c = [];
  a.forEach(function(a) {
    c.push(this.wm(a, b));
  }, this);
  return 1 == c.length ? c[0] : hf.apply(null, c);
};
d.JB = function(a, b) {
  if (0 == a.length) {
    return $e(null);
  }
  var c = [];
  a.forEach(function(a) {
    c.push(this.Js(a, b));
  }, this);
  return 1 == c.length ? c[0] : hf.apply(null, c);
};
d.ME = function(a) {
  var b, c, e;
  w("ramp" == a.type);
  Yc(this.a, "Received a RAMP message from receiver " + a.X, a.message);
  var f = this.Tq(a);
  if (f) {
    if ("dial_non_ramp_activity" == f.La() && (this.a.info("Update activity to RAMP: " + f.c()), f.me("dial_ramp_activity")), a = a.message, sd(a, "KEY_REQUEST")) {
      (b = sd(a, "KEY_REQUEST") && null != a.method && null != a.requests ? new kd(f.c(), a.cmd_id, a.method, a.requests) : null) ? this.dispatchEvent(new $n(b)) : this.a.e("Invalid key request message");
    } else {
      if (null == a.cmd_id || null == a.type || "RESPONSE" != a.type && "STATUS" != a.type || null == a.status) {
        c = b = null, e = "Invalid RAMP message: " + JSON.stringify(a);
      } else {
        try {
          var g = a.status, h = new hd("", J(g, "state", !0));
          h.eventSequenceId = J(g, "event_sequence", !0);
          h.contentId = J(g, "content_id", !1);
          h.title = J(g, "title", !1);
          h.imageUrl = J(g, "image_url", !1);
          h.timeProgress = J(g, "time_progress", !0);
          h.position = J(g, "current_time", !0);
          h.duration = J(g, "duration", !1);
          h.volume = J(g, "volume", !0);
          h.muted = J(g, "muted", !0);
          h.contentInfo = J(g, "content_info", !1);
          h.mediaTracks = td(J(g, "tracks", !1, []));
          h.hasPause = J(g, "has_pause", !1);
          var l = J(g, "error", !1);
          h.error = l ? {domain:J(l, "domain", !0), code:J(l, "code", !0), error_info:J(l, "error_info", !1)} : null;
          b = a.cmd_id;
          c = h;
          e = null;
        } catch (p) {
          c = b = null, e = "Invalid RAMP message " + JSON.stringify(a) + ": " + p;
        }
      }
      e ? this.a.e(e) : (c.activityId = f.c(), f.Ey(c), c.title && f.Jg(c.title, c.imageUrl, 3), this.dispatchEvent(new Zn(b, c)));
    }
  }
};
d.Vw = function(a) {
  w("custom_message" == a.type);
  Yc(this.a, "Received a custom message from receiver " + a.X, a.message);
  var b = this.Tq(a);
  if (b) {
    var c = x(a.message[0]);
    this.dispatchEvent(new ao(b.c(), c, a.message[1]));
  }
};
d.Tq = function(a) {
  if (!a.X) {
    return Yc(this.a, "Received a message without a peer", a.message), null;
  }
  var b = this.Ji(a.X);
  b || this.a.e("Cannot find activity for peerId: " + a.X);
  return b;
};
d.Qh = function(a) {
  a.X ? (a = this.T.dc(a.X), 0 != a.length && "mirror_tab" == a[0].La() && Rn("channel_error", Nn)) : this.a.e("Got channel error event without peer ID");
};
var co = function(a, b) {
  R.call(this, this);
  this.a = I("cv.SessionAnalyzer");
  this.r = a;
  this.Br = b || yf.G();
  this.um = this.qj = 0;
  this.Fm = !1;
  this.Ga = null;
  var c = L.G().ij();
  this.Ga = c ? c : new ke;
};
v(co, R);
co.prototype.A = function() {
  this.listen(this.r, "new_activity", this.MH);
};
co.prototype.MH = function(a) {
  "mirror_tab" == this.r.Ea(a.activityId).La() && (this.um = u(), this.Fm = !1, 0 < this.Ga.sessionsBeforeWarning && this.Ga.sessionsBeforeWarning--, 0 == this.Ga.sessionsBeforeWarning && (this.Ga.earliestTimeToShowWarning = this.um), L.G().Ck(this.Ga), this.Br.oE(t(this.nE, this)));
};
var eo = [["32", "33", ec, 4, "x86_64", "i5-3317U"], ["32", "33", ec, 4, "x86_64", "i5-3337U"]];
d = co.prototype;
d.nE = function() {
  if (!this.qJ()) {
    return!1;
  }
  var a = this.Br.pJ(30);
  if (!a) {
    return!1;
  }
  var b = this.nx(a.senderStats), c = this.nx(a.receiverStats);
  return b && c && b > this.qj && c > this.qj ? (this.qj = Math.max(b, c), a = this.nJ(a.senderStats, a.receiverStats), this.mJ(a), !0) : !1;
};
d.nx = function(a) {
  a = a[a.length - 1][0];
  return a ? (a = a.timestamp) ? (new Date(a)).getTime() : null : null;
};
d.qJ = function() {
  return u() >= this.Ga.earliestTimeToShowWarning && 0 == this.Ga.sessionsBeforeWarning;
};
d.cK = function(a) {
  return 9E4 > a.rn ? (this.a.C("isEligibleSession = false: " + a.rn + " ms < 90000 ms"), !1) : a.Fe && 0.2 <= a.Fe ? (this.a.C("isEligibleSession = false: staticContentFraction " + a.Fe + " >= 0.2"), !1) : !0;
};
d.mJ = function(a) {
  this.dK(a);
  this.cK(a) && (this.aK(), this.$J(a), this.bK(a));
};
d.aK = function() {
  this.Ga.intelBadCpuWarningDismissed || this.Fm || chrome.system.cpu.getInfo(t(function(a) {
    this.a.C("Analyzing cpuInfo: " + JSON.stringify(a));
    for (var b = 0, c = eo.length;b < c;b++) {
      var e = eo[b];
      e[2] && 0 <= Ma(Md, e[0]) && !(0 <= Ma(Md, e[1])) && a.numOfProcessors == e[3] && a.archName == e[4] && -1 < a.modelName.indexOf(e[5]) && this.xn("known_issue_bad_intel_cpu", "Intel CPU " + a.modelName + " has known issues on this release of Chrome");
    }
    this.Fm = !0;
  }, this));
};
d.dK = function(a) {
  a.Ee && 0.1 >= a.Ee ? (this.a.C("Clearing warnings: lowFramerateFraction " + a.Ee + " <= 0.1"), this.Is("session_quality_encoding")) : a.Fe && 0.2 <= a.Fe && (this.a.C("Clearing warnings: staticContentFraction " + a.Fe + " >= 0.2"), this.Is("session_quality_encoding"));
};
d.$J = function(a) {
  a.Ee && 0.2 <= a.Ee && this.xn("session_quality_encoding", "Frame rate encoding/sending rate is too low " + 100 * a.Ee + "% of the time");
};
d.bK = function(a) {
  a = a.ks / a.ls;
  0.03 < a && this.xn("session_quality_network", "Packet loss rate of " + 100 * a + "% is too high");
};
var fo = function() {
  this.Ee = this.Fe = this.rn = this.ls = this.ks = this.YA = this.XA = null;
};
d = co.prototype;
d.nJ = function(a, b) {
  this.a.C("Computing session stats. Sender: " + JSON.stringify(a[0]) + " (" + a.length + " samples);  Receiver: " + JSON.stringify(b[0]) + " (" + b.length + " samples)");
  var c = new fo;
  c.rn = this.qj - this.um;
  c.XA = this.ts(a, "googFrameRateInput", 10);
  c.YA = this.ts(a, "googFrameRateSent", 10);
  c.Fe = this.us(a, "googFrameRateInput", 2);
  c.Ee = this.us(a, "googFrameRateSent", 20);
  c.ks = this.vs(b, "packetsLost", 10);
  c.ls = this.vs(a, "packetsSent", 10);
  this.a.info("Session stats: " + JSON.stringify(c));
  return c;
};
d.vs = function(a, b, c) {
  return this.Ux(a, b, c, !0);
};
d.ts = function(a, b, c) {
  return this.Ux(a, b, c, !1);
};
d.us = function(a, b, c) {
  for (var e = 0, f = 0, g = 0, h = a.length;g < h;g++) {
    for (var l = a[g], p = 0, B = l.length;p < B;p++) {
      null != l[p][b] && (f++, Na(l[p][b]) <= c && e++);
    }
  }
  return 0 == f ? void 0 : e / f;
};
d.Ux = function(a, b, c, e) {
  for (var f = 0, g = 0, h = a.length - 1;g < c && 0 <= h;) {
    var l = a[h];
    if (l) {
      for (var p = 0;p < l.length;p++) {
        null != l[p][b] && (g++, f += Na(l[p][b]));
      }
      h--;
    }
  }
  return g >= c ? e ? f : 1 * f / g : null;
};
d.Bz = function(a) {
  switch(a) {
    case "session_quality_network":
    ;
    case "session_quality_encoding":
      this.TA();
      break;
    case "known_issue_bad_intel_cpu":
      this.SA();
      break;
    default:
      this.a.e("Don't know how to dismiss " + a);
  }
};
d.TA = function() {
  this.Ga.dismissClicks++;
  switch(this.Ga.dismissClicks) {
    case 1:
      this.Ga.sessionsBeforeWarning = 1;
      break;
    case 2:
      this.Ga.sessionsBeforeWarning = 10;
      this.jj(7776E6);
      break;
    default:
      this.Ga.sessionsBeforeWarning = Number.POSITIVE_INFINITY, this.jj(7776E6);
  }
  L.G().Ck(this.Ga);
};
d.SA = function() {
  this.Ga.intelBadCpuWarningDismissed = !0;
  L.G().Ck(this.Ga);
};
d.Is = function(a) {
  Qn.G().XG(a);
  this.jj(3E4);
  L.G().Ck(this.Ga);
};
d.xn = function(a, b) {
  this.a.info("About to send warning " + a + ", " + (b ? b : "(no description)"));
  var c;
  "session_quality_network" == a ? c = "http://support.google.com/chromecast/go/networkingissues" : "session_quality_encoding" == a ? c = "http://support.google.com/chromecast/go/limitedperformance" : "known_issue_bad_intel_cpu" == a ? c = "https://support.google.com/chromecast/answer/4444160" : Za("Invalid issue type: " + a);
  this.jj(3E4);
  var e = this.r.wd();
  e && c && (this.a.info("Adding issue " + a), Rn(a, new Mn(Jn, t(this.Bz, this, a)), On(c), void 0, void 0, "warning", e.c()));
};
d.jj = function(a) {
  this.Ga.earliestTimeToShowWarning = Math.max(this.Ga.earliestTimeToShowWarning, u() + a);
};
var go = function(a) {
  this.rb = a;
  this.a = I("cv.sender.WebSocketChannelFactory");
};
go.prototype.xf = function(a) {
  this.a.info("Creating local web socket channel...");
  var b = new K, c = function(a) {
    "pending" == b.Q() && b.ja(a);
  }, e = function(a) {
    "pending" == b.Q() && b.Qa(a || "Create channel failed.");
  }, f = t(function(a, b, c) {
    c && c.serviceData && c.serviceData.bm ? a.Jl(c.serviceData.bm) : a.Bg("Could not get connection service URL");
  }, this), g = t(function(a) {
    this.a.info("Requesting channel creation at " + a);
    var b = h, c = JSON.stringify({channel:0, senderId:new Oh(this.rb)}), e = new yh;
    Bh.push(e);
    b && e.listen("complete", b);
    e.Tg("ready", e.wy);
    e.send(a, "POST", c, {"Content-Type":"application/json"});
  }, this), h = t(function(b) {
    b = b.target;
    if (b.pa()) {
      b = b.Jq();
      this.a.info("Ready to create websocket channel with " + JSON.stringify(b));
      this.a.info("The ID of this sender: " + this.rb);
      var f = new Nh(b.URL);
      f.X = a.c();
      b.pingInterval && 0 < b.pingInterval ? f = new Mh(f, "pong", 1E3 * b.pingInterval) : this.a.info("Created a channel without ping to receiver: " + a.c());
      f.Eq(na(c, f), e);
    } else {
      this.a.info("XHR error getting websocket URL: " + b.Ze()), e("Failed to get websocket connection URL.");
    }
  }, this), l = new jn(a), p = new Qj;
  p.Ml(16);
  p.Di(500);
  p.hq(1);
  p.start(function(a) {
    l.Gq(na(f, a));
  }, g, e);
  return b;
};
var ho = function(a) {
  this.a = I("cv.sender.CloudChannelFactory");
  this.Fc = a;
};
ho.prototype.xf = function(a) {
  w(null != a.sr());
  var b = new K;
  this.Fc.qz().Bb(t(function() {
    this.a.info("Opening cloud channel to id: " + a.c());
    var c = this.Fc.rz(a.c());
    Fe(c, "a", t(function(a) {
      this.a.info("New state: " + a.Rg);
      "connected" == a.Rg ? b.ja(c) : b.Qa(c.getError() || "Error creating CloudChannel");
    }, this));
  }, this));
  return b;
};
var io = function(a, b, c) {
  this.a = I("cv.CloudDiscovery");
  this.ub = new $h;
  this.bd = new ai(this.ub);
  this.ih = new ci(this.bd);
  this.Og = new Oj(this.bd, this.ih);
  this.Fc = new Nj(c, this.ub, this.Og, t(function(a) {
    this.ih.Um().Bb(function(b) {
      a(b.Fa());
    });
  }, this));
  this.Bf = new ho(this.Fc);
  this.O = a;
  this.jc = 0;
  b.pA(this.Bf);
};
v(io, M);
io.prototype.A = function() {
  this.refresh();
};
io.prototype.refresh = function(a) {
  !a && 1E4 > u() - this.jc || (this.jc = u(), this.a.info("Starting a device list from cloud."), this.Og.jC(t(this.Kd, this)));
};
io.prototype.Kd = function(a, b) {
  if (b) {
    var c = 0, e = [];
    for (c in a) {
      e.push(a[c].guid);
    }
    this.O.Ir(function(a) {
      return a.Rm() && -1 == e.indexOf(a.c());
    });
    for (c in a) {
      this.O.register(cn(a[c].guid, a[c].displayName));
    }
  } else {
    this.a.info("Cloud device list error.");
  }
};
var jo = function(a, b) {
  R.call(this, this);
  this.a = I("cv.BrowserIconManager");
  this.r = a;
  this.Za = b;
  this.Eb = Qn.G();
  this.Ej = null;
};
v(jo, R);
jo.prototype.A = function() {
  this.listen(this.r, "new_activity", this.qd);
  this.listen(this.r, "leave_activity", this.qd);
  this.listen(this.r, "remove_activity", this.qd);
  this.listen(this.Eb, "new_issue", this.qd);
  this.listen(this.Eb, "remove_issue", this.qd);
  this.listen(this.Za, "new_session", this.qd);
  this.listen(this.Za, "session_removal", this.qd);
};
jo.prototype.qd = function() {
  var a = this.zC();
  this.Ej != a && (this.a.info("Set icon to " + a), this.Ej = a, chrome.browserAction.setIcon({path:{38:this.Ej, 19:this.Ej}}));
};
jo.prototype.zC = function() {
  if (this.Eb.Sh()) {
    var a = this.Eb.Pt();
    if ("fatal" == a.severity) {
      return "data/icon38_issue.png";
    }
    if ("warning" == a.severity) {
      return "data/icon38_warning.png";
    }
  }
  return this.r.mi() || this.Za.mi() ? "data/icon38_on.png" : "data/icon38_off.png";
};
var ko = function() {
  this.configId = this.Wz = this.Df = this.Nm = this.an = this.mc = this.ipAddress = this.friendlyName = this.deviceLabel = this.uniqueId = null;
};
ko.prototype.ve = function() {
  return this.deviceLabel ? this.uniqueId ? this.friendlyName ? this.ipAddress ? this.mc ? this.an ? this.Nm ? null : "Missing expireTimeMillis" : "Missing fetchTimeMillis" : "Missing appUrl" : "Missing ipAddress" : "Missing friendlyName" : "Missing uniqueId" : "Missing deviceLabel";
};
ko.prototype.toString = function() {
  return JSON.stringify(this, function(a, b) {
    return s(b) && 0 == b.indexOf("uuid:") ? "***" : b;
  });
};
var mo = function(a) {
  this.Be = new D;
  this.Cd = new Yb;
  a || (lo || (lo = new Wh(3, null, 1, 10, 2E3)), a = lo);
  this.nc = a;
  this.a = I("cv.DeviceDescriptionService");
}, lo = null;
d = mo.prototype;
d.Jr = function(a, b) {
  var c = this.YJ(a);
  c ? b(c, null) : this.Cd.contains(a.deviceLabel) ? b(null, "Duplicate request for device " + a.deviceLabel) : this.ZJ(a, b);
};
d.KK = function() {
  this.Cd.N().forEach(t(function(a) {
    this.nc.abort(a, !0);
  }, this));
};
d.YJ = function(a) {
  var b = this.Be.get(a.deviceLabel);
  return b ? b.configId != a.configId || u() >= b.Nm ? (this.a.C("Removing invalid entry " + b.toString()), this.Be.remove(a.deviceLabel), null) : b : null;
};
d.ZJ = function(a, b) {
  this.Cd.add(a.deviceLabel);
  this.nc.send(a.deviceLabel, a.deviceDescriptionUrl, "GET", null, null, 0, t(this.rJ, this, a, b));
};
d.rJ = function(a, b, c) {
  this.Cd.remove(a.deviceLabel);
  c = c.target;
  this.Bj("fetchDeviceDescription", "GET", c);
  if (c.pa()) {
    var e = c.Zr();
    e ? (c = this.ZA(c, a, e)) ? (this.a.C("Got device description " + c.toString()), null != c.configId && (this.a.info("Caching device description for " + c.deviceLabel), this.Be.set(a.deviceLabel, c)), b(c, null)) : b(null, "Invalid device description") : b(null, "Invalid or empty response");
  } else {
    b(null, "Request to " + c.gj() + " failed");
  }
};
d.ZA = function(a, b, c) {
  var e = new ko;
  e.an = u();
  e.Nm = e.an + 18E5;
  e.deviceLabel = b.deviceLabel;
  e.configId = b.configId;
  e.mc = a.getResponseHeader("Application-URL") || null;
  e.ipAddress = Ag(e.mc).fc();
  e.Df = no(c, "deviceType");
  e.Wz = no(c, "modelName");
  e.friendlyName = no(c, "friendlyName");
  if (a = e.friendlyName) {
    a = Ea(a, 200), a = ya(a);
  }
  e.friendlyName = a;
  e.uniqueId = no(c, "UDN");
  a = e.ve();
  this.a.info("Device description: " + oo(c));
  return a ? (this.a.e("Device description failed to validate (" + a + "): " + JSON.stringify(e)), null) : e;
};
var no = function(a, b) {
  var c = a.getElementsByTagName(b);
  return c && 0 != c.length ? c[0].textContent : null;
}, oo = function(a) {
  var b = function(a) {
    for (var b = 0, f = a.length;b < f;b++) {
      a[b].textContent = "***";
    }
  };
  b(a.getElementsByTagName("UDN"));
  b(a.getElementsByTagName("serialNumber"));
  return(new XMLSerializer).serializeToString(a);
};
mo.prototype.Bj = function(a, b, c) {
  a = "[" + a + "]: " + b + " " + c.gj() + " => " + c.Da() + " (" + c.km() + ")";
  c.pa() ? this.a.info(a) : (a += ", error = " + c.Hi() + " (" + c.Ze() + ")", this.a.e(a));
};
var po = function(a) {
  Yl.call(this);
  this.uj = a || new mo;
  this.a = I("cv.DialService");
};
v(po, Yl);
d = po.prototype;
d.Kf = function() {
  if (chrome.dial) {
    return chrome.dial.onDeviceList.addListener(this.Ub), chrome.dial.onError.addListener(this.Sr), !0;
  }
  this.a.e("Dial API not available, aborting start...");
  return!1;
};
d.Dd = function() {
  chrome.dial.onDeviceList.removeListener(this.Ub);
  chrome.dial.onError.removeListener(this.Sr);
};
d.Ls = function() {
  chrome.dial.discoverNow(t(function(a) {
    this.a.info("chrome.dial.discoverNow = " + a);
  }, this));
};
d.wx = function() {
  this.uj.KK();
};
d.Fn = function(a, b, c) {
  this.uj.Jr(a, function(e, f) {
    if (f) {
      c(f);
    } else {
      var g = e.uniqueId ? qo(e.uniqueId) : "", g = new an("local:" + a.deviceLabel, e.Df, e.friendlyName, g, e.ipAddress, e.mc), g = new $m(g, null);
      b(g);
    }
  });
};
var qo = function(a) {
  0 == a.indexOf("uuid:") && (a = a.substr(5));
  return a.replace(/-/g, "").toLowerCase();
};
po.prototype.Ns = function(a) {
  this.a.e("DIAL error: " + a.code);
  switch(a.code) {
    case "no_listeners":
    ;
    case "no_valid_network_interfaces":
    ;
    case "network_disconnected":
    ;
    case "cellular_network":
    ;
    case "socket_error":
    ;
    case "unknown":
      this.Lr();
      break;
    default:
      this.a.e("Unhandled DIAL error: " + a.code);
  }
};
var ro = function(a, b) {
  this.a = I("cv.FixedIpDialService");
  this.Jj = new jf(3E4);
  this.lb = new R(this);
  this.O = a;
  this.uj = b || new mo;
};
v(ro, M);
d = ro.prototype;
d.A = function() {
  this.a.Xg("Initializing fixed IP discovery.");
  this.lb.listen(this.Jj, "tick", t(this.dC, this));
  this.Jj.start();
  this.Jj.ys();
};
d.k = function() {
  this.lb.$();
  this.Jj.$();
};
d.dC = function() {
  var a = L.G().oI(), b;
  for (b in a) {
    this.nI(a[b]);
  }
};
d.nI = function(a) {
  w(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(a));
  var b = {};
  b.deviceLabel = "debug:" + a;
  b.deviceDescriptionUrl = "http://" + a + ":8008/ssdp/device-desc.xml";
  this.a.info("Discovering DIAL device by IP (label=" + b.deviceLabel + " url=" + b.deviceDescriptionUrl + " config=" + b.configId + ")");
  this.Hn(b, a);
};
d.Hn = function(a, b) {
  this.uj.Jr(a, t(function(c, e) {
    if (e) {
      this.a.e("Unable to fetch description for " + JSON.stringify(a) + ": " + e), this.Tz(b);
    } else {
      var f = c.uniqueId ? qo(c.uniqueId) : "", f = new an(a.deviceLabel, c.Df, c.friendlyName, f, c.ipAddress, c.mc);
      f.dh = !0;
      this.O.register(new $m(f, null));
    }
  }, this));
};
d.Tz = function(a) {
  this.O.Ir(function(b) {
    return b.isLocal() && !b.uw() ? b.kc().ipAddress == a : !1;
  });
};
var so = function(a) {
  R.call(this);
  this.Om = [];
  this.O = a;
  this.Cd = new Yb;
  this.a = I("cv.ReceiverAppRegistry");
  this.listen(this.O, "receiver_list", this.Wg);
};
v(so, R);
d = so.prototype;
d.A = function() {
  this.Mw("ChromeCast");
};
d.Mw = function(a) {
  C(this.Om, function(b) {
    return b == a;
  }) || (this.Om.push(a), this.Ox());
};
d.Wg = function() {
  this.Ox();
};
d.Ox = function() {
  this.O.Dc().forEach(t(this.iI, this));
};
d.iI = function(a) {
  if (a.kc()) {
    var b = null;
    this.Om.forEach(t(function(c) {
      var e = a.c() + ":" + c;
      this.Cd.contains(e) || "unknown" != a.Wm(c) || (this.a.info("Querying " + a.c() + " for " + c), b || (b = new jn(a)), this.Cd.add(e), b.mm(c, t(this.Xz, this, a, c)));
    }, this));
  }
};
d.Xz = function(a, b, c, e, f) {
  this.Cd.remove(a.c() + ":" + b);
  if (404 == c.Da()) {
    a.yf(b, "unavailable"), this.O.Qq(b, a);
  } else {
    if (f) {
      this.a.e("Unable to get application info for app " + b + " on receiver " + a.c() + ": " + f);
    } else {
      if ("Netflix" == b) {
        this.zy(a, e);
      } else {
        switch(e.state) {
          case "running":
          ;
          case "stopped":
            a.yf(b, "available");
            break;
          default:
            a.yf(b, "unavailable");
        }
      }
      this.O.Qq(b, a);
    }
  }
};
d.zy = function(a, b) {
  w("Netflix" == b.name);
  !q(b.extraData.capabilities) || "websocket" != b.extraData.capabilities || "running" != b.state && "stopped" != b.state ? a.yf("Netflix", "unavailable") : a.yf("Netflix", "available");
};
var to = function(a, b, c, e, f) {
  this.a = I("cv.sender.LaunchService");
  this.bf = a;
  this.sa = b;
  this.r = c;
  this.O = e;
  this.xd = new D;
  this.q = new R(this);
  this.q.listen(this.sa, "launch_service", this.sz);
  this.W = f;
};
d = to.prototype;
d.wq = function(a) {
  var b = !1;
  Eb(this.xd.zE(), function(c) {
    c.Sa.c() == a.c() && (b = !0);
  }, this);
  return b;
};
d.Du = function() {
  return this.xd.N().map(function(a) {
    return a.wa;
  });
};
d.sz = function(a) {
  w("launch_service" == a.type);
  a = a.message;
  var b = this.xd.get(a.activityId);
  if (b) {
    this.xd.remove(a.activityId);
    var c = b.wa;
    switch(a.action) {
      case "join_succeeded":
        c.iy(a.initParams.actualActivityId);
      case "launch_succeeded":
        this.a.info("Activity launch succeeded: " + c.c() + " for activity type " + c.La());
        c.oq(this.sa);
        this.r.nq(c.I(), c);
        c.start();
        c.vq();
        try {
          var e = void 0;
          a.initParams && (e = a.initParams.joinableState);
          b.zb(c.c(), e);
        } catch (f) {
          this.a.e(f.message);
        }
        c.cf(new pd(1E3, "INFO"), [b.Sa]);
        break;
      case "launch_failed":
        this.a.info("Activity launch failed: " + c.c());
        b.le("Receiver failed to launch.");
        break;
      case "join_failed":
        this.a.info("Activity join failed: " + c.c());
        b.le("Activity failed to join. Does this activity support joining?");
        break;
      default:
        this.a.e("Did not recognize launch service action");
    }
  } else {
    this.a.e("Get launch response for unknown activity " + JSON.stringify({action:a.action, activityId:a.activityId}));
  }
};
d.sy = function(a, b) {
  var c = this.r.Ji(b), c = null != c && c.isInternal() && a.isInternal(), c = this.r.oy(b, c);
  if ("mirror_tab" == a.La()) {
    var e = this.r.wd();
    if (e) {
      return hf(c, this.r.ke(e.c()));
    }
  }
  !a.isInternal() && this.sa.Ul(b) && (this.a.e("before launch non-cv activity; still have channel"), this.sa.ne(b));
  return c;
};
d.py = function(a, b) {
  var c = null, c = b.disconnectPolicy, e = null;
  switch(b.activityType) {
    case "mirror_tab":
      c = new Tn(a.id, L.G().ua(), this.W);
      break;
    case "video_playback":
      e = "video_playback";
    case "audio_playback":
      var f = b.parameters || new uf;
      f.mediaUrl = f.mediaUrl || f.videoUrl;
      c = new tf(e || "audio_playback", f, void 0, c);
      break;
    case "slideshow":
      return null;
    case "unknown":
      return null;
    default:
      c = new Xe(void 0, c), c.Bq(b.activityType).xF(b.parameters).me("dial_non_ramp_activity");
  }
  c.Tl(a.id);
  a.url && c.fu(Zm(a.url));
  c.wF(a.incognito || !1);
  b.description && c.Jg(b.description.text || null, b.description.url || null, 1);
  return c;
};
d.Mi = function(a, b, c, e) {
  this.by(a, b, c, e, !1);
};
d.join = function(a, b, c, e) {
  this.by(a, b, c, e, !0);
};
d.by = function(a, b, c, e, f) {
  var g = b.receiver.id, h = this.O.gf(g);
  h || (h = this.O.Ql(g)) && (g = h.c());
  if (h) {
    if (Yc(this.a, "Got launch request " + JSON.stringify({activityType:b.activityType, receiver:b.receiver, tab:a.id}), b), this.wq(h)) {
      c = "There is an activity being launched to the same receiver.", this.a.info(c), e(c);
    } else {
      var l = this.py(a, b);
      if (l) {
        l.tq(h);
        var p = t(function(a) {
          this.xd.remove(l.c());
          l.stop();
          this.sa.ne(g);
          try {
            e(a);
          } catch (b) {
            this.a.e(b.message);
          }
          f || Rn("launch_failure", Nn, void 0, "Unable to cast to " + h.Ad() + ".");
        }, this);
        a = chrome.runtime.getManifest().receiverVersion;
        var B = new uo(this.sa, l, this.bf, h, a, c, p);
        f && B.ry();
        this.xd.set(l.c(), B);
        var G = $e(null);
        f || (G = this.sy(l, g));
        var T = t(function() {
          var a = f ? 5E3 : 1E4;
          S(t(this.qy, this, l.c()), a);
          B.start();
        }, this);
        l.uq(t(function(a, b) {
          a ? bf(G, function() {
            T();
          }, this) : p(b || "Activity failed to initialize.");
        }, this));
      } else {
        e("Unsupported activity: " + JSON.stringify(b));
      }
    }
  } else {
    c = "Receiver does not exist: " + g, this.a.e(c), Rn("device_offline", Nn), e(c);
  }
};
d.qy = function(a) {
  var b = this.xd.get(a);
  b && (this.a.info("Launch timeout: " + a), this.xd.remove(a), this.sa.Ul(b.Sa.c()) && this.sa.Sb("launch_service", new Pj("cancel", b.wa.La(), a, b.wa.rf(), b.qm.c(), b.Sa.c()), [b.Sa]), b.le("Launch timeout"));
};
var uo = function(a, b, c, e, f, g, h) {
  this.a = I("cv.sender.ActivityLaunchRequest_");
  this.sa = a;
  this.wa = b;
  this.qm = c;
  this.Sa = e;
  this.zb = g;
  this.le = h;
  this.kf = this.Sa.isLocal() ? new jn(this.Sa) : null;
  this.Zq = f;
  this.cr = "launch";
};
d = uo.prototype;
d.ry = function() {
  this.cr = "join";
};
d.start = function() {
  this.Sa.kc() ? L.G().DG() && L.G().xq() ? this.sb(0) : this.sb(1) : this.sb(4);
};
d.sb = function(a) {
  switch(a) {
    case 0:
      this.GI();
      break;
    case 1:
      this.FI();
      break;
    case 3:
      this.II();
      break;
    case 4:
      this.wa.isInternal() ? this.HI() : this.KI();
  }
};
d.KI = function() {
  this.sa.dispatchEvent(new nf("launch_service", new Pj("launch_succeeded", this.wa.La(), this.wa.c(), this.wa.rf(), this.qm.c(), this.Sa.c(), this.wa.mr())));
};
d.FI = function() {
  this.kf && (this.a.info("Checking state of receiver app..."), this.kf.mm(this.wa.Qb(), t(function(a, b, c) {
    c ? this.le(c) : "running" == b.state ? this.wa.isInternal() ? this.sb(4) : (this.kf.Qr(this.wa.Qb(), n), S(function() {
      this.sb(3);
    }, 1500, this)) : this.sb(3);
  }, this)));
};
d.II = function() {
  this.a.info("Sending request to launch receiver app with version: " + this.Zq);
  var a = "";
  if (this.wa.isInternal()) {
    a = "v=" + encodeURIComponent(this.Zq) + "&id=" + encodeURIComponent(this.Sa.c()), a += "&idle=" + encodeURIComponent("windowclose");
  } else {
    var b = this.wa.rf();
    null != b && ("string" == typeof b ? a = b : "object" == typeof b ? a = JSON.stringify(b) : Za("Don't know how to serialize " + b));
  }
  this.kf && this.kf.launchApp(this.wa.Qb(), t(function(a) {
    a.pa() ? this.sb(4) : this.le("error launching receiver app");
  }, this), a);
};
d.GI = function() {
  if (this.wa.isInternal()) {
    var a = new W(L.G().xq());
    this.a.info("Flinging receiver URL: " + a);
    a.ha("id", this.Sa.c());
    this.kf.launchApp("Fling", t(function(a) {
      a.pa() ? this.sb(4) : this.le("error launching receiver app");
    }, this), a.toString());
  } else {
    this.a.e("Fling URL is not supported for external apps");
  }
};
d.HI = function() {
  w(this.wa.isInternal());
  this.a.info("Launching activity " + this.wa.c() + " on " + this.Sa.c());
  this.sa.Ul(this.Sa.c()) ? this.a.info("Has channel to receiver") : this.a.info("No channel to receiver. Ready to create.");
  this.sa.Sb("launch_service", new Pj(this.cr, this.wa.La(), this.wa.c(), this.wa.rf(), this.qm.c(), this.Sa.c(), this.wa.mr()), [this.Sa], this.le);
};
var vo = function(a, b, c, e) {
  Q.call(this);
  this.a = I("cv.RampDiscoveryService");
  this.r = a;
  this.Cc = b;
  this.sa = e;
  this.GA = c;
  this.is = this.jc = null;
};
v(vo, Q);
d = vo.prototype;
d.A = function() {
};
d.yJ = function() {
  this.a.info("Discovering DIAL/RAMP activity now...");
  this.jc = u();
  this.GA.Dc().forEach(this.lC, this);
};
d.xJ = function() {
  var a = [];
  this.r.zz().forEach(function(b) {
    b.Az() < this.jc && a.push(b.c());
  }, this);
  a.forEach(function(a) {
    this.a.info("Removing activity " + a);
    this.r.Wq(a);
  }, this);
};
d.lC = function(a) {
  a.kc() && (this.Uq(a) ? this.a.Xg("Skipping " + a.c()) : (new jn(a)).Gq(t(this.oA, this, a)));
};
d.oA = function(a, b, c) {
  c && "running" == c.state && "00000000-0000-0000-0000-000000000000" != c.name && (this.Uq(a) ? this.a.Xg("Skipping " + a.c()) : (b = this.r.Ji(a.c())) && b.Qb() == c.name ? (b.er(), wo(b, c)) : (b && (this.a.info("Removing existing activity " + b.Qb() + " on receiver " + a.c()), this.r.Wq(b.c())), this.a.info("Found new activity " + c.name + " on receiver " + a.c()), b = new Xe(void 0, "continue"), b.Bq(c.name).Tl(-3).me("dial_non_ramp_activity").oq(this.sa).tq(a).er(), wo(b, c), "ChromeCast" == 
  c.name && (b.me("dial_ramp_activity"), b.Sg().hasPause = !1), this.r.nq(-3, b), b.uq(n), b.cf(new pd(1E3, "INFO"))));
};
var wo = function(a, b) {
  b.el && a.Jg(b.el.description, b.el.imageUrl, 2);
  b.serviceData && -1 < b.serviceData.Gv.indexOf("ramp") && a.me("dial_ramp_activity");
};
vo.prototype.Uq = function(a) {
  var b = this.r.Ji(a.c());
  return b && b.isInternal() ? !0 : this.Cc.wq(a);
};
vo.prototype.refresh = function() {
  this.jc && 5E3 > u() - this.jc || (this.yJ(), k.clearTimeout(this.is), this.is = S(function() {
    this.xJ();
  }, 5E3, this));
};
var xo = function() {
  this.Tw = t(this.TI, this);
  this.vl = new Ua;
  this.vl.al = !1;
  this.Qw = this.vl.bl = !1;
  this.Lw = "";
  this.eI = {};
};
xo.prototype.Ap = function() {
  return this.vl;
};
xo.prototype.br = function(a) {
  if (a != this.Qw) {
    var b = Vc();
    a ? b.fK(this.Tw) : b.kK(this.Tw);
    this.Qw = a;
  }
};
xo.prototype.TI = function(a) {
  if (!this.eI[a.hw()]) {
    var b = this.vl.Pw(a), c = yo;
    if (c) {
      switch(a.mp()) {
        case Lc:
          zo(c, "info", b);
          break;
        case Mc:
          zo(c, "error", b);
          break;
        case Nc:
          zo(c, "warn", b);
          break;
        default:
          zo(c, "debug", b);
      }
    } else {
      window.opera ? window.opera.postError(b) : this.Lw += b;
    }
  }
};
var yo = window.console, Ao = function(a) {
  yo = a;
}, zo = function(a, b, c) {
  if (a[b]) {
    a[b](c);
  } else {
    a.log(c);
  }
};
var Bo = function() {
  Ul.call(this, L.G());
};
v(Bo, Ul);
Bo.prototype.eK = function(a, b) {
  return b.map(function(b) {
    var e = b.YK();
    e.id = this.Gm(a, b);
    return e;
  }, this);
};
var Co = function(a, b, c) {
  this.Wd = a;
  this.bp = b;
  this.sI = Zm(c);
  this.dp = new Yb;
  this.xp = new Yb;
  this.yp = new Yb;
  this.yl = null;
  this.ui = u();
};
d = Co.prototype;
d.Mm = function() {
  this.ui = u();
};
d.ew = function() {
  return this.ui;
};
d.TE = function(a) {
  this.yl = a;
};
d.IG = function(a) {
  a && this.yl && (a = C(a, function(a) {
    return a.id == this.yl;
  }, this)) && (a.isTabProjected = !0, this.yl = null);
};
d.I = function() {
  return this.Wd;
};
d.ka = function() {
  return this.bp;
};
d.Go = function() {
  return this.sI;
};
d.mI = function(a) {
  this.dp.add(a);
};
d.dM = function(a) {
  this.dp.remove(a);
};
d.aL = function() {
  return this.dp.N();
};
d.wr = function(a) {
  this.xp.add(a);
};
d.cw = function(a) {
  this.xp.remove(a);
};
d.tj = function(a) {
  return this.xp.contains(a);
};
d.QA = function(a) {
  this.yp.add(a);
};
d.VA = function(a) {
  this.yp.remove(a);
};
d.VI = function(a) {
  return this.yp.contains(a);
};
d.bs = function() {
  return-4 == this.Wd;
};
var Do = function() {
  this.a = I("cv.CastClientRecord");
  this.qa = [];
};
d = Do.prototype;
d.A = function() {
  chrome.tabs.onRemoved.addListener(t(function(a) {
    this.aM(a);
  }, this));
};
d.aM = function(a) {
  this.yB(a) && (this.a.info("Removing clients in tab " + a), this.qa = A(this.qa, function(b) {
    return b.I() != a;
  }));
};
d.oB = function(a, b) {
  this.qa = A(this.qa, function(c) {
    return c.I() != a || c.ew() > b;
  });
};
d.mB = function(a) {
  return A(this.qa, function(b) {
    return b.I() == a;
  });
};
d.em = function(a, b, c) {
  if (-4 == a) {
    var e = this.aC(b);
    if (e) {
      return e;
    }
  }
  if (this.Hj(a, b)) {
    return this.a.info("Client already exists."), null;
  }
  if (50 <= this.bC(a)) {
    return this.a.info("Exceeds max number of clients allowed per tab"), null;
  }
  e = new Co(a, b, c);
  this.qa.push(e);
  return e;
};
d.Mr = function(a, b) {
  return ub(this.qa, function(c) {
    return c.I() == a && c.ka() == b;
  });
};
d.Hc = function(a, b) {
  return C(this.qa, function(c) {
    return c.I() == a && c.ka() == b;
  });
};
d.aC = function(a) {
  return C(this.qa, function(b) {
    return b.bs() && b.ka() == a;
  });
};
d.Hj = function(a, b) {
  return!!this.Hc(a, b);
};
d.yB = function(a) {
  return!!C(this.qa, function(b) {
    return b.I() == a;
  });
};
d.YI = function(a, b) {
  return!!C(this.qa, function(c) {
    return c.I() == a && c.Go() == b;
  });
};
d.bC = function(a) {
  return ob(this.qa, function(b) {
    return b.I() == a;
  });
};
d.Zk = function() {
  return this.qa;
};
d.Nv = function(a) {
  return C(this.qa, function(b) {
    return b.tj(a);
  });
};
d.Rz = function(a, b) {
  return C(this.qa, function(c) {
    return c.VI(a) && c.tj(b);
  });
};
var Eo = function(a, b, c, e, f) {
  this.Eb = Qn.G();
  this.r = a;
  this.O = b;
  this.Cc = c;
  this.W = e;
  this.Ky = f;
  this.a = I("cv.CastService");
  this.q = new R(this);
  this.ba = new Do;
  this.Ng = new Bo;
};
d = Eo.prototype;
d.gs = n;
d.A = function() {
  this.W.listen("v1_app_request", t(this.Bt, this));
  this.W.listen("page_unload", t(this.gD, this));
  this.q.listen(this.O, "receiver_list", this.Wg);
  this.q.listen(this.r, "media_status", this.gk);
  this.q.listen(this.r, "media_key_request", this.hD);
  this.q.listen(this.r, "remove_activity", this.iD);
  this.q.listen(this.r, "custom_message", this.fD);
  this.Ng.A();
  this.ba.A();
};
d.PD = function(a, b) {
  return this.ba.YI(a, b);
};
d.Wg = function() {
  this.ba.Zk().forEach(function(a) {
    this.LI(a);
  }, this);
};
d.LI = function(a) {
  a.aL().forEach(function(b) {
    this.zw(a, b);
  }, this);
};
d.zw = function(a, b, c) {
  var e = this.O.HG(0 <= Se.indexOf(b) ? "ChromeCast" : b), e = this.GG(a, e);
  a.IG(e);
  this.Oa(a, new md("CastApi", a.ka(), null != c ? c : null, "ReceiverListUpdateEvent", new nd(b, e)));
};
d.GG = function(a, b) {
  return b ? this.Ng.eK(a.Go(), b) : [];
};
d.Cz = function(a, b) {
  this.O.refresh();
  var c = b.message;
  a.mI(c);
  this.Ky.Mw(0 <= Se.indexOf(c) ? "ChromeCast" : c);
  this.zw(a, c, b.seq);
};
d.Lz = function(a, b) {
  a.dM(b.message);
};
d.Mz = function(a, b) {
  var c = t(function(c) {
    this.oi(a, b, "CustomMessageResultEvent", c);
  }, this), e = na(c, null), f = b.message, g = this.r.Ea(f.activityId);
  g ? g.I() != a.I() ? c("Cannot send message to activity " + f.activityId + " from this tab.") : g.ao(f.namespace, f.message, e, c) : c("No such activity: " + f.activityId);
};
d.Dz = function(a, b) {
  var c = bb(b.message);
  x(b.source);
  var e = x(c[0]), c = x(c[1]);
  -1 != $c.indexOf(e) ? this.a.e("Attempting to add listener for reserved namespace.") : a.tj(c) ? a.QA(e) : this.a.e("Attempting to add custom message listener for activity " + c + " not owned by this client.");
};
d.Kz = function(a, b) {
  var c = bb(b.message);
  x(b.source);
  var e = x(c[0]);
  x(c[1]);
  -1 != $c.indexOf(e) ? this.a.e("Attempting to remove listener for reserved namespace.") : a.VA(e);
};
d.fD = function(a) {
  w("custom_message" == a.type);
  var b = this.ba.Rz(a.namespace, a.activityId);
  b ? this.Oa(b, new md("CastApi", b.ka(), null, "CustomMessageEvent", new od(a.activityId, a.namespace, a.message))) : this.a.e("Unexpected custom message for activity " + a.activityId + " and namespace " + a.namespace);
};
d.Jz = function(a, b) {
  var c = b.source;
  Yc(this.a, "Registering client: " + JSON.stringify({tabId:a.id, clientId:c}), a.url);
  var e = this.ba.em(a.id, c, a.url);
  e && (this.jz(e), a.url && (c = Zm(a.url), this.r.Am(c).forEach(function(a) {
    e.wr(a.c());
  }, this)));
};
d.jz = function(a) {
  var b = this.r.jk(a.I());
  b && 1 == b.Ra().length && a.TE(this.Ng.Gm(a.Go(), b.Ra()[0]));
};
d.gD = function(a) {
  this.a.info("Page-unload event from tab " + a.id);
  var b = u();
  this.ba.mB(a.id).forEach(function(a) {
    this.Oa(a, new md("CastApi", a.ka(), null, "ping", {}));
  }, this);
  S(function() {
    this.ba.oB(a.id, b);
  }, 3E3, this);
};
d.Bt = function(a, b) {
  this.Pi(b);
  var c = b.source;
  w("CastApi" != c);
  w("CastApi" == b.target);
  if ("RegisterClient" == b.type) {
    this.Jz(a, b);
  } else {
    if (c = this.ba.Hc(a.id, c)) {
      switch(c.Mm(), b.type) {
        case "AddReceiverListener":
          this.Cz(c, b);
          break;
        case "RemoveReceiverListener":
          this.Lz(c, b);
          break;
        case "LaunchActivity":
          this.Gz(c, b, a);
          break;
        case "JoinActivity":
          this.Fz(c, b, a);
          break;
        case "LeaveActivity":
          this.Hz(c, b);
          break;
        case "StopActivity":
          this.Nz(c, b);
          break;
        case "GetActivityStatus":
          this.Ez(c, b);
          break;
        case "AddMediaStatusListener":
          break;
        case "RemoveMediaStatusListener":
          break;
        case "SendCustomMessage":
          this.Mz(c, b);
          break;
        case "AddCustomMessageListener":
          this.Dz(c, b);
          break;
        case "RemoveCustomMessageListener":
          this.Kz(c, b);
          break;
        case "LoadMedia":
        ;
        case "PlayMedia":
        ;
        case "PauseMedia":
        ;
        case "SetMediaVolume":
        ;
        case "SelectMediaTracks":
        ;
        case "MediaStatus":
        ;
        case "MediaKeyResponse":
          this.Iz(c, b);
          break;
        case "LogMessage":
          break;
        case "pong":
          break;
        default:
          Yc(this.a, "Unknown request : " + b.type, b, Nc);
      }
    } else {
      this.a.e("No registered client exists for request " + b.type + " from tab " + a.id);
    }
  }
};
d.Pi = function(a) {
  "LogMessage" != a.type && Yc(this.a, "App request: " + a.type, a);
};
d.Zw = function(a, b, c, e) {
  a.wr(c);
  c = new gd(c, "running");
  q(e) && (c.extraData.joinableState = e);
  this.oi(a, b, "ActivityStatusEvent", c);
};
d.Yw = function(a, b, c) {
  var e = new gd(null, "error");
  e.errorString = c;
  this.oi(a, b, "ActivityStatusEvent", e);
};
d.Gz = function(a, b, c) {
  var e = b.message, f = t(this.Zw, this, a, b);
  a = t(this.Yw, this, a, b);
  e.receiver.id = this.Ng.Xw(e.receiver.id);
  this.Cc.Mi(c, e, f, a);
};
d.Fz = function(a, b, c) {
  var e = b.message, f = t(this.Zw, this, a, b);
  a = t(this.Yw, this, a, b);
  e.receiver.id = this.Ng.Xw(e.receiver.id);
  this.Cc.join(c, e, f, a);
};
d.ln = function(a, b, c, e, f) {
  c = new gd(b.message, c);
  c.errorString = e || null;
  f && (c.extraData = f);
  this.oi(a, b, "ActivityStatusEvent", c);
};
d.Ez = function(a, b) {
  var c = this.r.Ea(b.message);
  if (c) {
    var e = c.Ra()[0];
    e.isLocal() ? (new jn(e)).mm(c.Qb(), t(this.HA, this, a, b)) : this.a.info("Getting the status of non-local activity is not supported");
  } else {
    this.ln(a, b, "error", "Activity does not exist");
  }
};
d.HA = function(a, b, c, e, f) {
  f ? this.ln(a, b, "error", f, null) : this.ln(a, b, e.state, null, e.extraData);
};
d.Hz = function(a, b) {
  var c = b.message;
  a.cw(c);
  this.r.DH(c);
};
d.Nz = function(a, b) {
  var c = b.message;
  a.cw(c);
  this.r.ke(c);
};
d.Oa = function(a, b) {
  w(-1 != a.I());
  Yc(this.a, "Sending message to app @tab " + a.I() + ":" + b.type, b);
  a.bs() ? this.gs(a.ka(), "event_to_v1_app", b) : this.W.ss(a.I(), "event_to_v1_app", b);
};
d.oi = function(a, b, c, e) {
  b = new md("CastApi", a.ka(), $a(b.seq), c, e);
  this.Oa(a, b);
};
d.Iz = function(a, b) {
  w(b.message.activityId);
  w(b.message.rampRequest);
  var c = b.message.activityId, e = this.r.Ea(c);
  if (e && a.tj(c)) {
    var f = rd(b);
    f.message ? e.cf(f.message) : this.Iv(a, c, b, "Invalid RAMP request: " + f.error);
  } else {
    this.Iv(a, c, b, "Unknown activity id");
  }
};
d.gk = function(a) {
  w("media_status" == a.type);
  var b = this.ba.Nv(a.status.activityId);
  if (b) {
    var c = a.status, e = new id(a.status.activityId);
    e.success = !0;
    e.status = c;
    e.errorString = null;
    this.Oa(b, new md("CastApi", b.ka(), a.cmdId, "MediaResultEvent", e));
  }
};
d.hD = function(a) {
  w("media_key_request" == a.type);
  var b = this.ba.Nv(a.Pv.activityId);
  b && this.Oa(b, new md("CastApi", b.ka(), null, "MediaKeyRequest", a.Pv));
};
d.iD = function(a) {
  this.gk(new Zn(0, new hd(a.activityId, 1)));
};
d.Iv = function(a, b, c, e) {
  b = new id(b);
  b.success = !1;
  b.status = null;
  b.errorString = e;
  this.oi(a, c, "MediaResultEvent", b);
};
var Fo = function(a) {
  this.a = I("cv.CastExtensionIo");
  this.Ss = a;
};
Fo.prototype.A = function() {
  chrome.runtime.onMessageExternal.addListener(t(this.jK, this));
  this.Ss.gs = t(this.lK, this);
};
Fo.prototype.lK = function(a, b, c) {
  this.a.C("Sending extension message to " + a);
  chrome.runtime.sendMessage(a, c);
};
Fo.prototype.jK = function(a, b, c) {
  c(!0);
  a.target && (c = {id:-4, url:"chrome-extension://" + b.id}, a.source = b.id, this.Ss.Bt(c, a));
};
var Go = function(a, b) {
  var c = [];
  a.forEach(function(a) {
    var f = C(b, function(b) {
      return b.receiver.id == a.c();
    });
    (f || a.XE()) && c.push(new fm(a.iF(), f));
  });
  return c;
}, Ho = function(a, b) {
  var c = [], e = new Yb, f = new Yb;
  a.forEach(function(a) {
    c.push(a);
    e.add(a.receiver.uniqueId);
    a.activity && f.add(a.activity.id);
  });
  b.forEach(function(a) {
    if (!e.contains(a.receiver.uniqueId)) {
      c.push(a);
    } else {
      if (null != a.activity && !f.contains(a.activity.id)) {
        var b = C(c, function(b) {
          return null == b.activity && b.receiver.uniqueId == a.receiver.uniqueId;
        });
        b && (b.activity = a.activity, w(b.receiver.uniqueId == b.activity.receiver.uniqueId), b.receiver = b.activity.receiver);
      }
    }
  });
  return c;
}, Jo = function(a, b) {
  var c = [];
  a.forEach(function(a) {
    (a = Io(a, b)) && c.push(a);
  });
  return c;
}, Io = function(a, b) {
  if (a && a.Ra() && 1 == a.Ra().length) {
    var c = a.Kg().text;
    c || (c = "ChromeCast" == a.Qb() ? "No title" : a.Qb());
    var e = a.Ra()[0], f = "v1_app";
    "mirror_tab" == a.La() && (f = 1 > a.I() ? "mirror_screen" : "mirror_tab");
    var g = null;
    a.Sg() && (g = new im, g.timeProgress = a.Sg().timeProgress, g.muted = a.Sg().muted, g.hasPause = a.Sg().hasPause);
    return new dm(a.c(), new cm(e.c(), e.Bd(), e.Ad()), f, a.Kg().iconUrl, c, b, g, a.I(), a.isLocal());
  }
  return null;
};
var Ko = function(a, b, c, e, f, g, h, l, p, B) {
  this.Eb = Qn.G();
  this.r = a;
  this.Rb = b;
  this.Sl = p;
  this.Za = B;
  this.ir = h;
  this.Cc = c;
  this.W = e;
  this.Eg = f;
  this.Fg = g;
  this.Hg = l;
  this.a = I("cv.PopupMenuService");
  this.q = new R(this);
  this.pe = !1;
};
d = Ko.prototype;
d.A = function() {
  this.W.listen("popup_menu_request", t(this.VD, this));
  this.q.listen(this.r, "media_status", this.gk);
  this.q.listen(this.r, "new_activity", this.Fb);
  this.q.listen(this.r, "leave_activity", this.Fb);
  this.q.listen(this.r, "remove_activity", this.Fb);
  this.q.listen(this.Rb, "receiver_list", this.Wg);
  this.q.listen(this.Eb, "new_issue", this.Yt);
  this.q.listen(this.Eb, "remove_issue", this.Yt);
  this.q.listen(this.Za, "new_session", this.WD);
  this.q.listen(this.Za, "session_removal", this.Fb);
  this.q.listen(this.Za, "session_update", this.Fb);
};
d.WD = function() {
  this.pe = !1;
  this.Fb();
};
d.Wg = function() {
  this.Fb();
};
d.Yt = function() {
  this.Fb();
};
d.VD = function(a, b) {
  -1 == a.id && (this.pe = !1, this.a.info("Popup request: " + b.type), this.a.C("  the request is " + JSON.stringify(b)), this.HB(b));
};
d.HB = function(a) {
  switch(a.type) {
    case "init":
      this.JA();
      break;
    case "act_on_issue":
      this.IA(a.message);
      break;
    case "stop_activity":
      a = a.message;
      this.r.Ea(a) ? this.MA(a) : this.Za.NA(a);
      break;
    case "play_media":
    ;
    case "pause_media":
    ;
    case "set_mute":
      this.LA(a);
      break;
    case "cast_this_tab":
      this.Dq(a.message);
      break;
    case "launch_desktop_mirror":
      this.KA(a.message);
      break;
    case "update_settings":
      this.PA(a.message);
      break;
    case "create_session":
      this.Za.OA(a);
      break;
    default:
      this.a.info("Unknown request: " + JSON.stringify(a));
  }
};
d.PA = function(a) {
  var b = L.G(), c = b.ua();
  c.captureSurface = a.captureSurface;
  c.lowFpsMode = a.lowFpsMode;
  b.ij().castAppNotificationDismissed || (b.ij().castAppNotificationDismissed = a.castAppNotificationDismissed);
  this.KG(a.mirrorQualityId, c);
  L.G().Ke();
};
d.KG = function(a, b) {
  if (Qd(a) && a != b.Ol()) {
    this.a.C("Changing mirror quality to " + a);
    this.Ay();
    b.By(a);
    var c = this.r.wd();
    if (c) {
      var e = c.Ra()[0].c(), f = c.I();
      this.r.ke(c.c());
      Ym(f, t(function(a) {
        a && this.Dq(e, a);
      }, this));
    }
  }
};
d.jG = function() {
  var a = t(function() {
    this.Wr() && (this.Rb.refresh(), this.Hg.refresh(), this.ir && this.ir.refresh(), S(a, 1E4, this));
  }, this);
  a();
};
d.JA = function() {
  var a = L.G().ua();
  a.captureSurface = "tab";
  a.lowFpsMode = !1;
  L.G().Ke();
  this.Eg.qd();
  this.Fb();
  this.jG();
};
d.Wr = function() {
  var a = chrome.extension.getViews({type:"popup"});
  return!!a && 0 < a.length;
};
d.Ay = function() {
  var a = chrome.extension.getViews({type:"popup"});
  a && 0 < a.length && a[0].close();
};
d.Fb = function() {
  this.Wr() ? this.pe ? this.a.info("Still casting") : Qm(t(function(a) {
    a ? this.FA(a) : this.a.e("Failed to get active tab in topmost window");
  }, this)) : this.a.info("Popup is closed");
};
d.FA = function(a) {
  var b = a.id ? a.id : -1, c = null;
  this.Eb.Sh() && (c = this.Eb.Pt().SD());
  var e;
  e = L.G();
  var f = e.ua();
  e = new gm(f.captureSurface, f.lowFpsMode, e.ij().castAppNotificationDismissed, f.Ol());
  var f = this.OD(), g = this.Za.ND(b), f = Ho(f, g), g = this.r.jk(b);
  a = a.url ? this.Fg.PD(b, Zm(a.url)) : !1;
  b = this.Za.MD(b);
  c = new hm(f, c, Io(g, !1), e, a, b);
  this.W.RD("popup", "event_to_popup", new bm("model_update", c));
};
d.OD = function() {
  var a = this.Rb.Dc(), b = Jo(this.r.be(), !1), c = Jo(this.Cc.Du(), !0);
  return Go(a, b.concat(c));
};
d.IA = function(a) {
  this.Eb.qt(a.id, a.isDefaultAction);
  this.Eb.AJ();
};
d.MA = function(a) {
  this.r.Ea(a) ? this.r.ke(a) : (this.a.e("Popup menu has non-existing activity " + a), this.Fb());
};
d.LA = function(a) {
  var b = {}, c = null;
  switch(a.type) {
    case "play_media":
      c = "PlayMedia";
      b = {};
      break;
    case "pause_media":
      c = "PauseMedia";
      b = {};
      break;
    case "set_mute":
      c = "SetMediaVolume", b = {muted:a.message.data.muted};
  }
  var e = w(a.message.activityId);
  (a = this.r.Ea(e)) ? (b = new md("", "", 1, x(c), {activityId:e, rampRequest:b}), b = rd(b), b.message ? a.cf(b.message) : this.a.e("Invalid RAMP request: " + b.error)) : this.a.e("Activity ID " + e + " does not exist.");
};
d.KA = function(a) {
  this.pe = !0;
  var b = t(function() {
    this.pe = !1;
    this.Fb();
  }, this);
  a = new fd("mirror_tab", new dd(a, ""));
  a.disconnectPolicy = "stop";
  a.description = new ed;
  a.description.text = "Capturing desktop";
  a.description.url = "data/screen100.png";
  this.Cc.Mi({id:-2}, a, b, b);
};
d.Dq = function(a, b) {
  var c = t(function(b) {
    if (b) {
      this.pe = !0;
      var c = t(function() {
        this.pe = !1;
        this.Fb();
      }, this), g = new fd("mirror_tab", new dd(a, ""));
      g.disconnectPolicy = "stop";
      g.description = new ed;
      g.description.text = b.title;
      g.description.url = b.favIconUrl;
      this.Cc.Mi(b, g, c, c);
    } else {
      this.a.e("Failed to get active tab in topmost window");
    }
  }, this);
  b ? c(b) : L.G().ua().allowAutoResize ? Wm(16 / 9, function() {
    Qm(c);
  }) : Qm(c);
};
d.gk = function(a) {
  w("media_status" == a.type);
  this.Fb();
};
var Lo = function(a, b) {
  this.a = I("cv.TabEventsHandlers");
  this.r = a;
  this.Cc = b;
};
d = Lo.prototype;
d.A = function() {
  "object" == typeof chrome.tabs.onReplaced && chrome.tabs.onReplaced.addListener(t(this.AH, this));
  chrome.tabs.onRemoved.addListener(t(function(a) {
    this.r.zH(a);
  }, this));
  chrome.tabs.onUpdated.addListener(t(this.BH, this));
};
d.BH = function(a, b, c) {
  "complete" == b.status ? (this.Tx(c), this.dL(c)) : b.favIconUrl && "complete" == c.status && this.Tx(c, !0);
};
d.Tx = function(a, b) {
  var c = this.r.jk(a.id);
  c && (c.Jg(a.title, a.favIconUrl, 4), c.fu(a.url ? Zm(a.url) : null), c.vq(), b || c.UG());
};
d.AH = function(a, b) {
  this.a.info("Tab replaced detected.");
  var c = !1, e = "", f = null;
  this.r.qe(b).forEach(function(a) {
    "mirror_tab" == a.La() && (f = a, c = !0, e = a.Ra()[0].c());
  }, this);
  f && f.ty();
  this.r.uy(b, c);
  if (c) {
    this.a.info("Restarting mirroring.");
    var g = t(function() {
      this.a.e("Launch tab mirroring failed after tab replace.");
    }, this), h = new fd("mirror_tab", new dd(e, ""));
    h.disconnectPolicy = "stop";
    chrome.tabs.get(a, t(function(a) {
      a && (h.description = new ed, h.description.text = a.title, h.description.url = a.favIconUrl, this.Cc.Mi(a, h, n, g));
    }, this));
  }
};
d.dL = function(a) {
  var b = new W(a.url);
  b && ("http" == b.ld() || "https" == b.ld()) && b.fc() && mb(L.G().ut(), function(c) {
    if (oa(b.fc(), c)) {
      return this.nH(a), !0;
    }
  }, this);
};
d.nH = function(a) {
  this.a.info("Injecting api_content_script into " + a.id);
  chrome.tabs.executeScript(a.id, {file:"api_content_script.js"}, n);
};
var Mo = function() {
  Uj.call(this);
  q(hg) && (hg = JSON.parse);
  q(ig) && (ig = JSON.parse);
  this.bf = new Tj;
  this.Eb = Qn.G();
  this.W = new Xl("background");
  this.HC = new go(this.bf.c());
  this.Vl = null;
  this.Xs = new po;
  this.Rb = new am(this.Xs);
  this.Qf = new dn(this.Rb, this.HC, this.Vl);
  this.Mb = new bo(this.Qf);
  this.Ys = new lm;
  this.Sl = new am(this.Ys);
  this.$s = new Om;
  this.Za = new Pm(this.$s, this.bf.c(), this.Sl, this.Mb, new Ul(this.Gi()));
  this.Eg = new jo(this.Mb, this.Za);
  this.CC = new co(this.Mb);
  this.Ln = L.G().GC() ? new io(this.Rb, this.Qf, this.bf.c()) : null;
  this.Zs = new so(this.Rb);
  this.Mh = new to(this.bf, this.Qf, this.Mb, this.Rb, this.W);
  this.DC = new Lo(this.Mb, this.Mh);
  this.q = new R;
  this.Fg = new Eo(this.Mb, this.Rb, this.Mh, this.W, this.Zs);
  this.Hg = new vo(this.Mb, this.Mh, this.Rb, this.Qf);
  this.AC = new Ko(this.Mb, this.Rb, this.Mh, this.W, this.Eg, this.Fg, this.Ln, this.Hg, this.Sl, this.Za);
  new ro(this.Rb);
  this.BC = new Fo(this.Fg);
};
v(Mo, Uj);
ca(Mo);
d = Mo.prototype;
d.Ju = function() {
  this.Mb.mi() || 0 < this.Mh.Du().length || this.Za.mi() || this.Za.tH() ? (this.Mb.sH() && this.Hg.refresh(), S(this.Ju, 9E5, this)) : chrome.runtime.reload();
};
d.CG = function() {
  var a = null, a = new xo;
  a.Ap().ep = !0;
  a.Ap().bl = !0;
  a.Ap().al = !0;
  I("cv").Gc(Oc);
  I("cv2").Gc(Oc);
  I("goog").Gc(Oc);
  Dc(Wc(I("browser")));
  a.br(!0);
};
d.rC = function() {
  Vm();
  this.Zs.A();
  this.W.A();
  this.AE();
  this.Qf.BE(this.Mb);
  this.Qf.A();
  this.Mb.A();
  this.Eg.A();
  this.CC.A();
  this.DC.A();
  this.Fg.A();
  this.$s.A();
  this.Ys.A();
  this.Za.A();
  this.BC.A();
};
d.OH = function() {
  this.CG();
  this.Xs.A();
  this.Hg.A();
  this.AC.A();
  this.Ln && this.Ln.A();
  this.Eg.qd();
  chrome.runtime.onUpdateAvailable.addListener(t(this.Ju, this));
  this.BG();
};
d.k = function() {
  Mo.t.k.call(this);
};
d.BG = function() {
  ud || Rn("chrome_too_old_for_v2", Nn, On("https://support.google.com/chrome/answer/95414"));
};
d.wf = function() {
  return this.q;
};
d.dk = function() {
  return this.Mb;
};
d.Gi = function() {
  return L.G();
};
d.tk = function() {
  return Xc();
};
d.Sq = function() {
  return JSON.stringify(yf.G().getStats());
};
Mo.prototype.getWebRtcStats = Mo.prototype.Sq;
Mo.prototype.Cy = function() {
  yf.G().reset();
};
Mo.prototype.AE = function() {
};
var No = function() {
};
ca(No);
No.prototype.A = function() {
  chrome.runtime.onInstalled.addListener(t(this.RL, this));
};
No.prototype.RL = function(a) {
  "install" == a.reason && chrome.storage.sync.get("blockChromekeySetupAutoLaunchOnInstall", function(a) {
    a && a.blockChromekeySetupAutoLaunchOnInstall || (chrome.storage.sync.set({blockChromekeySetupAutoLaunchOnInstall:!0}, function() {
      chrome.runtime.lastError && I("cv.InitialSetupHandler").e("Failed to set blockChromekeySetupAutoLaunchOnInstall: " + chrome.runtime.lastError.message);
    }), Sj() && chrome.tabs.create({url:chrome.extension.getURL("options.html?showFlow=true")}));
  });
};
document.addEventListener("DOMContentLoaded", function() {
  "background" == document.body.id && (No.G().A(), L.G().zG(), L.G().yG(function() {
    Zc = Mo.G();
    m("backgroundSetup", Zc, void 0);
    Vj(Zc)();
  }));
}, !1);
window.addEventListener("beforeunload", function() {
  "background" == document.body.id && Mo.G().$();
}, !1);
var Oo = Oo || {};
Oo.A = function() {
  Oo.isInited = !0;
  document.mM = Oo.oL;
  chrome.extension.onMessage.addListener(Po);
  Qo();
};
Oo.oL = function() {
  var a = document.webkitFullscreenElement, a = {source:"content", target:"background", type:"full_screen_video_status", content:!(!a || "VIDEO" != a.tagName && !a.querySelector("VIDEO"))};
  chrome.extension.sendMessage(JSON.stringify(a));
};
var Ro = function(a) {
  if (a.querySelector('object[type="application/x-silverlight"]') || a.querySelector('object[type="application/x-silverlight-2"]') || a.querySelector('embed[type="video/quicktime"]')) {
    return!0;
  }
  a = a.getElementsByTagName("iframe");
  for (var b = 0;b < a.length;b++) {
    var c = a[b], e = c.contentDocument;
    e || (e = c.contentWindow.document);
    try {
      if (Ro(e)) {
        return!0;
      }
    } catch (f) {
    }
  }
  return!1;
}, Qo = function() {
  chrome.extension.sendMessage(JSON.stringify({source:"content", target:"background", type:"unsupported_plugin_detected", content:Ro(document)}));
}, Po = function(a) {
  if ("string" != typeof a) {
    throw "Expecting string from extension. But get: " + JSON.stringify(a);
  }
  a = JSON.parse(a);
  "background" == a.source && "content" == a.target && "detect_unsupported_plugin" == a.type && Qo();
};
Oo.isInited || Oo.A();
var So = function(a, b, c) {
  for (var e = "", f = 0, g = 0;g < c;++g) {
    var h = a[b + g], f = f << 7, f = f | h & -129;
    h & 128 || (e = "" == e ? Math.floor(f / 40) + "." + f % 40 : e + "." + f, f = 0);
  }
  return e;
}, Xn = function(a) {
  "string" == typeof a && (a = a.split("").map(function(a) {
    return a.charCodeAt(0);
  }));
  for (var b = 0, c = [];b < a.length;) {
    var e = a[b], f = a[b + 1], g = 2;
    if (f & 128) {
      if (f &= -129, g += f, 1 == f) {
        f = a[b + 2];
      } else {
        if (2 == f) {
          f = a[b + 2] << 8 | a[b + 3];
        } else {
          return null;
        }
      }
    }
    switch(e) {
      case 48:
      ;
      case 49:
        e = Xn(a.slice(b + g, b + g + f));
        if ("boolean" == typeof e && !1 == e) {
          return null;
        }
        c.push(e);
        break;
      case 6:
        e = So(a, b + g, f);
        if ("boolean" == typeof e && !1 == e) {
          return null;
        }
        c.push({object_id:e});
        break;
      case 19:
        for (var e = "", h = 0;h < f;++h) {
          e += String.fromCharCode(a[b + g + h]);
        }
        c.push(e);
        break;
      case 12:
        e = "";
        for (h = 0;h < f;++h) {
          var l = a[b + g + h].toString(16), e = e + ("%" + (2 > l.length ? "0" + l : l))
        }
        c.push(decodeURIComponent(e));
    }
    b += g + f;
  }
  return c;
}, To = function(a) {
  if (!a.object_id) {
    return null;
  }
  switch(a.object_id) {
    case "2.5.4.3":
      return "commonName";
    case "2.5.4.5":
      return "serialNumber";
    case "2.5.4.6":
      return "countryName";
    case "2.5.4.7":
      return "localityName";
    case "2.5.4.8":
      return "stateOrProvidenceName";
    case "2.5.4.10":
      return "organizationName";
    case "2.5.4.11":
      return "organizationalUnit";
    default:
      return a;
  }
}, Yn = function(a) {
  if (!(a instanceof Array)) {
    return null;
  }
  for (var b = {}, c = 0;c < a.length;++c) {
    if (a[c] instanceof Array && a[c][0] instanceof Array) {
      var e = a[c][0];
      b[To(e[0])] = e[1];
    }
  }
  return b;
};
if ("undefined" != typeof angular) {
  var Uo = angular.module("chrome_i18n", []);
  chrome.runtime && chrome.runtime.getManifest && chrome.runtime.getManifest().default_locale && Uo.directive("angularMessage", function() {
    return{restrict:"E", transclude:"element", replace:!0, controller:["$scope", function(a) {
      this.df = this.Np = null;
      a.dirForText = t(function(a) {
        this.Np || (this.Np = chrome.i18n.getMessage("@@bidi_dir") || "ltr");
        this.df || (this.df = new Qk("rtl" == this.Np));
        return this.df.vx(a || "");
      }, this);
    }], compile:function(a, b) {
      var c = b.key, e = null, f = document.createElement("amr");
      c && !c.match(/^\d+$/) && (c = chrome.i18n.getMessage(c), null == c && f.setAttribute("id", "missing"));
      if (c) {
        var g = chrome.i18n.getMessage(c + "_ph"), e = [];
        if (null != g) {
          for (e = g.split("\ue000"), g = 0;g < e.length;++g) {
            e[g] = e[g].replace(/^{{(.*)}}$/, '<amrp dir="{{dirForText($1)}}">{{$1}}</amrp>');
          }
        }
        e = chrome.i18n.getMessage(c, e);
      } else {
        f.setAttribute("r", "nokey");
      }
      e ? f.innerHTML = e : (f.setAttribute("tl", "false"), f.innerHTML = a.html());
      a.replaceWith(f);
    }};
  });
}
;chrome.i18n.getMessage("4014224501758376361", ["{{receiverName}}"]);
chrome.i18n.getMessage("6046507125919556913");
chrome.i18n.getMessage("1189144544819350763");
chrome.i18n.getMessage("3430817026795535765");
chrome.i18n.getMessage("5056298333685549098", ["{{v2AppDomain}}"]);
chrome.i18n.getMessage("3278102219211539720");
chrome.i18n.getMessage("7484752158248863804");
chrome.i18n.getMessage("1717149362663359343", ["{{v2AppDomain}}"]);
var Vo = chrome.i18n.getMessage("4089994756445820175"), Wo = chrome.i18n.getMessage("780135806192376347"), Xo = chrome.i18n.getMessage("2438859709710567679"), Yo = chrome.i18n.getMessage("2076488708707463944"), Zo = chrome.i18n.getMessage("3996247341169314250"), $o = chrome.i18n.getMessage("7053128562708856478"), ap = chrome.i18n.getMessage("8500110749168055241"), bp = chrome.i18n.getMessage("3844709005265884931"), cp = chrome.i18n.getMessage("4224760847878375792"), dp = chrome.i18n.getMessage("4584454172263179470"), 
ep = chrome.i18n.getMessage("5823878688587296398"), fp = chrome.i18n.getMessage("7008828272760191653"), gp = chrome.i18n.getMessage("2377419936291389581"), hp = chrome.i18n.getMessage("4324962226715124466"), ip = chrome.i18n.getMessage("6039331491778328245"), jp = chrome.i18n.getMessage("8887833628383960193"), kp = chrome.i18n.getMessage("6118473811359442709"), lp = chrome.i18n.getMessage("4272010402571776761"), mp = chrome.i18n.getMessage("482442943064110817"), np = chrome.i18n.getMessage("5745355507138230213"), 
op = chrome.i18n.getMessage("7029426286291560071"), pp = chrome.i18n.getMessage("8189622236075700665"), qp = chrome.i18n.getMessage("6018881802001125637"), rp = chrome.i18n.getMessage("4865676252029097872"), sp = chrome.i18n.getMessage("6988652234001902672"), tp = chrome.i18n.getMessage("6295154563386647404", ["{{attemptNumber}}"]);
var up = function(a, b, c) {
  a.timeOfStartCall = (new Date).getTime();
  if (b && JSON && JSON.stringify) {
    var e = JSON.stringify(b);
    200 >= e.length && (a.psdJson = e);
  }
  e = c || k;
  e.GOOGLE_FEEDBACK_START_ARGUMENTS = arguments;
  var f = a.serverUri || "//www.google.com/tools/feedback", g = e.GOOGLE_FEEDBACK_START;
  if (g) {
    g.apply(e, arguments);
  } else {
    var f = f + "/load.js?", h;
    for (h in a) {
      g = a[h], null != g && !ha(g) && (f += encodeURIComponent(h) + "=" + encodeURIComponent(g) + "&");
    }
    h = e.document;
    e = h.createElement("script");
    e.src = f;
    h.body.appendChild(e);
  }
};
m("userfeedback.api.startFeedback", up, void 0);
"undefined" != typeof angular && angular.module("feedbackController", ["chrome_i18n"]);
var vp = function(a, b) {
  chrome.extension.getBackgroundPage() && chrome.extension.getBackgroundPage().backgroundSetup || window.close();
  this.b = a;
  this.b.top = a;
  this.qf = chrome.extension.getBackgroundPage().backgroundSetup;
  var c = new xo;
  Vc().Gc(Qc);
  Ao(chrome.extension.getBackgroundPage().console);
  c.br(!0);
  this.a = I("cv.Feedback");
  this.Ae = null;
  this.xm = [];
  this.Vy();
  this.Ty();
  this.Uy();
  b.location.hash && -1 < b.location.hash.indexOf("requestMirroringSessionFeedback") ? (a.requestMirroringSessionFeedback = !0, a.feedbackType = "MirroringQuality") : (c = window.location.href ? (new W(window.location.href)).Yl().get("feedbackType") : null) && this.Sy(c) && (a.feedbackType = c);
  a.showSendConfirmation = !1;
  a.closeWindow = function() {
    window.close();
  };
};
m("FeedbackCtrl", vp, void 0);
vp.$inject = ["$scope", "$window"];
vp.prototype.Sy = function(a) {
  return!!C(this.xm, function(b) {
    return b.value == a;
  });
};
vp.prototype.Ty = function() {
  this.xm = [{value:"Bug", desc:Vo}, {value:"FeatureRequest", desc:Wo}, {value:"MirroringQuality", desc:Xo}, {value:"Discovery", desc:Yo}, {value:"Other", desc:Zo}];
  this.b.feedbackTypes = this.xm;
};
var wp = function(a, b) {
  this.id = a;
  this.desc = b;
  this.text = 0 == a ? b : a + " (" + b + ")";
};
d = vp.prototype;
d.mo = function(a) {
  for (var b = [], c = 1;c < arguments.length;c++) {
    b.push(new wp(c, arguments[c]));
  }
  b.push(new wp(0, arguments[0]));
  return b;
};
d.Vy = function() {
  this.b.videoSmoothnessRatings = this.mo(ep, $o, ap, bp, cp, dp);
  this.b.videoQualityRatings = this.mo(ep, fp, gp, hp, ip, jp);
  this.b.audioQualityRatings = this.mo(ep, kp, lp, mp, np, op);
};
d.Uy = function() {
  this.b.feedbackType = "Bug";
  this.b.sendFeedback = t(this.QD, this);
  this.b.cancel = t(this.LD, this);
  this.b.attachLogsClick = t(this.KD, this);
};
d.LD = function() {
  this.b.feedbackDescription && !confirm(pp) || window.close();
};
d.QD = function() {
  var a = this.b.feedbackType, b = "";
  null == this.Ae && (this.Ae = new je);
  var c = !1, e = !1;
  "MirroringQuality" == a ? (this.b.cpu && (b += "\nProcessor: " + this.b.cpu, this.Ae.cpu = this.b.cpu, c = !0), this.b.gpu && (b += "\nGraphics: " + this.b.gpu, this.Ae.gpu = this.b.gpu, c = !0), this.b.videoSmoothness && (b += "\nVideo Smoothness: " + this.b.videoSmoothness, e = !0), this.b.videoQuality && (b += "\nVideo Quality: " + this.b.videoQuality, e = !0), this.b.audioQuality && (b += "\nAudio: " + this.b.audioQuality, e = !0), this.b.projectedContentUrl && (b += "\nProjected Content/URL: " + 
  this.b.projectedContentUrl), this.b.comments && (b += "\nComments: " + this.b.comments, e = !0)) : "Discovery" == a && (this.b.visibleInSetup && (b += "\nChromecast Visible In Setup: " + this.b.visibleInSetup, e = !0), this.b.hasNetworkSoftware && (b += "\nUsing VPN/proxy/firewall/NAS Software: " + this.b.hasNetworkSoftware, this.Ae.hasNetworkSoftware = this.b.hasNetworkSoftware, c = !0), this.b.networkDescription && (b += "\nNetwork Description: " + this.b.networkDescription, this.Ae.networkDescription = 
  this.b.networkDescription, c = !0), this.b.comments && (b += "\nComments: " + this.b.comments, e = !0));
  this.b.feedbackDescription && (e = !0, b += this.b.feedbackDescription);
  c && this.qf.Gi().BD(this.Ae);
  e && this.AD("Type: " + a + "\n\n" + b);
};
d.AD = function(a) {
  this.b.showSendConfirmation = !0;
  this.b.sendDialogText = qp;
  this.b.feedbackSent = !1;
  var b = t(function() {
    this.a.info("Feedback submission succeeded.");
    this.qf.Cy();
    this.b.sendDialogText = sp;
    this.b.feedbackSent = !0;
    this.b.$apply();
  }, this), c = t(function() {
    this.a.info("Feedback submission failed.");
    this.b.sendDialogText = rp;
    this.b.feedbackSent = !0;
    this.b.$apply();
  }, this), e = this.qf.Sq(), f = this.qf.Gi().Dy(), g = t(function(a, b, c) {
    this.a.info("feedback send callback: " + JSON.stringify({attempt:a.rm(), isSuccess:b, info:c}));
    b ? a.Jl() : (this.b.sendDialogText = Rk.G().getMessage(tp, {attemptNumber:a.rm()}), this.b.$apply(), a.Bg());
  }, this), h = t(function(b) {
    this.a.info("attempt sending feedback: " + b.rm());
    b = na(g, b);
    var c = this.b.logs || "", h = this.b.externalLogs || "", l = chrome.runtime.getManifest();
    up({productId:85561, bucket:l.feedbackBucket, flow:"submit", serverUri:"https://www.google.com/tools/feedback", allowNonLoggedInFeedback:!0, locale:"en", report:{description:a}, callback:b}, {version:l.version, description:l.description, settings:f || "", logs:c || "NA", external_logs:h || "NA", "webRTC stats":e || "NA"});
  }, this), l = new Qj;
  l.Ml(4);
  l.Di(1E4);
  l.hq(2);
  l.start(h, b, c);
};
d.KD = function() {
  if (this.b.attachLogs) {
    var a = null;
    Sj() && (a = chrome.extension.getBackgroundPage().getChromeKeySetupLogs);
    this.b.logs = a ? ">>> Background Page Logs <<<\n" + this.qf.tk() + "\n\n\n\n>>> ChromeKey Setup Page Logs <<<\n" + a() : this.qf.tk();
  } else {
    this.b.logs = "";
  }
};
"undefined" != typeof angular && angular.module("optionsController", ["chrome_i18n"]);
var yp = function(a) {
  chrome.extension.getBackgroundPage() && chrome.extension.getBackgroundPage().backgroundSetup || window.close();
  a.jm = function(b, c) {
    a.$watch(b, function(a, b) {
      JSON.stringify(b) != JSON.stringify(a) && c(a);
    });
  };
  a.model = a;
  this.F = this.Ly();
  this.a = I("cv.OptionsCtrl");
  this.b = a;
  this.b.showSavedMessage = !1;
  this.b.stopCasting = t(this.Qy, this);
  this.b.isChromekeySetupActive = !1;
  this.Py();
  this.My();
  this.Ny();
  this.Oy();
  xp = t(function(a) {
    this.b.isChromekeySetupActive = a;
    this.b.$apply();
  }, this);
};
m("OptionsCtrl", yp, void 0);
yp.$inject = ["$scope"];
var xp = null;
m("notifyChromekeySetupActive", function(a) {
  xp && xp(a);
}, void 0);
d = yp.prototype;
d.Oh = function() {
  return chrome.extension.getBackgroundPage().backgroundSetup;
};
d.Ly = function() {
  return this.Oh().Gi();
};
d.Ny = function() {
  this.b.qualityLevels = Pd;
  this.b.isMirroring = !!this.Oh().dk().wd();
  this.b.jm("quality", t(function(a) {
    this.b.qualityLevels.forEach(t(function(b) {
      "custom" != a && b.id == a && (this.b.videoResolution = b.videoResolution, this.b.maxVideoBitrate = b.maxVideoBitrate, this.b.minVideoBitrate = b.minVideoBitrate, this.b.videoQuality = b.videoQuality, this.b.audioBitrate = b.audioBitrate);
    }, this));
    this.hk("quality");
  }, this));
  this.xD(!0);
};
d.hk = function() {
  this.b.showStopCasting = !!this.Oh().dk().wd();
  this.DD();
};
d.Qy = function() {
  this.b.showStopCasting = !1;
  var a = this.Oh().dk().wd();
  a && this.Oh().dk().ke(a.c());
};
d.xD = function(a) {
  var b = this.b.quality || null;
  this.b.quality = this.F.ua().Ol();
  "custom" == this.b.quality && (this.b.quality = Od.id);
  a || (null == b || b == this.b.quality) && "custom" != this.b.quality || this.hk("quality");
};
d.Py = function() {
  this.b.zoomMode = this.F.ua().zoomModeEnabled ? "on" : "off";
  this.b.jm("zoomMode", t(function() {
    this.hk("zoomMode");
  }, this));
};
d.My = function() {
  this.b.allowAutoResize = this.F.ua().allowAutoResize;
  this.b.jm("allowAutoResize", t(function() {
    this.hk("allowAutoResize");
  }, this));
};
d.DD = function() {
  q(this.b.videoResolution) && this.F.ua().vt(this.b.videoResolution);
  q(this.b.minVideoBitrate) && this.F.ua().YC(this.b.minVideoBitrate);
  q(this.b.maxVideoBitrate) && this.F.ua().XC(this.b.maxVideoBitrate);
  q(this.b.videoQuality) && this.F.ua().$C(this.b.videoQuality);
  q(this.b.audioBitrate) && this.F.ua().Xn(this.b.audioBitrate);
  q(this.b.bufferSizeMillis) && this.F.ua().VC(this.b.bufferSizeMillis);
  q(this.b.maxFrameRate) && this.F.ua().WC(this.b.maxFrameRate);
  q(this.b.zoomMode) && (this.F.ua().zoomModeEnabled = "on" == this.b.zoomMode);
  q(this.b.allowAutoResize) && (this.F.ua().allowAutoResize = this.b.allowAutoResize ? !0 : !1);
  q(this.b.enablePacing) && this.F.ua().ZC(this.b.enablePacing ? !0 : !1);
  q(this.b.enableAudioTcp) && this.F.ua().TC(this.b.enableAudioTcp ? !0 : !1);
  q(this.b.enableVideoTcp) && this.F.ua().aD(this.b.enableVideoTcp ? !0 : !1);
  q(this.b.enableAudioNack) && this.F.ua().SC(this.b.enableAudioNack ? !0 : !1);
  q(this.b.autoFeedback) && this.F.ua().UC(this.b.autoFeedback ? !0 : !1);
  this.F.Ke();
  this.b.showSavedMessage = !0;
};
d.Oy = function() {
  this.b.customDomains = this.F.ut();
  this.b.$watch("customDomains", t(function(a) {
    this.F.mD(a);
  }, this), !0);
  this.b.addCustomDomain = t(function() {
    var a = this.b.newCustomDomain;
    a && -1 == this.b.customDomains.indexOf(a) && this.b.customDomains.push(a);
    this.b.newCustomDomain = "";
  }, this);
  this.b.deleteCustomDomain = t(function(a) {
    tb(this.b.customDomains, a);
  }, this);
};

