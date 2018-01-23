let http = require('http');
import module from './module/module';
http.createServer((request, response) => {
    response.writeHead(200,{'content-type':'text/html;charset=utf-8'});
    new module().can(response);
    response.end('');
}).listen(4000);
console.log('请访问地址:localhost:4000');