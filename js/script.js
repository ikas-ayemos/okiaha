'use strict'
/* $(function () {
    /* $('.fade-img').click(function () { 
        $('#fadeIn').click(function () {
            $("#img1:not(animated)").fadeIn(0);
        });
        $('#fadeIn').click(function () {
            $('#img2:not(animated)').fadeIn(3000);
        });
    },
        {
            complete: function () {
                alert('Complete!');
            }

        }); */


$(function () {
    $("button").click(function () {
        $("#img1:not(animated)").fadeIn(0);
    });
    $('#fadeIn').click(function () {
        $('#img2:not(animated)').fadeIn(20000)

        setTimeout(function () {
            $('#answer').fadeIn(1000);
        }, 21000);
    });


    $(".answer").click(function () {
        if($(this).data('ans') === 4){
        alert('正解！すごい！');
    }else {
        alert('不正解！リロードして確認してね！');
    }
    });
})
