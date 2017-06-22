$(document).ready(function(){
	equalBoxes();
});

function equalBoxes(){
	$("#full-planning").removeAttr("style");
	$("#partial-planning").removeAttr("style");
	$("#event-management").removeAttr("style");
	$("#alacarte").removeAttr("style");

	if($(window).width() > 584){

		var fullPlanning = $("#full-planning").height();
		var partialPlanning = $("#partial-planning").height();
		var eventManagement = $("#event-management").height();
		var alacarte = $("#alacarte").height();

		if (fullPlanning > partialPlanning) {
			var setHeight = $("#fp-outer").height() + "px";
			document.getElementById("partial-planning").style.height = setHeight;
		} else {
			var setHeight = $("#pp-outer").height() + "px";
			document.getElementById("full-planning").style.height = setHeight;
		};

		if (eventManagement > alacarte) {
			var setHeight = $("#em-outer").height() + "px";
			document.getElementById("alacarte").style.height = setHeight;
		} else {
			var setHeight = $("#a-outer").height() + "px";
			document.getElementById("event-management").style.height = setHeight;
		};	
	};

	if($(window).width() > 1500){
		$("div.row.center").addClass("container");
	};
};

$(window).resize(equalBoxes);