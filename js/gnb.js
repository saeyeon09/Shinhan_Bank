$(document).ready(function () {
  $('.introGnb > li').hover(
    function () {
      // 마우스가 들어왔을 때 slideDown
      $(this).find('.gnb_menu').stop(true, true).slideDown(500);
    },
    function () {
      // 마우스가 나갔을 때 slideUp
      $(this).find('.gnb_menu').stop(true, true).slideUp(500);
    }
  );
});
