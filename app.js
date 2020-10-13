const form = document.querySelector('#memeForm');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	const topInput = document.querySelector('#topText');
	const bottomInput = document.querySelector('#bottomText');
	const topText = document.createElement('p');
	const bottomText = document.createElement('p');
	topText.innerText = topInput.value;
	topText.value = '';
	topText.classList.add('topText');
	bottomText.innerText = bottomInput.value;
	bottomText.value = '';
	bottomText.classList.add('bottomText');

	const memePic = document.createElement('img');
	const imageSource = document.querySelector('#image');
	memePic.src = imageSource.value;
	imageSource.value = '';
	const memeDisplay = document.createElement('div');
	memeDisplay.classList.add('memeDisplay');
	document.body.appendChild(memeDisplay);
	memeDisplay.appendChild(memePic);
	memeDisplay.appendChild(topText);
	memeDisplay.appendChild(bottomText);
	memePic.classList.add('image');
	const myMemes = document.querySelectorAll('div');
	for (i = 0; i < myMemes.length; i++) {
		const span = document.createElement('SPAN');
		const txt = document.createTextNode('\u00D7');
		span.setAttribute('id', 'close');
		span.appendChild(txt);
		myMemes[i].appendChild(span);
	}
	const close = document.querySelectorAll('#close');
	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
			const div = this.parentElement;
			div.style.display = 'none';
		};
	}
});
