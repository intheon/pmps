function grabTwitterData(rawJsonURL)
{
	$.ajax({
		method: 	"GET",
		url:   		rawJsonURL,
		beforeSend: function(){
			$(".loading").show();
		},
		success: 	function(response){
			$(".loading").hide();
			parseTwitterData(response);
		}
	});
}

function parseTwitterData(rawJson)
{
	var asObj = JSON.parse(rawJson);

	for (i = 0; i < 8; i++)
	{
		var month = asObj[i].created_at.split(" ")[1];
		var day = asObj[i].created_at.split(" ")[2];
		var shortDate = month + " " + day;

		$("#twitter-feed").append("<div class='twitter-item'>\
			<div class='account-title'>@PMPSMedia&nbsp;</div>\
			<div class='tweet-date'>"+ shortDate +"</div>\
			<div class='tweet-body'>"+ asObj[i].text +"</div>\
		</div>");
	}

}
