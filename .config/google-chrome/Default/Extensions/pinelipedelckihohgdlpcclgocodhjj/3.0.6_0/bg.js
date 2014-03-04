//-------------------------
var MAJOR_VERSION = "3.0.6";	

	if(localStorage.getItem('version') && (localStorage.getItem('version') != MAJOR_VERSION)){
		localStorage.setItem('version',MAJOR_VERSION);
		var notification = window.webkitNotifications.createNotification(
		        'icon-48.png', '4chan Plus™', 'I know you are mad at me for not fixing 4chan earlier. I apologize and here is a fixed version for you. Enjoy!');	
		notification.addEventListener('click', function() {
		    notification.cancel();
		    window.open("options.html")
		})
		notification.show();	
		setTimeout(function(){
			notification.cancel();
		},6000);
	
	}
    if(!localStorage.getItem('version')){
	    localStorage.setItem('version',MAJOR_VERSION);	    
    }