var quotes= [
  'Agoraphilia' <img src=Agoraphilia.jpg alt=Agoraphilia>,
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

function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
