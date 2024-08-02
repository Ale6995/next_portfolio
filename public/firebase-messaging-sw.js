importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

// // Initialize the Firebase app in the service worker by passing in
// // your app's Firebase config object.
// // https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: 'AIzaSyDkWbpox6pgSSCKssriRIaqeiXLGBOHk68',
  authDomain: 'eh-leads',
  databaseURL: 'https://eh-leads.firebaseio.com',
  projectId: 'eh-leads',
  storageBucket: 'eh-leads.appspot.com',
  messagingSenderId: '442578864901',
  appId: '1:442578864901:web:e350eff1f60aef9d09456c',
  measurementId: 'G-0955HB4X7R',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage( (payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body:  payload.notification.body,
    icon: '/EHLogo.jpeg'}

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});