var paymentBillJohn = [124, 48, 268];
console.log('Payment bill: ' + paymentBillJohn);

var calculateTip = function(bill){
    switch(true){
        case (bill < 50):
            return bill * 0.2;
        case (bill <= 200):
            return bill * 0.15;
        case (bill > 200):
            return bill * 0.1;
        default:
            return -99;
    }
}

var tipsJohn = [];
tipsJohn.push(calculateTip(paymentBillJohn[0]));
tipsJohn.push(calculateTip(paymentBillJohn[1]));
tipsJohn.push(calculateTip(paymentBillJohn[2]));
console.log('Tips: ' + tipsJohn);

var paidAmount = [];
paidAmount[0] = paymentBillJohn[0]+tipsJohn[0];
paidAmount[1] = paymentBillJohn[0]+tipsJohn[1];
paidAmount[2] = paymentBillJohn[0]+tipsJohn[2];
console.log('Paid amount: ' + paidAmount);