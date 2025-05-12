/* global fabric */

const CANVAS_WIDTH = 700;
const CANVAS_HEIGHT = 500;
let canvas;

let shouldClip = false;

function initialiseCanvas() {
  // Initialize Fabric.js on the canvas element with id 'c'
  canvas = new fabric.Canvas("c");

  canvas.setWidth(CANVAS_WIDTH);
  canvas.setHeight(CANVAS_HEIGHT);

  // Optional: log to console to confirm initialization
  console.log("fabric.js canvas initialized and objects added.");
}

function toggleClipping() {
  const container = canvas
    .getObjects()
    .find((obj) => obj.id === "image-container");
  const img = canvas.getObjects().find((obj) => obj.id === "key-visual");

  if (shouldClip) {
    img.clipPath = container;
  } else {
    img.clipPath = undefined;
  }

  canvas.renderAll();
}

function setupEvents() {
  const btnToggleClipping = document.querySelector("#btn-toggle-clipping");
  updateToggleClippingBtnText(btnToggleClipping);

  btnToggleClipping.addEventListener("click", () => {
    shouldClip = !shouldClip;
    updateToggleClippingBtnText(btnToggleClipping);
    toggleClipping();
  });
}

function updateToggleClippingBtnText(btnToggleClipping) {
  btnToggleClipping.textContent = `Toggle Clipping: ${shouldClip ? "On" : "Off"}`;
}

function draw() {
  const demoImg = "https://fabricjs.github.io/assets/pug.jpg";

  const radius = 200;

  const circle = new fabric.Circle({
    absolutePositioned: true,
    objectCaching: false,
    id: "image-container",
    radius,
    left: CANVAS_WIDTH / 2,
    top: CANVAS_HEIGHT / 2,
    originX: "center",
    originY: "center",
    selectable: false,
    evented: false,
  });

  canvas.add(circle);
  fabric.Image.fromURL(demoImg).then((img) => {
    img.set({
      id: "key-visual",
      dirty: true,
      scaleX: 0.4,
      scaleY: 0.4,
    });

    canvas.centerObject(img);

    canvas.add(img);
    canvas.setActiveObject(img);
  });
}

// Wait for the DOM to be fully loaded (good practice, though often works without)
document.addEventListener("DOMContentLoaded", function () {
  initialiseCanvas();
  setupEvents();
  draw();
});
