const express = require('express');
const cors = require('cors');
const uuid = require('uuid');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors());

let quotes = [
  {
    id: uuid(),
    author: 'Dr. Seuss',
    text: "Don't cry because it's over, smile because it happened.",
    apocryphal: false,
  },
  {
    id: uuid(),
    author: 'Frank Zappa',
    text: "So many books, so little time.",
    apocryphal: false,
  },
  {
    id: uuid(),
    author: 'Oscar Wilde',
    text: "Be yourself; everyone else is already taken.",
    apocryphal: false,
  },
];

function getAllQuotes(req, res) {
  res.json(quotes);
}

function getQuoteById(req, res) {
  res.json(quotes.find(friend => friend.id === req.params.id));
}

function postNewQuote(req, res) {
  const quote = { id: uuid(), ...req.body, apocryphal: false };
  quotes.push(quote);
  res.json(quote);
}

function deleteQuoteById(req, res) {
  quotes = quotes.filter(friend => friend.id !== req.params.id);
  res.json(req.params.id);
}

function replaceQuoteById(req, res) {
  quotes = quotes.filter(friend => friend.id !== req.params.id);
  const friend = { id: req.params.id, ...req.body };
  quotes.push(friend);
  res.json(friend);
}

function login(req, res) {
  const { username, password } = req.body;
  if (username === 'admin' && password === '1234') {
    const token = jwt.sign({ userId: 'abcd' }, 'shhhhh');
    res.json({ token });
  } else {
    res.status(401).end();
  }
}

app.post('/login', login);
app.get('/api/quotes', getAllQuotes);
app.get('/api/quotes/:id', getQuoteById);
app.post('/api/quotes', postNewQuote);
app.delete('/api/quotes/:id', deleteQuoteById);
app.put('/api/quotes/:id', replaceQuoteById);

app.listen(5000, () => console.log(
  'Quotes server listening on port 5000!',
));
