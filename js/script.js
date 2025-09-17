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
const cardsContainer = document.querySelector(".cards-container");
    //console.log(cardsContainer);

//salvo in una costante l’endpoint dell’API
const apiRef = "https://lanciweb.github.io/demo/api/pictures/";

//chiamata ajax all'api
axios.get(apiRef).then((response) => {

    //console.log(response);

    const posts = response.data;
    console.log(posts); // --> estrapolati i dati necessari
    
    
})