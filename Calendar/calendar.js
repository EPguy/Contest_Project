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
      console.log("dayClick", date.format());
    },
    select: function(startDate, endDate) {
      console.log("select", startDate.format(), endDate.format());
    }
  });

  // when the timezone selector changes, dynamically change the calendar option
  $("#timezone-selector").on("change", function() {
    $("#calendar").fullCalendar("option", "timezone", this.value || false);
  });
});
