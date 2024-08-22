function step1() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('Step 1 complete');
      resolve();
    }, 1000);
  });
}

function step2() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('Step 2 complete');
      resolve();
    }, 500);
  });
}

function step3() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      console.log('Step 3 complete');
      resolve();
    }, 800);
  });
}

async function executeSteps() {
  try {
    await step1();
    await step2();
    await step3();
    console.log('All steps completed');
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

executeSteps();
