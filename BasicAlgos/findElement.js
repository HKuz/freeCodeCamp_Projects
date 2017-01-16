/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

 // Finders Keepers

function findElement(arr, func) {
  // Inputs an array, looks through each item and returns the first item that passes the input func truth test
  var passed = arr.filter(func);
  var num = passed[0];
  //console.log(num);
  return num;
}

function findElementTest() {
    // Test suite for findElement

    var inputs = [
        [[1,3,5,8,9,10], function(num) {return num % 2 === 0;}],
        [[1,3,5,9], function(num) {return num % 2 === 0;}]
    ];
    var results = [
        8,
        undefined
    ];

    for (var i = 0; i < inputs.length; i++) {
        var item = inputs[i];
        var test = findElement(item[0], item[1]);
        var result = results[i];
        if (test == result) {
            console.log("PASS", item, "returned", result);
        } else {
            console.log("FAIL", item, "should return", result);
        }
    }
}

findElementTest();
