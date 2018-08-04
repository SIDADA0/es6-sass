let sum = (x,y)=>{
    return x + y;
};

//左参数  右方法体

let sum = (x,y)=> x + y;
//=============
let x = x => x;
let x = function(x){
    return x;
};

//!importent
let oBtn = document.getElementById('btn');
oBtn.onclick = function(){
    setTimeout(()=>{
        console.log(this);
    },2000);
}; 
//作用域链 向外寻找 无this
//this 指向定义时
//不可以作为构造函数
//不可以使用arguments对象

