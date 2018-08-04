// * 
// 返回遍历器  手动
function* helloGenerator(){
    yield'hello';
    yield'world';
    return 'ending';
}
var hw = helloGenerator
console.log(hx.next());
console.log(hx.next());
console.log(hx.next());


//按顺序获取abc.json 手动

function request(url){
    $.get(url, res=>{
        getData.next();
    });
}
function* gen(){
    let res1 = yield request('a.json');
    console.log(res1);
    yield request('b.json');
    yield request('c.json');
}

let getData = gen();
getData.next();