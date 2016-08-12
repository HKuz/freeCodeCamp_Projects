/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

// Missing Letters

function fearNotLetter(str) {
  // Checks string for a missing sequential character and returns the missing character. If none found, returns undefined
  var missing;
  var flag = false;
  var middle;

  for (var i = 0; i < str.length - 1; i++) {
      if (Math.abs(str.charCodeAt(i+1) - str.charCodeAt(i)) > 1) {
          middle = (str.charCodeAt(i+1) + str.charCodeAt(i)) / 2;
          missing = String.fromCharCode(middle);
          flag = true;
      }
  }
  if (!flag) {
      //console.log("Nothing missing");
      return undefined;
  } else {
      //console.log(missing);
      return missing;
  }
}

function fearNotLetterTest() {
    // Test suite for fearNotLetter
    
    var inputs = [
        "abce",
        "abcdefghjklmno",
        "bcd",
        "yz"
    ];
    var results = [
        "d",
        "i",
        undefined,
        undefined
    ];
    
    for (var i = 0; i < inputs.length; i++) {
        var item = inputs[i];
        var test = fearNotLetter(item);
        var result = results[i];
        if (test == result) {
            console.log("PASS", item, "returned", result);
        } else {
            console.log("FAIL", item, "should return", result);
        }
    }
}

fearNotLetterTest();
