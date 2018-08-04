//唯一的key
//对象来描述现实东西
//存储东西用map 
//key,value

var m1 = new Map();
m1.set('age', 20);   
m1.set('school', 'XX'); 
let obj = {
    name: 'zs'
};
m1.set(obj, 'yy');
m1.set(obj, 'zz');
console.log(m1);
console.log(m1.get('age'));

//获取
get
//判断
has
//遍历
for(let [index,item] of m1.entries()){
    console.log(`${index}---${item}`);
}

//weakmap  只接受对象名作为键名
