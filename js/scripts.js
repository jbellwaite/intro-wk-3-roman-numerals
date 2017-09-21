/*// Back-end, business logic
var newString = [""];
var i = "I";
var v = "V";
var x = "X";


function romanNumeralize(input){
  var number = parseInt(input);
  var a = number - 5;
  var b = number - 10;
  var c = number % 5;
  var d = number % 10;
  var four = "IV";
  var nine = "IX";
  var fours = 4;
  // var newI = i.slice();

  if (number <= 3 ){
    var newNumber = i.repeat(number);

  } else if (number === 4) {
    var newNumber = (four);
//
  } else if (number >= 5 && number <= 8 ) {
    var newNumber = v + (i.repeat(a));

  } else if (number === 9) {
    var newNumber = (nine);

  } else if (number >= 10 && number <= 13 ) {
    var newNumber = x + (i.repeat(b));

  } else if (number === 14) {
    var newNumber = (x + four);

  } else if (number >=15 && number <=18) {
    var newNumber = x + v + (i.repeat(c));

  } else if (number === 19) {
    var newNumber = (x + number);
  }
  newString.push(newNumber);

}

// User-interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var number = romanNumeralize(input);
    $("#output").text(newString.join(" "));
  });
});*/

var numeralCodes = [["","I","II","III","IV","V","VI","VII","VIII","IX"],         // Ones
                    ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   // Tens
                    ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], // Hundreds
                    ["", "M", "MM", "MMM"]];        // Thousands

function romanNumeralize(num) {
  var newString = "";
  var digits = num.toString().split('').reverse();
  for (var i=0; i < digits.length; i++){
    newString = numeralCodes[i][parseInt(digits[i])] + newString;
  }
  return newString;
}

// User-interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var newString = romanNumeralize(input);
    if (input >= 4000 || input <= 0) {
      alert("Enter a number greater than 0 but less than 4000");
    } else {
    $("#output").text(newString);
    }
  });
});
