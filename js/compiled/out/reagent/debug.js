// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__45727__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__45727 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45728__i = 0, G__45728__a = new Array(arguments.length -  0);
while (G__45728__i < G__45728__a.length) {G__45728__a[G__45728__i] = arguments[G__45728__i + 0]; ++G__45728__i;}
  args = new cljs.core.IndexedSeq(G__45728__a,0);
} 
return G__45727__delegate.call(this,args);};
G__45727.cljs$lang$maxFixedArity = 0;
G__45727.cljs$lang$applyTo = (function (arglist__45729){
var args = cljs.core.seq(arglist__45729);
return G__45727__delegate(args);
});
G__45727.cljs$core$IFn$_invoke$arity$variadic = G__45727__delegate;
return G__45727;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__45730__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__45730 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45731__i = 0, G__45731__a = new Array(arguments.length -  0);
while (G__45731__i < G__45731__a.length) {G__45731__a[G__45731__i] = arguments[G__45731__i + 0]; ++G__45731__i;}
  args = new cljs.core.IndexedSeq(G__45731__a,0);
} 
return G__45730__delegate.call(this,args);};
G__45730.cljs$lang$maxFixedArity = 0;
G__45730.cljs$lang$applyTo = (function (arglist__45732){
var args = cljs.core.seq(arglist__45732);
return G__45730__delegate(args);
});
G__45730.cljs$core$IFn$_invoke$arity$variadic = G__45730__delegate;
return G__45730;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1484940682844