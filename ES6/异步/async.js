//同步方式 实行 异步方法 1-2-3
function getPromise(url) {
    return new Promise((resolve, reject) => {
        $.get(url, res => {
            resolve(res);
        }, 'json');
    });
}

async function requst(){
    let res1 = await getPromise('a.json');
    console.log(res1);

    let res2 = await getPromise('b.json');
    console.log(res2);

    let res3 = await getPromise('c.json');
    console.log(res3);
}
requst();

/*
setTimeout(()=>{
    console.log(1);
}, 0);
console.log(2);
console.log(3);*/
