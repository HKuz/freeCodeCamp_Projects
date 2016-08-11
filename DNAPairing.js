/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

// DNA Pairing

function pairElement(str) {
  // str is a string of unpaired DNA letters, returns an array of arrays holding the original DNA letter and its pair
  var unpairedArr = str.split("");
  var pairedArr = [];
  var pairs = {"A":"T", "T":"A", "C":"G", "G":"C"};

  for (var i = 0; i < unpairedArr.length; i++) {
      pairedArr.push([unpairedArr[i], pairs[unpairedArr[i]]]);
  }
  //console.log(pairedArr);
  return pairedArr;
}

function pairElementTest() {
    // Test suite for pairElement
    
    var inputs = [
        "ATCGA",
        "TTGAG",
        "CTCTA"
    ];
    var results = [
        [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]],
        [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]],
        [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]
    ];
    
    for (var i = 0; i < inputs.length; i++) {
        var item = inputs[i];
        var test = pairElement(item);
        var result = results[i];
        if (JSON.stringify(test) == JSON.stringify(result)) {
            console.log("PASS", item, "returned", result);
        } else {
            console.log("FAIL", item, "should return", result);
        }
    }
}

pairElementTest();
