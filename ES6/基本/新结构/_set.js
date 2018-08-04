let s1 = new Set([3,4,5,6]);
console.log(s1);
//特性：  不允许重复
//set  索引值 = 值



//数组去重
let arr = [1,2,3,5,6,5,6,8,9];
let s2 = new Set(arr);
console.log(s2);

for(let item of s2.entries()){
    console.log(item);
}

let result = [];
for(let [index, item] of arr.entries()){
    if(!result.includes(item)){
        result.push(item);
    }
}
console.log(result); 


//设置值

s1.add(9);
console.log(s1);

s1.delete(6);
console.log(s1);

console.log(s1.size); 

//只能放对象  唯一性
let ws = new WeakSet();
let obj1 = {
    name: 'xx',
    age: 18
};
ws.add(obj1);
let obj2 = obj1;
ws.add(obj2);
console.log(ws);