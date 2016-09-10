/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */
 
 // Smallest Common Multiple

function smallestCommons(arr) {
  // Inputs an array of two numbers. Finds and returns the smallest common multiple of those two numbers that is also
  // divisible by all the numbers between the given two numbers
  var big = Math.max(arr[0], arr[1]);
  var small = (arr[0] < big) ? arr[0]: arr[1];
  var span = [];
  var guess = big;
  var result;

  // Create array to hold two input numbers and all integers between them
  for (var i = small; i <= big; i++) {
      span.push(i);
  }

  // Tests a guess to see if it is divisible by all the numbers
  while (true) {
      var factors = span.filter(function(val){
          return (guess % val === 0);
      });
      if (factors.length === span.length) {
          result = guess;
          break;
      } else {
          guess++;
      }
  }
  //console.log(result);
  return result;
}

function smallestCommonsTest() {
    // Test suite for smallestCommons
    
    var inputs = [
        [1, 5],
        [5, 1],
        [1, 13],
        [23, 18]
    ];
    var results = [
        60,
        60,
        360360,
        6056820
    ];
    
    // Type test
    var item1 = [1, 5];
    var test1 = smallestCommons(item1);
    var result1 = "number";
    if (typeof(test1) == result1) {
        console.log("PASS", item1, "returned", result1);
    } else {
        console.log("FAIL", item1, "should return a", result1);
    }
    
    for (var i = 0; i < inputs.length; i++) {
        var item = inputs[i];
        var test = smallestCommons(item);
        var result = results[i];
        if (test == result) {
            console.log("PASS", item, "returned", result);
        } else {
            console.log("FAIL", item, "should return", result);
        }
    }
}

smallestCommonsTest();
