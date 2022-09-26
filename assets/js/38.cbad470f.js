(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{373:function(a,s,e){"use strict";e.r(s);var t=e(16),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"redis内存驱逐策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis内存驱逐策略"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"https://redis.io/topics/lru-cache",target:"_blank",rel:"noopener noreferrer"}},[a._v("Redis内存驱逐策略"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("Redis是比较流行的缓存系统。为防止内存无限制地增长，需要将内存中旧数据占用的空间释放出来给新添加数据使用。"),s("br"),a._v("\n所以redis提供了最大内存(maxmemory)设置及旧数据驱逐策略的功能。")]),a._v(" "),s("h2",{attrs:{id:"maxmemory-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maxmemory-配置"}},[a._v("#")]),a._v(" maxmemory 配置")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("在配置文件redis.conf添加如下配置，可以限制redis的最大内存使用量：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("maxmemory 14Gb\n")])])])]),a._v(" "),s("li",[s("p",[a._v("通过命令设置最大内存使用量,此方式设置不会持久化：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" maxmemory 14Gb\n")])])])])]),a._v(" "),s("p",[a._v("备注：maxmemory 被设置为0意味着无内存限制。64位的系统默认不限制，32位系统默认情况隐式地限制最大内存为3G。")]),a._v(" "),s("h2",{attrs:{id:"驱逐策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#驱逐策略"}},[a._v("#")]),a._v(" 驱逐策略")]),a._v(" "),s("p",[a._v("当redis内存达到maxmemory限制时，会根据maxmemory-policy设置的策略进行内存调整。")]),a._v(" "),s("p",[a._v("可用的策略有：")]),a._v(" "),s("ol",[s("li",[a._v("noeviction: 当内存达到最大限制后客户端尝试执行可能导致使用更多内存的命令时返回错误(一般情况是写命令)。")]),a._v(" "),s("li",[a._v("allkeys-lru: 为新数据腾出内存空间时，优先驱逐最近使用较少(LRU)的key。")]),a._v(" "),s("li",[a._v("volatile-lru: 优先驱逐最近使用较少的且已设置过期的key。")]),a._v(" "),s("li",[a._v("allkeys-random: 为新数据腾出内存空间时，随机删除旧key。")]),a._v(" "),s("li",[a._v("volatile-random: 随机删除已设置过期的key。")]),a._v(" "),s("li",[a._v("volatile-ttl: 驱逐已设置过期的key，且优先驱逐TTL比较短的key。")])]),a._v(" "),s("p",[a._v("当前提条件不匹配时，volatile-lru, volatile-random 与 volatile-ttl 策略行为会和noeviction 相似。")]),a._v(" "),s("h3",{attrs:{id:"配置驱逐策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置驱逐策略"}},[a._v("#")]),a._v(" 配置驱逐策略")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("在配置文件redis.conf添加如下配置：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("maxmemory-policy noeviction  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#默认配置")]),a._v("\n")])])])]),a._v(" "),s("li",[s("p",[a._v("通过命令设置策略,此方式设置不会持久化：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("config "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("set")]),a._v(" maxmemory-policy allkeys-lru\n")])])])])]),a._v(" "),s("h3",{attrs:{id:"驱逐流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#驱逐流程"}},[a._v("#")]),a._v(" 驱逐流程")]),a._v(" "),s("ul",[s("li",[a._v("客户端执行新命令，导致产生新数据。")]),a._v(" "),s("li",[a._v("Redis检查内存使用情况，如果大于maxmemory限制，会根据策略驱逐旧数据。")]),a._v(" "),s("li",[a._v("Redis执行新命令，以此类推。")])])])}),[],!1,null,null,null);s.default=r.exports}}]);