// function randomColour() {
//   return '#'+Math.floor(Math.random()*16777215).toString(16);
// }

Colors = {};
Colors.names = {
    aqua: "#660099",
    blue: "#ffcc00",
    brown: "#ff6600",
    darkmagenta: "#4eee94",
    darkorange: "#0000ff",
    darkred: "#065535",
    darksalmon: "#003366",
    darkviolet: "#a6008e",
    fuchsia: "#2f444b",
    gold: "#b0e436",
    green: "#008000",
    indigo: "#6948f6",
    pink: "#e942b9",
    red: "#ff0000",
};

Colors.random = function() {
  var result;
  var count = 0;
  for (var prop in this.names)
      if (Math.random() < 1/++count)
         result = prop;
  return result;
};