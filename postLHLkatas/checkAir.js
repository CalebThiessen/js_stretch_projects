const checkAir = function (samples, threshold) {
  let sampleSize = samples.length;
  let dirtyCount = 0;
  let i = 0;
  while (i < samples.length) {
    if (samples[i] === "dirty") {
      dirtyCount += 1;
    }
    ++i;
  }
  if (dirtyCount / sampleSize < threshold) {
    return "clean";
  } else {
    return "polluted";
  }
};
  
  console.log(checkAir(
    ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
    0.3
  ));
  
  console.log(checkAir(
    ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
    0.25
  ));
  
  console.log(checkAir(
    ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
    0.9
  ))