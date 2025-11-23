const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Set up middleware to serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public'))); 

// Define the root route to send the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Frontend running on http://localhost:${PORT}`);
});