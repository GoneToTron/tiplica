/* eslint-disable linebreak-style */
/* eslint-disable no-constant-condition */
/* eslint-disable no-cond-assign */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-plusplus */
/* eslint-disable no-implied-eval */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
function losowanie1() { // Początek - Funkcja dająca pierwszą zmienną do losowania
  const losData = Date.now();
  const losPierwszy = Math.log(losData);
  const losDrugi = Math.round(losPierwszy) + Math.floor(Math.random() * 10000 + 1);
  return losDrugi;
}
losowanie1();
const losWincyj = losowanie1();
// Koniec

const cyfryTabliczki = String(losWincyj) // Początek funkcji zmieniającej liczbę na cyfry
  .split('')
  .map((str) => Number(str));

// koniec

const cyfra = {}; // Początek - wyciągnięcie cyfr z arraya
for (let i = 0; i < cyfryTabliczki.length; i++) {
  cyfra[`nr_${i}`] = cyfryTabliczki[i];
} // koniec

const iloczyn = cyfra.nr_0 * cyfra.nr_1; // mnożenie pierwszej z drugą cyfrą
const czynnikPierwszy = cyfra.nr_0; // Początek - kod do wyświetlania czynników mnożenia w html
const czynnikDrugi = cyfra.nr_1;
const czynnikTrzeci = cyfra.nr_2;
const czynnikCzwarty = cyfra.nr_3;

document.getElementById('czynnikPierwszy').innerHTML = czynnikPierwszy;
document.getElementById('czynnikDrugi').innerHTML = czynnikDrugi;
document.getElementById('czynnikTrzeci').innerHTML = czynnikTrzeci;
document.getElementById('czynnikCzwarty').innerHTML = czynnikCzwarty; // Koniec

function AutoRefresh(t) { // autorefresh
  setTimeout('location.reload(true);', t);
}

// Sprawdzenie wyniku
const a = parseFloat(czynnikPierwszy);
const b = parseFloat(czynnikDrugi);
const d = parseFloat(czynnikTrzeci);
const e = parseFloat(czynnikCzwarty);
const ilorazTrue = a * b * d * e;
function wynikInput() {
  let c = document.getElementById('mojWynik').value;
  let wynikText;
  if (isNaN(c)) {
    const inputArr = ['To nie jest liczba', 'Ale skucha - to nie liczba!'];
    const randomArr = inputArr[Math.floor(Math.random() * inputArr.length)];
    wynikText = randomArr;
  } else if (c < ilorazTrue || c > ilorazTrue) {
    const inputArr = ['Błąd mordeczko', 'Poważnie? Błąd!', 'Żle! Pani Marta jest smutna :(', 'Nieeeeeeeee!'];
    const randomArr = inputArr[Math.floor(Math.random() * inputArr.length)];
    wynikText = randomArr;
  } else if (c = ilorazTrue) {
    const inputArr = ['Dobrze!', 'Geniuszu! Mata i Sanah piszą piosenkę o Tobie!', 'Tak jest...Dawaj następne!', 'Cały TikTok robi filmy o geniuszu!'];
    const randomArr = inputArr[Math.floor(Math.random() * inputArr.length)];
    wynikText = randomArr;

    AutoRefresh(3500); // autorefresh function call
  } else if (c = 'undefined') {
    const cUn = 'Tak jest...Dawaj następne!';
    wynikText = cUn;
    AutoRefresh(3500);
  }

  document.getElementById('wynikShow').innerHTML = wynikText;
}
function reLoad() {
  location.reload();
}
$(document).ready(() => { // audio click
  const obj = document.createElement('audio');
  obj.src = 'click.wav';
  obj.volume = 0.1;
  obj.autoPlay = false;
  obj.preLoad = true;
  obj.controls = true;

  $('.playSound').click(() => {
    obj.play();
    // end of audio click;
  });
});

$(document).ready(() => {
  $('#mojWynik').keyup((event) => {
    if (event.which === 13) {
      $('#myWynik').click();
    }
  });
});
