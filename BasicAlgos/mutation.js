/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

// Mutations

function mutation(arr) {
    // Input: an array of two strings; Output: Boolean value
    // If all the letters of the second string are in the first string, true, if not, false
    var testStr = arr[0].toString().toLowerCase();
    var letters = arr[1].toString().toLowerCase();
    var numLetters = letters.length;

    for (var i = 0; i < numLetters; i++) {
        if (testStr.indexOf(letters[i]) < 0) {
            // console.log("False!");
            return false;
        }
    }
    // console.log("True!");
    return true;
}

function mutationTest() {
    // Test suite for mutation
    var item1 = '["hello", "hey"]';
    var test1 = mutation(["hello", "hey"]);
    var result1 = false;
    if (test1 == result1) {
        console.log("PASS", item1, "returned", result1);
    } else {
        console.log("FAIL", item1, "should return", result1);
    }
    
    var item2 = '["hello", "Hello"]';
    var test2 = mutation(["hello", "Hello"]);
    var result2 = true;
    if (test2 == result2) {
        console.log("PASS", item2, "returned", result2);
    } else {
        console.log("FAIL", item2, "should return", result2);
    }
    
    var item3 = '["zyxwvutsrqponmlkjihgfedcba", "qrstu"]';
    var test3 = mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
    var result3 = true;
    if (test3 == result3) {
        console.log("PASS", item3, "returned", result3);
    } else {
        console.log("FAIL", item3, "should return", result3);
    }
    
    var item4 = '["Mary", "Army"]';
    var test4 = mutation(["Mary", "Army"]);
    var result4 = true;
    if (test4 == result4) {
        console.log("PASS", item4, "returned", result4);
    } else {
        console.log("FAIL", item4, "should return", result4);
    }

    var item5 = '["Mary", "Aarmy"]';
    var test5 = mutation(["Mary", "Aarmy"]);
    var result5 = true;
    if (test5 == result5) {
        console.log("PASS", item5, "returned", result5);
    } else {
        console.log("FAIL", item5, "should return", result5);
    }
    
    var item6 = '["floor", "for"]';
    var test6 = mutation(["floor", "for"]);
    var result6 = true;
    if (test6 == result6) {
        console.log("PASS", item6, "returned", result6);
    } else {
        console.log("FAIL", item6, "should return", result6);
    }
    
    var item7 = '["hello", "neo"]';
    var test7 = mutation(["hello", "neo"]);
    var result7 = false;
    if (test7 == result7) {
        console.log("PASS", item7, "returned", result7);
    } else {
        console.log("FAIL", item7, "should return", result7);
    }
    
    var item8 = '["voodoo", "no"]';
    var test8 = mutation(["voodoo", "no"]);
    var result8 = false;
    if (test8 == result8) {
        console.log("PASS", item8, "returned", result8);
    } else {
        console.log("FAIL", item8, "should return", result8);
    }
}

mutationTest();
