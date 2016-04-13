<html>
<head>
	<title>Magic Mirror</title>
	<style type="text/css">
		<?php include('css/main.css') ?>
	</style>
	<link rel="stylesheet" type="text/css" href="css/weather-icons.css">
	<link rel="stylesheet" type="text/css" href="css/font-awesome.css">
	<script type="text/javascript">
		var gitHash = '<?php echo trim(`git rev-parse HEAD`) ?>';
	</script>
	<meta name="google" value="notranslate" />
	<meta http-equiv="Content-type" content="text/html; charset=utf-8" />
	<link rel="icon" href="data:;base64,iVBORw0KGgo=">
</head>
<body>

	<div class="top right">
		<div class="fa fa-globe xdimmed" ></div>
		<div class="timezones">
			<span id="time_one" ></span>
			<div class="fa fa-clock-o" aria-hidden="true"></div>
			<br>
			<span id="time_two"></span>
			<div class="fa fa-clock-o" aria-hidden="true"></div>
			<br>
			<span id="time_three"></span>
			<div class="fa fa-clock-o" aria-hidden="true"></div>
			<br>
			<span id="time_four"></span>
			<div class="fa fa-clock-o" aria-hidden="true"></div>
			<br>
			<span id="time_five"></span>
			<div class="fa fa-clock-o" aria-hidden="true"></div>
			<br>
		</div>
	</div>
	<div class="top left">
		<div class ="fa fa-calendar xxsmall xdimmed"></div>
		<div class="calendar xxsmall"></div>
	</div>
	<div class="center-ver center-hor">

	</div>
	<div class="lower-third center-hor">
	<span class="fa fa-car fa-2x xdimmed spriticon">&nbsp;</span>
		<br>
		<span class="dimmed" id="duration">&emsp;</span>
		<span class="" id="benzinpreis_e5"></span>
		<br>
		<span class="" id="benzinpreis_e10"></span>
		<br>
		<span class="" id="dieselpreis"></span>
	</div>
	<div class="bottom center-hor">
		<br>
		<br>
		<img src="../img/page_2.png" class="dots"/>
	</div>

</div>

<script src="js/jquery.js"></script>
<script src="js/jquery.feedToJSON.js"></script>
<script src="js/ical_parser.js"></script>
<script src="js/moment-with-locales.min.js"></script>
<script src="js/config.js"></script>
<script src="js/rrule.js"></script>
<script src="js/version/version.js"></script>
<script src="js/calendar/calendar.js"></script>
<script src="js/compliments/compliments.js"></script>
<script src="js/weather/weather.js"></script>
<script src="js/time/time.js"></script>
<script src="js/news/news.js"></script>
<script src="js/main.js?nocache=<?php echo md5(microtime()) ?>"></script>
<!-- <script src="js/socket.io.min.js"></script> -->
<?php  include(dirname(__FILE__).'/controllers/modules.php');?>
</body>
</html>
