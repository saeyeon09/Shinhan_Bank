document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelectorAll(".visImg"); // 슬라이드 목록
  const pagination = document.querySelectorAll(".slideCtrl"); // 페이징 버튼
  const stopBtn = document.querySelector(".slideStop"); // 정지 버튼
  const playBtn = document.querySelector(".slidePlay"); // 재생 버튼
  const nextBtn = document.querySelector(".slide-button-next"); // 다음 버튼
  const prevBtn = document.querySelector(".slide-button-prev"); // 이전 버튼

  let currentIndex = 0; // 현재 슬라이드 인덱스
  let slideInterval = null; // 슬라이드 자동 전환 인터벌
  let isPaused = false; // 슬라이드 재생 여부

  // 슬라이드 업데이트
  function updateSlide(index) {
    slider.forEach((slide, i) => {
      slide.style.opacity = i === index ? "1" : "0"; // 현재 슬라이드만 보이도록 설정
      slide.style.transition = "all 0.6s"; // 전환 효과
    });
    pagination.forEach((dot, i) => {
      dot.classList.toggle("on", i === index); // 페이지네이션 버튼 업데이트
    });
    currentIndex = index; // 현재 슬라이드 인덱스 갱신
  }

  // 자동 슬라이드 시작
  function startSlide() {
    if (isPaused || slideInterval) return; // 이미 슬라이드가 정지 상태이면 새로 시작하지 않음
    slideInterval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % slider.length;
      updateSlide(nextIndex); // 슬라이드 전환
    }, 5000); // 5초마다 슬라이드 전환
  }

  // 자동 슬라이드 정지
  function stopSlide() {
    clearInterval(slideInterval); // 자동 전환 정지
    slideInterval = null; // 인터벌 변수 초기화
  }

  // 다음 슬라이드로 이동
  function goToNextSlide() {
    const nextIndex = (currentIndex + 1) % slider.length;
    updateSlide(nextIndex);
    stopSlide();
    startSlide();
  }

  // 이전 슬라이드로 이동
  function goToPrevSlide() {
    const prevIndex = (currentIndex - 1 + slider.length) % slider.length;
    updateSlide(prevIndex);
    stopSlide();
    startSlide();
  }

  // 페이징 버튼 클릭 이벤트
  pagination.forEach((dot, i) => {
    dot.addEventListener("click", (e) => {
      e.preventDefault();
      updateSlide(i); // 해당 슬라이드로 전환
      stopSlide(); // 자동 슬라이드 전환 정지
      startSlide(); // 새 슬라이드에서 재생 시작
    });
  });

  // 정지 버튼 클릭 이벤트
  stopBtn.addEventListener("click", (e) => {
    e.preventDefault();
    isPaused = true;
    stopBtn.style.display = "none";
    playBtn.style.display = "block"; // 정지 버튼 숨기고 재생 버튼 보이기
    stopSlide(); // 슬라이드 정지
  });

  // 재생 버튼 클릭 이벤트
  playBtn.addEventListener("click", (e) => {
    e.preventDefault();
    isPaused = false;
    playBtn.style.display = "none";
    stopBtn.style.display = "block"; // 재생 버튼 숨기고 정지 버튼 보이기
    startSlide(); // 슬라이드 재개
  });

  // 다음 버튼 클릭 이벤트
  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    goToNextSlide(); // 다음 슬라이드로 이동
  });

  // 이전 버튼 클릭 이벤트
  prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    goToPrevSlide(); // 이전 슬라이드로 이동
  });

  // 초기화
  updateSlide(0); // 첫 슬라이드 표시
  startSlide(); // 자동 전환 시작
});
