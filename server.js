const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());

function gerarMultiplicador() {
  return (Math.random() * 10).toFixed(2);
}

app.get('/previsao', (req, res) => {
  const multiplicador = parseFloat(gerarMultiplicador());
  let acao = '';

  if (multiplicador >= 2.0) {
    acao = 'Entre agora';
  } else {
    acao = 'Evite próxima rodada';
  }

  res.json({
    multiplicador,
    acao,
    horario: new Date().toLocaleTimeString()
  });
});

app.listen(PORT, () => {
  console.log(`Servidor ativo na porta ${PORT}`);
});
