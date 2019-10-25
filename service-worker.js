/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "e6205b01e877bb50328acc56a87afac3"
  },
  {
    "url": "assets/css/0.styles.8241d59c.css",
    "revision": "62462dd8fe251f0e78a96f872bc431e9"
  },
  {
    "url": "assets/img/1.0d139f52.png",
    "revision": "0d139f52b0370079b5fe3c8b8ea6a2a3"
  },
  {
    "url": "assets/img/1.23b9c262.png",
    "revision": "23b9c262f6b1986d8aed01fec4c4ec88"
  },
  {
    "url": "assets/img/1.2412c80d.png",
    "revision": "2412c80d35e641405b70667d4ecac20c"
  },
  {
    "url": "assets/img/1.2b1041e3.png",
    "revision": "2b1041e346a8d6b01e8589b86302ca9c"
  },
  {
    "url": "assets/img/1.48012ae3.png",
    "revision": "48012ae338dbd7c85c9dd0b6dd9c44a7"
  },
  {
    "url": "assets/img/1.6acebd5e.png",
    "revision": "6acebd5e1561230b49189c021a82ab94"
  },
  {
    "url": "assets/img/1.cea41dc7.png",
    "revision": "cea41dc7d5a010d9d35cd39ed71c56c8"
  },
  {
    "url": "assets/img/1.eadaa686.png",
    "revision": "eadaa6868ab0195cc9b2c741c358be0c"
  },
  {
    "url": "assets/img/10.0aa0429d.png",
    "revision": "0aa0429d0d92d9ebc8e7e44a6d7d7eed"
  },
  {
    "url": "assets/img/11.04e8e13a.png",
    "revision": "04e8e13a5c5513635ff4f1d53cf51bc9"
  },
  {
    "url": "assets/img/12.2fe13e92.png",
    "revision": "2fe13e92868e5a755fbd5a976005444a"
  },
  {
    "url": "assets/img/13.a2cbff03.png",
    "revision": "a2cbff034ad5a4b7c8d1fed44e95f6cf"
  },
  {
    "url": "assets/img/14.7d6642e0.png",
    "revision": "7d6642e0b0070e27d28a28df56b802da"
  },
  {
    "url": "assets/img/15.e50d23a8.png",
    "revision": "e50d23a887fa756236aab92084aad8a8"
  },
  {
    "url": "assets/img/16.ba9667b2.png",
    "revision": "ba9667b2da8561681e27f94ae00df07c"
  },
  {
    "url": "assets/img/2.77dab2f9.png",
    "revision": "77dab2f9f182183533a623d4122e06f3"
  },
  {
    "url": "assets/img/2.8af0c554.png",
    "revision": "8af0c5540ab0df9690df4c2f90ade7df"
  },
  {
    "url": "assets/img/2.cfdcaada.png",
    "revision": "cfdcaada2946bb76dce6f26500b57ab6"
  },
  {
    "url": "assets/img/2.cfee1d6c.png",
    "revision": "cfee1d6ce82b52360a478b1c1abc75fa"
  },
  {
    "url": "assets/img/2.d15ff8f4.png",
    "revision": "d15ff8f420f0b32d7620604d1e66c8a4"
  },
  {
    "url": "assets/img/2.edaff1a6.png",
    "revision": "edaff1a6bf969d8e412159a8678d34f6"
  },
  {
    "url": "assets/img/2.f6783150.png",
    "revision": "f67831504c97fc3f30d133658cf974f5"
  },
  {
    "url": "assets/img/3.2d60304b.png",
    "revision": "2d60304be2ee05303b65d1e8276a4fd0"
  },
  {
    "url": "assets/img/3.5a1d57d7.png",
    "revision": "5a1d57d70fb4e1279ee13f17639d476c"
  },
  {
    "url": "assets/img/3.77deb5eb.png",
    "revision": "77deb5ebfd5bc5a4d52863dbea7c9bd4"
  },
  {
    "url": "assets/img/3.781bfe5f.png",
    "revision": "781bfe5f06875da1e6b367202eabf057"
  },
  {
    "url": "assets/img/3.7cac6e03.png",
    "revision": "7cac6e038c2253397ccf9b7fe84fbc2c"
  },
  {
    "url": "assets/img/3.a6c1644c.png",
    "revision": "a6c1644ceac16c6e809c0f69aa0df50e"
  },
  {
    "url": "assets/img/3.d4ff9482.png",
    "revision": "d4ff9482542eceb4033f3315ad835673"
  },
  {
    "url": "assets/img/4.0093ec55.png",
    "revision": "0093ec55fe657403a502cd293708a5f7"
  },
  {
    "url": "assets/img/4.3eddadfb.png",
    "revision": "3eddadfbf1760b6aa44b625cc1deb3ea"
  },
  {
    "url": "assets/img/4.47a7c6f4.png",
    "revision": "47a7c6f4af264c728ca8f75fc98fff0d"
  },
  {
    "url": "assets/img/4.4aba6c56.png",
    "revision": "4aba6c56f459df2f84b396b81e77347c"
  },
  {
    "url": "assets/img/4.793cd6ee.png",
    "revision": "793cd6eed589a8f248a3cf03ce5cad74"
  },
  {
    "url": "assets/img/4.80fa90d1.png",
    "revision": "80fa90d166b9850952b2106c1bd59e90"
  },
  {
    "url": "assets/img/4.86cefb7a.png",
    "revision": "86cefb7a0c3a5cef0962a893c8513562"
  },
  {
    "url": "assets/img/5.521a01c9.png",
    "revision": "521a01c986dd97bd9f1d831d4f1d434a"
  },
  {
    "url": "assets/img/5.7ee9f0d8.png",
    "revision": "7ee9f0d8566dc97182fc55599ee3b93c"
  },
  {
    "url": "assets/img/5.a6d97d7f.png",
    "revision": "a6d97d7fb5004ea05b4b6c52eb78b5de"
  },
  {
    "url": "assets/img/5.b8bbeff8.png",
    "revision": "b8bbeff8dd48ef66d684711a0deba7f6"
  },
  {
    "url": "assets/img/5.dc25a0f4.png",
    "revision": "dc25a0f4ea789dfd630da25c7124b0ca"
  },
  {
    "url": "assets/img/6.472f5770.png",
    "revision": "472f5770165cf43a802e422561e82f13"
  },
  {
    "url": "assets/img/6.94cb42ab.png",
    "revision": "94cb42ab71df309b664f83cb22b77783"
  },
  {
    "url": "assets/img/6.ac6db8a5.png",
    "revision": "ac6db8a51123007586912fe14aff9595"
  },
  {
    "url": "assets/img/6.c9ae9f74.png",
    "revision": "c9ae9f742e01f6704df589b07c95d5b7"
  },
  {
    "url": "assets/img/7.6091c4e3.png",
    "revision": "6091c4e3aacc9622c31856d2cedf276f"
  },
  {
    "url": "assets/img/7.b97c8cd7.png",
    "revision": "b97c8cd75fcaba9221886587be930116"
  },
  {
    "url": "assets/img/7.e3de225d.png",
    "revision": "e3de225d7afdf311d1344843f95dfd5d"
  },
  {
    "url": "assets/img/8.246bf81f.png",
    "revision": "246bf81fb4e14c1e473f0f32e2eec118"
  },
  {
    "url": "assets/img/9.40a45b84.png",
    "revision": "40a45b845d940ed636c088550df2cfdd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/zfb1.386b61cb.png",
    "revision": "386b61cbd46493fb71427febe8055030"
  },
  {
    "url": "assets/img/zfb2.d170884e.png",
    "revision": "d170884ed610f5926af1c2c28d28a500"
  },
  {
    "url": "assets/img/zfb3.4a4b9cc9.png",
    "revision": "4a4b9cc96db5cc6e81668015217f86e6"
  },
  {
    "url": "assets/js/10.231220bf.js",
    "revision": "0902744662785ebee3adbd80d06bf099"
  },
  {
    "url": "assets/js/11.8ff4281d.js",
    "revision": "ddc499b90e15699bd5dfae816a551c31"
  },
  {
    "url": "assets/js/12.9bf66a63.js",
    "revision": "859a331024e053e75b0a01ad1993da21"
  },
  {
    "url": "assets/js/13.8f617254.js",
    "revision": "76594ab66915986096f912723f4c010c"
  },
  {
    "url": "assets/js/14.7be5c5fc.js",
    "revision": "3c31b4c2ef6c68e58cd08ba195bc3c22"
  },
  {
    "url": "assets/js/15.ba5bb027.js",
    "revision": "218204379e2df339b8f55a86da013c92"
  },
  {
    "url": "assets/js/16.d1cbce29.js",
    "revision": "40a28f6c635da729920e374ff9684358"
  },
  {
    "url": "assets/js/17.509e09e5.js",
    "revision": "d750ce66a2dfe6bd91603943b9c401f8"
  },
  {
    "url": "assets/js/18.2844b4a2.js",
    "revision": "d39ee6b5a4866373262e3f7efcc8418f"
  },
  {
    "url": "assets/js/2.6e15f4d2.js",
    "revision": "18320febd849a4241f6b88610f507a1c"
  },
  {
    "url": "assets/js/3.6b024f12.js",
    "revision": "aacf08b480b91c85b1fc17474f2e3079"
  },
  {
    "url": "assets/js/4.99b10897.js",
    "revision": "0a6837a38514308c50a619eff7c5e7a6"
  },
  {
    "url": "assets/js/5.1663d93c.js",
    "revision": "ce8d873118a86653174a83a7372eec13"
  },
  {
    "url": "assets/js/6.24055a12.js",
    "revision": "c47e048f62b1d36aef881d7f1c99f240"
  },
  {
    "url": "assets/js/7.119eb3c0.js",
    "revision": "78be03260eb19c4def873e0ed91715f2"
  },
  {
    "url": "assets/js/8.b922d863.js",
    "revision": "8aae1c3d4e9d126c5a5aed43fb4654b0"
  },
  {
    "url": "assets/js/9.b8c6b35e.js",
    "revision": "5dabbdcfe158a1e4a8578f5734bdf2d4"
  },
  {
    "url": "assets/js/app.8033995d.js",
    "revision": "1783845fb4e84fa749c79d2cab0b9061"
  },
  {
    "url": "blog/axios/download/index.html",
    "revision": "8fe5bab5bc1b3d14be38c97ce4383f53"
  },
  {
    "url": "blog/docker/docker1/index.html",
    "revision": "b9edbe8247a77bd43d7430dada282d64"
  },
  {
    "url": "blog/docker/docker2/index.html",
    "revision": "977a72a009b51f588e5b3fc79ba5b873"
  },
  {
    "url": "blog/docker/docker3/index.html",
    "revision": "f3b4e07b576f3f44e58a69b9ab5c5872"
  },
  {
    "url": "blog/http/http1/index.html",
    "revision": "8e4e2879f333c95bceedc2c5ce18938f"
  },
  {
    "url": "blog/http/http2/index.html",
    "revision": "87aa19e11205677e65f8491ba18f4a70"
  },
  {
    "url": "blog/http/http3/index.html",
    "revision": "93f923f86d9b557d3a13b972490fe58f"
  },
  {
    "url": "blog/http/http4/index.html",
    "revision": "a39268123e5eff4a3dd3d0a3c21bf3af"
  },
  {
    "url": "blog/nginx/install/index.html",
    "revision": "330cffd7c3ba9ba111585ba6bb091657"
  },
  {
    "url": "blog/nginx/nginx_web/index.html",
    "revision": "baa339cdaa977ef825c3b2983016c9fe"
  },
  {
    "url": "blog/node/install/index.html",
    "revision": "8968f8f34a926e7cd99df4dfeed709f8"
  },
  {
    "url": "blog/react/react1/index.html",
    "revision": "eca754377796eed9f65de0975fb47e20"
  },
  {
    "url": "blog/thoughts/2019-04/index.html",
    "revision": "679ee544385abd2c7e2e8c77f4c72b8a"
  },
  {
    "url": "blog/thoughts/zfbJump/index.html",
    "revision": "39adfd80b09e62523672aa0975e88706"
  },
  {
    "url": "hero.png",
    "revision": "9ea40a18fbbd5e1562c5bf9607d0b1eb"
  },
  {
    "url": "index.html",
    "revision": "34dbac270c8ca462f6603fc166c8e6ed"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
