(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{343:function(t,v,_){"use strict";_.r(v);var r=_(33),o=Object(r.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"日志收集"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#日志收集"}},[t._v("#")]),t._v(" 日志收集")]),t._v(" "),_("p",[_("strong",[t._v("Corejs提供了高拓展性的日志收集系统：")])]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E6%97%A5%E5%BF%97%E8%BE%93%E5%87%BA%E5%99%A8"}},[t._v("日志输出器")]),t._v("：用于进行日志单点输出。")]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E6%97%A5%E5%BF%97%E8%BE%93%E5%87%BA%E7%BB%84"}},[t._v("日志输出组")]),t._v("：用于组合"),_("a",{attrs:{href:"#%E6%97%A5%E5%BF%97%E8%BE%93%E5%87%BA%E5%99%A8"}},[t._v("日志输出器")]),t._v("以进行日志多点输出。")])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),_("p",[_("a",{attrs:{href:"#%E6%97%A5%E5%BF%97%E8%BE%93%E5%87%BA%E7%BB%84"}},[t._v("日志输出组")]),t._v("提供了将一个或多个"),_("a",{attrs:{href:"#%E6%97%A5%E5%BF%97%E8%BE%93%E5%87%BA%E5%99%A8"}},[t._v("日志输出器")]),t._v("进行组合的能力。")]),t._v(" "),_("p",[t._v("通常，我们通过定制"),_("a",{attrs:{href:"#%E6%97%A5%E5%BF%97%E8%BE%93%E5%87%BA%E5%99%A8"}},[t._v("日志输出器")]),t._v("和"),_("a",{attrs:{href:"#%E6%97%A5%E5%BF%97%E8%BE%93%E5%87%BA%E7%BB%84"}},[t._v("日志输出组")]),t._v("的行为以将日志收集与业务逻辑结合。")])]),t._v(" "),_("p",[_("a",{attrs:{href:"#%E6%97%A5%E5%BF%97%E8%BE%93%E5%87%BA%E5%99%A8"}},[t._v("日志输出器")]),t._v("和"),_("a",{attrs:{href:"#%E6%97%A5%E5%BF%97%E8%BE%93%E5%87%BA%E7%BB%84"}},[t._v("日志输出组")]),t._v("在使用方式上非常相似：")]),t._v(" "),_("ul",[_("li",[_("p",[_("strong",[t._v("使用实例方法"),_("code",[t._v("log")]),t._v("输出日志")]),t._v("：于执行过程中自动执行状态检测（可配置），在输出器/组处于启动状态时将输出日志。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("使用实例方法"),_("code",[t._v("start")]),t._v("启动输出器/组")]),t._v("：于执行过程中自动执行状态检测（可配置），在输出器/组处于关闭状态时将创建基础资源（如：文件句柄等）并变更其为启动状态。")])]),t._v(" "),_("li",[_("p",[_("strong",[t._v("使用实例方法"),_("code",[t._v("close")]),t._v("关闭输出器/组")]),t._v("：于执行过程中自动执行状态检测（可配置），在输出器/组处于启动状态时将释放基础资源（如：文件句柄等）并变更其为关闭状态。")])])]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),_("p",[_("strong",[_("a",{attrs:{href:"#%E6%97%A5%E5%BF%97%E8%BE%93%E5%87%BA%E7%BB%84"}},[t._v("日志输出组")]),t._v("本质上是高阶"),_("a",{attrs:{href:"#%E6%97%A5%E5%BF%97%E8%BE%93%E5%87%BA%E5%99%A8"}},[t._v("日志输出器")])]),t._v("。因此，日志输出器/组的定制规则有一定的相似性。")]),t._v(" "),_("p",[_("strong",[t._v("但是，它们的实例获取方式和输出原理完全不同。")])]),t._v(" "),_("p",[_("strong",[t._v("在获取方式上：")])]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("日志输出器")]),t._v("：使用"),_("code",[t._v("new")]),t._v("关键字和"),_("strong",[t._v("输出器配置")]),t._v("直接实例化。")]),t._v(" "),_("li",[_("strong",[t._v("日志输出组")]),t._v("：首先，使用根据期望聚合的"),_("strong",[t._v("日志输出器")]),t._v("构造的配置对象创建"),_("RouterLink",{attrs:{to:"/guide/logger-group-introduce.html#loggercore"}},[t._v("LoggerCore")]),t._v("实例；然后，执行"),_("RouterLink",{attrs:{to:"/guide/logger-group-introduce.html#loggercore"}},[t._v("LoggerCore")]),t._v("的实例方法"),_("code",[t._v("createGroupLogger")]),t._v("生成指定类型的"),_("strong",[t._v("日志输出组")]),t._v("实例。")],1)]),t._v(" "),_("p",[_("strong",[t._v("在输出原理上：")])]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("日志输出器")]),t._v("：按照"),_("RouterLink",{attrs:{to:"/guide/logger-introduce.html#输出模型"}},[t._v("输出模型")]),t._v("进行日志输出。")],1),t._v(" "),_("li",[_("strong",[t._v("日志输出组")]),t._v("：逐个调用其中聚合的"),_("strong",[t._v("日志输出器")]),t._v("的实例方法"),_("code",[t._v("log")]),t._v("进行日志输出。")])])]),t._v(" "),_("h2",{attrs:{id:"日志输出器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#日志输出器"}},[t._v("#")]),t._v(" 日志输出器")]),t._v(" "),_("p",[_("strong",[t._v("日志输出器")]),t._v("可以在业务层中单独使用；也可以被聚合在"),_("a",{attrs:{href:"#%E6%97%A5%E5%BF%97%E8%BE%93%E5%87%BA%E7%BB%84"}},[t._v("日志输出组")]),t._v("中作为单点输出模块。")]),t._v(" "),_("p",[t._v("Corejs内置了多种"),_("strong",[t._v("日志输出器")]),t._v("以满足常规需求：")]),t._v(" "),_("ul",[_("li",[_("RouterLink",{attrs:{to:"/guide/logger-introduce.html#基础输出器"}},[t._v("基础输出器")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/guide/logger-introduce.html#日期输出器"}},[t._v("日期输出器")])],1),t._v(" "),_("li",[_("RouterLink",{attrs:{to:"/guide/logger-introduce.html#文件输出器"}},[t._v("文件输出器")])],1)]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("当内置输出器无法满足业务需求时，我们可以考虑：")]),t._v(" "),_("ul",[_("li",[t._v("使用"),_("a",{attrs:{href:"#%E6%97%A5%E5%BF%97%E8%BE%93%E5%87%BA%E7%BB%84"}},[t._v("日志输出组")]),t._v("聚合多个"),_("strong",[t._v("日志输出器")]),t._v("进行多点输出。")]),t._v(" "),_("li",[t._v("通过"),_("RouterLink",{attrs:{to:"/guide/logger-customizing.html"}},[t._v("自定义输出器")]),t._v("定制输出行为。")],1),t._v(" "),_("li",[t._v("通过"),_("RouterLink",{attrs:{to:"/guide/logger-group-customizing.html"}},[t._v("自定义输出组")]),t._v("将日志输出行为与业务结合。")],1)]),t._v(" "),_("h2",{attrs:{id:"日志输出组"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#日志输出组"}},[t._v("#")]),t._v(" 日志输出组")]),t._v(" "),_("p",[_("strong",[t._v("日志输出组")]),t._v("本身没有实际的日志输出能力，而是通过聚合一个或多个"),_("strong",[t._v("日志输出器")]),t._v("实例，并逐个调用它们的实例方法"),_("code",[t._v("log")]),t._v("以实现日志多点输出。")]),t._v(" "),_("p",[t._v("通常，我们通过在"),_("RouterLink",{attrs:{to:"/guide/logger-group-customizing.html"}},[t._v("自定义输出组")]),t._v("时修改其实例方法"),_("code",[t._v("start")]),t._v("、"),_("code",[t._v("close")]),t._v("、"),_("code",[t._v("log")]),t._v("执行时的行为将日志收集与业务逻辑结合。")],1),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),_("p",[_("strong",[t._v("日志输出组无法通过直接实例化得到其实例")]),t._v("。")]),t._v(" "),_("p",[t._v("在使用"),_("strong",[t._v("日志输出组")]),t._v("时：")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("根据期望聚合的"),_("strong",[t._v("日志输出器")]),t._v("构造的配置对象创建"),_("RouterLink",{attrs:{to:"/guide/logger-group-introduce.html#loggercore"}},[t._v("LoggerCore")]),t._v("实例。")],1)]),t._v(" "),_("li",[_("p",[t._v("在执行"),_("RouterLink",{attrs:{to:"/guide/logger-group-introduce.html#loggercore"}},[t._v("LoggerCore")]),t._v("的实例方法"),_("code",[t._v("createGroupLogger")]),t._v("时"),_("strong",[t._v("指定期望使用的日志输出组类型以得到其实例。")])],1)])]),t._v(" "),_("p",[_("strong",[t._v("因此，LoggerCore是生产日志输出组的工厂。")])])])])}),[],!1,null,null,null);v.default=o.exports}}]);