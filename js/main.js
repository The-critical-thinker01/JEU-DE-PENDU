const els ={
    score:null,
    answer:null,
    choices:null
};

const words =[
    'JAVASCRIPT',
    'STYLESHEET',
    'PROGRAMMATION',
    'LANGUAGE',
    'SONZIA',
    'FREDY',
    'RONALDO'
];

// declaration des mots 
let choices=[];
let word ='';
let wordMapping=[];
let choicesMapping=[];
let scoreCount =0;
let maxScore= 8;

const init = () =>{
    console.log(">>#init");

    // attach elemennts
    els.score=document.querySelector('#score');
    els.answer=document.querySelector('#answer');
    els.choices=document.querySelector('#choices');

     // pick words
     word=pickWord();
     console.log(word);
     // -Create word mapping
     wordMapping= getWordMappping(word);
     console.log(wordMapping);
     // generate choices
        choices = generateChoices();
        console.log(choices);
     // -create choices mapping
     choicesMapping=getChoicesMapping(choices);
     console.log(choicesMapping);
     // display words 
     displayWord(wordMapping);
     //display choices
     displayChoices(choicesMapping);
     // display scrore
     //displayScore();
     // listen events
     // --mouse events
        els.choices.addEventListener('click',({target}) => {
            //evt:mouseEvent evt.target =>{target}
            if(target.matches('li')){
                checkLetter(target.innerHTML);
            }
        });
     // --keyboard events
        document.addEventListener('keydown',({ keyCode })=>{
            // evt:keyboardEvent evt.keycode =>{ keycode }
            //console.log('keyCode',keyCode);
            const letter =String.fromCharCode(keyCode);
            //console.log('letter :', letter);
            if (keyCode >= 65 && keyCode <= 90){
                checkLetter(letter);
            }
        });
    

};

   
     // check letter
     // -if not in word :add score
     // -if in word :display letter
     // -endGame
     //    -if score== max: loseGame
     //    -if letter are visible winGame

const checkLetter=(letter) =>{
    console.log(letter);
    let isLetterInWord =false;
    let isAllLettersFound=true;
    //console.log('isLetterInWord before loop',isLetterInWord );
    wordMapping.forEach(
        (letterMapping) => {
            //console.log('LetterMapping.letter in loop',letterMapping.letter );
            if(letterMapping.letter === letter){
                letterMapping.isVisible = true;
                isLetterInWord=true;
            }
            if (!letterMapping.isVisible){ 
                isAllLettersFound=false}
        });
        //console.log('isLetterInWord after loop',isLetterInWord );
        choicesMapping.forEach((letterMapping)=>{
            if(letterMapping.letter === letter){
                letterMapping.ifChosen =true;
            }
        });
        displayChoices(choicesMapping);

        if(isLetterInWord === true){
            displayWord(wordMapping);
        }else{
            scoreCount++;
            displayScore();
        }

        if (scoreCount === maxScore){
            endGame();
        }
        if(isAllLettersFound){
            winGame();
        }
};

const endGame =() =>{
    document.querySelector('body').style.backgroundColor='red';
    els.choices.innerHTML=`<h1>You'r dead , bro! </h1>`;
}
const winGame=()=>{
    document.querySelector('body').style.backgroundColor='green';
    els.choices.innerHTML=`<h1> You won ! </h1>`;
}

window.addEventListener('load',()=>{
    init();
});

// ou windows.onload=init;
// ou encore windows.addEventListener('load',init);
// ou windows.onload =()=>{init();}


