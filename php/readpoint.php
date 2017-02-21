
<?php
$myfile = fopen("../2.txt", "r") or die("Unable to open file!");
$coin= fread($myfile,filesize("../2.txt"));

echo $coin;

fclose($myfile)
?>

