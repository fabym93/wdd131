(function () {
  // -------------------------------
  // Footer dates
  // -------------------------------
  var yearSpan = document.getElementById("currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  var lm = document.getElementById("lastModified");
  if (lm) {
    lm.textContent = "Last Modified: " + document.lastModified;
  }

  // -------------------------------
  // Weather / Wind Chill
  // -------------------------------

  // Static values (must match HTML)
  var temperature = 10; // °C
  var windSpeed = 5;    // km/h

  var windChillElement = document.getElementById("windChill");

  function calculateWindChill(temp, speed) {
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(speed, 0.16) +
      0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
  }

  if (windChillElement) {
    if (temperature <= 10 && windSpeed > 4.8) {
      windChillElement.textContent =
        calculateWindChill(temperature, windSpeed) + " °C";
    } else {
      windChillElement.textContent = "N/A";
    }
  }
})();

