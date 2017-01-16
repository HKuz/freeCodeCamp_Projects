/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

function bouncer(arr) {
    // Removes any falsy value from the given array
    // Input: array, Output: array
    // False values are: false, null, 0, "", undefined, and NaN
    var truthyArr = arr.filter(Boolean);
    // console.log(truthyArr);
    return truthyArr;
}

function bouncerTest() {
    // Test suite for bouncer
    var item1 = [7, "ate", "", false, 9];
    var test1 = bouncer(item1);
    var result1 = [7, "ate", 9];
    if (JSON.stringify(test1) == JSON.stringify(result1)) {
        console.log("PASS", item1, "returned", result1);
    } else {
        console.log("FAIL", item1, "should return", result1);
    }
    
    var item2 = ["a", "b", "c"];
    var test2 = bouncer(item2);
    var result2 = ["a", "b", "c"];
    if (JSON.stringify(test2) == JSON.stringify(result2)) {
        console.log("PASS", item2, "returned", result2);
    } else {
        console.log("FAIL", item2, "should return", result2);
    }
    
    var item3 = [false, null, 0, NaN, undefined, ""];
    var test3 = bouncer(item3);
    var result3 = [];
    if (JSON.stringify(test3) == JSON.stringify(result3)) {
        console.log("PASS", item3, "returned", result3);
    } else {
        console.log("FAIL", item3, "should return", result3);
    }
    
    var item4 = [1, null, NaN, 2, undefined];
    var test4 = bouncer(item4);
    var result4 = [1, 2];
    if (JSON.stringify(test4) == JSON.stringify(result4)) {
        console.log("PASS", item4, "returned", result4);
    } else {
        console.log("FAIL", item4, "should return", result4);
    }
}

bouncerTest();
