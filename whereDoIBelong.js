/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

// Where Do I Belong?

function getIndexToIns(arr, num) {
    // Inputs an array of numbers and a number and returns the lowest index where that number
    // should be inserted

    // Sorts input array
    var sortedArr = arr.sort(function(a, b) {
        return a - b;
    });
    // console.log(sortedArr);

    // Initializes index value to be the last value inserted into the array in case num is > all arr vals
    var index = sortedArr.length;

    for (var i = 0; i < sortedArr.length; i++) {
        if (num <= sortedArr[i]) {
            index = i;
            break;
        }
    }
    // console.log("Index is: " + index);
    return index;
}

function getIndexToInsTest() {
    // Test suite for getIndexToIns
    var item1 = '[10, 20, 30, 40, 50], 35';
    var test1 = getIndexToIns([10, 20, 30, 40, 50], 35);
    var result1 = 3;
    if (test1 == result1) {
        console.log("PASS", item1, "returned", result1);
    } else {
        console.log("FAIL", item1, "should return", result1);
    }
    
    var item2 = '[10, 20, 30, 40, 50], 30';
    var test2 = getIndexToIns([10, 20, 30, 40, 50], 30);
    var result2 = 2;
    if (test2 == result2) {
        console.log("PASS", item2, "returned", result2);
    } else {
        console.log("FAIL", item2, "should return", result2);
    }
    
    var item3 = '[40, 60], 50';
    var test3 = getIndexToIns([40, 60], 50);
    var result3 = 1;
    if (test3 == result3) {
        console.log("PASS", item3, "returned", result3);
    } else {
        console.log("FAIL", item3, "should return", result3);
    }
    
    var item4 = '[3, 10, 5], 3';
    var test4 = getIndexToIns([3, 10, 5], 3);
    var result4 = 0;
    if (test4 == result4) {
        console.log("PASS", item4, "returned", result4);
    } else {
        console.log("FAIL", item4, "should return", result4);
    }
    
    var item5 = '[5, 3, 20, 3], 5';
    var test5 = getIndexToIns([5, 3, 20, 3], 5);
    var result5 = 2;
    if (test5 == result5) {
        console.log("PASS", item5, "returned", result5);
    } else {
        console.log("FAIL", item5, "should return", result5);
    }
    
    var item6 = '[2, 20, 10], 19';
    var test6 = getIndexToIns([2, 20, 10], 19);
    var result6 = 2;
    if (test6 == result6) {
        console.log("PASS", item6, "returned", result6);
    } else {
        console.log("FAIL", item6, "should return", result6);
    }
    
    var item7 = '[2, 5, 10], 15';
    var test7 = getIndexToIns([2, 5, 10], 15);
    var result7 = 3;
    if (test7 == result7) {
        console.log("PASS", item7, "returned", result7);
    } else {
        console.log("FAIL", item7, "should return", result7);
    }
}

getIndexToInsTest();
