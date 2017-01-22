// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__47866_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__47866_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering"),cljs.core.str(id),cljs.core.str(", given an empty interceptor chain")].join(''));
} else {
}

var temp__4657__auto___47867 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___47867)){
var not_i_47868 = temp__4657__auto___47867;
if(cljs.core.fn_QMARK_.call(null,not_i_47868)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_47868);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: when registering "),cljs.core.str(id),cljs.core.str(", expected interceptors, but got:")].join(''),not_i_47868);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("re-frame: while handling \""),cljs.core.str(re_frame.events._STAR_handling_STAR_),cljs.core.str("\", dispatch-sync was called for \""),cljs.core.str(event_v),cljs.core.str("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_47883 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_47884 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__47841__auto___47897 = re_frame.interop.now.call(null);
var duration__47842__auto___47898 = (end__47841__auto___47897 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__47885_47899 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__47886_47900 = null;
var count__47887_47901 = (0);
var i__47888_47902 = (0);
while(true){
if((i__47888_47902 < count__47887_47901)){
var vec__47889_47903 = cljs.core._nth.call(null,chunk__47886_47900,i__47888_47902);
var k__47843__auto___47904 = cljs.core.nth.call(null,vec__47889_47903,(0),null);
var cb__47844__auto___47905 = cljs.core.nth.call(null,vec__47889_47903,(1),null);
try{cb__47844__auto___47905.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47842__auto___47898,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e47892){if((e47892 instanceof java.lang.Exception)){
var e__47845__auto___47906 = e47892;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__47843__auto___47904,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__47845__auto___47906);
} else {
throw e47892;

}
}
var G__47907 = seq__47885_47899;
var G__47908 = chunk__47886_47900;
var G__47909 = count__47887_47901;
var G__47910 = (i__47888_47902 + (1));
seq__47885_47899 = G__47907;
chunk__47886_47900 = G__47908;
count__47887_47901 = G__47909;
i__47888_47902 = G__47910;
continue;
} else {
var temp__4657__auto___47911 = cljs.core.seq.call(null,seq__47885_47899);
if(temp__4657__auto___47911){
var seq__47885_47912__$1 = temp__4657__auto___47911;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47885_47912__$1)){
var c__45308__auto___47913 = cljs.core.chunk_first.call(null,seq__47885_47912__$1);
var G__47914 = cljs.core.chunk_rest.call(null,seq__47885_47912__$1);
var G__47915 = c__45308__auto___47913;
var G__47916 = cljs.core.count.call(null,c__45308__auto___47913);
var G__47917 = (0);
seq__47885_47899 = G__47914;
chunk__47886_47900 = G__47915;
count__47887_47901 = G__47916;
i__47888_47902 = G__47917;
continue;
} else {
var vec__47893_47918 = cljs.core.first.call(null,seq__47885_47912__$1);
var k__47843__auto___47919 = cljs.core.nth.call(null,vec__47893_47918,(0),null);
var cb__47844__auto___47920 = cljs.core.nth.call(null,vec__47893_47918,(1),null);
try{cb__47844__auto___47920.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__47842__auto___47898,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e47896){if((e47896 instanceof java.lang.Exception)){
var e__47845__auto___47921 = e47896;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__47843__auto___47919,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__47845__auto___47921);
} else {
throw e47896;

}
}
var G__47922 = cljs.core.next.call(null,seq__47885_47912__$1);
var G__47923 = null;
var G__47924 = (0);
var G__47925 = (0);
seq__47885_47899 = G__47922;
chunk__47886_47900 = G__47923;
count__47887_47901 = G__47924;
i__47888_47902 = G__47925;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_47884;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_47883;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1484940689012