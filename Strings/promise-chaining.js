function step1() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Step 1 complete');
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Step 2 complete');
      resolve();
    }, 500);
  });
}

function step3() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Step 3 complete');
      resolve();
    }, 800);
  });
}

step1()
  .then(step2)
  .then(step3)
  .then(function () {
    console.log('All steps completed');
  })
  .catch(function (error) {
    console.error('Error occurred:', error);
  });
