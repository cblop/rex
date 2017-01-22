goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('ggj17.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__57917__delegate = function (x){
if(cljs.core.truth_(ggj17.core.mount_root)){
return cljs.core.apply.call(null,ggj17.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'ggj17.core/mount-root' is missing");
}
};
var G__57917 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__57918__i = 0, G__57918__a = new Array(arguments.length -  0);
while (G__57918__i < G__57918__a.length) {G__57918__a[G__57918__i] = arguments[G__57918__i + 0]; ++G__57918__i;}
  x = new cljs.core.IndexedSeq(G__57918__a,0);
} 
return G__57917__delegate.call(this,x);};
G__57917.cljs$lang$maxFixedArity = 0;
G__57917.cljs$lang$applyTo = (function (arglist__57919){
var x = cljs.core.seq(arglist__57919);
return G__57917__delegate(x);
});
G__57917.cljs$core$IFn$_invoke$arity$variadic = G__57917__delegate;
return G__57917;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
