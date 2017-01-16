/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

function chunkArrayInGroups(arr, size) {
    // Inputs an array (arr) and an int (size). Breaks the array items into subarrays of length size
    // Returns a two-dimensional array
    var newArr = [];
    var smallArr;
    var remainder = arr.length % size;
    var remainderArr = [];

    // Create subarrays up until remainder point
    for (var i = 0; i < (arr.length - remainder); i += size) {
        smallArr = arr.slice(i, i + size);
        newArr.push(smallArr);
    }

    // Final subarray if there are remainder items
    if (remainder > 0) {
        remainderArr = arr.slice(-remainder);
        newArr.push(remainderArr);
    }
    //console.log(newArr);
    return newArr;
}

function chunkArrayInGroupsTest() {
    // Test suite for chunkArrayInGroups
    var item1 = '["a", "b", "c", "d"], 2';
    var test1 = chunkArrayInGroups(["a", "b", "c", "d"], 2);
    var result1 = [["a", "b"], ["c", "d"]];
    if (JSON.stringify(test1) == JSON.stringify(result1)) {
        console.log("PASS", item1, "returned", result1);
    } else {
        console.log("FAIL", item1, "should return", result1);
    }
    
    var item2 = "[0, 1, 2, 3, 4, 5], 3";
    var test2 = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
    var result2 = [[0, 1, 2], [3, 4, 5]];
    if (JSON.stringify(test2) == JSON.stringify(result2)) {
        console.log("PASS", item2, "returned", result2);
    } else {
        console.log("FAIL", item2, "should return", result2);
    }
    
    var item3 = "[0, 1, 2, 3, 4, 5], 2";
    var test3 = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
    var result3 = [[0, 1], [2, 3], [4, 5]];
    if (JSON.stringify(test3) == JSON.stringify(result3)) {
        console.log("PASS", item3, "returned", result3);
    } else {
        console.log("FAIL", item3, "should return", result3);
    }
    
    var item4 = "[0, 1, 2, 3, 4, 5], 4";
    var test4 = chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
    var result4 = [[0, 1, 2, 3], [4, 5]];
    if (JSON.stringify(test4) == JSON.stringify(result4)) {
        console.log("PASS", item4, "returned", result4);
    } else {
        console.log("FAIL", item4, "should return", result4);
    }

    var item5 = "[0, 1, 2, 3, 4, 5, 6], 3";
    var test5 = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3);
    var result5 = [[0, 1, 2], [3, 4, 5], [6]];
    if (JSON.stringify(test5) == JSON.stringify(result5)) {
        console.log("PASS", item5, "returned", result5);
    } else {
        console.log("FAIL", item5, "should return", result5);
    }
    
    var item6 = "[0, 1, 2, 3, 4, 5, 6, 7, 8], 4";
    var test6 = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4);
    var result6 = [[0, 1, 2, 3], [4, 5, 6, 7], [8]];
    if (JSON.stringify(test6) == JSON.stringify(result6)) {
        console.log("PASS", item6, "returned", result6);
    } else {
        console.log("FAIL", item6, "should return", result6);
    }
    
    var item7 = "[0, 1, 2, 3, 4, 5, 6, 7, 8], 2";
    var test7 = chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);
    var result7 = [[0, 1], [2, 3], [4, 5], [6, 7], [8]];
    if (JSON.stringify(test7) == JSON.stringify(result7)) {
        console.log("PASS", item7, "returned", result7);
    } else {
        console.log("FAIL", item7, "should return", result7);
    }
}

chunkArrayInGroupsTest();
