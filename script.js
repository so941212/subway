$(document).ready(function(){
    $('#slide_bt_button>li:nth-child(1)').click(function(){
        $(this).css({'background-color':'#ffce32'}).animate({width:30},300).siblings().css({'background-color':'#fff'}).animate({width:10},300)
        $('#slide').animate({left:0},300)
    })
    $('#slide_bt_button>li:nth-child(2)').click(function(){
        $(this).css({'background-color':'#ffce32'}).animate({width:30},300).siblings().css({'background-color':'#fff'}).animate({width:10},300)
        $('#slide').animate({left:'-100%'},300)
    })
    $('#slide_bt_button>li:nth-child(3)').click(function(){
        $(this).css({'background-color':'#ffce32'}).animate({width:30},300).siblings().css({'background-color':'#fff'}).animate({width:10},300)
        $('#slide').animate({left:'-200%'},300)
    })


    $('#slide_bt>li').click(function(){
        $(this).animate({width:30},300).css({'backgroundColor':'#ffc300'})
        $(this).siblings().animate({width:10},300).css({'backgroundColor':'#fff'})
    })
    $('#slide_bt>li:nth-child(1)').click(function(){
        $('#news_wrap>ul>li>#slide').animate({left:0},300)
    })
    $('#slide_bt>li:nth-child(2)').click(function(){
        $('#news_wrap>ul>li>#slide').animate({left:-270},300)
    })
    $('#slide_bt>li:nth-child(3)').click(function(){
        $('#news_wrap>ul>li>#slide').animate({left:-540},300)
    })

    // sub menu
    $('#header2_menu').mouseover(function(){
        $(this).children('#menu_bg').stop().slideDown(300)
        $(this).children().children().stop().fadeIn()
    })
    $('#header2_menu').mouseout(function(){
        $(this).children('#menu_bg').stop().slideUp(300)
        $(this).children().children().stop().fadeOut()
    })

    // subway_menu
    $('#subway_menu_leftbt').click(function(){
        $('.subway_menu_wrap>ul').animate({left:0})
    })
    $('#subway_menu_rightbt').click(function(){
        $('.subway_menu_wrap>ul').animate({left:'-100%'})
    })
    slide_num = 0;
    $('#subway_menu_title>ul>li').click(function(){
        $(this).css({'color':'#009223'}).siblings().css({'color':'#666'})
       // $('.subway_menu_wrap>ul').show().siblings().hide()

        slide_num = $(this).index() * -2340
        $('.subway_menu_wrap>ul').stop().animate({left: slide_num },300)
    })
})