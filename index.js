var phone = 1;
var emailcheck = 1;
	$(document).ready(function(){
		$('#loader-body').css('display','none');
		if (phone == 0) {
			alert('Enter a valid phone number');
		}
		else if (emailcheck == 0) {
			alert('Enter a valid email id');
		}
		else {
			$("form").submit(function(e){
				e.preventDefault();
				$("#reg_submit").attr('disabled','disabled');
			 name2="";
			mobile2="";
			name3="";
			mobile3="";
			name4="";
			mobile4="";
			name5="";
			mobile5="";
			name6="";
			mobile6="";
			name7="";
			mobile7="";
			name=$("#name").val();
			gname=$("#gname").val();
			mobile=$("#mobile").val();
			email=$("#email").val();
			insti=$("#insti").val();
			n=$("#size").val();
			city=$("#city").val();
			url=$("#url").val();
			
			if(n>1){
				name2=$("#name2").val();
				mobile2=$("#mobile2").val();
			}
			if(n>2){
				name3=$("#name3").val();
				mobile3=$("#mobile3").val();
			}
			if(n>3){
				name4=$("#name4").val();
				mobile4=$("#mobile4").val();
			}
			if(n>4){
				name5=$("#name5").val();
				mobile5=$("#mobile5").val();
			}
			if(n>5){
				name6=$("#name6").val();
				mobile6=$("#mobile6").val();
			}
			if(n>6){
				name7=$("#name7").val();
				mobile7=$("#mobile7").val();
			}
			
			 $.ajax({
				  
					url: "https://script.google.com/macros/s/AKfycbz4ggyhtL57l7Ssm2mKwIWhTTadqgkfltpMj02g2Uq_BR4CxmY/exec",
					   type: "POST",
					data:{
					   'Group_name':gname,
					   'Name':name,
					   'Mobile':mobile,
					   'Email':email,
					   'Institution':insti,
					   'Team_size':n,
					   'City':city,
					   'url':url,
					   'Member2_name':name2,
					   'Member2_mobile':mobile2,
					   'Member3_name':name3,
					   'Member3_mobile':mobile3,
					   'Member4_name':name4,
					   'Member4_mobile':mobile4,
					   'Member5_name':name5,
					   'Member5_mobile':mobile5,
					   'Member6_name':name6,
					   'Member6_mobile':mobile6,
					   'Member7_name':name7,
					   'Member7_mobile':mobile7
					},
					  success:function(){
						  $("#success_msg").text("Successfully registered");
						  $('#reg_submit').removeAttr('disabled','disabled');
						  $('.form-items').val('');
					  }
					
				});
			});
		}
	});
	/*$(window).load(function() {
			alert('yes');
     		
     		/*$('#slideshow').css('display','block');
     		$('#line-left').css('display','block');
     		$('#line-top').css('display','block');
     		$('#line-right').css('display','block');
     		$('#line-bottom').css('display','block');
     		$('#body-content').css('display','block');
  	});*/


	function msg(a){
		console.log(a);
		if(a<6000000000 || a>10000000000) {
			alert('Enter a valid Mobile No.');
			phone = 0;
		}
	}

	function isEmail(email) {
		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!regex.test(email)){
			alert('Enter valid email id');
			emailcheck = 0;
		}
	}

	function visible(){
		$("#body-main").fadeOut(1000).css('display','none');
		$("#body-area").fadeIn(1000).css('display','block');
	 	//$("#body-area").css('display','block',function(){
	 		//$("#body-area").addClass("animated fadeIn delay-1s")});
	    //$("#body-area").scrollTop(0);
	}

	function show_member(a){
		/*$.ajax({
			type: "POST",
			url: "./member.php",
			data: {
				"n" : a
			},
			success: function (data) {
				$("#mem_size").css('display','block');
		        $("#mem_size").html(data);
			}
		})*/
		$( ".mem_size" ).remove();
		var counter = 1;
		for (counter = 1; counter < a; counter++) {
			var count = counter + 1;
			var newTextBoxDiv = $(document.createElement('div')).attr("class", 'mem_size');       
			newTextBoxDiv.after().html('<input type="text"  id="name'+count+'" name="member'+count+'" class="form-items" placeholder="Member_Name_'+count+'"  required> <br><input type="number" id="mobile'+count+'" name="mobile'+count+'" class="form-items"  placeholder="Mobile No." required> <br></br>');   
			newTextBoxDiv.appendTo("#members_box");
		}			
	}