import { createServer } from 'http';

const server = createServer((req, res) => {
    switch(req.url) {
        case '/status': {
            res. writeHead(200, {
                'Content-Typo': 'application/json',
            });
            res.write(JSON.stringify({
                status: "OK",
                })
            );
            res.end();
            return;
        }
        default: {
            res. writeHead(404, 'Server not found.');
            res.end();
        }
    }
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOST = process.env.HOST || '127.0.0.1';

server.listen(8000, "127.0.0.1", () => {
    console.log(`Server is listening at http://${HOST}:${PORT}`);
})