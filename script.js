document.addEventListener("DOMContentLoaded", function () {
  // Canvas
  var canvas = document.getElementById("main");
  var ctx = canvas.getContext("2d");
  var painting = false;

  // Set initial brush color and size
  var brushColor = "#000000"; // default to black
  var brushSize = 5;

  // Event listeners
  canvas.addEventListener("mousedown", startPosition);
  canvas.addEventListener("mouseup", endPosition);
  canvas.addEventListener("mousemove", draw);

  // Button event listeners
  document.getElementById("new").addEventListener("click", clearCanvas);
  document.getElementById("erase").addEventListener("click", setEraser);
  document.getElementById("black").addEventListener("click", function () {
    setBrushColor("#000000");
  });
  document.getElementById("pink").addEventListener("click", function () {
    setBrushColor("#F50057");
  });
  document.getElementById("blue").addEventListener("click", function () {
    setBrushColor("#2979FF");
  });
  document.getElementById("yellow").addEventListener("click", function () {
    setBrushColor("#FFD600");
  });

  // Slider event listener
  var slider = document.getElementById("slider");
  var brushSizeDisplay = document.getElementById("brushSize");
  slider.addEventListener("input", function () {
    brushSize = this.value;
    brushSizeDisplay.textContent = brushSize;
  });

  // Functions
  function startPosition(e) {
    painting = true;
    draw(e);
  }

  function endPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    if (!painting) return;

    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = brushColor;

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function setEraser() {
    brushColor = "#ffffff"; // white color for eraser
    brushSize = 10; // set an appropriate size for eraser
    brushSizeDisplay.textContent = brushSize;
  }

  function setBrushColor(color) {
    brushColor = color;
  }
});
