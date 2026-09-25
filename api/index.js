export default function handler(req, res) {
  const jokes = [
    { id: 1, joke: "Why did the bomb go to school? E wan be TOP of the class! 💣📚" },
    { id: 2, joke: "My brother say e be bomber... na only for kitchen e dey bomb food! 😂🍲" },
    { id: 3, joke: "Vercel error bomb my head yesterday — today I bomb am back with LIVE! 💥" },
    { id: 4, joke: "Why Port Harcourt guys no dey fear bomb? Because their laugh louder! 🔊" },
    { id: 5, joke: "Top Bomber no be person wey dey explode — na person wey dey explode with jokes! 🤣" }
  ];
  
  const random = jokes[Math.floor(Math.random() * jokes.length)];
  
  res.status(200).json({
    platform: "TOP BOMBER JOKE PLATFORM 💣😂",
    joke_of_the_day: random,
    all_jokes: jokes,
    by: "Your Brother's Official Bomber"
  });
}
