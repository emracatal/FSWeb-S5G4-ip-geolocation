//axios import buraya gelecek
import axios from "axios";
var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/ipadresim
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/
console.log("BAŞLA");
const response = axios.get("https://apis.ergineer.com/ipgeoapi/176.88.137.149");
console.log(response);
console.log("BİTİR");

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.

	https://flagsapi.com/TR/flat/64.png
*/

/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	NOT: API'den gelen bayrak url'i çalışmazsa alternatif olarak: https://flagsapi.com/ https://flagsapi.com/TR/flat/64.png
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/
/* function cardCreate(dizi) {
  const cardDiv = document.createElement("div");
  cardDiv.setAttribute("class", "card");

  const flagImg = document.createElement("img");
  flagImg.setAttribute("src", "https://flagsapi.com/TR/flat/64.png");
  
  const cardInfoDiv = document.createElement("div");
  cardInfoDiv.setAttribute("class", "card-info");

  const 


}
cardCreate(response.data); */
/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek

const myCard = (dataDizi) => {
  const cardInfo = `<div class="card">
	<img src="https://flagsapi.com/TR/flat/64.png" />
	<div class="card-info">
		<h3 class="ip">${dataDizi["sorgu"]}</h3>
		<p class="ulke">${dataDizi["ülke"]}${dataDizi["ülkeKodu"]}</p>
		<p>Enlem: ${dataDizi["enlem"]} Boylam: ${dataDizi["boylam"]}</p>
		<p>Şehir: ${dataDizi["şehir"]}</p>
		<p>Saat dilimi: ${dataDizi["saatdilimi"]}</p>
		<p>Para birimi: ${dataDizi["parabirimi"]}</p>
		<p>ISP: ${dataDizi["isp"]}</p>
	</div>
    </div>
`;
  return cardInfo;
};

document.querySelector(".cards").innerHTML = myCard(response.data);
