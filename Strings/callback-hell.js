function step1(callback) {
    setTimeout(function () {
        console.log('Step 1 complete');
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(function () {
        console.log('Step 2 complete');
        callback();
    }, 500);
}

function step3(callback) {
    setTimeout(function () {
        console.log('Step 3 complete');
        callback();
    }, 800);
}

step1(function () {
    step2(function () {
        step3(function () {
            console.log('All steps completed');
        });
    });
});
