$(document).ready(function() {
$('.readmore').click(function (event) {
 event.preventDefault();
 $('#show-this-on-click').slideDown();
 $('.readmore').hide();
 $('.readless').show();
});

$('.learnmore').click(function (event) {
 event.preventDefault();
 $('#learnmoretext').slideDown();
 $('.learnmore').hide();
});	// body...

$('.readless').click(function (event) {
 event.preventDefault();
 $('#show-this-on-click').slideUp();
 $('.readmore').show();
 $('.readless').hide();
});
});

