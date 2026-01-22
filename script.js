const SECRET = "iloveyou";

/* Floating hearts */
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}, 500);

function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === SECRET) {
    document.getElementById("login").style.display = "none";
    document.getElementById("main").style.display = "block";
    document.getElementById("bgMusic").play();
  } else {
    document.getElementById("error").innerText = "Wrong password 💔";
  }
}

function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

const music = document.getElementById('bgMusic');
music.play();  // call after login check
