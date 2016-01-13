//uses session to pass the localStorage from the index page to the next page
localStorage.setItem("data", sessionStorage.getItem("key"));
details = JSON.parse(localStorage.getItem("data"));
var count = Object.keys(details).length;
$( document ).ready(function() {
	//details of the logged-in user
	$("#details").css("background-color", "rgba(204,204,204,0.5)");
	$("#details").append("<h2>Details</h2>");
	for (i = 0; i < count; i++) {
		$(".s4").append("<p>" + details[i] + "</p>");
	}
	$("#details").append("<p> Enter your story here</p>");
	$("#details").append("<textarea rows = \"40\" cols = \"4\" id=\"yourStory\">");
	$("<input type=\"button\" value=\"Submit Your Story\" id=\"submitStory\">").insertAfter("#yourStory");
	//displays new stories to the news feed
	if (localStorage.getItem("stories") === null ) {
		$(".s8").append("<h5 class=\"container\"> Sorry No stories to show</h5>");
	}
	else {
		storyArray = JSON.parse(localStorage.getItem("stories"));
		count = Object.keys(storyArray).length;
		for (i = 0; i < count; i ++) {
			$(".s8").append("<div class=\"row\"><div class=\"col s12 m6\"><div class=\"card blue-grey darken-1\"><div class=\"card-content white-text\"><span class=\"card-title\">Title Name: not handled</span><p>" + storyArray[i] + "</div></div></div></div>");
		}
	}
	//submits a new story
	$("#submitStory").click(function() {
		if (localStorage.getItem("stories") === null ) {
			temp = [];
			localStorage.setItem("stories", JSON.stringify(temp));
			storyArray = JSON.parse(localStorage.getItem("stories"));
			//alert($("#yourStory").val());
			storyArray.push($("#yourStory").val());
			localStorage.setItem("stories", JSON.stringify(storyArray));
		}
		else {
			storyArray = JSON.parse(localStorage.getItem("stories"));
			storyArray.push($("#yourStory").val());
			localStorage.setItem("stories", JSON.stringify(storyArray));
			$("#yourStory").val("");
			alert("Story submitted,please refresh the page");
		}
	});
});
