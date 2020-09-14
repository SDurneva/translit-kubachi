// The file was created by Sonia Durneva on 10.08.2019
// It is based on similar convertion map-file by Anna Sorokina created for Abaza (8.12.2018).
function transliterate() {
	var input_text = document.getElementById("kubachi_text").value;
	var dialect = document.getElementById("dialect").value;
	var stress = document.getElementById("stress").checked;
	var punct = document.getElementById("punct").checked;
	var tab = document.getElementById("tab").checked;
	if (stress == true) {
		input_text = input_text.toLowerCase()
	}
	if (tab == true) {
		input_text = tabulate(input_text)
	}
	if (punct == true) {
		input_text = rm_punct(input_text)
	}
	if (dialect == "chirag") {
		var result_chir = chir2ipa(input_text);
		document.getElementById("output").style.display = "block";
		document.getElementById("tip").innerHTML = result_chir;
	} else if (dialect == "kubachi") {
		var result_kub = kub2ipa(input_text);
		document.getElementById("output").style.display = "block";
		document.getElementById("tip").innerHTML = result_kub;
	}
}

document.getElementById("transliterate").onclick = function() {
transliterate();
};

// from Kubachi cyrillic script to ipa notation
function kub2ipa(value) {
// vowels and stress
	value = value.replace(/а/g,"a")
	value = value.replace(/А/g,"á")
	value = value.replace(/е/g,"e")
	value = value.replace(/Е/g,"é")
	value = value.replace(/ё/g,"oˤ")
	value = value.replace(/Ё/g,"óˤ")
	value = value.replace(/и/g,"і")
	value = value.replace(/И/g,"í")
	value = value.replace(/о/g,"o")
	value = value.replace(/О/g,"ó")
	value = value.replace(/ы/g,"ɨ")
	value = value.replace(/Ы/g,"ɨ́́")
	value = value.replace(/э/g,"e")
	value = value.replace(/Э/g,"é")
	value = value.replace(/ю/g,"uˤ")
	value = value.replace(/Ю/g,"úˤ")
	value = value.replace(/я/g,"aˤ")
	value = value.replace(/Я/g,"áˤ")
	value = value.replace(/у/g,"u")
	value = value.replace(/У/g,"ú")
	value = value.toLowerCase()

  // convert triple consonants
  	value = value.replace(/ч1в/g,"č'ʷ")
  	value = value.replace(/чiв/g,"č'ʷ")
  	value = value.replace(/чӏв/g,"č'ʷ")
  	value = value.replace(/к1в/g,"k'ʷ")
  	value = value.replace(/кiв/g,"k'ʷ")
  	value = value.replace(/кӏв/g,"k'ʷ")
  	value = value.replace(/ккв/g,"kːʷ")
  	value = value.replace(/ччв/g,"čːʷ")

// convert double consonants
	value = value.replace(/г1/g,"ʡ")
	value = value.replace(/гi/g,"ʡ")
	value = value.replace(/гӏ/g,"ʡ")
	value = value.replace(/гъ/g,"ʁ")
	value = value.replace(/гь/g,"h")
  value = value.replace(/гв/g,"gʷ")
	value = value.replace(/к1/g,"k'")
	value = value.replace(/кi/g,"k'")
	value = value.replace(/кӏ/g,"k'")
	value = value.replace(/къ/g,"qː")
	value = value.replace(/кь/g,"q'")
  value = value.replace(/кк/g,"kː")
  value = value.replace(/кв/g,"kʷ")
  value = value.replace(/пп/g,"pː")
	value = value.replace(/п1/g,"p'")
	value = value.replace(/пӏ/g,"p'")
	value = value.replace(/пi/g,"p'")
  value = value.replace(/сс/g,"sː")
	value = value.replace(/т1/g,"t'")
	value = value.replace(/тi/g, "t'")
	value = value.replace(/тӏ/g, "t'")
  value = value.replace(/тт/g,"tː")
	value = value.replace(/хъ/g,"q")
	value = value.replace(/хь/g,"x")
	value = value.replace(/х1/g,"ħ")
	value = value.replace(/хi/g,"ħ")
	value = value.replace(/хӏ/g,"ħ")
	value = value.replace(/хх/g,"χː")
  value = value.replace(/хв/g,"xʷ")
	value = value.replace(/ц1/g,"c'")
	value = value.replace(/цi/g,"c'")
	value = value.replace(/цӏ/g,"c'")
  value = value.replace(/цц/g,"cː")
	value = value.replace(/ч1/g,"č'")
	value = value.replace(/чi/g,"č'")
  value = value.replace(/чӏ/g,"č'")
	value = value.replace(/чч/g,"čː")
  value = value.replace(/чв/g,"čʷ")
	value = value.replace(/шш/g,"šː")
  value = value.replace(/шв/g,"šʷ")

// convert consonants

  value = value.replace(/б/g,"b")
	value = value.replace(/в/g,"w")
	value = value.replace(/г/g,"g")
	value = value.replace(/д/g,"d")
	value = value.replace(/ж/g,"ž")
	value = value.replace(/з/g,"z")
	value = value.replace(/й/g,"j")
	value = value.replace(/к/g,"k")
  value = value.replace(/л/g,"l")
	value = value.replace(/м/g,"m")
	value = value.replace(/н/g,"n")
	value = value.replace(/п/g,"p")
	value = value.replace(/р/g,"r")
	value = value.replace(/с/g,"s")
	value = value.replace(/т/g,"t")
	value = value.replace(/ф/g,"f")
	value = value.replace(/х/g,"χ")
	value = value.replace(/ц/g,"c")
	value = value.replace(/ч/g,"č")
	value = value.replace(/ш/g,"š")
	value = value.replace(/щ/g,"šː")
	value = value.replace(/ъ/g,"ʔ")

//cyrillic i ti latin i
	value = value.replace(/і/g,"i")
return value
}


// from Chirag cyrillic script to ipa notation
function chir2ipa(value) {
// vowels and stress
	value = value.replace(/а/g,"a")
	value = value.replace(/А/g,"á")
	value = value.replace(/е/g,"e")
	value = value.replace(/Е/g,"é")
	value = value.replace(/ё/g,"o̰")
	value = value.replace(/Ё/g,"ó̰")
	value = value.replace(/и/g,"і")
	value = value.replace(/И/g,"í")
	value = value.replace(/о/g,"o")
	value = value.replace(/О/g,"ó")
	value = value.replace(/ы/g,"ɨ")
	value = value.replace(/Ы/g,"ɨ́́")
	value = value.replace(/э/g,"e")
	value = value.replace(/Э/g,"é")
	value = value.replace(/ю/g,"ṵ")
	value = value.replace(/Ю/g,"ṵ́")
	value = value.replace(/я/g,"a̰")
	value = value.replace(/Я/g,"á̰")
	value = value.replace(/у/g,"u")
	value = value.replace(/У/g,"ú")
	value = value.replace(/оь/g,"ṵ")
	value = value.toLowerCase()

	// convert quadruple consonants
		value = value.replace(/хьхь/g,"x")

  // convert triple consonants
  	value = value.replace(/ч1в/g,"č'ʷ")
  	value = value.replace(/чiв/g,"č'ʷ")
  	value = value.replace(/чӏв/g,"č'ʷ")
  	value = value.replace(/к1в/g,"k'ʷ")
  	value = value.replace(/кiв/g,"k'ʷ")
  	value = value.replace(/кӏв/g,"k'ʷ")
  	value = value.replace(/ккв/g,"kːʷ")
  	value = value.replace(/ччв/g,"čːʷ")

// convert double consonants
		value = value.replace(/г1/g,"ʡ")
		value = value.replace(/гi/g,"ʡ")
		value = value.replace(/гӏ/g,"ʡ")
		value = value.replace(/гъ/g,"ʁ")
		value = value.replace(/гь/g,"h")
  	value = value.replace(/гв/g,"gʷ")
		value = value.replace(/к1/g,"k'")
		value = value.replace(/кi/g,"k'")
		value = value.replace(/кӏ/g,"k'")
		value = value.replace(/къ/g,"qː")
		value = value.replace(/кь/g,"q'")
  	value = value.replace(/кк/g,"kː")
  	value = value.replace(/кв/g,"kʷ")
  	value = value.replace(/пп/g,"pː")
		value = value.replace(/п1/g,"p'")
		value = value.replace(/пӏ/g,"p'")
		value = value.replace(/пi/g,"p'")
  	value = value.replace(/сс/g,"sː")
		value = value.replace(/т1/g,"t'")
		value = value.replace(/тi/g, "t'")
		value = value.replace(/тӏ/g, "t'")
  	value = value.replace(/тт/g,"tː")
		value = value.replace(/хъ/g,"q")
		value = value.replace(/хь/g,"x")
		value = value.replace(/х1/g,"ħ")
		value = value.replace(/хi/g,"ħ")
		value = value.replace(/хӏ/g,"ħ")
		value = value.replace(/хх/g,"χː")
  	value = value.replace(/хв/g,"xʷ")
	value = value.replace(/ц1/g,"c'")
	value = value.replace(/цi/g,"c'")
	value = value.replace(/цӏ/g,"c'")
  	value = value.replace(/цц/g,"cː")
	value = value.replace(/ч1/g,"č'")
	value = value.replace(/чi/g,"č'")
  	value = value.replace(/чӏ/g,"č'")
	value = value.replace(/чч/g,"čː")
  	value = value.replace(/чв/g,"čʷ")
	value = value.replace(/шш/g,"šː")
  	value = value.replace(/шв/g,"šʷ")

// convert consonants

  	value = value.replace(/б/g,"b")
	value = value.replace(/в/g,"w")
	value = value.replace(/г/g,"g")
	value = value.replace(/д/g,"d")
	value = value.replace(/ж/g,"ž")
	value = value.replace(/з/g,"z")
	value = value.replace(/й/g,"j")
	value = value.replace(/к/g,"k")
  	value = value.replace(/л/g,"l")
	value = value.replace(/м/g,"m")
	value = value.replace(/н/g,"n")
	value = value.replace(/п/g,"p")
	value = value.replace(/р/g,"r")
	value = value.replace(/с/g,"s")
	value = value.replace(/т/g,"t")
	value = value.replace(/ф/g,"f")
	value = value.replace(/х/g,"χ")
	value = value.replace(/ц/g,"c")
	value = value.replace(/ч/g,"č")
	value = value.replace(/ш/g,"š")
	value = value.replace(/щ/g,"šː")
	value = value.replace(/ъ/g,"ʔ")

//cyrillic i ti latin i
	value = value.replace(/і/g,"i")
return value
}
// punctuation
function rm_punct(value) {
	value = value.replace(/[!")(@#$\[\]%^/\&_=—'*+,.:;<>»«?\\{}|~—]/g,"")
return value
}
// tabs
function tabulate(value) {
	value = value.replace(/\s/g,"	")
return value
}
