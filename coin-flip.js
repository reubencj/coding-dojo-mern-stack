function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

const fiveFlipsPromise = new Promise((reslove, reject) => {
  let headCount = 0;
  let attempts = 0;

  while (headCount < 5 && attempts < 101) {
    attempts++;
    tossCoin() === "heads" ? headCount++ : (headCount = 0);
  }

  if (headCount > 4) {
    reslove(`the coin has flipped 5 heads in a row with ${attempts} attempts`);
  } else if (attempts > 99) {
    reject(
      `the coin did not flip heads 5 times in a row in ${attempts} attempts`
    );
  }
});

fiveFlipsPromise
  .then((res) => console.log(res))
  .catch((res) => console.log(res));
