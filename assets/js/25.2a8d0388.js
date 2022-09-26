(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{360:function(t,s,a){"use strict";a.r(s);var e=a(16),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"聚合"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聚合"}},[t._v("#")]),t._v(" 聚合")]),t._v(" "),s("p",[t._v("整个聚合运算过程称为管道(Pipline),它是由多个步骤(Stage)组成的"),s("br"),t._v("\n每个管道:")]),t._v(" "),s("ul",[s("li",[t._v("接受一系列文档(原始数据)")]),t._v(" "),s("li",[t._v("每个步骤对这些文档进行一系列运算")]),t._v(" "),s("li",[t._v("结果文档输出给下一个步骤")])]),t._v(" "),s("h2",{attrs:{id:"聚合运算的基本格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聚合运算的基本格式"}},[t._v("#")]),t._v(" 聚合运算的基本格式")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("pipline "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$stage1")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$stage2")]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("."),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$stageN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  \ndb."),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("collection"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".aggregate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    pipline,\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"步骤对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤对比"}},[t._v("#")]),t._v(" 步骤对比")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("步骤")]),t._v(" "),s("th",[t._v("作用")]),t._v(" "),s("th",[t._v("SQL等价运算符")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("$match")]),t._v(" "),s("td",[t._v("过滤")]),t._v(" "),s("td",[t._v("WHERE")])]),t._v(" "),s("tr",[s("td",[t._v("$project")]),t._v(" "),s("td",[t._v("投影")]),t._v(" "),s("td",[t._v("AS")])]),t._v(" "),s("tr",[s("td",[t._v("$sort")]),t._v(" "),s("td",[t._v("排序")]),t._v(" "),s("td",[t._v("ORDER BY")])]),t._v(" "),s("tr",[s("td",[t._v("$group")]),t._v(" "),s("td",[t._v("分组")]),t._v(" "),s("td",[t._v("GROUP BY")])]),t._v(" "),s("tr",[s("td",[t._v("$skip/$limit")]),t._v(" "),s("td",[t._v("结果限制")]),t._v(" "),s("td",[t._v("SKIP/LIMIT")])]),t._v(" "),s("tr",[s("td",[t._v("$lookup")]),t._v(" "),s("td",[t._v("左外连接")]),t._v(" "),s("td",[t._v("LEFT OUTER JOIN")])]),t._v(" "),s("tr",[s("td",[t._v("$unwind")]),t._v(" "),s("td",[t._v("展开数组")]),t._v(" "),s("td",[t._v("N/A")])]),t._v(" "),s("tr",[s("td",[t._v("$graphLookup")]),t._v(" "),s("td",[t._v("图搜索")]),t._v(" "),s("td",[t._v("N/A")])]),t._v(" "),s("tr",[s("td",[t._v("$facet/$bucket")]),t._v(" "),s("td",[t._v("分面搜索")]),t._v(" "),s("td",[t._v("N/A")])])])]),t._v(" "),s("h2",{attrs:{id:"常见步骤中的运算符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见步骤中的运算符"}},[t._v("#")]),t._v(" 常见步骤中的运算符")]),t._v(" "),s("ol",[s("li",[t._v("$match\n"),s("ul",[s("li",[t._v("$eq/$gt/$gte/$lt/$lte")]),t._v(" "),s("li",[t._v("$and/$or/$not/$in")]),t._v(" "),s("li",[t._v("$geoWithin/$intersect")])])]),t._v(" "),s("li",[t._v("$project\n"),s("ul",[s("li",[t._v("选择需要的或排除不需要的字段")]),t._v(" "),s("li",[t._v("$map/$reduce/$filter")]),t._v(" "),s("li",[t._v("$range")]),t._v(" "),s("li",[t._v("$multiply/$divide/$substract/$add")]),t._v(" "),s("li",[t._v("$year/$month/$dayOfMonth/$hour/$minute/$second")])])]),t._v(" "),s("li",[t._v("$group\n"),s("ul",[s("li",[t._v("$sum/$avg")]),t._v(" "),s("li",[t._v("$push/$addToSet")]),t._v(" "),s("li",[t._v("$first/$last/$max/$min")])])])]),t._v(" "),s("h2",{attrs:{id:"msql与sql几个对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#msql与sql几个对比"}},[t._v("#")]),t._v(" MSQL与SQL几个对比")]),t._v(" "),s("ol",[s("li",[t._v("例子1"),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("\n    first_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'名'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    last_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'姓'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" users\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" gender "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'男'")]),t._v("\nSKIP "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LIMIT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\n")])])]),s("div",{staticClass:"language-mql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('db.users.aggregate([\n    {$match:{gender:"男"}},\n    {$skip: 200},\n    {$limit: 15},\n    {$project:{\n        "名": "$first_name",\n        "姓": "$last_name"\n    }}\n]);\n')])])])]),t._v(" "),s("li",[t._v("例子2"),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" \n    department"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("NULL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" emp_qty\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" users\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" gender "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"女"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GROUP")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" department "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("HAVING")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])])]),s("div",{staticClass:"language-MQL extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('db.users.aggregate([\n    {$match:{gender:"女"}},\n    {$group:{\n        _id: "$department",\n        emp_qty:{$sum:1}\n    }},\n    {$match:{\n        emp_qty:{$lt:10}\n    }}\n]);\n')])])])])]),t._v(" "),s("Vssue",{attrs:{title:t.$title,options:{locale:"zh"}}})],1)}),[],!1,null,null,null);s.default=n.exports}}]);