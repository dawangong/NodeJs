import http from 'http';
import url from 'url';
import Router from './module/router';

http.createServer((req, res) => {
    res.writeHead(200,{'content-type':'text/html;charset=utf-8'});
    if (req.url !== '/favicon.ico'){
        let rt = new Router();
        let pathname = url.parse(req.url).pathname.replace(/\//, '');
        rt[pathname](res);
    }
    res.end('');
}).listen(4000);
console.log('请访问地址:localhost:4000');