"use strict";

function BinarioADecimal(num) { //10
  // tu codigo aca  
  // cada numero binario hay que multiplicarlo x 2, y a su vez hay que elevarlo empezando con el 0 por cada i, y se le va sumando 1
  let sum = 0
  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i]*2**(num.length - 1 - i);
  }
  return sum ; 
    
}

function DecimalABinario(num) { // 293
  // tu codigo aca
  let binario = ""
  while (num > 0) {
		binario = (num % 2) + binario;
		num = Math.floor(num / 2);
  }
  return binario;
  }


// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
