/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

// Check if a string is a palindrome

function palindrome(str) {
    // Cleaning up the string to only include lowercase alphanumeric characters
    var exp = /[^a-z0-9]/gi // tells the replace function to replace anything NOT a-z0-9, case insensitive
    var letters;
    var lower_str = '';

    letters = str.replace(exp, '');
    lower_str += letters.toString().toLowerCase();
    //console.log("New String after regex and lowercase: " + lower_str);

    // Testing for a palindrome
    var len = lower_str.length;
    var midpoint = Math.floor(len / 2);

    if (len <= 1) {
        return true;
    }

    for (var i = 0; i < midpoint; i++) {
        if (lower_str[i] != lower_str[(len-(i+1))]) {
            return false;
        }
    }
    
function palindromeTest() {
    // Test suite for palindrome
    var item1 = "eye";
    var test1 = palindrome(item1);
    var result1 = "boolean";
    if (typeof(test1) == result1) {
        console.log("PASS", item1, "returned a", result1);
    } else {
        console.log("FAIL", item1, "should return a", result1);
    }

    var item2 = "eye";
    var test2 = palindrome(item2);
    var result2 = true;
    if (test2 == result2) {
        console.log("PASS", item2, "returned", result2);
    } else {
        console.log("FAIL", item2, "should return", result2);
    }

    var item3 = "_eye";
    var test3 = palindrome(item3);
    var result3 = true;
    if (test3 == result3) {
        console.log("PASS", item3, "returned", result3);
    } else {
        console.log("FAIL", item3, "should return", result3);
    }

    var item4 = "race car";
    var test4 = palindrome(item4);
    var result4 = true;
    if (test4 == result4) {
        console.log("PASS", item4, "returned", result4);
    } else {
        console.log("FAIL", item4, "should return", result4);
    }

    var item5 = "not a palindrome";
    var test5 = palindrome(item5);
    var result5 = false;
    if (test5 == result5) {
        console.log("PASS", item5, "returned", result5);
    } else {
        console.log("FAIL", item5, "should return", result5);
    }

    var item6 = "A man, a plan, a canal. Panama";
    var test6 = palindrome(item6);
    var result6 = true;
    if (test6 == result6) {
        console.log("PASS", item6, "returned", result6);
    } else {
        console.log("FAIL", item6, "should return", result6);
    }

    var item7 = "never odd or even";
    var test7 = palindrome(item7);
    var result7 = true;
    if (test7 == result7) {
        console.log("PASS", item7, "returned", result7);
    } else {
        console.log("FAIL", item7, "should return", result7);
    }

    var item8 = "nope";
    var test8 = palindrome(item8);
    var result8 = false;
    if (test8 == result8) {
        console.log("PASS", item8, "returned", result8);
    } else {
        console.log("FAIL", item8, "should return", result8);
    }

    var item9 = "almostomla";
    var test9 = palindrome(item9);
    var result9 = false;
    if (test9 == result9) {
        console.log("PASS", item9, "returned", result9);
    } else {
        console.log("FAIL", item9, "should return", result9);
    }

    var item10 = "My age is 0, 0 si ega ym.";
    var test10 = palindrome(item10);
    var result10 = true;
    if (test10 == result10) {
        console.log("PASS", item10, "returned", result10);
    } else {
        console.log("FAIL", item10, "should return", result10);
    }

    var item11 = "1 eye for of 1 eye.";
    var test11 = palindrome(item11);
    var result11 = false;
    if (test11 == result11) {
        console.log("PASS", item11, "returned", result11);
    } else {
        console.log("FAIL", item11, "should return", result11);
    }

    var item12 = "0_0 (: /-\ :) 0-0";
    var test12 = palindrome(item12);
    var result12 = true;
    if (test12 == result12) {
        console.log("PASS", item12, "returned", result12);
    } else {
        console.log("FAIL", item12, "should return", result12);
    }

    var item13 = "five|\_/|four";
    var test13 = palindrome(item13);
    var result13 = false;
    if (test13 == result13) {
        console.log("PASS", item13, "returned", result13);
    } else {
        console.log("FAIL", item13, "should return", result13);
    }
}

palindromeTest();


    return true;
}
