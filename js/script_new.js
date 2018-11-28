$(document).ready(function() {
  $("#lunch-menu, #lunch-menu-mobile").on("click", function() {
    $("#content").load("../lunch-menu.html", function() {
      $(".header-items-mobile-nav").hide();
    });
  });

  $("#dinner-menu, #dinner-menu-mobile").on("click", function() {
    $("#content").load("../dinner-menu.html", function() {
      $(".header-items-mobile-nav").hide();
    });
  });

  $("#contact, #contact-mobile").on("click", function() {
    $("#content").load("../contact.html", function() {
      $(".header-items-mobile-nav").hide();

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

  $("#about, #about-mobile").on("click", function() {
    $("#content").load("../about-us.html", function() {
      $(".header-items-mobile-nav").hide();
    });
  });

  $(window).on("resize", function() {
    const width = $(window).width();
    if (width > 767) {
      $(".header-items-mobile-nav").hide();
      $(".sidebar-items-mobile").hide();
    }
  });
});

window.addEventListener("click", function(e) {
  if (!$(e.target).closest(".header-items-mobile").length) {
    $(".header-items-mobile-nav").hide();
  }
  if (!$(e.target).closest(".sidebar-mobile").length) {
    $(".sidebar-items-mobile").hide();
  }
});

function showMobileNav() {
  $(".header-items-mobile-nav").toggle();
}

function showMobileSidebarNav() {
  $(".sidebar-items-mobile").toggle();
}
