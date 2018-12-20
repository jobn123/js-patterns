// “策略模式的定义是：定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。”

// “一个基于策略模式的程序至少由两部分组成。第一个部分是一组策略类，策略类封装了具体的算法，并负责具体的计算过“程。 第二个部分是环境类Context，Context接受客户的请求，随后把请求委托给某一个策略类”

var strategies = {
  "S": function( salary ){
      return salary * 4;
  },
  "A": function( salary ){
      return salary * 3;
  },
  "B": function( salary ){
      return salary * 2;
  }
};

var calculateBonus = function( level, salary ){
  return strategies[ level ]( salary );
};

console.log( calculateBonus( 'S', 20000 ) );     // 输出：80000
console.log( calculateBonus( 'A', 10000 ) );     // 输出：30000