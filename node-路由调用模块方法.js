import http from 'http';
import url from 'url';

import Router from './module/Router';
http.createServer((request, response) => {
    response.writeHead(200,{'content-type':'html/text;charset=utf-8'});
    if(request.url !== 'favicon.ico'){
       let pathname = url.parse(request.url).pathname.replace(/\//,'');
       new Router()[pathname](response);
    }
    response.end('');
}).listen(4000);
console.log('请访问地址:localhost:4000');
