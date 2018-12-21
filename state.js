// “状态模式的关键是区分事物内部的状态，事物内部状态的改变往往会带来事物的行为改变”
// “状态模式的关键是把事物的每种状态都封装成单独的类，跟此种状态有关的行为都被封装在这个类的内部”

// OffLightState：
var OffLightState = function( light ){
  this.light = light;
};

OffLightState.prototype.buttonWasPressed = function(){
  console.log( '弱光' );    // offLightState对应的行为
  this.light.setState( this.light.weakLightState );    // 切换状态到weakLightState
};

// WeakLightState：

var WeakLightState = function( light ){
  this.light = light;
};

WeakLightState.prototype.buttonWasPressed = function(){
  console.log( '强光' );    // weakLightState对应的行为
  this.light.setState( this.light.strongLightState );    // 切换状态到strongLightState
};

// StrongLightState：

var StrongLightState = function( light ){
  this.light = light;
};

StrongLightState.prototype.buttonWasPressed = function(){
  console.log( '关灯' );    // strongLightState对应的行为
  this.light.setState( this.light.offLightState );    // 切换状态到offLightState
};

var Light = function(){
  this.offLightState = new OffLightState( this );
  this.weakLightState = new WeakLightState( this );
  this.strongLightState = new StrongLightState( this );
  this.button = null;
};

Light.prototype.init = function(){
  var button = document.createElement( 'button' ),
      self = this;

  this.button = document.body.appendChild( button );
  this.button.innerHTML = '开关';

  this.currState = this.offLightState;    // 设置当前状态

  this.button.onclick = function(){
      self.currState.buttonWasPressed();
  }
};

Light.prototype.setState = function( newState ){
  this.currState = newState;
};

var light = new Light();
light.init();