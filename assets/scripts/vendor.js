const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');

function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}

function dealMonsterDamage(damage) {
  const dealtDamage = Math.random() * damage;
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  return dealtDamage;
}

function dealPlayerDamage(damage) {
  const dealtDamage = Math.random() * damage;
  playerHealthBar.value = +playerHealthBar.value - dealtDamage;
  return dealtDamage;
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}

function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

function setPlayerHealth(health) {
  playerHealthBar.value = health;
}

// const monsterHealthBar = document.getElementById('monster-heal');
// const playerHealthBar = document.getElementById('player-health');
// const bonusLife = document.getElementById('bonus-life');

// const attackBtn = document.getElementById('attack-btn');
// const strongAttackBtn = document.getElementById('strong-btn');
// const healBtn = document.getElementById('heal-btn');
// const logBtn = document.getElementById('log-btn');

// function adjustHealthBars(maxlife) {
//   monsterHealthBar.max = maxLife;
//   monsterHealthBar.value = maxLife;
//   playerHealthBar.max = maxLife;
//   playerHealthBar.value = maxLife;
// }

// function dealMonsterDamage(damage) {
//   const dealtDamage = Math.random() * damage;
//   monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
//   return dealtDamage;
// }

// function dealPlayerDamage(damage) {
//   const dealtDamage = Math.random() * damage;
//   playerHealth.value = +playerHealthBar.value + healValue;
// }

// function increasedPlayerHealth(healValue) {
//   playerHealthBar.value = +playerHealthBar.value + healValue;
// }

// function resetGame(value) {
//   playerHealthBar.value = value;
//   monsterHealthBar.value = value;
// }

// function removeBonusLife() {
//   bonusLifeE1.parentNode.removeChild(bonusLife);
// }

// function setPlayerHealth(health) {
//   playerHealthBar.value = health;
// }
