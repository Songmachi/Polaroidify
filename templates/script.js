// 슬라이드 전환을 위한 자바스크립트 코드
var slides = document.getElementsByClassName("slide");
var currentSlide = 0;

function showSlide() {
  // 모든 슬라이드를 숨김
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // 다음 슬라이드를 보여줌
  slides[currentSlide].style.display = "block";
  
  // 다음 슬라이드 인덱스 업데이트
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0; // 첫 번째 슬라이드로 돌아감
  }
  
  // 5초마다 슬라이드 전환
  setTimeout(showSlide, 3000);
}

showSlide(); // 슬라이드 쇼 시작
