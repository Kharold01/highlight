
function highlightAllCode() {
	var pres = document.body.getElementsByTagName("pre");
	for (var i = 0; i < pres.length; i++) {
		var pre = pres[i];
		var lang = pre.getAttribute("data-language");
		if (languages.hasOwnProperty(lang))
			highlightCode(pre, languages[lang]);
	}
}
