import path from 'path';
import fs from 'fs/promises';
import http from 'http';
import url from 'url';
import { myme_type_object } from './lib/mimy_type.js';

const server = http.createServer(async(req, res) => {
    const method = req.method;
    const reqURL = url.parse(req.url, true);

    if(method === 'GET') {
        if(reqURL.pathname === '/') {
            res.writeHead(302, {'Location' : '/index.html'});
            res.end();
            return;
        }else {
            try{
                const pathToFile = path.resolve('public', reqURL.pathname.slice(1));
                const fileExist = await fs.stat(pathToFile);
                const fileContent = await fs.readFile(pathToFile);  
                
                res.writeHead(200, {'Content-Type' : myme_type_object[path.extname(pathToFile)]})
                res.write(fileContent);
                res.end();
                return;
            }catch(err) {
                // console.log(err);
                const serverErrorText = '500 Server Error';
                res.writeHead(500, {
                    'Content-Type' : 'text/html',
                    'Content-Length' : Buffer.byteLength(serverErrorText)
                });
                res.write(serverErrorText); // почему нельзя отправить html -> h1 ?
                res.end(); 
                return;
            }
        }
    }

    const notFoundError = '404 Not Found';
    res.writeHead(404, {
        'Content-Type' : 'text/html',
        'Content-Length' : Buffer.byteLength(notFoundError)
    });
    res.write(notFoundError);
    res.end();
})

server.listen(3001, () => {
    console.log("Server is running on the port 3001");
})