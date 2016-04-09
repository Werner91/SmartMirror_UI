<html>
<head>
	<style type="text/css">
		<?php include('css/main.css') ?>
	</style>
	<link rel="stylesheet" type="text/css" href="css/weather-icons.css">
	<link rel="stylesheet" type="text/css" href="css/font-awesome.min.css">
	<script type="text/javascript">var gitHash = '<?php echo trim(`git rev-parse HEAD`) ?>';</script>
	<meta name="google" value="notranslate" />
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />

</head>
<body>
	<div class="top left">
	</div>
		<div class="center-top xxsmall"></div>

	</div>
	<div class="center-video">
	</div>
	<div class="top right">

	</div>
	<div class="lower-third center-hor">
		<span class="fa fa-car fa-lg xdimmed spriticon">&nbsp;</span>
		<span class="dimmed" id="duration">&emsp;</span>
		<div class="" id="benzinpreis_e5"></div>
		<div class="" id="benzinpreis_e10"></div>
		<div class="" id="dieselpreis"></div>
	</div>
	<div class="newsbottom news-content">
	</div>
	<div class="descbottom news-content">			
	</div>
	<div id="videodummy"></div>
	
	<script type="text/javascript">
		var eSource = new EventSource("Temperature.php");
		eSource.onmessage = function(event) {
		document.getElementById("Temps").innerHTML = event.data;
		};
	</script>
<!-- Hier Google API Key eintragen -->
<script async defer src="https://maps.googleapis.com/maps/api/js?key=API_KEY_EINTRAGEN&language=de" type="text/javascript"></script>
<script src="js/jquery.js"></script>
<script src="js/jquery.feedToJSON.js"></script>
<script src="js/ical_parser.js"></script>
<script src="js/moment-with-langs.min.js"></script>
<script src="js/config.js"></script>
<script src="js/rrule.js"></script>
<script src="js/main.js?nocache=<?php echo md5(microtime()) ?>"></script>

</body>
</html>