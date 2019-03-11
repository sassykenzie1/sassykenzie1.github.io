var quotes= [
  'Asphyxiation',
  'Blindfolds',
  'Bondage',
  'Breath Play',
  'Electric Play',
  'Exhibitionism',
  'Gags',
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
  'Stockings',
  'Suspension',
  'Technophilia',
  'Telephonicophilia',
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

<button onclick="toggleCredits()" id="credit">Show credits</button>
