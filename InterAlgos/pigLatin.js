/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

// Pig Latin

function translatePigLatin(str) {
  // Inputs a string and outputs that string converted to Pig Latin
  //str = str.toLowerCase();
  var piggy;
  var letterArr = str.split("");
  var vowelExp = /[aeiou]/i;

  // Check if the first letter is a vowel
  if ((vowelExp).test(letterArr[0])) {
      piggy = str + "way";
  } else {
      var firstVowelIndex = (vowelExp).exec(str).index;
      var firstConsonants = letterArr.slice(0, firstVowelIndex);
      var restWord = letterArr.slice(firstVowelIndex);
      piggy = restWord.join("") + firstConsonants.join("") + "ay";
  }

  //console.log(piggy);
  return piggy;
}

function translatePigLatinTest() {
    // Test suite for translatePigLatin
    
    var inputs = [
        "california",
        "paragraphs",
        "glove",
        "algorithm",
        "eight"
    ];
    var results = [
        "aliforniacay",
        "aragraphspay",
        "oveglay",
        "algorithmway",
        "eightway"
    ];
    
    for (var i = 0; i < inputs.length; i++) {
        var item = inputs[i];
        var test = translatePigLatin(item);
        var result = results[i];
        if (test == result) {
            console.log("PASS", item, "returned", result);
        } else {
            console.log("FAIL", item, "should return", result);
        }
    }
}

translatePigLatinTest();
