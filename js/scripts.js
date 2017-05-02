$(function(){
  $("form").submit(function(event){
    event.preventDefault();

    //variables
    var userInput = $("input").val();
    var vowels = ["a", "e", "i", "o", "u", "y", "A", "E", "I", "O", "U", "Y"];

    //Change string into an array
    userInput = userInput.split("");

    //Replace vowels with "-" with a loop
    for (var index = 0; index < userInput.length; index += 1) {
      if (vowels.includes(userInput[index])) {
        userInput[index] = "-";
      }
    }

    //Change array back to a string
    userInput = userInput.join("");


    //Show outcomes
    $("#output").show();
    $("#output").text(userInput);
  });
});
