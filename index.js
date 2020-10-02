$('.btn-lg').hover(function() {
	$('body').toggleClass('changeBackground');
});

$('.btn-lg').click(function() {
	$('#body2').toggleClass('second_background');
	setTimeout(function() {
		location.href = 'https://michal-w-dev.github.io/RBG-game/';
	}, 4300);
});
