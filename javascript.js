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

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
