let [a,[b,d],c] = [1,[2,4],3];
console.log[a,c,b,d];//前后对照



let{age,name} = {
    name:'li',
    age :12
};
console.log(name,age);//与顺序无关   数组顺序  对象不顺序 key

let{age1,name1} = {
    name:'li',
    age :12
};
console.log(name1,age1);//取不到数值

let{age: age1,name: name1} = {
    name:'li',
    age :12
};
console.log(name1,age1); //起小名 这时候大名不起作用



let [a,b,v,d,k] = 'wekkk';
console.log(a,b,v,d,k);

let [a,b,c=8] = [4,5,6];
console.log(a,b,c);     

let[a = foo()] = [1]; //惰性 



function foo({name,age}){

}
let obj = {
    name: 'a',
    age:34
};
foo(obj);


var a = 5;
var b = 6;
//不引用第三变量
let temp = a;
a = b;
b = temp;

a = a + b;//a=11
b = a - b;//b=5
a = a - b;//a=6

let [b,a] = [a,b];
console.log(a,b);

var a = [b, b = a][0];
console.log(a,b);

//json
//前后端数据格式
//配合在线校验工具
let json = '{"a":"hello","b":"world"}';
let obj = JSON.parse(json);
let str = JSON.stringify(obj);


//xml     出局
<userinfo>
    <username>zj</username>
</userinfo>