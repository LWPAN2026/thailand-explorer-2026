const CACHE='thailand-explorer-v2';const ASSETS=["./", "./index.html", "./manifest.webmanifest", "./assets/icon.svg", "./assets/hero.svg", "./assets/ayutthaya.svg", "./assets/rayong.svg", "./assets/bangkok.svg", "./assets/food.svg", "./assets/shopping.svg", "./assets/tools.svg"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x))))));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{const cp=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return resp}).catch(()=>caches.match('./index.html'))))});
