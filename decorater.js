// “装饰者模式可以动态地给某个对象添加一些额外的职责，而不会影响从这个类中派生的其他对象。”

Function.prototype.after = function( afterfn ){
  var __self = this;
  return function(){
      var ret = __self.apply( this, arguments );
      afterfn.apply( this, arguments );
      return ret;
  }
};

var showLogin = function(){
  console.log( '打开登录浮层' );
}

var log = function(){
  console.log( '上报标签为: ' + this.getAttribute( 'tag' ) );
}

showLogin = showLogin.after( log );    // 打开登录浮层之后上报数据

document.getElementById( 'button' ).onclick = showLogin;