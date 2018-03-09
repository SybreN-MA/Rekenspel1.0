const head = document.getElementById("head");
const myAssignment = document.getElementById("myAssignment");
const myAnswer = document.getElementById("myAnswer");
const feedback = document.getElementById("feedback");
const correct = document.getElementById("Goed");
const incorrect = document.getElementById("Fout");
const opgaves = document.getElementById("opgaves");

let sound = new Audio();

function makeSum(){
    var a = Math.floor(Math.random() * 9 + 1);
    var b = Math.floor(Math.random() * 9 + 1);
    mySum = a + " * " + b;
    AnsG = a * b;
    myAssignment.innerHTML = mySum;
    myAnswer.focus();

}
makeSum();

var FoutNum = 0;
var GoedNum = 0;
var opgave = 1;

myAnswer.addEventListener("keyup", function(evt){

    if(evt.keyCode === 13){
        opgave++;
        opgaves.innerHTML = "Opgave: " + opgave;
        if(myAnswer.value === AnsG.toString()){
            feedback.innerHTML = "Goed ✔";
            GoedNum++;
            correct.innerHTML = GoedNum;
            sound.src = "correct.wav";
            sound.play();
            makeSum();
        } else{
            feedback.innerHTML = "Fout x";
            FoutNum++;
            incorrect.innerHTML = FoutNum;
            sound.src = "incorrect.wav";
            sound.play();
            makeSum();
        }

        myAnswer.value = "";
    }

    window.setTimeout(3000);
});

