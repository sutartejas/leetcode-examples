function checkIfExist(arr) {
    const set = new Set();

    for(let i = 0; i < arr.length; i ++) {
      const currValue = arr[i];

      if(set.has(currValue)) {
        return true
      }
      set.add(currValue / 2);
      set.add(currValue * 2);
   
    }
  return false;
};

const result = checkIfExist([10,2,5,3]);

console.log(result)