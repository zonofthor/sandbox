jQuery(document).ready(function($)
{
	void Init();
	$(".Timabokanir .tb_Row span:not(:first)").on("click", Timabokanir_Toggle)
	$(".Checkers").on("click", Checkers_Toggle)
	$("#Vista").on("click", Vista)
});


function Init()
{
	$(".Checkers").addClass("Off");		// sparar handavinnu
}

function Checkers_Toggle(ev)
{
	if($(ev.delegateTarget).hasClass("Off"))
	{
		$(ev.delegateTarget).removeClass("Off").addClass("On");
	}
	else
	{
		$(ev.delegateTarget).removeClass("On").addClass("Off");
	}
}

function Timabokanir_Toggle(ev)
{
	$(ev.delegateTarget).toggleClass("Checked");
}


function Vista(ev)
{
	$("#Output").toggle(200);
}