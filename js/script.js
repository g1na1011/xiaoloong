$(document).ready(function() {
  $("#lunch-menu").on("click", function() {
    $("#content").load("../lunch-menu.html");
  });

  $("#dinner-menu").on("click", function() {
    $("#content").load("../dinner-menu.html");
  });

  $("#contact").on("click", function() {
    $("#content").load("../contact.html", function() {
      const date = new Date();
      const day = date.getDay();

      switch (day) {
        // Sunday
        case 0:
          $("#sunday").addClass("current-day");
          break;
        // Monday
        case 1:
          $("#monday").addClass("current-day");
          break;
        // Tuesday
        case 2:
          $("#tuesday").addClass("current-day");
          break;
        // Wednesday
        case 3:
          $("#wednesday").addClass("current-day");
          break;
        // Thursday
        case 4:
          $("#thursday").addClass("current-day");
          break;
        // Friday
        case 5:
          $("#friday").addClass("current-day");
          break;
        // Saturday
        case 6:
          $("#saturday").addClass("current-day");
          break;
        default:
          break;
      }
    });
  });

  $("#about").on("click", function() {
    $("#content").load("../about-us.html");
  });
});
