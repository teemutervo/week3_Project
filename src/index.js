//Ensimmäisen koirulin koodia on sortattu, mutta neljä muuta saattaa olla hieman epäselviä.
//Kaikki kuitenkin kopioita toisistaan.

import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {});
}

// Ensimmäinen koira

async function initializeCode() {
  async function dogBreed1() {
    let url = "https://dog.ceo/api/breed/schipperke/images/random";
    let response = await fetch(url);
    let dogBreed = await response.json();
    let dogUrl = dogBreed.message;
    return dogUrl;
  }

  async function dogDescription1() {
    let url =
      "https://en.wikipedia.org/api/rest_v1/page/summary/Schipperke?redirect=false";
    let response = await fetch(url);
    let dogBreed = await response.json();
    let dogText = dogBreed.extract;
    console.log(dogBreed);
    return dogText;
  }

  let dogetype1 = await dogBreed1();
  let dogSummary1 = await dogDescription1();

  const body = document.querySelector("body");
  const divMain = document.createElement("div"); //divMainin alle tulee kaikki muut elementit
  divMain.classList.add("container");
  body.appendChild(divMain); //Koko paketti lisätää bodyn alle

  const div = document.createElement("div"); //Tämä on Wiki-item           class.wiki-item
  const divtext = document.createElement("div"); //Tähän kaikki per koira      class.wiki-content
  const divpic = document.createElement("div"); //Tähän kuvakontainer         class.img-container
  const h1 = document.createElement("h1"); //Tähän koiran nimi otsikkona class.wiki-header
  const p = document.createElement("p"); //Tähän koiran esittelyteksti class.wiki-text
  const img = document.createElement("img"); //Tähän koiran kuva           class.wiki-img

  img.classList.add("wiki-img");
  img.src = dogetype1;
  divpic.classList.add("img-container"); //Annetaan ylläoleville muuttujille luokat
  divtext.classList.add("wiki-content");
  p.classList.add("wiki-text");
  div.classList.add("wiki-item");
  h1.classList.add("wiki-header");

  h1.id = "doggo1"; //Otsikoille ja kappaleille id:t, koska ei voi muuten viitata samassa luokassa oleviin eri elementteihin
  p.id = "doggo1text";

  //Luodaan hierarkia eli mitkä elementit menevät minkäkin alle
  divMain.appendChild(div);
  div.appendChild(h1);
  div.appendChild(divtext);
  divtext.appendChild(p);
  divtext.appendChild(divpic);
  divpic.appendChild(img);

  document.getElementById("doggo1").innerHTML = "Schipperke"; //Nimetään otsikko ja laitetaan teksti kappaleeseen
  document.getElementById("doggo1text").innerHTML = dogSummary1;

  // Toinen koira alkaa tästä

  async function dogBreed2() {
    let url = "https://dog.ceo/api/breed/entlebucher/images/random";
    let response = await fetch(url);
    let dogBreed = await response.json();
    let dogUrl = dogBreed.message;
    return dogUrl;
  }

  async function dogDescription2() {
    let url =
      "https://en.wikipedia.org/api/rest_v1/page/summary/Entlebucher?redirect=false";
    let response = await fetch(url);
    let dogBreed = await response.json();
    let dogText = dogBreed.extract;
    return dogText;
  }

  let dogetype2 = await dogBreed2();
  let dogSummary2 = await dogDescription2();

  const div1 = document.createElement("div");
  const divtext1 = document.createElement("div");
  const divpic1 = document.createElement("div");
  const h11 = document.createElement("h1");
  const p1 = document.createElement("p");
  const img1 = document.createElement("img");

  img1.classList.add("wiki-img");
  img1.src = dogetype2;
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
  divMain.appendChild(div1);
  document.getElementById("doggo2").innerHTML = "Entlebucher";
  document.getElementById("doggo2text").innerHTML = dogSummary2;

  // Kolmas koira

  async function dogBreed3() {
    let url = "https://dog.ceo/api/breed/komondor/images/random";
    let response = await fetch(url);
    let dogBreed = await response.json();
    let dogUrl = dogBreed.message;
    return dogUrl;
  }

  async function dogDescription3() {
    let url =
      "https://en.wikipedia.org/api/rest_v1/page/summary/komondor?redirect=false";
    let response = await fetch(url);
    let dogBreed = await response.json();
    let dogText = dogBreed.extract;
    return dogText;
  }

  let dogetype3 = await dogBreed3();
  let dogSummary3 = await dogDescription3();

  const div22 = document.createElement("div");
  const divtext2 = document.createElement("div");
  const divpic2 = document.createElement("div");
  const h12 = document.createElement("h1");
  const p2 = document.createElement("p");
  const img2 = document.createElement("img");

  img2.classList.add("wiki-img");
  img2.src = dogetype3;
  divpic2.classList.add("img-container");
  divtext2.classList.add("wiki-content");
  p2.classList.add("wiki-text");
  div22.classList.add("wiki-item");
  h12.classList.add("wiki-header");
  h12.id = "doggo3";
  p2.id = "doggo3text";
  divpic2.appendChild(img2);
  div22.appendChild(h12);
  div22.appendChild(divtext2);

  divtext2.appendChild(p2);
  divtext2.appendChild(divpic2);
  divMain.appendChild(div22);
  document.getElementById("doggo3").innerHTML = "Komondor";
  document.getElementById("doggo3text").innerHTML = dogSummary3;
  //Neljäs koira

  async function dogBreed4() {
    let url = "https://dog.ceo/api/breed/boxer/images/random";
    let response = await fetch(url);
    let dogBreed = await response.json();
    let dogUrl = dogBreed.message;
    return dogUrl;
  }

  async function dogDescription4() {
    let url =
      "https://en.wikipedia.org/api/rest_v1/page/summary/boxer?redirect=false";
    let response = await fetch(url);
    let dogBreed = await response.json();
    let dogText = dogBreed.extract;
    return dogText;
  }

  let dogetype4 = await dogBreed4();
  let dogSummary4 = await dogDescription4();

  const div32 = document.createElement("div");
  const divtext3 = document.createElement("div");
  const divpic3 = document.createElement("div");
  const h13 = document.createElement("h1");
  const p3 = document.createElement("p");
  const img3 = document.createElement("img");

  img3.classList.add("wiki-img");
  img3.src = dogetype4;
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
  divMain.appendChild(div32);
  document.getElementById("doggo4").innerHTML = "Boxer";
  document.getElementById("doggo4text").innerHTML = dogSummary4;

  // Viides koira

  async function dogBreed5() {
    let url = "https://dog.ceo/api/breed/germanshepherd/images/random";
    let response = await fetch(url);
    let dogBreed = await response.json();
    let dogUrl = dogBreed.message;
    return dogUrl;
  }

  async function dogDescription5() {
    let url =
      "https://en.wikipedia.org/api/rest_v1/page/summary/German%20Shepherd?redirect=false";
    let response = await fetch(url);
    let dogBreed = await response.json();
    let dogText = dogBreed.extract;
    return dogText;
  }

  let dogetype5 = await dogBreed5();
  let dogSummary5 = await dogDescription5();

  const div42 = document.createElement("div");
  const divtext4 = document.createElement("div");
  const divpic4 = document.createElement("div");
  const h14 = document.createElement("h1");
  const p4 = document.createElement("p");
  const img4 = document.createElement("img");

  img4.classList.add("wiki-img");
  img4.src = dogetype5;
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
  divMain.appendChild(div42);
  document.getElementById("doggo5").innerHTML = "Germanshephard";
  document.getElementById("doggo5text").innerHTML = dogSummary5;
}
