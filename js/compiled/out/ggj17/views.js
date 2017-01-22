// Compiled by ClojureScript 1.9.229 {}
goog.provide('ggj17.views');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('re_frame.core');
goog.require('hickory.core');
goog.require('re_com.core');
ggj17.views.get_line = (function ggj17$views$get_line(){
var d = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogue","dialogue",1647952462)], null));
var character = new cljs.core.Keyword(null,"character","character",380652989).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d));
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d));
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,d));
var lines = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781)], null));
if(cljs.core._EQ_.call(null,character,new cljs.core.Keyword(null,"rex","rex",-1105729361))){
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"question","question",-1411720117))){
return new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (d,character,type,id,lines){
return (function (p1__58163_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__58163_SHARP_),id);
});})(d,character,type,id,lines))
,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lines)))));
} else {
return new cljs.core.Keyword(null,"comment","comment",532206069).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (d,character,type,id,lines){
return (function (p1__58164_SHARP_){
return cljs.core._EQ_.call(null,p1__58164_SHARP_,id);
});})(d,character,type,id,lines))
,new cljs.core.Keyword(null,"comments","comments",-293346423).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lines)))));
}
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"answer","answer",-742633163))){
return new cljs.core.Keyword(null,"answer","answer",-742633163).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (d,character,type,id,lines){
return (function (p1__58165_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(p1__58165_SHARP_),id);
});})(d,character,type,id,lines))
,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"answers","answers",-2066449770).cljs$core$IFn$_invoke$arity$1(lines),character)))));
} else {
return null;
}
}
});
ggj17.views.embed_svg = (function ggj17$views$embed_svg(svg_string){
var parsed = hickory.core.parse.call(null,svg_string);
var hiccup = hickory.core.as_hiccup.call(null,parsed);
cljs.core.println.call(null,hiccup);

return hiccup;
});
ggj17.views.title = (function ggj17$views$title(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null));
return ((function (name){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.h_box,new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.title,new cljs.core.Keyword(null,"label","label",1718410804),cljs.core.deref.call(null,name),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level1","level1",813811133)], null)], null)], null);
});
;})(name))
});
ggj17.views.backdrop = (function ggj17$views$backdrop(){
var window = goog.dom.getWindow();
var viewport_size = goog.dom.getViewportSize(window);
var scene = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415)], null));
var svg = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,scene));
var letterbox = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"letterbox","letterbox",1671383600)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"floatTL",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding-top","padding-top",1929675955),cljs.core.deref.call(null,letterbox),new cljs.core.Keyword(null,"padding-bottom","padding-bottom",-1899795591),cljs.core.deref.call(null,letterbox),new cljs.core.Keyword(null,"background-color","background-color",570434026),"black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),svg,new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"auto"], null)], null)], null);
});
ggj17.views.object = (function ggj17$views$object(thing){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"floatTL object",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(thing),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(thing)], null),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(thing),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(thing),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(thing)], null)], null);
});
ggj17.views.npc = (function ggj17$views$npc(char$){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"floatTL object",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(char$),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(char$)], null),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(char$),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(char$),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"question","question",-1411720117),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(char$)], null));
})], null)], null);
});
ggj17.views.get_answer = (function ggj17$views$get_answer(line){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"character","character",380652989),new cljs.core.Keyword(null,"sam","sam",-966219316),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"answer","answer",-742633163),new cljs.core.Keyword(null,"file","file",-1269645878),"characters/sam-face.svg",new cljs.core.Keyword(null,"id","id",-1388402092),(0)], null);
});
ggj17.views.dialogue = (function ggj17$views$dialogue(p__58168){
var map__58171 = p__58168;
var map__58171__$1 = ((((!((map__58171 == null)))?((((map__58171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58171):map__58171);
var character = cljs.core.get.call(null,map__58171__$1,new cljs.core.Keyword(null,"character","character",380652989));
var id = cljs.core.get.call(null,map__58171__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var chars = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"characters","characters",-163867197)], null));
var this_char = cljs.core.first.call(null,cljs.core.filter.call(null,((function (chars,map__58171,map__58171__$1,character,id){
return (function (p1__58166_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__58166_SHARP_),character);
});})(chars,map__58171,map__58171__$1,character,id))
,cljs.core.deref.call(null,chars)));
var scene = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415)], null));
var other_char = cljs.core.first.call(null,new cljs.core.Keyword(null,"characters","characters",-163867197).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,scene)));
var line = cljs.core.first.call(null,cljs.core.filter.call(null,((function (chars,this_char,scene,other_char,map__58171,map__58171__$1,character,id){
return (function (p1__58167_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__58167_SHARP_),id);
});})(chars,this_char,scene,other_char,map__58171,map__58171__$1,character,id))
,new cljs.core.Keyword(null,"dialogue","dialogue",1647952462).cljs$core$IFn$_invoke$arity$1(this_char)));
var nudge = new cljs.core.Keyword(null,"nudge","nudge",-715499585).cljs$core$IFn$_invoke$arity$1(line);
var callback = ((function (chars,this_char,scene,other_char,line,nudge,map__58171,map__58171__$1,character,id){
return (function (){
if(cljs.core.truth_(nudge)){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-realness","change-realness",1588221371),nudge], null));
} else {
}

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dialogue","set-dialogue",-1940240819),null], null));

if(cljs.core.truth_((function (){var and__44522__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_char),new cljs.core.Keyword(null,"rex","rex",-1105729361));
if(and__44522__auto__){
return other_char;
} else {
return and__44522__auto__;
}
})())){
return setTimeout(((function (chars,this_char,scene,other_char,line,nudge,map__58171,map__58171__$1,character,id){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"say","say",504378016),other_char,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(line)], null));
});})(chars,this_char,scene,other_char,line,nudge,map__58171,map__58171__$1,character,id))
,(200));
} else {
return null;
}
});})(chars,this_char,scene,other_char,line,nudge,map__58171,map__58171__$1,character,id))
;
if(!((line == null))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"dialogue"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),"floatTL",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),"5%",new cljs.core.Keyword(null,"left","left",-399115937),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_char),new cljs.core.Keyword(null,"rex","rex",-1105729361)))?"5%":"47%")], null),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"face","face",-1356480717).cljs$core$IFn$_invoke$arity$1(this_char),new cljs.core.Keyword(null,"width","width",-384071477),"50%",new cljs.core.Keyword(null,"on-click","on-click",1632826543),callback], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(this_char),new cljs.core.Keyword(null,"rex","rex",-1105729361)))?"floatTL line-left":"floatTL line-right"),new cljs.core.Keyword(null,"rows","rows",850049680),(10),new cljs.core.Keyword(null,"cols","cols",-1914801295),(28),new cljs.core.Keyword(null,"on-click","on-click",1632826543),callback], null),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(line)], null)], null);
} else {
return null;
}
});
ggj17.views.exit_left = (function ggj17$views$exit_left(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"exit-left",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-scene","change-scene",1239696043),new cljs.core.Keyword(null,"left","left",-399115937)], null));
})], null)], null);
});
ggj17.views.exit_right = (function ggj17$views$exit_right(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"exit-right",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-scene","change-scene",1239696043),new cljs.core.Keyword(null,"right","right",-452581833)], null));
})], null)], null);
});
ggj17.views.character = (function ggj17$views$character(){
var character__$1 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"character","character",380652989)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"floatTL",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),"30%",new cljs.core.Keyword(null,"left","left",-399115937),"10%"], null),new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.deref.call(null,character__$1),new cljs.core.Keyword(null,"width","width",-384071477),"10%"], null)], null);
});
ggj17.views.foot = (function ggj17$views$foot(){
var foot__$1 = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foot","foot",-487226607)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"floatTL",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),"85%",new cljs.core.Keyword(null,"left","left",-399115937),"80%"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (foot__$1){
return (function (){
return alert("You pick up the foot");
});})(foot__$1))
], null),cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.deref.call(null,foot__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"width","width",-384071477)], null),"100%"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477)], null),"0 0 70 70")], null);
});
ggj17.views.face = (function ggj17$views$face(){
var foot = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"foot","foot",-487226607)], null));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});
ggj17.views.scene = (function ggj17$views$scene(){
var objects = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__45314__auto__ = ((function (objects){
return (function ggj17$views$scene_$_iter__58177(s__58178){
return (new cljs.core.LazySeq(null,((function (objects){
return (function (){
var s__58178__$1 = s__58178;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__58178__$1);
if(temp__4657__auto__){
var s__58178__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__58178__$2)){
var c__45312__auto__ = cljs.core.chunk_first.call(null,s__58178__$2);
var size__45313__auto__ = cljs.core.count.call(null,c__45312__auto__);
var b__58180 = cljs.core.chunk_buffer.call(null,size__45313__auto__);
if((function (){var i__58179 = (0);
while(true){
if((i__58179 < size__45313__auto__)){
var o = cljs.core._nth.call(null,c__45312__auto__,i__58179);
cljs.core.chunk_append.call(null,b__58180,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ggj17.views.object,o], null));

var G__58181 = (i__58179 + (1));
i__58179 = G__58181;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58180),ggj17$views$scene_$_iter__58177.call(null,cljs.core.chunk_rest.call(null,s__58178__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58180),null);
}
} else {
var o = cljs.core.first.call(null,s__58178__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ggj17.views.object,o], null),ggj17$views$scene_$_iter__58177.call(null,cljs.core.rest.call(null,s__58178__$2)));
}
} else {
return null;
}
break;
}
});})(objects))
,null,null));
});})(objects))
;
return iter__45314__auto__.call(null,cljs.core.deref.call(null,objects));
})()], null);
});
ggj17.views.get_questions = (function ggj17$views$get_questions(realness){
var lines = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lines","lines",-700165781)], null));
return cljs.core.filter.call(null,((function (lines){
return (function (p1__58182_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"realness","realness",-251186993).cljs$core$IFn$_invoke$arity$1(p1__58182_SHARP_),realness);
});})(lines))
,new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,lines)));
});
ggj17.views.questions = (function ggj17$views$questions(qs){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"floatTL",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),cljs.core.map.call(null,(function (q,i){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.button,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(q),new cljs.core.Keyword(null,"class","class",-2030961996),"floatTL question-button",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top","top",-1856271961),(((50) * i) + (300)),new cljs.core.Keyword(null,"left","left",-399115937),"5%",new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"no-questions","no-questions",-1640416747)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comment","comment",532206069),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(q)], null));
})], null);
}),qs,cljs.core.range.call(null,cljs.core.count.call(null,qs)))], null);
});
ggj17.views.get_object = (function ggj17$views$get_object(name){
var objects = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734)], null));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (objects){
return (function (p1__58183_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__58183_SHARP_),name);
});})(objects))
,cljs.core.deref.call(null,objects)));
});
ggj17.views.get_character = (function ggj17$views$get_character(name){
var characters = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"characters","characters",-163867197)], null));
return cljs.core.first.call(null,cljs.core.filter.call(null,((function (characters){
return (function (p1__58184_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__58184_SHARP_),name);
});})(characters))
,cljs.core.deref.call(null,characters)));
});
ggj17.views.main_panel = (function ggj17$views$main_panel(){
return (function (){
var scene_no = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene-no","scene-no",-60686811)], null));
var scene = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scene","scene",1523800415)], null));
var qs = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"questions","questions",1226225380)], null));
var talking = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"talking","talking",549208074)], null));
var characters = new cljs.core.Keyword(null,"characters","characters",-163867197).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,scene));
var d = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dialogue","dialogue",1647952462)], null));
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,scene));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.v_box,new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ggj17.views.backdrop], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ggj17.views.character], null),(function (){var iter__45314__auto__ = ((function (scene_no,scene,qs,talking,characters,d,objects){
return (function ggj17$views$main_panel_$_iter__58193(s__58194){
return (new cljs.core.LazySeq(null,((function (scene_no,scene,qs,talking,characters,d,objects){
return (function (){
var s__58194__$1 = s__58194;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__58194__$1);
if(temp__4657__auto__){
var s__58194__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__58194__$2)){
var c__45312__auto__ = cljs.core.chunk_first.call(null,s__58194__$2);
var size__45313__auto__ = cljs.core.count.call(null,c__45312__auto__);
var b__58196 = cljs.core.chunk_buffer.call(null,size__45313__auto__);
if((function (){var i__58195 = (0);
while(true){
if((i__58195 < size__45313__auto__)){
var o = cljs.core._nth.call(null,c__45312__auto__,i__58195);
cljs.core.chunk_append.call(null,b__58196,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ggj17.views.object,ggj17.views.get_object.call(null,o)], null));

var G__58201 = (i__58195 + (1));
i__58195 = G__58201;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58196),ggj17$views$main_panel_$_iter__58193.call(null,cljs.core.chunk_rest.call(null,s__58194__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58196),null);
}
} else {
var o = cljs.core.first.call(null,s__58194__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ggj17.views.object,ggj17.views.get_object.call(null,o)], null),ggj17$views$main_panel_$_iter__58193.call(null,cljs.core.rest.call(null,s__58194__$2)));
}
} else {
return null;
}
break;
}
});})(scene_no,scene,qs,talking,characters,d,objects))
,null,null));
});})(scene_no,scene,qs,talking,characters,d,objects))
;
return iter__45314__auto__.call(null,objects);
})(),(function (){var iter__45314__auto__ = ((function (scene_no,scene,qs,talking,characters,d,objects){
return (function ggj17$views$main_panel_$_iter__58197(s__58198){
return (new cljs.core.LazySeq(null,((function (scene_no,scene,qs,talking,characters,d,objects){
return (function (){
var s__58198__$1 = s__58198;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__58198__$1);
if(temp__4657__auto__){
var s__58198__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__58198__$2)){
var c__45312__auto__ = cljs.core.chunk_first.call(null,s__58198__$2);
var size__45313__auto__ = cljs.core.count.call(null,c__45312__auto__);
var b__58200 = cljs.core.chunk_buffer.call(null,size__45313__auto__);
if((function (){var i__58199 = (0);
while(true){
if((i__58199 < size__45313__auto__)){
var c = cljs.core._nth.call(null,c__45312__auto__,i__58199);
cljs.core.chunk_append.call(null,b__58200,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ggj17.views.npc,ggj17.views.get_character.call(null,c)], null));

var G__58202 = (i__58199 + (1));
i__58199 = G__58202;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58200),ggj17$views$main_panel_$_iter__58197.call(null,cljs.core.chunk_rest.call(null,s__58198__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__58200),null);
}
} else {
var c = cljs.core.first.call(null,s__58198__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ggj17.views.npc,ggj17.views.get_character.call(null,c)], null),ggj17$views$main_panel_$_iter__58197.call(null,cljs.core.rest.call(null,s__58198__$2)));
}
} else {
return null;
}
break;
}
});})(scene_no,scene,qs,talking,characters,d,objects))
,null,null));
});})(scene_no,scene,qs,talking,characters,d,objects))
;
return iter__45314__auto__.call(null,characters);
})(),(cljs.core.truth_(cljs.core.deref.call(null,d))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ggj17.views.dialogue,cljs.core.deref.call(null,d)], null):null),((cljs.core.seq.call(null,cljs.core.deref.call(null,qs)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ggj17.views.questions,cljs.core.deref.call(null,qs)], null):null),((!(cljs.core._EQ_.call(null,cljs.core.deref.call(null,scene_no),(0))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ggj17.views.exit_left], null):null),((!(cljs.core._EQ_.call(null,cljs.core.deref.call(null,scene_no),(3))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ggj17.views.exit_right], null):null)], null)], null);
});
});
window.onload = (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-letterbox","set-letterbox",1982909316)], null));
});
window.onresize = (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-letterbox","set-letterbox",1982909316)], null));
});

//# sourceMappingURL=views.js.map?rel=1485119887319