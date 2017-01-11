<?php 

  $hostdir="../images/";

//获取本文件目录的文件夹地址

  $filesnames = scandir($hostdir);

//获取也就是扫描文件夹内的文件及文件夹名存入数组 $filesnames

  //print_r ($filesnames);

foreach ($filesnames as $name) {

//echo $name; 

$url="./images/".$name;

$aurl= "<a href=\"".$url."\">".$url."</a>";

echo $aurl . "<br/>";

}

?>