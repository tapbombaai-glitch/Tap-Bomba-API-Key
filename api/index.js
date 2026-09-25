// api/index.js - TAP BOMBA REAL API

export default function handler(req, res) {
  // ========== CORS ==========
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // ========== GET - Status ==========
  if (req.method === "GET") {
    return res.status(200).json({
      status: "✅ TAP BOMBA API LIVE!",
      version: "1.0.0",
      endpoints: {
        "GET /api": "Check if API dey live",
        "POST /api": "Generate new API Key - send { username }"
      },
      joke: "Why the bomb no go school? E don already blow class! 💣😂"
    });
  }

  // ========== POST - Generate API Key ==========
  if (req.method === "POST") {
    try {
      // Safe body parsing
      let body = req.body;
      if (typeof body === "string") {
        body = JSON.parse(body);
      }
      body = body || {};

      const username = body.username || "Bomba Player";

      // Generate API Key
      const randomPart =
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

      const apiKey = `TAP_BOMBA_\( {randomPart.toUpperCase()}_ \){Date.now()}`;

      return res.status(200).json({
        success: true,
        username,
        apiKey,
        message: "Save this API Key! You go need am for game.",
        expires: "Never"
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message || "Something went wrong"
      });
    }
  }

  // ========== Other methods ==========
  return res.status(405).json({
    success: false,
    error: "Method not allowed"
  });
}