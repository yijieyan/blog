(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{227:function(t,e,n){"use strict";n.r(e);var a=n(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("p",[t._v("cache-control 的值有很多，以下截取一些比较常用的,具体的请参考"),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Caching_FAQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("mdn"),n("OutboundLink")],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("可以通过服务端(测试用的koa)不同的设置去验证,测试代理服务器可以中间加一层nginx代理3000端口,去设置nginx的缓存验证")]),t._v(" "),t._m(2),n("p",[t._v("客户端测试代码")]),t._v(" "),t._m(3),t._m(4)])},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",[n("thead",[n("tr",[n("th",[t._v("参数")]),t._v(" "),n("th",[t._v("value")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("no-store")]),t._v(" "),n("td",[t._v("每次请求都去服务器获取,不用缓存")])]),t._v(" "),n("tr",[n("td",[t._v("no-cache")]),t._v(" "),n("td",[t._v("每次请求必须去服务器验证缓存")])]),t._v(" "),n("tr",[n("td",[t._v("max-age")]),t._v(" "),n("td",[t._v("设置客户端缓存多久后失效(单位为s)")])]),t._v(" "),n("tr",[n("td",[t._v("s-max-age")]),t._v(" "),n("td",[t._v("设置中间代理服务器缓存多久后失效(单位为s)")])]),t._v(" "),n("tr",[n("td",[t._v("Expires")]),t._v(" "),n("td",[t._v("设置到期的时间(单位为Date)")])]),t._v(" "),n("tr",[n("td",[t._v("must-revalidate")]),t._v(" "),n("td",[t._v("缓存到期后必须去目标服务器(不会从代理服务器)去验证缓存是否有改变")])]),t._v(" "),n("tr",[n("td",[t._v("ETags")]),t._v(" "),n("td",[t._v("一种强校验器,根据请求的内容生成的一个签名值")])]),t._v(" "),n("tr",[n("td",[t._v("Last-Modified")]),t._v(" "),n("td",[t._v("一种弱校验器。说它弱是因为它只能精确到秒")])]),t._v(" "),n("tr",[n("td",[t._v("private")]),t._v(" "),n("td",[t._v("所有的中间服务器和浏览器都可以缓存")])]),t._v(" "),n("tr",[n("td",[t._v("public")]),t._v(" "),n("td",[t._v("只允许浏览器缓存,中间代理服务器不能缓存")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("上一次response返回ETags,下一次请求header会带上If-None-Match字段和服务器的ETag进行比较\nresponse 返回的Last-Modified ,会在下一次请求header中带上If-Modified-Since和服务器的Last-Modified比较")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("let koa = require('koa');\nlet app =new koa();\n\napp.use(async (ctx, next) => {\n  console.log(ctx.request.url);\n  ctx.set(\"Access-Control-Allow-Origin\",\"*\");\n  ctx.set(\"Access-Control-Allow-Headers\", \"token\");\n  if (ctx.request.url === '/1.js') {\n    let etag = '123';\n    if (ctx.header[\"if-none-match\"] === etag) {\n        ctx.status = 304;\n    } else {\n      ctx.set('Cache-Control', 'max-age=5');\n      ctx.set('ETag', etag);\n      ctx.set('Last-Modified', Date.now());\n      ctx.set('Content-Type', 'application/javascript');\n      ctx.body = `console.log(\"hello everyone\")`;\n    }\n  }\n});\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <title>Document</title>\n</head>\n<body>\n  <script src="http://127.0.0.1:3000/1.js"><\/script>\n</body>\n</html>\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("前端通过http-server代理")])])}],!1,null,null,null);e.default=s.exports}}]);