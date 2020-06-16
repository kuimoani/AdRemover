console.log("===== Youtube Ad Remover is started. =====");

function removeAds() {
	console.log("div.video-ads.ytp-ad-module DOMNodeInserted");

	//close ad movie
	var btnSkip = document.querySelector(".ytp-ad-skip-button");
	if(btnSkip != null){
		btnSkip.click();
		console.log("Removed ad movie!!");
	}
	
	//close ad banner
	var btnClose = document.querySelector(".ytp-ad-overlay-close-button");
	if(btnClose != null){
		btnClose.click();
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

	//=============== remove ads
	var eleApp = document.querySelector("div.video-ads.ytp-ad-module");
	eleApp.addEventListener("DOMNodeInserted", removeAds);	//DOMSubtreeModified DOMNodeInserted
});
