
$( document ).ready(function() {
	$(".button-collapse").sideNav();
	//toggle between signup and signin forms
	$(".signUp").click(function() {
		$(".signUp").css("display", "none");
		$(".signIn").css("display", "block");
		$(".rightSignIn").css("display", "none");
		$(".rightSignUp").css("display", "block");
	});


	$(".signIn").click(function() {
		$(".signUp").css("display", "block");
		$(".signIn").css("display", "none");
		$(".rightSignIn").css("display", "block");
		$(".rightSignUp").css("display", "none");
	});
	//to open a dialogue box giving the about section of the page
	$(".open").click(function() {
		$("#dialogue").css("visibility", "visible");
		$( "body" ).css("background-color", "#202020");
		$( "body" ).css("background-image", "none");
		$( ".imageContainer" ).hide();
	});
	$("#close").click(function() {
		$("#dialogue").css("visibility", "hidden");
		$( "body" ).css("background-color", "#3399FF");
		$( "body" ).css("background-image", "url('./../images/indexBackground1.jpg')");
		$( ".imageContainer" ).show();
	});
	//gets the entered username validates and checks,whether the name already exists
	$("#userSignUp").blur(function() {
		arr = localStorage.getItem("users");
		//alert(arr);
		if (arr === null) {
			var names = [];
			localStorage.setItem("users", JSON.stringify(names));
		}
		arr = JSON.parse(localStorage.getItem("users"));
		//alert("After parsing", arr);
		//console.log(arr);
		var count = Object.keys(arr).length;
		var userNamePassed = $("#userSignUp").val();
		//alert("user name passed is", userNamePassed);
		//console.log(userNamePassed);
		if ($("#userSignUp").val() === null || $("#userSignUp").val() === "") {
			alert("You can't leave the username field empty");
		}
		else {
			flag = 0;
			for (i = 0; i < count; i ++ ) {
				if (arr[i] === userNamePassed) {
					alert("sorry,the username is already taken! Try something else");
					$("#userSignUp").val("");
					flag = 1;
					break;
				}
			}
		}
	});

	//checks whether,both the entered passwords are matching
	$("#cpwd").blur(function() {
		if (($("#pwd").val()) !== ($("#cpwd").val())) {
			alert("Your Passwords are not matching,please enter again");
			$("#pwd").val("");
			$("#cpwd").val("");
			$("#pwd").focus();
		}
	});
});
//functions to display images using jquery
var imageSelector;
window.onload = image1;
function image1() {
	$(".imageContainer").html("<img class='slideImages' src='./../images/story1.jpg'></img>");
	imageSelector = $(".slideImages");
	imageSelector.hide();
	imageSelector.show(1000);
	timer = setTimeout(image2, 5000);
}
function image2() {
	$(".imageContainer").html("<img class='slideImages' src='./../images/story2.jpg'></img>");
	imageSelector = $(".slideImages");
	imageSelector.fadeOut(0);
	imageSelector.fadeIn(2000);
	setTimeout(image3, 5000);
}
function image3() {
	$(".imageContainer").html("<img class='slideImages' src='./../images/story3.jpg'></img>");
	imageSelector = $(".slideImages");
	imageSelector.css("width", "0%");
	imageSelector.css("height", "100%");
	imageSelector.animate({width: "100%"}, 2000);
	setTimeout(image1, 5000);
}
//validates the fullform,before signup
function validate() {
	userNamePassed = $("#userSignUp").val();
	//console.log(userNamePassed);
	if ($("#userSignUp").val() === null || $("#userSignUp").val() === "" ) {
		alert("You can't leave the username field empty");
		return false;
	}
	arr = localStorage.getItem("users");
	//console.log("here");
	//console.log(arr);
	if (arr === null) {
		var names = [];
		localStorage.setItem("users", JSON.stringify(names));
	}
	arr = JSON.parse(localStorage.getItem("users"));
	var count = Object.keys(arr).length;
	//console.log(count);
	flag = 0;
	for (i = 0; i < count; i++) {
		if (arr[i] === userNamePassed) {
			alert("sorry,the username is already taken! Try something else");
			$("#userSignUp").val("");
			flag = 1;
			break;
		}
	}
	if (flag === 1) {
		return false;
	}
	arr.push(userNamePassed);
	localStorage.setItem("users", JSON.stringify(arr));
	var gender;
	$("input:radio[name = gender]").click(function() {
		gender = $(this).val();
	});
	//console.log(arr);
	//console.log(gender)
	details = [];
	details.push($("#screenName").val());
	details.push(userNamePassed);
	details.push($("#pwd").val());
	details.push($("#bDate").val());
	//details.push(gender);
	localStorage.setItem(userNamePassed, JSON.stringify(details));
	//console.log(JSON.parse(localStorage.getItem(userNamePassed)));
	sessionStorage.setItem("key", JSON.stringify(details));

	localStorage.setItem(userNamePassed, $("#pwd").val());
	//alert('<%=Session["temp"] %>');
	return true;
}
//validates the signin of a user
function validateSignIn() {
	if (localStorage.getItem($("#userSignIn").val()) === $("#userPwd").val()) {
		return true;
	}
	alert("The username password combination doesn't match");
	return false;
}
