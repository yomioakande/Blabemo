var exte;
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
  var arr = this.files[0].name.split(".");
  exte = arr[arr.length - 1];
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
      $(".navbar-account>img").attr("src", response);
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
