(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{432:function(t,s,a){"use strict";a.r(s);var r=a(16),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"数据传输与mss分段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据传输与mss分段"}},[t._v("#")]),t._v(" 数据传输与MSS分段")]),t._v(" "),s("p",[t._v("tcp是面向连接的字节流协议，由于网络层和数据链路层发送报文时所使用的内存有限，所以tcp需要将从应用层收到的字节流拆分成多个报文段。")]),t._v(" "),s("h2",{attrs:{id:"数据传输的流向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据传输的流向"}},[t._v("#")]),t._v(" 数据传输的流向")]),t._v(" "),s("p",[t._v("应用层编程数据传输的流向："),s("br"),t._v(" "),s("img",{attrs:{src:"/imgs/network/tcp/tcp-application-transmission.png",alt:"应用层传输流向"}}),t._v("\n如图所示，应用程序调用write向目标发送数据，调用read来接收数据")]),t._v(" "),s("p",[t._v("操作系统层数据传输的流向："),s("br"),t._v(" "),s("img",{attrs:{src:"/imgs/network/tcp/tcp-system-transmission.png",alt:"系统层传输流向"}})]),t._v(" "),s("h2",{attrs:{id:"mss-max-segment-size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mss-max-segment-size"}},[t._v("#")]),t._v(" MSS(Max Segment Size)")]),t._v(" "),s("h3",{attrs:{id:"定义"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[t._v("#")]),t._v(" 定义")]),t._v(" "),s("p",[t._v("MSS是指TCP数据包每次能够传输的量大数据分段，它并不包含TCP头部的大小。定义参见RFC879")]),t._v(" "),s("h3",{attrs:{id:"设置mss的目的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置mss的目的"}},[t._v("#")]),t._v(" 设置MSS的目的")]),t._v(" "),s("ul",[s("li",[t._v("尽量让每个Segment 报文段携带的数据多一些，以减少头部空间占用比率")]),t._v(" "),s("li",[t._v("防止Segment被设备的IP层基于MTU拆分")])]),t._v(" "),s("h3",{attrs:{id:"默认值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认值"}},[t._v("#")]),t._v(" 默认值")]),t._v(" "),s("p",[t._v("MSS默认值为536字节。"),s("br"),t._v("\nIP层的MTU默认值为576字节，IP头部为20字节。"),s("br"),t._v("\nTCP头部为20字节。\n所以 536 = 576 - 20 - 20")]),t._v(" "),s("h3",{attrs:{id:"分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#分类"}},[t._v("#")]),t._v(" 分类")]),t._v(" "),s("ul",[s("li",[t._v("发送方最大报文段叫SMSS：SENDER MAXIMUM SEGMENT SIZE")]),t._v(" "),s("li",[t._v("接收方最大报文段叫RMSS: RECEIVER MAXIMUM SEGMENT SIZE")])])])}),[],!1,null,null,null);s.default=e.exports}}]);