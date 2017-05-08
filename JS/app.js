$(document).ready(function(){
    
    function setBoxHeight(){
        var articles = $('.article');
        var maxHeight = articles.first().innerHeight();
        articles.each(function(){
            $(this).css('margin-bottom','12px');
            if($(this).innerHeight() > maxHeight) {
                maxHeight = $(this).innerHeight();
            }      
        });
        articles.each(function(){
            $(this).innerHeight(maxHeight);            
        });
           
    }
   
   setBoxHeight();
    //test
    
    
    
});


