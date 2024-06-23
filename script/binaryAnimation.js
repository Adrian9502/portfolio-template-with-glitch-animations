export function binaryAnimation() {
  const canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d");

  // Setting the width and height of the canvas
  const parent = canvas.parentElement;

  // Set canvas width and height to match parent
  canvas.width = parent.clientWidth;
  canvas.height = parent.clientHeight;

  // Setting up the letters
  let numbers = "10101010101010";
  numbers = numbers.split("");

  // Setting up the columns
  var fontSize = 16,
    columns;

  // Setting up the drops
  var drops = [];
  initializeDrops();

  function initializeDrops() {
    columns = canvas.width / fontSize;
    for (var i = 0; i < columns; i++) {
      drops[i] = 1;
    }
  }

  // Setting up the draw function
  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, .1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < drops.length; i++) {
      var text = numbers[Math.floor(Math.random() * numbers.length)];
      ctx.fillStyle = "#b026ff";
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      drops[i]++;
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
        drops[i] = 0;
      }
    }
  }

  // Loop the animation
  setInterval(draw, 100);
}

