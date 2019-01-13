const button = document.querySelector('#submit');

const textToArr = (str)=>{
	const output = [];
	const textArr = str.split(/\W+/).filter(Boolean);
	textArr.forEach((input)=>output.push(input.toLowerCase()));
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
	return output;
}
const handleHover = (el)=>{
	console.log('hover!');
				el.style.color = 'blue';
}

const handleClick = ()=>{
	let outP = document.querySelector('#output');
	let textVal = document.querySelector('#textArea').value
	spanify(textToArr(textVal)).forEach(
		function(item){
						outP.appendChild(item).after(' ');
		}
	);
				console.log(outP);
}
