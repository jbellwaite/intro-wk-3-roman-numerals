var newString = [""];
var i = "I";

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var input = $("#input").val();
    var number = parseInt(input);
    if (number <= 3 ){
        var newNumber = i.repeat(number);
      newString.push(newNumber);
    };
    $("#output").text(newString.join(" "));
  });
});
