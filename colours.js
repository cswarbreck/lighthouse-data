var coloursArray = [
"#ff00ff",
"#4000ff", 
"#0000ff",
"#0080ff",
"#00bfff",
"#00ffbf",
"#00ff80",
"#40ff00",
"#bfff00",
"#ffff00",
"#ff8000",
"#ff4000",
"#ff0000",
"#ff0080",
"#ff0040",
"#8000ff", 
"#0000ff",
];

function returnAColour() {
  colour = coloursArray.shift();
  return colour;
}

returnAColour();
