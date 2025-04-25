const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Backend do Aviator Predictor está online!');
});

app.get('/previsao', (req, res) => {
  res.json({ mensagem: 'Previsão gerada com sucesso' });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
