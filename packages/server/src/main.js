// import { createServer } from 'http';
// import { parse } from 'querystring';

import express from 'express';
import cors from 'cors';

const server = express();

// server.use(cors());
const enableCors = cors({origin: 'http://localhost:3000'});

server.get('/status', (req, res) => {
    res.send({
        status: "OK",
    });
})

server
.options('/authenticate', enableCors)
.post('/authenticate', enableCors, express.json(), (req, res) => {
    console.log('E-mail', req.body.email, 'Senha', req.body.password);
    res.send({
        status: "OK",
    });
})

// const server = createServer((req, res) => {
//     switch(req.url) {
//         case '/status': {
//             res. writeHead(200, {
//                 'Content-Typo': 'application/json',
//             });
//             res.write(JSON.stringify({
//                 status: "OK",
//                 })
//             );
//             res.end();
//             break;
//         }
//         case '/authenticate': {
//             let data='';
//             req.on('data', (chunk) => {
//                 data+=chunk;
//             })
//             req.on('end', () => {
//                 const params = parse(data);
//                 res.end();
//             })
//             break;
//         }
//         default: {
//             res. writeHead(404, 'Server not found.');
//             res.end();
//         }
//     }
// });

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOST = process.env.HOST || '127.0.0.1';

server.listen(8000, "127.0.0.1", () => {
    console.log(`Server is listening at http://${HOST}:${PORT}`);
})