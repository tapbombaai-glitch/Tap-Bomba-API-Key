module.exports = (req, res) => {
  res.json({
    status: "✅ TOP BOMBER LIVE!",
    joke: "Why the bomb no go school? E don already blow class! 💣😂",
    api_key: process.env.TAP_BOMBA_API_KEY ? "🔒 Secured" : "Not set"
  });
}