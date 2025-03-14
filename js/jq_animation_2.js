$(function () {
  $(document).on("click", ".btn1_1", function () {
    $(".box1").slideUp(1000, "linear", function () {
      $(".btn1_1").addClass("btn2");
      $(".btn1_1").removeClass("btn1_1").text("Fade In");
    });
  });

  $(document).on("click", ".btn2", function () {
    $(".box1").fadeIn(1000, "swing", function () {
      $(".btn2").addClass("btn1_1");
      $(".btn2").removeClass("btn2").text("Slide Up");
    });
  });
});

$(function () {
  $(".btn2_1").on("click", function () {
    $(".box2").slideToggle(1000, "linear");
  });
  let isOpaque = true;
  $(".btn2_2").on("click", function () {
    if (isOpaque) {
      $(".box2").fadeTo("fast", 0.3);
    } else {
      $(".box2").fadeTo("fast", 1);
    }
    isOpaque = !isOpaque;
  });
});

$(function () {
  $(".btn3_1").on("click", function () {
    $(".txt3_1").animate(
      {
        marginLeft: "80px",
        fonsSize: "30px",
      },
      500,
      "linear",
      function () {
        document.getElementById("p3_1").innerHTML = "모션 완료!";
      }
    );
  });
  $(".btn3_2").on("click", function () {
    $(".txt3_2").animate(
      {
        marginLeft: "+=50px",
      },
      1000
    );
  });
});

$(function () {
  $(".txt4_1").animate({ marginLeft: "100px" }, 1000);
  $(".txt4_2").delay(3000).animate({ marginLeft: "100px" }, 1000);
  $(".btn4").on("click", moveElement);
  function moveElement() {
    $(".txt4_3").animate({ marginLeft: "+=30px" }, 800);
    $(".txt4_4").animate({ marginLeft: "+=30px" }, 800);
    $(".txt4_4").stop();
    $(".txt4_5").animate({ marginLeft: "+=30px" }, 800);
    $(".txt4_5").stop(true, true);
  }
});

$(function () {
  $(".txt5")
    .animate({ marginLeft: "100px" }, 1000)
    .animate({ marginTop: "100px" }, 1000)
    .queue(function () {
      $(this).css({ background: "red" });
      $(this).dequeue();
    })
    .animate({ marginLeft: "0" }, 1000)
    .animate({ marginTop: "50" }, 1000);
});

$(function () {
  $(".txt6_1")
    .animate({ marginLeft: "40px" }, 1000)
    .animate({ marginLeft: "60px" }, 1000)
    .animate({ marginLeft: "100px" }, 1000);
  $(".txt6_2")
    .animate({ marginLeft: "40px" }, 1000)
    .animate({ marginLeft: "60px" }, 1000)
    .animate({ marginLeft: "100px" }, 1000);
  $(".txt6_2").clearQueue();
});
