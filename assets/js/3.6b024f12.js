(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{167:function(t,e,s){t.exports=s.p+"assets/img/1.2412c80d.png"},168:function(t,e,s){t.exports=s.p+"assets/img/2.cfee1d6c.png"},169:function(t,e,s){t.exports=s.p+"assets/img/3.2d60304b.png"},170:function(t,e,s){t.exports=s.p+"assets/img/4.4aba6c56.png"},171:function(t,e,s){t.exports=s.p+"assets/img/5.dc25a0f4.png"},172:function(t,e,s){t.exports=s.p+"assets/img/6.ac6db8a5.png"},173:function(t,e,s){t.exports=s.p+"assets/img/7.6091c4e3.png"},234:function(t,e,s){"use strict";s.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"环境准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境准备","aria-hidden":"true"}},[this._v("#")]),this._v(" 环境准备")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(167),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(168),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ mkdir centos\n$ cd centos\n$ vagrant init centos/7  # 创建一个Vagrantfile\n$ vagrant up #开始下载并启动\n$ vagrant ssh\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(169),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(170),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ sudo yum remove docker \\\n                  docker-client \\\n                  docker-client-latest \\\n                  docker-common \\\n                  docker-latest \\\n                  docker-latest-logrotate \\\n                  docker-logrotate \\\n                  docker-selinux \\\n                  docker-engine-selinux \\\n                  docker-engine\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ sudo yum install -y yum-utils \\\n  device-mapper-persistent-data \\\n  lvm2\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ sudo yum-config-manager \\\n    --add-repo \\\n    https://download.docker.com/linux/centos/docker-ce.repo\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ sudo yum-config-manager --enable docker-ce-edge\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ sudo yum-config-manager --enable docker-ce-test\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ sudo yum install docker-ce -y\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ sudo systemctl start docker\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ sudo docker run hello-world\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(171),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(172),alt:""}}),this._v("\n去掉权限不足")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("$ sudo groupadd docker\n$ sudo gpasswd -a vagrant docker\n$ sudo service docker restart\n$ exit\n$ vagrant ssh\n$ docker version\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(173),alt:""}})])}],a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("安装"),s("a",{attrs:{href:"https://www.vagrantup.com/downloads.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("vagrant"),s("OutboundLink")],1),t._v(",选择合适的安装包")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("安装"),s("a",{attrs:{href:"https://www.virtualbox.org/wiki/Downloads",target:"_blank",rel:"noopener noreferrer"}},[t._v("VirtualBox"),s("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("创建一个目录,安装centos7 虚拟机")]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("环境(centos7)已经准备好,开始安装"),s("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/centos/",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("安装centos的社区版"),s("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/centos/",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker"),s("OutboundLink")],1)]),t._v(" "),t._m(6),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),s("p",[t._v("启动docker")]),t._v(" "),t._m(12),s("p",[t._v("运行一个hello-world镜像")]),t._v(" "),t._m(13),s("p",[t._v("由于网络原因直接拉取docker hub 上的镜像很慢,配置一下官网在中国的源")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._m(17)])},r,!1,null,null,null);e.default=n.exports}}]);