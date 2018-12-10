$(document).ready(function() {
  $("#calendar").fullCalendar({
    header: {
      left: "prev,next today",
      center: "title",
      right: "month,agendaWeek,agendaDay,listWeek"
    },
    defaultDate: "2018-03-12",
    navLinks: true, // can click day/week names to navigate views
    editable: true,
    selectable: true,
    eventLimit: true, // allow "more" link when too many events
    loading: function(bool) {
      $("#loading").toggle(bool);
    },
    eventRender: function(event, el) {
      // render the timezone offset below the event title
      if (event.start.hasZone()) {
        el.find(".fc-title").after(
          $('<div class="tzo"/>').text(event.start.format("Z"))
        );
      }
    },
    dayClick: function(date) {
      //addCalendar();
      addCalendar(date.format("DD"), date.format("MM"), date.format("YYYY"));
    },
    select: function(startDate, endDate) {}
  });

  // when the timezone selector changes, dynamically change the calendar option
  $("#timezone-selector").on("change", function() {
    $("#calendar").fullCalendar("option", "timezone", this.value || false);
  });
});

addCalendar = function(currentday, currentmonth, currentyear) {
  var date = moment(currentyear + "-" + currentmonth + "-" + currentday);
  console.log(date);
  if (date.isValid()) {
    var plan = prompt("계획을 입력하세요.");
    if (plan !== null) {
      $("#calendar").fullCalendar("renderEvent", {
        title: plan,
        start: date,
        allDay: true
      });
    }
  } else {
    alert("Invalid date.");
  }
  // 계획입력

  /*$.ajax({
    type: "POST",
    url: "https://class-room-calendar.herokuapp.com/calendar",
    dataType: "json",
    contentType: "application/json",
    data: {
      day: currentday,
      month: currentmonth,
      year: currentyear
    }
  });*/
};
