const button = document.getElementById("calcola");
button.addEventListener("click", function () {
  const age = document.getElementById("user-age");
  const kmtrip = document.getElementById("user-km");
  const ageValue = age.value
  const kmtripValue = kmtrip.value
  const partialticket = kmtripValue * 0.21;

  

  // ### CALCOLO DELLO SCONTO

  let sconto20 = partialticket * 0.2;

  let sconto40 = partialticket * 0.4;

  // ### calcolo il prezzo REALE del biglietto

  let priceticket = partialticket;

  if (ageValue < 18) {
    priceticket = partialticket - sconto20;
  } else if (ageValue > 65) {
    priceticket = partialticket - sconto40;
  }

  document.getElementById("final-price").value = priceticket.toFixed(2);
});
