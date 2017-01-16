/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

// Truncate a String

function truncateString(str, num) {
    // Inputs a string (str) and an int (num). Truncates the string and adds ... to match given length
    // If the num is <= 3, the elipsis is not included in the string length calculation
    // Returns a string

    var tempStr;
    var ellipsis = '...';
    var len = str.toString().length
    num = Math.floor(num);

    if (num >= len) {
        tempStr = str;
    } else if (num <= 3) {
        tempStr = str.toString().substr(0, num) + ellipsis;
    } else {
        tempStr = str.toString().substr(0, num - 3) + ellipsis;
    }
    // console.log(tempStr);
    return tempStr;
}

function truncateStringTest() {
    // Test suite for truncateString
    var item1 = "A-tisket a-tasket A green and yellow basket, 11";
    var test1 = truncateString("A-tisket a-tasket A green and yellow basket", 11);
    var result1 = "A-tisket...";
    if (test1 == result1) {
        console.log("PASS", item1, "returned", result1);
    } else {
        console.log("FAIL", item1, "should return", result1);
    }

    var item2 = "Peter Piper picked a peck of pickled peppers, 14";
    var test2 = truncateString("Peter Piper picked a peck of pickled peppers", 14);
    var result2 = "Peter Piper...";
    if (test2 == result2) {
        console.log("PASS", item2, "returned", result2);
    } else {
        console.log("FAIL", item2, "should return", result2);
    }

    var item3 = "A-tisket a-tasket A green and yellow basket, A-tisket a-tasket A green and yellow basket.length";
    var test3 = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);
    var result3 = "A-tisket a-tasket A green and yellow basket";
    if (test3 == result3) {
        console.log("PASS", item3, "returned", result3);
    } else {
        console.log("FAIL", item3, "should return", result3);
    }

    var item4 = "A-tisket a-tasket A green and yellow basket, A-tisket a-tasket A green and yellow basket.length + 2";
    var test4 = truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2);
    var result4 = "A-tisket a-tasket A green and yellow basket";
    if (test4 == result4) {
        console.log("PASS", item4, "returned", result4);
    } else {
        console.log("FAIL", item4, "should return", result4);
    }

    var item5 = "A-, 1";
    var test5 = truncateString("A-", 1);
    var result5 = "A...";
    if (test5 == result5) {
        console.log("PASS", item5, "returned", result5);
    } else {
        console.log("FAIL", item5, "should return", result5);
    }

    var item6 = "Absolutely Longer, 2";
    var test6 = truncateString("Absolutely Longer", 2);
    var result6 = "Ab...";
    if (test6 == result6) {
        console.log("PASS", item6, "returned", result6);
    } else {
        console.log("FAIL", item6, "should return", result6);
    }
}

truncateStringTest();
