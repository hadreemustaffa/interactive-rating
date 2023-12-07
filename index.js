const form = document.querySelector('form');
const feedbackPage = document.querySelector('.feedback');
const thankYouPage = document.querySelector('.thankyou');
const submittedRating = document.querySelector('.thankyou__rating-submitted');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const checkedRadioButton = document.querySelector(
    'input[type="radio"]:checked'
  );

  if (!checkedRadioButton) return;

  feedbackPage.style.display = 'none';
  thankYouPage.removeAttribute('hidden');
  thankYouPage.style.display = 'flex';
  submittedRating.innerHTML = checkedRadioButton.value;
});
