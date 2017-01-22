// Compiled by ClojureScript 1.9.229 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__56029,handler){
var map__56030 = p__56029;
var map__56030__$1 = ((((!((map__56030 == null)))?((((map__56030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56030):map__56030);
var uri = cljs.core.get.call(null,map__56030__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__56030__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__56030__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__56030__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__56030__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__56030__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__56030__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__56030,map__56030__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__56028_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__56028_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__56030,map__56030__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___56042 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___56042)){
var response_type_56043 = temp__4657__auto___56042;
this$__$1.responseType = cljs.core.name.call(null,response_type_56043);
} else {
}

var seq__56032_56044 = cljs.core.seq.call(null,headers);
var chunk__56033_56045 = null;
var count__56034_56046 = (0);
var i__56035_56047 = (0);
while(true){
if((i__56035_56047 < count__56034_56046)){
var vec__56036_56048 = cljs.core._nth.call(null,chunk__56033_56045,i__56035_56047);
var k_56049 = cljs.core.nth.call(null,vec__56036_56048,(0),null);
var v_56050 = cljs.core.nth.call(null,vec__56036_56048,(1),null);
this$__$1.setRequestHeader(k_56049,v_56050);

var G__56051 = seq__56032_56044;
var G__56052 = chunk__56033_56045;
var G__56053 = count__56034_56046;
var G__56054 = (i__56035_56047 + (1));
seq__56032_56044 = G__56051;
chunk__56033_56045 = G__56052;
count__56034_56046 = G__56053;
i__56035_56047 = G__56054;
continue;
} else {
var temp__4657__auto___56055 = cljs.core.seq.call(null,seq__56032_56044);
if(temp__4657__auto___56055){
var seq__56032_56056__$1 = temp__4657__auto___56055;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56032_56056__$1)){
var c__45345__auto___56057 = cljs.core.chunk_first.call(null,seq__56032_56056__$1);
var G__56058 = cljs.core.chunk_rest.call(null,seq__56032_56056__$1);
var G__56059 = c__45345__auto___56057;
var G__56060 = cljs.core.count.call(null,c__45345__auto___56057);
var G__56061 = (0);
seq__56032_56044 = G__56058;
chunk__56033_56045 = G__56059;
count__56034_56046 = G__56060;
i__56035_56047 = G__56061;
continue;
} else {
var vec__56039_56062 = cljs.core.first.call(null,seq__56032_56056__$1);
var k_56063 = cljs.core.nth.call(null,vec__56039_56062,(0),null);
var v_56064 = cljs.core.nth.call(null,vec__56039_56062,(1),null);
this$__$1.setRequestHeader(k_56063,v_56064);

var G__56065 = cljs.core.next.call(null,seq__56032_56056__$1);
var G__56066 = null;
var G__56067 = (0);
var G__56068 = (0);
seq__56032_56044 = G__56065;
chunk__56033_56045 = G__56066;
count__56034_56046 = G__56067;
i__56035_56047 = G__56068;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__44534__auto__ = body;
if(cljs.core.truth_(or__44534__auto__)){
return or__44534__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1484941504312