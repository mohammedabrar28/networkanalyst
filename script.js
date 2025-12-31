function checkSecurity() {
  let score = 0;

  // HTTPS check
  if (location.protocol === "https:") {
    https.textContent = "YES";
    https.className = "ok";
    score += 20;
  } else {
    https.textContent = "NO";
    https.className = "bad";
  }

  // Online check
  if (navigator.onLine) {
    online.textContent = "ONLINE";
    online.className = "ok";
    score += 20;
  } else {
    online.textContent = "OFFLINE";
    online.className = "bad";
  }

  // Connection type
  if (navigator.connection) {
    connection.textContent = navigator.connection.effectiveType.toUpperCase();
    score += 20;
  } else {
    connection.textContent = "UNKNOWN";
  }

  // Cookies
  if (navigator.cookieEnabled) {
    cookies.textContent = "ENABLED";
    cookies.className = "ok";
    score += 20;
  } else {
    cookies.textContent = "DISABLED";
    cookies.className = "warn";
  }

  // VPN / Proxy (basic heuristic)
  vpn.textContent = "UNKNOWN";
  vpn.className = "warn";
  score += 20;

  document.getElementById("score").textContent = score + "%";
    }
