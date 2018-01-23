export default class People{
    constructor(){
        this.name = '宇智波佐助';
    }
    can (res){
        res.write(this.name+'拥有轮回眼');
    }
};