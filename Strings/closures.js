function outer() {
    let outerVar = 'I am from outer scope';
    function inner() {
      console.log(outerVar); // Accesses outerVar from outer scope
    }
    return inner;
  }
  
  const innerFunc = outer();
  innerFunc(); // Logs: I am from outer scope
  