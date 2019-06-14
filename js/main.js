// JavaScript Document
(function($){
	"use strict";
	$(document).ready(function(){
		$('#password-view').on('click touchstart', function(){
			var pass = $('#password').attr('type');
			if(pass === 'password'){
				$('#password').attr('type', 'text');
				$('#password-view').removeClass('password-view').addClass('password-no-view');
			}
			if(pass === 'text'){
				$('#password').attr('type', 'password');
				$('#password-view').removeClass('password-no-view').addClass('password-view');
			}
		});
	});
	$(document).ready(function(){
		$('#menu-reponsive').hide();
		$('.menu-link').on('click touchstart', function(){
			$('#menu-reponsive').toggle('slide');
			$(this).hide();
		});
		$('.close-button').on('click touchstart',function(){
			$('#menu-reponsive').hide('fast');
			$('.menu-link').show('slow');
		});
	});
	function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#photo')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }
})(jQuery);