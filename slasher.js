/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

// Slasher Flick

function slasher(arr, howMany) {
    // Input: arr is an array, howMany is an integer
    // Returns remainder of the array after chopping off howMany from the front
    var newArr;

    if (howMany >= arr.length) {
        newArr = [];
    } else {
        newArr = arr.slice(howMany);
    }
    //console.log(newArr);
    return newArr;
}

function slasherTest() {
    // Test suite for slasher
    var item1 = "[1, 2, 3], 2";
    var test1 = slasher([1, 2, 3], 2);
    var result1 = [3];
    if (JSON.stringify(test1) == JSON.stringify(result1)) {
        console.log("PASS", item1, "returned", result1);
    } else {
        console.log("FAIL", item1, "should return", result1);
    }
    
    var item2 = "[1, 2, 3], 0";
    var test2 = slasher([1, 2, 3], 0);
    var result2 = [1, 2, 3];
    if (JSON.stringify(test2) == JSON.stringify(result2)) {
        console.log("PASS", item2, "returned", result2);
    } else {
        console.log("FAIL", item2, "should return", result2);
    }
    
    var item3 = "[1, 2, 3], 9";
    var test3 = slasher([1, 2, 3], 9);
    var result3 = [];
    if (JSON.stringify(test3) == JSON.stringify(result3)) {
        console.log("PASS", item3, "returned", result3);
    } else {
        console.log("FAIL", item3, "should return", result3);
    }
    
    var item4 = "[1, 2, 3], 4";
    var test4 = slasher([1, 2, 3], 4);
    var result4 = [];
    if (JSON.stringify(test4) == JSON.stringify(result4)) {
        console.log("PASS", item4, "returned", result4);
    } else {
        console.log("FAIL", item4, "should return", result4);
    }

    var item5 = '["burgers", "fries", "shake"], 1';
    var test5 = slasher(["burgers", "fries", "shake"], 1);
    var result5 = ["fries", "shake"];
    if (JSON.stringify(test5) == JSON.stringify(result5)) {
        console.log("PASS", item5, "returned", result5);
    } else {
        console.log("FAIL", item5, "should return", result5);
    }
    
    var item6 = '[1, 2, "chicken", 3, "potatoes", "cheese", 4], 5';
    var test6 = slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5);
    var result6 = ["cheese", 4];
    if (JSON.stringify(test6) == JSON.stringify(result6)) {
        console.log("PASS", item6, "returned", result6);
    } else {
        console.log("FAIL", item6, "should return", result6);
    }
}

slasherTest();
