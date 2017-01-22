// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args48738 = [];
var len__45609__auto___48744 = arguments.length;
var i__45610__auto___48745 = (0);
while(true){
if((i__45610__auto___48745 < len__45609__auto___48744)){
args48738.push((arguments[i__45610__auto___48745]));

var G__48746 = (i__45610__auto___48745 + (1));
i__45610__auto___48745 = G__48746;
continue;
} else {
}
break;
}

var G__48740 = args48738.length;
switch (G__48740) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48738.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async48741 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48741 = (function (f,blockable,meta48742){
this.f = f;
this.blockable = blockable;
this.meta48742 = meta48742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48743,meta48742__$1){
var self__ = this;
var _48743__$1 = this;
return (new cljs.core.async.t_cljs$core$async48741(self__.f,self__.blockable,meta48742__$1));
});

cljs.core.async.t_cljs$core$async48741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48743){
var self__ = this;
var _48743__$1 = this;
return self__.meta48742;
});

cljs.core.async.t_cljs$core$async48741.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async48741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async48741.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async48741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async48741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta48742","meta48742",103171795,null)], null);
});

cljs.core.async.t_cljs$core$async48741.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48741";

cljs.core.async.t_cljs$core$async48741.cljs$lang$ctorPrWriter = (function (this__45140__auto__,writer__45141__auto__,opt__45142__auto__){
return cljs.core._write.call(null,writer__45141__auto__,"cljs.core.async/t_cljs$core$async48741");
});

cljs.core.async.__GT_t_cljs$core$async48741 = (function cljs$core$async$__GT_t_cljs$core$async48741(f__$1,blockable__$1,meta48742){
return (new cljs.core.async.t_cljs$core$async48741(f__$1,blockable__$1,meta48742));
});

}

return (new cljs.core.async.t_cljs$core$async48741(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args48750 = [];
var len__45609__auto___48753 = arguments.length;
var i__45610__auto___48754 = (0);
while(true){
if((i__45610__auto___48754 < len__45609__auto___48753)){
args48750.push((arguments[i__45610__auto___48754]));

var G__48755 = (i__45610__auto___48754 + (1));
i__45610__auto___48754 = G__48755;
continue;
} else {
}
break;
}

var G__48752 = args48750.length;
switch (G__48752) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48750.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args48757 = [];
var len__45609__auto___48760 = arguments.length;
var i__45610__auto___48761 = (0);
while(true){
if((i__45610__auto___48761 < len__45609__auto___48760)){
args48757.push((arguments[i__45610__auto___48761]));

var G__48762 = (i__45610__auto___48761 + (1));
i__45610__auto___48761 = G__48762;
continue;
} else {
}
break;
}

var G__48759 = args48757.length;
switch (G__48759) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48757.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args48764 = [];
var len__45609__auto___48767 = arguments.length;
var i__45610__auto___48768 = (0);
while(true){
if((i__45610__auto___48768 < len__45609__auto___48767)){
args48764.push((arguments[i__45610__auto___48768]));

var G__48769 = (i__45610__auto___48768 + (1));
i__45610__auto___48768 = G__48769;
continue;
} else {
}
break;
}

var G__48766 = args48764.length;
switch (G__48766) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48764.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_48771 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_48771);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_48771,ret){
return (function (){
return fn1.call(null,val_48771);
});})(val_48771,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args48772 = [];
var len__45609__auto___48775 = arguments.length;
var i__45610__auto___48776 = (0);
while(true){
if((i__45610__auto___48776 < len__45609__auto___48775)){
args48772.push((arguments[i__45610__auto___48776]));

var G__48777 = (i__45610__auto___48776 + (1));
i__45610__auto___48776 = G__48777;
continue;
} else {
}
break;
}

var G__48774 = args48772.length;
switch (G__48774) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48772.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__45449__auto___48779 = n;
var x_48780 = (0);
while(true){
if((x_48780 < n__45449__auto___48779)){
(a[x_48780] = (0));

var G__48781 = (x_48780 + (1));
x_48780 = G__48781;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__48782 = (i + (1));
i = G__48782;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async48786 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48786 = (function (alt_flag,flag,meta48787){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta48787 = meta48787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_48788,meta48787__$1){
var self__ = this;
var _48788__$1 = this;
return (new cljs.core.async.t_cljs$core$async48786(self__.alt_flag,self__.flag,meta48787__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async48786.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_48788){
var self__ = this;
var _48788__$1 = this;
return self__.meta48787;
});})(flag))
;

cljs.core.async.t_cljs$core$async48786.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async48786.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async48786.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async48786.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async48786.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta48787","meta48787",2072871576,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async48786.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48786.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48786";

cljs.core.async.t_cljs$core$async48786.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__45140__auto__,writer__45141__auto__,opt__45142__auto__){
return cljs.core._write.call(null,writer__45141__auto__,"cljs.core.async/t_cljs$core$async48786");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async48786 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async48786(alt_flag__$1,flag__$1,meta48787){
return (new cljs.core.async.t_cljs$core$async48786(alt_flag__$1,flag__$1,meta48787));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async48786(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async48792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48792 = (function (alt_handler,flag,cb,meta48793){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta48793 = meta48793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async48792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48794,meta48793__$1){
var self__ = this;
var _48794__$1 = this;
return (new cljs.core.async.t_cljs$core$async48792(self__.alt_handler,self__.flag,self__.cb,meta48793__$1));
});

cljs.core.async.t_cljs$core$async48792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48794){
var self__ = this;
var _48794__$1 = this;
return self__.meta48793;
});

cljs.core.async.t_cljs$core$async48792.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async48792.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async48792.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async48792.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async48792.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta48793","meta48793",-496324926,null)], null);
});

cljs.core.async.t_cljs$core$async48792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48792";

cljs.core.async.t_cljs$core$async48792.cljs$lang$ctorPrWriter = (function (this__45140__auto__,writer__45141__auto__,opt__45142__auto__){
return cljs.core._write.call(null,writer__45141__auto__,"cljs.core.async/t_cljs$core$async48792");
});

cljs.core.async.__GT_t_cljs$core$async48792 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async48792(alt_handler__$1,flag__$1,cb__$1,meta48793){
return (new cljs.core.async.t_cljs$core$async48792(alt_handler__$1,flag__$1,cb__$1,meta48793));
});

}

return (new cljs.core.async.t_cljs$core$async48792(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48795_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48795_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48796_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48796_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__44534__auto__ = wport;
if(cljs.core.truth_(or__44534__auto__)){
return or__44534__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48797 = (i + (1));
i = G__48797;
continue;
}
} else {
return null;
}
break;
}
})();
var or__44534__auto__ = ret;
if(cljs.core.truth_(or__44534__auto__)){
return or__44534__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__44522__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__44522__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__44522__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__45616__auto__ = [];
var len__45609__auto___48803 = arguments.length;
var i__45610__auto___48804 = (0);
while(true){
if((i__45610__auto___48804 < len__45609__auto___48803)){
args__45616__auto__.push((arguments[i__45610__auto___48804]));

var G__48805 = (i__45610__auto___48804 + (1));
i__45610__auto___48804 = G__48805;
continue;
} else {
}
break;
}

var argseq__45617__auto__ = ((((1) < args__45616__auto__.length))?(new cljs.core.IndexedSeq(args__45616__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45617__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__48800){
var map__48801 = p__48800;
var map__48801__$1 = ((((!((map__48801 == null)))?((((map__48801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48801):map__48801);
var opts = map__48801__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq48798){
var G__48799 = cljs.core.first.call(null,seq48798);
var seq48798__$1 = cljs.core.next.call(null,seq48798);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48799,seq48798__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args48806 = [];
var len__45609__auto___48856 = arguments.length;
var i__45610__auto___48857 = (0);
while(true){
if((i__45610__auto___48857 < len__45609__auto___48856)){
args48806.push((arguments[i__45610__auto___48857]));

var G__48858 = (i__45610__auto___48857 + (1));
i__45610__auto___48857 = G__48858;
continue;
} else {
}
break;
}

var G__48808 = args48806.length;
switch (G__48808) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48806.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__48693__auto___48860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto___48860){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto___48860){
return (function (state_48832){
var state_val_48833 = (state_48832[(1)]);
if((state_val_48833 === (7))){
var inst_48828 = (state_48832[(2)]);
var state_48832__$1 = state_48832;
var statearr_48834_48861 = state_48832__$1;
(statearr_48834_48861[(2)] = inst_48828);

(statearr_48834_48861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48833 === (1))){
var state_48832__$1 = state_48832;
var statearr_48835_48862 = state_48832__$1;
(statearr_48835_48862[(2)] = null);

(statearr_48835_48862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48833 === (4))){
var inst_48811 = (state_48832[(7)]);
var inst_48811__$1 = (state_48832[(2)]);
var inst_48812 = (inst_48811__$1 == null);
var state_48832__$1 = (function (){var statearr_48836 = state_48832;
(statearr_48836[(7)] = inst_48811__$1);

return statearr_48836;
})();
if(cljs.core.truth_(inst_48812)){
var statearr_48837_48863 = state_48832__$1;
(statearr_48837_48863[(1)] = (5));

} else {
var statearr_48838_48864 = state_48832__$1;
(statearr_48838_48864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48833 === (13))){
var state_48832__$1 = state_48832;
var statearr_48839_48865 = state_48832__$1;
(statearr_48839_48865[(2)] = null);

(statearr_48839_48865[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48833 === (6))){
var inst_48811 = (state_48832[(7)]);
var state_48832__$1 = state_48832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48832__$1,(11),to,inst_48811);
} else {
if((state_val_48833 === (3))){
var inst_48830 = (state_48832[(2)]);
var state_48832__$1 = state_48832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48832__$1,inst_48830);
} else {
if((state_val_48833 === (12))){
var state_48832__$1 = state_48832;
var statearr_48840_48866 = state_48832__$1;
(statearr_48840_48866[(2)] = null);

(statearr_48840_48866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48833 === (2))){
var state_48832__$1 = state_48832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48832__$1,(4),from);
} else {
if((state_val_48833 === (11))){
var inst_48821 = (state_48832[(2)]);
var state_48832__$1 = state_48832;
if(cljs.core.truth_(inst_48821)){
var statearr_48841_48867 = state_48832__$1;
(statearr_48841_48867[(1)] = (12));

} else {
var statearr_48842_48868 = state_48832__$1;
(statearr_48842_48868[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48833 === (9))){
var state_48832__$1 = state_48832;
var statearr_48843_48869 = state_48832__$1;
(statearr_48843_48869[(2)] = null);

(statearr_48843_48869[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48833 === (5))){
var state_48832__$1 = state_48832;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48844_48870 = state_48832__$1;
(statearr_48844_48870[(1)] = (8));

} else {
var statearr_48845_48871 = state_48832__$1;
(statearr_48845_48871[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48833 === (14))){
var inst_48826 = (state_48832[(2)]);
var state_48832__$1 = state_48832;
var statearr_48846_48872 = state_48832__$1;
(statearr_48846_48872[(2)] = inst_48826);

(statearr_48846_48872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48833 === (10))){
var inst_48818 = (state_48832[(2)]);
var state_48832__$1 = state_48832;
var statearr_48847_48873 = state_48832__$1;
(statearr_48847_48873[(2)] = inst_48818);

(statearr_48847_48873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48833 === (8))){
var inst_48815 = cljs.core.async.close_BANG_.call(null,to);
var state_48832__$1 = state_48832;
var statearr_48848_48874 = state_48832__$1;
(statearr_48848_48874[(2)] = inst_48815);

(statearr_48848_48874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48693__auto___48860))
;
return ((function (switch__48581__auto__,c__48693__auto___48860){
return (function() {
var cljs$core$async$state_machine__48582__auto__ = null;
var cljs$core$async$state_machine__48582__auto____0 = (function (){
var statearr_48852 = [null,null,null,null,null,null,null,null];
(statearr_48852[(0)] = cljs$core$async$state_machine__48582__auto__);

(statearr_48852[(1)] = (1));

return statearr_48852;
});
var cljs$core$async$state_machine__48582__auto____1 = (function (state_48832){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_48832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e48853){if((e48853 instanceof Object)){
var ex__48585__auto__ = e48853;
var statearr_48854_48875 = state_48832;
(statearr_48854_48875[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48876 = state_48832;
state_48832 = G__48876;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
cljs$core$async$state_machine__48582__auto__ = function(state_48832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48582__auto____1.call(this,state_48832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48582__auto____0;
cljs$core$async$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48582__auto____1;
return cljs$core$async$state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto___48860))
})();
var state__48695__auto__ = (function (){var statearr_48855 = f__48694__auto__.call(null);
(statearr_48855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto___48860);

return statearr_48855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto___48860))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__49064){
var vec__49065 = p__49064;
var v = cljs.core.nth.call(null,vec__49065,(0),null);
var p = cljs.core.nth.call(null,vec__49065,(1),null);
var job = vec__49065;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__48693__auto___49251 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto___49251,res,vec__49065,v,p,job,jobs,results){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto___49251,res,vec__49065,v,p,job,jobs,results){
return (function (state_49072){
var state_val_49073 = (state_49072[(1)]);
if((state_val_49073 === (1))){
var state_49072__$1 = state_49072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49072__$1,(2),res,v);
} else {
if((state_val_49073 === (2))){
var inst_49069 = (state_49072[(2)]);
var inst_49070 = cljs.core.async.close_BANG_.call(null,res);
var state_49072__$1 = (function (){var statearr_49074 = state_49072;
(statearr_49074[(7)] = inst_49069);

return statearr_49074;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49072__$1,inst_49070);
} else {
return null;
}
}
});})(c__48693__auto___49251,res,vec__49065,v,p,job,jobs,results))
;
return ((function (switch__48581__auto__,c__48693__auto___49251,res,vec__49065,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____0 = (function (){
var statearr_49078 = [null,null,null,null,null,null,null,null];
(statearr_49078[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__);

(statearr_49078[(1)] = (1));

return statearr_49078;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____1 = (function (state_49072){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_49072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e49079){if((e49079 instanceof Object)){
var ex__48585__auto__ = e49079;
var statearr_49080_49252 = state_49072;
(statearr_49080_49252[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49253 = state_49072;
state_49072 = G__49253;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__ = function(state_49072){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____1.call(this,state_49072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto___49251,res,vec__49065,v,p,job,jobs,results))
})();
var state__48695__auto__ = (function (){var statearr_49081 = f__48694__auto__.call(null);
(statearr_49081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto___49251);

return statearr_49081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto___49251,res,vec__49065,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__49082){
var vec__49083 = p__49082;
var v = cljs.core.nth.call(null,vec__49083,(0),null);
var p = cljs.core.nth.call(null,vec__49083,(1),null);
var job = vec__49083;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__45449__auto___49254 = n;
var __49255 = (0);
while(true){
if((__49255 < n__45449__auto___49254)){
var G__49086_49256 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__49086_49256) {
case "compute":
var c__48693__auto___49258 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__49255,c__48693__auto___49258,G__49086_49256,n__45449__auto___49254,jobs,results,process,async){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (__49255,c__48693__auto___49258,G__49086_49256,n__45449__auto___49254,jobs,results,process,async){
return (function (state_49099){
var state_val_49100 = (state_49099[(1)]);
if((state_val_49100 === (1))){
var state_49099__$1 = state_49099;
var statearr_49101_49259 = state_49099__$1;
(statearr_49101_49259[(2)] = null);

(statearr_49101_49259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49100 === (2))){
var state_49099__$1 = state_49099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49099__$1,(4),jobs);
} else {
if((state_val_49100 === (3))){
var inst_49097 = (state_49099[(2)]);
var state_49099__$1 = state_49099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49099__$1,inst_49097);
} else {
if((state_val_49100 === (4))){
var inst_49089 = (state_49099[(2)]);
var inst_49090 = process.call(null,inst_49089);
var state_49099__$1 = state_49099;
if(cljs.core.truth_(inst_49090)){
var statearr_49102_49260 = state_49099__$1;
(statearr_49102_49260[(1)] = (5));

} else {
var statearr_49103_49261 = state_49099__$1;
(statearr_49103_49261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49100 === (5))){
var state_49099__$1 = state_49099;
var statearr_49104_49262 = state_49099__$1;
(statearr_49104_49262[(2)] = null);

(statearr_49104_49262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49100 === (6))){
var state_49099__$1 = state_49099;
var statearr_49105_49263 = state_49099__$1;
(statearr_49105_49263[(2)] = null);

(statearr_49105_49263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49100 === (7))){
var inst_49095 = (state_49099[(2)]);
var state_49099__$1 = state_49099;
var statearr_49106_49264 = state_49099__$1;
(statearr_49106_49264[(2)] = inst_49095);

(statearr_49106_49264[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__49255,c__48693__auto___49258,G__49086_49256,n__45449__auto___49254,jobs,results,process,async))
;
return ((function (__49255,switch__48581__auto__,c__48693__auto___49258,G__49086_49256,n__45449__auto___49254,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____0 = (function (){
var statearr_49110 = [null,null,null,null,null,null,null];
(statearr_49110[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__);

(statearr_49110[(1)] = (1));

return statearr_49110;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____1 = (function (state_49099){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_49099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e49111){if((e49111 instanceof Object)){
var ex__48585__auto__ = e49111;
var statearr_49112_49265 = state_49099;
(statearr_49112_49265[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49266 = state_49099;
state_49099 = G__49266;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__ = function(state_49099){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____1.call(this,state_49099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__;
})()
;})(__49255,switch__48581__auto__,c__48693__auto___49258,G__49086_49256,n__45449__auto___49254,jobs,results,process,async))
})();
var state__48695__auto__ = (function (){var statearr_49113 = f__48694__auto__.call(null);
(statearr_49113[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto___49258);

return statearr_49113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(__49255,c__48693__auto___49258,G__49086_49256,n__45449__auto___49254,jobs,results,process,async))
);


break;
case "async":
var c__48693__auto___49267 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__49255,c__48693__auto___49267,G__49086_49256,n__45449__auto___49254,jobs,results,process,async){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (__49255,c__48693__auto___49267,G__49086_49256,n__45449__auto___49254,jobs,results,process,async){
return (function (state_49126){
var state_val_49127 = (state_49126[(1)]);
if((state_val_49127 === (1))){
var state_49126__$1 = state_49126;
var statearr_49128_49268 = state_49126__$1;
(statearr_49128_49268[(2)] = null);

(statearr_49128_49268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49127 === (2))){
var state_49126__$1 = state_49126;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49126__$1,(4),jobs);
} else {
if((state_val_49127 === (3))){
var inst_49124 = (state_49126[(2)]);
var state_49126__$1 = state_49126;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49126__$1,inst_49124);
} else {
if((state_val_49127 === (4))){
var inst_49116 = (state_49126[(2)]);
var inst_49117 = async.call(null,inst_49116);
var state_49126__$1 = state_49126;
if(cljs.core.truth_(inst_49117)){
var statearr_49129_49269 = state_49126__$1;
(statearr_49129_49269[(1)] = (5));

} else {
var statearr_49130_49270 = state_49126__$1;
(statearr_49130_49270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49127 === (5))){
var state_49126__$1 = state_49126;
var statearr_49131_49271 = state_49126__$1;
(statearr_49131_49271[(2)] = null);

(statearr_49131_49271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49127 === (6))){
var state_49126__$1 = state_49126;
var statearr_49132_49272 = state_49126__$1;
(statearr_49132_49272[(2)] = null);

(statearr_49132_49272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49127 === (7))){
var inst_49122 = (state_49126[(2)]);
var state_49126__$1 = state_49126;
var statearr_49133_49273 = state_49126__$1;
(statearr_49133_49273[(2)] = inst_49122);

(statearr_49133_49273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__49255,c__48693__auto___49267,G__49086_49256,n__45449__auto___49254,jobs,results,process,async))
;
return ((function (__49255,switch__48581__auto__,c__48693__auto___49267,G__49086_49256,n__45449__auto___49254,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____0 = (function (){
var statearr_49137 = [null,null,null,null,null,null,null];
(statearr_49137[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__);

(statearr_49137[(1)] = (1));

return statearr_49137;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____1 = (function (state_49126){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_49126);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e49138){if((e49138 instanceof Object)){
var ex__48585__auto__ = e49138;
var statearr_49139_49274 = state_49126;
(statearr_49139_49274[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49126);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49275 = state_49126;
state_49126 = G__49275;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__ = function(state_49126){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____1.call(this,state_49126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__;
})()
;})(__49255,switch__48581__auto__,c__48693__auto___49267,G__49086_49256,n__45449__auto___49254,jobs,results,process,async))
})();
var state__48695__auto__ = (function (){var statearr_49140 = f__48694__auto__.call(null);
(statearr_49140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto___49267);

return statearr_49140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(__49255,c__48693__auto___49267,G__49086_49256,n__45449__auto___49254,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__49276 = (__49255 + (1));
__49255 = G__49276;
continue;
} else {
}
break;
}

var c__48693__auto___49277 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto___49277,jobs,results,process,async){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto___49277,jobs,results,process,async){
return (function (state_49162){
var state_val_49163 = (state_49162[(1)]);
if((state_val_49163 === (1))){
var state_49162__$1 = state_49162;
var statearr_49164_49278 = state_49162__$1;
(statearr_49164_49278[(2)] = null);

(statearr_49164_49278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (2))){
var state_49162__$1 = state_49162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49162__$1,(4),from);
} else {
if((state_val_49163 === (3))){
var inst_49160 = (state_49162[(2)]);
var state_49162__$1 = state_49162;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49162__$1,inst_49160);
} else {
if((state_val_49163 === (4))){
var inst_49143 = (state_49162[(7)]);
var inst_49143__$1 = (state_49162[(2)]);
var inst_49144 = (inst_49143__$1 == null);
var state_49162__$1 = (function (){var statearr_49165 = state_49162;
(statearr_49165[(7)] = inst_49143__$1);

return statearr_49165;
})();
if(cljs.core.truth_(inst_49144)){
var statearr_49166_49279 = state_49162__$1;
(statearr_49166_49279[(1)] = (5));

} else {
var statearr_49167_49280 = state_49162__$1;
(statearr_49167_49280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (5))){
var inst_49146 = cljs.core.async.close_BANG_.call(null,jobs);
var state_49162__$1 = state_49162;
var statearr_49168_49281 = state_49162__$1;
(statearr_49168_49281[(2)] = inst_49146);

(statearr_49168_49281[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (6))){
var inst_49143 = (state_49162[(7)]);
var inst_49148 = (state_49162[(8)]);
var inst_49148__$1 = cljs.core.async.chan.call(null,(1));
var inst_49149 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_49150 = [inst_49143,inst_49148__$1];
var inst_49151 = (new cljs.core.PersistentVector(null,2,(5),inst_49149,inst_49150,null));
var state_49162__$1 = (function (){var statearr_49169 = state_49162;
(statearr_49169[(8)] = inst_49148__$1);

return statearr_49169;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49162__$1,(8),jobs,inst_49151);
} else {
if((state_val_49163 === (7))){
var inst_49158 = (state_49162[(2)]);
var state_49162__$1 = state_49162;
var statearr_49170_49282 = state_49162__$1;
(statearr_49170_49282[(2)] = inst_49158);

(statearr_49170_49282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49163 === (8))){
var inst_49148 = (state_49162[(8)]);
var inst_49153 = (state_49162[(2)]);
var state_49162__$1 = (function (){var statearr_49171 = state_49162;
(statearr_49171[(9)] = inst_49153);

return statearr_49171;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49162__$1,(9),results,inst_49148);
} else {
if((state_val_49163 === (9))){
var inst_49155 = (state_49162[(2)]);
var state_49162__$1 = (function (){var statearr_49172 = state_49162;
(statearr_49172[(10)] = inst_49155);

return statearr_49172;
})();
var statearr_49173_49283 = state_49162__$1;
(statearr_49173_49283[(2)] = null);

(statearr_49173_49283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__48693__auto___49277,jobs,results,process,async))
;
return ((function (switch__48581__auto__,c__48693__auto___49277,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____0 = (function (){
var statearr_49177 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49177[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__);

(statearr_49177[(1)] = (1));

return statearr_49177;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____1 = (function (state_49162){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_49162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e49178){if((e49178 instanceof Object)){
var ex__48585__auto__ = e49178;
var statearr_49179_49284 = state_49162;
(statearr_49179_49284[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49285 = state_49162;
state_49162 = G__49285;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__ = function(state_49162){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____1.call(this,state_49162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto___49277,jobs,results,process,async))
})();
var state__48695__auto__ = (function (){var statearr_49180 = f__48694__auto__.call(null);
(statearr_49180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto___49277);

return statearr_49180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto___49277,jobs,results,process,async))
);


var c__48693__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto__,jobs,results,process,async){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto__,jobs,results,process,async){
return (function (state_49218){
var state_val_49219 = (state_49218[(1)]);
if((state_val_49219 === (7))){
var inst_49214 = (state_49218[(2)]);
var state_49218__$1 = state_49218;
var statearr_49220_49286 = state_49218__$1;
(statearr_49220_49286[(2)] = inst_49214);

(statearr_49220_49286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (20))){
var state_49218__$1 = state_49218;
var statearr_49221_49287 = state_49218__$1;
(statearr_49221_49287[(2)] = null);

(statearr_49221_49287[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (1))){
var state_49218__$1 = state_49218;
var statearr_49222_49288 = state_49218__$1;
(statearr_49222_49288[(2)] = null);

(statearr_49222_49288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (4))){
var inst_49183 = (state_49218[(7)]);
var inst_49183__$1 = (state_49218[(2)]);
var inst_49184 = (inst_49183__$1 == null);
var state_49218__$1 = (function (){var statearr_49223 = state_49218;
(statearr_49223[(7)] = inst_49183__$1);

return statearr_49223;
})();
if(cljs.core.truth_(inst_49184)){
var statearr_49224_49289 = state_49218__$1;
(statearr_49224_49289[(1)] = (5));

} else {
var statearr_49225_49290 = state_49218__$1;
(statearr_49225_49290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (15))){
var inst_49196 = (state_49218[(8)]);
var state_49218__$1 = state_49218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49218__$1,(18),to,inst_49196);
} else {
if((state_val_49219 === (21))){
var inst_49209 = (state_49218[(2)]);
var state_49218__$1 = state_49218;
var statearr_49226_49291 = state_49218__$1;
(statearr_49226_49291[(2)] = inst_49209);

(statearr_49226_49291[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (13))){
var inst_49211 = (state_49218[(2)]);
var state_49218__$1 = (function (){var statearr_49227 = state_49218;
(statearr_49227[(9)] = inst_49211);

return statearr_49227;
})();
var statearr_49228_49292 = state_49218__$1;
(statearr_49228_49292[(2)] = null);

(statearr_49228_49292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (6))){
var inst_49183 = (state_49218[(7)]);
var state_49218__$1 = state_49218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49218__$1,(11),inst_49183);
} else {
if((state_val_49219 === (17))){
var inst_49204 = (state_49218[(2)]);
var state_49218__$1 = state_49218;
if(cljs.core.truth_(inst_49204)){
var statearr_49229_49293 = state_49218__$1;
(statearr_49229_49293[(1)] = (19));

} else {
var statearr_49230_49294 = state_49218__$1;
(statearr_49230_49294[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (3))){
var inst_49216 = (state_49218[(2)]);
var state_49218__$1 = state_49218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49218__$1,inst_49216);
} else {
if((state_val_49219 === (12))){
var inst_49193 = (state_49218[(10)]);
var state_49218__$1 = state_49218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49218__$1,(14),inst_49193);
} else {
if((state_val_49219 === (2))){
var state_49218__$1 = state_49218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49218__$1,(4),results);
} else {
if((state_val_49219 === (19))){
var state_49218__$1 = state_49218;
var statearr_49231_49295 = state_49218__$1;
(statearr_49231_49295[(2)] = null);

(statearr_49231_49295[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (11))){
var inst_49193 = (state_49218[(2)]);
var state_49218__$1 = (function (){var statearr_49232 = state_49218;
(statearr_49232[(10)] = inst_49193);

return statearr_49232;
})();
var statearr_49233_49296 = state_49218__$1;
(statearr_49233_49296[(2)] = null);

(statearr_49233_49296[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (9))){
var state_49218__$1 = state_49218;
var statearr_49234_49297 = state_49218__$1;
(statearr_49234_49297[(2)] = null);

(statearr_49234_49297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (5))){
var state_49218__$1 = state_49218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49235_49298 = state_49218__$1;
(statearr_49235_49298[(1)] = (8));

} else {
var statearr_49236_49299 = state_49218__$1;
(statearr_49236_49299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (14))){
var inst_49198 = (state_49218[(11)]);
var inst_49196 = (state_49218[(8)]);
var inst_49196__$1 = (state_49218[(2)]);
var inst_49197 = (inst_49196__$1 == null);
var inst_49198__$1 = cljs.core.not.call(null,inst_49197);
var state_49218__$1 = (function (){var statearr_49237 = state_49218;
(statearr_49237[(11)] = inst_49198__$1);

(statearr_49237[(8)] = inst_49196__$1);

return statearr_49237;
})();
if(inst_49198__$1){
var statearr_49238_49300 = state_49218__$1;
(statearr_49238_49300[(1)] = (15));

} else {
var statearr_49239_49301 = state_49218__$1;
(statearr_49239_49301[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (16))){
var inst_49198 = (state_49218[(11)]);
var state_49218__$1 = state_49218;
var statearr_49240_49302 = state_49218__$1;
(statearr_49240_49302[(2)] = inst_49198);

(statearr_49240_49302[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (10))){
var inst_49190 = (state_49218[(2)]);
var state_49218__$1 = state_49218;
var statearr_49241_49303 = state_49218__$1;
(statearr_49241_49303[(2)] = inst_49190);

(statearr_49241_49303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (18))){
var inst_49201 = (state_49218[(2)]);
var state_49218__$1 = state_49218;
var statearr_49242_49304 = state_49218__$1;
(statearr_49242_49304[(2)] = inst_49201);

(statearr_49242_49304[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49219 === (8))){
var inst_49187 = cljs.core.async.close_BANG_.call(null,to);
var state_49218__$1 = state_49218;
var statearr_49243_49305 = state_49218__$1;
(statearr_49243_49305[(2)] = inst_49187);

(statearr_49243_49305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48693__auto__,jobs,results,process,async))
;
return ((function (switch__48581__auto__,c__48693__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____0 = (function (){
var statearr_49247 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49247[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__);

(statearr_49247[(1)] = (1));

return statearr_49247;
});
var cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____1 = (function (state_49218){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_49218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e49248){if((e49248 instanceof Object)){
var ex__48585__auto__ = e49248;
var statearr_49249_49306 = state_49218;
(statearr_49249_49306[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49307 = state_49218;
state_49218 = G__49307;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__ = function(state_49218){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____1.call(this,state_49218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__48582__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto__,jobs,results,process,async))
})();
var state__48695__auto__ = (function (){var statearr_49250 = f__48694__auto__.call(null);
(statearr_49250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto__);

return statearr_49250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto__,jobs,results,process,async))
);

return c__48693__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args49308 = [];
var len__45609__auto___49311 = arguments.length;
var i__45610__auto___49312 = (0);
while(true){
if((i__45610__auto___49312 < len__45609__auto___49311)){
args49308.push((arguments[i__45610__auto___49312]));

var G__49313 = (i__45610__auto___49312 + (1));
i__45610__auto___49312 = G__49313;
continue;
} else {
}
break;
}

var G__49310 = args49308.length;
switch (G__49310) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49308.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args49315 = [];
var len__45609__auto___49318 = arguments.length;
var i__45610__auto___49319 = (0);
while(true){
if((i__45610__auto___49319 < len__45609__auto___49318)){
args49315.push((arguments[i__45610__auto___49319]));

var G__49320 = (i__45610__auto___49319 + (1));
i__45610__auto___49319 = G__49320;
continue;
} else {
}
break;
}

var G__49317 = args49315.length;
switch (G__49317) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49315.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args49322 = [];
var len__45609__auto___49375 = arguments.length;
var i__45610__auto___49376 = (0);
while(true){
if((i__45610__auto___49376 < len__45609__auto___49375)){
args49322.push((arguments[i__45610__auto___49376]));

var G__49377 = (i__45610__auto___49376 + (1));
i__45610__auto___49376 = G__49377;
continue;
} else {
}
break;
}

var G__49324 = args49322.length;
switch (G__49324) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49322.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__48693__auto___49379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto___49379,tc,fc){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto___49379,tc,fc){
return (function (state_49350){
var state_val_49351 = (state_49350[(1)]);
if((state_val_49351 === (7))){
var inst_49346 = (state_49350[(2)]);
var state_49350__$1 = state_49350;
var statearr_49352_49380 = state_49350__$1;
(statearr_49352_49380[(2)] = inst_49346);

(statearr_49352_49380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49351 === (1))){
var state_49350__$1 = state_49350;
var statearr_49353_49381 = state_49350__$1;
(statearr_49353_49381[(2)] = null);

(statearr_49353_49381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49351 === (4))){
var inst_49327 = (state_49350[(7)]);
var inst_49327__$1 = (state_49350[(2)]);
var inst_49328 = (inst_49327__$1 == null);
var state_49350__$1 = (function (){var statearr_49354 = state_49350;
(statearr_49354[(7)] = inst_49327__$1);

return statearr_49354;
})();
if(cljs.core.truth_(inst_49328)){
var statearr_49355_49382 = state_49350__$1;
(statearr_49355_49382[(1)] = (5));

} else {
var statearr_49356_49383 = state_49350__$1;
(statearr_49356_49383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49351 === (13))){
var state_49350__$1 = state_49350;
var statearr_49357_49384 = state_49350__$1;
(statearr_49357_49384[(2)] = null);

(statearr_49357_49384[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49351 === (6))){
var inst_49327 = (state_49350[(7)]);
var inst_49333 = p.call(null,inst_49327);
var state_49350__$1 = state_49350;
if(cljs.core.truth_(inst_49333)){
var statearr_49358_49385 = state_49350__$1;
(statearr_49358_49385[(1)] = (9));

} else {
var statearr_49359_49386 = state_49350__$1;
(statearr_49359_49386[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49351 === (3))){
var inst_49348 = (state_49350[(2)]);
var state_49350__$1 = state_49350;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49350__$1,inst_49348);
} else {
if((state_val_49351 === (12))){
var state_49350__$1 = state_49350;
var statearr_49360_49387 = state_49350__$1;
(statearr_49360_49387[(2)] = null);

(statearr_49360_49387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49351 === (2))){
var state_49350__$1 = state_49350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49350__$1,(4),ch);
} else {
if((state_val_49351 === (11))){
var inst_49327 = (state_49350[(7)]);
var inst_49337 = (state_49350[(2)]);
var state_49350__$1 = state_49350;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49350__$1,(8),inst_49337,inst_49327);
} else {
if((state_val_49351 === (9))){
var state_49350__$1 = state_49350;
var statearr_49361_49388 = state_49350__$1;
(statearr_49361_49388[(2)] = tc);

(statearr_49361_49388[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49351 === (5))){
var inst_49330 = cljs.core.async.close_BANG_.call(null,tc);
var inst_49331 = cljs.core.async.close_BANG_.call(null,fc);
var state_49350__$1 = (function (){var statearr_49362 = state_49350;
(statearr_49362[(8)] = inst_49330);

return statearr_49362;
})();
var statearr_49363_49389 = state_49350__$1;
(statearr_49363_49389[(2)] = inst_49331);

(statearr_49363_49389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49351 === (14))){
var inst_49344 = (state_49350[(2)]);
var state_49350__$1 = state_49350;
var statearr_49364_49390 = state_49350__$1;
(statearr_49364_49390[(2)] = inst_49344);

(statearr_49364_49390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49351 === (10))){
var state_49350__$1 = state_49350;
var statearr_49365_49391 = state_49350__$1;
(statearr_49365_49391[(2)] = fc);

(statearr_49365_49391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49351 === (8))){
var inst_49339 = (state_49350[(2)]);
var state_49350__$1 = state_49350;
if(cljs.core.truth_(inst_49339)){
var statearr_49366_49392 = state_49350__$1;
(statearr_49366_49392[(1)] = (12));

} else {
var statearr_49367_49393 = state_49350__$1;
(statearr_49367_49393[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48693__auto___49379,tc,fc))
;
return ((function (switch__48581__auto__,c__48693__auto___49379,tc,fc){
return (function() {
var cljs$core$async$state_machine__48582__auto__ = null;
var cljs$core$async$state_machine__48582__auto____0 = (function (){
var statearr_49371 = [null,null,null,null,null,null,null,null,null];
(statearr_49371[(0)] = cljs$core$async$state_machine__48582__auto__);

(statearr_49371[(1)] = (1));

return statearr_49371;
});
var cljs$core$async$state_machine__48582__auto____1 = (function (state_49350){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_49350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e49372){if((e49372 instanceof Object)){
var ex__48585__auto__ = e49372;
var statearr_49373_49394 = state_49350;
(statearr_49373_49394[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49395 = state_49350;
state_49350 = G__49395;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
cljs$core$async$state_machine__48582__auto__ = function(state_49350){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48582__auto____1.call(this,state_49350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48582__auto____0;
cljs$core$async$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48582__auto____1;
return cljs$core$async$state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto___49379,tc,fc))
})();
var state__48695__auto__ = (function (){var statearr_49374 = f__48694__auto__.call(null);
(statearr_49374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto___49379);

return statearr_49374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto___49379,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__48693__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto__){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto__){
return (function (state_49459){
var state_val_49460 = (state_49459[(1)]);
if((state_val_49460 === (7))){
var inst_49455 = (state_49459[(2)]);
var state_49459__$1 = state_49459;
var statearr_49461_49482 = state_49459__$1;
(statearr_49461_49482[(2)] = inst_49455);

(statearr_49461_49482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49460 === (1))){
var inst_49439 = init;
var state_49459__$1 = (function (){var statearr_49462 = state_49459;
(statearr_49462[(7)] = inst_49439);

return statearr_49462;
})();
var statearr_49463_49483 = state_49459__$1;
(statearr_49463_49483[(2)] = null);

(statearr_49463_49483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49460 === (4))){
var inst_49442 = (state_49459[(8)]);
var inst_49442__$1 = (state_49459[(2)]);
var inst_49443 = (inst_49442__$1 == null);
var state_49459__$1 = (function (){var statearr_49464 = state_49459;
(statearr_49464[(8)] = inst_49442__$1);

return statearr_49464;
})();
if(cljs.core.truth_(inst_49443)){
var statearr_49465_49484 = state_49459__$1;
(statearr_49465_49484[(1)] = (5));

} else {
var statearr_49466_49485 = state_49459__$1;
(statearr_49466_49485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49460 === (6))){
var inst_49446 = (state_49459[(9)]);
var inst_49439 = (state_49459[(7)]);
var inst_49442 = (state_49459[(8)]);
var inst_49446__$1 = f.call(null,inst_49439,inst_49442);
var inst_49447 = cljs.core.reduced_QMARK_.call(null,inst_49446__$1);
var state_49459__$1 = (function (){var statearr_49467 = state_49459;
(statearr_49467[(9)] = inst_49446__$1);

return statearr_49467;
})();
if(inst_49447){
var statearr_49468_49486 = state_49459__$1;
(statearr_49468_49486[(1)] = (8));

} else {
var statearr_49469_49487 = state_49459__$1;
(statearr_49469_49487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49460 === (3))){
var inst_49457 = (state_49459[(2)]);
var state_49459__$1 = state_49459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49459__$1,inst_49457);
} else {
if((state_val_49460 === (2))){
var state_49459__$1 = state_49459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49459__$1,(4),ch);
} else {
if((state_val_49460 === (9))){
var inst_49446 = (state_49459[(9)]);
var inst_49439 = inst_49446;
var state_49459__$1 = (function (){var statearr_49470 = state_49459;
(statearr_49470[(7)] = inst_49439);

return statearr_49470;
})();
var statearr_49471_49488 = state_49459__$1;
(statearr_49471_49488[(2)] = null);

(statearr_49471_49488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49460 === (5))){
var inst_49439 = (state_49459[(7)]);
var state_49459__$1 = state_49459;
var statearr_49472_49489 = state_49459__$1;
(statearr_49472_49489[(2)] = inst_49439);

(statearr_49472_49489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49460 === (10))){
var inst_49453 = (state_49459[(2)]);
var state_49459__$1 = state_49459;
var statearr_49473_49490 = state_49459__$1;
(statearr_49473_49490[(2)] = inst_49453);

(statearr_49473_49490[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49460 === (8))){
var inst_49446 = (state_49459[(9)]);
var inst_49449 = cljs.core.deref.call(null,inst_49446);
var state_49459__$1 = state_49459;
var statearr_49474_49491 = state_49459__$1;
(statearr_49474_49491[(2)] = inst_49449);

(statearr_49474_49491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__48693__auto__))
;
return ((function (switch__48581__auto__,c__48693__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__48582__auto__ = null;
var cljs$core$async$reduce_$_state_machine__48582__auto____0 = (function (){
var statearr_49478 = [null,null,null,null,null,null,null,null,null,null];
(statearr_49478[(0)] = cljs$core$async$reduce_$_state_machine__48582__auto__);

(statearr_49478[(1)] = (1));

return statearr_49478;
});
var cljs$core$async$reduce_$_state_machine__48582__auto____1 = (function (state_49459){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_49459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e49479){if((e49479 instanceof Object)){
var ex__48585__auto__ = e49479;
var statearr_49480_49492 = state_49459;
(statearr_49480_49492[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49493 = state_49459;
state_49459 = G__49493;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__48582__auto__ = function(state_49459){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__48582__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__48582__auto____1.call(this,state_49459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__48582__auto____0;
cljs$core$async$reduce_$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__48582__auto____1;
return cljs$core$async$reduce_$_state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto__))
})();
var state__48695__auto__ = (function (){var statearr_49481 = f__48694__auto__.call(null);
(statearr_49481[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto__);

return statearr_49481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto__))
);

return c__48693__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__48693__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto__,f__$1){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto__,f__$1){
return (function (state_49513){
var state_val_49514 = (state_49513[(1)]);
if((state_val_49514 === (1))){
var inst_49508 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_49513__$1 = state_49513;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49513__$1,(2),inst_49508);
} else {
if((state_val_49514 === (2))){
var inst_49510 = (state_49513[(2)]);
var inst_49511 = f__$1.call(null,inst_49510);
var state_49513__$1 = state_49513;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49513__$1,inst_49511);
} else {
return null;
}
}
});})(c__48693__auto__,f__$1))
;
return ((function (switch__48581__auto__,c__48693__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__48582__auto__ = null;
var cljs$core$async$transduce_$_state_machine__48582__auto____0 = (function (){
var statearr_49518 = [null,null,null,null,null,null,null];
(statearr_49518[(0)] = cljs$core$async$transduce_$_state_machine__48582__auto__);

(statearr_49518[(1)] = (1));

return statearr_49518;
});
var cljs$core$async$transduce_$_state_machine__48582__auto____1 = (function (state_49513){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_49513);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e49519){if((e49519 instanceof Object)){
var ex__48585__auto__ = e49519;
var statearr_49520_49522 = state_49513;
(statearr_49520_49522[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49523 = state_49513;
state_49513 = G__49523;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__48582__auto__ = function(state_49513){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__48582__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__48582__auto____1.call(this,state_49513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__48582__auto____0;
cljs$core$async$transduce_$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__48582__auto____1;
return cljs$core$async$transduce_$_state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto__,f__$1))
})();
var state__48695__auto__ = (function (){var statearr_49521 = f__48694__auto__.call(null);
(statearr_49521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto__);

return statearr_49521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto__,f__$1))
);

return c__48693__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args49524 = [];
var len__45609__auto___49576 = arguments.length;
var i__45610__auto___49577 = (0);
while(true){
if((i__45610__auto___49577 < len__45609__auto___49576)){
args49524.push((arguments[i__45610__auto___49577]));

var G__49578 = (i__45610__auto___49577 + (1));
i__45610__auto___49577 = G__49578;
continue;
} else {
}
break;
}

var G__49526 = args49524.length;
switch (G__49526) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49524.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__48693__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto__){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto__){
return (function (state_49551){
var state_val_49552 = (state_49551[(1)]);
if((state_val_49552 === (7))){
var inst_49533 = (state_49551[(2)]);
var state_49551__$1 = state_49551;
var statearr_49553_49580 = state_49551__$1;
(statearr_49553_49580[(2)] = inst_49533);

(statearr_49553_49580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (1))){
var inst_49527 = cljs.core.seq.call(null,coll);
var inst_49528 = inst_49527;
var state_49551__$1 = (function (){var statearr_49554 = state_49551;
(statearr_49554[(7)] = inst_49528);

return statearr_49554;
})();
var statearr_49555_49581 = state_49551__$1;
(statearr_49555_49581[(2)] = null);

(statearr_49555_49581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (4))){
var inst_49528 = (state_49551[(7)]);
var inst_49531 = cljs.core.first.call(null,inst_49528);
var state_49551__$1 = state_49551;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49551__$1,(7),ch,inst_49531);
} else {
if((state_val_49552 === (13))){
var inst_49545 = (state_49551[(2)]);
var state_49551__$1 = state_49551;
var statearr_49556_49582 = state_49551__$1;
(statearr_49556_49582[(2)] = inst_49545);

(statearr_49556_49582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (6))){
var inst_49536 = (state_49551[(2)]);
var state_49551__$1 = state_49551;
if(cljs.core.truth_(inst_49536)){
var statearr_49557_49583 = state_49551__$1;
(statearr_49557_49583[(1)] = (8));

} else {
var statearr_49558_49584 = state_49551__$1;
(statearr_49558_49584[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (3))){
var inst_49549 = (state_49551[(2)]);
var state_49551__$1 = state_49551;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49551__$1,inst_49549);
} else {
if((state_val_49552 === (12))){
var state_49551__$1 = state_49551;
var statearr_49559_49585 = state_49551__$1;
(statearr_49559_49585[(2)] = null);

(statearr_49559_49585[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (2))){
var inst_49528 = (state_49551[(7)]);
var state_49551__$1 = state_49551;
if(cljs.core.truth_(inst_49528)){
var statearr_49560_49586 = state_49551__$1;
(statearr_49560_49586[(1)] = (4));

} else {
var statearr_49561_49587 = state_49551__$1;
(statearr_49561_49587[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (11))){
var inst_49542 = cljs.core.async.close_BANG_.call(null,ch);
var state_49551__$1 = state_49551;
var statearr_49562_49588 = state_49551__$1;
(statearr_49562_49588[(2)] = inst_49542);

(statearr_49562_49588[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (9))){
var state_49551__$1 = state_49551;
if(cljs.core.truth_(close_QMARK_)){
var statearr_49563_49589 = state_49551__$1;
(statearr_49563_49589[(1)] = (11));

} else {
var statearr_49564_49590 = state_49551__$1;
(statearr_49564_49590[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (5))){
var inst_49528 = (state_49551[(7)]);
var state_49551__$1 = state_49551;
var statearr_49565_49591 = state_49551__$1;
(statearr_49565_49591[(2)] = inst_49528);

(statearr_49565_49591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (10))){
var inst_49547 = (state_49551[(2)]);
var state_49551__$1 = state_49551;
var statearr_49566_49592 = state_49551__$1;
(statearr_49566_49592[(2)] = inst_49547);

(statearr_49566_49592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49552 === (8))){
var inst_49528 = (state_49551[(7)]);
var inst_49538 = cljs.core.next.call(null,inst_49528);
var inst_49528__$1 = inst_49538;
var state_49551__$1 = (function (){var statearr_49567 = state_49551;
(statearr_49567[(7)] = inst_49528__$1);

return statearr_49567;
})();
var statearr_49568_49593 = state_49551__$1;
(statearr_49568_49593[(2)] = null);

(statearr_49568_49593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48693__auto__))
;
return ((function (switch__48581__auto__,c__48693__auto__){
return (function() {
var cljs$core$async$state_machine__48582__auto__ = null;
var cljs$core$async$state_machine__48582__auto____0 = (function (){
var statearr_49572 = [null,null,null,null,null,null,null,null];
(statearr_49572[(0)] = cljs$core$async$state_machine__48582__auto__);

(statearr_49572[(1)] = (1));

return statearr_49572;
});
var cljs$core$async$state_machine__48582__auto____1 = (function (state_49551){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_49551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e49573){if((e49573 instanceof Object)){
var ex__48585__auto__ = e49573;
var statearr_49574_49594 = state_49551;
(statearr_49574_49594[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49595 = state_49551;
state_49551 = G__49595;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
cljs$core$async$state_machine__48582__auto__ = function(state_49551){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48582__auto____1.call(this,state_49551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48582__auto____0;
cljs$core$async$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48582__auto____1;
return cljs$core$async$state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto__))
})();
var state__48695__auto__ = (function (){var statearr_49575 = f__48694__auto__.call(null);
(statearr_49575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto__);

return statearr_49575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto__))
);

return c__48693__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__45197__auto__ = (((_ == null))?null:_);
var m__45198__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__45197__auto__)]);
if(!((m__45198__auto__ == null))){
return m__45198__auto__.call(null,_);
} else {
var m__45198__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__45198__auto____$1 == null))){
return m__45198__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__45197__auto__ = (((m == null))?null:m);
var m__45198__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__45197__auto__)]);
if(!((m__45198__auto__ == null))){
return m__45198__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__45198__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__45198__auto____$1 == null))){
return m__45198__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__45197__auto__ = (((m == null))?null:m);
var m__45198__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__45197__auto__)]);
if(!((m__45198__auto__ == null))){
return m__45198__auto__.call(null,m,ch);
} else {
var m__45198__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__45198__auto____$1 == null))){
return m__45198__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__45197__auto__ = (((m == null))?null:m);
var m__45198__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__45197__auto__)]);
if(!((m__45198__auto__ == null))){
return m__45198__auto__.call(null,m);
} else {
var m__45198__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__45198__auto____$1 == null))){
return m__45198__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async49821 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49821 = (function (mult,ch,cs,meta49822){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta49822 = meta49822;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async49821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_49823,meta49822__$1){
var self__ = this;
var _49823__$1 = this;
return (new cljs.core.async.t_cljs$core$async49821(self__.mult,self__.ch,self__.cs,meta49822__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async49821.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_49823){
var self__ = this;
var _49823__$1 = this;
return self__.meta49822;
});})(cs))
;

cljs.core.async.t_cljs$core$async49821.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async49821.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async49821.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async49821.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async49821.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async49821.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async49821.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta49822","meta49822",-937764657,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async49821.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49821.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49821";

cljs.core.async.t_cljs$core$async49821.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__45140__auto__,writer__45141__auto__,opt__45142__auto__){
return cljs.core._write.call(null,writer__45141__auto__,"cljs.core.async/t_cljs$core$async49821");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async49821 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async49821(mult__$1,ch__$1,cs__$1,meta49822){
return (new cljs.core.async.t_cljs$core$async49821(mult__$1,ch__$1,cs__$1,meta49822));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async49821(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__48693__auto___50046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto___50046,cs,m,dchan,dctr,done){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto___50046,cs,m,dchan,dctr,done){
return (function (state_49958){
var state_val_49959 = (state_49958[(1)]);
if((state_val_49959 === (7))){
var inst_49954 = (state_49958[(2)]);
var state_49958__$1 = state_49958;
var statearr_49960_50047 = state_49958__$1;
(statearr_49960_50047[(2)] = inst_49954);

(statearr_49960_50047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (20))){
var inst_49857 = (state_49958[(7)]);
var inst_49869 = cljs.core.first.call(null,inst_49857);
var inst_49870 = cljs.core.nth.call(null,inst_49869,(0),null);
var inst_49871 = cljs.core.nth.call(null,inst_49869,(1),null);
var state_49958__$1 = (function (){var statearr_49961 = state_49958;
(statearr_49961[(8)] = inst_49870);

return statearr_49961;
})();
if(cljs.core.truth_(inst_49871)){
var statearr_49962_50048 = state_49958__$1;
(statearr_49962_50048[(1)] = (22));

} else {
var statearr_49963_50049 = state_49958__$1;
(statearr_49963_50049[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (27))){
var inst_49901 = (state_49958[(9)]);
var inst_49826 = (state_49958[(10)]);
var inst_49906 = (state_49958[(11)]);
var inst_49899 = (state_49958[(12)]);
var inst_49906__$1 = cljs.core._nth.call(null,inst_49899,inst_49901);
var inst_49907 = cljs.core.async.put_BANG_.call(null,inst_49906__$1,inst_49826,done);
var state_49958__$1 = (function (){var statearr_49964 = state_49958;
(statearr_49964[(11)] = inst_49906__$1);

return statearr_49964;
})();
if(cljs.core.truth_(inst_49907)){
var statearr_49965_50050 = state_49958__$1;
(statearr_49965_50050[(1)] = (30));

} else {
var statearr_49966_50051 = state_49958__$1;
(statearr_49966_50051[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (1))){
var state_49958__$1 = state_49958;
var statearr_49967_50052 = state_49958__$1;
(statearr_49967_50052[(2)] = null);

(statearr_49967_50052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (24))){
var inst_49857 = (state_49958[(7)]);
var inst_49876 = (state_49958[(2)]);
var inst_49877 = cljs.core.next.call(null,inst_49857);
var inst_49835 = inst_49877;
var inst_49836 = null;
var inst_49837 = (0);
var inst_49838 = (0);
var state_49958__$1 = (function (){var statearr_49968 = state_49958;
(statearr_49968[(13)] = inst_49835);

(statearr_49968[(14)] = inst_49838);

(statearr_49968[(15)] = inst_49876);

(statearr_49968[(16)] = inst_49837);

(statearr_49968[(17)] = inst_49836);

return statearr_49968;
})();
var statearr_49969_50053 = state_49958__$1;
(statearr_49969_50053[(2)] = null);

(statearr_49969_50053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (39))){
var state_49958__$1 = state_49958;
var statearr_49973_50054 = state_49958__$1;
(statearr_49973_50054[(2)] = null);

(statearr_49973_50054[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (4))){
var inst_49826 = (state_49958[(10)]);
var inst_49826__$1 = (state_49958[(2)]);
var inst_49827 = (inst_49826__$1 == null);
var state_49958__$1 = (function (){var statearr_49974 = state_49958;
(statearr_49974[(10)] = inst_49826__$1);

return statearr_49974;
})();
if(cljs.core.truth_(inst_49827)){
var statearr_49975_50055 = state_49958__$1;
(statearr_49975_50055[(1)] = (5));

} else {
var statearr_49976_50056 = state_49958__$1;
(statearr_49976_50056[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (15))){
var inst_49835 = (state_49958[(13)]);
var inst_49838 = (state_49958[(14)]);
var inst_49837 = (state_49958[(16)]);
var inst_49836 = (state_49958[(17)]);
var inst_49853 = (state_49958[(2)]);
var inst_49854 = (inst_49838 + (1));
var tmp49970 = inst_49835;
var tmp49971 = inst_49837;
var tmp49972 = inst_49836;
var inst_49835__$1 = tmp49970;
var inst_49836__$1 = tmp49972;
var inst_49837__$1 = tmp49971;
var inst_49838__$1 = inst_49854;
var state_49958__$1 = (function (){var statearr_49977 = state_49958;
(statearr_49977[(18)] = inst_49853);

(statearr_49977[(13)] = inst_49835__$1);

(statearr_49977[(14)] = inst_49838__$1);

(statearr_49977[(16)] = inst_49837__$1);

(statearr_49977[(17)] = inst_49836__$1);

return statearr_49977;
})();
var statearr_49978_50057 = state_49958__$1;
(statearr_49978_50057[(2)] = null);

(statearr_49978_50057[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (21))){
var inst_49880 = (state_49958[(2)]);
var state_49958__$1 = state_49958;
var statearr_49982_50058 = state_49958__$1;
(statearr_49982_50058[(2)] = inst_49880);

(statearr_49982_50058[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (31))){
var inst_49906 = (state_49958[(11)]);
var inst_49910 = done.call(null,null);
var inst_49911 = cljs.core.async.untap_STAR_.call(null,m,inst_49906);
var state_49958__$1 = (function (){var statearr_49983 = state_49958;
(statearr_49983[(19)] = inst_49910);

return statearr_49983;
})();
var statearr_49984_50059 = state_49958__$1;
(statearr_49984_50059[(2)] = inst_49911);

(statearr_49984_50059[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (32))){
var inst_49901 = (state_49958[(9)]);
var inst_49898 = (state_49958[(20)]);
var inst_49900 = (state_49958[(21)]);
var inst_49899 = (state_49958[(12)]);
var inst_49913 = (state_49958[(2)]);
var inst_49914 = (inst_49901 + (1));
var tmp49979 = inst_49898;
var tmp49980 = inst_49900;
var tmp49981 = inst_49899;
var inst_49898__$1 = tmp49979;
var inst_49899__$1 = tmp49981;
var inst_49900__$1 = tmp49980;
var inst_49901__$1 = inst_49914;
var state_49958__$1 = (function (){var statearr_49985 = state_49958;
(statearr_49985[(9)] = inst_49901__$1);

(statearr_49985[(20)] = inst_49898__$1);

(statearr_49985[(21)] = inst_49900__$1);

(statearr_49985[(22)] = inst_49913);

(statearr_49985[(12)] = inst_49899__$1);

return statearr_49985;
})();
var statearr_49986_50060 = state_49958__$1;
(statearr_49986_50060[(2)] = null);

(statearr_49986_50060[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (40))){
var inst_49926 = (state_49958[(23)]);
var inst_49930 = done.call(null,null);
var inst_49931 = cljs.core.async.untap_STAR_.call(null,m,inst_49926);
var state_49958__$1 = (function (){var statearr_49987 = state_49958;
(statearr_49987[(24)] = inst_49930);

return statearr_49987;
})();
var statearr_49988_50061 = state_49958__$1;
(statearr_49988_50061[(2)] = inst_49931);

(statearr_49988_50061[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (33))){
var inst_49917 = (state_49958[(25)]);
var inst_49919 = cljs.core.chunked_seq_QMARK_.call(null,inst_49917);
var state_49958__$1 = state_49958;
if(inst_49919){
var statearr_49989_50062 = state_49958__$1;
(statearr_49989_50062[(1)] = (36));

} else {
var statearr_49990_50063 = state_49958__$1;
(statearr_49990_50063[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (13))){
var inst_49847 = (state_49958[(26)]);
var inst_49850 = cljs.core.async.close_BANG_.call(null,inst_49847);
var state_49958__$1 = state_49958;
var statearr_49991_50064 = state_49958__$1;
(statearr_49991_50064[(2)] = inst_49850);

(statearr_49991_50064[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (22))){
var inst_49870 = (state_49958[(8)]);
var inst_49873 = cljs.core.async.close_BANG_.call(null,inst_49870);
var state_49958__$1 = state_49958;
var statearr_49992_50065 = state_49958__$1;
(statearr_49992_50065[(2)] = inst_49873);

(statearr_49992_50065[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (36))){
var inst_49917 = (state_49958[(25)]);
var inst_49921 = cljs.core.chunk_first.call(null,inst_49917);
var inst_49922 = cljs.core.chunk_rest.call(null,inst_49917);
var inst_49923 = cljs.core.count.call(null,inst_49921);
var inst_49898 = inst_49922;
var inst_49899 = inst_49921;
var inst_49900 = inst_49923;
var inst_49901 = (0);
var state_49958__$1 = (function (){var statearr_49993 = state_49958;
(statearr_49993[(9)] = inst_49901);

(statearr_49993[(20)] = inst_49898);

(statearr_49993[(21)] = inst_49900);

(statearr_49993[(12)] = inst_49899);

return statearr_49993;
})();
var statearr_49994_50066 = state_49958__$1;
(statearr_49994_50066[(2)] = null);

(statearr_49994_50066[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (41))){
var inst_49917 = (state_49958[(25)]);
var inst_49933 = (state_49958[(2)]);
var inst_49934 = cljs.core.next.call(null,inst_49917);
var inst_49898 = inst_49934;
var inst_49899 = null;
var inst_49900 = (0);
var inst_49901 = (0);
var state_49958__$1 = (function (){var statearr_49995 = state_49958;
(statearr_49995[(27)] = inst_49933);

(statearr_49995[(9)] = inst_49901);

(statearr_49995[(20)] = inst_49898);

(statearr_49995[(21)] = inst_49900);

(statearr_49995[(12)] = inst_49899);

return statearr_49995;
})();
var statearr_49996_50067 = state_49958__$1;
(statearr_49996_50067[(2)] = null);

(statearr_49996_50067[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (43))){
var state_49958__$1 = state_49958;
var statearr_49997_50068 = state_49958__$1;
(statearr_49997_50068[(2)] = null);

(statearr_49997_50068[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (29))){
var inst_49942 = (state_49958[(2)]);
var state_49958__$1 = state_49958;
var statearr_49998_50069 = state_49958__$1;
(statearr_49998_50069[(2)] = inst_49942);

(statearr_49998_50069[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (44))){
var inst_49951 = (state_49958[(2)]);
var state_49958__$1 = (function (){var statearr_49999 = state_49958;
(statearr_49999[(28)] = inst_49951);

return statearr_49999;
})();
var statearr_50000_50070 = state_49958__$1;
(statearr_50000_50070[(2)] = null);

(statearr_50000_50070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (6))){
var inst_49890 = (state_49958[(29)]);
var inst_49889 = cljs.core.deref.call(null,cs);
var inst_49890__$1 = cljs.core.keys.call(null,inst_49889);
var inst_49891 = cljs.core.count.call(null,inst_49890__$1);
var inst_49892 = cljs.core.reset_BANG_.call(null,dctr,inst_49891);
var inst_49897 = cljs.core.seq.call(null,inst_49890__$1);
var inst_49898 = inst_49897;
var inst_49899 = null;
var inst_49900 = (0);
var inst_49901 = (0);
var state_49958__$1 = (function (){var statearr_50001 = state_49958;
(statearr_50001[(9)] = inst_49901);

(statearr_50001[(20)] = inst_49898);

(statearr_50001[(21)] = inst_49900);

(statearr_50001[(29)] = inst_49890__$1);

(statearr_50001[(12)] = inst_49899);

(statearr_50001[(30)] = inst_49892);

return statearr_50001;
})();
var statearr_50002_50071 = state_49958__$1;
(statearr_50002_50071[(2)] = null);

(statearr_50002_50071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (28))){
var inst_49917 = (state_49958[(25)]);
var inst_49898 = (state_49958[(20)]);
var inst_49917__$1 = cljs.core.seq.call(null,inst_49898);
var state_49958__$1 = (function (){var statearr_50003 = state_49958;
(statearr_50003[(25)] = inst_49917__$1);

return statearr_50003;
})();
if(inst_49917__$1){
var statearr_50004_50072 = state_49958__$1;
(statearr_50004_50072[(1)] = (33));

} else {
var statearr_50005_50073 = state_49958__$1;
(statearr_50005_50073[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (25))){
var inst_49901 = (state_49958[(9)]);
var inst_49900 = (state_49958[(21)]);
var inst_49903 = (inst_49901 < inst_49900);
var inst_49904 = inst_49903;
var state_49958__$1 = state_49958;
if(cljs.core.truth_(inst_49904)){
var statearr_50006_50074 = state_49958__$1;
(statearr_50006_50074[(1)] = (27));

} else {
var statearr_50007_50075 = state_49958__$1;
(statearr_50007_50075[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (34))){
var state_49958__$1 = state_49958;
var statearr_50008_50076 = state_49958__$1;
(statearr_50008_50076[(2)] = null);

(statearr_50008_50076[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (17))){
var state_49958__$1 = state_49958;
var statearr_50009_50077 = state_49958__$1;
(statearr_50009_50077[(2)] = null);

(statearr_50009_50077[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (3))){
var inst_49956 = (state_49958[(2)]);
var state_49958__$1 = state_49958;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49958__$1,inst_49956);
} else {
if((state_val_49959 === (12))){
var inst_49885 = (state_49958[(2)]);
var state_49958__$1 = state_49958;
var statearr_50010_50078 = state_49958__$1;
(statearr_50010_50078[(2)] = inst_49885);

(statearr_50010_50078[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (2))){
var state_49958__$1 = state_49958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49958__$1,(4),ch);
} else {
if((state_val_49959 === (23))){
var state_49958__$1 = state_49958;
var statearr_50011_50079 = state_49958__$1;
(statearr_50011_50079[(2)] = null);

(statearr_50011_50079[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (35))){
var inst_49940 = (state_49958[(2)]);
var state_49958__$1 = state_49958;
var statearr_50012_50080 = state_49958__$1;
(statearr_50012_50080[(2)] = inst_49940);

(statearr_50012_50080[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (19))){
var inst_49857 = (state_49958[(7)]);
var inst_49861 = cljs.core.chunk_first.call(null,inst_49857);
var inst_49862 = cljs.core.chunk_rest.call(null,inst_49857);
var inst_49863 = cljs.core.count.call(null,inst_49861);
var inst_49835 = inst_49862;
var inst_49836 = inst_49861;
var inst_49837 = inst_49863;
var inst_49838 = (0);
var state_49958__$1 = (function (){var statearr_50013 = state_49958;
(statearr_50013[(13)] = inst_49835);

(statearr_50013[(14)] = inst_49838);

(statearr_50013[(16)] = inst_49837);

(statearr_50013[(17)] = inst_49836);

return statearr_50013;
})();
var statearr_50014_50081 = state_49958__$1;
(statearr_50014_50081[(2)] = null);

(statearr_50014_50081[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (11))){
var inst_49857 = (state_49958[(7)]);
var inst_49835 = (state_49958[(13)]);
var inst_49857__$1 = cljs.core.seq.call(null,inst_49835);
var state_49958__$1 = (function (){var statearr_50015 = state_49958;
(statearr_50015[(7)] = inst_49857__$1);

return statearr_50015;
})();
if(inst_49857__$1){
var statearr_50016_50082 = state_49958__$1;
(statearr_50016_50082[(1)] = (16));

} else {
var statearr_50017_50083 = state_49958__$1;
(statearr_50017_50083[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (9))){
var inst_49887 = (state_49958[(2)]);
var state_49958__$1 = state_49958;
var statearr_50018_50084 = state_49958__$1;
(statearr_50018_50084[(2)] = inst_49887);

(statearr_50018_50084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (5))){
var inst_49833 = cljs.core.deref.call(null,cs);
var inst_49834 = cljs.core.seq.call(null,inst_49833);
var inst_49835 = inst_49834;
var inst_49836 = null;
var inst_49837 = (0);
var inst_49838 = (0);
var state_49958__$1 = (function (){var statearr_50019 = state_49958;
(statearr_50019[(13)] = inst_49835);

(statearr_50019[(14)] = inst_49838);

(statearr_50019[(16)] = inst_49837);

(statearr_50019[(17)] = inst_49836);

return statearr_50019;
})();
var statearr_50020_50085 = state_49958__$1;
(statearr_50020_50085[(2)] = null);

(statearr_50020_50085[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (14))){
var state_49958__$1 = state_49958;
var statearr_50021_50086 = state_49958__$1;
(statearr_50021_50086[(2)] = null);

(statearr_50021_50086[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (45))){
var inst_49948 = (state_49958[(2)]);
var state_49958__$1 = state_49958;
var statearr_50022_50087 = state_49958__$1;
(statearr_50022_50087[(2)] = inst_49948);

(statearr_50022_50087[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (26))){
var inst_49890 = (state_49958[(29)]);
var inst_49944 = (state_49958[(2)]);
var inst_49945 = cljs.core.seq.call(null,inst_49890);
var state_49958__$1 = (function (){var statearr_50023 = state_49958;
(statearr_50023[(31)] = inst_49944);

return statearr_50023;
})();
if(inst_49945){
var statearr_50024_50088 = state_49958__$1;
(statearr_50024_50088[(1)] = (42));

} else {
var statearr_50025_50089 = state_49958__$1;
(statearr_50025_50089[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (16))){
var inst_49857 = (state_49958[(7)]);
var inst_49859 = cljs.core.chunked_seq_QMARK_.call(null,inst_49857);
var state_49958__$1 = state_49958;
if(inst_49859){
var statearr_50026_50090 = state_49958__$1;
(statearr_50026_50090[(1)] = (19));

} else {
var statearr_50027_50091 = state_49958__$1;
(statearr_50027_50091[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (38))){
var inst_49937 = (state_49958[(2)]);
var state_49958__$1 = state_49958;
var statearr_50028_50092 = state_49958__$1;
(statearr_50028_50092[(2)] = inst_49937);

(statearr_50028_50092[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (30))){
var state_49958__$1 = state_49958;
var statearr_50029_50093 = state_49958__$1;
(statearr_50029_50093[(2)] = null);

(statearr_50029_50093[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (10))){
var inst_49838 = (state_49958[(14)]);
var inst_49836 = (state_49958[(17)]);
var inst_49846 = cljs.core._nth.call(null,inst_49836,inst_49838);
var inst_49847 = cljs.core.nth.call(null,inst_49846,(0),null);
var inst_49848 = cljs.core.nth.call(null,inst_49846,(1),null);
var state_49958__$1 = (function (){var statearr_50030 = state_49958;
(statearr_50030[(26)] = inst_49847);

return statearr_50030;
})();
if(cljs.core.truth_(inst_49848)){
var statearr_50031_50094 = state_49958__$1;
(statearr_50031_50094[(1)] = (13));

} else {
var statearr_50032_50095 = state_49958__$1;
(statearr_50032_50095[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (18))){
var inst_49883 = (state_49958[(2)]);
var state_49958__$1 = state_49958;
var statearr_50033_50096 = state_49958__$1;
(statearr_50033_50096[(2)] = inst_49883);

(statearr_50033_50096[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (42))){
var state_49958__$1 = state_49958;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49958__$1,(45),dchan);
} else {
if((state_val_49959 === (37))){
var inst_49826 = (state_49958[(10)]);
var inst_49917 = (state_49958[(25)]);
var inst_49926 = (state_49958[(23)]);
var inst_49926__$1 = cljs.core.first.call(null,inst_49917);
var inst_49927 = cljs.core.async.put_BANG_.call(null,inst_49926__$1,inst_49826,done);
var state_49958__$1 = (function (){var statearr_50034 = state_49958;
(statearr_50034[(23)] = inst_49926__$1);

return statearr_50034;
})();
if(cljs.core.truth_(inst_49927)){
var statearr_50035_50097 = state_49958__$1;
(statearr_50035_50097[(1)] = (39));

} else {
var statearr_50036_50098 = state_49958__$1;
(statearr_50036_50098[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49959 === (8))){
var inst_49838 = (state_49958[(14)]);
var inst_49837 = (state_49958[(16)]);
var inst_49840 = (inst_49838 < inst_49837);
var inst_49841 = inst_49840;
var state_49958__$1 = state_49958;
if(cljs.core.truth_(inst_49841)){
var statearr_50037_50099 = state_49958__$1;
(statearr_50037_50099[(1)] = (10));

} else {
var statearr_50038_50100 = state_49958__$1;
(statearr_50038_50100[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48693__auto___50046,cs,m,dchan,dctr,done))
;
return ((function (switch__48581__auto__,c__48693__auto___50046,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__48582__auto__ = null;
var cljs$core$async$mult_$_state_machine__48582__auto____0 = (function (){
var statearr_50042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50042[(0)] = cljs$core$async$mult_$_state_machine__48582__auto__);

(statearr_50042[(1)] = (1));

return statearr_50042;
});
var cljs$core$async$mult_$_state_machine__48582__auto____1 = (function (state_49958){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_49958);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e50043){if((e50043 instanceof Object)){
var ex__48585__auto__ = e50043;
var statearr_50044_50101 = state_49958;
(statearr_50044_50101[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49958);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50043;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50102 = state_49958;
state_49958 = G__50102;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__48582__auto__ = function(state_49958){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__48582__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__48582__auto____1.call(this,state_49958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__48582__auto____0;
cljs$core$async$mult_$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__48582__auto____1;
return cljs$core$async$mult_$_state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto___50046,cs,m,dchan,dctr,done))
})();
var state__48695__auto__ = (function (){var statearr_50045 = f__48694__auto__.call(null);
(statearr_50045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto___50046);

return statearr_50045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto___50046,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args50103 = [];
var len__45609__auto___50106 = arguments.length;
var i__45610__auto___50107 = (0);
while(true){
if((i__45610__auto___50107 < len__45609__auto___50106)){
args50103.push((arguments[i__45610__auto___50107]));

var G__50108 = (i__45610__auto___50107 + (1));
i__45610__auto___50107 = G__50108;
continue;
} else {
}
break;
}

var G__50105 = args50103.length;
switch (G__50105) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50103.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__45197__auto__ = (((m == null))?null:m);
var m__45198__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__45197__auto__)]);
if(!((m__45198__auto__ == null))){
return m__45198__auto__.call(null,m,ch);
} else {
var m__45198__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__45198__auto____$1 == null))){
return m__45198__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__45197__auto__ = (((m == null))?null:m);
var m__45198__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__45197__auto__)]);
if(!((m__45198__auto__ == null))){
return m__45198__auto__.call(null,m,ch);
} else {
var m__45198__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__45198__auto____$1 == null))){
return m__45198__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__45197__auto__ = (((m == null))?null:m);
var m__45198__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__45197__auto__)]);
if(!((m__45198__auto__ == null))){
return m__45198__auto__.call(null,m);
} else {
var m__45198__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__45198__auto____$1 == null))){
return m__45198__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__45197__auto__ = (((m == null))?null:m);
var m__45198__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__45197__auto__)]);
if(!((m__45198__auto__ == null))){
return m__45198__auto__.call(null,m,state_map);
} else {
var m__45198__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__45198__auto____$1 == null))){
return m__45198__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__45197__auto__ = (((m == null))?null:m);
var m__45198__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__45197__auto__)]);
if(!((m__45198__auto__ == null))){
return m__45198__auto__.call(null,m,mode);
} else {
var m__45198__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__45198__auto____$1 == null))){
return m__45198__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__45616__auto__ = [];
var len__45609__auto___50120 = arguments.length;
var i__45610__auto___50121 = (0);
while(true){
if((i__45610__auto___50121 < len__45609__auto___50120)){
args__45616__auto__.push((arguments[i__45610__auto___50121]));

var G__50122 = (i__45610__auto___50121 + (1));
i__45610__auto___50121 = G__50122;
continue;
} else {
}
break;
}

var argseq__45617__auto__ = ((((3) < args__45616__auto__.length))?(new cljs.core.IndexedSeq(args__45616__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__45617__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__50114){
var map__50115 = p__50114;
var map__50115__$1 = ((((!((map__50115 == null)))?((((map__50115.cljs$lang$protocol_mask$partition0$ & (64))) || (map__50115.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50115):map__50115);
var opts = map__50115__$1;
var statearr_50117_50123 = state;
(statearr_50117_50123[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__50115,map__50115__$1,opts){
return (function (val){
var statearr_50118_50124 = state;
(statearr_50118_50124[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__50115,map__50115__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_50119_50125 = state;
(statearr_50119_50125[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq50110){
var G__50111 = cljs.core.first.call(null,seq50110);
var seq50110__$1 = cljs.core.next.call(null,seq50110);
var G__50112 = cljs.core.first.call(null,seq50110__$1);
var seq50110__$2 = cljs.core.next.call(null,seq50110__$1);
var G__50113 = cljs.core.first.call(null,seq50110__$2);
var seq50110__$3 = cljs.core.next.call(null,seq50110__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__50111,G__50112,G__50113,seq50110__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async50291 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50291 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta50292){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta50292 = meta50292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50293,meta50292__$1){
var self__ = this;
var _50293__$1 = this;
return (new cljs.core.async.t_cljs$core$async50291(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta50292__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50291.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_50293){
var self__ = this;
var _50293__$1 = this;
return self__.meta50292;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50291.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async50291.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50291.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async50291.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50291.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50291.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50291.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50291.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50291.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta50292","meta50292",587581238,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async50291.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50291";

cljs.core.async.t_cljs$core$async50291.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__45140__auto__,writer__45141__auto__,opt__45142__auto__){
return cljs.core._write.call(null,writer__45141__auto__,"cljs.core.async/t_cljs$core$async50291");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async50291 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async50291(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50292){
return (new cljs.core.async.t_cljs$core$async50291(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta50292));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async50291(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48693__auto___50456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto___50456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto___50456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_50393){
var state_val_50394 = (state_50393[(1)]);
if((state_val_50394 === (7))){
var inst_50309 = (state_50393[(2)]);
var state_50393__$1 = state_50393;
var statearr_50395_50457 = state_50393__$1;
(statearr_50395_50457[(2)] = inst_50309);

(statearr_50395_50457[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (20))){
var inst_50321 = (state_50393[(7)]);
var state_50393__$1 = state_50393;
var statearr_50396_50458 = state_50393__$1;
(statearr_50396_50458[(2)] = inst_50321);

(statearr_50396_50458[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (27))){
var state_50393__$1 = state_50393;
var statearr_50397_50459 = state_50393__$1;
(statearr_50397_50459[(2)] = null);

(statearr_50397_50459[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (1))){
var inst_50297 = (state_50393[(8)]);
var inst_50297__$1 = calc_state.call(null);
var inst_50299 = (inst_50297__$1 == null);
var inst_50300 = cljs.core.not.call(null,inst_50299);
var state_50393__$1 = (function (){var statearr_50398 = state_50393;
(statearr_50398[(8)] = inst_50297__$1);

return statearr_50398;
})();
if(inst_50300){
var statearr_50399_50460 = state_50393__$1;
(statearr_50399_50460[(1)] = (2));

} else {
var statearr_50400_50461 = state_50393__$1;
(statearr_50400_50461[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (24))){
var inst_50367 = (state_50393[(9)]);
var inst_50353 = (state_50393[(10)]);
var inst_50344 = (state_50393[(11)]);
var inst_50367__$1 = inst_50344.call(null,inst_50353);
var state_50393__$1 = (function (){var statearr_50401 = state_50393;
(statearr_50401[(9)] = inst_50367__$1);

return statearr_50401;
})();
if(cljs.core.truth_(inst_50367__$1)){
var statearr_50402_50462 = state_50393__$1;
(statearr_50402_50462[(1)] = (29));

} else {
var statearr_50403_50463 = state_50393__$1;
(statearr_50403_50463[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (4))){
var inst_50312 = (state_50393[(2)]);
var state_50393__$1 = state_50393;
if(cljs.core.truth_(inst_50312)){
var statearr_50404_50464 = state_50393__$1;
(statearr_50404_50464[(1)] = (8));

} else {
var statearr_50405_50465 = state_50393__$1;
(statearr_50405_50465[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (15))){
var inst_50338 = (state_50393[(2)]);
var state_50393__$1 = state_50393;
if(cljs.core.truth_(inst_50338)){
var statearr_50406_50466 = state_50393__$1;
(statearr_50406_50466[(1)] = (19));

} else {
var statearr_50407_50467 = state_50393__$1;
(statearr_50407_50467[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (21))){
var inst_50343 = (state_50393[(12)]);
var inst_50343__$1 = (state_50393[(2)]);
var inst_50344 = cljs.core.get.call(null,inst_50343__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50345 = cljs.core.get.call(null,inst_50343__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50346 = cljs.core.get.call(null,inst_50343__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_50393__$1 = (function (){var statearr_50408 = state_50393;
(statearr_50408[(12)] = inst_50343__$1);

(statearr_50408[(11)] = inst_50344);

(statearr_50408[(13)] = inst_50345);

return statearr_50408;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_50393__$1,(22),inst_50346);
} else {
if((state_val_50394 === (31))){
var inst_50375 = (state_50393[(2)]);
var state_50393__$1 = state_50393;
if(cljs.core.truth_(inst_50375)){
var statearr_50409_50468 = state_50393__$1;
(statearr_50409_50468[(1)] = (32));

} else {
var statearr_50410_50469 = state_50393__$1;
(statearr_50410_50469[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (32))){
var inst_50352 = (state_50393[(14)]);
var state_50393__$1 = state_50393;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50393__$1,(35),out,inst_50352);
} else {
if((state_val_50394 === (33))){
var inst_50343 = (state_50393[(12)]);
var inst_50321 = inst_50343;
var state_50393__$1 = (function (){var statearr_50411 = state_50393;
(statearr_50411[(7)] = inst_50321);

return statearr_50411;
})();
var statearr_50412_50470 = state_50393__$1;
(statearr_50412_50470[(2)] = null);

(statearr_50412_50470[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (13))){
var inst_50321 = (state_50393[(7)]);
var inst_50328 = inst_50321.cljs$lang$protocol_mask$partition0$;
var inst_50329 = (inst_50328 & (64));
var inst_50330 = inst_50321.cljs$core$ISeq$;
var inst_50331 = (inst_50329) || (inst_50330);
var state_50393__$1 = state_50393;
if(cljs.core.truth_(inst_50331)){
var statearr_50413_50471 = state_50393__$1;
(statearr_50413_50471[(1)] = (16));

} else {
var statearr_50414_50472 = state_50393__$1;
(statearr_50414_50472[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (22))){
var inst_50352 = (state_50393[(14)]);
var inst_50353 = (state_50393[(10)]);
var inst_50351 = (state_50393[(2)]);
var inst_50352__$1 = cljs.core.nth.call(null,inst_50351,(0),null);
var inst_50353__$1 = cljs.core.nth.call(null,inst_50351,(1),null);
var inst_50354 = (inst_50352__$1 == null);
var inst_50355 = cljs.core._EQ_.call(null,inst_50353__$1,change);
var inst_50356 = (inst_50354) || (inst_50355);
var state_50393__$1 = (function (){var statearr_50415 = state_50393;
(statearr_50415[(14)] = inst_50352__$1);

(statearr_50415[(10)] = inst_50353__$1);

return statearr_50415;
})();
if(cljs.core.truth_(inst_50356)){
var statearr_50416_50473 = state_50393__$1;
(statearr_50416_50473[(1)] = (23));

} else {
var statearr_50417_50474 = state_50393__$1;
(statearr_50417_50474[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (36))){
var inst_50343 = (state_50393[(12)]);
var inst_50321 = inst_50343;
var state_50393__$1 = (function (){var statearr_50418 = state_50393;
(statearr_50418[(7)] = inst_50321);

return statearr_50418;
})();
var statearr_50419_50475 = state_50393__$1;
(statearr_50419_50475[(2)] = null);

(statearr_50419_50475[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (29))){
var inst_50367 = (state_50393[(9)]);
var state_50393__$1 = state_50393;
var statearr_50420_50476 = state_50393__$1;
(statearr_50420_50476[(2)] = inst_50367);

(statearr_50420_50476[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (6))){
var state_50393__$1 = state_50393;
var statearr_50421_50477 = state_50393__$1;
(statearr_50421_50477[(2)] = false);

(statearr_50421_50477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (28))){
var inst_50363 = (state_50393[(2)]);
var inst_50364 = calc_state.call(null);
var inst_50321 = inst_50364;
var state_50393__$1 = (function (){var statearr_50422 = state_50393;
(statearr_50422[(15)] = inst_50363);

(statearr_50422[(7)] = inst_50321);

return statearr_50422;
})();
var statearr_50423_50478 = state_50393__$1;
(statearr_50423_50478[(2)] = null);

(statearr_50423_50478[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (25))){
var inst_50389 = (state_50393[(2)]);
var state_50393__$1 = state_50393;
var statearr_50424_50479 = state_50393__$1;
(statearr_50424_50479[(2)] = inst_50389);

(statearr_50424_50479[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (34))){
var inst_50387 = (state_50393[(2)]);
var state_50393__$1 = state_50393;
var statearr_50425_50480 = state_50393__$1;
(statearr_50425_50480[(2)] = inst_50387);

(statearr_50425_50480[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (17))){
var state_50393__$1 = state_50393;
var statearr_50426_50481 = state_50393__$1;
(statearr_50426_50481[(2)] = false);

(statearr_50426_50481[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (3))){
var state_50393__$1 = state_50393;
var statearr_50427_50482 = state_50393__$1;
(statearr_50427_50482[(2)] = false);

(statearr_50427_50482[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (12))){
var inst_50391 = (state_50393[(2)]);
var state_50393__$1 = state_50393;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50393__$1,inst_50391);
} else {
if((state_val_50394 === (2))){
var inst_50297 = (state_50393[(8)]);
var inst_50302 = inst_50297.cljs$lang$protocol_mask$partition0$;
var inst_50303 = (inst_50302 & (64));
var inst_50304 = inst_50297.cljs$core$ISeq$;
var inst_50305 = (inst_50303) || (inst_50304);
var state_50393__$1 = state_50393;
if(cljs.core.truth_(inst_50305)){
var statearr_50428_50483 = state_50393__$1;
(statearr_50428_50483[(1)] = (5));

} else {
var statearr_50429_50484 = state_50393__$1;
(statearr_50429_50484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (23))){
var inst_50352 = (state_50393[(14)]);
var inst_50358 = (inst_50352 == null);
var state_50393__$1 = state_50393;
if(cljs.core.truth_(inst_50358)){
var statearr_50430_50485 = state_50393__$1;
(statearr_50430_50485[(1)] = (26));

} else {
var statearr_50431_50486 = state_50393__$1;
(statearr_50431_50486[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (35))){
var inst_50378 = (state_50393[(2)]);
var state_50393__$1 = state_50393;
if(cljs.core.truth_(inst_50378)){
var statearr_50432_50487 = state_50393__$1;
(statearr_50432_50487[(1)] = (36));

} else {
var statearr_50433_50488 = state_50393__$1;
(statearr_50433_50488[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (19))){
var inst_50321 = (state_50393[(7)]);
var inst_50340 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50321);
var state_50393__$1 = state_50393;
var statearr_50434_50489 = state_50393__$1;
(statearr_50434_50489[(2)] = inst_50340);

(statearr_50434_50489[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (11))){
var inst_50321 = (state_50393[(7)]);
var inst_50325 = (inst_50321 == null);
var inst_50326 = cljs.core.not.call(null,inst_50325);
var state_50393__$1 = state_50393;
if(inst_50326){
var statearr_50435_50490 = state_50393__$1;
(statearr_50435_50490[(1)] = (13));

} else {
var statearr_50436_50491 = state_50393__$1;
(statearr_50436_50491[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (9))){
var inst_50297 = (state_50393[(8)]);
var state_50393__$1 = state_50393;
var statearr_50437_50492 = state_50393__$1;
(statearr_50437_50492[(2)] = inst_50297);

(statearr_50437_50492[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (5))){
var state_50393__$1 = state_50393;
var statearr_50438_50493 = state_50393__$1;
(statearr_50438_50493[(2)] = true);

(statearr_50438_50493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (14))){
var state_50393__$1 = state_50393;
var statearr_50439_50494 = state_50393__$1;
(statearr_50439_50494[(2)] = false);

(statearr_50439_50494[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (26))){
var inst_50353 = (state_50393[(10)]);
var inst_50360 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_50353);
var state_50393__$1 = state_50393;
var statearr_50440_50495 = state_50393__$1;
(statearr_50440_50495[(2)] = inst_50360);

(statearr_50440_50495[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (16))){
var state_50393__$1 = state_50393;
var statearr_50441_50496 = state_50393__$1;
(statearr_50441_50496[(2)] = true);

(statearr_50441_50496[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (38))){
var inst_50383 = (state_50393[(2)]);
var state_50393__$1 = state_50393;
var statearr_50442_50497 = state_50393__$1;
(statearr_50442_50497[(2)] = inst_50383);

(statearr_50442_50497[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (30))){
var inst_50353 = (state_50393[(10)]);
var inst_50344 = (state_50393[(11)]);
var inst_50345 = (state_50393[(13)]);
var inst_50370 = cljs.core.empty_QMARK_.call(null,inst_50344);
var inst_50371 = inst_50345.call(null,inst_50353);
var inst_50372 = cljs.core.not.call(null,inst_50371);
var inst_50373 = (inst_50370) && (inst_50372);
var state_50393__$1 = state_50393;
var statearr_50443_50498 = state_50393__$1;
(statearr_50443_50498[(2)] = inst_50373);

(statearr_50443_50498[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (10))){
var inst_50297 = (state_50393[(8)]);
var inst_50317 = (state_50393[(2)]);
var inst_50318 = cljs.core.get.call(null,inst_50317,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_50319 = cljs.core.get.call(null,inst_50317,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_50320 = cljs.core.get.call(null,inst_50317,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_50321 = inst_50297;
var state_50393__$1 = (function (){var statearr_50444 = state_50393;
(statearr_50444[(16)] = inst_50319);

(statearr_50444[(7)] = inst_50321);

(statearr_50444[(17)] = inst_50318);

(statearr_50444[(18)] = inst_50320);

return statearr_50444;
})();
var statearr_50445_50499 = state_50393__$1;
(statearr_50445_50499[(2)] = null);

(statearr_50445_50499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (18))){
var inst_50335 = (state_50393[(2)]);
var state_50393__$1 = state_50393;
var statearr_50446_50500 = state_50393__$1;
(statearr_50446_50500[(2)] = inst_50335);

(statearr_50446_50500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (37))){
var state_50393__$1 = state_50393;
var statearr_50447_50501 = state_50393__$1;
(statearr_50447_50501[(2)] = null);

(statearr_50447_50501[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50394 === (8))){
var inst_50297 = (state_50393[(8)]);
var inst_50314 = cljs.core.apply.call(null,cljs.core.hash_map,inst_50297);
var state_50393__$1 = state_50393;
var statearr_50448_50502 = state_50393__$1;
(statearr_50448_50502[(2)] = inst_50314);

(statearr_50448_50502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48693__auto___50456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__48581__auto__,c__48693__auto___50456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__48582__auto__ = null;
var cljs$core$async$mix_$_state_machine__48582__auto____0 = (function (){
var statearr_50452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50452[(0)] = cljs$core$async$mix_$_state_machine__48582__auto__);

(statearr_50452[(1)] = (1));

return statearr_50452;
});
var cljs$core$async$mix_$_state_machine__48582__auto____1 = (function (state_50393){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_50393);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e50453){if((e50453 instanceof Object)){
var ex__48585__auto__ = e50453;
var statearr_50454_50503 = state_50393;
(statearr_50454_50503[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50504 = state_50393;
state_50393 = G__50504;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__48582__auto__ = function(state_50393){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__48582__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__48582__auto____1.call(this,state_50393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__48582__auto____0;
cljs$core$async$mix_$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__48582__auto____1;
return cljs$core$async$mix_$_state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto___50456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__48695__auto__ = (function (){var statearr_50455 = f__48694__auto__.call(null);
(statearr_50455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto___50456);

return statearr_50455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto___50456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__45197__auto__ = (((p == null))?null:p);
var m__45198__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__45197__auto__)]);
if(!((m__45198__auto__ == null))){
return m__45198__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__45198__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__45198__auto____$1 == null))){
return m__45198__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__45197__auto__ = (((p == null))?null:p);
var m__45198__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__45197__auto__)]);
if(!((m__45198__auto__ == null))){
return m__45198__auto__.call(null,p,v,ch);
} else {
var m__45198__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__45198__auto____$1 == null))){
return m__45198__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args50505 = [];
var len__45609__auto___50508 = arguments.length;
var i__45610__auto___50509 = (0);
while(true){
if((i__45610__auto___50509 < len__45609__auto___50508)){
args50505.push((arguments[i__45610__auto___50509]));

var G__50510 = (i__45610__auto___50509 + (1));
i__45610__auto___50509 = G__50510;
continue;
} else {
}
break;
}

var G__50507 = args50505.length;
switch (G__50507) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50505.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__45197__auto__ = (((p == null))?null:p);
var m__45198__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__45197__auto__)]);
if(!((m__45198__auto__ == null))){
return m__45198__auto__.call(null,p);
} else {
var m__45198__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__45198__auto____$1 == null))){
return m__45198__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__45197__auto__ = (((p == null))?null:p);
var m__45198__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__45197__auto__)]);
if(!((m__45198__auto__ == null))){
return m__45198__auto__.call(null,p,v);
} else {
var m__45198__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__45198__auto____$1 == null))){
return m__45198__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args50513 = [];
var len__45609__auto___50638 = arguments.length;
var i__45610__auto___50639 = (0);
while(true){
if((i__45610__auto___50639 < len__45609__auto___50638)){
args50513.push((arguments[i__45610__auto___50639]));

var G__50640 = (i__45610__auto___50639 + (1));
i__45610__auto___50639 = G__50640;
continue;
} else {
}
break;
}

var G__50515 = args50513.length;
switch (G__50515) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50513.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__44534__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__44534__auto__)){
return or__44534__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__44534__auto__,mults){
return (function (p1__50512_SHARP_){
if(cljs.core.truth_(p1__50512_SHARP_.call(null,topic))){
return p1__50512_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__50512_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__44534__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async50516 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50516 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta50517){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta50517 = meta50517;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_50518,meta50517__$1){
var self__ = this;
var _50518__$1 = this;
return (new cljs.core.async.t_cljs$core$async50516(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta50517__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50516.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_50518){
var self__ = this;
var _50518__$1 = this;
return self__.meta50517;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50516.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async50516.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50516.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async50516.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50516.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50516.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50516.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50516.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta50517","meta50517",-309455092,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async50516.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50516.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50516";

cljs.core.async.t_cljs$core$async50516.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__45140__auto__,writer__45141__auto__,opt__45142__auto__){
return cljs.core._write.call(null,writer__45141__auto__,"cljs.core.async/t_cljs$core$async50516");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async50516 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async50516(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50517){
return (new cljs.core.async.t_cljs$core$async50516(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta50517));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async50516(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__48693__auto___50642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto___50642,mults,ensure_mult,p){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto___50642,mults,ensure_mult,p){
return (function (state_50590){
var state_val_50591 = (state_50590[(1)]);
if((state_val_50591 === (7))){
var inst_50586 = (state_50590[(2)]);
var state_50590__$1 = state_50590;
var statearr_50592_50643 = state_50590__$1;
(statearr_50592_50643[(2)] = inst_50586);

(statearr_50592_50643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50591 === (20))){
var state_50590__$1 = state_50590;
var statearr_50593_50644 = state_50590__$1;
(statearr_50593_50644[(2)] = null);

(statearr_50593_50644[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50591 === (1))){
var state_50590__$1 = state_50590;
var statearr_50594_50645 = state_50590__$1;
(statearr_50594_50645[(2)] = null);

(statearr_50594_50645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50591 === (24))){
var inst_50569 = (state_50590[(7)]);
var inst_50578 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_50569);
var state_50590__$1 = state_50590;
var statearr_50595_50646 = state_50590__$1;
(statearr_50595_50646[(2)] = inst_50578);

(statearr_50595_50646[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50591 === (4))){
var inst_50521 = (state_50590[(8)]);
var inst_50521__$1 = (state_50590[(2)]);
var inst_50522 = (inst_50521__$1 == null);
var state_50590__$1 = (function (){var statearr_50596 = state_50590;
(statearr_50596[(8)] = inst_50521__$1);

return statearr_50596;
})();
if(cljs.core.truth_(inst_50522)){
var statearr_50597_50647 = state_50590__$1;
(statearr_50597_50647[(1)] = (5));

} else {
var statearr_50598_50648 = state_50590__$1;
(statearr_50598_50648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50591 === (15))){
var inst_50563 = (state_50590[(2)]);
var state_50590__$1 = state_50590;
var statearr_50599_50649 = state_50590__$1;
(statearr_50599_50649[(2)] = inst_50563);

(statearr_50599_50649[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50591 === (21))){
var inst_50583 = (state_50590[(2)]);
var state_50590__$1 = (function (){var statearr_50600 = state_50590;
(statearr_50600[(9)] = inst_50583);

return statearr_50600;
})();
var statearr_50601_50650 = state_50590__$1;
(statearr_50601_50650[(2)] = null);

(statearr_50601_50650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50591 === (13))){
var inst_50545 = (state_50590[(10)]);
var inst_50547 = cljs.core.chunked_seq_QMARK_.call(null,inst_50545);
var state_50590__$1 = state_50590;
if(inst_50547){
var statearr_50602_50651 = state_50590__$1;
(statearr_50602_50651[(1)] = (16));

} else {
var statearr_50603_50652 = state_50590__$1;
(statearr_50603_50652[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50591 === (22))){
var inst_50575 = (state_50590[(2)]);
var state_50590__$1 = state_50590;
if(cljs.core.truth_(inst_50575)){
var statearr_50604_50653 = state_50590__$1;
(statearr_50604_50653[(1)] = (23));

} else {
var statearr_50605_50654 = state_50590__$1;
(statearr_50605_50654[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50591 === (6))){
var inst_50571 = (state_50590[(11)]);
var inst_50569 = (state_50590[(7)]);
var inst_50521 = (state_50590[(8)]);
var inst_50569__$1 = topic_fn.call(null,inst_50521);
var inst_50570 = cljs.core.deref.call(null,mults);
var inst_50571__$1 = cljs.core.get.call(null,inst_50570,inst_50569__$1);
var state_50590__$1 = (function (){var statearr_50606 = state_50590;
(statearr_50606[(11)] = inst_50571__$1);

(statearr_50606[(7)] = inst_50569__$1);

return statearr_50606;
})();
if(cljs.core.truth_(inst_50571__$1)){
var statearr_50607_50655 = state_50590__$1;
(statearr_50607_50655[(1)] = (19));

} else {
var statearr_50608_50656 = state_50590__$1;
(statearr_50608_50656[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50591 === (25))){
var inst_50580 = (state_50590[(2)]);
var state_50590__$1 = state_50590;
var statearr_50609_50657 = state_50590__$1;
(statearr_50609_50657[(2)] = inst_50580);

(statearr_50609_50657[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50591 === (17))){
var inst_50545 = (state_50590[(10)]);
var inst_50554 = cljs.core.first.call(null,inst_50545);
var inst_50555 = cljs.core.async.muxch_STAR_.call(null,inst_50554);
var inst_50556 = cljs.core.async.close_BANG_.call(null,inst_50555);
var inst_50557 = cljs.core.next.call(null,inst_50545);
var inst_50531 = inst_50557;
var inst_50532 = null;
var inst_50533 = (0);
var inst_50534 = (0);
var state_50590__$1 = (function (){var statearr_50610 = state_50590;
(statearr_50610[(12)] = inst_50556);

(statearr_50610[(13)] = inst_50531);

(statearr_50610[(14)] = inst_50534);

(statearr_50610[(15)] = inst_50532);

(statearr_50610[(16)] = inst_50533);

return statearr_50610;
})();
var statearr_50611_50658 = state_50590__$1;
(statearr_50611_50658[(2)] = null);

(statearr_50611_50658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50591 === (3))){
var inst_50588 = (state_50590[(2)]);
var state_50590__$1 = state_50590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50590__$1,inst_50588);
} else {
if((state_val_50591 === (12))){
var inst_50565 = (state_50590[(2)]);
var state_50590__$1 = state_50590;
var statearr_50612_50659 = state_50590__$1;
(statearr_50612_50659[(2)] = inst_50565);

(statearr_50612_50659[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50591 === (2))){
var state_50590__$1 = state_50590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50590__$1,(4),ch);
} else {
if((state_val_50591 === (23))){
var state_50590__$1 = state_50590;
var statearr_50613_50660 = state_50590__$1;
(statearr_50613_50660[(2)] = null);

(statearr_50613_50660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50591 === (19))){
var inst_50571 = (state_50590[(11)]);
var inst_50521 = (state_50590[(8)]);
var inst_50573 = cljs.core.async.muxch_STAR_.call(null,inst_50571);
var state_50590__$1 = state_50590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50590__$1,(22),inst_50573,inst_50521);
} else {
if((state_val_50591 === (11))){
var inst_50531 = (state_50590[(13)]);
var inst_50545 = (state_50590[(10)]);
var inst_50545__$1 = cljs.core.seq.call(null,inst_50531);
var state_50590__$1 = (function (){var statearr_50614 = state_50590;
(statearr_50614[(10)] = inst_50545__$1);

return statearr_50614;
})();
if(inst_50545__$1){
var statearr_50615_50661 = state_50590__$1;
(statearr_50615_50661[(1)] = (13));

} else {
var statearr_50616_50662 = state_50590__$1;
(statearr_50616_50662[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50591 === (9))){
var inst_50567 = (state_50590[(2)]);
var state_50590__$1 = state_50590;
var statearr_50617_50663 = state_50590__$1;
(statearr_50617_50663[(2)] = inst_50567);

(statearr_50617_50663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50591 === (5))){
var inst_50528 = cljs.core.deref.call(null,mults);
var inst_50529 = cljs.core.vals.call(null,inst_50528);
var inst_50530 = cljs.core.seq.call(null,inst_50529);
var inst_50531 = inst_50530;
var inst_50532 = null;
var inst_50533 = (0);
var inst_50534 = (0);
var state_50590__$1 = (function (){var statearr_50618 = state_50590;
(statearr_50618[(13)] = inst_50531);

(statearr_50618[(14)] = inst_50534);

(statearr_50618[(15)] = inst_50532);

(statearr_50618[(16)] = inst_50533);

return statearr_50618;
})();
var statearr_50619_50664 = state_50590__$1;
(statearr_50619_50664[(2)] = null);

(statearr_50619_50664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50591 === (14))){
var state_50590__$1 = state_50590;
var statearr_50623_50665 = state_50590__$1;
(statearr_50623_50665[(2)] = null);

(statearr_50623_50665[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50591 === (16))){
var inst_50545 = (state_50590[(10)]);
var inst_50549 = cljs.core.chunk_first.call(null,inst_50545);
var inst_50550 = cljs.core.chunk_rest.call(null,inst_50545);
var inst_50551 = cljs.core.count.call(null,inst_50549);
var inst_50531 = inst_50550;
var inst_50532 = inst_50549;
var inst_50533 = inst_50551;
var inst_50534 = (0);
var state_50590__$1 = (function (){var statearr_50624 = state_50590;
(statearr_50624[(13)] = inst_50531);

(statearr_50624[(14)] = inst_50534);

(statearr_50624[(15)] = inst_50532);

(statearr_50624[(16)] = inst_50533);

return statearr_50624;
})();
var statearr_50625_50666 = state_50590__$1;
(statearr_50625_50666[(2)] = null);

(statearr_50625_50666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50591 === (10))){
var inst_50531 = (state_50590[(13)]);
var inst_50534 = (state_50590[(14)]);
var inst_50532 = (state_50590[(15)]);
var inst_50533 = (state_50590[(16)]);
var inst_50539 = cljs.core._nth.call(null,inst_50532,inst_50534);
var inst_50540 = cljs.core.async.muxch_STAR_.call(null,inst_50539);
var inst_50541 = cljs.core.async.close_BANG_.call(null,inst_50540);
var inst_50542 = (inst_50534 + (1));
var tmp50620 = inst_50531;
var tmp50621 = inst_50532;
var tmp50622 = inst_50533;
var inst_50531__$1 = tmp50620;
var inst_50532__$1 = tmp50621;
var inst_50533__$1 = tmp50622;
var inst_50534__$1 = inst_50542;
var state_50590__$1 = (function (){var statearr_50626 = state_50590;
(statearr_50626[(17)] = inst_50541);

(statearr_50626[(13)] = inst_50531__$1);

(statearr_50626[(14)] = inst_50534__$1);

(statearr_50626[(15)] = inst_50532__$1);

(statearr_50626[(16)] = inst_50533__$1);

return statearr_50626;
})();
var statearr_50627_50667 = state_50590__$1;
(statearr_50627_50667[(2)] = null);

(statearr_50627_50667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50591 === (18))){
var inst_50560 = (state_50590[(2)]);
var state_50590__$1 = state_50590;
var statearr_50628_50668 = state_50590__$1;
(statearr_50628_50668[(2)] = inst_50560);

(statearr_50628_50668[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50591 === (8))){
var inst_50534 = (state_50590[(14)]);
var inst_50533 = (state_50590[(16)]);
var inst_50536 = (inst_50534 < inst_50533);
var inst_50537 = inst_50536;
var state_50590__$1 = state_50590;
if(cljs.core.truth_(inst_50537)){
var statearr_50629_50669 = state_50590__$1;
(statearr_50629_50669[(1)] = (10));

} else {
var statearr_50630_50670 = state_50590__$1;
(statearr_50630_50670[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48693__auto___50642,mults,ensure_mult,p))
;
return ((function (switch__48581__auto__,c__48693__auto___50642,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__48582__auto__ = null;
var cljs$core$async$state_machine__48582__auto____0 = (function (){
var statearr_50634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50634[(0)] = cljs$core$async$state_machine__48582__auto__);

(statearr_50634[(1)] = (1));

return statearr_50634;
});
var cljs$core$async$state_machine__48582__auto____1 = (function (state_50590){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_50590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e50635){if((e50635 instanceof Object)){
var ex__48585__auto__ = e50635;
var statearr_50636_50671 = state_50590;
(statearr_50636_50671[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50635;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50672 = state_50590;
state_50590 = G__50672;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
cljs$core$async$state_machine__48582__auto__ = function(state_50590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48582__auto____1.call(this,state_50590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48582__auto____0;
cljs$core$async$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48582__auto____1;
return cljs$core$async$state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto___50642,mults,ensure_mult,p))
})();
var state__48695__auto__ = (function (){var statearr_50637 = f__48694__auto__.call(null);
(statearr_50637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto___50642);

return statearr_50637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto___50642,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args50673 = [];
var len__45609__auto___50676 = arguments.length;
var i__45610__auto___50677 = (0);
while(true){
if((i__45610__auto___50677 < len__45609__auto___50676)){
args50673.push((arguments[i__45610__auto___50677]));

var G__50678 = (i__45610__auto___50677 + (1));
i__45610__auto___50677 = G__50678;
continue;
} else {
}
break;
}

var G__50675 = args50673.length;
switch (G__50675) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50673.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args50680 = [];
var len__45609__auto___50683 = arguments.length;
var i__45610__auto___50684 = (0);
while(true){
if((i__45610__auto___50684 < len__45609__auto___50683)){
args50680.push((arguments[i__45610__auto___50684]));

var G__50685 = (i__45610__auto___50684 + (1));
i__45610__auto___50684 = G__50685;
continue;
} else {
}
break;
}

var G__50682 = args50680.length;
switch (G__50682) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50680.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args50687 = [];
var len__45609__auto___50758 = arguments.length;
var i__45610__auto___50759 = (0);
while(true){
if((i__45610__auto___50759 < len__45609__auto___50758)){
args50687.push((arguments[i__45610__auto___50759]));

var G__50760 = (i__45610__auto___50759 + (1));
i__45610__auto___50759 = G__50760;
continue;
} else {
}
break;
}

var G__50689 = args50687.length;
switch (G__50689) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50687.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__48693__auto___50762 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto___50762,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto___50762,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_50728){
var state_val_50729 = (state_50728[(1)]);
if((state_val_50729 === (7))){
var state_50728__$1 = state_50728;
var statearr_50730_50763 = state_50728__$1;
(statearr_50730_50763[(2)] = null);

(statearr_50730_50763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50729 === (1))){
var state_50728__$1 = state_50728;
var statearr_50731_50764 = state_50728__$1;
(statearr_50731_50764[(2)] = null);

(statearr_50731_50764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50729 === (4))){
var inst_50692 = (state_50728[(7)]);
var inst_50694 = (inst_50692 < cnt);
var state_50728__$1 = state_50728;
if(cljs.core.truth_(inst_50694)){
var statearr_50732_50765 = state_50728__$1;
(statearr_50732_50765[(1)] = (6));

} else {
var statearr_50733_50766 = state_50728__$1;
(statearr_50733_50766[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50729 === (15))){
var inst_50724 = (state_50728[(2)]);
var state_50728__$1 = state_50728;
var statearr_50734_50767 = state_50728__$1;
(statearr_50734_50767[(2)] = inst_50724);

(statearr_50734_50767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50729 === (13))){
var inst_50717 = cljs.core.async.close_BANG_.call(null,out);
var state_50728__$1 = state_50728;
var statearr_50735_50768 = state_50728__$1;
(statearr_50735_50768[(2)] = inst_50717);

(statearr_50735_50768[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50729 === (6))){
var state_50728__$1 = state_50728;
var statearr_50736_50769 = state_50728__$1;
(statearr_50736_50769[(2)] = null);

(statearr_50736_50769[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50729 === (3))){
var inst_50726 = (state_50728[(2)]);
var state_50728__$1 = state_50728;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50728__$1,inst_50726);
} else {
if((state_val_50729 === (12))){
var inst_50714 = (state_50728[(8)]);
var inst_50714__$1 = (state_50728[(2)]);
var inst_50715 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_50714__$1);
var state_50728__$1 = (function (){var statearr_50737 = state_50728;
(statearr_50737[(8)] = inst_50714__$1);

return statearr_50737;
})();
if(cljs.core.truth_(inst_50715)){
var statearr_50738_50770 = state_50728__$1;
(statearr_50738_50770[(1)] = (13));

} else {
var statearr_50739_50771 = state_50728__$1;
(statearr_50739_50771[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50729 === (2))){
var inst_50691 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_50692 = (0);
var state_50728__$1 = (function (){var statearr_50740 = state_50728;
(statearr_50740[(7)] = inst_50692);

(statearr_50740[(9)] = inst_50691);

return statearr_50740;
})();
var statearr_50741_50772 = state_50728__$1;
(statearr_50741_50772[(2)] = null);

(statearr_50741_50772[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50729 === (11))){
var inst_50692 = (state_50728[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_50728,(10),Object,null,(9));
var inst_50701 = chs__$1.call(null,inst_50692);
var inst_50702 = done.call(null,inst_50692);
var inst_50703 = cljs.core.async.take_BANG_.call(null,inst_50701,inst_50702);
var state_50728__$1 = state_50728;
var statearr_50742_50773 = state_50728__$1;
(statearr_50742_50773[(2)] = inst_50703);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50728__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50729 === (9))){
var inst_50692 = (state_50728[(7)]);
var inst_50705 = (state_50728[(2)]);
var inst_50706 = (inst_50692 + (1));
var inst_50692__$1 = inst_50706;
var state_50728__$1 = (function (){var statearr_50743 = state_50728;
(statearr_50743[(7)] = inst_50692__$1);

(statearr_50743[(10)] = inst_50705);

return statearr_50743;
})();
var statearr_50744_50774 = state_50728__$1;
(statearr_50744_50774[(2)] = null);

(statearr_50744_50774[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50729 === (5))){
var inst_50712 = (state_50728[(2)]);
var state_50728__$1 = (function (){var statearr_50745 = state_50728;
(statearr_50745[(11)] = inst_50712);

return statearr_50745;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50728__$1,(12),dchan);
} else {
if((state_val_50729 === (14))){
var inst_50714 = (state_50728[(8)]);
var inst_50719 = cljs.core.apply.call(null,f,inst_50714);
var state_50728__$1 = state_50728;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50728__$1,(16),out,inst_50719);
} else {
if((state_val_50729 === (16))){
var inst_50721 = (state_50728[(2)]);
var state_50728__$1 = (function (){var statearr_50746 = state_50728;
(statearr_50746[(12)] = inst_50721);

return statearr_50746;
})();
var statearr_50747_50775 = state_50728__$1;
(statearr_50747_50775[(2)] = null);

(statearr_50747_50775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50729 === (10))){
var inst_50696 = (state_50728[(2)]);
var inst_50697 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_50728__$1 = (function (){var statearr_50748 = state_50728;
(statearr_50748[(13)] = inst_50696);

return statearr_50748;
})();
var statearr_50749_50776 = state_50728__$1;
(statearr_50749_50776[(2)] = inst_50697);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50728__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50729 === (8))){
var inst_50710 = (state_50728[(2)]);
var state_50728__$1 = state_50728;
var statearr_50750_50777 = state_50728__$1;
(statearr_50750_50777[(2)] = inst_50710);

(statearr_50750_50777[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48693__auto___50762,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__48581__auto__,c__48693__auto___50762,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__48582__auto__ = null;
var cljs$core$async$state_machine__48582__auto____0 = (function (){
var statearr_50754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50754[(0)] = cljs$core$async$state_machine__48582__auto__);

(statearr_50754[(1)] = (1));

return statearr_50754;
});
var cljs$core$async$state_machine__48582__auto____1 = (function (state_50728){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_50728);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e50755){if((e50755 instanceof Object)){
var ex__48585__auto__ = e50755;
var statearr_50756_50778 = state_50728;
(statearr_50756_50778[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50728);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50779 = state_50728;
state_50728 = G__50779;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
cljs$core$async$state_machine__48582__auto__ = function(state_50728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48582__auto____1.call(this,state_50728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48582__auto____0;
cljs$core$async$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48582__auto____1;
return cljs$core$async$state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto___50762,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__48695__auto__ = (function (){var statearr_50757 = f__48694__auto__.call(null);
(statearr_50757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto___50762);

return statearr_50757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto___50762,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args50781 = [];
var len__45609__auto___50839 = arguments.length;
var i__45610__auto___50840 = (0);
while(true){
if((i__45610__auto___50840 < len__45609__auto___50839)){
args50781.push((arguments[i__45610__auto___50840]));

var G__50841 = (i__45610__auto___50840 + (1));
i__45610__auto___50840 = G__50841;
continue;
} else {
}
break;
}

var G__50783 = args50781.length;
switch (G__50783) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50781.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48693__auto___50843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto___50843,out){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto___50843,out){
return (function (state_50815){
var state_val_50816 = (state_50815[(1)]);
if((state_val_50816 === (7))){
var inst_50795 = (state_50815[(7)]);
var inst_50794 = (state_50815[(8)]);
var inst_50794__$1 = (state_50815[(2)]);
var inst_50795__$1 = cljs.core.nth.call(null,inst_50794__$1,(0),null);
var inst_50796 = cljs.core.nth.call(null,inst_50794__$1,(1),null);
var inst_50797 = (inst_50795__$1 == null);
var state_50815__$1 = (function (){var statearr_50817 = state_50815;
(statearr_50817[(9)] = inst_50796);

(statearr_50817[(7)] = inst_50795__$1);

(statearr_50817[(8)] = inst_50794__$1);

return statearr_50817;
})();
if(cljs.core.truth_(inst_50797)){
var statearr_50818_50844 = state_50815__$1;
(statearr_50818_50844[(1)] = (8));

} else {
var statearr_50819_50845 = state_50815__$1;
(statearr_50819_50845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50816 === (1))){
var inst_50784 = cljs.core.vec.call(null,chs);
var inst_50785 = inst_50784;
var state_50815__$1 = (function (){var statearr_50820 = state_50815;
(statearr_50820[(10)] = inst_50785);

return statearr_50820;
})();
var statearr_50821_50846 = state_50815__$1;
(statearr_50821_50846[(2)] = null);

(statearr_50821_50846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50816 === (4))){
var inst_50785 = (state_50815[(10)]);
var state_50815__$1 = state_50815;
return cljs.core.async.ioc_alts_BANG_.call(null,state_50815__$1,(7),inst_50785);
} else {
if((state_val_50816 === (6))){
var inst_50811 = (state_50815[(2)]);
var state_50815__$1 = state_50815;
var statearr_50822_50847 = state_50815__$1;
(statearr_50822_50847[(2)] = inst_50811);

(statearr_50822_50847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50816 === (3))){
var inst_50813 = (state_50815[(2)]);
var state_50815__$1 = state_50815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50815__$1,inst_50813);
} else {
if((state_val_50816 === (2))){
var inst_50785 = (state_50815[(10)]);
var inst_50787 = cljs.core.count.call(null,inst_50785);
var inst_50788 = (inst_50787 > (0));
var state_50815__$1 = state_50815;
if(cljs.core.truth_(inst_50788)){
var statearr_50824_50848 = state_50815__$1;
(statearr_50824_50848[(1)] = (4));

} else {
var statearr_50825_50849 = state_50815__$1;
(statearr_50825_50849[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50816 === (11))){
var inst_50785 = (state_50815[(10)]);
var inst_50804 = (state_50815[(2)]);
var tmp50823 = inst_50785;
var inst_50785__$1 = tmp50823;
var state_50815__$1 = (function (){var statearr_50826 = state_50815;
(statearr_50826[(10)] = inst_50785__$1);

(statearr_50826[(11)] = inst_50804);

return statearr_50826;
})();
var statearr_50827_50850 = state_50815__$1;
(statearr_50827_50850[(2)] = null);

(statearr_50827_50850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50816 === (9))){
var inst_50795 = (state_50815[(7)]);
var state_50815__$1 = state_50815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50815__$1,(11),out,inst_50795);
} else {
if((state_val_50816 === (5))){
var inst_50809 = cljs.core.async.close_BANG_.call(null,out);
var state_50815__$1 = state_50815;
var statearr_50828_50851 = state_50815__$1;
(statearr_50828_50851[(2)] = inst_50809);

(statearr_50828_50851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50816 === (10))){
var inst_50807 = (state_50815[(2)]);
var state_50815__$1 = state_50815;
var statearr_50829_50852 = state_50815__$1;
(statearr_50829_50852[(2)] = inst_50807);

(statearr_50829_50852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50816 === (8))){
var inst_50796 = (state_50815[(9)]);
var inst_50785 = (state_50815[(10)]);
var inst_50795 = (state_50815[(7)]);
var inst_50794 = (state_50815[(8)]);
var inst_50799 = (function (){var cs = inst_50785;
var vec__50790 = inst_50794;
var v = inst_50795;
var c = inst_50796;
return ((function (cs,vec__50790,v,c,inst_50796,inst_50785,inst_50795,inst_50794,state_val_50816,c__48693__auto___50843,out){
return (function (p1__50780_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__50780_SHARP_);
});
;})(cs,vec__50790,v,c,inst_50796,inst_50785,inst_50795,inst_50794,state_val_50816,c__48693__auto___50843,out))
})();
var inst_50800 = cljs.core.filterv.call(null,inst_50799,inst_50785);
var inst_50785__$1 = inst_50800;
var state_50815__$1 = (function (){var statearr_50830 = state_50815;
(statearr_50830[(10)] = inst_50785__$1);

return statearr_50830;
})();
var statearr_50831_50853 = state_50815__$1;
(statearr_50831_50853[(2)] = null);

(statearr_50831_50853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__48693__auto___50843,out))
;
return ((function (switch__48581__auto__,c__48693__auto___50843,out){
return (function() {
var cljs$core$async$state_machine__48582__auto__ = null;
var cljs$core$async$state_machine__48582__auto____0 = (function (){
var statearr_50835 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50835[(0)] = cljs$core$async$state_machine__48582__auto__);

(statearr_50835[(1)] = (1));

return statearr_50835;
});
var cljs$core$async$state_machine__48582__auto____1 = (function (state_50815){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_50815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e50836){if((e50836 instanceof Object)){
var ex__48585__auto__ = e50836;
var statearr_50837_50854 = state_50815;
(statearr_50837_50854[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50855 = state_50815;
state_50815 = G__50855;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
cljs$core$async$state_machine__48582__auto__ = function(state_50815){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48582__auto____1.call(this,state_50815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48582__auto____0;
cljs$core$async$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48582__auto____1;
return cljs$core$async$state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto___50843,out))
})();
var state__48695__auto__ = (function (){var statearr_50838 = f__48694__auto__.call(null);
(statearr_50838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto___50843);

return statearr_50838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto___50843,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args50856 = [];
var len__45609__auto___50905 = arguments.length;
var i__45610__auto___50906 = (0);
while(true){
if((i__45610__auto___50906 < len__45609__auto___50905)){
args50856.push((arguments[i__45610__auto___50906]));

var G__50907 = (i__45610__auto___50906 + (1));
i__45610__auto___50906 = G__50907;
continue;
} else {
}
break;
}

var G__50858 = args50856.length;
switch (G__50858) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50856.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48693__auto___50909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto___50909,out){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto___50909,out){
return (function (state_50882){
var state_val_50883 = (state_50882[(1)]);
if((state_val_50883 === (7))){
var inst_50864 = (state_50882[(7)]);
var inst_50864__$1 = (state_50882[(2)]);
var inst_50865 = (inst_50864__$1 == null);
var inst_50866 = cljs.core.not.call(null,inst_50865);
var state_50882__$1 = (function (){var statearr_50884 = state_50882;
(statearr_50884[(7)] = inst_50864__$1);

return statearr_50884;
})();
if(inst_50866){
var statearr_50885_50910 = state_50882__$1;
(statearr_50885_50910[(1)] = (8));

} else {
var statearr_50886_50911 = state_50882__$1;
(statearr_50886_50911[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50883 === (1))){
var inst_50859 = (0);
var state_50882__$1 = (function (){var statearr_50887 = state_50882;
(statearr_50887[(8)] = inst_50859);

return statearr_50887;
})();
var statearr_50888_50912 = state_50882__$1;
(statearr_50888_50912[(2)] = null);

(statearr_50888_50912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50883 === (4))){
var state_50882__$1 = state_50882;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50882__$1,(7),ch);
} else {
if((state_val_50883 === (6))){
var inst_50877 = (state_50882[(2)]);
var state_50882__$1 = state_50882;
var statearr_50889_50913 = state_50882__$1;
(statearr_50889_50913[(2)] = inst_50877);

(statearr_50889_50913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50883 === (3))){
var inst_50879 = (state_50882[(2)]);
var inst_50880 = cljs.core.async.close_BANG_.call(null,out);
var state_50882__$1 = (function (){var statearr_50890 = state_50882;
(statearr_50890[(9)] = inst_50879);

return statearr_50890;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50882__$1,inst_50880);
} else {
if((state_val_50883 === (2))){
var inst_50859 = (state_50882[(8)]);
var inst_50861 = (inst_50859 < n);
var state_50882__$1 = state_50882;
if(cljs.core.truth_(inst_50861)){
var statearr_50891_50914 = state_50882__$1;
(statearr_50891_50914[(1)] = (4));

} else {
var statearr_50892_50915 = state_50882__$1;
(statearr_50892_50915[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50883 === (11))){
var inst_50859 = (state_50882[(8)]);
var inst_50869 = (state_50882[(2)]);
var inst_50870 = (inst_50859 + (1));
var inst_50859__$1 = inst_50870;
var state_50882__$1 = (function (){var statearr_50893 = state_50882;
(statearr_50893[(8)] = inst_50859__$1);

(statearr_50893[(10)] = inst_50869);

return statearr_50893;
})();
var statearr_50894_50916 = state_50882__$1;
(statearr_50894_50916[(2)] = null);

(statearr_50894_50916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50883 === (9))){
var state_50882__$1 = state_50882;
var statearr_50895_50917 = state_50882__$1;
(statearr_50895_50917[(2)] = null);

(statearr_50895_50917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50883 === (5))){
var state_50882__$1 = state_50882;
var statearr_50896_50918 = state_50882__$1;
(statearr_50896_50918[(2)] = null);

(statearr_50896_50918[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50883 === (10))){
var inst_50874 = (state_50882[(2)]);
var state_50882__$1 = state_50882;
var statearr_50897_50919 = state_50882__$1;
(statearr_50897_50919[(2)] = inst_50874);

(statearr_50897_50919[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50883 === (8))){
var inst_50864 = (state_50882[(7)]);
var state_50882__$1 = state_50882;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50882__$1,(11),out,inst_50864);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__48693__auto___50909,out))
;
return ((function (switch__48581__auto__,c__48693__auto___50909,out){
return (function() {
var cljs$core$async$state_machine__48582__auto__ = null;
var cljs$core$async$state_machine__48582__auto____0 = (function (){
var statearr_50901 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50901[(0)] = cljs$core$async$state_machine__48582__auto__);

(statearr_50901[(1)] = (1));

return statearr_50901;
});
var cljs$core$async$state_machine__48582__auto____1 = (function (state_50882){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_50882);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e50902){if((e50902 instanceof Object)){
var ex__48585__auto__ = e50902;
var statearr_50903_50920 = state_50882;
(statearr_50903_50920[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50882);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50921 = state_50882;
state_50882 = G__50921;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
cljs$core$async$state_machine__48582__auto__ = function(state_50882){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48582__auto____1.call(this,state_50882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48582__auto____0;
cljs$core$async$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48582__auto____1;
return cljs$core$async$state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto___50909,out))
})();
var state__48695__auto__ = (function (){var statearr_50904 = f__48694__auto__.call(null);
(statearr_50904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto___50909);

return statearr_50904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto___50909,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async50929 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50929 = (function (map_LT_,f,ch,meta50930){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta50930 = meta50930;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50931,meta50930__$1){
var self__ = this;
var _50931__$1 = this;
return (new cljs.core.async.t_cljs$core$async50929(self__.map_LT_,self__.f,self__.ch,meta50930__$1));
});

cljs.core.async.t_cljs$core$async50929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50931){
var self__ = this;
var _50931__$1 = this;
return self__.meta50930;
});

cljs.core.async.t_cljs$core$async50929.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async50929.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50929.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50929.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async50929.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async50932 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50932 = (function (map_LT_,f,ch,meta50930,_,fn1,meta50933){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta50930 = meta50930;
this._ = _;
this.fn1 = fn1;
this.meta50933 = meta50933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_50934,meta50933__$1){
var self__ = this;
var _50934__$1 = this;
return (new cljs.core.async.t_cljs$core$async50932(self__.map_LT_,self__.f,self__.ch,self__.meta50930,self__._,self__.fn1,meta50933__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async50932.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_50934){
var self__ = this;
var _50934__$1 = this;
return self__.meta50933;
});})(___$1))
;

cljs.core.async.t_cljs$core$async50932.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async50932.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async50932.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async50932.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__50922_SHARP_){
return f1.call(null,(((p1__50922_SHARP_ == null))?null:self__.f.call(null,p1__50922_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async50932.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50930","meta50930",-1404843757,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async50929","cljs.core.async/t_cljs$core$async50929",-63802248,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta50933","meta50933",189191123,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async50932.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50932.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50932";

cljs.core.async.t_cljs$core$async50932.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__45140__auto__,writer__45141__auto__,opt__45142__auto__){
return cljs.core._write.call(null,writer__45141__auto__,"cljs.core.async/t_cljs$core$async50932");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async50932 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50932(map_LT___$1,f__$1,ch__$1,meta50930__$1,___$2,fn1__$1,meta50933){
return (new cljs.core.async.t_cljs$core$async50932(map_LT___$1,f__$1,ch__$1,meta50930__$1,___$2,fn1__$1,meta50933));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async50932(self__.map_LT_,self__.f,self__.ch,self__.meta50930,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__44522__auto__ = ret;
if(cljs.core.truth_(and__44522__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__44522__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async50929.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async50929.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async50929.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50930","meta50930",-1404843757,null)], null);
});

cljs.core.async.t_cljs$core$async50929.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50929.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50929";

cljs.core.async.t_cljs$core$async50929.cljs$lang$ctorPrWriter = (function (this__45140__auto__,writer__45141__auto__,opt__45142__auto__){
return cljs.core._write.call(null,writer__45141__auto__,"cljs.core.async/t_cljs$core$async50929");
});

cljs.core.async.__GT_t_cljs$core$async50929 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async50929(map_LT___$1,f__$1,ch__$1,meta50930){
return (new cljs.core.async.t_cljs$core$async50929(map_LT___$1,f__$1,ch__$1,meta50930));
});

}

return (new cljs.core.async.t_cljs$core$async50929(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async50938 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50938 = (function (map_GT_,f,ch,meta50939){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta50939 = meta50939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50940,meta50939__$1){
var self__ = this;
var _50940__$1 = this;
return (new cljs.core.async.t_cljs$core$async50938(self__.map_GT_,self__.f,self__.ch,meta50939__$1));
});

cljs.core.async.t_cljs$core$async50938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50940){
var self__ = this;
var _50940__$1 = this;
return self__.meta50939;
});

cljs.core.async.t_cljs$core$async50938.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async50938.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50938.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async50938.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async50938.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async50938.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async50938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50939","meta50939",-1357812257,null)], null);
});

cljs.core.async.t_cljs$core$async50938.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50938";

cljs.core.async.t_cljs$core$async50938.cljs$lang$ctorPrWriter = (function (this__45140__auto__,writer__45141__auto__,opt__45142__auto__){
return cljs.core._write.call(null,writer__45141__auto__,"cljs.core.async/t_cljs$core$async50938");
});

cljs.core.async.__GT_t_cljs$core$async50938 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async50938(map_GT___$1,f__$1,ch__$1,meta50939){
return (new cljs.core.async.t_cljs$core$async50938(map_GT___$1,f__$1,ch__$1,meta50939));
});

}

return (new cljs.core.async.t_cljs$core$async50938(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async50944 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50944 = (function (filter_GT_,p,ch,meta50945){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta50945 = meta50945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async50944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50946,meta50945__$1){
var self__ = this;
var _50946__$1 = this;
return (new cljs.core.async.t_cljs$core$async50944(self__.filter_GT_,self__.p,self__.ch,meta50945__$1));
});

cljs.core.async.t_cljs$core$async50944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50946){
var self__ = this;
var _50946__$1 = this;
return self__.meta50945;
});

cljs.core.async.t_cljs$core$async50944.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async50944.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50944.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async50944.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async50944.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async50944.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async50944.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async50944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta50945","meta50945",-1932722048,null)], null);
});

cljs.core.async.t_cljs$core$async50944.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async50944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50944";

cljs.core.async.t_cljs$core$async50944.cljs$lang$ctorPrWriter = (function (this__45140__auto__,writer__45141__auto__,opt__45142__auto__){
return cljs.core._write.call(null,writer__45141__auto__,"cljs.core.async/t_cljs$core$async50944");
});

cljs.core.async.__GT_t_cljs$core$async50944 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async50944(filter_GT___$1,p__$1,ch__$1,meta50945){
return (new cljs.core.async.t_cljs$core$async50944(filter_GT___$1,p__$1,ch__$1,meta50945));
});

}

return (new cljs.core.async.t_cljs$core$async50944(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args50947 = [];
var len__45609__auto___50991 = arguments.length;
var i__45610__auto___50992 = (0);
while(true){
if((i__45610__auto___50992 < len__45609__auto___50991)){
args50947.push((arguments[i__45610__auto___50992]));

var G__50993 = (i__45610__auto___50992 + (1));
i__45610__auto___50992 = G__50993;
continue;
} else {
}
break;
}

var G__50949 = args50947.length;
switch (G__50949) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args50947.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48693__auto___50995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto___50995,out){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto___50995,out){
return (function (state_50970){
var state_val_50971 = (state_50970[(1)]);
if((state_val_50971 === (7))){
var inst_50966 = (state_50970[(2)]);
var state_50970__$1 = state_50970;
var statearr_50972_50996 = state_50970__$1;
(statearr_50972_50996[(2)] = inst_50966);

(statearr_50972_50996[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50971 === (1))){
var state_50970__$1 = state_50970;
var statearr_50973_50997 = state_50970__$1;
(statearr_50973_50997[(2)] = null);

(statearr_50973_50997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50971 === (4))){
var inst_50952 = (state_50970[(7)]);
var inst_50952__$1 = (state_50970[(2)]);
var inst_50953 = (inst_50952__$1 == null);
var state_50970__$1 = (function (){var statearr_50974 = state_50970;
(statearr_50974[(7)] = inst_50952__$1);

return statearr_50974;
})();
if(cljs.core.truth_(inst_50953)){
var statearr_50975_50998 = state_50970__$1;
(statearr_50975_50998[(1)] = (5));

} else {
var statearr_50976_50999 = state_50970__$1;
(statearr_50976_50999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50971 === (6))){
var inst_50952 = (state_50970[(7)]);
var inst_50957 = p.call(null,inst_50952);
var state_50970__$1 = state_50970;
if(cljs.core.truth_(inst_50957)){
var statearr_50977_51000 = state_50970__$1;
(statearr_50977_51000[(1)] = (8));

} else {
var statearr_50978_51001 = state_50970__$1;
(statearr_50978_51001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50971 === (3))){
var inst_50968 = (state_50970[(2)]);
var state_50970__$1 = state_50970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50970__$1,inst_50968);
} else {
if((state_val_50971 === (2))){
var state_50970__$1 = state_50970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50970__$1,(4),ch);
} else {
if((state_val_50971 === (11))){
var inst_50960 = (state_50970[(2)]);
var state_50970__$1 = state_50970;
var statearr_50979_51002 = state_50970__$1;
(statearr_50979_51002[(2)] = inst_50960);

(statearr_50979_51002[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50971 === (9))){
var state_50970__$1 = state_50970;
var statearr_50980_51003 = state_50970__$1;
(statearr_50980_51003[(2)] = null);

(statearr_50980_51003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50971 === (5))){
var inst_50955 = cljs.core.async.close_BANG_.call(null,out);
var state_50970__$1 = state_50970;
var statearr_50981_51004 = state_50970__$1;
(statearr_50981_51004[(2)] = inst_50955);

(statearr_50981_51004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50971 === (10))){
var inst_50963 = (state_50970[(2)]);
var state_50970__$1 = (function (){var statearr_50982 = state_50970;
(statearr_50982[(8)] = inst_50963);

return statearr_50982;
})();
var statearr_50983_51005 = state_50970__$1;
(statearr_50983_51005[(2)] = null);

(statearr_50983_51005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50971 === (8))){
var inst_50952 = (state_50970[(7)]);
var state_50970__$1 = state_50970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50970__$1,(11),out,inst_50952);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__48693__auto___50995,out))
;
return ((function (switch__48581__auto__,c__48693__auto___50995,out){
return (function() {
var cljs$core$async$state_machine__48582__auto__ = null;
var cljs$core$async$state_machine__48582__auto____0 = (function (){
var statearr_50987 = [null,null,null,null,null,null,null,null,null];
(statearr_50987[(0)] = cljs$core$async$state_machine__48582__auto__);

(statearr_50987[(1)] = (1));

return statearr_50987;
});
var cljs$core$async$state_machine__48582__auto____1 = (function (state_50970){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_50970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e50988){if((e50988 instanceof Object)){
var ex__48585__auto__ = e50988;
var statearr_50989_51006 = state_50970;
(statearr_50989_51006[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e50988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51007 = state_50970;
state_50970 = G__51007;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
cljs$core$async$state_machine__48582__auto__ = function(state_50970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48582__auto____1.call(this,state_50970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48582__auto____0;
cljs$core$async$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48582__auto____1;
return cljs$core$async$state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto___50995,out))
})();
var state__48695__auto__ = (function (){var statearr_50990 = f__48694__auto__.call(null);
(statearr_50990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto___50995);

return statearr_50990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto___50995,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args51008 = [];
var len__45609__auto___51011 = arguments.length;
var i__45610__auto___51012 = (0);
while(true){
if((i__45610__auto___51012 < len__45609__auto___51011)){
args51008.push((arguments[i__45610__auto___51012]));

var G__51013 = (i__45610__auto___51012 + (1));
i__45610__auto___51012 = G__51013;
continue;
} else {
}
break;
}

var G__51010 = args51008.length;
switch (G__51010) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51008.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__48693__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto__){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto__){
return (function (state_51180){
var state_val_51181 = (state_51180[(1)]);
if((state_val_51181 === (7))){
var inst_51176 = (state_51180[(2)]);
var state_51180__$1 = state_51180;
var statearr_51182_51223 = state_51180__$1;
(statearr_51182_51223[(2)] = inst_51176);

(statearr_51182_51223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51181 === (20))){
var inst_51146 = (state_51180[(7)]);
var inst_51157 = (state_51180[(2)]);
var inst_51158 = cljs.core.next.call(null,inst_51146);
var inst_51132 = inst_51158;
var inst_51133 = null;
var inst_51134 = (0);
var inst_51135 = (0);
var state_51180__$1 = (function (){var statearr_51183 = state_51180;
(statearr_51183[(8)] = inst_51133);

(statearr_51183[(9)] = inst_51157);

(statearr_51183[(10)] = inst_51132);

(statearr_51183[(11)] = inst_51134);

(statearr_51183[(12)] = inst_51135);

return statearr_51183;
})();
var statearr_51184_51224 = state_51180__$1;
(statearr_51184_51224[(2)] = null);

(statearr_51184_51224[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51181 === (1))){
var state_51180__$1 = state_51180;
var statearr_51185_51225 = state_51180__$1;
(statearr_51185_51225[(2)] = null);

(statearr_51185_51225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51181 === (4))){
var inst_51121 = (state_51180[(13)]);
var inst_51121__$1 = (state_51180[(2)]);
var inst_51122 = (inst_51121__$1 == null);
var state_51180__$1 = (function (){var statearr_51186 = state_51180;
(statearr_51186[(13)] = inst_51121__$1);

return statearr_51186;
})();
if(cljs.core.truth_(inst_51122)){
var statearr_51187_51226 = state_51180__$1;
(statearr_51187_51226[(1)] = (5));

} else {
var statearr_51188_51227 = state_51180__$1;
(statearr_51188_51227[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51181 === (15))){
var state_51180__$1 = state_51180;
var statearr_51192_51228 = state_51180__$1;
(statearr_51192_51228[(2)] = null);

(statearr_51192_51228[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51181 === (21))){
var state_51180__$1 = state_51180;
var statearr_51193_51229 = state_51180__$1;
(statearr_51193_51229[(2)] = null);

(statearr_51193_51229[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51181 === (13))){
var inst_51133 = (state_51180[(8)]);
var inst_51132 = (state_51180[(10)]);
var inst_51134 = (state_51180[(11)]);
var inst_51135 = (state_51180[(12)]);
var inst_51142 = (state_51180[(2)]);
var inst_51143 = (inst_51135 + (1));
var tmp51189 = inst_51133;
var tmp51190 = inst_51132;
var tmp51191 = inst_51134;
var inst_51132__$1 = tmp51190;
var inst_51133__$1 = tmp51189;
var inst_51134__$1 = tmp51191;
var inst_51135__$1 = inst_51143;
var state_51180__$1 = (function (){var statearr_51194 = state_51180;
(statearr_51194[(8)] = inst_51133__$1);

(statearr_51194[(10)] = inst_51132__$1);

(statearr_51194[(11)] = inst_51134__$1);

(statearr_51194[(12)] = inst_51135__$1);

(statearr_51194[(14)] = inst_51142);

return statearr_51194;
})();
var statearr_51195_51230 = state_51180__$1;
(statearr_51195_51230[(2)] = null);

(statearr_51195_51230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51181 === (22))){
var state_51180__$1 = state_51180;
var statearr_51196_51231 = state_51180__$1;
(statearr_51196_51231[(2)] = null);

(statearr_51196_51231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51181 === (6))){
var inst_51121 = (state_51180[(13)]);
var inst_51130 = f.call(null,inst_51121);
var inst_51131 = cljs.core.seq.call(null,inst_51130);
var inst_51132 = inst_51131;
var inst_51133 = null;
var inst_51134 = (0);
var inst_51135 = (0);
var state_51180__$1 = (function (){var statearr_51197 = state_51180;
(statearr_51197[(8)] = inst_51133);

(statearr_51197[(10)] = inst_51132);

(statearr_51197[(11)] = inst_51134);

(statearr_51197[(12)] = inst_51135);

return statearr_51197;
})();
var statearr_51198_51232 = state_51180__$1;
(statearr_51198_51232[(2)] = null);

(statearr_51198_51232[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51181 === (17))){
var inst_51146 = (state_51180[(7)]);
var inst_51150 = cljs.core.chunk_first.call(null,inst_51146);
var inst_51151 = cljs.core.chunk_rest.call(null,inst_51146);
var inst_51152 = cljs.core.count.call(null,inst_51150);
var inst_51132 = inst_51151;
var inst_51133 = inst_51150;
var inst_51134 = inst_51152;
var inst_51135 = (0);
var state_51180__$1 = (function (){var statearr_51199 = state_51180;
(statearr_51199[(8)] = inst_51133);

(statearr_51199[(10)] = inst_51132);

(statearr_51199[(11)] = inst_51134);

(statearr_51199[(12)] = inst_51135);

return statearr_51199;
})();
var statearr_51200_51233 = state_51180__$1;
(statearr_51200_51233[(2)] = null);

(statearr_51200_51233[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51181 === (3))){
var inst_51178 = (state_51180[(2)]);
var state_51180__$1 = state_51180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51180__$1,inst_51178);
} else {
if((state_val_51181 === (12))){
var inst_51166 = (state_51180[(2)]);
var state_51180__$1 = state_51180;
var statearr_51201_51234 = state_51180__$1;
(statearr_51201_51234[(2)] = inst_51166);

(statearr_51201_51234[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51181 === (2))){
var state_51180__$1 = state_51180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51180__$1,(4),in$);
} else {
if((state_val_51181 === (23))){
var inst_51174 = (state_51180[(2)]);
var state_51180__$1 = state_51180;
var statearr_51202_51235 = state_51180__$1;
(statearr_51202_51235[(2)] = inst_51174);

(statearr_51202_51235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51181 === (19))){
var inst_51161 = (state_51180[(2)]);
var state_51180__$1 = state_51180;
var statearr_51203_51236 = state_51180__$1;
(statearr_51203_51236[(2)] = inst_51161);

(statearr_51203_51236[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51181 === (11))){
var inst_51132 = (state_51180[(10)]);
var inst_51146 = (state_51180[(7)]);
var inst_51146__$1 = cljs.core.seq.call(null,inst_51132);
var state_51180__$1 = (function (){var statearr_51204 = state_51180;
(statearr_51204[(7)] = inst_51146__$1);

return statearr_51204;
})();
if(inst_51146__$1){
var statearr_51205_51237 = state_51180__$1;
(statearr_51205_51237[(1)] = (14));

} else {
var statearr_51206_51238 = state_51180__$1;
(statearr_51206_51238[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51181 === (9))){
var inst_51168 = (state_51180[(2)]);
var inst_51169 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_51180__$1 = (function (){var statearr_51207 = state_51180;
(statearr_51207[(15)] = inst_51168);

return statearr_51207;
})();
if(cljs.core.truth_(inst_51169)){
var statearr_51208_51239 = state_51180__$1;
(statearr_51208_51239[(1)] = (21));

} else {
var statearr_51209_51240 = state_51180__$1;
(statearr_51209_51240[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51181 === (5))){
var inst_51124 = cljs.core.async.close_BANG_.call(null,out);
var state_51180__$1 = state_51180;
var statearr_51210_51241 = state_51180__$1;
(statearr_51210_51241[(2)] = inst_51124);

(statearr_51210_51241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51181 === (14))){
var inst_51146 = (state_51180[(7)]);
var inst_51148 = cljs.core.chunked_seq_QMARK_.call(null,inst_51146);
var state_51180__$1 = state_51180;
if(inst_51148){
var statearr_51211_51242 = state_51180__$1;
(statearr_51211_51242[(1)] = (17));

} else {
var statearr_51212_51243 = state_51180__$1;
(statearr_51212_51243[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51181 === (16))){
var inst_51164 = (state_51180[(2)]);
var state_51180__$1 = state_51180;
var statearr_51213_51244 = state_51180__$1;
(statearr_51213_51244[(2)] = inst_51164);

(statearr_51213_51244[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51181 === (10))){
var inst_51133 = (state_51180[(8)]);
var inst_51135 = (state_51180[(12)]);
var inst_51140 = cljs.core._nth.call(null,inst_51133,inst_51135);
var state_51180__$1 = state_51180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51180__$1,(13),out,inst_51140);
} else {
if((state_val_51181 === (18))){
var inst_51146 = (state_51180[(7)]);
var inst_51155 = cljs.core.first.call(null,inst_51146);
var state_51180__$1 = state_51180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51180__$1,(20),out,inst_51155);
} else {
if((state_val_51181 === (8))){
var inst_51134 = (state_51180[(11)]);
var inst_51135 = (state_51180[(12)]);
var inst_51137 = (inst_51135 < inst_51134);
var inst_51138 = inst_51137;
var state_51180__$1 = state_51180;
if(cljs.core.truth_(inst_51138)){
var statearr_51214_51245 = state_51180__$1;
(statearr_51214_51245[(1)] = (10));

} else {
var statearr_51215_51246 = state_51180__$1;
(statearr_51215_51246[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48693__auto__))
;
return ((function (switch__48581__auto__,c__48693__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__48582__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__48582__auto____0 = (function (){
var statearr_51219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51219[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__48582__auto__);

(statearr_51219[(1)] = (1));

return statearr_51219;
});
var cljs$core$async$mapcat_STAR__$_state_machine__48582__auto____1 = (function (state_51180){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_51180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e51220){if((e51220 instanceof Object)){
var ex__48585__auto__ = e51220;
var statearr_51221_51247 = state_51180;
(statearr_51221_51247[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51248 = state_51180;
state_51180 = G__51248;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__48582__auto__ = function(state_51180){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__48582__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__48582__auto____1.call(this,state_51180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__48582__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__48582__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto__))
})();
var state__48695__auto__ = (function (){var statearr_51222 = f__48694__auto__.call(null);
(statearr_51222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto__);

return statearr_51222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto__))
);

return c__48693__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args51249 = [];
var len__45609__auto___51252 = arguments.length;
var i__45610__auto___51253 = (0);
while(true){
if((i__45610__auto___51253 < len__45609__auto___51252)){
args51249.push((arguments[i__45610__auto___51253]));

var G__51254 = (i__45610__auto___51253 + (1));
i__45610__auto___51253 = G__51254;
continue;
} else {
}
break;
}

var G__51251 = args51249.length;
switch (G__51251) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51249.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args51256 = [];
var len__45609__auto___51259 = arguments.length;
var i__45610__auto___51260 = (0);
while(true){
if((i__45610__auto___51260 < len__45609__auto___51259)){
args51256.push((arguments[i__45610__auto___51260]));

var G__51261 = (i__45610__auto___51260 + (1));
i__45610__auto___51260 = G__51261;
continue;
} else {
}
break;
}

var G__51258 = args51256.length;
switch (G__51258) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51256.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args51263 = [];
var len__45609__auto___51314 = arguments.length;
var i__45610__auto___51315 = (0);
while(true){
if((i__45610__auto___51315 < len__45609__auto___51314)){
args51263.push((arguments[i__45610__auto___51315]));

var G__51316 = (i__45610__auto___51315 + (1));
i__45610__auto___51315 = G__51316;
continue;
} else {
}
break;
}

var G__51265 = args51263.length;
switch (G__51265) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51263.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48693__auto___51318 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto___51318,out){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto___51318,out){
return (function (state_51289){
var state_val_51290 = (state_51289[(1)]);
if((state_val_51290 === (7))){
var inst_51284 = (state_51289[(2)]);
var state_51289__$1 = state_51289;
var statearr_51291_51319 = state_51289__$1;
(statearr_51291_51319[(2)] = inst_51284);

(statearr_51291_51319[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51290 === (1))){
var inst_51266 = null;
var state_51289__$1 = (function (){var statearr_51292 = state_51289;
(statearr_51292[(7)] = inst_51266);

return statearr_51292;
})();
var statearr_51293_51320 = state_51289__$1;
(statearr_51293_51320[(2)] = null);

(statearr_51293_51320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51290 === (4))){
var inst_51269 = (state_51289[(8)]);
var inst_51269__$1 = (state_51289[(2)]);
var inst_51270 = (inst_51269__$1 == null);
var inst_51271 = cljs.core.not.call(null,inst_51270);
var state_51289__$1 = (function (){var statearr_51294 = state_51289;
(statearr_51294[(8)] = inst_51269__$1);

return statearr_51294;
})();
if(inst_51271){
var statearr_51295_51321 = state_51289__$1;
(statearr_51295_51321[(1)] = (5));

} else {
var statearr_51296_51322 = state_51289__$1;
(statearr_51296_51322[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51290 === (6))){
var state_51289__$1 = state_51289;
var statearr_51297_51323 = state_51289__$1;
(statearr_51297_51323[(2)] = null);

(statearr_51297_51323[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51290 === (3))){
var inst_51286 = (state_51289[(2)]);
var inst_51287 = cljs.core.async.close_BANG_.call(null,out);
var state_51289__$1 = (function (){var statearr_51298 = state_51289;
(statearr_51298[(9)] = inst_51286);

return statearr_51298;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51289__$1,inst_51287);
} else {
if((state_val_51290 === (2))){
var state_51289__$1 = state_51289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51289__$1,(4),ch);
} else {
if((state_val_51290 === (11))){
var inst_51269 = (state_51289[(8)]);
var inst_51278 = (state_51289[(2)]);
var inst_51266 = inst_51269;
var state_51289__$1 = (function (){var statearr_51299 = state_51289;
(statearr_51299[(7)] = inst_51266);

(statearr_51299[(10)] = inst_51278);

return statearr_51299;
})();
var statearr_51300_51324 = state_51289__$1;
(statearr_51300_51324[(2)] = null);

(statearr_51300_51324[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51290 === (9))){
var inst_51269 = (state_51289[(8)]);
var state_51289__$1 = state_51289;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51289__$1,(11),out,inst_51269);
} else {
if((state_val_51290 === (5))){
var inst_51266 = (state_51289[(7)]);
var inst_51269 = (state_51289[(8)]);
var inst_51273 = cljs.core._EQ_.call(null,inst_51269,inst_51266);
var state_51289__$1 = state_51289;
if(inst_51273){
var statearr_51302_51325 = state_51289__$1;
(statearr_51302_51325[(1)] = (8));

} else {
var statearr_51303_51326 = state_51289__$1;
(statearr_51303_51326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51290 === (10))){
var inst_51281 = (state_51289[(2)]);
var state_51289__$1 = state_51289;
var statearr_51304_51327 = state_51289__$1;
(statearr_51304_51327[(2)] = inst_51281);

(statearr_51304_51327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51290 === (8))){
var inst_51266 = (state_51289[(7)]);
var tmp51301 = inst_51266;
var inst_51266__$1 = tmp51301;
var state_51289__$1 = (function (){var statearr_51305 = state_51289;
(statearr_51305[(7)] = inst_51266__$1);

return statearr_51305;
})();
var statearr_51306_51328 = state_51289__$1;
(statearr_51306_51328[(2)] = null);

(statearr_51306_51328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__48693__auto___51318,out))
;
return ((function (switch__48581__auto__,c__48693__auto___51318,out){
return (function() {
var cljs$core$async$state_machine__48582__auto__ = null;
var cljs$core$async$state_machine__48582__auto____0 = (function (){
var statearr_51310 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51310[(0)] = cljs$core$async$state_machine__48582__auto__);

(statearr_51310[(1)] = (1));

return statearr_51310;
});
var cljs$core$async$state_machine__48582__auto____1 = (function (state_51289){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_51289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e51311){if((e51311 instanceof Object)){
var ex__48585__auto__ = e51311;
var statearr_51312_51329 = state_51289;
(statearr_51312_51329[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51330 = state_51289;
state_51289 = G__51330;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
cljs$core$async$state_machine__48582__auto__ = function(state_51289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48582__auto____1.call(this,state_51289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48582__auto____0;
cljs$core$async$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48582__auto____1;
return cljs$core$async$state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto___51318,out))
})();
var state__48695__auto__ = (function (){var statearr_51313 = f__48694__auto__.call(null);
(statearr_51313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto___51318);

return statearr_51313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto___51318,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args51331 = [];
var len__45609__auto___51401 = arguments.length;
var i__45610__auto___51402 = (0);
while(true){
if((i__45610__auto___51402 < len__45609__auto___51401)){
args51331.push((arguments[i__45610__auto___51402]));

var G__51403 = (i__45610__auto___51402 + (1));
i__45610__auto___51402 = G__51403;
continue;
} else {
}
break;
}

var G__51333 = args51331.length;
switch (G__51333) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51331.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48693__auto___51405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto___51405,out){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto___51405,out){
return (function (state_51371){
var state_val_51372 = (state_51371[(1)]);
if((state_val_51372 === (7))){
var inst_51367 = (state_51371[(2)]);
var state_51371__$1 = state_51371;
var statearr_51373_51406 = state_51371__$1;
(statearr_51373_51406[(2)] = inst_51367);

(statearr_51373_51406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51372 === (1))){
var inst_51334 = (new Array(n));
var inst_51335 = inst_51334;
var inst_51336 = (0);
var state_51371__$1 = (function (){var statearr_51374 = state_51371;
(statearr_51374[(7)] = inst_51336);

(statearr_51374[(8)] = inst_51335);

return statearr_51374;
})();
var statearr_51375_51407 = state_51371__$1;
(statearr_51375_51407[(2)] = null);

(statearr_51375_51407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51372 === (4))){
var inst_51339 = (state_51371[(9)]);
var inst_51339__$1 = (state_51371[(2)]);
var inst_51340 = (inst_51339__$1 == null);
var inst_51341 = cljs.core.not.call(null,inst_51340);
var state_51371__$1 = (function (){var statearr_51376 = state_51371;
(statearr_51376[(9)] = inst_51339__$1);

return statearr_51376;
})();
if(inst_51341){
var statearr_51377_51408 = state_51371__$1;
(statearr_51377_51408[(1)] = (5));

} else {
var statearr_51378_51409 = state_51371__$1;
(statearr_51378_51409[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51372 === (15))){
var inst_51361 = (state_51371[(2)]);
var state_51371__$1 = state_51371;
var statearr_51379_51410 = state_51371__$1;
(statearr_51379_51410[(2)] = inst_51361);

(statearr_51379_51410[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51372 === (13))){
var state_51371__$1 = state_51371;
var statearr_51380_51411 = state_51371__$1;
(statearr_51380_51411[(2)] = null);

(statearr_51380_51411[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51372 === (6))){
var inst_51336 = (state_51371[(7)]);
var inst_51357 = (inst_51336 > (0));
var state_51371__$1 = state_51371;
if(cljs.core.truth_(inst_51357)){
var statearr_51381_51412 = state_51371__$1;
(statearr_51381_51412[(1)] = (12));

} else {
var statearr_51382_51413 = state_51371__$1;
(statearr_51382_51413[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51372 === (3))){
var inst_51369 = (state_51371[(2)]);
var state_51371__$1 = state_51371;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51371__$1,inst_51369);
} else {
if((state_val_51372 === (12))){
var inst_51335 = (state_51371[(8)]);
var inst_51359 = cljs.core.vec.call(null,inst_51335);
var state_51371__$1 = state_51371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51371__$1,(15),out,inst_51359);
} else {
if((state_val_51372 === (2))){
var state_51371__$1 = state_51371;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51371__$1,(4),ch);
} else {
if((state_val_51372 === (11))){
var inst_51351 = (state_51371[(2)]);
var inst_51352 = (new Array(n));
var inst_51335 = inst_51352;
var inst_51336 = (0);
var state_51371__$1 = (function (){var statearr_51383 = state_51371;
(statearr_51383[(7)] = inst_51336);

(statearr_51383[(10)] = inst_51351);

(statearr_51383[(8)] = inst_51335);

return statearr_51383;
})();
var statearr_51384_51414 = state_51371__$1;
(statearr_51384_51414[(2)] = null);

(statearr_51384_51414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51372 === (9))){
var inst_51335 = (state_51371[(8)]);
var inst_51349 = cljs.core.vec.call(null,inst_51335);
var state_51371__$1 = state_51371;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51371__$1,(11),out,inst_51349);
} else {
if((state_val_51372 === (5))){
var inst_51336 = (state_51371[(7)]);
var inst_51344 = (state_51371[(11)]);
var inst_51339 = (state_51371[(9)]);
var inst_51335 = (state_51371[(8)]);
var inst_51343 = (inst_51335[inst_51336] = inst_51339);
var inst_51344__$1 = (inst_51336 + (1));
var inst_51345 = (inst_51344__$1 < n);
var state_51371__$1 = (function (){var statearr_51385 = state_51371;
(statearr_51385[(11)] = inst_51344__$1);

(statearr_51385[(12)] = inst_51343);

return statearr_51385;
})();
if(cljs.core.truth_(inst_51345)){
var statearr_51386_51415 = state_51371__$1;
(statearr_51386_51415[(1)] = (8));

} else {
var statearr_51387_51416 = state_51371__$1;
(statearr_51387_51416[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51372 === (14))){
var inst_51364 = (state_51371[(2)]);
var inst_51365 = cljs.core.async.close_BANG_.call(null,out);
var state_51371__$1 = (function (){var statearr_51389 = state_51371;
(statearr_51389[(13)] = inst_51364);

return statearr_51389;
})();
var statearr_51390_51417 = state_51371__$1;
(statearr_51390_51417[(2)] = inst_51365);

(statearr_51390_51417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51372 === (10))){
var inst_51355 = (state_51371[(2)]);
var state_51371__$1 = state_51371;
var statearr_51391_51418 = state_51371__$1;
(statearr_51391_51418[(2)] = inst_51355);

(statearr_51391_51418[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51372 === (8))){
var inst_51344 = (state_51371[(11)]);
var inst_51335 = (state_51371[(8)]);
var tmp51388 = inst_51335;
var inst_51335__$1 = tmp51388;
var inst_51336 = inst_51344;
var state_51371__$1 = (function (){var statearr_51392 = state_51371;
(statearr_51392[(7)] = inst_51336);

(statearr_51392[(8)] = inst_51335__$1);

return statearr_51392;
})();
var statearr_51393_51419 = state_51371__$1;
(statearr_51393_51419[(2)] = null);

(statearr_51393_51419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48693__auto___51405,out))
;
return ((function (switch__48581__auto__,c__48693__auto___51405,out){
return (function() {
var cljs$core$async$state_machine__48582__auto__ = null;
var cljs$core$async$state_machine__48582__auto____0 = (function (){
var statearr_51397 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51397[(0)] = cljs$core$async$state_machine__48582__auto__);

(statearr_51397[(1)] = (1));

return statearr_51397;
});
var cljs$core$async$state_machine__48582__auto____1 = (function (state_51371){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_51371);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e51398){if((e51398 instanceof Object)){
var ex__48585__auto__ = e51398;
var statearr_51399_51420 = state_51371;
(statearr_51399_51420[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51371);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51421 = state_51371;
state_51371 = G__51421;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
cljs$core$async$state_machine__48582__auto__ = function(state_51371){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48582__auto____1.call(this,state_51371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48582__auto____0;
cljs$core$async$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48582__auto____1;
return cljs$core$async$state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto___51405,out))
})();
var state__48695__auto__ = (function (){var statearr_51400 = f__48694__auto__.call(null);
(statearr_51400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto___51405);

return statearr_51400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto___51405,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args51422 = [];
var len__45609__auto___51496 = arguments.length;
var i__45610__auto___51497 = (0);
while(true){
if((i__45610__auto___51497 < len__45609__auto___51496)){
args51422.push((arguments[i__45610__auto___51497]));

var G__51498 = (i__45610__auto___51497 + (1));
i__45610__auto___51497 = G__51498;
continue;
} else {
}
break;
}

var G__51424 = args51422.length;
switch (G__51424) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51422.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__48693__auto___51500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto___51500,out){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto___51500,out){
return (function (state_51466){
var state_val_51467 = (state_51466[(1)]);
if((state_val_51467 === (7))){
var inst_51462 = (state_51466[(2)]);
var state_51466__$1 = state_51466;
var statearr_51468_51501 = state_51466__$1;
(statearr_51468_51501[(2)] = inst_51462);

(statearr_51468_51501[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51467 === (1))){
var inst_51425 = [];
var inst_51426 = inst_51425;
var inst_51427 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_51466__$1 = (function (){var statearr_51469 = state_51466;
(statearr_51469[(7)] = inst_51426);

(statearr_51469[(8)] = inst_51427);

return statearr_51469;
})();
var statearr_51470_51502 = state_51466__$1;
(statearr_51470_51502[(2)] = null);

(statearr_51470_51502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51467 === (4))){
var inst_51430 = (state_51466[(9)]);
var inst_51430__$1 = (state_51466[(2)]);
var inst_51431 = (inst_51430__$1 == null);
var inst_51432 = cljs.core.not.call(null,inst_51431);
var state_51466__$1 = (function (){var statearr_51471 = state_51466;
(statearr_51471[(9)] = inst_51430__$1);

return statearr_51471;
})();
if(inst_51432){
var statearr_51472_51503 = state_51466__$1;
(statearr_51472_51503[(1)] = (5));

} else {
var statearr_51473_51504 = state_51466__$1;
(statearr_51473_51504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51467 === (15))){
var inst_51456 = (state_51466[(2)]);
var state_51466__$1 = state_51466;
var statearr_51474_51505 = state_51466__$1;
(statearr_51474_51505[(2)] = inst_51456);

(statearr_51474_51505[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51467 === (13))){
var state_51466__$1 = state_51466;
var statearr_51475_51506 = state_51466__$1;
(statearr_51475_51506[(2)] = null);

(statearr_51475_51506[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51467 === (6))){
var inst_51426 = (state_51466[(7)]);
var inst_51451 = inst_51426.length;
var inst_51452 = (inst_51451 > (0));
var state_51466__$1 = state_51466;
if(cljs.core.truth_(inst_51452)){
var statearr_51476_51507 = state_51466__$1;
(statearr_51476_51507[(1)] = (12));

} else {
var statearr_51477_51508 = state_51466__$1;
(statearr_51477_51508[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51467 === (3))){
var inst_51464 = (state_51466[(2)]);
var state_51466__$1 = state_51466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51466__$1,inst_51464);
} else {
if((state_val_51467 === (12))){
var inst_51426 = (state_51466[(7)]);
var inst_51454 = cljs.core.vec.call(null,inst_51426);
var state_51466__$1 = state_51466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51466__$1,(15),out,inst_51454);
} else {
if((state_val_51467 === (2))){
var state_51466__$1 = state_51466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51466__$1,(4),ch);
} else {
if((state_val_51467 === (11))){
var inst_51434 = (state_51466[(10)]);
var inst_51430 = (state_51466[(9)]);
var inst_51444 = (state_51466[(2)]);
var inst_51445 = [];
var inst_51446 = inst_51445.push(inst_51430);
var inst_51426 = inst_51445;
var inst_51427 = inst_51434;
var state_51466__$1 = (function (){var statearr_51478 = state_51466;
(statearr_51478[(11)] = inst_51444);

(statearr_51478[(7)] = inst_51426);

(statearr_51478[(12)] = inst_51446);

(statearr_51478[(8)] = inst_51427);

return statearr_51478;
})();
var statearr_51479_51509 = state_51466__$1;
(statearr_51479_51509[(2)] = null);

(statearr_51479_51509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51467 === (9))){
var inst_51426 = (state_51466[(7)]);
var inst_51442 = cljs.core.vec.call(null,inst_51426);
var state_51466__$1 = state_51466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_51466__$1,(11),out,inst_51442);
} else {
if((state_val_51467 === (5))){
var inst_51434 = (state_51466[(10)]);
var inst_51430 = (state_51466[(9)]);
var inst_51427 = (state_51466[(8)]);
var inst_51434__$1 = f.call(null,inst_51430);
var inst_51435 = cljs.core._EQ_.call(null,inst_51434__$1,inst_51427);
var inst_51436 = cljs.core.keyword_identical_QMARK_.call(null,inst_51427,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_51437 = (inst_51435) || (inst_51436);
var state_51466__$1 = (function (){var statearr_51480 = state_51466;
(statearr_51480[(10)] = inst_51434__$1);

return statearr_51480;
})();
if(cljs.core.truth_(inst_51437)){
var statearr_51481_51510 = state_51466__$1;
(statearr_51481_51510[(1)] = (8));

} else {
var statearr_51482_51511 = state_51466__$1;
(statearr_51482_51511[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51467 === (14))){
var inst_51459 = (state_51466[(2)]);
var inst_51460 = cljs.core.async.close_BANG_.call(null,out);
var state_51466__$1 = (function (){var statearr_51484 = state_51466;
(statearr_51484[(13)] = inst_51459);

return statearr_51484;
})();
var statearr_51485_51512 = state_51466__$1;
(statearr_51485_51512[(2)] = inst_51460);

(statearr_51485_51512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51467 === (10))){
var inst_51449 = (state_51466[(2)]);
var state_51466__$1 = state_51466;
var statearr_51486_51513 = state_51466__$1;
(statearr_51486_51513[(2)] = inst_51449);

(statearr_51486_51513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51467 === (8))){
var inst_51434 = (state_51466[(10)]);
var inst_51426 = (state_51466[(7)]);
var inst_51430 = (state_51466[(9)]);
var inst_51439 = inst_51426.push(inst_51430);
var tmp51483 = inst_51426;
var inst_51426__$1 = tmp51483;
var inst_51427 = inst_51434;
var state_51466__$1 = (function (){var statearr_51487 = state_51466;
(statearr_51487[(7)] = inst_51426__$1);

(statearr_51487[(8)] = inst_51427);

(statearr_51487[(14)] = inst_51439);

return statearr_51487;
})();
var statearr_51488_51514 = state_51466__$1;
(statearr_51488_51514[(2)] = null);

(statearr_51488_51514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__48693__auto___51500,out))
;
return ((function (switch__48581__auto__,c__48693__auto___51500,out){
return (function() {
var cljs$core$async$state_machine__48582__auto__ = null;
var cljs$core$async$state_machine__48582__auto____0 = (function (){
var statearr_51492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51492[(0)] = cljs$core$async$state_machine__48582__auto__);

(statearr_51492[(1)] = (1));

return statearr_51492;
});
var cljs$core$async$state_machine__48582__auto____1 = (function (state_51466){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_51466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e51493){if((e51493 instanceof Object)){
var ex__48585__auto__ = e51493;
var statearr_51494_51515 = state_51466;
(statearr_51494_51515[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51516 = state_51466;
state_51466 = G__51516;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
cljs$core$async$state_machine__48582__auto__ = function(state_51466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__48582__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__48582__auto____1.call(this,state_51466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__48582__auto____0;
cljs$core$async$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__48582__auto____1;
return cljs$core$async$state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto___51500,out))
})();
var state__48695__auto__ = (function (){var statearr_51495 = f__48694__auto__.call(null);
(statearr_51495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto___51500);

return statearr_51495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto___51500,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1484941487763