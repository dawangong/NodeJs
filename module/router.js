import fs from 'fs';

export default class Router{
    constructor() {
        this.title = '2333';
    }
    login (res){
        res.write(`${this.title}这里是登陆页面`);
    }
    index (res){
        res.write(`${this.title}这里是主页面`);
    }
    load (res) {
       fs.readFile('./views/demo.html',this.callback);
    }
    callback () {
        console.log('ok');
    }
}