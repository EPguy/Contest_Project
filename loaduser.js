var loginbutton = document.getElementById("Signin");
var islogin = false;
$.ajax({
  type: "GET",
  url: "https://class-room-calendar.herokuapp.com/users",
  beforeSend: function(request) {
    request.setRequestHeader("Authorization", "Bearer" + $.cookie("access"));
  },
  success: function(data) {
    $("#username").text(
      "로그인이 완료되었습니다. 회원정보: " + data.username + " "
    );
    $("#grade").text(data.grade + " 학년");
    $("#cls").text(data.cls + " 반");
    $("#number").text(data.number + " 번");
    islogin = true;

    loginbutton.style.visibility = "hidden";
  }
});
