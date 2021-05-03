 $(function(){
    //  ham tinh vi tri 
    vitricuaedu = $('#khoiedu').offset().top;


    // click chuot no di chuyen xuong
    $(".xuong, .kn").click(function(){
        $('body,html').animate({scrollTop:vitricuaedu},1000);
        return false;
    })
    //click vao gioi thieu
    $(".gt").click(function(){
        $('body,html').animate({scrollTop:0},1000);
        return false;
    })
})  
 