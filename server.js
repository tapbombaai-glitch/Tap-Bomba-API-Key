// Tap Bomba API Key - Secure Version
require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
// The key is hidden in .env, NOT in this file
const API_KEY = process.env.TAP_BOMBA_API_KEY;

app.get("/", (req, res) => {
  res.json({
    status: "✅ LIVE",
    project: "Tap-Bomba-API-Key",
    message: "API is secured! Key is not exposed on GitHub",
    keyStatus: API_KEY ? "Key Loaded Securely" : "No Key - Add it in deploy settings"
  });
});

app.listen(PORT, () => console.log(`🚀 Running on ${PORT}`));
