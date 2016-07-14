/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

// Title Case a Sentence

function titleCase(str) {
    // Inputs a string and returns that string with each word capitalized (remainder of word in lowercase)
    var tempStr = str.toString().toLowerCase();
    var wordArray = tempStr.split(" ");
    var capLetter;
    var capWord;

    for (var i = 0; i< wordArray.length; i++) {
        capLetter = wordArray[i][0].toString().toUpperCase();
        if (wordArray[i].length > 1) {
            capWord = capLetter + wordArray[i].slice(1, (wordArray[i].length));
        } else {
            capWord = capLetter;
        }
        wordArray[i] = capWord;
    }
    tempStr = wordArray.join(" ");
    //console.log("The new string is: " + tempStr);
    return tempStr;
}

function titleCaseTest() {
    // Test suite for titleCase
    var item1 = "I'm a little tea pot";
    var test1 = titleCase(item1);
    var result1 = "string";
    if (typeof(test1) == result1) {
        console.log("PASS", item1, "returned a", result1);
    } else {
        console.log("FAIL", item1, "should return a", result1);
    }

    var item2 = "I'm a little tea pot";
    var test2 = titleCase(item2);
    var result2 = "I'm A Little Tea Pot";
    if (test2 == result2) {
        console.log("PASS", item2, "returned", result2);
    } else {
        console.log("FAIL", item2, "should return", result2);
    }

    var item3 = "sHoRt AnD sToUt";
    var test3 = titleCase(item3);
    var result3 = "Short And Stout";
    if (test3 == result3) {
        console.log("PASS", item3, "returned", result3);
    } else {
        console.log("FAIL", item3, "should return", result3);
    }

    var item4 = "HERE IS MY HANDLE HERE IS MY SPOUT";
    var test4 = titleCase(item4);
    var result4 = "Here Is My Handle Here Is My Spout";
    if (test4 == result4) {
        console.log("PASS", item4, "returned", result4);
    } else {
        console.log("FAIL", item4, "should return", result4);
    }
}

titleCaseTest();
