// script.js

// Örnek tarif verileri
const tarifler = {
  "mercimek-corbasi": {
    baslik: "Mercimek Çorbası",
    resim: "img/corba1.jpg",
    malzemeler: [
      "1 su bardağı kırmızı mercimek",
      "1 adet soğan",
      "2 yemek kaşığı tereyağı",
      "1 tatlı kaşığı salça",
      "6 su bardağı su veya et suyu",
      "Tuz, karabiber"
    ],
    yapilis: "Soğanı yemeklik doğrayıp tereyağında kavurun. Salçayı ekleyip karıştırın. Yıkanmış mercimeği ilave edin, suyunu ekleyin. Mercimekler yumuşayana kadar pişirin. Blender ile pürüzsüz hale getirin. Tuz ve karabiber ekleyip karıştırın. Sıcak servis yapın."
  },
  "karniyarik": {
    baslik: "Karnıyarık",
    resim: "img/yemek1.jpg",
    malzemeler: [
      "5 adet orta boy patlıcan",
      "300 gr kıyma",
      "1 adet soğan",
      "2 diş sarımsak",
      "2 adet domates",
      "2 adet yeşil biber",
      "Tuz, karabiber, pul biber"
    ],
    yapilis: "Patlıcanları alacalı soyup kızgın yağda kızartın. Soğan ve sarımsağı kavurun, kıymayı ekleyip kavurmaya devam edin. Domates ve biberleri doğrayıp ekleyin, baharatları katın. Patlıcanların ortasını açıp iç harcı doldurun. Fırında 180°C'de 25 dakika pişirin."
  },
  // Diğer tarifler de burada tanımlanabilir...
};

function getParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function displayTarif(tarifKey) {
  const tarif = tarifler[tarifKey];
  if (!tarif) {
    document.getElementById("tarif-baslik").textContent = "Tarif Bulunamadı";
    document.getElementById("tarif-resim").style.display = "none";
    document.getElementById("malzeme-listesi").innerHTML = "<li>Üzgünüz, aradığınız tarif bulunamadı.</li>";
    document.getElementById("yapilis-adimlari").textContent = "";
    return;
  }
  
  document.getElementById("tarif-baslik").textContent = tarif.baslik;
  const resimElem = document.getElementById("tarif-resim");
  resimElem.src = tarif.resim;
  resimElem.alt = tarif.baslik;
  
  const malzemeListesi = document.getElementById("malzeme-listesi");
  malzemeListesi.innerHTML = "";
  tarif.malzemeler.forEach(malzeme => {
    const li = document.createElement("li");
    li.textContent = malzeme;
    malzemeListesi.appendChild(li);
  });
  
  document.getElementById("yapilis-adimlari").textContent = tarif.yapilis;
}

// Sayfa yüklendiğinde çalışır
window.addEventListener("DOMContentLoaded", () => {
  const tarifKey = getParam("tarif");
  displayTarif(tarifKey);
});
