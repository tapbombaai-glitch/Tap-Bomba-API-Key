async function getBombaJoke() {
  const res = await fetch('https://tap-bomba-api-key.vercel.app/api');
  const data = await res.json();
  console.log(data.joke);
  // Put data.joke inside your HTML
  document.getElementById('joke-box').innerText = data.joke;
}

getBombaJoke();