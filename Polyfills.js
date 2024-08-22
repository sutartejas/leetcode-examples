//Pollyfill for Filter 
Array.prototype.myFilter = function (callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr;
};

//Pollyfill for Reduce 
Array.prototype.myReduce = function (callback, initialValue) {
    let acc = initialValue;
    for (let i = 0; i < this.length; i++) {
        acc = acc ? callback(acc, this[i]) : this[i];
    }
    return acc;
};

//Pollyfill for ReduceRight 
Array.prototype.myReduceRight = function (callback, initialValue) {
    let acc = initialValue;
    for (let i = this.length - 1; i >= 0; i--) {
        acc = acc ? callback(acc, this[i]) : this[i];
    } return acc;
};

//Pollyfill for ForEach 
Array.prototype.myForEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

//Pollyfill for flat 
Array.prototype.myFlat = function (depth) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i]) && depth > 0) {
            arr.push(...this[i].myFlat(depth - 1));

        } else {
            arr.push(this[i]);
        }
    }
    return arr;
};

//Pollyfill for Map 
Array.prototype.myMap = function (callback) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i]));
    }
    return arr;
};

//Pollyfill for concat 
Array.prototype.myConcat = function (...arrays) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(this[i]);
    }
    for (const array of arrays) {
        if (Array.isArray(array)) {
            for (let i = 0; i < array.length; i++) {
                result.push(array[i]);
            }
        }
        else {
            result.push(array);
        }
    }
    return result;
};

//Pollyfill for splice 
Array.prototype.mySplice = function (start, deleteCount, ...items) {
    const array = this;
    const length = array.length;

    let startIndex = start < 0 ? Math.max(length + start, 0) : Math.min(start, length);
    let actualDeleteCount = Math.min(Math.max(deleteCount, 0), length - startIndex);

    const removedElements = array.slice(startIndex, startIndex + actualDeleteCount);
    // Remove elements from the array 
    array.length = startIndex;
    // Insert new elements at the specified index
    for (let i = 0; i < items.length; i++) {
        array[startIndex + i] = items[i];
    }
    return removedElements;
};

//Pollyfill for slice 
Array.prototype.mySlice = function (start, end) {
    let array = this;
    let result = [];
    let length = array.length;

    let startIndex = start || 0;
    let endIndex = end < 0 ? length : end;

    for (let i = startIndex; i < endIndex; i++) {
        result.push(array[i]);

    }
    return result;
};

Promise.myAll = function (promiseArr) {
    let result = [];
    let counter = 0;
    return new Promise((resolve, reject) => {
        promiseArr.forEach((promise, index) => {
            promise.then((res) => {
                result[index] = res;
                counter = counter + 1;
                if (counter === promiseArr.length) {
                    resolve("success");
                }
            }).catch((err) => {
                reject(err);
            });
        });
    });
};

Promise.myAllSettled = function (promiseArr) {
    let wrappedPromise = promiseArr.map((promise) => {
        Promise.resolve(promise)
            .then((val) => ({ status: "fullfilled", value: val }))
            .catch((err) => ({ status: "Rejected", reason: err }));
    });
    return Promise.all(wrappedPromise);
};

Promise.myAny = function (promiseArr) {
    let errorOutput = new Array(promiseArr.length);
    let counter = 0;
    return new Promise((resolve, reject) => {
        promiseArr.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(resolve) // resolve outer promise, as and when any of the input promises resolves 
                .catch((error) => {
                    errorOutput[index] = error;
                    counter = counter + 1;
                    if (counter === promiseArr.length) {
                        // all promises rejected, reject outer promise reject(errorOutput); }
                    }
                });
        });
    });
};

Promise.myRace = function (promiseArr) {
    return new Promise((resolve, reject) => {
        promiseArr.forEach((promise) => {
            Promise.resolve(promise)
                .then(resolve) // resolve outer promise, as and when any of the input promise resolves 
                .catch(reject); // reject outer promise, as and when any of the input promise rejects }); 
        });
    });
}


Function.prototype.myCall = function (obj, ...args) {
    if (typeof this !== "function")
        return new Error("Not callable");
    obj.Fn = this;
    obj.Fn(...args);
};

Function.prototype.myApply = function (obj, ...args) {
    if (typeof this !== "function")
        return new Error("Not callable");
    if (!Array.isArray(args))
        return new Error("Not Array");
    obj.Fn = this;
    obj.Fn(...args);
};

Function.prototype.myBind = function (obj, ...args1) {
    if (typeof this !== "function")
        return new Error("Not callable");
    obj.Fn = this;
    return function (...args2) {
        obj.Fn(...args1, ...args2);
    };
};

