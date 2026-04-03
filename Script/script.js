let heartInterval;

// SHOW LOVE BUTTON
function showLove() {
  document.getElementById("loveBox").style.display = "flex";

  clearInterval(heartInterval);

  heartInterval = setInterval(() => {
    createHeartClick();
  }, 150);
}

// CLICK HEARTS
function createHeartClick() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.top = "100vh";
  heart.style.fontSize = (Math.random() * 25 + 15) + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

// BACKGROUND FLOATING HEARTS (ALWAYS)
setInterval(() => {
  const bgHeart = document.createElement("div");
  bgHeart.classList.add("bg-heart");
  bgHeart.innerHTML = "💗";

  bgHeart.style.left = Math.random() * 100 + "vw";
  bgHeart.style.fontSize = (Math.random() * 25 + 15) + "px";

  document.body.appendChild(bgHeart);

  setTimeout(() => {
    bgHeart.remove();
  }, 8000);
}, 300);

// STAR CURSOR EFFECT
document.addEventListener("mousemove", (e) => {
  const star = document.createElement("div");
  star.classList.add("star");
  star.innerHTML = "✨";

  star.style.left = e.clientX + "px";
  star.style.top = e.clientY + "px";

  document.body.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 1000);
});