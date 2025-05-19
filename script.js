/* global fabric */

const CANVAS_WIDTH = 700;
const CANVAS_HEIGHT = 500;

// Wait for the DOM to be fully loaded (good practice, though often works without)
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Fabric.js on the canvas element with id 'c'
  const canvas = new fabric.Canvas("c");

  canvas.setWidth(CANVAS_WIDTH);
  canvas.setHeight(CANVAS_HEIGHT);


  const circle = new fabric.Circle({
    absolutePositioned: true,
    objectCaching: false,
    radius: 200,
    left: CANVAS_WIDTH / 2,
    top: CANVAS_HEIGHT / 2,
    originX: "center",
    originY: "center",
  });

  canvas.add(circle);

  // Optional: log to console to confirm initialization
  console.log("fabric.js canvas initialized and objects added.");

  // You can now interact with the shapes (drag, resize, rotate)
});
