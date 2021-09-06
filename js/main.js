
const eaLink = document.getElementsByClassName("ea-dead-space-link");
let confirmMsg = "Do you want to open the EA website?";
const closeLoginTab = document.getElementById("close-login-tab");
const closeHelpTab = document.getElementById("close-help-tab");

const loginLabels = document.getElementsByClassName("login-label");
const loginButton = document.getElementsByClassName("login-submit")[0];
const helpText = document.getElementsByClassName("help-text");
const paragraphText = document.getElementsByClassName("text-slot");
const pageNavLinks = document.getElementsByClassName("page-nav-link");
const subNavLinks = document.getElementsByClassName("sub-nav-link"); /* 12 */
const mainHeader = document.getElementById("main-header");
const officialSiteLinks = document.getElementsByClassName("official-site-link");
const supportLinks = document.getElementsByClassName("support-link");
const networkItems = document.getElementsByClassName("network-item");
const legalItems = document.getElementsByClassName("legal-item");
const flaticonAtr = document.getElementsByClassName("flaticon-attribution");
const selectedFlag = document.getElementById("selected-flag");
const pageLang = document.getElementById("lang");

const usaOption = document.getElementById("usa");
const mexicoOption = document.getElementById("mexico");
const franceOption = document.getElementById("france");

eaLink[0].addEventListener("click", (e) => {
  if(selectedFlag.hasAttribute("alt")) {
    let language = selectedFlag.getAttribute("alt");
    switch(language) {
      case "Mexico":
        confirmMsg = "¿Quieres abrir el sitio web de EA?";
        break;
      case "France":
        confirmMsg = "Voulez-vous ouvrir le site Web d'EA ?";
        break;
      default:
        console.log("'alt' attribute set to 'USA' or not defined");
    }
  }
  if(!window.confirm(confirmMsg)) {
    e.preventDefault();
  }
});

closeLoginTab.addEventListener("click", () => {
  let tabButton = document.getElementById("pills-login-tab");
  let paneClassList = document.getElementById("pills-login").classList;
  if(paneClassList.contains("active")) {
    paneClassList.remove("active");
    tabButton.classList.remove("active");
    tabButton.setAttribute("aria-selected", "false");
  }
});

closeHelpTab.addEventListener("click", () => {
  let tabButton = document.getElementById("pills-help-tab");
  let paneClassList = document.getElementById("pills-help").classList;
  if(paneClassList.contains("active")) {
    paneClassList.remove("active");
    tabButton.classList.remove("active");
    tabButton.setAttribute("aria-selected", "false");
  }
});

for(let i = 0; i < supportLinks.length; i++) {
  supportLinks[i].addEventListener("mouseover", () => {
    officialSiteLinks[i].style.color = "#b9e4e3";
  });
  supportLinks[i].addEventListener("mouseout", () => {
    officialSiteLinks[i].style.color = "#ffffff";
  });
}

usaOption.addEventListener("click", () => {
  window.location.reload();
});

mexicoOption.addEventListener("click", () => {
  loginLabels[0].innerHTML = 'Nombre de usuario:';
  loginLabels[1].innerHTML = 'Contraseña:';
  loginButton.value = 'Acceso';

  helpText[0].innerHTML = 'Esta página web es una réplica del sitio web oficial de ';
  eaLink[0].innerHTML = 'EA Dead Space';
  confirmMsg = "¿Quieres abrir el sitio web de EA?";

  paragraphText[1].innerHTML = 'Un antiguo azote alienígena se ha desatado, transformando a los muertos en horribles necromorfos, y solo el ingeniero Isaac Clarke puede detenerlos. Lucha por sobrevivir en esta aventura de terror de ciencia ficción usando tus herramientas de ingeniería para desactivar el miembro de Necromorphs miembro por miembro retorcido. Únete al despiadado soldado John Carver en Dead Space 3 y trabaja juntos para descubrir el origen del brote de necromorfos.';

  pageNavLinks[0].innerHTML = 'JUEGOS';
  pageNavLinks[1].innerHTML = 'SOBRE';
  pageNavLinks[2].innerHTML = 'APOYO';
  pageNavLinks[3].innerHTML = 'SUSCRÍBETE A EA';

  subNavLinks[0].innerHTML = 'Explorar Juegos';
  subNavLinks[1].innerHTML = 'Biblioteca';
  subNavLinks[2].innerHTML = 'Libre para jugar';
  subNavLinks[3].innerHTML = 'Comprar en Origin';
  subNavLinks[4].innerHTML = 'Actualizaciones de Suscripción';
  subNavLinks[5].innerHTML = 'Sobre EA';
  subNavLinks[6].innerHTML = 'Noticias';
  subNavLinks[7].innerHTML = 'Juego Competitivo';
  subNavLinks[8].innerHTML = 'Estudios';
  subNavLinks[9].innerHTML = 'Carreras';
  subNavLinks[10].innerHTML = 'Ayuda';
  subNavLinks[11].innerHTML = 'Foros';

  mainHeader.innerHTML = "<strong>JUEGOS DE DEAD SPACE</strong>";

  for(let link in officialSiteLinks) {
    officialSiteLinks[link].innerHTML = 'Sitio Oficial';
  }
  for(let link in supportLinks) {
    supportLinks[link].innerHTML = 'Apoyo';
  }

  networkItems[0].innerHTML = 'NAVEGAR JUEGOS';
  networkItems[1].innerHTML = 'SOBRE';
  networkItems[2].innerHTML = 'APOYO';
  networkItems[3].innerHTML = 'COMPRAR EN ORIGEN';
  networkItems[4].innerHTML = 'ACTUALIZACIÓN DE SUSCRIPCIÓN';

  legalItems[0].innerHTML = 'Legal';
  legalItems[1].innerHTML = 'Acuerdo del Usuario';
  legalItems[2].innerHTML = 'Política de Privacidad y Cookies';
  legalItems[3].innerHTML = 'Actualizaciones del servicio en línea';
  legalItems[4].innerHTML = 'Seguridad';

  flaticonAtr[0].innerHTML = 'Iconos creados por <a class="flaticon-link" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> de <a class="flaticon-link" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>';

  selectedFlag.src = 'images/flaticon/flags/mexico.png';
  selectedFlag.setAttribute('alt', 'Mexico');
  pageLang.innerHTML = 'Mexico';
});

franceOption.addEventListener("click", () => {
  loginLabels[0].innerHTML = "Nom d'utilisateur:";
  loginLabels[1].innerHTML = 'Mot de passe:';
  loginButton.value = 'Connexion';

  helpText[0].innerHTML = 'Cette page Web est une réplique du site Web officiel ';
  eaLink[0].innerHTML = 'd&#39EA Dead Space';
  confirmMsg = "Voulez-vous ouvrir le site Web d'EA ?";

  paragraphText[1].innerHTML = "Un ancien fléau extraterrestre s'est déchaîné, transformant les morts en nécromorphes hideux, et seul l'ingénieur Isaac Clarke peut les arrêter. Luttez pour votre survie dans cette aventure d'horreur de science-fiction en utilisant vos outils d'ingénierie pour désactiver le membre nécromorphe par membre tordu. Rejoignez le soldat impitoyable John Carver dans Dead Space 3 et travaillez ensemble pour découvrir la source de l'épidémie de nécromorphes.";

  pageNavLinks[0].innerHTML = 'JEUX';
  pageNavLinks[1].innerHTML = 'À PROPOS';
  pageNavLinks[2].innerHTML = 'SUPPORT';
  pageNavLinks[3].innerHTML = 'INSCRIVEZ-VOUS À EA';

  subNavLinks[0].innerHTML = 'Parcourir les jeux';
  subNavLinks[1].innerHTML = 'Une Bibliothèque';
  subNavLinks[2].innerHTML = 'Libre de jouer';
  subNavLinks[3].innerHTML = 'Achetez sur Origin';
  subNavLinks[4].innerHTML = "Mises à jour de l'abonnement";
  subNavLinks[5].innerHTML = "À propos d'EA";
  subNavLinks[6].innerHTML = 'Nouvelles';
  subNavLinks[7].innerHTML = 'Jeu compétitif';
  subNavLinks[8].innerHTML = 'Studios';
  subNavLinks[9].innerHTML = 'Carrières';
  subNavLinks[10].innerHTML = 'Aider';
  subNavLinks[11].innerHTML = 'Forum';

  mainHeader.innerHTML = "<strong>JEUX DEAD SPACE</strong>";

  for(let link in officialSiteLinks) {
    officialSiteLinks[link].innerHTML = 'Site officiel';
  }
  for(let link in supportLinks) {
    supportLinks[link].innerHTML = 'Soutien';
  }

  networkItems[0].innerHTML = 'PARCOURIR LES JEUX';
  networkItems[1].innerHTML = 'À PROPOS';
  networkItems[2].innerHTML = 'SUPPORT';
  networkItems[3].innerHTML = 'ACHETER SUR ORIGIN';
  networkItems[4].innerHTML = "MISE À JOUR DE L'ABONNEMENT";

  legalItems[0].innerHTML = 'Légal';
  legalItems[1].innerHTML = "Accord de l'utilisateur";
  legalItems[2].innerHTML = 'Politique de confidentialité et de cookies';
  legalItems[3].innerHTML = 'Mises à jour des services en ligne';
  legalItems[4].innerHTML = 'Sécurité';

  flaticonAtr[0].innerHTML = 'Icônes créées par <a class="flaticon-link" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> à partir de <a class="flaticon-link" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>';

  selectedFlag.src = 'images/flaticon/flags/france.png';
  selectedFlag.setAttribute('alt', 'France');
  pageLang.innerHTML = 'France';
});
