const { getRandomWord, checkGuess } = require('../services/gameLogic');

// Variável para armazenar o estado do jogo (temporário, pode ser armazenado em um banco de dados)
let currentGame = null;

// Iniciar um novo jogo
export function startGame(req, res) {
  const word = getRandomWord();
  currentGame = {
    word,
    attempts: 6, // número de tentativas permitidas
    guessedLetters: []
  };
  
  res.json({ message: 'Jogo iniciado!', wordLength: word.length });
}

// Fazer uma tentativa de adivinhar a palavra
export function makeGuess(req, res) {
  if (!currentGame) {
    return res.status(400).json({ message: 'Nenhum jogo iniciado!' });
  }

  const { guess } = req.body;

  if (guess.length !== currentGame.word.length) {
    return res.status(400).json({ message: 'O palpite deve ter o mesmo número de letras da palavra secreta.' });
  }

  const result = checkGuess(currentGame.word, guess);
  currentGame.attempts -= 1;

  if (guess === currentGame.word) {
    return res.json({ message: 'Você acertou!', result });
  } else if (currentGame.attempts <= 0) {
    return res.json({ message: 'Fim de jogo! Você não acertou a palavra.', result });
  } else {
    return res.json({ message: `Tentativas restantes: ${currentGame.attempts}`, result });
  }
}
