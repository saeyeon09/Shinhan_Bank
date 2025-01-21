

// $(function () {
//   $(".noton").click(function () {
//       $(".noton").hide(); // "더보기" 버튼 숨기기
//       $(".i_on").show(); // "닫기" 버튼 보이기
//       $("#grp_impSvcUl").css("max-height", "1000px"); // ul 높이를 자동으로 변경
     
//   });

//   $(".i_on").click(function () {
//       $(".i_on").hide(); // "닫기" 버튼 숨기기
//       $(".noton").show(); // "더보기" 버튼 보이기
//       $("#grp_impSvcUl").css("max-height", "20px"); // ul 높이 줄이기

//   });
// });

$(function () {
  $(".noton").click(function () {
    $(".noton").fadeOut(200); // "더보기" 버튼 숨기기
    $(".i_on").fadeIn(200);  // "닫기" 버튼 보이기
    $("#grp_impSvcUl").animate(
      { height: "60px" },
      300,
      function () {
        $(this).css("height", "auto"); // 애니메이션 완료 후 높이를 auto로 확정
      }
    );
  });

  $(".i_on").click(function () {
    $(".i_on").fadeOut(200); // "닫기" 버튼 숨기기
    $(".noton").fadeIn(200); // "더보기" 버튼 보이기
    $("#grp_impSvcUl").animate(
      { height: "20px" },
      300
    );
  });
});