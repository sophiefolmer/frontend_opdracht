function filterContent() {

	var buttonWit = document.querySelector(".buttonwit");
	var witImages = document.querySelector(".blazerimgwit");
	var rozeImages = document.querySelector(".blazerimgroze");

	if (buttonWit.clicked == true) {
		
		witImages.style.display = "block";
		rozeImages.style.display = "none";
	}
}


filterContent ();