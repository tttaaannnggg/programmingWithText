/*

let localText;

function preload(){
	localText = loadStrings('testfile.txt');
}
*/

function setup(){
	noCanvas();
	/*
	let button = select('#load');
	button.mousePressed(handleLoad);
	*/
	createFileInput(onLoad);
}

function handleLoad(){
	loadStrings('testfile.txt' , onLoad);
	// callback for loadStrings fires when file has finished loading, with the data from the loadString fed to it

}


function onLoad(e){
	createP(e.name);
	createP(e.data);
}

