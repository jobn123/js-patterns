// “保证一个类仅有一个实例，并提供一个访问它的全局访问点。”
function singleton (name) {
  this.name = name
  this.instance = null
}

singleton.prototype.getName = function() {
  return this.name
}

singleton.getInstance = function(name) {
  if(!this.instance) {
    this.instance = new singleton(name)
  }
  return this.instance
}


// 用代理模式实现单例
var CreateDiv = function( html ){
  this.html = html;
  this.init();
};

CreateDiv.prototype.init = function(){
  var div = document.createElement( 'div' );
  div.innerHTML = this.html;
  document.body.appendChild( div );
};

var ProxySingletonCreateDiv = (function(){
  var instance;
  return function( html ){
      if ( !instance ){
          instance = new CreateDiv( html );
      }

      return instance;
  }

})();

var a = new ProxySingletonCreateDiv( 'sven1' );
var b = new ProxySingletonCreateDiv( 'sven2' );

alert ( a === b );