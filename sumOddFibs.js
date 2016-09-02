/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

// Sum All Odd Fibonacci Numbers

function sumFibs(num) {
  // Inputs an integer, sums all the odd Fibonacci numbers <= the given number
  var fibbySum;
  var sumArr;

  function fibGenerator(num) {
      var fibArr = [1];
      var prev = 0;
      var current = 1;
      var tempSum = prev + current;
      while (tempSum <= num) {
          fibArr.push(tempSum);
          prev = current;
          current = tempSum;
          tempSum = prev + current;
      }
      return fibArr;
  }

  sumArr = fibGenerator(num).filter(function(val){
     return val % 2 === 1;
  });

  fibbySum = sumArr.reduce(function(prevVal, currVal) {
      return prevVal + currVal;
  });

  //console.log(fibbySum);
  return fibbySum;
}

function sumFibsTest() {
    // Test suite for sumFibs
    
    var inputs = [
        1000,
        4000000,
        4,
        75024,
        75025
    ];
    var results = [
        1785,
        4613732,
        5,
        60696,
        135721
    ];
    
    // Type test
    var item1 = 1;
    var test1 = sumFibs(item1);
    var result1 = "number";
    if (typeof(test1) == result1) {
        console.log("PASS", item1, "returned", result1);
    } else {
        console.log("FAIL", item1, "should return a", result1);
    }
    
    for (var i = 0; i < inputs.length; i++) {
        var item = inputs[i];
        var test = sumFibs(item);
        var result = results[i];
        if (test == result) {
            console.log("PASS", item, "returned", result);
        } else {
            console.log("FAIL", item, "should return", result);
        }
    }
}

sumFibsTest();
