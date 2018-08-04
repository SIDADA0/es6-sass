// number string  boolean undefined null object + symbol
//之前
let obj = {
    name:'aa',
    age:18
};

obj.name = 'lisi';
obj.school = '黑大';
console.log(obj);


// symbol()
let age = Symbol('age');
let name = Symbol('name');
let name1 = Symbol('name');
let obj = {
    [age]:18,
    [name]:'sidada',
    [name1]:'si',
}
console.log(obj);