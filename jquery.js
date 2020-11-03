$(function(){
 $('.fa-hamburger').click(function(){
     $(this).toggleClass('fa-times');
     $('nav').toggleClass('nav-toggle');
 })
 $('nav ul li a').click(function(){
    $('.fa-hamburger').toggleClass('fa-times');
    $('nav').toggleClass('nav-toggle');

 })




})