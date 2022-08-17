const displayChoices =(choicesMapping) =>{
    const choicesHtml = choicesMapping.map( (letterMapping)=>{
        if (letterMapping.ifChosen === false){
            return `<li>${letterMapping.letter}</li>`;

        }else{
            return `<li class="disabled">${letterMapping.letter}</li>`;
        }
    });
    els.choices.querySelector('ul').innerHTML=choicesHtml.join(' ');

};

const displayWord =(wordMapping)=>{
    const wordHtml = wordMapping.map(
            (letterMapping) =>{
                    if(letterMapping.isVisible === true){
                        return `<li>${letterMapping.letter}</li>`;                      
                    }else{
                        return `<li>_</li>`
                    }
           });
       console.log('wordHtml:', wordHtml);
   els.answer.querySelector('ul').innerHTML = wordHtml.join(' ')
}


const getWordMappping = (word) =>{
        const wordArrr =word.split('');
        //console.log('word',word);
        //console.log('wordArr',wordArrr);
        const wordMapping = wordArrr.map((letter,index) => {
            let isVisible=false;
            if(index ===0 || index === wordArrr.length -1){
                isVisible=true
            }
            return {
                letter, 
                isVisible
            }
});
return wordMapping;
}
const generateChoices = ()=>{
const choices =[];
 for( let index=65; index <=90; index++){
    choices.push(String.fromCharCode(index));
 }
 return choices;
}
getChoicesMapping = (choices)=>{
    const choicesMapping =choices.map( (letter) =>{
        return {
            letter,
            ifChosen:false
        };
    }
        );
        return choicesMapping ;
};

// fonction pour selectionner de facon aleatoire 
const pickWord =() =>{
const randomIndex =getRandomInt(0,words.length-1);
return words[randomIndex];
};

const  getRandomInt = (min, max)=> {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // fonction pour afficher le score
  const displayScore = ()=>{
    els.score.innerHTML=`<img src="img/pendue${scoreCount}.png" alt="hangman"/>`;
}
