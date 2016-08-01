/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

function sumAll(arr) {
    // Input: array with two integers, Output: integer
    // Sums the two numbers given in an array and all integers in between
    // Handles negative, positive, or mixed sign spreads
    
    var min = Math.min(arr[0], arr[1]);
    var max = (min === arr[0]) ? arr[1] : arr[0];
    
    // Get sign booleans and convert numbers to positive ints 
    var bothPositive = min >= 0;
    var diffSigns = !bothPositive && max > 0;
    
    
    // Sum of integers from 0 to n is N = (n*(n+1))/2
    var sum = 0;
    
    if (bothPositive) {
        sum = (max * (max+1))/2 - ((min - 1) * min)/2;
    }
    
    else if (diffSigns) {
        min *= -1;
        sum = (max * (max+1))/2 - (min * (min + 1))/2;
    }
    
    else {
        // Both numbers are negative
        min *= -1; // min becomes max value
        max *= -1; // max becomes min value
        sum = -((min * (min + 1))/2 - ((max - 1) * max)/2);
    }
    
    //console.log("Sum is:", sum);
    return sum;
}

function sumAllTest() {
    // Test suite for sumAll
    var item1 = [1, 4];
    var test1 = sumAll(item1);
    var result1 = 'number';
    if (typeof(test1) == result1) {
        console.log("PASS", item1, "returned", result1);
    } else {
        console.log("FAIL", item1, "should return a", result1);
    }
    
    var item2 = [1, 4];
    var test2 = sumAll(item2);
    var result2 = 10;
    if (test2 == result2) {
        console.log("PASS", item2, "returned", result2);
    } else {
        console.log("FAIL", item2, "should return", result2);
    }
    
    var item3 = [4, 1];
    var test3 = sumAll(item3);
    var result3 = 10;
    if (test3 == result3) {
        console.log("PASS", item3, "returned", result3);
    } else {
        console.log("FAIL", item3, "should return", result3);
    }
    
    var item4 = [5, 10];
    var test4 = sumAll(item4);
    var result4 = 45;
    if (test4 == result4) {
        console.log("PASS", item4, "returned", result4);
    } else {
        console.log("FAIL", item4, "should return", result4);
    }
    
    var item5 = [10, 5];
    var test5 = sumAll(item5);
    var result5 = 45;
    if (test5 == result5) {
        console.log("PASS", item5, "returned", result5);
    } else {
        console.log("FAIL", item5, "should return", result5);
    }
}

sumAllTest();
