const firstPromise = new Promise((resolve, reject) => {
  let result = Math.random();
  if (result > 0.5) {
    resolve("The result is over .5 and is resolved");
  } else {
    reject("The result is under .5 and is rejected");
  }
});

firstPromise.then((res) => console.log(res)).catch((res) => console.log(res));

const secondPromise = new Promise((resolve, reject) => {
  const randTime = Math.random() * 10000;
  const maxTime = 30000;

  if (randTime < maxTime) {
    setTimeout(() => resolve("function has executed on time"), randTime);
  } else {
    setTimeout(() => reject("the function took too long"), maxTime);
  }
});

secondPromise
  .then((res) => console.log(res))
  .catch((res) => console.log(res))
  .finally(() => console.log("finally done"));
