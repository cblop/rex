// Compiled by ClojureScript 1.9.229 {}
goog.provide('ggj17.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('ggj17.config');
goog.require('ggj17.views');
goog.require('ggj17.events');
goog.require('ggj17.subs');
goog.require('re_frame.core');
ggj17.core.dev_setup = (function ggj17$core$dev_setup(){
if(cljs.core.truth_(ggj17.config.debug_QMARK_)){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
ggj17.core.mount_root = (function ggj17$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ggj17.views.main_panel], null),document.getElementById("app"));
});
ggj17.core.init = (function ggj17$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-character","set-character",-552195779),"characters/rex.svg"], null));

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foot","foot",-487226607),"objects/foot.svg"], null));

ggj17.core.dev_setup.call(null);

return ggj17.core.mount_root.call(null);
});
goog.exportSymbol('ggj17.core.init', ggj17.core.init);

//# sourceMappingURL=core.js.map?rel=1485119887369