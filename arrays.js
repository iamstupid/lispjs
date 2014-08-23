/**
 * Arrays.js
 * provide you fun of programming with Arrays. Lisp? No, it is a sub(or,sup)set of javascript
 * You'd better place `"use Arrays";' before your code so that everyone could know you're using arrays.
 * @namespace Array
 */
Array.prototype.__callIm__ = true;
Object.prototype.send = function(sym,arg) {
	return this[sym].apply(this,arg);
}
Number.prototype["+"] = function(b) {
	return this + b;
}
Number.prototype["-"] = function(b) {
	return this - b;
}
Number.prototype["*"] = function(b) {
	return this * b;
}
Number.prototype["/"] = function(b) {
	return this / b;
}
String.prototype["+"] = function(b){
	return this + b;
}
Array.prototype["+"]=function(b){
	return this.concat(b);
}
Array.prototype["<<"]=function(b){
	this.push(b);
	return this;
}
function _() {
	var a=Array.prototype.slice.call(arguments);
	a.__callIm__=false;
	return a;
}
(function() {
	function $(A) {
		this.type = "fnSymbol";
		this.value = A;
		this.apply = function(tArg,obj) {
			return obj.send.apply(obj[0],[A, Array.prototype.slice.call(obj, 1)]);
		}
	}
	String.prototype.apply = function(tArg,obj) {
			return obj.send.apply(obj[0],[this.valueOf(), Array.prototype.slice.call(obj, 1)]);
	}
	function $$(A){
		this.apply=function(tArg,args){
			var a=eval(A);
			return a.apply(a.applier,args);
		}
	}
	function $$$(A){
		this.type="symbol";
		this.value=A;
	}
	window.$ = function(A) {
		return new $(A);
	}
	window.$$ = function(A){
		return new $$(A);
	}
	window.S=function(A){
		return new S(A);
	}
})();
(function() {
	function exec(ar) {
		if (!ar.__callIm__) {
			return ar;
		} else {
			var l = ar.length;
			for (var i = 1; i < l; i++) {
				ar[i] = exec(ar[i]);
			}
			return ar[0].apply(console,ar.slice(1));
		}
	}
	Array.prototype.__defineGetter__("_", function() {
		this.__callIm__ = true;
		return exec(this);
	})
})();
function execs(){
	return arguments[arguments.length-1];
}
function macro(list){
	var a=_([$("concat"),_([execs]),_(list)]._);
	a.type="k-macro-single";
	return a;
}
function set(global,name,val){
	return global[name]=val;
}
function display(){
	console.log.apply(console,Array.prototype.slice.call(arguments));
}
