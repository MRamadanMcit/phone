$(document).ready(function() {
  $("header .title .edit").click(function() {
    $(this).hide();
    $(".tittle").addClass("editable");
    $("h1").attr("contenteditable", "true");
    $("header .title .save").show();
  });

  $("header .title .save").click(function() {
    $(this).hide();
    $(".tittle").removeClass("editable");
    $("h1").removeAttr("contenteditable");
    $("header .title .edit").show();
  });

  $(".box1 .edit").click(function() {
    $(this).hide();
    $(".box1").addClass("editable");
    $(".box1 h3, .box1 p").attr("contenteditable", "true");
    $(".box1 .save").show();
  });

  $(".box1 .save").click(function() {
    $(this).hide();
    $(".box1").removeClass("editable");
    $(".box1 h3, .box1 p").removeAttr("contenteditable");
    $(".box1 .edit").show();
  });

  $(".box2 .edit").click(function() {
    $(this).hide();
    $(".box2").addClass("editable");
    $(".box2 h3, .box2 p").attr("contenteditable", "true");
    $(".box2 .save").show();
  });

  $(".box2 .save").click(function() {
    $(this).hide();
    $(".box2").removeClass("editable");
    $(".box2 h3, .box2 p").removeAttr("contenteditable");
    $(".box2 .edit").show();
  });

  $(".box3 .edit").click(function() {
    $(this).hide();
    $(".box3").addClass("editable");
    $(".box3 h3, .box3 p").attr("contenteditable", "true");
    $(".box3 .save").show();
  });

  $(".box3 .save").click(function() {
    $(this).hide();
    $(".box3").removeClass("editable");
    $(".box3 h3, .box3 p").removeAttr("contenteditable");
    $(".box3 .edit").show();
  });

  $(".box4 .edit").click(function() {
    $(this).hide();
    $(".box4").addClass("editable");
    $(".box4 h3, .box4 p").attr("contenteditable", "true");
    $(".box4 .save").show();
  });

  $(".box4 .save").click(function() {
    $(this).hide();
    $(".box4").removeClass("editable");
    $(".box4 h3, .box4 p").removeAttr("contenteditable");
    $(".box4 .edit").show();
  });

  $(".box5 .edit").click(function() {
    $(this).hide();
    $(".box5").addClass("editable");
    $(".box5 h3, .box5 p").attr("contenteditable", "true");
    $(".box5 .save").show();
  });

  $(".box5 .save").click(function() {
    $(this).hide();
    $(".box5").removeClass("editable");
    $(".box5 h3, .box5 p").removeAttr("contenteditable");
    $(".box5 .edit").show();
  });

  $(".box6 .edit").click(function() {
    $(this).hide();
    $(".box6").addClass("editable");
    $(".box6 h3, .box6 p").attr("contenteditable", "true");
    $(".box6 .save").show();
  });

  $(".box6 .save").click(function() {
    $(this).hide();
    $(".box6").removeClass("editable");
    $(".box6 h3, .box6 p").removeAttr("contenteditable");
    $(".box6 .edit").show();
  });

  $(".box7 .edit").click(function() {
    $(this).hide();
    $(".box7").addClass("editable");
    $(".box7 h3, .box7 p").attr("contenteditable", "true");
    $(".box7 .save").show();
  });

  $(".box7 .save").click(function() {
    $(this).hide();
    $(".box7").removeClass("editable");
    $(".box7 h3, .box7 p").removeAttr("contenteditable");
    $(".box7 .edit").show();
  });

  $(".box8 .edit").click(function() {
    $(this).hide();
    $(".box8").addClass("editable");
    $(".box8 h3, .box8 p").attr("contenteditable", "true");
    $(".box8 .save").show();
  });

  $(".box8 .save").click(function() {
    $(this).hide();
    $(".box8").removeClass("editable");
    $(".box8 h3, .box8 p").removeAttr("contenteditable");
    $(".box8 .edit").show();
  });

  $(".box9 .edit").click(function() {
    $(this).hide();
    $(".box9").addClass("editable");
    $(".description-content").attr("contenteditable", "true");
    $(".box9 .save").show();
  });

  $(".box9 .save").click(function() {
    $(this).hide();
    $(".box9").removeClass("editable");
    $(".description-content").removeAttr("contenteditable");
    $(".box9 .edit").show();
  });

  $(".box10 .edit").click(function() {
    $(this).hide();
    $(".box10").addClass("editable");
    $("img").css("visibility", "hidden");
    $(".box10 .save").show();
  });

  $(".box10 .save").click(function() {
    $(this).hide();
    $(".box10").removeClass("editable");
    $("img").removeAttr("contenteditable");
    $(".box10 .edit").show();
  });
});
