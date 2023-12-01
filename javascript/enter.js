//Changement du Curseur
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function(e){
    console.log(e);
    cursor.style.cssText = "left: " + e.clientX + "px; top:" + e.clientY + "px;" + e.bubbles + "true" ;  
})