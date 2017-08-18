$(function()
{ 
	// fix titles (verður svo á PHP)
	$(".Chapter").each(function() {
		$(this).find("h1").html($(this).attr("data-header"));
	});
	$("#HPI .Entry").each(function() {
		$(this).find("h2").html($(this).attr("data-pre"));
	});
	$("#ROS .Entry").each(function() {
		$(this).find("h2").html($(this).attr("data-header"));
	});


	// prepare range selectors
	$("input[type='range']").on("change", function() { var iVal=$(this).val(); $(this).next().html(iVal > 0 ? iVal + "/10" : ""); void CreateOutput(); });
	// final textarea selected on mouseover
	$("#Final textarea").on("mouseover", function() { $(this).select(); });


	var $strVal = "";
	var $strOut = "";

// THEME
//	$strOut += " (" + $("#HPI option:selected").val() + "):\n";
	$strOut += "BRJÓSTVERKUR:\n";


	$("#HPI .radio").on("click", function() { $(this).toggleClass("neutral positive"); void CreateOutput(); });
	$("#ROS .radio").on("click", function() {
		var $currClass = $(this).attr("class");
		switch($currClass.split(" ")[1])
		{
			case "neutral":
				$currClass = $currClass.replace("neutral","positive");
				break;
			case "positive":
				$currClass = $currClass.replace("positive","negative");
				break;
			case "negative":
				$currClass = $currClass.replace("negative","neutral");
				break;
		}
		$(this).attr("class",$currClass);
		void CreateOutput();
	});
});

function CreateOutput()
{
	$strOut = capitaliseFirstLetter($("#HPI").attr("data-header")) + "\n";
	$("#HPI .Entry").each(function(i) {
		$strVal = "";
		switch ($(this).attr("data-type"))
		{
			case "radio":
				$(this).find(".positive").each(function() {
					$strVal += $(this).text() + " og ";
				});
				break;
			case "number":
				$strVal = $(this).find("input").val();
				break;
			case "number.range":
				$strVal = $(this).find("output").text();
				break;
			case "text":
				$strVal = $(this).find("input").val();
				break;
		}
		$strVal = $strVal.replace(/ og $/, "");

		if (typeof $strVal !== "Undefined")
		{
		// pre
			if ($strVal.length > 0)
			{
				$strPre = $(this).attr("data-pre");
				if (typeof $strPre !== "undefined")
				{
					$strOut += "-" + $strPre + " ";
				}
				$strOut += $strVal;
	
		// post
				$strPost = $(this).attr("data-post");
				if (typeof $strPost !== "undefined")
				{
					$strOut += " " + $strPost;
				}
				$strOut += "\n";
			}
		}
	});

// ROS
	$strOut += "\n" + capitaliseFirstLetter($("#ROS").attr("data-header")) + ":\n";
	$("#ROS .Entry").each(function(i) {
		$strVal = "";
		$(this).find(".radio").each(function() {
			var $spanClass = $(this).attr("class");
			if ($spanClass.indexOf("positive") > 0)
			{
				$strVal += "(+)" + $(this).text() + ", ";
			}
			if ($spanClass.indexOf("negative") > 0)
			{
				$strVal += "(-)" + $(this).text() + ", ";
			}
		});
		if ($strVal.length > 0)
		{
			$strOut += "-" + $(this).attr("data-header") + ": " + $strVal + "\n";
		}
	});

	$("#Final textarea").val($strOut);
}


function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}