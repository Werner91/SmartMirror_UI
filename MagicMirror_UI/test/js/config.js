// for navigator language (de,en,...)
var lang = 'de';

//Wetteranzeige | q = Stadtname | appid = API-Key | units = metric, imperial
var wURL = 'http://api.openweathermap.org/data/2.5/weather?q=Munich&appid=HIER_API_KEY_EINTRAGEN&units=metric';
var fURL = 'http://api.openweathermap.org/data/2.5/forecast?q=Munich&appid=HIER_API_KEY_EINTRAGEN&units=metric&cnt=60&mode=json';

//Dein (RSS) Newsfeed
var feed = 'http://rss.sueddeutsche.de/rss/Topthemen';

//Kalender max. Einträge
var MaxEntries = 6;

//Benzinpreisanzeige | lat = latitude | lng = longitude | rad = Radius in km (Ganzzahlig) | type = e5,e10,diesel | apikey = API-Key | sort = price oder dist (distance): Preis-Sortierung empfohlen.
var sprit_benzin_e5_URL = 'https://creativecommons.tankerkoenig.de/json/list.php?lat=47.778270&lng=9.612130&rad=5&type=e5&apikey=cf26dd54-7b34-73f5-9d37-1d6d96521a7f&sort=price';
var sprit_benzin_e10_URL = 'https://creativecommons.tankerkoenig.de/json/list.php?lat=47.778270&lng=9.612130&rad=5&type=e10&apikey=cf26dd54-7b34-73f5-9d37-1d6d96521a7f&sort=price';
var sprit_diesel_URL = 'https://creativecommons.tankerkoenig.de/json/list.php?lat=47.778270&lng=9.612130&rad=5&type=diesel&apikey=cf26dd54-7b34-73f5-9d37-1d6d96521a7f&sort=price';

//Komplimente:
var morning = [
            'Guten Morgen',
            ''
        ];
        
var afternoon = [
            'Guten Mittag',
            ''
        ];
       
var evening = [
            'Gute Nacht',
			''
        ];