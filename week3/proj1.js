const text = 'I’m in Athens, Greece right now, and I’m thinking about why I’m here. To see the Acropolis? Nah. To immerse myself in Greek culture? To learn the language? Nah. To take exciting touristy photos for Instagram? This gets the closest. The truth is: I’m fucking depressed and I want to be happy. I think these things will make me happier.'

const rText = new RiString(text);
const txtWords = rText.words();
const txtPos = rText.pos()
const txtMod = txtWords.slice();
let output;

function replaceWords(n){
	let selector = 0;
	for (let i = 0; i < n; i++){
		selector = Math.floor(Math.random()*txtWords.length);
		console.log(txtPos[selector]);
		txtMod[selector] = RiTa.randomWord(txtPos[selector]);
	}
}

function loaded(){
	output = document.querySelector('#output');
	output.innerHTML = ('test');
	const testEl = document.createElement('p');
	testEl.innerHTML = 'hey';
	replaceWords(10);
	output.innerHTML =  txtMod.join(' ');
}
/*
const textToArr = (str)=>{
        const output = [];
        const textArr = str.split(/ /).filter(Boolean);
        textArr.forEach((input)=>output.push(input));
        return output;
}

const spanify = (arr)=>{
        const output=[];
        let element;
        arr.forEach((item)=>{
                element = document.createElement('span')
                element.setAttribute('onmouseover', 'handleHover(this)');
                element.innerHTML = (item);
                output.push(element);
        });
        return output
}
	*/
