let storyOpening=document.querySelector(".storyopening");
let buttonOne=document.querySelector(".option-one");
let optionOne=document.querySelector(".option-one-screen");

let button2=document.querySelector(".option-two");
let optionTwo=document.querySelector(".option-two-screen");

let buttonUno=document.querySelector(".option-one-1");
let optionOne1=document.querySelector(".option-one-end");

let buttonDos=document.querySelector(".option-one-2");
let optionOne2=document.querySelector(".option-onetwo-end");

buttonOne.onclick=function(){
	optionOne.style.display="block";
	storyOpening.style.display="none";
};

button2.onclick=function(){
	optionTwo.style.display="block";
    storyOpening.style.display="none";

};

buttonUno.onclick=function(){
	optionOne1.style.display="block";
    optionOne.style.display="none";
};

buttonDos.onclick=function(){
	optionOne2.style.display="block";
    optionOne.style.display="none";
};


/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
INSERT_VARIABLE.onclick=function(){

};

INSERT_VARIABLE.onclick=function(){

};


INSERT_VARIABLE.onclick=function(){

};

*/


