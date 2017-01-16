/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

// Where Art Thou

function whatIsInAName(collection, source) {
  // Inputs an array of objects (collection) and checks for any objects containing the key-value pair given by source
  // Outputs an array of the matching objects
  var matchArr = [];
  var keysArr = Object.keys(source);
  var keysToMatch = keysArr.length;

  for (var i = 0; i< collection.length; i++) {
      var counter = 0;
      for (var j = 0; j < keysArr.length; j++) {
          var key = keysArr[j];
          if (collection[i][key] === source[key]) {
              counter++;
          }
      }
      if (counter === keysToMatch) {
          matchArr.push(collection[i]);
      }
  }
  return matchArr;
}

function whatIsInANameTest() {
    // Test suite for whatIsInAName
    var inputs = [
        [[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }],
        [[{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }],
        [[{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }],
        [[{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }]
    ];
    var results = [
        [{ first: "Tybalt", last: "Capulet" }],
        [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }],
        [{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }],
        [{ "a": 1, "b": 2, "c": 2 }]
    ];
    
    for (var i = 0; i < inputs.length; i++) {
        var item = inputs[i];
        var test = whatIsInAName(inputs[i][0], inputs[i][1]);
        var result = results[i];
        if (JSON.stringify(test) == JSON.stringify(result)) {
            console.log("PASS", item, "returned", result);
        } else {
            console.log("FAIL", item, "should return", result);
        }
    }
}

whatIsInANameTest();
