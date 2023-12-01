//Changement du Curseur
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function(e){
    cursor.style.cssText = "left: " + e.clientX + "px; top:" + e.clientY + "px;"  ;  
})
//___________________FIN_____________________
//Cliquer de l'écran pour rentrer dans le site
const ecran = document.querySelector(".ecran");
const cliquerEcran = document.querySelector(".cliquer_ecran");
const gifEcran = document.querySelector(".gif_ecran");
cliquerEcran.addEventListener("click", () => {
    cliquerEcran.style.display = "none";
    gifEcran.classList.add("active");
    setTimeout(() => {
        location.href = "home.html";
    }, 9000);
})
//___________________FIN________________________
