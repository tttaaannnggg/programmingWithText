// split into array, filter bools to remove empty strings
// destructure into object, but how do we check if there are words of a given length + 1? I guess we can use an array and skip if undefined
// bonus: order alphabetically? check .sort array method
const orderByLength = (str)=>{
	const textArr = str.split(/\W/).filter(Boolean);
	const cachedWords = [];
	for (let word of textArr){
		if (!cachedWords[word.length]){
			cachedWords[word.length] = [];
		}
		cachedWords[word.length].push(word.toLowerCase());
	}
	// sorts the subArrays of the cachedWord by alphabetical order
	for (let i = 0 ; i < cachedWords.length; i ++){
		if(!!cachedWords[i]){
			cachedWords[i].sort();
		}
	}
	return cachedWords;
}

function flatten(arr){
	return arr.reduce((a, b)=> a.concat(b));
}

function arrToString(arr){
	let output = '';
	for (let i = 0; i < arr.length; i++){
		output += arr[i];
		if (i === arr.length - 1) break;
		output += ' ';
	}
	return output;
}
const words = 'a, aa, aaa, b, bb, bbb';

const stuff = arrToString(flatten(orderByLength(words)));

console.log(stuff);
