jQuery(document).ready(function($)
{
    console.log("Davíð hér á Timeline.js");
    void parseTL();
});

function parseTL()
{
	// BLÖÐ
	//1102264119
// Núna: finnur match fyrir öll sub-element, TODO: tekur fyrstu 3 orð og leitar en bara MATCH ef nær >5 orðum
// 

	$searchPatterns = $("#form1 .wv_Timeline .wv_TimelineItemSheet .wv_TimelineItemTextBody").contents().filter(function() {return this.nodeType === 3});
	console.log("$searchPatterns: " + $searchPatterns.length "|" $searchPatterns[0]);

	$searchPatterns.each(
		function(i,v)
		{
			//$("#form1 .wv_Timeline .wv_TimelineItemSheet .wv_TimelineItemTextBody:contains('" + v + "')").addClass("CopyPaste");
			//$searchPatterns[i].addClass("CopyPaste");
			console.log($searchPatterns[i]);
		})


	$("#form1 .wv_Timeline .wv_TimelineItemSheet .wv_TimelineItemTextBody").removeClass("CopyPaste");
	$searchPatterns.each(
	function(i,val)
		{
			console.log("Leita að: '" + val + "'");
		//	$("#form1 .wv_Timeline .wv_TimelineItemSheet .wv_TimelineItemTextBody:contains('" + val + "')").addClass("CopyPaste");
		})





// rannsóknir
	//$(".wv_Timeline .wv_TimelineItemLab .wv_TimelineItemTextBody");
}




















/*
If the node is an element node, the nodeType property will return 1.
If the node is an attribute node, the nodeType property will return 2.
If the node is a text node, the nodeType property will return 3.
If the node is a comment node, the nodeType property will return 8.
*/