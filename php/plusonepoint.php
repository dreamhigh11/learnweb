
<?php
$myfile3 = fopen("../2.txt", "r") or die("Unable to open file!");
$coin= fread($myfile3,filesize("../2.txt"));

fclose($myfile3);

$myfile4 = fopen("../2.txt", "w") or die("Unable to open file!");
$coin=$coin+1;//增加一个金币
echo $coin;
fwrite($myfile4, $coin);
fclose($myfile4);
?>