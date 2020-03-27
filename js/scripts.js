$(document).ready(function(){
 $("form#survey").submit(function(event) {
   event.preventDefault();

   var python = 0;
   var ruby = 0;
   var csharp = 0;
   var swift = 0;
   var javascript = 0;
   var go = 0;
   var rust = 0;

   var q1answer = $("input:radio[name=q1]:checked").val(); 
   var q2answer = $("input:radio[name=q2]:checked").val();
   var q3answer = $("input:radio[name=q3]:checked").val();
   var q4answer = $("input:radio[name=q4]:checked").val();
   var q5answer = $("input:radio[name=q5]:checked").val();
   var q6answer = $("input:radio[name=q6]:checked").val();
  
   

   var resultsArray = [python, ruby, csharp, swift, javascript, go, rust];
   var resultsCounter = 0;
   var highestValue = 6;
   var trueResults = [];

   console.log(resultsArray);

   while (resultsCounter > 3) {
     for (i = 0; i < resultsArray.length; i++) {
       if (resultsArray[i] === highestValue && resultsCounter < 3) {
        trueResults.append(i);
       }

     }
     highestValue -= 1;
   }
   
 });

});