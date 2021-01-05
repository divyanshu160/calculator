var screen = document.querySelector('.screen');
// var buttons = document.querySelectorAll('.btn');
var equal = document.querySelector('.equal');
var clear = document.querySelector(' .clear');
clear.addEventListener('click',clr); 
equal.addEventListener('click',evalue);
// buttons.forEach(assinger);
// function assinger(button){
//     button.addEventListener("click", solve(button));
// }
function solve(button){
	screen.value += button;
    // screen.value = "ans";

}
function evalue(){
	 let answer = eval(screen.value);
      screen.value = answer
}
function clr() 
		{ 
			screen.value = "" 
		} 