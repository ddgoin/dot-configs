var settings;
var board = false;
var inThread = false;
var protocol = document.location.protocol;
var frameset;

if(window.location.href.match(/boards\./))
	chrome.extension.sendRequest({'getOptions' : true }, settingsLoaded);

function settingsLoaded(settingsCallback) {
	settings = settingsCallback.message;
	//Determine board
	var matches = window.location.href.match(/4chan\.org\/(\w+)\/?/);
	if(matches)
		board = matches[1];

	//Board detected?
	if(board)
		inThread = window.location.href.match(/\/res\/([0-9]+)/); //Thread or board?
		
	if (window.top === window) {
		//Main extension	
	} else {
		if(board)
			frameset = true;
	}
	
	//f fix
	if(board == "f")
		return false;
	
	var css = "";
	
	/*if(settings["option54"] == "true" && 
		settings["option110"] != "off" && 
		((settings["option113"] != "false" && settings["option52"] != "false" && inThread) || (settings["option114"] != "false" && settings["option51"] != "false" && !inThread)) && 
		settings["option5"] != "off" &&
		((settings["option118"] != "false" && settings["option52"] != "false" && inThread) || (settings["option119"] != "false" && settings["option51"] != "false" && !inThread))) {
		css += ".postarea { display: none; }";
	}*/
	
	if(settings["hiderep"] == "on")
		css += "#postForm { display: none; }";
	
	//Inject stylesheet
	if(css.length > 0) {
		var style = document.createElement('style');
		style.type = "text/css";
		style.appendChild(document.createTextNode(css));
		document.documentElement.appendChild(style);
	}
}