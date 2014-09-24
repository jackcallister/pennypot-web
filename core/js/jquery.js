// RESIZE TOP SECTION
$(document).ready(function(){
resizeDiv();
});

window.onresize = function(event) {
resizeDiv();
}

function resizeDiv() {
vpw = $(window).width();
vph = $(window).height();
$('header').css({'height': vph + 'px'});
}


// ROTATE IMAGES 
function cycleImages(){
      var $active = $('#cycler .active');
      var $next = ($active.next().length > 0) ? $active.next() : $('#cycler img:first');
      $next.css('z-index',2);//move the next image up the pile
      $active.fadeOut(1000,function(){//fade out the top image
	  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
          $next.css('z-index',3).addClass('active');//make the next image the top one
      });
    }

$(document).ready(function(){
setInterval('cycleImages()', 6000);
})



// FADE  IN ELEMENTS
   $(window).scroll(function () {

        /* Check the location of each desired element */
        $('#fadein').each(function (i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {

                $(this).animate({
                    'opacity': '1'
                }, 500);

            }

        });

    });


// SCROLL TO
$("#notify").click(function() {
    var offset = 20; //Offset of 20px

    $('html, body').animate({
        scrollTop: $(".coming-soon").offset().top + offset
    }, 600);
});


// RESIZE THANKS
$(document).ready(function(){
resizeDiv();
});

window.onresize = function(event) {
resizeDiv();
}

function resizeDiv() {
vpw = $(window).width();
vph = $(window).height();
$('#thanks').css({'height': vph + 'px'});
}
