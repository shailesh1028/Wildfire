	$(document).ready(function(){

	});

	function msg(a){
		if(a<6000000000 && a>10000000000)
			alert('Enter a valid Mobile No.');
	}

	function visible(){
	 	$("#main-sf").addClass("animated fadeOut delay-0.5s");
	  	$("#main-presents").addClass("animated fadeOut delay-0.5s");
	   	$("#main-wildfire").addClass("animated rollOut delay-0.5s");
	    $("#body-area").addClass("animated fadeIn delay-1s");
	    $("#body-main").css("display", "none");
	    $("#body-area").css("display", "block");
	}

	function show_member(a){
		$.post("member.php",{
			n:a
		},
		    function(data){
		        $("#mem_size").html(data);
	    });
	 }