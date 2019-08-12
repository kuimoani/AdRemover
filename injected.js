console.log("===== Youtube Ad Remover is started. =====");

function removeAds() {
	//close ad movie
	if(document.getElementsByClassName("ytp-ad-skip-button").length > 0){
		document.getElementsByClassName("ytp-ad-skip-button")[0].click();
		console.log("Removed ad movie!!");
	}
	
	//close ad banner
	if(document.getElementsByClassName("ytp-ad-overlay-close-button").length > 0){
		document.getElementsByClassName("ytp-ad-overlay-close-button")[0].click();
		console.log("Removed ad banner!!");
	}
}

window.addEventListener("load", function(){
	console.log("window.addEventListener load");
	//=============== show caption working well
	//position: absolute; left:0px; top:0px; border: 2px solid red;color:red;z-index:9990;
	var ele = document.createElement("div");
	ele.style.position = "fixed";
	ele.style.border = "solid 2px red";
	ele.style.color = "red";
	ele.style.zIndex = "9999";
	var node = document.createTextNode("Youtube Ad Remover is working.");
	ele.appendChild(node);
	document.body.appendChild(ele);

	//==============
	var eleApp = document.getElementsByTagName("ytd-app")[0];
	eleApp.addEventListener("DOMSubtreeModified", function(){
		console.log("ytd-app DOMSubtreeModified");
		
		//=============== remove ads
		var ele = document.getElementsByClassName("video-ads ytp-ad-module");
		if(ele.length == 0) {
			console.error("Cannot find ad element!.");
			return;
		}
		
		//DOMSubtreeModified, DOMNodeRemoved
		ele[0].removeEventListener("DOMNodeInserted", removeAds);
		ele[0].addEventListener("DOMNodeInserted", removeAds);
	});
});
