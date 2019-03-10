var quotes= [
  'Emma',
  'Olivia',
  'Ava',
  'Isabella',
  'Sophia',
  'Mia',
  'Charlotte',
  'Amelia',
  'Evelyn',
  'Abigail',
  'Harper',
  'Emily',
  'Elizabeth',
  'Avery',
  'Jayden',
  'Liam',
  'Noah',
  'Elijah',
  'Logan',
  'Mason',
  'James',
  'Aiden',
  'Ethan',
  'Lucas',
  'Jacob',
  'Michael',
  'Matthew',
  'Benjamin',
  'Alexander',
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
