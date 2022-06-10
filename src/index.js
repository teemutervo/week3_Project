import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {});
}
//Doge1
function initializeCode() {
  const body = document.querySelector("body");
  const div2 = document.createElement("div");
  div2.classList.add("container");
  body.appendChild(div2);

  const div = document.createElement("div");
  const divtext = document.createElement("div");
  const divpic = document.createElement("div");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const img = document.createElement("img");

  img.classList.add("wiki-img");
  img.src = "https://images.dog.ceo/breeds/schipperke/n02104365_3826.jpg";
  divpic.classList.add("img-container");
  divtext.classList.add("wiki-content");
  p.classList.add("wiki-text");
  div.classList.add("wiki-item");
  h1.classList.add("wiki-header");
  h1.id = "doggo1";
  p.id = "doggo1text";
  divpic.appendChild(img);
  div.appendChild(h1);
  div.appendChild(divtext);

  divtext.appendChild(p);
  divtext.appendChild(divpic);
  div2.appendChild(div);
  document.getElementById("doggo1").innerHTML = "Schipperke";
  document.querySelector("p").innerHTML = "Funny looking dawg";

  //Doge2

  const div1 = document.createElement("div");
  const divtext1 = document.createElement("div");
  const divpic1 = document.createElement("div");
  const h11 = document.createElement("h1");
  const p1 = document.createElement("p");
  const img1 = document.createElement("img");

  img1.classList.add("wiki-img");
  img1.src = "https://images.dog.ceo/breeds/entlebucher/n02108000_261.jpg";
  divpic1.classList.add("img-container");
  divtext1.classList.add("wiki-content");
  p1.classList.add("wiki-text");
  div1.classList.add("wiki-item");
  h11.classList.add("wiki-header");
  h11.id = "doggo2";
  p1.id = "doggo2text";
  divpic1.appendChild(img1);
  div1.appendChild(h11);
  div1.appendChild(divtext1);

  divtext1.appendChild(p1);
  divtext1.appendChild(divpic1);
  div2.appendChild(div1);
  document.getElementById("doggo2").innerHTML = "Entlebucher";
  document.getElementById("doggo2text").innerHTML =
    "Suspiciuos-looking dog animal";

  //Doge3

  const div22 = document.createElement("div");
  const divtext2 = document.createElement("div");
  const divpic2 = document.createElement("div");
  const h12 = document.createElement("h1");
  const p2 = document.createElement("p");
  const img2 = document.createElement("img");

  img2.classList.add("wiki-img");
  img2.src = "https://images.dog.ceo/breeds/komondor/n02105505_3380.jpg";
  divpic2.classList.add("img-container");
  divtext2.classList.add("wiki-content");
  p2.classList.add("wiki-text");
  div22.classList.add("wiki-item");
  h12.classList.add("wiki-header");
  h12.id = "doggo3";
  p2.id = "doggo3text";
  divpic2.appendChild(img2);
  div2.appendChild(h12);
  div2.appendChild(divtext2);

  divtext2.appendChild(p2);
  divtext2.appendChild(divpic2);
  div2.appendChild(div22);
  document.getElementById("doggo3").innerHTML = "Komondor";
  document.getElementById("doggo3text").innerHTML = "Summer loving boii";

  //Doge4

  const div32 = document.createElement("div");
  const divtext3 = document.createElement("div");
  const divpic3 = document.createElement("div");
  const h13 = document.createElement("h1");
  const p3 = document.createElement("p");
  const img3 = document.createElement("img");

  img3.classList.add("wiki-img");
  img3.src = "https://images.dog.ceo/breeds/sharpei/noel.jpg";
  divpic3.classList.add("img-container");
  divtext3.classList.add("wiki-content");
  p3.classList.add("wiki-text");
  div32.classList.add("wiki-item");
  h13.classList.add("wiki-header");
  h13.id = "doggo4";
  p3.id = "doggo4text";
  divpic3.appendChild(img3);
  div32.appendChild(h13);
  div32.appendChild(divtext3);

  divtext3.appendChild(p3);
  divtext3.appendChild(divpic3);
  div2.appendChild(div32);
  document.getElementById("doggo4").innerHTML = "Sharpei";
  document.getElementById("doggo4text").innerHTML = "Family dog";

  //Doge5

  const div42 = document.createElement("div");
  const divtext4 = document.createElement("div");
  const divpic4 = document.createElement("div");
  const h14 = document.createElement("h1");
  const p4 = document.createElement("p");
  const img4 = document.createElement("img");

  img4.classList.add("wiki-img");
  img4.src = "https://images.dog.ceo/breeds/germanshepherd/n02106662_15858.jpg";
  divpic4.classList.add("img-container");
  divtext4.classList.add("wiki-content");
  p4.classList.add("wiki-text");
  div42.classList.add("wiki-item");
  h14.classList.add("wiki-header");
  h14.id = "doggo5";
  p4.id = "doggo5text";
  divpic4.appendChild(img4);
  div42.appendChild(h14);
  div42.appendChild(divtext4);

  divtext4.appendChild(p4);
  divtext4.appendChild(divpic4);
  div2.appendChild(div42);
  document.getElementById("doggo5").innerHTML = "Germanshephard";
  document.getElementById("doggo5text").innerHTML = "Blood thirsty war dog";
}
