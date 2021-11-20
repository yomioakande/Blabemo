$(function () {
  function sticky() {
    if ($(window).scrollTop() >= 30) {
      $(".nav-header").addClass("sticky");
    } else if ($(window).scrollTop() < 30) {
      $(".nav-header").removeClass("sticky");
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
$(".share-icon").click(function () {
  $(this).siblings(".share-options").toggleClass("show");
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
