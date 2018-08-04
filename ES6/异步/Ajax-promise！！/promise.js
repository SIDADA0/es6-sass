//callback hell 回到深渊

$.get('a.json',res=>{
    console.log(res);
    $.get('b.json',res=>{
        console.log(res);
    });
});


//promise   
// :pedding 进行中 :fulfilled 成功  :rejected 失败
// 不可逆 纵向-横向  异步
//Ajax+promise

new Promise((resole,reject)=>{     //resole 成功 reject 失败
    $.get('a.json',res=>{
        console.log(res);
        resolve(res.a);
    })
}).then((resA)=>{
    //成功
    console.log('a成功');
    console.log(resA);
    return new Promise((resolve,reject)=>{
        $.get('b.json', res=>{
            console.log(res);
            resolve();
        });
    });
},()=>{
    console.log('a失败');
    //失败
}).then(()=>{
    console.log('bcg');
},()=>{
    console.log('bsb');
});


//简化版本
function getpromise(url){
    return new Promise((resolve,reject) => {
        $.get(url,res =>{
            resolve(res);
        },'json');
    });
}
getpromise('a.json').then(res=>{
    console.log(res);
    return getPromise('b.json');
}, err=>{

}).then(res=>{
    console.log(res);
    return getPromise('c.json');
}, err=>{

}).then(res=>{
    console.log(res);
}, err=>{

});


//定时器 +promise
//all   race   catch
let p1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
            console.log('1');
            resolve(3);
    },1000);
});
let p2 = new Promise((resolve,reject) => {
    setTimeout(()=>{
            console.log('2');
            resolve(3);
    },1000);
});
let p3 = new Promise((resolve,reject) => {
    setTimeout(()=>{
            console.log('3');
            resolve(3);
    },1000);
});

Promise.all([p1,p2,p3]).then(res=>{  //all有一个失败了 就失败
    console('全完成');
    console.log(res);
},err=>{
    console('失败了');
    console.log(err);
});

Promise.race([p1,p2,p3]).then(res=>{  //race有一个成功了 就成功
    console('全完成');
    console.log(res);
},err=>{
    console('失败了');
    console.log(err);
});



let p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log('p1');
        reject(1);
    }, 2000);
}).then(res=>{
    console.log('成功');
}).catch(err=>{
    console.log('捕获');              //catch捕获 放最后
});

throw new Error ('这是一个错误');     //封装错误


//只要成功 ；只要失败 ;

Promise.resolve();
Promise.reject();