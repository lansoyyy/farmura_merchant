'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "a5d1b00d4315ac5ceaaf07daba991b6e",
"assets/AssetManifest.bin.json": "abf2a74eb10be6523d18598a62444ff8",
"assets/AssetManifest.json": "0af0659f9161c3163024321c08af00bb",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/images/1.%2520FARMURA%2520Customer%2520(App%2520Icon).png": "fb5166747e77c17934c0a4f95b4f1821",
"assets/assets/images/appicon.png": "ebc7065f9d16e5caac10623197af1a5a",
"assets/assets/images/Card.png": "5ee7433f2b294ae2e4d1434833fb683a",
"assets/assets/images/cash.png": "d9c0925becee8c3e0c8f5744ff204955",
"assets/assets/images/Clip%2520path%2520group.png": "53de87915311b2e4271337cf7e7941a8",
"assets/assets/images/cvv%25201.png": "585b484d83391653feacf32b304e4998",
"assets/assets/images/devicon_apple.png": "95aae49d04a9d53f2e34649a1dd5b2d5",
"assets/assets/images/effects.png": "da44caf1c0e7a5575aefa05a4cf8aee0",
"assets/assets/images/FARMURA%2520LOGO%2520(1).png": "4077c740cf992ac00f4429bd804241c0",
"assets/assets/images/FARMURA%2520LOGO.png": "0439a015b7c9137cefdfa22d5471467b",
"assets/assets/images/features/beourpartner.png": "a551edab77044b58d59772e121b7fea1",
"assets/assets/images/features/beourpartnercard.png": "e4ba7950d7deddee453c37cca5869545",
"assets/assets/images/features/carenta.png": "a22154c9b5f883cae55d42755581e172",
"assets/assets/images/features/carentacard.png": "153122bdb1bb01bc4c08d3d38a46f80a",
"assets/assets/images/features/pasakay.png": "3b542bee314182efe7de963a8880c741",
"assets/assets/images/features/pasakaycard.png": "c03ee306476cc1a7c9a83b69efa24a56",
"assets/assets/images/features/pasugo.png": "69a4c33692f3ff6e0983257232226152",
"assets/assets/images/features/pasugocard.png": "a56933660e47256f9b22cf01f54c2c94",
"assets/assets/images/features/taboan.png": "15510eeb8976a2030ca29306810ec611",
"assets/assets/images/features/taboancard.png": "d986a2e7fc6b1bad372a5dd26952d25b",
"assets/assets/images/features/tourtayo.png": "75b994ef95768c237bb975a64075b0bd",
"assets/assets/images/features/tourtayocard.png": "dc8a60b3e7393fde1067347d047958aa",
"assets/assets/images/graypay.png": "f6a4c0a10899dbf3e5bc59d948fcfb10",
"assets/assets/images/grocery/grocery_illustratuin.png": "d91194c5692bb88ddc82b5bef02bd770",
"assets/assets/images/grocery/nvm_banner.png": "98385bd707ac5f53e2134fb6aa3e0365",
"assets/assets/images/grocery/nvm_logo.png": "51b0f339ecb94273674256424fc52ab0",
"assets/assets/images/grocery/sample_category.png": "f3a40a3941487702b781ec4417ffa180",
"assets/assets/images/grocery/sample_product.png": "a3d80919164576c12549d2edaa43444b",
"assets/assets/images/Isolation_Mode.png": "deac72e6ffa7dbb04a5b9e6c7fa53266",
"assets/assets/images/Layer%25202%2520(1).png": "00c2fb86787121274c771ca44d6d5a05",
"assets/assets/images/Layer%25202.png": "e9b3fda7a0dcaa2f03be166ea36dd9bb",
"assets/assets/images/logos_facebook.png": "34ed2d6f17b7699c6eac7f7f64b1de2f",
"assets/assets/images/mastercard.png": "7ad06bfbe0dc29a6ca01b81d02903fa0",
"assets/assets/images/material-icon-theme_google.png": "77140a53f45acdf047ca47a1245e8ec6",
"assets/assets/images/maya.jpg": "d40fa326745d937a7c0d5bda6d31c6f9",
"assets/assets/images/motorcycle.png": "7f9c107e898bdcaff3384a57eee409d5",
"assets/assets/images/no%2520rider.png": "8a13efc7997f1c37bb2aab4a604b2338",
"assets/assets/images/onboarding/1.png": "ef6307efc5f70a9d91ba84ef28ee0ea2",
"assets/assets/images/onboarding/2.png": "232867706a7fc285f9bc59b5d33fb113",
"assets/assets/images/onboarding/3.png": "254af2a666adf742d23eff07cf2816a6",
"assets/assets/images/onboarding/4.png": "8f2cc8e4d11a4549ec18409393de593e",
"assets/assets/images/onboarding/5.png": "bdb9aea28d991048c32afa35c4bea9a0",
"assets/assets/images/onboarding1.png": "e566b6cbd479c8e94ae3ea4343943396",
"assets/assets/images/pasakay/State%2520Illustrations%2520(2).png": "d20cb49805877712a4d96636e80b5181",
"assets/assets/images/pasugo/Custom.png": "4486f3b6433afb045429499282286272",
"assets/assets/images/pasugo/Food.png": "b68f45ba09d436d81863a676beef5121",
"assets/assets/images/pasugo/Grocery.png": "c28e81198f6516aedbf8e6378868bd98",
"assets/assets/images/pasugo/Money.png": "fe030ef0d56b140591a736b27d493695",
"assets/assets/images/pasugo/Parcel.png": "da2448ed71ea200823304ca794d4d76b",
"assets/assets/images/pasugo/Pay%2520Bills.png": "65cf2904461a22bf4862759f49b81b37",
"assets/assets/images/pasugo/Pickup%2520&%2520Dropoff.png": "ec0cb08088de5b29d2094e87481e78b2",
"assets/assets/images/pasugo/Shop.png": "e7171e941c3e61542131bf77026b308f",
"assets/assets/images/Pasugo%2520(1).png": "b85bd2e56754d4156b911dd6fe3a3af7",
"assets/assets/images/pasugo.png": "639d365c0883d7fd53db57d2df581fe1",
"assets/assets/images/pasugoicons/Custom.png": "a6251cb7911f270a4239b54fc66e27c4",
"assets/assets/images/pasugoicons/Food.png": "82fbecd10cfebfe9912d112e82da6b17",
"assets/assets/images/pasugoicons/Grocery.png": "468279be7d7275b58a6006b13c39a0cd",
"assets/assets/images/pasugoicons/Money.png": "d517b66d079f76218ffbf96b8500530f",
"assets/assets/images/pasugoicons/Parcel.png": "dc197d0aca0b14fdad759c230334bb7b",
"assets/assets/images/pasugoicons/Pay%2520Bills.png": "e6cba6b5e9919d271d43ef3deb8ecbc2",
"assets/assets/images/pasugoicons/Pickup%2520&%2520Dropoff.png": "ff96b173d4cdd696e56568ca731a6c58",
"assets/assets/images/pasugoicons/Shop.png": "b122961003e55350ceb8188381ededc2",
"assets/assets/images/pay/gcash.png": "5b12ac7f102d69b3999f750fe99d38ee",
"assets/assets/images/pay/searching.png": "f8be7a7ae7257f253caa4929f7e36118",
"assets/assets/images/pay/State%2520Illustrations%2520(1).png": "ba666c52a1da75a18b84cec76a678bc5",
"assets/assets/images/pay/State%2520Illustrations.png": "e0799cf0e233fa1054dfea8363a66c54",
"assets/assets/images/payments/gcash.png": "8f4c5b3881eb50c6f58d02250ded1224",
"assets/assets/images/payments/maya.png": "c50c971d4585286920e8b41609f6eaf5",
"assets/assets/images/payments/qrph.webp": "975c0d4a7a3f5e70ef7fdcd2b325b957",
"assets/assets/images/paypal.png": "2e4ea651f98a9400fa008e5c5001535c",
"assets/assets/images/riders/illustration.png": "77b79f68cb1fead5527bccd91bd7fc15",
"assets/assets/images/riders/offline.png": "cbc24f0994c2992a24e1966bf8aae98f",
"assets/assets/images/riders/Onboarding%2520images%2520(1).png": "030c1cad3cb0791d17561239bf3c0c5c",
"assets/assets/images/riders/riders_illustration.png": "7ec2a78c74bc6efc2d65600ea32004b2",
"assets/assets/images/riders/rider_logo.png": "d7eb3c2f26fa7c59531015e48ead909e",
"assets/assets/images/Riders%2520AppIcon.png": "1c5fab0099e131c61d3a6ed7f1c0f1ed",
"assets/assets/images/V8TBk9.tif.png": "71e29f799557d915845a7bad4eb242aa",
"assets/assets/images/verification/driversLicense.png": "fd4d88d2e2de43624659f73b21b6c1fb",
"assets/assets/images/verification/face.png": "6b0c498a66fc7e5cc4a923adfd92e696",
"assets/assets/images/verification/nationalId.png": "25dd3d9118a51d9a105310ae911ccf1e",
"assets/assets/images/verification/passport.png": "9043e18cb8f136220aedd51d6e3a0fbc",
"assets/assets/images/verification/umidCard.png": "d2f481584b9c9c65e0d154b7a67613fa",
"assets/assets/images/verification/validId.png": "f354f1e27876d1d939f11114a19479e1",
"assets/assets/images/visa.png": "e783ce4f6511ec0bf91b3f9fc84161c4",
"assets/assets/notif.wav": "feb29173be911eeaa2c1312491acc565",
"assets/assets/sounds/notif.wav": "1a4f5ab54ee0f5fb98785663783af45f",
"assets/FontManifest.json": "8f0ae30eb4e6983e7efaab77e8f392d7",
"assets/fonts/MaterialIcons-Regular.otf": "f3934a1115815416ad4ef9dac26a94eb",
"assets/NOTICES": "c643d7fc021f9f251e518b9864b6d014",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "9f0a74e8e2f9ca6529248679e2cf951d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "cabbf2e1842877c075da4c08cb3e7d63",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "4212f0f9367680599a1e685eb8a96fad",
"assets/packages/google_places_flutter/images/location.json": "afa33acf2c340246c901718f4efdfccf",
"assets/packages/solar_icons/fonts/SolarIconsBold.ttf": "daabdb5a493f850960ab452d5413f3ce",
"assets/packages/solar_icons/fonts/SolarIconsBroken.ttf": "a581be9bb58e09542c5f22243b7ffa1a",
"assets/packages/solar_icons/fonts/SolarIconsOutline.ttf": "e3b79fe5e635281dd7e76a7dc85032b4",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "ebc7065f9d16e5caac10623197af1a5a",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "bae95c283552b050d61923d6292bd417",
"icons/Icon-192.png": "ebc7065f9d16e5caac10623197af1a5a",
"icons/Icon-512.png": "ebc7065f9d16e5caac10623197af1a5a",
"icons/Icon-maskable-192.png": "ebc7065f9d16e5caac10623197af1a5a",
"icons/Icon-maskable-512.png": "ebc7065f9d16e5caac10623197af1a5a",
"index.html": "9f871548a1e9683cfd0e9116a7291e81",
"/": "9f871548a1e9683cfd0e9116a7291e81",
"main.dart.js": "027164b660e458bd63de914c35626f21",
"manifest.json": "05a0d3b385838aca15dc9ce8799a92cf",
"version.json": "6680d161922653f11de2849a68928443"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
