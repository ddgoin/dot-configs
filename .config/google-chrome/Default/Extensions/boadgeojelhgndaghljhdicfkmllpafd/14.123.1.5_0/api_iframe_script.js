var b, chrome = window.chrome || {};
chrome.cast = chrome.cast || {};
chrome.cast.media = chrome.cast.media || {};
var l = l || {};
l.global = this;
l.Nb = function(a, c, d) {
  a = a.split(".");
  d = d || l.global;
  a[0] in d || !d.execScript || d.execScript("var " + a[0]);
  for (var e;a.length && (e = a.shift());) {
    a.length || void 0 === c ? d = d[e] ? d[e] : d[e] = {} : d[e] = c;
  }
};
l.pi = function(a, c) {
  l.Nb(a, c);
};
l.ya = !0;
l.Xg = "en";
l.qd = !0;
l.yj = function(a) {
  l.Nb(a);
};
l.Hj = function(a) {
  if (!l.ya) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + a ? ": " + a : ".");
  }
};
l.wi = function() {
};
l.Ei = function(a, c) {
  for (var d = a.split("."), e = c || l.global, f;f = d.shift();) {
    if (l.Sb(e[f])) {
      e = e[f];
    } else {
      return null;
    }
  }
  return e;
};
l.Mi = function(a, c) {
  var d = c || l.global, e;
  for (e in a) {
    d[e] = a[e];
  }
};
l.xh = function(a, c, d) {
  if (l.Pc) {
    var e;
    a = a.replace(/\\/g, "/");
    for (var f = l.ja, g = 0;e = c[g];g++) {
      f.wa[e] = a, a in f.Jb || (f.Jb[a] = {}), f.Jb[a][e] = !0;
    }
    for (e = 0;c = d[e];e++) {
      a in f.requires || (f.requires[a] = {}), f.requires[a][c] = !0;
    }
  }
};
l.$j = !1;
l.Kg = !0;
l.require = function() {
};
l.$a = "";
l.sj = function() {
};
l.Ri = function(a) {
  return a;
};
l.vh = function() {
  throw Error("unimplemented abstract method");
};
l.yh = function(a) {
  a.zg = function() {
    if (a.Qc) {
      return a.Qc;
    }
    l.ya && (l.Rc[l.Rc.length] = a);
    return a.Qc = new a;
  };
};
l.Rc = [];
l.Pc = !1;
l.Pc && (l.$e = {}, l.ja = {Jb:{}, wa:{}, requires:{}, Lc:{}, ab:{}}, l.Uc = function() {
  var a = l.global.document;
  return "undefined" != typeof a && "write" in a;
}, l.jg = function() {
  if (l.global.uf) {
    l.$a = l.global.uf;
  } else {
    if (l.Uc()) {
      for (var a = l.global.document.getElementsByTagName("script"), c = a.length - 1;0 <= c;--c) {
        var d = a[c].src, e = d.lastIndexOf("?"), e = -1 == e ? d.length : e;
        if ("base.js" == d.substr(e - 7, 7)) {
          l.$a = d.substr(0, e - 7);
          break;
        }
      }
    }
  }
}, l.Kc = function(a) {
  var c = l.global.yg || l.qf;
  !l.ja.ab[a] && c(a) && (l.ja.ab[a] = !0);
}, l.qf = function(a) {
  if (l.Uc()) {
    var c = l.global.document;
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
}, l.ck = function() {
  function a(f) {
    if (!(f in e.ab)) {
      if (!(f in e.Lc) && (e.Lc[f] = !0, f in e.requires)) {
        for (var h in e.requires[f]) {
          if (!l.xg(h)) {
            if (h in e.wa) {
              a(e.wa[h]);
            } else {
              throw Error("Undefined nameToPath for " + h);
            }
          }
        }
      }
      f in d || (d[f] = !0, c.push(f));
    }
  }
  var c = [], d = {}, e = l.ja, f;
  for (f in l.$e) {
    e.ab[f] || a(f);
  }
  for (f = 0;f < c.length;f++) {
    if (c[f]) {
      l.Kc(l.$a + c[f]);
    } else {
      throw Error("Undefined script input");
    }
  }
}, l.Ji = function(a) {
  return a in l.ja.wa ? l.ja.wa[a] : null;
}, l.jg(), l.global.Fg || l.Kc(l.$a + "deps.js"));
l.F = function(a) {
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
l.S = function(a) {
  return void 0 !== a;
};
l.dj = function(a) {
  return null === a;
};
l.Sb = function(a) {
  return null != a;
};
l.isArray = function(a) {
  return "array" == l.F(a);
};
l.s = function(a) {
  var c = l.F(a);
  return "array" == c || "object" == c && "number" == typeof a.length;
};
l.Xi = function(a) {
  return l.isObject(a) && "function" == typeof a.getFullYear;
};
l.isString = function(a) {
  return "string" == typeof a;
};
l.Je = function(a) {
  return "boolean" == typeof a;
};
l.isNumber = function(a) {
  return "number" == typeof a;
};
l.isFunction = function(a) {
  return "function" == l.F(a);
};
l.isObject = function(a) {
  var c = typeof a;
  return "object" == c && null != a || "function" == c;
};
l.rd = function(a) {
  return a[l.za] || (a[l.za] = ++l.vf);
};
l.Pi = function(a) {
  return!!a[l.za];
};
l.ug = function(a) {
  "removeAttribute" in a && a.removeAttribute(l.za);
  try {
    delete a[l.za];
  } catch (c) {
  }
};
l.za = "closure_uid_" + (1E9 * Math.random() >>> 0);
l.vf = 0;
l.Bi = l.rd;
l.Aj = l.ug;
l.rf = function(a) {
  var c = l.F(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = l.rf(a[d]);
    }
    return c;
  }
  return a;
};
l.Af = function(a, c, d) {
  return a.call.apply(a.bind, arguments);
};
l.zf = function(a, c, d) {
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
l.bind = function(a, c, d) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? l.bind = l.Af : l.bind = l.zf;
  return l.bind.apply(null, arguments);
};
l.sc = function(a, c) {
  var d = Array.prototype.slice.call(arguments, 1);
  return function() {
    var c = d.slice();
    c.push.apply(c, arguments);
    return a.apply(this, c);
  };
};
l.sd = function(a, c) {
  for (var d in c) {
    a[d] = c[d];
  }
};
l.now = l.qd && Date.now || function() {
  return+new Date;
};
l.Li = function(a) {
  if (l.global.execScript) {
    l.global.execScript(a, "JavaScript");
  } else {
    if (l.global.eval) {
      if (null == l.eb && (l.global.eval("var _et_ = 1;"), "undefined" != typeof l.global._et_ ? (delete l.global._et_, l.eb = !0) : l.eb = !1), l.eb) {
        l.global.eval(a);
      } else {
        var c = l.global.document, d = c.createElement("script");
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
l.eb = null;
l.zi = function(a, c) {
  var d = function(a) {
    return l.ad[a] || a;
  }, e = function(a) {
    a = a.split("-");
    for (var c = [], e = 0;e < a.length;e++) {
      c.push(d(a[e]));
    }
    return c.join("-");
  }, e = l.ad ? "BY_WHOLE" == l.yf ? d : e : function(a) {
    return a;
  };
  return c ? a + "-" + e(c) : e(a);
};
l.Ej = function(a, c) {
  l.ad = a;
  l.yf = c;
};
l.Ci = function(a, c) {
  var d = c || {}, e;
  for (e in d) {
    var f = ("" + d[e]).replace(/\$/g, "$$$$");
    a = a.replace(RegExp("\\{\\$" + e + "\\}", "gi"), f);
  }
  return a;
};
l.Di = function(a) {
  return a;
};
l.i = function(a, c, d) {
  l.Nb(a, c, d);
};
l.ti = function(a, c, d) {
  a[c] = d;
};
l.Aa = function(a, c) {
  function d() {
  }
  d.prototype = c.prototype;
  a.cb = c.prototype;
  a.prototype = new d;
  a.prototype.constructor = a;
  a.xf = function(a, d, g) {
    var h = Array.prototype.slice.call(arguments, 2);
    return c.prototype[d].apply(a, h);
  };
};
l.xf = function(a, c, d) {
  var e = arguments.callee.caller;
  if (l.ya && !e) {
    throw Error("arguments.caller not defined.  goog.base() expects not to be running in strict mode. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (e.cb) {
    return e.cb.constructor.apply(a, Array.prototype.slice.call(arguments, 1));
  }
  for (var f = Array.prototype.slice.call(arguments, 2), g = !1, h = a.constructor;h;h = h.cb && h.cb.constructor) {
    if (h.prototype[c] === e) {
      g = !0;
    } else {
      if (g) {
        return h.prototype[c].apply(a, f);
      }
    }
  }
  if (a[c] === e) {
    return a.constructor.prototype[c].apply(a, f);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
l.scope = function(a) {
  a.call(l.global);
};
l.Mf = !0;
l.Mf && (Function.prototype.bind = Function.prototype.bind || function(a, c) {
  if (1 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 1);
    d.unshift(this, a);
    return l.bind.apply(null, d);
  }
  return l.bind(this, a);
}, Function.prototype.sc = function(a) {
  var c = Array.prototype.slice.call(arguments);
  c.unshift(this, null);
  return l.bind.apply(null, c);
}, Function.prototype.Aa = function(a) {
  l.Aa(this, a);
}, Function.prototype.sd = function(a) {
  l.sd(this.prototype, a);
});
var m = {Q:{Gf:"LAUNCH", Tc:"STOP", Yf:"SET_VOLUME", Df:"GET_STATUS", kh:"RECEIVER_STATUS", rh:"CONNECT", sh:"CLOSE", Og:"GET_APP_AVAILABILITY", Sc:"LOAD", $g:"PAUSE", Jf:"SEEK", ah:"PLAY", Lf:"STOP_MEDIA", If:"MEDIA_GET_STATUS", Kf:"MEDIA_SET_VOLUME", Pg:"INVALID_PLAYER_STATE", Wg:"LOAD_FAILED", Vg:"LOAD_CANCELLED", Qg:"INVALID_REQUEST", bh:"MEDIA_STATUS", Tg:"LAUNCH_ERROR", hh:"PING", ih:"PONG"}, Mb:{}};
m.Mb[m.Q.Lf] = m.Q.Tc;
m.Mb[m.Q.Kf] = m.Q.Yf;
m.Mb[m.Q.If] = m.Q.Df;
m.Bg = function(a, c, d) {
  this.sessionId = a;
  this.namespaceName = c;
  this.message = d;
};
m.nh = function(a) {
  this.type = m.Q.Tc;
  this.requestId = null;
  this.sessionId = a || null;
};
chrome.cast.Xc = {TAB_AND_ORIGIN_SCOPED:"tab_and_origin_scoped", ORIGIN_SCOPED:"origin_scoped", PAGE_SCOPED:"page_scoped"};
l.i("chrome.cast.AutoJoinPolicy", chrome.cast.Xc);
chrome.cast.Yc = {CREATE_SESSION:"create_session", CAST_THIS_TAB:"cast_this_tab"};
l.i("chrome.cast.DefaultActionPolicy", chrome.cast.Yc);
chrome.cast.Lb = {VIDEO_OUT:"video_out", AUDIO_OUT:"audio_out", VIDEO_IN:"video_in", AUDIO_IN:"audio_in"};
l.i("chrome.cast.Capability", chrome.cast.Lb);
chrome.cast.Wa = {CANCEL:"cancel", TIMEOUT:"timeout", API_NOT_INITIALIZED:"api_not_initialized", INVALID_PARAMETER:"invalid_parameter", EXTENSION_NOT_COMPATIBLE:"extension_not_compatible", EXTENSION_MISSING:"extension_missing", RECEIVER_UNAVAILABLE:"receiver_unavailable", SESSION_ERROR:"session_error", CHANNEL_ERROR:"channel_error", LOAD_MEDIA_FAILED:"load_media_failed"};
l.i("chrome.cast.ErrorCode", chrome.cast.Wa);
chrome.cast.Wf = {AVAILABLE:"available", UNAVAILABLE:"unavailable"};
l.i("chrome.cast.ReceiverAvailability", chrome.cast.Wf);
chrome.cast.ag = {CHROME:"chrome", IOS:"ios", ANDROID:"android"};
l.i("chrome.cast.SenderPlatform", chrome.cast.ag);
chrome.cast.VERSION = [1, 0];
l.i("chrome.cast.VERSION", chrome.cast.VERSION);
chrome.cast.I = function(a, c) {
  this.code = a;
  this.description = c || null;
  this.details = null;
};
l.i("chrome.cast.Error", chrome.cast.I);
chrome.cast.$f = function(a) {
  this.platform = a;
  this.packageId = this.url = null;
};
l.i("chrome.cast.SenderApplication", chrome.cast.$f);
chrome.cast.Ff = function(a) {
  this.url = a;
  this.width = this.height = null;
};
l.i("chrome.cast.Image", chrome.cast.Ff);
chrome.cast.$c = function(a, c) {
  this.level = l.S(a) ? a : null;
  this.muted = l.S(c) ? c : null;
};
l.i("chrome.cast.Volume", chrome.cast.$c);
chrome.cast.media.Of = {PAUSE:"pause", SEEK:"seek", STREAM_VOLUME:"stream_volume", STREAM_MUTE:"stream_mute"};
l.i("chrome.cast.media.MediaCommand", chrome.cast.media.Of);
chrome.cast.media.ka = {GENERIC:0, TV_SHOW:1, MOVIE:2, MUSIC_TRACK:3, PHOTO:4};
l.i("chrome.cast.media.MetadataType", chrome.cast.media.ka);
chrome.cast.media.Zc = {IDLE:"IDLE", PLAYING:"PLAYING", PAUSED:"PAUSED", BUFFERING:"BUFFERING"};
l.i("chrome.cast.media.PlayerState", chrome.cast.media.Zc);
chrome.cast.media.Xf = {PLAYBACK_START:"PLAYBACK_START", PLAYBACK_PAUSE:"PLAYBACK_PAUSE"};
l.i("chrome.cast.media.ResumeState", chrome.cast.media.Xf);
chrome.cast.media.pd = {BUFFERED:"buffered", LIVE:"live", OTHER:"other"};
l.i("chrome.cast.media.StreamType", chrome.cast.media.pd);
chrome.cast.media.Sf = function() {
  this.customData = null;
};
l.i("chrome.cast.media.PauseRequest", chrome.cast.media.Sf);
chrome.cast.media.Uf = function() {
  this.customData = null;
};
l.i("chrome.cast.media.PlayRequest", chrome.cast.media.Uf);
chrome.cast.media.Zf = function() {
  this.customData = this.resumeState = this.currentTime = null;
};
l.i("chrome.cast.media.SeekRequest", chrome.cast.media.Zf);
chrome.cast.media.dg = function() {
  this.customData = null;
};
l.i("chrome.cast.media.StopRequest", chrome.cast.media.dg);
chrome.cast.media.fg = function(a) {
  this.volume = a;
  this.customData = null;
};
l.i("chrome.cast.media.VolumeRequest", chrome.cast.media.fg);
chrome.cast.media.Hf = function(a) {
  this.type = m.Q.Sc;
  this.sessionId = this.requestId = null;
  this.media = a;
  this.autoplay = !0;
  this.customData = this.currentTime = null;
};
l.i("chrome.cast.media.LoadRequest", chrome.cast.media.Hf);
chrome.cast.media.Ef = function() {
  this.type = chrome.cast.media.ka.GENERIC;
  this.releaseYear = this.images = this.subtitle = this.title = null;
};
l.i("chrome.cast.media.GenericMediaMetadata", chrome.cast.media.Ef);
chrome.cast.media.Qf = function() {
  this.type = chrome.cast.media.ka.MOVIE;
  this.releaseYear = this.images = this.subtitle = this.studio = this.title = null;
};
l.i("chrome.cast.media.MovieMediaMetadata", chrome.cast.media.Qf);
chrome.cast.media.eg = function() {
  this.type = chrome.cast.media.ka.TV_SHOW;
  this.releaseYear = this.images = this.episodeNumber = this.seasonNumber = this.episodeTitle = this.seriesTitle = null;
};
l.i("chrome.cast.media.TvShowMediaMetadata", chrome.cast.media.eg);
chrome.cast.media.Rf = function() {
  this.type = chrome.cast.media.ka.MUSIC_TRACK;
  this.releaseYear = this.images = this.discNumber = this.trackNumber = this.artistName = this.songName = this.albumName = null;
};
l.i("chrome.cast.media.MusicTrackMediaMetadata", chrome.cast.media.Rf);
chrome.cast.media.Tf = function() {
  this.type = chrome.cast.media.ka.PHOTO;
  this.creationDateTime = this.height = this.width = this.longitude = this.latitude = this.images = this.location = this.artist = this.title = null;
};
l.i("chrome.cast.media.PhotoMediaMetadata", chrome.cast.media.Tf);
chrome.cast.media.Pf = function(a, c) {
  this.contentId = a;
  this.streamType = chrome.cast.media.pd.BUFFERED;
  this.contentType = c;
  this.customData = this.duration = this.metadata = null;
};
l.i("chrome.cast.media.MediaInfo", chrome.cast.media.Pf);
chrome.cast.media.Nf = function(a, c) {
  this.sessionId = a;
  this.mediaSessionId = c;
  this.media = null;
  this.playbackRate = 1;
  this.playerState = chrome.cast.media.Zc.IDLE;
  this.currentTime = 0;
  this.supportedMediaCommands = [];
  this.volume = new chrome.cast.$c;
  this.customData = null;
};
l.i("chrome.cast.media.Media", chrome.cast.media.Nf);
chrome.cast.media.Cf = "CC1AD845";
l.i("chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID", chrome.cast.media.Cf);
chrome.cast.Bf = function(a, c, d, e, f) {
  this.sessionRequest = a;
  this.sessionListener = c;
  this.receiverListener = d;
  this.autoJoinPolicy = e || chrome.cast.Xc.TAB_AND_ORIGIN_SCOPED;
  this.defaultActionPolicy = f || chrome.cast.Yc.CREATE_SESSION;
};
l.i("chrome.cast.ApiConfig", chrome.cast.Bf);
chrome.cast.cg = function(a, c) {
  this.appId = a;
  this.capabilities = c || [chrome.cast.Lb.VIDEO_OUT, chrome.cast.Lb.AUDIO_OUT];
};
l.i("chrome.cast.SessionRequest", chrome.cast.cg);
chrome.cast.Vf = function(a, c, d, e) {
  this.label = a;
  this.friendlyName = c;
  this.capabilities = d || [];
  this.volume = e || null;
};
l.i("chrome.cast.Receiver", chrome.cast.Vf);
chrome.cast.bg = function(a, c, d, e, f) {
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
l.i("chrome.cast.Session", chrome.cast.bg);
m.jf = {Gf:1E4, Sc:864E5, Jf:5E3, hf:3E3};
m.P = function(a, c, d) {
  this.Gc = a;
  this.Cb = c;
  this.Xe = d || m.jf.hf;
  this.Eb = !1;
  this.va = null;
};
m.P.prototype.Db = function() {
  this.Eb = !0;
  this.Cb = this.Gc = null;
  this.va && (clearTimeout(this.va), this.va = null);
};
m.P.Mc = function() {
};
m.P.prototype.df = function() {
  var a = this.Gc;
  this.Db();
  return a || m.P.Mc;
};
m.P.prototype.cf = function() {
  var a = this.Cb;
  this.Db();
  return a || m.P.Mc;
};
m.P.prototype.Fe = function(a, c) {
  if (!this.Eb && !this.va) {
    var d = function() {
      if (!this.Eb) {
        a && a();
        var d = this.Cb;
        this.Db();
        var f = new chrome.cast.I(chrome.cast.Wa.TIMEOUT);
        c && (f.description = c);
        d(f);
      }
    }.bind(this);
    this.va = setTimeout(d, this.Xe);
  }
};
m.Bc = function(a, c, d, e) {
  this.type = a;
  this.message = c;
  this.seqNum = d || null;
  this.clientId = e || null;
  this.appOrigin = null;
};
m.D = {ff:"iframe_init_result", yc:"extension_version", Ve:"v2_message", Ne:"app_message", Eg:"client_init", Yg:"log_message", lh:"request_session", Dg:"client_disconnect", Re:"receiver_availability", Qe:"new_session", Ue:"update_session", Se:"remove_session", Oe:"app_message_success", Te:"set_receiver_volume_success", Pe:"error"};
l.debug = {};
l.debug.I = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, l.debug.I);
  } else {
    var c = Error().stack;
    c && (this.stack = c);
  }
  a && (this.message = String(a));
};
l.Aa(l.debug.I, Error);
l.debug.I.prototype.name = "CustomError";
l.Dc = {};
l.Dc.He = {Ge:1, Ag:2, oh:3, Cg:4, Mg:5, Lg:6, jh:7, Gg:8, Hg:9, Jg:10, Ig:11, fh:12};
l.b = {};
l.b.qh = {eh:"\u00a0"};
l.b.jb = function(a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
l.b.yd = function(a, c) {
  var d = a.length - c.length;
  return 0 <= d && a.indexOf(c, d) == d;
};
l.b.$h = function(a, c) {
  return 0 == l.b.tc(c, a.substr(0, c.length));
};
l.b.Yh = function(a, c) {
  return 0 == l.b.tc(c, a.substr(a.length - c.length, c.length));
};
l.b.Zh = function(a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
l.b.Rd = function(a, c) {
  for (var d = a.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1);f.length && 1 < d.length;) {
    e += d.shift() + f.shift();
  }
  return e + d.join("%s");
};
l.b.di = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
l.b.B = function(a) {
  return/^[\s\xa0]*$/.test(a);
};
l.b.Zi = function(a) {
  return l.b.B(l.b.Qd(a));
};
l.b.Wi = function(a) {
  return!/[^\t\n\r ]/.test(a);
};
l.b.Ui = function(a) {
  return!/[^a-zA-Z]/.test(a);
};
l.b.ej = function(a) {
  return!/[^0-9]/.test(a);
};
l.b.Vi = function(a) {
  return!/[^a-zA-Z0-9]/.test(a);
};
l.b.fj = function(a) {
  return " " == a;
};
l.b.gj = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a;
};
l.b.Oj = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ");
};
l.b.Xh = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n");
};
l.b.pj = function(a) {
  return a.replace(/\xa0|\s/g, " ");
};
l.b.oj = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ");
};
l.b.ci = function(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
l.b.trim = function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
l.b.trimLeft = function(a) {
  return a.replace(/^[\s\xa0]+/, "");
};
l.b.trimRight = function(a) {
  return a.replace(/[\s\xa0]+$/, "");
};
l.b.tc = function(a, c) {
  var d = String(a).toLowerCase(), e = String(c).toLowerCase();
  return d < e ? -1 : d == e ? 0 : 1;
};
l.b.uc = /(\.\d+)|(\d+)|(\D+)/g;
l.b.tj = function(a, c) {
  if (a == c) {
    return 0;
  }
  if (!a) {
    return-1;
  }
  if (!c) {
    return 1;
  }
  for (var d = a.toLowerCase().match(l.b.uc), e = c.toLowerCase().match(l.b.uc), f = Math.min(d.length, e.length), g = 0;g < f;g++) {
    var h = d[g], k = e[g];
    if (h != k) {
      return d = parseInt(h, 10), !isNaN(d) && (e = parseInt(k, 10), !isNaN(e) && d - e) ? d - e : h < k ? -1 : 1;
    }
  }
  return d.length != e.length ? d.length - e.length : a < c ? -1 : 1;
};
l.b.ma = function(a) {
  return encodeURIComponent(String(a));
};
l.b.La = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "));
};
l.b.ge = function(a, c) {
  return a.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>");
};
l.b.pc = function(a, c) {
  if (c) {
    return a.replace(l.b.cc, "&amp;").replace(l.b.ec, "&lt;").replace(l.b.dc, "&gt;").replace(l.b.fc, "&quot;").replace(l.b.gc, "&#39;");
  }
  if (!l.b.Pd.test(a)) {
    return a;
  }
  -1 != a.indexOf("&") && (a = a.replace(l.b.cc, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(l.b.ec, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(l.b.dc, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(l.b.fc, "&quot;"));
  -1 != a.indexOf("'") && (a = a.replace(l.b.gc, "&#39;"));
  return a;
};
l.b.cc = /&/g;
l.b.ec = /</g;
l.b.dc = />/g;
l.b.fc = /"/g;
l.b.gc = /'/g;
l.b.Pd = /[&<>"']/;
l.b.qc = function(a) {
  return l.b.contains(a, "&") ? "document" in l.global ? l.b.rc(a) : l.b.$d(a) : a;
};
l.b.Yj = function(a, c) {
  return l.b.contains(a, "&") ? l.b.rc(a, c) : a;
};
l.b.rc = function(a, c) {
  var d = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'}, e;
  e = c ? c.createElement("div") : document.createElement("div");
  return a.replace(l.b.fe, function(a, c) {
    var h = d[a];
    if (h) {
      return h;
    }
    if ("#" == c.charAt(0)) {
      var k = Number("0" + c.substr(1));
      isNaN(k) || (h = String.fromCharCode(k));
    }
    h || (e.innerHTML = a + " ", h = e.firstChild.nodeValue.slice(0, -1));
    return d[a] = h;
  });
};
l.b.$d = function(a) {
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
l.b.fe = /&([^;\s<&]+);?/g;
l.b.ak = function(a, c) {
  return l.b.ge(a.replace(/  /g, " &#160;"), c);
};
l.b.Pj = function(a, c) {
  for (var d = c.length, e = 0;e < d;e++) {
    var f = 1 == d ? c : c.charAt(e);
    if (a.charAt(0) == f && a.charAt(a.length - 1) == f) {
      return a.substring(1, a.length - 1);
    }
  }
  return a;
};
l.b.truncate = function(a, c, d) {
  d && (a = l.b.qc(a));
  a.length > c && (a = a.substring(0, c - 3) + "...");
  d && (a = l.b.pc(a));
  return a;
};
l.b.Xj = function(a, c, d, e) {
  d && (a = l.b.qc(a));
  if (e && a.length > c) {
    e > c && (e = c), a = a.substring(0, c - e) + "..." + a.substring(a.length - e);
  } else {
    if (a.length > c) {
      e = Math.floor(c / 2);
      var f = a.length - e;
      a = a.substring(0, e + c % 2) + "..." + a.substring(f);
    }
  }
  d && (a = l.b.pc(a));
  return a;
};
l.b.qb = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\"};
l.b.Ua = {"'":"\\'"};
l.b.quote = function(a) {
  a = String(a);
  if (a.quote) {
    return a.quote();
  }
  for (var c = ['"'], d = 0;d < a.length;d++) {
    var e = a.charAt(d), f = e.charCodeAt(0);
    c[d + 1] = l.b.qb[e] || (31 < f && 127 > f ? e : l.b.oc(e));
  }
  c.push('"');
  return c.join("");
};
l.b.si = function(a) {
  for (var c = [], d = 0;d < a.length;d++) {
    c[d] = l.b.oc(a.charAt(d));
  }
  return c.join("");
};
l.b.oc = function(a) {
  if (a in l.b.Ua) {
    return l.b.Ua[a];
  }
  if (a in l.b.qb) {
    return l.b.Ua[a] = l.b.qb[a];
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
  return l.b.Ua[a] = c;
};
l.b.Tj = function(a) {
  for (var c = {}, d = 0;d < a.length;d++) {
    c[a.charAt(d)] = !0;
  }
  return c;
};
l.b.contains = function(a, c) {
  return-1 != a.indexOf(c);
};
l.b.ji = function(a, c) {
  return a && c ? a.split(c).length - 1 : 0;
};
l.b.Ra = function(a, c, d) {
  var e = a;
  0 <= c && c < a.length && 0 < d && (e = a.substr(0, c) + a.substr(c + d, a.length - c - d));
  return e;
};
l.b.remove = function(a, c) {
  var d = RegExp(l.b.rb(c), "");
  return a.replace(d, "");
};
l.b.removeAll = function(a, c) {
  var d = RegExp(l.b.rb(c), "g");
  return a.replace(d, "");
};
l.b.rb = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
l.b.repeat = function(a, c) {
  return Array(c + 1).join(a);
};
l.b.vj = function(a, c, d) {
  a = l.S(d) ? a.toFixed(d) : String(a);
  d = a.indexOf(".");
  -1 == d && (d = a.length);
  return l.b.repeat("0", Math.max(0, c - d)) + a;
};
l.b.Qd = function(a) {
  return null == a ? "" : String(a);
};
l.b.xd = function(a) {
  return Array.prototype.join.call(arguments, "");
};
l.b.Qb = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ l.now()).toString(36);
};
l.b.lc = function(a, c) {
  for (var d = 0, e = l.b.trim(String(a)).split("."), f = l.b.trim(String(c)).split("."), g = Math.max(e.length, f.length), h = 0;0 == d && h < g;h++) {
    var k = e[h] || "", n = f[h] || "", p = RegExp("(\\d*)(\\D*)", "g"), t = RegExp("(\\d*)(\\D*)", "g");
    do {
      var q = p.exec(k) || ["", "", ""], r = t.exec(n) || ["", "", ""];
      if (0 == q[0].length && 0 == r[0].length) {
        break;
      }
      d = l.b.sb(0 == q[1].length ? 0 : parseInt(q[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || l.b.sb(0 == q[2].length, 0 == r[2].length) || l.b.sb(q[2], r[2]);
    } while (0 == d);
  }
  return d;
};
l.b.sb = function(a, c) {
  return a < c ? -1 : a > c ? 1 : 0;
};
l.b.ee = 4294967296;
l.b.Qi = function(a) {
  for (var c = 0, d = 0;d < a.length;++d) {
    c = 31 * c + a.charCodeAt(d), c %= l.b.ee;
  }
  return c;
};
l.b.he = 2147483648 * Math.random() | 0;
l.b.ni = function() {
  return "goog_" + l.b.he++;
};
l.b.Uj = function(a) {
  var c = Number(a);
  return 0 == c && l.b.B(a) ? NaN : c;
};
l.b.cj = function(a) {
  return/^[a-z]+([A-Z][a-z]*)*$/.test(a);
};
l.b.hj = function(a) {
  return/^([A-Z][a-z]*)+$/.test(a);
};
l.b.Sj = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, d) {
    return d.toUpperCase();
  });
};
l.b.Vj = function(a) {
  return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
};
l.b.Wj = function(a, c) {
  var d = l.isString(c) ? l.b.rb(c) : "\\s";
  return a.replace(RegExp("(^" + (d ? "|[" + d + "]+" : "") + ")([a-z])", "g"), function(a, c, d) {
    return c + d.toUpperCase();
  });
};
l.b.wj = function(a) {
  isFinite(a) && (a = String(a));
  return l.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
};
l.b.Lj = function(a, c, d) {
  a = a.split(c);
  for (var e = [];0 < d && a.length;) {
    e.push(a.shift()), d--;
  }
  a.length && e.push(a.join(c));
  return e;
};
l.g = {};
l.g.J = l.ya;
l.g.Za = function(a, c) {
  c.unshift(a);
  l.debug.I.call(this, l.b.Rd.apply(null, c));
  c.shift();
};
l.Aa(l.g.Za, l.debug.I);
l.g.Za.prototype.name = "AssertionError";
l.g.M = function(a, c, d, e) {
  var f = "Assertion failed";
  if (d) {
    var f = f + (": " + d), g = e
  } else {
    a && (f += ": " + a, g = c);
  }
  throw new l.g.Za("" + f, g || []);
};
l.g.assert = function(a, c, d) {
  l.g.J && !a && l.g.M("", null, c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.g.Ic = function(a, c) {
  if (l.g.J) {
    throw new l.g.Za("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  }
};
l.g.Mh = function(a, c, d) {
  l.g.J && !l.isNumber(a) && l.g.M("Expected number but got %s: %s.", [l.F(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.g.Ph = function(a, c, d) {
  l.g.J && !l.isString(a) && l.g.M("Expected string but got %s: %s.", [l.F(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.g.Kh = function(a, c, d) {
  l.g.J && !l.isFunction(a) && l.g.M("Expected function but got %s: %s.", [l.F(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.g.Nh = function(a, c, d) {
  l.g.J && !l.isObject(a) && l.g.M("Expected object but got %s: %s.", [l.F(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.g.Hh = function(a, c, d) {
  l.g.J && !l.isArray(a) && l.g.M("Expected array but got %s: %s.", [l.F(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.g.Ih = function(a, c, d) {
  l.g.J && !l.Je(a) && l.g.M("Expected boolean but got %s: %s.", [l.F(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.g.Jh = function(a, c, d) {
  !l.g.J || l.isObject(a) && a.nodeType == l.Dc.He.Ge || l.g.M("Expected Element but got %s: %s.", [l.F(a), a], c, Array.prototype.slice.call(arguments, 2));
  return a;
};
l.g.Lh = function(a, c, d, e) {
  !l.g.J || a instanceof c || l.g.M("instanceof check failed.", null, d, Array.prototype.slice.call(arguments, 3));
  return a;
};
l.g.Oh = function() {
  for (var a in Object.prototype) {
    l.g.Ic(a + " should not be enumerable in Object.prototype.");
  }
};
l.a = {};
l.N = l.qd;
l.a.xj = function(a) {
  return a[a.length - 1];
};
l.a.k = Array.prototype;
l.a.indexOf = l.N && l.a.k.indexOf ? function(a, c, d) {
  return l.a.k.indexOf.call(a, c, d);
} : function(a, c, d) {
  d = null == d ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
  if (l.isString(a)) {
    return l.isString(c) && 1 == c.length ? a.indexOf(c, d) : -1;
  }
  for (;d < a.length;d++) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return-1;
};
l.a.lastIndexOf = l.N && l.a.k.lastIndexOf ? function(a, c, d) {
  return l.a.k.lastIndexOf.call(a, c, null == d ? a.length - 1 : d);
} : function(a, c, d) {
  d = null == d ? a.length - 1 : d;
  0 > d && (d = Math.max(0, a.length + d));
  if (l.isString(a)) {
    return l.isString(c) && 1 == c.length ? a.lastIndexOf(c, d) : -1;
  }
  for (;0 <= d;d--) {
    if (d in a && a[d] === c) {
      return d;
    }
  }
  return-1;
};
l.a.forEach = l.N && l.a.k.forEach ? function(a, c, d) {
  l.a.k.forEach.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = l.isString(a) ? a.split("") : a, g = 0;g < e;g++) {
    g in f && c.call(d, f[g], g, a);
  }
};
l.a.ce = function(a, c, d) {
  for (var e = a.length, f = l.isString(a) ? a.split("") : a, e = e - 1;0 <= e;--e) {
    e in f && c.call(d, f[e], e, a);
  }
};
l.a.filter = l.N && l.a.k.filter ? function(a, c, d) {
  return l.a.k.filter.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = [], g = 0, h = l.isString(a) ? a.split("") : a, k = 0;k < e;k++) {
    if (k in h) {
      var n = h[k];
      c.call(d, n, k, a) && (f[g++] = n);
    }
  }
  return f;
};
l.a.map = l.N && l.a.k.map ? function(a, c, d) {
  return l.a.k.map.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = Array(e), g = l.isString(a) ? a.split("") : a, h = 0;h < e;h++) {
    h in g && (f[h] = c.call(d, g[h], h, a));
  }
  return f;
};
l.a.reduce = l.N && l.a.k.reduce ? function(a, c, d, e) {
  e && (c = l.bind(c, e));
  return l.a.k.reduce.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  l.a.forEach(a, function(d, h) {
    f = c.call(e, f, d, h, a);
  });
  return f;
};
l.a.reduceRight = l.N && l.a.k.reduceRight ? function(a, c, d, e) {
  e && (c = l.bind(c, e));
  return l.a.k.reduceRight.call(a, c, d);
} : function(a, c, d, e) {
  var f = d;
  l.a.ce(a, function(d, h) {
    f = c.call(e, f, d, h, a);
  });
  return f;
};
l.a.some = l.N && l.a.k.some ? function(a, c, d) {
  return l.a.k.some.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = l.isString(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && c.call(d, f[g], g, a)) {
      return!0;
    }
  }
  return!1;
};
l.a.every = l.N && l.a.k.every ? function(a, c, d) {
  return l.a.k.every.call(a, c, d);
} : function(a, c, d) {
  for (var e = a.length, f = l.isString(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && !c.call(d, f[g], g, a)) {
      return!1;
    }
  }
  return!0;
};
l.a.count = function(a, c, d) {
  var e = 0;
  l.a.forEach(a, function(a, g, h) {
    c.call(d, a, g, h) && ++e;
  }, d);
  return e;
};
l.a.find = function(a, c, d) {
  c = l.a.jc(a, c, d);
  return 0 > c ? null : l.isString(a) ? a.charAt(c) : a[c];
};
l.a.jc = function(a, c, d) {
  for (var e = a.length, f = l.isString(a) ? a.split("") : a, g = 0;g < e;g++) {
    if (g in f && c.call(d, f[g], g, a)) {
      return g;
    }
  }
  return-1;
};
l.a.ui = function(a, c, d) {
  c = l.a.ae(a, c, d);
  return 0 > c ? null : l.isString(a) ? a.charAt(c) : a[c];
};
l.a.ae = function(a, c, d) {
  for (var e = a.length, f = l.isString(a) ? a.split("") : a, e = e - 1;0 <= e;e--) {
    if (e in f && c.call(d, f[e], e, a)) {
      return e;
    }
  }
  return-1;
};
l.a.contains = function(a, c) {
  return 0 <= l.a.indexOf(a, c);
};
l.a.B = function(a) {
  return 0 == a.length;
};
l.a.clear = function(a) {
  if (!l.isArray(a)) {
    for (var c = a.length - 1;0 <= c;c--) {
      delete a[c];
    }
  }
  a.length = 0;
};
l.a.Si = function(a, c) {
  l.a.contains(a, c) || a.push(c);
};
l.a.mc = function(a, c, d) {
  l.a.splice(a, d, 0, c);
};
l.a.Ti = function(a, c, d) {
  l.sc(l.a.splice, a, d, 0).apply(null, c);
};
l.a.insertBefore = function(a, c, d) {
  var e;
  2 == arguments.length || 0 > (e = l.a.indexOf(a, d)) ? a.push(c) : l.a.mc(a, c, e);
};
l.a.remove = function(a, c) {
  var d = l.a.indexOf(a, c), e;
  (e = 0 <= d) && l.a.Ra(a, d);
  return e;
};
l.a.Ra = function(a, c) {
  return 1 == l.a.k.splice.call(a, c, 1).length;
};
l.a.Bj = function(a, c, d) {
  c = l.a.jc(a, c, d);
  return 0 <= c ? (l.a.Ra(a, c), !0) : !1;
};
l.a.concat = function(a) {
  return l.a.k.concat.apply(l.a.k, arguments);
};
l.a.W = function(a) {
  var c = a.length;
  if (0 < c) {
    for (var d = Array(c), e = 0;e < c;e++) {
      d[e] = a[e];
    }
    return d;
  }
  return[];
};
l.a.clone = l.a.W;
l.a.extend = function(a, c) {
  for (var d = 1;d < arguments.length;d++) {
    var e = arguments[d], f;
    if (l.isArray(e) || (f = l.s(e)) && Object.prototype.hasOwnProperty.call(e, "callee")) {
      a.push.apply(a, e);
    } else {
      if (f) {
        for (var g = a.length, h = e.length, k = 0;k < h;k++) {
          a[g + k] = e[k];
        }
      } else {
        a.push(e);
      }
    }
  }
};
l.a.splice = function(a, c, d, e) {
  return l.a.k.splice.apply(a, l.a.slice(arguments, 1));
};
l.a.slice = function(a, c, d) {
  return 2 >= arguments.length ? l.a.k.slice.call(a, c) : l.a.k.slice.call(a, c, d);
};
l.a.de = function(a, c, d) {
  c = c || a;
  d = d || function() {
    return l.isObject(h) ? "o" + l.rd(h) : (typeof h).charAt(0) + h;
  };
  for (var e = {}, f = 0, g = 0;g < a.length;) {
    var h = a[g++], k = d(h);
    Object.prototype.hasOwnProperty.call(e, k) || (e[k] = !0, c[f++] = h);
  }
  c.length = f;
};
l.a.hc = function(a, c, d) {
  return l.a.ic(a, d || l.a.X, !1, c);
};
l.a.Sh = function(a, c, d) {
  return l.a.ic(a, c, !0, void 0, d);
};
l.a.ic = function(a, c, d, e, f) {
  for (var g = 0, h = a.length, k;g < h;) {
    var n = g + h >> 1, p;
    p = d ? c.call(f, a[n], n, a) : c(e, a[n]);
    0 < p ? g = n + 1 : (h = n, k = !p);
  }
  return k ? g : ~g;
};
l.a.sort = function(a, c) {
  l.a.k.sort.call(a, c || l.a.X);
};
l.a.Mj = function(a, c) {
  for (var d = 0;d < a.length;d++) {
    a[d] = {index:d, value:a[d]};
  }
  var e = c || l.a.X;
  l.a.sort(a, function(a, c) {
    return e(a.value, c.value) || a.index - c.index;
  });
  for (d = 0;d < a.length;d++) {
    a[d] = a[d].value;
  }
};
l.a.Kj = function(a, c, d) {
  var e = d || l.a.X;
  l.a.sort(a, function(a, d) {
    return e(a[c], d[c]);
  });
};
l.a.Rb = function(a, c, d) {
  c = c || l.a.X;
  for (var e = 1;e < a.length;e++) {
    var f = c(a[e - 1], a[e]);
    if (0 < f || 0 == f && d) {
      return!1;
    }
  }
  return!0;
};
l.a.equals = function(a, c, d) {
  if (!l.s(a) || !l.s(c) || a.length != c.length) {
    return!1;
  }
  var e = a.length;
  d = d || l.a.Od;
  for (var f = 0;f < e;f++) {
    if (!d(a[f], c[f])) {
      return!1;
    }
  }
  return!0;
};
l.a.compare = function(a, c, d) {
  return l.a.equals(a, c, d);
};
l.a.gi = function(a, c, d) {
  d = d || l.a.X;
  for (var e = Math.min(a.length, c.length), f = 0;f < e;f++) {
    var g = d(a[f], c[f]);
    if (0 != g) {
      return g;
    }
  }
  return l.a.X(a.length, c.length);
};
l.a.X = function(a, c) {
  return a > c ? 1 : a < c ? -1 : 0;
};
l.a.Od = function(a, c) {
  return a === c;
};
l.a.Qh = function(a, c, d) {
  d = l.a.hc(a, c, d);
  return 0 > d ? (l.a.mc(a, c, -(d + 1)), !0) : !1;
};
l.a.Rh = function(a, c, d) {
  c = l.a.hc(a, c, d);
  return 0 <= c ? l.a.Ra(a, c) : !1;
};
l.a.Th = function(a, c, d) {
  for (var e = {}, f = 0;f < a.length;f++) {
    var g = a[f], h = c.call(d, g, f, a);
    l.S(h) && (e[h] || (e[h] = [])).push(g);
  }
  return e;
};
l.a.vg = function(a, c, d) {
  var e = {};
  l.a.forEach(a, function(f, g) {
    e[c.call(d, f, g, a)] = f;
  });
  return e;
};
l.a.Ma = function(a, c, d) {
  var e = [], f = 0, g = a;
  d = d || 1;
  void 0 !== c && (f = a, g = c);
  if (0 > d * (g - f)) {
    return[];
  }
  if (0 < d) {
    for (a = f;a < g;a += d) {
      e.push(a);
    }
  } else {
    for (a = f;a > g;a += d) {
      e.push(a);
    }
  }
  return e;
};
l.a.repeat = function(a, c) {
  for (var d = [], e = 0;e < c;e++) {
    d[e] = a;
  }
  return d;
};
l.a.be = function(a) {
  for (var c = [], d = 0;d < arguments.length;d++) {
    var e = arguments[d];
    l.isArray(e) ? c.push.apply(c, l.a.be.apply(null, e)) : c.push(e);
  }
  return c;
};
l.a.rotate = function(a, c) {
  a.length && (c %= a.length, 0 < c ? l.a.k.unshift.apply(a, a.splice(-c, c)) : 0 > c && l.a.k.push.apply(a, a.splice(0, -c)));
  return a;
};
l.a.mj = function(a, c, d) {
  c = l.a.k.splice.call(a, c, 1);
  l.a.k.splice.call(a, d, 0, c[0]);
};
l.a.zc = function(a) {
  if (!arguments.length) {
    return[];
  }
  for (var c = [], d = 0;;d++) {
    for (var e = [], f = 0;f < arguments.length;f++) {
      var g = arguments[f];
      if (d >= g.length) {
        return c;
      }
      e.push(g[d]);
    }
    c.push(e);
  }
};
l.a.Ij = function(a, c) {
  for (var d = c || Math.random, e = a.length - 1;0 < e;e--) {
    var f = Math.floor(d() * (e + 1)), g = a[e];
    a[e] = a[f];
    a[f] = g;
  }
};
l.l = {};
l.l.constant = function(a) {
  return function() {
    return a;
  };
};
l.l.Ng = l.l.constant(!1);
l.l.ph = l.l.constant(!0);
l.l.gh = l.l.constant(null);
l.l.identity = function(a) {
  return a;
};
l.l.error = function(a) {
  return function() {
    throw Error(a);
  };
};
l.l.Ic = function(a) {
  return function() {
    throw a;
  };
};
l.l.kj = function(a, c) {
  c = c || 0;
  return function() {
    return a.apply(this, Array.prototype.slice.call(arguments, 0, c));
  };
};
l.l.rj = function(a) {
  return function() {
    return arguments[a];
  };
};
l.l.bk = function(a, c) {
  return l.l.gf(a, l.l.constant(c));
};
l.l.hi = function(a, c) {
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
l.l.gf = function(a) {
  var c = arguments, d = c.length;
  return function() {
    for (var a, f = 0;f < d;f++) {
      a = c[f].apply(this, arguments);
    }
    return a;
  };
};
l.l.zh = function(a) {
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
l.l.uj = function(a) {
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
l.l.qj = function(a) {
  return function() {
    return!a.apply(this, arguments);
  };
};
l.l.create = function(a, c) {
  var d = function() {
  };
  d.prototype = a.prototype;
  d = new d;
  a.apply(d, Array.prototype.slice.call(arguments, 1));
  return d;
};
l.l.ef = !0;
l.l.Wh = function(a) {
  var c = !1, d;
  return function() {
    if (!l.l.ef) {
      return a();
    }
    c || (d = a(), c = !0);
    return d;
  };
};
l.h = {};
l.h.zj = function(a) {
  return Math.floor(Math.random() * a);
};
l.h.Zj = function(a, c) {
  return a + Math.random() * (c - a);
};
l.h.bi = function(a, c, d) {
  return Math.min(Math.max(a, c), d);
};
l.h.af = function(a, c) {
  var d = a % c;
  return 0 > d * c ? d + c : d;
};
l.h.jj = function(a, c, d) {
  return a + d * (c - a);
};
l.h.nj = function(a, c, d) {
  return Math.abs(a - c) <= (d || 1E-6);
};
l.h.Gb = function(a) {
  return l.h.af(a, 360);
};
l.h.Jc = function(a) {
  return a * Math.PI / 180;
};
l.h.Ze = function(a) {
  return 180 * a / Math.PI;
};
l.h.Ch = function(a, c) {
  return c * Math.cos(l.h.Jc(a));
};
l.h.Dh = function(a, c) {
  return c * Math.sin(l.h.Jc(a));
};
l.h.Ah = function(a, c, d, e) {
  return l.h.Gb(l.h.Ze(Math.atan2(e - c, d - a)));
};
l.h.Bh = function(a, c) {
  var d = l.h.Gb(c) - l.h.Gb(a);
  180 < d ? d -= 360 : -180 >= d && (d = 360 + d);
  return d;
};
l.h.Jj = function(a) {
  return 0 == a ? 0 : 0 > a ? -1 : 1;
};
l.h.lj = function(a, c, d, e) {
  d = d || function(a, c) {
    return a == c;
  };
  e = e || function(c) {
    return a[c];
  };
  for (var f = a.length, g = c.length, h = [], k = 0;k < f + 1;k++) {
    h[k] = [], h[k][0] = 0;
  }
  for (var n = 0;n < g + 1;n++) {
    h[0][n] = 0;
  }
  for (k = 1;k <= f;k++) {
    for (n = 1;n <= g;n++) {
      d(a[k - 1], c[n - 1]) ? h[k][n] = h[k - 1][n - 1] + 1 : h[k][n] = Math.max(h[k - 1][n], h[k][n - 1]);
    }
  }
  for (var p = [], k = f, n = g;0 < k && 0 < n;) {
    d(a[k - 1], c[n - 1]) ? (p.unshift(e(k - 1, n - 1)), k--, n--) : h[k - 1][n] > h[k][n - 1] ? k-- : n--;
  }
  return p;
};
l.h.bc = function(a) {
  return l.a.reduce(arguments, function(a, d) {
    return a + d;
  }, 0);
};
l.h.Gd = function(a) {
  return l.h.bc.apply(null, arguments) / arguments.length;
};
l.h.bf = function(a) {
  var c = arguments.length;
  if (2 > c) {
    return 0;
  }
  var d = l.h.Gd.apply(null, arguments);
  return l.h.bc.apply(null, l.a.map(arguments, function(a) {
    return Math.pow(a - d, 2);
  })) / (c - 1);
};
l.h.Nj = function(a) {
  return Math.sqrt(l.h.bf.apply(null, arguments));
};
l.h.bj = function(a) {
  return isFinite(a) && 0 == a % 1;
};
l.h.$i = function(a) {
  return isFinite(a) && !isNaN(a);
};
l.h.Dj = function(a, c) {
  return Math.floor(a + (c || 2E-15));
};
l.h.Cj = function(a, c) {
  return Math.ceil(a - (c || 2E-15));
};
l.d = {};
l.d.t = "StopIteration" in l.global ? l.global.StopIteration : Error("StopIteration");
l.d.n = function() {
};
l.d.n.prototype.next = function() {
  throw l.d.t;
};
l.d.n.prototype.pb = function() {
  return this;
};
l.d.r = function(a) {
  if (a instanceof l.d.n) {
    return a;
  }
  if ("function" == typeof a.pb) {
    return a.pb(!1);
  }
  if (l.s(a)) {
    var c = 0, d = new l.d.n;
    d.next = function() {
      for (;;) {
        if (c >= a.length) {
          throw l.d.t;
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
l.d.forEach = function(a, c, d) {
  if (l.s(a)) {
    try {
      l.a.forEach(a, c, d);
    } catch (e) {
      if (e !== l.d.t) {
        throw e;
      }
    }
  } else {
    a = l.d.r(a);
    try {
      for (;;) {
        c.call(d, a.next(), void 0, a);
      }
    } catch (f) {
      if (f !== l.d.t) {
        throw f;
      }
    }
  }
};
l.d.filter = function(a, c, d) {
  var e = l.d.r(a);
  a = new l.d.n;
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
l.d.Ma = function(a, c, d) {
  var e = 0, f = a, g = d || 1;
  1 < arguments.length && (e = a, f = c);
  if (0 == g) {
    throw Error("Range step argument must not be zero");
  }
  var h = new l.d.n;
  h.next = function() {
    if (0 < g && e >= f || 0 > g && e <= f) {
      throw l.d.t;
    }
    var a = e;
    e += g;
    return a;
  };
  return h;
};
l.d.join = function(a, c) {
  return l.d.W(a).join(c);
};
l.d.map = function(a, c, d) {
  var e = l.d.r(a);
  a = new l.d.n;
  a.next = function() {
    for (;;) {
      var a = e.next();
      return c.call(d, a, void 0, e);
    }
  };
  return a;
};
l.d.reduce = function(a, c, d, e) {
  var f = d;
  l.d.forEach(a, function(a) {
    f = c.call(e, f, a);
  });
  return f;
};
l.d.some = function(a, c, d) {
  a = l.d.r(a);
  try {
    for (;;) {
      if (c.call(d, a.next(), void 0, a)) {
        return!0;
      }
    }
  } catch (e) {
    if (e !== l.d.t) {
      throw e;
    }
  }
  return!1;
};
l.d.every = function(a, c, d) {
  a = l.d.r(a);
  try {
    for (;;) {
      if (!c.call(d, a.next(), void 0, a)) {
        return!1;
      }
    }
  } catch (e) {
    if (e !== l.d.t) {
      throw e;
    }
  }
  return!0;
};
l.d.ye = function(a) {
  var c = l.d.r(arguments), d = new l.d.n, e = null;
  d.next = function() {
    for (;;) {
      if (null == e) {
        var a = c.next();
        e = l.d.r(a);
      }
      try {
        return e.next();
      } catch (d) {
        if (d !== l.d.t) {
          throw d;
        }
        e = null;
      }
    }
  };
  return d;
};
l.d.ai = function(a) {
  return l.d.ye.apply(void 0, a);
};
l.d.qi = function(a, c, d) {
  var e = l.d.r(a);
  a = new l.d.n;
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
l.d.Qj = function(a, c, d) {
  var e = l.d.r(a);
  a = new l.d.n;
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
        throw l.d.t;
      }
    }
  };
  return a;
};
l.d.W = function(a) {
  if (l.s(a)) {
    return l.a.W(a);
  }
  a = l.d.r(a);
  var c = [];
  l.d.forEach(a, function(a) {
    c.push(a);
  });
  return c;
};
l.d.equals = function(a, c) {
  var d = l.d.ze({}, a, c);
  return l.d.every(d, function(a) {
    return a[0] == a[1];
  });
};
l.d.pe = function(a, c) {
  try {
    return l.d.r(a).next();
  } catch (d) {
    if (d != l.d.t) {
      throw d;
    }
    return c;
  }
};
l.d.product = function(a) {
  if (l.a.some(arguments, function(a) {
    return!a.length;
  }) || !arguments.length) {
    return new l.d.n;
  }
  var c = new l.d.n, d = arguments, e = l.a.repeat(0, d.length);
  c.next = function() {
    if (e) {
      for (var a = l.a.map(e, function(a, c) {
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
    throw l.d.t;
  };
  return c;
};
l.d.oi = function(a) {
  var c = l.d.r(a), d = [], e = 0;
  a = new l.d.n;
  var f = !1;
  a.next = function() {
    var a = null;
    if (!f) {
      try {
        return a = c.next(), d.push(a), a;
      } catch (h) {
        if (h != l.d.t || l.a.B(d)) {
          throw h;
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
l.d.count = function(a, c) {
  var d = a || 0, e = l.S(c) ? c : 1, f = new l.d.n;
  f.next = function() {
    var a = d;
    d += e;
    return a;
  };
  return f;
};
l.d.repeat = function(a) {
  var c = new l.d.n;
  c.next = l.l.constant(a);
  return c;
};
l.d.wh = function(a) {
  var c = l.d.r(a), d = 0;
  a = new l.d.n;
  a.next = function() {
    return d += c.next();
  };
  return a;
};
l.d.zc = function(a) {
  var c = arguments, d = new l.d.n;
  if (0 < c.length) {
    var e = l.a.map(c, l.d.r);
    d.next = function() {
      return l.a.map(e, function(a) {
        return a.next();
      });
    };
  }
  return d;
};
l.d.ze = function(a, c) {
  var d = l.a.slice(arguments, 1), e = new l.d.n;
  if (0 < d.length) {
    var f = l.a.map(d, l.d.r);
    e.next = function() {
      var c = !1, d = l.a.map(f, function(d) {
        var e;
        try {
          e = d.next(), c = !0;
        } catch (f) {
          if (f !== l.d.t) {
            throw f;
          }
          e = a;
        }
        return e;
      });
      if (!c) {
        throw l.d.t;
      }
      return d;
    };
  }
  return e;
};
l.d.ii = function(a, c) {
  var d = l.d.r(c);
  return l.d.filter(a, function() {
    return!!d.next();
  });
};
l.d.Ya = function(a, c) {
  this.Wb = l.d.r(a);
  this.Xb = c || l.l.identity;
};
l.Aa(l.d.Ya, l.d.n);
l.d.Ya.prototype.next = function() {
  for (;this.ra == this.Nc;) {
    this.Sa = this.Wb.next(), this.ra = this.Xb(this.Sa);
  }
  this.Nc = this.ra;
  return[this.ra, this.nf(this.Nc)];
};
l.d.Ya.prototype.nf = function(a) {
  for (var c = [];this.ra == a;) {
    c.push(this.Sa);
    try {
      this.Sa = this.Wb.next();
    } catch (d) {
      if (d !== l.d.t) {
        throw d;
      }
      break;
    }
    this.ra = this.Xb(this.Sa);
  }
  return c;
};
l.d.Ni = function(a, c) {
  return new l.d.Ya(a, c);
};
l.d.Rj = function(a, c) {
  var d = l.d.r(a), e = l.isNumber(c) ? c : 2, f = l.a.map(l.a.Ma(e), function() {
    return[];
  }), g = function() {
    var a = d.next();
    l.a.forEach(f, function(c) {
      c.push(a);
    });
  };
  return l.a.map(f, function(a) {
    var c = new l.d.n;
    c.next = function() {
      l.a.B(a) && g();
      return a.shift();
    };
    return c;
  });
};
l.d.ri = function(a, c) {
  return l.d.zc(l.d.count(c), a);
};
l.d.xe = function(a, c) {
  var d = l.d.r(a), e = new l.d.n, f = c;
  e.next = function() {
    if (0 < f--) {
      return d.next();
    }
    throw l.d.t;
  };
  return e;
};
l.d.we = function(a, c) {
  for (var d = l.d.r(a);0 < c--;) {
    l.d.pe(d, null);
  }
  return d;
};
l.d.slice = function(a, c, d) {
  a = l.d.we(a, c);
  l.isNumber(d) && (a = l.d.xe(a, d - c));
  return a;
};
l.d.zd = function(a) {
  var c = [];
  l.a.de(a, c);
  return a.length != c.length;
};
l.d.ud = function(a, c) {
  var d = l.d.W(a), e = l.isNumber(c) ? c : d.length, d = l.a.repeat(d, e), d = l.d.product.apply(void 0, d);
  return l.d.filter(d, function(a) {
    return!l.d.zd(a);
  });
};
l.d.ei = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = l.d.W(a), f = l.d.Ma(e.length), f = l.d.ud(f, c), g = l.d.filter(f, function(a) {
    return l.a.Rb(a);
  }), f = new l.d.n;
  f.next = function() {
    return l.a.map(g.next(), d);
  };
  return f;
};
l.d.fi = function(a, c) {
  function d(a) {
    return e[a];
  }
  var e = l.d.W(a), f = l.a.Ma(e.length), f = l.a.repeat(f, c), f = l.d.product.apply(void 0, f), g = l.d.filter(f, function(a) {
    return l.a.Rb(a);
  }), f = new l.d.n;
  f.next = function() {
    return l.a.map(g.next(), d);
  };
  return f;
};
l.object = {};
l.object.forEach = function(a, c, d) {
  for (var e in a) {
    c.call(d, a[e], e, a);
  }
};
l.object.filter = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    c.call(d, a[f], f, a) && (e[f] = a[f]);
  }
  return e;
};
l.object.map = function(a, c, d) {
  var e = {}, f;
  for (f in a) {
    e[f] = c.call(d, a[f], f, a);
  }
  return e;
};
l.object.some = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return!0;
    }
  }
  return!1;
};
l.object.every = function(a, c, d) {
  for (var e in a) {
    if (!c.call(d, a[e], e, a)) {
      return!1;
    }
  }
  return!0;
};
l.object.Z = function(a) {
  var c = 0, d;
  for (d in a) {
    c++;
  }
  return c;
};
l.object.xi = function(a) {
  for (var c in a) {
    return c;
  }
};
l.object.yi = function(a) {
  for (var c in a) {
    return a[c];
  }
};
l.object.contains = function(a, c) {
  return l.object.ga(a, c);
};
l.object.q = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = a[e];
  }
  return c;
};
l.object.u = function(a) {
  var c = [], d = 0, e;
  for (e in a) {
    c[d++] = e;
  }
  return c;
};
l.object.Ki = function(a, c) {
  for (var d = l.s(c), e = d ? c : arguments, d = d ? 0 : 1;d < e.length && (a = a[e[d]], l.S(a));d++) {
  }
  return a;
};
l.object.da = function(a, c) {
  return c in a;
};
l.object.ga = function(a, c) {
  for (var d in a) {
    if (a[d] == c) {
      return!0;
    }
  }
  return!1;
};
l.object.kg = function(a, c, d) {
  for (var e in a) {
    if (c.call(d, a[e], e, a)) {
      return e;
    }
  }
};
l.object.vi = function(a, c, d) {
  return(c = l.object.kg(a, c, d)) && a[c];
};
l.object.B = function(a) {
  for (var c in a) {
    return!1;
  }
  return!0;
};
l.object.clear = function(a) {
  for (var c in a) {
    delete a[c];
  }
};
l.object.remove = function(a, c) {
  var d;
  (d = c in a) && delete a[c];
  return d;
};
l.object.add = function(a, c, d) {
  if (c in a) {
    throw Error('The object already contains the key "' + c + '"');
  }
  l.object.set(a, c, d);
};
l.object.get = function(a, c, d) {
  return c in a ? a[c] : d;
};
l.object.set = function(a, c, d) {
  a[c] = d;
};
l.object.Gj = function(a, c, d) {
  return c in a ? a[c] : a[c] = d;
};
l.object.clone = function(a) {
  var c = {}, d;
  for (d in a) {
    c[d] = a[d];
  }
  return c;
};
l.object.sf = function(a) {
  var c = l.F(a);
  if ("object" == c || "array" == c) {
    if (a.clone) {
      return a.clone();
    }
    var c = "array" == c ? [] : {}, d;
    for (d in a) {
      c[d] = l.object.sf(a[d]);
    }
    return c;
  }
  return a;
};
l.object.wg = function(a) {
  var c = {}, d;
  for (d in a) {
    c[a[d]] = d;
  }
  return c;
};
l.object.od = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
l.object.extend = function(a, c) {
  for (var d, e, f = 1;f < arguments.length;f++) {
    e = arguments[f];
    for (d in e) {
      a[d] = e[d];
    }
    for (var g = 0;g < l.object.od.length;g++) {
      d = l.object.od[g], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d]);
    }
  }
};
l.object.create = function(a) {
  var c = arguments.length;
  if (1 == c && l.isArray(arguments[0])) {
    return l.object.create.apply(null, arguments[0]);
  }
  if (c % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var d = {}, e = 0;e < c;e += 2) {
    d[arguments[e]] = arguments[e + 1];
  }
  return d;
};
l.object.gg = function(a) {
  var c = arguments.length;
  if (1 == c && l.isArray(arguments[0])) {
    return l.object.gg.apply(null, arguments[0]);
  }
  for (var d = {}, e = 0;e < c;e++) {
    d[arguments[e]] = !0;
  }
  return d;
};
l.object.mi = function(a) {
  var c = a;
  Object.isFrozen && !Object.isFrozen(a) && (c = Object.create(a), Object.freeze(c));
  return c;
};
l.object.aj = function(a) {
  return!!Object.isFrozen && Object.isFrozen(a);
};
l.f = {};
l.f.v = function(a, c) {
  this.w = {};
  this.o = [];
  this.pa = this.m = 0;
  var d = arguments.length;
  if (1 < d) {
    if (d % 2) {
      throw Error("Uneven number of arguments");
    }
    for (var e = 0;e < d;e += 2) {
      this.set(arguments[e], arguments[e + 1]);
    }
  } else {
    a && this.Ke(a);
  }
};
b = l.f.v.prototype;
b.Z = function() {
  return this.m;
};
b.q = function() {
  this.ba();
  for (var a = [], c = 0;c < this.o.length;c++) {
    a.push(this.w[this.o[c]]);
  }
  return a;
};
b.u = function() {
  this.ba();
  return this.o.concat();
};
b.da = function(a) {
  return l.f.v.Y(this.w, a);
};
b.ga = function(a) {
  for (var c = 0;c < this.o.length;c++) {
    var d = this.o[c];
    if (l.f.v.Y(this.w, d) && this.w[d] == a) {
      return!0;
    }
  }
  return!1;
};
b.equals = function(a, c) {
  if (this === a) {
    return!0;
  }
  if (this.m != a.Z()) {
    return!1;
  }
  var d = c || l.f.v.ve;
  this.ba();
  for (var e, f = 0;e = this.o[f];f++) {
    if (!d(this.get(e), a.get(e))) {
      return!1;
    }
  }
  return!0;
};
l.f.v.ve = function(a, c) {
  return a === c;
};
b = l.f.v.prototype;
b.B = function() {
  return 0 == this.m;
};
b.clear = function() {
  this.w = {};
  this.pa = this.m = this.o.length = 0;
};
b.remove = function(a) {
  return l.f.v.Y(this.w, a) ? (delete this.w[a], this.m--, this.pa++, this.o.length > 2 * this.m && this.ba(), !0) : !1;
};
b.ba = function() {
  if (this.m != this.o.length) {
    for (var a = 0, c = 0;a < this.o.length;) {
      var d = this.o[a];
      l.f.v.Y(this.w, d) && (this.o[c++] = d);
      a++;
    }
    this.o.length = c;
  }
  if (this.m != this.o.length) {
    for (var e = {}, c = a = 0;a < this.o.length;) {
      d = this.o[a], l.f.v.Y(e, d) || (this.o[c++] = d, e[d] = 1), a++;
    }
    this.o.length = c;
  }
};
b.get = function(a, c) {
  return l.f.v.Y(this.w, a) ? this.w[a] : c;
};
b.set = function(a, c) {
  l.f.v.Y(this.w, a) || (this.m++, this.o.push(a), this.pa++);
  this.w[a] = c;
};
b.Ke = function(a) {
  var c;
  a instanceof l.f.v ? (c = a.u(), a = a.q()) : (c = l.object.u(a), a = l.object.q(a));
  for (var d = 0;d < c.length;d++) {
    this.set(c[d], a[d]);
  }
};
b.clone = function() {
  return new l.f.v(this);
};
b.wg = function() {
  for (var a = new l.f.v, c = 0;c < this.o.length;c++) {
    var d = this.o[c];
    a.set(this.w[d], d);
  }
  return a;
};
b.vg = function() {
  this.ba();
  for (var a = {}, c = 0;c < this.o.length;c++) {
    var d = this.o[c];
    a[d] = this.w[d];
  }
  return a;
};
b.pb = function(a) {
  this.ba();
  var c = 0, d = this.o, e = this.w, f = this.pa, g = this, h = new l.d.n;
  h.next = function() {
    for (;;) {
      if (f != g.pa) {
        throw Error("The map has changed since the iterator was created");
      }
      if (c >= d.length) {
        throw l.d.t;
      }
      var h = d[c++];
      return a ? h : e[h];
    }
  };
  return h;
};
l.f.v.Y = function(a, c) {
  return Object.prototype.hasOwnProperty.call(a, c);
};
l.f.Z = function(a) {
  return "function" == typeof a.Z ? a.Z() : l.s(a) || l.isString(a) ? a.length : l.object.Z(a);
};
l.f.q = function(a) {
  if ("function" == typeof a.q) {
    return a.q();
  }
  if (l.isString(a)) {
    return a.split("");
  }
  if (l.s(a)) {
    for (var c = [], d = a.length, e = 0;e < d;e++) {
      c.push(a[e]);
    }
    return c;
  }
  return l.object.q(a);
};
l.f.u = function(a) {
  if ("function" == typeof a.u) {
    return a.u();
  }
  if ("function" != typeof a.q) {
    if (l.s(a) || l.isString(a)) {
      var c = [];
      a = a.length;
      for (var d = 0;d < a;d++) {
        c.push(d);
      }
      return c;
    }
    return l.object.u(a);
  }
};
l.f.contains = function(a, c) {
  return "function" == typeof a.contains ? a.contains(c) : "function" == typeof a.ga ? a.ga(c) : l.s(a) || l.isString(a) ? l.a.contains(a, c) : l.object.ga(a, c);
};
l.f.B = function(a) {
  return "function" == typeof a.B ? a.B() : l.s(a) || l.isString(a) ? l.a.B(a) : l.object.B(a);
};
l.f.clear = function(a) {
  "function" == typeof a.clear ? a.clear() : l.s(a) ? l.a.clear(a) : l.object.clear(a);
};
l.f.forEach = function(a, c, d) {
  if ("function" == typeof a.forEach) {
    a.forEach(c, d);
  } else {
    if (l.s(a) || l.isString(a)) {
      l.a.forEach(a, c, d);
    } else {
      for (var e = l.f.u(a), f = l.f.q(a), g = f.length, h = 0;h < g;h++) {
        c.call(d, f[h], e && e[h], a);
      }
    }
  }
};
l.f.filter = function(a, c, d) {
  if ("function" == typeof a.filter) {
    return a.filter(c, d);
  }
  if (l.s(a) || l.isString(a)) {
    return l.a.filter(a, c, d);
  }
  var e, f = l.f.u(a), g = l.f.q(a), h = g.length;
  if (f) {
    e = {};
    for (var k = 0;k < h;k++) {
      c.call(d, g[k], f[k], a) && (e[f[k]] = g[k]);
    }
  } else {
    for (e = [], k = 0;k < h;k++) {
      c.call(d, g[k], void 0, a) && e.push(g[k]);
    }
  }
  return e;
};
l.f.map = function(a, c, d) {
  if ("function" == typeof a.map) {
    return a.map(c, d);
  }
  if (l.s(a) || l.isString(a)) {
    return l.a.map(a, c, d);
  }
  var e, f = l.f.u(a), g = l.f.q(a), h = g.length;
  if (f) {
    e = {};
    for (var k = 0;k < h;k++) {
      e[f[k]] = c.call(d, g[k], f[k], a);
    }
  } else {
    for (e = [], k = 0;k < h;k++) {
      e[k] = c.call(d, g[k], void 0, a);
    }
  }
  return e;
};
l.f.some = function(a, c, d) {
  if ("function" == typeof a.some) {
    return a.some(c, d);
  }
  if (l.s(a) || l.isString(a)) {
    return l.a.some(a, c, d);
  }
  for (var e = l.f.u(a), f = l.f.q(a), g = f.length, h = 0;h < g;h++) {
    if (c.call(d, f[h], e && e[h], a)) {
      return!0;
    }
  }
  return!1;
};
l.f.every = function(a, c, d) {
  if ("function" == typeof a.every) {
    return a.every(c, d);
  }
  if (l.s(a) || l.isString(a)) {
    return l.a.every(a, c, d);
  }
  for (var e = l.f.u(a), f = l.f.q(a), g = f.length, h = 0;h < g;h++) {
    if (!c.call(d, f[h], e && e[h], a)) {
      return!1;
    }
  }
  return!0;
};
l.userAgent = {};
l.userAgent.dd = !1;
l.userAgent.cd = !1;
l.userAgent.kd = !1;
l.userAgent.Kb = !1;
l.userAgent.jd = !1;
l.userAgent.Zd = !1;
l.userAgent.fa = l.userAgent.dd || l.userAgent.cd || l.userAgent.Kb || l.userAgent.kd || l.userAgent.jd;
l.userAgent.mb = function() {
  return l.global.navigator ? l.global.navigator.userAgent : null;
};
l.userAgent.Pa = function() {
  return l.global.navigator;
};
l.userAgent.og = function() {
  l.userAgent.qa = !1;
  l.userAgent.nb = !1;
  l.userAgent.Qa = !1;
  l.userAgent.ac = !1;
  l.userAgent.$b = !1;
  var a;
  if (!l.userAgent.fa && (a = l.userAgent.mb())) {
    var c = l.userAgent.Pa();
    l.userAgent.qa = l.b.jb(a, "Opera");
    l.userAgent.nb = !l.userAgent.qa && (l.b.contains(a, "MSIE") || l.b.contains(a, "Trident"));
    l.userAgent.Qa = !l.userAgent.qa && l.b.contains(a, "WebKit");
    l.userAgent.ac = l.userAgent.Qa && l.b.contains(a, "Mobile");
    l.userAgent.$b = !l.userAgent.qa && !l.userAgent.Qa && !l.userAgent.nb && "Gecko" == c.product;
  }
};
l.userAgent.fa || l.userAgent.og();
l.userAgent.pf = l.userAgent.fa ? l.userAgent.jd : l.userAgent.qa;
l.userAgent.bb = l.userAgent.fa ? l.userAgent.dd : l.userAgent.nb;
l.userAgent.of = l.userAgent.fa ? l.userAgent.cd : l.userAgent.$b;
l.userAgent.Ib = l.userAgent.fa ? l.userAgent.kd || l.userAgent.Kb : l.userAgent.Qa;
l.userAgent.dh = l.userAgent.Kb || l.userAgent.ac;
l.userAgent.mh = l.userAgent.Ib;
l.userAgent.hg = function() {
  var a = l.userAgent.Pa();
  return a && a.platform || "";
};
l.userAgent.ob = l.userAgent.hg();
l.userAgent.hd = !1;
l.userAgent.ld = !1;
l.userAgent.gd = !1;
l.userAgent.md = !1;
l.userAgent.bd = !1;
l.userAgent.fd = !1;
l.userAgent.ed = !1;
l.userAgent.R = l.userAgent.hd || l.userAgent.ld || l.userAgent.gd || l.userAgent.md || l.userAgent.bd || l.userAgent.fd || l.userAgent.ed;
l.userAgent.ng = function() {
  l.userAgent.Ld = l.b.contains(l.userAgent.ob, "Mac");
  l.userAgent.Md = l.b.contains(l.userAgent.ob, "Win");
  l.userAgent.Kd = l.b.contains(l.userAgent.ob, "Linux");
  l.userAgent.Nd = !!l.userAgent.Pa() && l.b.contains(l.userAgent.Pa().appVersion || "", "X11");
  var a = l.userAgent.mb();
  l.userAgent.Hd = !!a && l.b.contains(a, "Android");
  l.userAgent.Jd = !!a && l.b.contains(a, "iPhone");
  l.userAgent.Id = !!a && l.b.contains(a, "iPad");
};
l.userAgent.R || l.userAgent.ng();
l.userAgent.Zg = l.userAgent.R ? l.userAgent.hd : l.userAgent.Ld;
l.userAgent.th = l.userAgent.R ? l.userAgent.ld : l.userAgent.Md;
l.userAgent.Ug = l.userAgent.R ? l.userAgent.gd : l.userAgent.Kd;
l.userAgent.uh = l.userAgent.R ? l.userAgent.md : l.userAgent.Nd;
l.userAgent.ANDROID = l.userAgent.R ? l.userAgent.bd : l.userAgent.Hd;
l.userAgent.Sg = l.userAgent.R ? l.userAgent.fd : l.userAgent.Jd;
l.userAgent.Rg = l.userAgent.R ? l.userAgent.ed : l.userAgent.Id;
l.userAgent.ig = function() {
  var a = "", c;
  l.userAgent.pf && l.global.opera ? (a = l.global.opera.version, a = "function" == typeof a ? a() : a) : (l.userAgent.of ? c = /rv\:([^\);]+)(\)|;)/ : l.userAgent.bb ? c = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : l.userAgent.Ib && (c = /WebKit\/(\S+)/), c && (a = (a = c.exec(l.userAgent.mb())) ? a[1] : ""));
  return l.userAgent.bb && (c = l.userAgent.Oc(), c > parseFloat(a)) ? String(c) : a;
};
l.userAgent.Oc = function() {
  var a = l.global.document;
  return a ? a.documentMode : void 0;
};
l.userAgent.VERSION = l.userAgent.ig();
l.userAgent.compare = function(a, c) {
  return l.b.lc(a, c);
};
l.userAgent.nc = {};
l.userAgent.rg = function(a) {
  return l.userAgent.Zd || l.userAgent.nc[a] || (l.userAgent.nc[a] = 0 <= l.b.lc(l.userAgent.VERSION, a));
};
l.userAgent.ij = l.userAgent.rg;
l.userAgent.pg = function(a) {
  return l.userAgent.bb && l.userAgent.wf >= a;
};
l.userAgent.Yi = l.userAgent.pg;
var s = l.global.document;
l.userAgent.wf = s && l.userAgent.bb ? l.userAgent.Oc() || ("CSS1Compat" == s.compatMode ? parseInt(l.userAgent.VERSION, 10) : 5) : void 0;
l.uri = {};
l.uri.c = {};
l.uri.c.sa = {vc:38, EQUAL:61, ie:35, je:63};
l.uri.c.Yb = function(a, c, d, e, f, g, h) {
  var k = "";
  a && (k += a + ":");
  d && (k += "//", c && (k += c + "@"), k += d, e && (k += ":" + e));
  f && (k += f);
  g && (k += "?" + g);
  h && (k += "#" + h);
  return k;
};
l.uri.c.te = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
l.uri.c.j = {na:1, fb:2, U:3, V:4, gb:5, hb:6, Ob:7};
l.uri.c.split = function(a) {
  l.uri.c.re();
  return a.match(l.uri.c.te);
};
l.uri.c.tb = l.userAgent.Ib;
l.uri.c.re = function() {
  if (l.uri.c.tb) {
    l.uri.c.tb = !1;
    var a = l.global.location;
    if (a) {
      var c = a.href;
      if (c && (c = l.uri.c.la(c)) && c != a.hostname) {
        throw l.uri.c.tb = !0, Error();
      }
    }
  }
};
l.uri.c.Va = function(a) {
  return a && decodeURIComponent(a);
};
l.uri.c.ea = function(a, c) {
  return l.uri.c.split(c)[a] || null;
};
l.uri.c.$ = function(a) {
  return l.uri.c.ea(l.uri.c.j.na, a);
};
l.uri.c.Ai = function(a) {
  a = l.uri.c.$(a);
  !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1));
  return a ? a.toLowerCase() : "";
};
l.uri.c.oe = function(a) {
  return l.uri.c.ea(l.uri.c.j.fb, a);
};
l.uri.c.Da = function(a) {
  return l.uri.c.Va(l.uri.c.oe(a));
};
l.uri.c.le = function(a) {
  return l.uri.c.ea(l.uri.c.j.U, a);
};
l.uri.c.la = function(a) {
  return l.uri.c.Va(l.uri.c.le(a));
};
l.uri.c.Ca = function(a) {
  return Number(l.uri.c.ea(l.uri.c.j.V, a)) || null;
};
l.uri.c.ne = function(a) {
  return l.uri.c.ea(l.uri.c.j.gb, a);
};
l.uri.c.aa = function(a) {
  return l.uri.c.Va(l.uri.c.ne(a));
};
l.uri.c.Pb = function(a) {
  return l.uri.c.ea(l.uri.c.j.hb, a);
};
l.uri.c.me = function(a) {
  var c = a.indexOf("#");
  return 0 > c ? null : a.substr(c + 1);
};
l.uri.c.Fj = function(a, c) {
  return l.uri.c.ue(a) + (c ? "#" + c : "");
};
l.uri.c.Ba = function(a) {
  return l.uri.c.Va(l.uri.c.me(a));
};
l.uri.c.wc = function(a) {
  a = l.uri.c.split(a);
  return l.uri.c.Yb(a[l.uri.c.j.na], a[l.uri.c.j.fb], a[l.uri.c.j.U], a[l.uri.c.j.V]);
};
l.uri.c.Ii = function(a) {
  a = l.uri.c.split(a);
  return l.uri.c.Yb(null, null, null, null, a[l.uri.c.j.gb], a[l.uri.c.j.hb], a[l.uri.c.j.Ob]);
};
l.uri.c.ue = function(a) {
  var c = a.indexOf("#");
  return 0 > c ? a : a.substr(0, c);
};
l.uri.c.lg = function(a, c) {
  var d = l.uri.c.split(a), e = l.uri.c.split(c);
  return d[l.uri.c.j.U] == e[l.uri.c.j.U] && d[l.uri.c.j.na] == e[l.uri.c.j.na] && d[l.uri.c.j.V] == e[l.uri.c.j.V];
};
l.uri.c.wd = function(a) {
  if (l.ya && (0 <= a.indexOf("#") || 0 <= a.indexOf("?"))) {
    throw Error("goog.uri.utils: Fragment or query identifiers are not supported: [" + a + "]");
  }
};
l.uri.c.kb = function(a) {
  if (a[1]) {
    var c = a[0], d = c.indexOf("#");
    0 <= d && (a.push(c.substr(d)), a[0] = c = c.substr(0, d));
    d = c.indexOf("?");
    0 > d ? a[1] = "?" : d == c.length - 1 && (a[1] = void 0);
  }
  return a.join("");
};
l.uri.c.lb = function(a, c, d) {
  if (l.isArray(c)) {
    for (var e = 0;e < c.length;e++) {
      l.uri.c.lb(a, String(c[e]), d);
    }
  } else {
    null != c && d.push("&", a, "" === c ? "" : "=", l.b.ma(c));
  }
};
l.uri.c.ub = function(a, c, d) {
  for (d = d || 0;d < c.length;d += 2) {
    l.uri.c.lb(c[d], c[d + 1], a);
  }
  return a;
};
l.uri.c.Uh = function(a, c) {
  var d = l.uri.c.ub([], a, c);
  d[0] = "";
  return d.join("");
};
l.uri.c.xc = function(a, c) {
  for (var d in c) {
    l.uri.c.lb(d, c[d], a);
  }
  return a;
};
l.uri.c.Vh = function(a) {
  a = l.uri.c.xc([], a);
  a[0] = "";
  return a.join("");
};
l.uri.c.Eh = function(a, c) {
  return l.uri.c.kb(2 == arguments.length ? l.uri.c.ub([a], arguments[1], 0) : l.uri.c.ub([a], arguments, 1));
};
l.uri.c.Fh = function(a, c) {
  return l.uri.c.kb(l.uri.c.xc([a], c));
};
l.uri.c.qe = function(a, c, d) {
  a = [a, "&", c];
  l.Sb(d) && a.push("=", l.b.ma(d));
  return l.uri.c.kb(a);
};
l.uri.c.Na = function(a, c, d, e) {
  for (var f = d.length;0 <= (c = a.indexOf(d, c)) && c < e;) {
    var g = a.charCodeAt(c - 1);
    if (g == l.uri.c.sa.vc || g == l.uri.c.sa.je) {
      if (g = a.charCodeAt(c + f), !g || g == l.uri.c.sa.EQUAL || g == l.uri.c.sa.vc || g == l.uri.c.sa.ie) {
        return c;
      }
    }
    c += f + 1;
  }
  return-1;
};
l.uri.c.Oa = /#|$/;
l.uri.c.Oi = function(a, c) {
  return 0 <= l.uri.c.Na(a, 0, c, a.search(l.uri.c.Oa));
};
l.uri.c.Gi = function(a, c) {
  var d = a.search(l.uri.c.Oa), e = l.uri.c.Na(a, 0, c, d);
  if (0 > e) {
    return null;
  }
  var f = a.indexOf("&", e);
  if (0 > f || f > d) {
    f = d;
  }
  e += c.length + 1;
  return l.b.La(a.substr(e, f - e));
};
l.uri.c.Hi = function(a, c) {
  for (var d = a.search(l.uri.c.Oa), e = 0, f, g = [];0 <= (f = l.uri.c.Na(a, e, c, d));) {
    e = a.indexOf("&", f);
    if (0 > e || e > d) {
      e = d;
    }
    f += c.length + 1;
    g.push(l.b.La(a.substr(f, e - f)));
  }
  return g;
};
l.uri.c.ke = /[?&]($|#)/;
l.uri.c.se = function(a, c) {
  for (var d = a.search(l.uri.c.Oa), e = 0, f, g = [];0 <= (f = l.uri.c.Na(a, e, c, d));) {
    g.push(a.substring(e, f)), e = Math.min(a.indexOf("&", f) + 1 || d, d);
  }
  g.push(a.substr(e));
  return g.join("").replace(l.uri.c.ke, "$1");
};
l.uri.c.vd = function(a, c, d) {
  return l.uri.c.qe(l.uri.c.se(a, c), c, d);
};
l.uri.c.Gh = function(a, c) {
  l.uri.c.wd(a);
  l.b.yd(a, "/") && (a = a.substr(0, a.length - 1));
  l.b.jb(c, "/") && (c = c.substr(1));
  return l.b.xd(a, "/", c);
};
l.uri.c.Ub = {Tb:"zx"};
l.uri.c.sg = function(a) {
  return l.uri.c.vd(a, l.uri.c.Ub.Tb, l.b.Qb());
};
l.e = function(a, c) {
  var d;
  a instanceof l.e ? (this.C = l.S(c) ? c : a.td(), this.Ja(a.$()), this.Ka(a.Da()), this.Ea(a.la()), this.Ha(a.Ca()), this.Ga(a.aa()), this.Ia(a.Pb().clone()), this.Fa(a.Ba())) : a && (d = l.uri.c.split(String(a))) ? (this.C = !!c, this.Ja(d[l.uri.c.j.na] || "", !0), this.Ka(d[l.uri.c.j.fb] || "", !0), this.Ea(d[l.uri.c.j.U] || "", !0), this.Ha(d[l.uri.c.j.V]), this.Ga(d[l.uri.c.j.gb] || "", !0), this.Ia(d[l.uri.c.j.hb] || "", !0), this.Fa(d[l.uri.c.j.Ob] || "", !0)) : (this.C = !!c, this.G = new l.e.H(null, 
  null, this.C));
};
l.e.Ie = !1;
l.e.Ed = l.uri.c.Ub.Tb;
b = l.e.prototype;
b.ia = "";
b.Bb = "";
b.yb = "";
b.A = null;
b.Ab = "";
b.zb = "";
b.qg = !1;
b.C = !1;
b.toString = function() {
  var a = [], c = this.$();
  c && a.push(l.e.oa(c, l.e.Vb), ":");
  if (c = this.la()) {
    a.push("//");
    var d = this.Da();
    d && a.push(l.e.oa(d, l.e.Vb), "@");
    a.push(l.b.ma(c));
    c = this.Ca();
    null != c && a.push(":", String(c));
  }
  if (c = this.aa()) {
    this.ib() && "/" != c.charAt(0) && a.push("/"), a.push(l.e.oa(c, "/" == c.charAt(0) ? l.e.Bd : l.e.Dd));
  }
  (c = this.Ad()) && a.push("?", c);
  (c = this.Ba()) && a.push("#", l.e.oa(c, l.e.Cd));
  return a.join("");
};
b.resolve = function(a) {
  var c = this.clone(), d = a.Wd();
  d ? c.Ja(a.$()) : d = a.Xd();
  d ? c.Ka(a.Da()) : d = a.ib();
  d ? c.Ea(a.la()) : d = a.Ud();
  var e = a.aa();
  if (d) {
    c.Ha(a.Ca());
  } else {
    if (d = a.kc()) {
      if ("/" != e.charAt(0)) {
        if (this.ib() && !this.kc()) {
          e = "/" + e;
        } else {
          var f = c.aa().lastIndexOf("/");
          -1 != f && (e = c.aa().substr(0, f + 1) + e);
        }
      }
      e = l.e.Yd(e);
    }
  }
  d ? c.Ga(e) : d = a.Vd();
  d ? c.Ia(a.Sd()) : d = a.Td();
  d && c.Fa(a.Ba());
  return c;
};
b.clone = function() {
  return new l.e(this);
};
b.$ = function() {
  return this.ia;
};
b.Ja = function(a, c) {
  this.L();
  if (this.ia = c ? l.e.ha(a) : a) {
    this.ia = this.ia.replace(/:$/, "");
  }
  return this;
};
b.Wd = function() {
  return!!this.ia;
};
b.Da = function() {
  return this.Bb;
};
b.Ka = function(a, c) {
  this.L();
  this.Bb = c ? l.e.ha(a) : a;
  return this;
};
b.Xd = function() {
  return!!this.Bb;
};
b.la = function() {
  return this.yb;
};
b.Ea = function(a, c) {
  this.L();
  this.yb = c ? l.e.ha(a) : a;
  return this;
};
b.ib = function() {
  return!!this.yb;
};
b.Ca = function() {
  return this.A;
};
b.Ha = function(a) {
  this.L();
  if (a) {
    a = Number(a);
    if (isNaN(a) || 0 > a) {
      throw Error("Bad port number " + a);
    }
    this.A = a;
  } else {
    this.A = null;
  }
  return this;
};
b.Ud = function() {
  return null != this.A;
};
b.aa = function() {
  return this.Ab;
};
b.Ga = function(a, c) {
  this.L();
  this.Ab = c ? l.e.ha(a) : a;
  return this;
};
b.kc = function() {
  return!!this.Ab;
};
b.Vd = function() {
  return "" !== this.G.toString();
};
b.Ia = function(a, c) {
  this.L();
  a instanceof l.e.H ? (this.G = a, this.G.vb(this.C)) : (c || (a = l.e.oa(a, l.e.Ae)), this.G = new l.e.H(a, null, this.C));
  return this;
};
b.Ad = function() {
  return this.G.toString();
};
b.Sd = function() {
  return this.G.tf();
};
b.Pb = function() {
  return this.G;
};
b.Fd = function(a, c) {
  this.L();
  this.G.set(a, c);
  return this;
};
b.Me = function(a) {
  return this.G.get(a);
};
b.Ba = function() {
  return this.zb;
};
b.Fa = function(a, c) {
  this.L();
  this.zb = c ? l.e.ha(a) : a;
  return this;
};
b.Td = function() {
  return!!this.zb;
};
b.sg = function() {
  this.L();
  this.Fd(l.e.Ed, l.b.Qb());
  return this;
};
b.L = function() {
  if (this.qg) {
    throw Error("Tried to modify a read-only Uri");
  }
};
b.vb = function(a) {
  this.C = a;
  this.G && this.G.vb(a);
  return this;
};
b.td = function() {
  return this.C;
};
l.e.parse = function(a, c) {
  return a instanceof l.e ? a.clone() : new l.e(a, c);
};
l.e.create = function(a, c, d, e, f, g, h, k) {
  k = new l.e(null, k);
  a && k.Ja(a);
  c && k.Ka(c);
  d && k.Ea(d);
  e && k.Ha(e);
  f && k.Ga(f);
  g && k.Ia(g);
  h && k.Fa(h);
  return k;
};
l.e.resolve = function(a, c) {
  a instanceof l.e || (a = l.e.parse(a));
  c instanceof l.e || (c = l.e.parse(c));
  return a.resolve(c);
};
l.e.Yd = function(a) {
  if (".." == a || "." == a) {
    return "";
  }
  if (l.b.contains(a, "./") || l.b.contains(a, "/.")) {
    var c = l.b.jb(a, "/");
    a = a.split("/");
    for (var d = [], e = 0;e < a.length;) {
      var f = a[e++];
      "." == f ? c && e == a.length && d.push("") : ".." == f ? ((1 < d.length || 1 == d.length && "" != d[0]) && d.pop(), c && e == a.length && d.push("")) : (d.push(f), c = !0);
    }
    return d.join("/");
  }
  return a;
};
l.e.ha = function(a) {
  return a ? decodeURIComponent(a) : "";
};
l.e.oa = function(a, c) {
  return l.isString(a) ? encodeURI(a).replace(c, l.e.Le) : null;
};
l.e.Le = function(a) {
  a = a.charCodeAt(0);
  return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
};
l.e.Vb = /[#\/\?@]/g;
l.e.Dd = /[\#\?:]/g;
l.e.Bd = /[\#\?]/g;
l.e.Ae = /[\#\?@]/g;
l.e.Cd = /#/g;
l.e.lg = function(a, c) {
  var d = l.uri.c.split(a), e = l.uri.c.split(c);
  return d[l.uri.c.j.U] == e[l.uri.c.j.U] && d[l.uri.c.j.V] == e[l.uri.c.j.V];
};
l.e.H = function(a, c, d) {
  this.O = a || null;
  this.C = !!d;
};
l.e.H.prototype.K = function() {
  if (!this.p && (this.p = new l.f.v, this.m = 0, this.O)) {
    for (var a = this.O.split("&"), c = 0;c < a.length;c++) {
      var d = a[c].indexOf("="), e = null, f = null;
      0 <= d ? (e = a[c].substring(0, d), f = a[c].substring(d + 1)) : e = a[c];
      e = l.b.La(e);
      e = this.T(e);
      this.add(e, f ? l.b.La(f) : "");
    }
  }
};
l.e.H.li = function(a, c, d) {
  c = l.f.u(a);
  if ("undefined" == typeof c) {
    throw Error("Keys are undefined");
  }
  d = new l.e.H(null, null, d);
  a = l.f.q(a);
  for (var e = 0;e < c.length;e++) {
    var f = c[e], g = a[e];
    l.isArray(g) ? d.Zb(f, g) : d.add(f, g);
  }
  return d;
};
l.e.H.ki = function(a, c, d, e) {
  if (a.length != c.length) {
    throw Error("Mismatched lengths for keys/values");
  }
  d = new l.e.H(null, null, e);
  for (e = 0;e < a.length;e++) {
    d.add(a[e], c[e]);
  }
  return d;
};
b = l.e.H.prototype;
b.p = null;
b.m = null;
b.Z = function() {
  this.K();
  return this.m;
};
b.add = function(a, c) {
  this.K();
  this.ca();
  a = this.T(a);
  var d = this.p.get(a);
  d || this.p.set(a, d = []);
  d.push(c);
  this.m++;
  return this;
};
b.remove = function(a) {
  this.K();
  a = this.T(a);
  return this.p.da(a) ? (this.ca(), this.m -= this.p.get(a).length, this.p.remove(a)) : !1;
};
b.clear = function() {
  this.ca();
  this.p = null;
  this.m = 0;
};
b.B = function() {
  this.K();
  return 0 == this.m;
};
b.da = function(a) {
  this.K();
  a = this.T(a);
  return this.p.da(a);
};
b.ga = function(a) {
  var c = this.q();
  return l.a.contains(c, a);
};
b.u = function() {
  this.K();
  for (var a = this.p.q(), c = this.p.u(), d = [], e = 0;e < c.length;e++) {
    for (var f = a[e], g = 0;g < f.length;g++) {
      d.push(c[e]);
    }
  }
  return d;
};
b.q = function(a) {
  this.K();
  var c = [];
  if (l.isString(a)) {
    this.da(a) && (c = l.a.concat(c, this.p.get(this.T(a))));
  } else {
    a = this.p.q();
    for (var d = 0;d < a.length;d++) {
      c = l.a.concat(c, a[d]);
    }
  }
  return c;
};
b.set = function(a, c) {
  this.K();
  this.ca();
  a = this.T(a);
  this.da(a) && (this.m -= this.p.get(a).length);
  this.p.set(a, [c]);
  this.m++;
  return this;
};
b.get = function(a, c) {
  var d = a ? this.q(a) : [];
  return l.e.Ie ? 0 < d.length ? d[0] : c : 0 < d.length ? String(d[0]) : c;
};
b.Zb = function(a, c) {
  this.remove(a);
  0 < c.length && (this.ca(), this.p.set(this.T(a), l.a.clone(c)), this.m += c.length);
};
b.toString = function() {
  if (this.O) {
    return this.O;
  }
  if (!this.p) {
    return "";
  }
  for (var a = [], c = this.p.u(), d = 0;d < c.length;d++) {
    for (var e = c[d], f = l.b.ma(e), e = this.q(e), g = 0;g < e.length;g++) {
      var h = f;
      "" !== e[g] && (h += "=" + l.b.ma(e[g]));
      a.push(h);
    }
  }
  return this.O = a.join("&");
};
b.tf = function() {
  return l.e.ha(this.toString());
};
b.ca = function() {
  this.O = null;
};
b.clone = function() {
  var a = new l.e.H;
  a.O = this.O;
  this.p && (a.p = this.p.clone(), a.m = this.m);
  return a;
};
b.T = function(a) {
  a = String(a);
  this.C && (a = a.toLowerCase());
  return a;
};
b.vb = function(a) {
  a && !this.C && (this.K(), this.ca(), l.f.forEach(this.p, function(a, d) {
    var e = d.toLowerCase();
    d != e && (this.remove(d), this.Zb(e, a));
  }, this));
  this.C = a;
};
b.extend = function(a) {
  for (var c = 0;c < arguments.length;c++) {
    l.f.forEach(arguments[c], function(a, c) {
      this.add(c, a);
    }, this);
  }
};
m.Fb = {};
m.Fb.Ye = function(a) {
  return l.e.parse(window.location.href).Me(a) || null;
};
m.Fb.Fi = function(a) {
  return l.uri.c.$(a) ? l.uri.c.wc(a) : l.uri.c.wc("http://" + a);
};
m.Hc = function(a) {
  this.ua = a;
  this.Hb = this.A = null;
};
b = m.Hc.prototype;
b.Ac = function() {
  return "undefined" != typeof chrome && !!chrome.runtime && !!chrome.runtime.connect;
};
b.Ee = function(a) {
  this.Hb = a;
};
b.Cc = function(a) {
  if (this.Ac()) {
    a.clientId = this.ua;
    if (!this.A && (this.kf(), !this.A)) {
      return;
    }
    this.A.postMessage(a);
  }
};
b.kf = function() {
  !this.A && (this.A = chrome.runtime.connect({name:this.ua})) && (this.A.onMessage.addListener(l.bind(this.mf, this)), this.A.onDisconnect.addListener(l.bind(this.lf, this)));
};
b.mf = function(a) {
  this.Hb && this.Hb(a);
};
b.lf = function() {
  this.A = null;
};
m.xa = function(a) {
  this.Wc = a;
  this.Vc = null;
};
m.xa.prototype.wb = function() {
  window.addEventListener("message", this.tg.bind(this), !1);
};
m.xa.prototype.De = function(a) {
  this.Vc = a;
};
m.xa.prototype.tg = function(a) {
  if (a.source != window) {
    var c = a.data;
    this.Wc = c.appOrigin = a.origin;
    this.Vc(c);
  }
};
m.xa.prototype.Fc = function(a) {
  a.clientId = null;
  window.parent.postMessage(a, this.Wc);
};
m.nd = function() {
  this.ua = "client-" + String(Math.floor(1E5 * Math.random()));
  this.sessionRequest = null;
  this.Ta = new m.xa(m.Fb.Ye("appOrigin"));
  this.Xa = new m.Hc(this.ua);
  this.Ec = this.ta = null;
};
b = m.nd.prototype;
b.wb = function() {
  this.Ta.wb();
  this.Ta.De(this.Be.bind(this));
  this.Xa.Ee(this.Ce.bind(this));
  this.Xa.Ac() ? (this.ta = new m.P(this.xb.bind(this), this.xb.bind(this), 2E3), this.ta.Fe(), this.Xa.Cc(new m.Bc(m.D.yc, null))) : this.xb(new chrome.cast.I(chrome.cast.Wa.EXTENSION_MISSING));
};
b.xb = function(a) {
  this.Ta.Fc(new m.Bc(m.D.ff, a));
};
b.We = function(a) {
  this.ta && (a = a.message, !this.Ec || this.Ec <= a ? this.ta.df()(void 0) : this.ta.cf()(new chrome.cast.I(chrome.cast.Wa.EXTENSION_NOT_COMPATIBLE)));
};
b.Be = function(a) {
  a.clientId = this.ua;
  this.Xa.Cc(a);
};
b.Ce = function(a) {
  switch(a.type) {
    case m.D.yc:
      this.We(a);
      break;
    case m.D.Ne:
    ;
    case m.D.Oe:
    ;
    case m.D.Pe:
    ;
    case m.D.Qe:
    ;
    case m.D.Ue:
    ;
    case m.D.Se:
    ;
    case m.D.Re:
    ;
    case m.D.Ve:
    ;
    case m.D.Te:
      this.Ta.Fc(a);
  }
};
m.mg = new m.nd;
m.mg.wb();

