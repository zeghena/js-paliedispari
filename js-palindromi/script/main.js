const nuovoNome = prompt("digitare parola da verificare")
console.log(nuovoNome)

let contraria = ""



for(let i = nuovoNome.length - 1 ; i >= 0; i--){
 console.log(nuovoNome[i])  
 contraria += nuovoNome[i]
 


//  nuovoNome[2]
//  console.log(nuovoNome)

}


console.log(contraria)

if(contraria == nuovoNome){
    alert("il nome è palindromo")
    
}else{
    alert("il nome non è palindromo")
}




