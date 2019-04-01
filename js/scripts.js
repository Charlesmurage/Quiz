/*this is the Back end logic */
$(document).ready(function(){
    $("#form").submit(function(event){
       event.preventDefault();
       $("#display").text(results);
       var Q1 = parseInt($("input:radio[name = Q1]:checked").val());
       var Q2 = parseInt($("input:radio[name = Q2]:checked").val());
       var Q3 = parseInt($("input:radio[name = Q3]:checked").val());
       var Q4 = parseInt($("input:radio[name= Q4]:checked").val());
       var Q5 = parseInt($("input:radio[name= Q5]:checked").val());
       var Q6 = parseInt($("input:radio[name= Q6]:checked").val());
       var Q7 = parseInt($("input:radio[name= Q7]:checked").val());
       var Q8 = parseInt($("input:radio[name= Q8]:checked").val());


       var results= Q1 + Q2 + Q3 + Q4 + Q5 + Q6 +Q7 + Q8;



       if(results > 40){
         $("#display").text ("PASS")
         $("#display").text("AVERAGE");
       }else {
         $("#display").text("FAIL");
       }


    });
});
// front end logic
$(document).ready(function() {
  $("p").click(function() {
    });
});
