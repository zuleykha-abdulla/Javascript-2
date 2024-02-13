var x, y;
x = prompt("Birinci məhsulun pulu");
y = prompt("İkinci məhsulun pulu");
z = prompt("Üçüncü məhsulun pulu");
d = prompt("Dördüncü məsulun pulu");
alert(x * 1 + y * 1 + z * 1 + d * 1);

document.write("<br>");
//luget tertibi
var soz;
soz = prompt("Sozu daxil edin:");
if (soz == "apple") {
  alert("Alma");
}
if (soz == "orange") {
  alert("Portagal");
}
if (soz == "smart") {
  alert("Ağıllı");
}

//riyaziyyat emeliyyati
var x, y;
x = prompt("Ededi daxil edin");
y = prompt(
  "Emeliyyati daxil edin. 1- kok alti, 2 kvadrat, 3 natural loqarifma"
);
if (y == 1) {
  alert(Math.sqrt(x));
}
if (y == 2) {
  alert(Math.pow(x, 2));
}
if (y == 3) {
  alert(Math.log(x));
}
