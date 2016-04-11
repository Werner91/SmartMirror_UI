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
		Benzinpreis_e5();
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
		Benzinpreis_e10();
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
		Dieselpreis();
		}, 300000);
	})();

	
	(function timezone() {
		var offset_dubai = 2;
		var offset_lasvegas = -9;
		var offset_miami = -6;
		var offset_tokyo = 7;
		var offset_hawaii = -12;
		
		dubai_time = renderTime(offset_dubai);
		lasvegas_time = renderTime(offset_lasvegas);
		miami_time = renderTime(offset_miami);
		tokyo_time = renderTime(offset_tokyo);
		hawaii_time = renderTime(offset_hawaii);

		$("#time_one").fadeOut(1000);
		$("#time_one").text("Dubai - " + dubai_time);
		$("#time_one").fadeIn(1000);

		$("#time_two").fadeOut(1000);
		$("#time_two").text("Las Vegas - " + lasvegas_time );
		$("#time_two").fadeIn(1000);

		$("#time_three").fadeOut(1000);
		$("#time_three").text("Miami - " + miami_time);
		$("#time_three").fadeIn(1000);

		$("#time_four").fadeOut(1000);
		$("#time_four").text("Tokyo - " + tokyo_time);
		$("#time_four").fadeIn(1000);

		$("#time_five").fadeOut(1000);
		$("#time_five").text("Hawaii - " + hawaii_time);
		$("#time_five").fadeIn(1000);
		//return false;

		setTimeout(function() {
			timezone();
		}, 60000);
	})();




function renderTime(offset) {

var currentTime = new Date();
currentTime.setHours(currentTime.getHours()+offset);
var h = currentTime.getHours();
var m = currentTime.getMinutes();


if (h == 0) {
    h = 24
} else if (h >= 24) {
    h = h - 24;
    diem = "PM";
}

if (h < 10) {
    h = "0" + h;
}

if (m < 10) {
    m = "0" + m;
}



//var myClock = document.getElementById ("clockDisplay");
//myClock.textContent = h + ":" + m + ":" + " ";

myClock = h + ":" + m + " ";

return myClock

setTimeout ('renderTime()', 1000);

}

	
	
