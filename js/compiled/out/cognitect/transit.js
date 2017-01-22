// Compiled by ClojureScript 1.9.229 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__56075_56079 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__56076_56080 = null;
var count__56077_56081 = (0);
var i__56078_56082 = (0);
while(true){
if((i__56078_56082 < count__56077_56081)){
var k_56083 = cljs.core._nth.call(null,chunk__56076_56080,i__56078_56082);
var v_56084 = (b[k_56083]);
(a[k_56083] = v_56084);

var G__56085 = seq__56075_56079;
var G__56086 = chunk__56076_56080;
var G__56087 = count__56077_56081;
var G__56088 = (i__56078_56082 + (1));
seq__56075_56079 = G__56085;
chunk__56076_56080 = G__56086;
count__56077_56081 = G__56087;
i__56078_56082 = G__56088;
continue;
} else {
var temp__4657__auto___56089 = cljs.core.seq.call(null,seq__56075_56079);
if(temp__4657__auto___56089){
var seq__56075_56090__$1 = temp__4657__auto___56089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56075_56090__$1)){
var c__45345__auto___56091 = cljs.core.chunk_first.call(null,seq__56075_56090__$1);
var G__56092 = cljs.core.chunk_rest.call(null,seq__56075_56090__$1);
var G__56093 = c__45345__auto___56091;
var G__56094 = cljs.core.count.call(null,c__45345__auto___56091);
var G__56095 = (0);
seq__56075_56079 = G__56092;
chunk__56076_56080 = G__56093;
count__56077_56081 = G__56094;
i__56078_56082 = G__56095;
continue;
} else {
var k_56096 = cljs.core.first.call(null,seq__56075_56090__$1);
var v_56097 = (b[k_56096]);
(a[k_56096] = v_56097);

var G__56098 = cljs.core.next.call(null,seq__56075_56090__$1);
var G__56099 = null;
var G__56100 = (0);
var G__56101 = (0);
seq__56075_56079 = G__56098;
chunk__56076_56080 = G__56099;
count__56077_56081 = G__56100;
i__56078_56082 = G__56101;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__45140__auto__,writer__45141__auto__,opt__45142__auto__){
return cljs.core._write.call(null,writer__45141__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__45140__auto__,writer__45141__auto__,opt__45142__auto__){
return cljs.core._write.call(null,writer__45141__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args56102 = [];
var len__45609__auto___56105 = arguments.length;
var i__45610__auto___56106 = (0);
while(true){
if((i__45610__auto___56106 < len__45609__auto___56105)){
args56102.push((arguments[i__45610__auto___56106]));

var G__56107 = (i__45610__auto___56106 + (1));
i__45610__auto___56106 = G__56107;
continue;
} else {
}
break;
}

var G__56104 = args56102.length;
switch (G__56104) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56102.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__56109 = (i + (2));
var G__56110 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__56109;
ret = G__56110;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;

/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__45140__auto__,writer__45141__auto__,opt__45142__auto__){
return cljs.core._write.call(null,writer__45141__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__45140__auto__,writer__45141__auto__,opt__45142__auto__){
return cljs.core._write.call(null,writer__45141__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__56111_56115 = cljs.core.seq.call(null,v);
var chunk__56112_56116 = null;
var count__56113_56117 = (0);
var i__56114_56118 = (0);
while(true){
if((i__56114_56118 < count__56113_56117)){
var x_56119 = cljs.core._nth.call(null,chunk__56112_56116,i__56114_56118);
ret.push(x_56119);

var G__56120 = seq__56111_56115;
var G__56121 = chunk__56112_56116;
var G__56122 = count__56113_56117;
var G__56123 = (i__56114_56118 + (1));
seq__56111_56115 = G__56120;
chunk__56112_56116 = G__56121;
count__56113_56117 = G__56122;
i__56114_56118 = G__56123;
continue;
} else {
var temp__4657__auto___56124 = cljs.core.seq.call(null,seq__56111_56115);
if(temp__4657__auto___56124){
var seq__56111_56125__$1 = temp__4657__auto___56124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56111_56125__$1)){
var c__45345__auto___56126 = cljs.core.chunk_first.call(null,seq__56111_56125__$1);
var G__56127 = cljs.core.chunk_rest.call(null,seq__56111_56125__$1);
var G__56128 = c__45345__auto___56126;
var G__56129 = cljs.core.count.call(null,c__45345__auto___56126);
var G__56130 = (0);
seq__56111_56115 = G__56127;
chunk__56112_56116 = G__56128;
count__56113_56117 = G__56129;
i__56114_56118 = G__56130;
continue;
} else {
var x_56131 = cljs.core.first.call(null,seq__56111_56125__$1);
ret.push(x_56131);

var G__56132 = cljs.core.next.call(null,seq__56111_56125__$1);
var G__56133 = null;
var G__56134 = (0);
var G__56135 = (0);
seq__56111_56115 = G__56132;
chunk__56112_56116 = G__56133;
count__56113_56117 = G__56134;
i__56114_56118 = G__56135;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__45140__auto__,writer__45141__auto__,opt__45142__auto__){
return cljs.core._write.call(null,writer__45141__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__45140__auto__,writer__45141__auto__,opt__45142__auto__){
return cljs.core._write.call(null,writer__45141__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__56136_56140 = cljs.core.seq.call(null,v);
var chunk__56137_56141 = null;
var count__56138_56142 = (0);
var i__56139_56143 = (0);
while(true){
if((i__56139_56143 < count__56138_56142)){
var x_56144 = cljs.core._nth.call(null,chunk__56137_56141,i__56139_56143);
ret.push(x_56144);

var G__56145 = seq__56136_56140;
var G__56146 = chunk__56137_56141;
var G__56147 = count__56138_56142;
var G__56148 = (i__56139_56143 + (1));
seq__56136_56140 = G__56145;
chunk__56137_56141 = G__56146;
count__56138_56142 = G__56147;
i__56139_56143 = G__56148;
continue;
} else {
var temp__4657__auto___56149 = cljs.core.seq.call(null,seq__56136_56140);
if(temp__4657__auto___56149){
var seq__56136_56150__$1 = temp__4657__auto___56149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56136_56150__$1)){
var c__45345__auto___56151 = cljs.core.chunk_first.call(null,seq__56136_56150__$1);
var G__56152 = cljs.core.chunk_rest.call(null,seq__56136_56150__$1);
var G__56153 = c__45345__auto___56151;
var G__56154 = cljs.core.count.call(null,c__45345__auto___56151);
var G__56155 = (0);
seq__56136_56140 = G__56152;
chunk__56137_56141 = G__56153;
count__56138_56142 = G__56154;
i__56139_56143 = G__56155;
continue;
} else {
var x_56156 = cljs.core.first.call(null,seq__56136_56150__$1);
ret.push(x_56156);

var G__56157 = cljs.core.next.call(null,seq__56136_56150__$1);
var G__56158 = null;
var G__56159 = (0);
var G__56160 = (0);
seq__56136_56140 = G__56157;
chunk__56137_56141 = G__56158;
count__56138_56142 = G__56159;
i__56139_56143 = G__56160;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__45140__auto__,writer__45141__auto__,opt__45142__auto__){
return cljs.core._write.call(null,writer__45141__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__56161_56165 = cljs.core.seq.call(null,v);
var chunk__56162_56166 = null;
var count__56163_56167 = (0);
var i__56164_56168 = (0);
while(true){
if((i__56164_56168 < count__56163_56167)){
var x_56169 = cljs.core._nth.call(null,chunk__56162_56166,i__56164_56168);
ret.push(x_56169);

var G__56170 = seq__56161_56165;
var G__56171 = chunk__56162_56166;
var G__56172 = count__56163_56167;
var G__56173 = (i__56164_56168 + (1));
seq__56161_56165 = G__56170;
chunk__56162_56166 = G__56171;
count__56163_56167 = G__56172;
i__56164_56168 = G__56173;
continue;
} else {
var temp__4657__auto___56174 = cljs.core.seq.call(null,seq__56161_56165);
if(temp__4657__auto___56174){
var seq__56161_56175__$1 = temp__4657__auto___56174;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56161_56175__$1)){
var c__45345__auto___56176 = cljs.core.chunk_first.call(null,seq__56161_56175__$1);
var G__56177 = cljs.core.chunk_rest.call(null,seq__56161_56175__$1);
var G__56178 = c__45345__auto___56176;
var G__56179 = cljs.core.count.call(null,c__45345__auto___56176);
var G__56180 = (0);
seq__56161_56165 = G__56177;
chunk__56162_56166 = G__56178;
count__56163_56167 = G__56179;
i__56164_56168 = G__56180;
continue;
} else {
var x_56181 = cljs.core.first.call(null,seq__56161_56175__$1);
ret.push(x_56181);

var G__56182 = cljs.core.next.call(null,seq__56161_56175__$1);
var G__56183 = null;
var G__56184 = (0);
var G__56185 = (0);
seq__56161_56165 = G__56182;
chunk__56162_56166 = G__56183;
count__56163_56167 = G__56184;
i__56164_56168 = G__56185;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__45140__auto__,writer__45141__auto__,opt__45142__auto__){
return cljs.core._write.call(null,writer__45141__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__45140__auto__,writer__45141__auto__,opt__45142__auto__){
return cljs.core._write.call(null,writer__45141__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args56186 = [];
var len__45609__auto___56201 = arguments.length;
var i__45610__auto___56202 = (0);
while(true){
if((i__45610__auto___56202 < len__45609__auto___56201)){
args56186.push((arguments[i__45610__auto___56202]));

var G__56203 = (i__45610__auto___56202 + (1));
i__45610__auto___56202 = G__56203;
continue;
} else {
}
break;
}

var G__56188 = args56186.length;
switch (G__56188) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56186.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,({"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__56189 = obj;
G__56189.push(kfn.call(null,k),vfn.call(null,v));

return G__56189;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x56190 = cljs.core.clone.call(null,handlers);
x56190.forEach = ((function (x56190,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__56191 = cljs.core.seq.call(null,coll);
var chunk__56192 = null;
var count__56193 = (0);
var i__56194 = (0);
while(true){
if((i__56194 < count__56193)){
var vec__56195 = cljs.core._nth.call(null,chunk__56192,i__56194);
var k = cljs.core.nth.call(null,vec__56195,(0),null);
var v = cljs.core.nth.call(null,vec__56195,(1),null);
f.call(null,v,k);

var G__56205 = seq__56191;
var G__56206 = chunk__56192;
var G__56207 = count__56193;
var G__56208 = (i__56194 + (1));
seq__56191 = G__56205;
chunk__56192 = G__56206;
count__56193 = G__56207;
i__56194 = G__56208;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__56191);
if(temp__4657__auto__){
var seq__56191__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56191__$1)){
var c__45345__auto__ = cljs.core.chunk_first.call(null,seq__56191__$1);
var G__56209 = cljs.core.chunk_rest.call(null,seq__56191__$1);
var G__56210 = c__45345__auto__;
var G__56211 = cljs.core.count.call(null,c__45345__auto__);
var G__56212 = (0);
seq__56191 = G__56209;
chunk__56192 = G__56210;
count__56193 = G__56211;
i__56194 = G__56212;
continue;
} else {
var vec__56198 = cljs.core.first.call(null,seq__56191__$1);
var k = cljs.core.nth.call(null,vec__56198,(0),null);
var v = cljs.core.nth.call(null,vec__56198,(1),null);
f.call(null,v,k);

var G__56213 = cljs.core.next.call(null,seq__56191__$1);
var G__56214 = null;
var G__56215 = (0);
var G__56216 = (0);
seq__56191 = G__56213;
chunk__56192 = G__56214;
count__56193 = G__56215;
i__56194 = G__56216;
continue;
}
} else {
return null;
}
}
break;
}
});})(x56190,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x56190;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
}),cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;

/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args56217 = [];
var len__45609__auto___56223 = arguments.length;
var i__45610__auto___56224 = (0);
while(true){
if((i__45610__auto___56224 < len__45609__auto___56223)){
args56217.push((arguments[i__45610__auto___56224]));

var G__56225 = (i__45610__auto___56224 + (1));
i__45610__auto___56224 = G__56225;
continue;
} else {
}
break;
}

var G__56219 = args56217.length;
switch (G__56219) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56217.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit56220 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit56220 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta56221){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta56221 = meta56221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit56220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56222,meta56221__$1){
var self__ = this;
var _56222__$1 = this;
return (new cognitect.transit.t_cognitect$transit56220(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta56221__$1));
});

cognitect.transit.t_cognitect$transit56220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56222){
var self__ = this;
var _56222__$1 = this;
return self__.meta56221;
});

cognitect.transit.t_cognitect$transit56220.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit56220.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit56220.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit56220.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit56220.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta56221","meta56221",-205264756,null)], null);
});

cognitect.transit.t_cognitect$transit56220.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit56220.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit56220";

cognitect.transit.t_cognitect$transit56220.cljs$lang$ctorPrWriter = (function (this__45140__auto__,writer__45141__auto__,opt__45142__auto__){
return cljs.core._write.call(null,writer__45141__auto__,"cognitect.transit/t_cognitect$transit56220");
});

cognitect.transit.__GT_t_cognitect$transit56220 = (function cognitect$transit$__GT_t_cognitect$transit56220(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta56221){
return (new cognitect.transit.t_cognitect$transit56220(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta56221));
});

}

return (new cognitect.transit.t_cognitect$transit56220(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;

/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__44534__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__44534__auto__)){
return or__44534__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1484941504640