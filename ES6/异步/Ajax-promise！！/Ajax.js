//前后端交互方式
// 表单
// get
// Ajax
//Ajax:Asynchronous Javascript And XML


//Ajax  请求方式  jQ
$.get('url',{   //地址url
//需要参数data},res=>{    //function(res){} 
},'json')
//跨域  不允许  ali=baidu
//应用服务器代理
//404+客户端错（页面找不到）   500+服务端错  300+缓存错误

// jq的Ajax
/* $.get(movieUrl, res=>{
    console.log(res.subjects);
    let $list = $('#list');
    for(let movie of res.subjects){
        let $li = $(`<li>${movie.title}</li>`);
        $list.append($li);
    }
}, 'json'); */
// Ajax 原理

//原生Ajax   生成字符串 
//创建 XMLHttpRequest 对象
var xmlhttp;
if (window.XMLHttpRequest)
{// code for IE7+, Firefox, Chrome, Opera, Safari
xmlhttp=new XMLHttpRequest();
}
else
{// code for IE6, IE5
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}

//发送请求
xmlhttp.open("GET","demo_get.asp",true);
xmlhttp.send();

//服务端响应
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    //    console.log(xmlhttp.responseText);
    let obj = JSON.parse(xmlhttp.responseText);
    console.log(obj);
    }
}
