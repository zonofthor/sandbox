jQuery(document).ready(function($)
{
	$("select.request").on("change", requestChanged);
	$("select.result").on("change", resultChanged);
	$("select[class='request']").attr("title","Staða beiðnar");
	$("select[class='result']").attr("title","Staða rannsóknar");
	$("#butRandomize").on("click", RandomizeStatuses);
	$("#butStyle").on("click", ToggleMenuStyle);
	$("#SB_Menu").select2();

//	$("#StatusSummary div").on("click", OpenMenu);
//	$("#Menu").on("mouseleave", CloseMenu);
//	$("#Menu").on("click", CloseMenu);
});

function RandomizeStatuses()
{
//	#Selectors: - div - select x2
	$("#Selectors > div > select").each(function(i)
	{
		$counted = $(this).find("option").length;
		$randomNr = Math.floor((Math.random() * $counted));
		$randomVal = $(this).find("option:nth-child(" + $randomNr + ")").val();
		$(this).val($randomVal);
		$(this).trigger("change");
	});
}


function requestChanged(ev)
{
	$rsType = $(ev.delegateTarget).parent().attr("class");	// hver kallaði?
	$elTarget = $("#StatusSummary").find("." + $rsType);		// target til að breyta
	$elTarget.attr("data-request", $(ev.delegateTarget).val());
}

function resultChanged(ev)
{
	$rsType = $(ev.delegateTarget).parent().attr("class");	// hver kallaði?
	$elTarget = $("#StatusSummary").find("." + $rsType);		// target til að breyta
	$elTarget.attr("data-result", $(ev.delegateTarget).val());
}


function OpenMenu(ev)
{
	$("#Menu").css({left:ev.pageX-20, top:ev.pageY-5});
	$("#Menu").show(100);
}

function CloseMenu()
{
	$("#Menu").hide();
	$("#Menu").offset({top:0, left:0});
}

function ToggleMenuStyle()
{
	$("#SBline").toggleClass("MenuGraphical").toggleClass("MenuTextual");
}
