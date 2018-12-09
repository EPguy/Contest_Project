var username = document.querySelector(".Name");
var usergrade = document.querySelector(".Grade");
var userclass = document.querySelector(".Class");
var usernumber = document.querySelector(".Number");
var userpassword = document.querySelector(".Password");

jQuery.fn.serializeObject = function() {
  var obj = null;
  try {
    if (this[0].tagName && this[0].tagName.toUpperCase() == "FORM") {
      var arr = this.serializeArray();
      if (arr) {
        obj = {};
        jQuery.each(arr, function() {
          obj[this.name] = this.value;
        });
      }
    }
  } catch (e) {
    alert(e.message);
  } finally {
  }
  return obj;
};

$("#login").submit(function(event) {
  event.preventDefault();
  var url = $(this).attr("action");
  var data = $(this).serializeObject();
  console.log(url);
  console.log(data);
  $.ajax({
    type: "POST",
    url: url,
    dataType: "json",
    contentType: "application/json",
    data: JSON.stringify(data),
    success: function(data) {
      alert("SignUp was success");
      location.href = "index.html";
      console.log(data);
    },
    error: function(jqXHR) {
      if (jqXHR.status == 409) {
        alert("이미 있는 회원정보 입니다.");
      } else if (jqXHR.status == 400) {
        alert("회원정보를 정확하게 입력해 주세요.");
      }
    }
  });
});
