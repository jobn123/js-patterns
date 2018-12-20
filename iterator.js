// “迭代器模式是指提供一种方法顺序访问一个聚合对象中的各个元素，而又不需要暴露该对象的内部表示”

var each = function( ary, callback ){
  for ( var i = 0, l = ary.length; i < l; i++ ){
      callback.call( ary[i], i, ary[ i ] );  // 把下标和元素当作参数传给callback函数
  }
};

each( [ 1, 2, 3 ], function( i, n ){
  alert ( [ i, n ] );
});

// 外部迭代器
var Iterator = function( obj ){
  var current = 0;

  var next = function(){
      current += 1;
  };

  var isDone = function(){
      return current >= obj.length;
  };

  var getCurrItem = function(){
      return obj[ current ];
  };

  return {
    next: next,
    isDone: isDone,
    getCurrItem: getCurrItem
  }
};