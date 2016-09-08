/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

// Sum All Primes

function sumPrimes(num) {
  // Inputs integer, sums all primes up to the given number (inclusive of that number if it's a prime)
  var primey;
  var primeArr = [];

  for (var i = 2; i <= num; i++) {
      var factors = [];
      for (var j = 2; j <= Math.round(Math.sqrt(i)); j++) {
          if (i % j === 0) {
              factors.push(j);
          }
      }
      if (factors.length < 1) {
          primeArr.push(i);
      }
  }
  primey = primeArr.reduce(function(prevVal, currVal) {
      return prevVal + currVal;
  });

  //console.log(primey);
  return primey;
}

function sumPrimesTest() {
    // Test suite for sumPrimes
    
    var inputs = [
        10,
        977
    ];
    var results = [
        17,
        73156
    ];
    
    // Type test
    var item1 = 10;
    var test1 = sumPrimes(item1);
    var result1 = "number";
    if (typeof(test1) == result1) {
        console.log("PASS", item1, "returned", result1);
    } else {
        console.log("FAIL", item1, "should return a", result1);
    }
    
    for (var i = 0; i < inputs.length; i++) {
        var item = inputs[i];
        var test = sumPrimes(item);
        var result = results[i];
        if (test == result) {
            console.log("PASS", item, "returned", result);
        } else {
            console.log("FAIL", item, "should return", result);
        }
    }
}

sumPrimesTest();
