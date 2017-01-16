/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

// Seek and Destroy

function destroyer(arr) {
    // Input is an array of numbers, followed by any number to be filtered out of the array
    // Returns a new array
    var destroyedArr;

    // Creates an array of additional arguments after arr
    var args = Array.prototype.slice.call(arguments, 1);

    if (args.length < 1) {
        return arr;
    } else {
        destroyedArr = arr;
        for (var i = 0; i < args.length; i++) {
            destroyedArr = destroyedArr.filter(function(val) {
                return val !== args[i];
           });
        // console.log("For loop filtered array: " + destroyedArr);
        }
    }

    // console.log("Final array: " + destroyedArr);
    return destroyedArr;
}

function destroyerTest() {
    // Test suite for destroyer
    var item1 = '[1, 2, 3, 1, 2, 3], 2, 3';
    var test1 = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
    var result1 = [1, 1];
    if (JSON.stringify(test1) == JSON.stringify(result1)) {
        console.log("PASS", item1, "returned", result1);
    } else {
        console.log("FAIL", item1, "should return", result1);
    }
    
    var item2 = '[1, 2, 3, 5, 1, 2, 3], 2, 3';
    var test2 = destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
    var result2 = [1, 5, 1];
    if (JSON.stringify(test2) == JSON.stringify(result2)) {
        console.log("PASS", item2, "returned", result2);
    } else {
        console.log("FAIL", item2, "should return", result2);
    }
    
    var item3 = '[3, 5, 1, 2, 2], 2, 3, 5';
    var test3 = destroyer([3, 5, 1, 2, 2], 2, 3, 5);
    var result3 = [1];
    if (JSON.stringify(test3) == JSON.stringify(result3)) {
        console.log("PASS", item3, "returned", result3);
    } else {
        console.log("FAIL", item3, "should return", result3);
    }
    
    var item4 = '[2, 3, 2, 3], 2, 3';
    var test4 = destroyer([2, 3, 2, 3], 2, 3);
    var result4 = [];
    if (JSON.stringify(test4) == JSON.stringify(result4)) {
        console.log("PASS", item4, "returned", result4);
    } else {
        console.log("FAIL", item4, "should return", result4);
    }
    
    var item5 = '["tree", "hamburger", 53], "tree", 53';
    var test5 = destroyer(["tree", "hamburger", 53], "tree", 53);
    var result5 = ["hamburger"];
    if (JSON.stringify(test5) == JSON.stringify(result5)) {
        console.log("PASS", item5, "returned", result5);
    } else {
        console.log("FAIL", item5, "should return", result5);
    }
}

destroyerTest();
