//Input: array of numeric variables (In this case, each language's weight-value)
//Output: array of length 3, populated with the indeces of the 3 highest values (weights)
//First-in-array wins tiebreakers.
//Please note: Currently the highest possible value is Six (because six choices each granting max weight of 1)
//But if implementing differently, grab highestValue dynamically using a "= Math.max(array)" sub-function.
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

//Input: array of length 3 (ints) representing the indeces (languages) that were most heavily weighted
//output: list items appended into the results list div 
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

//Wipe results list if present (non-first submit detected)
function clearResults() {
  document.getElementById("results-container").innerHTML = "";
}


$(document).ready(function(){
 $("form#survey").submit(function(event) {
  event.preventDefault();
  $("#results-presentation").removeClass("hidden");
 
  //If this is not the 1st time clicking 'show me results',
  //remove the old results
  clearResults();

  //Create (or reset) counters to quantify an item's popularity
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

  //Create the equivalent of a dict where language = index | language's weight = index's value  
  var resultsArray = [python, ruby, csharp, swift, javascript, go, rust];
  
  //See bottom-of-page for uncompressed version
  publishResults(pushResults(resultsArray));



 });
 
 //Toggle which quiz page (div) is visible
 $(".pagebutton").click(function(){
  $(".pagebutton, .quizpage").toggleClass("hidden");
 });

});


  //Then call that grabs the 3 **indeces** with the highest weight into an array.
  //-Emphasis: Not the weights; the indeces with the highest weights!-
  //var trueResults = pushResults(resultsArray);

  
  //Pass the above array of indeces to a reverse-translator + publisher.