const ratings = document.getElementsByClassName('rate');
const submitRatingBtn = document.getElementById('btn-submit');
const ratingPage = document.getElementById('rating-page');
const thankYouPage = document.getElementById('thank-you-page');
const submittedRating = document.getElementById('submitted-rating');

for (let i = 0; i < ratings.length; i++) {
	ratings[i].addEventListener('click', function () {
		const current = document.getElementsByClassName('active');
		if (current.length > 0) {
			current[0].className = current[0].className.replace(' active', '');
		}
		this.className += ' active';

		submitRatingBtn.addEventListener('click', function submit() {
			ratingPage.style.display = 'none';
			thankYouPage.style.display = 'flex';
			submittedRating.innerText = current[0].innerText;
		});
	});
}
