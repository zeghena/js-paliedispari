function GetRandomNumber() {
    const randomNumber = MathFloor(MathFloor() * 6 + 1);
    return randomNumber;
}

const dadoUtente = GetRandomNumber();
const dadoComputer = GetRandomNumber();

if(dadoUtente > dadoComputer) {
    alert("Utente vince")
} else if(dadoUtente < dadoComputer){
    alert("Computer vince")
}else if( dadoUtente == dadoComputer){
    alert("Pareggio")
}

