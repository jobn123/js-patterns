// “职责链模式的定义是：使多个对象都有机会处理请求，从而避免请求的发送者和接收者之间的耦合关系，将这些对象连成一条链，并沿着这条链传递该请求，直到有一个对象处理它为止。”

// “我们很容易找到职责链模式的最大优点：请求发送者只需要知道链中的第一个节点，从而弱化了发送者和一组接收者之间的强联系。”
// “首先我们不能保证某个请求一定会被链中的节点处理。”
// “职责链模式使得程序中多了一些节点对象，可能在某一次的请求传递过程中，大部分节点并没有起到实质性的作用，它们的作用仅仅是让请求传递下去，”

var order500 = function( orderType, pay, stock ){
  if ( orderType === 1 && pay === true ){
      console.log( '500元定金预购，得到100优惠券' );
  }else{
      return 'nextSuccessor';    // 我不知道下一个节点是谁，反正把请求往后面传递
  }
};

var order200 = function( orderType, pay, stock ){
  if ( orderType === 2 && pay === true ){
      console.log( '200元定金预购，得到50优惠券' );
  }else{
      return 'nextSuccessor';    // 我不知道下一个节点是谁，反正把请求往后面传递
  }
};

var orderNormal = function( orderType, pay, stock ){
  if ( stock > 0 ){
      console.log( '普通购买，无优惠券' );
  }else{
      console.log( '手机库存不足' );
  }
};

// Chain.prototype.setNextSuccessor  指定在链中的下一个节点
// Chain.prototype.passRequest  传递请求给某个节点

var Chain = function( fn ){
  this.fn = fn;
  this.successor = null;
};

Chain.prototype.setNextSuccessor = function( successor ){
  return this.successor = successor;
};

Chain.prototype.passRequest = function(){
  var ret = this.fn.apply( this, arguments );

  if ( ret === 'nextSuccessor' ){
      return this.successor && this.successor.passRequest.apply( this.successor, arguments );
    }

    return ret;
};

// “把3个订单函数分别包装成职责链的节点：”
var chainOrder500 = new Chain( order500 );
var chainOrder200 = new Chain( order200 );
var chainOrderNormal = new Chain( orderNormal );

// “然后指定节点在职责链中的顺序：
chainOrder500.setNextSuccessor( chainOrder200 );
chainOrder200.setNextSuccessor( chainOrderNormal );

// “最后把请求传递给第一个节点：
chainOrder500.passRequest( 1, true, 500 );    // 输出：500元定金预购，得到100优惠券
chainOrder500.passRequest( 2, true, 500 );    // 输出：200元定金预购，得到50优惠券
chainOrder500.passRequest( 3, true, 500 );    // 输出：普通购买，无优惠券
chainOrder500.passRequest( 1, false, 0 );     // 输出：手机库存不足”


// AOP
Function.prototype.after = function( fn ){
  var self = this;
  return function(){
      var ret = self.apply( this, arguments );
      if ( ret === 'nextSuccessor' ){
          return fn.apply( this, arguments );
      }
      return ret;
  }
};

var order = order500yuan.after( order200yuan ).after( orderNormal );
order( 1, true, 500 );    // 输出：500元定金预购，得到100优惠券
order( 2, true, 500 );    // 输出：200元定金预购，得到50优惠券
order( 1, false, 500 );   // 输出：普通购买，无优惠券”
