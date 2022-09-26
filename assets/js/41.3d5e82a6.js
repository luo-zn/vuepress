(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{376:function(s,a,t){"use strict";t.r(a);var e=t(16),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"string类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string类型"}},[s._v("#")]),s._v(" String类型")]),s._v(" "),a("p",[s._v("将字符串值 value 关联到 key 。"),a("br"),s._v("\n时间复杂度： O(1)")]),s._v(" "),a("h2",{attrs:{id:"set"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[s._v("#")]),s._v(" SET")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("redis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" SET key "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),s._v("\nOK\n")])])]),a("ol",[a("li",[a("p",[s._v("可选参数")]),s._v(" "),a("ul",[a("li",[s._v("EX seconds ： 将键的过期时间设置为 seconds 秒。")]),s._v(" "),a("li",[s._v("PX milliseconds ： 将键的过期时间设置为 milliseconds 毫秒。")]),s._v(" "),a("li",[s._v("NX ： 只在键不存在时， 才对键进行设置操作。")]),s._v(" "),a("li",[s._v("XX ： 只在键已经存在时， 才对键进行设置操作。")])])]),s._v(" "),a("li",[a("p",[s._v("示例")]),s._v(" "),a("p",[s._v("使用 EX 选项：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("redis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" SET key-with-expire-time "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v(" EX "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10086")]),s._v("\n等同于\nredis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" SETEX key-with-expire-time "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10086")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v(" \n")])])]),a("p",[s._v("使用 PX 选项：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("redis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" SET key-with-expire-time "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v(" PX "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10086")]),s._v("\n等同于\nredis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" PSETEX key-with-expire-time "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10086")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello"')]),s._v(" \n")])])]),a("p",[s._v("使用 NX 选项：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("redis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" SET not-exists-key "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),s._v(" NX\nOK  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 键不存在时，返回OK, 设置成功")]),s._v("\n等同于\nredis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" SETNX not-exists-key "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),s._v("\n")])])])])]),s._v(" "),a("h2",{attrs:{id:"strlen-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strlen-key"}},[s._v("#")]),s._v(" STRLEN key")]),s._v(" "),a("p",[s._v("返回键 key 储存的字符串值的长度。"),a("br"),s._v("\n复杂度： O(1)")]),s._v(" "),a("p",[s._v("示例")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("redis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" SET key "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello Redis"')]),s._v("\nOK\n\nredis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" STRLEN key\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),s._v("\n")])])]),a("h2",{attrs:{id:"append-key-value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#append-key-value"}},[s._v("#")]),s._v(" APPEND key value")]),s._v(" "),a("p",[s._v("把 value 追加到键 key 现有值的末尾。如果 key 不存在， APPEND 就简单地将键 key 的值设为 value ， 就像执行 SET key value 一样。"),a("br"),s._v("\n时间复杂度： 平摊O(1)")]),s._v(" "),a("p",[s._v("示例")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("APPEND phone "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"iphone"')]),s._v("          "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 对不存在的 key(phone) 进行 APPEND ，等同于 SET phone "iphone"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v("                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 返回字符长度")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 对已存在的字符串进行 APPEND")]),s._v("\nredis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" APPEND phone "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"11"')]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 长度从 6 个字符增加到 8 个字符")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("integer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v("\nredis"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" GET phone\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"iphone11"')]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);