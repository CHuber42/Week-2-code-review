$(document).ready(function(){
 

  $("form#voter-form").submit(function(event) {
    event.preventDefault();
    // var age = parseInt()
    
    if (parseInt($("#user-age").val()) >= 18 ){
      $("#eighteen-plus").show();
    }
    else {
      $("#eighteen-minus").show();
    }
  });
});