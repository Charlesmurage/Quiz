$(document).ready(function () {
    $(".button").click(function() {
      $("#questions").slideToggle();
    });
  $("#button").click(function() {
      var ans1 =parseInt($('input[name="no1"]:checked').val());
      var ans2 =parseInt($('input[name="no2"]:checked').val());
      var ans3 = parseInt($('input[name="no3"]:checked').val());
      var ans4 = parseInt($('input[name="no4"]:checked').val());
      var ans5 = parseInt($('input[name="no5"]:checked').val());
      var score = 0;
      if (ans1 == 10) {
        score += 10;
      }
      if (ans2 ==10) {
        score += 10;
      }
      if (ans3 == 10) {
        score += 10;
      }
      if (ans4 ==10) {
        score += 10;
      }
      if (ans5 == 10) {
        score += 10;
      }
      $("#result").val("Your score is "+score);
      $("#button").click(function () {
        $("#questions").hide();
        $("#result").slideToggle();
      })
      
      });
      });