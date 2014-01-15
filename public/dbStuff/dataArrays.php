
<?php 

	$MainText = '';
	
	$NewsPics = array();
	$SpecialsPics = array();
	$ListPics = array();
	$NewPics = array();
	$InfoPics =array();
	$ContactPics = array();
	$FactsPics = array();
	$LinksPics = array();

	$NewsCaps = array();
	$SpecialsCaps = array();
	$ListCaps = array();
	$NewCaps = array();
	$InfoCaps = array();
	$ContactCaps = array();
	$FactsCaps = array();
	$LinksCaps = array();

	//////////////////   News   //////////////////////////////

	require("connect.php");
	$query = mysql_query("SELECT  * FROM images WHERE type='News'") or die(mysql_error());
	$numrows = mysql_num_rows($query);
	mysql_close();

	$MainText .= "var NewsPics = new Array(";
	$iterateOnce = true;
	for ($i=0;$i<=$numrows + 1; $i++) { 

		require("connect.php");
		$query = mysql_query("SELECT  * FROM images WHERE type='News' && num='$i'") or die(mysql_error());
		$row = mysql_fetch_assoc($query);
		$info = $row['source'];
		if($info){ 
			if($iterateOnce){ $MainText .= "\"".$row['source']."\""; $iterateOnce=false; }
			else { $MainText .= ", \"".$row['source']."\""; }
		}
		mysql_close();
	}
	$MainText .=");";

	$onceIterate = true;
	require("connect.php");
	$query = mysql_query("SELECT  * FROM captions WHERE type='News'") or die(mysql_error());
	$numrows = mysql_num_rows($query);
	mysql_close();

	$MainText .= "var NewsCaps = new Array(";
	for ($i=0;$i<=$numrows + 1; $i++) { 

		require("connect.php");
		$query = mysql_query("SELECT  * FROM captions WHERE type='News' && num='$i'") or die(mysql_error());
		$row = mysql_fetch_assoc($query);
		$info = $row['content'];
		if ($info){
			if($onceIterate){ $MainText .= "\"".$row['content']."\""; $onceIterate = false; }
			else { $MainText .= ", \"".$row['content']."\""; }
		}
		mysql_close(); 

	}
	$MainText .=");";

	//////////////////   Specials   //////////////////////////////

	require("connect.php");
	$query = mysql_query("SELECT  * FROM images WHERE type='Specials'") or die(mysql_error());
	$numrows = mysql_num_rows($query);
	mysql_close();

	$MainText .= "var SpecialsPics = new Array(";
	$iterateOnce = true;
	for ($i=0;$i<=$numrows + 1; $i++) { 

		require("connect.php");
		$query = mysql_query("SELECT  * FROM images WHERE type='Specials' && num='$i'") or die(mysql_error());
		$row = mysql_fetch_assoc($query);
		$info = $row['source'];
		if($info){ 
			if($iterateOnce){ $MainText .= "\"".$row['source']."\""; $iterateOnce=false; }
			else { $MainText .= ", \"".$row['source']."\""; }
		}
		mysql_close();
	}
	$MainText .=");";

	$onceIterate = true;
	require("connect.php");
	$query = mysql_query("SELECT  * FROM captions WHERE type='Specials'") or die(mysql_error());
	$numrows = mysql_num_rows($query);
	mysql_close();

	$MainText .= "var SpecialsCaps = new Array(";
	for ($i=0;$i<=$numrows + 1; $i++) { 

		require("connect.php");
		$query = mysql_query("SELECT  * FROM captions WHERE type='Specials' && num='$i'") or die(mysql_error());
		$row = mysql_fetch_assoc($query);
		$info = $row['content'];
		if ($info){
			if($onceIterate){ $MainText .= "\"".$row['content']."\""; $onceIterate = false; }
			else { $MainText .= ", \"".$row['content']."\""; }
		}
		mysql_close(); 

	}
	$MainText .=");";

	//////////////////   List   //////////////////////////////

	require("connect.php");
	$query = mysql_query("SELECT  * FROM images WHERE type='List'") or die(mysql_error());
	$numrows = mysql_num_rows($query);
	mysql_close();

	$MainText .= "var ListPics = new Array(";
	$iterateOnce = true;
	for ($i=0;$i<=$numrows + 1; $i++) { 

		require("connect.php");
		$query = mysql_query("SELECT  * FROM images WHERE type='List' && num='$i'") or die(mysql_error());
		$row = mysql_fetch_assoc($query);
		$info = $row['source'];
		if($info){ 
			if($iterateOnce){ $MainText .= "\"".$row['source']."\""; $iterateOnce=false; }
			else { $MainText .= ", \"".$row['source']."\""; }
		}
		mysql_close();
	}
	$MainText .=");";

	$onceIterate = true;
	require("connect.php");
	$query = mysql_query("SELECT  * FROM captions WHERE type='List'") or die(mysql_error());
	$numrows = mysql_num_rows($query);
	mysql_close();

	$MainText .= "var ListCaps = new Array(";
	for ($i=0;$i<=$numrows + 1; $i++) { 

		require("connect.php");
		$query = mysql_query("SELECT  * FROM captions WHERE type='List' && num='$i'") or die(mysql_error());
		$row = mysql_fetch_assoc($query);
		$info = $row['content'];
		if ($info){
			if($onceIterate){ $MainText .= "\"".$row['content']."\""; $onceIterate = false; }
			else { $MainText .= ", \"".$row['content']."\""; }
		}
		mysql_close(); 

	}
	$MainText .=");";

	//////////////////   New   //////////////////////////////

	require("connect.php");
	$query = mysql_query("SELECT  * FROM images WHERE type='New'") or die(mysql_error());
	$numrows = mysql_num_rows($query);
	mysql_close();

	$MainText .= "var NewPics = new Array(";
	$iterateOnce = true;
	for ($i=0;$i<=$numrows + 1; $i++) { 

		require("connect.php");
		$query = mysql_query("SELECT  * FROM images WHERE type='New' && num='$i'") or die(mysql_error());
		$row = mysql_fetch_assoc($query);
		$info = $row['source'];
		if($info){ 
			if($iterateOnce){ $MainText .= "\"".$row['source']."\""; $iterateOnce=false; }
			else { $MainText .= ", \"".$row['source']."\""; }
		}
		mysql_close();
	}
	$MainText .=");";

	$onceIterate = true;
	require("connect.php");
	$query = mysql_query("SELECT  * FROM captions WHERE type='New'") or die(mysql_error());
	$numrows = mysql_num_rows($query);
	mysql_close();

	$MainText .= "var NewCaps = new Array(";
	for ($i=0;$i<=$numrows + 1; $i++) { 

		require("connect.php");
		$query = mysql_query("SELECT  * FROM captions WHERE type='New' && num='$i'") or die(mysql_error());
		$row = mysql_fetch_assoc($query);
		$info = $row['content'];
		if ($info){
			if($onceIterate){ $MainText .= "\"".$row['content']."\""; $onceIterate = false; }
			else { $MainText .= ", \"".$row['content']."\""; }
		}
		mysql_close(); 

	}
	$MainText .=");";

	//////////////////   Info   //////////////////////////////

	require("connect.php");
	$query = mysql_query("SELECT  * FROM images WHERE type='Info'") or die(mysql_error());
	$numrows = mysql_num_rows($query);
	mysql_close();

	$MainText .= "var InfoPics = new Array(";
	$iterateOnce = true;
	for ($i=0;$i<=$numrows + 1; $i++) { 

		require("connect.php");
		$query = mysql_query("SELECT  * FROM images WHERE type='Info' && num='$i'") or die(mysql_error());
		$row = mysql_fetch_assoc($query);
		$info = $row['source'];
		if($info){ 
			if($iterateOnce){ $MainText .= "\"".$row['source']."\""; $iterateOnce=false; }
			else { $MainText .= ", \"".$row['source']."\""; }
		}
		mysql_close();
	}
	$MainText .=");";

	$onceIterate = true;
	require("connect.php");
	$query = mysql_query("SELECT  * FROM captions WHERE type='Info'") or die(mysql_error());
	$numrows = mysql_num_rows($query);
	mysql_close();

	$MainText .= "var InfoCaps = new Array(";
	for ($i=0;$i<=$numrows + 1; $i++) { 

		require("connect.php");
		$query = mysql_query("SELECT  * FROM captions WHERE type='Info' && num='$i'") or die(mysql_error());
		$row = mysql_fetch_assoc($query);
		$info = $row['content'];
		if ($info){
			if($onceIterate){ $MainText .= "\"".$row['content']."\""; $onceIterate = false; }
			else { $MainText .= ", \"".$row['content']."\""; }
		}
		mysql_close(); 

	}
	$MainText .=");";

	//////////////////   Contact   //////////////////////////////

	require("connect.php");
	$query = mysql_query("SELECT  * FROM images WHERE type='Contact'") or die(mysql_error());
	$numrows = mysql_num_rows($query);
	mysql_close();

	$MainText .= "var ContactPics = new Array(";
	$iterateOnce = true;
	for ($i=0;$i<=$numrows + 1; $i++) { 

		require("connect.php");
		$query = mysql_query("SELECT  * FROM images WHERE type='Contact' && num='$i'") or die(mysql_error());
		$row = mysql_fetch_assoc($query);
		$info = $row['source'];
		if($info){ 
			if($iterateOnce){ $MainText .= "\"".$row['source']."\""; $iterateOnce=false; }
			else { $MainText .= ", \"".$row['source']."\""; }
		}
		mysql_close();
	}
	$MainText .=");";

	$onceIterate = true;
	require("connect.php");
	$query = mysql_query("SELECT  * FROM captions WHERE type='Contact'") or die(mysql_error());
	$numrows = mysql_num_rows($query);
	mysql_close();

	$MainText .= "var ContactCaps = new Array(";
	for ($i=0;$i<=$numrows + 1; $i++) { 

		require("connect.php");
		$query = mysql_query("SELECT  * FROM captions WHERE type='Contact' && num='$i'") or die(mysql_error());
		$row = mysql_fetch_assoc($query);
		$info = $row['content'];
		if ($info){
			if($onceIterate){ $MainText .= "\"".$row['content']."\""; $onceIterate = false; }
			else { $MainText .= ", \"".$row['content']."\""; }
		}
		mysql_close(); 

	}
	$MainText .=");";

	//////////////////   Facts   //////////////////////////////

	require("connect.php");
	$query = mysql_query("SELECT  * FROM images WHERE type='Facts'") or die(mysql_error());
	$numrows = mysql_num_rows($query);
	mysql_close();

	$MainText .= "var FactsPics = new Array(";
	$iterateOnce = true;
	for ($i=0;$i<=$numrows + 1; $i++) { 

		require("connect.php");
		$query = mysql_query("SELECT  * FROM images WHERE type='Facts' && num='$i'") or die(mysql_error());
		$row = mysql_fetch_assoc($query);
		$info = $row['source'];
		if($info){ 
			if($iterateOnce){ $MainText .= "\"".$row['source']."\""; $iterateOnce=false; }
			else { $MainText .= ", \"".$row['source']."\""; }
		}
		mysql_close();
	}
	$MainText .=");";

	$onceIterate = true;
	require("connect.php");
	$query = mysql_query("SELECT  * FROM captions WHERE type='Facts'") or die(mysql_error());
	$numrows = mysql_num_rows($query);
	mysql_close();

	$MainText .= "var FactsCaps = new Array(";
	for ($i=0;$i<=$numrows + 1; $i++) { 

		require("connect.php");
		$query = mysql_query("SELECT  * FROM captions WHERE type='Facts' && num='$i'") or die(mysql_error());
		$row = mysql_fetch_assoc($query);
		$info = $row['content'];
		if ($info){
			if($onceIterate){ $MainText .= "\"".$row['content']."\""; $onceIterate = false; }
			else { $MainText .= ", \"".$row['content']."\""; }
		}
		mysql_close(); 

	}
	$MainText .=");";

	//////////////////   Links   //////////////////////////////

	require("connect.php");
	$query = mysql_query("SELECT  * FROM images WHERE type='Links'") or die(mysql_error());
	$numrows = mysql_num_rows($query);
	mysql_close();

	$MainText .= "var LinkssPics = new Array(";
	$iterateOnce = true;
	for ($i=0;$i<=$numrows + 1; $i++) { 

		require("connect.php");
		$query = mysql_query("SELECT  * FROM images WHERE type='Links' && num='$i'") or die(mysql_error());
		$row = mysql_fetch_assoc($query);
		$info = $row['source'];
		if($info){ 
			if($iterateOnce){ $MainText .= "\"".$row['source']."\""; $iterateOnce=false; }
			else { $MainText .= ", \"".$row['source']."\""; }
		}
		mysql_close();
	}
	$MainText .=");";

	$onceIterate = true;
	require("connect.php");
	$query = mysql_query("SELECT  * FROM captions WHERE type='Links'") or die(mysql_error());
	$numrows = mysql_num_rows($query);
	mysql_close();

	$MainText .= "var LinksCaps = new Array(";
	for ($i=0;$i<=$numrows + 1; $i++) { 

		require("connect.php");
		$query = mysql_query("SELECT  * FROM captions WHERE type='Links' && num='$i'") or die(mysql_error());
		$row = mysql_fetch_assoc($query);
		$info = $row['content'];
		if ($info){
			if($onceIterate){ $MainText .= "\"".$row['content']."\""; $onceIterate = false; }
			else { $MainText .= ", \"".$row['content']."\""; }
		}
		mysql_close(); 

	}
	$MainText .=");";






	echo "";
	echo $MainText;
	echo "";
?>
