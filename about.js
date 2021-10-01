console.log("hello world");



function handleSubmit(event) {
	event.preventDefault();
	
	alert('Submitted Successfully!');
}

function catCompliment(event) {
	event.preventDefault();
	
	alert('youre pretty cool');
}



let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let cat = document.querySelector('#cat')

cat.addEventListener('mouseover', catCompliment)


