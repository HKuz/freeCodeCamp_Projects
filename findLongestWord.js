/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

function findLongestWord(str) {
    // Returns the length of the longest word in a string
    var temp = [];
    var charCount = 0;
    var longWord;
    temp = str.split(" ");

    for (var i = 0; i < temp.length; i++) {
        if (temp[i].length > charCount) {
            charCount = temp[i].length;
            longWord = temp[i];
        }
    }
    //console.log("Longest word is length: "+ charCount);
    return charCount;
}

function findLongestWordTest() {
    // Test suite for findLongestWord
    var item1 = "The quick brown fox jumped over the lazy dog";
    var test1 = findLongestWord(item1);
    var result1 = "number";
    if (typeof(test1) == result1) {
        console.log("PASS", item1, "returned a", result1);
    } else {
        console.log("FAIL", item1, "should return a", result1);
    }

    var item2 = "The quick brown fox jumped over the lazy dog";
    var test2 = findLongestWord(item2);
    var result2 = 6;
    if (test2 == result2) {
        console.log("PASS", item2, "returned", result2);
    } else {
        console.log("FAIL", item2, "should return", result2);
    }

    var item3 = "May the force be with you";
    var test3 = findLongestWord(item3);
    var result3 = 5;
    if (test3 == result3) {
        console.log("PASS", item3, "returned", result3);
    } else {
        console.log("FAIL", item3, "should return", result3);
    }

    var item4 = "Google do a barrel roll";
    var test4 = findLongestWord(item4);
    var result4 = 6;
    if (test4 == result4) {
        console.log("PASS", item4, "returned", result4);
    } else {
        console.log("FAIL", item4, "should return", result4);
    }

    var item5 = "What is the average airspeed velocity of an unladen swallow";
    var test5 = findLongestWord(item5);
    var result5 = 8;
    if (test5 == result5) {
        console.log("PASS", item5, "returned", result5);
    } else {
        console.log("FAIL", item5, "should return", result5);
    }

    var item6 = "What if we try a super-long word such as otorhinolaryngology";
    var test6 = findLongestWord(item6);
    var result6 = 19;
    if (test6 == result6) {
        console.log("PASS", item6, "returned", result6);
    } else {
        console.log("FAIL", item6, "should return", result6);
    }
}

findLongestWordTest();
