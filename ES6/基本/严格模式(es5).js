//this   指向
function foo(){
    Console.log(this);
}
window.foo();   //普通函数  指向window

setTimeout(function(){
    console.log(this);
},1000);        //普通函数  指向window

let oBtn = document.getElementById('btn');
oBtn.onclick = function(){
    console.console.log(this);  //指向当前对象
};

function An(name,age){
    console.log(this);
    this.name = name;
    this.sge = age;
}
let a1 = new Array('xx',5);    //指向当前对象

//this 指向的改变
function foo(a,b) {
    console.log(this);
    console.log(a,b);
};
foo.call(obj,5,6);         //指向obj
foo.apply(obj,[7,8]);
foo.bind(obj,2,3);         //改变指向  调用加（）
foo.bind(obj,2,3)(); 

let oBtn = document.getElementById('btn');
oBtn.onclick = function(){
    var that = this;           //_this  /  that
    setTimeout(function(){
        console.log(that);
    },2000);
};

let oBtn = document.getElementById('btn');
oBtn.onclick = function(){
    setTimeout(function(){
        console.log(this);
    }.bind(this),2000);
};




//严格模式下
'use strict';
a = 5;//报错 先声明


function foo(){
    Console.log(this);
}
window.foo();                   // undifined


function An(name,age){
    console.log(this);
    this.name = name;
    this.sge = age;
}
let a1 = new Array('xx',5);     //报错


function foo(a,a,b){
    console.log(a,b);           //报错 不允许重复命名
}
foo(4,5,6);


//不可以用with ...

//严格模式好处
// 函数内部：作用域
