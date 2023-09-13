/*** componentes principales ***/

fetch("style/style.css")
  .then((response) => response.text())
  .then((style) => {
    document.getElementById("style").innerHTML = style;
  });

fetch("components/header.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("header").innerHTML = html;
  });

fetch("components/footer.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("footer").innerHTML = html;
  });

/*** componentes btn ***/

fetch("btn/save.html")
  .then((response) => response.text())
  .then((html) => {
    let elementos = document.querySelectorAll(".save");
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].innerHTML = html;
    }
  });

fetch("btn/back.html")
  .then((response) => response.text())
  .then((html) => {
    let elementos = document.querySelectorAll(".back");
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].innerHTML = html;
    }
  });

fetch("btn/check.html")
  .then((response) => response.text())
  .then((html) => {
    let elementos = document.querySelectorAll(".check");
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].innerHTML = html;
    }
  });

fetch("btn/plus.html")
  .then((response) => response.text())
  .then((html) => {
    let elementos = document.querySelectorAll(".plus");
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].innerHTML = html;
    }
  });

fetch("btn/cancel.html")
  .then((response) => response.text())
  .then((html) => {
    let elementos = document.querySelectorAll(".cancel");
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].innerHTML = html;
    }
  });

fetch("btn/search.html")
  .then((response) => response.text())
  .then((html) => {
    let elementos = document.querySelectorAll(".search");
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].innerHTML = html;
    }
  });
