
var deferredPrompt;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function() {
      alert('Service worker registered!');
    }).catch((error) => {
      alert('Service worker not registered!');
      console.log(`error on register service worker `,error);
    });
} else {
  alert('Service worker not registered!');
}

window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});