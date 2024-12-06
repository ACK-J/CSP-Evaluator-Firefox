(function(){var d=function(b){var a=0;return function(){return a<b.length?{done:!1,value:b[a++]}:{done:!0}}};/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var f=function(b,a,c){return b.call.apply(b.bind,arguments)},g=function(b,a,c){if(!b)throw Error();if(arguments.length>2){var k=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,k);return b.apply(a,e)}}return function(){return b.apply(a,arguments)}},h=function(b,a,c){h=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g;return h.apply(null,arguments)};var l=function(){window.addEventListener("load",h(this.findCspMetaTags_,this))};
l.prototype.findCspMetaTags_=function(){var b=[];var a=document.getElementsByTagName("meta");var c=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(c)a=c.call(a);else if(typeof a.length=="number")a={next:d(a)};else throw Error(String(a)+" is not an iterable or ArrayLike");for(c=a.next();!c.done;c=a.next())c=c.value,c.getAttribute("http-equiv")&&c.getAttribute("http-equiv").toLowerCase()=="content-security-policy"&&b.push(c.getAttribute("content"));browser.runtime!==void 0&&browser.runtime.sendMessage({cspMetaTagsDirectives:b})};
new l;}).call(this);
