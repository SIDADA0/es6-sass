import css from './css/index.css';
import sass from './style/index.scss';
// import $ from 'jquery';
import author from '../author.json'


let oDiv1 = document.querySelector('#div1');
oDiv1.innerHTML = 'hello Wolrd index1';

let sum = (x,y) => x + y;
$('#div3').html(`作者是：${author.name},公司是：${author.company}`);