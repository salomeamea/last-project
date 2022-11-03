const nav = ["HOME", "ABOUT", "SERVICES", "CONTACTS"];

const links = ["index.html", "about.html","services.html", "contacts.html"];

let navigaciatext = "<ul>";
for (let i=0; i<nav.length; i++){
    navigaciatext += '<li><a href="' + links[i] + '">' + nav[i] + "</a></li>";
}

navigaciatext += "</ul";

document.getElementById("navig").innerHTML = navigaciatext;