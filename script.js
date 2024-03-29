let cont = document.querySelector(".cont");

//console.log("hei")
async function getBeerApi(container) {
    try{
        const api = `https://yf3khxzc.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type%3D%3D+%27beer%27%5D%7B%0A++title%2C+price%0A%7D`;
        //console.log(api);
        const response = await fetch(api);
        console.log("response");
       
        if (!response.ok) throw new Error(`HTTP error! ${response.status}`);
        const data = await response.json();
        console.log(data);
        beerApi = data.result;
       console.log(beerApi);
        listBeer(beerApi, container);
    } catch (error){
        console.error("Error message: " + error)
        container.innerHTML = `<p>Kan ikke finne noen produkter</p>`
    }
}

getBeerApi(cont);


function listBeer(api, output) {
    output.innerHTML = "";
    let beerContainer = "";
    for (let beer of api) {
      beerContainer += `<div class="beer"><p class="beer-title">${beer.title}</p>
      <p>${beer.price} kr</p></div>`;
    }
    output.innerHTML = beerContainer;
  }
