const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Update if your MySQL has a password
  database: 'bengaluru_db',
});

// Connect to DB
db.connect((err) => {
  if (err) {
    console.error('❌ MySQL connection failed:', err);
  } else {
    console.log('✅ Connected to MySQL database');
  }
});

// =========================
// 🔹 Bengaluru Assets APIs
// =========================

// 1️⃣ Get all Bengaluru assets
app.get('/api/assets/bengaluru', (req, res) => {
  db.query('SELECT * FROM bengaluru_assets', (err, results) => {
    if (err) {
      console.error('❌ Error fetching Bengaluru assets:', err);
      return res.status(500).json({ error: 'Error fetching Bengaluru assets' });
    }
    res.json(results);
  });
});

// 2️⃣ Add Bengaluru asset
app.post('/api/assets/bengaluru', (req, res) => {
  const {
    employeeId, employeeName, os, systemName, model, processor, ram, storage,
    adapterType, adapterSerial, mouseType, mouseSerial,
    headsetType, headsetSerial, bag, location, assignedDate
  } = req.body;

  const query = `
    INSERT INTO bengaluru_assets (
      employeeId, employeeName, os, systemName, model, processor, ram, storage,
      adapterType, adapterSerial, mouseType, mouseSerial,
      headsetType, headsetSerial, bag, location, assignedDate
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [
    employeeId, employeeName, os, systemName, model, processor, ram, storage,
    adapterType, adapterSerial, mouseType, mouseSerial,
    headsetType, headsetSerial, bag, location, assignedDate
  ], (err) => {
    if (err) {
      console.error('❌ Error inserting Bengaluru asset:', err);
      return res.status(500).json({ error: 'Error inserting Bengaluru asset' });
    }
    res.status(201).json({ message: '✅ Bengaluru asset added successfully' });
  });
});

// 3️⃣ Delete Bengaluru asset
app.delete('/api/assets/bengaluru/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM bengaluru_assets WHERE id = ?', [id], (err) => {
    if (err) {
      console.error('❌ Error deleting Bengaluru asset:', err);
      return res.status(500).json({ error: 'Error deleting Bengaluru asset' });
    }
    res.json({ message: '✅ Bengaluru asset deleted successfully' });
  });
});

// ============================
// 🔸 Returned Assets APIs
// ============================

// 4️⃣ Get all returned assets
app.get('/api/assets/return', (req, res) => {
  db.query('SELECT * FROM returned_assets', (err, results) => {
    if (err) {
      console.error('❌ Error fetching returned assets:', err);
      return res.status(500).json({ error: 'Error fetching returned assets' });
    }
    res.json(results);
  });
});


// Delete returned asset
app.delete('/api/assets/return/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM returned_assets WHERE id = ?', [id], (err) => {
    if (err) {
      console.error('Error deleting returned asset:', err);
      return res.status(500).json({ error: 'Error deleting returned asset' });
    }
    res.json({ message: 'Returned asset deleted successfully' });
  });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
