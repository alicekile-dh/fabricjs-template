/* global fabric */

const CANVAS_WIDTH = 700;
const CANVAS_HEIGHT = 500;

// Wait for the DOM to be fully loaded (good practice, though often works without)
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Fabric.js on the canvas element with id 'c'
  const canvas = new fabric.Canvas("c");

  canvas.setWidth(CANVAS_WIDTH);
  canvas.setHeight(CANVAS_HEIGHT);

  const demoImg = "https://fabricjs.github.io/assets/pug.jpg";

  const radius = 200;

  const group = new fabric.Group();

  const circle = new fabric.Circle({
    absolutePositioned: true,
    objectCaching: false,
    radius,
    left: CANVAS_WIDTH / 2,
    top: CANVAS_HEIGHT / 2,
    originX: "center",
    originY: "center",
  });

  canvas.add(circle);
  fabric.Image.fromURL(demoImg).then((img) => {
    img.set({
      dirty: true,
      scaleX: 0.4,
      scaleY: 0.4,
    });

    img.clipPath = circle;

    canvas.centerObject(img);

    canvas.add(img);
    canvas.setActiveObject(img);
  });

  // Optional: log to console to confirm initialization
  console.log("fabric.js canvas initialized and objects added.");

  // You can now interact with the shapes (drag, resize, rotate)
});
