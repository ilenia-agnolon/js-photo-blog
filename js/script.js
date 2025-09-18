/* 
PARTE 1

    - Milestone 2:
    Utilizzando Postman, testiamo una chiamata a questo endpoint: 

    https://lanciweb.github.io/demo/api/pictures/

    Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.


    - Milestone 3:
    Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
______________________________________________________________
______________________________________________________________

PARTE 2

    Milestone 2:
    - Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .
    - Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
    - Cliccando invece il button di chiusura, l’overlay scompare nuovamente.
*/

//selezione degli elementi di output
const rowContainer = document.querySelector(".row");
    //console.log(cardsContainer);

//selezione dell'overlay e degli elementi che contiene
const overlay = document.querySelector(".main-container-overlay");
    //console.log("overlay selezionato:", overlay);

const bottoneChiudi = document.querySelector(".btn-chiudi");




//salvo in una costante l’endpoint dell’API
const apiRef = "https://lanciweb.github.io/demo/api/pictures/";

//chiamata ajax all'api
axios.get(apiRef).then((response) => {

    //console.log(response);

    const pictures = response.data; //pictures è l'array di tutte le foto ricevute dall’API

    //console.log(posts); // --> estrapolati i dati necessari
    
    //creo variabile di accumulo outupt (stringa)
    let cardsHTML = "";

    //utilizzo i dati
    pictures.forEach(singlePicture => { //singlePicture è il singolo oggetto (una foto con id, title, date, url)
        console.log( "console.log di singlePicture:",singlePicture);

        //costruiamo la stringa finale aggiungendo l’HTML di ogni card
        cardsHTML += ` 
            <div class="col">

                    <div class="card">

                        
                        <img src="img/pin.svg" alt="puntina rossa rotonda appendi immagine"
                            class="red-pin">

                        
                        <img src="${singlePicture.url}" alt="${singlePicture.title}"
                        class="spazio-per-immagine">
                        

                        
                        <time class="date">${singlePicture.date}</time>
                        <p class="text"><strong>${singlePicture.title}</strong></p>
                    </div>

                </div>
        ` ;
        
    });

    //inietto HTML dentro al contenitore
    rowContainer.innerHTML = cardsHTML;

            
            //PARTE 2 - M1:
            //selezione delle card
            const cards = document.querySelectorAll (".col");
            console.log("ecco le cards:", cards);

            //associo un evento "click" alle card
            cards.forEach(cardSingola => {
                cardSingola.addEventListener("click", () => {
                    overlay.style.display = "flex"
                })
              
            });

              bottoneChiudi.addEventListener("click",() => {
                overlay.style.display = "none"
            })

})












