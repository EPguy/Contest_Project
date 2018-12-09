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
    beforeSend: function(request) {
      request.setRequestHeader("Authorization", "Barer" + $.cookie("access"));
    },
    success: function(data) {
      console.log(data);
      console.log(data.access);
      console.log(data.refresh);
      $.cookie("access", data.access, { path: "/" });
      $.cookie("refresh", data.refresh, { path: "/" });
      alert("로그인이 성공하였습니다.");
      location.href = "index.html";
    },
    error: function(jqXHR) {
      if (jqXHR.status == 401 || jqXHR.status == 404) {
        alert("아이디 또는 비밀번호가 틀립니다.");
      }
    }
  });
});
