// IFEE with jQuery 
"use strict";

(function ($) {
	$(function () {
		audioSetup();
		letterHandler();
	});
	var audioSetup = function audioSetup() {
		var letters = 'abcdefghijklmnopqrstuvwxyzåäö';
		letters.split('').map(function (v, i) {
			switch (v) {
				case 'å':
					v = 'aa';
					break;
				case 'ä':
					v = 'ae';
					break;
				case 'ö':
					v = 'oe';
					break;
			}

			var audioTag = $('<audio id="audio_' + v + '" src="audio/' + v + '.m4a" preload="auto">Your browser dont support audio. Sry! :(</audio>');
			audioTag.appendTo('body');
		});
	};
	var letterHandler = function letterHandler() {
		var $letter = $('#letter').focus();
		$(window).on('keypress', $letter, function (e) {
			e.preventDefault();
			var c = String.fromCharCode(e.which).toUpperCase();

			$letter.val(c);

			switch (c) {
				case 'A':
					$letter.css({ 'background': 'pink', 'color': '#fff' });
					console.log('audio_' + c);
					document.getElementById('audio_a').play();
					break;
				case 'B':
					$letter.css({ 'background': 'orange', 'color': 'purple' });
					document.getElementById('audio_b').play();
					break;
				case 'C':
					$letter.css({ 'background': 'yellow', 'color': 'orange' });
					document.getElementById('audio_c').play();
					break;
				case 'D':
					$letter.css({ 'background': 'lime', 'color': 'yellow' });
					document.getElementById('audio_d').play();
					break;
				case 'E':
					$letter.css({ 'background': 'purple', 'color': 'yellow' });
					document.getElementById('audio_e').play();
					break;
				case 'F':
					$letter.css({ 'background': 'lime', 'color': 'blue' });
					document.getElementById('audio_f').play();
					break;
				case 'G':
					$letter.css({ 'background': 'orange', 'color': 'blue' });
					document.getElementById('audio_g').play();
					break;
				case 'H':
					$letter.css({ 'background': 'brown', 'color': 'orange' });
					document.getElementById('audio_h').play();
					break;
				case 'I':
					$letter.css({ 'background': 'purple', 'color': 'lime' });
					document.getElementById('audio_i').play();
					break;
				case 'J':
					$letter.css({ 'background': 'yellow', 'color': 'orange' });
					document.getElementById('audio_j').play();
					break;
				case 'K':
					$letter.css({ 'background': 'purple', 'color': 'yellow' });
					document.getElementById('audio_k').play();
					break;
				case 'L':
					$letter.css({ 'background': 'lightblue', 'color': 'red' });
					document.getElementById('audio_l').play();
					break;
				case 'M':
					$letter.css({ 'background': 'brown', 'color': 'orange' });
					document.getElementById('audio_m').play();
					break;
				case 'N':
					$letter.css({ 'background': 'lightblue', 'color': 'green' });
					document.getElementById('audio_n').play();
					break;
				case 'O':
					$letter.css({ 'background': 'brown', 'color': 'orange' });
					document.getElementById('audio_o').play();
					break;
				case 'P':
					$letter.css({ 'background': 'grey', 'color': 'black' });
					document.getElementById('audio_p').play();
					break;
				case 'Q':
					$letter.css({ 'background': 'grey', 'color': 'purple' });
					document.getElementById('audio_q').play();
					break;
				case 'R':
					$letter.css({ 'background': 'red', 'color': 'yellow' });
					document.getElementById('audio_r').play();
					break;
				case 'S':
					$letter.css({ 'background': 'blue', 'color': 'grey' });
					document.getElementById('audio_s').play();
					break;
				case 'T':
					$letter.css({ 'background': 'brown', 'color': 'grey' });
					document.getElementById('audio_t').play();
					break;
				case 'U':
					$letter.css({ 'background': 'black', 'color': 'grey' });
					document.getElementById('audio_u').play();
					break;
				case 'V':
					$letter.css({ 'background': 'black', 'color': 'grey' });
					document.getElementById('audio_v').play();
					break;
				case 'W':
					$letter.css({ 'background': 'black', 'color': 'grey' });
					document.getElementById('audio_w').play();
					break;
				case 'X':
					$letter.css({ 'background': 'black', 'color': 'grey' });
					document.getElementById('audio_x').play();
					break;
				case 'Y':
					$letter.css({ 'background': 'black', 'color': 'grey' });
					document.getElementById('audio_y').play();
					break;
				case 'Z':
					$letter.css({ 'background': 'purple', 'color': 'pink' });
					document.getElementById('audio_z').play();
					break;
				case 'Å':
					$letter.css({ 'background': 'blue', 'color': 'lightblue' });
					document.getElementById('audio_aa').play();
					break;
				case 'Ä':
					$letter.css({ 'background': 'orange', 'color': 'yellow' });
					document.getElementById('audio_ae').play();
					break;
				case 'Ö':
					$letter.css({ 'background': 'green', 'color': 'pink' });
					document.getElementById('audio_oe').play();
					break;

				default:
					$letter.css({ 'background': 'white', 'color': '#000' });
					break;
			}
		});
	};
})(jQuery);