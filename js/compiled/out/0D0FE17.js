goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('ggj17.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__59343__delegate = function (x){
if(cljs.core.truth_(ggj17.core.mount_root)){
return cljs.core.apply.call(null,ggj17.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'ggj17.core/mount-root' is missing");
}
};
var G__59343 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__59344__i = 0, G__59344__a = new Array(arguments.length -  0);
while (G__59344__i < G__59344__a.length) {G__59344__a[G__59344__i] = arguments[G__59344__i + 0]; ++G__59344__i;}
  x = new cljs.core.IndexedSeq(G__59344__a,0);
} 
return G__59343__delegate.call(this,x);};
G__59343.cljs$lang$maxFixedArity = 0;
G__59343.cljs$lang$applyTo = (function (arglist__59345){
var x = cljs.core.seq(arglist__59345);
return G__59343__delegate(x);
});
G__59343.cljs$core$IFn$_invoke$arity$variadic = G__59343__delegate;
return G__59343;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
