/*global $,jQuery,alert*/

$(document).ready(function () {
    "use strict"
    //nice scroll
    $("html").niceScroll();
    $(".carousel").carousel({
    interval: 5000
})});

$(window).scroll(function () {
  "use strict";
    if($(window).scrollTop()>=450){
        $(".navbar-inverse").css({'background-color' :'black'})
    }
    else{
        $(".navbar-inverse").css({'background-color' :'transparent','transition':'all .5s ease-in'})
    }
    if($(window).scrollTop()>1700){
           $("#scroll-top").fadeIn(200)
    }else{
        $("#scroll-top").fadeOut(200)     
    }
});

$("#scroll-top").on('click',()=>{
   $("html, body").animate({scrollTop : 0}, 1000)})