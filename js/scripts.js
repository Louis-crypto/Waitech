$(document).ready(function () {
  // $("#order").on("click", function(){
  //   $("#menu").fadeIn(1000);
  //   $(".deliver").hide();
  // })
  
  $("#moreText1").on("click", function(){
    $("#more1").show();
    $("#lessText1").show();
    $("#moreText1").hide();
  });

  $("#lessText1").on("click", function(){
    $("#more1").hide();
    $("#lessText1").hide();
    $("#moreText1").show();
  });

  $("#moreText2").on("click", function(){
    $("#more2").show();
    $("#lessText2").show();
    $("#moreText2").hide();
  });

  $("#lessText2").on("click", function(){
    $("#more2").hide();
    $("#lessText2").hide();
    $("#moreText2").show();
  });

  $("#moreText3").on("click", function(){
    $("#more3").show();
    $("#lessText3").show();
    $("#moreText3").hide();
  });

  $("#lessText3").on("click", function(){
    $("#more3").hide();
    $("#lessText3").hide();
    $("#moreText3").show();
  });

  $("#submit").on("click", function () {
    var userName = document.getElementById("name").value;
    alert(userName + " " + "we have received your message, thank you for your feedback");
  });
  
  $("#menu_select").click(function(){
    $("#lorem").toggle();
  });

});