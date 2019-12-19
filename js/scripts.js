$(document).ready(function () {


  $("#moreText1").on("click", function () {
    $("#more1").show();
    $("#lessText1").show();
    $("#moreText1").hide();
  });

  $("#lessText1").on("click", function () {
    $("#more1").hide();
    $("#lessText1").hide();
    $("#moreText1").show();
  });

  $("#moreText2").on("click", function () {
    $("#more2").show();
    $("#lessText2").show();
    $("#moreText2").hide();
  });

  $("#lessText2").on("click", function () {
    $("#more2").hide();
    $("#lessText2").hide();
    $("#moreText2").show();
  });

  $("#moreText3").on("click", function () {
    $("#more3").show();
    $("#lessText3").show();
    $("#moreText3").hide();
  });

  $("#lessText3").on("click", function () {
    $("#more3").hide();
    $("#lessText3").hide();
    $("#moreText3").show();
  });

  $("#menu_select").on("click", function () {
    $(".container1").show(5000);
  });

  $("#cancel").on("click", function () {
    $(".container1").hide(3000);
  })

  //   $("input[name='bla[]']").each( function () {
  //     alert( $(this).val() );
  // });

  $("#submit").on("click", function () {
    var userName = document.getElementById("name").value;
    alert(userName + " " + "we have received your message, thank you for your feedback");
  });

  $("#chec").click(function () {
    $("#received").show();
  });

});

$(document).ready(function () {
  $('input[type="checkbox"]').change(function () {
    var totalprice = 0;
    $('input[type="checkbox"]:checked').each(function () {
      totalprice = totalprice + parseInt($(this).val());
    });
    $('#price').val("Ksh " + totalprice);
  });
});



