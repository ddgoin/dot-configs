(function() {var b, chrome = window.chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var g = g || {};
g.global = this;
g.Xb = function(a, c, d) {
  a = a.split(".");
  d = d || g.global;
  a[0] in d || !d.execScript || d.execScript("var " + a[0]);
  for (var e;a.length && (e = a.shift());) {
    a.length || void 0 === c ? d = d[e] ? d[e] : d[e] = {} : d[e] = c;
  }
};
g.Wj = function(a, c) {
  g.Xb(a, c);
};
g.Ha = !0;
g.si = "en";
g.de = !0;
g.hl = function(a) {
  g.Xb(a);
};
g.rl = function(a) {
  if (!g.Ha) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + a ? ": " + a : ".");
  }
};
g.ek = function() {
};
g.Gg = function(a, c) {
  for (var d = a.split("."), e = c || g.global, f;f = d.shift();) {
    if (g.R(e[f])) {
      e = e[f];
    } else {
      return null;
    }
  }
  return e;
};
g.wk = function(a, c) {
  var d = c || g.global, e;
  for (e in a) {
    d[e] = a[e];
  }
};
g.ej = function(a, c, d) {
  if (g.Hd) {
    var e;
    a = a.replace(/\\/g, "/");
    for (var f = g.la, h = 0;e = c[h];h++) {
      f.Da[e] = a, a in f.Qb || (f.Qb[a] = {}), f.Qb[a][e] = !0;
    }
    for (e = 0;c = d[e];e++) {
      a in f.requires || (f.requires[a] = {}), f.requires[a][c] = !0;
    }
  }
};
g.Ml = !1;
g.$h = !0;
g.require = function() {
};
g.cb = "";
g.bl = function() {
};
g.zk = function(a) {
  return a;
};
g.cj = function() {
  throw Error("unimplemented abstract method");
};
g.fj = function(a) {
  a.Zc = function() {
    if (a.Ga) {
      return a.Ga;
    }
    g.Ha && (g.Id[g.Id.length] = a);
    return a.Ga = new a;
  };
};
g.Id = [];
g.Hd = !1;
g.Hd && (g.Af = {}, g.la = {Qb:{}, Da:{}, requires:{}, ud:{}, eb:{}}, g.Ld = function() {
  var a = g.global.document;
  return "undefined" != typeof a && "write" in a;
}, g.oh = function() {
  if (g.global.wg) {
    g.cb = g.global.wg;
  } else {
    if (g.Ld()) {
      for (var a = g.global.document.getElementsByTagName("script"), c = a.length - 1;0 <= c;--c) {
        var d = a[c].src, e = d.lastIndexOf("?"), e = -1 == e ? d.length : e;
        if ("base.js" == d.substr(e - 7, 7)) {
          g.cb = d.substr(0, e - 7);
          break;
        }
      }
    }
  }
}, g.td = function(a) {
  var c = g.global.Hh || g.ng;
  !g.la.eb[a] && c(a) && (g.la.eb[a] = !0);
}, g.ng = function(a) {
  if (g.Ld()) {
    var c = g.global.document;
    if ("complete" == c.readyState) {
      if (/\bdeps.js$/.test(a)) {
        return!1;
      }
      throw Error('Cannot write "' + a + '" after document load');
    }
    c.write('<script type="text/javascript" src="' + a + '">\x3c/script>');
    return!0;
  }
  return!1;
}, g.Pl = function() {
  function a(f) {
    if (!(f in e.eb)) {
      if (!(f in e.ud) && (e.ud[f] = !0, f in e.requires)) {
        for (var k in e.requires[f]) {
          if (!g.Gh(k)) {
            if (k in e.Da) {
              a(e.Da[k]);
            } else {
              throw Error("Undefined nameToPath for " + k);
            }
          }
        }
      }
      f in d || (d[f] = !0, c.push(f));
    }
  }
  var c = [], d = {}, e = g.la, f;
  for (f in g.Af) {
    e.eb[f] || a(f);
  }
  for (f = 0;f < c.length;f++) {
    if (c[f]) {
      g.td(g.cb + c[f]);
    } else {
      throw Error("Undefined script input");
    }
  }
}, g.nk = function(a) {
  return a in g.la.Da ? g.la.Da[a] : null;
}, g.oh(), g.global.Sh || g.td(g.cb + "deps.js"));
g.P = function(a) {
  var c = typeof a;
  if ("object" == c) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return c;
      }
      var d = Object.prototype.toString.call(a);
      if ("[object Window]" == d) {
        return "object";
      }
      if ("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == c && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return c;
};
g.aa = function(a) {
  return void 0 !== a;
};
g.Ze = function(a) {
  return null === a;
};
g.R = function(a) {
  return null != a;
};
g.isArray = function(a) {
  return "array" == g.P(a);
};
g.v = function(a) {
  var c = g.P(a);
  return "array" == c || "object" == c && "number" == typeof a.length;
};
g.Fk = function(a) {
  return g.isObject(a) && "function" == typeof a.getFullYear;
};
g.isString = function(a) {
  return "string" == typeof a;
};
g.Bb = function(a) {
  return "boolean" == typeof a;
};
g.isNumber = function(a) {
  return "number" == typeof a;
};
g.isFunction = function(a) {
  return "function" == g.P(a);
};
g.isObject = function(a) {
  var c = typeof a;
  return "object" == c && null != a || "function" == c;
};
g.Yb = function(a) {
  return a[g.Ia] || (a[g.Ia] = ++g.Ag);
};
g.yk = function(a) {
  return!!a[g.Ia];
};
g.yh = function(a) {
  "removeAttribute" in a && a.removeAttribute(g.Ia);
  try {
    delete a[g.Ia];
  } catch (c) {
  }
};
g.Ia = "closure_uid_" + (1E9 * Math.random() >>> 0);
g.Ag = 0;
g.ik = g.Yb;
g.jl = g.yh;
g.pg = function(a) {
  var c = g.P(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = g.pg(a[d]);
    }
    return c;
  }
  return a;
};
g.Fg = function(a, c, d) {
  return a.call.apply(a.bind, arguments);
};
g.Eg = function(a, c, d) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var e = Array.prototype.slice.call(arguments, 2);
    return function() {
      var d = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(d, e);
      return a.apply(c, d);
    };
  }
  return function() {
    return a.apply(c, arguments);
  };
};
g.bind = function(a, c, d) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? g.bind = g.Fg : g.bind = g.Eg;
  return g.bind.apply(null, arguments);
};
g.zc = function(a, c) {
  var d = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = d.slice();
    c.push.apply(c, arguments);
    return a.apply(this, c);
  };
};
g.ge = function(a, c) {
  for (var d in c) {
    a[d] = c[d];
  }
};
g.now = g.de && Date.now || function() {
  return+new Date;
};
g.vk = function(a) {
  if (g.global.execScript) {
    g.global.execScript(a, "JavaScript");
  } else {
    if (g.global.eval) {
      if (null == g.hb && (g.global.eval("var _et_ = 1;"), "undefined" != typeof g.global._et_ ? (delete g.global._et_, g.hb = !0) : g.hb = !1), g.hb) {
        g.global.eval(a);
      } else {
        var c = g.global.document, d = c.createElement("script");
        d.type = "text/javascript";
        d.defer = !1;
        d.appendChild(c.createTextNode(a));
        c.body.appendChild(d);
        c.body.removeChild(d);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
g.hb = null;
g.hk = function(a, c) {
  var d = function(a) {
    return g.Qd[a] || a;
  }, e = function(a) {
    a = a.split("-");
    for (var c = [], e = 0;e < a.length;e++) {
      c.push(d(a[e]));
    }
    return c.join("-");
  }, e = g.Qd ? "BY_WHOLE" == g.Dg ? d : e : function(a) {
    return a;
  };
  return c ? a + "-" + e(c) : e(a);
};
g.ol = function(a, c) {
  g.Qd = a;
  g.Dg = c;
};
g.lk = function(a, c) {
  var d = c || {}, e;
  for (e in d) {
    var f = ("" + d[e]).replace(/\$/g, "$$$$");
    a = a.replace(RegExp("\\{\\$" + e + "\\}", "gi"), f);
  }
  return a;
};
g.mk = function(a) {
  return a;
};
g.h = function(a, c, d) {
  g.Xb(a, c, d);
};
g.u = function(a, c, d) {
  a[c] = d;
};
g.Ka = function(a, c) {
  function d() {
  }
  d.prototype = c.prototype;
  a.gb = c.prototype;
  a.prototype = new d;
  a.prototype.constructor = a;
  a.Cg = function(a, d, h) {
    var k = Array.prototype.slice.call(arguments, 2);
    return c.prototype[d].apply(a, k);
  };
};
g.Cg = function(a, c, d) {
  var e = arguments.callee.caller;
  if (g.Ha && !e) {
    throw Error("arguments.caller not defined.  goog.base() expects not to be running in strict mode. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (e.gb) {
    return e.gb.constructor.apply(a, Array.prototype.slice.call(arguments, 1));
  }
  for (var f = Array.prototype.slice.call(arguments, 2), h = !1, k = a.constructor;k;k = k.gb && k.gb.constructor) {
    if (k.prototype[c] === e) {
      h = !0;
    } else {
      if (h) {
        return k.prototype[c].apply(a, f);
      }
    }
  }
  if (a[c] === e) {
    return a.constructor.prototype[c].apply(a, f);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
g.scope = function(a) {
  a.call(g.global);
};
g.Ug = !0;
g.Ug && (Function.prototype.bind = Function.prototype.bind || function(a, c) {
  if (1 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 1);
    d.unshift(this, a);
    return g.bind.apply(null, d);
  }
  return g.bind(this, a);
}, Function.prototype.zc = function(a) {
  var c = Array.prototype.slice.call(arguments);
  c.unshift(this, null);
  return g.bind.apply(null, c);
}, Function.prototype.Ka = function(a) {
  g.Ka(this, a);
}, Function.prototype.ge = function(a) {
  g.ge(this.prototype, a);
});
chrome.cast.Nd = {TAB_AND_ORIGIN_SCOPED:"tab_and_origin_scoped", ORIGIN_SCOPED:"origin_scoped", PAGE_SCOPED:"page_scoped"};
g.h("chrome.cast.AutoJoinPolicy", chrome.cast.Nd);
chrome.cast.Od = {CREATE_SESSION:"create_session", CAST_THIS_TAB:"cast_this_tab"};
g.h("chrome.cast.DefaultActionPolicy", chrome.cast.Od);
chrome.cast.Tb = {VIDEO_OUT:"video_out", AUDIO_OUT:"audio_out", VIDEO_IN:"video_in", AUDIO_IN:"audio_in"};
g.h("chrome.cast.Capability", chrome.cast.Tb);
chrome.cast.U = {CANCEL:"cancel", TIMEOUT:"timeout", API_NOT_INITIALIZED:"api_not_initialized", INVALID_PARAMETER:"invalid_parameter", EXTENSION_NOT_COMPATIBLE:"extension_not_compatible", EXTENSION_MISSING:"extension_missing", RECEIVER_UNAVAILABLE:"receiver_unavailable", SESSION_ERROR:"session_error", CHANNEL_ERROR:"channel_error", LOAD_MEDIA_FAILED:"load_media_failed"};
g.h("chrome.cast.ErrorCode", chrome.cast.U);
chrome.cast.Zg = {AVAILABLE:"available", UNAVAILABLE:"unavailable"};
g.h("chrome.cast.ReceiverAvailability", chrome.cast.Zg);
chrome.cast.fh = {CHROME:"chrome", IOS:"ios", ANDROID:"android"};
g.h("chrome.cast.SenderPlatform", chrome.cast.fh);
chrome.cast.VERSION = [1, 0];
g.h("chrome.cast.VERSION", chrome.cast.VERSION);
chrome.cast.G = function(a, c) {
  this.code = a;
  this.description = c || null;
  this.details = null;
};
g.h("chrome.cast.Error", chrome.cast.G);
chrome.cast.eh = function(a) {
  this.platform = a;
  this.packageId = this.url = null;
};
g.h("chrome.cast.SenderApplication", chrome.cast.eh);
chrome.cast.Pg = function(a) {
  this.url = a;
  this.width = this.height = null;
};
g.h("chrome.cast.Image", chrome.cast.Pg);
chrome.cast.Za = function(a, c) {
  this.level = g.aa(a) ? a : null;
  this.muted = g.aa(c) ? c : null;
};
g.h("chrome.cast.Volume", chrome.cast.Za);
var l = {t:{Qg:"LAUNCH", Fd:"STOP", Ed:"SET_VOLUME", Dd:"GET_STATUS", ag:"RECEIVER_STATUS", Zi:"CONNECT", $i:"CLOSE", fi:"GET_APP_AVAILABILITY", bb:"LOAD", of:"PAUSE", hd:"SEEK", pf:"PLAY", bd:"STOP_MEDIA", Tg:"MEDIA_GET_STATUS", jd:"MEDIA_SET_VOLUME", gi:"INVALID_PLAYER_STATE", ri:"LOAD_FAILED", qi:"LOAD_CANCELLED", hi:"INVALID_REQUEST", Fb:"MEDIA_STATUS", oi:"LAUNCH_ERROR", Gi:"PING", Ii:"PONG"}, Ub:{}};
l.Ub[l.t.bd] = l.t.Fd;
l.Ub[l.t.jd] = l.t.Ed;
l.Ub[l.t.Tg] = l.t.Dd;
l.Of = function(a, c, d) {
  this.sessionId = a;
  this.namespaceName = c;
  this.message = d;
};
l.Mf = function(a) {
  this.type = l.t.Fd;
  this.requestId = null;
  this.sessionId = a || null;
};
chrome.cast.media.Ja = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
g.h("chrome.cast.media.MediaCommand", chrome.cast.media.Ja);
chrome.cast.media.pa = {GENERIC:0, TV_SHOW:1, MOVIE:2, MUSIC_TRACK:3, PHOTO:4};
g.h("chrome.cast.media.MetadataType", chrome.cast.media.pa);
chrome.cast.media.Gb = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
g.h("chrome.cast.media.PlayerState", chrome.cast.media.Gb);
chrome.cast.media.$g = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
g.h("chrome.cast.media.ResumeState", chrome.cast.media.$g);
chrome.cast.media.Pb = {BUFFERED:"buffered", LIVE:"live", OTHER:"other"};
g.h("chrome.cast.media.StreamType", chrome.cast.media.Pb);
chrome.cast.media.ed = function() {
  this.customData = null;
};
g.h("chrome.cast.media.PauseRequest", chrome.cast.media.ed);
chrome.cast.media.fd = function() {
  this.customData = null;
};
g.h("chrome.cast.media.PlayRequest", chrome.cast.media.fd);
chrome.cast.media.dh = function() {
  this.customData = this.resumeState = this.currentTime = null;
};
g.h("chrome.cast.media.SeekRequest", chrome.cast.media.dh);
chrome.cast.media.cd = function() {
  this.customData = null;
};
g.h("chrome.cast.media.StopRequest", chrome.cast.media.cd);
chrome.cast.media.ih = function(a) {
  this.volume = a;
  this.customData = null;
};
g.h("chrome.cast.media.VolumeRequest", chrome.cast.media.ih);
chrome.cast.media.Sg = function(a) {
  this.type = l.t.bb;
  this.sessionId = this.requestId = null;
  this.media = a;
  this.autoplay = !0;
  this.customData = this.currentTime = null;
};
g.h("chrome.cast.media.LoadRequest", chrome.cast.media.Sg);
chrome.cast.media.Ng = function() {
  this.type = chrome.cast.media.pa.GENERIC;
  this.releaseYear = this.images = this.subtitle = this.title = null;
};
g.h("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.Ng);
chrome.cast.media.Wg = function() {
  this.type = chrome.cast.media.pa.MOVIE;
  this.releaseYear = this.images = this.subtitle = this.studio = this.title = null;
};
g.h("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.Wg);
chrome.cast.media.hh = function() {
  this.type = chrome.cast.media.pa.TV_SHOW;
  this.releaseYear = this.images = this.episodeNumber = this.seasonNumber = this.episodeTitle = this.seriesTitle = null;
};
g.h("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.hh);
chrome.cast.media.Xg = function() {
  this.type = chrome.cast.media.pa.MUSIC_TRACK;
  this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.albumName = null;
};
g.h("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.Xg);
chrome.cast.media.Yg = function() {
  this.type = chrome.cast.media.pa.PHOTO;
  this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = null;
};
g.h("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.Yg);
chrome.cast.media.Vg = function(a, c) {
  this.contentId = a;
  this.streamType = chrome.cast.media.Pb.BUFFERED;
  this.contentType = c;
  this.customData = this.duration = this.metadata = null;
};
g.h("chrome.cast.media.MediaInfo", chrome.cast.media.Vg);
chrome.cast.media.n = function(a, c) {
  this.sessionId = a;
  this.mediaSessionId = c;
  this.media = null;
  this.playbackRate = 1;
  this.playerState = chrome.cast.media.Gb.IDLE;
  this.currentTime = 0;
  this.supportedMediaCommands = [];
  this.volume = new chrome.cast.Za;
  this.customData = null;
  this.Ta = this.zb = !1;
  this.Ca = [];
};
g.h("chrome.cast.media.Media", chrome.cast.media.n);
chrome.cast.media.Jg = "CC1AD845";
g.h("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.Jg);
chrome.cast.Ig = function(a, c, d, e, f) {
  this.sessionRequest = a;
  this.sessionListener = c;
  this.receiverListener = d;
  this.autoJoinPolicy = e || chrome.cast.Nd.TAB_AND_ORIGIN_SCOPED;
  this.defaultActionPolicy = f || chrome.cast.Od.CREATE_SESSION;
};
g.h("chrome.cast.ApiConfig", chrome.cast.Ig);
chrome.cast.gh = function(a, c) {
  this.appId = a;
  this.capabilities = c || [chrome.cast.Tb.VIDEO_OUT, chrome.cast.Tb.AUDIO_OUT];
};
g.h("chrome.cast.SessionRequest", chrome.cast.gh);
chrome.cast.L = function(a, c, d, e) {
  this.label = a;
  this.friendlyName = c;
  this.capabilities = d || [];
  this.volume = e || null;
};
g.h("chrome.cast.Receiver", chrome.cast.L);
chrome.cast.i = function(a, c, d, e, f) {
  this.sessionId = a;
  this.appId = c;
  this.displayName = d;
  this.statusText = null;
  this.appImages = e;
  this.receiver = f;
  this.senderApps = [];
  this.namespaces = [];
  this.customData = null;
  this.media = [];
  this.transportId = "";
};
g.h("chrome.cast.Session", chrome.cast.i);
l.ib = function(a) {
  return "urn:x-cast:com.google.cast." + a;
};
l.na = {jg:l.ib("tp.connection"), kg:l.ib("tp.heartbeat"), ig:l.ib("receiver"), hg:l.ib("media")};
l.na.gg = function(a) {
  switch(a) {
    case l.na.jg:
    ;
    case l.na.kg:
    ;
    case l.na.ig:
    ;
    case l.na.hg:
      return!0;
    default:
      return!1;
  }
};
l.Ph = function() {
  this.displayName = this.appId = this.sessionId = this.transportId = "";
  this.statusText = null;
  this.appImages = [];
  this.senderApps = [];
  this.namespaces = [];
};
l.Mi = function() {
  this.type = l.t.Dd;
  this.requestId = null;
};
l.Ni = function() {
  this.type = l.t.ag;
  this.status = this.requestId = null;
};
l.Li = function() {
  this.channelUrl = this.volume = this.applications = null;
};
l.ki = function() {
};
l.li = function() {
};
g.debug = {};
g.debug.G = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, g.debug.G);
  } else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
};
g.Ka(g.debug.G, Error);
g.debug.G.prototype.name = "CustomError";
g.Tc = {};
g.Tc.Ue = {Te:1, Lh:2, Ti:3, Qh:4, bi:5, ai:6, Ji:7, Th:8, Xh:9, Zh:10, Yh:11, Di:12};
g.b = {};
g.b.Wi = {Ci:"\u00a0"};
g.b.ac = function(a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
g.b.Yj = function(a, c) {
  var d = a.length - c.length;
  return 0 <= d && a.indexOf(c, d) == d;
};
g.b.Dj = function(a, c) {
  return 0 == g.b.Fc(c, a.substr(0, c.length));
};
g.b.Bj = function(a, c) {
  return 0 == g.b.Fc(c, a.substr(a.length - c.length, c.length));
};
g.b.Cj = function(a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
g.b.we = function(a, c) {
  for (var d = a.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1);f.length && 1 < d.length;) {
    e += d.shift() + f.shift();
  }
  return e + d.join("%s");
};
g.b.Jj = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
g.b.J = function(a) {
  return/^[\s\xa0]*$/.test(a);
};
g.b.Hk = function(a) {
  return g.b.J(g.b.xe(a));
};
g.b.Ek = function(a) {
  return!/[^\t\n\r ]/.test(a);
};
g.b.Ck = function(a) {
  return!/[^a-zA-Z]/.test(a);
};
g.b.Mk = function(a) {
  return!/[^0-9]/.test(a);
};
g.b.Dk = function(a) {
  return!/[^a-zA-Z0-9]/.test(a);
};
g.b.Ok = function(a) {
  return " " == a;
};
g.b.Pk = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a;
};
g.b.yl = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ");
};
g.b.Aj = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n");
};
g.b.Zk = function(a) {
  return a.replace(/\xa0|\s/g, " ");
};
g.b.Yk = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ");
};
g.b.Ij = function(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
g.b.trim = function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
g.b.trimLeft = function(a) {
  return a.replace(/^[\s\xa0]+/, "");
};
g.b.trimRight = function(a) {
  return a.replace(/[\s\xa0]+$/, "");
};
g.b.Fc = function(a, c) {
  var d = String(a).toLowerCase(), e = String(c).toLowerCase();
  return d < e ? -1 : d == e ? 0 : 1;
};
g.b.Gc = /(\.\d+)|(\d+)|(\D+)/g;
g.b.cl = function(a, c) {
  if (a == c) {
    return 0;
  }
  if (!a) {
    return-1;
  }
  if (!c) {
    return 1;
  }
  for (var d = a.toLowerCase().match(g.b.Gc), e = c.toLowerCase().match(g.b.Gc), f = Math.min(d.length, e.length), h = 0;h < f;h++) {
    var k = d[h], m = e[h];
    if (k != m) {
      return d = parseInt(k, 10), !isNaN(d) && (e = parseInt(m, 10), !isNaN(e) && d - e) ? d - e : k < m ? -1 : 1;
    }
  }
  return d.length != e.length ? d.length - e.length : a < c ? -1 : 1;
};
g.b.Ll = function(a) {
  return encodeURIComponent(String(a));
};
g.b.Kl = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "));
};
g.b.He = function(a, c) {
  return a.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>");
};
g.b.ia = function(a, c) {
  if (c) {
    return a.replace(g.b.pc, "&amp;").replace(g.b.rc, "&lt;").replace(g.b.qc, "&gt;").replace(g.b.sc, "&quot;").replace(g.b.tc, "&#39;");
  }
  if (!g.b.ve.test(a)) {
    return a;
  }
  -1 != a.indexOf("&") && (a = a.replace(g.b.pc, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(g.b.rc, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(g.b.qc, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(g.b.sc, "&quot;"));
  -1 != a.indexOf("'") && (a = a.replace(g.b.tc, "&#39;"));
  return a;
};
g.b.pc = /&/g;
g.b.rc = /</g;
g.b.qc = />/g;
g.b.sc = /"/g;
g.b.tc = /'/g;
g.b.ve = /[&<>"']/;
g.b.tb = function(a) {
  return g.b.contains(a, "&") ? "document" in g.global ? g.b.Dc(a) : g.b.Ee(a) : a;
};
g.b.Il = function(a, c) {
  return g.b.contains(a, "&") ? g.b.Dc(a, c) : a;
};
g.b.Dc = function(a, c) {
  var d = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, e;
  e = c ? c.createElement("div") : document.createElement("div");
  return a.replace(g.b.Ge, function(a, c) {
    var k = d[a];
    if (k) {
      return k;
    }
    if ("#" == c.charAt(0)) {
      var m = Number("0" + c.substr(1));
      isNaN(m) || (k = String.fromCharCode(m));
    }
    k || (e.innerHTML = a + " ", k = e.firstChild.nodeValue.slice(0, -1));
    return d[a] = k;
  });
};
g.b.Ee = function(a) {
  return a.replace(/&([^;]+);/g, function(a, d) {
    switch(d) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return'"';
      default:
        if ("#" == d.charAt(0)) {
          var e = Number("0" + d.substr(1));
          if (!isNaN(e)) {
            return String.fromCharCode(e);
          }
        }
        return a;
    }
  });
};
g.b.Ge = /&([^;\s<&]+);?/g;
g.b.Nl = function(a, c) {
  return g.b.He(a.replace(/  /g, " &#160;"), c);
};
g.b.zl = function(a, c) {
  for (var d = c.length, e = 0;e < d;e++) {
    var f = 1 == d ? c : c.charAt(e);
    if (a.charAt(0) == f && a.charAt(a.length - 1) == f) {
      return a.substring(1, a.length - 1);
    }
  }
  return a;
};
g.b.truncate = function(a, c, d) {
  d && (a = g.b.tb(a));
  a.length > c && (a = a.substring(0, c - 3) + "...");
  d && (a = g.b.ia(a));
  return a;
};
g.b.Hl = function(a, c, d, e) {
  d && (a = g.b.tb(a));
  if (e && a.length > c) {
    e > c && (e = c), a = a.substring(0, c - e) + "..." + a.substring(a.length - e);
  } else {
    if (a.length > c) {
      e = Math.floor(c / 2);
      var f = a.length - e;
      a = a.substring(0, e + c % 2) + "..." + a.substring(f);
    }
  }
  d && (a = g.b.ia(a));
  return a;
};
g.b.sb = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
g.b.Ra = {"'":"\\'"};
g.b.quote = function(a) {
  a = String(a);
  if (a.quote) {
    return a.quote();
  }
  for (var c = ['"'], d = 0;d < a.length;d++) {
    var e = a.charAt(d), f = e.charCodeAt(0);
    c[d + 1] = g.b.sb[e] || (31 < f && 127 > f ? e : g.b.Cc(e));
  }
  c.push('"');
  return c.join("");
};
g.b.ak = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    c[d] = g.b.Cc(a.charAt(d));
  }
  return c.join("");
};
g.b.Cc = function(a) {
  if (a in g.b.Ra) {
    return g.b.Ra[a];
  }
  if (a in g.b.sb) {
    return g.b.Ra[a] = g.b.sb[a];
  }
  var c = a, d = a.charCodeAt(0);
  if (31 < d && 127 > d) {
    c = a;
  } else {
    if (256 > d) {
      if (c = "\\x", 16 > d || 256 < d) {
        c += "0";
      }
    } else {
      c = "\\u", 4096 > d && (c += "0");
    }
    c += d.toString(16).toUpperCase();
  }
  return g.b.Ra[a] = c;
};
g.b.Dl = function(a) {
  for (var c = {}, d = 0;d < a.length;d++) {
    c[a.charAt(d)] = !0;
  }
  return c;
};
g.b.contains = function(a, c) {
  return-1 != a.indexOf(c);
};
g.b.Pj = function(a, c) {
  return a && c ? a.split(c).length - 1 : 0;
};
g.b.Qa = function(a, c, d) {
  var e = a;
  0 <= c && c < a.length && 0 < d && (e = a.substr(0, c) + a.substr(c + d, a.length - c - d));
  return e;
};
g.b.remove = function(a, c) {
  var d = RegExp(g.b.vb(c), "");
  return a.replace(d, "");
};
g.b.removeAll = function(a, c) {
  var d = RegExp(g.b.vb(c), "g");
  return a.replace(d, "");
};
g.b.vb = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
g.b.repeat = function(a, c) {
  return Array(c + 1).join(a);
};
g.b.el = function(a, c, d) {
  a = g.aa(d) ? a.toFixed(d) : String(a);
  d = a.indexOf(".");
  -1 == d && (d = a.length);
  return g.b.repeat("0", Math.max(0, c - d)) + a;
};
g.b.xe = function(a) {
  return null == a ? "" : String(a);
};
g.b.yj = function(a) {
  return Array.prototype.join.call(arguments, "");
};
g.b.qk = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ g.now()).toString(36);
};
g.b.Ac = function(a, c) {
  for (var d = 0, e = g.b.trim(String(a)).split("."), f = g.b.trim(String(c)).split("."), h = Math.max(e.length, f.length), k = 0;0 == d && k < h;k++) {
    var m = e[k] || "", n = f[k] || "", q = RegExp("(\\d*)(\\D*)", "g"), u = RegExp("(\\d*)(\\D*)", "g");
    do {
      var r = q.exec(m) || ["", "", ""], s = u.exec(n) || ["", "", ""];
      if (0 == r[0].length && 0 == s[0].length) {
        break;
      }
      d = g.b.wb(0 == r[1].length ? 0 : parseInt(r[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || g.b.wb(0 == r[2].length, 0 == s[2].length) || g.b.wb(r[2], s[2]);
    } while (0 == d);
  }
  return d;
};
g.b.wb = function(a, c) {
  return a < c ? -1 : a > c ? 1 : 0;
};
g.b.Fe = 4294967296;
g.b.te = function(a) {
  for (var c = 0, d = 0;d < a.length;++d) {
    c = 31 * c + a.charCodeAt(d), c %= g.b.Fe;
  }
  return c;
};
g.b.Ie = 2147483648 * Math.random() | 0;
g.b.Tj = function() {
  return "goog_" + g.b.Ie++;
};
g.b.El = function(a) {
  var c = Number(a);
  return 0 == c && g.b.J(a) ? NaN : c;
};
g.b.Lk = function(a) {
  return/^[a-z]+([A-Z][a-z]*)*$/.test(a);
};
g.b.Qk = function(a) {
  return/^([A-Z][a-z]*)+$/.test(a);
};
g.b.Cl = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, d) {
    return d.toUpperCase();
  });
};
g.b.Fl = function(a) {
  return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
};
g.b.Gl = function(a, c) {
  var d = g.isString(c) ? g.b.vb(c) : "\\s";
  return a.replace(RegExp("(^" + (d ? "|[" + d + "]+" : "") + ")([a-z])", "g"), function(a, c, d) {
    return c + d.toUpperCase();
  });
};
g.b.fl = function(a) {
  isFinite(a) && (a = String(a));
  return g.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
};
g.b.vl = function(a, c, d) {
  a = a.split(c);
  for (var e = [];0 < d && a.length;) {
    e.push(a.shift()), d--;
  }
  a.length && e.push(a.join(c));
  return e;
};
g.g = {};
g.g.T = g.Ha;
g.g.$a = function(a, c) {
  c.unshift(a);
  g.debug.G.call(this, g.b.we.apply(null, c));
  c.shift();
};
g.Ka(g.g.$a, g.debug.G);
g.g.$a.prototype.name = "AssertionError";
g.g.X = function(a, c, d, e) {
  var f = "Assertion failed";
  if (d) {
    var f = f + (": " + d), h = e
  } else {
    a && (f += ": " + a, h = c);
  }
  throw new g.g.$a("" + f, h || []);
};
g.g.assert = function(a, c, d) {
  g.g.T && !a && g.g.X("", null, c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.g.mb = function(a, c) {
  if (g.g.T) {
    throw new g.g.$a("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  }
};
g.g.qj = function(a, c, d) {
  g.g.T && !g.isNumber(a) && g.g.X("Expected number but got %s: %s.", [g.P(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.g.tj = function(a, c, d) {
  g.g.T && !g.isString(a) && g.g.X("Expected string but got %s: %s.", [g.P(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.g.oj = function(a, c, d) {
  g.g.T && !g.isFunction(a) && g.g.X("Expected function but got %s: %s.", [g.P(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.g.rj = function(a, c, d) {
  g.g.T && !g.isObject(a) && g.g.X("Expected object but got %s: %s.", [g.P(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.g.lj = function(a, c, d) {
  g.g.T && !g.isArray(a) && g.g.X("Expected array but got %s: %s.", [g.P(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.g.mj = function(a, c, d) {
  g.g.T && !g.Bb(a) && g.g.X("Expected boolean but got %s: %s.", [g.P(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.g.nj = function(a, c, d) {
  !g.g.T || g.isObject(a) && a.nodeType == g.Tc.Ue.Te || g.g.X("Expected Element but got %s: %s.", [g.P(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
g.g.pj = function(a, c, d, e) {
  !g.g.T || a instanceof c || g.g.X("instanceof check failed.", null, d, Array.prototype.slice.call(arguments, 3));
  return a;
};
g.g.sj = function() {
  for (var a in Object.prototype) {
    g.g.mb(a + " should not be enumerable in Object.prototype.");
  }
};
g.a = {};
g.Y = g.de;
g.a.gl = function(a) {
  return a[a.length - 1];
};
g.a.l = Array.prototype;
g.a.indexOf = g.Y && g.a.l.indexOf ? function(a, c, d) {
  return g.a.l.indexOf.call(a, c, d);
} : function(a, c, d) {
  d = null == d ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
  if (g.isString(a)) {
    return g.isString(c) && 1 == c.length ? a.indexOf(c, d) : -1;
  }
  for (;d < a.length;d++) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return-1;
};
g.a.lastIndexOf = g.Y && g.a.l.lastIndexOf ? function(a, c, d) {
  return g.a.l.lastIndexOf.call(a, c, null == d ? a.length - 1 : d);
} : function(a, c, d) {
  d = null == d ? a.length - 1 : d;
  0 > d && (d = Math.max(0, a.length + d));
  if (g.isString(a)) {
    return g.isString(c) && 1 == c.length ? a.lastIndexOf(c, d) : -1;
  }
  for (;0 <= d;d--) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return-1;
};
g.a.forEach = g.Y && g.a.l.forEach ? function(a, c, d) {
  g.a.l.forEach.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    h in f && c.call(d, f[h], h, a);
  }
};
g.a.Be = function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, e = e - 1;0 <= e;--e) {
    e in f && c.call(d, f[e], e, a);
  }
};
g.a.filter = g.Y && g.a.l.filter ? function(a, c, d) {
  return g.a.l.filter.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = [], h = 0, k = g.isString(a) ? a.split("") : a, m = 0;m < e;m++) {
    if (m in k) {
      var n = k[m];
      c.call(d, n, m, a) && (f[h++] = n);
    }
  }
  return f;
};
g.a.map = g.Y && g.a.l.map ? function(a, c, d) {
  return g.a.l.map.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = Array(e), h = g.isString(a) ? a.split("") : a, k = 0;k < e;k++) {
    k in h && (f[k] = c.call(d, h[k], k, a));
  }
  return f;
};
g.a.reduce = g.Y && g.a.l.reduce ? function(a, c, d, e) {
  e && (c = g.bind(c, e));
  return g.a.l.reduce.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  g.a.forEach(a, function(d, k) {
    f = c.call(e, f, d, k, a);
  });
  return f;
};
g.a.reduceRight = g.Y && g.a.l.reduceRight ? function(a, c, d, e) {
  e && (c = g.bind(c, e));
  return g.a.l.reduceRight.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  g.a.Be(a, function(d, k) {
    f = c.call(e, f, d, k, a);
  });
  return f;
};
g.a.some = g.Y && g.a.l.some ? function(a, c, d) {
  return g.a.l.some.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && c.call(d, f[h], h, a)) {
      return!0;
    }
  }
  return!1;
};
g.a.every = g.Y && g.a.l.every ? function(a, c, d) {
  return g.a.l.every.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && !c.call(d, f[h], h, a)) {
      return!1;
    }
  }
  return!0;
};
g.a.count = function(a, c, d) {
  var e = 0;
  g.a.forEach(a, function(a, h, k) {
    c.call(d, a, h, k) && ++e;
  }, d);
  return e;
};
g.a.find = function(a, c, d) {
  c = g.a.uc(a, c, d);
  return 0 > c ? null : g.isString(a) ? a.charAt(c) : a[c];
};
g.a.uc = function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    if (h in f && c.call(d, f[h], h, a)) {
      return h;
    }
  }
  return-1;
};
g.a.ck = function(a, c, d) {
  c = g.a.ze(a, c, d);
  return 0 > c ? null : g.isString(a) ? a.charAt(c) : a[c];
};
g.a.ze = function(a, c, d) {
  for (var e = a.length, f = g.isString(a) ? a.split("") : a, e = e - 1;0 <= e;e--) {
    if (e in f && c.call(d, f[e], e, a)) {
      return e;
    }
  }
  return-1;
};
g.a.contains = function(a, c) {
  return 0 <= g.a.indexOf(a, c);
};
g.a.J = function(a) {
  return 0 == a.length;
};
g.a.clear = function(a) {
  if (!g.isArray(a)) {
    for (var c = a.length - 1;0 <= c;c--) {
      delete a[c];
    }
  }
  a.length = 0;
};
g.a.Ak = function(a, c) {
  g.a.contains(a, c) || a.push(c);
};
g.a.vc = function(a, c, d) {
  g.a.splice(a, d, 0, c);
};
g.a.Bk = function(a, c, d) {
  g.zc(g.a.splice, a, d, 0).apply(null, c);
};
g.a.insertBefore = function(a, c, d) {
  var e;
  2 == arguments.length || 0 > (e = g.a.indexOf(a, d)) ? a.push(c) : g.a.vc(a, c, e);
};
g.a.remove = function(a, c) {
  var d = g.a.indexOf(a, c), e;
  (e = 0 <= d) && g.a.Qa(a, d);
  return e;
};
g.a.Qa = function(a, c) {
  return 1 == g.a.l.splice.call(a, c, 1).length;
};
g.a.kl = function(a, c, d) {
  c = g.a.uc(a, c, d);
  return 0 <= c ? (g.a.Qa(a, c), !0) : !1;
};
g.a.concat = function(a) {
  return g.a.l.concat.apply(g.a.l, arguments);
};
g.a.ba = function(a) {
  var c = a.length;
  if (0 < c) {
    for (var d = Array(c), e = 0;e < c;e++) {
      d[e] = a[e];
    }
    return d;
  }
  return[];
};
g.a.clone = g.a.ba;
g.a.extend = function(a, c) {
  for (var d = 1;d < arguments.length;d++) {
    var e = arguments[d], f;
    if (g.isArray(e) || (f = g.v(e)) && Object.prototype.hasOwnProperty.call(e, "callee")) {
      a.push.apply(a, e);
    } else {
      if (f) {
        for (var h = a.length, k = e.length, m = 0;m < k;m++) {
          a[h + m] = e[m];
        }
      } else {
        a.push(e);
      }
    }
  }
};
g.a.splice = function(a, c, d, e) {
  return g.a.l.splice.apply(a, g.a.slice(arguments, 1));
};
g.a.slice = function(a, c, d) {
  return 2 >= arguments.length ? g.a.l.slice.call(a, c) : g.a.l.slice.call(a, c, d);
};
g.a.Ce = function(a, c, d) {
  c = c || a;
  d = d || function() {
    return g.isObject(k) ? "o" + g.Yb(k) : (typeof k).charAt(0) + k;
  };
  for (var e = {}, f = 0, h = 0;h < a.length;) {
    var k = a[h++], m = d(k);
    Object.prototype.hasOwnProperty.call(e, m) || (e[m] = !0, c[f++] = k);
  }
  c.length = f;
};
g.a.nc = function(a, c, d) {
  return g.a.oc(a, d || g.a.ca, !1, c);
};
g.a.wj = function(a, c, d) {
  return g.a.oc(a, c, !0, void 0, d);
};
g.a.oc = function(a, c, d, e, f) {
  for (var h = 0, k = a.length, m;h < k;) {
    var n = h + k >> 1, q;
    q = d ? c.call(f, a[n], n, a) : c(e, a[n]);
    0 < q ? h = n + 1 : (k = n, m = !q);
  }
  return m ? h : ~h;
};
g.a.sort = function(a, c) {
  g.a.l.sort.call(a, c || g.a.ca);
};
g.a.wl = function(a, c) {
  for (var d = 0;d < a.length;d++) {
    a[d] = {index:d, value:a[d]};
  }
  var e = c || g.a.ca;
  g.a.sort(a, function(a, c) {
    return e(a.value, c.value) || a.index - c.index;
  });
  for (d = 0;d < a.length;d++) {
    a[d] = a[d].value;
  }
};
g.a.ul = function(a, c, d) {
  var e = d || g.a.ca;
  g.a.sort(a, function(a, d) {
    return e(a[c], d[c]);
  });
};
g.a.bc = function(a, c, d) {
  c = c || g.a.ca;
  for (var e = 1;e < a.length;e++) {
    var f = c(a[e - 1], a[e]);
    if (0 < f || 0 == f && d) {
      return!1;
    }
  }
  return!0;
};
g.a.equals = function(a, c, d) {
  if (!g.v(a) || !g.v(c) || a.length != c.length) {
    return!1;
  }
  var e = a.length;
  d = d || g.a.se;
  for (var f = 0;f < e;f++) {
    if (!d(a[f], c[f])) {
      return!1;
    }
  }
  return!0;
};
g.a.compare = function(a, c, d) {
  return g.a.equals(a, c, d);
};
g.a.Mj = function(a, c, d) {
  d = d || g.a.ca;
  for (var e = Math.min(a.length, c.length), f = 0;f < e;f++) {
    var h = d(a[f], c[f]);
    if (0 != h) {
      return h;
    }
  }
  return g.a.ca(a.length, c.length);
};
g.a.ca = function(a, c) {
  return a > c ? 1 : a < c ? -1 : 0;
};
g.a.se = function(a, c) {
  return a === c;
};
g.a.uj = function(a, c, d) {
  d = g.a.nc(a, c, d);
  return 0 > d ? (g.a.vc(a, c, -(d + 1)), !0) : !1;
};
g.a.vj = function(a, c, d) {
  c = g.a.nc(a, c, d);
  return 0 <= c ? g.a.Qa(a, c) : !1;
};
g.a.xj = function(a, c, d) {
  for (var e = {}, f = 0;f < a.length;f++) {
    var h = a[f], k = c.call(d, h, f, a);
    g.aa(k) && (e[k] || (e[k] = [])).push(h);
  }
  return e;
};
g.a.Dh = function(a, c, d) {
  var e = {};
  g.a.forEach(a, function(f, h) {
    e[c.call(d, f, h, a)] = f;
  });
  return e;
};
g.a.La = function(a, c, d) {
  var e = [], f = 0, h = a;
  d = d || 1;
  void 0 !== c && (f = a, h = c);
  if (0 > d * (h - f)) {
    return[];
  }
  if (0 < d) {
    for (a = f;a < h;a += d) {
      e.push(a);
    }
  } else {
    for (a = f;a > h;a += d) {
      e.push(a);
    }
  }
  return e;
};
g.a.repeat = function(a, c) {
  for (var d = [], e = 0;e < c;e++) {
    d[e] = a;
  }
  return d;
};
g.a.Ae = function(a) {
  for (var c = [], d = 0;d < arguments.length;d++) {
    var e = arguments[d];
    g.isArray(e) ? c.push.apply(c, g.a.Ae.apply(null, e)) : c.push(e);
  }
  return c;
};
g.a.rotate = function(a, c) {
  a.length && (c %= a.length, 0 < c ? g.a.l.unshift.apply(a, a.splice(-c, c)) : 0 > c && g.a.l.push.apply(a, a.splice(0, -c)));
  return a;
};
g.a.Wk = function(a, c, d) {
  c = g.a.l.splice.call(a, c, 1);
  g.a.l.splice.call(a, d, 0, c[0]);
};
g.a.Kc = function(a) {
  if (!arguments.length) {
    return[];
  }
  for (var c = [], d = 0;;d++) {
    for (var e = [], f = 0;f < arguments.length;f++) {
      var h = arguments[f];
      if (d >= h.length) {
        return c;
      }
      e.push(h[d]);
    }
    c.push(e);
  }
};
g.a.sl = function(a, c) {
  for (var d = c || Math.random, e = a.length - 1;0 < e;e--) {
    var f = Math.floor(d() * (e + 1)), h = a[e];
    a[e] = a[f];
    a[f] = h;
  }
};
g.e = {};
g.e.Vh = function() {
};
g.m = {};
g.m.constant = function(a) {
  return function() {
    return a;
  };
};
g.m.ei = g.m.constant(!1);
g.m.Ui = g.m.constant(!0);
g.m.Ei = g.m.constant(null);
g.m.identity = function(a) {
  return a;
};
g.m.error = function(a) {
  return function() {
    throw Error(a);
  };
};
g.m.mb = function(a) {
  return function() {
    throw a;
  };
};
g.m.Tk = function(a, c) {
  c = c || 0;
  return function() {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, c));
  };
};
g.m.al = function(a) {
  return function() {
    return arguments[a];
  };
};
g.m.Ol = function(a, c) {
  return g.m.Nf(a, g.m.constant(c));
};
g.m.Nj = function(a, c) {
  var d = arguments, e = d.length;
  return function() {
    var a;
    e && (a = d[e - 1].apply(this, arguments));
    for (var c = e - 2;0 <= c;c--) {
      a = d[c].call(this, a);
    }
    return a;
  };
};
g.m.Nf = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a, f = 0;f < d;f++) {
      a = c[f].apply(this, arguments);
    }
    return a;
  };
};
g.m.gj = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a = 0;a < d;a++) {
      if (!c[a].apply(this, arguments)) {
        return!1;
      }
    }
    return!0;
  };
};
g.m.dl = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a = 0;a < d;a++) {
      if (c[a].apply(this, arguments)) {
        return!0;
      }
    }
    return!1;
  };
};
g.m.$k = function(a) {
  return function() {
    return!a.apply(this, arguments);
  };
};
g.m.create = function(a, c) {
  var d = function() {
  };
  d.prototype = a.prototype;
  d = new d;
  a.apply(d, Array.prototype.slice.call(arguments, 1));
  return d;
};
g.m.Lf = !0;
g.m.zj = function(a) {
  var c = !1, d;
  return function() {
    if (!g.m.Lf) {
      return a();
    }
    c || (d = a(), c = !0);
    return d;
  };
};
g.k = {};
g.k.il = function(a) {
  return Math.floor(Math.random() * a);
};
g.k.Jl = function(a, c) {
  return a + Math.random() * (c - a);
};
g.k.Hj = function(a, c, d) {
  return Math.min(Math.max(a, c), d);
};
g.k.Cf = function(a, c) {
  var d = a % c;
  return 0 > d * c ? d + c : d;
};
g.k.Sk = function(a, c, d) {
  return a + d * (c - a);
};
g.k.Xk = function(a, c, d) {
  return Math.abs(a - c) <= (d || 1E-6);
};
g.k.Jb = function(a) {
  return g.k.Cf(a, 360);
};
g.k.rd = function(a) {
  return a * Math.PI / 180;
};
g.k.zf = function(a) {
  return 180 * a / Math.PI;
};
g.k.jj = function(a, c) {
  return c * Math.cos(g.k.rd(a));
};
g.k.kj = function(a, c) {
  return c * Math.sin(g.k.rd(a));
};
g.k.hj = function(a, c, d, e) {
  return g.k.Jb(g.k.zf(Math.atan2(e - c, d - a)));
};
g.k.ij = function(a, c) {
  var d = g.k.Jb(c) - g.k.Jb(a);
  180 < d ? d -= 360 : -180 >= d && (d = 360 + d);
  return d;
};
g.k.tl = function(a) {
  return 0 == a ? 0 : 0 > a ? -1 : 1;
};
g.k.Uk = function(a, c, d, e) {
  d = d || function(a, c) {
    return a == c;
  };
  e = e || function(c) {
    return a[c];
  };
  for (var f = a.length, h = c.length, k = [], m = 0;m < f + 1;m++) {
    k[m] = [], k[m][0] = 0;
  }
  for (var n = 0;n < h + 1;n++) {
    k[0][n] = 0;
  }
  for (m = 1;m <= f;m++) {
    for (n = 1;n <= h;n++) {
      d(a[m - 1], c[n - 1]) ? k[m][n] = k[m - 1][n - 1] + 1 : k[m][n] = Math.max(k[m - 1][n], k[m][n - 1]);
    }
  }
  for (var q = [], m = f, n = h;0 < m && 0 < n;) {
    d(a[m - 1], c[n - 1]) ? (q.unshift(e(m - 1, n - 1)), m--, n--) : k[m - 1][n] > k[m][n - 1] ? m-- : n--;
  }
  return q;
};
g.k.ec = function(a) {
  return g.a.reduce(arguments, function(a, d) {
    return a + d;
  }, 0);
};
g.k.ke = function(a) {
  return g.k.ec.apply(null, arguments) / arguments.length;
};
g.k.Df = function(a) {
  var c = arguments.length;
  if (2 > c) {
    return 0;
  }
  var d = g.k.ke.apply(null, arguments);
  return g.k.ec.apply(null, g.a.map(arguments, function(a) {
    return Math.pow(a - d, 2);
  })) / (c - 1);
};
g.k.xl = function(a) {
  return Math.sqrt(g.k.Df.apply(null, arguments));
};
g.k.Kk = function(a) {
  return isFinite(a) && 0 == a % 1;
};
g.k.Ik = function(a) {
  return isFinite(a) && !isNaN(a);
};
g.k.ml = function(a, c) {
  return Math.floor(a + (c || 2E-15));
};
g.k.ll = function(a, c) {
  return Math.ceil(a - (c || 2E-15));
};
g.c = {};
g.c.w = "StopIteration" in g.global ? g.global.StopIteration : Error("StopIteration");
g.c.o = function() {
};
g.c.o.prototype.next = function() {
  throw g.c.w;
};
g.c.o.prototype.ra = function() {
  return this;
};
g.c.r = function(a) {
  if (a instanceof g.c.o) {
    return a;
  }
  if ("function" == typeof a.ra) {
    return a.ra(!1);
  }
  if (g.v(a)) {
    var c = 0, d = new g.c.o;
    d.next = function() {
      for (;;) {
        if (c >= a.length) {
          throw g.c.w;
        }
        if (c in a) {
          return a[c++];
        }
        c++;
      }
    };
    return d;
  }
  throw Error("Not implemented");
};
g.c.forEach = function(a, c, d) {
  if (g.v(a)) {
    try {
      g.a.forEach(a, c, d);
    } catch (e) {
      if (e !== g.c.w) {
        throw e;
      }
    }
  } else {
    a = g.c.r(a);
    try {
      for (;;) {
        c.call(d, a.next(), void 0, a);
      }
    } catch (f) {
      if (f !== g.c.w) {
        throw f;
      }
    }
  }
};
g.c.filter = function(a, c, d) {
  var e = g.c.r(a);
  a = new g.c.o;
  a.next = function() {
    for (;;) {
      var a = e.next();
      if (c.call(d, a, void 0, e)) {
        return a;
      }
    }
  };
  return a;
};
g.c.La = function(a, c, d) {
  var e = 0, f = a, h = d || 1;
  1 < arguments.length && (e = a, f = c);
  if (0 == h) {
    throw Error("Range step argument must not be zero");
  }
  var k = new g.c.o;
  k.next = function() {
    if (0 < h && e >= f || 0 > h && e <= f) {
      throw g.c.w;
    }
    var a = e;
    e += h;
    return a;
  };
  return k;
};
g.c.join = function(a, c) {
  return g.c.ba(a).join(c);
};
g.c.map = function(a, c, d) {
  var e = g.c.r(a);
  a = new g.c.o;
  a.next = function() {
    for (;;) {
      var a = e.next();
      return c.call(d, a, void 0, e);
    }
  };
  return a;
};
g.c.reduce = function(a, c, d, e) {
  var f = d;
  g.c.forEach(a, function(a) {
    f = c.call(e, f, a);
  });
  return f;
};
g.c.some = function(a, c, d) {
  a = g.c.r(a);
  try {
    for (;;) {
      if (c.call(d, a.next(), void 0, a)) {
        return!0;
      }
    }
  } catch (e) {
    if (e !== g.c.w) {
      throw e;
    }
  }
  return!1;
};
g.c.every = function(a, c, d) {
  a = g.c.r(a);
  try {
    for (;;) {
      if (!c.call(d, a.next(), void 0, a)) {
        return!1;
      }
    }
  } catch (e) {
    if (e !== g.c.w) {
      throw e;
    }
  }
  return!0;
};
g.c.Ne = function(a) {
  var c = g.c.r(arguments), d = new g.c.o, e = null;
  d.next = function() {
    for (;;) {
      if (null == e) {
        var a = c.next();
        e = g.c.r(a);
      }
      try {
        return e.next();
      } catch (d) {
        if (d !== g.c.w) {
          throw d;
        }
        e = null;
      }
    }
  };
  return d;
};
g.c.Fj = function(a) {
  return g.c.Ne.apply(void 0, a);
};
g.c.Xj = function(a, c, d) {
  var e = g.c.r(a);
  a = new g.c.o;
  var f = !0;
  a.next = function() {
    for (;;) {
      var a = e.next();
      if (!f || !c.call(d, a, void 0, e)) {
        return f = !1, a;
      }
    }
  };
  return a;
};
g.c.Al = function(a, c, d) {
  var e = g.c.r(a);
  a = new g.c.o;
  var f = !0;
  a.next = function() {
    for (;;) {
      if (f) {
        var a = e.next();
        if (c.call(d, a, void 0, e)) {
          return a;
        }
        f = !1;
      } else {
        throw g.c.w;
      }
    }
  };
  return a;
};
g.c.ba = function(a) {
  if (g.v(a)) {
    return g.a.ba(a);
  }
  a = g.c.r(a);
  var c = [];
  g.c.forEach(a, function(a) {
    c.push(a);
  });
  return c;
};
g.c.equals = function(a, c) {
  var d = g.c.Oe({}, a, c);
  return g.c.every(d, function(a) {
    return a[0] == a[1];
  });
};
g.c.Je = function(a, c) {
  try {
    return g.c.r(a).next();
  } catch (d) {
    if (d != g.c.w) {
      throw d;
    }
    return c;
  }
};
g.c.product = function(a) {
  if (g.a.some(arguments, function(a) {
    return!a.length;
  }) || !arguments.length) {
    return new g.c.o;
  }
  var c = new g.c.o, d = arguments, e = g.a.repeat(0, d.length);
  c.next = function() {
    if (e) {
      for (var a = g.a.map(e, function(a, c) {
        return d[c][a];
      }), c = e.length - 1;0 <= c;c--) {
        if (e[c] < d[c].length - 1) {
          e[c]++;
          break;
        }
        if (0 == c) {
          e = null;
          break;
        }
        e[c] = 0;
      }
      return a;
    }
    throw g.c.w;
  };
  return c;
};
g.c.Uj = function(a) {
  var c = g.c.r(a), d = [], e = 0;
  a = new g.c.o;
  var f = !1;
  a.next = function() {
    var a = null;
    if (!f) {
      try {
        return a = c.next(), d.push(a), a;
      } catch (k) {
        if (k != g.c.w || g.a.J(d)) {
          throw k;
        }
        f = !0;
      }
    }
    a = d[e];
    e = (e + 1) % d.length;
    return a;
  };
  return a;
};
g.c.count = function(a, c) {
  var d = a || 0, e = g.aa(c) ? c : 1, f = new g.c.o;
  f.next = function() {
    var a = d;
    d += e;
    return a;
  };
  return f;
};
g.c.repeat = function(a) {
  var c = new g.c.o;
  c.next = g.m.constant(a);
  return c;
};
g.c.dj = function(a) {
  var c = g.c.r(a), d = 0;
  a = new g.c.o;
  a.next = function() {
    return d += c.next();
  };
  return a;
};
g.c.Kc = function(a) {
  var c = arguments, d = new g.c.o;
  if (0 < c.length) {
    var e = g.a.map(c, g.c.r);
    d.next = function() {
      return g.a.map(e, function(a) {
        return a.next();
      });
    };
  }
  return d;
};
g.c.Oe = function(a, c) {
  var d = g.a.slice(arguments, 1), e = new g.c.o;
  if (0 < d.length) {
    var f = g.a.map(d, g.c.r);
    e.next = function() {
      var c = !1, d = g.a.map(f, function(d) {
        var e;
        try {
          e = d.next(), c = !0;
        } catch (f) {
          if (f !== g.c.w) {
            throw f;
          }
          e = a;
        }
        return e;
      });
      if (!c) {
        throw g.c.w;
      }
      return d;
    };
  }
  return e;
};
g.c.Oj = function(a, c) {
  var d = g.c.r(c);
  return g.c.filter(a, function() {
    return!!d.next();
  });
};
g.c.Ua = function(a, c) {
  this.cc = g.c.r(a);
  this.dc = c || g.m.identity;
};
g.Ka(g.c.Ua, g.c.o);
g.c.Ua.prototype.next = function() {
  for (;this.va == this.Cd;) {
    this.Pa = this.cc.next(), this.va = this.dc(this.Pa);
  }
  this.Cd = this.va;
  return[this.va, this.Rf(this.Cd)];
};
g.c.Ua.prototype.Rf = function(a) {
  for (var c = [];this.va == a;) {
    c.push(this.Pa);
    try {
      this.Pa = this.cc.next();
    } catch (d) {
      if (d !== g.c.w) {
        throw d;
      }
      break;
    }
    this.va = this.dc(this.Pa);
  }
  return c;
};
g.c.xk = function(a, c) {
  return new g.c.Ua(a, c);
};
g.c.Bl = function(a, c) {
  var d = g.c.r(a), e = g.isNumber(c) ? c : 2, f = g.a.map(g.a.La(e), function() {
    return[];
  }), h = function() {
    var a = d.next();
    g.a.forEach(f, function(c) {
      c.push(a);
    });
  };
  return g.a.map(f, function(a) {
    var c = new g.c.o;
    c.next = function() {
      g.a.J(a) && h();
      return a.shift();
    };
    return c;
  });
};
g.c.$j = function(a, c) {
  return g.c.Kc(g.c.count(c), a);
};
g.c.Me = function(a, c) {
  var d = g.c.r(a), e = new g.c.o, f = c;
  e.next = function() {
    if (0 < f--) {
      return d.next();
    }
    throw g.c.w;
  };
  return e;
};
g.c.Le = function(a, c) {
  for (var d = g.c.r(a);0 < c--;) {
    g.c.Je(d, null);
  }
  return d;
};
g.c.slice = function(a, c, d) {
  a = g.c.Le(a, c);
  g.isNumber(d) && (a = g.c.Me(a, d - c));
  return a;
};
g.c.ie = function(a) {
  var c = [];
  g.a.Ce(a, c);
  return a.length != c.length;
};
g.c.he = function(a, c) {
  var d = g.c.ba(a), e = g.isNumber(c) ? c : d.length, d = g.a.repeat(d, e), d = g.c.product.apply(void 0, d);
  return g.c.filter(d, function(a) {
    return!g.c.ie(a);
  });
};
g.c.Kj = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = g.c.ba(a), f = g.c.La(e.length), f = g.c.he(f, c), h = g.c.filter(f, function(a) {
    return g.a.bc(a);
  }), f = new g.c.o;
  f.next = function() {
    return g.a.map(h.next(), d);
  };
  return f;
};
g.c.Lj = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = g.c.ba(a), f = g.a.La(e.length), f = g.a.repeat(f, c), f = g.c.product.apply(void 0, f), h = g.c.filter(f, function(a) {
    return g.a.bc(a);
  }), f = new g.c.o;
  f.next = function() {
    return g.a.map(h.next(), d);
  };
  return f;
};
g.object = {};
g.object.forEach = function(a, c, d) {
  for (var e in a) {
    c.call(d, a[e], e, a);
  }
};
g.object.filter = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    c.call(d, a[f], f, a) && (e[f] = a[f]);
  }
  return e;
};
g.object.map = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    e[f] = c.call(d, a[f], f, a);
  }
  return e;
};
g.object.some = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return!0;
    }
  }
  return!1;
};
g.object.every = function(a, c, d) {
  for (var e in a) {
    if (!c.call(d, a[e], e, a)) {
      return!1;
    }
  }
  return!0;
};
g.object.O = function(a) {
  var c = 0, d;
  for (d in a) {
    c++;
  }
  return c;
};
g.object.fk = function(a) {
  for (var c in a) {
    return c;
  }
};
g.object.gk = function(a) {
  for (var c in a) {
    return a[c];
  }
};
g.object.contains = function(a, c) {
  return g.object.fa(a, c);
};
g.object.A = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = a[e];
  }
  return c;
};
g.object.M = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = e;
  }
  return c;
};
g.object.uk = function(a, c) {
  for (var d = g.v(c), e = d ? c : arguments, d = d ? 0 : 1;d < e.length && (a = a[e[d]], g.aa(a));d++) {
  }
  return a;
};
g.object.Pc = function(a, c) {
  return c in a;
};
g.object.fa = function(a, c) {
  for (var d in a) {
    if (a[d] == c) {
      return!0;
    }
  }
  return!1;
};
g.object.ph = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return e;
    }
  }
};
g.object.dk = function(a, c, d) {
  return(c = g.object.ph(a, c, d)) && a[c];
};
g.object.J = function(a) {
  for (var c in a) {
    return!1;
  }
  return!0;
};
g.object.clear = function(a) {
  for (var c in a) {
    delete a[c];
  }
};
g.object.remove = function(a, c) {
  var d;
  (d = c in a) && delete a[c];
  return d;
};
g.object.add = function(a, c, d) {
  if (c in a) {
    throw Error('The object already contains the key "' + c + '"');
  }
  g.object.set(a, c, d);
};
g.object.get = function(a, c, d) {
  return c in a ? a[c] : d;
};
g.object.set = function(a, c, d) {
  a[c] = d;
};
g.object.ql = function(a, c, d) {
  return c in a ? a[c] : a[c] = d;
};
g.object.clone = function(a) {
  var c = {}, d;
  for (d in a) {
    c[d] = a[d];
  }
  return c;
};
g.object.rg = function(a) {
  var c = g.P(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = g.object.rg(a[d]);
    }
    return c;
  }
  return a;
};
g.object.Eh = function(a) {
  var c = {}, d;
  for (d in a) {
    c[a[d]] = d;
  }
  return c;
};
g.object.ce = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
g.object.extend = function(a, c) {
  for (var d, e, f = 1;f < arguments.length;f++) {
    e = arguments[f];
    for (d in e) {
      a[d] = e[d];
    }
    for (var h = 0;h < g.object.ce.length;h++) {
      d = g.object.ce[h], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d]);
    }
  }
};
g.object.create = function(a) {
  var c = arguments.length;
  if (1 == c && g.isArray(arguments[0])) {
    return g.object.create.apply(null, arguments[0]);
  }
  if (c % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var d = {}, e = 0;e < c;e += 2) {
    d[arguments[e]] = arguments[e + 1];
  }
  return d;
};
g.object.kh = function(a) {
  var c = arguments.length;
  if (1 == c && g.isArray(arguments[0])) {
    return g.object.kh.apply(null, arguments[0]);
  }
  for (var d = {}, e = 0;e < c;e++) {
    d[arguments[e]] = !0;
  }
  return d;
};
g.object.Sj = function(a) {
  var c = a;
  Object.isFrozen && !Object.isFrozen(a) && (c = Object.create(a), Object.freeze(c));
  return c;
};
g.object.Jk = function(a) {
  return!!Object.isFrozen && Object.isFrozen(a);
};
g.e.C = function(a, c) {
  this.j = {};
  this.p = [];
  this.qa = this.V = 0;
  var d = arguments.length;
  if (1 < d) {
    if (d % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var e = 0;e < d;e += 2) {
      this.set(arguments[e], arguments[e + 1]);
    }
  } else {
    a && this.ub(a);
  }
};
b = g.e.C.prototype;
b.O = function() {
  return this.V;
};
b.A = function() {
  this.ea();
  for (var a = [], c = 0;c < this.p.length;c++) {
    a.push(this.j[this.p[c]]);
  }
  return a;
};
b.M = function() {
  this.ea();
  return this.p.concat();
};
b.Pc = function(a) {
  return g.e.C.da(this.j, a);
};
b.fa = function(a) {
  for (var c = 0;c < this.p.length;c++) {
    var d = this.p[c];
    if (g.e.C.da(this.j, d) && this.j[d] == a) {
      return!0;
    }
  }
  return!1;
};
b.equals = function(a, c) {
  if (this === a) {
    return!0;
  }
  if (this.V != a.O()) {
    return!1;
  }
  var d = c || g.e.C.Ke;
  this.ea();
  for (var e, f = 0;e = this.p[f];f++) {
    if (!d(this.get(e), a.get(e))) {
      return!1;
    }
  }
  return!0;
};
g.e.C.Ke = function(a, c) {
  return a === c;
};
b = g.e.C.prototype;
b.J = function() {
  return 0 == this.V;
};
b.clear = function() {
  this.j = {};
  this.qa = this.V = this.p.length = 0;
};
b.remove = function(a) {
  return g.e.C.da(this.j, a) ? (delete this.j[a], this.V--, this.qa++, this.p.length > 2 * this.V && this.ea(), !0) : !1;
};
b.ea = function() {
  if (this.V != this.p.length) {
    for (var a = 0, c = 0;a < this.p.length;) {
      var d = this.p[a];
      g.e.C.da(this.j, d) && (this.p[c++] = d);
      a++;
    }
    this.p.length = c;
  }
  if (this.V != this.p.length) {
    for (var e = {}, c = a = 0;a < this.p.length;) {
      d = this.p[a], g.e.C.da(e, d) || (this.p[c++] = d, e[d] = 1), a++;
    }
    this.p.length = c;
  }
};
b.get = function(a, c) {
  return g.e.C.da(this.j, a) ? this.j[a] : c;
};
b.set = function(a, c) {
  g.e.C.da(this.j, a) || (this.V++, this.p.push(a), this.qa++);
  this.j[a] = c;
};
b.ub = function(a) {
  var c;
  a instanceof g.e.C ? (c = a.M(), a = a.A()) : (c = g.object.M(a), a = g.object.A(a));
  for (var d = 0;d < c.length;d++) {
    this.set(c[d], a[d]);
  }
};
b.clone = function() {
  return new g.e.C(this);
};
b.Eh = function() {
  for (var a = new g.e.C, c = 0;c < this.p.length;c++) {
    var d = this.p[c];
    a.set(this.j[d], d);
  }
  return a;
};
b.Dh = function() {
  this.ea();
  for (var a = {}, c = 0;c < this.p.length;c++) {
    var d = this.p[c];
    a[d] = this.j[d];
  }
  return a;
};
b.ra = function(a) {
  this.ea();
  var c = 0, d = this.p, e = this.j, f = this.qa, h = this, k = new g.c.o;
  k.next = function() {
    for (;;) {
      if (f != h.qa) {
        throw Error("The map has changed since the iterator was created");
      }
      if (c >= d.length) {
        throw g.c.w;
      }
      var k = d[c++];
      return a ? k : e[k];
    }
  };
  return k;
};
g.e.C.da = function(a, c) {
  return Object.prototype.hasOwnProperty.call(a, c);
};
g.e.O = function(a) {
  return "function" == typeof a.O ? a.O() : g.v(a) || g.isString(a) ? a.length : g.object.O(a);
};
g.e.A = function(a) {
  if ("function" == typeof a.A) {
    return a.A();
  }
  if (g.isString(a)) {
    return a.split("");
  }
  if (g.v(a)) {
    for (var c = [], d = a.length, e = 0;e < d;e++) {
      c.push(a[e]);
    }
    return c;
  }
  return g.object.A(a);
};
g.e.M = function(a) {
  if ("function" == typeof a.M) {
    return a.M();
  }
  if ("function" != typeof a.A) {
    if (g.v(a) || g.isString(a)) {
      var c = [];
      a = a.length;
      for (var d = 0;d < a;d++) {
        c.push(d);
      }
      return c;
    }
    return g.object.M(a);
  }
};
g.e.contains = function(a, c) {
  return "function" == typeof a.contains ? a.contains(c) : "function" == typeof a.fa ? a.fa(c) : g.v(a) || g.isString(a) ? g.a.contains(a, c) : g.object.fa(a, c);
};
g.e.J = function(a) {
  return "function" == typeof a.J ? a.J() : g.v(a) || g.isString(a) ? g.a.J(a) : g.object.J(a);
};
g.e.clear = function(a) {
  "function" == typeof a.clear ? a.clear() : g.v(a) ? g.a.clear(a) : g.object.clear(a);
};
g.e.forEach = function(a, c, d) {
  if ("function" == typeof a.forEach) {
    a.forEach(c, d);
  } else {
    if (g.v(a) || g.isString(a)) {
      g.a.forEach(a, c, d);
    } else {
      for (var e = g.e.M(a), f = g.e.A(a), h = f.length, k = 0;k < h;k++) {
        c.call(d, f[k], e && e[k], a);
      }
    }
  }
};
g.e.filter = function(a, c, d) {
  if ("function" == typeof a.filter) {
    return a.filter(c, d);
  }
  if (g.v(a) || g.isString(a)) {
    return g.a.filter(a, c, d);
  }
  var e, f = g.e.M(a), h = g.e.A(a), k = h.length;
  if (f) {
    e = {};
    for (var m = 0;m < k;m++) {
      c.call(d, h[m], f[m], a) && (e[f[m]] = h[m]);
    }
  } else {
    for (e = [], m = 0;m < k;m++) {
      c.call(d, h[m], void 0, a) && e.push(h[m]);
    }
  }
  return e;
};
g.e.map = function(a, c, d) {
  if ("function" == typeof a.map) {
    return a.map(c, d);
  }
  if (g.v(a) || g.isString(a)) {
    return g.a.map(a, c, d);
  }
  var e, f = g.e.M(a), h = g.e.A(a), k = h.length;
  if (f) {
    e = {};
    for (var m = 0;m < k;m++) {
      e[f[m]] = c.call(d, h[m], f[m], a);
    }
  } else {
    for (e = [], m = 0;m < k;m++) {
      e[m] = c.call(d, h[m], void 0, a);
    }
  }
  return e;
};
g.e.some = function(a, c, d) {
  if ("function" == typeof a.some) {
    return a.some(c, d);
  }
  if (g.v(a) || g.isString(a)) {
    return g.a.some(a, c, d);
  }
  for (var e = g.e.M(a), f = g.e.A(a), h = f.length, k = 0;k < h;k++) {
    if (c.call(d, f[k], e && e[k], a)) {
      return!0;
    }
  }
  return!1;
};
g.e.every = function(a, c, d) {
  if ("function" == typeof a.every) {
    return a.every(c, d);
  }
  if (g.v(a) || g.isString(a)) {
    return g.a.every(a, c, d);
  }
  for (var e = g.e.M(a), f = g.e.A(a), h = f.length, k = 0;k < h;k++) {
    if (!c.call(d, f[k], e && e[k], a)) {
      return!1;
    }
  }
  return!0;
};
g.e.W = function(a) {
  this.j = new g.e.C;
  a && this.ub(a);
};
g.e.W.Ab = function(a) {
  var c = typeof a;
  return "object" == c && a || "function" == c ? "o" + g.Yb(a) : c.substr(0, 1) + a;
};
b = g.e.W.prototype;
b.O = function() {
  return this.j.O();
};
b.add = function(a) {
  this.j.set(g.e.W.Ab(a), a);
};
b.ub = function(a) {
  a = g.e.A(a);
  for (var c = a.length, d = 0;d < c;d++) {
    this.add(a[d]);
  }
};
b.removeAll = function(a) {
  a = g.e.A(a);
  for (var c = a.length, d = 0;d < c;d++) {
    this.remove(a[d]);
  }
};
b.remove = function(a) {
  return this.j.remove(g.e.W.Ab(a));
};
b.clear = function() {
  this.j.clear();
};
b.J = function() {
  return this.j.J();
};
b.contains = function(a) {
  return this.j.Pc(g.e.W.Ab(a));
};
b.A = function() {
  return this.j.A();
};
b.clone = function() {
  return new g.e.W(this);
};
b.equals = function(a) {
  return this.O() == g.e.O(a) && this.bf(a);
};
b.bf = function(a) {
  var c = g.e.O(a);
  if (this.O() > c) {
    return!1;
  }
  !(a instanceof g.e.W) && 5 < c && (a = new g.e.W(a));
  return g.e.every(this, function(c) {
    return g.e.contains(a, c);
  });
};
b.ra = function() {
  return this.j.ra(!1);
};
g.userAgent = {};
g.userAgent.Td = !1;
g.userAgent.Sd = !1;
g.userAgent.Zd = !1;
g.userAgent.Sb = !1;
g.userAgent.Yd = !1;
g.userAgent.De = !1;
g.userAgent.ha = g.userAgent.Td || g.userAgent.Sd || g.userAgent.Sb || g.userAgent.Zd || g.userAgent.Yd;
g.userAgent.jb = function() {
  return g.global.navigator ? g.global.navigator.userAgent : null;
};
g.userAgent.Ma = function() {
  return g.global.navigator;
};
g.userAgent.sh = function() {
  g.userAgent.ua = !1;
  g.userAgent.ob = !1;
  g.userAgent.Oa = !1;
  g.userAgent.ic = !1;
  g.userAgent.hc = !1;
  var a;
  if (!g.userAgent.ha && (a = g.userAgent.jb())) {
    var c = g.userAgent.Ma();
    g.userAgent.ua = g.b.ac(a, "Opera");
    g.userAgent.ob = !g.userAgent.ua && (g.b.contains(a, "MSIE") || g.b.contains(a, "Trident"));
    g.userAgent.Oa = !g.userAgent.ua && g.b.contains(a, "WebKit");
    g.userAgent.ic = g.userAgent.Oa && g.b.contains(a, "Mobile");
    g.userAgent.hc = !g.userAgent.ua && !g.userAgent.Oa && !g.userAgent.ob && "Gecko" == c.product;
  }
};
g.userAgent.ha || g.userAgent.sh();
g.userAgent.$f = g.userAgent.ha ? g.userAgent.Yd : g.userAgent.ua;
g.userAgent.fb = g.userAgent.ha ? g.userAgent.Td : g.userAgent.ob;
g.userAgent.Zf = g.userAgent.ha ? g.userAgent.Sd : g.userAgent.hc;
g.userAgent.Lb = g.userAgent.ha ? g.userAgent.Zd || g.userAgent.Sb : g.userAgent.Oa;
g.userAgent.xi = g.userAgent.Sb || g.userAgent.ic;
g.userAgent.Pi = g.userAgent.Lb;
g.userAgent.lh = function() {
  var a = g.userAgent.Ma();
  return a && a.platform || "";
};
g.userAgent.qb = g.userAgent.lh();
g.userAgent.Xd = !1;
g.userAgent.$d = !1;
g.userAgent.Wd = !1;
g.userAgent.ae = !1;
g.userAgent.Rd = !1;
g.userAgent.Vd = !1;
g.userAgent.Ud = !1;
g.userAgent.$ = g.userAgent.Xd || g.userAgent.$d || g.userAgent.Wd || g.userAgent.ae || g.userAgent.Rd || g.userAgent.Vd || g.userAgent.Ud;
g.userAgent.rh = function() {
  g.userAgent.pe = g.b.contains(g.userAgent.qb, "Mac");
  g.userAgent.qe = g.b.contains(g.userAgent.qb, "Win");
  g.userAgent.oe = g.b.contains(g.userAgent.qb, "Linux");
  g.userAgent.re = !!g.userAgent.Ma() && g.b.contains(g.userAgent.Ma().appVersion || "", "X11");
  var a = g.userAgent.jb();
  g.userAgent.le = !!a && g.b.contains(a, "Android");
  g.userAgent.ne = !!a && g.b.contains(a, "iPhone");
  g.userAgent.me = !!a && g.b.contains(a, "iPad");
};
g.userAgent.$ || g.userAgent.rh();
g.userAgent.ui = g.userAgent.$ ? g.userAgent.Xd : g.userAgent.pe;
g.userAgent.aj = g.userAgent.$ ? g.userAgent.$d : g.userAgent.qe;
g.userAgent.pi = g.userAgent.$ ? g.userAgent.Wd : g.userAgent.oe;
g.userAgent.bj = g.userAgent.$ ? g.userAgent.ae : g.userAgent.re;
g.userAgent.ANDROID = g.userAgent.$ ? g.userAgent.Rd : g.userAgent.le;
g.userAgent.ji = g.userAgent.$ ? g.userAgent.Vd : g.userAgent.ne;
g.userAgent.ii = g.userAgent.$ ? g.userAgent.Ud : g.userAgent.me;
g.userAgent.mh = function() {
  var a = "", c;
  g.userAgent.$f && g.global.opera ? (a = g.global.opera.version, a = "function" == typeof a ? a() : a) : (g.userAgent.Zf ? c = /rv\:([^\);]+)(\)|;)/ : g.userAgent.fb ? c = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : g.userAgent.Lb && (c = /WebKit\/(\S+)/), c && (a = (a = c.exec(g.userAgent.jb())) ? a[1] : ""));
  return g.userAgent.fb && (c = g.userAgent.Gd(), c > parseFloat(a)) ? String(c) : a;
};
g.userAgent.Gd = function() {
  var a = g.global.document;
  return a ? a.documentMode : void 0;
};
g.userAgent.VERSION = g.userAgent.mh();
g.userAgent.compare = function(a, c) {
  return g.b.Ac(a, c);
};
g.userAgent.Bc = {};
g.userAgent.Kd = function(a) {
  return g.userAgent.De || g.userAgent.Bc[a] || (g.userAgent.Bc[a] = 0 <= g.b.Ac(g.userAgent.VERSION, a));
};
g.userAgent.Rk = g.userAgent.Kd;
g.userAgent.uh = function(a) {
  return g.userAgent.fb && g.userAgent.Bg >= a;
};
g.userAgent.Gk = g.userAgent.uh;
var p = g.global.document;
g.userAgent.Bg = p && g.userAgent.fb ? g.userAgent.Gd() || ("CSS1Compat" == p.compatMode ? parseInt(g.userAgent.VERSION, 10) : 5) : void 0;
g.debug.sa = g.Ha;
g.debug.Ej = function(a, c, d) {
  d = d || g.global;
  var e = d.onerror, f = !!c;
  g.userAgent.Lb && !g.userAgent.Kd("535.3") && (f = !f);
  d.onerror = function(c, d, m, n, q) {
    e && e(c, d, m, n, q);
    a({message:c, fileName:d, qg:m, Ih:n, error:q});
    return f;
  };
};
g.debug.bk = function(a, c) {
  if ("undefined" == typeof a) {
    return "undefined";
  }
  if (null == a) {
    return "NULL";
  }
  var d = [], e;
  for (e in a) {
    if (c || !g.isFunction(a[e])) {
      var f = e + " = ";
      try {
        f += a[e];
      } catch (h) {
        f += "*** " + h + " ***";
      }
      d.push(f);
    }
  }
  return d.join("\n");
};
g.debug.Vj = function(a, c) {
  var d = new g.e.W, e = [], f = function(a, k) {
    var m = k + "  ";
    try {
      if (g.aa(a)) {
        if (g.Ze(a)) {
          e.push("NULL");
        } else {
          if (g.isString(a)) {
            e.push('"' + a.replace(/\n/g, "\n" + k) + '"');
          } else {
            if (g.isFunction(a)) {
              e.push(String(a).replace(/\n/g, "\n" + k));
            } else {
              if (g.isObject(a)) {
                if (d.contains(a)) {
                  e.push("*** reference loop detected ***");
                } else {
                  d.add(a);
                  e.push("{");
                  for (var n in a) {
                    if (c || !g.isFunction(a[n])) {
                      e.push("\n"), e.push(m), e.push(n + " = "), f(a[n], m);
                    }
                  }
                  e.push("\n" + k + "}");
                }
              } else {
                e.push(a);
              }
            }
          }
        }
      } else {
        e.push("undefined");
      }
    } catch (q) {
      e.push("*** " + q + " ***");
    }
  };
  f(a, "");
  return e.join("");
};
g.debug.nh = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    g.isArray(a[d]) ? c.push(g.debug.nh(a[d])) : c.push(a[d]);
  }
  return "[ " + c.join(", ") + " ]";
};
g.debug.sf = function(a, c) {
  try {
    var d = g.debug.ye(a);
    return "Message: " + g.b.ia(d.message) + '\nUrl: <a href="view-source:' + d.fileName + '" target="_new">' + d.fileName + "</a>\nLine: " + d.lineNumber + "\n\nBrowser stack:\n" + g.b.ia(d.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + g.b.ia(g.debug.yc(c) + "-> ");
  } catch (e) {
    return "Exception trying to expose exception! You win, we lose. " + e;
  }
};
g.debug.ye = function(a) {
  var c = g.Gg("window.location.href");
  if (g.isString(a)) {
    return{message:a, name:"Unknown error", lineNumber:"Not available", fileName:c, stack:"Not available"};
  }
  var d, e, f = !1;
  try {
    d = a.lineNumber || a.qg || "Not available";
  } catch (h) {
    d = "Not available", f = !0;
  }
  try {
    e = a.fileName || a.filename || a.sourceURL || g.global.$googDebugFname || c;
  } catch (k) {
    e = "Not available", f = !0;
  }
  return!f && a.lineNumber && a.fileName && a.stack && a.message && a.name ? a : {message:a.message || "Not available", name:a.name || "UnknownError", lineNumber:d, fileName:e, stack:a.stack || "Not available"};
};
g.debug.Zj = function(a, c) {
  var d = "string" == typeof a ? Error(a) : a;
  d.stack || (d.stack = g.debug.yc(arguments.callee.caller));
  if (c) {
    for (var e = 0;d["message" + e];) {
      ++e;
    }
    d["message" + e] = String(c);
  }
  return d;
};
g.debug.tk = function(a) {
  for (var c = [], d = arguments.callee.caller, e = 0;d && (!a || e < a);) {
    c.push(g.debug.getFunctionName(d));
    c.push("()\n");
    try {
      d = d.caller;
    } catch (f) {
      c.push("[exception trying to get caller]\n");
      break;
    }
    e++;
    if (e >= g.debug.wc) {
      c.push("[...long stack...]");
      break;
    }
  }
  a && e >= a ? c.push("[...reached max depth limit...]") : c.push("[end]");
  return c.join("");
};
g.debug.wc = 50;
g.debug.yc = function(a) {
  return g.debug.xc(a || arguments.callee.caller, []);
};
g.debug.xc = function(a, c) {
  var d = [];
  if (g.a.contains(c, a)) {
    d.push("[...circular reference...]");
  } else {
    if (a && c.length < g.debug.wc) {
      d.push(g.debug.getFunctionName(a) + "(");
      for (var e = a.arguments, f = 0;f < e.length;f++) {
        0 < f && d.push(", ");
        var h;
        h = e[f];
        switch(typeof h) {
          case "object":
            h = h ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            h = String(h);
            break;
          case "boolean":
            h = h ? "true" : "false";
            break;
          case "function":
            h = (h = g.debug.getFunctionName(h)) ? h : "[fn]";
            break;
          default:
            h = typeof h;
        }
        40 < h.length && (h = h.substr(0, 40) + "...");
        d.push(h);
      }
      c.push(a);
      d.push(")\n");
      try {
        d.push(g.debug.xc(a.caller, c));
      } catch (k) {
        d.push("[exception trying to get caller]\n");
      }
    } else {
      a ? d.push("[...long stack...]") : d.push("[end]");
    }
  }
  return d.join("");
};
g.debug.pl = function(a) {
  g.debug.Md = a;
};
g.debug.getFunctionName = function(a) {
  if (g.debug.oa[a]) {
    return g.debug.oa[a];
  }
  if (g.debug.Md) {
    var c = g.debug.Md(a);
    if (c) {
      return g.debug.oa[a] = c;
    }
  }
  a = String(a);
  g.debug.oa[a] || (c = /function ([^\(]+)/.exec(a), g.debug.oa[a] = c ? c[1] : "[Anonymous]");
  return g.debug.oa[a];
};
g.debug.Vk = function(a) {
  return a.replace(/ /g, "[_]").replace(/\f/g, "[f]").replace(/\n/g, "[n]\n").replace(/\r/g, "[r]").replace(/\t/g, "[t]");
};
g.debug.oa = {};
g.debug.Q = function(a, c, d, e, f) {
  this.reset(a, c, d, e, f);
};
g.debug.Q.prototype.xd = null;
g.debug.Q.prototype.wd = null;
g.debug.Q.Hf = !0;
g.debug.Q.Jf = 0;
g.debug.Q.prototype.reset = function(a, c, d, e, f) {
  g.debug.Q.Hf && ("number" == typeof f || g.debug.Q.Jf++);
  e || g.now();
  this.kb = a;
  this.If = c;
  delete this.xd;
  delete this.wd;
};
g.debug.Q.prototype.uf = function(a) {
  this.xd = a;
};
g.debug.Q.prototype.vf = function(a) {
  this.wd = a;
};
g.debug.Q.prototype.getMessage = function() {
  return this.If;
};
g.debug.I = function() {
  this.clear();
};
g.debug.I.Zc = function() {
  g.debug.I.Ga || (g.debug.I.Ga = new g.debug.I);
  return g.debug.I.Ga;
};
g.debug.I.ab = 0;
g.debug.I.prototype.rf = function(a, c, d) {
  var e = (this.ld + 1) % g.debug.I.ab;
  this.ld = e;
  if (this.md) {
    return e = this.kd[e], e.reset(a, c, d), e;
  }
  this.md = e == g.debug.I.ab - 1;
  return this.kd[e] = new g.debug.Q(a, c, d);
};
g.debug.I.tf = function() {
  return 0 < g.debug.I.ab;
};
g.debug.I.prototype.clear = function() {
  this.kd = Array(g.debug.I.ab);
  this.ld = -1;
  this.md = !1;
};
g.debug.d = function(a) {
  this.Hb = a;
};
g.debug.d.prototype.nb = null;
g.debug.d.prototype.kb = null;
g.debug.d.prototype.Wb = null;
g.debug.d.prototype.fe = null;
g.debug.d.lb = !0;
g.debug.d.lb || (g.debug.d.Ye = []);
g.debug.d.f = function(a, c) {
  this.name = a;
  this.value = c;
};
g.debug.d.f.prototype.toString = function() {
  return this.name;
};
g.debug.d.f.gc = new g.debug.d.f("OFF", Infinity);
g.debug.d.f.bh = new g.debug.d.f("SHOUT", 1200);
g.debug.d.f.ah = new g.debug.d.f("SEVERE", 1E3);
g.debug.d.f.ee = new g.debug.d.f("WARNING", 900);
g.debug.d.f.Jc = new g.debug.d.f("INFO", 800);
g.debug.d.f.Ic = new g.debug.d.f("CONFIG", 700);
g.debug.d.f.Kg = new g.debug.d.f("FINE", 500);
g.debug.d.f.Lg = new g.debug.d.f("FINER", 400);
g.debug.d.f.Mg = new g.debug.d.f("FINEST", 300);
g.debug.d.f.Hg = new g.debug.d.f("ALL", 0);
g.debug.d.f.yb = [g.debug.d.f.gc, g.debug.d.f.bh, g.debug.d.f.ah, g.debug.d.f.ee, g.debug.d.f.Jc, g.debug.d.f.Ic, g.debug.d.f.Kg, g.debug.d.f.Lg, g.debug.d.f.Mg, g.debug.d.f.Hg];
g.debug.d.f.Z = null;
g.debug.d.f.Hc = function() {
  g.debug.d.f.Z = {};
  for (var a = 0, c;c = g.debug.d.f.yb[a];a++) {
    g.debug.d.f.Z[c.value] = c, g.debug.d.f.Z[c.name] = c;
  }
};
g.debug.d.f.ok = function(a) {
  g.debug.d.f.Z || g.debug.d.f.Hc();
  return g.debug.d.f.Z[a] || null;
};
g.debug.d.f.pk = function(a) {
  g.debug.d.f.Z || g.debug.d.f.Hc();
  if (a in g.debug.d.f.Z) {
    return g.debug.d.f.Z[a];
  }
  for (var c = 0;c < g.debug.d.f.yb.length;++c) {
    var d = g.debug.d.f.yb[c];
    if (d.value <= a) {
      return d;
    }
  }
  return null;
};
g.debug.d.Xe = function(a) {
  g.global.console && (g.global.console.timeStamp ? g.global.console.timeStamp(a) : g.global.console.markTimeline && g.global.console.markTimeline(a));
  g.global.msWriteProfilerMark && g.global.msWriteProfilerMark(a);
};
b = g.debug.d.prototype;
b.getName = function() {
  return this.Hb;
};
b.getParent = function() {
  return this.nb;
};
b.getChildren = function() {
  this.Wb || (this.Wb = {});
  return this.Wb;
};
b.fc = function() {
  if (!g.debug.sa) {
    return g.debug.d.f.gc;
  }
  if (!g.debug.d.lb) {
    return g.debug.d.Fh;
  }
  if (this.kb) {
    return this.kb;
  }
  if (this.nb) {
    return this.nb.fc();
  }
  g.g.mb("Root logger has no level set.");
  return null;
};
b.ug = function(a) {
  return g.debug.sa && a.value >= this.fc().value;
};
b.log = function(a, c, d) {
  g.debug.sa && this.ug(a) && (g.isFunction(c) && (c = c()), this.sg(this.tg(a, c, d)));
};
b.tg = function(a, c, d) {
  var e = g.debug.I.tf() ? g.debug.I.Zc().rf(a, c, this.Hb) : new g.debug.Q(a, String(c), this.Hb);
  d && (e.uf(d), e.vf(g.debug.sf(d, arguments.callee.caller)));
  return e;
};
b.info = function(a, c) {
  g.debug.sa && this.log(g.debug.d.f.Jc, a, c);
};
b.config = function(a, c) {
  g.debug.sa && this.log(g.debug.d.f.Ic, a, c);
};
b.sg = function(a) {
  g.debug.d.Xe("log:" + a.getMessage());
  if (g.debug.d.lb) {
    for (var c = this;c;) {
      c.We(a), c = c.getParent();
    }
  } else {
    for (var c = 0, d;d = g.debug.d.Ye[c++];) {
      d(a);
    }
  }
};
b.We = function(a) {
  if (this.fe) {
    for (var c = 0, d;d = this.fe[c];c++) {
      d(a);
    }
  }
};
g.debug.S = {};
g.debug.S.Jd = {};
g.debug.S.Ea = function() {
  g.debug.S.Bd || (g.debug.S.Jd[""] = g.debug.S.Bd);
};
g.debug.S.kk = function() {
  return g.debug.S.Jd;
};
g.debug.S.rk = function() {
  g.debug.S.Ea();
  return g.debug.S.Bd;
};
g.debug.S.Rj = function() {
  return function() {
  };
};
l.Kb = {};
l.Kb.nl = function(a, c) {
  if (!a) {
    return a;
  }
  c && (a = g.b.truncate(a, c));
  return g.b.ia(a);
};
l.Kb.Bf = function(a) {
  return g.b.tb(a);
};
var t = {s:{}};
t.s.Xc = {Yc:"tab", Wh:"desktop"};
t.s.D = function(a, c, d, e, f, h, k, m) {
  this.id = a;
  this.name = c;
  this.videoWidth = d;
  this.videoHeight = e;
  this.videoResolution = d + "x" + e;
  this.minVideoBitrate = f;
  this.maxVideoBitrate = h;
  this.videoQuality = k;
  this.audioBitrate = m;
};
t.s.D.be = new t.s.D("high", "High (720p)", 1280, 720, 2E3, 2500, 56, 128);
t.s.D.Rg = new t.s.D("low", "Standard (480p)", 854, 480, 750, 1500, 56, 128);
t.s.D.Og = new t.s.D("highest", "Extreme (720p high bitrate)", 1280, 720, 4E3, 5E3, 56, 128);
t.s.D.Db = t.s.D.be;
t.s.D.je = [t.s.D.Og, t.s.D.be, t.s.D.Rg];
t.s.D.Uh = "custom";
t.s.D.jk = function(a) {
  return g.a.find(t.s.D.je, function(c) {
    return c.id == a;
  });
};
l.F = {};
l.F.fg = {eg:"fatal", ee:"warning"};
l.F.Oi = {Jh:"act_on_issue", Si:"stop_activity", Hi:"play_media", Fi:"pause_media", Qi:"set_mute", CAST_THIS_TAB:"cast_this_tab", CREATE_SESSION:"create_session", ni:"launch_desktop_mirror", INIT:"init", Vi:"update_settings"};
l.F.di = {yi:"model_update"};
l.F.Oh = {Xi:"v1_app", Yi:"v2_app", wi:"mirror_tab", vi:"mirror_screen"};
l.F.Message = function(a, c) {
  this.type = a;
  this.message = c;
};
l.F.Nh = function(a, c, d, e, f, h, k, m, n) {
  this.id = a;
  this.receiver = new l.F.L(c.id, c.uniqueId, l.Kb.Bf(c.name));
  this.activityType = d;
  this.iconUrl = e || null;
  this.title = f || "";
  this.isInLaunch = h;
  this.mediaPlayerStatus = k || null;
  this.tabId = m || null;
  this.isLocal = n;
};
l.F.L = function(a, c, d) {
  this.id = a;
  this.uniqueId = c;
  this.name = d;
};
l.F.mi = function(a, c, d, e, f, h, k) {
  this.id = a;
  this.title = c;
  this.message = d;
  this.defaultActionText = e;
  this.optActionText = f || "";
  this.severity = h || l.F.fg.eg;
  this.activityId = k || null;
};
l.F.Ki = function(a, c) {
  this.receiver = a;
  this.activity = c;
};
l.F.Mh = function(a, c) {
  this.id = a;
  this.isDefaultAction = c;
};
l.F.wf = function(a, c, d, e) {
  this.captureSurface = a || t.s.Xc.Yc;
  this.lowFpsMode = c || !1;
  this.castAppNotificationDismissed = d || !1;
  this.mirrorQualityId = e || t.s.D.Db.id;
};
l.F.Bi = function(a, c, d, e, f, h) {
  this.receiverActs = a || [];
  this.issue = c;
  this.isV1AppInTab = f || !1;
  this.isV2AppInTab = !!h;
  this.v2AppDomain = h || null;
  this.castOfCurrentTab = d;
  this.settings = e || new l.F.wf(t.s.Xc.Yc);
};
l.F.zi = function() {
  this.timeProgress = !1;
  this.muted = null;
  this.hasPause = !0;
};
l.L = function(a, c, d, e, f) {
  this.pb = c;
  this.lc = d;
  this.mc = e;
  this.jc = this.kc = !1;
  this.ue = f || "receiver.v2." + g.b.te(d);
};
l.L.Qj = function(a) {
  var c = g.a.find(a.serviceData, function(a) {
    return g.b.ac(a, "id=");
  }), d = a.serviceName.indexOf("._googlecast.");
  if (!c || -1 == d) {
    return null;
  }
  var e = a.serviceHostPort.substring(a.serviceHostPort.indexOf(":") + 1), d = a.serviceName.substring(0, d), c = c.substring(3).toLowerCase();
  return new l.L(a.ipAddress, d, c, "casts://" + a.ipAddress + ":" + e);
};
l.L.prototype.isLocal = function() {
  return!0;
};
l.L.prototype.mg = function() {
  return this.ue;
};
l.L.prototype.lg = function() {
  return this.pb;
};
l.L.prototype.equals = function(a) {
  return a instanceof l.L ? this.lc == a.lc && this.pb == a.pb && this.kc == a.kc && this.mc == a.mc && this.jc == a.jc : !1;
};
l.Config = {};
l.ma = {};
l.ma.sk = function(a, c) {
  if (!c.applications || 1 != c.applications.length) {
    return null;
  }
  var d = l.ma.xg(a, c.applications[0]);
  d.receiver.volume = c.volume;
  return d;
};
l.ma.xg = function(a, c) {
  var d = new chrome.cast.i(c.sessionId, c.appId, c.displayName, c.appImages, l.ma.xf(a));
  d.senderApps = c.senderApps;
  d.namespaces = c.namespaces || [];
  d.transportId = c.transportId;
  return d;
};
l.ma.xf = function(a) {
  return new chrome.cast.L(a.mg(), a.lg());
};
l.ma.Nk = function(a, c) {
  if (a.statusText != c.statusText) {
    return!0;
  }
  for (var d = a.namespaces || [], e = c.namespaces || [], f = 0;f < d.length;f++) {
    if (!e.some(function(a) {
      return a.name == d[f].name;
    })) {
      return!0;
    }
  }
  return a.receiver.volume.level != c.receiver.volume.level || a.receiver.volume.muted != c.receiver.volume.muted || JSON.stringify(a.customData) != JSON.stringify(c.customData) ? !0 : !1;
};
l.pd = function(a, c) {
  this.type = l.t.Ed;
  this.requestId = null;
  this.volume = a;
  this.expectedVolume = c || null;
};
l.H = {};
l.H.Gj = function(a) {
  return!a || !g.isString(a.sessionId) || !g.R(a.media) || g.R(a.autoplay) && !g.Bb(a.autoplay) || g.R(a.currentTime) && !g.isNumber(a.currentTime) ? !1 : l.H.Ff(a.media);
};
l.H.Ff = function(a) {
  return!a || !g.isString(a.contentId) || 1E3 < a.contentId.length || !g.object.fa(chrome.cast.media.Pb, a.streamType) || !g.isString(a.contentType) || g.R(a.duration) && !g.isNumber(a.duration) ? !1 : !0;
};
l.H.Re = function(a) {
  return!!a && g.R(a.sessionId) && g.R(a.namespaceName) && !l.na.gg(a.namespaceName);
};
l.H.Se = function(a) {
  return a && g.isFunction(a.sessionListener) && g.isFunction(a.receiverListener) ? l.H.Nc(a.sessionRequest) : !1;
};
l.H.Nc = function(a) {
  if (!a) {
    return!1;
  }
  var c = g.R;
  return c(a.appId) ? !0 : !1;
};
l.H.Qe = function(a) {
  return a && g.R(a.volume) && l.H.zd(a.volume) ? g.R(a.expectedVolume) ? l.H.zd(a.expectedVolume) : !0 : !1;
};
l.H.zd = function(a) {
  return a ? g.R(a.level) ? g.isNumber(a.level) && 0 <= a.level && 1 >= a.level : g.Bb(a.muted) : !1;
};
l.Wc = {Qg:1E4, bb:864E5, hd:5E3, Db:3E3};
l.K = function(a, c, d) {
  this.dd = a;
  this.Cb = c;
  this.mf = d || l.Wc.Db;
  this.Ya = !1;
  this.Aa = null;
};
l.K.prototype.cg = function() {
  return this.Ya;
};
l.K.prototype.Eb = function() {
  this.Ya = !0;
  this.Cb = this.dd = null;
  this.Aa && (clearTimeout(this.Aa), this.Aa = null);
};
l.K.yd = function() {
};
l.K.prototype.ad = function() {
  var a = this.dd;
  this.Eb();
  return a || l.K.yd;
};
l.K.prototype.$c = function() {
  var a = this.Cb;
  this.Eb();
  return a || l.K.yd;
};
l.K.prototype.Lc = function(a, c) {
  if (!this.Ya && !this.Aa) {
    var d = function() {
      if (!this.Ya) {
        a && a();
        var d = this.Cb;
        this.Eb();
        var f = new chrome.cast.G(chrome.cast.U.TIMEOUT);
        c && (f.description = c);
        d(f);
      }
    }.bind(this);
    this.Aa = setTimeout(d, this.mf);
  }
};
l.wa = function(a, c, d, e) {
  this.type = a;
  this.message = c;
  this.seqNum = d || null;
  this.clientId = e || null;
  this.appOrigin = null;
};
l.B = {Uc:"iframe_init_result", ci:"extension_version", Na:"v2_message", Ec:"app_message", qf:"client_init", ti:"log_message", Pe:"request_session", Rh:"client_disconnect", $e:"receiver_availability", Qc:"new_session", Rc:"update_session", af:"remove_session", Kh:"app_message_success", Ri:"set_receiver_volume_success", Ef:"error"};
l.Xa = function() {
  this.j = {};
};
b = l.Xa.prototype;
b.add = function(a, c) {
  var d = this.j[a];
  if (d) {
    return-1 == d.indexOf(c) && d.push(c), !1;
  }
  this.j[a] = [c];
  return!0;
};
b.remove = function(a, c) {
  var d = this.j[a];
  if (!d) {
    return!1;
  }
  var e = d.indexOf(c);
  if (-1 == e) {
    return!1;
  }
  if (1 == d.length) {
    return delete this.j[a], !0;
  }
  d.splice(e, 1);
  return!1;
};
b.Ad = function(a) {
  if (!(a in this.j)) {
    return!1;
  }
  delete this.j[a];
  return!0;
};
b.Kf = function(a) {
  var c = !1;
  Object.keys(this.j).forEach(function(d) {
    0 == d.indexOf(a) && (delete this.j[d], c = !0);
  }, this);
  return c;
};
b.get = function(a) {
  return this.j[a] || [];
};
b.contains = function(a, c) {
  return-1 != this.get(a).indexOf(c);
};
l.Ai = function() {
  this.type = l.t.Fb;
  this.requestId = null;
  this.status = [];
  this.customData = null;
  this.sessionId = "";
};
chrome.cast.Fa = function(a, c) {
  this.vg = a;
  this.sd = c;
  this.vd = null;
};
chrome.cast.Fa.prototype.Ib = function() {
  window.addEventListener("message", this.wh.bind(this), !1);
};
chrome.cast.Fa.prototype.zg = function(a) {
  this.vd = a;
};
chrome.cast.Fa.prototype.wh = function(a) {
  a.source != window && a.origin == this.sd && (a = a.data, a.type == l.B.Uc && (this.Gf = !a.message), this.vd(a));
};
chrome.cast.Fa.prototype.dg = function(a) {
  this.Gf && this.vg.contentWindow.postMessage(a, this.sd);
};
chrome.cast.Ba = function(a) {
  this.Ve = 1E3 * Math.floor(1E5 * Math.random());
  this.Sc = a;
  this.ka = {};
  this.ta = !1;
  this.ja = this.N = this.rb = null;
  this.Wa = new l.Xa;
  this.Va = new l.Xa;
  this.ya = new l.Xa;
  this.ga = {};
  this.xb = {};
};
b = chrome.cast.Ba.prototype;
b.Ib = function() {
  this.Sc.zg(this.yg.bind(this));
};
b.bg = function() {
  return "a" + this.Ve++;
};
b.cf = function(a) {
  var c = a.seqNum;
  if (!c) {
    return!1;
  }
  var d = this.ka[c];
  if (d) {
    var e = a.message;
    a.type == l.B.Ef ? d.$c()(a.message) : d.ad()(e);
    delete this.ka[c];
  }
  return!!d;
};
b.df = function(a) {
  switch(a.type) {
    case l.B.Qc:
    ;
    case l.B.Rc:
      a.message = this.nf(a.message);
      break;
    case l.B.Na:
      a = a.message, a.type == l.t.Fb && a.status && (a.status = a.status.map(this.Mc.bind(this)));
  }
};
b.nf = function(a) {
  var c = this.ga[a.sessionId];
  if (c) {
    return c.statusText = a.statusText, c.namespaces = a.namespaces || [], c.customData = a.customData, c.receiver.volume = a.receiver.volume, c;
  }
  var c = new chrome.cast.i(a.sessionId, a.appId, a.displayName, a.appImages, a.receiver), d;
  for (d in a) {
    "media" == d ? c.media = a.media.map(function(a) {
      a = this.Mc(a);
      a.zb = !1;
      a.Ta = !0;
      return a;
    }.bind(this)) : a.hasOwnProperty(d) && (c[d] = a[d]);
  }
  return this.ga[a.sessionId] = c;
};
b.yg = function(a) {
  this.df(a);
  if (!this.cf(a)) {
    switch(a.type) {
      case l.B.Uc:
        this.ef(a);
        break;
      case l.B.$e:
        this.jf(a);
        break;
      case l.B.Qc:
        this.hf(a);
        break;
      case l.B.Rc:
        this.lf(a);
        break;
      case l.B.af:
        this.kf(a);
        break;
      case l.B.Ec:
        this.ff(a.message);
        break;
      case l.B.Na:
        this.gf(a);
    }
  }
};
b.gf = function(a) {
  switch(a.message.type) {
    case l.t.Fb:
      this.Pf(a.message);
  }
};
b.Pf = function(a) {
  a.status.forEach(this.Pd.bind(this));
};
b.hf = function(a) {
  this.N && this.N.sessionListener(a.message);
};
b.lf = function(a) {
  (a = a.message) && this.ya.get(a.sessionId).forEach(function(a) {
    a(!0);
  });
};
b.kf = function(a) {
  a = a.message;
  this.ga[a] && (delete this.ga[a], this.Wa.Kf(a + "#"), this.Va.Ad(a), this.ya.get(a).forEach(function(a) {
    a(!1);
  }), this.ya.Ad(a));
};
b.ff = function(a) {
  this.qh(a.sessionId, a.namespaceName).forEach(function(c) {
    c(a.namespaceName, a.message);
  });
};
b.jf = function(a) {
  this.N && this.N.receiverListener(a.message);
};
b.ef = function(a) {
  (a = a.message) ? (this.rb = a, this.ja && this.ja.$c()(a)) : (this.ta = !0, this.Oc(), this.ja && this.ja.ad()(void 0));
};
b.qd = function(a, c, d, e) {
  this.Sa(e) && (l.H.Qe(c) ? (c.sessionId = a, this.xa(new l.wa(l.B.Na, c), new l.K(d, e))) : e(new chrome.cast.G(chrome.cast.U.INVALID_PARAMETER)));
};
b.gd = function(a, c, d, e) {
  this.Sa(d) && this.xa(new l.wa(l.B.Na, a), new l.K(c, d, e));
};
b.nd = function(a, c, d, e, f, h) {
  null != a && (d.mediaSessionId = a.mediaSessionId, d.sessionId = a.sessionId);
  d.requestId = null;
  d.type = c;
  this.gd(d, function(a) {
    a.status && 1 == a.status.length ? e(a.status[0]) : f(new chrome.cast.G(chrome.cast.U.SESSION_ERROR));
  }, f, h);
};
b.Yf = function(a, c, d) {
  this.nd(null, l.t.bb, a, function(a) {
    a.Ta = !0;
    a.zb = !0;
    c(a);
  }.bind(this), d, l.Wc.bb);
};
b.za = function(a, c, d, e, f) {
  this.nd(a, c, d, function(a) {
    this.Pd(a);
    e();
  }.bind(this), f);
};
b.Qf = function(a, c, d, e) {
  this.Sa(d) && (l.H.Re(a) ? this.xa(new l.wa(l.B.Ec, a), new l.K(c, d, e)) : d(new chrome.cast.G(chrome.cast.U.INVALID_PARAMETER)));
};
b.Oc = function() {
  this.N && this.ta && this.xa(new l.wa(l.B.qf, {sessionRequest:this.N.sessionRequest, autoJoinPolicy:this.N.autoJoinPolicy, defaultActionPolicy:this.N.defaultActionPolicy}));
};
b.xa = function(a, c) {
  var d = this.bg();
  a.seqNum = d;
  if (this.ka[d] && !this.ka[d].cg()) {
    throw "Try to send a request with the existing seqNum: " + a.seqNum;
  }
  c && (this.ka[d] = c, c.Lc(function() {
    delete this.ka[d];
  }.bind(this)));
  this.Sc.dg(a);
};
b.Ea = function(a, c, d) {
  l.H.Se(a) ? this.rb ? d(this.rb) : this.N ? c() : (this.N = a, this.ta ? (this.Oc(), c()) : (this.ja = new l.K(c, d, 5E3), this.ja.Lc())) : d(new chrome.cast.G(chrome.cast.U.INVALID_PARAMETER));
};
b.Ob = function(a, c, d) {
  this.Sa(c) ? d && !l.H.Nc(d) ? c(new chrome.cast.G(chrome.cast.U.INVALID_PARAMETER)) : (!d && this.N && (d = this.N.sessionRequest), this.xa(new l.wa(l.B.Pe, d), new l.K(a, c, 6E5))) : c(new chrome.cast.G(chrome.cast.U.API_NOT_INITIALIZED));
};
chrome.cast.Ba.og = new chrome.cast.G(chrome.cast.U.API_NOT_INITIALIZED);
b = chrome.cast.Ba.prototype;
b.Sa = function(a) {
  this.ta || a(chrome.cast.Ba.og);
  return this.ta;
};
b.Rb = function(a, c) {
  return a + "#" + c;
};
b.Sf = function(a, c, d) {
  this.Wa.add(this.Rb(a, c), d);
};
b.Vf = function(a, c, d) {
  this.Wa.remove(this.Rb(a, c), d);
};
b.qh = function(a, c) {
  return this.Wa.get(this.Rb(a, c));
};
b.Vc = function(a) {
  return a.sessionId + "#" + a.mediaSessionId;
};
b.Mb = function(a, c) {
  this.Va.add(a, c);
};
b.Nb = function(a, c) {
  this.Va.remove(a, c);
};
b.Tf = function(a, c) {
  -1 == a.Ca.indexOf(c) && a.Ca.push(c);
};
b.Wf = function(a, c) {
  var d = a.Ca.indexOf(c);
  -1 != d && a.Ca.splice(d, 1);
};
b.Pd = function(a) {
  if (a.Ta) {
    var c = a.playerState != chrome.cast.media.Gb.IDLE;
    a.Ca.forEach(function(a) {
      a(c);
    });
    if (!c) {
      delete this.xb[this.Vc(a)];
      var d = this.ga[a.sessionId];
      if (null != d) {
        var e = d.media.indexOf(a);
        -1 != e && d.media.splice(e, 1);
      }
    }
  } else {
    a.Ta = !0, a.zb || this.Va.get(a.sessionId).forEach(function(c) {
      c(a);
    });
  }
};
b.Mc = function(a) {
  var c = this.Vc(a), d = this.xb[c];
  d || (d = new chrome.cast.media.n(a.sessionId, a.mediaSessionId), this.xb[c] = d, (c = this.ga[a.sessionId]) && c.media.push(d));
  for (var e in a) {
    a.hasOwnProperty(e) && ("supportedMediaCommands" == e ? d.supportedMediaCommands = this.yf(a.supportedMediaCommands) : d[e] = a[e]);
  }
  return d;
};
b.yf = function(a) {
  var c = [];
  a & 1 && c.push(chrome.cast.media.Ja.PAUSE);
  a & 2 && c.push(chrome.cast.media.Ja.SEEK);
  a & 4 && c.push(chrome.cast.media.Ja.STREAM_VOLUME);
  a & 8 && c.push(chrome.cast.media.Ja.STREAM_MUTE);
  return c;
};
b.Uf = function(a, c) {
  this.ya.add(a, c);
};
b.Xf = function(a, c) {
  this.ya.remove(a, c);
};
chrome.cast.th = !1;
g.h("chrome.cast.isAvailable", chrome.cast.th);
chrome.cast.q = null;
chrome.cast.Ea = function(a, c, d) {
  chrome.cast.q.Ea(a, c, d);
};
g.h("chrome.cast.initialize", chrome.cast.Ea);
chrome.cast.Ob = function(a, c, d) {
  chrome.cast.q.Ob(a, c, d);
};
g.h("chrome.cast.requestSession", chrome.cast.Ob);
chrome.cast.i.prototype.Ah = function(a, c, d) {
  chrome.cast.q.qd(this.sessionId, new l.pd(new chrome.cast.Za(a, null), this.receiver.volume), c, d);
};
g.u(chrome.cast.i.prototype, "setReceiverVolumeLevel", chrome.cast.i.prototype.Ah);
chrome.cast.i.prototype.zh = function(a, c, d) {
  chrome.cast.q.qd(this.sessionId, new l.pd(new chrome.cast.Za(null, a), this.receiver.volume), c, d);
};
g.u(chrome.cast.i.prototype, "setReceiverMuted", chrome.cast.i.prototype.zh);
chrome.cast.i.prototype.stop = function(a, c) {
  chrome.cast.q.gd(new l.Mf(this.sessionId), a, c);
};
g.u(chrome.cast.i.prototype, "stop", chrome.cast.i.prototype.stop);
chrome.cast.i.prototype.sendMessage = function(a, c, d, e) {
  chrome.cast.q.Qf(new l.Of(this.sessionId, a, c), d, e);
};
g.u(chrome.cast.i.prototype, "sendMessage", chrome.cast.i.prototype.sendMessage);
chrome.cast.i.prototype.Vb = function(a) {
  chrome.cast.q.Uf(this.sessionId, a);
};
g.u(chrome.cast.i.prototype, "addUpdateListener", chrome.cast.i.prototype.Vb);
chrome.cast.i.prototype.Zb = function(a) {
  chrome.cast.q.Xf(this.sessionId, a);
};
g.u(chrome.cast.i.prototype, "removeUpdateListener", chrome.cast.i.prototype.Zb);
chrome.cast.i.prototype.jh = function(a, c) {
  chrome.cast.q.Sf(this.sessionId, a, c);
};
g.u(chrome.cast.i.prototype, "addMessageListener", chrome.cast.i.prototype.jh);
chrome.cast.i.prototype.xh = function(a, c) {
  chrome.cast.q.Vf(this.sessionId, a, c);
};
g.u(chrome.cast.i.prototype, "removeMessageListener", chrome.cast.i.prototype.xh);
chrome.cast.i.prototype.Mb = function(a) {
  chrome.cast.q.Mb(this.sessionId, a);
};
g.u(chrome.cast.i.prototype, "addMediaListener", chrome.cast.i.prototype.Mb);
chrome.cast.i.prototype.Nb = function(a) {
  chrome.cast.q.Nb(this.sessionId, a);
};
g.u(chrome.cast.i.prototype, "removeMediaListener", chrome.cast.i.prototype.Nb);
chrome.cast.i.prototype.vh = function(a, c, d) {
  a.sessionId = this.sessionId;
  chrome.cast.q.Yf(a, c, d);
};
g.u(chrome.cast.i.prototype, "loadMedia", chrome.cast.i.prototype.vh);
chrome.cast.media.n.prototype.play = function(a, c, d) {
  a || (a = new chrome.cast.media.fd);
  chrome.cast.q.za(this, l.t.pf, a, c, d);
};
g.u(chrome.cast.media.n.prototype, "play", chrome.cast.media.n.prototype.play);
chrome.cast.media.n.prototype.pause = function(a, c, d) {
  a || (a = new chrome.cast.media.ed);
  chrome.cast.q.za(this, l.t.of, a, c, d);
};
g.u(chrome.cast.media.n.prototype, "pause", chrome.cast.media.n.prototype.pause);
chrome.cast.media.n.prototype.seek = function(a, c, d) {
  chrome.cast.q.za(this, l.t.hd, a, c, d);
};
g.u(chrome.cast.media.n.prototype, "seek", chrome.cast.media.n.prototype.seek);
chrome.cast.media.n.prototype.stop = function(a, c, d) {
  a || (a = new chrome.cast.media.cd);
  chrome.cast.q.za(this, l.t.bd, a, c, d);
};
g.u(chrome.cast.media.n.prototype, "stop", chrome.cast.media.n.prototype.stop);
chrome.cast.media.n.prototype.Bh = function(a, c, d) {
  chrome.cast.q.za(this, l.t.jd, a, c, d);
};
g.u(chrome.cast.media.n.prototype, "setVolume", chrome.cast.media.n.prototype.Bh);
chrome.cast.media.n.prototype.Ch = function(a) {
  return-1 < this.supportedMediaCommands.indexOf(a);
};
g.u(chrome.cast.media.n.prototype, "supportsCommand", chrome.cast.media.n.prototype.Ch);
chrome.cast.media.n.prototype.Vb = function(a) {
  chrome.cast.q.Tf(this, a);
};
g.u(chrome.cast.media.n.prototype, "addUpdateListener", chrome.cast.media.n.prototype.Vb);
chrome.cast.media.n.prototype.Zb = function(a) {
  chrome.cast.q.Wf(this, a);
};
g.u(chrome.cast.media.n.prototype, "removeUpdateListener", chrome.cast.media.n.prototype.Zb);
chrome.cast.$b = function() {
  if (!chrome.cast.od && (chrome.cast.od = !0, chrome.cast.extensionId)) {
    var a = "chrome-extension://" + chrome.cast.extensionId, c = a + "/api_iframe.html", d = document.createElement("iframe");
    d.src = c + "?appOrigin=" + window.location.origin;
    d.setAttribute("style", "display:none");
    document.body.appendChild(d);
    a = new chrome.cast.Fa(d, a);
    a.Ib();
    chrome.cast.q = new chrome.cast.Ba(a);
    chrome.cast.q.Ib();
    chrome.cast.isAvailable = !0;
  }
};
chrome.cast.od = !1;
"complete" == document.readyState ? chrome.cast.$b() : (window.addEventListener("load", chrome.cast.$b, !1), window.addEventListener("DOMContentLoaded", chrome.cast.$b, !1));
})();
