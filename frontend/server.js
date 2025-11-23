const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const axios = require('axios');

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/submit', async (req, res) => {
  try {
    const response = await axios.post('http://127.0.0.1:6000/api/submit', req.body);

    res.json(response.data);
  } catch (error) {
    console.error("❌ Error connecting to Flask backend:", error.message);
    res.status(500).json({ error: "Backend unreachable" });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Frontend running on http://localhost:${PORT}`);
});
