const express = require('express');
const app = express();
const port = 8000;

app.get('/:param', (req, res) => {
    const param = req.params.param;
    res.send(`<h1>${param}</h1>`);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});