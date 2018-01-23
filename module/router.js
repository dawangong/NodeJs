export default class Router{
    login (res){
        res.write('这里是登陆页面');
    }
    index (res){
        res.write('这里是主页面');
    }
}