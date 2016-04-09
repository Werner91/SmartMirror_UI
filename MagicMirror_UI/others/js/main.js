jQuery.fn.updateWithText = function(text, speed)
{
	var dummy = $('<div/>').html(text);

	if ($(this).html() != dummy.html())
	{
		$(this).fadeOut(speed/2, function() {
			$(this).html(text);
			$(this).fadeIn(speed/2, function() {
				//done
			});
		});
	}
}

jQuery.fn.outerHTML = function(s) {
    return s
        ? this.before(s).remove()
        : jQuery("<p>").append(this.eq(0).clone()).html();
};

function roundVal(temp)
{
	return Math.round(temp * 10) / 10;
}

jQuery(document).ready(function($) {

	var eventList = [];

	var lastCompliment;
	var compliment;

    moment.locale(config.lang);

	//connect do Xbee monitor
	// var socket = io.connect('http://rpi-alarm.local:8082');
	// socket.on('dishwasher', function (dishwasherReady) {
	// 	if (dishwasherReady) {
	// 		$('.dishwasher').fadeIn(2000);
	// 		$('.lower-third').fadeOut(2000);
	// 	} else {
	// 		$('.dishwasher').fadeOut(2000);
	// 		$('.lower-third').fadeIn(2000);
	// 	}
	// });

	version.init();

	time.init();

	calendar.init();

	compliments.init();

	weather.init();

	news.init();

});

(function Benzinpreis_e5() {
		$.ajax({
			url:sprit_benzin_e5_URL,
			dataType: "json"
		}).done(function(data) {
			$.each(data.stations, function() {
				$("#benzinpreis_e5").fadeOut(1000);
				$("#benzinpreis_e5").text("Benzin: "+this.price+" € "+" - "+this.brand+" - "+this.street+" "+this.houseNumber+"\n" ,1000);
				$("#benzinpreis_e5").fadeIn(1000);
				return false;
			});
		});
		setTimeout(function() {
		Benzinpreis();
		}, 300000);
	})();

	(function Benzinpreis_e10() {
		$.ajax({
			url:sprit_benzin_e10_URL,
			dataType: "json"
		}).done(function(data) {
			$.each(data.stations, function() {
				$("#benzinpreis_e10").fadeOut(1000);
				$("#benzinpreis_e10").text("Benzin E10: "+this.price+" € "+" - "+this.brand+" - "+this.street+" "+this.houseNumber,1000);
				$("#benzinpreis_e10").fadeIn(1000);
				return false;
			});
		});
		setTimeout(function() {
		Benzinpreis();
		}, 300000);
	})();

	(function Dieselpreis() {
		$.ajax({
			url:sprit_diesel_URL,
			dataType: "json"
		}).done(function(data) {
			$.each(data.stations, function() {
				$("#dieselpreis").fadeOut(1000);
				$("#dieselpreis").text("Diesel: "+this.price+" € "+" - "+this.brand+" - "+this.street+" "+this.houseNumber,1000);
				$("#dieselpreis").fadeIn(1000);
				return false;
			});
		});
		setTimeout(function() {
		Benzinpreis();
		}, 300000);
	})();
	
	
