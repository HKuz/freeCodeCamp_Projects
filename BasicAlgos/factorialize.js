/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

// Factorialize a Number

function factorialize(num) {
    var temp = [];
    for (var i = 1; i<= num; i++) {
        temp.push(i);
    }
    num = temp.reduce(function(prevVal, curVal){
        return prevVal * curVal;
    }, 1);
    // console.log(num);
    return num;
}

function factorializeTest() {
    // Test suite for factorialize
    var item1 = 5;
    var test1 = factorialize(item1);
    var result1 = "number";
    if (typeof(test1) == result1) {
        console.log("PASS", item1, "returned a", result1);
    } else {
        console.log("FAIL", item1, "should return a", result1);
    }

    var item2 = 5;
    var test2 = factorialize(item2);
    var result2 = 120;
    if (test2 == result2) {
        console.log("PASS", item2, "returned", result2);
    } else {
        console.log("FAIL", item2, "should return", result2);
    }

    var item3 = 10;
    var test3 = factorialize(item3);
    var result3 = 3628800;
    if (test3 == result3) {
        console.log("PASS", item3, "returned", result3);
    } else {
        console.log("FAIL", item3, "should return", result3);
    }

    var item4 = 20;
    var test4 = factorialize(item4);
    var result4 = 2432902008176640000;
    if (test4 == result4) {
        console.log("PASS", item4, "returned", result4);
    } else {
        console.log("FAIL", item4, "should return", result4);
    }

    var item5 = 0;
    var test5 = factorialize(item5);
    var result5 = 1;
    if (test5 == result5) {
        console.log("PASS", item5, "returned", result5);
    } else {
        console.log("FAIL", item5, "should return", result5);
    }
}

factorializeTest();
