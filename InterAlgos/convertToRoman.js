/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

// Roman Numerals

function convertToRoman(num) {
 // Inputs an integer, outputs the Roman Numeral equivalent (as a string)
 // Only converts large numbers into thousands-equivalent (doesn't use the dash over symbols meaning * 1,000)
 if (num <= 0) {
     return "";
 }
 var numeralString = "";
 var numerals = [["M"],["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"],["","I","II","III","IV","V","VI","VII","VIII","IX"]];

 // Initialize variables to get number places
 var numFloor = num;
 var rounded;
 var place;
 var placeArr = [];

 var i = 0;
 while (i < 4) {
     numFloor = numFloor / 10;
     rounded = Math.floor(numFloor);
     place = Math.round((numFloor - rounded) * 10);
     placeArr.unshift(place);
     numFloor = rounded;
     i++;
 }

 // Construct the Roman Numeral string
 if (placeArr[0] > 0) {
     for (var j = 0; j < placeArr[0]; j++) {
         numeralString += numerals[0][0];
     }
 }
 for (var k = 1; k < 4; k++) {
     numeralString += numerals[k][placeArr[k]];
 }

 //console.log(numeralString);
 return numeralString;
}

function convertToRomanTest() {
    // Test suite for convertToRoman
    
    var inputs = [2, 3, 4, 5, 9, 12, 16, 29, 44, 45, 68, 83, 97, 99, 500, 501, 649, 798, 891, 1000, 1004, 1006, 1023, 2014, 3999];
    var results = ['II', 'III', 'IV', 'V', 'IX', 'XII', 'XVI', 'XXIX', 'XLIV', 'XLV', 'LXVIII', 'LXXXIII', 'XCVII', 'XCIX', 'D', 'DI', 'DCXLIX', 'DCCXCVIII', 'DCCCXCI', 'M', 'MIV', 'MVI', 'MXXIII', 'MMXIV', 'MMMCMXCIX'];
    
    for (var i = 0; i < inputs.length; i++) {
        var item = inputs[i];
        var test = convertToRoman(item);
        var result = results[i];
        if (test == result) {
            console.log("PASS", item, "returned", result);
        } else {
            console.log("FAIL", item, "should return", result);
        }
    }    
}

convertToRomanTest();
