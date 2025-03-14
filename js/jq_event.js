$(function () {
  $(".btn1").click(function () {
    var $target = $(this).parent().next();
    var currentColor = $target.css("color");
    if (currentColor === "rgb(0, 0, 0)") {
      $target.css({ color: "#f00" });
    } else {
      $target.css({ color: "#000" });
    }
  });
  $(".btn2").on({
    "mouseover focus": function () {
      $(".btn2").parent().next().css({ color: "#0f0" });
    },
    "mouseout blur": function () {
      $(".btn2").parent().next().css({ color: "#000" });
    },
  });
});

$(".btn3").on({
  "mouseover focus": function () {
    $(".btn3").parent().next().css({ color: "#0f0" });
  },
  "mouseout blur": function () {
    $(".btn3").parent().next().css({ color: "#000" });
  },
});

$(".btn3").trigger("mouseover");

$(function () {
  $(".btn4").click(function () {
    $(".btn4").parent().next().css({ color: "blue" });
  });
  $(".btn4").off("click");
});

$(function () {
  $(document).ready(function () {
    var h1 = $(".img1").height();
    document.getElementById("p5").innerHTML = `ready: ${h1}`;
  });
  $(window).on("load", function () {
    var h2 = $(".img1").height();
    document.getElementById("p5").innerHTML += `<br> load: ${h2}`;
  });
});
$(function () {
  $(".btn6").on("dblclick", function () {
    var $target = $(this).parent().next();
    var currentColor = $target.css("background-color");
    if (currentColor === "rgba(0, 0, 0, 0)") {
      $target.css({ "background-color": "#f00", color: "white" });
    } else {
      $target.css({ "background-color": "transparent", color: "black" });
    }
  });
});

$(".btn7").hover(
  function () {
    $("#p7").css({ "background-color": "aqua" });
  },
  function () {
    $("#p7").css({ background: "none" });
  }
);

$(function () {
  $(".box1").on("mouseout", function () {
    $(".box1").css({ "background-color": "yellow" });
  });

  $(".box2").on("mouseleave", function () {
    $(".box2").css({ "background-color": "pink" });
  });
});

$(function () {
  $(document).on("mousemove", function (a) {
    $(".posX").text(a.pageX);
    $(".posY").text(a.pageY);
  });
});
$(window).on("scroll", function () {
  var sc_top = $(this).scrollTop();
  var sc_left = $(this).scrollLeft();

  $(".top").text(sc_top);
  $(".left").text(sc_left);
});
$(function () {
  $("#user_id_1, #user_pw_1").on("focus", function () {
    $(this).css({ "background-color": "pink" });
  });
  $("#user_id_1, #user_pw_1").on("blur", function () {
    $(this).css({ "background-color": "#fff" });
  });

  $("#frm_2").on("focusin", function () {
    $(this).css({ "background-color": "pink" });
  });
  $("#frm_2").on("focusout", function () {
    $(this).css({ "background-color": "#fff" });
  });
});
$(function () {
  $("#btn1").data({ text: "javascript" }).on({
    mouseover: overFnc,
    mouseout: outFnc,
  });

  $("#btn2").data({ text: "welcome!" }).on({
    "mouseover focus": overFnc,
    "mouseout blur": outFnc,
  });

  function overFnc() {
    $(".txt").text($(this).data("text"));
  }
  function outFnc() {
    $(".txt").text("");
  }
});

$(function () {
  $("#rel_site").on("change", function () {
    $(".txt10").text($(this).val());
  });
});

$(function () {
  $(document).on("keydown", keyEventFnc);
  function keyEventFnc(e) {
    var direct = "";

    switch (e.keyCode) {
      case 37:
        direct = "LEFT";
        break;
      case 38:
        direct = "TOP";
        break;
      case 39:
        direct = "RIGHT";
        break;
      case 40:
        direct = "BOTTOM";
        break;
    }

    if (direct) $("#user_id").val(direct);
  }
});
$(function () {
  $(".menuWrap_1 a").on("click", function (e) {
    e.preventDefault();

    $(".menuWrap_1 a").css({ "background-color": "#fff" });

    $(this).css({ "background-color": "#ff0" });
  });

  $(".menuWrap_2 a").on("click", function (e) {
    e.preventDefault();

    $(".menuWrap_2 a").css({ "background-color": "#fff" });

    var idx = $(".menuWrap_2 a").index(this);
    $(".menuWrap_2 a").eq(idx).css({ "background-color": "#0ff" });

    $(".idxNum").text(idx);
  });
});

$(function () {
  $(".btn_1.on").on("mouseover focus", function () {
    alert("HELLO!");
  });
  $(".btn_1").addClass("on");

  $(document).on("mouseover focus", ".btn_2.on", function () {
    alert("WELCOME!");
  });
  $(".btn_2").addClass("on");
});

$(function () {
  $(".btn_wrap").delegate(".btn_111.on", "click", function () {
    alert("HELLO!");
  });
  $(".btn_111").addClass("on");

  $(document).one("click", ".btn_222.on", function () {
    alert("WELCOME!");
  });
  $(".btn_222").addClass("on");
});

$(function () {
  $(".btn_last").on("click", function () {
    alert("HELLO!");
  });
  $(document).on("click", ".btn_last2", function () {
    alert("WELCOME!");
  });
  var btn_last2 = $("<p><button class='btn_last2'>버튼2</button></p>");
  $("#wrap_btn").append(btn_last2);

  $(".del_1").on("click", function () {
    $(".btn_last").off("click");
  });
  $(".del_2").on("click", function () {
    $(document).off("click", ".btn_last2");
  });
});
