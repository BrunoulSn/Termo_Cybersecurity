// Lista de palavras para o jogo (Você pode expandir isso ou usar uma API para obter palavras aleatórias)
const words = ['abacaxi', 'banana', 'cachorro', 'elefante', 'gato', 'hipopotamo', 'iguana', 'javali'];

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

function checkGuess(word, guess) {
  const result = [];
  
  // Verificando a correspondência das letras
  for (let i = 0; i < word.length; i++) {
    if (word[i] === guess[i]) {
      result.push({ letter: guess[i], status: 'correct' });
    } else if (word.includes(guess[i])) {
      result.push({ letter: guess[i], status: 'close' });
    } else {
      result.push({ letter: guess[i], status: 'incorrect' });
    }
  }
  
  return result;
}

module.exports = {
  getRandomWord,
  checkGuess
};
