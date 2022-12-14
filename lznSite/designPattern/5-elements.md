# 面向对象、设计原则、设计模式、编程规范、重构，这五者的关系

## 面向对象

现在比较流行的编程语言大部分都是面向对象编程语言，如java，python。  
面向对象编程具有丰富的特性：封装、抽象、继承、多态，可以实现很多复杂的设计思路，是很多设计原则、设计模式编码实现的基础，面向对象的7大知识点：

* 面向对象的四大特性：封装、抽象、继承、多态
* 面向对象编程与面向过程编程的区别和联系
* 面向对象分析、面向对象设计、面向对象编程
* 接口和抽象类的区别以及各自的应用场景
* 基于接口而非实现编程的设计思想
* 多用组合少用继承的设计思想
* 面向过程的贫血模型和面向对象的充血模型

## 设计原则

设计原则是指导我们代码设计的一些经验总结。对于每一种设计原则，我们需要掌握它的设计初衷，能解决哪些编程问题，有哪些应用场景。

常用的设计原则有： 

* SOLID原则 - SRP单一职责原则
* SOLID原则 - OCP开闭原则
* SOLID原则 - LSP里式替原则
* SOLID原则 - ISP接口隔离原则
* SOLID原则 - DIP 依赖倒置原则
* DRY原则、KISS原则、YAGNI原则、LOD法则

## 设计模式

设计模式是针对软件开发中经常遇到的一些设计问题，总结出来的一套解决方案或者设计思路。大部分设计模式要解决的都是代码的可扩展性问题。  
经典的设计模式有23种，可以分为三大类：创建型、结构型、行为型。

### 创建型

常用的有： 单例模式、工厂模式(工厂方法和抽象工厂)、建造者模式。

不常用的有：原型模式

### 结构型

常用的有：代理模式、桥接模式、装饰模式、适配器模式。

不常用的有：门面模式、组合模式、享元模式。

### 行为型

常用的有：观察者模式、模板模式、策略模式、职责链模式、迭代器模式、状态模式。

不常用的有：访问者模式、备忘录模式、命令模式、解释器模式、中介模式。

## 编程规范

编程规范主要解决的是代码的可读性问题。编码规范相对于设计原则、设计模式，更加具体、更加偏重代码细节。最基本的编码规范有：如何给变量、类、函数命名，如何写代码注释，函数不宜过长、参数不能过多等。

## 代码重构

重构是软件开发中非常重要的一个环节。持续重构是保持代码质量不下降的有效手段，能有效避免代码腐化到无可救药的地步。  

重构工具有：  
* 面向对象设计思想
* 设计原则
* 设计模式
* 编码规范

注意：虽然使用设计模式可以提高代码的可扩展性，但过度不恰当地使用，也会增加代码的复杂度，影响代码的可读性。在开发初期，除非特别必须，我们不要过度设计，应用复杂的设计模式。而是当代码出现问题的时候，我们再针对问题，应用原则和模式进行重构。这样能有效避免前期的过度设计。

重构的四个W：
* 目的-why
* 对象-what
* 时间-when
* 方法-how

保证重构不出错的技术手段：
* 确保代码的可测试性
* 单元测试