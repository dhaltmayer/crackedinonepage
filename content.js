window.onload = function(){
	var theURL = document.URL;
	var p2URL;
	if (theURL.substring(theURL.length - 1, theURL.length) == "/"){
		p2URL = theURL.substring(0, theURL.length - 1) + "_p2/";
	}
	else {
		p2URL = theURL.substring(0, theURL.length - 5) + "_p2.html";
	}

	var request = new XMLHttpRequest();

	request.addEventListener("load", function(evt){
		console.log(evt);
	}, false);


	request.onreadystatechange=function(){
		if (request.readyState==4 && request.status==200){
			var page2 = request.response;
			var x2 = page2.getElementsByTagName('section');
			var bodysection2;

			for (var i=0; i < 6; i++){
				if (x2[i].className == "body"){
					bodysection2 = x2[i];
				}
			}
			var p2content = bodysection2.getElementsByTagName('section')[0];
		
			var x = document.getElementsByTagName('section');
			var bodysection;

			for (var i=0; i < 6; i++){
				if (x[i].className == "body"){
					bodysection = x[i];
				}
			}
			var p1content = bodysection.getElementsByTagName('section')[0];
		
			p1content.innerHTML = p1content.innerHTML + p2content.innerHTML;
		
		}
	}
  
	request.open('GET', p2URL, true);
	request.responseType = "document";
	request.send();

}