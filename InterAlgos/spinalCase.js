/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

// Spinal Tap Case

function spinalCase(str) {
  // Inputs a string, converts to spinal case (all lowercase words joined by dashes)
  var spinalStr;
  var spaceScore = /\s|_/gi; // RE for spaces or underscores
  var camel = /([a-z])([A-Z])/g; // RE for grabbing the capital letters preceeded by a lowercase letter
  
  spinalStr = str.replace(camel, "$1-$2").replace(spaceScore, "-").toLowerCase();
  //console.log(spinalStr);
  return spinalStr;
}

function spinalCaseTest() {
    // Test suite for spinalCase
    
    var inputs = [
        "This Is Spinal Tap",
        "thisIsSpinalTap",
        "The_Andy_Griffith_Show",
        "Teletubbies say Eh-oh",
        "AllThe-small Things"
    ];
    var results = [
        "this-is-spinal-tap",
        "this-is-spinal-tap",
        "the-andy-griffith-show",
        "teletubbies-say-eh-oh",
        "all-the-small-things"
    ];
    
    for (var i = 0; i < inputs.length; i++) {
        var item = inputs[i];
        var test = spinalCase(item);
        var result = results[i];
        if (test == result) {
            console.log("PASS", item, "returned", result);
        } else {
            console.log("FAIL", item, "should return", result);
        }
    }
}

spinalCaseTest();
