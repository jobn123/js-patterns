// “代理模式是为一个对象提供一个代用品或占位符，以便控制对它的访问”

// “代理模式的关键是，当客户不方便直接访问一个对象或者不满足需要的时候，提供一个替身对象来控制对这个对象的访问，客户实际上访问的是替身对象。替身对象对请求做出一些处理之后，再把请求转交给本体对象。”


// “防火墙代理：控制网络资源的访问，保护主题不让“坏人”接近。

// 远程代理：为一个对象在不同的地址空间提供局部代表，在Java中，远程代理可以是另一个虚拟机中的对象。

// 保护代理：用于对象应该有不同访问权限的情况。

// 智能引用代理：取代了简单的指针，它在访问对象时执行一些附加操作，比如计算一个对象被引用的次数。

// 写时复制代理：通常用于复制一个庞大对象的情况。写时复制代理延迟了复制的过程，当对象被真正修改时，才对它进行复制操作。写时复制代理是虚拟代理的一种变体，DLL（操作系统中的动态链接库）是其典型运用场景。”

var Flower = function(){};

var xiaoming = {
    sendFlower: function( target){
    var flower = new Flower();
        target.receiveFlower( flower );
    }
};

var B = {
    receiveFlower: function( flower ){
        A.receiveFlower( flower );
    }
};

var A = {
    receiveFlower: function( flower ){
        console.log( '收到花 ' + flower );
    }
};

xiaoming.sendFlower( B ); 

// 保护代理 ， 虚拟代理
// 代理B可以帮A过滤掉一些请求
// “虚拟代理把一些开销很大的对象，延迟到真正需要它的时候才去创建”，合并HTTP请求
// 缓存代理 

//缓存代理求乘机
var mult = function(){
  console.log( '开始计算乘积' );
  var a = 1;
  for ( var i = 0, l = arguments.length; i < l; i++ ){
      a = a * arguments[i];
  }
  return a;
};

var proxyMult = (function(){
  var cache = {};
  return function(){
      var args = Array.prototype.join.call( arguments, ',' );
      if ( args in cache ){
          return cache[ args ];
      }
      return cache[ args ] = mult.apply( this, arguments );
  }
})();

// proxyMult(1,2,3,4)
// proxyMult(1,2,3,4)
