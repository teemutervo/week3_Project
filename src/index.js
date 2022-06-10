import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {});
}

function initializeCode() {
  const body = document.querySelector("body");
  const div2 = document.createElement("div");
  div2.classList.add("container");
  body.appendChild(div2);
  for (var i = 0; i < 5; i += 1) {
    const div = document.createElement("div");
    const divtext = document.createElement("div");
    const divpic = document.createElement("div");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const img = document.createElement("img");

    img.classList.add("wiki-img");
    img.src = "wiki-osoite tähän";
    divpic.classList.add("img-container");
    divtext.classList.add("wiki-content");
    p.classList.add("wiki-text");
    div.classList.add("wiki-item");
    h1.classList.add("wiki-header");
    divpic.appendChild(img);
    div.appendChild(h1);
    div.appendChild(divtext);

    divtext.appendChild(p);
    divtext.appendChild(divpic);
    div2.appendChild(div);
    document.querySelector("h1").innerHTML = "Breed X";
    document.querySelector("p").innerHTML = "Some text about this breed";
  }
}
