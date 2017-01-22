goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('ggj17.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__61219__delegate = function (x){
if(cljs.core.truth_(ggj17.core.mount_root)){
return cljs.core.apply.call(null,ggj17.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'ggj17.core/mount-root' is missing");
}
};
var G__61219 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__61220__i = 0, G__61220__a = new Array(arguments.length -  0);
while (G__61220__i < G__61220__a.length) {G__61220__a[G__61220__i] = arguments[G__61220__i + 0]; ++G__61220__i;}
  x = new cljs.core.IndexedSeq(G__61220__a,0);
} 
return G__61219__delegate.call(this,x);};
G__61219.cljs$lang$maxFixedArity = 0;
G__61219.cljs$lang$applyTo = (function (arglist__61221){
var x = cljs.core.seq(arglist__61221);
return G__61219__delegate(x);
});
G__61219.cljs$core$IFn$_invoke$arity$variadic = G__61219__delegate;
return G__61219;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
