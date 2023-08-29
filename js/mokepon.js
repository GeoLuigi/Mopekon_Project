let playersAttack;
let enemyAttack;
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
        1: 'fuego',
        2: 'agua',
        3: 'tierra'
    };

    let numberChoice = Math.floor(Math.random() * (3) + 1);
    enemyAttack = choices[numberChoice];
}
function showAndHideSections() {
    let petSelectionSection = document.getElementById("pet-selection");
    let attackSelectionSection = document.getElementById("attack-selection");

    petSelectionSection.style.display = 'none'
    attackSelectionSection.style.display = 'flex'
}
function battleResult() {
    if (playersAttack == enemyAttack) {
        document.getElementById("players-health").innerHTML = playerHealth
        document.getElementById("enemy-health").innerHTML = enemyHealth
        return 'EMPATE ⛔';
    } else if (
                (playersAttack == 'fuego' && enemyAttack == "tierra") ||
                (playersAttack == "tierra" && enemyAttack == "agua") ||
                (playersAttack == "agua" && enemyAttack == "fuego")){

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
    let resultSection = document.getElementById('result');
    let playersAttackSection = document.getElementById('player-attack');
    let enemyAttackSection = document.getElementById('enemy-attack');
    let result = battleResult();

    let newEnemyAttack = document.createElement('p');
    let newPlayerAttack = document.createElement('p');

    resultSection.innerHTML = result;
    newPlayerAttack.innerHTML = playersAttack;
    newEnemyAttack.innerHTML = enemyAttack;

    playersAttackSection.appendChild(newEnemyAttack);
    enemyAttackSection.appendChild(newPlayerAttack);
}
function gameOver() {
    let restartSection = document.getElementById("restart-section");
    let resultSection = document.getElementById('messages');

    if(enemyHealth == 0){
        alert('GAME OVER')
        resultSection.innerHTML = 'GAME OVER, 🎉🎊TU GANAS🎊🎉'
        restartSection.style.display = "flex";
    }else if(playerHealth == 0){
        alert('GAME OVER')
        resultSection.innerHTML = 'GAME OVER, 💀💀TU PIERDES💀💀'
        restartSection.style.display = "flex";
    }
}
function disableButtons() {
    let fireAttackButton = document.getElementById("fire-attack-button");
    let waterAttackButton = document.getElementById("water-attack-button");
    let earthAttackButton = document.getElementById("earth-attack-button");

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
    let attackSelectionSection = document.getElementById("attack-selection");
    let restartSection = document.getElementById("restart-section");

    attackSelectionSection.style.display = 'none';
    restartSection.style.display = 'none';

    let petSelectionButton = document.getElementById("pet-selection-button");
    let fireAttackButton = document.getElementById("fire-attack-button");
    let waterAttackButton = document.getElementById("water-attack-button");
    let earthAttackButton = document.getElementById("earth-attack-button");
    let restartButton = document.getElementById("restart-button");

    petSelectionButton.addEventListener("click", function(){
        playersPetSelection(() => {
            enemyPetSelection();
            showAndHideSections();
        });
    });

    fireAttackButton.addEventListener("click", function(){
        playersAttack = 'fuego';
        attackButtonAction();
    });

    waterAttackButton.addEventListener("click", function(){
        playersAttack = 'agua';
        attackButtonAction();
    });

    earthAttackButton.addEventListener("click", function(){
        playersAttack = 'tierra';
        attackButtonAction();
    });

    restartButton.addEventListener("click", function(){
        location.reload();
    });
}

window.addEventListener('load', starGame)

