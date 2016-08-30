/**
 * freeCodeCamp Front End Algorithm Challenges
 * @author Heather K.
 */

// Convert HTML Entities

function convertHTML(str) {
  // Convert instances of &, <, >, ", and ' to the HTML escape code sequences in a given string
  var htmlStr;
  var htmlSet = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
  };
  //var exp = /[<"&'>]/gi; // Couldn't get RegEx to pick up the > if the < were in the expression, too

  htmlStr = str.split("").map(function(letter) {
      return htmlSet[letter] || letter;
  }).join("");

  console.log(htmlStr);
  return htmlStr;
}
