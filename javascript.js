var quotes= [
  'Agoraphilia',
  'Asphyxiation',
  'Autoerotic Asphyxiation',
  'Autagonistophilia',
  'Blindfolds',
  'Bondage',
  'Breath Play',
  'Cuckhold',
  'Dacryphilia',
  'Electric Play',
  'Exhibitionism',
  'Gags',
  'Hematolagnia',
  'Intercrural',
  'Knife Play',
  'Latex/Rubber',
  'Masochism',
  'Odaxelagnia',
  'Omorashi',
  'Orgasm Denial',
  'Sadism',
  'Sensation Play',
  'Sensory Deprivation',
  'Spanking',
  'Stigmatophilia',
  'Stripping/Strip Tease',
  'Stockings',
  'Suspension',
  'Technophilia',
  'Telephonicophilia',
  'Threesome/Foursome/Moresome',
  'Uniforms',
  'Vincilagnia',
  'Voyeurism',
  'Watersports (Urophilia)',
  'Wax Play',
  'Weapon Fetish',
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

// Hide all elements with class="tabcontent" by default */
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
  tabcontent[i].style.display = "none";
}

// Remove the background color of all tablinks/buttons
tablinks = document.getElementsByClassName("tablink");
for (i = 0; i < tablinks.length; i++) {
  tablinks[i].style.backgroundColor = "";
}

// Show the specific tab content
document.getElementById(pageName).style.display = "block";

// Add the specific color to the button used to open the tab content
elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
