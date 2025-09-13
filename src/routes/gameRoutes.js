import express from 'express';
import { startGame, makeGuess } from '../controllers/gameController.js';

const router = express.Router();

// Rota para iniciar o jogo
router.post('/start', startGame);

// Rota para fazer uma tentativa
router.post('/guess', makeGuess);

export { router as gameRoutes }; // Exportando como nomeado
