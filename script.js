function getBeers() {
  fetch(
    "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?by_state=CO",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
        "x-rapidapi-key": "e303ab8e98msh1c7a974ed999e49p1872ddjsne9f8e2e5a276",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
}
getBeers();

function getBrewery() {
  fetch(
    "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/10-barrel-brewing-co-denver-denver",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
        "x-rapidapi-key": "e303ab8e98msh1c7a974ed999e49p1872ddjsne9f8e2e5a276",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
}
getBrewery();

var map = L.map("map").setView([51.505, -0.09], 13);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/london/tiles/0/0/0?access_token=pk.eyJ1IjoiaHVtZXMtYW5kcmV3IiwiYSI6ImNrd3B3YmR5eTBlb2gyeHJ1Z2plbWM0b20ifQ.KXg5Wlkn2dco0TxNZN0k-g",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: "pk.eyJ1IjoiaHVtZXMtYW5kcmV3IiwiYSI6ImNrd3B3YmR5eTBlb2gyeHJ1Z2plbWM0b20ifQ.KXg5Wlkn2dco0TxNZN0k-g",
  }
).addTo(map);

function displayMap () {
    var getMap = document.getElementById("map");
   
    
}

displayMap();

var mapBoxAPIKey =
  "pk.eyJ1IjoiaHVtZXMtYW5kcmV3IiwiYSI6ImNrd3B3YmR5eTBlb2gyeHJ1Z2plbWM0b20ifQ.KXg5Wlkn2dco0TxNZN0k-g";
