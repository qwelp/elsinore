$(document).ready(function(){
	$('body').on('click', '.subscribe_btn' , function(e){
		e.preventDefault();

		$.getJSON('/ajax/subscribe.php', {
			email:$('input[name="subscribe__email"]').val()
		}, function(data){
			if (data.status=='ok'){
				$('.subscribe__ok').css('display', 'table');
			} else {
				alert('Не правильный формат адреса!');
			}
		});
	});
});
