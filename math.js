function losowanie1(){                      //Początek - Funkcja dająca pierwszą zmienną do losowania
		let losData = Date.now();
    let losPierwszy = Math.log(losData);
    let losDrugi = Math.round(losPierwszy) + Math.floor(Math.random()*10000+1);
return losDrugi
}
losowanie1();
let losWincyj = losowanie1();
console.log(losWincyj);                     // Koniec

const cyfryTabliczki = String(losWincyj)    // Początek funkcji zmieniającej liczbę na cyfry
  .split('')
  .map(str => Number(str));

console.log(cyfryTabliczki);                //koniec


let cyfra = {};                             // Początek - wyciągnięcie cyfr z arraya
for(var i = 0; i< cyfryTabliczki.length; i++){
   cyfra['nr_'+i] = cyfryTabliczki[i];
}                                            // koniec

let iloczyn =  cyfra.nr_0*cyfra.nr_1;        //mnożenie pierwszej z drugą cyfrą
console.log(iloczyn)

const czynnikPierwszy = cyfra.nr_0;           // Początek - kod do wyświetlania czynników mnożenia w html
const czynnikDrugi = cyfra.nr_1;

document.getElementById("czynnikPierwszy").innerHTML = czynnikPierwszy;
document.getElementById("czynnikDrugi").innerHTML = czynnikDrugi;  // Koniec





