var startload = function(list) {
        chrome.extension.sendRequest({type: 'vids', data: list}, function(res){
		getAnswer(res);
	});
}

var adsReady = function(list) {
        chrome.extension.sendRequest({type: 'ads'}, function(res){
		if (res == true)
			if (/.*\/watch\?.*/.test(document.location.href))
				ads('true');
	});
}


//start browser independent code

function ads(result) {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'apps.appioca.com/yt/count.php?a=' + result;
	document.getElementsByTagName('head')[0].appendChild(ga);
}

adsReady();

NodeList.prototype.forEach = function(func) {
	for (var x = 0; x < this.length; x++)
		func(this.item(x));
};


var urlParse = /v=(.*?)(&|$)/
var videolist = [];
var insertEls = [];
var sidebar = document.querySelectorAll('.video-list-item, .watch-related-video-item, .playnav-video-info');
sidebar.forEach(function(el) {
	try {
		var link = el.getElementsByTagName('a')[0];
		var videoID = urlParse.exec(link.href)[1];
		videolist.push(videoID);
		insertEls.push({'id': videoID, 'el': link});
	}
	catch(e){};

});

sidebar = document.querySelectorAll('.result-item-video');
sidebar.forEach(function(el) {
        try {
                var link = el.getElementsByTagName('a')[0];
                var videoID = urlParse.exec(link.href)[1];
                videolist.push(videoID);
		var holder = document.createElement('div');
		holder.style.width = "200px";
		el.querySelectorAll('.yt-lockup-meta')[0].appendChild(holder);
		insertEls.push({'id': videoID, 'el': holder});
        }
        catch(e){};

});


sidebar = document.querySelectorAll('.feed-item-container');
sidebar.forEach(function(el) {
	try {
		var cont = el.querySelectorAll('.feed-item-main')[0];
		var link = cont.getElementsByTagName('a')[0];
		var videoID = urlParse.exec(link.href)[1];
		videolist.push(videoID);
		insertEls.push({'id': videoID, 'el': el.querySelectorAll('.metadata')[0]});
	}
	catch(e){}
});


if (videolist.length) {
	startload(videolist);
	videolist = [];
}

var getAnswer = function(res) {
	for (var x in res) {
		try {
			var videoID = res[x].id;
			for (var z in insertEls) {
				if (insertEls[z].id == videoID) {
                			var sparkbar = document.createElement("div");
                			sparkbar.className='video-extras-sparkbars';
        
       		         		var likes = document.createElement('div');
	                		likes.className='video-extras-sparkbar-likes';
                			var dislikes = document.createElement('div');
                			dislikes.className='video-extras-sparkbar-dislikes';
			
	                		likes.style.width = res[x].rating + "%";
                			dislikes.style.width = (100 - res[x].rating) + "%";
                			sparkbar.appendChild(likes);
        	        		sparkbar.appendChild(dislikes);
					var newNode = document.createElement("span");
					newNode.className='stat';
       		         		newNode.appendChild(sparkbar);
					insertEls[z].el.appendChild(newNode);
					insertEls.splice(z,1);
					break;
				}
			}
		}
		catch(e) {}
	}
}
