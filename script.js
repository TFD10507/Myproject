
import $ from 'jquery'; //注入jquery
$('body').css('background-color','red');

import { gsap } from 'gsap'; //把模組import進去
gsap.to('.box',{
    x: 200,
    y: 400,
    duration: 3
})

// css引入
import './style.css'
import './header.css'


var x = 10 , y = 20;
var z = x + y;

console.log(z);