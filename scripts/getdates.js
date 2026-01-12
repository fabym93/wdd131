// getdates.js
(function() {
  // 1) currentyear
  var yearSpan = document.getElementById('currentyear');
  if (yearSpan) {
    var now = new Date();
    yearSpan.textContent = now.getFullYear();
  }


  // 2) last modified date
  var lm = document.getElementById('lastModified');
  if (lm) {
    lm.innerHTML = 'Last Modified: ' + document.lastModified;
  }
})();