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
}

if (eventManagement > alacarte) {
	var setHeight = $("#em-outer").height() + "px";
	document.getElementById("alacarte").style.height = setHeight;
} else {
	var setHeight = $("#a-outer").height() + "px";
	document.getElementById("event-management").style.height = setHeight;
}