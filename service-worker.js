if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"c15a3389829690a09fa82827f4bae142","url":"404.html"},{"revision":"9ec9216728dbf5a2c2a2b69256419662","url":"8ae050b0e0e914e9c1ae.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"c15a3389829690a09fa82827f4bae142","url":"index.html"},{"revision":"ee193d41615fb8cf1732f6191cb78d96","url":"static/css/22.f5f9d973.chunk.css"},{"revision":"f215608a7ce073a74dafc9c9baa3ea22","url":"static/css/23.e7bf9b77.chunk.css"},{"revision":"60c8fb994cef7b598e34ffae31d06e42","url":"static/js/0.44045b94.chunk.js"},{"revision":"fcb02e060f83c2174e1ca2d9eb2b96f8","url":"static/js/1.480740cc.chunk.js"},{"revision":"b0bb2f9d51852c192b3bb65844703938","url":"static/js/12.4f3e4508.chunk.js"},{"revision":"300705a3d9a4a3ae49e656940d9cb552","url":"static/js/13.c2ad150d.chunk.js"},{"revision":"d58a9ca06a93ffec425bc93d0dd1c30d","url":"static/js/14.e6a21872.chunk.js"},{"revision":"795e5f725eee1a4e903c2af672805828","url":"static/js/15.c923b3a0.chunk.js"},{"revision":"76297277be379bf20b2619c74e636ac3","url":"static/js/16.3375b0da.chunk.js"},{"revision":"63ba07021b7e54facd39599265e3de1b","url":"static/js/17.6a61ab30.chunk.js"},{"revision":"df77852b7b80838d7b6e1537299fb9ac","url":"static/js/18.19bfbc55.chunk.js"},{"revision":"6a8a59797edfd5adafefc6da118ae531","url":"static/js/19.f01a891b.chunk.js"},{"revision":"24f27bf8e8bb0052a1f470018ce08926","url":"static/js/2.e2d97dc9.chunk.js"},{"revision":"88ae8a264a2d9c7bbd7fda110cb59ca6","url":"static/js/20.e73ab7b8.chunk.js"},{"revision":"9dd233b90698154eae35a0e2fea78b0e","url":"static/js/21.77118bb9.chunk.js"},{"revision":"bb88d17be0cfbfafc90eab9db9a9f092","url":"static/js/22.e25a3abe.chunk.js"},{"revision":"571031b0734448de4df1f9ac48903881","url":"static/js/23.63e5d4d5.chunk.js"},{"revision":"383aa09cf664a2d99ab7d14a305c483b","url":"static/js/24.f9474261.chunk.js"},{"revision":"6b79febbaa633615d1c3a2c028b987f6","url":"static/js/25.bcd24197.chunk.js"},{"revision":"7d7eda89078336bb78c40ef1aade2920","url":"static/js/26.68c7c0e3.chunk.js"},{"revision":"c97706c021bad6e3edf92c07ccd66652","url":"static/js/27.7a3cf900.chunk.js"},{"revision":"b0be01428bcb0e9cedf4acc695dd2341","url":"static/js/28.91966697.chunk.js"},{"revision":"721ba08be7c98efa4a46b25541b81ebc","url":"static/js/29.ef6d1fdb.chunk.js"},{"revision":"4dd82e6484fdf82730d76b203e3ea6c2","url":"static/js/3.c0b1f7fb.chunk.js"},{"revision":"2df64429ea98333ef4bf966c63097937","url":"static/js/30.55874bc1.chunk.js"},{"revision":"ee796bc26d5b059f1e4655f2d9b3435b","url":"static/js/31.d6cd8cd6.chunk.js"},{"revision":"6216ba693a800bf1066b9bd04df022a0","url":"static/js/32.634389a7.chunk.js"},{"revision":"334c41ebf8e7df7c05fc15ed28847e4f","url":"static/js/33.93c09e15.chunk.js"},{"revision":"ec1be464b80ec52ddafdbfd70ecbd81f","url":"static/js/34.cb8d71cf.chunk.js"},{"revision":"09c3acd7beb05c392735387c3d7cd17e","url":"static/js/35.d76ece91.chunk.js"},{"revision":"84125c8dfcdd8e4020f56a74c1474981","url":"static/js/36.610cae5e.chunk.js"},{"revision":"abd9d8e2c62e66f95ab3eb6ca29cffcb","url":"static/js/37.44517507.chunk.js"},{"revision":"9c7cf1e62fa3c09ddf998efe8003a454","url":"static/js/38.157828f5.chunk.js"},{"revision":"df204f471d4c917f45042519c901a675","url":"static/js/39.2b2e7c41.chunk.js"},{"revision":"bc37b5cd1673cf3ff6516e3bc9877fbf","url":"static/js/4.89c0005f.chunk.js"},{"revision":"99b8ece19d605fb5709b3fe56206facf","url":"static/js/40.3aee71d3.chunk.js"},{"revision":"605b5422de3eb354f6a54e107812369d","url":"static/js/41.79c41e91.chunk.js"},{"revision":"7a5b8ce16bc7155b04838099802d71bd","url":"static/js/42.9373ab11.chunk.js"},{"revision":"d11fe4621e99dc2bbbe2e884254e68d4","url":"static/js/43.d69b3230.chunk.js"},{"revision":"f0a16e76aa97164e2ef01bca90d2d238","url":"static/js/44.6ed99d9c.chunk.js"},{"revision":"28dd55926d038cc8f84dda2eef84bd58","url":"static/js/5.455735ca.chunk.js"},{"revision":"540c585e2b766ba6f36de3e8bfd603c1","url":"static/js/6.bb3b41fb.chunk.js"},{"revision":"f48332b350a48672aec9e223922c44da","url":"static/js/7.38b683fe.chunk.js"},{"revision":"1c38eb5a4047cccfb01a9c68225bb2b6","url":"static/js/8.a5e501c2.chunk.js"},{"revision":"f13e1e3b7e20a35dc9791cf2d56df04b","url":"static/js/9.6b0f21a2.chunk.js"},{"revision":"0c177ad5b22b059a5dd16044f5d3790d","url":"static/js/main.085cb2f7.chunk.js"},{"revision":"d4dd0e6310ae2a58fde298c9313f7b6c","url":"static/js/runtime-main.ed162d0f.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
