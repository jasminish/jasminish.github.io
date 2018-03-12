// terminal
$(function() {
	let data = [
		{ 
			action: 'type',
			strings: ['whois jasmine'],
			output: $('#whois').html(),
			postDelay: 1200
		},
		{ 
			action: 'type',
			strings: ['find skills'],
			output: $('#skills').html(),
			postDelay: 1200
		},
		{ 
			action: 'type',
			// strings: ["that was easy!", ''],
			strings: ['scroll down for more information'],
			postDelay: 2000
		}
	];
	runScripts(data, 0);
});

function runScripts(data, pos) {
	let prompt = $('.prompt'),
	script = data[pos];
	if(script.clear === true) {
		$('.terminal-history').html(''); 
	}
	switch(script.action) {
		case 'type':
		// cleanup for next execution
		prompt.removeData();
		$('.typed-cursor').text('');
		prompt.typed({
			strings: script.strings,
			typeSpeed: 30,
			callback: function() {
				let history = $('.terminal-history').html();
				history = history ? [history] : [];
				history.push('$ ' + prompt.text());
				if(script.output) {
					history.push(script.output);
					prompt.html('');
					$('.terminal-history').html(history.join(''));
				}
				// scroll to bottom of screen
				$('.terminal-body').scrollTop($('.terminal-body').height());
				// Run next script
				pos++;
				if(pos < data.length) {
					setTimeout(function() {
						runScripts(data, pos);
					}, script.postDelay || 1000);
				}
			}
		});
	}
}
