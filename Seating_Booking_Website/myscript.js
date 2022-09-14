const rows = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t"];

let html = "";
let counter = 1;

var reservedSeats = {
	record1: {
		seat: "b19",
		owner: {
			fname: "Joe",
			lname: "Smith"
		}
	},
	record2: {
		seat: "b20",
		owner: {
			fname: "Joe",
			lname: "Smith"
		}
	},
	record3: {
		seat: "b21",
		owner: {
			fname: "Joe",
			lname: "Smith"
		}
	},
	record4: {
		seat: "b22",
		owner: {
			fname: "Joe",
			lname: "Smith"
		}
	}
};

//------------ old---------------//
/*
rows.forEach(function(row){
    html +=`<div class = "label">${row}</div>`;
    

    for(let i = 0; i < 3; i++){

        html += `<div id = "${row + counter}">${counter}</div>`;
        counter++;

    }
    counter = counter + 12;
});


document.getElementById('left').innerHTML = html;

html = "";
counter = 1;


rows.forEach(function(row){
    html +=`<div class = "label">${row}</div>`;
    

    for(let i = 0; i < 3; i++){

        html += `<div id = "${row + counter}">${counter}</div>`;
        counter++;

    }
    counter = counter + 12;
});

document.getElementById('right').innerHTML = html;

html = "";
counter = 1;

rows.forEach(function(row){
    counter = counter + 3;

    for(let i=0; i<9;i++){
        html += `<div id = "${row + counter}>${counter}</div>`;
        counter++;
    }
    counter = counter + 3;
})

document.getElementById('middle').innerHTML = html;
*/

function makerows(sectionLength,rowLength,placement){
    const rows = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t"];

    let html = "";
    let counter = 1;

    rows.forEach(row =>{
        switch(placement){
            case "left": html += `<div class = "label">${row}</div>`; break;
            case "right": counter = counter + (rowLength - sectionLength); break;
            default: counter = counter + ((rowLength - sectionLength)/2); break;
        }
        //loop here
        for(let i=0; i<sectionLength;i++){
            html += `<div class="a" id="${row + counter}">${counter}</div>`;
            counter++;
        }

        switch (placement){
            case "left": counter = counter + (rowLength - sectionLength); break;
            case "right": html += `<div class = "label">${row}</div>`; break;
            default: counter = counter + ((rowLength - sectionLength)/2); break;
        }
    });
  
  document.getElementById(placement).innerHTML = html;

}
makerows(3,15,'left');
makerows(3,15,'right');
makerows(9,15,'middle');

(function(){
    "use strict";

    var selectedSeats = [];
    var seats = document.querySelectorAll('.a');
}())


(function(){
    "use strict";
for(const key in reservedSeats){


    if(reservedSeats.hasOwnProperty(key)){

        const obj = reservedSeats[key];

        document.getElementById(obj.seat).className = "r";
        document.getElementById(obj.seat).className = "R";
    }


}
}());

(function(){

    "use strict";

    var selectedSeats = [];
    var seats = document.querySelectorAll('.a');

    seats.forEach(seat =>{

        seat.addEventListener('click',function(event){


        });
    });

    function seatSelectionProcess(thisSeat){

    }

}());