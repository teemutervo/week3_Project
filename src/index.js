//Ensimmäisen koirulin koodia on sortattu, mutta neljä muuta saattaa olla hieman epäselviä.
//Kaikki kuitenkin kopioita toisistaan.

import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {});
}

// Ensimmäinen koira

function initializeCode() {
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
  img.src = "https://images.dog.ceo/breeds/schipperke/n02104365_3826.jpg";
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

  document.getElementById("doggo1").innerHTML = "schipperke"; //Nimetään otsikko ja laitetaan teksti kappaleeseen
  document.getElementById("doggo1text").innerHTML =
    "A Schipperke  is a small breed of dog that originated since the 1600's in Belgium. There has been a long informal debate over whether this type of dog is a spitz or miniature sheepdog. In their home country of Belgium they are considered a small shepherd. DNA research has shown that Schipperkes have a close relationship to the Spitz family of dog breeds.";

  // Toinen koira alkaa tästä

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
  divMain.appendChild(div1);
  document.getElementById("doggo2").innerHTML = "entlebucher";
  document.getElementById("doggo2text").innerHTML =
    "The Entlebucher Sennenhund or Entlebucher Mountain Dog is a medium-sized herding dog, it is the smallest of the four regional breeds that constitute the Sennenhund dog type. The name Sennenhund refers to people called Senn, herders in the Swiss Alps. Entlebuch is a region in the canton of Lucerne in Switzerland. The breed is also known in English as the Entelbuch Mountain Dog, Entelbucher Cattle Dog, and similar combinations.";

  // Kolmas koira

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
  div22.appendChild(h12);
  div22.appendChild(divtext2);

  divtext2.appendChild(p2);
  divtext2.appendChild(divpic2);
  divMain.appendChild(div22);
  document.getElementById("doggo3").innerHTML = "komondor";
  document.getElementById("doggo3text").innerHTML =
    "The Komondor also known as the Hungarian sheepdog, is a large, white-coloured Hungarian breed of livestock guardian dog with a long, corded coat.";

  //Neljäs koira

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
  divMain.appendChild(div32);
  document.getElementById("doggo4").innerHTML = "sharpei";
  document.getElementById("doggo4text").innerHTML =
    "The Shar Pei (Cantonese: shā pèih or Mandarin: 沙皮 shā pí) is a dog breed from southern China. Traditionally kept as a watchdog and property guardian, the Shar Pei was driven to the brink of extinction in the 20th century. The breed is known in the West for its deep wrinkles, whilst a traditional less wrinkled form is maintained in Hong Kong.";

  // Viides koira

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
  divMain.appendChild(div42);
  document.getElementById("doggo5").innerHTML = "germanshephard";
  document.getElementById("doggo5text").innerHTML =
    "The German Shepherd Dog also known as the Alsatian, is a German breed of working dog of medium to large size. The breed was developed by Max von Stephanitz using various traditional German herding dogs from 1899.";
}
