//verilen ededin kok altini tapmaq
function myFunction() {
  var x = document.getElementById("Navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

document.write("<h3>Bu funksiya ile ədədin kök altısıni tapmaq olur</h3>");
var x;
x = Math.sqrt(625);
document.write(`<h1>${x}</h1>`);
document.write("<br>");

var x;
x = Math.sqrt(225);
document.write(`<h1>${x}</h1>`);
document.write("<br>");

var x;
x = Math.sqrt(81);
document.write(`<h1>${x}</h1>`);
document.write("<br>");
//Math.abs funksiyası ədədin modulunu tapmaq üçün istifadə olunur.
document.write(
  "<h3>Bu funksiya ədədin modulunu tapmaq üçün istifadə olunur</h3> "
);
var x;
x = Math.abs(-5);
console.log(x);
document.write(`<h1>${x}</h1>`);
document.write("<br>");
x = Math.abs(-9);
console.log(x);
document.write(`<h1>${x}</h1>`);
document.write("<br>");
document.write(
  "<h3>Ədədi ən yaxın yuxarı tam ədədə yuvarlaqlaşdırmaq üçün istifadə olunur </h3>"
);
var x;
x = Math.ceil(4.3);
document.write(`<h1>${x}</h1>`);
document.write("<br>");

document.write(
  "<h3>Daxil edilmiş ədədlərdən ən kiçiyini tapmaq üçün istifadə olunur</h3>"
);
var x;
x = Math.min(9, 4, 3, 15);
document.write(`<h1>${x}</h1>`);
document.write("<br>");

//ededin quvveti bele hesablanir
document.write("<h3>Bir ədədi qüvvətə yüksəltmək üçün istifadə olunur</h3>");
var x;
x = Math.pow(6, 3);
document.write(`<h1>${x}</h1>`);
document.write("<br>");

//Ədədi ən yaxın aşağı tam ədədə yuvarlaqlaşdırmaq üçün istifadə olunur.
document.write(
  "<h3>Ədədi ən yaxın aşağı tam ədədə yuvarlaqlaşdırmaq üçün istifadə olunur</h3>"
);
var x;
x = Math.floor(2.6);
document.write(`<h1>${x}</h1>`);
document.write("<br>");
//Daxil edilmiş ədədlərdən ən böyüyünü tapmaq üçün
document.write("<h3>Daxil edilmiş ədədlərdən ən böyüyünü tapmaq üçün </h3>");
var x;
x = Math.max(5, 4, 7, 8);
document.write(`<h1>${x}</h1>`);
document.write("<br>");
//Ədədi ən yaxın tam ədədə yuvarlaqlaşdırmaq
document.write("<h3>Ədədi ən yaxın tam ədədə yuvarlaqlaşdırmaq </h3>");
var x;
x = Math.round(4.6);
document.write(`<h1>${x}</h1>`);
document.write("<br>");
