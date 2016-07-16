/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

// Return Largest Numbers from an Array's Subarrays

function largestOfFour(arr) {
    // Inputs an array of subarrays (1 level), outputs an array of the largest values from each subarray
    var maxVal;
    var maxArr = [];

    for (var i = 0; i < arr.length; i++) {
        maxVal = 0;
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > maxVal) {
                maxVal = arr[i][j];
            }
        }
        maxArr.push(maxVal);
    }
    //console.log(maxArr);
    return maxArr;
}

function largestOfFourTest() {
    // Test suite for titleCase
    var item1 = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];
    var test1 = largestOfFour(item1);
    var result1 = true;
    if (Array.isArray(test1) == result1) {
        console.log("PASS", item1, "returned an array");
    } else {
        console.log("FAIL", item1, "should return an array");
    }

    var item2 = [[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]];
    var test2 = largestOfFour(item2);
    var result2 = [27,5,39,1001];
    if (JSON.stringify(test2) == JSON.stringify(result2)) {
        console.log("PASS", item2, "returned", result2);
    } else {
        console.log("FAIL", item2, "should return", result2);
    }

    var item3 = [[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]];
    var test3 = largestOfFour(item3);
    var result3 = [9, 35, 97, 1000000];
    if (JSON.stringify(test3) == JSON.stringify(result3)) {
        console.log("PASS", item3, "returned", result3);
    } else {
        console.log("FAIL", item3, "should return", result3);
    }
}

largestOfFourTest();
