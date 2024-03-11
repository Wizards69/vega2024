$(document).ready(function(){

    $('.fa-bars').click(function(){
       $(this).toggleClass('fa-xmark');
       $('nav').toggleClass('nav-toggle');
    });
 
    $('nav ul li a').click(function(){
       $('.fa-bars').removeClass('fa-xmark');
       $('nav').removeClass('nav-toggle');
    });
 
    $(window).scroll(function(){
       if($(window).scrollTop() >= 20){
           $('header').addClass('active');
       }else{
           $('header').removeClass('active');
       }
   })
 })