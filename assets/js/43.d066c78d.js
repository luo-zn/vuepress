(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{378:function(t,v,_){"use strict";_.r(v);var a=_(16),s=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"工厂模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#工厂模式"}},[t._v("#")]),t._v(" 工厂模式")]),t._v(" "),v("p",[t._v("定义一个创建对象的接口，让其子类决定实例化哪一个工厂类，此种模式使其创建过程延迟到子类进行。"),v("br"),t._v("\n这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。")]),t._v(" "),v("h2",{attrs:{id:"工厂模式的使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#工厂模式的使用"}},[t._v("#")]),t._v(" 工厂模式的使用")]),t._v(" "),v("ol",[v("li",[t._v("解决的问题： 主要解决接口选择的问题")]),t._v(" "),v("li",[t._v("何时使用： 明确计划不同条件下创建不同实例时可使用工厂模式")]),t._v(" "),v("li",[t._v("如何解决： 让工厂类的子类实现工厂接口，返回的也是一个抽象的产品")]),t._v(" "),v("li",[t._v("关键代码： 创建过程在其子类执行")])]),t._v(" "),v("h2",{attrs:{id:"优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[t._v("#")]),t._v(" 优缺点")]),t._v(" "),v("p",[t._v("优点")]),t._v(" "),v("ol",[v("li",[t._v("一个调用者想创建一个对象，只要知道其名称就可以了")]),t._v(" "),v("li",[t._v("灵活性强，易于扩展，如果想增加一个产品，只要扩展一个工厂类就可以")]),t._v(" "),v("li",[t._v("典型的解耦框架。高层模块只需要知道产品的抽象类，无须关心其他实现类，满足迪米特法则、依赖倒置原则和里氏替换原则")])]),t._v(" "),v("p",[t._v("缺点")]),t._v(" "),v("ol",[v("li",[t._v("每次增加一个产品时，都需要增加一个具体类和对象实现工厂，类的个数容易过多，增加复杂度")]),t._v(" "),v("li",[t._v("增加了系统的抽象性和理解难度")])]),t._v(" "),v("h2",{attrs:{id:"应用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),v("ol",[v("li",[t._v("日志记录器：记录可能记录到本地硬盘、系统事件、远程服务器等，用户可以选择记录日志到什么地方。")]),t._v(" "),v("li",[t._v("数据库访问，当用户不知道最后系统采用哪一类数据库，以及数据库可能有变化时。")]),t._v(" "),v("li",[t._v('设计一个连接服务器的框架，需要三个协议，"POP3"、"IMAP"、"HTTP"，可以把这三个作为产品类，共同实现一个接口。')])]),t._v(" "),v("h2",{attrs:{id:"注意事项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),v("p",[t._v("作为一种创建类模式，在任何需要生成复杂对象的地方，都可以使用工厂模式。需要注意的是复杂对象适合使用工厂模式，但简单对象，如JAVA中通过new就可以完成创建的对象，无需使用工厂模式。工厂模式的使用会增加系统的复杂充。")])])}),[],!1,null,null,null);v.default=s.exports}}]);