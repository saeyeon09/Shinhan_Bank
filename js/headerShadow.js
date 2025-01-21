window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    
    // 스크롤 위치가 0보다 크면 그림자 추가
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });



  $(function () {
    const header = $("#header");
    const global = $("#global");

    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 50) {
        header.addClass("scrolled");
        global.addClass("scrolled");
      } else {
        header.removeClass("scrolled");
        global.removeClass("scrolled");
      }
    });
  });