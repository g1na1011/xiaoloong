// function load_lunch() {
//   document.getElementById("content").innerHTML =
//     '<object type="text/html" data="../lunch-menu.html"></object>';
// }

$(document).ready(function() {
  $("#lunch-menu").on("click", function() {
    $("#content").load("../lunch-menu.html");
  });
});
