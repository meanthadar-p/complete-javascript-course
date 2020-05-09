//John's Team
var firstGameJohn, secondGameJohn, thirdGameJohn;
firstGameJohn = 89;
secondGameJohn = 120;
thirdGameJohn = 103;
avgJohn = (firstGameJohn+secondGameJohn+thirdGameJohn)/3;
console.log('John: ' + avgJohn)

//Mike's Team
var firstGameMike, secondGameMike, thirdGameMike;
firstGameMike = 116;
secondGameMike = 94;
thirdGameMike = 123;
avgMike = (firstGameMike+secondGameMike+thirdGameMike)/3;
console.log('Mike: '+ avgMike)

//Mary's Team
var firstGameMary, secondGameMary, thirdGameMary;
firstGameMary = 97;
secondGameMary = 134;
thirdGameMary = 105;
avgMary = (firstGameMary+secondGameMary+thirdGameMary)/3;
console.log('Mary: '+ avgMary)

switch(true){
    case(avgJohn>avgMike && avgJohn>avgMary): 
        console.log('John is the winner: ' + avgJohn)
        break;
    case(avgMike>avgJohn && avgMike>avgMary): 
        console.log('Mike is the winner: '+ avgMike)
        break;
    case(avgMary>avgJohn && avgMary>avgMike): 
        console.log('Mary is the winner: '+ avgMike)
        break;
    default:
        console.log('draw!')
        break;
}