function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

function sideBarSticky() {
  if (screenWidth > 991) {
    const position = window.pageYOffset;
    if ($(".timeline-right-sidebar").length) {
      const rightBox = document.querySelector(".timeline-right-sidebar");
      const divHeight = rightBox.clientHeight;
      const rightScrollHeight = divHeight + 43 - screenHeight;
      if (position >= rightScrollHeight) {
        if (isInViewport(rightBox)) {
          $(".timeline-right-sidebar").addClass("fixed");
        } else {
          $(".timeline-right-sidebar").removeClass("fixed");
        }
      } else {
        $(".timeline-right-sidebar").removeClass("fixed");
      }
    }

    if ($(".timeline-left-sidebar").length) {
      const leftBox = document.querySelector(".timeline-left-sidebar");
      const leftDivHeight = leftBox.clientHeight;
      const leftScrollHeight = leftDivHeight + 43 - screenHeight;
      if (screenHeight > leftDivHeight) {
        $(".timeline-left-sidebar").addClass("fixedTop");
      } else {
        if (position >= leftScrollHeight) {
          if (isInViewport(leftBox)) {
            $(".timeline-left-sidebar").addClass("fixed");
          } else {
            $(".timeline-left-sidebar").removeClass("fixed");
          }
        } else {
          $(".timeline-left-sidebar").removeClass("fixed");
        }
      }
    }
  }
}

document.addEventListener("scroll", sideBarSticky, {
  passive: true,
});
document.addEventListener("resize", sideBarSticky, {
  passive: true,
});
document.addEventListener("load", sideBarSticky, {
  passive: true,
});

// Refresh Prompt
$(function () {
  function sticky2() {
    if ($(window).scrollTop() >= 450) {
      $(".refresh-prompt").addClass("show");
    } else if ($(window).scrollTop() < 450) {
      $(".refresh-prompt").removeClass("show");
    }
  }
  $(window).on("scroll", function () {
    sticky2();
  });
  $(window).on("load", sticky2());
});

$(".share-icon").click(function () {
  $(this).siblings(".share-options").toggleClass("show");
});
