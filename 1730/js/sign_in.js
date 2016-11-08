	var pwdaff_b = false;
	var $regPwd1 = $('.re_text');
    	$regPwd1.blur( function(){
				var pwd = $('.re_text').val();
				var pwdAff = $.cookie("username");
				if($.cookie("username")!=pwd){
					alert("你还未注册,请先去注册");
	    	    }else{
	    	    	if( pwdAff != pwd ){
						$(this).parent().find( ".msg_warning" ).css('display','inline-block');
						$(this).parent().find( ".msg_warning" ).html( '输入的账号有误，请重新输入' );
					}else{
						pwdaff_b = true;
						$(this).parent().find( ".msg_warning" ).css('display','none');
					}
	    	    }
			
		} );
		var $regPwd2 = $('.re-password');
		$regPwd2.blur( function(){
			var pwd1= $(".re-password").val();
			var pwdAff1 = $.cookie("password");
			if( pwdAff1 != pwd1 ){
				$(this).parent().find( ".msg_warning" ).css('display','inline-block');
				$(this).parent().find( ".msg_warning" ).html( '输入的密码有误，请重新输入' );
			}else{
				$(this).parent().find( ".msg_warning" ).css('display','none');
			}
	    });
		$(".submit_con").click(function(){
			var pwd = $('.re_text').val();
			var pwd1= $(".re-password").val();
			if($.cookie("username")==pwd&&$.cookie("password")==pwd1){
				alert("您已登录成功");
	        }
			
		}
	)