var newString = [""];
var i = "I";
var v = "V";
var x = "X";
var newI = i.slice();


$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var number = parseInt(input);
    var a = number - 5;
    var b = number - 10;
    var c = number % 5;
    var d = number % 10;
    var four = "IV"
    var nine = "IX"

    //var e = number - 4;


    if (number <= 3 ){
        var newNumber = i.repeat(number);

      } else if (number === 4) {
          var newNumber = (four);

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

    $("#output").text(newString.join(" "));
  });
});
