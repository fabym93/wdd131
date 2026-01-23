(function () { 
// Update year in footer 
var yearSpan = document.getElementById('currentyear'); 
if (yearSpan) { 
var now = new Date(); 
yearSpan.textContent = now.getFullYear(); 
} 

// Update last modified date 
var lm = document.getElementById('lastModified'); 
if (lm) { 
lm.textContent = 'Last Modified: ' + document.lastModified; 
} 
})