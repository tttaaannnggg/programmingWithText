// TODO: 
// how do I hold the last word in a buffer and censor it on spacebar?

let textfield;
let output;
let submit;
let buffer;

function setup(){
	noCanvas();
	// generates an input element in the dom
	// gets textfield object from that input
	//textfield = createInput();
	
	// sets textfield to whatever object this DOM element gives us
	textfield = select('#textfield');

	// on typing chars, runs callback
	//textfield.changed(handleSubmit);
	textfield.input(handleChange);
	//
	// textfield.changed(handleChange);
	// selects output id element from html file
	output = select('#output');

	submit = select('#submit');
	submit.mousePressed(handleSubmit);
}

function handleChange(){
	console.log('hit or miss');
	// createP generates new p tags
	output.html(textfield.value());
}

function handleSubmit(){
	buffer = textfield.value();
	let pushOut = '';
	for (let i = buffer.length - 1; i >=0 ; i-- ){
		pushOut += buffer[i];
	}
	createP(pushOut);
}
