$('.btn-lg').hover(function() {
	$('body').toggleClass('changeBackground');
});

$('.btn-lg').click(function() {
	$('#body2').toggleClass('second_background');
	// setTimeout(function() {
	// 	location.href = '../HTML_L1/color_game.html';
	// }, 4300);
});
