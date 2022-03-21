function losowanie1(){                      //Początek - Funkcja dająca pierwszą zmienną do losowania
  let losData = Date.now();
  let losPierwszy = Math.log(losData);
  let losDrugi = Math.round(losPierwszy) + Math.floor(Math.random()*10000+1);
return losDrugi
}
losowanie1();
let losWincyj = losowanie1();
 // Koniec

const cyfryTabliczki = String(losWincyj)    // Początek funkcji zmieniającej liczbę na cyfry
.split('')
.map(str => Number(str));

 //koniec


let cyfra = {};                             // Początek - wyciągnięcie cyfr z arraya
for(var i = 0; i< cyfryTabliczki.length; i++){
 cyfra['nr_'+i] = cyfryTabliczki[i];
}                                            // koniec

let iloczyn =  cyfra.nr_0*cyfra.nr_1;        //mnożenie pierwszej z drugą cyfrą
const czynnikPierwszy = cyfra.nr_0;           // Początek - kod do wyświetlania czynników mnożenia w html
const czynnikDrugi = cyfra.nr_1;

document.getElementById("czynnikPierwszy").innerHTML = czynnikPierwszy;
document.getElementById("czynnikDrugi").innerHTML = czynnikDrugi;  // Koniec



function AutoRefresh( t ) {                 //autorefresh
  setTimeout("location.reload(true);", t);
}

// Sprawdzenie wyniku 
let a = parseFloat(czynnikPierwszy);
let b = parseFloat(czynnikDrugi);
let ilorazTrue = a * b;
function wynikInput () {
  let c = document.getElementById("mojWynik").value;
  let wynikText;
  if (isNaN(c)) {
    let inputArr = ['To nie jest liczba', 'Ale skucha - to nie liczba!'];
    let randomArr = inputArr[Math.floor(Math.random()*inputArr.length)];
    wynikText = randomArr;
  } 
  else if (c < ilorazTrue || c > ilorazTrue) {
    let inputArr = ['Błąd mordeczko', 'Poważnie? Błąd!', 'Żle! Pani Marta jest smutna :(', 'Nieeeeeeeee!'];
    let randomArr = inputArr[Math.floor(Math.random()*inputArr.length)];
    wynikText = randomArr;
  }
    else if (c=ilorazTrue) {
      let inputArr = ['Dobrze!', 'Geniuszu! Mata i Sanah piszą piosenkę o Tobie!', 'Tak jest...Dawaj następne!', 'Cały TikTok robi filmy o geniuszu!'];
      let randomArr = inputArr[Math.floor(Math.random()*inputArr.length)]; 
    wynikText = randomArr;
   
    AutoRefresh(3500);  //autorefresh function call
     
  }
  else if (c ='undefined') {
    let cUn = 'Tak jest...Dawaj następne!';
    wynikText = cUn;
    AutoRefresh(3500);

  }

  document.getElementById("wynikShow").innerHTML = wynikText
};
function reLoad() {
  location.reload();
}
$(document).ready(function() { // audio click
  var obj = document.createElement("audio");
  obj.src = "click.wav";
  obj.volume = 0.1;
  obj.autoPlay = false;
  obj.preLoad = true;
  obj.controls = true;

  $(".playSound").click(function() {
    obj.play();
    // end of audio click;
  });
});
/*document.getElementById("mojWynik").addEventListener("keyup", function(event) {
  if (event.key === 'Enter') {
    document.getElementById("mojWynik").submit();
  return false;}}) */