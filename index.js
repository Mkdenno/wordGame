document.addEventListener("DOMContentLoaded", ()=>{
    // console.log("hello")
    showWord(words)
    setInterval(countDown, 1000)
    setInterval(checkStatus, 50)
    wordInput.addEventListener('input', startMatch);
})

// globals
let time=5;
let isPlaying;
let score=0;

const timeSeconds=document.getElementById("seconds")
const currentWord=document.getElementById("current-word")
const wordInput=document.getElementById("word-input")
const message=document.getElementById("message")
const timeDisplay=document.getElementById("time")
const scoreDisplay=document.getElementById("score")

const words=[
    "hat",
    "river",
    "dennis",
    "beverly",
    "generate",
    "statue",
    "stubborn",
    "cocktail",
    "runaway",
    "joke",
    "developer",
    "hero",
    "javaScript",
    "nutrition",
    "echo",
    "space",
    "sibling",
    "investigate",
    "symptom",
    "magic",
    "master",
    "space",
    "definition"
]
function startMatch(){
    if(matchWords()){
        time=6;
        isPlaying=true;
        showWord(words);
        wordInput.value="";
        score++;

    }
    // show score is 0 if gameOver
    if(score===-1){
        scoreDisplay.innerHTML=0;
    }
    else{
        scoreDisplay.innerHTML=score;
    }
}
function matchWords(){
    if(wordInput.value===currentWord.innerHTML){
        message.innerHTML="correct!!!"
        return true;
    }
    else{
        message.innerHTML=""
        return false;
    }
}

//pick random word
function  showWord(words){
    // generate random array index
    const randomIndex=Math.floor(Math.random() * words.length);
    //output a random word
    currentWord.innerHTML=words[randomIndex]
}
function countDown(){
    //make sure time is not run out
    if(time>0){
        //decrement
        time--;

    }
    else if(time===0){
        isPlaying=false;
    }
    // showtime
    timeDisplay.innerHTML=time;
    
}
function checkStatus(){
    if(!isPlaying && time===0){
        message.innerHTML="Game Over!!"
        message.style.color="red"
        score=-1;
    }
}
