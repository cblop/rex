goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('ggj17.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__59778__delegate = function (x){
if(cljs.core.truth_(ggj17.core.mount_root)){
return cljs.core.apply.call(null,ggj17.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'ggj17.core/mount-root' is missing");
}
};
var G__59778 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__59779__i = 0, G__59779__a = new Array(arguments.length -  0);
while (G__59779__i < G__59779__a.length) {G__59779__a[G__59779__i] = arguments[G__59779__i + 0]; ++G__59779__i;}
  x = new cljs.core.IndexedSeq(G__59779__a,0);
} 
return G__59778__delegate.call(this,x);};
G__59778.cljs$lang$maxFixedArity = 0;
G__59778.cljs$lang$applyTo = (function (arglist__59780){
var x = cljs.core.seq(arglist__59780);
return G__59778__delegate(x);
});
G__59778.cljs$core$IFn$_invoke$arity$variadic = G__59778__delegate;
return G__59778;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
