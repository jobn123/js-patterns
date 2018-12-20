// “函数可以作为参数被传递”
// “函数可以作为返回值输出”


// 函数可以作为返回值输出”
var isString = function( obj ){
  return Object.prototype.toString.call( obj ) === '[object String]';
};

var isArray = function( obj ){
  return Object.prototype.toString.call( obj ) === '[object Array]';
};

var isNumber = function( obj ){
  return Object.prototype.toString.call( obj ) === '[object Number]';
};

var isType = function( type ){
  return function( obj ){
      return Object.prototype.toString.call( obj ) === '[object '+ type +']';
  }
};

var isString = isType( 'String' );
var isArray = isType( 'Array' );
var isNumber = isType( 'Number' );

// “函数可以作为参数被传递”

function getUserInfo(cb) {
  $.ajax().success(cb(res))
}

getUserInfo(function(re){
  console.log(res)
})

// 面相切面变成AOP
// “的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来，这些跟业务逻辑无关的功能通常包括日志统计、安全控制、异常处理等”

Function.prototype.before = function( beforefn ){
  var __self = this;    // 保存原函数的引用
  return function(){    // 返回包含了原函数和新函数的"代理"函数
      beforefn.apply( this, arguments );     // 执行新函数，修正this
      return __self.apply( this, arguments );    // 执行原函数
  }
};

Function.prototype.after = function( afterfn ){
  var __self = this;
  return function(){
      var ret = __self.apply( this, arguments );
      afterfn.apply( this, arguments );
      return ret;
  }
};

var func = function(){
  console.log( 2 );
};

func = func.before(function(){
  console.log( 1 );
}).after(function(){
  console.log( 3 );
});

func();