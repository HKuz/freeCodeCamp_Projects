/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

// Caeser's Cipher

function rot13(str) {
    // Changes the letters of the input string using a 13-shift Caeser Cipher
    // Returns an encoded or decoded string
    var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var index;
    var shift = 13;
    var tempChar;
    var uniCodeChar;
    var buildStr = '';

    for (var i = 0; i < str.length; i++) {
        // Get the index of that letter in the alpha string
        index = alpha.indexOf(str[i]);
        // console.log("Index in alpha string is: " + index);

        if (index < 0) {
            tempChar = str[i];
            // console.log("Character is not a capital letter");
        } else {
            index = (index + shift) % 26;
            // console.log("Shifted mod index is: " + index);
            uniCodeChar = alpha.charCodeAt(index);
            tempChar = String.fromCharCode(uniCodeChar);
            // console.log("Letter at shifted index: " + tempChar);
        }
        buildStr += tempChar;
    }
    //console.log(buildStr);
    return buildStr;
}

function rot13Test() {
    // Test suite for rot13
    var item1 = "SERR PBQR PNZC";
    var test1 = rot13(item1);
    var result1 = "FREE CODE CAMP";
    if (test1 == result1) {
        console.log("PASS", item1, "returned", result1);
    } else {
        console.log("FAIL", item1, "should return", result1);
    }
    
    var item2 = "SERR CVMMN!";
    var test2 = rot13(item2);
    var result2 = "FREE PIZZA!";
    if (test2 == result2) {
        console.log("PASS", item2, "returned", result2);
    } else {
        console.log("FAIL", item2, "should return", result2);
    }
    
    var item3 = "SERR YBIR?";
    var test3 = rot13(item3);
    var result3 = "FREE LOVE?";
    if (test3 == result3) {
        console.log("PASS", item3, "returned", result3);
    } else {
        console.log("FAIL", item3, "should return", result3);
    }
    
    var item4 = "GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.";
    var test4 = rot13(item4);
    var result4 = "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.";
    if (test4 == result4) {
        console.log("PASS", item4, "returned", result4);
    } else {
        console.log("FAIL", item4, "should return", result4);
    }
}

rot13Test();
