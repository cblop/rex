goog.provide('figwheel.connect.dev');
goog.require('cljs.core');
goog.require('ggj17.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__59493__delegate = function (x){
if(cljs.core.truth_(ggj17.core.mount_root)){
return cljs.core.apply.call(null,ggj17.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'ggj17.core/mount-root' is missing");
}
};
var G__59493 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__59494__i = 0, G__59494__a = new Array(arguments.length -  0);
while (G__59494__i < G__59494__a.length) {G__59494__a[G__59494__i] = arguments[G__59494__i + 0]; ++G__59494__i;}
  x = new cljs.core.IndexedSeq(G__59494__a,0);
} 
return G__59493__delegate.call(this,x);};
G__59493.cljs$lang$maxFixedArity = 0;
G__59493.cljs$lang$applyTo = (function (arglist__59495){
var x = cljs.core.seq(arglist__59495);
return G__59493__delegate(x);
});
G__59493.cljs$core$IFn$_invoke$arity$variadic = G__59493__delegate;
return G__59493;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));
