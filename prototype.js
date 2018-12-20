/**
 * “如果需要一个跟某个对象一模一样的对象，就可以使用原型模式。”
 */

 var Plane = function() {
   this.blood = 100;
   this.attacKLevel = 1;
   this.defenceLevel = 1;
 }

 var plane = new Plane()
 plane.blood = 500
 plane.attacKLevel = 5
 plane.defenceLevel = 5

 var clonePlane = Object.create(plane)

//  Object.create polyfill
Object.create = Object.create || function(obj) {
  var F = function() {
  }
  F.prototype = obj
  return new F()
}


//example
var obj = { name: 'sven' };

var A = function(){};
A.prototype = obj;

var a = new A();
console.log( a.name );    // 输出：sven”

// “首先，尝试遍历对象a中的所有属性，但没有找到name这个属性。

// 查找name属性的这个请求被委托给对象a的构造器的原型，它被a.__proto__ 记录着并且指向A.prototype，而A.prototype被设置为对象obj。

// 在对象obj中找到了name属性，并返回它的值。”


//bind 实现
var myBind = function() {
  if(typeof(context) !== "function") {
    throw TypeError('not a function')
  }
  var that = this
  var context = Array.prototype.shift.call(null, arguments)
  var args = Array.prototype.slice.call(null, arguments)
  return function() {
    return that.apply(context, [].concat.call( args, [].slice.call( arguments ) ))
  }
}