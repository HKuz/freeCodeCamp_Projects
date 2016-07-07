/**
 * Free Code Camp Front End Algorithm Challenges
 * @author for algorithm solutions: Heather K. Unit tests from freeCodeCamp.
 */

// Reversing a String

function reverseString(str) {
    // Empty string delimiter splits and joins by character
    var temp = [];
    temp = str.split('');
    temp.reverse();
    str = temp.join('');
    // console.log(str);
    return str;
}

// TEST CODE

function reverseStringTest() {
    var item1 = "hello";
    var test1 = reverseString(item1);
    var result1 = "string";
    if (typeof(test1) == result1) {
        console.log("PASS", item1, "returned a", result1);
    } else {
        console.log("FAIL", item1, "should have returned a string");
    }

    var item2 = "hello";
    var test2 = reverseString(item2);
    var result2 = "olleh";
    if(test2 == result2) {
        console.log("PASS", item2, "returned", result2);
    } else {
        console.log("FAIL", item2, "should return", result2);
    }

    var item3 = "Howdy";
    var test3 = reverseString(item3);
    var result3 = "ydwoH";
    if (test3 == result3) {
        console.log("PASS", item3, "returned", result3);
    } else {
        console.log("FAIL", item3, "should return", result3);
    }

    var item4 = "Greetings from Earth";
    var test4 = reverseString(item4);
    var result4 = "htraE morf sgniteerG";
    if (test4 == result4) {
        console.log("PASS", item4, "returned", result4);
    } else {
        console.log("FAIL", item4, "should return", result4);
    }
}

reverseStringTest();
