$(function () {
  function sticky() {
    if ($(window).scrollTop() >= 1) {
      $(".nav-header").addClass("sticky");
    } else if ($(window).scrollTop() < 1) {
      $(".nav-header").removeClass("sticky");
    }
  }
  $(window).on("scroll", function () {
    sticky();
  });
  $(window).on("load", sticky());
});

// Back to Top Button
$(".btt").hide();
$(function () {
  function sticky() {
    let hgt = $(window).innerHeight();
    if ($(window).scrollTop() >= hgt) {
      $(".btt").show();
    } else if ($(window).scrollTop() < hgt) {
      $(".btt").hide();
    }
  }
  $(window).on("scroll", function () {
    sticky();
  });
  $(window).on("load", sticky());
});

$(document).mouseup(function (e) {
  var fnav = $(".navigation");
  if (!fnav.is(e.target)) {
    $(".navigation").removeClass("show");
    $(".menu-icon").removeClass("open");
    $(".nav-header").removeClass("shadow");
  }
  $(".menu-icon").on("click", function () {
    $(this).toggleClass("open");
    $(".navigation").toggleClass("show");
    $(".nav-header").toggleClass("shadow");
  });
});

$(".dash-menu-icon").on("click", function () {
  $(this).toggleClass("open");
  $(".dashboard-main").toggleClass("open");
  $(".dashboard-sidebar").toggleClass("close");
});

// Account dropdown
$(document).mouseup(function (e) {
  var fnav = $(".navbar-account");
  if (!fnav.is(e.target) && fnav.has(e.target).length === 0) {
    $(".account-dropdown").removeClass("show");
  }
});

$(".navbar-account").on("click", function () {
  $(".account-dropdown").toggleClass("show");
});

$(document).mouseup(function (e) {
  var sopt = $(".share-options");
  if (!sopt.is(e.target) && sopt.has(e.target).length === 0) {
    sopt.removeClass("show");
  }
});

// Cookies Alert Dialog
setTimeout(function () {
  $(".cookies-alert").show();
}, 2000);
$(".cookies-close").click(function () {
  $(".cookies-alert").hide();
});

// BUSINESS TAB
$(".recentReviewsTab").hide();
$("#submitReviewTab").click(function () {
  $(this).addClass("active");
  $("#recentReviewsTab").removeClass("active");
  $(".recentReviewsTab").hide();
  $(".submitReviewTab").show();
});

$("#recentReviewsTab").click(function () {
  $(this).addClass("active");
  $("#submitReviewTab").removeClass("active");
  $(".submitReviewTab").hide();
  $(".recentReviewsTab").show();
});

// BLAB TIMELINE POST TAB
$(".blabCommentTab").hide();
$("#blabPostTab").click(function () {
  $(this).addClass("active");
  $("#blabCommentTab").removeClass("active");
  $(".blabCommentTab").hide();
  $(".blabPostTab").show();
});

$("#blabCommentTab").click(function () {
  $(this).addClass("active");
  $("#blabPostTab").removeClass("active");
  $(".blabPostTab").hide();
  $(".blabCommentTab").show();
});

// PROFILE TAB
$(".editProfileTab").hide();
$(".changePasswordTab").hide();
$(".blabVerificationTab").hide();
$("#profileTab").click(function () {
  $(this).addClass("active");
  $("#editProfileTab").removeClass("active");
  $("#changePasswordTab").removeClass("active");
  $("#blabVerificationTab").removeClass("active");
  $(".editProfileTab").hide();
  $(".changePasswordTab").hide();
  $(".blabVerificationTab").hide();
  $(".profileTab").show();
});

$("#editProfileTab").click(function () {
  $(this).addClass("active");
  $("#profileTab").removeClass("active");
  $("#changePasswordTab").removeClass("active");
  $("#blabVerificationTab").removeClass("active");
  $(".profileTab").hide();
  $(".changePasswordTab").hide();
  $(".blabVerificationTab").hide();
  $(".editProfileTab").show();
});

$("#changePasswordTab").click(function () {
  $(this).addClass("active");
  $("#profileTab").removeClass("active");
  $("#editProfileTab").removeClass("active");
  $("#blabVerificationTab").removeClass("active");
  $(".profileTab").hide();
  $(".editProfileTab").hide();
  $(".blabVerificationTab").hide();
  $(".changePasswordTab").show();
});

$("#blabVerificationTab").click(function () {
  $(this).addClass("active");
  $("#profileTab").removeClass("active");
  $("#editProfileTab").removeClass("active");
  $("#changePasswordTab").removeClass("active");
  $(".profileTab").hide();
  $(".editProfileTab").hide();
  $(".changePasswordTab").hide();
  $(".blabVerificationTab").show();
});

var $animation_elements = $(".animation-element");
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = window_top_position + window_height;

  $.each($animation_elements, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height;

    if (
      element_bottom_position >= window_top_position &&
      element_top_position <= window_bottom_position
    ) {
      $element.addClass("in-view");
    } else {
      $element.removeClass("in-view");
    }
  });
}

$window.on("scroll resize", check_if_in_view);
$window.trigger("scroll");

// See More Onclick loading icon
$(".link .fa-spinner").hide();
$(".more").click(function () {
  $(this).siblings(".fa-spinner").toggle();
});

// Close blab-alert
$(".blab-alert button").click(function () {
  $(".blab-alert").slideUp();
});

$(".dash-blab-alert button").click(function () {
  $(".dash-blab-alert").slideUp();
});

$(".dash-info-close").click(function () {
  $(".dash-info").slideUp();
});

// Filter toggle
$(".filters-btn").click(function () {
  $(".filter-search").toggle();
  $(".applied-filters").toggle();
});

$(function () {
  // Dashboard Alert Close
  $(".alert-close").click(function () {
    $(".dashboard-alert").slideUp();
  });

  $("#showSideProfile").click(function () {
    $(".timeline-left-sidebar").toggleClass("show");
    $(".middleDiv").toggleClass("shadow");
  });
  $(".timeline-left-sidebar .close").click(function () {
    $(".timeline-left-sidebar").toggleClass("show");
    $(".middleDiv").toggleClass("shadow");
  });
  $("#showSidebarSearch").click(function () {
    $(".timeline-right-sidebar").toggleClass("show");
    $(".middleDiv").toggleClass("shadow");
  });
  $(".timeline-right-sidebar .close").click(function () {
    $(".timeline-right-sidebar").toggleClass("show");
    $(".middleDiv").toggleClass("shadow");
  });

  $("#showReviewSearch").click(function () {
    $(".peer-review-left-sidebar").toggleClass("show");
    $("#peerReview").toggleClass("shadow");
  });

  $(".peer-review-search .close").click(function () {
    $(".peer-review-left-sidebar").toggleClass("show");
    $("#peerReview").toggleClass("shadow");
  });
});
