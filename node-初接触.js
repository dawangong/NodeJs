// let http = require('http');
import http from 'http';

http.createServer((request, response) => {
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if (request.url !== 'favicon.ico'){
        response.write('you are successful！');
	 //    response.end('you are successful！');
        response.end('');//防止二次请求
    }
}).listen(4000);
console.log('请访问4000端口');
