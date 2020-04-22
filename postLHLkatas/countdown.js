function countdownGenerator(x) {
  y = 4;

  return function (x) {
    y -= 1;
    if (y > 0) {
      console.log("T-minus " + y + "...");
    } else if (y === 0) {
      console.log("Blast Off!");
    } else {
      console.log("Rockets already gone, bub!");
    }
  };
}

const countdown = countdownGenerator();
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
