$("#Signout").click(function() {
  $.removeCookie("access");
  $.removeCookie("refresh");
  location.reload();
});
$("#Calendar").click(function() {
  console.log(islogin);
  if (islogin == true) {
    location.href = "Calendar.html";
  } else {
    alert("로그인을 하십시오.");
  }
});
