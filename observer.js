// “发布—订阅模式又叫观察者模式，它定义对象间的一种一对多的依赖关系，
// 当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知”

// “发布—订阅模式的优点非常明显，一为时间上的解耦，二为对象之间的解耦。它的应用非常广泛，既可以用在异步编程中，也可以帮助我们完成更松耦合的代码编写。”

// “当然，发布—订阅模式也不是完全没有缺点。创建订阅者本身要消耗一定的时间和内存，而且当你订阅一个消息后，也许此消息最后都未发生，但这个订阅者会始终存在于内存中。另外，发布—订阅模式虽然可以弱化对象之间的联系，但如果过度使用的话，对象和对象之间的必要联系也将被深埋在背后，会导致程序难以跟踪维护和理解。特别是有多个发布者和订阅者嵌套到一起的时候，要跟踪一个bug不是件轻松的事情。”


var Event = (function () {

  var clientList = {},
    listen,
    trigger,
    remove;

  listen = function (key, fn) {
      if (!clientList[key]) {
        clientList[key] = [];
      }
      clientList[key].push(fn)
    },
    trigger = function (key) {
      var fns = clientList[key]
      if (!fns || fns.length === 0) {
        return false
      }
      for (var i = 0; fn; fn = fns[i++]) {
        fn.apply(this, arguments);
      }
    },
    remove = function (key, fn) {
      var fns = clientList[key];
      if (!fns) {
        return false;
      }
      if (!fn) {
        fns && (fns.length = 0);
      } else {
        for (var l = fns.length - 1; l >= 0; l--) {
          var _fn = fns[l];
          if (_fn === fn) {
            fns.splice(l, 1);
          }
        }
      }
    };

  return {
    listen: listen,
    trigger: trigger,
    remove: remove
  }

})()


//通常是先订阅在发布，也有先发布后订阅的情况