/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

function diffArray(arr1, arr2) {
  // Compares two arrays and returns the items only found in one of the two arrays
  // Returns a new array
  var newArr = [];

  var unique1 = arr1.filter(function(val){
      return arr2.indexOf(val) < 0;
  });
  var unique2 = arr2.filter(function(val) {
     return arr1.indexOf(val) < 0; 
  });
  newArr = unique1.concat(unique2);
  //console.log(newArr);
  return newArr;
}

function diffArrayTest() {
    // Test suite for diffArray TO DO
    var item1 = '["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]';
    var test1 = diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
    var result1 = ["pink wool"];
    if (JSON.stringify(test1) == JSON.stringify(result1)) {
        console.log("PASS", item1, "returned", result1);
    } else {
        console.log("FAIL", item1, "should return", result1);
    }
    
    var item2 = '["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]';
    var test2 = diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
    var result2 = ["pink wool", "diorite"];
    if (JSON.stringify(test2) == JSON.stringify(result2)) {
        console.log("PASS", item2, "returned", result2);
    } else {
        console.log("FAIL", item2, "should return", result2);
    }
    
    var item3 = '["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]';
    var test3 = diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]);
    var result3 = [];
    if (JSON.stringify(test3) == JSON.stringify(result3)) {
        console.log("PASS", item3, "returned", result3);
    } else {
        console.log("FAIL", item3, "should return", result3);
    }
    
    var item4 = '[1, 2, 3, 5], [1, 2, 3, 4, 5]';
    var test4 = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
    var result4 = [4];
    if (JSON.stringify(test4) == JSON.stringify(result4)) {
        console.log("PASS", item4, "returned", result4);
    } else {
        console.log("FAIL", item4, "should return", result4);
    }
    
    var item5 = '[1, "calf", 3, "piglet"], [1, "calf", 3, 4]';
    var test5 = diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
    var result5 = ["piglet", 4];
    if (JSON.stringify(test5) == JSON.stringify(result5)) {
        console.log("PASS", item5, "returned", result5);
    } else {
        console.log("FAIL", item5, "should return", result5);
    }
    
    var item6 = '[], ["snuffleupagus", "cookie monster", "elmo"]';
    var test6 = diffArray([], ["snuffleupagus", "cookie monster", "elmo"]);
    var result6 = ["snuffleupagus", "cookie monster", "elmo"];
    if (JSON.stringify(test6) == JSON.stringify(result6)) {
        console.log("PASS", item6, "returned", result6);
    } else {
        console.log("FAIL", item6, "should return", result6);
    }
    
    var item7 = '[1, "calf", 3, "piglet"], [7, "filly"]';
    var test7 = diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
    var result7 = [1, "calf", 3, "piglet", 7, "filly"];
    if (JSON.stringify(test7) == JSON.stringify(result7)) {
        console.log("PASS", item7, "returned", result7);
    } else {
        console.log("FAIL", item7, "should return", result7);
    }
}

diffArrayTest();
