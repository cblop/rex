// Compiled by ClojureScript 1.9.229 {}
goog.provide('ggj17.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('goog.dom');
goog.require('ajax.core');
goog.require('hickory.core');
goog.require('ggj17.db');
ggj17.events.get_character = (function ggj17$events$get_character(response){
var parsed = hickory.core.parse.call(null,response);
var hiccup = hickory.core.as_hiccup.call(null,parsed);
cljs.core.println.call(null,"RESPONSe:");

cljs.core.println.call(null,cljs.core.nth.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,hiccup),(3)),(2)));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-character","set-character",-552195779),cljs.core.nth.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,hiccup),(3)),(2))], null));
});
ggj17.events.get_foot = (function ggj17$events$get_foot(response){
var parsed = hickory.core.parse.call(null,response);
var hiccup = hickory.core.as_hiccup.call(null,parsed);
cljs.core.println.call(null,"RESPONSe:");

cljs.core.println.call(null,cljs.core.nth.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,hiccup),(3)),(2)));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-foot","set-foot",-540443499),cljs.core.nth.call(null,cljs.core.nth.call(null,cljs.core.first.call(null,hiccup),(3)),(2))], null));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"comment","comment",532206069),(function (db,p__58037){
var vec__58038 = p__58037;
var _ = cljs.core.nth.call(null,vec__58038,(0),null);
var id = cljs.core.nth.call(null,vec__58038,(1),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dialogue","set-dialogue",-1940240819),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"character","character",380652989),new cljs.core.Keyword(null,"rex","rex",-1105729361),new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"say","say",504378016),(function (db,p__58041){
var vec__58042 = p__58041;
var _ = cljs.core.nth.call(null,vec__58042,(0),null);
var char$ = cljs.core.nth.call(null,vec__58042,(1),null);
var id = cljs.core.nth.call(null,vec__58042,(2),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-dialogue","set-dialogue",-1940240819),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"character","character",380652989),char$,new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-realness","change-realness",1588221371),(function (db,p__58045){
var vec__58046 = p__58045;
var _ = cljs.core.nth.call(null,vec__58046,(0),null);
var val = cljs.core.nth.call(null,vec__58046,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"realness","realness",-251186993),(new cljs.core.Keyword(null,"realness","realness",-251186993).cljs$core$IFn$_invoke$arity$1(db) + val));
}));
ggj17.events.letterbox_size = (function ggj17$events$letterbox_size(){
var width = window.innerWidth;
var height = window.innerHeight;
var aspect = (height - (width / 1.78));
if((aspect > (0))){
return ((aspect / (2)) | (0));
} else {
return (0);
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-letterbox","set-letterbox",1982909316),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"letterbox","letterbox",1671383600),ggj17.events.letterbox_size.call(null));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"show-line","show-line",1792317633),(function (db,p__58049){
var vec__58050 = p__58049;
var _ = cljs.core.nth.call(null,vec__58050,(0),null);
var character = cljs.core.nth.call(null,vec__58050,(1),null);
var id = cljs.core.nth.call(null,vec__58050,(2),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"talking","talking",549208074),true,new cljs.core.Keyword(null,"dialogue","dialogue",1647952462));
}));
ggj17.events.get_questions = (function ggj17$events$get_questions(player,realness){
return cljs.core.filter.call(null,(function (p1__58053_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"realness","realness",-251186993).cljs$core$IFn$_invoke$arity$1(p1__58053_SHARP_),realness);
}),new cljs.core.Keyword(null,"dialogue","dialogue",1647952462).cljs$core$IFn$_invoke$arity$1(player));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"no-questions","no-questions",-1640416747),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"questions","questions",1226225380),cljs.core.PersistentVector.EMPTY);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"question","question",-1411720117),(function (db,p__58055){
var vec__58056 = p__58055;
var _ = cljs.core.nth.call(null,vec__58056,(0),null);
var char$ = cljs.core.nth.call(null,vec__58056,(1),null);
var realness = new cljs.core.Keyword(null,"realness","realness",-251186993).cljs$core$IFn$_invoke$arity$1(db);
var player = cljs.core.first.call(null,cljs.core.filter.call(null,((function (realness,vec__58056,_,char$){
return (function (p1__58054_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__58054_SHARP_),new cljs.core.Keyword(null,"rex","rex",-1105729361));
});})(realness,vec__58056,_,char$))
,new cljs.core.Keyword(null,"characters","characters",-163867197).cljs$core$IFn$_invoke$arity$1(db)));
var qs = ggj17.events.get_questions.call(null,player,realness);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"questions","questions",1226225380),qs);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"ask-questions","ask-questions",433188052),(function (db,_){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"asking","asking",-773489227),true);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-scene","change-scene",1239696043),(function (db,p__58059){
var vec__58060 = p__58059;
var _ = cljs.core.nth.call(null,vec__58060,(0),null);
var direction = cljs.core.nth.call(null,vec__58060,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"scene","scene",1523800415),((cljs.core._EQ_.call(null,direction,new cljs.core.Keyword(null,"left","left",-399115937)))?(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(db) - (1)):(new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(db) + (1))));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-asking","set-asking",1863431621),(function (db,p__58063){
var vec__58064 = p__58063;
var _ = cljs.core.nth.call(null,vec__58064,(0),null);
var val = cljs.core.nth.call(null,vec__58064,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"asking","asking",-773489227),val);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-talking","set-talking",-832456116),(function (db,p__58067){
var vec__58068 = p__58067;
var _ = cljs.core.nth.call(null,vec__58068,(0),null);
var val = cljs.core.nth.call(null,vec__58068,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"talking","talking",549208074),val);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-character","set-character",-552195779),(function (db,p__58071){
var vec__58072 = p__58071;
var _ = cljs.core.nth.call(null,vec__58072,(0),null);
var svg = cljs.core.nth.call(null,vec__58072,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"character","character",380652989),svg);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-dialogue","set-dialogue",-1940240819),(function (db,p__58075){
var vec__58076 = p__58075;
var _ = cljs.core.nth.call(null,vec__58076,(0),null);
var dialogue = cljs.core.nth.call(null,vec__58076,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"dialogue","dialogue",1647952462),dialogue);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-objects","set-objects",1929562802),(function (db,p__58079){
var vec__58080 = p__58079;
var _ = cljs.core.nth.call(null,vec__58080,(0),null);
var os = cljs.core.nth.call(null,vec__58080,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"objects","objects",2099713734),os);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-foot","set-foot",-540443499),(function (db,p__58083){
var vec__58084 = p__58083;
var _ = cljs.core.nth.call(null,vec__58084,(0),null);
var svg = cljs.core.nth.call(null,vec__58084,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"foot","foot",-487226607),svg);
}));
ggj17.events.scene_handler = (function ggj17$events$scene_handler(response,item){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"backdrop","backdrop",-1291357381),response], null));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"character","character",380652989),(function (db,p__58087){
var vec__58088 = p__58087;
var _ = cljs.core.nth.call(null,vec__58088,(0),null);
var svg = cljs.core.nth.call(null,vec__58088,(1),null);
ajax.core.GET.call(null,svg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.Keyword(null,"handler","handler",-195596612),ggj17.events.get_character], null));

return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"foot","foot",-487226607),(function (db,p__58091){
var vec__58092 = p__58091;
var _ = cljs.core.nth.call(null,vec__58092,(0),null);
var svg = cljs.core.nth.call(null,vec__58092,(1),null);
ajax.core.GET.call(null,svg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.Keyword(null,"handler","handler",-195596612),ggj17.events.get_foot], null));

return db;
}));
ggj17.events.error_handler = (function ggj17$events$error_handler(p__58095){
var map__58098 = p__58095;
var map__58098__$1 = ((((!((map__58098 == null)))?((((map__58098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58098):map__58098);
var status = cljs.core.get.call(null,map__58098__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var status_text = cljs.core.get.call(null,map__58098__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));
return console.log([cljs.core.str("something bad happened: "),cljs.core.str(status),cljs.core.str(" "),cljs.core.str(status_text)].join(''));
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return ggj17.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"get-backdrops","get-backdrops",1614566904),(function (db,_){
return ajax.core.GET.call(null,"backdrops/beach1.svg",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__58100_SHARP_){
return ggj17.events.scene_handler.call(null,p1__58100_SHARP_,new cljs.core.Keyword(null,"beach","beach",-666891660));
})], null));
}));

//# sourceMappingURL=events.js.map?rel=1485119765255