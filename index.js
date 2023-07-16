function receivesAFunction(callback) {
    callback();
  }

  function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is a named function.");
    }
    return namedFunction;
  }

  function returnsAnAnonymousFunction() {
    // Define an anonymous function
    return function() {
      // Code for the anonymous function
      console.log("This is an anonymous function.");
    };
  }
