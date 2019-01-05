let phrase;
let text = {};
let textWords = [];
let confirmPhrase;

function setup(){
	noCanvas();
	createFileInput(onLoad);
	phrase = select('#phrase');
	confirmPhrase = select('#confirmPhrase');
	confirmPhrase.mousePressed(diasticConfirm);
}


function onLoad(e){
	textWords = e.data.split(' ');

	/*
	for (let i = 0; i < textWords.length; i++){
		if (text[textWords[i][0]]){ 
			continue;
		}
		text[textWords[i][0]] = textWords[i];
	}
	*/
	createP(e.name);
	createP(e.data);
}

/*
function handleConfirm(){
	let output = '';
	let currentPhrase = phrase.value();
	let currentLetter = '';
	for (let i = 0; i < currentPhrase.length; i++){
		currentLetter = currentPhrase[i];
		if (text[currentLetter]){
			output += text[currentPhrase[i]];
			output += ' ';
		}
	}
	createP(output);
}
*/

function diasticConfirm(){
	let output = '';
	let currentPhrase = phrase.value();
	let currentLetter = '';
	let currentWord = '';
	//TODO: reduce time complexity + handle phrases that are too long
	// also, maybe check if a word has already been used and pick a different one if it has?
	// and clean up the logic!
	for (let i = 0; i < currentPhrase.length; i++){
		currentLetter = currentPhrase[i];
		for (let j = 0; j < textWords.length; j++){
			if (!currentLetter) break;
			currentWord = textWords[j];
			if (output.indexOf(currentWord) !== -1) continue;
			if (currentWord[i] === currentLetter){
				output += currentWord + ' ';
				break;
			}
		}
	}
	createP(output);
}
