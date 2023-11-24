//your JS code here. If required.
let input =document.getElementById("fname");
input.addEventListener("blur", onblur);
function onblur() {
	input.value= input.value.toUpperCase();
	
	
}