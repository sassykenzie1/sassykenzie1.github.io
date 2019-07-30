// coded by @ChaituVR

const projectName = 'technical-docs-page';
localStorage.setItem('example_project', 'Technical Docs Page');

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
