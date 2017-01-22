// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__44534__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__44534__auto__){
return or__44534__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__44534__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__44534__auto__)){
return or__44534__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__51572_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__51572_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__51577 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__51578 = null;
var count__51579 = (0);
var i__51580 = (0);
while(true){
if((i__51580 < count__51579)){
var n = cljs.core._nth.call(null,chunk__51578,i__51580);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51581 = seq__51577;
var G__51582 = chunk__51578;
var G__51583 = count__51579;
var G__51584 = (i__51580 + (1));
seq__51577 = G__51581;
chunk__51578 = G__51582;
count__51579 = G__51583;
i__51580 = G__51584;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51577);
if(temp__4657__auto__){
var seq__51577__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51577__$1)){
var c__45345__auto__ = cljs.core.chunk_first.call(null,seq__51577__$1);
var G__51585 = cljs.core.chunk_rest.call(null,seq__51577__$1);
var G__51586 = c__45345__auto__;
var G__51587 = cljs.core.count.call(null,c__45345__auto__);
var G__51588 = (0);
seq__51577 = G__51585;
chunk__51578 = G__51586;
count__51579 = G__51587;
i__51580 = G__51588;
continue;
} else {
var n = cljs.core.first.call(null,seq__51577__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51589 = cljs.core.next.call(null,seq__51577__$1);
var G__51590 = null;
var G__51591 = (0);
var G__51592 = (0);
seq__51577 = G__51589;
chunk__51578 = G__51590;
count__51579 = G__51591;
i__51580 = G__51592;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__51643_51654 = cljs.core.seq.call(null,deps);
var chunk__51644_51655 = null;
var count__51645_51656 = (0);
var i__51646_51657 = (0);
while(true){
if((i__51646_51657 < count__51645_51656)){
var dep_51658 = cljs.core._nth.call(null,chunk__51644_51655,i__51646_51657);
topo_sort_helper_STAR_.call(null,dep_51658,(depth + (1)),state);

var G__51659 = seq__51643_51654;
var G__51660 = chunk__51644_51655;
var G__51661 = count__51645_51656;
var G__51662 = (i__51646_51657 + (1));
seq__51643_51654 = G__51659;
chunk__51644_51655 = G__51660;
count__51645_51656 = G__51661;
i__51646_51657 = G__51662;
continue;
} else {
var temp__4657__auto___51663 = cljs.core.seq.call(null,seq__51643_51654);
if(temp__4657__auto___51663){
var seq__51643_51664__$1 = temp__4657__auto___51663;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51643_51664__$1)){
var c__45345__auto___51665 = cljs.core.chunk_first.call(null,seq__51643_51664__$1);
var G__51666 = cljs.core.chunk_rest.call(null,seq__51643_51664__$1);
var G__51667 = c__45345__auto___51665;
var G__51668 = cljs.core.count.call(null,c__45345__auto___51665);
var G__51669 = (0);
seq__51643_51654 = G__51666;
chunk__51644_51655 = G__51667;
count__51645_51656 = G__51668;
i__51646_51657 = G__51669;
continue;
} else {
var dep_51670 = cljs.core.first.call(null,seq__51643_51664__$1);
topo_sort_helper_STAR_.call(null,dep_51670,(depth + (1)),state);

var G__51671 = cljs.core.next.call(null,seq__51643_51664__$1);
var G__51672 = null;
var G__51673 = (0);
var G__51674 = (0);
seq__51643_51654 = G__51671;
chunk__51644_51655 = G__51672;
count__51645_51656 = G__51673;
i__51646_51657 = G__51674;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__51647){
var vec__51651 = p__51647;
var seq__51652 = cljs.core.seq.call(null,vec__51651);
var first__51653 = cljs.core.first.call(null,seq__51652);
var seq__51652__$1 = cljs.core.next.call(null,seq__51652);
var x = first__51653;
var xs = seq__51652__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__51651,seq__51652,first__51653,seq__51652__$1,x,xs,get_deps__$1){
return (function (p1__51593_SHARP_){
return clojure.set.difference.call(null,p1__51593_SHARP_,x);
});})(vec__51651,seq__51652,first__51653,seq__51652__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__51687 = cljs.core.seq.call(null,provides);
var chunk__51688 = null;
var count__51689 = (0);
var i__51690 = (0);
while(true){
if((i__51690 < count__51689)){
var prov = cljs.core._nth.call(null,chunk__51688,i__51690);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51691_51699 = cljs.core.seq.call(null,requires);
var chunk__51692_51700 = null;
var count__51693_51701 = (0);
var i__51694_51702 = (0);
while(true){
if((i__51694_51702 < count__51693_51701)){
var req_51703 = cljs.core._nth.call(null,chunk__51692_51700,i__51694_51702);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51703,prov);

var G__51704 = seq__51691_51699;
var G__51705 = chunk__51692_51700;
var G__51706 = count__51693_51701;
var G__51707 = (i__51694_51702 + (1));
seq__51691_51699 = G__51704;
chunk__51692_51700 = G__51705;
count__51693_51701 = G__51706;
i__51694_51702 = G__51707;
continue;
} else {
var temp__4657__auto___51708 = cljs.core.seq.call(null,seq__51691_51699);
if(temp__4657__auto___51708){
var seq__51691_51709__$1 = temp__4657__auto___51708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51691_51709__$1)){
var c__45345__auto___51710 = cljs.core.chunk_first.call(null,seq__51691_51709__$1);
var G__51711 = cljs.core.chunk_rest.call(null,seq__51691_51709__$1);
var G__51712 = c__45345__auto___51710;
var G__51713 = cljs.core.count.call(null,c__45345__auto___51710);
var G__51714 = (0);
seq__51691_51699 = G__51711;
chunk__51692_51700 = G__51712;
count__51693_51701 = G__51713;
i__51694_51702 = G__51714;
continue;
} else {
var req_51715 = cljs.core.first.call(null,seq__51691_51709__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51715,prov);

var G__51716 = cljs.core.next.call(null,seq__51691_51709__$1);
var G__51717 = null;
var G__51718 = (0);
var G__51719 = (0);
seq__51691_51699 = G__51716;
chunk__51692_51700 = G__51717;
count__51693_51701 = G__51718;
i__51694_51702 = G__51719;
continue;
}
} else {
}
}
break;
}

var G__51720 = seq__51687;
var G__51721 = chunk__51688;
var G__51722 = count__51689;
var G__51723 = (i__51690 + (1));
seq__51687 = G__51720;
chunk__51688 = G__51721;
count__51689 = G__51722;
i__51690 = G__51723;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51687);
if(temp__4657__auto__){
var seq__51687__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51687__$1)){
var c__45345__auto__ = cljs.core.chunk_first.call(null,seq__51687__$1);
var G__51724 = cljs.core.chunk_rest.call(null,seq__51687__$1);
var G__51725 = c__45345__auto__;
var G__51726 = cljs.core.count.call(null,c__45345__auto__);
var G__51727 = (0);
seq__51687 = G__51724;
chunk__51688 = G__51725;
count__51689 = G__51726;
i__51690 = G__51727;
continue;
} else {
var prov = cljs.core.first.call(null,seq__51687__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51695_51728 = cljs.core.seq.call(null,requires);
var chunk__51696_51729 = null;
var count__51697_51730 = (0);
var i__51698_51731 = (0);
while(true){
if((i__51698_51731 < count__51697_51730)){
var req_51732 = cljs.core._nth.call(null,chunk__51696_51729,i__51698_51731);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51732,prov);

var G__51733 = seq__51695_51728;
var G__51734 = chunk__51696_51729;
var G__51735 = count__51697_51730;
var G__51736 = (i__51698_51731 + (1));
seq__51695_51728 = G__51733;
chunk__51696_51729 = G__51734;
count__51697_51730 = G__51735;
i__51698_51731 = G__51736;
continue;
} else {
var temp__4657__auto___51737__$1 = cljs.core.seq.call(null,seq__51695_51728);
if(temp__4657__auto___51737__$1){
var seq__51695_51738__$1 = temp__4657__auto___51737__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51695_51738__$1)){
var c__45345__auto___51739 = cljs.core.chunk_first.call(null,seq__51695_51738__$1);
var G__51740 = cljs.core.chunk_rest.call(null,seq__51695_51738__$1);
var G__51741 = c__45345__auto___51739;
var G__51742 = cljs.core.count.call(null,c__45345__auto___51739);
var G__51743 = (0);
seq__51695_51728 = G__51740;
chunk__51696_51729 = G__51741;
count__51697_51730 = G__51742;
i__51698_51731 = G__51743;
continue;
} else {
var req_51744 = cljs.core.first.call(null,seq__51695_51738__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51744,prov);

var G__51745 = cljs.core.next.call(null,seq__51695_51738__$1);
var G__51746 = null;
var G__51747 = (0);
var G__51748 = (0);
seq__51695_51728 = G__51745;
chunk__51696_51729 = G__51746;
count__51697_51730 = G__51747;
i__51698_51731 = G__51748;
continue;
}
} else {
}
}
break;
}

var G__51749 = cljs.core.next.call(null,seq__51687__$1);
var G__51750 = null;
var G__51751 = (0);
var G__51752 = (0);
seq__51687 = G__51749;
chunk__51688 = G__51750;
count__51689 = G__51751;
i__51690 = G__51752;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__51757_51761 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__51758_51762 = null;
var count__51759_51763 = (0);
var i__51760_51764 = (0);
while(true){
if((i__51760_51764 < count__51759_51763)){
var ns_51765 = cljs.core._nth.call(null,chunk__51758_51762,i__51760_51764);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51765);

var G__51766 = seq__51757_51761;
var G__51767 = chunk__51758_51762;
var G__51768 = count__51759_51763;
var G__51769 = (i__51760_51764 + (1));
seq__51757_51761 = G__51766;
chunk__51758_51762 = G__51767;
count__51759_51763 = G__51768;
i__51760_51764 = G__51769;
continue;
} else {
var temp__4657__auto___51770 = cljs.core.seq.call(null,seq__51757_51761);
if(temp__4657__auto___51770){
var seq__51757_51771__$1 = temp__4657__auto___51770;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51757_51771__$1)){
var c__45345__auto___51772 = cljs.core.chunk_first.call(null,seq__51757_51771__$1);
var G__51773 = cljs.core.chunk_rest.call(null,seq__51757_51771__$1);
var G__51774 = c__45345__auto___51772;
var G__51775 = cljs.core.count.call(null,c__45345__auto___51772);
var G__51776 = (0);
seq__51757_51761 = G__51773;
chunk__51758_51762 = G__51774;
count__51759_51763 = G__51775;
i__51760_51764 = G__51776;
continue;
} else {
var ns_51777 = cljs.core.first.call(null,seq__51757_51771__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51777);

var G__51778 = cljs.core.next.call(null,seq__51757_51771__$1);
var G__51779 = null;
var G__51780 = (0);
var G__51781 = (0);
seq__51757_51761 = G__51778;
chunk__51758_51762 = G__51779;
count__51759_51763 = G__51780;
i__51760_51764 = G__51781;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__44534__auto__ = goog.require__;
if(cljs.core.truth_(or__44534__auto__)){
return or__44534__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__51782__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__51782 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51783__i = 0, G__51783__a = new Array(arguments.length -  0);
while (G__51783__i < G__51783__a.length) {G__51783__a[G__51783__i] = arguments[G__51783__i + 0]; ++G__51783__i;}
  args = new cljs.core.IndexedSeq(G__51783__a,0);
} 
return G__51782__delegate.call(this,args);};
G__51782.cljs$lang$maxFixedArity = 0;
G__51782.cljs$lang$applyTo = (function (arglist__51784){
var args = cljs.core.seq(arglist__51784);
return G__51782__delegate(args);
});
G__51782.cljs$core$IFn$_invoke$arity$variadic = G__51782__delegate;
return G__51782;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__51786 = cljs.core._EQ_;
var expr__51787 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__51786.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__51787))){
var path_parts = ((function (pred__51786,expr__51787){
return (function (p1__51785_SHARP_){
return clojure.string.split.call(null,p1__51785_SHARP_,/[\/\\]/);
});})(pred__51786,expr__51787))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__51786,expr__51787){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e51789){if((e51789 instanceof Error)){
var e = e51789;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e51789;

}
}})());
});
;})(path_parts,sep,root,pred__51786,expr__51787))
} else {
if(cljs.core.truth_(pred__51786.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__51787))){
return ((function (pred__51786,expr__51787){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__51786,expr__51787){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__51786,expr__51787))
);

return deferred.addErrback(((function (deferred,pred__51786,expr__51787){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__51786,expr__51787))
);
});
;})(pred__51786,expr__51787))
} else {
return ((function (pred__51786,expr__51787){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__51786,expr__51787))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__51790,callback){
var map__51793 = p__51790;
var map__51793__$1 = ((((!((map__51793 == null)))?((((map__51793.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51793.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51793):map__51793);
var file_msg = map__51793__$1;
var request_url = cljs.core.get.call(null,map__51793__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__51793,map__51793__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__51793,map__51793__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__48693__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto__){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto__){
return (function (state_51817){
var state_val_51818 = (state_51817[(1)]);
if((state_val_51818 === (7))){
var inst_51813 = (state_51817[(2)]);
var state_51817__$1 = state_51817;
var statearr_51819_51839 = state_51817__$1;
(statearr_51819_51839[(2)] = inst_51813);

(statearr_51819_51839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51818 === (1))){
var state_51817__$1 = state_51817;
var statearr_51820_51840 = state_51817__$1;
(statearr_51820_51840[(2)] = null);

(statearr_51820_51840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51818 === (4))){
var inst_51797 = (state_51817[(7)]);
var inst_51797__$1 = (state_51817[(2)]);
var state_51817__$1 = (function (){var statearr_51821 = state_51817;
(statearr_51821[(7)] = inst_51797__$1);

return statearr_51821;
})();
if(cljs.core.truth_(inst_51797__$1)){
var statearr_51822_51841 = state_51817__$1;
(statearr_51822_51841[(1)] = (5));

} else {
var statearr_51823_51842 = state_51817__$1;
(statearr_51823_51842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51818 === (6))){
var state_51817__$1 = state_51817;
var statearr_51824_51843 = state_51817__$1;
(statearr_51824_51843[(2)] = null);

(statearr_51824_51843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51818 === (3))){
var inst_51815 = (state_51817[(2)]);
var state_51817__$1 = state_51817;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51817__$1,inst_51815);
} else {
if((state_val_51818 === (2))){
var state_51817__$1 = state_51817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51817__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_51818 === (11))){
var inst_51809 = (state_51817[(2)]);
var state_51817__$1 = (function (){var statearr_51825 = state_51817;
(statearr_51825[(8)] = inst_51809);

return statearr_51825;
})();
var statearr_51826_51844 = state_51817__$1;
(statearr_51826_51844[(2)] = null);

(statearr_51826_51844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51818 === (9))){
var inst_51803 = (state_51817[(9)]);
var inst_51801 = (state_51817[(10)]);
var inst_51805 = inst_51803.call(null,inst_51801);
var state_51817__$1 = state_51817;
var statearr_51827_51845 = state_51817__$1;
(statearr_51827_51845[(2)] = inst_51805);

(statearr_51827_51845[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51818 === (5))){
var inst_51797 = (state_51817[(7)]);
var inst_51799 = figwheel.client.file_reloading.blocking_load.call(null,inst_51797);
var state_51817__$1 = state_51817;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51817__$1,(8),inst_51799);
} else {
if((state_val_51818 === (10))){
var inst_51801 = (state_51817[(10)]);
var inst_51807 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_51801);
var state_51817__$1 = state_51817;
var statearr_51828_51846 = state_51817__$1;
(statearr_51828_51846[(2)] = inst_51807);

(statearr_51828_51846[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51818 === (8))){
var inst_51803 = (state_51817[(9)]);
var inst_51797 = (state_51817[(7)]);
var inst_51801 = (state_51817[(2)]);
var inst_51802 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_51803__$1 = cljs.core.get.call(null,inst_51802,inst_51797);
var state_51817__$1 = (function (){var statearr_51829 = state_51817;
(statearr_51829[(9)] = inst_51803__$1);

(statearr_51829[(10)] = inst_51801);

return statearr_51829;
})();
if(cljs.core.truth_(inst_51803__$1)){
var statearr_51830_51847 = state_51817__$1;
(statearr_51830_51847[(1)] = (9));

} else {
var statearr_51831_51848 = state_51817__$1;
(statearr_51831_51848[(1)] = (10));

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
});})(c__48693__auto__))
;
return ((function (switch__48581__auto__,c__48693__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__48582__auto__ = null;
var figwheel$client$file_reloading$state_machine__48582__auto____0 = (function (){
var statearr_51835 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51835[(0)] = figwheel$client$file_reloading$state_machine__48582__auto__);

(statearr_51835[(1)] = (1));

return statearr_51835;
});
var figwheel$client$file_reloading$state_machine__48582__auto____1 = (function (state_51817){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_51817);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e51836){if((e51836 instanceof Object)){
var ex__48585__auto__ = e51836;
var statearr_51837_51849 = state_51817;
(statearr_51837_51849[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51817);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51836;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51850 = state_51817;
state_51817 = G__51850;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__48582__auto__ = function(state_51817){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__48582__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__48582__auto____1.call(this,state_51817);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__48582__auto____0;
figwheel$client$file_reloading$state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__48582__auto____1;
return figwheel$client$file_reloading$state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto__))
})();
var state__48695__auto__ = (function (){var statearr_51838 = f__48694__auto__.call(null);
(statearr_51838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto__);

return statearr_51838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto__))
);

return c__48693__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__51851,callback){
var map__51854 = p__51851;
var map__51854__$1 = ((((!((map__51854 == null)))?((((map__51854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51854):map__51854);
var file_msg = map__51854__$1;
var namespace = cljs.core.get.call(null,map__51854__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__51854,map__51854__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__51854,map__51854__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__51856){
var map__51859 = p__51856;
var map__51859__$1 = ((((!((map__51859 == null)))?((((map__51859.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51859.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51859):map__51859);
var file_msg = map__51859__$1;
var namespace = cljs.core.get.call(null,map__51859__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__44522__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__44522__auto__){
var or__44534__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__44534__auto__)){
return or__44534__auto__;
} else {
var or__44534__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__44534__auto____$1)){
return or__44534__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__44522__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__51861,callback){
var map__51864 = p__51861;
var map__51864__$1 = ((((!((map__51864 == null)))?((((map__51864.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51864.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51864):map__51864);
var file_msg = map__51864__$1;
var request_url = cljs.core.get.call(null,map__51864__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__51864__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__48693__auto___51968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto___51968,out){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto___51968,out){
return (function (state_51950){
var state_val_51951 = (state_51950[(1)]);
if((state_val_51951 === (1))){
var inst_51924 = cljs.core.seq.call(null,files);
var inst_51925 = cljs.core.first.call(null,inst_51924);
var inst_51926 = cljs.core.next.call(null,inst_51924);
var inst_51927 = files;
var state_51950__$1 = (function (){var statearr_51952 = state_51950;
(statearr_51952[(7)] = inst_51925);

(statearr_51952[(8)] = inst_51926);

(statearr_51952[(9)] = inst_51927);

return statearr_51952;
})();
var statearr_51953_51969 = state_51950__$1;
(statearr_51953_51969[(2)] = null);

(statearr_51953_51969[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51951 === (2))){
var inst_51933 = (state_51950[(10)]);
var inst_51927 = (state_51950[(9)]);
var inst_51932 = cljs.core.seq.call(null,inst_51927);
var inst_51933__$1 = cljs.core.first.call(null,inst_51932);
var inst_51934 = cljs.core.next.call(null,inst_51932);
var inst_51935 = (inst_51933__$1 == null);
var inst_51936 = cljs.core.not.call(null,inst_51935);
var state_51950__$1 = (function (){var statearr_51954 = state_51950;
(statearr_51954[(11)] = inst_51934);

(statearr_51954[(10)] = inst_51933__$1);

return statearr_51954;
})();
if(inst_51936){
var statearr_51955_51970 = state_51950__$1;
(statearr_51955_51970[(1)] = (4));

} else {
var statearr_51956_51971 = state_51950__$1;
(statearr_51956_51971[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51951 === (3))){
var inst_51948 = (state_51950[(2)]);
var state_51950__$1 = state_51950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51950__$1,inst_51948);
} else {
if((state_val_51951 === (4))){
var inst_51933 = (state_51950[(10)]);
var inst_51938 = figwheel.client.file_reloading.reload_js_file.call(null,inst_51933);
var state_51950__$1 = state_51950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51950__$1,(7),inst_51938);
} else {
if((state_val_51951 === (5))){
var inst_51944 = cljs.core.async.close_BANG_.call(null,out);
var state_51950__$1 = state_51950;
var statearr_51957_51972 = state_51950__$1;
(statearr_51957_51972[(2)] = inst_51944);

(statearr_51957_51972[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51951 === (6))){
var inst_51946 = (state_51950[(2)]);
var state_51950__$1 = state_51950;
var statearr_51958_51973 = state_51950__$1;
(statearr_51958_51973[(2)] = inst_51946);

(statearr_51958_51973[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51951 === (7))){
var inst_51934 = (state_51950[(11)]);
var inst_51940 = (state_51950[(2)]);
var inst_51941 = cljs.core.async.put_BANG_.call(null,out,inst_51940);
var inst_51927 = inst_51934;
var state_51950__$1 = (function (){var statearr_51959 = state_51950;
(statearr_51959[(12)] = inst_51941);

(statearr_51959[(9)] = inst_51927);

return statearr_51959;
})();
var statearr_51960_51974 = state_51950__$1;
(statearr_51960_51974[(2)] = null);

(statearr_51960_51974[(1)] = (2));


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
});})(c__48693__auto___51968,out))
;
return ((function (switch__48581__auto__,c__48693__auto___51968,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48582__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48582__auto____0 = (function (){
var statearr_51964 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51964[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48582__auto__);

(statearr_51964[(1)] = (1));

return statearr_51964;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__48582__auto____1 = (function (state_51950){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_51950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e51965){if((e51965 instanceof Object)){
var ex__48585__auto__ = e51965;
var statearr_51966_51975 = state_51950;
(statearr_51966_51975[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51976 = state_51950;
state_51950 = G__51976;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48582__auto__ = function(state_51950){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48582__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48582__auto____1.call(this,state_51950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48582__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__48582__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto___51968,out))
})();
var state__48695__auto__ = (function (){var statearr_51967 = f__48694__auto__.call(null);
(statearr_51967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto___51968);

return statearr_51967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto___51968,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__51977,opts){
var map__51981 = p__51977;
var map__51981__$1 = ((((!((map__51981 == null)))?((((map__51981.cljs$lang$protocol_mask$partition0$ & (64))) || (map__51981.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51981):map__51981);
var eval_body__$1 = cljs.core.get.call(null,map__51981__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__51981__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__44522__auto__ = eval_body__$1;
if(cljs.core.truth_(and__44522__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__44522__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e51983){var e = e51983;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__51984_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51984_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__51993){
var vec__51994 = p__51993;
var k = cljs.core.nth.call(null,vec__51994,(0),null);
var v = cljs.core.nth.call(null,vec__51994,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__51997){
var vec__51998 = p__51997;
var k = cljs.core.nth.call(null,vec__51998,(0),null);
var v = cljs.core.nth.call(null,vec__51998,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__52004,p__52005){
var map__52252 = p__52004;
var map__52252__$1 = ((((!((map__52252 == null)))?((((map__52252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52252):map__52252);
var opts = map__52252__$1;
var before_jsload = cljs.core.get.call(null,map__52252__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__52252__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__52252__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__52253 = p__52005;
var map__52253__$1 = ((((!((map__52253 == null)))?((((map__52253.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52253.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52253):map__52253);
var msg = map__52253__$1;
var files = cljs.core.get.call(null,map__52253__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__52253__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__52253__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__48693__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__48693__auto__,map__52252,map__52252__$1,opts,before_jsload,on_jsload,reload_dependents,map__52253,map__52253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__48694__auto__ = (function (){var switch__48581__auto__ = ((function (c__48693__auto__,map__52252,map__52252__$1,opts,before_jsload,on_jsload,reload_dependents,map__52253,map__52253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_52406){
var state_val_52407 = (state_52406[(1)]);
if((state_val_52407 === (7))){
var inst_52267 = (state_52406[(7)]);
var inst_52270 = (state_52406[(8)]);
var inst_52269 = (state_52406[(9)]);
var inst_52268 = (state_52406[(10)]);
var inst_52275 = cljs.core._nth.call(null,inst_52268,inst_52270);
var inst_52276 = figwheel.client.file_reloading.eval_body.call(null,inst_52275,opts);
var inst_52277 = (inst_52270 + (1));
var tmp52408 = inst_52267;
var tmp52409 = inst_52269;
var tmp52410 = inst_52268;
var inst_52267__$1 = tmp52408;
var inst_52268__$1 = tmp52410;
var inst_52269__$1 = tmp52409;
var inst_52270__$1 = inst_52277;
var state_52406__$1 = (function (){var statearr_52411 = state_52406;
(statearr_52411[(7)] = inst_52267__$1);

(statearr_52411[(11)] = inst_52276);

(statearr_52411[(8)] = inst_52270__$1);

(statearr_52411[(9)] = inst_52269__$1);

(statearr_52411[(10)] = inst_52268__$1);

return statearr_52411;
})();
var statearr_52412_52498 = state_52406__$1;
(statearr_52412_52498[(2)] = null);

(statearr_52412_52498[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (20))){
var inst_52310 = (state_52406[(12)]);
var inst_52318 = figwheel.client.file_reloading.sort_files.call(null,inst_52310);
var state_52406__$1 = state_52406;
var statearr_52413_52499 = state_52406__$1;
(statearr_52413_52499[(2)] = inst_52318);

(statearr_52413_52499[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (27))){
var state_52406__$1 = state_52406;
var statearr_52414_52500 = state_52406__$1;
(statearr_52414_52500[(2)] = null);

(statearr_52414_52500[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (1))){
var inst_52259 = (state_52406[(13)]);
var inst_52256 = before_jsload.call(null,files);
var inst_52257 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_52258 = (function (){return ((function (inst_52259,inst_52256,inst_52257,state_val_52407,c__48693__auto__,map__52252,map__52252__$1,opts,before_jsload,on_jsload,reload_dependents,map__52253,map__52253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52001_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__52001_SHARP_);
});
;})(inst_52259,inst_52256,inst_52257,state_val_52407,c__48693__auto__,map__52252,map__52252__$1,opts,before_jsload,on_jsload,reload_dependents,map__52253,map__52253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52259__$1 = cljs.core.filter.call(null,inst_52258,files);
var inst_52260 = cljs.core.not_empty.call(null,inst_52259__$1);
var state_52406__$1 = (function (){var statearr_52415 = state_52406;
(statearr_52415[(14)] = inst_52257);

(statearr_52415[(13)] = inst_52259__$1);

(statearr_52415[(15)] = inst_52256);

return statearr_52415;
})();
if(cljs.core.truth_(inst_52260)){
var statearr_52416_52501 = state_52406__$1;
(statearr_52416_52501[(1)] = (2));

} else {
var statearr_52417_52502 = state_52406__$1;
(statearr_52417_52502[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (24))){
var state_52406__$1 = state_52406;
var statearr_52418_52503 = state_52406__$1;
(statearr_52418_52503[(2)] = null);

(statearr_52418_52503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (39))){
var inst_52360 = (state_52406[(16)]);
var state_52406__$1 = state_52406;
var statearr_52419_52504 = state_52406__$1;
(statearr_52419_52504[(2)] = inst_52360);

(statearr_52419_52504[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (46))){
var inst_52401 = (state_52406[(2)]);
var state_52406__$1 = state_52406;
var statearr_52420_52505 = state_52406__$1;
(statearr_52420_52505[(2)] = inst_52401);

(statearr_52420_52505[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (4))){
var inst_52304 = (state_52406[(2)]);
var inst_52305 = cljs.core.List.EMPTY;
var inst_52306 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_52305);
var inst_52307 = (function (){return ((function (inst_52304,inst_52305,inst_52306,state_val_52407,c__48693__auto__,map__52252,map__52252__$1,opts,before_jsload,on_jsload,reload_dependents,map__52253,map__52253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52002_SHARP_){
var and__44522__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__52002_SHARP_);
if(cljs.core.truth_(and__44522__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__52002_SHARP_));
} else {
return and__44522__auto__;
}
});
;})(inst_52304,inst_52305,inst_52306,state_val_52407,c__48693__auto__,map__52252,map__52252__$1,opts,before_jsload,on_jsload,reload_dependents,map__52253,map__52253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52308 = cljs.core.filter.call(null,inst_52307,files);
var inst_52309 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_52310 = cljs.core.concat.call(null,inst_52308,inst_52309);
var state_52406__$1 = (function (){var statearr_52421 = state_52406;
(statearr_52421[(12)] = inst_52310);

(statearr_52421[(17)] = inst_52304);

(statearr_52421[(18)] = inst_52306);

return statearr_52421;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_52422_52506 = state_52406__$1;
(statearr_52422_52506[(1)] = (16));

} else {
var statearr_52423_52507 = state_52406__$1;
(statearr_52423_52507[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (15))){
var inst_52294 = (state_52406[(2)]);
var state_52406__$1 = state_52406;
var statearr_52424_52508 = state_52406__$1;
(statearr_52424_52508[(2)] = inst_52294);

(statearr_52424_52508[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (21))){
var inst_52320 = (state_52406[(19)]);
var inst_52320__$1 = (state_52406[(2)]);
var inst_52321 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_52320__$1);
var state_52406__$1 = (function (){var statearr_52425 = state_52406;
(statearr_52425[(19)] = inst_52320__$1);

return statearr_52425;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52406__$1,(22),inst_52321);
} else {
if((state_val_52407 === (31))){
var inst_52404 = (state_52406[(2)]);
var state_52406__$1 = state_52406;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52406__$1,inst_52404);
} else {
if((state_val_52407 === (32))){
var inst_52360 = (state_52406[(16)]);
var inst_52365 = inst_52360.cljs$lang$protocol_mask$partition0$;
var inst_52366 = (inst_52365 & (64));
var inst_52367 = inst_52360.cljs$core$ISeq$;
var inst_52368 = (inst_52366) || (inst_52367);
var state_52406__$1 = state_52406;
if(cljs.core.truth_(inst_52368)){
var statearr_52426_52509 = state_52406__$1;
(statearr_52426_52509[(1)] = (35));

} else {
var statearr_52427_52510 = state_52406__$1;
(statearr_52427_52510[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (40))){
var inst_52381 = (state_52406[(20)]);
var inst_52380 = (state_52406[(2)]);
var inst_52381__$1 = cljs.core.get.call(null,inst_52380,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_52382 = cljs.core.get.call(null,inst_52380,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_52383 = cljs.core.not_empty.call(null,inst_52381__$1);
var state_52406__$1 = (function (){var statearr_52428 = state_52406;
(statearr_52428[(20)] = inst_52381__$1);

(statearr_52428[(21)] = inst_52382);

return statearr_52428;
})();
if(cljs.core.truth_(inst_52383)){
var statearr_52429_52511 = state_52406__$1;
(statearr_52429_52511[(1)] = (41));

} else {
var statearr_52430_52512 = state_52406__$1;
(statearr_52430_52512[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (33))){
var state_52406__$1 = state_52406;
var statearr_52431_52513 = state_52406__$1;
(statearr_52431_52513[(2)] = false);

(statearr_52431_52513[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (13))){
var inst_52280 = (state_52406[(22)]);
var inst_52284 = cljs.core.chunk_first.call(null,inst_52280);
var inst_52285 = cljs.core.chunk_rest.call(null,inst_52280);
var inst_52286 = cljs.core.count.call(null,inst_52284);
var inst_52267 = inst_52285;
var inst_52268 = inst_52284;
var inst_52269 = inst_52286;
var inst_52270 = (0);
var state_52406__$1 = (function (){var statearr_52432 = state_52406;
(statearr_52432[(7)] = inst_52267);

(statearr_52432[(8)] = inst_52270);

(statearr_52432[(9)] = inst_52269);

(statearr_52432[(10)] = inst_52268);

return statearr_52432;
})();
var statearr_52433_52514 = state_52406__$1;
(statearr_52433_52514[(2)] = null);

(statearr_52433_52514[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (22))){
var inst_52324 = (state_52406[(23)]);
var inst_52320 = (state_52406[(19)]);
var inst_52323 = (state_52406[(24)]);
var inst_52328 = (state_52406[(25)]);
var inst_52323__$1 = (state_52406[(2)]);
var inst_52324__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52323__$1);
var inst_52325 = (function (){var all_files = inst_52320;
var res_SINGLEQUOTE_ = inst_52323__$1;
var res = inst_52324__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_52324,inst_52320,inst_52323,inst_52328,inst_52323__$1,inst_52324__$1,state_val_52407,c__48693__auto__,map__52252,map__52252__$1,opts,before_jsload,on_jsload,reload_dependents,map__52253,map__52253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__52003_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__52003_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_52324,inst_52320,inst_52323,inst_52328,inst_52323__$1,inst_52324__$1,state_val_52407,c__48693__auto__,map__52252,map__52252__$1,opts,before_jsload,on_jsload,reload_dependents,map__52253,map__52253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52326 = cljs.core.filter.call(null,inst_52325,inst_52323__$1);
var inst_52327 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_52328__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_52327);
var inst_52329 = cljs.core.not_empty.call(null,inst_52328__$1);
var state_52406__$1 = (function (){var statearr_52434 = state_52406;
(statearr_52434[(23)] = inst_52324__$1);

(statearr_52434[(24)] = inst_52323__$1);

(statearr_52434[(25)] = inst_52328__$1);

(statearr_52434[(26)] = inst_52326);

return statearr_52434;
})();
if(cljs.core.truth_(inst_52329)){
var statearr_52435_52515 = state_52406__$1;
(statearr_52435_52515[(1)] = (23));

} else {
var statearr_52436_52516 = state_52406__$1;
(statearr_52436_52516[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (36))){
var state_52406__$1 = state_52406;
var statearr_52437_52517 = state_52406__$1;
(statearr_52437_52517[(2)] = false);

(statearr_52437_52517[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (41))){
var inst_52381 = (state_52406[(20)]);
var inst_52385 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_52386 = cljs.core.map.call(null,inst_52385,inst_52381);
var inst_52387 = cljs.core.pr_str.call(null,inst_52386);
var inst_52388 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_52387)].join('');
var inst_52389 = figwheel.client.utils.log.call(null,inst_52388);
var state_52406__$1 = state_52406;
var statearr_52438_52518 = state_52406__$1;
(statearr_52438_52518[(2)] = inst_52389);

(statearr_52438_52518[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (43))){
var inst_52382 = (state_52406[(21)]);
var inst_52392 = (state_52406[(2)]);
var inst_52393 = cljs.core.not_empty.call(null,inst_52382);
var state_52406__$1 = (function (){var statearr_52439 = state_52406;
(statearr_52439[(27)] = inst_52392);

return statearr_52439;
})();
if(cljs.core.truth_(inst_52393)){
var statearr_52440_52519 = state_52406__$1;
(statearr_52440_52519[(1)] = (44));

} else {
var statearr_52441_52520 = state_52406__$1;
(statearr_52441_52520[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (29))){
var inst_52324 = (state_52406[(23)]);
var inst_52320 = (state_52406[(19)]);
var inst_52323 = (state_52406[(24)]);
var inst_52328 = (state_52406[(25)]);
var inst_52360 = (state_52406[(16)]);
var inst_52326 = (state_52406[(26)]);
var inst_52356 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_52359 = (function (){var all_files = inst_52320;
var res_SINGLEQUOTE_ = inst_52323;
var res = inst_52324;
var files_not_loaded = inst_52326;
var dependencies_that_loaded = inst_52328;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52324,inst_52320,inst_52323,inst_52328,inst_52360,inst_52326,inst_52356,state_val_52407,c__48693__auto__,map__52252,map__52252__$1,opts,before_jsload,on_jsload,reload_dependents,map__52253,map__52253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52358){
var map__52442 = p__52358;
var map__52442__$1 = ((((!((map__52442 == null)))?((((map__52442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52442):map__52442);
var namespace = cljs.core.get.call(null,map__52442__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52324,inst_52320,inst_52323,inst_52328,inst_52360,inst_52326,inst_52356,state_val_52407,c__48693__auto__,map__52252,map__52252__$1,opts,before_jsload,on_jsload,reload_dependents,map__52253,map__52253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52360__$1 = cljs.core.group_by.call(null,inst_52359,inst_52326);
var inst_52362 = (inst_52360__$1 == null);
var inst_52363 = cljs.core.not.call(null,inst_52362);
var state_52406__$1 = (function (){var statearr_52444 = state_52406;
(statearr_52444[(16)] = inst_52360__$1);

(statearr_52444[(28)] = inst_52356);

return statearr_52444;
})();
if(inst_52363){
var statearr_52445_52521 = state_52406__$1;
(statearr_52445_52521[(1)] = (32));

} else {
var statearr_52446_52522 = state_52406__$1;
(statearr_52446_52522[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (44))){
var inst_52382 = (state_52406[(21)]);
var inst_52395 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52382);
var inst_52396 = cljs.core.pr_str.call(null,inst_52395);
var inst_52397 = [cljs.core.str("not required: "),cljs.core.str(inst_52396)].join('');
var inst_52398 = figwheel.client.utils.log.call(null,inst_52397);
var state_52406__$1 = state_52406;
var statearr_52447_52523 = state_52406__$1;
(statearr_52447_52523[(2)] = inst_52398);

(statearr_52447_52523[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (6))){
var inst_52301 = (state_52406[(2)]);
var state_52406__$1 = state_52406;
var statearr_52448_52524 = state_52406__$1;
(statearr_52448_52524[(2)] = inst_52301);

(statearr_52448_52524[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (28))){
var inst_52326 = (state_52406[(26)]);
var inst_52353 = (state_52406[(2)]);
var inst_52354 = cljs.core.not_empty.call(null,inst_52326);
var state_52406__$1 = (function (){var statearr_52449 = state_52406;
(statearr_52449[(29)] = inst_52353);

return statearr_52449;
})();
if(cljs.core.truth_(inst_52354)){
var statearr_52450_52525 = state_52406__$1;
(statearr_52450_52525[(1)] = (29));

} else {
var statearr_52451_52526 = state_52406__$1;
(statearr_52451_52526[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (25))){
var inst_52324 = (state_52406[(23)]);
var inst_52340 = (state_52406[(2)]);
var inst_52341 = cljs.core.not_empty.call(null,inst_52324);
var state_52406__$1 = (function (){var statearr_52452 = state_52406;
(statearr_52452[(30)] = inst_52340);

return statearr_52452;
})();
if(cljs.core.truth_(inst_52341)){
var statearr_52453_52527 = state_52406__$1;
(statearr_52453_52527[(1)] = (26));

} else {
var statearr_52454_52528 = state_52406__$1;
(statearr_52454_52528[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (34))){
var inst_52375 = (state_52406[(2)]);
var state_52406__$1 = state_52406;
if(cljs.core.truth_(inst_52375)){
var statearr_52455_52529 = state_52406__$1;
(statearr_52455_52529[(1)] = (38));

} else {
var statearr_52456_52530 = state_52406__$1;
(statearr_52456_52530[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (17))){
var state_52406__$1 = state_52406;
var statearr_52457_52531 = state_52406__$1;
(statearr_52457_52531[(2)] = recompile_dependents);

(statearr_52457_52531[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (3))){
var state_52406__$1 = state_52406;
var statearr_52458_52532 = state_52406__$1;
(statearr_52458_52532[(2)] = null);

(statearr_52458_52532[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (12))){
var inst_52297 = (state_52406[(2)]);
var state_52406__$1 = state_52406;
var statearr_52459_52533 = state_52406__$1;
(statearr_52459_52533[(2)] = inst_52297);

(statearr_52459_52533[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (2))){
var inst_52259 = (state_52406[(13)]);
var inst_52266 = cljs.core.seq.call(null,inst_52259);
var inst_52267 = inst_52266;
var inst_52268 = null;
var inst_52269 = (0);
var inst_52270 = (0);
var state_52406__$1 = (function (){var statearr_52460 = state_52406;
(statearr_52460[(7)] = inst_52267);

(statearr_52460[(8)] = inst_52270);

(statearr_52460[(9)] = inst_52269);

(statearr_52460[(10)] = inst_52268);

return statearr_52460;
})();
var statearr_52461_52534 = state_52406__$1;
(statearr_52461_52534[(2)] = null);

(statearr_52461_52534[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (23))){
var inst_52324 = (state_52406[(23)]);
var inst_52320 = (state_52406[(19)]);
var inst_52323 = (state_52406[(24)]);
var inst_52328 = (state_52406[(25)]);
var inst_52326 = (state_52406[(26)]);
var inst_52331 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_52333 = (function (){var all_files = inst_52320;
var res_SINGLEQUOTE_ = inst_52323;
var res = inst_52324;
var files_not_loaded = inst_52326;
var dependencies_that_loaded = inst_52328;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52324,inst_52320,inst_52323,inst_52328,inst_52326,inst_52331,state_val_52407,c__48693__auto__,map__52252,map__52252__$1,opts,before_jsload,on_jsload,reload_dependents,map__52253,map__52253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52332){
var map__52462 = p__52332;
var map__52462__$1 = ((((!((map__52462 == null)))?((((map__52462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52462):map__52462);
var request_url = cljs.core.get.call(null,map__52462__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52324,inst_52320,inst_52323,inst_52328,inst_52326,inst_52331,state_val_52407,c__48693__auto__,map__52252,map__52252__$1,opts,before_jsload,on_jsload,reload_dependents,map__52253,map__52253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52334 = cljs.core.reverse.call(null,inst_52328);
var inst_52335 = cljs.core.map.call(null,inst_52333,inst_52334);
var inst_52336 = cljs.core.pr_str.call(null,inst_52335);
var inst_52337 = figwheel.client.utils.log.call(null,inst_52336);
var state_52406__$1 = (function (){var statearr_52464 = state_52406;
(statearr_52464[(31)] = inst_52331);

return statearr_52464;
})();
var statearr_52465_52535 = state_52406__$1;
(statearr_52465_52535[(2)] = inst_52337);

(statearr_52465_52535[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (35))){
var state_52406__$1 = state_52406;
var statearr_52466_52536 = state_52406__$1;
(statearr_52466_52536[(2)] = true);

(statearr_52466_52536[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (19))){
var inst_52310 = (state_52406[(12)]);
var inst_52316 = figwheel.client.file_reloading.expand_files.call(null,inst_52310);
var state_52406__$1 = state_52406;
var statearr_52467_52537 = state_52406__$1;
(statearr_52467_52537[(2)] = inst_52316);

(statearr_52467_52537[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (11))){
var state_52406__$1 = state_52406;
var statearr_52468_52538 = state_52406__$1;
(statearr_52468_52538[(2)] = null);

(statearr_52468_52538[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (9))){
var inst_52299 = (state_52406[(2)]);
var state_52406__$1 = state_52406;
var statearr_52469_52539 = state_52406__$1;
(statearr_52469_52539[(2)] = inst_52299);

(statearr_52469_52539[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (5))){
var inst_52270 = (state_52406[(8)]);
var inst_52269 = (state_52406[(9)]);
var inst_52272 = (inst_52270 < inst_52269);
var inst_52273 = inst_52272;
var state_52406__$1 = state_52406;
if(cljs.core.truth_(inst_52273)){
var statearr_52470_52540 = state_52406__$1;
(statearr_52470_52540[(1)] = (7));

} else {
var statearr_52471_52541 = state_52406__$1;
(statearr_52471_52541[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (14))){
var inst_52280 = (state_52406[(22)]);
var inst_52289 = cljs.core.first.call(null,inst_52280);
var inst_52290 = figwheel.client.file_reloading.eval_body.call(null,inst_52289,opts);
var inst_52291 = cljs.core.next.call(null,inst_52280);
var inst_52267 = inst_52291;
var inst_52268 = null;
var inst_52269 = (0);
var inst_52270 = (0);
var state_52406__$1 = (function (){var statearr_52472 = state_52406;
(statearr_52472[(7)] = inst_52267);

(statearr_52472[(32)] = inst_52290);

(statearr_52472[(8)] = inst_52270);

(statearr_52472[(9)] = inst_52269);

(statearr_52472[(10)] = inst_52268);

return statearr_52472;
})();
var statearr_52473_52542 = state_52406__$1;
(statearr_52473_52542[(2)] = null);

(statearr_52473_52542[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (45))){
var state_52406__$1 = state_52406;
var statearr_52474_52543 = state_52406__$1;
(statearr_52474_52543[(2)] = null);

(statearr_52474_52543[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (26))){
var inst_52324 = (state_52406[(23)]);
var inst_52320 = (state_52406[(19)]);
var inst_52323 = (state_52406[(24)]);
var inst_52328 = (state_52406[(25)]);
var inst_52326 = (state_52406[(26)]);
var inst_52343 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_52345 = (function (){var all_files = inst_52320;
var res_SINGLEQUOTE_ = inst_52323;
var res = inst_52324;
var files_not_loaded = inst_52326;
var dependencies_that_loaded = inst_52328;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52324,inst_52320,inst_52323,inst_52328,inst_52326,inst_52343,state_val_52407,c__48693__auto__,map__52252,map__52252__$1,opts,before_jsload,on_jsload,reload_dependents,map__52253,map__52253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__52344){
var map__52475 = p__52344;
var map__52475__$1 = ((((!((map__52475 == null)))?((((map__52475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52475):map__52475);
var namespace = cljs.core.get.call(null,map__52475__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__52475__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52324,inst_52320,inst_52323,inst_52328,inst_52326,inst_52343,state_val_52407,c__48693__auto__,map__52252,map__52252__$1,opts,before_jsload,on_jsload,reload_dependents,map__52253,map__52253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52346 = cljs.core.map.call(null,inst_52345,inst_52324);
var inst_52347 = cljs.core.pr_str.call(null,inst_52346);
var inst_52348 = figwheel.client.utils.log.call(null,inst_52347);
var inst_52349 = (function (){var all_files = inst_52320;
var res_SINGLEQUOTE_ = inst_52323;
var res = inst_52324;
var files_not_loaded = inst_52326;
var dependencies_that_loaded = inst_52328;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52324,inst_52320,inst_52323,inst_52328,inst_52326,inst_52343,inst_52345,inst_52346,inst_52347,inst_52348,state_val_52407,c__48693__auto__,map__52252,map__52252__$1,opts,before_jsload,on_jsload,reload_dependents,map__52253,map__52253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_52324,inst_52320,inst_52323,inst_52328,inst_52326,inst_52343,inst_52345,inst_52346,inst_52347,inst_52348,state_val_52407,c__48693__auto__,map__52252,map__52252__$1,opts,before_jsload,on_jsload,reload_dependents,map__52253,map__52253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_52350 = setTimeout(inst_52349,(10));
var state_52406__$1 = (function (){var statearr_52477 = state_52406;
(statearr_52477[(33)] = inst_52343);

(statearr_52477[(34)] = inst_52348);

return statearr_52477;
})();
var statearr_52478_52544 = state_52406__$1;
(statearr_52478_52544[(2)] = inst_52350);

(statearr_52478_52544[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (16))){
var state_52406__$1 = state_52406;
var statearr_52479_52545 = state_52406__$1;
(statearr_52479_52545[(2)] = reload_dependents);

(statearr_52479_52545[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (38))){
var inst_52360 = (state_52406[(16)]);
var inst_52377 = cljs.core.apply.call(null,cljs.core.hash_map,inst_52360);
var state_52406__$1 = state_52406;
var statearr_52480_52546 = state_52406__$1;
(statearr_52480_52546[(2)] = inst_52377);

(statearr_52480_52546[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (30))){
var state_52406__$1 = state_52406;
var statearr_52481_52547 = state_52406__$1;
(statearr_52481_52547[(2)] = null);

(statearr_52481_52547[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (10))){
var inst_52280 = (state_52406[(22)]);
var inst_52282 = cljs.core.chunked_seq_QMARK_.call(null,inst_52280);
var state_52406__$1 = state_52406;
if(inst_52282){
var statearr_52482_52548 = state_52406__$1;
(statearr_52482_52548[(1)] = (13));

} else {
var statearr_52483_52549 = state_52406__$1;
(statearr_52483_52549[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (18))){
var inst_52314 = (state_52406[(2)]);
var state_52406__$1 = state_52406;
if(cljs.core.truth_(inst_52314)){
var statearr_52484_52550 = state_52406__$1;
(statearr_52484_52550[(1)] = (19));

} else {
var statearr_52485_52551 = state_52406__$1;
(statearr_52485_52551[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (42))){
var state_52406__$1 = state_52406;
var statearr_52486_52552 = state_52406__$1;
(statearr_52486_52552[(2)] = null);

(statearr_52486_52552[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (37))){
var inst_52372 = (state_52406[(2)]);
var state_52406__$1 = state_52406;
var statearr_52487_52553 = state_52406__$1;
(statearr_52487_52553[(2)] = inst_52372);

(statearr_52487_52553[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52407 === (8))){
var inst_52267 = (state_52406[(7)]);
var inst_52280 = (state_52406[(22)]);
var inst_52280__$1 = cljs.core.seq.call(null,inst_52267);
var state_52406__$1 = (function (){var statearr_52488 = state_52406;
(statearr_52488[(22)] = inst_52280__$1);

return statearr_52488;
})();
if(inst_52280__$1){
var statearr_52489_52554 = state_52406__$1;
(statearr_52489_52554[(1)] = (10));

} else {
var statearr_52490_52555 = state_52406__$1;
(statearr_52490_52555[(1)] = (11));

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
}
});})(c__48693__auto__,map__52252,map__52252__$1,opts,before_jsload,on_jsload,reload_dependents,map__52253,map__52253__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__48581__auto__,c__48693__auto__,map__52252,map__52252__$1,opts,before_jsload,on_jsload,reload_dependents,map__52253,map__52253__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48582__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48582__auto____0 = (function (){
var statearr_52494 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52494[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__48582__auto__);

(statearr_52494[(1)] = (1));

return statearr_52494;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__48582__auto____1 = (function (state_52406){
while(true){
var ret_value__48583__auto__ = (function (){try{while(true){
var result__48584__auto__ = switch__48581__auto__.call(null,state_52406);
if(cljs.core.keyword_identical_QMARK_.call(null,result__48584__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__48584__auto__;
}
break;
}
}catch (e52495){if((e52495 instanceof Object)){
var ex__48585__auto__ = e52495;
var statearr_52496_52556 = state_52406;
(statearr_52496_52556[(5)] = ex__48585__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52406);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__48583__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52557 = state_52406;
state_52406 = G__52557;
continue;
} else {
return ret_value__48583__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__48582__auto__ = function(state_52406){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48582__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48582__auto____1.call(this,state_52406);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__48582__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__48582__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__48582__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__48582__auto__;
})()
;})(switch__48581__auto__,c__48693__auto__,map__52252,map__52252__$1,opts,before_jsload,on_jsload,reload_dependents,map__52253,map__52253__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__48695__auto__ = (function (){var statearr_52497 = f__48694__auto__.call(null);
(statearr_52497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__48693__auto__);

return statearr_52497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__48695__auto__);
});})(c__48693__auto__,map__52252,map__52252__$1,opts,before_jsload,on_jsload,reload_dependents,map__52253,map__52253__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__48693__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__52560,link){
var map__52563 = p__52560;
var map__52563__$1 = ((((!((map__52563 == null)))?((((map__52563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52563):map__52563);
var file = cljs.core.get.call(null,map__52563__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__52563,map__52563__$1,file){
return (function (p1__52558_SHARP_,p2__52559_SHARP_){
if(cljs.core._EQ_.call(null,p1__52558_SHARP_,p2__52559_SHARP_)){
return p1__52558_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__52563,map__52563__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__52569){
var map__52570 = p__52569;
var map__52570__$1 = ((((!((map__52570 == null)))?((((map__52570.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52570.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52570):map__52570);
var match_length = cljs.core.get.call(null,map__52570__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__52570__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__52565_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__52565_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args52572 = [];
var len__45609__auto___52575 = arguments.length;
var i__45610__auto___52576 = (0);
while(true){
if((i__45610__auto___52576 < len__45609__auto___52575)){
args52572.push((arguments[i__45610__auto___52576]));

var G__52577 = (i__45610__auto___52576 + (1));
i__45610__auto___52576 = G__52577;
continue;
} else {
}
break;
}

var G__52574 = args52572.length;
switch (G__52574) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args52572.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__52579_SHARP_,p2__52580_SHARP_){
return cljs.core.assoc.call(null,p1__52579_SHARP_,cljs.core.get.call(null,p2__52580_SHARP_,key),p2__52580_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__52581){
var map__52584 = p__52581;
var map__52584__$1 = ((((!((map__52584 == null)))?((((map__52584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52584):map__52584);
var f_data = map__52584__$1;
var file = cljs.core.get.call(null,map__52584__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__52586,p__52587){
var map__52596 = p__52586;
var map__52596__$1 = ((((!((map__52596 == null)))?((((map__52596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52596):map__52596);
var opts = map__52596__$1;
var on_cssload = cljs.core.get.call(null,map__52596__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__52597 = p__52587;
var map__52597__$1 = ((((!((map__52597 == null)))?((((map__52597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__52597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52597):map__52597);
var files_msg = map__52597__$1;
var files = cljs.core.get.call(null,map__52597__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__52600_52604 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
var chunk__52601_52605 = null;
var count__52602_52606 = (0);
var i__52603_52607 = (0);
while(true){
if((i__52603_52607 < count__52602_52606)){
var f_52608 = cljs.core._nth.call(null,chunk__52601_52605,i__52603_52607);
figwheel.client.file_reloading.reload_css_file.call(null,f_52608);

var G__52609 = seq__52600_52604;
var G__52610 = chunk__52601_52605;
var G__52611 = count__52602_52606;
var G__52612 = (i__52603_52607 + (1));
seq__52600_52604 = G__52609;
chunk__52601_52605 = G__52610;
count__52602_52606 = G__52611;
i__52603_52607 = G__52612;
continue;
} else {
var temp__4657__auto___52613 = cljs.core.seq.call(null,seq__52600_52604);
if(temp__4657__auto___52613){
var seq__52600_52614__$1 = temp__4657__auto___52613;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52600_52614__$1)){
var c__45345__auto___52615 = cljs.core.chunk_first.call(null,seq__52600_52614__$1);
var G__52616 = cljs.core.chunk_rest.call(null,seq__52600_52614__$1);
var G__52617 = c__45345__auto___52615;
var G__52618 = cljs.core.count.call(null,c__45345__auto___52615);
var G__52619 = (0);
seq__52600_52604 = G__52616;
chunk__52601_52605 = G__52617;
count__52602_52606 = G__52618;
i__52603_52607 = G__52619;
continue;
} else {
var f_52620 = cljs.core.first.call(null,seq__52600_52614__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_52620);

var G__52621 = cljs.core.next.call(null,seq__52600_52614__$1);
var G__52622 = null;
var G__52623 = (0);
var G__52624 = (0);
seq__52600_52604 = G__52621;
chunk__52601_52605 = G__52622;
count__52602_52606 = G__52623;
i__52603_52607 = G__52624;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__52596,map__52596__$1,opts,on_cssload,map__52597,map__52597__$1,files_msg,files){
return (function (){
figwheel.client.file_reloading.on_cssload_custom_event.call(null,files);

return on_cssload.call(null,files);
});})(map__52596,map__52596__$1,opts,on_cssload,map__52597,map__52597__$1,files_msg,files))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1484941488685