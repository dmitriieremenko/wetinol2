

$(document).ready(function() {
	document.querySelector ("form").addEventListener("submit", function(e){
		alert("Submited!");
		e.preventDefault();
	  })
	window.location.hash
	console.log(window.location.hash)
	$('#pagepiling').pagepiling( { 		
		onLeave: function(index, nextIndex, direction){
// if(index == 1 && direction =='down'){
// 	document.querySelector(".header") .classList.add("header__section2")
// 	console.log("сработало")

// }

// if(index == 2 && direction =='up'){
// 	document.querySelector(".header") .classList.remove("header__section2")
// 	console.log("сработало")
// }

// if(index == 2 && direction =='down'){
// 	document.querySelector(".header") .classList.remove("header__section2")
// 	console.log("сработало")

// }

// if(index == 3 && direction =='up'){
// 	document.querySelector(".header") .classList.add("header__section2")
// 	console.log("сработало")

// }


// if(index == 3 && direction =='down'){
// 	document.querySelector(".header") .classList.add("header__section2")
// 	console.log("сработало")

// }

// if(index == 4 && direction =='up'){
// 	document.querySelector(".header") .classList.remove("header__section2")
// 	console.log("сработало")

// }

// if(index == 4 && direction =='down'){
// 	document.querySelector(".header") .classList.remove("header__section2")
// 	console.log("сработало")


// }

// if(index == 5 && direction =='up'){
// 	document.querySelector(".header") .classList.add("header__section2")
// 	console.log("сработало")


// }


	}});

});


function one() {$.fn.pagepiling.moveTo(1);}
function two() {$.fn.pagepiling.moveTo(2);}
function three() {$.fn.pagepiling.moveTo(3);}
function four() {$.fn.pagepiling.moveTo(4);}
function five() {$.fn.pagepiling.moveTo(5);}



