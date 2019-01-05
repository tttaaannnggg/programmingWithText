let textfield;
let output;
let submit;

function setup(){
	noCanvas();
	textfield = select('#textfield');
	output = select('#output');
	submit = select('#submit');
	submit.mousePressed(extractTemp);
}

function handleSubmit(){
	let txt = textfield.value();
	let index = txt.indexOf('rainbow');
	while (index !== -1){
		createP(index);
		index = txt.indexOf('rainbow', index + 1);
	}
}

function findNext(str, search){
	return (str.indexOf(search) + search.length);
}
function extractTemp(){
	let txt = textfield.value();
	let startOfNum = findNext(txt, ': ');
	let endOfNum = txt.indexOf(' ', startOfNum);
	createP(txt.substring(startOfNum, endOfNum));
}
