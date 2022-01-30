const PHONE_PRICE = 199.99;
const PHONE_ACCESSORIES = 20.00;
const TAX_RATE = 0.16;
const SPENDING_THRESHOLD =400.00;
var bankAccountBalance = 607.18;
var amount = 0;
function calculateTax(amount){return amount* TAX_RATE;}
 function formatAmount(amount){return "$" + amount.toFixed(2);}
//keep buying phones while you have money
while (amount < bankAccountBalance){ 
 //buy new phone
 amount= amount+PHONE_PRICE;
 //accessory?
if (amount< SPENDING_THRESHOLD){amount= amount + PHONE_ACCESSORIES;}} 
// government tax
amount = amount + calculateTax(amount);
console.log("your purchase" + formatAmount(amount));
//afford purchase?
if(amount> bankAccountBalance){console.log("you can't afford this purchase :(");}
//no you cant.