const circles = document.querySelectorAll('.circle');
const rating = document.querySelector('.container-rating');
const thankYou = document.querySelector('.container-thankyou');
const selectedScore = document.getElementById('selected');
const backBtn = document.querySelector('.go-back');
const star = document.querySelector('.star');

circles.forEach((circle) => {
  circle.addEventListener('click', () => {
    rating.classList.toggle('hidden');
    thankYou.classList.toggle('hidden');
    const score = circle.getAttribute('data-score');
    selectedScore.innerText = score;
  });
});

backBtn.addEventListener('click', () => {
  rating.classList.toggle('hidden');
  thankYou.classList.toggle('hidden');
});

star.addEventListener('click', () => {
  star.classList.toggle('active');
});
