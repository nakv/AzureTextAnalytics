const languageData = `Tiếng Ả Rập	ar-XA	Tiếng Bungari	bg
Tiếng Croatia	hr	Tiếng Séc	cs
Tiếng Đan Mạch	da	Tiếng Đức	de
Tiếng Hy Lạp	el	Tiếng Anh	en
Tiếng Estonia	et	Tiếng Tây Ban Nha	es
Tiếng Phần Lan	fi	Tiếng Pháp	fr
Tiếng Ai-len	ga	Tiếng Hindi	hi
Tiếng Hungary	hu	Tiếng Do Thái	he
Tiếng Ý	it	Tiếng Nhật Bản	ja
Tiếng Hàn	ko	Tiếng Latvia	lv
Tiếng Lithuania	lt	Tiếng Hà Lan	nl
Tiếng Na Uy	no	Tiếng Ba Lan	pl
Tiếng Bồ Đào Nha	pt	Tiếng Thụy Điển	sv
Tiếng Rumani	ro	Tiếng Nga	ru
Tiếng Serbia	sr-CS	Tiếng Slovak	sk
Tiếng Slovenia	sl	Tiếng Thái	th
Tiếng Thổ Nhĩ Kỳ	tr	Tiếng Ukraina	uk-UA
Tiếng Trung (Giản thể)	zh-chs	Tiếng Trung (Phồn thể)	zh-cht`;

const languageLines = languageData.split("\n");
let optionsHTML = "";

languageLines.forEach((line) => {
  const [languageName, languageCode] = line.split("\t");
  optionsHTML += `<option value="${languageCode}">${languageName}</option>`;
});

const languageSelect = document.getElementById("languageSelect");
languageSelect.innerHTML = optionsHTML;
