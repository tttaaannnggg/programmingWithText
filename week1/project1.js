//TODO: purge all punctuation and set everything to lowercase

function handleSubmit(){
	let textArea = document.querySelector('#text').value.split(' ');
	// destructure textArea into object
	let currentWord;
	let cachedWords = {};
	for (let i = 0; i < textArea.length; i++){
		currentWord = textArea[i];
		if (!cachedWords[currentWord[0]]){
			cachedWords[currentWord[0]] = [];
		}
		cachedWords[currentWord[0]].push(currentWord);
	}
	console.log(textArea[0]);
	let output = buildOutput(textArea[0] , cachedWords);
	
	renderOutput(output);
}

function buildOutput(word, cache){
	console.log(word);
	let lastChar = word[word.length-1];
	let nextWord = '';
	if (Array.isArray(cache[lastChar])){
		if(cache[lastChar].length > 0){
			nextWord = cache[lastChar].pop();
		}
	}else{
		return word;
	}
	return word + ' ' + buildOutput(nextWord, cache);
}

function renderOutput(txt){
	document.querySelector('#outPar').innerHTML = txt;
}
