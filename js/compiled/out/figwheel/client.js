// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.7";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args55154 = [];
var len__45609__auto___55157 = arguments.length;
var i__45610__auto___55158 = (0);
while(true){
if((i__45610__auto___55158 < len__45609__auto___55157)){
args55154.push((arguments[i__45610__auto___55158]));

var G__55159 = (i__45610__auto___55158 + (1));
i__45610__auto___55158 = G__55159;
continue;
} else {
}
break;
}

var G__55156 = args55154.length;
switch (G__55156) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55154.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__45616__auto__ = [];
var len__45609__auto___55162 = arguments.length;
var i__45610__auto___55163 = (0);
while(true){
if((i__45610__auto___55163 < len__45609__auto___55162)){
args__45616__auto__.push((arguments[i__45610__auto___55163]));

var G__55164 = (i__45610__auto___55163 + (1));
i__45610__auto___55163 = G__55164;
continue;
} else {
}
break;
}

var argseq__45617__auto__ = ((((0) < args__45616__auto__.length))?(new cljs.core.IndexedSeq(args__45616__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__45617__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq55161){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55161));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__45616__auto__ = [];
var len__45609__auto___55166 = arguments.length;
var i__45610__auto___55167 = (0);
while(true){
if((i__45610__auto___55167 < len__45609__auto___55166)){
args__45616__auto__.push((arguments[i__45610__auto___55167]));

var G__55168 = (i__45610__auto___55167 + (1));
i__45610__auto___55167 = G__55168;
continue;
} else {
}
break;
}

var argseq__45617__auto__ = ((((0) < args__45616__auto__.length))?(new cljs.core.IndexedSeq(args__45616__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__45617__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq55165){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55165));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__55169 = cljs.core._EQ_;
var expr__55170 = (function (){var or__44534__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e55173){if((e55173 instanceof Error)){
var e = e55173;
return false;
} else {
throw e55173;

}
}})();
if(cljs.core.truth_(or__44534__auto__)){
return or__44534__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__55169.call(null,"true",expr__55170))){
return true;
} else {
if(cljs.core.truth_(pred__55169.call(null,"false",expr__55170))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__55170)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e55175){if((e55175 instanceof Error)){
var e = e55175;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e55175;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__55176){
var map__55179 = p__55176;
var map__55179__$1 = ((((!((map__55179 == null)))?((((map__55179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55179):map__55179);
var message = cljs.core.get.call(null,map__55179__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__55179__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__44534__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__44534__auto__)){
return or__44534__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__44522__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__44522__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__44522__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__48693__auto___55341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto___55341,ch){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto___55341,ch){
return (function (state_55310){
var state_val_55311 = (state_55310[(1)]);
if((state_val_55311 === (7))){
var inst_55306 = (state_55310[(2)]);
var state_55310__$1 = state_55310;
var statearr_55312_55342 = state_55310__$1;
(statearr_55312_55342[(2)] = inst_55306);

(statearr_55312_55342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55311 === (1))){
var state_55310__$1 = state_55310;
var statearr_55313_55343 = state_55310__$1;
(statearr_55313_55343[(2)] = null);

(statearr_55313_55343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55311 === (4))){
var inst_55263 = (state_55310[(7)]);
var inst_55263__$1 = (state_55310[(2)]);
var state_55310__$1 = (function (){var statearr_55314 = state_55310;
(statearr_55314[(7)] = inst_55263__$1);

return statearr_55314;
})();
if(cljs.core.truth_(inst_55263__$1)){
var statearr_55315_55344 = state_55310__$1;
(statearr_55315_55344[(1)] = (5));

} else {
var statearr_55316_55345 = state_55310__$1;
(statearr_55316_55345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55311 === (15))){
var inst_55270 = (state_55310[(8)]);
var inst_55285 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_55270);
var inst_55286 = cljs.core.first.call(null,inst_55285);
var inst_55287 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_55286);
var inst_55288 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_55287)].join('');
var inst_55289 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_55288);
var state_55310__$1 = state_55310;
var statearr_55317_55346 = state_55310__$1;
(statearr_55317_55346[(2)] = inst_55289);

(statearr_55317_55346[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55311 === (13))){
var inst_55294 = (state_55310[(2)]);
var state_55310__$1 = state_55310;
var statearr_55318_55347 = state_55310__$1;
(statearr_55318_55347[(2)] = inst_55294);

(statearr_55318_55347[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55311 === (6))){
var state_55310__$1 = state_55310;
var statearr_55319_55348 = state_55310__$1;
(statearr_55319_55348[(2)] = null);

(statearr_55319_55348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55311 === (17))){
var inst_55292 = (state_55310[(2)]);
var state_55310__$1 = state_55310;
var statearr_55320_55349 = state_55310__$1;
(statearr_55320_55349[(2)] = inst_55292);

(statearr_55320_55349[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55311 === (3))){
var inst_55308 = (state_55310[(2)]);
var state_55310__$1 = state_55310;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55310__$1,inst_55308);
} else {
if((state_val_55311 === (12))){
var inst_55269 = (state_55310[(9)]);
var inst_55283 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_55269,opts);
var state_55310__$1 = state_55310;
if(cljs.core.truth_(inst_55283)){
var statearr_55321_55350 = state_55310__$1;
(statearr_55321_55350[(1)] = (15));

} else {
var statearr_55322_55351 = state_55310__$1;
(statearr_55322_55351[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55311 === (2))){
var state_55310__$1 = state_55310;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55310__$1,(4),ch);
} else {
if((state_val_55311 === (11))){
var inst_55270 = (state_55310[(8)]);
var inst_55275 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55276 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_55270);
var inst_55277 = cljs.core.async.timeout.call(null,(1000));
var inst_55278 = [inst_55276,inst_55277];
var inst_55279 = (new cljs.core.PersistentVector(null,2,(5),inst_55275,inst_55278,null));
var state_55310__$1 = state_55310;
return cljs.core.async.ioc_alts_BANG_.call(null,state_55310__$1,(14),inst_55279);
} else {
if((state_val_55311 === (9))){
var inst_55270 = (state_55310[(8)]);
var inst_55296 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_55297 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_55270);
var inst_55298 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_55297);
var inst_55299 = [cljs.core.str("Not loading: "),cljs.core.str(inst_55298)].join('');
var inst_55300 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_55299);
var state_55310__$1 = (function (){var statearr_55323 = state_55310;
(statearr_55323[(10)] = inst_55296);

return statearr_55323;
})();
var statearr_55324_55352 = state_55310__$1;
(statearr_55324_55352[(2)] = inst_55300);

(statearr_55324_55352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55311 === (5))){
var inst_55263 = (state_55310[(7)]);
var inst_55265 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_55266 = (new cljs.core.PersistentArrayMap(null,2,inst_55265,null));
var inst_55267 = (new cljs.core.PersistentHashSet(null,inst_55266,null));
var inst_55268 = figwheel.client.focus_msgs.call(null,inst_55267,inst_55263);
var inst_55269 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_55268);
var inst_55270 = cljs.core.first.call(null,inst_55268);
var inst_55271 = figwheel.client.autoload_QMARK_.call(null);
var state_55310__$1 = (function (){var statearr_55325 = state_55310;
(statearr_55325[(9)] = inst_55269);

(statearr_55325[(8)] = inst_55270);

return statearr_55325;
})();
if(cljs.core.truth_(inst_55271)){
var statearr_55326_55353 = state_55310__$1;
(statearr_55326_55353[(1)] = (8));

} else {
var statearr_55327_55354 = state_55310__$1;
(statearr_55327_55354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55311 === (14))){
var inst_55281 = (state_55310[(2)]);
var state_55310__$1 = state_55310;
var statearr_55328_55355 = state_55310__$1;
(statearr_55328_55355[(2)] = inst_55281);

(statearr_55328_55355[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55311 === (16))){
var state_55310__$1 = state_55310;
var statearr_55329_55356 = state_55310__$1;
(statearr_55329_55356[(2)] = null);

(statearr_55329_55356[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55311 === (10))){
var inst_55302 = (state_55310[(2)]);
var state_55310__$1 = (function (){var statearr_55330 = state_55310;
(statearr_55330[(11)] = inst_55302);

return statearr_55330;
})();
var statearr_55331_55357 = state_55310__$1;
(statearr_55331_55357[(2)] = null);

(statearr_55331_55357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55311 === (8))){
var inst_55269 = (state_55310[(9)]);
var inst_55273 = figwheel.client.reload_file_state_QMARK_.call(null,inst_55269,opts);
var state_55310__$1 = state_55310;
if(cljs.core.truth_(inst_55273)){
var statearr_55332_55358 = state_55310__$1;
(statearr_55332_55358[(1)] = (11));

} else {
var statearr_55333_55359 = state_55310__$1;
(statearr_55333_55359[(1)] = (12));

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
});})(c__48693__auto___55341,ch))
;
return ((function (switch__48581__auto__,c__48693__auto___55341,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__48582__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__48582__auto____0 = (function (){
var statearr_55337 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55337[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__48582__auto__);

(statearr_55337[(1)] = (1));

return statearr_55337;
});
var figwheel$client$file_reloader_plugin_$_state_machine__48582__auto____1 = (function (state_55310){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_55310);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e55338){if((e55338 instanceof Object)){
var ex__48585__auto__ = e55338;
var statearr_55339_55360 = state_55310;
(statearr_55339_55360[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55310);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55361 = state_55310;
state_55310 = G__55361;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__48582__auto__ = function(state_55310){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__48582__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__48582__auto____1.call(this,state_55310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__48582__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__48582__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto___55341,ch))
})();
var state__48695__auto__ = (function (){var statearr_55340 = f__48694__auto__.call(null);
(statearr_55340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto___55341);

return statearr_55340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto___55341,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__55362_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__55362_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_55365 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_55365){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e55364){if((e55364 instanceof Error)){
var e = e55364;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_55365], null));
} else {
var e = e55364;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_55365))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__55366){
var map__55375 = p__55366;
var map__55375__$1 = ((((!((map__55375 == null)))?((((map__55375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55375):map__55375);
var opts = map__55375__$1;
var build_id = cljs.core.get.call(null,map__55375__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__55375,map__55375__$1,opts,build_id){
return (function (p__55377){
var vec__55378 = p__55377;
var seq__55379 = cljs.core.seq.call(null,vec__55378);
var first__55380 = cljs.core.first.call(null,seq__55379);
var seq__55379__$1 = cljs.core.next.call(null,seq__55379);
var map__55381 = first__55380;
var map__55381__$1 = ((((!((map__55381 == null)))?((((map__55381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55381):map__55381);
var msg = map__55381__$1;
var msg_name = cljs.core.get.call(null,map__55381__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__55379__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__55378,seq__55379,first__55380,seq__55379__$1,map__55381,map__55381__$1,msg,msg_name,_,map__55375,map__55375__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__55378,seq__55379,first__55380,seq__55379__$1,map__55381,map__55381__$1,msg,msg_name,_,map__55375,map__55375__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__55375,map__55375__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__55389){
var vec__55390 = p__55389;
var seq__55391 = cljs.core.seq.call(null,vec__55390);
var first__55392 = cljs.core.first.call(null,seq__55391);
var seq__55391__$1 = cljs.core.next.call(null,seq__55391);
var map__55393 = first__55392;
var map__55393__$1 = ((((!((map__55393 == null)))?((((map__55393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55393):map__55393);
var msg = map__55393__$1;
var msg_name = cljs.core.get.call(null,map__55393__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__55391__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__55395){
var map__55407 = p__55395;
var map__55407__$1 = ((((!((map__55407 == null)))?((((map__55407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55407):map__55407);
var on_compile_warning = cljs.core.get.call(null,map__55407__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__55407__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__55407,map__55407__$1,on_compile_warning,on_compile_fail){
return (function (p__55409){
var vec__55410 = p__55409;
var seq__55411 = cljs.core.seq.call(null,vec__55410);
var first__55412 = cljs.core.first.call(null,seq__55411);
var seq__55411__$1 = cljs.core.next.call(null,seq__55411);
var map__55413 = first__55412;
var map__55413__$1 = ((((!((map__55413 == null)))?((((map__55413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55413):map__55413);
var msg = map__55413__$1;
var msg_name = cljs.core.get.call(null,map__55413__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__55411__$1;
var pred__55415 = cljs.core._EQ_;
var expr__55416 = msg_name;
if(cljs.core.truth_(pred__55415.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__55416))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__55415.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__55416))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__55407,map__55407__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__48693__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto__,msg_hist,msg_names,msg){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto__,msg_hist,msg_names,msg){
return (function (state_55644){
var state_val_55645 = (state_55644[(1)]);
if((state_val_55645 === (7))){
var inst_55564 = (state_55644[(2)]);
var state_55644__$1 = state_55644;
if(cljs.core.truth_(inst_55564)){
var statearr_55646_55696 = state_55644__$1;
(statearr_55646_55696[(1)] = (8));

} else {
var statearr_55647_55697 = state_55644__$1;
(statearr_55647_55697[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (20))){
var inst_55638 = (state_55644[(2)]);
var state_55644__$1 = state_55644;
var statearr_55648_55698 = state_55644__$1;
(statearr_55648_55698[(2)] = inst_55638);

(statearr_55648_55698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (27))){
var inst_55634 = (state_55644[(2)]);
var state_55644__$1 = state_55644;
var statearr_55649_55699 = state_55644__$1;
(statearr_55649_55699[(2)] = inst_55634);

(statearr_55649_55699[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (1))){
var inst_55557 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_55644__$1 = state_55644;
if(cljs.core.truth_(inst_55557)){
var statearr_55650_55700 = state_55644__$1;
(statearr_55650_55700[(1)] = (2));

} else {
var statearr_55651_55701 = state_55644__$1;
(statearr_55651_55701[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (24))){
var inst_55636 = (state_55644[(2)]);
var state_55644__$1 = state_55644;
var statearr_55652_55702 = state_55644__$1;
(statearr_55652_55702[(2)] = inst_55636);

(statearr_55652_55702[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (4))){
var inst_55642 = (state_55644[(2)]);
var state_55644__$1 = state_55644;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55644__$1,inst_55642);
} else {
if((state_val_55645 === (15))){
var inst_55640 = (state_55644[(2)]);
var state_55644__$1 = state_55644;
var statearr_55653_55703 = state_55644__$1;
(statearr_55653_55703[(2)] = inst_55640);

(statearr_55653_55703[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (21))){
var inst_55593 = (state_55644[(2)]);
var inst_55594 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55595 = figwheel.client.auto_jump_to_error.call(null,opts,inst_55594);
var state_55644__$1 = (function (){var statearr_55654 = state_55644;
(statearr_55654[(7)] = inst_55593);

return statearr_55654;
})();
var statearr_55655_55704 = state_55644__$1;
(statearr_55655_55704[(2)] = inst_55595);

(statearr_55655_55704[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (31))){
var inst_55623 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_55644__$1 = state_55644;
if(cljs.core.truth_(inst_55623)){
var statearr_55656_55705 = state_55644__$1;
(statearr_55656_55705[(1)] = (34));

} else {
var statearr_55657_55706 = state_55644__$1;
(statearr_55657_55706[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (32))){
var inst_55632 = (state_55644[(2)]);
var state_55644__$1 = state_55644;
var statearr_55658_55707 = state_55644__$1;
(statearr_55658_55707[(2)] = inst_55632);

(statearr_55658_55707[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (33))){
var inst_55619 = (state_55644[(2)]);
var inst_55620 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55621 = figwheel.client.auto_jump_to_error.call(null,opts,inst_55620);
var state_55644__$1 = (function (){var statearr_55659 = state_55644;
(statearr_55659[(8)] = inst_55619);

return statearr_55659;
})();
var statearr_55660_55708 = state_55644__$1;
(statearr_55660_55708[(2)] = inst_55621);

(statearr_55660_55708[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (13))){
var inst_55578 = figwheel.client.heads_up.clear.call(null);
var state_55644__$1 = state_55644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55644__$1,(16),inst_55578);
} else {
if((state_val_55645 === (22))){
var inst_55599 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55600 = figwheel.client.heads_up.append_warning_message.call(null,inst_55599);
var state_55644__$1 = state_55644;
var statearr_55661_55709 = state_55644__$1;
(statearr_55661_55709[(2)] = inst_55600);

(statearr_55661_55709[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (36))){
var inst_55630 = (state_55644[(2)]);
var state_55644__$1 = state_55644;
var statearr_55662_55710 = state_55644__$1;
(statearr_55662_55710[(2)] = inst_55630);

(statearr_55662_55710[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (29))){
var inst_55610 = (state_55644[(2)]);
var inst_55611 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55612 = figwheel.client.auto_jump_to_error.call(null,opts,inst_55611);
var state_55644__$1 = (function (){var statearr_55663 = state_55644;
(statearr_55663[(9)] = inst_55610);

return statearr_55663;
})();
var statearr_55664_55711 = state_55644__$1;
(statearr_55664_55711[(2)] = inst_55612);

(statearr_55664_55711[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (6))){
var inst_55559 = (state_55644[(10)]);
var state_55644__$1 = state_55644;
var statearr_55665_55712 = state_55644__$1;
(statearr_55665_55712[(2)] = inst_55559);

(statearr_55665_55712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (28))){
var inst_55606 = (state_55644[(2)]);
var inst_55607 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55608 = figwheel.client.heads_up.display_warning.call(null,inst_55607);
var state_55644__$1 = (function (){var statearr_55666 = state_55644;
(statearr_55666[(11)] = inst_55606);

return statearr_55666;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55644__$1,(29),inst_55608);
} else {
if((state_val_55645 === (25))){
var inst_55604 = figwheel.client.heads_up.clear.call(null);
var state_55644__$1 = state_55644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55644__$1,(28),inst_55604);
} else {
if((state_val_55645 === (34))){
var inst_55625 = figwheel.client.heads_up.flash_loaded.call(null);
var state_55644__$1 = state_55644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55644__$1,(37),inst_55625);
} else {
if((state_val_55645 === (17))){
var inst_55584 = (state_55644[(2)]);
var inst_55585 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55586 = figwheel.client.auto_jump_to_error.call(null,opts,inst_55585);
var state_55644__$1 = (function (){var statearr_55667 = state_55644;
(statearr_55667[(12)] = inst_55584);

return statearr_55667;
})();
var statearr_55668_55713 = state_55644__$1;
(statearr_55668_55713[(2)] = inst_55586);

(statearr_55668_55713[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (3))){
var inst_55576 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_55644__$1 = state_55644;
if(cljs.core.truth_(inst_55576)){
var statearr_55669_55714 = state_55644__$1;
(statearr_55669_55714[(1)] = (13));

} else {
var statearr_55670_55715 = state_55644__$1;
(statearr_55670_55715[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (12))){
var inst_55572 = (state_55644[(2)]);
var state_55644__$1 = state_55644;
var statearr_55671_55716 = state_55644__$1;
(statearr_55671_55716[(2)] = inst_55572);

(statearr_55671_55716[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (2))){
var inst_55559 = (state_55644[(10)]);
var inst_55559__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_55644__$1 = (function (){var statearr_55672 = state_55644;
(statearr_55672[(10)] = inst_55559__$1);

return statearr_55672;
})();
if(cljs.core.truth_(inst_55559__$1)){
var statearr_55673_55717 = state_55644__$1;
(statearr_55673_55717[(1)] = (5));

} else {
var statearr_55674_55718 = state_55644__$1;
(statearr_55674_55718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (23))){
var inst_55602 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_55644__$1 = state_55644;
if(cljs.core.truth_(inst_55602)){
var statearr_55675_55719 = state_55644__$1;
(statearr_55675_55719[(1)] = (25));

} else {
var statearr_55676_55720 = state_55644__$1;
(statearr_55676_55720[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (35))){
var state_55644__$1 = state_55644;
var statearr_55677_55721 = state_55644__$1;
(statearr_55677_55721[(2)] = null);

(statearr_55677_55721[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (19))){
var inst_55597 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_55644__$1 = state_55644;
if(cljs.core.truth_(inst_55597)){
var statearr_55678_55722 = state_55644__$1;
(statearr_55678_55722[(1)] = (22));

} else {
var statearr_55679_55723 = state_55644__$1;
(statearr_55679_55723[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (11))){
var inst_55568 = (state_55644[(2)]);
var state_55644__$1 = state_55644;
var statearr_55680_55724 = state_55644__$1;
(statearr_55680_55724[(2)] = inst_55568);

(statearr_55680_55724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (9))){
var inst_55570 = figwheel.client.heads_up.clear.call(null);
var state_55644__$1 = state_55644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55644__$1,(12),inst_55570);
} else {
if((state_val_55645 === (5))){
var inst_55561 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_55644__$1 = state_55644;
var statearr_55681_55725 = state_55644__$1;
(statearr_55681_55725[(2)] = inst_55561);

(statearr_55681_55725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (14))){
var inst_55588 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_55644__$1 = state_55644;
if(cljs.core.truth_(inst_55588)){
var statearr_55682_55726 = state_55644__$1;
(statearr_55682_55726[(1)] = (18));

} else {
var statearr_55683_55727 = state_55644__$1;
(statearr_55683_55727[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (26))){
var inst_55614 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_55644__$1 = state_55644;
if(cljs.core.truth_(inst_55614)){
var statearr_55684_55728 = state_55644__$1;
(statearr_55684_55728[(1)] = (30));

} else {
var statearr_55685_55729 = state_55644__$1;
(statearr_55685_55729[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (16))){
var inst_55580 = (state_55644[(2)]);
var inst_55581 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55582 = figwheel.client.heads_up.display_exception.call(null,inst_55581);
var state_55644__$1 = (function (){var statearr_55686 = state_55644;
(statearr_55686[(13)] = inst_55580);

return statearr_55686;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55644__$1,(17),inst_55582);
} else {
if((state_val_55645 === (30))){
var inst_55616 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55617 = figwheel.client.heads_up.display_warning.call(null,inst_55616);
var state_55644__$1 = state_55644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55644__$1,(33),inst_55617);
} else {
if((state_val_55645 === (10))){
var inst_55574 = (state_55644[(2)]);
var state_55644__$1 = state_55644;
var statearr_55687_55730 = state_55644__$1;
(statearr_55687_55730[(2)] = inst_55574);

(statearr_55687_55730[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (18))){
var inst_55590 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_55591 = figwheel.client.heads_up.display_exception.call(null,inst_55590);
var state_55644__$1 = state_55644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55644__$1,(21),inst_55591);
} else {
if((state_val_55645 === (37))){
var inst_55627 = (state_55644[(2)]);
var state_55644__$1 = state_55644;
var statearr_55688_55731 = state_55644__$1;
(statearr_55688_55731[(2)] = inst_55627);

(statearr_55688_55731[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55645 === (8))){
var inst_55566 = figwheel.client.heads_up.flash_loaded.call(null);
var state_55644__$1 = state_55644;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55644__$1,(11),inst_55566);
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
});})(c__48693__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__48581__auto__,c__48693__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48582__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48582__auto____0 = (function (){
var statearr_55692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55692[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48582__auto__);

(statearr_55692[(1)] = (1));

return statearr_55692;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48582__auto____1 = (function (state_55644){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_55644);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e55693){if((e55693 instanceof Object)){
var ex__48585__auto__ = e55693;
var statearr_55694_55732 = state_55644;
(statearr_55694_55732[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55644);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55733 = state_55644;
state_55644 = G__55733;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48582__auto__ = function(state_55644){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48582__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48582__auto____1.call(this,state_55644);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48582__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48582__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto__,msg_hist,msg_names,msg))
})();
var state__48695__auto__ = (function (){var statearr_55695 = f__48694__auto__.call(null);
(statearr_55695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto__);

return statearr_55695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto__,msg_hist,msg_names,msg))
);

return c__48693__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__48693__auto___55796 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto___55796,ch){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto___55796,ch){
return (function (state_55779){
var state_val_55780 = (state_55779[(1)]);
if((state_val_55780 === (1))){
var state_55779__$1 = state_55779;
var statearr_55781_55797 = state_55779__$1;
(statearr_55781_55797[(2)] = null);

(statearr_55781_55797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55780 === (2))){
var state_55779__$1 = state_55779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55779__$1,(4),ch);
} else {
if((state_val_55780 === (3))){
var inst_55777 = (state_55779[(2)]);
var state_55779__$1 = state_55779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55779__$1,inst_55777);
} else {
if((state_val_55780 === (4))){
var inst_55767 = (state_55779[(7)]);
var inst_55767__$1 = (state_55779[(2)]);
var state_55779__$1 = (function (){var statearr_55782 = state_55779;
(statearr_55782[(7)] = inst_55767__$1);

return statearr_55782;
})();
if(cljs.core.truth_(inst_55767__$1)){
var statearr_55783_55798 = state_55779__$1;
(statearr_55783_55798[(1)] = (5));

} else {
var statearr_55784_55799 = state_55779__$1;
(statearr_55784_55799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55780 === (5))){
var inst_55767 = (state_55779[(7)]);
var inst_55769 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_55767);
var state_55779__$1 = state_55779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55779__$1,(8),inst_55769);
} else {
if((state_val_55780 === (6))){
var state_55779__$1 = state_55779;
var statearr_55785_55800 = state_55779__$1;
(statearr_55785_55800[(2)] = null);

(statearr_55785_55800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55780 === (7))){
var inst_55775 = (state_55779[(2)]);
var state_55779__$1 = state_55779;
var statearr_55786_55801 = state_55779__$1;
(statearr_55786_55801[(2)] = inst_55775);

(statearr_55786_55801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55780 === (8))){
var inst_55771 = (state_55779[(2)]);
var state_55779__$1 = (function (){var statearr_55787 = state_55779;
(statearr_55787[(8)] = inst_55771);

return statearr_55787;
})();
var statearr_55788_55802 = state_55779__$1;
(statearr_55788_55802[(2)] = null);

(statearr_55788_55802[(1)] = (2));


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
});})(c__48693__auto___55796,ch))
;
return ((function (switch__48581__auto__,c__48693__auto___55796,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__48582__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__48582__auto____0 = (function (){
var statearr_55792 = [null,null,null,null,null,null,null,null,null];
(statearr_55792[(0)] = figwheel$client$heads_up_plugin_$_state_machine__48582__auto__);

(statearr_55792[(1)] = (1));

return statearr_55792;
});
var figwheel$client$heads_up_plugin_$_state_machine__48582__auto____1 = (function (state_55779){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_55779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e55793){if((e55793 instanceof Object)){
var ex__48585__auto__ = e55793;
var statearr_55794_55803 = state_55779;
(statearr_55794_55803[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55804 = state_55779;
state_55779 = G__55804;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__48582__auto__ = function(state_55779){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__48582__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__48582__auto____1.call(this,state_55779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__48582__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__48582__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto___55796,ch))
})();
var state__48695__auto__ = (function (){var statearr_55795 = f__48694__auto__.call(null);
(statearr_55795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto___55796);

return statearr_55795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto___55796,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__48693__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto__){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto__){
return (function (state_55825){
var state_val_55826 = (state_55825[(1)]);
if((state_val_55826 === (1))){
var inst_55820 = cljs.core.async.timeout.call(null,(3000));
var state_55825__$1 = state_55825;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55825__$1,(2),inst_55820);
} else {
if((state_val_55826 === (2))){
var inst_55822 = (state_55825[(2)]);
var inst_55823 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_55825__$1 = (function (){var statearr_55827 = state_55825;
(statearr_55827[(7)] = inst_55822);

return statearr_55827;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55825__$1,inst_55823);
} else {
return null;
}
}
});})(c__48693__auto__))
;
return ((function (switch__48581__auto__,c__48693__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__48582__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__48582__auto____0 = (function (){
var statearr_55831 = [null,null,null,null,null,null,null,null];
(statearr_55831[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__48582__auto__);

(statearr_55831[(1)] = (1));

return statearr_55831;
});
var figwheel$client$enforce_project_plugin_$_state_machine__48582__auto____1 = (function (state_55825){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_55825);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e55832){if((e55832 instanceof Object)){
var ex__48585__auto__ = e55832;
var statearr_55833_55835 = state_55825;
(statearr_55833_55835[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55825);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55832;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55836 = state_55825;
state_55825 = G__55836;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__48582__auto__ = function(state_55825){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__48582__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__48582__auto____1.call(this,state_55825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__48582__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__48582__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto__))
})();
var state__48695__auto__ = (function (){var statearr_55834 = f__48694__auto__.call(null);
(statearr_55834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto__);

return statearr_55834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto__))
);

return c__48693__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__48693__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto__,figwheel_version,temp__4657__auto__){
return (function (state_55859){
var state_val_55860 = (state_55859[(1)]);
if((state_val_55860 === (1))){
var inst_55853 = cljs.core.async.timeout.call(null,(2000));
var state_55859__$1 = state_55859;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55859__$1,(2),inst_55853);
} else {
if((state_val_55860 === (2))){
var inst_55855 = (state_55859[(2)]);
var inst_55856 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_55857 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_55856);
var state_55859__$1 = (function (){var statearr_55861 = state_55859;
(statearr_55861[(7)] = inst_55855);

return statearr_55861;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55859__$1,inst_55857);
} else {
return null;
}
}
});})(c__48693__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__48581__auto__,c__48693__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48582__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48582__auto____0 = (function (){
var statearr_55865 = [null,null,null,null,null,null,null,null];
(statearr_55865[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48582__auto__);

(statearr_55865[(1)] = (1));

return statearr_55865;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48582__auto____1 = (function (state_55859){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_55859);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e55866){if((e55866 instanceof Object)){
var ex__48585__auto__ = e55866;
var statearr_55867_55869 = state_55859;
(statearr_55867_55869[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55859);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55866;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55870 = state_55859;
state_55859 = G__55870;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48582__auto__ = function(state_55859){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48582__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48582__auto____1.call(this,state_55859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48582__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48582__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto__,figwheel_version,temp__4657__auto__))
})();
var state__48695__auto__ = (function (){var statearr_55868 = f__48694__auto__.call(null);
(statearr_55868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto__);

return statearr_55868;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto__,figwheel_version,temp__4657__auto__))
);

return c__48693__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__55871){
var map__55875 = p__55871;
var map__55875__$1 = ((((!((map__55875 == null)))?((((map__55875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55875):map__55875);
var file = cljs.core.get.call(null,map__55875__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__55875__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__55875__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__55877 = "";
var G__55877__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__55877),cljs.core.str("file "),cljs.core.str(file)].join(''):G__55877);
var G__55877__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__55877__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__55877__$1);
if(cljs.core.truth_((function (){var and__44522__auto__ = line;
if(cljs.core.truth_(and__44522__auto__)){
return column;
} else {
return and__44522__auto__;
}
})())){
return [cljs.core.str(G__55877__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__55877__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__55878){
var map__55885 = p__55878;
var map__55885__$1 = ((((!((map__55885 == null)))?((((map__55885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55885):map__55885);
var ed = map__55885__$1;
var formatted_exception = cljs.core.get.call(null,map__55885__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__55885__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__55885__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__55887_55891 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__55888_55892 = null;
var count__55889_55893 = (0);
var i__55890_55894 = (0);
while(true){
if((i__55890_55894 < count__55889_55893)){
var msg_55895 = cljs.core._nth.call(null,chunk__55888_55892,i__55890_55894);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55895);

var G__55896 = seq__55887_55891;
var G__55897 = chunk__55888_55892;
var G__55898 = count__55889_55893;
var G__55899 = (i__55890_55894 + (1));
seq__55887_55891 = G__55896;
chunk__55888_55892 = G__55897;
count__55889_55893 = G__55898;
i__55890_55894 = G__55899;
continue;
} else {
var temp__4657__auto___55900 = cljs.core.seq.call(null,seq__55887_55891);
if(temp__4657__auto___55900){
var seq__55887_55901__$1 = temp__4657__auto___55900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55887_55901__$1)){
var c__45345__auto___55902 = cljs.core.chunk_first.call(null,seq__55887_55901__$1);
var G__55903 = cljs.core.chunk_rest.call(null,seq__55887_55901__$1);
var G__55904 = c__45345__auto___55902;
var G__55905 = cljs.core.count.call(null,c__45345__auto___55902);
var G__55906 = (0);
seq__55887_55891 = G__55903;
chunk__55888_55892 = G__55904;
count__55889_55893 = G__55905;
i__55890_55894 = G__55906;
continue;
} else {
var msg_55907 = cljs.core.first.call(null,seq__55887_55901__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_55907);

var G__55908 = cljs.core.next.call(null,seq__55887_55901__$1);
var G__55909 = null;
var G__55910 = (0);
var G__55911 = (0);
seq__55887_55891 = G__55908;
chunk__55888_55892 = G__55909;
count__55889_55893 = G__55910;
i__55890_55894 = G__55911;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__55912){
var map__55915 = p__55912;
var map__55915__$1 = ((((!((map__55915 == null)))?((((map__55915.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55915.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55915):map__55915);
var w = map__55915__$1;
var message = cljs.core.get.call(null,map__55915__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,336,336,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,328,328,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__44522__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__44522__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__44522__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__55927 = cljs.core.seq.call(null,plugins);
var chunk__55928 = null;
var count__55929 = (0);
var i__55930 = (0);
while(true){
if((i__55930 < count__55929)){
var vec__55931 = cljs.core._nth.call(null,chunk__55928,i__55930);
var k = cljs.core.nth.call(null,vec__55931,(0),null);
var plugin = cljs.core.nth.call(null,vec__55931,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55937 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55927,chunk__55928,count__55929,i__55930,pl_55937,vec__55931,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_55937.call(null,msg_hist);
});})(seq__55927,chunk__55928,count__55929,i__55930,pl_55937,vec__55931,k,plugin))
);
} else {
}

var G__55938 = seq__55927;
var G__55939 = chunk__55928;
var G__55940 = count__55929;
var G__55941 = (i__55930 + (1));
seq__55927 = G__55938;
chunk__55928 = G__55939;
count__55929 = G__55940;
i__55930 = G__55941;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__55927);
if(temp__4657__auto__){
var seq__55927__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55927__$1)){
var c__45345__auto__ = cljs.core.chunk_first.call(null,seq__55927__$1);
var G__55942 = cljs.core.chunk_rest.call(null,seq__55927__$1);
var G__55943 = c__45345__auto__;
var G__55944 = cljs.core.count.call(null,c__45345__auto__);
var G__55945 = (0);
seq__55927 = G__55942;
chunk__55928 = G__55943;
count__55929 = G__55944;
i__55930 = G__55945;
continue;
} else {
var vec__55934 = cljs.core.first.call(null,seq__55927__$1);
var k = cljs.core.nth.call(null,vec__55934,(0),null);
var plugin = cljs.core.nth.call(null,vec__55934,(1),null);
if(cljs.core.truth_(plugin)){
var pl_55946 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__55927,chunk__55928,count__55929,i__55930,pl_55946,vec__55934,k,plugin,seq__55927__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_55946.call(null,msg_hist);
});})(seq__55927,chunk__55928,count__55929,i__55930,pl_55946,vec__55934,k,plugin,seq__55927__$1,temp__4657__auto__))
);
} else {
}

var G__55947 = cljs.core.next.call(null,seq__55927__$1);
var G__55948 = null;
var G__55949 = (0);
var G__55950 = (0);
seq__55927 = G__55947;
chunk__55928 = G__55948;
count__55929 = G__55949;
i__55930 = G__55950;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args55951 = [];
var len__45609__auto___55958 = arguments.length;
var i__45610__auto___55959 = (0);
while(true){
if((i__45610__auto___55959 < len__45609__auto___55958)){
args55951.push((arguments[i__45610__auto___55959]));

var G__55960 = (i__45610__auto___55959 + (1));
i__45610__auto___55959 = G__55960;
continue;
} else {
}
break;
}

var G__55953 = args55951.length;
switch (G__55953) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args55951.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__55954_55962 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__55955_55963 = null;
var count__55956_55964 = (0);
var i__55957_55965 = (0);
while(true){
if((i__55957_55965 < count__55956_55964)){
var msg_55966 = cljs.core._nth.call(null,chunk__55955_55963,i__55957_55965);
figwheel.client.socket.handle_incoming_message.call(null,msg_55966);

var G__55967 = seq__55954_55962;
var G__55968 = chunk__55955_55963;
var G__55969 = count__55956_55964;
var G__55970 = (i__55957_55965 + (1));
seq__55954_55962 = G__55967;
chunk__55955_55963 = G__55968;
count__55956_55964 = G__55969;
i__55957_55965 = G__55970;
continue;
} else {
var temp__4657__auto___55971 = cljs.core.seq.call(null,seq__55954_55962);
if(temp__4657__auto___55971){
var seq__55954_55972__$1 = temp__4657__auto___55971;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__55954_55972__$1)){
var c__45345__auto___55973 = cljs.core.chunk_first.call(null,seq__55954_55972__$1);
var G__55974 = cljs.core.chunk_rest.call(null,seq__55954_55972__$1);
var G__55975 = c__45345__auto___55973;
var G__55976 = cljs.core.count.call(null,c__45345__auto___55973);
var G__55977 = (0);
seq__55954_55962 = G__55974;
chunk__55955_55963 = G__55975;
count__55956_55964 = G__55976;
i__55957_55965 = G__55977;
continue;
} else {
var msg_55978 = cljs.core.first.call(null,seq__55954_55972__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_55978);

var G__55979 = cljs.core.next.call(null,seq__55954_55972__$1);
var G__55980 = null;
var G__55981 = (0);
var G__55982 = (0);
seq__55954_55962 = G__55979;
chunk__55955_55963 = G__55980;
count__55956_55964 = G__55981;
i__55957_55965 = G__55982;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__45616__auto__ = [];
var len__45609__auto___55987 = arguments.length;
var i__45610__auto___55988 = (0);
while(true){
if((i__45610__auto___55988 < len__45609__auto___55987)){
args__45616__auto__.push((arguments[i__45610__auto___55988]));

var G__55989 = (i__45610__auto___55988 + (1));
i__45610__auto___55988 = G__55989;
continue;
} else {
}
break;
}

var argseq__45617__auto__ = ((((0) < args__45616__auto__.length))?(new cljs.core.IndexedSeq(args__45616__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__45617__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__55984){
var map__55985 = p__55984;
var map__55985__$1 = ((((!((map__55985 == null)))?((((map__55985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55985):map__55985);
var opts = map__55985__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq55983){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq55983));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e55991){if((e55991 instanceof Error)){
var e = e55991;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e55991;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__55995){
var map__55996 = p__55995;
var map__55996__$1 = ((((!((map__55996 == null)))?((((map__55996.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55996.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55996):map__55996);
var msg_name = cljs.core.get.call(null,map__55996__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1484941491401