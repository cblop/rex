// Compiled by ClojureScript 1.9.229 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__48010 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__48011 = null;
var count__48012 = (0);
var i__48013 = (0);
while(true){
if((i__48013 < count__48012)){
var vec__48014 = cljs.core._nth.call(null,chunk__48011,i__48013);
var effect_k = cljs.core.nth.call(null,vec__48014,(0),null);
var value = cljs.core.nth.call(null,vec__48014,(1),null);
var temp__4655__auto___48020 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___48020)){
var effect_fn_48021 = temp__4655__auto___48020;
effect_fn_48021.call(null,value);
} else {
}

var G__48022 = seq__48010;
var G__48023 = chunk__48011;
var G__48024 = count__48012;
var G__48025 = (i__48013 + (1));
seq__48010 = G__48022;
chunk__48011 = G__48023;
count__48012 = G__48024;
i__48013 = G__48025;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48010);
if(temp__4657__auto__){
var seq__48010__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48010__$1)){
var c__45308__auto__ = cljs.core.chunk_first.call(null,seq__48010__$1);
var G__48026 = cljs.core.chunk_rest.call(null,seq__48010__$1);
var G__48027 = c__45308__auto__;
var G__48028 = cljs.core.count.call(null,c__45308__auto__);
var G__48029 = (0);
seq__48010 = G__48026;
chunk__48011 = G__48027;
count__48012 = G__48028;
i__48013 = G__48029;
continue;
} else {
var vec__48017 = cljs.core.first.call(null,seq__48010__$1);
var effect_k = cljs.core.nth.call(null,vec__48017,(0),null);
var value = cljs.core.nth.call(null,vec__48017,(1),null);
var temp__4655__auto___48030 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__4655__auto___48030)){
var effect_fn_48031 = temp__4655__auto___48030;
effect_fn_48031.call(null,value);
} else {
}

var G__48032 = cljs.core.next.call(null,seq__48010__$1);
var G__48033 = null;
var G__48034 = (0);
var G__48035 = (0);
seq__48010 = G__48032;
chunk__48011 = G__48033;
count__48012 = G__48034;
i__48013 = G__48035;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__48036 = cljs.core.seq.call(null,value);
var chunk__48037 = null;
var count__48038 = (0);
var i__48039 = (0);
while(true){
if((i__48039 < count__48038)){
var map__48040 = cljs.core._nth.call(null,chunk__48037,i__48039);
var map__48040__$1 = ((((!((map__48040 == null)))?((((map__48040.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48040.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48040):map__48040);
var effect = map__48040__$1;
var ms = cljs.core.get.call(null,map__48040__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__48040__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__48036,chunk__48037,count__48038,i__48039,map__48040,map__48040__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__48036,chunk__48037,count__48038,i__48039,map__48040,map__48040__$1,effect,ms,dispatch))
,ms);
}

var G__48044 = seq__48036;
var G__48045 = chunk__48037;
var G__48046 = count__48038;
var G__48047 = (i__48039 + (1));
seq__48036 = G__48044;
chunk__48037 = G__48045;
count__48038 = G__48046;
i__48039 = G__48047;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48036);
if(temp__4657__auto__){
var seq__48036__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48036__$1)){
var c__45308__auto__ = cljs.core.chunk_first.call(null,seq__48036__$1);
var G__48048 = cljs.core.chunk_rest.call(null,seq__48036__$1);
var G__48049 = c__45308__auto__;
var G__48050 = cljs.core.count.call(null,c__45308__auto__);
var G__48051 = (0);
seq__48036 = G__48048;
chunk__48037 = G__48049;
count__48038 = G__48050;
i__48039 = G__48051;
continue;
} else {
var map__48042 = cljs.core.first.call(null,seq__48036__$1);
var map__48042__$1 = ((((!((map__48042 == null)))?((((map__48042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48042):map__48042);
var effect = map__48042__$1;
var ms = cljs.core.get.call(null,map__48042__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__48042__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__48036,chunk__48037,count__48038,i__48039,map__48042,map__48042__$1,effect,ms,dispatch,seq__48036__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__48036,chunk__48037,count__48038,i__48039,map__48042,map__48042__$1,effect,ms,dispatch,seq__48036__$1,temp__4657__auto__))
,ms);
}

var G__48052 = cljs.core.next.call(null,seq__48036__$1);
var G__48053 = null;
var G__48054 = (0);
var G__48055 = (0);
seq__48036 = G__48052;
chunk__48037 = G__48053;
count__48038 = G__48054;
i__48039 = G__48055;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__48056 = cljs.core.seq.call(null,value);
var chunk__48057 = null;
var count__48058 = (0);
var i__48059 = (0);
while(true){
if((i__48059 < count__48058)){
var event = cljs.core._nth.call(null,chunk__48057,i__48059);
re_frame.router.dispatch.call(null,event);

var G__48060 = seq__48056;
var G__48061 = chunk__48057;
var G__48062 = count__48058;
var G__48063 = (i__48059 + (1));
seq__48056 = G__48060;
chunk__48057 = G__48061;
count__48058 = G__48062;
i__48059 = G__48063;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48056);
if(temp__4657__auto__){
var seq__48056__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48056__$1)){
var c__45308__auto__ = cljs.core.chunk_first.call(null,seq__48056__$1);
var G__48064 = cljs.core.chunk_rest.call(null,seq__48056__$1);
var G__48065 = c__45308__auto__;
var G__48066 = cljs.core.count.call(null,c__45308__auto__);
var G__48067 = (0);
seq__48056 = G__48064;
chunk__48057 = G__48065;
count__48058 = G__48066;
i__48059 = G__48067;
continue;
} else {
var event = cljs.core.first.call(null,seq__48056__$1);
re_frame.router.dispatch.call(null,event);

var G__48068 = cljs.core.next.call(null,seq__48056__$1);
var G__48069 = null;
var G__48070 = (0);
var G__48071 = (0);
seq__48056 = G__48068;
chunk__48057 = G__48069;
count__48058 = G__48070;
i__48059 = G__48071;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__48072 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__48073 = null;
var count__48074 = (0);
var i__48075 = (0);
while(true){
if((i__48075 < count__48074)){
var event = cljs.core._nth.call(null,chunk__48073,i__48075);
clear_event.call(null,event);

var G__48076 = seq__48072;
var G__48077 = chunk__48073;
var G__48078 = count__48074;
var G__48079 = (i__48075 + (1));
seq__48072 = G__48076;
chunk__48073 = G__48077;
count__48074 = G__48078;
i__48075 = G__48079;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__48072);
if(temp__4657__auto__){
var seq__48072__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__48072__$1)){
var c__45308__auto__ = cljs.core.chunk_first.call(null,seq__48072__$1);
var G__48080 = cljs.core.chunk_rest.call(null,seq__48072__$1);
var G__48081 = c__45308__auto__;
var G__48082 = cljs.core.count.call(null,c__45308__auto__);
var G__48083 = (0);
seq__48072 = G__48080;
chunk__48073 = G__48081;
count__48074 = G__48082;
i__48075 = G__48083;
continue;
} else {
var event = cljs.core.first.call(null,seq__48072__$1);
clear_event.call(null,event);

var G__48084 = cljs.core.next.call(null,seq__48072__$1);
var G__48085 = null;
var G__48086 = (0);
var G__48087 = (0);
seq__48072 = G__48084;
chunk__48073 = G__48085;
count__48074 = G__48086;
i__48075 = G__48087;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1484940689288