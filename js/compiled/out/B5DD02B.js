goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('ggj17.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__58773__delegate = function (x){
if(cljs.core.truth_(ggj17.core.mount_root)){
return cljs.core.apply.call(null,ggj17.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'ggj17.core/mount-root' is missing");
}
};
var G__58773 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__58774__i = 0, G__58774__a = new Array(arguments.length -  0);
while (G__58774__i < G__58774__a.length) {G__58774__a[G__58774__i] = arguments[G__58774__i + 0]; ++G__58774__i;}
  x = new cljs.core.IndexedSeq(G__58774__a,0);
} 
return G__58773__delegate.call(this,x);};
G__58773.cljs$lang$maxFixedArity = 0;
G__58773.cljs$lang$applyTo = (function (arglist__58775){
var x = cljs.core.seq(arglist__58775);
return G__58773__delegate(x);
});
G__58773.cljs$core$IFn$_invoke$arity$variadic = G__58773__delegate;
return G__58773;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
