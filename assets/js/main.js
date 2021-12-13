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

// Refresh Prompt
$(function () {
  function sticky() {
    if ($(window).scrollTop() >= 450) {
      $(".refresh-prompt").addClass("show");
    } else if ($(window).scrollTop() < 450) {
      $(".refresh-prompt").removeClass("show");
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

$(function () {
  function sticky2() {
    if ($(window).innerWidth() > 991) {
      let divHeight = $(".timeline-right-sidebar").height();
      $(".middleDiv").height(divHeight + "px");

      let height = $(".timeline-left-sidebar").height() / 2;
      if ($(window).scrollTop() >= height) {
        $(".timeline-left-sidebar").addClass("fixed");
      } else if ($(window).scrollTop() < height) {
        $(".timeline-left-sidebar").removeClass("fixed");
      }
    }
  }
  $(window).on("scroll", function () {
    sticky2();
  });
  $(window).on("load", sticky2());
  $(window).bind("resize", function () {
    sticky2();
  });

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
  // $(".nav-header").toggleClass("shadow");
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
$(".fa-spinner").hide();
$(".more").click(function () {
  // $(this).hide();
  $(this).siblings(".fa-spinner").toggle();
});

var profile_img = $("#profile_img").croppie({
  enableExif: true,
  enableOrientation: true,
  viewport: {
    width: 240,
    height: 240,
    type: "square",
  },
  boundary: {
    width: 250,
    height: 250,
  },
});

$("#image_upload").on("change", function () {
  var reader = new FileReader();
  reader.onload = function (e) {
    profile_img
      .croppie("bind", {
        url: e.target.result,
      })
      .then(function () {
        console.log("jQuery bind complete");
      });
  };
  reader.readAsDataURL(this.files[0]);
});

$("#crop").on("click", function (ev) {
  profile_img
    .croppie("result", {
      type: "canvas",
      // size: 'viewport'
      size: { width: 320, height: 320 },
    })
    .then(function (response) {
      $(".profile-img>img").attr("src", response);
      $("#profileImgModal").modal("hide");
    });
});

$("#rotateLeft").on("click", function () {
  deg = +90;
  profile_img.croppie("rotate", deg);
});
$("#rotateRight").on("click", function () {
  deg = -90;
  profile_img.croppie("rotate", deg);
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
