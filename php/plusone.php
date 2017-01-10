<!DOCTYPE html>
<html>
<body>

<?php
$myfile = fopen("../1.txt", "r") or die("Unable to open file!");
$coin= fread($myfile,filesize("../1.txt"));

fclose($myfile);

$myfile2 = fopen("../1.txt", "w") or die("Unable to open file!");
$coin=$coin+1;//减少一个金币
echo $coin;
fwrite($myfile2, $coin);
fclose($myfile2)
?>

</body>
</html>