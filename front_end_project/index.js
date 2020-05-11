window.onload = function(){
	var oInput = document.getElementById("search-input")
	var oUl = document.getElementById("search-suggest")
	oInput.addEventListener("keyup", showSearchSuggest, false)
	oInput.addEventListener("focus", showSearchSuggest, false)
	oInput.addEventListener("blur", hideSearchSuggest, false)

	function showSearchSuggest(){
		if(oInput.value!==""){
			oUl.style.display="block";
		}
	}

	function hideSearchSuggest(){
		oUl.style.display="none";
	}
}