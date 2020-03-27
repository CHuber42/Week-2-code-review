function pushResults(arrayHandler){
  var resultsDestination = [];
  var highestValue = 6;
  
  while (resultsDestination.length < 3) {
    
    for (i = 0; i < arrayHandler.length; i++) {
      
      if ((arrayHandler[i] === highestValue) && (resultsDestination.length < 3)) {
        resultsDestination.push(i);  
      }
  
    }    
    highestValue -= 1;
  } 

return resultsDestination;
}

function publishResults(resultsArray) {
  for (i = 0; i < 3; i++) {
    switch (resultsArray[i]) {
      case 0:
      $("#results-container").append('<li>Python</li>');
      continue;
      case 1:
      $("#results-container").append('<li>Ruby</li>');
      continue;
      case 2:
      $("#results-container").append('<li>C#</li>');
      continue;
      case 3:
      $("#results-container").append('<li>Swift</li>');
      continue;
      case 4:
      $("#results-container").append('<li>JavaScript</li>');
      continue;
      case 5:
      $("#results-container").append('<li>Go</li>');
      continue;
      case 6: 
      $("#results-container").append('<li>Rust</li>');
      continue;
    }

  }
}



$(document).ready(function(){
 $("form#survey").submit(function(event) {
  event.preventDefault();
  $("#results-presentation").removeClass("hidden");

  //Create counters to quantify an item's popularity
  var python = 0;
  var ruby = 0;
  var csharp = 0;
  var swift = 0;
  var javascript = 0;
  var go = 0;
  var rust = 0;

  //The below if/else if functions are the processors for each entry;
  //depending on the selection, it adds 1 to the given language's 
  //selection weight.
  var q1answer = $("input:radio[name=q1]:checked").val(); 
  if (q1answer === "a"){
    csharp += 1;
    python += 1;
    swift += 1;
    rust += 1;
  }
  else if (q1answer === "b"){
    javascript += 1;
    python += 1;
    go += 1;
    ruby += 1;
  }

  var q2answer = $("input:radio[name=q2]:checked").val();
  if (q2answer === "a"){
    rust += 1;
    python += 1;
    csharp += 1;
    ruby += 1;
  }
  else if (q2answer === "b"){
    javascript += 1;
    csharp += 1;
    swift += 1;
  }

  var q3answer = $("input:radio[name=q3]:checked").val();
  if (q3answer === "a"){
    python += 1;
    go += 1;
    swift += 1;
    ruby += 1;
  }
  else if (q3answer === "b"){
    rust += 1;
    javascript += 1;
    csharp += 1;      
  }
  var q4answer = $("input:radio[name=q4]:checked").val();
  if (q4answer === "a"){
    swift += 1;
    go += 1;
    javascript += 1;
    ruby += 1;
  }
  else if (q4answer === "b"){
    csharp += 1;
    python += 1;
    rust += 1;
  }

  var q5answer = $("input:radio[name=q5]:checked").val();
  if (q5answer === "a"){
    ruby += 1;
    python += 1;
    csharp += 1;
    go += 1;
  }
  else if (q5answer === "b"){
    rust += 1;
    javascript += 1;
    swift += 1;
  }
  
  var q6answer = $("input:radio[name=q6]:checked").val();
  if (q6answer === "a"){
    javascript += 1;
    python += 1;
    ruby += 1;
  }
  else if (q6answer === "b"){
    csharp += 1;
    swift += 1;
    rust += 1;
    go += 1;
  }

  //Below here, we create the equivalent of a dict.
  //First we create an array to correlate language:dictionary:weighting in selection
  var resultsArray = [python, ruby, csharp, swift, javascript, go, rust];
  //Then we call the function @ top to grab these **indeces** with the highest weight, and store them in an array.
  //-Emphasis: Not the weights; the indeces with the highest weights!-
  var trueResults = pushResults(resultsArray);

 
  //Now back-translate the array of indeces into their respective languages,
  //and append the corresponding language to the results <ul> as an <li>
  publishResults(trueResults);
 });

 $(".pagebutton").click(function(){
  $(".pagebutton, .quizpage").toggleClass("hidden");
 });

});







while (trueResults.length < 3) {
  for (i = 0; i < resultsArray.length; i++) {
    if ((resultsArray[i] === highestValue) && (trueResults.length < 3)) {
      trueResults.push(i);
   
    }

  }    
  highestValue -= 1;
}
