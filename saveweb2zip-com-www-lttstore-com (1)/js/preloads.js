
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.latest.en.4392387b1d6f52218b57.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/362.latest.en.c3486f33125b202e0bec.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/441.latest.en.04eff29e3df2d466c911.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/598.latest.en.154bde18f6b5123c203f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.19630e80c2314f039a46.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/731.latest.en.13d4de92b88330e8fea9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/958.latest.en.5650d8c92dd2c0e13401.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/844.latest.en.7fcd45ae446a9a5574e8.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.latest.en.8e59d7289717133100c2.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/362.latest.en.18eecd205dabb9c44d0a.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.latest.en.e5a7f63ca146c0549466.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/958.latest.en.5f60c0e91d9d5d6ad7d1.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/74.latest.en.eb557fd11c539973a9ee.css"];
      var fontPreconnectUrls = ["https://fonts.shopifycdn.com"];
      var fontPrefetchUrls = ["https://fonts.shopifycdn.com/poppins/poppins_n4.934accbf9f5987aa89334210e6c1e9151f37d3b6.woff2?valid_until=MTcwMzYyNzUzMA&hmac=efc8eb30b7e3d1f8df990c1d4718ec889f25e70dec059c47afc55cc812c15926","https://fonts.shopifycdn.com/poppins/poppins_n7.58aca33913fc6666cc9e8a53f6b16ec5c3c05a3f.woff2?valid_until=MTcwMzYyNzUzMA&hmac=02eb03ddc3a0198ea8f4982777f16fe3546c22e1e5e3ce4bad476d2a72cdcbe4"];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0058/4538/5314/files/LTT_Logo_x320.png?v=1667427218"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  