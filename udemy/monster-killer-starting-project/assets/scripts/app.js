const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK'
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

let battleLog = [];

function getMaxLifeValues() {
    const enteredValue = prompt('Maximum life for you and the monster', '100');

    let parsedValue = parseInt(enteredValue);

    if (isNaN(parsedValue) || parsedValue <= 0) {
        throw { message: 'Invalid user input, not a number'}
    }

    return parsedValue;
}

let choseMaxLife;

try {
    choseMaxLife = getMaxLifeValues();
} catch (error) {
    console.log(error);
    choseMaxLife = 100;
    alert('You entered somehting wrong, deafault value of 100 is used.');
}

let currentMonsterHealth = choseMaxLife;
let currentPlayerHealth = choseMaxLife;
let hasBonusLife = true;

adjustHealthBars(choseMaxLife);

function writeLog(ev, val, monsterHealth, playerhealth) {
    let logEntry = {
        event: ev,
        value: val,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerhealth
    };

    switch (ev) {
        case LOG_EVENT_PLAYER_ATTACK: 
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry.target = 'PLAYER HEAL';
            break;
        case LOG_EVENT_GAME_OVER:
            logEntry;
            break;
    }
/*
    if (ev === LOG_EVENT_PLAYER_ATTACK) {
        logEntry.target = 'MONSTER';
    } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry.target = 'MONSTER';
    } else if (ev === LOG_EVENT_PLAYER_HEAL) {
        logEntry.target = 'PLAYER HEAL';
    } else if (ev === LOG_EVENT_GAME_OVER) {
        logEntry;
    }
*/
    battleLog.push(logEntry);
}

function reset() {
    currentMonsterHealth = choseMaxLife;
    currentPlayerHealth = choseMaxLife;
    resetGame(choseMaxLife);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;
    writeLog(
        LOG_EVENT_MONSTER_ATTACK, 
        playerDamage, 
        currentMonsterHealth, 
        currentPlayerHealth
    );

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        alert("Your dead if not because of your Bonus life");
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("You won!");
        writeLog(
            LOG_EVENT_GAME_OVER, 
            'PLAYER WON', 
            currentMonsterHealth, 
            currentPlayerHealth
        );
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("You lost!");
        writeLog(
            LOG_EVENT_GAME_OVER, 
            'MONSTER WON', 
            currentMonsterHealth, 
            currentPlayerHealth
        );
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert("You have a draw!");
        writeLog(
            LOG_EVENT_GAME_OVER, 
            'DRAW', 
            currentMonsterHealth, 
            currentPlayerHealth
        );
    }

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        reset();
    }
}

function attackMonster(mode) {
    let maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    let logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;
    
    /*if (mode === MODE_ATTACK) {
        maxDamage = ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_ATTACK;
    } else if (mode === MODE_STRONG_ATTACK) {
        maxDamage = STRONG_ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    }*/

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;

    writeLog(
        logEvent, 
        damage, 
        currentMonsterHealth, 
        currentPlayerHealth
    );

    endRound();
    
}

function attackHandler() {
    attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= choseMaxLife - HEAL_VALUE) {
        alert("You can't heal to more than your max initial health.");
        healValue = choseMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }

    increasePlayerHealth(HEAL_VALUE);
    currentPlayerHealth += HEAL_VALUE;

    writeLog(
        LOG_EVENT_PLAYER_HEAL, 
        healValue, 
        currentMonsterHealth, 
        currentPlayerHealth
    );

    endRound();
}

function printLogHandler() {
    console.log(battleLog);

    for (let i = 0; i < battleLog.length; i++) {
            console.log(battleLog[i]);
    }

    for (const logEntry of battleLog) {
        console.log(logEntry);

        for (const key in logEntry) {
            console.log(key + ' : ' + logEntry[key]); 
        }
    }

    // another example of loop with control label

    let j = 0;
    outerWhile: do {
        console.log('Outer', j);

         
        innerFor: for (let k = 0; k < 5; k++) {
            if (k === 3) {
                break outerWhile;
            }
            console.log('Inner', k);
        }
        j++
    } while (j < 3);

    alert('Log printed, see console tab via inspect element');
}


attackBtn.addEventListener("click", attackHandler);
strongAttackBtn.addEventListener("click", strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler)
