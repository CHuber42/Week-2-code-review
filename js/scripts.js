$(document).ready(function(){
 $("form#survey").submit(function(event) {
   event.preventDefault();

   var q1answer = $("input:radio[name=q1]:checked").val(); 
   var q2answer = $("input:radio[name=q2]:checked").val();
   var q3answer = $("input:radio[name=q3]:checked").val();
   var q4answer = $("input:radio[name=q4]:checked").val();
   var q5answer = $("input:radio[name=q5]:checked").val();
   var q6answer = $("input:radio[name=q6]:checked").val();
   console.log(q1answer, q2answer, q3answer, q4answer, q5answer, q6answer);
 });

});