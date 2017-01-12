<?php

	$name=$_POST['name'];

	copy("../images/".$name,"../collection/".$name);
	?> 