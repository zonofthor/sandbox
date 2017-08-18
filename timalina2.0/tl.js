jQuery(document).ready(function($) {
  //$("#DataPeriod img").width($("#DataPeriod").css("width"));
  $("#Sergrein").on("click", selectSergrein);
  $("#ModeSwitch img").on("click", clickModeSwitch);

  $("#TimeGraph").on("click", function() {
    FakeScroller();
  });
  $("#WarningPeriod").on("click", clickWarningPeriod);
//  $("#Pinned").on("change", selectPinned);
  $("#Staff").on("change", selectStaff);
  $("#Lotur").on("change", selectLotur);
  $("#BlodAllt").on("change", selectBlodAllt);
  $("#External").on("change", selectExternal);
  $("#LeftColumn .Counter").on("click", clickCounter);
  $("#LeftColumn .Counter").attr("title", "Klikk hér skrollar glugga niður að atriðum - eitt í einu");
  $(".ClearFilter").on("click", clickClearFilter);
  $("#InputSearch").on("search", DoSearch);
  $(".mfToggler").addClass("on");
  $(".mfToggler").on("click", filterToggle);
  $(".mfSelector").on("click", filterSelect);
  $(".PopupTrigger").on("click", clickPopupTrigger);
  $("#Skjabordslina>span").on("click", clickPopupTrigger);
  $("#AllarAdgerdir").on("click", clickPopupTrigger);
  $("#AllarAdgerdir2").on("click", clickPopupTrigger);
  $("#PatientInfo").on("click", clickPopupTrigger);

  $("#uiDialog").on("click", function() {
    $(this).fadeOut(200);
  });
  //  $("#uiDialog").on('dragover', false);
  //  $("#uiDialog").on("drop", dropUIDialog);
});

function clickModeSwitch() {
  if ($(this).attr("data-view") === "gogn") {
    $("#Body_Graf").hide();
    $("#LeftColumn").show();
    $("#Body").show(250);
  } else {
    $("#Body_Graf").show(250);
    $("#LeftColumn").hide();
    $("#Body").hide();
  }
  $("#ModeSwitch img").removeClass("Active");
  $(this).addClass("Active");
}

function filterToggle() {
  $(this).toggleClass("on");
}

function filterSelect(ev) {
  // ef til Saved item þá var user seinast að nota Select
  if ($(ev.delegateTarget).parent().hasClass("Selected")) {
    $(ev.delegateTarget).parent().removeClass("Selected");
    $("#MinorFilter li").removeClass("Off"); // núllstilla alla
    $("#MinorFilter .WasOff").removeClass("WasOff").addClass("Off");
  } else {
    $("#MinorFilter li.Off").addClass("WasOff"); // vista þau sem voru Off
    $("#MinorFilter li").addClass("Off"); // og gera *öll* Off
    $(ev.delegateTarget).parent().removeClass("Off"); // nema valið item
    $(ev.delegateTarget).parent().addClass("Selected");
  }
}

// function filterBrowse(ev) {
//     // ef parent li = Off þá gera !Off fyrst
//   $(ev.delegateTarget).parent().removeClass("Off");
//
//   $(this).removeClass("brAnimate").width();
//   $(this).addClass("brAnimate");
//
// }

function DoSearch() {
  if ($("#InputSearch").val().length > 0) {
    $("#InputSearch").addClass("Active");
  } else {
    $("#InputSearch").removeClass("Active");
  }
}

function selectLotur() {
  if ($(this).prop("selectedIndex") > 0) {
    if ($(this).find("option:selected").hasClass("Lega")) {
      $("body").addClass("IsFiltered");
      $(this).parent().addClass("Active");
    } else {
      FakeScroller();
    }
  } else {
    $("body").removeClass("IsFiltered");
    $(this).parent().removeClass("Active");
  }
}

function selectStaff() {
  if ($("#Staff").prop("selectedIndex") > 0) {
    $("body").addClass("IsFiltered");
    $(this).parent().addClass("Active");
    //$("#divStaff .Counter").html($("#Staff option:selected").attr("data-count"));
  } else {
    $("body").removeClass("IsFiltered");
    $(this).parent().addClass("Active");
  }
}

function selectBlodAllt() {
  if ($(this).prop("selectedIndex") > 0) {
    //$("#divBlodAllt .Counter").html($("#BlodAllt option:selected").attr("data-count"));
    $(this).parent().addClass("Active");
  } else {
    $(this).parent().removeClass("Active");
  }
}

// function selectPinned() {
//   if ($(this).prop("selectedIndex") > 0) {
//     FakeScroller();
//   }
// }

function selectExternal() {
  if ($(this).prop("selectedIndex") > 0) {
    $(this).parent().addClass("Active");
    $(this).parent().find(".Counter").html($("#External option:selected").attr("data-count"));
    $(this).parent().find(".Counter").trigger("click");
  } else {
    $(this).parent().removeClass("Active");
  }
}

function selectSergrein() {
  if ($("#Sergrein").prop("selectedIndex") > 0) {
    $("body").addClass("IsFiltered");
    $("#divSergrein").addClass("Active");
  } else {
    $("body").removeClass("IsFiltered");
    $("#divSergrein").removeClass("Active");
  }
}

function clickWarningPeriod() {
  $("#WarningPeriod").remove();
  $("#TimeGraph").attr("src", "Timegraph.jpg");
  $("body").removeClass("PeriodFilter");
}

function clickCounter() {
  $(this).removeClass("browseAnimation").width();
  $(this).addClass("browseAnimation");
  FakeScroller();
}

function clickClearFilter() {
  $(this).parent().removeClass("Active");
  $(this).parent().find("option:eq(0)").prop("selected", true);
  $("body").removeClass("IsFiltered");
}

function clickPopupTrigger() {
  var id = "";
  if ($(this).attr("id")) {
    id = $(this).attr("id");
  } else {
    id = $(this).parent().attr("id");
  }
  $("#uiDialog>h1").text("");
  $("#uiDialog>p").text("");
  switch (id) {
    case "Blod1":
      $("#uiDialog>h1").text("Skrá nýja nótu");
      $("#uiDialog>p").text("Hér kemur svo nýtt og endurbætt skráningarviðmót síðar meir...");
      $("#uiDialog>img").attr("src", "BlodSkraning.jpg");
      break;
    case "mf_HRIS":
      $("#uiDialog>h1").text("Röntgenbeiðni");
      $("#uiDialog>img").attr("src", "HRIS.jpg");
      break;
    case "mf_HROS":
      $("#uiDialog>h1").text("HROS beiðni");
      $("#uiDialog>img").attr("src", "HROS.jpg");
      break;
    case "mf_Cyberlab":
      $("#uiDialog>h1").text("Cyberlab beiðni");
      $("#uiDialog>img").attr("src", "Cyberlab.jpg");
      break;
    case "mf_Lyfsedill":
      $("#uiDialog>h1").text("Lyfseðlar");
      $("#uiDialog>p").text("ATH bæði til að SKOÐA alla lyfseðla og SKRÁ NÝJA");
      $("#uiDialog>img").attr("src", "Lyfsedill.jpg");
      break;
    case "mf_Therapy":
      $("#uiDialog>h1").text("Lyfjafyrirmæli");
      $("#uiDialog>p").text("ATH bæði til að SKOÐA öll lyfjafyrirmæli og SKRÁ NÝ");
      $("#uiDialog>img").attr("src", "Therapy.jpg");
      break;
    case "mf_Lyfjaumsokn":
      $("#uiDialog>h1").text("Lyfjaumsókn");
      $("#uiDialog>img").attr("src", "Lyfjaumsokn.jpg");
      break;
    case "sb_cpoe":
    case "mf_CPOE":
      $("#uiDialog>h1").text("Rafræn fyrirmæli");
      $("#uiDialog>img").attr("src", "CPOE.jpg");
      break;
    case "mf_Adgerdir":
      $("#uiDialog>h1").text("Stærri aðgerðir");
      $("#uiDialog>p").text("hægt að smella á aðgerð og stökkva inn í tímalínu til að skoða");
      $("#uiDialog>img").attr("src", "Adgerdir.jpg");
      break;
    case "mf_Greiningar":
      $("#uiDialog>h1").text("Langtímagreiningar");
      $("#uiDialog>p").text("hægt að smella á greiningu og stökkva inn í tímalínu til að skoða");
      $("#uiDialog>img").attr("src", "Langtimagreiningar.jpg");
      break;
    case "sb_vitals":
    case "mf_Vitals":
      $("#uiDialog>h1").text("Lífsmörk");
      $("#uiDialog>img").attr("src", "Lifsmork.jpg");
      break;
    case "mf_Vidhengi":
      $("#uiDialog>h1").text("Nýtt viðhengi");
      $("#uiDialog>img").attr("src", "Vidhengi.jpg");
      break;
    case "mf_Timabokun":
      $("#uiDialog>h1").text("Ný tímabókun");
      $("#uiDialog>img").attr("src", "Timabokun.jpg");
      break;
    case "AllarAdgerdir":
    case "AllarAdgerdir2":
      $("#uiDialog>h1").text("Allar aðgerðir");
      $("#uiDialog>img").attr("src", "AllarAdgerdirMenu.jpg");
      break;
    case "PatientInfo":
      $("#uiDialog>h1").text("Nánari upplýsingar um sjúkling");
      $("#uiDialog>img").attr("src", "PatientInfo.jpg");
      break;
    case "sb_sbar":
        $("#uiDialog>h1").text("SBAR");
        $("#uiDialog>img").attr("src", "SBAR.jpg");
        break;
    case "sb_memo":
        $("#uiDialog>h1").text("Persónulegur minnispunktur");
        $("#uiDialog>img").attr("src", "memo.jpg");
        break;
    case "sb_results":
        $("#uiDialog>h1").text("Rannsóknaryfirlit");
        $("#uiDialog>img").attr("src", "results.jpg");
        break;
  }
  $("#uiDialog").fadeIn(250);
}

function FakeScroller() {
  var i = $("#MainScreenImg").parent().parent().parent().scrollTop();
  if ($("body").attr("data-scroller-last") === "neg") {
    i = i - 80;
    $("body").attr("data-scroller-last", "pos");
  } else {
    i = i + 80;
    $("body").attr("data-scroller-last", "neg");
  }
  $("body").animate({
    scrollTop: i
  }, 250);
}
