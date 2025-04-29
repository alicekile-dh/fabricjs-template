// Wait for the DOM to be fully loaded (good practice, though often works without)
document.addEventListener("DOMContentLoaded", function () {
	// Initialize Fabric.js on the canvas element with id 'c'
	const canvas = new fabric.Canvas("c");

	const rect = new fabric.Rect({
		left: 100, // Distance from left edge of canvas
		top: 50, // Distance from top edge of canvas
		fill: "red", // Fill color
		width: 150, // Width of rectangle
		height: 80, // Height of rectangle
		angle: 15 // Rotation angle in degrees
	});
	
	canvas.add(rect);

	canvas.renderAll();

	// Optional: log to console to confirm initialization
	console.log("fabric.js canvas initialized and objects added.");

	// You can now interact with the shapes (drag, resize, rotate)
});
