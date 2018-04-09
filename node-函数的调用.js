import http from 'http';
import method from './module/method';
// let method =require('./module/method');

http.createServer((request, response) => {
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if (request.url !== '/favicon.ico'){
		new method().speak(response);
    }
    response.end('');
}).listen(4000);
console.log('请访问地址:localhost:4000');
