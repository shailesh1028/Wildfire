	$(document).ready(function(){

	});

	function msg(a){
		if(a<6000000000 && a>10000000000)
			alert('Enter a valid Mobile No.');
	}

	function visible(){
		$("#body-main").addClass('fadeout');
	 	$("#body-area").css('display','block',function(){
	 		$("#body-area").addClass("animated fadeIn delay-1s")});
	    $("#body-area").scrollTop(0);
	}

	function show_member(a){
		$.post("member.php",{
			n:a
		},
		    function(data){
		    	$("#mem_size").css('display','block');
		        $("#mem_size").html(data);
	    });
	 }
