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
  console.log("hi");
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
      console.log(data);
    }
  });
});
