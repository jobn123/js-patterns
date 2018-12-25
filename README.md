# js-patterns
  `“可复用面向对象软件的基础”`

## 设计模式原则：
 ` “所有设计模式的实现都遵循一条原则，即“找出程序中变化的地方，并将变化封装起来”`

* 01、多态 polymorphism.js
* 02、封装 encapsulation.js
* 03、原型模式 prototype.js
* 04、高阶函数 highOrder.js
* 05、函数柯里化 currying.js
* 06、单例模式 single.js
* 07、策略模式 strategy.js
* 08、代理模式 agency.js
* 09、迭代器模式 iterator.js
* 10、观察者模式--发布订阅 observer.js
* 11、命令模式 command.js
* 12、组合模式 combination.js
* 13、享元模式 flyweight.js
* 14、职责链模式 ChainofResposibility.js
* 15、中介者模式 Mediator.js
* 16、装饰着模式 decorater.js
* 17、状态模式 state.js
* 19、适配器模式 adapter.js
* 20 工厂模式 Factory.js

## 设计原则
  * `单一职责 （SRP）一个对象、方法只做一件事`
    * 优点： 
      * 降低了单个类或对象的复杂度，按照职责把对象拆解为更小的粒度
      * 有助于代码测试，一个职责更改的时候并不影响其他的
    * 缺点：
      * 增加代码的复杂度
  * 最少知识原则 （LKP） `一个软件实体尽可能少的于其他实体发生相互作用`
  * 开放封闭原则 （OCP） `“软件实体（类、模块、函数）等应该是可以扩展的，但是不可修改。”`
  
## 代码重构
  * 提炼函数
  * 合并重复的条件片段
  * 把条件分支语句提炼成函数
  * 合理使用循环
  * 提前让函数退出代替嵌套条件分支
  * 传递对象参数代替过长的参数列表
  * 尽量减少参数数量
  * 少用三目运算符
  * 合理使用链式调用
  * 分解大型类
  * 用return 退出多重循环