/**
 * “同一操作作用于不同的对象上面，可以产生不同的解释和不同的执行结果”
 * “多态的思想实际上是把“做什么”和“谁去做”分离开来”
 * “多态最根本的作用就是通过把过程化的条件分支语句转化为对象的多态性，从而消除这些条件分支语句”
 */

var makeSound = function( animal ){
  animal.sound();
};

var Duck = function(){}

Duck.prototype.sound = function(){
  console.log( '嘎嘎嘎' );
};

var Chicken = function(){}

Chicken.prototype.sound = function(){
    console.log( '咯咯咯' );
};

makeSound( new Duck() );        // 嘎嘎嘎
makeSound( new Chicken() );     // 咯咯咯”
