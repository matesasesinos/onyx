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
})(jQuery);