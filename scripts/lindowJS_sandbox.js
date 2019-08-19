$(document).ready(function() {  

//create and populate an array
class Group {
  constructor() {
    this.arr = [];  // create empty array
  }
add(val) {
    if (!this.has(val)) this.arr.push(val); // add to the end if value not already in arr
  }
  delete(val) {
    let i = this.arr.indexOf(val);   // find array index of val
    this.arr.splice(i,1);  //removes 1 element starting at valth position 
  }
  has(val) {
    for(let item of this.arr) {		// walk through array
      return (val===item) ? true : false;	// check if val present and set boolean
      }   
  }
  static from(array) {
      let temp = new(Group); 	// create a new Group instance
      temp.arr = array;			// populate with given array
    return temp;				// return temp receive new name assignment
  }  
}

let classGroup = Group.from(["Eric","Stan"])

//$("#jQdemo").html("JQuery is working");	
$("#out1").html("here!");

function showGroup(line,dest) { 
	//alert("got here too");
	$(dest).html(`The group has ${line} as members.`); 
} 


class Groupiterator {
 constructor(group) {
   this.arr = Array.from(group.arr);
   this.temp = 0;
   }
  next() {
    if (this.temp == this.arr.length) return {done: true};
    let value = this.arr[this.temp];
    this.temp++;
    return {value, done:false};
  }
}


Group.prototype[Symbol.iterator] = function() {
  return new Groupiterator(this);
};

// create a class
/*
class Rabbit {	
constructor(type, dest) {
	this.type = type;
	this.dest = dest;
    }				// instantiate empty object
speak(line,dest) { 	
	//alert("got here");	// add new method
	console.log(line,dest);
	$(dest).html(`The ${this.type} rabbit says '${line}'`);   // note ‘${…} to insert var inside string
	}
}; 

function speak(line,dest) { 
	alert("got here too");
	$(dest).html(`The ${this.type} rabbit says '${line}'`); 
} 

let whiteRabbit = new Rabbit("white","#out2") ; 
let hungryRabbit = new Rabbit("hungry", "#out3");
let sillyRabbit = new Rabbit("silly", "#out3");
sillyRabbit.dest = "#out1";		// override originally assigned value
*/

// using the mouse button to change text in existing para
$("#LButton1").click(function() {  										// assign click() function to button using button id
		//alert("Lindow button clicked");										// call alert just for testing purposes
		//Rabbit.speak("I'm alive.");	
	line = "";
	for (let value of classGroup.arr) {line = value+","+line};
	showGroup(line,"#out1"); 
	//hungryRabbit.speak("I could use a carrot right now.",hungryRabbit.dest); 
	//sillyRabbit.speak("Knock Knock.",sillyRabbit.dest); 

	$("#LButton1").html("I was clicked");								// change the button lable, or do whatever you want
	});		

// asynchonis behavior
let start = Date.now(); 
setTimeout(() => {
 //console.log("Timeout ran at", Date.now() - start); 
 }, 20); 
 while (Date.now() < start + 500) {} 
 //console.log("Wasted time until", Date.now() - start); 
 // → Wasted time until 50 
 // → Timeout ran at 55
//Promise.resolve("Done").then(console.log);
//console.log("Me first!");  

//simple animation
let cat = document.getElementById("cat");
let hat = document.getElementById("hat");
 let angle1 = Math.PI / 2;
 let angle2 = Math.PI/2;
  function animate(time, lastTime) {
   if (lastTime != null) {
    angle1 += (time - lastTime) * 0.001;
    angle2 -= (time - lastTime) * 0.001;
	} 
	cat.style.top = (Math.sin(angle1) * 20) + 150+ "px"; 
	cat.style.left = (Math.cos(angle1) * 200) + 520 + "px";
	hat.style.top = (Math.sin(angle2) * 20) + 120 + "px"; 
	hat.style.left = (Math.cos(angle2) * 200) + 490 + "px";  
	requestAnimationFrame(newTime => animate(newTime, time)); 
} 
requestAnimationFrame(animate);

//create/populate a table
  const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
  ];

 let table = document.getElementById("mountains");
 	table.style.textAlign = "right";
 	head = table.createTHead();
 	row = table.insertRow();
 	cell1 = row.insertCell(0);
 	cell2 = row.insertCell(1);
 	cell3 = row.insertCell(2);
 	cell1.innerHTML = "Mountain";
 	cell2.innerHTML ="Height";
 	cell3.innerHTML = "Place";
 	for (let mtn of MOUNTAINS) {
 	 row = table.insertRow();
 	 cell1 = row.insertCell(0);
 	 cell2 = row.insertCell(1);
 	 cell3 = row.insertCell(2);
 	 cell1.innerHTML = mtn.name;
	 cell2.innerHTML = mtn.height;
	 cell3.innerHTML = mtn.place;
	}

// get elements on the page by tag name
function byTagName(node, tagName) {
   arr = document.querySelectorAll(tagName);

   return arr;
  }

//console.log(byTagName(document,"a").length);

// simple draw program to demonstrate mouse events
window.addEventListener("click", event => {
 let dot = document.createElement("div"); 
 dot.className = "dot"; 
 dot.style.left = (event.pageX - 4) + "px"; 
 dot.style.top = (event.pageY - 4) + "px"; 
 document.body.appendChild(dot); 
});

let lastX; // Tracks the last observed mouse X position 
let bar = document.querySelector("div");
bar.addEventListener("mousedown", event => { 
    if (event.button == 0) { 
		lastX = event.clientX; 
		window.addEventListener("mousemove", moved); 
		event.preventDefault(); // Prevent selection
		} 
	});

function moved(event) {
	 if (event.buttons == 0) {
	  window.removeEventListener("mousemove", moved); 
	} else {
	 let dist = event.clientX - lastX;
	 let newWidth = Math.max(10, bar.offsetWidth + dist); 
	 bar.style.width = newWidth + "px"; 
	 lastX = event.clientX;
	 } 
} 

});