$('a').click(function(){
    $('li').each(function(){
       $(this).removeClass('current'); 
    });
$(this).closest('li').addClass('current');
});