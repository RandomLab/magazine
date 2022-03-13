window.addEventListener("load", setup);

//La longueur du texte
let text = "Itius dolut laturem que moluptaque ne nos eos ducipistio quunt et pe dolore etur repudit iandae same voluptatem as reped ute est ea quoditiatur simolecerum vidus nullupt atumque volum fugitius, ullabo. Us et as et eumet quunt faciis dolenda dolest essinve lentur re porecabo. Endit et excesequam is reiur soluptate custem. Neque sitatio nsequod molor mos sa que veribus tibus, optae re dunt eturia voluptiis molest, officturi ditas voluptur, ulloritatur? Agnatem. Deleceped quunt.Daerum dolupta verrorporio dita voluptatur aut volori desciur? Rumquid mo blab intibusant que non ex ea cone verspicius";
let length = text.length;

var container;
var style;
var width;
var articles
var index = 0;
var index2 = -1;
var articlesNumber = 6;
var widthArticles = [];


function setup() {
    // La taille de la page
    container = document.getElementById("container");
    style = getComputedStyle(container)
    width = style.width

    // Création des articles
    var titre = "Titre";
    for (i = 0; i < articlesNumber; i++) {
        createArticle(titre);
    }

    articles = document.getElementsByClassName("article");

    // Création du paragraphe des articles
    for (i = 0; i < articles.length; i++) {
        newParagraphs(text, length, articles[i]);
    }

    for (i = 0; i < articles.length; i += 2) {
        giveWidth(articles[i]);
    }

    for (i = 1; i < articles.length; i += 2) {
        giveWidthAdapt(articles[i], i - 1)
    }

    for (var i = 0; i < articles.length; i++) {
        var el = articles[i];
        el.style.borderColor = (isOverflown(el) ? 'red' : 'green');
        console.log((isOverflown(el) ? 'red' : 'green'))
            //     console.log("Element #" + i + " is " + (isOverflown(el) ? '' : 'not ') + "overflown.");
    }


}

function isOverflown(element) {
    console.log(element.scrollHeight);
    console.log(element.clientHeight);
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;

}




function createArticle(titre) {
    var article = document.createElement("div");
    article.classList.add("article");
    container.appendChild(article);
    var h1 = document.createElement("h1");
    h1.innerHTML = titre;
    article.appendChild(h1);
    var img = document.createElement("img");
    img.src = "css/img/epistemolitic.png"
    article.appendChild(img);
    var a = document.createElement("a");
    a.innerHTML = "https://siteweb.fr"
    a.href = "https://siteweb.fr"
    article.appendChild(a);
}

function newParagraphs(text, length, parentContainer) {
    var Paragraph = document.createElement("p");
    Paragraph.innerHTML = text;
    Paragraph.classList.add("Paragraphe");
    parentContainer.appendChild(Paragraph);
}

function giveWidth(article) {
    var randomWidth = getRandomFromTo(50, 800);
    // var randomWidth = 223; Marche pas :(
    article.style.width = randomWidth + "px";
    widthArticles.push(randomWidth);
    index += 1;
}

function giveWidthAdapt(article, i) {
    index2 += 1;
    const str = width;
    const removedPx = str.slice(0, -2);
    article.style.width = removedPx - widthArticles[index2] + "px";

}

function getRandomFromTo(from, to) {
    const rando2 = Math.floor(Math.random() * (to - from + 1)) + from;
    return functionToUse = rando2;
}