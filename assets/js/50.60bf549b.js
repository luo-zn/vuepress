(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{385:function(t,a,s){"use strict";s.r(a);var e=s(16),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"logrotate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logrotate"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://linux.die.net/man/8/logrotate",target:"_blank",rel:"noopener noreferrer"}},[t._v("logrotate"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("logrotate是一个日志文件管理工具。 它能够自动分割，压缩，删除和邮件发送日志文件。 Linux系统一般默认会安装logrotate工具。"),a("br"),t._v("\nlogrotate是基于CRON来执行定期任务，配置位于/etc/cron.daily/logrotate。")]),t._v(" "),a("h2",{attrs:{id:"默认的配置文件位置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#默认的配置文件位置"}},[t._v("#")]),t._v(" 默认的配置文件位置")]),t._v(" "),a("ol",[a("li",[t._v("/etc/logrotate.conf， 此文件是主配置文件")]),t._v(" "),a("li",[t._v("/etc/logrotate.d/， 此目录下的所有文件，在/etc/logrotate.conf主文件会全被引入")])]),t._v(" "),a("h2",{attrs:{id:"手动执行命令验证配置文件是否有效"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手动执行命令验证配置文件是否有效"}},[t._v("#")]),t._v(" 手动执行命令验证配置文件是否有效")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("logrotate命令加-f参数来执行指定的logrotate配置文件")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("/usr/sbin/logrotate  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" /etc/logrotate.d/standalone1-mosquitto  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#standalone1-mosquitto新加的配置文件，一般建议按服务名称命名")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("执行前可通过-d参数来debug配置文件")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("/usr/sbin/logrotate "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" /etc/logrotate.d/standalone1-mosquitto   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#standalone1-mosquitto新加的配置文件，一般建议按服务名称命名")]),t._v("\n")])])])])]),t._v(" "),a("h2",{attrs:{id:"常用参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用参数说明"}},[t._v("#")]),t._v(" 常用参数说明")]),t._v(" "),a("p",[t._v("compress                            通过gzip压缩转储的日志"),a("br"),t._v("\nnocompress                          不做gzip压缩处理"),a("br"),t._v("\ncreate mode owner group             轮转时指定创建新文件的属性，如create 0777 nobody nobody"),a("br"),t._v("\ndelaycompress                       和compress 一起使用时，转存的日志文件等到下一次转存时才压缩"),a("br"),t._v("\nmissingok                           如果日志丢失，不报错继续滚动下一个日志"),a("br"),t._v("\nifempty                             即使日志文件为空文件也做轮转，这个是logrotate的默认选项。"),a("br"),t._v("\nnotifempty                          当日志文件为空时，不进行轮转"),a("br"),t._v("\nmail xxx@xxx.com                    把转存的日志文件发送到指定的地址"),a("br"),t._v("\nnomail                              转存时不发送日志文件"),a("br"),t._v("\nolddir directory                    指定存放轮转日志文件的目录，必须和当前日志文件在同一个文件系统"),a("br"),t._v("\nnoolddir                            转存后的日志文件和当前日志文件放在同一个目录下"),a("br"),t._v("\ndateext                             使用当前日期作为命名格式"),a("br"),t._v("\nsharedscripts                       运行postrotate脚本，作用是在所有日志都轮转后统一执行一次脚本。如果没有此设置，则每个日志轮转后都会执行一次脚本"),a("br"),t._v("\npostrotate/endscript                在logrotate转存之后配置执行的指令，例如重启 (kill -HUP) 某个服务！shell命令需要包含在postrotate与endscript之间")]),t._v(" "),a("p",[t._v("例子(/etc/logrotate.d/standalone1-mosquitto)：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("/data/tct-compose/standalone1/mosquitto/log/mosquitto.log "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" jkins devops             "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#切换到jkins用户devops组")]),t._v("\ndaily                       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#每天转存日志")]),t._v("\ncreate 0777 jkins devops    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#轮转时指定新创建的文件属性")]),t._v("\nrotate "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#保留7个日志文件")]),t._v("\nmissingok                   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#如果日志丢失，不报错继续滚动下一个日志  ")]),t._v("\nnotifempty                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#当日志文件为空时，不进行轮转")]),t._v("\ndateext                     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#使用当前日期作为命名格式 ")]),t._v("\nsharedscripts               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#运行postrotate脚本")]),t._v("\npostrotate                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#转后重启服务")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" /var/run/mosquitto.pid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-USR1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /var/run/mosquitto.pid"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\nendscript\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"容器工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器工具"}},[t._v("#")]),t._v(" 容器工具")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://hub.docker.com/r/blacklabelops/logrotate",target:"_blank",rel:"noopener noreferrer"}},[t._v("blacklabelops/logrotate"),a("OutboundLink")],1),t._v("可以用来对docker容器的标准输出日志文件进行rotate")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docker")]),t._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" /var/lib/docker/containers:/var/lib/docker/containers "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v(" /var/log/docker:/var/log/docker "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-e")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LOGS_DIRECTORIES=/var/lib/docker/containers /var/log/docker"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  blacklabelops/logrotate\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);