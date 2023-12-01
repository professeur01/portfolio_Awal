   /*   
 cells = document.querySelectorAll(".cell");
textInfo = document.querySelector(".text_info"); 

 cells.forEach(cell => cell.addEventListener("click", functionClique));

function functionClique(e){
    const TextItemCliquer = e.target.textContent;
    localStorage.setItem('num', JSON.stringify(TextItemCliquer));
    if (localStorage.getItem('num')) {
        const numLocal =  JSON.parse(localStorage.getItem('num'));
        
        textInfo.textContent = numLocal ;
        }  
}   */

const maPromese1 = new Promise((resolve, reject) =>{
const aleatoire = Math.trunc(Math.random() * 10 + 1)
if (aleatoire < 5) {
    resolve("Entre 5 & 1 !");
}else{
    reject("Entre 5 & 10 !")
}
})
.then((txt) =>{
    console.log(txt + " good job!");
}).catch((err)=>{
    console.error(err + " oh! no");
})
