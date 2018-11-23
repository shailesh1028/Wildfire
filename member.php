<?php 

	$size=$_POST['n'];
	$n=$size;
	//$n=(int)$size;
	//echo "<script type='text/javascript'>alert('".var_dump($size)."as".$size."');</script>";
	if($n>1)
	{
		$i=2;
		for($i ; $i<=$n ; $i++)
		{
			echo "<input type='text'   name='member".$i."' class='form-items' placeholder='Member_Name_".$i."'  required> <br>
				<input type='number' name='mobile".$i."' class='form-items'  placeholder='Mobile No.' required> <br>";
		}
	}
 ?>

 