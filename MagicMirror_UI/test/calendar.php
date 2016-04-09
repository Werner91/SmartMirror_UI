<?php
	// Set the url of the calendar feed.
	$url = 'KALENDER_URL_EINTRAGEN';

	echo get_url($url);

	function get_url($url)
	{
	    $opts = array(
	        'http'=>array(
	            'method'=>"GET",
	            'header'=>"Accept-Language: en-US,en;q=0.8rn" .
	                        "Accept-Encoding: gzip,deflate,sdchrn" .
	                        "Accept-Charset:UTF-8,*;q=0.5rn" .
	                        "User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:19.0) Gecko/20100101 Firefox/19.0 FirePHP/0.4rn"
	        )
	    );
	 
	    $context = stream_context_create($opts);
	    $content = file_get_contents($url ,false,$context); 
	     
	    foreach($http_response_header as $c => $h)
	    {
	        if(stristr($h, 'content-encoding') and stristr($h, 'gzip'))
	        {
	            $content = gzinflate( substr($content,10,-8) );
	        }
	    }
	     
	    return $content;
	}
?>