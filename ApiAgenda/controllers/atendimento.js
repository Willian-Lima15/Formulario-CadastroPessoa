module.exports = app => {
    app.get('/atendimento', (req, res) => res.send('Você está na rota 3000 ultilizando um GET'));
}