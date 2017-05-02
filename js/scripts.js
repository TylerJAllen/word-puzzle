$(function(){
  $("form").submit(function(event){
    event.preventDefault();

    //variables
    var userInput = $("input").val();
    var vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];

    userInput = userInput.split("");

    for (var index = 0; index < userInput.length; index += 1) {
      if (vowels.includes(userInput[index])) {
        userInput[index] = "-";
      }
    }

    userInput = userInput.join("");

    $("#output").show();
    $("#output").text(userInput);
  });
});
