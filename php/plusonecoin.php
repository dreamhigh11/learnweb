
<?php
$myfile = fopen("../1.txt", "r") or die("Unable to open file!");
$coin= fread($myfile,filesize("../1.txt"));

fclose($myfile);

$myfile2 = fopen("../1.txt", "w") or die("Unable to open file!");
$coin=$coin+1;//增加一个金币
echo $coin;
fwrite($myfile2, $coin);
fclose($myfile2);


?>

