/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

// Sorted Union

function uniteUnique(arr) {
  // Inputs two or more arrays of numbers. Returns all the numbers from those arrays with no duplicates, in order they were received
  var union = [];

  for (var i = 0; i < arguments.length; i++) {
      for (var j = 0; j < arguments[i].length; j++) {
          if (union.indexOf(arguments[i][j]) < 0) {
              union.push(arguments[i][j]);
          }
      }
  }
  //console.log(union);
  return union;
}

function uniteUniqueTest() {
    // Test suite for uniteUnique
    
    var item1 = '[1, 3, 2], [5, 2, 1, 4], [2, 1]';
    var test1 = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
    var result1 = [1, 3, 2, 5, 4];
    if (JSON.stringify(test1) == JSON.stringify(result1)) {
        console.log("PASS", item1, "returned", result1);
    } else {
        console.log("FAIL", item1, "should return", result1);
    }
    
    var item2 = '[1, 3, 2], [1, [5]], [2, [4]]';
    var test2 = uniteUnique([1, 3, 2], [1, [5]], [2, [4]]);
    var result2 = [1, 3, 2, [5], [4]];
    if (JSON.stringify(test2) == JSON.stringify(result2)) {
        console.log("PASS", item2, "returned", result2);
    } else {
        console.log("FAIL", item2, "should return", result2);
    }
    
    var item3 = '[1, 2, 3], [5, 2, 1]';
    var test3 = uniteUnique([1, 2, 3], [5, 2, 1]);
    var result3 = [1, 2, 3, 5];
    if (JSON.stringify(test3) == JSON.stringify(result3)) {
        console.log("PASS", item3, "returned", result3);
    } else {
        console.log("FAIL", item3, "should return", result3);
    }
    
    var item4 = '[1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]';
    var test4 = uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
    var result4 = [1, 2, 3, 5, 4, 6, 7, 8];
    if (JSON.stringify(test4) == JSON.stringify(result4)) {
        console.log("PASS", item4, "returned", result4);
    } else {
        console.log("FAIL", item4, "should return", result4);
    }
}

uniteUniqueTest();
