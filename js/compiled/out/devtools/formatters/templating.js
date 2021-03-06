// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x59374_59375 = value;
x59374_59375.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x59379_59380 = value;
x59379_59380.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x59384_59385 = value;
x59384_59385.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__44485__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__44485__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__44485__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__45579__auto__ = [];
var len__45572__auto___59393 = arguments.length;
var i__45573__auto___59394 = (0);
while(true){
if((i__45573__auto___59394 < len__45572__auto___59393)){
args__45579__auto__.push((arguments[i__45573__auto___59394]));

var G__59395 = (i__45573__auto___59394 + (1));
i__45573__auto___59394 = G__59395;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((0) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__45580__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__59389_59396 = cljs.core.seq.call(null,items);
var chunk__59390_59397 = null;
var count__59391_59398 = (0);
var i__59392_59399 = (0);
while(true){
if((i__59392_59399 < count__59391_59398)){
var item_59400 = cljs.core._nth.call(null,chunk__59390_59397,i__59392_59399);
if(cljs.core.some_QMARK_.call(null,item_59400)){
if(cljs.core.coll_QMARK_.call(null,item_59400)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_59400)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_59400));
}
} else {
}

var G__59401 = seq__59389_59396;
var G__59402 = chunk__59390_59397;
var G__59403 = count__59391_59398;
var G__59404 = (i__59392_59399 + (1));
seq__59389_59396 = G__59401;
chunk__59390_59397 = G__59402;
count__59391_59398 = G__59403;
i__59392_59399 = G__59404;
continue;
} else {
var temp__4657__auto___59405 = cljs.core.seq.call(null,seq__59389_59396);
if(temp__4657__auto___59405){
var seq__59389_59406__$1 = temp__4657__auto___59405;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59389_59406__$1)){
var c__45308__auto___59407 = cljs.core.chunk_first.call(null,seq__59389_59406__$1);
var G__59408 = cljs.core.chunk_rest.call(null,seq__59389_59406__$1);
var G__59409 = c__45308__auto___59407;
var G__59410 = cljs.core.count.call(null,c__45308__auto___59407);
var G__59411 = (0);
seq__59389_59396 = G__59408;
chunk__59390_59397 = G__59409;
count__59391_59398 = G__59410;
i__59392_59399 = G__59411;
continue;
} else {
var item_59412 = cljs.core.first.call(null,seq__59389_59406__$1);
if(cljs.core.some_QMARK_.call(null,item_59412)){
if(cljs.core.coll_QMARK_.call(null,item_59412)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_59412)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_59412));
}
} else {
}

var G__59413 = cljs.core.next.call(null,seq__59389_59406__$1);
var G__59414 = null;
var G__59415 = (0);
var G__59416 = (0);
seq__59389_59396 = G__59413;
chunk__59390_59397 = G__59414;
count__59391_59398 = G__59415;
i__59392_59399 = G__59416;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq59388){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59388));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__45579__auto__ = [];
var len__45572__auto___59424 = arguments.length;
var i__45573__auto___59425 = (0);
while(true){
if((i__45573__auto___59425 < len__45572__auto___59424)){
args__45579__auto__.push((arguments[i__45573__auto___59425]));

var G__59426 = (i__45573__auto___59425 + (1));
i__45573__auto___59425 = G__59426;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((2) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__45580__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__59420_59427 = cljs.core.seq.call(null,children);
var chunk__59421_59428 = null;
var count__59422_59429 = (0);
var i__59423_59430 = (0);
while(true){
if((i__59423_59430 < count__59422_59429)){
var child_59431 = cljs.core._nth.call(null,chunk__59421_59428,i__59423_59430);
if(cljs.core.some_QMARK_.call(null,child_59431)){
if(cljs.core.coll_QMARK_.call(null,child_59431)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_59431))));
} else {
var temp__4655__auto___59432 = devtools.formatters.helpers.pref.call(null,child_59431);
if(cljs.core.truth_(temp__4655__auto___59432)){
var child_value_59433 = temp__4655__auto___59432;
template.push(child_value_59433);
} else {
}
}
} else {
}

var G__59434 = seq__59420_59427;
var G__59435 = chunk__59421_59428;
var G__59436 = count__59422_59429;
var G__59437 = (i__59423_59430 + (1));
seq__59420_59427 = G__59434;
chunk__59421_59428 = G__59435;
count__59422_59429 = G__59436;
i__59423_59430 = G__59437;
continue;
} else {
var temp__4657__auto___59438 = cljs.core.seq.call(null,seq__59420_59427);
if(temp__4657__auto___59438){
var seq__59420_59439__$1 = temp__4657__auto___59438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59420_59439__$1)){
var c__45308__auto___59440 = cljs.core.chunk_first.call(null,seq__59420_59439__$1);
var G__59441 = cljs.core.chunk_rest.call(null,seq__59420_59439__$1);
var G__59442 = c__45308__auto___59440;
var G__59443 = cljs.core.count.call(null,c__45308__auto___59440);
var G__59444 = (0);
seq__59420_59427 = G__59441;
chunk__59421_59428 = G__59442;
count__59422_59429 = G__59443;
i__59423_59430 = G__59444;
continue;
} else {
var child_59445 = cljs.core.first.call(null,seq__59420_59439__$1);
if(cljs.core.some_QMARK_.call(null,child_59445)){
if(cljs.core.coll_QMARK_.call(null,child_59445)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_59445))));
} else {
var temp__4655__auto___59446 = devtools.formatters.helpers.pref.call(null,child_59445);
if(cljs.core.truth_(temp__4655__auto___59446)){
var child_value_59447 = temp__4655__auto___59446;
template.push(child_value_59447);
} else {
}
}
} else {
}

var G__59448 = cljs.core.next.call(null,seq__59420_59439__$1);
var G__59449 = null;
var G__59450 = (0);
var G__59451 = (0);
seq__59420_59427 = G__59448;
chunk__59421_59428 = G__59449;
count__59422_59429 = G__59450;
i__59423_59430 = G__59451;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq59417){
var G__59418 = cljs.core.first.call(null,seq59417);
var seq59417__$1 = cljs.core.next.call(null,seq59417);
var G__59419 = cljs.core.first.call(null,seq59417__$1);
var seq59417__$2 = cljs.core.next.call(null,seq59417__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__59418,G__59419,seq59417__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__45579__auto__ = [];
var len__45572__auto___59454 = arguments.length;
var i__45573__auto___59455 = (0);
while(true){
if((i__45573__auto___59455 < len__45572__auto___59454)){
args__45579__auto__.push((arguments[i__45573__auto___59455]));

var G__59456 = (i__45573__auto___59455 + (1));
i__45573__auto___59455 = G__59456;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((1) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45580__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq59452){
var G__59453 = cljs.core.first.call(null,seq59452);
var seq59452__$1 = cljs.core.next.call(null,seq59452);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59453,seq59452__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__45579__auto__ = [];
var len__45572__auto___59459 = arguments.length;
var i__45573__auto___59460 = (0);
while(true){
if((i__45573__auto___59460 < len__45572__auto___59459)){
args__45579__auto__.push((arguments[i__45573__auto___59460]));

var G__59461 = (i__45573__auto___59460 + (1));
i__45573__auto___59460 = G__59461;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((1) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45580__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq59457){
var G__59458 = cljs.core.first.call(null,seq59457);
var seq59457__$1 = cljs.core.next.call(null,seq59457);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__59458,seq59457__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args59462 = [];
var len__45572__auto___59467 = arguments.length;
var i__45573__auto___59468 = (0);
while(true){
if((i__45573__auto___59468 < len__45572__auto___59467)){
args59462.push((arguments[i__45573__auto___59468]));

var G__59469 = (i__45573__auto___59468 + (1));
i__45573__auto___59468 = G__59469;
continue;
} else {
}
break;
}

var G__59464 = args59462.length;
switch (G__59464) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59462.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj59466 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__44497__auto__ = start_index;
if(cljs.core.truth_(or__44497__auto__)){
return or__44497__auto__;
} else {
return (0);
}
})()};
return obj59466;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__45579__auto__ = [];
var len__45572__auto___59477 = arguments.length;
var i__45573__auto___59478 = (0);
while(true){
if((i__45573__auto___59478 < len__45572__auto___59477)){
args__45579__auto__.push((arguments[i__45573__auto___59478]));

var G__59479 = (i__45573__auto___59478 + (1));
i__45573__auto___59478 = G__59479;
continue;
} else {
}
break;
}

var argseq__45580__auto__ = ((((1) < args__45579__auto__.length))?(new cljs.core.IndexedSeq(args__45579__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__45580__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__59473){
var vec__59474 = p__59473;
var state_override_fn = cljs.core.nth.call(null,vec__59474,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq59471){
var G__59472 = cljs.core.first.call(null,seq59471);
var seq59471__$1 = cljs.core.next.call(null,seq59471);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__59472,seq59471__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__45483__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_59483_59486 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_59484_59487 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_59483_59486,_STAR_print_fn_STAR_59484_59487,sb__45483__auto__){
return (function (x__45484__auto__){
return sb__45483__auto__.append(x__45484__auto__);
});})(_STAR_print_newline_STAR_59483_59486,_STAR_print_fn_STAR_59484_59487,sb__45483__auto__))
;

try{var _STAR_print_level_STAR_59485_59488 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_59485_59488;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_59484_59487;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_59483_59486;
}
return [cljs.core.str(sb__45483__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_59490 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_59490;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__59492 = name;
switch (G__59492) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__59497 = tag;
var html_tag = cljs.core.nth.call(null,vec__59497,(0),null);
var style = cljs.core.nth.call(null,vec__59497,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_59501 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_59501;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_59504 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_59505 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_59505;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_59504;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__59506 = initial_value;
var G__59507 = value.call(null);
initial_value = G__59506;
value = G__59507;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__59508 = initial_value;
var G__59509 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__59508;
value = G__59509;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__59510 = initial_value;
var G__59511 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__59510;
value = G__59511;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1484940846419