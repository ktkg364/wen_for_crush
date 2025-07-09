const textConfig = {
  text1: "Hé luuu bé!",
  text2: "Anh có điều này muốn hỏi em nhớ phải trả lời thật lòng nhaaa.",
  text3: "Em yêu anh đúng không hẹ hẹ :))",
  text4: "Nếu em không trả lời mà thoát ra tức là em đồng ý làm vợ anh rùi đó nha :v",
  text5: "Anh mơ à???",
  text6: "Yêu ơi là yêu <3",
  text7: "Lí do em thích anh là gì? :vvvv",
  text8: "Gửi cho anh <3",
  text9: "Vì anh đẹp try vlllll luôn",
  text10: "Anh biết mà ^_^ Yêu em bằng bát cháo lòng<br>Anh ăn hết cháo, chừa lòng yêu em",
  text11:
    "Nãy giờ anh dỡn thôi. Từ đầu tới giờ cũng biết anh là ai rồi. Một chút quà cho em thôi, đừng có ngại nha. Có nó tự tin đi học, đi chơi hơn nè. Áo thì không biết em mặc size nào nên nhớ dáng em anh mua S, mà này form boxy nên nó hơi ngắn và rộng. Không biết em có thích không, tại thường thấy đi đâu chơi cũng mặc váyyy hong à. Còn son thì anh cũng hong biết em thích màu nào nên cũng đại đại á :'), mà không phải đại đại là tui so sài đâu nghe, mất cả tháng nghiên cứu của tuiiii :((. Do công việc of anh bận quá nên không có nhiều thời gian, với lại tình hình giờ cũng chưa phải lúc, thôi thì ráng đợi thôi. Tìm được người eooo thì giới thiệu anh với :)) Còn muốn nói gì thì inbox cho anh nhé.",
  text12: "Okiii lunnn <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/cuteCat.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/anh5.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whyyy'>",
      background: '#fff url("img/anh5.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("img/anh5.jpg")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://www.facebook.com/truongtuankiet071220/";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
