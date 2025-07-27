
<!-- Firebase Scripts -->
<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"></script>
<script>
  const firebaseConfig = {
    apiKey: "AIzaSyDeStwcK3nJQdmLXtyWUZ52E30abBUAYBA",
    authDomain: "apnaskillsena.firebaseapp.com",
    databaseURL: "https://apnaskillsena-default-rtdb.firebaseio.com",
    projectId: "apnaskillsena",
    storageBucket: "apnaskillsena.firebasestorage.app",
    messagingSenderId: "149529300642",
    appId: "1:149529300642:web:2e07cdea6e7933133491fb"
  };
  const app = firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
</script>

function checkGameAccess(pageKey, redirectTo = "dashboard.html") {
  const settings = JSON.parse(// localStorage removed - replaced by FirebasegetItem("game_status_settings"));

  if (!settings || settings[pageKey] === "off") {
    alert("❌ Ye feature abhi band hai!");
    window.location.href = redirectTo;
  }
}