function favoriteColor(event) {
	event.preventDefault();
	
	alert('green!!!');
}

function favoritePlace(event) {
	event.preventDefault();
	
	alert('in my SPACESHIP!');
}
function favoriteRitual(event) {
	event.preventDefault();
	
	alert('eating bell peppers and BEEF!!!');
}





color.addEventListener('click', favoriteColor);
place.addEventListener('click', favoritePlace);
ritual.addEventListener('click', favoriteRitual);