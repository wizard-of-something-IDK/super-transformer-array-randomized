var wrapEle = document.body.querySelector(".wrapper");
var hnhEle = document.querySelector (".half_n_half")
var chrs = [
	{ name: "Optimus Prime", class: "leader", afl: "autobot", vehicle: "truck" },
	{ name: "Megatron", class: "leader", afl: "decepticon", vehicle: "tank" },
	{ name: "Bumblebee", class: "scout", afl: "autobot", vehicle: "car" },
	{ name: "Starscream", class: "scout", afl: "decepticon", vehicle: "plane" },
	{ name: "Ironhide", class: "soldier", afl: "autobot", vehicle: "truck" },
	{ name: "Brawl", class: "soldier", afl: "decepticon", vehicle: "tank" }
];

// do not write any elements into your HTML file

// loop through the above array to append a div using .append() into the body tag

// the appended div should always have the ".character" class

// display the characters name, class, and vehicle in the div

// Information should be displayed as "Name: Optimus Prime", with the next information on a different line

// if the character being looped through has an afl of autobot/decepticon, give them either a class of "autobot", or "decepitcon"

// in the top right, based on the top information, insert an img elemnt for either the autobot or decepticon

// link for autobot image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png

// link for decepticon image https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png

// in the characters' "class" data, all of those values' letters should be capitalized when displayed in the div (so 'leader' should become 'LEADER')

// in the characters' "vehicle" data, change the color of that value in the div based on its value
// truck=blue
// tank=green
// card=gold
// plane=white

function transformers(chrs) {
	var ele = document.createElement("div");
	ele.classList.add("character");
	ele.style.backgroundColor = chrs.color;

	// Creating elements for new divs
	var nameEle = document.createElement("div");
	var classEle = document.createElement("div");
	var aflEle = document.createElement("div");
	var vehicleEle = document.createElement("div");

	// Affiliation Selection
	if (chrs.afl === "autobot") {
		ele.classList.add("autobot");
		aflEle.innerHTML =
			"<img src='https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Autobot-512.png' />";
	} else {
		ele.classList.add("decepticon");
		aflEle.innerHTML =
			"<img src='https://cdn4.iconfinder.com/data/icons/proglyphs-free/512/Decepticon-512.png' />";
	}

	// To make sure that "Vehicle: " gets colored too (you'll see this get used later)
	var vehicleString = "Vehicle: ";

	// Vehicle Selection
	if (chrs.vehicle === "truck") {
		var classColor =
			vehicleString.fontcolor("blue") + chrs.vehicle.fontcolor("blue");
	} else if (chrs.vehicle === "tank") {
		var classColor =
			vehicleString.fontcolor("green") + chrs.vehicle.fontcolor("green");
	} else if (chrs.vehicle === "car") {
		var classColor =
			vehicleString.fontcolor("gold") + chrs.vehicle.fontcolor("gold");
	} else {
		var classColor =
			vehicleString.fontcolor("white") + chrs.vehicle.fontcolor("white");
	}

	// Now to write and display the appropriate content
	nameEle.innerHTML = "Name: " + chrs.name;
	// Capitalizing the class name
	classEle.innerHTML = "Class: " + chrs.class.toUpperCase();
	vehicleEle.innerHTML = classColor;
	ele.appendChild(nameEle);
	ele.appendChild(classEle);
	ele.appendChild(aflEle);
	ele.appendChild(vehicleEle);
	wrapEle.appendChild(ele);
}

function checkers(chrsArray) {
	for (let i = 0; i < chrsArray.length; i++) {
		transformers(chrsArray[i]);
	}
}

function randomize(array) {
	array = array.sort(() => Math.random() - 0.5);
	wrapEle.innerHTML = "";
	checkers(array);
}

checkers(chrs);

hnhEle.addEventListener("click", function(){
	randomize(chrs);
})