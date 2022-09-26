(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{380:function(t,v,_){"use strict";_.r(v);var a=_(16),s=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"单例模式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单例模式"}},[t._v("#")]),t._v(" 单例模式")]),t._v(" "),v("p",[t._v("单例模式，属于创建类型的一种常用的软件设计模式。通过单例模式的方法创建的类在当前进程中只有一个实例。")]),t._v(" "),v("h2",{attrs:{id:"单例模式的使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#单例模式的使用"}},[t._v("#")]),t._v(" 单例模式的使用")]),t._v(" "),v("ol",[v("li",[t._v("作用：保证一个类只有一个实例。")]),t._v(" "),v("li",[t._v("解决的问题：全局使用的类频繁地创建与销毁。")]),t._v(" "),v("li",[t._v("何时使用： 当想控制实例数量，节省系统资源时使用。")]),t._v(" "),v("li",[t._v("如何解决： 判断系统是否已经有此单例，有则返回，没有则创建。")]),t._v(" "),v("li",[t._v("关键代码： 构造函数是私有的。")])]),t._v(" "),v("h2",{attrs:{id:"优缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[t._v("#")]),t._v(" 优缺点")]),t._v(" "),v("p",[t._v("优点")]),t._v(" "),v("ol",[v("li",[t._v("在内存里只有一个实例，减少了内存的开销。")]),t._v(" "),v("li",[t._v("避免对资源的多重占用（如写文件操作）。")])]),t._v(" "),v("p",[t._v("缺点")]),t._v(" "),v("ol",[v("li",[t._v("没有接口，不能继承")]),t._v(" "),v("li",[t._v("与单一职责原则冲突，一个类就只关心内部逻辑，而不关心外面怎样来实例化。")])]),t._v(" "),v("h2",{attrs:{id:"应用场景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),v("ol",[v("li",[t._v("要求生成唯一序列号时。")]),t._v(" "),v("li",[t._v("WEB 中的计数器，不用每次刷新都在数据库里加一次，可用单例先缓存起来。")]),t._v(" "),v("li",[t._v("创建的一个对象需要消耗的资源过多，比如 I/O 与数据库的连接等。")])]),t._v(" "),v("h2",{attrs:{id:"注意事项"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),v("p",[t._v("getInstance() 方法中需要使用同步锁 synchronized (Singleton.class) 防止多线程同时进入造成 instance 被多次实例化。")])])}),[],!1,null,null,null);v.default=s.exports}}]);