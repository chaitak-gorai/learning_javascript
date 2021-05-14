let min=1,
    max=10,
    match=getRandom(min,max),
    guessL=3;

    const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');
 

minNum.textContent=min;
maxNum.textContent=max;

game.addEventListener('mousedown',function(e){
   if(e.target.className==='play-again'){
       window.location.reload();
   }
    console.log(1);

})

guessBtn.addEventListener('click',function(){
   let guess=parseInt(guessInput.value);
    
  if(isNaN(guess)||guess<min||guess>max){
      setMessage(`Please enter a number between ${min} and ${max}`,'red');
  }
  if(guess===match){
gameOver(true,`${match} is correct, YOU WIN!!`);
  }else{
guessL-=1;

if(guessL===0){
    //game over
 gameOver(false,`Game over, YOU LOST!!. The correct number was ${match}`);

}else{
    //game continue 
    guessInput.style.borderColor='red';
    guessInput.value=' ';
    setMessage(`${guess} is not correct, ${guessL} guesses left`,'red')
}
  }
   console.log(guess);
})

function setMessage(msg, color){
    message.style.color=color;
    message.textContent=msg;
}

function gameOver(won,msg){
    let color;
    won===true?color='green':color='red';
    guessInput.disabled=true;
    guessInput.style.borderColor=color;
    setMessage(msg,color);

    guessBtn.value='Play Again';
    guessBtn.className+='play-again';
}

function getRandom(min,max){
return Math.floor(Math.random()*(max-min+1)+min);
}