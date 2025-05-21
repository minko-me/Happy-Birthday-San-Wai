const heart = document.getElementById("heart");
const message = document.getElementById("message");
let clicked = false;

heart.addEventListener("click", () => {
  if (clicked) return;
  clicked = true;

  message.innerHTML = `
    <strong>Happy Birthday San Wai 💗</strong><br>
    "On Your Special Day "<br>
    "I just want you to know you truly are perfect."
  `;
  message.style.opacity = 1;

  // Start animation
  startFalling();
});

function startFalling() {
  const canvas = document.getElementById("falling");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const petals = Array.from({ length: 60 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    r: Math.random() * 5 + 5,
    speed: Math.random() * 2 + 1,
    drift: Math.random() * 1 - 0.5
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "pink";
    petals.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      p.y += p.speed;
      p.x += p.drift;
      if (p.y > canvas.height) {
        p.y = -10;
        p.x = Math.random() * canvas.width;
      }
    });
    requestAnimationFrame(draw);
  }
  draw();
}