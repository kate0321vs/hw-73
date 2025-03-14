const express = require('express');
const app = express();
const port = 8000;
const Vigenere = require('caesar-salad').Vigenere;

app.get('/:param', (req, res) => {
    const param = req.params.param;
    res.send(`<h1>${param}</h1>`);
});

const password = 'password';
app.get(`/encode/:input`, (req, res) => {
    const input = req.params.input;
    const encode = Vigenere.Cipher(password).crypt(input);
    res.send(`<h1>${encode}</h1>`);
});

app.get(`/decode/:input`, (req, res) => {
    const input = req.params.input;
    const decode = Vigenere.Decipher(password).crypt(input);
    res.send(`<h1>${decode}</h1>`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});