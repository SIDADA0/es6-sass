let arr = ['a','b','c','d'];
console.log(arr.join(':'));    //a:b:c:d

pop();
shift();
reverse();  //反转

let str = 'sdefff';
str.split('').reverse().join(""); //反转

let arr = [2,4,6,7,3,9];
console.log(arr.sort(function(a,b){
    return a - b;
    //return b - a ; 降序
}));  //传参防止按字符编码排列


sort();     //排序
//对象
let userList = [{
    name:'l',
    age:14
},{
    name:'s',
    age:18
},{
    name:'o',
    age:21
}];
console.log(userList.sort(function(a,b){
    return a.age - b.age;
}));


//乱序
let arr = [1,2,3,4,5,6,7,8];
console.log(arr.sort(function(){
    return Math.random() - 0.5;
}));


splice();               // ！importent
//添加删除项目 返回被删除项目
let arr = [1,2,3];
arr.splice(2,1,8);    //2位置删除一个添加 8
arr.splice(2,0,8);    //2位置添加 8
arr.splice(2,2,8,9);  //2位置删除2个添加 8、9
arr.splice(2);        //2位置删除后面
console.log(arr); 

// ------------------------------------------------------------- 

//数组扩展
//转化数组 
from();
let aLi = document.querySelectorAll('@ul li');
var [li1, li2, li3, li4] = aLi;//可迭代
var arr = Array.from(aLi);

of();
let arr = Array.of(1,true,'aa',[1,2],{age:14});


fill();
let arr  =new Array(1,2,3);   
let arr  =new Array(3);       //长度 空
let arr  =new Array(3).fill(0);
arr.fill("xx",1,4)           //填充1~4 为xx


indexOf(); //--includes
includes();
let arr = [1,2,3,4];
console.log(arr.indexOf(8));

let arr = [1,2,NaN,3,4];
Console.log(arr.indexOf(NaN));      //NaN 之间不相等
Console.log(arr.includes(NaN));      //NaN 可以被检测



//新遍历方法
let arr = [1,2,3,4];
for(let i=0;i<arr.length;i++){

};

for(let item of arr){

}
//结果
for(let item of arr.keys()){

}
//下标
for(let [index,item] of arr.entries()){

}
//结果+下标


forEach(); //!
// let arr1.forEach(function (elem,index,self) {
//    console.log(elem,index,self); 
// });
map();
filter(); //!
som();    //存在就返回
