import http from 'http';
import Router from './module/router';
import url from 'url';

http.createServer((request, response) => {
    response.writeHead(200,{'content-type':'text/html;charset=utf-8'});
    if (request.url !== '/favicon.ico'){
        let rt = new Router();
        let pathname = url.parse(request.url).pathname.replace(/\//, '');
        rt[pathname](response);
    }
    response.end('');
}).listen(4000);
console.log('请访问地址:localhost:4000');

