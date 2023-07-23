/**console.log('Menyalakan mesin kopi');
console.log('Menggiling biji kopi');
console.log('Memanaskan Air');
console.log('Mencampurkan Air dan Kopi');
console.log('Menuangkan Kopi ke dalam gelas');
console.log('Menuangkan susu ke dalan gelas');
console.log('Kopi anda sudah siap!');

const coffeeStock = require('./state');
console.log(coffeeStock);

const makeCoffee = (type, miligrams) => {
    if (coffeeStock[type] >= miligrams){
        console.log('Kopi berhasil dibuat')
    } else {
        console.log('Biji kopi habis!')
    }
}

makeCoffee("robusta", 80); 
*/
/*import coffeeStock from "./state.js";

const displayStock = stock => {
    for (const type in stock){
        console.log(type);
    }
}

displayStock(coffeeStock);
*/

import { coffeeStock as stock, isCoffeeMachineReady} from "./state.js";

console.log(stock);
console.log(isCoffeeMachineReady);