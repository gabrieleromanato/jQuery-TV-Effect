var Trailer = new function() {

	var noise = $('#noise', '#tv');
	var loader = $('#loader', '#tv');
	var tagline = $('#tagline', '#tv');
	var menu = $('#menu', '#tv');
	
	var makeNoise = function() {
	
		var src1 = 'noise1.png';
		var src2 = 'noise2.png';
		var counter = 0;
		
		var interval = setInterval(function() {
		
			counter++;
			
			if(counter == 20) {
			
				clearInterval(interval);
				noise.hide();
			
			}
			
			var src = noise.attr('src');
			
			if(src == src1) {
			
				noise.attr('src', src2);
			
			} else {
			
				noise.attr('src', src1);
			
			}
		
		
		
		}, 100);
	
	
	};
	
	var showLoader = function() {
	
		loader.show();
		
		setTimeout(function() {
		
			loader.fadeOut(800);
		
		}, 3000);
	
	};
	
	var showTagline = function() {
	
		setTimeout(function() {
	
			tagline.slideDown(700);
			
			setTimeout(function() {
		
				tagline.animate({
					left: -9999
				}, 800);
		
			}, 2000);
			
		}, 3800);
		
		
	
	};
	
	var showMenu = function() {
	
		setTimeout(function() {
		
			menu.fadeIn('slow');
		
		
		
		}, 7300);
	
	
	
	};
	
	this.run = function() {
	
		$.Deferred(function(def) {
		
			def.pipe(function() {
			
				makeNoise();
			
			}).
			pipe(function() {
			
				showLoader();
			
			}).
			pipe(function() {
			
				showTagline();
			
			}).
			pipe(function() {
			
				showMenu();
			
			});
			
		
		
		}).resolve();
	
	
	};

}();

$(function() {

	Trailer.run();

});