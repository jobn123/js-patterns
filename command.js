// “命令模式中的命令（command）指的是一个执行某些特定事情的指令。”
// “但从中可以看到我们是如何把请求发送者和请求接收者解耦开的。”

var closeDoorCommand = {
  execute: function(){
      console.log( '关门' );
  }
};

var openPcCommand = {
  execute: function(){
      console.log( '开电脑' );
  }
};

var openQQCommand = {
  execute: function(){
      console.log( '登录QQ' );
  }
};

var MacroCommand = function(){
  return {
    commandsList: [],
    add: function( command ){
        this.commandsList.push( command );
    },
    execute: function(){
        for ( var i = 0, command; command = this.commandsList[ i++ ]; ){
           command.execute();
        }
    }
}
};

var macroCommand = MacroCommand();
macroCommand.add( closeDoorCommand );
macroCommand.add( openPcCommand );
macroCommand.add( openQQCommand );

macroCommand.execute();