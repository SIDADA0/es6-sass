//ES5
function People(name, age){
    this.name = name;
    this.age = age;
}

People.prototype.showName = function(){
    console.log(this.name);
};

let p1 = new People('zs', 20);
console.log(p1);
p1.showName();

//基于原型的继承
// .call() 改变参数 = apply ;bind 只改变不显示
function Coder(name, age, company){
    People.call(this, name, age); // 继承父类的属性
    this.company = company;
}

Coder.prototype = new People(); // 继承父类的方法

Coder.prototype.showCompany = function(){
    console.log(this.company);
};

Coder.fn = function(){
    console.log('我是静态方法');
};

let c1 = new Coder('lisi', 28, '唯创');
console.log(c1);
c1.showName();
c1.showCompany();

Coder.fn();


let now = new Date();
let arr = new Date();
let now = new Date();



//ES6
//.class
class People{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showName(){
        console.log(this.name);
    }
}

let p1 = new People('zs', 20);
console.log(p1);
p1.showName();

class Coder extends People{
    constructor(name, age, company){
        super(name, age);
        this.company = company;
    }
    showCompany(){
        console.log(this.company);
    }
    static foo(){
        console.log('我是静态方法');
    }
}

let c1 = new Coder('lisi', 30, 'baidu');
console.log(c1);
c1.showName();
c1.showCompany();
Coder.foo();

//继承    extend
//static 静态方法