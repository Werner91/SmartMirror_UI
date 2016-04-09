<?php
	header('Content-Type: text/event-stream');
	header('Cache-Control: no-cache');
	//Hier DS18B20 ID eintragen:
    $temp = exec('cat /sys/bus/w1/devices/28-00000629745a/w1_slave |grep t=');
    $temp = explode('t=',$temp);
    $temp = $temp[1] / 1000;
    $temp = round($temp,1);
    echo "data: $temp&#x00B0;\n\n";
	ob_flush(); 
?>
