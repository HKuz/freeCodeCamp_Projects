/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */
 
 // Repeat a String N Times

function repeatStringNumTimes(str, num) {
    // Inputs a string and repeats it num times.  If num <= 0, returns an empty string
    // Num is converted to an integer if it isn't already
    var repeated = '';
    num = Math.floor(num);

    if (num <= 0) {
        return "";
    }
    for (var i = 1; i <= num; i++) {
        repeated += str;
    }
    // console.log(repeated);
    return repeated;
}

function repeatStringNumTimesTest() {
    // Test suite for repeat
    var item1 = "*, 3";
    var test1 = repeatStringNumTimes("*", 3);
    var result1 = "***";
    if (test1 == result1) {
        console.log("PASS", item1, "returned", result1);
    } else {
        console.log("FAIL", item1, "should return", result1);
    }

    var item2 = "abc, 3";
    var test2 = repeatStringNumTimes("abc", 3);
    var result2 = "abcabcabc";
    if (test2 == result2) {
        console.log("PASS", item2, "returned", result2);
    } else {
        console.log("FAIL", item2, "should return", result2);
    }

    var item3 = "abc, 4";
    var test3 = repeatStringNumTimes("abc", 4);
    var result3 = "abcabcabcabc";
    if (test3 == result3) {
        console.log("PASS", item3, "returned", result3);
    } else {
        console.log("FAIL", item3, "should return", result3);
    }

    var item4 = "abc, 1";
    var test4 = repeatStringNumTimes("abc", 1);
    var result4 = "abc";
    if (test4 == result4) {
        console.log("PASS", item4, "returned", result4);
    } else {
        console.log("FAIL", item4, "should return", result4);
    }

    var item5 = "*, 8";
    var test5 = repeatStringNumTimes("*", 8);
    var result5 = "********";
    if (test5 == result5) {
        console.log("PASS", item5, "returned", result5);
    } else {
        console.log("FAIL", item5, "should return", result5);
    }

    var item6 = "abc, -2";
    var test6 = repeatStringNumTimes("abc", -2);
    var result6 = "";
    if (test6 == result6) {
        console.log("PASS", item6, "returned", result6);
    } else {
        console.log("FAIL", item6, "should return", result6);
    }
}

repeatStringNumTimesTest();
