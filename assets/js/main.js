jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   
    


var doc = new jsPDF();
$('#generatereport').click(function() {
   doc.fromHTML($('.wrapper')[0], 15, 15, {
      width: 1654
   }, function() {
      doc.save('CV_clement_vandoolaeghe.pdf');
   });
});


});
