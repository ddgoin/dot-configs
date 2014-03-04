var getID = /video:(.*?)($|,|:)/;

chrome.extension.onRequest.addListener(function(message, sender, sendResponse) {
	
if (message.type == 'vids') {
	videolist = message.data;
	var post = '<feed xmlns="http://www.w3.org/2005/Atom" xmlns:batch="http://schemas.google.com/gdata/batch" xmlns:yt="http://gdata.youtube.com/schemas/2007"><batch:operation type="query"/>'
	for (var i = 0; i < videolist.length ;i++) {
		post += '<entry><id>https://gdata.youtube.com/feeds/api/videos/' + videolist[i] + '</id></entry>';
	}
	post += '</feed>';
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.open('POST', 'http://gdata.youtube.com/feeds/api/videos/batch?v=2', true);
	xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xmlhttp.onreadystatechange = function() {    
	    if (xmlhttp.readyState == 4) {
	        if (xmlhttp.status == 200) {
                var output = [];
                var entries = xmlhttp.responseXML.getElementsByTagName('entry');
                for (var i = 0; i < entries.length ;i++) {
                    try {
                        var entry = entries[i];
                        var id = getID.exec(entry.getElementsByTagName('id')[0].childNodes[0].nodeValue)[1];
                        var ratingEls = entry.getElementsByTagName('rating');
                        var ratingEl = null;
                        for (var z = 0; z < ratingEls.length; z++) {
                            if (ratingEls[z].prefix == 'yt') {
                                ratingEl = ratingEls[z];
                                break;
                            }
                        }
                        var dislikes = parseInt(ratingEl.getAttribute('numDislikes'));
                        var likes = parseInt(ratingEl.getAttribute('numLikes'));
                        var rating = (likes / (likes + dislikes)) * 100;
                        output.push({'id':id, 'rating':rating});
                    }
                    catch(e){}
                }
		sendResponse(output);
	        }
        } 
	}
        xmlhttp.send(post);
}
else if (message.type == 'ads') {
	if (localStorage["ads"] == 'no')
		sendResponse(false);
	else
		sendResponse(true);
}
});
