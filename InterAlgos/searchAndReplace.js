/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */
 
 // Search and Replace

function myReplace(str, before, after) {
  var newStr;

  // Lowercase scenario
  afterLow = after.toLowerCase();
  beforeLow = before.toLowerCase();
  expLow = new RegExp(beforeLow, 'g');

  // Title-case scenario
  function capitalize(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
  }
  afterUp = capitalize(after);
  beforeUp = capitalize(before);
  expUp = new RegExp(beforeUp, 'g');

  newStr = str.replace(expLow, afterLow).replace(expUp, afterUp);
  //console.log(newStr);
  return newStr;
}

function myReplaceTest() {
    // Test suite for myReplace
    
    var inputs = [
        {string: "Let us go to the store", before: "store", after: "mall"},
        {string: "He is Sleeping on the couch", before: "Sleeping", after: "sitting"},
        {string: "This has a spellngi error", before: "spellngi", after: "spelling"},
        {string: "His name is Tom", before: "Tom", after: "john"},
        {string: "Let us get back to more Coding", before: "Coding", after: "algorithms"}
    ];
    var results = [
        "Let us go to the mall",
        "He is Sitting on the couch",
        "This has a spelling error",
        "His name is John",
        "Let us get back to more Algorithms"
    ];
    
    for (var i = 0; i < inputs.length; i++) {
        var item = inputs[i].string + ", " + inputs[i].before + ", " + inputs[i].after;
        var test = myReplace(inputs[i].string, inputs[i].before, inputs[i].after);
        var result = results[i];
        if (test == result) {
            console.log("PASS", item, "returned", result);
        } else {
            console.log("FAIL", item, "should return", result);
        }
    }   
}

myReplaceTest();
