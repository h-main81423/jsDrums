(() => {
	console.log("fired! ready to jam.");

	function playDrumkitSound(event) {
		//debugger;
		//select the correspondign audio element and make it play
		let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
		
		//debugging/error handlng
		//get no message when we hit a button and get no response
		if (!audio) { return; } // return stops the code execution
		// ! is a shorthand for 'if' statements made w boolean code

		//allowing drum to be hit multiple times, rewinding every click
		audio.currentTime = 0;
		audio.play();

		//grab the div and animate it
		let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
		key.classList.add('playing');

	}

	function removePlayingClass(event) {
		if (event.propertyName !== "transform") {
			return;
		} else {
			//remove playing class here from active div
			console.log('transition done', `${event.propertyName}`);
			event.target.classList.remove('playing');
		} 
	}

	const keys = Array.from(document.querySelectorAll('.keys'));

	keys.forEach(key => key.addEventListener("transitionend", removePlayingClass));

	window.addEventListener("keydown", playDrumkitSound);
})();