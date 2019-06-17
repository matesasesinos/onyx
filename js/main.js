// JavaScript Document
(function ($) {
	"use strict";
	$(document).ready(function () {
		$('#password-view').on('click', function () {
			var pass = $('#password').attr('type');
			if (pass === 'password') {
				$('#password').attr('type', 'text');
				$('#password-view').removeClass('password-view').addClass('password-no-view');
			}
			if (pass === 'text') {
				$('#password').attr('type', 'password');
				$('#password-view').removeClass('password-no-view').addClass('password-view');
			}
		});
	});
	$(document).ready(function () {
		$('#menu-reponsive').hide();
		$('.menu-link').on('click', function () {
			$('#menu-reponsive').toggle('slide');
			$(this).hide();
		});
		$('.close-button').on('click', function () {
			$('#menu-reponsive').hide('fast');
			$('.menu-link').show('slow');
		});
	});

	$(document).ready(function () {

		if ($('input#hour-cb').is(':checked') && $('input#hour-cb').val(1)) {
			$('span.tgl-white').show();
			$('span.tlg-black').hide();
		} else {
			$('span.tgl-white').hide();
			$('span.tlg-black').show();
		}

		$('.tgl').on('click', function () {
			if ($('input#hour-cb').is(':checked') && $('input#hour-cb').val(1)) {
				$('span.tgl-white').show();
				$('span.tlg-black').hide();
				$('input#hour-cb').prop('checked', false);
				$('input#hour-cb').val(0);
			} else {
				$('span.tgl-white').hide();
				$('span.tlg-black').show();
				$('input#hour-cb').prop('checked', true);
				$('input#hour-cb').val(1);
			}
		});
	});

	$(document).ready(function () {
		$('#add-lookup-modal').hide();
		$('.content-add').on('click', function () {
			$('#add-lookup-modal').slideToggle('fast');
		});
		$('.close-lookup-modal').on('click', function () {
			$('#add-lookup-modal').slideToggle('fast');
		});

		$('#edit-lookup-modal').hide();
		$('.edit-lookup').on('click', function () {
			$('#edit-lookup-modal').slideToggle('fast');
		});
		$('.close-lookup-edit-modal').on('click', function () {
			$('#edit-lookup-modal').slideToggle('fast');
		});
	});
	$(document).ready(function () {
		$('#detail-modal').hide();
		$('#add-item-modal').hide();
		$('#resume-btn').on('click', function () {
			$('#detail-modal').slideToggle();
		});
		$('span.close-detail-link').on('click', function () {
			$('#detail-modal').slideToggle();
		});
		$('.detail-add-item').on('click', function () {
			$('#add-item-modal').slideToggle();
			$('#detail-modal').hide('fast');
		});
		$('.close-add-modal').on('click', function () {
			$('#add-item-modal').slideToggle();
		});
		if($.isFunction(window.typeahead)){
			$('#search-add').typeahead({
			source: [{
				id: 1,
				name: 'Air'
			}, {
				id: 2,
				name: 'Air Conditioning'
			}, {
				id: 3,
				name: 'Alarm'
			}, {
				id: 4,
				name: 'Buffalo'
			}, {
				id: 5,
				name: 'Boston'
			}, {
				id: 6,
				name: 'Columbus'
			}, {
				id: 7,
				name: 'Dallas'
			}, {
				id: 8,
				name: 'Vancouver'
			}, {
				id: 9,
				name: 'Seattle'
			}, {
				id: 10,
				name: 'Los Angeles'
			}]
		});	
		}
	});
	//add item modal
	$(document).ready(function(){
		$('#add-item-modal-add').hide();
		$('.add-item-open-modal').on('click', function(){
			$('#add-item-modal-add').slideToggle();
			$('#add-item-modal').hide();
		});
		$('.open-add-item-modal').on('click', function(){
			$('#add-item-modal').show();
			$('#add-item-modal-add').slideToggle();
		});
		$('.close-add-item-link').on('click', function(){
			$('#add-item-modal-add').slideToggle();
		});
	});
	//add item tabs
	$(document).ready(function () {
		$(".tab-cont").addClass("inactive-tab");
		$("#questions").removeClass("inactive-tab").addClass("active-tab").show();
	});
	$(document).on('click', '.tab-item', function () {
		$(".tab-cont").removeClass("active-tab").addClass("inactive-tab").hide();
		$('.tab-item').removeClass("active");
		var tabc = $(this).data("toggle");
		$(this).addClass('active');
		$(tabc).removeClass("inactive-tab").addClass("active-tab").show();
	});
	//gallery report
	$(document).ready(function(){
      $('.gallery-report-items').slick({
        	  slidesToShow: 3,
			  slidesToScroll: 1,
			  dots: false,
			  centerMode: false,
			  focusOnSelect: true,
		  	  autoplay:true,
		  	  arrows:false
      });
    });
	$(document).ready(function(){
		$('#new-report-modal').hide();
		$('.add-report').on('click', function(){
			$('#new-report-modal').slideToggle();
		});
		$('.close-new-report-modal').on('click', function(){
			$('#new-report-modal').slideToggle();
		});
	});
})(jQuery);