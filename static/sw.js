// 설치 가능한 앱(PWA)으로 인식시키기 위한 최소 서비스워커. 오래된 화면/데이터가 남지 않도록 아무것도 저장하지 않고 그대로 통과시킨다.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => e.respondWith(fetch(e.request)));
