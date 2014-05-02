/**
 * Arrays.js
 * provide you fun of programming with Arrays. Lisp? No, it is a sub(or,sup)set of javascript
 * You'd better place `"use Arraies";' before your code; that's a treatment to the browser
 * @namespace Array
 */
Array.prototype.__callIm__ = true;
Function.prototype.__defineGetter__("applier",function(){return this;});
console.log.applier=console;
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

function _(A) {
	A.__callIm__ = false;
	return A;
}
(function() {
	function $(A) {
		this.type = "fnSymbol";
		this.value = A;
		this.apply = function(tArg,obj) {
			return obj.send.apply(obj[0],[A, Array.prototype.slice.call(obj, 1)]);
		}
	}
	window.$ = function(A) {
		return new $(A);
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
			return ar[0].apply(ar[0].applier,ar.slice(1));
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
