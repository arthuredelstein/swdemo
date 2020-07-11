self.addEventListener('activate', function(event) {
  event.waitUntil(self.clients.claim());
  console.log("hello from serviceworker");
});
