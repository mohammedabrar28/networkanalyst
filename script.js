const needle = document.getElementById("needle");
const speedText = document.getElementById("speed");
const pingText = document.getElementById("ping");
const downloadText = document.getElementById("download");
const uploadText = document.getElementById("upload");

function startTest() {
  let speed = 0;
  let maxSpeed = Math.floor(Math.random() * 120) + 20;

  pingText.textContent = Math.floor(Math.random() * 50) + 10;

  const interval = setInterval(() => {
    speed += 2;
    if (speed >= maxSpeed) {
      clearInterval(interval);
      downloadText.textContent = maxSpeed;
      uploadText.textContent = Math.floor(maxSpeed / 2);
    }

    speedText.textContent = speed;

    // rotate needle (-90deg to +90deg)
    let rotation = (speed / 150) * 180 - 90;
    needle.style.transform = `rotate(${rotation}deg)`;
  }, 50);
}
