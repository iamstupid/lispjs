lispjs
======

Program with lovely arrays! Believe arrays are new datatypes of programming language, and run them like in lisp.

The best part of the library is that `Arrays` are evaluatable and can make up strange flow structure.

getting started
---------------
first please include the script (at least, `arrays.js`)

 > **note:** the script will use the public namespace and dirt the public namespace dangerously to make the feel of grammar and to decrease the length of code.   
 
**IMPORTANT:** If you use it with jQuery or other libs that uses `$` or `_`, remember to use their no conflict mode, then load them before Arrays.

using
-----
Arrays defined some operators for `Number` originally.
More operators are in develop.

1: `hello world`
```javascript
[display,"hello world"]._
```
`display` originally associated to console.log

2: `a+b problem`
```javascript
var local={};
var a=[execs,[set,local,"a",[prompt]],[set,local,"b",[prompt]],["+",local.a,local.b]]._
```
`[set,namespace,name,value]`. `value` will be automatically executed in this case.   
`[execs,...]`. Run all arrays in `...`(but not `_()` arrays).

3: arrays without executing
```javascript
var a=[execs,_(1,2,3)]._;
var b=_(1,2,3);
[display,a===b];
```

more things will be discribed in wiki.
Bugs
----

Should be full of bugs, but not tested.
