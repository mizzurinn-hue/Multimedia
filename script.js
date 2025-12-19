const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#FF0000";
ctx.fillRect(10, 10, 150, 50);

ctx.font = "20px Arial";
ctx.fillStyle = "white";
ctx.fillText("Canvas JS", 20, 45);