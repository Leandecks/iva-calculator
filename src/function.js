function iva() {
  let x = Number(prompt("Scrivi il Numero"));
let y = 22 * x / 100;
let z = x + y;

let b = y.toFixed(2);
let a = z.toFixed(2);

alert("Il 22% di IVA è: " + b + "€\nIl totale IVA inclusa è: " + a + "€");
}

function scorpIva() {
   x = Number(prompt("Scrivi il Numero"));
let y = x / 1.22;

let b = y.toFixed(2);

alert("Lo Scorporamento dell'IVA è: " + b + "€");
}
