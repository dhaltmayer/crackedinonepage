window.onload = function(){
	var theURL = document.URL;
	var p2URL, p3URL, p4URL, p5URL;
	if (theURL.substring(theURL.length - 1, theURL.length) == "/"){
		p2URL = theURL.substring(0, theURL.length - 1) + "_p2/";
		p3URL = theURL.substring(0, theURL.length - 1) + "_p3/";
		p4URL = theURL.substring(0, theURL.length - 1) + "_p4/";
		p5URL = theURL.substring(0, theURL.length - 1) + "_p5/";
	}
	else {
		p2URL = theURL.substring(0, theURL.length - 5) + "_p2.html";
		p3URL = theURL.substring(0, theURL.length - 5) + "_p3.html";
		p4URL = theURL.substring(0, theURL.length - 5) + "_p4.html";
		p5URL = theURL.substring(0, theURL.length - 5) + "_p5.html";
	}

	var request2 = new XMLHttpRequest();
	var request3 = new XMLHttpRequest();
	var request4 = new XMLHttpRequest();
	var request5 = new XMLHttpRequest();

	request2.addEventListener("load", function(evt){
		console.log(evt);
	}, false);
	request3.addEventListener("load", function(evt){
		console.log(evt);
	}, false);
	request4.addEventListener("load", function(evt){
		console.log(evt);
	}, false);
	request5.addEventListener("load", function(evt){
		console.log(evt);
	}, false);

	var x = document.getElementsByTagName('section');
	var bodysection;

	for (var i=0; i < 6; i++){
		if (x[i].className == "body"){
			bodysection = x[i];
		}
	}
	var p1content = bodysection.getElementsByTagName('section')[0];
	var p2content, p3content, p4content, p5content;

	request2.onreadystatechange=function(){
		if (request2.readyState==4 && request2.status==200){
			var page2 = request2.response;
			var x2 = page2.getElementsByTagName('section');
			var bodysection2;

			for (var i=0; i < 6; i++){
				if (x2[i].className == "body"){
					bodysection2 = x2[i];
				}
			}
			p2content = bodysection2.getElementsByTagName('section')[0];
			var newbody = p1content.innerHTML + p2content.innerHTML;
			
			request3.onreadystatechange=function(){
				if (request3.readyState==4 && request3.status==200){
					var page3 = request3.response;
					var x3 = page3.getElementsByTagName('section');
					var bodysection3;

					for (var i=0; i < 6; i++){
						if (x3[i].className == "body"){
							bodysection3 = x3[i];
						}
					}
					p3content = bodysection3.getElementsByTagName('section')[0];
					newbody = newbody + p3content.innerHTML;
				}
			}
			
			request4.onreadystatechange=function(){
				if (request4.readyState==4 && request4.status==200){
					var page4 = request4.response;
					var x4 = page4.getElementsByTagName('section');
					var bodysection4;

					for (var i=0; i < 6; i++){
						if (x4[i].className == "body"){
							bodysection4 = x4[i];
						}
					}
					p4content = bodysection4.getElementsByTagName('section')[0];
					newbody = newbody + p4content.innerHTML;
				}
			}
			
			request5.onreadystatechange=function(){
				if (request5.readyState==4 && request5.status==200){
					var page5 = request5.response;
					var x5 = page5.getElementsByTagName('section');
					var bodysection5;

					for (var i=0; i < 6; i++){
						if (x5[i].className == "body"){
							bodysection5 = x5[i];
						}
					}
					p5content = bodysection5.getElementsByTagName('section')[0];
					newbody = newbody + p5content.innerHTML;
				}
				
				p1content.innerHTML = newbody;
			
				// fix images that don't show up because of stupid use of data-img propertyx
				document.body.innerHTML = document.body.innerHTML.replace(/data-img/g,'src');
			}
			
		}
	}
  
	request2.open('GET', p2URL, true);
	request2.responseType = "document";
	request2.send();
	request3.open('GET', p3URL, true);
	request3.responseType = "document";
	request3.send();
	request4.open('GET', p4URL, true);
	request4.responseType = "document";
	request4.send();
	request5.open('GET', p5URL, true);
	request5.responseType = "document";
	request5.send();

}