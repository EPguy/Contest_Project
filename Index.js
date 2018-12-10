$("#Signout").click(function() {
  $.removeCookie("access");
  $.removeCookie("refresh");
  location.reload();
});
$("#Calendar").click(function() {
  console.log(islogin);
  if (islogin == true) {
    let exit_circle = document.createElement("i");
    exit_circle.className = "far fa-times-circle fa-3x";
    exit_circle.addEventListener("click", function() {
      $("#calendar").toggle("fast");
      $(".far").remove();
    });
    $("#calendar").append(exit_circle);
    $("#calendar").toggle("fast");
  } else {
    let exit_circle = document.createElement("i");
    exit_circle.className = "far fa-times-circle fa-3x";
    exit_circle.addEventListener("click", function() {
      $("#calendar").toggle("fast");
      $(".far").remove();
    });
    $("#calendar").append(exit_circle);
    $("#calendar").toggle("fast");
  }
});
