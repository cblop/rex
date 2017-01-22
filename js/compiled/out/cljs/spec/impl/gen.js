// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__45103__auto__,writer__45104__auto__,opt__45105__auto__){
return cljs.core._write.call(null,writer__45104__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50493 = arguments.length;
var i__45573__auto___50494 = (0);
while(true){
if((i__45573__auto___50494 < len__45572__auto___50493)){
args__45579__auto__.push((arguments[i__45573__auto___50494]));

var G__50495 = (i__45573__auto___50494 + (1));
i__45573__auto___50494 = G__50495;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq50492){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50492));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50497 = arguments.length;
var i__45573__auto___50498 = (0);
while(true){
if((i__45573__auto___50498 < len__45572__auto___50497)){
args__45579__auto__.push((arguments[i__45573__auto___50498]));

var G__50499 = (i__45573__auto___50498 + (1));
i__45573__auto___50498 = G__50499;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq50496){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50496));
});

var g_QMARK__50500 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_50501 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__50500){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__50500))
,null));
var mkg_50502 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__50500,g_50501){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__50500,g_50501))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__50500,g_50501,mkg_50502){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__50500).call(null,x);
});})(g_QMARK__50500,g_50501,mkg_50502))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__50500,g_50501,mkg_50502){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_50502).call(null,gfn);
});})(g_QMARK__50500,g_50501,mkg_50502))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__50500,g_50501,mkg_50502){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_50501).call(null,generator);
});})(g_QMARK__50500,g_50501,mkg_50502))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__48612__auto___50521 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__48612__auto___50521){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50522 = arguments.length;
var i__45573__auto___50523 = (0);
while(true){
if((i__45573__auto___50523 < len__45572__auto___50522)){
args__45579__auto__.push((arguments[i__45573__auto___50523]));

var G__50524 = (i__45573__auto___50523 + (1));
i__45573__auto___50523 = G__50524;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48612__auto___50521))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48612__auto___50521){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48612__auto___50521),args);
});})(g__48612__auto___50521))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__48612__auto___50521){
return (function (seq50503){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50503));
});})(g__48612__auto___50521))
;


var g__48612__auto___50525 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__48612__auto___50525){
return (function cljs$spec$impl$gen$list(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50526 = arguments.length;
var i__45573__auto___50527 = (0);
while(true){
if((i__45573__auto___50527 < len__45572__auto___50526)){
args__45579__auto__.push((arguments[i__45573__auto___50527]));

var G__50528 = (i__45573__auto___50527 + (1));
i__45573__auto___50527 = G__50528;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48612__auto___50525))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48612__auto___50525){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48612__auto___50525),args);
});})(g__48612__auto___50525))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__48612__auto___50525){
return (function (seq50504){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50504));
});})(g__48612__auto___50525))
;


var g__48612__auto___50529 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__48612__auto___50529){
return (function cljs$spec$impl$gen$map(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50530 = arguments.length;
var i__45573__auto___50531 = (0);
while(true){
if((i__45573__auto___50531 < len__45572__auto___50530)){
args__45579__auto__.push((arguments[i__45573__auto___50531]));

var G__50532 = (i__45573__auto___50531 + (1));
i__45573__auto___50531 = G__50532;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48612__auto___50529))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48612__auto___50529){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48612__auto___50529),args);
});})(g__48612__auto___50529))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__48612__auto___50529){
return (function (seq50505){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50505));
});})(g__48612__auto___50529))
;


var g__48612__auto___50533 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__48612__auto___50533){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50534 = arguments.length;
var i__45573__auto___50535 = (0);
while(true){
if((i__45573__auto___50535 < len__45572__auto___50534)){
args__45579__auto__.push((arguments[i__45573__auto___50535]));

var G__50536 = (i__45573__auto___50535 + (1));
i__45573__auto___50535 = G__50536;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48612__auto___50533))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48612__auto___50533){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48612__auto___50533),args);
});})(g__48612__auto___50533))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__48612__auto___50533){
return (function (seq50506){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50506));
});})(g__48612__auto___50533))
;


var g__48612__auto___50537 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__48612__auto___50537){
return (function cljs$spec$impl$gen$set(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50538 = arguments.length;
var i__45573__auto___50539 = (0);
while(true){
if((i__45573__auto___50539 < len__45572__auto___50538)){
args__45579__auto__.push((arguments[i__45573__auto___50539]));

var G__50540 = (i__45573__auto___50539 + (1));
i__45573__auto___50539 = G__50540;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48612__auto___50537))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48612__auto___50537){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48612__auto___50537),args);
});})(g__48612__auto___50537))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__48612__auto___50537){
return (function (seq50507){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50507));
});})(g__48612__auto___50537))
;


var g__48612__auto___50541 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__48612__auto___50541){
return (function cljs$spec$impl$gen$vector(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50542 = arguments.length;
var i__45573__auto___50543 = (0);
while(true){
if((i__45573__auto___50543 < len__45572__auto___50542)){
args__45579__auto__.push((arguments[i__45573__auto___50543]));

var G__50544 = (i__45573__auto___50543 + (1));
i__45573__auto___50543 = G__50544;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48612__auto___50541))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48612__auto___50541){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48612__auto___50541),args);
});})(g__48612__auto___50541))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__48612__auto___50541){
return (function (seq50508){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50508));
});})(g__48612__auto___50541))
;


var g__48612__auto___50545 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__48612__auto___50545){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50546 = arguments.length;
var i__45573__auto___50547 = (0);
while(true){
if((i__45573__auto___50547 < len__45572__auto___50546)){
args__45579__auto__.push((arguments[i__45573__auto___50547]));

var G__50548 = (i__45573__auto___50547 + (1));
i__45573__auto___50547 = G__50548;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48612__auto___50545))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48612__auto___50545){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48612__auto___50545),args);
});})(g__48612__auto___50545))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__48612__auto___50545){
return (function (seq50509){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50509));
});})(g__48612__auto___50545))
;


var g__48612__auto___50549 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__48612__auto___50549){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50550 = arguments.length;
var i__45573__auto___50551 = (0);
while(true){
if((i__45573__auto___50551 < len__45572__auto___50550)){
args__45579__auto__.push((arguments[i__45573__auto___50551]));

var G__50552 = (i__45573__auto___50551 + (1));
i__45573__auto___50551 = G__50552;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48612__auto___50549))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48612__auto___50549){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48612__auto___50549),args);
});})(g__48612__auto___50549))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__48612__auto___50549){
return (function (seq50510){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50510));
});})(g__48612__auto___50549))
;


var g__48612__auto___50553 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__48612__auto___50553){
return (function cljs$spec$impl$gen$elements(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50554 = arguments.length;
var i__45573__auto___50555 = (0);
while(true){
if((i__45573__auto___50555 < len__45572__auto___50554)){
args__45579__auto__.push((arguments[i__45573__auto___50555]));

var G__50556 = (i__45573__auto___50555 + (1));
i__45573__auto___50555 = G__50556;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48612__auto___50553))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48612__auto___50553){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48612__auto___50553),args);
});})(g__48612__auto___50553))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__48612__auto___50553){
return (function (seq50511){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50511));
});})(g__48612__auto___50553))
;


var g__48612__auto___50557 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__48612__auto___50557){
return (function cljs$spec$impl$gen$bind(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50558 = arguments.length;
var i__45573__auto___50559 = (0);
while(true){
if((i__45573__auto___50559 < len__45572__auto___50558)){
args__45579__auto__.push((arguments[i__45573__auto___50559]));

var G__50560 = (i__45573__auto___50559 + (1));
i__45573__auto___50559 = G__50560;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48612__auto___50557))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48612__auto___50557){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48612__auto___50557),args);
});})(g__48612__auto___50557))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__48612__auto___50557){
return (function (seq50512){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50512));
});})(g__48612__auto___50557))
;


var g__48612__auto___50561 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__48612__auto___50561){
return (function cljs$spec$impl$gen$choose(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50562 = arguments.length;
var i__45573__auto___50563 = (0);
while(true){
if((i__45573__auto___50563 < len__45572__auto___50562)){
args__45579__auto__.push((arguments[i__45573__auto___50563]));

var G__50564 = (i__45573__auto___50563 + (1));
i__45573__auto___50563 = G__50564;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48612__auto___50561))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48612__auto___50561){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48612__auto___50561),args);
});})(g__48612__auto___50561))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__48612__auto___50561){
return (function (seq50513){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50513));
});})(g__48612__auto___50561))
;


var g__48612__auto___50565 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__48612__auto___50565){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50566 = arguments.length;
var i__45573__auto___50567 = (0);
while(true){
if((i__45573__auto___50567 < len__45572__auto___50566)){
args__45579__auto__.push((arguments[i__45573__auto___50567]));

var G__50568 = (i__45573__auto___50567 + (1));
i__45573__auto___50567 = G__50568;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48612__auto___50565))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48612__auto___50565){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48612__auto___50565),args);
});})(g__48612__auto___50565))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__48612__auto___50565){
return (function (seq50514){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50514));
});})(g__48612__auto___50565))
;


var g__48612__auto___50569 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__48612__auto___50569){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50570 = arguments.length;
var i__45573__auto___50571 = (0);
while(true){
if((i__45573__auto___50571 < len__45572__auto___50570)){
args__45579__auto__.push((arguments[i__45573__auto___50571]));

var G__50572 = (i__45573__auto___50571 + (1));
i__45573__auto___50571 = G__50572;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48612__auto___50569))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48612__auto___50569){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48612__auto___50569),args);
});})(g__48612__auto___50569))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__48612__auto___50569){
return (function (seq50515){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50515));
});})(g__48612__auto___50569))
;


var g__48612__auto___50573 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__48612__auto___50573){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50574 = arguments.length;
var i__45573__auto___50575 = (0);
while(true){
if((i__45573__auto___50575 < len__45572__auto___50574)){
args__45579__auto__.push((arguments[i__45573__auto___50575]));

var G__50576 = (i__45573__auto___50575 + (1));
i__45573__auto___50575 = G__50576;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48612__auto___50573))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48612__auto___50573){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48612__auto___50573),args);
});})(g__48612__auto___50573))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__48612__auto___50573){
return (function (seq50516){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50516));
});})(g__48612__auto___50573))
;


var g__48612__auto___50577 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__48612__auto___50577){
return (function cljs$spec$impl$gen$sample(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50578 = arguments.length;
var i__45573__auto___50579 = (0);
while(true){
if((i__45573__auto___50579 < len__45572__auto___50578)){
args__45579__auto__.push((arguments[i__45573__auto___50579]));

var G__50580 = (i__45573__auto___50579 + (1));
i__45573__auto___50579 = G__50580;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48612__auto___50577))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48612__auto___50577){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48612__auto___50577),args);
});})(g__48612__auto___50577))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__48612__auto___50577){
return (function (seq50517){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50517));
});})(g__48612__auto___50577))
;


var g__48612__auto___50581 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__48612__auto___50581){
return (function cljs$spec$impl$gen$return(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50582 = arguments.length;
var i__45573__auto___50583 = (0);
while(true){
if((i__45573__auto___50583 < len__45572__auto___50582)){
args__45579__auto__.push((arguments[i__45573__auto___50583]));

var G__50584 = (i__45573__auto___50583 + (1));
i__45573__auto___50583 = G__50584;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48612__auto___50581))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48612__auto___50581){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48612__auto___50581),args);
});})(g__48612__auto___50581))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__48612__auto___50581){
return (function (seq50518){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50518));
});})(g__48612__auto___50581))
;


var g__48612__auto___50585 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__48612__auto___50585){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50586 = arguments.length;
var i__45573__auto___50587 = (0);
while(true){
if((i__45573__auto___50587 < len__45572__auto___50586)){
args__45579__auto__.push((arguments[i__45573__auto___50587]));

var G__50588 = (i__45573__auto___50587 + (1));
i__45573__auto___50587 = G__50588;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48612__auto___50585))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48612__auto___50585){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48612__auto___50585),args);
});})(g__48612__auto___50585))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__48612__auto___50585){
return (function (seq50519){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50519));
});})(g__48612__auto___50585))
;


var g__48612__auto___50589 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__48612__auto___50589){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50590 = arguments.length;
var i__45573__auto___50591 = (0);
while(true){
if((i__45573__auto___50591 < len__45572__auto___50590)){
args__45579__auto__.push((arguments[i__45573__auto___50591]));

var G__50592 = (i__45573__auto___50591 + (1));
i__45573__auto___50591 = G__50592;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48612__auto___50589))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48612__auto___50589){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48612__auto___50589),args);
});})(g__48612__auto___50589))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__48612__auto___50589){
return (function (seq50520){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50520));
});})(g__48612__auto___50589))
;

var g__48625__auto___50614 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__48625__auto___50614){
return (function cljs$spec$impl$gen$any(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50615 = arguments.length;
var i__45573__auto___50616 = (0);
while(true){
if((i__45573__auto___50616 < len__45572__auto___50615)){
args__45579__auto__.push((arguments[i__45573__auto___50616]));

var G__50617 = (i__45573__auto___50616 + (1));
i__45573__auto___50616 = G__50617;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48625__auto___50614))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48625__auto___50614){
return (function (args){
return cljs.core.deref.call(null,g__48625__auto___50614);
});})(g__48625__auto___50614))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__48625__auto___50614){
return (function (seq50593){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50593));
});})(g__48625__auto___50614))
;


var g__48625__auto___50618 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__48625__auto___50618){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50619 = arguments.length;
var i__45573__auto___50620 = (0);
while(true){
if((i__45573__auto___50620 < len__45572__auto___50619)){
args__45579__auto__.push((arguments[i__45573__auto___50620]));

var G__50621 = (i__45573__auto___50620 + (1));
i__45573__auto___50620 = G__50621;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48625__auto___50618))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48625__auto___50618){
return (function (args){
return cljs.core.deref.call(null,g__48625__auto___50618);
});})(g__48625__auto___50618))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__48625__auto___50618){
return (function (seq50594){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50594));
});})(g__48625__auto___50618))
;


var g__48625__auto___50622 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__48625__auto___50622){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50623 = arguments.length;
var i__45573__auto___50624 = (0);
while(true){
if((i__45573__auto___50624 < len__45572__auto___50623)){
args__45579__auto__.push((arguments[i__45573__auto___50624]));

var G__50625 = (i__45573__auto___50624 + (1));
i__45573__auto___50624 = G__50625;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48625__auto___50622))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48625__auto___50622){
return (function (args){
return cljs.core.deref.call(null,g__48625__auto___50622);
});})(g__48625__auto___50622))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__48625__auto___50622){
return (function (seq50595){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50595));
});})(g__48625__auto___50622))
;


var g__48625__auto___50626 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__48625__auto___50626){
return (function cljs$spec$impl$gen$char(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50627 = arguments.length;
var i__45573__auto___50628 = (0);
while(true){
if((i__45573__auto___50628 < len__45572__auto___50627)){
args__45579__auto__.push((arguments[i__45573__auto___50628]));

var G__50629 = (i__45573__auto___50628 + (1));
i__45573__auto___50628 = G__50629;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48625__auto___50626))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48625__auto___50626){
return (function (args){
return cljs.core.deref.call(null,g__48625__auto___50626);
});})(g__48625__auto___50626))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__48625__auto___50626){
return (function (seq50596){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50596));
});})(g__48625__auto___50626))
;


var g__48625__auto___50630 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__48625__auto___50630){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50631 = arguments.length;
var i__45573__auto___50632 = (0);
while(true){
if((i__45573__auto___50632 < len__45572__auto___50631)){
args__45579__auto__.push((arguments[i__45573__auto___50632]));

var G__50633 = (i__45573__auto___50632 + (1));
i__45573__auto___50632 = G__50633;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48625__auto___50630))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48625__auto___50630){
return (function (args){
return cljs.core.deref.call(null,g__48625__auto___50630);
});})(g__48625__auto___50630))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__48625__auto___50630){
return (function (seq50597){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50597));
});})(g__48625__auto___50630))
;


var g__48625__auto___50634 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__48625__auto___50634){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50635 = arguments.length;
var i__45573__auto___50636 = (0);
while(true){
if((i__45573__auto___50636 < len__45572__auto___50635)){
args__45579__auto__.push((arguments[i__45573__auto___50636]));

var G__50637 = (i__45573__auto___50636 + (1));
i__45573__auto___50636 = G__50637;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48625__auto___50634))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48625__auto___50634){
return (function (args){
return cljs.core.deref.call(null,g__48625__auto___50634);
});})(g__48625__auto___50634))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__48625__auto___50634){
return (function (seq50598){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50598));
});})(g__48625__auto___50634))
;


var g__48625__auto___50638 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__48625__auto___50638){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50639 = arguments.length;
var i__45573__auto___50640 = (0);
while(true){
if((i__45573__auto___50640 < len__45572__auto___50639)){
args__45579__auto__.push((arguments[i__45573__auto___50640]));

var G__50641 = (i__45573__auto___50640 + (1));
i__45573__auto___50640 = G__50641;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48625__auto___50638))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48625__auto___50638){
return (function (args){
return cljs.core.deref.call(null,g__48625__auto___50638);
});})(g__48625__auto___50638))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__48625__auto___50638){
return (function (seq50599){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50599));
});})(g__48625__auto___50638))
;


var g__48625__auto___50642 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__48625__auto___50642){
return (function cljs$spec$impl$gen$double(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50643 = arguments.length;
var i__45573__auto___50644 = (0);
while(true){
if((i__45573__auto___50644 < len__45572__auto___50643)){
args__45579__auto__.push((arguments[i__45573__auto___50644]));

var G__50645 = (i__45573__auto___50644 + (1));
i__45573__auto___50644 = G__50645;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48625__auto___50642))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48625__auto___50642){
return (function (args){
return cljs.core.deref.call(null,g__48625__auto___50642);
});})(g__48625__auto___50642))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__48625__auto___50642){
return (function (seq50600){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50600));
});})(g__48625__auto___50642))
;


var g__48625__auto___50646 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__48625__auto___50646){
return (function cljs$spec$impl$gen$int(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50647 = arguments.length;
var i__45573__auto___50648 = (0);
while(true){
if((i__45573__auto___50648 < len__45572__auto___50647)){
args__45579__auto__.push((arguments[i__45573__auto___50648]));

var G__50649 = (i__45573__auto___50648 + (1));
i__45573__auto___50648 = G__50649;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48625__auto___50646))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48625__auto___50646){
return (function (args){
return cljs.core.deref.call(null,g__48625__auto___50646);
});})(g__48625__auto___50646))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__48625__auto___50646){
return (function (seq50601){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50601));
});})(g__48625__auto___50646))
;


var g__48625__auto___50650 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__48625__auto___50650){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50651 = arguments.length;
var i__45573__auto___50652 = (0);
while(true){
if((i__45573__auto___50652 < len__45572__auto___50651)){
args__45579__auto__.push((arguments[i__45573__auto___50652]));

var G__50653 = (i__45573__auto___50652 + (1));
i__45573__auto___50652 = G__50653;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48625__auto___50650))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48625__auto___50650){
return (function (args){
return cljs.core.deref.call(null,g__48625__auto___50650);
});})(g__48625__auto___50650))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__48625__auto___50650){
return (function (seq50602){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50602));
});})(g__48625__auto___50650))
;


var g__48625__auto___50654 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__48625__auto___50654){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50655 = arguments.length;
var i__45573__auto___50656 = (0);
while(true){
if((i__45573__auto___50656 < len__45572__auto___50655)){
args__45579__auto__.push((arguments[i__45573__auto___50656]));

var G__50657 = (i__45573__auto___50656 + (1));
i__45573__auto___50656 = G__50657;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48625__auto___50654))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48625__auto___50654){
return (function (args){
return cljs.core.deref.call(null,g__48625__auto___50654);
});})(g__48625__auto___50654))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__48625__auto___50654){
return (function (seq50603){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50603));
});})(g__48625__auto___50654))
;


var g__48625__auto___50658 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__48625__auto___50658){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50659 = arguments.length;
var i__45573__auto___50660 = (0);
while(true){
if((i__45573__auto___50660 < len__45572__auto___50659)){
args__45579__auto__.push((arguments[i__45573__auto___50660]));

var G__50661 = (i__45573__auto___50660 + (1));
i__45573__auto___50660 = G__50661;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48625__auto___50658))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48625__auto___50658){
return (function (args){
return cljs.core.deref.call(null,g__48625__auto___50658);
});})(g__48625__auto___50658))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__48625__auto___50658){
return (function (seq50604){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50604));
});})(g__48625__auto___50658))
;


var g__48625__auto___50662 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__48625__auto___50662){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50663 = arguments.length;
var i__45573__auto___50664 = (0);
while(true){
if((i__45573__auto___50664 < len__45572__auto___50663)){
args__45579__auto__.push((arguments[i__45573__auto___50664]));

var G__50665 = (i__45573__auto___50664 + (1));
i__45573__auto___50664 = G__50665;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48625__auto___50662))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48625__auto___50662){
return (function (args){
return cljs.core.deref.call(null,g__48625__auto___50662);
});})(g__48625__auto___50662))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__48625__auto___50662){
return (function (seq50605){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50605));
});})(g__48625__auto___50662))
;


var g__48625__auto___50666 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__48625__auto___50666){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50667 = arguments.length;
var i__45573__auto___50668 = (0);
while(true){
if((i__45573__auto___50668 < len__45572__auto___50667)){
args__45579__auto__.push((arguments[i__45573__auto___50668]));

var G__50669 = (i__45573__auto___50668 + (1));
i__45573__auto___50668 = G__50669;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48625__auto___50666))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48625__auto___50666){
return (function (args){
return cljs.core.deref.call(null,g__48625__auto___50666);
});})(g__48625__auto___50666))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__48625__auto___50666){
return (function (seq50606){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50606));
});})(g__48625__auto___50666))
;


var g__48625__auto___50670 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__48625__auto___50670){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50671 = arguments.length;
var i__45573__auto___50672 = (0);
while(true){
if((i__45573__auto___50672 < len__45572__auto___50671)){
args__45579__auto__.push((arguments[i__45573__auto___50672]));

var G__50673 = (i__45573__auto___50672 + (1));
i__45573__auto___50672 = G__50673;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48625__auto___50670))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48625__auto___50670){
return (function (args){
return cljs.core.deref.call(null,g__48625__auto___50670);
});})(g__48625__auto___50670))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__48625__auto___50670){
return (function (seq50607){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50607));
});})(g__48625__auto___50670))
;


var g__48625__auto___50674 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__48625__auto___50674){
return (function cljs$spec$impl$gen$string(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50675 = arguments.length;
var i__45573__auto___50676 = (0);
while(true){
if((i__45573__auto___50676 < len__45572__auto___50675)){
args__45579__auto__.push((arguments[i__45573__auto___50676]));

var G__50677 = (i__45573__auto___50676 + (1));
i__45573__auto___50676 = G__50677;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48625__auto___50674))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48625__auto___50674){
return (function (args){
return cljs.core.deref.call(null,g__48625__auto___50674);
});})(g__48625__auto___50674))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__48625__auto___50674){
return (function (seq50608){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50608));
});})(g__48625__auto___50674))
;


var g__48625__auto___50678 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__48625__auto___50678){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50679 = arguments.length;
var i__45573__auto___50680 = (0);
while(true){
if((i__45573__auto___50680 < len__45572__auto___50679)){
args__45579__auto__.push((arguments[i__45573__auto___50680]));

var G__50681 = (i__45573__auto___50680 + (1));
i__45573__auto___50680 = G__50681;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48625__auto___50678))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48625__auto___50678){
return (function (args){
return cljs.core.deref.call(null,g__48625__auto___50678);
});})(g__48625__auto___50678))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__48625__auto___50678){
return (function (seq50609){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50609));
});})(g__48625__auto___50678))
;


var g__48625__auto___50682 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__48625__auto___50682){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50683 = arguments.length;
var i__45573__auto___50684 = (0);
while(true){
if((i__45573__auto___50684 < len__45572__auto___50683)){
args__45579__auto__.push((arguments[i__45573__auto___50684]));

var G__50685 = (i__45573__auto___50684 + (1));
i__45573__auto___50684 = G__50685;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48625__auto___50682))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48625__auto___50682){
return (function (args){
return cljs.core.deref.call(null,g__48625__auto___50682);
});})(g__48625__auto___50682))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__48625__auto___50682){
return (function (seq50610){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50610));
});})(g__48625__auto___50682))
;


var g__48625__auto___50686 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__48625__auto___50686){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50687 = arguments.length;
var i__45573__auto___50688 = (0);
while(true){
if((i__45573__auto___50688 < len__45572__auto___50687)){
args__45579__auto__.push((arguments[i__45573__auto___50688]));

var G__50689 = (i__45573__auto___50688 + (1));
i__45573__auto___50688 = G__50689;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48625__auto___50686))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48625__auto___50686){
return (function (args){
return cljs.core.deref.call(null,g__48625__auto___50686);
});})(g__48625__auto___50686))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__48625__auto___50686){
return (function (seq50611){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50611));
});})(g__48625__auto___50686))
;


var g__48625__auto___50690 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__48625__auto___50690){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50691 = arguments.length;
var i__45573__auto___50692 = (0);
while(true){
if((i__45573__auto___50692 < len__45572__auto___50691)){
args__45579__auto__.push((arguments[i__45573__auto___50692]));

var G__50693 = (i__45573__auto___50692 + (1));
i__45573__auto___50692 = G__50693;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48625__auto___50690))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48625__auto___50690){
return (function (args){
return cljs.core.deref.call(null,g__48625__auto___50690);
});})(g__48625__auto___50690))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__48625__auto___50690){
return (function (seq50612){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50612));
});})(g__48625__auto___50690))
;


var g__48625__auto___50694 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__48625__auto___50694){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50695 = arguments.length;
var i__45573__auto___50696 = (0);
while(true){
if((i__45573__auto___50696 < len__45572__auto___50695)){
args__45579__auto__.push((arguments[i__45573__auto___50696]));

var G__50697 = (i__45573__auto___50696 + (1));
i__45573__auto___50696 = G__50697;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});})(g__48625__auto___50694))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48625__auto___50694){
return (function (args){
return cljs.core.deref.call(null,g__48625__auto___50694);
});})(g__48625__auto___50694))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__48625__auto___50694){
return (function (seq50613){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50613));
});})(g__48625__auto___50694))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__45579__auto__ = [];
var len__45572__auto___50700 = arguments.length;
var i__45573__auto___50701 = (0);
while(true){
if((i__45573__auto___50701 < len__45572__auto___50700)){
args__45579__auto__.push((arguments[i__45573__auto___50701]));

var G__50702 = (i__45573__auto___50701 + (1));
i__45573__auto___50701 = G__50702;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__50698_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__50698_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq50699){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50699));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__50703_SHARP_){
return (new Date(p1__50703_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1484940828050