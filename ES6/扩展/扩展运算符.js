//...  扩展运算符
//导入 参数不确定

function foo(...arg){
    console.log(arg);
}
foo(1,2,3); //不确定参数

let arr1 = [1,2];
let arr2 = [3,4];
let arr3 = [3,...arr1,4];


let arr1 = [1,2,3];
let arr2 = arr1;
arr1.push(4);
console.log(arr2);   //指向同一内存


let arr2 = [...arr1];  //new Arry();
arr1.push(4);
console.log(arr2);  //拷贝

let obj1 = {
    name:'l',
    age:23
};

let obj2 = {
    name:'s',
    age:12
};
$extend //合并
let obj3 = {...obj1,...obj2};


function foo(a,b,...arg){  //a,...arg,e 报错  匹配剩余

}

foo(1,2,3,4);

