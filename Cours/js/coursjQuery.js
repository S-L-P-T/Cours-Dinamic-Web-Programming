$('img').on('click', function(){
    $(this).fadeOut(2000);
});

$('h3').each(function(index){
    $(this).css('font-size', index+1+'em');
})

$('h3:last').html($('h3:last').html()+'du texte <em>test</em>');

$('body').prepend('<div id="mydiv"></div>');
$('#mydiv').css({width: '200px', height:'50px', background: 'yellow'});
//L'animation est définie ici : 
$('#mydiv').animate(
    { height: '400px',
        width: '-=100',
        opacity: 0.25
    }, 
    2000
);
