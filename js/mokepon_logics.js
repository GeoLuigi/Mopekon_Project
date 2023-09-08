import {mokepons} from "./mokepon_factory.js";

// Html Elements - sections
const petSelectionSection = document.getElementById("pet-selection");
const petCardContainer = document.getElementById("pet-card-container");
const attackSelectionSection = document.getElementById("attack-selection");
const resultSection = document.getElementById('result');
const playersAttackSection = document.getElementById('player-attack');
const enemyAttackSection = document.getElementById('enemy-attack');
const restartSection = document.getElementById("restart-section");
const messagesSection = document.getElementById('messages');

// Html Elements - buttons
const fireAttackButton = document.getElementById("fire-attack-button");
const waterAttackButton = document.getElementById("water-attack-button");
const earthAttackButton = document.getElementById("earth-attack-button");
const petSelectionButton = document.getElementById("pet-selection-button");
const restartButton = document.getElementById("restart-button");
const mokeponObjectKeys = Object.keys(mokepons);

let playersAttack;
let enemyAttack;
let mokeponOptions = "";
let playerHealth = 3;
let enemyHealth = 3;

function playersPetSelection(callback) {
    const pet = Array.from(document.querySelectorAll('input[name="pet"]')).find((pet) => pet.checked);

    if (pet) {
      document.getElementById("selected-pet").innerHTML = pet.id.toUpperCase();
      callback();
    } else {
      alert("Por favor, selecciona una mascota.");
    }
}
function enemyPetSelection() {
    const choices = {
        1: 'hipodoge',
        2: 'capipepo',
        3: 'ratigueya'
    };

    let numberChoice = Math.floor(Math.random() * (3) + 1);
    document.getElementById("enemy-pet").innerHTML = choices[numberChoice].toUpperCase();
    document.getElementById("players-health").innerHTML = playerHealth;
    document.getElementById("enemy-health").innerHTML = enemyHealth;
}
function enemyPetAttack() {
    var choices = {
        1: '🔥',
        2: '💧',
        3: '🌱'
    };

    let numberChoice = Math.floor(Math.random() * (3) + 1);
    enemyAttack = choices[numberChoice];
}
function showAndHideSections() {
    petSelectionSection.style.display = 'none'
    attackSelectionSection.style.display = 'flex'
}
function battleResult() {
    if (playersAttack == enemyAttack) {
        document.getElementById("players-health").innerHTML = playerHealth
        document.getElementById("enemy-health").innerHTML = enemyHealth
        return 'EMPATE ⛔';
    } else if (
                (playersAttack == '🔥' && enemyAttack == "🌱") ||
                (playersAttack == "🌱" && enemyAttack == "💧") ||
                (playersAttack == "💧" && enemyAttack == "🔥")){

        enemyHealth -= 1;
        document.getElementById("players-health").innerHTML = playerHealth;
        document.getElementById("enemy-health").innerHTML = enemyHealth;
        return 'GANASTE!🎉';
    } else {
        playerHealth -= 1;
        document.getElementById("players-health").innerHTML = playerHealth
        document.getElementById("enemy-health").innerHTML = enemyHealth
        return 'PERDISTE 😪';
    }
}
function messageCreator() {
    let result = battleResult();
    let newEnemyAttack = document.createElement('p');
    let newPlayerAttack = document.createElement('p');

    resultSection.innerHTML = result;
    newPlayerAttack.innerHTML = playersAttack;
    newEnemyAttack.innerHTML = enemyAttack;

    playersAttackSection.appendChild(newPlayerAttack);
    enemyAttackSection.appendChild(newEnemyAttack);
}
function gameOver() {
    if(enemyHealth == 0){
        alert('GAME OVER')
        messagesSection.innerHTML = 'GAME OVER, 🎉🎊TU GANAS🎊🎉'
        restartSection.style.display = "flex";
    }else if(playerHealth == 0){
        alert('GAME OVER')
        messagesSection.innerHTML = 'GAME OVER, 💀💀TU PIERDES💀💀'
        restartSection.style.display = "flex";
    }
}
function disableButtons() {
    fireAttackButton.disabled = true
    waterAttackButton.disabled = true
    earthAttackButton.disabled = true
}
function attackButtonAction() {
    if(enemyHealth > 0 && playerHealth > 0){
        enemyPetAttack();
        messageCreator();
        gameOver();
    }else{
        alert("Ya no se pueden realizar mas ataques, por favor reinicia el juego")
        disableButtons()
    }
}
function starGame() {
    attackSelectionSection.style.display = 'none';
    restartSection.style.display = 'flex';

    // Inserting all the mokepon information into the html document
    mokeponObjectKeys.forEach(key => {
        mokeponOptions += `
        <div  class="pet-card">
            <input type='radio' name='pet' id="${key}" />
            <label class="pet-label" id="${key}-label" for="${key}">
                <p>${mokepons[key].name}</p>
                <img src="${mokepons[key].image}" alt="${key}" />
            </label>
        </div>
        `
    });

    petCardContainer.innerHTML = mokeponOptions;

    // Button actions

    petSelectionButton.addEventListener("click", function(){
        playersPetSelection(() => {
            enemyPetSelection();
            showAndHideSections();
        });
    });

    fireAttackButton.addEventListener("click", function(){
        playersAttack = '🔥';
        attackButtonAction();
    });

    waterAttackButton.addEventListener("click", function(){
        playersAttack = '💧';
        attackButtonAction();
    });

    earthAttackButton.addEventListener("click", function(){
        playersAttack = '🌱';
        attackButtonAction();
    });

    restartButton.addEventListener("click", function(){
        location.reload();
    });
}

window.addEventListener('load', starGame)