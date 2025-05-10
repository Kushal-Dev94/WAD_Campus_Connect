const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const db = new sqlite3.Database('./data.db');

// Serve static files (PDFs)
app.use('/pdfs', express.static(path.join(__dirname, 'pdfs')));

// API to fetch PDF metadata
app.get('/api/pdfs', (req, res) => {
  db.all('SELECT * FROM pdfs', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
