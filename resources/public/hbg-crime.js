;(function(){
function aa() {
  return function(a) {
    return a
  }
}
function h(a) {
  return function() {
    return this[a]
  }
}
function ba(a) {
  return function() {
    return a
  }
}
var n, ca = ca || {}, q = this;
function da(a, b) {
  var c = a.split("."), d = q;
  c[0] in d || !d.execScript || d.execScript("var " + c[0]);
  for(var e;c.length && (e = c.shift());) {
    c.length || void 0 === b ? d = d[e] ? d[e] : d[e] = {} : d[e] = b
  }
}
function ea(a) {
  a = a.split(".");
  for(var b = q, c;c = a.shift();) {
    if(null != b[c]) {
      b = b[c]
    }else {
      return null
    }
  }
  return b
}
function fa() {
}
function r(a) {
  var b = typeof a;
  if("object" == b) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return b
      }
      var c = Object.prototype.toString.call(a);
      if("[object Window]" == c) {
        return"object"
      }
      if("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == b && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return b
}
function ga(a) {
  var b = r(a);
  return"array" == b || "object" == b && "number" == typeof a.length
}
function ha(a) {
  return"string" == typeof a
}
function ia(a) {
  return a[ja] || (a[ja] = ++ka)
}
var ja = "closure_uid_" + (1E9 * Math.random() >>> 0), ka = 0;
function la(a, b, c) {
  return a.call.apply(a.bind, arguments)
}
function ma(a, b, c) {
  if(!a) {
    throw Error();
  }
  if(2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c)
    }
  }
  return function() {
    return a.apply(b, arguments)
  }
}
function na(a, b, c) {
  na = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
  return na.apply(null, arguments)
}
function oa(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = Array.prototype.slice.call(arguments);
    b.unshift.apply(b, c);
    return a.apply(this, b)
  }
}
var pa = Date.now || function() {
  return+new Date
};
function qa(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.lc = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a
}
;function ra(a, b) {
  for(var c = 1;c < arguments.length;c++) {
    var d = String(arguments[c]).replace(/\$/g, "$$$$");
    a = a.replace(/\%s/, d)
  }
  return a
}
function sa(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
}
function ta(a) {
  if(!ua.test(a)) {
    return a
  }
  -1 != a.indexOf("\x26") && (a = a.replace(va, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(wa, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(za, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(Aa, "\x26quot;"));
  return a
}
var va = /&/g, wa = /</g, za = />/g, Aa = /\"/g, ua = /[&<>\"]/;
function Ba(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase()
  })
}
;function Ca(a) {
  Error.captureStackTrace ? Error.captureStackTrace(this, Ca) : this.stack = Error().stack || "";
  a && (this.message = String(a))
}
qa(Ca, Error);
Ca.prototype.name = "CustomError";
function Da(a, b) {
  b.unshift(a);
  Ca.call(this, ra.apply(null, b));
  b.shift();
  this.Fd = a
}
qa(Da, Ca);
Da.prototype.name = "AssertionError";
function Ea(a, b) {
  throw new Da("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;var Fa = Array.prototype, Ga = Fa.indexOf ? function(a, b, c) {
  return Fa.indexOf.call(a, b, c)
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if(ha(a)) {
    return ha(b) && 1 == b.length ? a.indexOf(b, c) : -1
  }
  for(;c < a.length;c++) {
    if(c in a && a[c] === b) {
      return c
    }
  }
  return-1
}, Ha = Fa.forEach ? function(a, b, c) {
  Fa.forEach.call(a, b, c)
} : function(a, b, c) {
  for(var d = a.length, e = ha(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a)
  }
};
function Ia(a, b) {
  var c = Ga(a, b);
  0 <= c && Fa.splice.call(a, c, 1)
}
function Ja(a, b) {
  Fa.sort.call(a, b || Ka)
}
function La(a, b) {
  for(var c = 0;c < a.length;c++) {
    a[c] = {index:c, value:a[c]}
  }
  var d = b || Ka;
  Ja(a, function(a, b) {
    return d(a.value, b.value) || a.index - b.index
  });
  for(c = 0;c < a.length;c++) {
    a[c] = a[c].value
  }
}
function Ka(a, b) {
  return a > b ? 1 : a < b ? -1 : 0
}
;function Ma(a, b) {
  for(var c in a) {
    b.call(void 0, a[c], c, a)
  }
}
function Na(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = a[d]
  }
  return b
}
function Oa(a) {
  var b = [], c = 0, d;
  for(d in a) {
    b[c++] = d
  }
  return b
}
var Pa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Qa(a, b) {
  for(var c, d, e = 1;e < arguments.length;e++) {
    d = arguments[e];
    for(c in d) {
      a[c] = d[c]
    }
    for(var f = 0;f < Pa.length;f++) {
      c = Pa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
  }
}
;function Ra(a, b) {
  null != a && this.append.apply(this, arguments)
}
Ra.prototype.Va = "";
Ra.prototype.set = function(a) {
  this.Va = "" + a
};
Ra.prototype.append = function(a, b, c) {
  this.Va += a;
  if(null != b) {
    for(var d = 1;d < arguments.length;d++) {
      this.Va += arguments[d]
    }
  }
  return this
};
Ra.prototype.toString = h("Va");
var Sa;
function s(a) {
  return null != a && !1 !== a
}
function Ta(a) {
  return s(a) ? !1 : !0
}
function u(a, b) {
  return a[r(null == b ? null : b)] ? !0 : a._ ? !0 : v ? !1 : null
}
function Ua(a) {
  return null == a ? null : a.constructor
}
function w(a, b) {
  var c = Ua(b), c = s(s(c) ? c.wc : c) ? c.vc : r(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""))
}
function Va(a) {
  var b = a.vc;
  return s(b) ? b : "" + y(a)
}
function Wa(a) {
  return Array.prototype.slice.call(arguments)
}
var Xa = {}, Ya = {};
function Za(a) {
  if(a ? a.T : a) {
    return a.T(a)
  }
  var b;
  b = Za[r(null == a ? null : a)];
  if(!b && (b = Za._, !b)) {
    throw w("ICounted.-count", a);
  }
  return b.call(null, a)
}
function $a(a) {
  if(a ? a.V : a) {
    return a.V(a)
  }
  var b;
  b = $a[r(null == a ? null : a)];
  if(!b && (b = $a._, !b)) {
    throw w("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a)
}
var ab = {};
function bb(a, b) {
  if(a ? a.O : a) {
    return a.O(a, b)
  }
  var c;
  c = bb[r(null == a ? null : a)];
  if(!c && (c = bb._, !c)) {
    throw w("ICollection.-conj", a);
  }
  return c.call(null, a, b)
}
var cb = {}, z = function() {
  function a(a, b, c) {
    if(a ? a.va : a) {
      return a.va(a, b, c)
    }
    var g;
    g = z[r(null == a ? null : a)];
    if(!g && (g = z._, !g)) {
      throw w("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.w : a) {
      return a.w(a, b)
    }
    var c;
    c = z[r(null == a ? null : a)];
    if(!c && (c = z._, !c)) {
      throw w("IIndexed.-nth", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c
}(), db = {};
function eb(a) {
  if(a ? a.X : a) {
    return a.X(a)
  }
  var b;
  b = eb[r(null == a ? null : a)];
  if(!b && (b = eb._, !b)) {
    throw w("ISeq.-first", a);
  }
  return b.call(null, a)
}
function fb(a) {
  if(a ? a.ka : a) {
    return a.ka(a)
  }
  var b;
  b = fb[r(null == a ? null : a)];
  if(!b && (b = fb._, !b)) {
    throw w("ISeq.-rest", a);
  }
  return b.call(null, a)
}
var gb = {}, hb = {}, ib = function() {
  function a(a, b, c) {
    if(a ? a.S : a) {
      return a.S(a, b, c)
    }
    var g;
    g = ib[r(null == a ? null : a)];
    if(!g && (g = ib._, !g)) {
      throw w("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.R : a) {
      return a.R(a, b)
    }
    var c;
    c = ib[r(null == a ? null : a)];
    if(!c && (c = ib._, !c)) {
      throw w("ILookup.-lookup", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c
}();
function jb(a, b) {
  if(a ? a.Jb : a) {
    return a.Jb(a, b)
  }
  var c;
  c = jb[r(null == a ? null : a)];
  if(!c && (c = jb._, !c)) {
    throw w("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b)
}
function kb(a, b, c) {
  if(a ? a.Ga : a) {
    return a.Ga(a, b, c)
  }
  var d;
  d = kb[r(null == a ? null : a)];
  if(!d && (d = kb._, !d)) {
    throw w("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c)
}
var lb = {};
function mb(a, b) {
  if(a ? a.Xa : a) {
    return a.Xa(a, b)
  }
  var c;
  c = mb[r(null == a ? null : a)];
  if(!c && (c = mb._, !c)) {
    throw w("IMap.-dissoc", a);
  }
  return c.call(null, a, b)
}
var nb = {};
function ob(a) {
  if(a ? a.$b : a) {
    return a.$b()
  }
  var b;
  b = ob[r(null == a ? null : a)];
  if(!b && (b = ob._, !b)) {
    throw w("IMapEntry.-key", a);
  }
  return b.call(null, a)
}
function pb(a) {
  if(a ? a.ac : a) {
    return a.ac()
  }
  var b;
  b = pb[r(null == a ? null : a)];
  if(!b && (b = pb._, !b)) {
    throw w("IMapEntry.-val", a);
  }
  return b.call(null, a)
}
var qb = {};
function rb(a) {
  if(a ? a.hb : a) {
    return a.hb(a)
  }
  var b;
  b = rb[r(null == a ? null : a)];
  if(!b && (b = rb._, !b)) {
    throw w("IStack.-peek", a);
  }
  return b.call(null, a)
}
function sb(a) {
  if(a ? a.ib : a) {
    return a.ib(a)
  }
  var b;
  b = sb[r(null == a ? null : a)];
  if(!b && (b = sb._, !b)) {
    throw w("IStack.-pop", a);
  }
  return b.call(null, a)
}
var tb = {};
function ub(a, b, c) {
  if(a ? a.cc : a) {
    return a.cc(a, b, c)
  }
  var d;
  d = ub[r(null == a ? null : a)];
  if(!d && (d = ub._, !d)) {
    throw w("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c)
}
function vb(a) {
  if(a ? a.tb : a) {
    return a.tb(a)
  }
  var b;
  b = vb[r(null == a ? null : a)];
  if(!b && (b = vb._, !b)) {
    throw w("IDeref.-deref", a);
  }
  return b.call(null, a)
}
var wb = {};
function xb(a) {
  if(a ? a.P : a) {
    return a.P(a)
  }
  var b;
  b = xb[r(null == a ? null : a)];
  if(!b && (b = xb._, !b)) {
    throw w("IMeta.-meta", a);
  }
  return b.call(null, a)
}
var yb = {};
function zb(a, b) {
  if(a ? a.Q : a) {
    return a.Q(a, b)
  }
  var c;
  c = zb[r(null == a ? null : a)];
  if(!c && (c = zb._, !c)) {
    throw w("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b)
}
var Ab = {}, Bb = function() {
  function a(a, b, c) {
    if(a ? a.aa : a) {
      return a.aa(a, b, c)
    }
    var g;
    g = Bb[r(null == a ? null : a)];
    if(!g && (g = Bb._, !g)) {
      throw w("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c)
  }
  function b(a, b) {
    if(a ? a.$ : a) {
      return a.$(a, b)
    }
    var c;
    c = Bb[r(null == a ? null : a)];
    if(!c && (c = Bb._, !c)) {
      throw w("IReduce.-reduce", a);
    }
    return c.call(null, a, b)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c
}();
function Cb(a, b) {
  if(a ? a.F : a) {
    return a.F(a, b)
  }
  var c;
  c = Cb[r(null == a ? null : a)];
  if(!c && (c = Cb._, !c)) {
    throw w("IEquiv.-equiv", a);
  }
  return c.call(null, a, b)
}
function Db(a) {
  if(a ? a.G : a) {
    return a.G(a)
  }
  var b;
  b = Db[r(null == a ? null : a)];
  if(!b && (b = Db._, !b)) {
    throw w("IHash.-hash", a);
  }
  return b.call(null, a)
}
var Eb = {};
function Fb(a) {
  if(a ? a.J : a) {
    return a.J(a)
  }
  var b;
  b = Fb[r(null == a ? null : a)];
  if(!b && (b = Fb._, !b)) {
    throw w("ISeqable.-seq", a);
  }
  return b.call(null, a)
}
var Gb = {}, Hb = {};
function Ib(a) {
  if(a ? a.bc : a) {
    return a.bc(a)
  }
  var b;
  b = Ib[r(null == a ? null : a)];
  if(!b && (b = Ib._, !b)) {
    throw w("IReversible.-rseq", a);
  }
  return b.call(null, a)
}
function Jb(a, b) {
  if(a ? a.uc : a) {
    return a.uc(0, b)
  }
  var c;
  c = Jb[r(null == a ? null : a)];
  if(!c && (c = Jb._, !c)) {
    throw w("IWriter.-write", a);
  }
  return c.call(null, a, b)
}
function Kb(a) {
  if(a ? a.Zc : a) {
    return null
  }
  var b;
  b = Kb[r(null == a ? null : a)];
  if(!b && (b = Kb._, !b)) {
    throw w("IWriter.-flush", a);
  }
  return b.call(null, a)
}
var Lb = {};
function Mb(a, b, c) {
  if(a ? a.H : a) {
    return a.H(a, b, c)
  }
  var d;
  d = Mb[r(null == a ? null : a)];
  if(!d && (d = Mb._, !d)) {
    throw w("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c)
}
function Nb(a, b, c) {
  if(a ? a.ec : a) {
    return a.ec(a, b, c)
  }
  var d;
  d = Nb[r(null == a ? null : a)];
  if(!d && (d = Nb._, !d)) {
    throw w("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c)
}
function Ob(a, b, c) {
  if(a ? a.dc : a) {
    return a.dc(a, b, c)
  }
  var d;
  d = Ob[r(null == a ? null : a)];
  if(!d && (d = Ob._, !d)) {
    throw w("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c)
}
function Pb(a, b) {
  if(a ? a.fc : a) {
    return a.fc(a, b)
  }
  var c;
  c = Pb[r(null == a ? null : a)];
  if(!c && (c = Pb._, !c)) {
    throw w("IWatchable.-remove-watch", a);
  }
  return c.call(null, a, b)
}
function Qb(a) {
  if(a ? a.fb : a) {
    return a.fb(a)
  }
  var b;
  b = Qb[r(null == a ? null : a)];
  if(!b && (b = Qb._, !b)) {
    throw w("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a)
}
function Rb(a, b) {
  if(a ? a.kb : a) {
    return a.kb(a, b)
  }
  var c;
  c = Rb[r(null == a ? null : a)];
  if(!c && (c = Rb._, !c)) {
    throw w("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b)
}
function Sb(a) {
  if(a ? a.lb : a) {
    return a.lb(a)
  }
  var b;
  b = Sb[r(null == a ? null : a)];
  if(!b && (b = Sb._, !b)) {
    throw w("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a)
}
function Tb(a, b, c) {
  if(a ? a.jb : a) {
    return a.jb(a, b, c)
  }
  var d;
  d = Tb[r(null == a ? null : a)];
  if(!d && (d = Tb._, !d)) {
    throw w("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c)
}
function Ub(a, b, c) {
  if(a ? a.tc : a) {
    return a.tc(0, b, c)
  }
  var d;
  d = Ub[r(null == a ? null : a)];
  if(!d && (d = Ub._, !d)) {
    throw w("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c)
}
function Vb(a) {
  if(a ? a.oc : a) {
    return a.oc()
  }
  var b;
  b = Vb[r(null == a ? null : a)];
  if(!b && (b = Vb._, !b)) {
    throw w("IChunk.-drop-first", a);
  }
  return b.call(null, a)
}
function B(a) {
  if(a ? a.Lb : a) {
    return a.Lb(a)
  }
  var b;
  b = B[r(null == a ? null : a)];
  if(!b && (b = B._, !b)) {
    throw w("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a)
}
function C(a) {
  if(a ? a.Mb : a) {
    return a.Mb(a)
  }
  var b;
  b = C[r(null == a ? null : a)];
  if(!b && (b = C._, !b)) {
    throw w("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a)
}
function Wb(a) {
  if(a ? a.Kb : a) {
    return a.Kb(a)
  }
  var b;
  b = Wb[r(null == a ? null : a)];
  if(!b && (b = Wb._, !b)) {
    throw w("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a)
}
function Xb(a) {
  this.kd = a;
  this.A = 0;
  this.n = 1073741824
}
Xb.prototype.uc = function(a, b) {
  return this.kd.append(b)
};
Xb.prototype.Zc = ba(null);
function Yb(a) {
  var b = new Ra, c = new Xb(b);
  a.H(null, c, Zb([$b, !0, ac, !0, bc, !1, cc, !1], !0));
  Kb(c);
  return"" + y(b)
}
function dc(a, b, c, d, e) {
  this.La = a;
  this.name = b;
  this.Ma = c;
  this.Na = d;
  this.fa = e;
  this.n = 2154168321;
  this.A = 4096
}
n = dc.prototype;
n.H = function(a, b) {
  return Jb(b, this.Ma)
};
n.G = function() {
  var a = this.Na;
  return null != a ? a : this.Na = a = ec.g ? ec.g(D.i ? D.i(this.La) : D.call(null, this.La), D.i ? D.i(this.name) : D.call(null, this.name)) : ec.call(null, D.i ? D.i(this.La) : D.call(null, this.La), D.i ? D.i(this.name) : D.call(null, this.name))
};
n.Q = function(a, b) {
  return new dc(this.La, this.name, this.Ma, this.Na, b)
};
n.P = h("fa");
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return ib.h(c, this, null);
      case 3:
        return ib.h(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
n.i = function(a) {
  return ib.h(a, this, null)
};
n.g = function(a, b) {
  return ib.h(a, this, b)
};
n.F = function(a, b) {
  return b instanceof dc ? this.Ma === b.Ma : !1
};
n.toString = h("Ma");
var fc = function() {
  function a(a, b) {
    var c = null != a ? [y(a), y("/"), y(b)].join("") : b;
    return new dc(a, b, c, null, null)
  }
  function b(a) {
    return a instanceof dc ? a : c.g(null, a)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.g = a;
  return c
}();
function E(a) {
  if(null == a) {
    return null
  }
  if(a && (a.n & 8388608 || a.sc)) {
    return a.J(null)
  }
  if(a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new gc(a, 0)
  }
  if(u(Eb, a)) {
    return Fb(a)
  }
  if(v) {
    throw Error([y(a), y("is not ISeqable")].join(""));
  }
  return null
}
function F(a) {
  if(null == a) {
    return null
  }
  if(a && (a.n & 64 || a.gb)) {
    return a.X(null)
  }
  a = E(a);
  return null == a ? null : eb(a)
}
function G(a) {
  return null != a ? a && (a.n & 64 || a.gb) ? a.ka(null) : (a = E(a)) ? fb(a) : H : H
}
function I(a) {
  return null == a ? null : a && (a.n & 128 || a.ub) ? a.ja(null) : E(G(a))
}
var L = function() {
  function a(a, b) {
    return a === b || Cb(a, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(b.g(a, d)) {
          if(I(e)) {
            a = d, d = F(e), e = I(e)
          }else {
            return b.g(d, F(e))
          }
        }else {
          return!1
        }
      }
    }
    a.p = 2;
    a.l = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
      return c(b, d, a)
    };
    a.k = c;
    return a
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, J(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.l = c.l;
  b.i = ba(!0);
  b.g = a;
  b.k = c.k;
  return b
}();
Db["null"] = ba(0);
gb["null"] = !0;
qb["null"] = !0;
Ya["null"] = !0;
Za["null"] = ba(0);
rb["null"] = ba(null);
sb["null"] = ba(null);
Cb["null"] = function(a, b) {
  return null == b
};
yb["null"] = !0;
zb["null"] = ba(null);
wb["null"] = !0;
xb["null"] = ba(null);
$a["null"] = ba(null);
lb["null"] = !0;
mb["null"] = ba(null);
Date.prototype.F = function(a, b) {
  return b instanceof Date && this.toString() === b.toString()
};
Cb.number = function(a, b) {
  return a === b
};
wb["function"] = !0;
xb["function"] = ba(null);
Xa["function"] = !0;
Db._ = function(a) {
  return ia(a)
};
function hc(a) {
  return a + 1
}
var ic = function() {
  function a(a, b, c, d) {
    for(var l = Za(a);;) {
      if(d < l) {
        c = b.g ? b.g(c, z.g(a, d)) : b.call(null, c, z.g(a, d)), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = Za(a), l = 0;;) {
      if(l < d) {
        c = b.g ? b.g(c, z.g(a, l)) : b.call(null, c, z.g(a, l)), l += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = Za(a);
    if(0 === c) {
      return b.t ? b.t() : b.call(null)
    }
    for(var d = z.g(a, 0), l = 1;;) {
      if(l < c) {
        d = b.g ? b.g(d, z.g(a, l)) : b.call(null, d, z.g(a, l)), l += 1
      }else {
        return d
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.g = c;
  d.h = b;
  d.v = a;
  return d
}(), jc = function() {
  function a(a, b, c, d) {
    for(var l = a.length;;) {
      if(d < l) {
        c = b.g ? b.g(c, a[d]) : b.call(null, c, a[d]), d += 1
      }else {
        return c
      }
    }
  }
  function b(a, b, c) {
    for(var d = a.length, l = 0;;) {
      if(l < d) {
        c = b.g ? b.g(c, a[l]) : b.call(null, c, a[l]), l += 1
      }else {
        return c
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if(0 === a.length) {
      return b.t ? b.t() : b.call(null)
    }
    for(var d = a[0], l = 1;;) {
      if(l < c) {
        d = b.g ? b.g(d, a[l]) : b.call(null, d, a[l]), l += 1
      }else {
        return d
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.g = c;
  d.h = b;
  d.v = a;
  return d
}();
function kc(a) {
  return a ? a.n & 2 || a.Pc ? !0 : a.n ? !1 : u(Ya, a) : u(Ya, a)
}
function lc(a) {
  return a ? a.n & 16 || a.rc ? !0 : a.n ? !1 : u(cb, a) : u(cb, a)
}
function gc(a, b) {
  this.j = a;
  this.s = b;
  this.A = 0;
  this.n = 166199550
}
n = gc.prototype;
n.G = function() {
  return mc.i ? mc.i(this) : mc.call(null, this)
};
n.ja = function() {
  return this.s + 1 < this.j.length ? new gc(this.j, this.s + 1) : null
};
n.O = function(a, b) {
  return N.g ? N.g(b, this) : N.call(null, b, this)
};
n.bc = function() {
  var a = Za(this);
  return 0 < a ? new nc(this, a - 1, null) : null
};
n.toString = function() {
  return Yb(this)
};
n.$ = function(a, b) {
  return jc.v(this.j, b, this.j[this.s], this.s + 1)
};
n.aa = function(a, b, c) {
  return jc.v(this.j, b, c, this.s)
};
n.J = function() {
  return this
};
n.T = function() {
  return this.j.length - this.s
};
n.X = function() {
  return this.j[this.s]
};
n.ka = function() {
  return this.s + 1 < this.j.length ? new gc(this.j, this.s + 1) : H
};
n.F = function(a, b) {
  return oc.g ? oc.g(this, b) : oc.call(null, this, b)
};
n.w = function(a, b) {
  var c = b + this.s;
  return c < this.j.length ? this.j[c] : null
};
n.va = function(a, b, c) {
  a = b + this.s;
  return a < this.j.length ? this.j[a] : c
};
n.V = function() {
  return H
};
var qc = function() {
  function a(a, b) {
    return b < a.length ? new gc(a, b) : null
  }
  function b(a) {
    return c.g(a, 0)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.g = a;
  return c
}(), J = function() {
  function a(a, b) {
    return qc.g(a, b)
  }
  function b(a) {
    return qc.g(a, 0)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.g = a;
  return c
}();
function nc(a, b, c) {
  this.Ib = a;
  this.s = b;
  this.o = c;
  this.A = 0;
  this.n = 32374862
}
n = nc.prototype;
n.G = function() {
  return mc.i ? mc.i(this) : mc.call(null, this)
};
n.O = function(a, b) {
  return N.g ? N.g(b, this) : N.call(null, b, this)
};
n.toString = function() {
  return Yb(this)
};
n.$ = function(a, b) {
  return O.g ? O.g(b, this) : O.call(null, b, this)
};
n.aa = function(a, b, c) {
  return O.h ? O.h(b, c, this) : O.call(null, b, c, this)
};
n.J = function() {
  return this
};
n.T = function() {
  return this.s + 1
};
n.X = function() {
  return z.g(this.Ib, this.s)
};
n.ka = function() {
  return 0 < this.s ? new nc(this.Ib, this.s - 1, null) : null
};
n.F = function(a, b) {
  return oc.g ? oc.g(this, b) : oc.call(null, this, b)
};
n.Q = function(a, b) {
  return new nc(this.Ib, this.s, b)
};
n.P = h("o");
n.V = function() {
  return rc.g ? rc.g(H, this.o) : rc.call(null, H, this.o)
};
function sc(a) {
  for(;;) {
    var b = I(a);
    if(null != b) {
      a = b
    }else {
      return F(a)
    }
  }
}
Cb._ = function(a, b) {
  return a === b
};
var tc = function() {
  function a(a, b) {
    return null != a ? bb(a, b) : bb(H, b)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      for(;;) {
        if(s(e)) {
          a = b.g(a, d), d = F(e), e = I(e)
        }else {
          return b.g(a, d)
        }
      }
    }
    a.p = 2;
    a.l = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
      return c(b, d, a)
    };
    a.k = c;
    return a
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, J(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.l = c.l;
  b.g = a;
  b.k = c.k;
  return b
}();
function P(a) {
  if(null != a) {
    if(a && (a.n & 2 || a.Pc)) {
      a = a.T(null)
    }else {
      if(a instanceof Array) {
        a = a.length
      }else {
        if("string" === typeof a) {
          a = a.length
        }else {
          if(u(Ya, a)) {
            a = Za(a)
          }else {
            if(v) {
              a: {
                a = E(a);
                for(var b = 0;;) {
                  if(kc(a)) {
                    a = b + Za(a);
                    break a
                  }
                  a = I(a);
                  b += 1
                }
                a = void 0
              }
            }else {
              a = null
            }
          }
        }
      }
    }
  }else {
    a = 0
  }
  return a
}
var uc = function() {
  function a(a, b, c) {
    for(;;) {
      if(null == a) {
        return c
      }
      if(0 === b) {
        return E(a) ? F(a) : c
      }
      if(lc(a)) {
        return z.h(a, b, c)
      }
      if(E(a)) {
        a = I(a), b -= 1
      }else {
        return v ? c : null
      }
    }
  }
  function b(a, b) {
    for(;;) {
      if(null == a) {
        throw Error("Index out of bounds");
      }
      if(0 === b) {
        if(E(a)) {
          return F(a)
        }
        throw Error("Index out of bounds");
      }
      if(lc(a)) {
        return z.g(a, b)
      }
      if(E(a)) {
        var c = I(a), g = b - 1;
        a = c;
        b = g
      }else {
        if(v) {
          throw Error("Index out of bounds");
        }
        return null
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c
}(), Q = function() {
  function a(a, b, c) {
    if(null != a) {
      if(a && (a.n & 16 || a.rc)) {
        return a.va(null, b, c)
      }
      if(a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c
      }
      if(u(cb, a)) {
        return z.g(a, b)
      }
      if(v) {
        if(a ? a.n & 64 || a.gb || (a.n ? 0 : u(db, a)) : u(db, a)) {
          return uc.h(a, b, c)
        }
        throw Error([y("nth not supported on this type "), y(Va(Ua(a)))].join(""));
      }
      return null
    }
    return c
  }
  function b(a, b) {
    if(null == a) {
      return null
    }
    if(a && (a.n & 16 || a.rc)) {
      return a.w(null, b)
    }
    if(a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null
    }
    if(u(cb, a)) {
      return z.g(a, b)
    }
    if(v) {
      if(a ? a.n & 64 || a.gb || (a.n ? 0 : u(db, a)) : u(db, a)) {
        return uc.g(a, b)
      }
      throw Error([y("nth not supported on this type "), y(Va(Ua(a)))].join(""));
    }
    return null
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c
}(), R = function() {
  function a(a, b, c) {
    return null != a ? a && (a.n & 256 || a.Uc) ? a.S(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : u(hb, a) ? ib.h(a, b, c) : v ? c : null : c
  }
  function b(a, b) {
    return null == a ? null : a && (a.n & 256 || a.Uc) ? a.R(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : u(hb, a) ? ib.g(a, b) : null
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c
}(), wc = function() {
  function a(a, b, c) {
    return null != a ? kb(a, b, c) : vc.g ? vc.g([b], [c]) : vc.call(null, [b], [c])
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var p = null;
      3 < arguments.length && (p = J(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, p)
    }
    function c(a, d, e, l) {
      for(;;) {
        if(a = b.h(a, d, e), s(l)) {
          d = F(l), e = F(I(l)), l = I(I(l))
        }else {
          return a
        }
      }
    }
    a.p = 3;
    a.l = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var l = F(a);
      a = G(a);
      return c(b, d, l, a)
    };
    a.k = c;
    return a
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.k(b, e, f, J(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 3;
  b.l = c.l;
  b.h = a;
  b.k = c.k;
  return b
}(), xc = function() {
  var a = null, b = function() {
    function b(a, c, g) {
      var k = null;
      2 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k)
    }
    function d(b, c, d) {
      for(;;) {
        if(b = a.g(b, c), s(d)) {
          c = F(d), d = I(d)
        }else {
          return b
        }
      }
    }
    b.p = 2;
    b.l = function(a) {
      var b = F(a);
      a = I(a);
      var c = F(a);
      a = G(a);
      return d(b, c, a)
    };
    b.k = d;
    return b
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return mb(a, d);
      default:
        return b.k(a, d, J(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.p = 2;
  a.l = b.l;
  a.i = aa();
  a.g = function(a, b) {
    return mb(a, b)
  };
  a.k = b.k;
  return a
}();
function yc(a) {
  var b = "function" == r(a);
  return b ? b : a ? s(s(null) ? null : a.Oc) ? !0 : a.Ya ? !1 : u(Xa, a) : u(Xa, a)
}
var rc = function zc(b, c) {
  return yc(b) && !(b ? b.n & 262144 || b.Cd || (b.n ? 0 : u(yb, b)) : u(yb, b)) ? zc(function() {
    "undefined" === typeof Sa && (Sa = function(b, c, f, g) {
      this.o = b;
      this.rb = c;
      this.rd = f;
      this.dd = g;
      this.A = 0;
      this.n = 393217
    }, Sa.wc = !0, Sa.vc = "cljs.core/t7174", Sa.$c = function(b) {
      return Jb(b, "cljs.core/t7174")
    }, Sa.prototype.call = function() {
      function b(d, g) {
        d = this;
        var k = null;
        1 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k)
      }
      function c(b, d) {
        return T.g ? T.g(b.rb, d) : T.call(null, b.rb, d)
      }
      b.p = 1;
      b.l = function(b) {
        var d = F(b);
        b = G(b);
        return c(d, b)
      };
      b.k = c;
      return b
    }(), Sa.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(c.slice()))
    }, Sa.prototype.g = function() {
      function b(d) {
        var g = null;
        0 < arguments.length && (g = J(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, g)
      }
      function c(b) {
        return T.g ? T.g(self__.rb, b) : T.call(null, self__.rb, b)
      }
      b.p = 0;
      b.l = function(b) {
        b = E(b);
        return c(b)
      };
      b.k = c;
      return b
    }(), Sa.prototype.Oc = !0, Sa.prototype.P = h("dd"), Sa.prototype.Q = function(b, c) {
      return new Sa(this.o, this.rb, this.rd, c)
    });
    return new Sa(c, b, zc, null)
  }(), c) : zb(b, c)
};
function Ac(a) {
  return(a ? a.n & 131072 || a.Wc || (a.n ? 0 : u(wb, a)) : u(wb, a)) ? xb(a) : null
}
var Bc = {}, Cc = 0;
function D(a) {
  if(a && (a.n & 4194304 || a.Tc)) {
    a = a.G(null)
  }else {
    if("number" === typeof a) {
      a = Math.floor(a) % 2147483647
    }else {
      if(!0 === a) {
        a = 1
      }else {
        if(!1 === a) {
          a = 0
        }else {
          if("string" === typeof a) {
            255 < Cc && (Bc = {}, Cc = 0);
            var b = Bc[a];
            if("number" !== typeof b) {
              for(var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296
              }
              Bc[a] = b;
              Cc += 1
            }
            a = b
          }else {
            a = v ? Db(a) : null
          }
        }
      }
    }
  }
  return a
}
function Dc(a) {
  return null == a ? !1 : a ? a.n & 8 || a.ud ? !0 : a.n ? !1 : u(ab, a) : u(ab, a)
}
function Ec(a) {
  return a ? a.n & 16777216 || a.zd ? !0 : a.n ? !1 : u(Gb, a) : u(Gb, a)
}
function Fc(a) {
  return null == a ? !1 : a ? a.n & 1024 || a.xd ? !0 : a.n ? !1 : u(lb, a) : u(lb, a)
}
function Gc(a) {
  return a ? a.n & 16384 || a.Bd ? !0 : a.n ? !1 : u(tb, a) : u(tb, a)
}
function V(a) {
  return a ? a.A & 512 || a.td ? !0 : !1 : !1
}
function Hc(a) {
  var b = [];
  Ma(a, function(a, d) {
    return b.push(d)
  });
  return b
}
function Ic(a, b, c, d, e) {
  for(;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1
  }
}
var Jc = {};
function Kc(a) {
  return null == a ? !1 : a ? a.n & 64 || a.gb ? !0 : a.n ? !1 : u(db, a) : u(db, a)
}
function Lc(a) {
  return s(a) ? !0 : !1
}
function Mc(a, b) {
  return R.h(a, b, Jc) === Jc ? !1 : !0
}
function Nc(a, b) {
  if(a === b) {
    return 0
  }
  if(null == a) {
    return-1
  }
  if(null == b) {
    return 1
  }
  if(Ua(a) === Ua(b)) {
    return a && (a.A & 2048 || a.pc) ? a.qc(null, b) : Ka(a, b)
  }
  if(v) {
    throw Error("compare on non-nil objects of different types");
  }
  return null
}
var Oc = function() {
  function a(a, b, c, g) {
    for(;;) {
      var k = Nc(Q.g(a, g), Q.g(b, g));
      if(0 === k && g + 1 < c) {
        g += 1
      }else {
        return k
      }
    }
  }
  function b(a, b) {
    var f = P(a), g = P(b);
    return f < g ? -1 : f > g ? 1 : v ? c.v(a, b, f, 0) : null
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.v = a;
  return c
}();
function Pc(a) {
  return L.g(a, Nc) ? Nc : function(b, c) {
    var d = a.g ? a.g(b, c) : a.call(null, b, c);
    return"number" === typeof d ? d : s(d) ? -1 : s(a.g ? a.g(c, b) : a.call(null, c, b)) ? 1 : 0
  }
}
var Rc = function() {
  function a(a, b) {
    if(E(b)) {
      var c = Qc.i ? Qc.i(b) : Qc.call(null, b);
      La(c, Pc(a));
      return E(c)
    }
    return H
  }
  function b(a) {
    return c.g(Nc, a)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.g = a;
  return c
}(), O = function() {
  function a(a, b, c) {
    for(c = E(c);;) {
      if(c) {
        b = a.g ? a.g(b, F(c)) : a.call(null, b, F(c)), c = I(c)
      }else {
        return b
      }
    }
  }
  function b(a, b) {
    var c = E(b);
    return c ? Sc.h ? Sc.h(a, F(c), I(c)) : Sc.call(null, a, F(c), I(c)) : a.t ? a.t() : a.call(null)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c
}(), Sc = function() {
  function a(a, b, c) {
    return c && (c.n & 524288 || c.Yc) ? c.aa(null, a, b) : c instanceof Array ? jc.h(c, a, b) : "string" === typeof c ? jc.h(c, a, b) : u(Ab, c) ? Bb.h(c, a, b) : v ? O.h(a, b, c) : null
  }
  function b(a, b) {
    return b && (b.n & 524288 || b.Yc) ? b.$(null, a) : b instanceof Array ? jc.g(b, a) : "string" === typeof b ? jc.g(b, a) : u(Ab, b) ? Bb.g(b, a) : v ? O.g(a, b) : null
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c
}(), Tc = function() {
  function a(a, b) {
    return a > b ? a : b
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      return Sc.h(b, a > d ? a : d, e)
    }
    a.p = 2;
    a.l = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
      return c(b, d, a)
    };
    a.k = c;
    return a
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, J(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.l = c.l;
  b.i = aa();
  b.g = a;
  b.k = c.k;
  return b
}();
function Uc(a) {
  return 0 <= (a - a % 2) / 2 ? Math.floor.i ? Math.floor.i((a - a % 2) / 2) : Math.floor.call(null, (a - a % 2) / 2) : Math.ceil.i ? Math.ceil.i((a - a % 2) / 2) : Math.ceil.call(null, (a - a % 2) / 2)
}
function Vc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24
}
function Wc(a, b) {
  for(var c = b, d = E(a);;) {
    if(d && 0 < c) {
      c -= 1, d = I(d)
    }else {
      return d
    }
  }
}
var y = function() {
  function a(a) {
    return null == a ? "" : a.toString()
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k)
    }
    function c(a, d) {
      for(var e = new Ra(b.i(a)), l = d;;) {
        if(s(l)) {
          e = e.append(b.i(F(l))), l = I(l)
        }else {
          return e.toString()
        }
      }
    }
    a.p = 1;
    a.l = function(a) {
      var b = F(a);
      a = G(a);
      return c(b, a)
    };
    a.k = c;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return a.call(this, b);
      default:
        return c.k(b, J(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 1;
  b.l = c.l;
  b.t = ba("");
  b.i = a;
  b.k = c.k;
  return b
}(), Xc = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.g = function(a, c) {
    return a.substring(c)
  };
  a.h = function(a, c, d) {
    return a.substring(c, d)
  };
  return a
}();
function oc(a, b) {
  return Lc(Ec(b) ? function() {
    for(var c = E(a), d = E(b);;) {
      if(null == c) {
        return null == d
      }
      if(null == d) {
        return!1
      }
      if(L.g(F(c), F(d))) {
        c = I(c), d = I(d)
      }else {
        return v ? !1 : null
      }
    }
  }() : null)
}
function ec(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2)
}
function mc(a) {
  if(E(a)) {
    var b = D(F(a));
    for(a = I(a);;) {
      if(null == a) {
        return b
      }
      b = ec(b, D(F(a)));
      a = I(a)
    }
  }else {
    return 0
  }
}
function Yc(a) {
  var b = 0;
  for(a = E(a);;) {
    if(a) {
      var c = F(a), b = (b + (D(Zc.i ? Zc.i(c) : Zc.call(null, c)) ^ D($c.i ? $c.i(c) : $c.call(null, c)))) % 4503599627370496;
      a = I(a)
    }else {
      return b
    }
  }
}
function ad(a, b, c, d, e) {
  this.o = a;
  this.ab = b;
  this.Da = c;
  this.count = d;
  this.q = e;
  this.A = 0;
  this.n = 65937646
}
n = ad.prototype;
n.G = function() {
  var a = this.q;
  return null != a ? a : this.q = a = mc(this)
};
n.ja = function() {
  return 1 === this.count ? null : this.Da
};
n.O = function(a, b) {
  return new ad(this.o, b, this, this.count + 1, null)
};
n.toString = function() {
  return Yb(this)
};
n.$ = function(a, b) {
  return O.g(b, this)
};
n.aa = function(a, b, c) {
  return O.h(b, c, this)
};
n.J = function() {
  return this
};
n.T = h("count");
n.hb = h("ab");
n.ib = function() {
  return fb(this)
};
n.X = h("ab");
n.ka = function() {
  return 1 === this.count ? H : this.Da
};
n.F = function(a, b) {
  return oc(this, b)
};
n.Q = function(a, b) {
  return new ad(b, this.ab, this.Da, this.count, this.q)
};
n.P = h("o");
n.V = function() {
  return H
};
function bd(a) {
  this.o = a;
  this.A = 0;
  this.n = 65937614
}
n = bd.prototype;
n.G = ba(0);
n.ja = ba(null);
n.O = function(a, b) {
  return new ad(this.o, b, null, 1, null)
};
n.toString = function() {
  return Yb(this)
};
n.$ = function(a, b) {
  return O.g(b, this)
};
n.aa = function(a, b, c) {
  return O.h(b, c, this)
};
n.J = ba(null);
n.T = ba(0);
n.hb = ba(null);
n.ib = function() {
  throw Error("Can't pop empty list");
};
n.X = ba(null);
n.ka = function() {
  return H
};
n.F = function(a, b) {
  return oc(this, b)
};
n.Q = function(a, b) {
  return new bd(b)
};
n.P = h("o");
n.V = function() {
  return this
};
var H = new bd(null);
function cd(a) {
  return(a ? a.n & 134217728 || a.yd || (a.n ? 0 : u(Hb, a)) : u(Hb, a)) ? Ib(a) : Sc.h(tc, H, a)
}
var dd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b;
    if(a instanceof gc) {
      b = a.j
    }else {
      a: {
        for(b = [];;) {
          if(null != a) {
            b.push(a.X(null)), a = a.ja(null)
          }else {
            break a
          }
        }
        b = void 0
      }
    }
    a = b.length;
    for(var e = H;;) {
      if(0 < a) {
        var f = a - 1, e = e.O(null, b[a - 1]);
        a = f
      }else {
        return e
      }
    }
  }
  a.p = 0;
  a.l = function(a) {
    a = E(a);
    return b(a)
  };
  a.k = b;
  return a
}();
function ed(a, b, c, d) {
  this.o = a;
  this.ab = b;
  this.Da = c;
  this.q = d;
  this.A = 0;
  this.n = 65929452
}
n = ed.prototype;
n.G = function() {
  var a = this.q;
  return null != a ? a : this.q = a = mc(this)
};
n.ja = function() {
  return null == this.Da ? null : E(this.Da)
};
n.O = function(a, b) {
  return new ed(null, b, this, this.q)
};
n.toString = function() {
  return Yb(this)
};
n.$ = function(a, b) {
  return O.g(b, this)
};
n.aa = function(a, b, c) {
  return O.h(b, c, this)
};
n.J = function() {
  return this
};
n.X = h("ab");
n.ka = function() {
  return null == this.Da ? H : this.Da
};
n.F = function(a, b) {
  return oc(this, b)
};
n.Q = function(a, b) {
  return new ed(b, this.ab, this.Da, this.q)
};
n.P = h("o");
n.V = function() {
  return rc(H, this.o)
};
function N(a, b) {
  var c = null == b;
  return(c ? c : b && (b.n & 64 || b.gb)) ? new ed(null, a, b, null) : new ed(null, a, E(b), null)
}
function X(a, b, c, d) {
  this.La = a;
  this.name = b;
  this.Ia = c;
  this.Na = d;
  this.n = 2153775105;
  this.A = 4096
}
n = X.prototype;
n.H = function(a, b) {
  return Jb(b, [y(":"), y(this.Ia)].join(""))
};
n.G = function() {
  null == this.Na && (this.Na = ec(D(this.La), D(this.name)) + 2654435769);
  return this.Na
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return R.g(c, this);
      case 3:
        return R.h(c, this, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
n.i = function(a) {
  return R.g(a, this)
};
n.g = function(a, b) {
  return R.h(a, this, b)
};
n.F = function(a, b) {
  return b instanceof X ? this.Ia === b.Ia : !1
};
n.toString = function() {
  return[y(":"), y(this.Ia)].join("")
};
function Y(a, b) {
  return a === b ? !0 : a instanceof X && b instanceof X ? a.Ia === b.Ia : !1
}
var gd = function() {
  function a(a, b) {
    return new X(a, b, [y(s(a) ? [y(a), y("/")].join("") : null), y(b)].join(""), null)
  }
  function b(a) {
    if(a instanceof X) {
      return a
    }
    if(a instanceof dc) {
      var b;
      if(a && (a.A & 4096 || a.Xc)) {
        b = a.La
      }else {
        throw Error([y("Doesn't support namespace: "), y(a)].join(""));
      }
      return new X(b, fd.i ? fd.i(a) : fd.call(null, a), a.Ma, null)
    }
    return"string" === typeof a ? (b = a.split("/"), 2 === b.length ? new X(b[0], b[1], a, null) : new X(null, b[0], a, null)) : null
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.g = a;
  return c
}();
function hd(a, b, c, d) {
  this.o = a;
  this.bb = b;
  this.K = c;
  this.q = d;
  this.A = 0;
  this.n = 32374988
}
n = hd.prototype;
n.G = function() {
  var a = this.q;
  return null != a ? a : this.q = a = mc(this)
};
n.ja = function() {
  Fb(this);
  return null == this.K ? null : I(this.K)
};
n.O = function(a, b) {
  return N(b, this)
};
n.toString = function() {
  return Yb(this)
};
function id(a) {
  null != a.bb && (a.K = a.bb.t ? a.bb.t() : a.bb.call(null), a.bb = null);
  return a.K
}
n.$ = function(a, b) {
  return O.g(b, this)
};
n.aa = function(a, b, c) {
  return O.h(b, c, this)
};
n.J = function() {
  id(this);
  if(null == this.K) {
    return null
  }
  for(var a = this.K;;) {
    if(a instanceof hd) {
      a = id(a)
    }else {
      return this.K = a, E(this.K)
    }
  }
};
n.X = function() {
  Fb(this);
  return null == this.K ? null : F(this.K)
};
n.ka = function() {
  Fb(this);
  return null != this.K ? G(this.K) : H
};
n.F = function(a, b) {
  return oc(this, b)
};
n.Q = function(a, b) {
  return new hd(b, this.bb, this.K, this.q)
};
n.P = h("o");
n.V = function() {
  return rc(H, this.o)
};
function jd(a, b) {
  this.Fb = a;
  this.end = b;
  this.A = 0;
  this.n = 2
}
jd.prototype.T = h("end");
jd.prototype.add = function(a) {
  this.Fb[this.end] = a;
  return this.end += 1
};
jd.prototype.sa = function() {
  var a = new kd(this.Fb, 0, this.end);
  this.Fb = null;
  return a
};
function kd(a, b, c) {
  this.j = a;
  this.M = b;
  this.end = c;
  this.A = 0;
  this.n = 524306
}
n = kd.prototype;
n.$ = function(a, b) {
  return jc.v(this.j, b, this.j[this.M], this.M + 1)
};
n.aa = function(a, b, c) {
  return jc.v(this.j, b, c, this.M)
};
n.oc = function() {
  if(this.M === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new kd(this.j, this.M + 1, this.end)
};
n.w = function(a, b) {
  return this.j[this.M + b]
};
n.va = function(a, b, c) {
  return 0 <= b && b < this.end - this.M ? this.j[this.M + b] : c
};
n.T = function() {
  return this.end - this.M
};
var ld = function() {
  function a(a, b, c) {
    return new kd(a, b, c)
  }
  function b(a, b) {
    return new kd(a, b, a.length)
  }
  function c(a) {
    return new kd(a, 0, a.length)
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.i = c;
  d.g = b;
  d.h = a;
  return d
}();
function md(a, b, c, d) {
  this.sa = a;
  this.za = b;
  this.o = c;
  this.q = d;
  this.n = 31850732;
  this.A = 1536
}
n = md.prototype;
n.G = function() {
  var a = this.q;
  return null != a ? a : this.q = a = mc(this)
};
n.ja = function() {
  if(1 < Za(this.sa)) {
    return new md(Vb(this.sa), this.za, this.o, null)
  }
  var a = Fb(this.za);
  return null == a ? null : a
};
n.O = function(a, b) {
  return N(b, this)
};
n.toString = function() {
  return Yb(this)
};
n.J = function() {
  return this
};
n.X = function() {
  return z.g(this.sa, 0)
};
n.ka = function() {
  return 1 < Za(this.sa) ? new md(Vb(this.sa), this.za, this.o, null) : null == this.za ? H : this.za
};
n.Kb = function() {
  return null == this.za ? null : this.za
};
n.F = function(a, b) {
  return oc(this, b)
};
n.Q = function(a, b) {
  return new md(this.sa, this.za, b, this.q)
};
n.P = h("o");
n.V = function() {
  return rc(H, this.o)
};
n.Lb = h("sa");
n.Mb = function() {
  return null == this.za ? H : this.za
};
function nd(a, b) {
  return 0 === Za(a) ? b : new md(a, b, null, null)
}
function Qc(a) {
  for(var b = [];;) {
    if(E(a)) {
      b.push(F(a)), a = I(a)
    }else {
      return b
    }
  }
}
function od(a, b) {
  if(kc(a)) {
    return P(a)
  }
  for(var c = a, d = b, e = 0;;) {
    if(0 < d && E(c)) {
      c = I(c), d -= 1, e += 1
    }else {
      return e
    }
  }
}
var qd = function pd(b) {
  return null == b ? null : null == I(b) ? E(F(b)) : v ? N(F(b), pd(I(b))) : null
}, rd = function() {
  function a(a, b) {
    return new hd(null, function() {
      var c = E(a);
      return c ? V(c) ? nd(B(c), d.g(C(c), b)) : N(F(c), d.g(G(c), b)) : b
    }, null, null)
  }
  function b(a) {
    return new hd(null, function() {
      return a
    }, null, null)
  }
  function c() {
    return new hd(null, ba(null), null, null)
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f)
    }
    function b(a, c, e) {
      return function t(a, b) {
        return new hd(null, function() {
          var c = E(a);
          return c ? V(c) ? nd(B(c), t(C(c), b)) : N(F(c), t(G(c), b)) : s(b) ? t(F(b), I(b)) : null
        }, null, null)
      }(d.g(a, c), e)
    }
    a.p = 2;
    a.l = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
      return b(c, d, a)
    };
    a.k = b;
    return a
  }(), d = function(d, g, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, g);
      default:
        return e.k(d, g, J(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.p = 2;
  d.l = e.l;
  d.t = c;
  d.i = b;
  d.g = a;
  d.k = e.k;
  return d
}(), sd = function() {
  function a(a, b, c, d) {
    return N(a, N(b, N(c, d)))
  }
  function b(a, b, c) {
    return N(a, N(b, c))
  }
  var c = null, d = function() {
    function a(c, d, e, p, m) {
      var t = null;
      4 < arguments.length && (t = J(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, p, t)
    }
    function b(a, c, d, e, f) {
      return N(a, N(c, N(d, N(e, qd(f)))))
    }
    a.p = 4;
    a.l = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = I(a);
      var m = F(a);
      a = G(a);
      return b(c, d, e, m, a)
    };
    a.k = b;
    return a
  }(), c = function(c, f, g, k, l) {
    switch(arguments.length) {
      case 1:
        return E(c);
      case 2:
        return N(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, k);
      default:
        return d.k(c, f, g, k, J(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = 4;
  c.l = d.l;
  c.i = function(a) {
    return E(a)
  };
  c.g = function(a, b) {
    return N(a, b)
  };
  c.h = b;
  c.v = a;
  c.k = d.k;
  return c
}();
function td(a) {
  return Sb(a)
}
function ud(a, b, c) {
  var d = E(c);
  if(0 === b) {
    return a.t ? a.t() : a.call(null)
  }
  c = eb(d);
  var e = fb(d);
  if(1 === b) {
    return a.i ? a.i(c) : a.i ? a.i(c) : a.call(null, c)
  }
  var d = eb(e), f = fb(e);
  if(2 === b) {
    return a.g ? a.g(c, d) : a.g ? a.g(c, d) : a.call(null, c, d)
  }
  var e = eb(f), g = fb(f);
  if(3 === b) {
    return a.h ? a.h(c, d, e) : a.h ? a.h(c, d, e) : a.call(null, c, d, e)
  }
  var f = eb(g), k = fb(g);
  if(4 === b) {
    return a.v ? a.v(c, d, e, f) : a.v ? a.v(c, d, e, f) : a.call(null, c, d, e, f)
  }
  g = eb(k);
  k = fb(k);
  if(5 === b) {
    return a.C ? a.C(c, d, e, f, g) : a.C ? a.C(c, d, e, f, g) : a.call(null, c, d, e, f, g)
  }
  a = eb(k);
  var l = fb(k);
  if(6 === b) {
    return a.Ba ? a.Ba(c, d, e, f, g, a) : a.Ba ? a.Ba(c, d, e, f, g, a) : a.call(null, c, d, e, f, g, a)
  }
  var k = eb(l), p = fb(l);
  if(7 === b) {
    return a.Wa ? a.Wa(c, d, e, f, g, a, k) : a.Wa ? a.Wa(c, d, e, f, g, a, k) : a.call(null, c, d, e, f, g, a, k)
  }
  var l = eb(p), m = fb(p);
  if(8 === b) {
    return a.Yb ? a.Yb(c, d, e, f, g, a, k, l) : a.Yb ? a.Yb(c, d, e, f, g, a, k, l) : a.call(null, c, d, e, f, g, a, k, l)
  }
  var p = eb(m), t = fb(m);
  if(9 === b) {
    return a.Zb ? a.Zb(c, d, e, f, g, a, k, l, p) : a.Zb ? a.Zb(c, d, e, f, g, a, k, l, p) : a.call(null, c, d, e, f, g, a, k, l, p)
  }
  var m = eb(t), x = fb(t);
  if(10 === b) {
    return a.Nb ? a.Nb(c, d, e, f, g, a, k, l, p, m) : a.Nb ? a.Nb(c, d, e, f, g, a, k, l, p, m) : a.call(null, c, d, e, f, g, a, k, l, p, m)
  }
  var t = eb(x), A = fb(x);
  if(11 === b) {
    return a.Ob ? a.Ob(c, d, e, f, g, a, k, l, p, m, t) : a.Ob ? a.Ob(c, d, e, f, g, a, k, l, p, m, t) : a.call(null, c, d, e, f, g, a, k, l, p, m, t)
  }
  var x = eb(A), K = fb(A);
  if(12 === b) {
    return a.Pb ? a.Pb(c, d, e, f, g, a, k, l, p, m, t, x) : a.Pb ? a.Pb(c, d, e, f, g, a, k, l, p, m, t, x) : a.call(null, c, d, e, f, g, a, k, l, p, m, t, x)
  }
  var A = eb(K), S = fb(K);
  if(13 === b) {
    return a.Qb ? a.Qb(c, d, e, f, g, a, k, l, p, m, t, x, A) : a.Qb ? a.Qb(c, d, e, f, g, a, k, l, p, m, t, x, A) : a.call(null, c, d, e, f, g, a, k, l, p, m, t, x, A)
  }
  var K = eb(S), M = fb(S);
  if(14 === b) {
    return a.Rb ? a.Rb(c, d, e, f, g, a, k, l, p, m, t, x, A, K) : a.Rb ? a.Rb(c, d, e, f, g, a, k, l, p, m, t, x, A, K) : a.call(null, c, d, e, f, g, a, k, l, p, m, t, x, A, K)
  }
  var S = eb(M), U = fb(M);
  if(15 === b) {
    return a.Sb ? a.Sb(c, d, e, f, g, a, k, l, p, m, t, x, A, K, S) : a.Sb ? a.Sb(c, d, e, f, g, a, k, l, p, m, t, x, A, K, S) : a.call(null, c, d, e, f, g, a, k, l, p, m, t, x, A, K, S)
  }
  var M = eb(U), W = fb(U);
  if(16 === b) {
    return a.Tb ? a.Tb(c, d, e, f, g, a, k, l, p, m, t, x, A, K, S, M) : a.Tb ? a.Tb(c, d, e, f, g, a, k, l, p, m, t, x, A, K, S, M) : a.call(null, c, d, e, f, g, a, k, l, p, m, t, x, A, K, S, M)
  }
  var U = eb(W), xa = fb(W);
  if(17 === b) {
    return a.Ub ? a.Ub(c, d, e, f, g, a, k, l, p, m, t, x, A, K, S, M, U) : a.Ub ? a.Ub(c, d, e, f, g, a, k, l, p, m, t, x, A, K, S, M, U) : a.call(null, c, d, e, f, g, a, k, l, p, m, t, x, A, K, S, M, U)
  }
  var W = eb(xa), ya = fb(xa);
  if(18 === b) {
    return a.Vb ? a.Vb(c, d, e, f, g, a, k, l, p, m, t, x, A, K, S, M, U, W) : a.Vb ? a.Vb(c, d, e, f, g, a, k, l, p, m, t, x, A, K, S, M, U, W) : a.call(null, c, d, e, f, g, a, k, l, p, m, t, x, A, K, S, M, U, W)
  }
  xa = eb(ya);
  ya = fb(ya);
  if(19 === b) {
    return a.Wb ? a.Wb(c, d, e, f, g, a, k, l, p, m, t, x, A, K, S, M, U, W, xa) : a.Wb ? a.Wb(c, d, e, f, g, a, k, l, p, m, t, x, A, K, S, M, U, W, xa) : a.call(null, c, d, e, f, g, a, k, l, p, m, t, x, A, K, S, M, U, W, xa)
  }
  var pc = eb(ya);
  fb(ya);
  if(20 === b) {
    return a.Xb ? a.Xb(c, d, e, f, g, a, k, l, p, m, t, x, A, K, S, M, U, W, xa, pc) : a.Xb ? a.Xb(c, d, e, f, g, a, k, l, p, m, t, x, A, K, S, M, U, W, xa, pc) : a.call(null, c, d, e, f, g, a, k, l, p, m, t, x, A, K, S, M, U, W, xa, pc)
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var T = function() {
  function a(a, b, c, d, e) {
    b = sd.v(b, c, d, e);
    c = a.p;
    return a.l ? (d = od(b, c + 1), d <= c ? ud(a, d, b) : a.l(b)) : a.apply(a, Qc(b))
  }
  function b(a, b, c, d) {
    b = sd.h(b, c, d);
    c = a.p;
    return a.l ? (d = od(b, c + 1), d <= c ? ud(a, d, b) : a.l(b)) : a.apply(a, Qc(b))
  }
  function c(a, b, c) {
    b = sd.g(b, c);
    c = a.p;
    if(a.l) {
      var d = od(b, c + 1);
      return d <= c ? ud(a, d, b) : a.l(b)
    }
    return a.apply(a, Qc(b))
  }
  function d(a, b) {
    var c = a.p;
    if(a.l) {
      var d = od(b, c + 1);
      return d <= c ? ud(a, d, b) : a.l(b)
    }
    return a.apply(a, Qc(b))
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, A) {
      var K = null;
      5 < arguments.length && (K = J(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, K)
    }
    function b(a, c, d, e, f, g) {
      c = N(c, N(d, N(e, N(f, qd(g)))));
      d = a.p;
      return a.l ? (e = od(c, d + 1), e <= d ? ud(a, e, c) : a.l(c)) : a.apply(a, Qc(c))
    }
    a.p = 5;
    a.l = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = I(a);
      var f = F(a);
      a = I(a);
      var g = F(a);
      a = G(a);
      return b(c, d, e, f, g, a)
    };
    a.k = b;
    return a
  }(), e = function(e, k, l, p, m, t) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, p);
      case 5:
        return a.call(this, e, k, l, p, m);
      default:
        return f.k(e, k, l, p, m, J(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.p = 5;
  e.l = f.l;
  e.g = d;
  e.h = c;
  e.v = b;
  e.C = a;
  e.k = f.k;
  return e
}();
function vd(a) {
  return E(a) ? a : null
}
function wd(a, b) {
  for(;;) {
    if(null == E(b)) {
      return!0
    }
    if(s(a.i ? a.i(F(b)) : a.call(null, F(b)))) {
      var c = a, d = I(b);
      a = c;
      b = d
    }else {
      return v ? !1 : null
    }
  }
}
function xd(a) {
  for(var b = yd;;) {
    if(E(a)) {
      var c = b.i ? b.i(F(a)) : b.call(null, F(a));
      if(s(c)) {
        return c
      }
      a = I(a)
    }else {
      return null
    }
  }
}
function zd(a) {
  if("number" === typeof a && !isNaN(a) && Infinity !== a && parseFloat(a) === parseInt(a, 10)) {
    return 0 === (a & 1)
  }
  throw Error([y("Argument must be an integer: "), y(a)].join(""));
}
function yd(a) {
  return a
}
var Ad = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = J(Array.prototype.slice.call(arguments, 0), 0));
        return m.call(this, b)
      }
      function m(e) {
        return T.C(a, b, c, d, e)
      }
      e.p = 0;
      e.l = function(a) {
        a = E(a);
        return m(a)
      };
      e.k = m;
      return e
    }()
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = null;
        0 < arguments.length && (b = J(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b)
      }
      function e(d) {
        return T.v(a, b, c, d)
      }
      d.p = 0;
      d.l = function(a) {
        a = E(a);
        return e(a)
      };
      d.k = e;
      return d
    }()
  }
  function c(a, b) {
    return function() {
      function c(a) {
        var b = null;
        0 < arguments.length && (b = J(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b)
      }
      function d(c) {
        return T.h(a, b, c)
      }
      c.p = 0;
      c.l = function(a) {
        a = E(a);
        return d(a)
      };
      c.k = d;
      return c
    }()
  }
  var d = null, e = function() {
    function a(c, d, e, f, t) {
      var x = null;
      4 < arguments.length && (x = J(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, x)
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = J(Array.prototype.slice.call(arguments, 0), 0));
          return g.call(this, c)
        }
        function g(b) {
          return T.C(a, c, d, e, rd.g(f, b))
        }
        b.p = 0;
        b.l = function(a) {
          a = E(a);
          return g(a)
        };
        b.k = g;
        return b
      }()
    }
    a.p = 4;
    a.l = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = I(a);
      var f = F(a);
      a = G(a);
      return b(c, d, e, f, a)
    };
    a.k = b;
    return a
  }(), d = function(d, g, k, l, p) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, k);
      case 4:
        return a.call(this, d, g, k, l);
      default:
        return e.k(d, g, k, l, J(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.p = 4;
  d.l = e.l;
  d.i = aa();
  d.g = c;
  d.h = b;
  d.v = a;
  d.k = e.k;
  return d
}(), Bd = function() {
  function a(a, b, c, e) {
    return new hd(null, function() {
      var p = E(b), m = E(c), t = E(e);
      return p && m && t ? N(a.h ? a.h(F(p), F(m), F(t)) : a.call(null, F(p), F(m), F(t)), d.v(a, G(p), G(m), G(t))) : null
    }, null, null)
  }
  function b(a, b, c) {
    return new hd(null, function() {
      var e = E(b), p = E(c);
      return e && p ? N(a.g ? a.g(F(e), F(p)) : a.call(null, F(e), F(p)), d.h(a, G(e), G(p))) : null
    }, null, null)
  }
  function c(a, b) {
    return new hd(null, function() {
      var c = E(b);
      if(c) {
        if(V(c)) {
          for(var e = B(c), p = P(e), m = new jd(Array(p), 0), t = 0;;) {
            if(t < p) {
              var x = a.i ? a.i(z.g(e, t)) : a.call(null, z.g(e, t));
              m.add(x);
              t += 1
            }else {
              break
            }
          }
          return nd(m.sa(), d.g(a, C(c)))
        }
        return N(a.i ? a.i(F(c)) : a.call(null, F(c)), d.g(a, G(c)))
      }
      return null
    }, null, null)
  }
  var d = null, e = function() {
    function a(c, d, e, f, t) {
      var x = null;
      4 < arguments.length && (x = J(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, x)
    }
    function b(a, c, e, f, g) {
      return d.g(function(b) {
        return T.g(a, b)
      }, function A(a) {
        return new hd(null, function() {
          var b = d.g(E, a);
          return wd(yd, b) ? N(d.g(F, b), A(d.g(G, b))) : null
        }, null, null)
      }(tc.k(g, f, J([e, c], 0))))
    }
    a.p = 4;
    a.l = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = I(a);
      var f = F(a);
      a = G(a);
      return b(c, d, e, f, a)
    };
    a.k = b;
    return a
  }(), d = function(d, g, k, l, p) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, k);
      case 4:
        return a.call(this, d, g, k, l);
      default:
        return e.k(d, g, k, l, J(arguments, 4))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.p = 4;
  d.l = e.l;
  d.g = c;
  d.h = b;
  d.v = a;
  d.k = e.k;
  return d
}(), Dd = function Cd(b, c) {
  return new hd(null, function() {
    if(0 < b) {
      var d = E(c);
      return d ? N(F(d), Cd(b - 1, G(d))) : null
    }
    return null
  }, null, null)
};
function Ed(a, b) {
  return new hd(null, function() {
    var c;
    a: {
      c = a;
      for(var d = b;;) {
        if(d = E(d), 0 < c && d) {
          c -= 1, d = G(d)
        }else {
          c = d;
          break a
        }
      }
      c = void 0
    }
    return c
  }, null, null)
}
var Fd = function() {
  function a(a, b) {
    return Dd(a, c.i(b))
  }
  function b(a) {
    return new hd(null, function() {
      return N(a, c.i(a))
    }, null, null)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.g = a;
  return c
}(), Hd = function Gd(b, c) {
  return N(c, new hd(null, function() {
    return Gd(b, b.i ? b.i(c) : b.call(null, c))
  }, null, null))
}, Id = function() {
  function a(a, c) {
    return new hd(null, function() {
      var f = E(a), g = E(c);
      return f && g ? N(F(f), N(F(g), b.g(G(f), G(g)))) : null
    }, null, null)
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      return new hd(null, function() {
        var c = Bd.g(E, tc.k(e, d, J([a], 0)));
        return wd(yd, c) ? rd.g(Bd.g(F, c), T.g(b, Bd.g(G, c))) : null
      }, null, null)
    }
    a.p = 2;
    a.l = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
      return c(b, d, a)
    };
    a.k = c;
    return a
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, J(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.l = c.l;
  b.g = a;
  b.k = c.k;
  return b
}(), Kd = function Jd(b, c) {
  return new hd(null, function() {
    var d = E(c);
    if(d) {
      if(V(d)) {
        for(var e = B(d), f = P(e), g = new jd(Array(f), 0), k = 0;;) {
          if(k < f) {
            if(s(b.i ? b.i(z.g(e, k)) : b.call(null, z.g(e, k)))) {
              var l = z.g(e, k);
              g.add(l)
            }
            k += 1
          }else {
            break
          }
        }
        return nd(g.sa(), Jd(b, C(d)))
      }
      e = F(d);
      d = G(d);
      return s(b.i ? b.i(e) : b.call(null, e)) ? N(e, Jd(b, d)) : Jd(b, d)
    }
    return null
  }, null, null)
};
function Ld(a, b) {
  return null != a ? a && (a.A & 4 || a.vd) ? td(Sc.h(Rb, Qb(a), b)) : Sc.h(bb, a, b) : Sc.h(tc, H, b)
}
var Md = function() {
  function a(a, b, c, k) {
    return new hd(null, function() {
      var l = E(k);
      if(l) {
        var p = Dd(a, l);
        return a === P(p) ? N(p, d.v(a, b, c, Ed(b, l))) : bb(H, Dd(a, rd.g(p, c)))
      }
      return null
    }, null, null)
  }
  function b(a, b, c) {
    return new hd(null, function() {
      var k = E(c);
      if(k) {
        var l = Dd(a, k);
        return a === P(l) ? N(l, d.h(a, b, Ed(b, k))) : null
      }
      return null
    }, null, null)
  }
  function c(a, b) {
    return d.h(a, a, b)
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.g = c;
  d.h = b;
  d.v = a;
  return d
}(), Od = function Nd(b, c, d) {
  var e = Q.h(c, 0, null);
  c = Wc(c, 1);
  return s(c) ? wc.h(b, e, Nd(R.g(b, e), c, d)) : wc.h(b, e, d)
};
function Pd(a, b) {
  this.D = a;
  this.j = b
}
function Qd(a) {
  return new Pd(a.D, a.j.slice())
}
function Rd(a) {
  a = a.m;
  return 32 > a ? 0 : a - 1 >>> 5 << 5
}
function Sd(a, b, c) {
  for(;;) {
    if(0 === b) {
      return c
    }
    var d = new Pd(a, Array(32));
    d.j[0] = c;
    c = d;
    b -= 5
  }
}
var Ud = function Td(b, c, d, e) {
  var f = Qd(d), g = b.m - 1 >>> c & 31;
  5 === c ? f.j[g] = e : (d = d.j[g], b = null != d ? Td(b, c - 5, d, e) : Sd(null, c - 5, e), f.j[g] = b);
  return f
};
function Vd(a, b) {
  throw Error([y("No item "), y(a), y(" in vector of length "), y(b)].join(""));
}
function Wd(a, b) {
  if(0 <= b && b < a.m) {
    if(b >= Rd(a)) {
      return a.ea
    }
    for(var c = a.root, d = a.shift;;) {
      if(0 < d) {
        var e = d - 5, c = c.j[b >>> d & 31], d = e
      }else {
        return c.j
      }
    }
  }else {
    return Vd(b, a.m)
  }
}
var Yd = function Xd(b, c, d, e, f) {
  var g = Qd(d);
  if(0 === c) {
    g.j[e & 31] = f
  }else {
    var k = e >>> c & 31;
    b = Xd(b, c - 5, d.j[k], e, f);
    g.j[k] = b
  }
  return g
}, $d = function Zd(b, c, d) {
  var e = b.m - 2 >>> c & 31;
  if(5 < c) {
    b = Zd(b, c - 5, d.j[e]);
    if(null == b && 0 === e) {
      return null
    }
    d = Qd(d);
    d.j[e] = b;
    return d
  }
  return 0 === e ? null : v ? (d = Qd(d), d.j[e] = null, d) : null
};
function ae(a, b, c, d, e, f) {
  this.o = a;
  this.m = b;
  this.shift = c;
  this.root = d;
  this.ea = e;
  this.q = f;
  this.A = 4;
  this.n = 167668511
}
n = ae.prototype;
n.fb = function() {
  return new be(this.m, this.shift, ce.i ? ce.i(this.root) : ce.call(null, this.root), de.i ? de.i(this.ea) : de.call(null, this.ea))
};
n.G = function() {
  var a = this.q;
  return null != a ? a : this.q = a = mc(this)
};
n.R = function(a, b) {
  return z.h(this, b, null)
};
n.S = function(a, b, c) {
  return z.h(this, b, c)
};
n.Ga = function(a, b, c) {
  if(0 <= b && b < this.m) {
    return Rd(this) <= b ? (a = this.ea.slice(), a[b & 31] = c, new ae(this.o, this.m, this.shift, this.root, a, null)) : new ae(this.o, this.m, this.shift, Yd(this, this.shift, this.root, b, c), this.ea, null)
  }
  if(b === this.m) {
    return bb(this, c)
  }
  if(v) {
    throw Error([y("Index "), y(b), y(" out of bounds  [0,"), y(this.m), y("]")].join(""));
  }
  return null
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.va(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
n.i = function(a) {
  return this.w(null, a)
};
n.g = function(a, b) {
  return this.va(null, a, b)
};
n.O = function(a, b) {
  if(32 > this.m - Rd(this)) {
    var c = this.ea.slice();
    c.push(b);
    return new ae(this.o, this.m + 1, this.shift, this.root, c, null)
  }
  var d = this.m >>> 5 > 1 << this.shift, c = d ? this.shift + 5 : this.shift;
  if(d) {
    d = new Pd(null, Array(32));
    d.j[0] = this.root;
    var e = Sd(null, this.shift, new Pd(null, this.ea));
    d.j[1] = e
  }else {
    d = Ud(this, this.shift, this.root, new Pd(null, this.ea))
  }
  return new ae(this.o, this.m + 1, c, d, [b], null)
};
n.bc = function() {
  return 0 < this.m ? new nc(this, this.m - 1, null) : null
};
n.$b = function() {
  return z.g(this, 0)
};
n.ac = function() {
  return z.g(this, 1)
};
n.toString = function() {
  return Yb(this)
};
n.$ = function(a, b) {
  return ic.g(this, b)
};
n.aa = function(a, b, c) {
  return ic.h(this, b, c)
};
n.J = function() {
  return 0 === this.m ? null : 32 > this.m ? J.i(this.ea) : v ? ee.h ? ee.h(this, 0, 0) : ee.call(null, this, 0, 0) : null
};
n.T = h("m");
n.hb = function() {
  return 0 < this.m ? z.g(this, this.m - 1) : null
};
n.ib = function() {
  if(0 === this.m) {
    throw Error("Can't pop empty vector");
  }
  if(1 === this.m) {
    return zb(fe, this.o)
  }
  if(1 < this.m - Rd(this)) {
    return new ae(this.o, this.m - 1, this.shift, this.root, this.ea.slice(0, -1), null)
  }
  if(v) {
    var a = Wd(this, this.m - 2), b = $d(this, this.shift, this.root), b = null == b ? ge : b, c = this.m - 1;
    return 5 < this.shift && null == b.j[1] ? new ae(this.o, c, this.shift - 5, b.j[0], a, null) : new ae(this.o, c, this.shift, b, a, null)
  }
  return null
};
n.cc = function(a, b, c) {
  return kb(this, b, c)
};
n.F = function(a, b) {
  return oc(this, b)
};
n.Q = function(a, b) {
  return new ae(b, this.m, this.shift, this.root, this.ea, this.q)
};
n.P = h("o");
n.w = function(a, b) {
  return Wd(this, b)[b & 31]
};
n.va = function(a, b, c) {
  return 0 <= b && b < this.m ? z.g(this, b) : c
};
n.V = function() {
  return rc(fe, this.o)
};
var ge = new Pd(null, Array(32)), fe = new ae(null, 0, 5, ge, [], 0);
function Z(a, b) {
  var c = a.length, d = b ? a : a.slice();
  if(32 > c) {
    return new ae(null, c, 5, ge, d, null)
  }
  for(var e = d.slice(0, 32), f = 32, g = Qb(new ae(null, 32, 5, ge, e, null));;) {
    if(f < c) {
      e = f + 1, g = Rb(g, d[f]), f = e
    }else {
      return Sb(g)
    }
  }
}
function he(a) {
  return Sb(Sc.h(Rb, Qb(fe), a))
}
function ie(a, b, c, d, e, f) {
  this.U = a;
  this.ua = b;
  this.s = c;
  this.M = d;
  this.o = e;
  this.q = f;
  this.n = 32243948;
  this.A = 1536
}
n = ie.prototype;
n.G = function() {
  var a = this.q;
  return null != a ? a : this.q = a = mc(this)
};
n.ja = function() {
  if(this.M + 1 < this.ua.length) {
    var a = ee.v ? ee.v(this.U, this.ua, this.s, this.M + 1) : ee.call(null, this.U, this.ua, this.s, this.M + 1);
    return null == a ? null : a
  }
  return Wb(this)
};
n.O = function(a, b) {
  return N(b, this)
};
n.toString = function() {
  return Yb(this)
};
n.$ = function(a, b) {
  return ic.g(je.h ? je.h(this.U, this.s + this.M, P(this.U)) : je.call(null, this.U, this.s + this.M, P(this.U)), b)
};
n.aa = function(a, b, c) {
  return ic.h(je.h ? je.h(this.U, this.s + this.M, P(this.U)) : je.call(null, this.U, this.s + this.M, P(this.U)), b, c)
};
n.J = function() {
  return this
};
n.X = function() {
  return this.ua[this.M]
};
n.ka = function() {
  if(this.M + 1 < this.ua.length) {
    var a = ee.v ? ee.v(this.U, this.ua, this.s, this.M + 1) : ee.call(null, this.U, this.ua, this.s, this.M + 1);
    return null == a ? H : a
  }
  return C(this)
};
n.Kb = function() {
  var a = this.ua.length, a = this.s + a < Za(this.U) ? ee.h ? ee.h(this.U, this.s + a, 0) : ee.call(null, this.U, this.s + a, 0) : null;
  return null == a ? null : a
};
n.F = function(a, b) {
  return oc(this, b)
};
n.Q = function(a, b) {
  return ee.C ? ee.C(this.U, this.ua, this.s, this.M, b) : ee.call(null, this.U, this.ua, this.s, this.M, b)
};
n.V = function() {
  return rc(fe, this.o)
};
n.Lb = function() {
  return ld.g(this.ua, this.M)
};
n.Mb = function() {
  var a = this.ua.length, a = this.s + a < Za(this.U) ? ee.h ? ee.h(this.U, this.s + a, 0) : ee.call(null, this.U, this.s + a, 0) : null;
  return null == a ? H : a
};
var ee = function() {
  function a(a, b, c, d, l) {
    return new ie(a, b, c, d, l, null)
  }
  function b(a, b, c, d) {
    return new ie(a, b, c, d, null, null)
  }
  function c(a, b, c) {
    return new ie(a, Wd(a, b), b, c, null, null)
  }
  var d = null, d = function(d, f, g, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, g);
      case 4:
        return b.call(this, d, f, g, k);
      case 5:
        return a.call(this, d, f, g, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.h = c;
  d.v = b;
  d.C = a;
  return d
}();
function ke(a, b, c, d, e) {
  this.o = a;
  this.ra = b;
  this.start = c;
  this.end = d;
  this.q = e;
  this.A = 0;
  this.n = 32400159
}
n = ke.prototype;
n.G = function() {
  var a = this.q;
  return null != a ? a : this.q = a = mc(this)
};
n.R = function(a, b) {
  return z.h(this, b, null)
};
n.S = function(a, b, c) {
  return z.h(this, b, c)
};
n.Ga = function(a, b, c) {
  var d = this, e = d.start + b;
  return le.C ? le.C(d.o, wc.h(d.ra, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null) : le.call(null, d.o, wc.h(d.ra, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b
  }(), null)
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.va(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
n.i = function(a) {
  return this.w(null, a)
};
n.g = function(a, b) {
  return this.va(null, a, b)
};
n.O = function(a, b) {
  return le.C ? le.C(this.o, ub(this.ra, this.end, b), this.start, this.end + 1, null) : le.call(null, this.o, ub(this.ra, this.end, b), this.start, this.end + 1, null)
};
n.toString = function() {
  return Yb(this)
};
n.$ = function(a, b) {
  return ic.g(this, b)
};
n.aa = function(a, b, c) {
  return ic.h(this, b, c)
};
n.J = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : N(z.g(a.ra, d), new hd(null, function() {
      return c(d + 1)
    }, null, null))
  }(a.start)
};
n.T = function() {
  return this.end - this.start
};
n.hb = function() {
  return z.g(this.ra, this.end - 1)
};
n.ib = function() {
  if(this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  return le.C ? le.C(this.o, this.ra, this.start, this.end - 1, null) : le.call(null, this.o, this.ra, this.start, this.end - 1, null)
};
n.cc = function(a, b, c) {
  return kb(this, b, c)
};
n.F = function(a, b) {
  return oc(this, b)
};
n.Q = function(a, b) {
  return le.C ? le.C(b, this.ra, this.start, this.end, this.q) : le.call(null, b, this.ra, this.start, this.end, this.q)
};
n.P = h("o");
n.w = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Vd(b, this.end - this.start) : z.g(this.ra, this.start + b)
};
n.va = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : z.h(this.ra, this.start + b, c)
};
n.V = function() {
  return rc(fe, this.o)
};
function le(a, b, c, d, e) {
  for(;;) {
    if(b instanceof ke) {
      c = b.start + c, d = b.start + d, b = b.ra
    }else {
      var f = P(b);
      if(0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new ke(a, b, c, d, e)
    }
  }
}
var je = function() {
  function a(a, b, c) {
    return le(null, a, b, c, null)
  }
  function b(a, b) {
    return c.h(a, b, P(a))
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c
}();
function ce(a) {
  return new Pd({}, a.j.slice())
}
function de(a) {
  var b = Array(32);
  Ic(a, 0, b, 0, a.length);
  return b
}
var ne = function me(b, c, d, e) {
  d = b.root.D === d.D ? d : new Pd(b.root.D, d.j.slice());
  var f = b.m - 1 >>> c & 31;
  if(5 === c) {
    b = e
  }else {
    var g = d.j[f];
    b = null != g ? me(b, c - 5, g, e) : Sd(b.root.D, c - 5, e)
  }
  d.j[f] = b;
  return d
};
function be(a, b, c, d) {
  this.m = a;
  this.shift = b;
  this.root = c;
  this.ea = d;
  this.n = 275;
  this.A = 88
}
n = be.prototype;
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.R(null, c);
      case 3:
        return this.S(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
n.i = function(a) {
  return this.R(null, a)
};
n.g = function(a, b) {
  return this.S(null, a, b)
};
n.R = function(a, b) {
  return z.h(this, b, null)
};
n.S = function(a, b, c) {
  return z.h(this, b, c)
};
n.w = function(a, b) {
  if(this.root.D) {
    return Wd(this, b)[b & 31]
  }
  throw Error("nth after persistent!");
};
n.va = function(a, b, c) {
  return 0 <= b && b < this.m ? z.g(this, b) : c
};
n.T = function() {
  if(this.root.D) {
    return this.m
  }
  throw Error("count after persistent!");
};
n.tc = function(a, b, c) {
  var d = this;
  if(d.root.D) {
    if(0 <= b && b < d.m) {
      return Rd(this) <= b ? d.ea[b & 31] = c : (a = function f(a, k) {
        var l = d.root.D === k.D ? k : new Pd(d.root.D, k.j.slice());
        if(0 === a) {
          l.j[b & 31] = c
        }else {
          var p = b >>> a & 31, m = f(a - 5, l.j[p]);
          l.j[p] = m
        }
        return l
      }.call(null, d.shift, d.root), d.root = a), this
    }
    if(b === d.m) {
      return Rb(this, c)
    }
    if(v) {
      throw Error([y("Index "), y(b), y(" out of bounds for TransientVector of length"), y(d.m)].join(""));
    }
    return null
  }
  throw Error("assoc! after persistent!");
};
n.jb = function(a, b, c) {
  return Ub(this, b, c)
};
n.kb = function(a, b) {
  if(this.root.D) {
    if(32 > this.m - Rd(this)) {
      this.ea[this.m & 31] = b
    }else {
      var c = new Pd(this.root.D, this.ea), d = Array(32);
      d[0] = b;
      this.ea = d;
      if(this.m >>> 5 > 1 << this.shift) {
        var d = Array(32), e = this.shift + 5;
        d[0] = this.root;
        d[1] = Sd(this.root.D, this.shift, c);
        this.root = new Pd(this.root.D, d);
        this.shift = e
      }else {
        this.root = ne(this, this.shift, this.root, c)
      }
    }
    this.m += 1;
    return this
  }
  throw Error("conj! after persistent!");
};
n.lb = function() {
  if(this.root.D) {
    this.root.D = null;
    var a = this.m - Rd(this), b = Array(a);
    Ic(this.ea, 0, b, 0, a);
    return new ae(null, this.m, this.shift, this.root, b, null)
  }
  throw Error("persistent! called twice");
};
function oe() {
  this.A = 0;
  this.n = 2097152
}
oe.prototype.F = ba(!1);
var pe = new oe;
function qe(a, b) {
  return Lc(Fc(b) ? P(a) === P(b) ? wd(yd, Bd.g(function(a) {
    return L.g(R.h(b, F(a), pe), F(I(a)))
  }, a)) : null : null)
}
function re(a, b) {
  var c = a.j;
  if(b instanceof X) {
    a: {
      for(var d = c.length, e = b.Ia, f = 0;;) {
        if(d <= f) {
          c = -1;
          break a
        }
        var g = c[f];
        if(g instanceof X && e === g.Ia) {
          c = f;
          break a
        }
        if(v) {
          f += 2
        }else {
          c = null;
          break a
        }
      }
      c = void 0
    }
  }else {
    if(ha(b) || "number" === typeof b) {
      a: {
        d = c.length;
        for(e = 0;;) {
          if(d <= e) {
            c = -1;
            break a
          }
          if(b === c[e]) {
            c = e;
            break a
          }
          if(v) {
            e += 2
          }else {
            c = null;
            break a
          }
        }
        c = void 0
      }
    }else {
      if(b instanceof dc) {
        a: {
          d = c.length;
          e = b.Ma;
          for(f = 0;;) {
            if(d <= f) {
              c = -1;
              break a
            }
            g = c[f];
            if(g instanceof dc && e === g.Ma) {
              c = f;
              break a
            }
            if(v) {
              f += 2
            }else {
              c = null;
              break a
            }
          }
          c = void 0
        }
      }else {
        if(null == b) {
          a: {
            d = c.length;
            for(e = 0;;) {
              if(d <= e) {
                c = -1;
                break a
              }
              if(null == c[e]) {
                c = e;
                break a
              }
              if(v) {
                e += 2
              }else {
                c = null;
                break a
              }
            }
            c = void 0
          }
        }else {
          if(v) {
            a: {
              d = c.length;
              for(e = 0;;) {
                if(d <= e) {
                  c = -1;
                  break a
                }
                if(L.g(b, c[e])) {
                  c = e;
                  break a
                }
                if(v) {
                  e += 2
                }else {
                  c = null;
                  break a
                }
              }
              c = void 0
            }
          }else {
            c = null
          }
        }
      }
    }
  }
  return c
}
function se(a, b, c) {
  this.j = a;
  this.s = b;
  this.fa = c;
  this.A = 0;
  this.n = 32374990
}
n = se.prototype;
n.G = function() {
  return mc(this)
};
n.ja = function() {
  return this.s < this.j.length - 2 ? new se(this.j, this.s + 2, this.fa) : null
};
n.O = function(a, b) {
  return N(b, this)
};
n.toString = function() {
  return Yb(this)
};
n.$ = function(a, b) {
  return O.g(b, this)
};
n.aa = function(a, b, c) {
  return O.h(b, c, this)
};
n.J = function() {
  return this
};
n.T = function() {
  return(this.j.length - this.s) / 2
};
n.X = function() {
  return Z([this.j[this.s], this.j[this.s + 1]], !0)
};
n.ka = function() {
  return this.s < this.j.length - 2 ? new se(this.j, this.s + 2, this.fa) : H
};
n.F = function(a, b) {
  return oc(this, b)
};
n.Q = function(a, b) {
  return new se(this.j, this.s, b)
};
n.P = h("fa");
n.V = function() {
  return rc(H, this.fa)
};
function te(a, b, c, d) {
  this.o = a;
  this.m = b;
  this.j = c;
  this.q = d;
  this.A = 4;
  this.n = 16123663
}
n = te.prototype;
n.fb = function() {
  return new ue({}, this.j.length, this.j.slice())
};
n.G = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Yc(this)
};
n.R = function(a, b) {
  return ib.h(this, b, null)
};
n.S = function(a, b, c) {
  a = re(this, b);
  return-1 === a ? c : this.j[a + 1]
};
n.Ga = function(a, b, c) {
  a = re(this, b);
  if(-1 === a) {
    if(this.m < ve) {
      a = this.j;
      for(var d = a.length, e = Array(d + 2), f = 0;;) {
        if(f < d) {
          e[f] = a[f], f += 1
        }else {
          break
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new te(this.o, this.m + 1, e, null)
    }
    return zb(kb(Ld(we, this), b, c), this.o)
  }
  return c === this.j[a + 1] ? this : v ? (b = this.j.slice(), b[a + 1] = c, new te(this.o, this.m, b, null)) : null
};
n.Jb = function(a, b) {
  return-1 !== re(this, b)
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.R(null, c);
      case 3:
        return this.S(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
n.i = function(a) {
  return this.R(null, a)
};
n.g = function(a, b) {
  return this.S(null, a, b)
};
n.O = function(a, b) {
  return Gc(b) ? kb(this, z.g(b, 0), z.g(b, 1)) : Sc.h(bb, this, b)
};
n.toString = function() {
  return Yb(this)
};
n.J = function() {
  return 0 <= this.j.length - 2 ? new se(this.j, 0, null) : null
};
n.T = h("m");
n.F = function(a, b) {
  return qe(this, b)
};
n.Q = function(a, b) {
  return new te(b, this.m, this.j, this.q)
};
n.P = h("o");
n.V = function() {
  return zb(xe, this.o)
};
n.Xa = function(a, b) {
  if(0 <= re(this, b)) {
    var c = this.j.length, d = c - 2;
    if(0 === d) {
      return $a(this)
    }
    for(var d = Array(d), e = 0, f = 0;;) {
      if(e >= c) {
        return new te(this.o, this.m - 1, d, null)
      }
      if(L.g(b, this.j[e])) {
        e += 2
      }else {
        if(v) {
          d[f] = this.j[e], d[f + 1] = this.j[e + 1], f += 2, e += 2
        }else {
          return null
        }
      }
    }
  }else {
    return this
  }
};
var xe = new te(null, 0, [], null), ve = 8;
function Zb(a, b) {
  var c = b ? a : a.slice();
  return new te(null, c.length / 2, c, null)
}
function ue(a, b, c) {
  this.Za = a;
  this.Ra = b;
  this.j = c;
  this.A = 56;
  this.n = 258
}
n = ue.prototype;
n.jb = function(a, b, c) {
  if(s(this.Za)) {
    a = re(this, b);
    if(-1 === a) {
      if(this.Ra + 2 <= 2 * ve) {
        return this.Ra += 2, this.j.push(b), this.j.push(c), this
      }
      a = ye.g ? ye.g(this.Ra, this.j) : ye.call(null, this.Ra, this.j);
      return Tb(a, b, c)
    }
    c !== this.j[a + 1] && (this.j[a + 1] = c);
    return this
  }
  throw Error("assoc! after persistent!");
};
n.kb = function(a, b) {
  if(s(this.Za)) {
    if(b ? b.n & 2048 || b.Vc || (b.n ? 0 : u(nb, b)) : u(nb, b)) {
      return Tb(this, Zc.i ? Zc.i(b) : Zc.call(null, b), $c.i ? $c.i(b) : $c.call(null, b))
    }
    for(var c = E(b), d = this;;) {
      var e = F(c);
      if(s(e)) {
        c = I(c), d = Tb(d, Zc.i ? Zc.i(e) : Zc.call(null, e), $c.i ? $c.i(e) : $c.call(null, e))
      }else {
        return d
      }
    }
  }else {
    throw Error("conj! after persistent!");
  }
};
n.lb = function() {
  if(s(this.Za)) {
    return this.Za = !1, new te(null, Uc(this.Ra), this.j, null)
  }
  throw Error("persistent! called twice");
};
n.R = function(a, b) {
  return ib.h(this, b, null)
};
n.S = function(a, b, c) {
  if(s(this.Za)) {
    return a = re(this, b), -1 === a ? c : this.j[a + 1]
  }
  throw Error("lookup after persistent!");
};
n.T = function() {
  if(s(this.Za)) {
    return Uc(this.Ra)
  }
  throw Error("count after persistent!");
};
function ye(a, b) {
  for(var c = Qb(we), d = 0;;) {
    if(d < a) {
      c = Tb(c, b[d], b[d + 1]), d += 2
    }else {
      return c
    }
  }
}
function ze() {
  this.Aa = !1
}
function Ae(a, b) {
  return a === b ? !0 : Y(a, b) ? !0 : v ? L.g(a, b) : null
}
var Be = function() {
  function a(a, b, c, g, k) {
    a = a.slice();
    a[b] = c;
    a[g] = k;
    return a
  }
  function b(a, b, c) {
    a = a.slice();
    a[b] = c;
    return a
  }
  var c = null, c = function(c, e, f, g, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, g, k)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.h = b;
  c.C = a;
  return c
}();
function Ce(a, b) {
  var c = Array(a.length - 2);
  Ic(a, 0, c, 0, 2 * b);
  Ic(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c
}
var De = function() {
  function a(a, b, c, g, k, l) {
    a = a.$a(b);
    a.j[c] = g;
    a.j[k] = l;
    return a
  }
  function b(a, b, c, g) {
    a = a.$a(b);
    a.j[c] = g;
    return a
  }
  var c = null, c = function(c, e, f, g, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, g);
      case 6:
        return a.call(this, c, e, f, g, k, l)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.v = b;
  c.Ba = a;
  return c
}();
function Ee(a, b, c) {
  this.D = a;
  this.I = b;
  this.j = c
}
n = Ee.prototype;
n.xa = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = Vc(this.I & g - 1);
  if(0 === (this.I & g)) {
    var l = Vc(this.I);
    if(2 * l < this.j.length) {
      a = this.$a(a);
      b = a.j;
      f.Aa = !0;
      a: {
        for(c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if(0 === c) {
            break a
          }
          b[l] = b[f];
          l -= 1;
          c -= 1;
          f -= 1
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.I |= g;
      return a
    }
    if(16 <= l) {
      k = Array(32);
      k[c >>> b & 31] = Fe.xa(a, b + 5, c, d, e, f);
      for(e = d = 0;;) {
        if(32 > d) {
          0 !== (this.I >>> d & 1) && (k[d] = null != this.j[e] ? Fe.xa(a, b + 5, D(this.j[e]), this.j[e], this.j[e + 1], f) : this.j[e + 1], e += 2), d += 1
        }else {
          break
        }
      }
      return new Ge(a, l + 1, k)
    }
    return v ? (b = Array(2 * (l + 4)), Ic(this.j, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, Ic(this.j, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.Aa = !0, a = this.$a(a), a.j = b, a.I |= g, a) : null
  }
  l = this.j[2 * k];
  g = this.j[2 * k + 1];
  return null == l ? (l = g.xa(a, b + 5, c, d, e, f), l === g ? this : De.v(this, a, 2 * k + 1, l)) : Ae(d, l) ? e === g ? this : De.v(this, a, 2 * k + 1, e) : v ? (f.Aa = !0, De.Ba(this, a, 2 * k, null, 2 * k + 1, He.Wa ? He.Wa(a, b + 5, l, g, c, d, e) : He.call(null, a, b + 5, l, g, c, d, e))) : null
};
n.mb = function() {
  return Ie.i ? Ie.i(this.j) : Ie.call(null, this.j)
};
n.$a = function(a) {
  if(a === this.D) {
    return this
  }
  var b = Vc(this.I), c = Array(0 > b ? 4 : 2 * (b + 1));
  Ic(this.j, 0, c, 0, 2 * b);
  return new Ee(a, this.I, c)
};
n.nb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if(0 === (this.I & d)) {
    return this
  }
  var e = Vc(this.I & d - 1), f = this.j[2 * e], g = this.j[2 * e + 1];
  return null == f ? (a = g.nb(a + 5, b, c), a === g ? this : null != a ? new Ee(null, this.I, Be.h(this.j, 2 * e + 1, a)) : this.I === d ? null : v ? new Ee(null, this.I ^ d, Ce(this.j, e)) : null) : Ae(c, f) ? new Ee(null, this.I ^ d, Ce(this.j, e)) : v ? this : null
};
n.wa = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = Vc(this.I & f - 1);
  if(0 === (this.I & f)) {
    var k = Vc(this.I);
    if(16 <= k) {
      g = Array(32);
      g[b >>> a & 31] = Fe.wa(a + 5, b, c, d, e);
      for(d = c = 0;;) {
        if(32 > c) {
          0 !== (this.I >>> c & 1) && (g[c] = null != this.j[d] ? Fe.wa(a + 5, D(this.j[d]), this.j[d], this.j[d + 1], e) : this.j[d + 1], d += 2), c += 1
        }else {
          break
        }
      }
      return new Ge(null, k + 1, g)
    }
    a = Array(2 * (k + 1));
    Ic(this.j, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    Ic(this.j, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.Aa = !0;
    return new Ee(null, this.I | f, a)
  }
  k = this.j[2 * g];
  f = this.j[2 * g + 1];
  return null == k ? (k = f.wa(a + 5, b, c, d, e), k === f ? this : new Ee(null, this.I, Be.h(this.j, 2 * g + 1, k))) : Ae(c, k) ? d === f ? this : new Ee(null, this.I, Be.h(this.j, 2 * g + 1, d)) : v ? (e.Aa = !0, new Ee(null, this.I, Be.C(this.j, 2 * g, null, 2 * g + 1, He.Ba ? He.Ba(a + 5, k, f, b, c, d) : He.call(null, a + 5, k, f, b, c, d)))) : null
};
n.Ja = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if(0 === (this.I & e)) {
    return d
  }
  var f = Vc(this.I & e - 1), e = this.j[2 * f], f = this.j[2 * f + 1];
  return null == e ? f.Ja(a + 5, b, c, d) : Ae(c, e) ? f : v ? d : null
};
var Fe = new Ee(null, 0, []);
function Ge(a, b, c) {
  this.D = a;
  this.m = b;
  this.j = c
}
n = Ge.prototype;
n.xa = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.j[g];
  if(null == k) {
    return a = De.v(this, a, g, Fe.xa(a, b + 5, c, d, e, f)), a.m += 1, a
  }
  b = k.xa(a, b + 5, c, d, e, f);
  return b === k ? this : De.v(this, a, g, b)
};
n.mb = function() {
  return Je.i ? Je.i(this.j) : Je.call(null, this.j)
};
n.$a = function(a) {
  return a === this.D ? this : new Ge(a, this.m, this.j.slice())
};
n.nb = function(a, b, c) {
  var d = b >>> a & 31, e = this.j[d];
  if(null != e) {
    a = e.nb(a + 5, b, c);
    if(a === e) {
      d = this
    }else {
      if(null == a) {
        if(8 >= this.m) {
          a: {
            e = this.j;
            a = 2 * (this.m - 1);
            b = Array(a);
            c = 0;
            for(var f = 1, g = 0;;) {
              if(c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, g |= 1 << c), c += 1
              }else {
                d = new Ee(null, g, b);
                break a
              }
            }
            d = void 0
          }
        }else {
          d = new Ge(null, this.m - 1, Be.h(this.j, d, a))
        }
      }else {
        d = v ? new Ge(null, this.m, Be.h(this.j, d, a)) : null
      }
    }
    return d
  }
  return this
};
n.wa = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.j[f];
  if(null == g) {
    return new Ge(null, this.m + 1, Be.h(this.j, f, Fe.wa(a + 5, b, c, d, e)))
  }
  a = g.wa(a + 5, b, c, d, e);
  return a === g ? this : new Ge(null, this.m, Be.h(this.j, f, a))
};
n.Ja = function(a, b, c, d) {
  var e = this.j[b >>> a & 31];
  return null != e ? e.Ja(a + 5, b, c, d) : d
};
function Ke(a, b, c) {
  b *= 2;
  for(var d = 0;;) {
    if(d < b) {
      if(Ae(c, a[d])) {
        return d
      }
      d += 2
    }else {
      return-1
    }
  }
}
function Le(a, b, c, d) {
  this.D = a;
  this.Ca = b;
  this.m = c;
  this.j = d
}
n = Le.prototype;
n.xa = function(a, b, c, d, e, f) {
  if(c === this.Ca) {
    b = Ke(this.j, this.m, d);
    if(-1 === b) {
      if(this.j.length > 2 * this.m) {
        return a = De.Ba(this, a, 2 * this.m, d, 2 * this.m + 1, e), f.Aa = !0, a.m += 1, a
      }
      c = this.j.length;
      b = Array(c + 2);
      Ic(this.j, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.Aa = !0;
      f = this.m + 1;
      a === this.D ? (this.j = b, this.m = f, a = this) : a = new Le(this.D, this.Ca, f, b);
      return a
    }
    return this.j[b + 1] === e ? this : De.v(this, a, b + 1, e)
  }
  return(new Ee(a, 1 << (this.Ca >>> b & 31), [null, this, null, null])).xa(a, b, c, d, e, f)
};
n.mb = function() {
  return Ie.i ? Ie.i(this.j) : Ie.call(null, this.j)
};
n.$a = function(a) {
  if(a === this.D) {
    return this
  }
  var b = Array(2 * (this.m + 1));
  Ic(this.j, 0, b, 0, 2 * this.m);
  return new Le(a, this.Ca, this.m, b)
};
n.nb = function(a, b, c) {
  a = Ke(this.j, this.m, c);
  return-1 === a ? this : 1 === this.m ? null : v ? new Le(null, this.Ca, this.m - 1, Ce(this.j, Uc(a))) : null
};
n.wa = function(a, b, c, d, e) {
  return b === this.Ca ? (a = Ke(this.j, this.m, c), -1 === a ? (a = 2 * this.m, b = Array(a + 2), Ic(this.j, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.Aa = !0, new Le(null, this.Ca, this.m + 1, b)) : L.g(this.j[a], d) ? this : new Le(null, this.Ca, this.m, Be.h(this.j, a + 1, d))) : (new Ee(null, 1 << (this.Ca >>> a & 31), [null, this])).wa(a, b, c, d, e)
};
n.Ja = function(a, b, c, d) {
  a = Ke(this.j, this.m, c);
  return 0 > a ? d : Ae(c, this.j[a]) ? this.j[a + 1] : v ? d : null
};
var He = function() {
  function a(a, b, c, g, k, l, p) {
    var m = D(c);
    if(m === k) {
      return new Le(null, m, 2, [c, g, l, p])
    }
    var t = new ze;
    return Fe.xa(a, b, m, c, g, t).xa(a, b, k, l, p, t)
  }
  function b(a, b, c, g, k, l) {
    var p = D(b);
    if(p === g) {
      return new Le(null, p, 2, [b, c, k, l])
    }
    var m = new ze;
    return Fe.wa(a, p, b, c, m).wa(a, g, k, l, m)
  }
  var c = null, c = function(c, e, f, g, k, l, p) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, g, k, l);
      case 7:
        return a.call(this, c, e, f, g, k, l, p)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.Ba = b;
  c.Wa = a;
  return c
}();
function Me(a, b, c, d, e) {
  this.o = a;
  this.ya = b;
  this.s = c;
  this.K = d;
  this.q = e;
  this.A = 0;
  this.n = 32374860
}
n = Me.prototype;
n.G = function() {
  var a = this.q;
  return null != a ? a : this.q = a = mc(this)
};
n.O = function(a, b) {
  return N(b, this)
};
n.toString = function() {
  return Yb(this)
};
n.$ = function(a, b) {
  return O.g(b, this)
};
n.aa = function(a, b, c) {
  return O.h(b, c, this)
};
n.J = function() {
  return this
};
n.X = function() {
  return null == this.K ? Z([this.ya[this.s], this.ya[this.s + 1]], !0) : F(this.K)
};
n.ka = function() {
  return null == this.K ? Ie.h ? Ie.h(this.ya, this.s + 2, null) : Ie.call(null, this.ya, this.s + 2, null) : Ie.h ? Ie.h(this.ya, this.s, I(this.K)) : Ie.call(null, this.ya, this.s, I(this.K))
};
n.F = function(a, b) {
  return oc(this, b)
};
n.Q = function(a, b) {
  return new Me(b, this.ya, this.s, this.K, this.q)
};
n.P = h("o");
n.V = function() {
  return rc(H, this.o)
};
var Ie = function() {
  function a(a, b, c) {
    if(null == c) {
      for(c = a.length;;) {
        if(b < c) {
          if(null != a[b]) {
            return new Me(null, a, b, null, null)
          }
          var g = a[b + 1];
          if(s(g) && (g = g.mb(), s(g))) {
            return new Me(null, a, b + 2, g, null)
          }
          b += 2
        }else {
          return null
        }
      }
    }else {
      return new Me(null, a, b, c, null)
    }
  }
  function b(a) {
    return c.h(a, 0, null)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.h = a;
  return c
}();
function Ne(a, b, c, d, e) {
  this.o = a;
  this.ya = b;
  this.s = c;
  this.K = d;
  this.q = e;
  this.A = 0;
  this.n = 32374860
}
n = Ne.prototype;
n.G = function() {
  var a = this.q;
  return null != a ? a : this.q = a = mc(this)
};
n.O = function(a, b) {
  return N(b, this)
};
n.toString = function() {
  return Yb(this)
};
n.$ = function(a, b) {
  return O.g(b, this)
};
n.aa = function(a, b, c) {
  return O.h(b, c, this)
};
n.J = function() {
  return this
};
n.X = function() {
  return F(this.K)
};
n.ka = function() {
  return Je.v ? Je.v(null, this.ya, this.s, I(this.K)) : Je.call(null, null, this.ya, this.s, I(this.K))
};
n.F = function(a, b) {
  return oc(this, b)
};
n.Q = function(a, b) {
  return new Ne(b, this.ya, this.s, this.K, this.q)
};
n.P = h("o");
n.V = function() {
  return rc(H, this.o)
};
var Je = function() {
  function a(a, b, c, g) {
    if(null == g) {
      for(g = b.length;;) {
        if(c < g) {
          var k = b[c];
          if(s(k) && (k = k.mb(), s(k))) {
            return new Ne(a, b, c + 1, k, null)
          }
          c += 1
        }else {
          return null
        }
      }
    }else {
      return new Ne(a, b, c, g, null)
    }
  }
  function b(a) {
    return c.v(null, a, 0, null)
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, g)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.v = a;
  return c
}();
function Oe(a, b, c, d, e, f) {
  this.o = a;
  this.m = b;
  this.root = c;
  this.ha = d;
  this.qa = e;
  this.q = f;
  this.A = 4;
  this.n = 16123663
}
n = Oe.prototype;
n.fb = function() {
  return new Pe({}, this.root, this.m, this.ha, this.qa)
};
n.G = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Yc(this)
};
n.R = function(a, b) {
  return ib.h(this, b, null)
};
n.S = function(a, b, c) {
  return null == b ? this.ha ? this.qa : c : null == this.root ? c : v ? this.root.Ja(0, D(b), b, c) : null
};
n.Ga = function(a, b, c) {
  if(null == b) {
    return this.ha && c === this.qa ? this : new Oe(this.o, this.ha ? this.m : this.m + 1, this.root, !0, c, null)
  }
  a = new ze;
  b = (null == this.root ? Fe : this.root).wa(0, D(b), b, c, a);
  return b === this.root ? this : new Oe(this.o, a.Aa ? this.m + 1 : this.m, b, this.ha, this.qa, null)
};
n.Jb = function(a, b) {
  return null == b ? this.ha : null == this.root ? !1 : v ? this.root.Ja(0, D(b), b, Jc) !== Jc : null
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.R(null, c);
      case 3:
        return this.S(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
n.i = function(a) {
  return this.R(null, a)
};
n.g = function(a, b) {
  return this.S(null, a, b)
};
n.O = function(a, b) {
  return Gc(b) ? kb(this, z.g(b, 0), z.g(b, 1)) : Sc.h(bb, this, b)
};
n.toString = function() {
  return Yb(this)
};
n.J = function() {
  if(0 < this.m) {
    var a = null != this.root ? this.root.mb() : null;
    return this.ha ? N(Z([null, this.qa], !0), a) : a
  }
  return null
};
n.T = h("m");
n.F = function(a, b) {
  return qe(this, b)
};
n.Q = function(a, b) {
  return new Oe(b, this.m, this.root, this.ha, this.qa, this.q)
};
n.P = h("o");
n.V = function() {
  return zb(we, this.o)
};
n.Xa = function(a, b) {
  if(null == b) {
    return this.ha ? new Oe(this.o, this.m - 1, this.root, !1, null, null) : this
  }
  if(null == this.root) {
    return this
  }
  if(v) {
    var c = this.root.nb(0, D(b), b);
    return c === this.root ? this : new Oe(this.o, this.m - 1, c, this.ha, this.qa, null)
  }
  return null
};
var we = new Oe(null, 0, null, !1, null, 0);
function vc(a, b) {
  for(var c = a.length, d = 0, e = Qb(we);;) {
    if(d < c) {
      var f = d + 1, e = e.jb(null, a[d], b[d]), d = f
    }else {
      return Sb(e)
    }
  }
}
function Pe(a, b, c, d, e) {
  this.D = a;
  this.root = b;
  this.count = c;
  this.ha = d;
  this.qa = e;
  this.A = 56;
  this.n = 258
}
n = Pe.prototype;
n.jb = function(a, b, c) {
  return Qe(this, b, c)
};
n.kb = function(a, b) {
  var c;
  a: {
    if(this.D) {
      if(b ? b.n & 2048 || b.Vc || (b.n ? 0 : u(nb, b)) : u(nb, b)) {
        c = Qe(this, Zc.i ? Zc.i(b) : Zc.call(null, b), $c.i ? $c.i(b) : $c.call(null, b));
        break a
      }
      c = E(b);
      for(var d = this;;) {
        var e = F(c);
        if(s(e)) {
          c = I(c), d = Qe(d, Zc.i ? Zc.i(e) : Zc.call(null, e), $c.i ? $c.i(e) : $c.call(null, e))
        }else {
          c = d;
          break a
        }
      }
    }else {
      throw Error("conj! after persistent");
    }
    c = void 0
  }
  return c
};
n.lb = function() {
  var a;
  if(this.D) {
    this.D = null, a = new Oe(null, this.count, this.root, this.ha, this.qa, null)
  }else {
    throw Error("persistent! called twice");
  }
  return a
};
n.R = function(a, b) {
  return null == b ? this.ha ? this.qa : null : null == this.root ? null : this.root.Ja(0, D(b), b)
};
n.S = function(a, b, c) {
  return null == b ? this.ha ? this.qa : c : null == this.root ? c : this.root.Ja(0, D(b), b, c)
};
n.T = function() {
  if(this.D) {
    return this.count
  }
  throw Error("count after persistent!");
};
function Qe(a, b, c) {
  if(a.D) {
    if(null == b) {
      a.qa !== c && (a.qa = c), a.ha || (a.count += 1, a.ha = !0)
    }else {
      var d = new ze;
      b = (null == a.root ? Fe : a.root).xa(a.D, 0, D(b), b, c, d);
      b !== a.root && (a.root = b);
      d.Aa && (a.count += 1)
    }
    return a
  }
  throw Error("assoc! after persistent!");
}
var Re = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    for(var b = E(a), e = Qb(we);;) {
      if(b) {
        a = I(I(b));
        var f = F(b), b = F(I(b)), e = Tb(e, f, b), b = a
      }else {
        return Sb(e)
      }
    }
  }
  a.p = 0;
  a.l = function(a) {
    a = E(a);
    return b(a)
  };
  a.k = b;
  return a
}(), Se = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return new te(null, Uc(P(a)), T.g(Wa, a), null)
  }
  a.p = 0;
  a.l = function(a) {
    a = E(a);
    return b(a)
  };
  a.k = b;
  return a
}();
function Te(a, b) {
  this.da = a;
  this.fa = b;
  this.A = 0;
  this.n = 32374988
}
n = Te.prototype;
n.G = function() {
  return mc(this)
};
n.ja = function() {
  var a = this.da, a = (a ? a.n & 128 || a.ub || (a.n ? 0 : u(gb, a)) : u(gb, a)) ? this.da.ja(null) : I(this.da);
  return null == a ? null : new Te(a, this.fa)
};
n.O = function(a, b) {
  return N(b, this)
};
n.toString = function() {
  return Yb(this)
};
n.$ = function(a, b) {
  return O.g(b, this)
};
n.aa = function(a, b, c) {
  return O.h(b, c, this)
};
n.J = function() {
  return this
};
n.X = function() {
  return this.da.X(null).$b()
};
n.ka = function() {
  var a = this.da, a = (a ? a.n & 128 || a.ub || (a.n ? 0 : u(gb, a)) : u(gb, a)) ? this.da.ja(null) : I(this.da);
  return null != a ? new Te(a, this.fa) : H
};
n.F = function(a, b) {
  return oc(this, b)
};
n.Q = function(a, b) {
  return new Te(this.da, b)
};
n.P = h("fa");
n.V = function() {
  return rc(H, this.fa)
};
function Zc(a) {
  return ob(a)
}
function Ue(a, b) {
  this.da = a;
  this.fa = b;
  this.A = 0;
  this.n = 32374988
}
n = Ue.prototype;
n.G = function() {
  return mc(this)
};
n.ja = function() {
  var a = this.da, a = (a ? a.n & 128 || a.ub || (a.n ? 0 : u(gb, a)) : u(gb, a)) ? this.da.ja(null) : I(this.da);
  return null == a ? null : new Ue(a, this.fa)
};
n.O = function(a, b) {
  return N(b, this)
};
n.toString = function() {
  return Yb(this)
};
n.$ = function(a, b) {
  return O.g(b, this)
};
n.aa = function(a, b, c) {
  return O.h(b, c, this)
};
n.J = function() {
  return this
};
n.X = function() {
  return this.da.X(null).ac()
};
n.ka = function() {
  var a = this.da, a = (a ? a.n & 128 || a.ub || (a.n ? 0 : u(gb, a)) : u(gb, a)) ? this.da.ja(null) : I(this.da);
  return null != a ? new Ue(a, this.fa) : H
};
n.F = function(a, b) {
  return oc(this, b)
};
n.Q = function(a, b) {
  return new Ue(this.da, b)
};
n.P = h("fa");
n.V = function() {
  return rc(H, this.fa)
};
function Ve(a) {
  return(a = E(a)) ? new Ue(a, null) : null
}
function $c(a) {
  return pb(a)
}
var We = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    return s(xd(a)) ? Sc.g(function(a, b) {
      return tc.g(s(a) ? a : xe, b)
    }, a) : null
  }
  a.p = 0;
  a.l = function(a) {
    a = E(a);
    return b(a)
  };
  a.k = b;
  return a
}();
function Xe(a, b, c) {
  this.o = a;
  this.cb = b;
  this.q = c;
  this.A = 4;
  this.n = 15077647
}
n = Xe.prototype;
n.fb = function() {
  return new Ye(Qb(this.cb))
};
n.G = function() {
  var a = this.q;
  if(null != a) {
    return a
  }
  a: {
    for(var a = 0, b = E(this);;) {
      if(b) {
        var c = F(b), a = (a + D(c)) % 4503599627370496, b = I(b)
      }else {
        break a
      }
    }
    a = void 0
  }
  return this.q = a
};
n.R = function(a, b) {
  return ib.h(this, b, null)
};
n.S = function(a, b, c) {
  return s(jb(this.cb, b)) ? b : c
};
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.R(null, c);
      case 3:
        return this.S(null, c, d)
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
n.i = function(a) {
  return this.R(null, a)
};
n.g = function(a, b) {
  return this.S(null, a, b)
};
n.O = function(a, b) {
  return new Xe(this.o, wc.h(this.cb, b, null), null)
};
n.toString = function() {
  return Yb(this)
};
n.J = function() {
  var a = E(this.cb);
  return a ? new Te(a, null) : null
};
n.T = function() {
  return Za(this.cb)
};
n.F = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.n & 4096 || b.Ad ? !0 : b.n ? !1 : u(qb, b) : u(qb, b)) && P(c) === P(b) && wd(function(a) {
    return Mc(c, a)
  }, b)
};
n.Q = function(a, b) {
  return new Xe(b, this.cb, this.q)
};
n.P = h("o");
n.V = function() {
  return rc(Ze, this.o)
};
var Ze = new Xe(null, xe, 0);
function $e(a) {
  var b = a.length;
  if(b / 2 <= ve) {
    return new Xe(null, Zb.g ? Zb.g(a, !0) : Zb.call(null, a, !0), null)
  }
  for(var c = 0, d = Qb(Ze);;) {
    if(c < b) {
      var e = c + 2, d = Rb(d, a[c]), c = e
    }else {
      return Sb(d)
    }
  }
}
function Ye(a) {
  this.Ea = a;
  this.n = 259;
  this.A = 136
}
n = Ye.prototype;
n.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return ib.h(this.Ea, c, Jc) === Jc ? null : c;
      case 3:
        return ib.h(this.Ea, c, Jc) === Jc ? d : c
    }
    throw Error("Invalid arity: " + arguments.length);
  }
}();
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
n.i = function(a) {
  return ib.h(this.Ea, a, Jc) === Jc ? null : a
};
n.g = function(a, b) {
  return ib.h(this.Ea, a, Jc) === Jc ? b : a
};
n.R = function(a, b) {
  return ib.h(this, b, null)
};
n.S = function(a, b, c) {
  return ib.h(this.Ea, b, Jc) === Jc ? c : b
};
n.T = function() {
  return P(this.Ea)
};
n.kb = function(a, b) {
  this.Ea = Tb(this.Ea, b, null);
  return this
};
n.lb = function() {
  return new Xe(null, Sb(this.Ea), null)
};
function fd(a) {
  if(a && (a.A & 4096 || a.Xc)) {
    return a.name
  }
  if("string" === typeof a) {
    return a
  }
  throw Error([y("Doesn't support name: "), y(a)].join(""));
}
var bf = function af(b, c) {
  return new hd(null, function() {
    var d = E(c);
    return d ? s(b.i ? b.i(F(d)) : b.call(null, F(d))) ? N(F(d), af(b, G(d))) : null : null
  }, null, null)
};
function cf(a) {
  return td(Sc.h(function(a, c) {
    var d = R.h(a, c, 0) + 1;
    return Tb(a, c, d)
  }, Qb(xe), a))
}
var df = function() {
  function a(a, b, c) {
    return function() {
      var d = null, e = function() {
        function d(a, b, c, f) {
          var g = null;
          3 < arguments.length && (g = J(Array.prototype.slice.call(arguments, 3), 0));
          return e.call(this, a, b, c, g)
        }
        function e(d, l, m, p) {
          return Z.g ? Z.g([T.C(a, d, l, m, p), T.C(b, d, l, m, p), T.C(c, d, l, m, p)], !0) : Z.call(null, [T.C(a, d, l, m, p), T.C(b, d, l, m, p), T.C(c, d, l, m, p)], !0)
        }
        d.p = 3;
        d.l = function(a) {
          var b = F(a);
          a = I(a);
          var c = F(a);
          a = I(a);
          var d = F(a);
          a = G(a);
          return e(b, c, d, a)
        };
        d.k = e;
        return d
      }(), d = function(d, l, x, A) {
        switch(arguments.length) {
          case 0:
            return Z.g ? Z.g([a.t ? a.t() : a.call(null), b.t ? b.t() : b.call(null), c.t ? c.t() : c.call(null)], !0) : Z.call(null, [a.t ? a.t() : a.call(null), b.t ? b.t() : b.call(null), c.t ? c.t() : c.call(null)], !0);
          case 1:
            return Z.g ? Z.g([a.i ? a.i(d) : a.call(null, d), b.i ? b.i(d) : b.call(null, d), c.i ? c.i(d) : c.call(null, d)], !0) : Z.call(null, [a.i ? a.i(d) : a.call(null, d), b.i ? b.i(d) : b.call(null, d), c.i ? c.i(d) : c.call(null, d)], !0);
          case 2:
            return Z.g ? Z.g([a.g ? a.g(d, l) : a.call(null, d, l), b.g ? b.g(d, l) : b.call(null, d, l), c.g ? c.g(d, l) : c.call(null, d, l)], !0) : Z.call(null, [a.g ? a.g(d, l) : a.call(null, d, l), b.g ? b.g(d, l) : b.call(null, d, l), c.g ? c.g(d, l) : c.call(null, d, l)], !0);
          case 3:
            return Z.g ? Z.g([a.h ? a.h(d, l, x) : a.call(null, d, l, x), b.h ? b.h(d, l, x) : b.call(null, d, l, x), c.h ? c.h(d, l, x) : c.call(null, d, l, x)], !0) : Z.call(null, [a.h ? a.h(d, l, x) : a.call(null, d, l, x), b.h ? b.h(d, l, x) : b.call(null, d, l, x), c.h ? c.h(d, l, x) : c.call(null, d, l, x)], !0);
          default:
            return e.k(d, l, x, J(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.p = 3;
      d.l = e.l;
      return d
    }()
  }
  function b(a, b) {
    return function() {
      var c = null, d = function() {
        function c(a, b, e, f) {
          var g = null;
          3 < arguments.length && (g = J(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, g)
        }
        function d(c, e, k, l) {
          return Z.g ? Z.g([T.C(a, c, e, k, l), T.C(b, c, e, k, l)], !0) : Z.call(null, [T.C(a, c, e, k, l), T.C(b, c, e, k, l)], !0)
        }
        c.p = 3;
        c.l = function(a) {
          var b = F(a);
          a = I(a);
          var c = F(a);
          a = I(a);
          var e = F(a);
          a = G(a);
          return d(b, c, e, a)
        };
        c.k = d;
        return c
      }(), c = function(c, e, k, x) {
        switch(arguments.length) {
          case 0:
            return Z.g ? Z.g([a.t ? a.t() : a.call(null), b.t ? b.t() : b.call(null)], !0) : Z.call(null, [a.t ? a.t() : a.call(null), b.t ? b.t() : b.call(null)], !0);
          case 1:
            return Z.g ? Z.g([a.i ? a.i(c) : a.call(null, c), b.i ? b.i(c) : b.call(null, c)], !0) : Z.call(null, [a.i ? a.i(c) : a.call(null, c), b.i ? b.i(c) : b.call(null, c)], !0);
          case 2:
            return Z.g ? Z.g([a.g ? a.g(c, e) : a.call(null, c, e), b.g ? b.g(c, e) : b.call(null, c, e)], !0) : Z.call(null, [a.g ? a.g(c, e) : a.call(null, c, e), b.g ? b.g(c, e) : b.call(null, c, e)], !0);
          case 3:
            return Z.g ? Z.g([a.h ? a.h(c, e, k) : a.call(null, c, e, k), b.h ? b.h(c, e, k) : b.call(null, c, e, k)], !0) : Z.call(null, [a.h ? a.h(c, e, k) : a.call(null, c, e, k), b.h ? b.h(c, e, k) : b.call(null, c, e, k)], !0);
          default:
            return d.k(c, e, k, J(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.p = 3;
      c.l = d.l;
      return c
    }()
  }
  function c(a) {
    return function() {
      var b = null, c = function() {
        function b(a, d, e, f) {
          var g = null;
          3 < arguments.length && (g = J(Array.prototype.slice.call(arguments, 3), 0));
          return c.call(this, a, d, e, g)
        }
        function c(b, d, e, g) {
          return Z.g ? Z.g([T.C(a, b, d, e, g)], !0) : Z.call(null, [T.C(a, b, d, e, g)], !0)
        }
        b.p = 3;
        b.l = function(a) {
          var b = F(a);
          a = I(a);
          var d = F(a);
          a = I(a);
          var e = F(a);
          a = G(a);
          return c(b, d, e, a)
        };
        b.k = c;
        return b
      }(), b = function(b, d, e, g) {
        switch(arguments.length) {
          case 0:
            return Z.g ? Z.g([a.t ? a.t() : a.call(null)], !0) : Z.call(null, [a.t ? a.t() : a.call(null)], !0);
          case 1:
            return Z.g ? Z.g([a.i ? a.i(b) : a.call(null, b)], !0) : Z.call(null, [a.i ? a.i(b) : a.call(null, b)], !0);
          case 2:
            return Z.g ? Z.g([a.g ? a.g(b, d) : a.call(null, b, d)], !0) : Z.call(null, [a.g ? a.g(b, d) : a.call(null, b, d)], !0);
          case 3:
            return Z.g ? Z.g([a.h ? a.h(b, d, e) : a.call(null, b, d, e)], !0) : Z.call(null, [a.h ? a.h(b, d, e) : a.call(null, b, d, e)], !0);
          default:
            return c.k(b, d, e, J(arguments, 3))
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      b.p = 3;
      b.l = c.l;
      return b
    }()
  }
  var d = null, e = function() {
    function a(c, d, e, f) {
      var t = null;
      3 < arguments.length && (t = J(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, t)
    }
    function b(a, c, d, e) {
      var f = sd.v(a, c, d, e);
      return function() {
        function a(b, c, d) {
          return Sc.h(function(a, e) {
            return tc.g(a, e.h ? e.h(b, c, d) : e.call(null, b, c, d))
          }, fe, f)
        }
        function b(a, c) {
          return Sc.h(function(b, d) {
            return tc.g(b, d.g ? d.g(a, c) : d.call(null, a, c))
          }, fe, f)
        }
        function c(a) {
          return Sc.h(function(b, c) {
            return tc.g(b, c.i ? c.i(a) : c.call(null, a))
          }, fe, f)
        }
        function d() {
          return Sc.h(function(a, b) {
            return tc.g(a, b.t ? b.t() : b.call(null))
          }, fe, f)
        }
        var e = null, g = function() {
          function a(c, d, e, f) {
            var g = null;
            3 < arguments.length && (g = J(Array.prototype.slice.call(arguments, 3), 0));
            return b.call(this, c, d, e, g)
          }
          function b(a, c, d, e) {
            return Sc.h(function(b, f) {
              return tc.g(b, T.C(f, a, c, d, e))
            }, fe, f)
          }
          a.p = 3;
          a.l = function(a) {
            var c = F(a);
            a = I(a);
            var d = F(a);
            a = I(a);
            var e = F(a);
            a = G(a);
            return b(c, d, e, a)
          };
          a.k = b;
          return a
        }(), e = function(e, f, k, l) {
          switch(arguments.length) {
            case 0:
              return d.call(this);
            case 1:
              return c.call(this, e);
            case 2:
              return b.call(this, e, f);
            case 3:
              return a.call(this, e, f, k);
            default:
              return g.k(e, f, k, J(arguments, 3))
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        e.p = 3;
        e.l = g.l;
        return e
      }()
    }
    a.p = 3;
    a.l = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = G(a);
      return b(c, d, e, a)
    };
    a.k = b;
    return a
  }(), d = function(d, g, k, l) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, g);
      case 3:
        return a.call(this, d, g, k);
      default:
        return e.k(d, g, k, J(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.p = 3;
  d.l = e.l;
  d.i = c;
  d.g = b;
  d.h = a;
  d.k = e.k;
  return d
}(), ef = function() {
  function a(a, b) {
    for(;;) {
      if(E(b) && 0 < a) {
        var c = a - 1, g = I(b);
        a = c;
        b = g
      }else {
        return null
      }
    }
  }
  function b(a) {
    for(;;) {
      if(E(a)) {
        a = I(a)
      }else {
        return null
      }
    }
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.g = a;
  return c
}(), ff = function() {
  function a(a, b) {
    ef.g(a, b);
    return b
  }
  function b(a) {
    ef.i(a);
    return a
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.g = a;
  return c
}();
function gf(a, b, c, d, e, f, g) {
  Jb(a, c);
  E(g) && (b.h ? b.h(F(g), a, f) : b.call(null, F(g), a, f));
  c = E(I(g));
  g = null;
  for(var k = 0, l = 0;;) {
    if(l < k) {
      var p = g.w(null, l);
      Jb(a, d);
      b.h ? b.h(p, a, f) : b.call(null, p, a, f);
      l += 1
    }else {
      if(c = E(c)) {
        g = c, V(g) ? (c = B(g), l = C(g), g = c, k = P(c), c = l) : (c = F(g), Jb(a, d), b.h ? b.h(c, a, f) : b.call(null, c, a, f), c = I(g), g = null, k = 0), l = 0
      }else {
        break
      }
    }
  }
  return Jb(a, e)
}
var hf = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = J(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e)
  }
  function b(a, b) {
    for(var e = E(b), f = null, g = 0, k = 0;;) {
      if(k < g) {
        var l = f.w(null, k);
        Jb(a, l);
        k += 1
      }else {
        if(e = E(e)) {
          f = e, V(f) ? (e = B(f), g = C(f), f = e, l = P(e), e = g, g = l) : (l = F(f), Jb(a, l), e = I(f), f = null, g = 0), k = 0
        }else {
          return null
        }
      }
    }
  }
  a.p = 1;
  a.l = function(a) {
    var d = F(a);
    a = G(a);
    return b(d, a)
  };
  a.k = b;
  return a
}(), jf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function kf(a) {
  return[y('"'), y(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return jf[a]
  })), y('"')].join("")
}
var mf = function lf(b, c, d) {
  if(null == b) {
    return Jb(c, "nil")
  }
  if(void 0 === b) {
    return Jb(c, "#\x3cundefined\x3e")
  }
  if(v) {
    s(function() {
      var c = R.g(d, bc);
      return s(c) ? (c = b ? b.n & 131072 || b.Wc ? !0 : b.n ? !1 : u(wb, b) : u(wb, b)) ? Ac(b) : c : c
    }()) && (Jb(c, "^"), lf(Ac(b), c, d), Jb(c, " "));
    if(null == b) {
      return Jb(c, "nil")
    }
    if(b.wc) {
      return b.$c(c)
    }
    if(b && (b.n & 2147483648 || b.W)) {
      return b.H(null, c, d)
    }
    if(Ua(b) === Boolean || "number" === typeof b) {
      return Jb(c, "" + y(b))
    }
    if(b instanceof Array) {
      return gf(c, lf, "#\x3cArray [", ", ", "]\x3e", d, b)
    }
    if(ha(b)) {
      return s(ac.i(d)) ? Jb(c, kf(b)) : Jb(c, b)
    }
    if(yc(b)) {
      return hf.k(c, J(["#\x3c", "" + y(b), "\x3e"], 0))
    }
    if(b instanceof Date) {
      var e = function(b, c) {
        for(var d = "" + y(b);;) {
          if(P(d) < c) {
            d = [y("0"), y(d)].join("")
          }else {
            return d
          }
        }
      };
      return hf.k(c, J(['#inst "', "" + y(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0))
    }
    return s(b instanceof RegExp) ? hf.k(c, J(['#"', b.source, '"'], 0)) : (b ? b.n & 2147483648 || b.W || (b.n ? 0 : u(Lb, b)) : u(Lb, b)) ? Mb(b, c, d) : v ? hf.k(c, J(["#\x3c", "" + y(b), "\x3e"], 0)) : null
  }
  return null
}, nf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    var b = Zb([$b, !0, ac, !0, bc, !1, cc, !1], !0);
    if(null == a || Ta(E(a))) {
      b = ""
    }else {
      var e = y, f = new Ra, g = new Xb(f);
      a: {
        mf(F(a), g, b);
        a = E(I(a));
        for(var k = null, l = 0, p = 0;;) {
          if(p < l) {
            var m = k.w(null, p);
            Jb(g, " ");
            mf(m, g, b);
            p += 1
          }else {
            if(a = E(a)) {
              k = a, V(k) ? (a = B(k), l = C(k), k = a, m = P(a), a = l, l = m) : (m = F(k), Jb(g, " "), mf(m, g, b), a = I(k), k = null, l = 0), p = 0
            }else {
              break a
            }
          }
        }
      }
      Kb(g);
      b = "" + e(f)
    }
    return b
  }
  a.p = 0;
  a.l = function(a) {
    a = E(a);
    return b(a)
  };
  a.k = b;
  return a
}();
Te.prototype.W = !0;
Te.prototype.H = function(a, b, c) {
  return gf(b, mf, "(", " ", ")", c, this)
};
gc.prototype.W = !0;
gc.prototype.H = function(a, b, c) {
  return gf(b, mf, "(", " ", ")", c, this)
};
ke.prototype.W = !0;
ke.prototype.H = function(a, b, c) {
  return gf(b, mf, "[", " ", "]", c, this)
};
md.prototype.W = !0;
md.prototype.H = function(a, b, c) {
  return gf(b, mf, "(", " ", ")", c, this)
};
te.prototype.W = !0;
te.prototype.H = function(a, b, c) {
  return gf(b, function(a) {
    return gf(b, mf, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
hd.prototype.W = !0;
hd.prototype.H = function(a, b, c) {
  return gf(b, mf, "(", " ", ")", c, this)
};
nc.prototype.W = !0;
nc.prototype.H = function(a, b, c) {
  return gf(b, mf, "(", " ", ")", c, this)
};
Me.prototype.W = !0;
Me.prototype.H = function(a, b, c) {
  return gf(b, mf, "(", " ", ")", c, this)
};
ie.prototype.W = !0;
ie.prototype.H = function(a, b, c) {
  return gf(b, mf, "(", " ", ")", c, this)
};
Oe.prototype.W = !0;
Oe.prototype.H = function(a, b, c) {
  return gf(b, function(a) {
    return gf(b, mf, "", " ", "", c, a)
  }, "{", ", ", "}", c, this)
};
Xe.prototype.W = !0;
Xe.prototype.H = function(a, b, c) {
  return gf(b, mf, "#{", " ", "}", c, this)
};
ae.prototype.W = !0;
ae.prototype.H = function(a, b, c) {
  return gf(b, mf, "[", " ", "]", c, this)
};
ad.prototype.W = !0;
ad.prototype.H = function(a, b, c) {
  return gf(b, mf, "(", " ", ")", c, this)
};
se.prototype.W = !0;
se.prototype.H = function(a, b, c) {
  return gf(b, mf, "(", " ", ")", c, this)
};
bd.prototype.W = !0;
bd.prototype.H = function(a, b) {
  return Jb(b, "()")
};
ed.prototype.W = !0;
ed.prototype.H = function(a, b, c) {
  return gf(b, mf, "(", " ", ")", c, this)
};
Ne.prototype.W = !0;
Ne.prototype.H = function(a, b, c) {
  return gf(b, mf, "(", " ", ")", c, this)
};
Ue.prototype.W = !0;
Ue.prototype.H = function(a, b, c) {
  return gf(b, mf, "(", " ", ")", c, this)
};
ae.prototype.pc = !0;
ae.prototype.qc = function(a, b) {
  return Oc.g(this, b)
};
ke.prototype.pc = !0;
ke.prototype.qc = function(a, b) {
  return Oc.g(this, b)
};
function of(a, b, c, d) {
  this.state = a;
  this.o = b;
  this.pd = c;
  this.N = d;
  this.n = 2153938944;
  this.A = 2
}
n = of.prototype;
n.G = function() {
  return ia(this)
};
n.ec = function(a, b, c) {
  a = E(this.N);
  for(var d = null, e = 0, f = 0;;) {
    if(f < e) {
      var g = d.w(null, f), k = Q.h(g, 0, null), g = Q.h(g, 1, null);
      g.v ? g.v(k, this, b, c) : g.call(null, k, this, b, c);
      f += 1
    }else {
      if(a = E(a)) {
        V(a) ? (d = B(a), a = C(a), k = d, e = P(d), d = k) : (d = F(a), k = Q.h(d, 0, null), g = Q.h(d, 1, null), g.v ? g.v(k, this, b, c) : g.call(null, k, this, b, c), a = I(a), d = null, e = 0), f = 0
      }else {
        return null
      }
    }
  }
};
n.dc = function(a, b, c) {
  return this.N = wc.h(this.N, b, c)
};
n.fc = function(a, b) {
  return this.N = xc.g(this.N, b)
};
n.H = function(a, b, c) {
  Jb(b, "#\x3cAtom: ");
  mf(this.state, b, c);
  return Jb(b, "\x3e")
};
n.P = h("o");
n.tb = h("state");
n.F = function(a, b) {
  return this === b
};
var qf = function() {
  function a(a) {
    return new of(a, null, null, null)
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      var d = Kc(c) ? T.g(Re, c) : c, e = R.g(d, pf), d = R.g(d, bc);
      return new of(a, d, e, null)
    }
    a.p = 1;
    a.l = function(a) {
      var c = F(a);
      a = G(a);
      return b(c, a)
    };
    a.k = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.k(b, J(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 1;
  b.l = c.l;
  b.i = a;
  b.k = c.k;
  return b
}();
function rf(a, b) {
  var c = a.pd;
  if(s(c) && !s(c.i ? c.i(b) : c.call(null, b))) {
    throw Error([y("Assert failed: "), y("Validator rejected reference state"), y("\n"), y(nf.k(J([dd(new dc(null, "validate", "validate", 1233162959, null), new dc(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  Nb(a, c, b);
  return b
}
var sf = function() {
  function a(a, b, c, d, e) {
    return rf(a, b.v ? b.v(a.state, c, d, e) : b.call(null, a.state, c, d, e))
  }
  function b(a, b, c, d) {
    return rf(a, b.h ? b.h(a.state, c, d) : b.call(null, a.state, c, d))
  }
  function c(a, b, c) {
    return rf(a, b.g ? b.g(a.state, c) : b.call(null, a.state, c))
  }
  function d(a, b) {
    return rf(a, b.i ? b.i(a.state) : b.call(null, a.state))
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, A) {
      var K = null;
      5 < arguments.length && (K = J(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, K)
    }
    function b(a, c, d, e, f, g) {
      return rf(a, T.k(c, a.state, d, e, f, J([g], 0)))
    }
    a.p = 5;
    a.l = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = I(a);
      var f = F(a);
      a = I(a);
      var g = F(a);
      a = G(a);
      return b(c, d, e, f, g, a)
    };
    a.k = b;
    return a
  }(), e = function(e, k, l, p, m, t) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, p);
      case 5:
        return a.call(this, e, k, l, p, m);
      default:
        return f.k(e, k, l, p, m, J(arguments, 5))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.p = 5;
  e.l = f.l;
  e.g = d;
  e.h = c;
  e.v = b;
  e.C = a;
  e.k = f.k;
  return e
}();
function tf(a, b, c) {
  L.g(a.state, b) && rf(a, c)
}
var uf = null, vf = function() {
  function a(a) {
    null == uf && (uf = qf.i(0));
    return fc.i([y(a), y(sf.g(uf, hc))].join(""))
  }
  function b() {
    return c.i("G__")
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.t = b;
  c.i = a;
  return c
}(), wf = {};
function xf(a) {
  if(a ? a.Sc : a) {
    return a.Sc(a)
  }
  var b;
  b = xf[r(null == a ? null : a)];
  if(!b && (b = xf._, !b)) {
    throw w("IEncodeJS.-clj-\x3ejs", a);
  }
  return b.call(null, a)
}
function yf(a) {
  return(a ? s(s(null) ? null : a.Rc) || (a.Ya ? 0 : u(wf, a)) : u(wf, a)) ? xf(a) : "string" === typeof a || "number" === typeof a || a instanceof X || a instanceof dc ? zf.i ? zf.i(a) : zf.call(null, a) : nf.k(J([a], 0))
}
var zf = function Af(b) {
  if(null == b) {
    return null
  }
  if(b ? s(s(null) ? null : b.Rc) || (b.Ya ? 0 : u(wf, b)) : u(wf, b)) {
    return xf(b)
  }
  if(b instanceof X) {
    return fd(b)
  }
  if(b instanceof dc) {
    return"" + y(b)
  }
  if(Fc(b)) {
    var c = {};
    b = E(b);
    for(var d = null, e = 0, f = 0;;) {
      if(f < e) {
        var g = d.w(null, f), k = Q.h(g, 0, null), g = Q.h(g, 1, null);
        c[yf(k)] = Af(g);
        f += 1
      }else {
        if(b = E(b)) {
          V(b) ? (e = B(b), b = C(b), d = e, e = P(e)) : (e = F(b), d = Q.h(e, 0, null), e = Q.h(e, 1, null), c[yf(d)] = Af(e), b = I(b), d = null, e = 0), f = 0
        }else {
          break
        }
      }
    }
    return c
  }
  return Dc(b) ? T.g(Wa, Bd.g(Af, b)) : v ? b : null
}, Bf = {};
function Cf(a, b) {
  if(a ? a.Qc : a) {
    return a.Qc(a, b)
  }
  var c;
  c = Cf[r(null == a ? null : a)];
  if(!c && (c = Cf._, !c)) {
    throw w("IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b)
}
var Ef = function() {
  function a(a) {
    return b.k(a, J([Zb([Df, !1], !0)], 0))
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k)
    }
    function b(a, c) {
      if(a ? s(s(null) ? null : a.wd) || (a.Ya ? 0 : u(Bf, a)) : u(Bf, a)) {
        return Cf(a, T.g(Se, c))
      }
      if(E(c)) {
        var d = Kc(c) ? T.g(Re, c) : c, e = R.g(d, Df);
        return function(a, b, c, d) {
          return function K(e) {
            return Kc(e) ? ff.i(Bd.g(K, e)) : Dc(e) ? Ld($a(e), Bd.g(K, e)) : e instanceof Array ? he(Bd.g(K, e)) : Ua(e) === Object ? Ld(xe, function() {
              return function(a, b, c, d) {
                return function pc(f) {
                  return new hd(null, function(a, b, c, d) {
                    return function() {
                      for(;;) {
                        var a = E(f);
                        if(a) {
                          if(V(a)) {
                            var b = B(a), c = P(b), g = new jd(Array(c), 0);
                            a: {
                              for(var k = 0;;) {
                                if(k < c) {
                                  var l = z.g(b, k), l = Z([d.i ? d.i(l) : d.call(null, l), K(e[l])], !0);
                                  g.add(l);
                                  k += 1
                                }else {
                                  b = !0;
                                  break a
                                }
                              }
                              b = void 0
                            }
                            return b ? nd(g.sa(), pc(C(a))) : nd(g.sa(), null)
                          }
                          g = F(a);
                          return N(Z([d.i ? d.i(g) : d.call(null, g), K(e[g])], !0), pc(G(a)))
                        }
                        return null
                      }
                    }
                  }(a, b, c, d), null, null)
                }
              }(a, b, c, d)(Hc(e))
            }()) : v ? e : null
          }
        }(c, d, e, s(e) ? gd : y)(a)
      }
      return null
    }
    a.p = 1;
    a.l = function(a) {
      var c = F(a);
      a = G(a);
      return b(c, a)
    };
    a.k = b;
    return a
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.k(b, J(arguments, 1))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 1;
  b.l = c.l;
  b.i = a;
  b.k = c.k;
  return b
}();
var Ff = new X(null, "div#bars", "div#bars"), cc = new X(null, "dup", "dup"), Gf = new X(null, "lng", "lng"), Hf = new X(null, "href", "href"), If = new X(null, "border", "border"), Jf = new X(null, "data", "data"), Kf = new X(null, "dirty?", "dirty?"), Lf = new X(null, "endtime", "endtime"), Mf = new X(null, "width", "width"), Nf = new X(null, "state", "state"), Of = new X(null, "div", "div"), Pf = new X(null, "derefed", "derefed"), Qf = new X(null, "padding", "padding"), Rf = new X(null, "domain", 
"domain"), Sf = new X(null, "mouseover", "mouseover"), Tf = new X(null, "key", "key"), Uf = new X(null, "class", "class"), Vf = new X(null, "a", "a"), Df = new X(null, "keywordize-keys", "keywordize-keys"), Wf = new X(null, "force-update?", "force-update?"), Xf = new X(null, "color", "color"), Yf = new X(null, "mouseout", "mouseout"), $b = new X(null, "flush-on-newline", "flush-on-newline"), Zf = new X(null, "click", "click"), $f = new X(null, "f", "f"), ag = new X(null, "style", "style"), bg = new X(null, 
"range", "range"), cg = new X(null, "watches", "watches"), dg = new X(null, "update-dom", "update-dom"), eg = new X(null, "mouseleave", "mouseleave"), fg = new X(null, "enter", "enter"), gg = new X(null, "title", "title"), hg = new X(null, "parent-watchables", "parent-watchables"), ig = new X(null, "i", "i"), jg = new X(null, "marker", "marker"), v = new X(null, "else", "else"), kg = new X(null, "exit", "exit"), ac = new X(null, "readably", "readably"), lg = new X(null, "background-color", "background-color"), 
mg = new X(null, "mouseenter", "mouseenter"), pf = new X(null, "validator", "validator"), bc = new X(null, "meta", "meta"), ng = new X(null, "lat", "lat"), og = new X(null, "key-fn", "key-fn"), pg = new X(null, "res", "res"), qg = new X(null, "span", "span"), rg = new X(null, "update", "update"), sg = new X(null, "mapping", "mapping"), tg = new X(null, "address", "address"), ug = new X(null, "data-date", "data-date"), vg = new X(null, "classes", "classes"), wg = new X(null, "description", "description"), 
xg = new X(null, "height", "height"), yg = new X(null, "no-deref-monitor", "no-deref-monitor");
function zg(a, b, c, d) {
  this.domain = a;
  this.na = b;
  this.B = c;
  this.u = d;
  this.A = 0;
  this.n = 2229667595;
  2 < arguments.length ? (this.B = c, this.u = d) : this.u = this.B = null
}
n = zg.prototype;
n.G = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Yc(this)
};
n.R = function(a, b) {
  return ib.h(this, b, null)
};
n.S = function(a, b, c) {
  return Y(b, Rf) ? this.domain : Y(b, bg) ? this.na : v ? R.h(this.u, b, c) : null
};
n.Ga = function(a, b, c) {
  return(Y.g ? Y.g(Rf, b) : Y.call(null, Rf, b)) ? new zg(c, this.na, this.B, this.u, null) : (Y.g ? Y.g(bg, b) : Y.call(null, bg, b)) ? new zg(this.domain, c, this.B, this.u, null) : new zg(this.domain, this.na, this.B, wc.h(this.u, b, c), null)
};
n.call = function(a, b) {
  a = this;
  var c = sc(a.domain) - F(a.domain), d = sc(a.na) - F(a.na);
  return F(a.na) + d * ((b - F(a.domain)) / c)
};
n.apply = function(a, b) {
  return this.call.apply(this, [this].concat(b.slice()))
};
n.i = function(a) {
  var b = sc(this.domain) - F(this.domain), c = sc(this.na) - F(this.na);
  return F(this.na) + c * ((a - F(this.domain)) / b)
};
n.H = function(a, b, c) {
  return gf(b, function(a) {
    return gf(b, mf, "", " ", "", c, a)
  }, "#c2.scale._linear{", ", ", "}", c, rd.g(Z([Z.g ? Z.g([Rf, this.domain], !0) : Z.call(null, [Rf, this.domain], !0), Z.g ? Z.g([bg, this.na], !0) : Z.call(null, [bg, this.na], !0)], !0), this.u))
};
n.O = function(a, b) {
  return Gc(b) ? kb(this, z.g(b, 0), z.g(b, 1)) : Sc.h(bb, this, b)
};
n.J = function() {
  return E(rd.g(Z([Z.g ? Z.g([Rf, this.domain], !0) : Z.call(null, [Rf, this.domain], !0), Z.g ? Z.g([bg, this.na], !0) : Z.call(null, [bg, this.na], !0)], !0), this.u))
};
n.T = function() {
  return 2 + P(this.u)
};
n.F = function(a, b) {
  var c;
  c = s(b) ? (c = this.constructor === b.constructor) ? qe(this, b) : c : b;
  return s(c) ? !0 : !1
};
n.Q = function(a, b) {
  return new zg(this.domain, this.na, b, this.u, this.q)
};
n.P = h("B");
n.Xa = function(a, b) {
  return Mc($e([Rf, null, bg, null]), b) ? xc.g(rc(Ld(xe, this), this.B), b) : new zg(this.domain, this.na, this.B, vd(xc.g(this.u, b)), null)
};
var Ag = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d)
  }
  function b(a) {
    a = We.k(J([Zb([Rf, Z([0, 1], !0), bg, Z([0, 1], !0)], !0), T.g(Re, a)], 0));
    return new zg(Rf.i(a), bg.i(a), null, xc.k(a, Rf, J([bg], 0)))
  }
  a.p = 0;
  a.l = function(a) {
    a = E(a);
    return b(a)
  };
  a.k = b;
  return a
}();
var Bg = function() {
  function a(a, b) {
    return T.g(y, Ed(1, Id.g(Fd.i(a), b)))
  }
  function b(a) {
    return T.g(y, a)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.g = a;
  return c
}();
function Cg(a, b) {
  if(0 >= b || b >= 2 + P(a)) {
    return tc.g(he(N("", Bd.g(y, E(a)))), "")
  }
  if(L.g ? L.g(1, b) : L.call(null, 1, b)) {
    return Z.g ? Z.g([a], !0) : Z.call(null, [a], !0)
  }
  if(L.g ? L.g(2, b) : L.call(null, 2, b)) {
    return Z.g ? Z.g(["", a], !0) : Z.call(null, ["", a], !0)
  }
  var c = b - 2;
  return tc.g(he(N("", je.h(he(Bd.g(y, E(a))), 0, c))), Xc.g(a, c))
}
var Dg = function() {
  function a(a, b, c) {
    if(L.g("" + y(b), "/(?:)/")) {
      b = Cg(a, c)
    }else {
      if(1 > c) {
        b = he(("" + y(a)).split(b))
      }else {
        a: {
          for(var g = c, k = fe;;) {
            if(L.g(g, 1)) {
              b = tc.g(k, a);
              break a
            }
            var l;
            l = b.exec(a);
            l = null == l ? null : 1 === P(l) ? F(l) : he(l);
            if(s(l)) {
              var p = l;
              l = a.indexOf(p);
              p = a.substring(l + P(p));
              g -= 1;
              k = tc.g(k, a.substring(0, l));
              a = p
            }else {
              b = tc.g(k, a);
              break a
            }
          }
          b = void 0
        }
      }
    }
    if(L.g(0, c)) {
      a: {
        for(c = b;;) {
          if(L.g("", rb(c))) {
            c = sb(c)
          }else {
            break a
          }
        }
        c = void 0
      }
    }else {
      c = b
    }
    return c
  }
  function b(a, b) {
    return c.h(a, b, 0)
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c
}();
function Eg(a, b) {
  for(var c = 0;;) {
    if(c = a.indexOf(b, c), 0 <= c) {
      var d;
      if(d = 0 === c || " " === a.charAt(c - 1)) {
        d = a.length;
        var e = c + b.length;
        d = e <= d ? e === d || " " === a.charAt(e) : null
      }
      if(d) {
        return c
      }
      c += b.length
    }else {
      return null
    }
  }
}
function Fg(a, b) {
  var c = $(a), d = fd(b), e = c.classList;
  if(s(e)) {
    return e.contains(d)
  }
  c = c.className;
  return s(c) ? (d = Eg(c, d), s(d) ? 0 <= d : null) : null
}
var Gg = function() {
  function a(a, b) {
    var c = $(a), g, k = fd(b);
    g = sa(k);
    if(E(g)) {
      if(k = c.classList, s(k)) {
        g = E(g.split(/\s+/));
        for(var l = null, p = 0, m = 0;;) {
          if(m < p) {
            var t = l.w(null, m);
            k.add(t);
            m += 1
          }else {
            if(g = E(g)) {
              l = g, V(l) ? (g = B(l), m = C(l), l = g, p = P(g), g = m) : (g = F(l), k.add(g), g = I(l), l = null, p = 0), m = 0
            }else {
              break
            }
          }
        }
      }else {
        for(k = c.className, g = E(g.split(/\s+/)), l = null, m = p = 0;;) {
          if(m < p) {
            t = l.w(null, m), s(Eg(k, t)) || (c.className = "" === k ? t : [y(k), y(" "), y(t)].join("")), m += 1
          }else {
            if(g = E(g)) {
              l = g, V(l) ? (g = B(l), m = C(l), l = g, p = P(g), g = m) : (g = F(l), s(Eg(k, g)) || (c.className = "" === k ? g : [y(k), y(" "), y(g)].join("")), g = I(l), l = null, p = 0), m = 0
            }else {
              break
            }
          }
        }
      }
    }
    return c
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      a = $(a);
      d = E(tc.g(e, d));
      e = null;
      for(var l = 0, p = 0;;) {
        if(p < l) {
          var m = e.w(null, p);
          b.g(a, m);
          p += 1
        }else {
          if(d = E(d)) {
            e = d, V(e) ? (d = B(e), p = C(e), e = d, l = P(d), d = p) : (d = F(e), b.g(a, d), d = I(e), e = null, l = 0), p = 0
          }else {
            break
          }
        }
      }
      return a
    }
    a.p = 2;
    a.l = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
      return c(b, d, a)
    };
    a.k = c;
    return a
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, J(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.l = c.l;
  b.g = a;
  b.k = c.k;
  return b
}(), Hg = function() {
  function a(a, b) {
    var c = $(a), g = fd(b), k = c.classList;
    if(s(k)) {
      k.remove(g)
    }else {
      k = c.className;
      a: {
        for(var l = k;;) {
          var p = l.length, m = Eg(l, g);
          if(s(m)) {
            var t = m + g.length, l = "" + y(t < p ? [y(l.substring(0, m)), y(l.substr(t + 1))].join("") : l.substring(0, m - 1))
          }else {
            g = l;
            break a
          }
        }
        g = void 0
      }
      k !== g && (c.className = g)
    }
    return c
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l)
    }
    function c(a, d, e) {
      a = $(a);
      d = E(tc.g(e, d));
      e = null;
      for(var l = 0, p = 0;;) {
        if(p < l) {
          var m = e.w(null, p);
          b.g(a, m);
          p += 1
        }else {
          if(d = E(d)) {
            e = d, V(e) ? (d = B(e), l = C(e), e = d, m = P(d), d = l, l = m) : (m = F(e), b.g(a, m), d = I(e), e = null, l = 0), p = 0
          }else {
            return null
          }
        }
      }
    }
    a.p = 2;
    a.l = function(a) {
      var b = F(a);
      a = I(a);
      var d = F(a);
      a = G(a);
      return c(b, d, a)
    };
    a.k = c;
    return a
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.k(b, e, J(arguments, 2))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.p = 2;
  b.l = c.l;
  b.g = a;
  b.k = c.k;
  return b
}(), Ig = function() {
  function a(a, b, c) {
    a = $(a);
    c ? Gg.g(a, b) : Hg.g(a, b);
    return a
  }
  function b(a, b) {
    var f = $(a), g = f.classList;
    s(g) ? g.toggle(b) : c.h(f, b, !Fg(f, b));
    return f
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c
}();
function Jg(a) {
  return"string" === typeof a ? a : Bg.g(" ", Bd.g(function(a) {
    var c = Q.h(a, 0, null);
    a = Q.h(a, 1, null);
    return[y(fd(c)), y(":"), y(fd(a)), y(";")].join("")
  }, a))
}
var Kg = function() {
  function a(a, b, c) {
    if(s(c)) {
      if(yc(c)) {
        return a = $(a), a[fd(b)] = c, a
      }
      a = $(a);
      a.setAttribute(fd(b), b === ag ? Jg(c) : c);
      return a
    }
    return null
  }
  function b(a, b) {
    return c.h($(a), b, "true")
  }
  var c = null, d = function() {
    function a(c, d, e, p) {
      var m = null;
      3 < arguments.length && (m = J(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, m)
    }
    function b(a, d, e, f) {
      if(!zd(P(f))) {
        throw Error([y("Assert failed: "), y(nf.k(J([dd(new dc(null, "even?", "even?", -1543640034, null), dd(new dc(null, "count", "count", -1545680184, null), new dc(null, "kvs", "kvs", -1640424927, null)))], 0)))].join(""));
      }
      a = $(a);
      d = E(N(Z([d, e], !0), Md.g(2, f)));
      e = null;
      for(var m = f = 0;;) {
        if(m < f) {
          var t = e.w(null, m), x = Q.h(t, 0, null), t = Q.h(t, 1, null);
          c.h(a, x, t);
          m += 1
        }else {
          if(d = E(d)) {
            V(d) ? (f = B(d), d = C(d), e = f, f = P(f)) : (f = F(d), e = Q.h(f, 0, null), f = Q.h(f, 1, null), c.h(a, e, f), d = I(d), e = null, f = 0), m = 0
          }else {
            break
          }
        }
      }
      return a
    }
    a.p = 3;
    a.l = function(a) {
      var c = F(a);
      a = I(a);
      var d = F(a);
      a = I(a);
      var e = F(a);
      a = G(a);
      return b(c, d, e, a)
    };
    a.k = b;
    return a
  }(), c = function(c, f, g, k) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, g);
      default:
        return d.k(c, f, g, J(arguments, 3))
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = 3;
  c.l = d.l;
  c.g = b;
  c.h = a;
  c.k = d.k;
  return c
}();
var Lg;
function Mg(a) {
  var b = Lg;
  try {
    Lg = qf.k(Ze, J([bc, Zb([yg, !0], !0)], 0));
    var c = a.t ? a.t() : a.call(null);
    return Zb([pg, c, Pf, vb(Lg)], !0)
  }finally {
    Lg = b
  }
}
function Ng(a) {
  s(function() {
    var b = Lg;
    return s(b) ? Ta(yg.i(Ac(a))) : b
  }()) && sf.g(Lg, function(b) {
    return tc.g(b, a)
  })
}
of.prototype.tb = function() {
  Ng(this);
  return this.state
};
function Og(a, b, c, d, e, f, g, k) {
  this.state = a;
  this.ca = b;
  this.f = c;
  this.key = d;
  this.ma = e;
  this.N = f;
  this.B = g;
  this.u = k;
  this.n = 2229700362;
  this.A = 2;
  6 < arguments.length ? (this.B = g, this.u = k) : this.u = this.B = null
}
n = Og.prototype;
n.G = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Yc(this)
};
n.R = function(a, b) {
  return ib.h(this, b, null)
};
n.S = function(a, b, c) {
  return Y(b, Nf) ? this.state : Y(b, Kf) ? this.ca : Y(b, $f) ? this.f : Y(b, Tf) ? this.key : Y(b, hg) ? this.ma : Y(b, cg) ? this.N : v ? R.h(this.u, b, c) : null
};
n.Ga = function(a, b, c) {
  return(Y.g ? Y.g(Nf, b) : Y.call(null, Nf, b)) ? new Og(c, this.ca, this.f, this.key, this.ma, this.N, this.B, this.u, null) : (Y.g ? Y.g(Kf, b) : Y.call(null, Kf, b)) ? new Og(this.state, c, this.f, this.key, this.ma, this.N, this.B, this.u, null) : (Y.g ? Y.g($f, b) : Y.call(null, $f, b)) ? new Og(this.state, this.ca, c, this.key, this.ma, this.N, this.B, this.u, null) : (Y.g ? Y.g(Tf, b) : Y.call(null, Tf, b)) ? new Og(this.state, this.ca, this.f, c, this.ma, this.N, this.B, this.u, null) : 
  (Y.g ? Y.g(hg, b) : Y.call(null, hg, b)) ? new Og(this.state, this.ca, this.f, this.key, c, this.N, this.B, this.u, null) : (Y.g ? Y.g(cg, b) : Y.call(null, cg, b)) ? new Og(this.state, this.ca, this.f, this.key, this.ma, c, this.B, this.u, null) : new Og(this.state, this.ca, this.f, this.key, this.ma, this.N, this.B, wc.h(this.u, b, c), null)
};
n.tb = function() {
  var a = this;
  Ng(a);
  if(Ta(this.ca)) {
    return a.state
  }
  for(var b = Mg(this.f), b = Kc(b) ? T.g(Re, b) : b, c = R.g(b, Pf), b = R.g(b, pg), d = E(this.ma), e = null, f = 0, g = 0;;) {
    if(g < f) {
      var k = e.w(null, g);
      Pb(k, this.key);
      g += 1
    }else {
      if(d = E(d)) {
        e = d, V(e) ? (d = B(e), g = C(e), e = d, f = P(d), d = g) : (d = F(e), Pb(d, this.key), d = I(e), e = null, f = 0), g = 0
      }else {
        break
      }
    }
  }
  a.ma = c;
  c = E(c);
  d = null;
  for(f = e = 0;;) {
    if(f < e) {
      g = d.w(null, f), Ob(g, this.key, function() {
        return function() {
          a.ca = !0;
          return Nb(a, null, null)
        }
      }(c, d, e, f, g)), f += 1
    }else {
      if(k = E(c)) {
        g = k;
        if(V(g)) {
          c = B(g), f = C(g), d = c, e = P(c), c = f
        }else {
          var l = F(g);
          Ob(l, this.key, function() {
            return function() {
              a.ca = !0;
              return Nb(a, null, null)
            }
          }(c, d, e, f, l, g, k));
          c = I(g);
          d = null;
          e = 0
        }
        f = 0
      }else {
        break
      }
    }
  }
  a.state = b;
  a.ca = !1;
  return b
};
n.H = function(a, b, c) {
  return gf(b, function(a) {
    return gf(b, mf, "", " ", "", c, a)
  }, "#reflex.core.ComputedObservable{", ", ", "}", c, rd.g(Z([Z.g ? Z.g([Nf, this.state], !0) : Z.call(null, [Nf, this.state], !0), Z.g ? Z.g([Kf, this.ca], !0) : Z.call(null, [Kf, this.ca], !0), Z.g ? Z.g([$f, this.f], !0) : Z.call(null, [$f, this.f], !0), Z.g ? Z.g([Tf, this.key], !0) : Z.call(null, [Tf, this.key], !0), Z.g ? Z.g([hg, this.ma], !0) : Z.call(null, [hg, this.ma], !0), Z.g ? Z.g([cg, this.N], !0) : Z.call(null, [cg, this.N], !0)], !0), this.u))
};
n.O = function(a, b) {
  return Gc(b) ? kb(this, z.g(b, 0), z.g(b, 1)) : Sc.h(bb, this, b)
};
n.ec = function() {
  for(var a = E(this.N), b = null, c = 0, d = 0;;) {
    if(d < c) {
      var e = b.w(null, d);
      Q.h(e, 0, null);
      e = Q.h(e, 1, null);
      e.t ? e.t() : e.call(null);
      d += 1
    }else {
      if(a = E(a)) {
        V(a) ? (c = B(a), a = C(a), b = c, c = P(c)) : (b = F(a), Q.h(b, 0, null), e = Q.h(b, 1, null), e.t ? e.t() : e.call(null), a = I(a), b = null, c = 0), d = 0
      }else {
        return null
      }
    }
  }
};
n.dc = function(a, b, c) {
  return this.N = wc.h(this.N, b, c)
};
n.fc = function(a, b) {
  return this.N = xc.g(this.N, b)
};
n.J = function() {
  return E(rd.g(Z([Z.g ? Z.g([Nf, this.state], !0) : Z.call(null, [Nf, this.state], !0), Z.g ? Z.g([Kf, this.ca], !0) : Z.call(null, [Kf, this.ca], !0), Z.g ? Z.g([$f, this.f], !0) : Z.call(null, [$f, this.f], !0), Z.g ? Z.g([Tf, this.key], !0) : Z.call(null, [Tf, this.key], !0), Z.g ? Z.g([hg, this.ma], !0) : Z.call(null, [hg, this.ma], !0), Z.g ? Z.g([cg, this.N], !0) : Z.call(null, [cg, this.N], !0)], !0), this.u))
};
n.T = function() {
  return 6 + P(this.u)
};
n.F = function(a, b) {
  var c;
  c = s(b) ? (c = this.constructor === b.constructor) ? qe(this, b) : c : b;
  return s(c) ? !0 : !1
};
n.Q = function(a, b) {
  return new Og(this.state, this.ca, this.f, this.key, this.ma, this.N, b, this.u, this.q)
};
n.P = h("B");
n.Xa = function(a, b) {
  return Mc($e([Kf, null, Nf, null, Tf, null, $f, null, cg, null, hg, null]), b) ? xc.g(rc(Ld(xe, this), this.B), b) : new Og(this.state, this.ca, this.f, this.key, this.ma, this.N, this.B, vd(xc.g(this.u, b)), null)
};
n.Tc = !0;
n.G = h("key");
var Pg, Qg, Rg, Sg, Tg, Ug, Vg, Wg, Xg, Yg, Zg, $g, ah, bh, ch, dh, eh = {}.hasOwnProperty;
Wg = function(a) {
  console.log(a)
};
Zg = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
Yg = /^(svg|g|rect|circle|clipPath|path|line|polygon|polyline|text|textPath)$/;
$g = /^\s+$/;
Xg = /:(.+)/;
dh = {sd:"http://www.w3.org/1999/xhtml", Hd:"http://www.w3.org/1999/xlink", nd:"http://www.w3.org/2000/svg", xml:"http://www.w3.org/XML/1998/namespace", Id:"http://www.w3.org/2000/xmlns"};
Ug = function(a) {
  var b, c;
  c = a.split(":");
  b = c[0];
  c = c[1];
  return null != c ? [dh[b] || b, c] : a.match(Yg) ? [dh.nd, a] : [dh.sd, a]
};
Rg = function(a) {
  return":*:" === a[0]
};
bh = function(a) {
  return null != a && a instanceof fh
};
Sg = function(a) {
  return null != a && !1
};
Pg = function(a) {
  return null != a && null != a.forEach
};
Tg = function(a) {
  return null != a && !Pg(a) && !bh(a) && !Sg(a) && a instanceof Object
};
Qg = function(a) {
  return null != a && null != a.nodeType
};
ah = function(a) {
  return null != a && null != a.substring
};
Vg = function(a) {
  return null != a && null != a.toFixed
};
ch = function(a) {
  return 8 === a.nodeType || 3 === a.nodeType && a.textContent.match($g)
};
function gh(a, b) {
  var c, d, e, f, g;
  if(null != b.style) {
    f = b.style;
    var k;
    k = [];
    for(g in f) {
      eh.call(f, g) && (c = f[g], k.push(a.style[Ba(g)] = c))
    }
    delete b.style
  }
  if(null != b.properties) {
    f = b.properties;
    c = [];
    for(e in f) {
      eh.call(f, e) && (g = f[e], c.push(a[e] = g))
    }
    delete b.properties
  }
  Pg(b["class"]) && (a.setAttribute("class", b["class"].join(" ")), delete b["class"]);
  g = [];
  for(d in b) {
    eh.call(b, d) && (f = b[d], null != f ? (c = d.split(Xg), e = c[0], c = c[1], null != c ? g.push(a.setAttributeNS(dh[e] || e, c, f)) : g.push(a.setAttribute(d, f))) : g.push(a.removeAttribute(d)))
  }
}
function hh(a, b) {
  return null != b ? a.__singult_data__ = b : a.__singult_data__
}
function ih(a) {
  return Vg(a) ? a.toString() : Pg(a) ? jh(a) : a
}
function jh(a) {
  var b, c, d, e, f;
  f = a[0];
  d = Tg(a[1]) ? [a[1], a.slice(2)] : [{}, a.slice(1)];
  a = d[0];
  d = d[1];
  e = f.match(Zg);
  f = e[1];
  b = e[2];
  e = e[3];
  null != b && (a.id = b);
  null != e && (b = e.split("."), Pg(a["class"]) ? a["class"] = a["class"].concat(b) : ah(a["class"]) ? a["class"] = b.concat([a["class"]]) : null == a["class"] && (a["class"] = b));
  f = Ug(f);
  b = f[0];
  f = f[1];
  c = [];
  d.forEach(function(a) {
    if(null != a) {
      return Rg(a) ? a.slice(1).forEach(function(a) {
        return c.push(ih(a))
      }) : c.push(ih(a))
    }
  });
  return{gd:b, tag:f, mc:a, children:c}
}
function kh(a) {
  var b, c;
  if(bh(a)) {
    throw Error("Unify must be the first and only child of its parent.");
  }
  if(Sg(a)) {
    return null
  }
  if(ah(a)) {
    return document.createTextNode(a)
  }
  if(Qg(a)) {
    return a
  }
  b = document.createElementNS(a.gd, a.tag);
  gh(b, a.mc);
  bh(c = a.children[0]) ? null != c.Y ? c.data.forEach(function(a) {
    var e;
    e = c.Y(a);
    hh(e, a);
    return b.appendChild(e)
  }) : c.data.forEach(function(a) {
    var e;
    e = kh(ih(c.Z(a)));
    hh(e, a);
    return b.appendChild(e)
  }) : a.children.forEach(function(a) {
    a = kh(a);
    if(null != a) {
      return b.appendChild(a)
    }
  });
  return b
}
function fh(a, b, c, d, e, f, g) {
  this.data = a;
  this.Z = b;
  this.ia = c;
  this.Y = d;
  this.update = e;
  this.ga = f;
  this.bd = g;
  return this
}
function lh(a, b) {
  var c, d, e, f, g, k, l, p, m;
  d = b.Y || function(c) {
    c = kh(ih(b.Z(c)));
    a.appendChild(c);
    return c
  };
  p = b.update || function(a, c) {
    return mh(a, ih(b.Z(c)))
  };
  e = b.ga || function(b) {
    return a.removeChild(b)
  };
  k = b.ia || function(a, b) {
    return b
  };
  c = a.childNodes;
  l = {};
  for(f = 0;f < c.length;) {
    g = "\x00" + k(hh(c[f]), f), l[g] = c[f], f += 1
  }
  b.data.forEach(function(a, c) {
    var e, f;
    g = "\x00" + k(a, c);
    if(e = l[g]) {
      return b.bd ? (e = p(e, a), hh(e, a)) : (f = hh(e), f = null != f.F ? f.F(f, a) : f === a, f || (e = p(e, a), hh(e, a))), delete l[g]
    }
    e = d(a);
    return hh(e, a)
  });
  for(m in l) {
    c = l[m], e(c)
  }
}
function mh(a, b) {
  var c, d, e, f;
  if(bh(b)) {
    lh(a, b)
  }else {
    if(!Sg(b)) {
      if(a.nodeName.toLowerCase() !== b.tag.toLowerCase()) {
        throw Wg(a), Wg(b), Error("Cannot merge $e into node of different type");
      }
      gh(a, b.mc);
      if(a.hasChildNodes()) {
        for(e = d = f = a.childNodes.length - 1;0 >= f ? 0 >= d : 0 <= d;e = 0 >= f ? ++d : --d) {
          c = a.childNodes[e], ch(c) && a.removeChild(c)
        }
      }
      if(bh(b.children[0])) {
        mh(a, b.children[0])
      }else {
        if(a.childNodes.length > b.children.length) {
          for(e = c = d = a.childNodes.length - 1;0 >= d ? 0 >= c : 0 <= c;e = 0 >= d ? ++c : --c) {
            a.removeChild(a.childNodes[e])
          }
        }
        for(e = 0;e < b.children.length;) {
          d = b.children[e] || "";
          c = a.childNodes[e];
          if(ah(d)) {
            null != c ? c.textContent = d : a.appendChild(document.createTextNode(d))
          }else {
            if(!Sg(d)) {
              if(Tg(d)) {
                null != c ? mh(c, d) : a.appendChild(kh(d))
              }else {
                throw Wg(c), Wg(d), Error("Cannot merge children");
              }
            }
          }
          e += 1
        }
      }
    }
  }
  return a
}
;function nh(a, b, c, d, e, f, g, k, l) {
  this.data = a;
  this.Z = b;
  this.ia = c;
  this.Y = d;
  this.update = e;
  this.ga = f;
  this.oa = g;
  this.B = k;
  this.u = l;
  this.A = 0;
  this.n = 2229667594;
  7 < arguments.length ? (this.B = k, this.u = l) : this.u = this.B = null
}
n = nh.prototype;
n.G = function() {
  var a = this.q;
  return null != a ? a : this.q = a = Yc(this)
};
n.R = function(a, b) {
  return ib.h(this, b, null)
};
n.S = function(a, b, c) {
  return Y(b, Jf) ? this.data : Y(b, sg) ? this.Z : Y(b, og) ? this.ia : Y(b, fg) ? this.Y : Y(b, rg) ? this.update : Y(b, kg) ? this.ga : Y(b, Wf) ? this.oa : v ? R.h(this.u, b, c) : null
};
n.Ga = function(a, b, c) {
  return(Y.g ? Y.g(Jf, b) : Y.call(null, Jf, b)) ? new nh(c, this.Z, this.ia, this.Y, this.update, this.ga, this.oa, this.B, this.u, null) : (Y.g ? Y.g(sg, b) : Y.call(null, sg, b)) ? new nh(this.data, c, this.ia, this.Y, this.update, this.ga, this.oa, this.B, this.u, null) : (Y.g ? Y.g(og, b) : Y.call(null, og, b)) ? new nh(this.data, this.Z, c, this.Y, this.update, this.ga, this.oa, this.B, this.u, null) : (Y.g ? Y.g(fg, b) : Y.call(null, fg, b)) ? new nh(this.data, this.Z, this.ia, c, this.update, 
  this.ga, this.oa, this.B, this.u, null) : (Y.g ? Y.g(rg, b) : Y.call(null, rg, b)) ? new nh(this.data, this.Z, this.ia, this.Y, c, this.ga, this.oa, this.B, this.u, null) : (Y.g ? Y.g(kg, b) : Y.call(null, kg, b)) ? new nh(this.data, this.Z, this.ia, this.Y, this.update, c, this.oa, this.B, this.u, null) : (Y.g ? Y.g(Wf, b) : Y.call(null, Wf, b)) ? new nh(this.data, this.Z, this.ia, this.Y, this.update, this.ga, c, this.B, this.u, null) : new nh(this.data, this.Z, this.ia, this.Y, this.update, 
  this.ga, this.oa, this.B, wc.h(this.u, b, c), null)
};
n.H = function(a, b, c) {
  return gf(b, function(a) {
    return gf(b, mf, "", " ", "", c, a)
  }, "#singult.core.Unify{", ", ", "}", c, rd.g(Z([Z.g ? Z.g([Jf, this.data], !0) : Z.call(null, [Jf, this.data], !0), Z.g ? Z.g([sg, this.Z], !0) : Z.call(null, [sg, this.Z], !0), Z.g ? Z.g([og, this.ia], !0) : Z.call(null, [og, this.ia], !0), Z.g ? Z.g([fg, this.Y], !0) : Z.call(null, [fg, this.Y], !0), Z.g ? Z.g([rg, this.update], !0) : Z.call(null, [rg, this.update], !0), Z.g ? Z.g([kg, this.ga], !0) : Z.call(null, [kg, this.ga], !0), Z.g ? Z.g([Wf, this.oa], !0) : Z.call(null, [Wf, this.oa], 
  !0)], !0), this.u))
};
n.O = function(a, b) {
  return Gc(b) ? kb(this, z.g(b, 0), z.g(b, 1)) : Sc.h(bb, this, b)
};
n.J = function() {
  return E(rd.g(Z([Z.g ? Z.g([Jf, this.data], !0) : Z.call(null, [Jf, this.data], !0), Z.g ? Z.g([sg, this.Z], !0) : Z.call(null, [sg, this.Z], !0), Z.g ? Z.g([og, this.ia], !0) : Z.call(null, [og, this.ia], !0), Z.g ? Z.g([fg, this.Y], !0) : Z.call(null, [fg, this.Y], !0), Z.g ? Z.g([rg, this.update], !0) : Z.call(null, [rg, this.update], !0), Z.g ? Z.g([kg, this.ga], !0) : Z.call(null, [kg, this.ga], !0), Z.g ? Z.g([Wf, this.oa], !0) : Z.call(null, [Wf, this.oa], !0)], !0), this.u))
};
n.T = function() {
  return 7 + P(this.u)
};
n.F = function(a, b) {
  var c;
  c = s(b) ? (c = this.constructor === b.constructor) ? qe(this, b) : c : b;
  return s(c) ? !0 : !1
};
n.Q = function(a, b) {
  return new nh(this.data, this.Z, this.ia, this.Y, this.update, this.ga, this.oa, b, this.u, this.q)
};
n.P = h("B");
n.Xa = function(a, b) {
  return Mc($e([Jf, null, Wf, null, fg, null, kg, null, og, null, rg, null, sg, null]), b) ? xc.g(rc(Ld(xe, this), this.B), b) : new nh(this.data, this.Z, this.ia, this.Y, this.update, this.ga, this.oa, this.B, vd(xc.g(this.u, b)), null)
};
var ph = function oh(b) {
  if(b instanceof nh) {
    var c = Kc(b) ? T.g(Re, b) : b, d = R.g(c, Wf);
    b = R.g(c, kg);
    var e = R.g(c, rg), f = R.g(c, fg), g = R.g(c, og), k = R.g(c, sg), l = R.g(c, Jf), c = function() {
      for(var b = [], c = E(l), d = null, e = 0, f = 0;;) {
        if(f < e) {
          var g = d.w(null, f);
          b.push(g);
          f += 1
        }else {
          if(c = E(c)) {
            d = c, V(d) ? (c = B(d), f = C(d), d = c, e = P(c), c = f) : (c = F(d), b.push(c), c = I(d), d = null, e = 0), f = 0
          }else {
            break
          }
        }
      }
      return b
    }();
    return new fh(c, function(b) {
      return oh(k.i ? k.i(b) : k.call(null, b))
    }, g, f, e, b, d)
  }
  if(b instanceof X) {
    return fd(b)
  }
  if(Fc(b)) {
    d = {};
    b = E(b);
    e = null;
    for(g = f = 0;;) {
      if(g < f) {
        var p = e.w(null, g), c = Q.h(p, 0, null), p = Q.h(p, 1, null), c = oh(c);
        if("string" !== typeof c) {
          throw"Cannot convert; JavaScript map keys must be strings";
        }
        d[c] = oh(p);
        g += 1
      }else {
        if(b = E(b)) {
          if(V(b)) {
            f = B(b), b = C(b), e = f, f = P(f)
          }else {
            f = F(b);
            e = Q.h(f, 0, null);
            f = Q.h(f, 1, null);
            e = oh(e);
            if("string" !== typeof e) {
              throw"Cannot convert; JavaScript map keys must be strings";
            }
            d[e] = oh(f);
            b = I(b);
            e = null;
            f = 0
          }
          g = 0
        }else {
          break
        }
      }
    }
    return d
  }
  if(Kc(b)) {
    d = [];
    d.push(":*:");
    b = E(b);
    e = null;
    for(g = f = 0;;) {
      if(g < f) {
        c = e.w(null, g), d.push(oh(c)), g += 1
      }else {
        if(b = E(b)) {
          e = b, V(e) ? (b = B(e), g = C(e), e = b, f = P(b), b = g) : (b = F(e), d.push(oh(b)), b = I(e), e = null, f = 0), g = 0
        }else {
          break
        }
      }
    }
    return d
  }
  if(Dc(b)) {
    d = [];
    b = E(b);
    e = null;
    for(g = f = 0;;) {
      if(g < f) {
        c = e.w(null, g), d.push(oh(c)), g += 1
      }else {
        if(b = E(b)) {
          e = b, V(e) ? (b = B(e), g = C(e), e = b, f = P(b), b = g) : (b = F(e), d.push(oh(b)), b = I(e), e = null, f = 0), g = 0
        }else {
          break
        }
      }
    }
    return d
  }
  return v ? b : null
};
function qh(a, b) {
  return null == b ? null : mh.g ? mh.g(a, ih.i ? ih.i(ph(b)) : ih.call(null, ph(b))) : mh.call(null, a, ih.i ? ih.i(ph(b)) : ih.call(null, ph(b)))
}
var rh = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = J(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f)
  }
  function b(a, b, e) {
    var f = Kc(e) ? T.g(Re, e) : e;
    e = R.g(f, Wf);
    var g = R.g(f, kg), k = R.g(f, rg), l = R.g(f, fg), f = R.g(f, og);
    return new nh(a, b, f, l, k, g, e)
  }
  a.p = 2;
  a.l = function(a) {
    var d = F(a);
    a = I(a);
    var e = F(a);
    a = G(a);
    return b(d, e, a)
  };
  a.k = b;
  return a
}();
var sh, th, uh, vh;
function wh() {
  return q.navigator ? q.navigator.userAgent : null
}
vh = uh = th = sh = !1;
var xh;
if(xh = wh()) {
  var yh = q.navigator;
  sh = 0 == xh.indexOf("Opera");
  th = !sh && -1 != xh.indexOf("MSIE");
  uh = !sh && -1 != xh.indexOf("WebKit");
  vh = !sh && !uh && "Gecko" == yh.product
}
var zh = sh, Ah = th, Bh = vh, Ch = uh, Dh = q.navigator, Eh = -1 != (Dh && Dh.platform || "").indexOf("Mac");
function Fh() {
  var a = q.document;
  return a ? a.documentMode : void 0
}
var Gh;
a: {
  var Hh = "", Ih;
  if(zh && q.opera) {
    var Jh = q.opera.version, Hh = "function" == typeof Jh ? Jh() : Jh
  }else {
    if(Bh ? Ih = /rv\:([^\);]+)(\)|;)/ : Ah ? Ih = /MSIE\s+([^\);]+)(\)|;)/ : Ch && (Ih = /WebKit\/(\S+)/), Ih) {
      var Kh = Ih.exec(wh()), Hh = Kh ? Kh[1] : ""
    }
  }
  if(Ah) {
    var Lh = Fh();
    if(Lh > parseFloat(Hh)) {
      Gh = String(Lh);
      break a
    }
  }
  Gh = Hh
}
var Mh = {};
function Nh(a) {
  var b;
  if(!(b = Mh[a])) {
    b = 0;
    for(var c = sa(String(Gh)).split("."), d = sa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var g = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var m = l.exec(g) || ["", "", ""], t = p.exec(k) || ["", "", ""];
        if(0 == m[0].length && 0 == t[0].length) {
          break
        }
        b = ((0 == m[1].length ? 0 : parseInt(m[1], 10)) < (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? -1 : (0 == m[1].length ? 0 : parseInt(m[1], 10)) > (0 == t[1].length ? 0 : parseInt(t[1], 10)) ? 1 : 0) || ((0 == m[2].length) < (0 == t[2].length) ? -1 : (0 == m[2].length) > (0 == t[2].length) ? 1 : 0) || (m[2] < t[2] ? -1 : m[2] > t[2] ? 1 : 0)
      }while(0 == b)
    }
    b = Mh[a] = 0 <= b
  }
  return b
}
var Oh = q.document, Ph = Oh && Ah ? Fh() || ("CSS1Compat" == Oh.compatMode ? parseInt(Gh, 10) : 5) : void 0;
!Bh && !Ah || Ah && Ah && 9 <= Ph || Bh && Nh("1.9.1");
Ah && Nh("9");
function Qh(a) {
  if("function" == typeof a.vb) {
    return a.vb()
  }
  if(ha(a)) {
    return a.split("")
  }
  if(ga(a)) {
    for(var b = [], c = a.length, d = 0;d < c;d++) {
      b.push(a[d])
    }
    return b
  }
  return Na(a)
}
function Rh(a, b, c) {
  if("function" == typeof a.forEach) {
    a.forEach(b, c)
  }else {
    if(ga(a) || ha(a)) {
      Ha(a, b, c)
    }else {
      var d;
      if("function" == typeof a.hc) {
        d = a.hc()
      }else {
        if("function" != typeof a.vb) {
          if(ga(a) || ha(a)) {
            d = [];
            for(var e = a.length, f = 0;f < e;f++) {
              d.push(f)
            }
          }else {
            d = Oa(a)
          }
        }else {
          d = void 0
        }
      }
      for(var e = Qh(a), f = e.length, g = 0;g < f;g++) {
        b.call(c, e[g], d && d[g], a)
      }
    }
  }
}
;function Sh(a, b) {
  this.Sa = {};
  this.la = [];
  var c = arguments.length;
  if(1 < c) {
    if(c % 2) {
      throw Error("Uneven number of arguments");
    }
    for(var d = 0;d < c;d += 2) {
      this.set(arguments[d], arguments[d + 1])
    }
  }else {
    if(a) {
      a instanceof Sh ? (c = a.hc(), d = a.vb()) : (c = Oa(a), d = Na(a));
      for(var e = 0;e < c.length;e++) {
        this.set(c[e], d[e])
      }
    }
  }
}
n = Sh.prototype;
n.ba = 0;
n.Nc = 0;
n.vb = function() {
  Th(this);
  for(var a = [], b = 0;b < this.la.length;b++) {
    a.push(this.Sa[this.la[b]])
  }
  return a
};
n.hc = function() {
  Th(this);
  return this.la.concat()
};
n.remove = function(a) {
  return Object.prototype.hasOwnProperty.call(this.Sa, a) ? (delete this.Sa[a], this.ba--, this.Nc++, this.la.length > 2 * this.ba && Th(this), !0) : !1
};
function Th(a) {
  if(a.ba != a.la.length) {
    for(var b = 0, c = 0;b < a.la.length;) {
      var d = a.la[b];
      Object.prototype.hasOwnProperty.call(a.Sa, d) && (a.la[c++] = d);
      b++
    }
    a.la.length = c
  }
  if(a.ba != a.la.length) {
    for(var e = {}, c = b = 0;b < a.la.length;) {
      d = a.la[b], Object.prototype.hasOwnProperty.call(e, d) || (a.la[c++] = d, e[d] = 1), b++
    }
    a.la.length = c
  }
}
n.set = function(a, b) {
  Object.prototype.hasOwnProperty.call(this.Sa, a) || (this.ba++, this.la.push(a), this.Nc++);
  this.Sa[a] = b
};
s("undefined" != typeof NodeList) && (NodeList.prototype.sc = !0, NodeList.prototype.J = function() {
  return J.g(this, 0)
});
HTMLCollection.prototype.sc = !0;
HTMLCollection.prototype.J = function() {
  return J.g(this, 0)
};
function Uh(a) {
  if(a ? a.Gb : a) {
    return a.Gb(a)
  }
  var b;
  b = Uh[r(null == a ? null : a)];
  if(!b && (b = Uh._, !b)) {
    throw w("IDom.-\x3edom", a);
  }
  return b.call(null, a)
}
ae.prototype.Gb = function() {
  return kh.i ? kh.i(ih.i ? ih.i(ph(this)) : ih.call(null, ph(this))) : kh.call(null, ih.i ? ih.i(ph(this)) : ih.call(null, ph(this)))
};
Uh.string = function(a) {
  return Vh.i ? Vh.i(a) : Vh.call(null, a)
};
s("undefined" != typeof Node) && (Node.prototype.Gb = function() {
  return this
});
var Vh = function() {
  function a(a, b) {
    return Uh(b).querySelector(a)
  }
  function b(a) {
    return document.querySelector(a)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.g = a;
  return c
}();
var Wh = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = J(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f)
  }
  function b(a, b, e) {
    E(a) && (b.i ? b.i(F(a)) : b.call(null, F(a)));
    return T.v(rh, a, b, e)
  }
  a.p = 2;
  a.l = function(a) {
    var d = F(a);
    a = I(a);
    var e = F(a);
    a = G(a);
    return b(d, e, a)
  };
  a.k = b;
  return a
}();
function Xh() {
  0 != Yh && (this.Dd = Error().stack, Zh[ia(this)] = this)
}
var Yh = 0, Zh = {};
Xh.prototype.zc = !1;
Xh.prototype.yc = function() {
  if(!this.zc && (this.zc = !0, this.Oa(), 0 != Yh)) {
    var a = ia(this);
    delete Zh[a]
  }
};
Xh.prototype.Oa = function() {
  if(this.Ic) {
    for(;this.Ic.length;) {
      this.Ic.shift()()
    }
  }
};
var $h = !Ah || Ah && 9 <= Ph, ai = Ah && !Nh("9");
!Ch || Nh("528");
Bh && Nh("1.9b") || Ah && Nh("8") || zh && Nh("9.5") || Ch && Nh("528");
Bh && !Nh("8") || Ah && Nh("9");
function bi(a, b) {
  this.type = a;
  this.currentTarget = this.target = b
}
n = bi.prototype;
n.Oa = function() {
};
n.yc = function() {
};
n.eb = !1;
n.defaultPrevented = !1;
n.Bb = !0;
n.preventDefault = function() {
  this.defaultPrevented = !0;
  this.Bb = !1
};
function ci(a) {
  ci[" "](a);
  return a
}
ci[" "] = fa;
function di(a, b) {
  a && this.xb(a, b)
}
qa(di, bi);
n = di.prototype;
n.target = null;
n.relatedTarget = null;
n.offsetX = 0;
n.offsetY = 0;
n.clientX = 0;
n.clientY = 0;
n.screenX = 0;
n.screenY = 0;
n.button = 0;
n.keyCode = 0;
n.charCode = 0;
n.ctrlKey = !1;
n.altKey = !1;
n.shiftKey = !1;
n.metaKey = !1;
n.jd = !1;
n.Ac = null;
n.xb = function(a, b) {
  var c = this.type = a.type;
  bi.call(this, c);
  this.target = a.target || a.srcElement;
  this.currentTarget = b;
  var d = a.relatedTarget;
  if(d) {
    if(Bh) {
      var e;
      a: {
        try {
          ci(d.nodeName);
          e = !0;
          break a
        }catch(f) {
        }
        e = !1
      }
      e || (d = null)
    }
  }else {
    "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement)
  }
  this.relatedTarget = d;
  this.offsetX = Ch || void 0 !== a.offsetX ? a.offsetX : a.layerX;
  this.offsetY = Ch || void 0 !== a.offsetY ? a.offsetY : a.layerY;
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
  this.jd = Eh ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Ac = a;
  a.defaultPrevented && this.preventDefault();
  delete this.eb
};
n.preventDefault = function() {
  di.lc.preventDefault.call(this);
  var a = this.Ac;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = !1, ai) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(b) {
      }
    }
  }
};
n.Oa = function() {
};
var ei = 0;
function fi() {
}
n = fi.prototype;
n.key = 0;
n.Ta = !1;
n.sb = !1;
n.xb = function(a, b, c, d, e, f) {
  if("function" == r(a)) {
    this.Fc = !0
  }else {
    if(a && a.handleEvent && "function" == r(a.handleEvent)) {
      this.Fc = !1
    }else {
      throw Error("Invalid listener argument");
    }
  }
  this.Ka = a;
  this.Kc = b;
  this.src = c;
  this.type = d;
  this.capture = !!e;
  this.ic = f;
  this.sb = !1;
  this.key = ++ei;
  this.Ta = !1
};
n.handleEvent = function(a) {
  return this.Fc ? this.Ka.call(this.ic || this.src, a) : this.Ka.handleEvent.call(this.Ka, a)
};
var gi = {}, hi = {}, ii = {}, ji = {};
function ki(a, b, c, d, e) {
  if("array" == r(b)) {
    for(var f = 0;f < b.length;f++) {
      ki(a, b[f], c, d, e)
    }
  }else {
    a: {
      if(!b) {
        throw Error("Invalid event type");
      }
      d = !!d;
      var g = hi;
      b in g || (g[b] = {ba:0, pa:0});
      g = g[b];
      d in g || (g[d] = {ba:0, pa:0}, g.ba++);
      var g = g[d], f = ia(a), k;
      g.pa++;
      if(g[f]) {
        k = g[f];
        for(var l = 0;l < k.length;l++) {
          if(g = k[l], g.Ka == c && g.ic == e) {
            if(g.Ta) {
              break
            }
            k[l].sb = !1;
            a = k[l];
            break a
          }
        }
      }else {
        k = g[f] = [], g.ba++
      }
      l = li();
      g = new fi;
      g.xb(c, l, a, b, d, e);
      g.sb = !1;
      l.src = a;
      l.Ka = g;
      k.push(g);
      ii[f] || (ii[f] = []);
      ii[f].push(g);
      a.addEventListener ? a != q && a.xc || a.addEventListener(b, l, d) : a.attachEvent(b in ji ? ji[b] : ji[b] = "on" + b, l);
      a = g
    }
    gi[a.key] = a
  }
}
function li() {
  var a = mi, b = $h ? function(c) {
    return a.call(b.src, b.Ka, c)
  } : function(c) {
    c = a.call(b.src, b.Ka, c);
    if(!c) {
      return c
    }
  };
  return b
}
function ni(a, b, c, d, e) {
  if("array" == r(b)) {
    for(var f = 0;f < b.length;f++) {
      ni(a, b[f], c, d, e)
    }
  }else {
    d = !!d;
    a: {
      f = hi;
      if(b in f && (f = f[b], d in f && (f = f[d], a = ia(a), f[a]))) {
        a = f[a];
        break a
      }
      a = null
    }
    if(a) {
      for(f = 0;f < a.length;f++) {
        if(a[f].Ka == c && a[f].capture == d && a[f].ic == e) {
          oi(a[f].key);
          break
        }
      }
    }
  }
}
function oi(a) {
  var b = gi[a];
  if(b && !b.Ta) {
    var c = b.src, d = b.type, e = b.Kc, f = b.capture;
    c.removeEventListener ? c != q && c.xc || c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in ji ? ji[d] : ji[d] = "on" + d, e);
    c = ia(c);
    ii[c] && (e = ii[c], Ia(e, b), 0 == e.length && delete ii[c]);
    b.Ta = !0;
    if(b = hi[d][f][c]) {
      b.Hc = !0, pi(d, f, c, b)
    }
    delete gi[a]
  }
}
function pi(a, b, c, d) {
  if(!d.zb && d.Hc) {
    for(var e = 0, f = 0;e < d.length;e++) {
      d[e].Ta ? d[e].Kc.src = null : (e != f && (d[f] = d[e]), f++)
    }
    d.length = f;
    d.Hc = !1;
    0 == f && (delete hi[a][b][c], hi[a][b].ba--, 0 == hi[a][b].ba && (delete hi[a][b], hi[a].ba--), 0 == hi[a].ba && delete hi[a])
  }
}
function qi(a) {
  var b = 0;
  if(null != a) {
    if(a = ia(a), ii[a]) {
      a = ii[a];
      for(var c = a.length - 1;0 <= c;c--) {
        oi(a[c].key), b++
      }
    }
  }else {
    Ma(gi, function(a, c) {
      oi(c);
      b++
    })
  }
}
function ri(a, b, c, d, e) {
  var f = 1;
  b = ia(b);
  if(a[b]) {
    var g = --a.pa, k = a[b];
    k.zb ? k.zb++ : k.zb = 1;
    try {
      for(var l = k.length, p = 0;p < l;p++) {
        var m = k[p];
        m && !m.Ta && (f &= !1 !== si(m, e))
      }
    }finally {
      a.pa = Math.max(g, a.pa), k.zb--, pi(c, d, b, k)
    }
  }
  return Boolean(f)
}
function si(a, b) {
  a.sb && oi(a.key);
  return a.handleEvent(b)
}
function mi(a, b) {
  if(a.Ta) {
    return!0
  }
  var c = a.type, d = hi;
  if(!(c in d)) {
    return!0
  }
  var d = d[c], e, f;
  if(!$h) {
    e = b || ea("window.event");
    var g = !0 in d, k = !1 in d;
    if(g) {
      if(0 > e.keyCode || void 0 != e.returnValue) {
        return!0
      }
      a: {
        var l = !1;
        if(0 == e.keyCode) {
          try {
            e.keyCode = -1;
            break a
          }catch(p) {
            l = !0
          }
        }
        if(l || void 0 == e.returnValue) {
          e.returnValue = !0
        }
      }
    }
    l = new di;
    l.xb(e, this);
    e = !0;
    try {
      if(g) {
        for(var m = [], t = l.currentTarget;t;t = t.parentNode) {
          m.push(t)
        }
        f = d[!0];
        f.pa = f.ba;
        for(var x = m.length - 1;!l.eb && 0 <= x && f.pa;x--) {
          l.currentTarget = m[x], e &= ri(f, m[x], c, !0, l)
        }
        if(k) {
          for(f = d[!1], f.pa = f.ba, x = 0;!l.eb && x < m.length && f.pa;x++) {
            l.currentTarget = m[x], e &= ri(f, m[x], c, !1, l)
          }
        }
      }else {
        e = si(a, l)
      }
    }finally {
      m && (m.length = 0)
    }
    return e
  }
  c = new di(b, this);
  return e = si(a, c)
}
;function ti() {
  Xh.call(this)
}
qa(ti, Xh);
n = ti.prototype;
n.xc = !0;
n.kc = null;
n.addEventListener = function(a, b, c, d) {
  ki(this, a, b, c, d)
};
n.removeEventListener = function(a, b, c, d) {
  ni(this, a, b, c, d)
};
n.dispatchEvent = function(a) {
  var b = a.type || a, c = hi;
  if(b in c) {
    if(ha(a)) {
      a = new bi(a, this)
    }else {
      if(a instanceof bi) {
        a.target = a.target || this
      }else {
        var d = a;
        a = new bi(b, this);
        Qa(a, d)
      }
    }
    var d = 1, e, c = c[b], b = !0 in c, f;
    if(b) {
      e = [];
      for(f = this;f;f = f.kc) {
        e.push(f)
      }
      f = c[!0];
      f.pa = f.ba;
      for(var g = e.length - 1;!a.eb && 0 <= g && f.pa;g--) {
        a.currentTarget = e[g], d &= ri(f, e[g], a.type, !0, a) && !1 != a.Bb
      }
    }
    if(!1 in c) {
      if(f = c[!1], f.pa = f.ba, b) {
        for(g = 0;!a.eb && g < e.length && f.pa;g++) {
          a.currentTarget = e[g], d &= ri(f, e[g], a.type, !1, a) && !1 != a.Bb
        }
      }else {
        for(e = this;!a.eb && e && f.pa;e = e.kc) {
          a.currentTarget = e, d &= ri(f, e, a.type, !1, a) && !1 != a.Bb
        }
      }
    }
    a = Boolean(d)
  }else {
    a = !0
  }
  return a
};
n.Oa = function() {
  ti.lc.Oa.call(this);
  qi(this);
  this.kc = null
};
function ui(a) {
  return vi(a || arguments.callee.caller, [])
}
function vi(a, b) {
  var c = [];
  if(0 <= Ga(b, a)) {
    c.push("[...circular reference...]")
  }else {
    if(a && 50 > b.length) {
      c.push(wi(a) + "(");
      for(var d = a.arguments, e = 0;e < d.length;e++) {
        0 < e && c.push(", ");
        var f;
        f = d[e];
        switch(typeof f) {
          case "object":
            f = f ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            f = String(f);
            break;
          case "boolean":
            f = f ? "true" : "false";
            break;
          case "function":
            f = (f = wi(f)) ? f : "[fn]";
            break;
          default:
            f = typeof f
        }
        40 < f.length && (f = f.substr(0, 40) + "...");
        c.push(f)
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(vi(a.caller, b))
      }catch(g) {
        c.push("[exception trying to get caller]\n")
      }
    }else {
      a ? c.push("[...long stack...]") : c.push("[end]")
    }
  }
  return c.join("")
}
function wi(a) {
  if(xi[a]) {
    return xi[a]
  }
  a = String(a);
  if(!xi[a]) {
    var b = /function ([^\(]+)/.exec(a);
    xi[a] = b ? b[1] : "[Anonymous]"
  }
  return xi[a]
}
var xi = {};
function yi(a, b, c, d, e) {
  this.reset(a, b, c, d, e)
}
yi.prototype.md = 0;
yi.prototype.Cc = null;
yi.prototype.Bc = null;
var zi = 0;
yi.prototype.reset = function(a, b, c, d, e) {
  this.md = "number" == typeof e ? e : zi++;
  this.Gd = d || pa();
  this.qb = a;
  this.ed = b;
  this.Ed = c;
  delete this.Cc;
  delete this.Bc
};
yi.prototype.Mc = function(a) {
  this.qb = a
};
function Ai(a) {
  this.fd = a
}
Ai.prototype.Ab = null;
Ai.prototype.qb = null;
Ai.prototype.Hb = null;
Ai.prototype.Dc = null;
function Bi(a, b) {
  this.name = a;
  this.value = b
}
Bi.prototype.toString = h("name");
var Ci = new Bi("SEVERE", 1E3), Di = new Bi("WARNING", 900), Ei = new Bi("CONFIG", 700), Fi = new Bi("FINE", 500);
Ai.prototype.getParent = h("Ab");
Ai.prototype.Mc = function(a) {
  this.qb = a
};
function Gi(a) {
  if(a.qb) {
    return a.qb
  }
  if(a.Ab) {
    return Gi(a.Ab)
  }
  Ea("Root logger has no level set.");
  return null
}
Ai.prototype.log = function(a, b, c) {
  if(a.value >= Gi(this).value) {
    for(a = this.cd(a, b, c), b = "log:" + a.ed, q.console && (q.console.timeStamp ? q.console.timeStamp(b) : q.console.markTimeline && q.console.markTimeline(b)), q.msWriteProfilerMark && q.msWriteProfilerMark(b), b = this;b;) {
      c = b;
      var d = a;
      if(c.Dc) {
        for(var e = 0, f = void 0;f = c.Dc[e];e++) {
          f(d)
        }
      }
      b = b.getParent()
    }
  }
};
Ai.prototype.cd = function(a, b, c) {
  var d = new yi(a, String(b), this.fd);
  if(c) {
    d.Cc = c;
    var e;
    var f = arguments.callee.caller;
    try {
      var g;
      var k = ea("window.location.href");
      if(ha(c)) {
        g = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:k, stack:"Not available"}
      }else {
        var l, p, m = !1;
        try {
          l = c.lineNumber || c.line || "Not available"
        }catch(t) {
          l = "Not available", m = !0
        }
        try {
          p = c.fileName || c.filename || c.sourceURL || q.$googDebugFname || k
        }catch(x) {
          p = "Not available", m = !0
        }
        g = !m && c.lineNumber && c.fileName && c.stack ? c : {message:c.message, name:c.name, lineNumber:l, fileName:p, stack:c.stack || "Not available"}
      }
      e = "Message: " + ta(g.message) + '\nUrl: \x3ca href\x3d"view-source:' + g.fileName + '" target\x3d"_new"\x3e' + g.fileName + "\x3c/a\x3e\nLine: " + g.lineNumber + "\n\nBrowser stack:\n" + ta(g.stack + "-\x3e ") + "[end]\n\nJS stack traversal:\n" + ta(ui(f) + "-\x3e ")
    }catch(A) {
      e = "Exception trying to expose exception! You win, we lose. " + A
    }
    d.Bc = e
  }
  return d
};
function Hi(a, b) {
  a.log(Fi, b, void 0)
}
var Ii = {}, Ji = null;
function Ki(a) {
  Ji || (Ji = new Ai(""), Ii[""] = Ji, Ji.Mc(Ei));
  var b;
  if(!(b = Ii[a])) {
    b = new Ai(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = Ki(a.substr(0, c));
    c.Hb || (c.Hb = {});
    c.Hb[d] = b;
    b.Ab = c;
    Ii[a] = b
  }
  return b
}
;function Li(a) {
  a = String(a);
  if(/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + a + ")")
    }catch(b) {
    }
  }
  throw Error("Invalid JSON string: " + a);
}
;function Mi() {
}
Mi.prototype.nc = null;
function Ni(a) {
  var b;
  (b = a.nc) || (b = {}, Oi(a) && (b[0] = !0, b[1] = !0), b = a.nc = b);
  return b
}
;var Pi;
function Qi() {
}
qa(Qi, Mi);
function Ri(a) {
  return(a = Oi(a)) ? new ActiveXObject(a) : new XMLHttpRequest
}
function Oi(a) {
  if(!a.Ec && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for(var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0;c < b.length;c++) {
      var d = b[c];
      try {
        return new ActiveXObject(d), a.Ec = d
      }catch(e) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return a.Ec
}
Pi = new Qi;
var Si = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?\x3d[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$");
function Ti(a) {
  Xh.call(this);
  this.headers = new Sh;
  this.Eb = a || null
}
qa(Ti, ti);
Ti.prototype.ta = Ki("goog.net.XhrIo");
var Ui = /^https?$/i, Vi = [];
function Wi(a) {
  a.yc();
  Ia(Vi, a)
}
n = Ti.prototype;
n.Fa = !1;
n.L = null;
n.Db = null;
n.yb = "";
n.Gc = "";
n.ob = 0;
n.pb = "";
n.gc = !1;
n.wb = !1;
n.jc = !1;
n.Qa = !1;
n.Cb = 0;
n.Ua = null;
n.Lc = "";
n.qd = !1;
n.send = function(a, b, c, d) {
  if(this.L) {
    throw Error("[goog.net.XhrIo] Object is active with another request\x3d" + this.yb + "; newUri\x3d" + a);
  }
  b = b ? b.toUpperCase() : "GET";
  this.yb = a;
  this.pb = "";
  this.ob = 0;
  this.Gc = b;
  this.gc = !1;
  this.Fa = !0;
  this.L = this.Eb ? Ri(this.Eb) : Ri(Pi);
  this.Db = this.Eb ? Ni(this.Eb) : Ni(Pi);
  this.L.onreadystatechange = na(this.Jc, this);
  try {
    Hi(this.ta, Xi(this, "Opening Xhr")), this.jc = !0, this.L.open(b, a, !0), this.jc = !1
  }catch(e) {
    Hi(this.ta, Xi(this, "Error opening Xhr: " + e.message));
    Yi(this, e);
    return
  }
  a = c || "";
  var f = new Sh(this.headers);
  d && Rh(d, function(a, b) {
    f.set(b, a)
  });
  d = q.FormData && a instanceof q.FormData;
  "POST" != b || (Object.prototype.hasOwnProperty.call(f.Sa, "Content-Type") || d) || f.set("Content-Type", "application/x-www-form-urlencoded;charset\x3dutf-8");
  Rh(f, function(a, b) {
    this.L.setRequestHeader(b, a)
  }, this);
  this.Lc && (this.L.responseType = this.Lc);
  "withCredentials" in this.L && (this.L.withCredentials = this.qd);
  try {
    this.Ua && (q.clearTimeout(this.Ua), this.Ua = null), 0 < this.Cb && (Hi(this.ta, Xi(this, "Will abort after " + this.Cb + "ms if incomplete")), this.Ua = q.setTimeout(na(this.od, this), this.Cb)), Hi(this.ta, Xi(this, "Sending request")), this.wb = !0, this.L.send(a), this.wb = !1
  }catch(g) {
    Hi(this.ta, Xi(this, "Send error: " + g.message)), Yi(this, g)
  }
};
n.od = function() {
  "undefined" != typeof ca && this.L && (this.pb = "Timed out after " + this.Cb + "ms, aborting", this.ob = 8, Hi(this.ta, Xi(this, this.pb)), this.dispatchEvent("timeout"), this.abort(8))
};
function Yi(a, b) {
  a.Fa = !1;
  a.L && (a.Qa = !0, a.L.abort(), a.Qa = !1);
  a.pb = b;
  a.ob = 5;
  Zi(a);
  $i(a)
}
function Zi(a) {
  a.gc || (a.gc = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"))
}
n.abort = function(a) {
  this.L && this.Fa && (Hi(this.ta, Xi(this, "Aborting")), this.Fa = !1, this.Qa = !0, this.L.abort(), this.Qa = !1, this.ob = a || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), $i(this))
};
n.Oa = function() {
  this.L && (this.Fa && (this.Fa = !1, this.Qa = !0, this.L.abort(), this.Qa = !1), $i(this, !0));
  Ti.lc.Oa.call(this)
};
n.Jc = function() {
  this.jc || this.wb || this.Qa ? aj(this) : this.hd()
};
n.hd = function() {
  aj(this)
};
function aj(a) {
  if(a.Fa && "undefined" != typeof ca) {
    if(a.Db[1] && 4 == bj(a) && 2 == a.getStatus()) {
      Hi(a.ta, Xi(a, "Local request error detected and ignored"))
    }else {
      if(a.wb && 4 == bj(a)) {
        q.setTimeout(na(a.Jc, a), 0)
      }else {
        if(a.dispatchEvent("readystatechange"), 4 == bj(a)) {
          Hi(a.ta, Xi(a, "Request complete"));
          a.Fa = !1;
          try {
            var b = a.getStatus(), c, d;
            a: {
              switch(b) {
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
                  d = !0;
                  break a;
                default:
                  d = !1
              }
            }
            if(!(c = d)) {
              var e;
              if(e = 0 === b) {
                var f = String(a.yb).match(Si)[1] || null;
                if(!f && self.location) {
                  var g = self.location.protocol, f = g.substr(0, g.length - 1)
                }
                e = !Ui.test(f ? f.toLowerCase() : "")
              }
              c = e
            }
            if(c) {
              a.dispatchEvent("complete"), a.dispatchEvent("success")
            }else {
              a.ob = 6;
              var k;
              try {
                k = 2 < bj(a) ? a.L.statusText : ""
              }catch(l) {
                Hi(a.ta, "Can not get status: " + l.message), k = ""
              }
              a.pb = k + " [" + a.getStatus() + "]";
              Zi(a)
            }
          }finally {
            $i(a)
          }
        }
      }
    }
  }
}
function $i(a, b) {
  if(a.L) {
    var c = a.L, d = a.Db[0] ? fa : null;
    a.L = null;
    a.Db = null;
    a.Ua && (q.clearTimeout(a.Ua), a.Ua = null);
    b || a.dispatchEvent("ready");
    try {
      c.onreadystatechange = d
    }catch(e) {
      a.ta.log(Ci, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
    }
  }
}
function bj(a) {
  return a.L ? a.L.readyState : 0
}
n.getStatus = function() {
  try {
    return 2 < bj(this) ? this.L.status : -1
  }catch(a) {
    return this.ta.log(Di, "Can not get status: " + a.message, void 0), -1
  }
};
function cj(a) {
  if(a.L) {
    return Li(a.L.responseText)
  }
}
function Xi(a, b) {
  return b + " [" + a.Gc + " " + a.yb + " " + a.getStatus() + "]"
}
;var dj = {};
function ej(a) {
  if(a ? a.Pa : a) {
    return a.Pa(a)
  }
  var b;
  b = ej[r(null == a ? null : a)];
  if(!b && (b = ej._, !b)) {
    throw w("PElement.-elem", a);
  }
  return b.call(null, a)
}
function fj(a, b) {
  var c = a.indexOf("#", b), d = a.indexOf(".", b), e = Math.min(c, d);
  return 0 > e ? Math.max(c, d) : e
}
function gj(a) {
  var b = fd(a), c = fj(b, 0);
  a = document.createElement(0 < c ? b.substring(0, c) : 0 === c ? "div" : v ? b : null);
  if(0 <= c) {
    for(b = b.substring(c);;) {
      var c = fj(b, 1), d = 0 <= c ? b.substring(0, c) : b, e = d.charAt(0);
      if(L.g("#", e)) {
        a.setAttribute("id", d.substring(1))
      }else {
        if(L.g(".", e)) {
          Gg.g(a, d.substring(1))
        }else {
          if(v) {
            throw Error([y("No matching clause: "), y(d.charAt(0))].join(""));
          }
        }
      }
      if(0 <= c) {
        b = b.substring(c)
      }else {
        break
      }
    }
  }
  return a
}
var hj = function() {
  function a(a, b) {
    if(b ? s(s(null) ? null : b.Ha) || (b.Ya ? 0 : u(dj, b)) : u(dj, b)) {
      return a.appendChild(ej(b)), a
    }
    if(Kc(b)) {
      for(var f = E(b), g = null, k = 0, l = 0;;) {
        if(l < k) {
          var p = g.w(null, l);
          c.g(a, p);
          l += 1
        }else {
          if(f = E(f)) {
            g = f, V(g) ? (f = B(g), l = C(g), g = f, k = P(f), f = l) : (f = F(g), c.g(a, f), f = I(g), g = null, k = 0), l = 0
          }else {
            break
          }
        }
      }
      return a
    }
    if(null == b) {
      f = a
    }else {
      if(v) {
        throw[y("Don't know how to make node from: "), y(nf.k(J([b], 0)))].join("");
      }
      f = null
    }
    return f
  }
  function b(a) {
    return c.g(document.createDocumentFragment(), a)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.g = a;
  return c
}();
function $(a) {
  return(a ? s(s(null) ? null : a.Ha) || (a.Ya ? 0 : u(dj, a)) : u(dj, a)) ? ej(a) : hj.i(a)
}
dj.string = !0;
ej.string = function(a) {
  return a instanceof X ? gj(a) : document.createTextNode("" + y(a))
};
dj.number = !0;
ej.number = function(a) {
  return document.createTextNode("" + y(a))
};
ae.prototype.Ha = !0;
ae.prototype.Pa = function() {
  for(var a = Q.h(this, 0, null), b = Q.h(this, 1, null), c = Wc(this, 2), a = gj(a), d = Fc(b) && !(b ? s(s(null) ? null : b.Ha) || (b.Ya ? 0 : u(dj, b)) : u(dj, b)) ? b : null, b = s(d) ? c : N(b, c), c = E(d), d = null, e = 0, f = 0;;) {
    if(f < e) {
      var g = d.w(null, f), k = Q.h(g, 0, null), g = Q.h(g, 1, null), l = k;
      if(L.g(vg, l)) {
        for(var k = E(g), g = null, p = l = 0;;) {
          if(p < l) {
            var m = g.w(null, p);
            Gg.g(a, m);
            p += 1
          }else {
            if(k = E(k)) {
              g = k, V(g) ? (k = B(g), p = C(g), g = k, l = P(k), k = p) : (k = F(g), Gg.g(a, k), k = I(g), g = null, l = 0), p = 0
            }else {
              break
            }
          }
        }
      }else {
        L.g(Uf, l) ? Gg.g(a, g) : v && Kg.h(a, k, g)
      }
      f += 1
    }else {
      if(c = E(c)) {
        if(V(c)) {
          e = B(c), c = C(c), d = e, e = P(e)
        }else {
          e = F(c);
          d = Q.h(e, 0, null);
          e = Q.h(e, 1, null);
          f = d;
          if(L.g(vg, f)) {
            for(d = E(e), e = null, k = f = 0;;) {
              if(k < f) {
                g = e.w(null, k), Gg.g(a, g), k += 1
              }else {
                if(d = E(d)) {
                  e = d, V(e) ? (d = B(e), k = C(e), e = d, f = P(d), d = k) : (d = F(e), Gg.g(a, d), d = I(e), e = null, f = 0), k = 0
                }else {
                  break
                }
              }
            }
          }else {
            L.g(Uf, f) ? Gg.g(a, e) : v && Kg.h(a, d, e)
          }
          c = I(c);
          d = null;
          e = 0
        }
        f = 0
      }else {
        break
      }
    }
  }
  a.appendChild($(b));
  return a
};
Document.prototype.Ha = !0;
Document.prototype.Pa = function() {
  return this
};
Text.prototype.Ha = !0;
Text.prototype.Pa = function() {
  return this
};
DocumentFragment.prototype.Ha = !0;
DocumentFragment.prototype.Pa = function() {
  return this
};
HTMLElement.prototype.Ha = !0;
HTMLElement.prototype.Pa = function() {
  return this
};
try {
  Window.prototype.Ha = !0, Window.prototype.Pa = function() {
    return this
  }
}catch(ij) {
  if(ij instanceof ReferenceError) {
    console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)")
  }else {
    if(v) {
      throw ij;
    }
  }
}
;function jj(a) {
  return Array.prototype.slice.call(a)
}
;var lj = function kj(b) {
  return Dc(b) ? Bg.g(" ", Bd.g(kj, b)) : "string" === typeof b || b instanceof X ? fd(b) : null
};
function mj(a) {
  return bf(yd, Hd(function(a) {
    return a.parentNode
  }, $(a)))
}
var nj = function() {
  function a(a, b) {
    var c = jj($($(a)).querySelectorAll(lj(b)));
    return function(a) {
      return 0 <= c.indexOf(a)
    }
  }
  function b(a) {
    return c.g(document, a)
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = b;
  c.g = a;
  return c
}(), oj = function() {
  function a(a, b, c) {
    var g = $(a);
    a = $(b);
    return F(Kd(nj.g(g, c), bf(function(a) {
      return a !== g
    }, mj(a))))
  }
  function b(a, b) {
    return F(Kd(nj.i(b), mj($(a))))
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f)
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.g = b;
  c.h = a;
  return c
}(), pj = Ld(xe, Bd.g(function(a) {
  var b = Q.h(a, 0, null);
  a = Q.h(a, 1, null);
  return Z([b, Zb([a, function(a) {
    return function(b) {
      var e = b.relatedTarget, f;
      f = b.ld;
      f = s(f) ? f : b.currentTarget;
      s(e) && (e = $(e), f = $(f), e = s(f.contains) ? f.contains(e) : s(f.compareDocumentPosition) ? 0 != (f.compareDocumentPosition(e) & 16) : null);
      return s(e) ? null : a.i ? a.i(b) : a.call(null, b)
    }
  }], !0)], !0)
}, Zb([mg, Sf, eg, Yf], !0)));
function qj(a, b, c) {
  return function(d) {
    var e = oj.h($(a), d.target, b);
    return s(e) ? (d.ld = e, c.i ? c.i(d) : c.call(null, d)) : null
  }
}
function rj(a) {
  a = $(a).ad;
  return s(a) ? a : xe
}
var sj = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = J(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f)
  }
  function b(a, b, e) {
    a = $(a);
    return a.ad = T.h(b, rj(a), e)
  }
  a.p = 2;
  a.l = function(a) {
    var d = F(a);
    a = I(a);
    var e = F(a);
    a = G(a);
    return b(d, e, a)
  };
  a.k = b;
  return a
}();
function tj(a) {
  return Ec(a) ? df.g(function(a) {
    return $(F(a))
  }, G).call(null, a) : Z([$(a), null], !0)
}
var uj = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = J(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e)
  }
  function b(a, b) {
    if(!zd(P(b))) {
      throw Error([y("Assert failed: "), y(nf.k(J([dd(new dc(null, "even?", "even?", -1543640034, null), dd(new dc(null, "count", "count", -1545680184, null), new dc(null, "type-fs", "type-fs", 1801297401, null)))], 0)))].join(""));
    }
    for(var e = tj(a), f = Q.h(e, 0, null), e = Q.h(e, 1, null), g = E(Md.g(2, b)), k = null, l = 0, p = 0;;) {
      if(p < l) {
        for(var m = k.w(null, p), t = Q.h(m, 0, null), m = Q.h(m, 1, null), t = E(R.h(pj, t, Zb([t, yd], !0))), x = null, A = 0, K = 0;;) {
          if(K < A) {
            var S = x.w(null, K), M = Q.h(S, 0, null), S = Q.h(S, 1, null), S = (s(e) ? Ad.h(qj, f, e) : yd).call(null, S.i ? S.i(m) : S.call(null, m));
            sj.k(f, Od, J([Z([e, M, m], !0), S], 0));
            s(f.addEventListener) ? f.addEventListener(fd(M), S) : f.attachEvent(fd(M), S);
            K += 1
          }else {
            if(t = E(t)) {
              V(t) ? (A = B(t), t = C(t), x = A, A = P(A)) : (A = F(t), x = Q.h(A, 0, null), A = Q.h(A, 1, null), A = (s(e) ? Ad.h(qj, f, e) : yd).call(null, A.i ? A.i(m) : A.call(null, m)), sj.k(f, Od, J([Z([e, x, m], !0), A], 0)), s(f.addEventListener) ? f.addEventListener(fd(x), A) : f.attachEvent(fd(x), A), t = I(t), x = null, A = 0), K = 0
            }else {
              break
            }
          }
        }
        p += 1
      }else {
        if(g = E(g)) {
          if(V(g)) {
            l = B(g), g = C(g), k = l, l = P(l)
          }else {
            k = F(g);
            l = Q.h(k, 0, null);
            k = Q.h(k, 1, null);
            l = E(R.h(pj, l, Zb([l, yd], !0)));
            p = null;
            for(t = m = 0;;) {
              if(t < m) {
                A = p.w(null, t), x = Q.h(A, 0, null), A = Q.h(A, 1, null), A = (s(e) ? Ad.h(qj, f, e) : yd).call(null, A.i ? A.i(k) : A.call(null, k)), sj.k(f, Od, J([Z([e, x, k], !0), A], 0)), s(f.addEventListener) ? f.addEventListener(fd(x), A) : f.attachEvent(fd(x), A), t += 1
              }else {
                if(l = E(l)) {
                  V(l) ? (m = B(l), l = C(l), p = m, m = P(m)) : (m = F(l), p = Q.h(m, 0, null), m = Q.h(m, 1, null), m = (s(e) ? Ad.h(qj, f, e) : yd).call(null, m.i ? m.i(k) : m.call(null, k)), sj.k(f, Od, J([Z([e, p, k], !0), m], 0)), s(f.addEventListener) ? f.addEventListener(fd(p), m) : f.attachEvent(fd(p), m), l = I(l), p = null, m = 0), t = 0
                }else {
                  break
                }
              }
            }
            g = I(g);
            k = null;
            l = 0
          }
          p = 0
        }else {
          break
        }
      }
    }
    return a
  }
  a.p = 1;
  a.l = function(a) {
    var d = F(a);
    a = G(a);
    return b(d, a)
  };
  a.k = b;
  return a
}();
var vj, wj = qf.i(fe);
function xj(a) {
  return F(Dg.g(a, /T/))
}
function yj(a) {
  var b = Ag.k(J([Rf, Z([0, T.g(Tc, Ve(a))], !0), bg, Z([0, 300], !0)], 0)), c = function() {
    var c = new Og(null, !0, function() {
      return Z([Ff, Wh(a, function(a) {
        var c = Q.h(a, 0, null);
        a = Q.h(a, 1, null);
        c = xj(c);
        return Z([Of, Zb([ag, Zb([Mf, [y(300), y("px")].join("")], !0)], !0), Z([Vf, Zb([Hf, [y("/reports/"), y(c), y(".csv")].join(""), Uf, "download"], !0), Z([ig, Zb([Uf, "fa fa-cloud-download"], !0)], !0)], !0), Z([Of, Zb([ag, Zb([xg, [y(30), y("px")].join(""), Mf, [y(b.i ? b.i(a) : b.call(null, a)), y("px")].join(""), lg, "gray", Qf, "4px", If, "2px solid white"], !0)], !0), Z([qg, Zb([ag, Zb([Xf, "white"], !0)], !0), Z([Vf, Zb([Hf, [y("#"), y(c)].join(""), Uf, "date", ug, c, gg, [y(a), y(" reports")].join("")], 
        !0), c], !0)], !0)], !0)], !0)
      })], !0)
    }, vf.i("computed-observable"), xe, xe);
    vb(c);
    return c
  }(), d = Uh("#barchart");
  qh(d, vb(c));
  Ob(c, dg, function() {
    return qh(d, vb(c))
  })
}
function zj(a) {
  var b = ng.i(a), c = Gf.i(a), b = new google.maps.LatLng(b, c), d = new google.maps.Marker(zf(Zb(["position", b, "title", wg.i(a)], !0))), e = new google.maps.InfoWindow(zf(Zb(["content", [y("\x3cdl\x3e\x3cdt\x3e"), y(wg.i(a)), y("\x3c/dt\x3e"), y("\x3cdd\x3e"), y(tg.i(a)), y("\x3cbr/\x3e"), y(Lf.i(a)), y("\x3c/dd\x3e\x3c/dl\x3e")].join("")], !0)));
  google.maps.event.addListener.h ? google.maps.event.addListener.h(d, "click", function() {
    return e.open(vj, d)
  }) : google.maps.event.addListener.call(null, d, "click", function() {
    return e.open(vj, d)
  });
  return d
}
function Aj(a) {
  a = Ef.k(cj(a.target), J([Df, !0], 0));
  var b = Bd.g(function() {
    return function(a) {
      return wc.h(a, jg, zj(a))
    }
  }(a), a);
  tf(wj, vb(wj), b);
  yj(cd(Rc.i(cf(Bd.g(function(a) {
    return xj(Lf.i(a))
  }, a)))));
  return Bj.t ? Bj.t() : Bj.call(null)
}
da("hbg_crime.application.get_reports", function() {
  var a = new Ti;
  Vi.push(a);
  Aj && ki(a, "complete", Aj);
  ki(a, "ready", oa(Wi, a));
  a.send("reports.json", "GET", void 0, void 0)
});
da("hbg_crime.application.create_map", function() {
  var a = zf(Zb(["center", new google.maps.LatLng(40.2725855, -76.864382), "zoom", 13, "mapTypeId", "roadmap"], !0));
  return vj = new google.maps.Map(document.getElementById("map"), a)
});
function Bj() {
  for(var a = E(jj(document.querySelectorAll("a.date"))), b = null, c = 0, d = 0;;) {
    if(d < c) {
      var e = b.w(null, d), f = s("data-date") ? $(e).getAttribute(fd("data-date")) : null;
      uj.k(e, J([Zf, function(a, b, c, d, e, f) {
        return function(g) {
          Ig.g(g.target, "highlighted");
          g = E(Kd(function(a, b, c, d, e) {
            return function(a) {
              return L.g(xj(Lf.i(a)), e)
            }
          }(a, b, c, d, e, f), vb(wj)));
          for(var k = null, M = 0, U = 0;;) {
            if(U < M) {
              var W = k.w(null, U);
              s(jg.i(W).getMap()) ? jg.i(W).setMap(null) : jg.i(W).setMap(vj);
              U += 1
            }else {
              if(g = E(g)) {
                k = g, V(k) ? (g = B(k), M = C(k), k = g, W = P(g), g = M, M = W) : (W = F(k), s(jg.i(W).getMap()) ? jg.i(W).setMap(null) : jg.i(W).setMap(vj), g = I(k), k = null, M = 0), U = 0
              }else {
                return null
              }
            }
          }
        }
      }(a, b, c, d, f, e)], 0));
      d += 1
    }else {
      var g = E(a);
      if(g) {
        f = g;
        if(V(f)) {
          a = B(f), d = C(f), b = a, c = P(a), a = d
        }else {
          var e = F(f), k = s("data-date") ? $(e).getAttribute(fd("data-date")) : null;
          uj.k(e, J([Zf, function(a, b, c, d, e, f, g, k) {
            return function(M) {
              Ig.g(M.target, "highlighted");
              M = E(Kd(function(a, b, c, d, e) {
                return function(a) {
                  return L.g(xj(Lf.i(a)), e)
                }
              }(a, b, c, d, e, f, g, k), vb(wj)));
              for(var U = null, W = 0, xa = 0;;) {
                if(xa < W) {
                  var ya = U.w(null, xa);
                  s(jg.i(ya).getMap()) ? jg.i(ya).setMap(null) : jg.i(ya).setMap(vj);
                  xa += 1
                }else {
                  if(M = E(M)) {
                    U = M, V(U) ? (M = B(U), W = C(U), U = M, ya = P(M), M = W, W = ya) : (ya = F(U), s(jg.i(ya).getMap()) ? jg.i(ya).setMap(null) : jg.i(ya).setMap(vj), M = I(U), U = null, W = 0), xa = 0
                  }else {
                    return null
                  }
                }
              }
            }
          }(a, b, c, d, k, e, f, g)], 0));
          a = I(f);
          b = null;
          c = 0
        }
        d = 0
      }else {
        return null
      }
    }
  }
}
;
})();
