import * as express from "express";
import * as request from 'request';

const app = express();


app.get('/api', (req, res) => {
    request(`https://data.worldbank.org/token-search?q=${req.query.q}&exclude=&locale=en&maxComposites=100`, (error, response, body) => {
        res.send(body)
    });
});

const server = app.listen(8000, "localhost", () => {
    const {address, port} = server.address();
    console.log('Listening on %s %s', address, port);
});
