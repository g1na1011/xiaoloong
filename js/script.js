$(document).ready(function() {
  $("#lunch-menu").on("click", function() {
    $("#content").load("../lunch-menu.html");
  });
});

$(document).ready(function() {
  $("#dinner-menu").on("click", function() {
    $("#content").load("../dinner-menu.html");
  });
});
