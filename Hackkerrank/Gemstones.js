function gemstones2(arr) { 
 
    let count=0;
    let arrSet = new Set(arr[0]);
    console.log(arrSet)
        
    for(let letter of arrSet){
        if(arr.every(x => x.includes(letter))){
            count++ 
        } 
    } return count; 
}

console.log(gemstones2(['abcdde', 'baccd', 'eeabg']))