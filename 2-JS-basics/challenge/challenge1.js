var massMark, heightMark;
massMark = prompt('What\'s Mark\'s mass? ');
heightMark = prompt('What\'s Mark\'s height? ');
var BMIMark = massMark / (heightMark * heightMark);
console.log('Mark\'s BMI is '+ BMIMark);

var massJohn, heightJohn;
massJohn = prompt('What\'s John\'s mass? ');
heightJohn = prompt('What\'s John\'s height? ');
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log('John\'s BMI is '+ BMIJohn);

var isBMIMarkHigher = BMIMark > BMIJohn;

console.log('is Mark\'s BMI higher than John: ' + isBMIMarkHigher);