/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

// Boo Who

function booWho(bool) {
  // Checks if a value is classified as a Boolean primitive, returns true or false
  // Boolean primitives will be of type boolean, but Boolean objects will be type object
  if (typeof(bool) === "boolean") {
      //console.log("We have a boolean primitive!")
      return true;
  } else {
      //console.log("False - not a boolean primitive");
      return false;
  }
}

function booWhoTest() {
    // Test suite for booWho
    
    var inputs = [
        true,
        false,
        [1, 2, 3],
        [].slice,
        {"a":1},
        1,
        NaN,
        "a",
        "true",
        "false"
    ];
    var results = [
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ];
    
    for (var i = 0; i < inputs.length; i++) {
        var item = inputs[i];
        var test = booWho(item);
        var result = results[i];
        if (test == result) {
            console.log("PASS", item, "returned", result);
        } else {
            console.log("FAIL", item, "should return", result);
        }
    }
}

booWhoTest();
