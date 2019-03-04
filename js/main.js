(() => {
	console.log("fired! ready to jam.");

	function playDrumkitSound(event) {
		//debugger;
		//select the correspondign audio element and make it play
		let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
		
		//debugging/error handlng
		//get no message when we hit a button and get no response
		if (!audio) { return; } // return stops the code execution

		//allowing drum to be hit multiple times
		audio.currentTime = 0;
		audio.play();
	}

	window.addEventListener("keydown", playDrumkitSound);
})();