const express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.json({
    status: "✅ LIVE",
    project: "Tap-Bomba-API-Key",
    message: "Deployment Successful - Key is Secure!",
    keyStatus: process.env.TAP_BOMBA_API_KEY ? "Key Loaded Securely 🔒" : "Add key in Vercel Settings"
  });
});

module.exports = app;
