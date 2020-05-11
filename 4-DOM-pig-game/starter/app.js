/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var totalScore, currentScore, activePlayer, dice, totalPlayer, winnerScore, latesDice;
init();

totalPlayer = 2;
winnerScore = 100;

//Roll dice
document.querySelector('.btn-roll').addEventListener('click', function(){
    //Random number
    dice = [rollDice(), rollDice()];
    console.log('Player'+(activePlayer+1)+': '+dice);

    //Update result
    for(var i=0;i<dice.length;i++){
        updateDiceResult(i, dice[i])
    }

    if(dice[0] === 1 || dice[1] === 1){
        lostCurrentScoreAndNextTurn();
    }else if(dice[0] === 6 && dice[1] === 6){
        lostTotalScoreAndNextTurn();
    }
    else{
        currentScore += dice[0] + dice[1];
        updateCurrentScore();
    }
});

//Hold current score and turn end
document.querySelector('.btn-hold').addEventListener('click', function(){
    totalScore[activePlayer] += currentScore;
    currentScore = 0;
    input = getFinalScore();

    if(input){
        winnerScore = input;
    }

    console.log(getFinalScore());
    if(totalScore[activePlayer] >= winnerScore){ //Got winner
        updateTotalScore();
        endGame();
    }else{
        updateScoreAndNextTurn();
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    totalScore = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    isSixAlreay = false;

    //Set all score as zero and remove all status to play
    for(var i = 0 ; i< totalPlayer ; i++){
        updateCurrentScore(i);
        updateTotalScore(i);
        updatePlayerName(i, 'Player'+(i+1));
        removeWinner(i);
    }

    addActive(activePlayer);
    enableGameButton();
}

function rollDice(){
    return Math.floor(Math.random() * 6) +1;
}

function updateDiceResult(n, result){
    var diceDOM = document.querySelector('#dice-'+n);
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + result + '.png';
}

//Get, Update function
function getCurrentScore(){
    return document.getElementById('current-' + activePlayer).textContent;
}

function updateCurrentScore(player = activePlayer){
    document.getElementById('current-' + player).textContent = currentScore;
}

function getTotalScore(){
    return document.getElementById('score-' + activePlayer).textContent;
}

function updateTotalScore(player = activePlayer){
    document.getElementById('score-' + player).textContent = totalScore[player];
}

function updatePlayerName(player, name){
    document.getElementById('name-' + player).textContent = name;
}

function getFinalScore(){
    return document.querySelector('.final-score').value;
}

function addActive(player){
    addPlayerStatus(player, 'active')
}

function addPlayerStatus(player, status){
    document.querySelector('.player-'+ player +'-panel').classList.add(status)
}

function toggleActive(player){
    togglePlayerStatus(player, 'active')
}

function toggleWinner(player){
    togglePlayerStatus(player, 'winner')
}

function togglePlayerStatus(player, status){
    document.querySelector('.player-'+ player +'-panel').classList.toggle(status)
}

function removeActive(player){
    removePlayerStatus(player, 'active')
}

function removeWinner(player){
    removePlayerStatus(player, 'winner')
}

function removePlayerStatus(player, status){
    document.querySelector('.player-'+ player +'-panel').classList.remove(status)
}

function setDisplay(item, text){
    document.querySelector(item).style.display = text;
}

function enableDisplay(item){
    setDisplay(item, 'block');
}

function disableDisplay(item){
    setDisplay(item, 'none');
}

function enableDice(){
    enableDisplay('#dice-0');
    enableDisplay('#dice-1');
}

function disableDice(){
    disableDisplay('#dice-0');
    disableDisplay('#dice-1');
}

function enableRollDice(){
    enableDisplay('.btn-roll');
}

function disableRollDice(){
    disableDisplay('.btn-roll');
}

function enableHold(){
    enableDisplay('.btn-hold');
}

function disableHold(){
    disableDisplay('.btn-hold');
}

function enableGameButton(){
    enableRollDice();
    enableHold();
}

function disbleGameButton(){
    disableDice();
    disableRollDice();
    disableHold();
}

function lostCurrentScoreAndNextTurn(){
    currentScore = 0;
    updateScoreAndNextTurn();
}

function lostTotalScoreAndNextTurn(){
    currentScore = 0;
    totalScore[activePlayer] = 0;
    updateScoreAndNextTurn();
}

function updateScoreAndNextTurn(){
    updateCurrentScore();
    updateTotalScore();

    //Swap active player
    var nextPlayer = (activePlayer + 1) % totalPlayer;
    toggleActive(activePlayer);
    toggleActive(nextPlayer);

    activePlayer = nextPlayer;
    disableDice();
}

function endGame(){
    updatePlayerName(activePlayer, 'Winner!');
    toggleActive(activePlayer);
    toggleWinner(activePlayer);
    disbleGameButton(); 
}