// Auto-play romantic background music
window.addEventListener("DOMContentLoaded", () => {
  const music = document.getElementById("bgMusic");

  const playPromise = music.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // If autoplay is blocked, play on user click
      document.body.addEventListener("click", () => {
        music.play();
      }, { once: true });
    });
  }
});

// Heart rain animation using emoji ❤️
function createHeartRain() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 20 + "px";
  document.getElementById("heartRain").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Start creating hearts every 300ms
setInterval(createHeartRain, 300);
