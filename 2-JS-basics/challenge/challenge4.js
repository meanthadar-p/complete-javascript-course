var Mark = {
    fullname: 'Mark',
    mass: 50,
    hight: 1.7,
    calBMI: function(){
        this.BMI = this.mass/(this.hight * this.hight);
    }
}
console.log(Mark);
Mark.calBMI();
console.log(Mark);

var John = {
    fullname: 'John',
    mass: 70,
    hight: 1.7,
    calBMI: function(){
        this.BMI = this.mass/(this.hight * this.hight);
    }
}
John.calBMI();

if(Mark.BMI > John.BMI){
    console.log('Mark\'s BMI is higher: '+Mark.BMI);
}else{
    console.log('John\'s BMI is higher: '+John.BMI);
}