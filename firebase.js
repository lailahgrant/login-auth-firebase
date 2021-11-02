{/* <script type="module"> */}
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCfAyb7INxl0u7Y9ha8VIT-gDqCybs_VI0",
    authDomain: "trial-db-ee9d4.firebaseapp.com",
    projectId: "trial-db-ee9d4",
    storageBucket: "trial-db-ee9d4.appspot.com",
    messagingSenderId: "440827449113",
    appId: "1:440827449113:web:960ffdfc600ac9a1493f88",
    measurementId: "G-GVC6NZV9GS"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
// </script>