import express from 'express';
import dotenv from 'dotenv';
import { gameRoutes } from './src/routes/gameRoutes.js'; // Importação sem default

dotenv.config();

const app = express();
app.use(express.json());

// Usando as rotas de jogo
app.use('/api/game', gameRoutes);

// Iniciando o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
