
//Benzinpreisanzeige | lat = latitude | lng = longitude | rad = Radius in km (Ganzzahlig) | type = e5,e10,diesel | apikey = API-Key | sort = price oder dist (distance): Preis-Sortierung empfohlen.
var sprit_benzin_e5_URL = 'https://creativecommons.tankerkoenig.de/json/list.php?lat=47.778270&lng=9.612130&rad=5&type=e5&apikey=cf26dd54-7b34-73f5-9d37-1d6d96521a7f&sort=price';
var sprit_benzin_e10_URL = 'https://creativecommons.tankerkoenig.de/json/list.php?lat=47.778270&lng=9.612130&rad=5&type=e10&apikey=cf26dd54-7b34-73f5-9d37-1d6d96521a7f&sort=price';
var sprit_diesel_URL = 'https://creativecommons.tankerkoenig.de/json/list.php?lat=47.778270&lng=9.612130&rad=5&type=diesel&apikey=cf26dd54-7b34-73f5-9d37-1d6d96521a7f&sort=price';


var config = {
    lang: 'de',
    time: {
        timeFormat: 12,
        displaySeconds: true,
        digitFade: true,
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Ravensburg,Germany',
            units: 'metric',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'de',
            APPID: '54a227ac478f417a1a598f24d8c04859'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Guten Morgen',
            'Heute schon mal in den Spiegel geschaut?',
            'Welche Infos brauchst du?'
	    'Mirror mirror on the wall ...'
        ],
        afternoon: [
            'Guten Tag',
            'Heute schon mal in den Spiegel geschaut?',
            'Welche Infos brauchst du?'
	    'Mirror mirror on the wall ...'
	    'Was geht ab?'
        ],
        evening: [
            'Guten Abend',
            'Heute schon mal in den Spiegel geschaut?',
            'Welche Infos brauchst du?'
	    'Mirror mirror on the wall ...'
	    'Was geht sonst so?'
        ]
    },
    calendar: {
        maximumEntries: 10, // Total Maximum Entries
		displaySymbol: true,
		defaultSymbol: 'calendar', // Fontawsome Symbol see http://fontawesome.io/cheatsheet/
        urls: [
		{
			//symbol: 'calendar-plus-o', 
			//url: 'https://p01-calendarws.icloud.com/ca/subscribe/1/n6x7Farxpt7m9S8bHg1TGArSj7J6kanm_2KEoJPL5YIAk3y70FpRo4GyWwO-6QfHSY5mXtHcRGVxYZUf7U3HPDOTG5x0qYnno1Zr_VuKH2M'
			//url: "http://abo.kleiner-kalender.de/ical/m317-kinostart.ics",
		},
		{
			//symbol: 'soccer-ball-o',
			//url: 'https://www.google.com/calendar/ical/akvbisn5iha43idv0ktdalnor4%40group.calendar.google.com/public/basic.ics',
		},
		{
			 //symbol: 'mars',
			 url: "http://www.ifeiertage.de/bw-.ics",
		},
		{
			// symbol: 'venus',
			url: "webcal://abo.kleiner-kalender.de/ical/c48-feiertage-in-deutschland.ics",
		},
		// {
			// symbol: 'venus-mars',
			// url: "https://server/url/to/theirs.ics",
		// },
		]
    },


    news: {
	feed: 'http://golem.de.dynamic.feedsportal.com/pf/578068/http://rss.golem.de/rss.php?feed=RSS2.0'
	//feed: 'http://www.heise.de/newsticker/heise.rdf'
	//feed: 'http://www.heise.de/autos/rss/news.rdf'
	//feed: 'http://www.tagesschau.de/xml/rss2'
        //feed: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
    }


}
