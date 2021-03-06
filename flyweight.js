// “享元模式要求将对象的属性划分为内部状态与外部状态（状态在这里通常指属性）。享元模式的目标是尽量减少共享对象的数量，”
// “享元模式是一种用时间换空间的优化模式。”

// “使用享元模式的关键是如何区别内部状态和外部状态。可以被对象共享的属性通常被划分为内部状态，如同不管什么样式的衣服，都可以按照性别不同，穿在同一个男模特或者女模特身上，模特的性别就可以作为内部状态储存在共享对象的内部。而外部状态取决于具体的场景，并根据场景而变化，就像例子中每件衣服都是不同的，它们不能被一些对象共享，因此只能被划分为外部状态。

var Model = function(sex) {
  this.sex = sex;
}

Model.prototype.takePhoto = function(){
  console.log('sex: ' + this.sex + 'underwear: ' + this.underwear);
}

var maleModel = new Model('male');
var femaleModel = new Model('female');

for ( var i = 1; i <= 50; i++ ){ 
  maleModel.underwear = 'underwear' + i; 
  maleModel.takePhoto(); 
};

for ( var j = 1; j <= 50; j++ ){ 
  femaleModel.underwear = 'underwear' + j; 
  femaleModel.takePhoto(); 
};

// 如何区分内部状态和外部状态：

// 内部状态存储于对象内部
// 内部状态可以被一些对象共享
// 内部状态独立于具体的场景，通常不会改变
// 外部状态取决于具体的场景，并根据场景而变化，外部状态不能被共享
