goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('ggj17.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__55393__delegate = function (x){
if(cljs.core.truth_(ggj17.core.mount_root)){
return cljs.core.apply.call(null,ggj17.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'ggj17.core/mount-root' is missing");
}
};
var G__55393 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__55394__i = 0, G__55394__a = new Array(arguments.length -  0);
while (G__55394__i < G__55394__a.length) {G__55394__a[G__55394__i] = arguments[G__55394__i + 0]; ++G__55394__i;}
  x = new cljs.core.IndexedSeq(G__55394__a,0);
} 
return G__55393__delegate.call(this,x);};
G__55393.cljs$lang$maxFixedArity = 0;
G__55393.cljs$lang$applyTo = (function (arglist__55395){
var x = cljs.core.seq(arglist__55395);
return G__55393__delegate(x);
});
G__55393.cljs$core$IFn$_invoke$arity$variadic = G__55393__delegate;
return G__55393;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
