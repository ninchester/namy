const CONSONANTS = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];
const VOWELS  = ["a", "e", "i", "o", "u", "y"];
var nameSize = 5;
var beginning = "";
var ending = "";

function createName() {
	var name = beginning;
	var i;
	for (i = 0; i < nameSize; i++) {
		if (i % 2 != 0) {
			name += _pickLetter(VOWELS);
		} else {
			name += _pickLetter(CONSONANTS);
		}
	}

	name += ending;
	document.getElementById("generatedName").innerHTML = name;
	return name;
}

function _pickLetter(letters) {
	var position = _getRandomPosition(letters.length);
	return letters[position];
}

function _getRandomPosition(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function showHideAdvancedSettings() {
	var x = document.getElementById("settings");
	if (x.style.display === "none") {
		x.style.display = "flex";
	} else {
		x.style.display = "none";
	}

	var settingsLabel = document.getElementById("showSettingsLink");
	if (settingsLabel.innerHTML === "Show settings") {
		settingsLabel.innerHTML = "Hide settings";
	} else {
		settingsLabel.innerHTML = "Show settings";
	}
}

function updateRange(value) {
	document.getElementById("letterRangeNumber").innerHTML = value; 
	nameSize = value;
}

function updateBeginning() {
	beginning = document.getElementById("beginningOfWord").value; 
}

function updateEnding() {
	ending = document.getElementById("endingOfWord").value; 
}