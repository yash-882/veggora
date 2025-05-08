// convert a string 
 function toNameCase(str){
      // converts to an array
   let smallCase = str.split(' ');
   let nameCaseArr = []; //to store namecase values
    
    for(let word of smallCase){
        // reassigning in which the fist leter will be in uppercase
       let NameCase =  word[0].toUpperCase() + word.slice(1, word.length); 
       nameCaseArr.push(NameCase)   
    }

    str =  nameCaseArr.join(' ') //converts to namecase string

    return str;
}

 function removeWhiteSpace(str){
 // removing extra whitespace between the characters 
 while (str.includes('  ')) {
    str = str.replace('  ', ' ')
}
return str
}

export default {
    toNameCase,
    removeWhiteSpace
}

