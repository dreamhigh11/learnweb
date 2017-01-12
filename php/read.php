

<?php
$myfile = fopen("../1.txt", "r") or die("Unable to open file!");
$coin= fread($myfile,filesize("../1.txt"));

echo $coin;

fclose($myfile)
?>

