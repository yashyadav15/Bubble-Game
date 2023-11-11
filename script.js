// Make a Bubble 
function makeBubble(){
    var addBubble = "";

    for (var i = 1; i <= 114; i++) {
      var nrandom = Math.floor(Math.random() * 10); // it will give the randome no.

      addBubble += `<div class="bubble">${nrandom}</div>`;
    }
    document.querySelector("#cbottom").innerHTML = addBubble;
}

// Make RunTime 
var timer = 60;
function runTimer(){
   var timeset =  setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timeval").textContent = timer;
        }
        else{
            clearInterval(timeset); // No memory use means  function stop
            document.querySelector(
              "#cbottom"
            ).innerHTML = `<h1>Game Over<h1>Total Score : ${score}</h1>`;

            
            

        }

    },1000)
}


// Make Hit
var hitrn = 0;
function makeHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

// Make Score
var score = 0;
function makeScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;

}


document.querySelector("#cbottom").addEventListener("click",function(details){

    var NumberGuess = Number(details.target.textContent); // Use Number beacause cbottom it will give string value it will cinvert in number 
    if(NumberGuess === hitrn){
        makeScore();
        makeBubble();
        makeHit();


    }

})

makeHit();
runTimer();
makeBubble();