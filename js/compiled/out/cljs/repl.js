// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49574){
var map__49599 = p__49574;
var map__49599__$1 = ((((!((map__49599 == null)))?((((map__49599.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49599.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49599):map__49599);
var m = map__49599__$1;
var n = cljs.core.get.call(null,map__49599__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__49599__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49601_49623 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49602_49624 = null;
var count__49603_49625 = (0);
var i__49604_49626 = (0);
while(true){
if((i__49604_49626 < count__49603_49625)){
var f_49627 = cljs.core._nth.call(null,chunk__49602_49624,i__49604_49626);
cljs.core.println.call(null,"  ",f_49627);

var G__49628 = seq__49601_49623;
var G__49629 = chunk__49602_49624;
var G__49630 = count__49603_49625;
var G__49631 = (i__49604_49626 + (1));
seq__49601_49623 = G__49628;
chunk__49602_49624 = G__49629;
count__49603_49625 = G__49630;
i__49604_49626 = G__49631;
continue;
} else {
var temp__4657__auto___49632 = cljs.core.seq.call(null,seq__49601_49623);
if(temp__4657__auto___49632){
var seq__49601_49633__$1 = temp__4657__auto___49632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49601_49633__$1)){
var c__45308__auto___49634 = cljs.core.chunk_first.call(null,seq__49601_49633__$1);
var G__49635 = cljs.core.chunk_rest.call(null,seq__49601_49633__$1);
var G__49636 = c__45308__auto___49634;
var G__49637 = cljs.core.count.call(null,c__45308__auto___49634);
var G__49638 = (0);
seq__49601_49623 = G__49635;
chunk__49602_49624 = G__49636;
count__49603_49625 = G__49637;
i__49604_49626 = G__49638;
continue;
} else {
var f_49639 = cljs.core.first.call(null,seq__49601_49633__$1);
cljs.core.println.call(null,"  ",f_49639);

var G__49640 = cljs.core.next.call(null,seq__49601_49633__$1);
var G__49641 = null;
var G__49642 = (0);
var G__49643 = (0);
seq__49601_49623 = G__49640;
chunk__49602_49624 = G__49641;
count__49603_49625 = G__49642;
i__49604_49626 = G__49643;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49644 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__44497__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__44497__auto__)){
return or__44497__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_49644);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_49644)))?cljs.core.second.call(null,arglists_49644):arglists_49644));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49605_49645 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49606_49646 = null;
var count__49607_49647 = (0);
var i__49608_49648 = (0);
while(true){
if((i__49608_49648 < count__49607_49647)){
var vec__49609_49649 = cljs.core._nth.call(null,chunk__49606_49646,i__49608_49648);
var name_49650 = cljs.core.nth.call(null,vec__49609_49649,(0),null);
var map__49612_49651 = cljs.core.nth.call(null,vec__49609_49649,(1),null);
var map__49612_49652__$1 = ((((!((map__49612_49651 == null)))?((((map__49612_49651.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49612_49651.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49612_49651):map__49612_49651);
var doc_49653 = cljs.core.get.call(null,map__49612_49652__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49654 = cljs.core.get.call(null,map__49612_49652__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49650);

cljs.core.println.call(null," ",arglists_49654);

if(cljs.core.truth_(doc_49653)){
cljs.core.println.call(null," ",doc_49653);
} else {
}

var G__49655 = seq__49605_49645;
var G__49656 = chunk__49606_49646;
var G__49657 = count__49607_49647;
var G__49658 = (i__49608_49648 + (1));
seq__49605_49645 = G__49655;
chunk__49606_49646 = G__49656;
count__49607_49647 = G__49657;
i__49608_49648 = G__49658;
continue;
} else {
var temp__4657__auto___49659 = cljs.core.seq.call(null,seq__49605_49645);
if(temp__4657__auto___49659){
var seq__49605_49660__$1 = temp__4657__auto___49659;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49605_49660__$1)){
var c__45308__auto___49661 = cljs.core.chunk_first.call(null,seq__49605_49660__$1);
var G__49662 = cljs.core.chunk_rest.call(null,seq__49605_49660__$1);
var G__49663 = c__45308__auto___49661;
var G__49664 = cljs.core.count.call(null,c__45308__auto___49661);
var G__49665 = (0);
seq__49605_49645 = G__49662;
chunk__49606_49646 = G__49663;
count__49607_49647 = G__49664;
i__49608_49648 = G__49665;
continue;
} else {
var vec__49614_49666 = cljs.core.first.call(null,seq__49605_49660__$1);
var name_49667 = cljs.core.nth.call(null,vec__49614_49666,(0),null);
var map__49617_49668 = cljs.core.nth.call(null,vec__49614_49666,(1),null);
var map__49617_49669__$1 = ((((!((map__49617_49668 == null)))?((((map__49617_49668.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49617_49668.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49617_49668):map__49617_49668);
var doc_49670 = cljs.core.get.call(null,map__49617_49669__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49671 = cljs.core.get.call(null,map__49617_49669__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49667);

cljs.core.println.call(null," ",arglists_49671);

if(cljs.core.truth_(doc_49670)){
cljs.core.println.call(null," ",doc_49670);
} else {
}

var G__49672 = cljs.core.next.call(null,seq__49605_49660__$1);
var G__49673 = null;
var G__49674 = (0);
var G__49675 = (0);
seq__49605_49645 = G__49672;
chunk__49606_49646 = G__49673;
count__49607_49647 = G__49674;
i__49608_49648 = G__49675;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__49619 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49620 = null;
var count__49621 = (0);
var i__49622 = (0);
while(true){
if((i__49622 < count__49621)){
var role = cljs.core._nth.call(null,chunk__49620,i__49622);
var temp__4657__auto___49676__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___49676__$1)){
var spec_49677 = temp__4657__auto___49676__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_49677));
} else {
}

var G__49678 = seq__49619;
var G__49679 = chunk__49620;
var G__49680 = count__49621;
var G__49681 = (i__49622 + (1));
seq__49619 = G__49678;
chunk__49620 = G__49679;
count__49621 = G__49680;
i__49622 = G__49681;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__49619);
if(temp__4657__auto____$1){
var seq__49619__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49619__$1)){
var c__45308__auto__ = cljs.core.chunk_first.call(null,seq__49619__$1);
var G__49682 = cljs.core.chunk_rest.call(null,seq__49619__$1);
var G__49683 = c__45308__auto__;
var G__49684 = cljs.core.count.call(null,c__45308__auto__);
var G__49685 = (0);
seq__49619 = G__49682;
chunk__49620 = G__49683;
count__49621 = G__49684;
i__49622 = G__49685;
continue;
} else {
var role = cljs.core.first.call(null,seq__49619__$1);
var temp__4657__auto___49686__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___49686__$2)){
var spec_49687 = temp__4657__auto___49686__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_49687));
} else {
}

var G__49688 = cljs.core.next.call(null,seq__49619__$1);
var G__49689 = null;
var G__49690 = (0);
var G__49691 = (0);
seq__49619 = G__49688;
chunk__49620 = G__49689;
count__49621 = G__49690;
i__49622 = G__49691;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1484940825698