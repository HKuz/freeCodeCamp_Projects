/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

// Confirm the Ending of a String

function confirmEnding(str, target) {
    // Checks the input str to see if it ends with the target string
    // Outputs a boolean
    var testStr = str.toString();
    var len = target.toString().length;
    var sub = testStr.substr(-len);

    if (sub == target) {
        // console.log("There's a match!");
        return true;
    } else {
        // console.log("Didn't match");
        return false;
    }
}

function confirmEndingTest() {
    // Test suite for confirmEnding
    var item1 = "Bastian, n";
    var test1 = confirmEnding("Bastian", "n");
    var result1 = true;
    if (test1 == result1) {
        console.log("PASS", item1, "returned", result1);
    } else {
        console.log("FAIL", item1, "should return", result1);
    }

    var item2 = "Connor, n";
    var test2 = confirmEnding("Connor", "n");
    var result2 = false;
    if (test2 == result2) {
        console.log("PASS", item2, "returned", result2);
    } else {
        console.log("FAIL", item2, "should return", result2);
    }

    var item3 = "Walking on water and developing software from a specification are easy if both are frozen, specification";
    var test3 = confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification");
    var result3 = false;
    if (test3 == result3) {
        console.log("PASS", item3, "returned", result3);
    } else {
        console.log("FAIL", item3, "should return", result3);
    }

    var item4 = "He has to give me a new name, name";
    var test4 = confirmEnding("He has to give me a new name", "name");
    var result4 = true;
    if (test4 == result4) {
        console.log("PASS", item4, "returned", result4);
    } else {
        console.log("FAIL", item4, "should return", result4);
    }

    var item5 = "He has to give me a new name, me";
    var test5 = confirmEnding("He has to give me a new name", "me");
    var result5 = true;
    if (test5 == result5) {
        console.log("PASS", item5, "returned", result5);
    } else {
        console.log("FAIL", item5, "should return", result5);
    }

    var item6 = "He has to give me a new name, na";
    var test6 = confirmEnding("He has to give me a new name", "na");
    var result6 = false;
    if (test6 == result6) {
        console.log("PASS", item6, "returned", result6);
    } else {
        console.log("FAIL", item6, "should return", result6);
    }

    var item7 = "If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing, mountain";
    var test7 = confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");
    var result7 = false;
    if (test7 == result7) {
        console.log("PASS", item7, "returned", result7);
    } else {
        console.log("FAIL", item7, "should return", result7);
    }
}

confirmEndingTest();
