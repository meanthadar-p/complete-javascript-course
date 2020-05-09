function tipsRule(fullname, bill){
    switch(fullname){
        case 'John':
            switch(true){
                case (bill < 50):
                    return bill * 0.2;
                case (bill <= 200):
                    return bill * 0.15;
                case (bill > 200):
                    return bill * 0.1;
            }
        case 'Mark': 
            switch(true){
                case (bill < 100):
                    return bill * 0.2;
                case (bill <= 300):
                    return bill * 0.1;
                case (bill > 300):
                    return bill * 0.25;
            }
    }
}

//John's family
var John = {
    fullName: 'John',
    bills: [124, 48, 268, 180, 42],
    calculateTips: function(){
        this.tips = [];
        this.paidAmount = [];
        this.sumTips = 0;
        for(var i=0; i<this.bills.length; i++){
            this.tips[i] = tipsRule(this.fullName, this.bills[i]);
            this.paidAmount[i] = this.bills[i] + this.tips[i];
            this.sumTips+=this.tips[i];
        }
        this.avgTips = this.sumTips / this.bills.length;
    }
}

//Mark's family
var Mark = {
    fullName: 'Mark',
    bills: [77, 375, 110, 45],
    calculateTips: function(){
        this.tips = [];
        this.paidAmount = [];
        this.sumTips = 0;
        for(var i=0; i<this.bills.length; i++){
            this.tips[i] = tipsRule(this.fullName, this.bills[i]);
            this.paidAmount[i] = this.bills[i] + this.tips[i];
            this.sumTips+=this.tips[i];
        }
        this.avgTips = this.sumTips / this.bills.length;
    }
}

John.calculateTips();
Mark.calculateTips();

//Compare 2 family
if(John.avgTips > Mark.avgTips){
    console.log('John\'s family has average tips more than Mark\'s family: ' + John.avgTips);
}
else if(Mark.avgTips > John.avgTips){
    console.log('Mark\'s family has average tips more than John\'s family: ' + Mark.avgTips);
}else{
    console.log('average tips from Mark\'s fimaly is EQUAL to John\'s family');
}