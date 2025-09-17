/*
______________________________________________________________
Milestone 2:
Utilizzando Postman, testiamo una chiamata a questo endpoint: 

https://lanciweb.github.io/demo/api/pictures/

Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.

______________________________________________________________
Milestone 3:
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
______________________________________________________________
*/

//selezione degli elementi di output
const rowContainer = document.querySelector(".row");
    //console.log(cardsContainer);

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
                        <p class="text">${singlePicture.title}</p>
                    </div>

                </div>
        ` ;
        
    });

    //inietto HTML dentro al contenitore
    rowContainer.innerHTML = cardsHTML;

})