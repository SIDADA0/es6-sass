let zs = 'zhangsan';
let n = 'name';
let age = 18;

let obj  = {
    name:'zs',     //属性值变量
    age:14,
    code:function(){
        console.log('coding');
    }
};

//es6
let obj  = {
    [n]:zs,     //属性值变量
    age,
    code(){
        console.log('coding');
    }
};
console.log(obj);
obj.code();

Object.is()     //判断严格相等 （对象：let obj2 = obj1;true）
let obj1 = {
    name:'zs',     
    age:14,
}

let obj2 = {
    name:'zs',     
    age:14,
}

let obj2 = obj1;
console.log(object.is(obj1,obj2));
console.log(object.is(+0,-0));   //false
console.log(object.is(NaN,NaN)); //true



Object.assign();
