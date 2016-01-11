var timer;

$( document ).ready(function(){$(".button-collapse").sideNav();

$(".signUp").click(function(){
	$(".signUp").css("display","none");
	$(".signIn").css("display","block");
	$(".rightSignIn").css("display","none");
	$(".rightSignUp").css("display","block");
	
});

$(".signIn").click(function(){
	$(".signUp").css("display","block");
	$(".signIn").css("display","none");
	$(".rightSignIn").css("display","block");
	$(".rightSignUp").css("display","none");
	
});

$(".open").click(function(){
	$("#dialogue").css("display","block");
	$( "body" ).css("background-color","#202020");
	$( "body" ).css("background-image","none");
});
$("#close").click(function(){
	$("#dialogue").css("display","none");
	$( "body" ).css("background-color","#3399FF");
	$( "body" ).css("background-image", "url('./../images/indexBackground1.jpg')");
});

$("#userSignUp").blur(function(){
	//localStorage.setItem("emptyString",$("#userSignUp").val());
	arr=JSON.parse(localStorage.getItem("users"));
	if(arr==null){

		localStorage.setItem("users","[]");
	}
	//alert(localStorage.getItem("users"));
	var count = Object.keys(arr).length;
	var userNamePassed=$("userSignUp").val();
	//alert(userNamePassed);
	if($("#userSignUp").val()==null||$("#userSignUp").val()==""||$("#userSignUp").val()==undefined){
                alert("You can't leave the username field empty");
            }
    else{
    	flag=0;
    	for(i=0;i<count;i++){
    		if(arr[i]==userNamePassed){
    			alert("sorry,the username is already taken! Try something else");
    			$("#userSignUp").val("");
    			flag=1;
    			break;
    		}

    	}
    }
});


$("#cpwd").blur(function(){
	/*alert("passwords");
	alert($("#pwd").val());
	alert($("#cpwd").val());*/
	if(($("#pwd").val())!=($("#cpwd").val())){

		alert("Your Passwords are not matching,please enter again");
		$("#pwd").val("");
		$("#cpwd").val("");
		$("#pwd").focus();
	}


});
/*
$("#userPwd").blur(function(){
	if($("#userSignIn").val()!=null&&$("#userSignIn").val()!=""&&$("#userSignIn").val()!=undefined&&$("#userpwd").val()!=null&&$("#userPwd").val()!=""&&$("#userPwd").val()!=undefined){

	$("#signedIn").click(function(event){
   	event.preventDefault();
   	$(".inputDisabled").prop("disabled", false); 
	});
	}

});*/

});







var imageSelector;
window.onload=image1;
function image1(){
	$(".imageContainer").html("<img class='slideImages' src='./../images/story1.jpg'></img>");
	imageSelector=$(".slideImages");
	imageSelector.hide();
	imageSelector.show(1000);
	timer=setTimeout(image2,5000);
}
function image2(){

	$(".imageContainer").html("<img class='slideImages' src='./../images/story2.jpg'></img>");
	imageSelector=$(".slideImages");
	imageSelector.fadeOut(0);
	imageSelector.fadeIn(2000);
	setTimeout(image3,5000);
}
function image3(){

	$(".imageContainer").html("<img class='slideImages' src='./../images/story3.jpg'></img>");
	imageSelector=$(".slideImages");
	imageSelector.css("width","0%");
	imageSelector.css("height","100%");
	imageSelector.animate({width : "100%"}, 2000);
	setTimeout(image1,5000);
}


function validate(){
	userNamePassed=$("userSignUp").val();
	if($("#userSignUp").val()==null||$("#userSignUp").val()==""||$("#userSignUp").val()==undefined){
                alert("You can't leave the username field empty");
                return false;
            }
    else{
    	flag=0;
    	for(i=0;i<count;i++){
    		if(arr[i]==userNamePassed){
    			alert("sorry,the username is already taken! Try something else");
    			$("#userSignUp").val("");
    			flag=1;
    			break;
    		}

    	}
    	if(flag==1){

    		return false;
    	}
    }
    arr=JSON.parse(localStorage.getItem("users"));
    arr.push("$(\"#userSignUp\").val()");
   // alert(arr);
    localStorage.setItem("users",arr);
    //alert(localStorage.getItem(users));
    //alert("haha");
    return true;
}