function getBeers() {
  fetch(
    "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?by_city=" + cityInput.value,
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

      APIElBody.textContent = '';
      for (var i = 0; i < data.length; i++) {
        
        var APIName = document.createElement("button");
        APIName.setAttribute("type", "button");
        APIName.setAttribute("class", "small secondary button");
        APIName.setAttribute("href", data[i].website_url);
        APIName.textContent = data[i].name;
        APIElBody.appendChild(APIName);
        var breweryLatitude = data[i].latitude;
          var breweryLongitude = data[i].longitude;
          var breweryName = data[i].name;
          var breweryStreet = data[i].street;

        APIName.addEventListener("click", function(event) {

          event.preventDefault();
          
          addPin(breweryLatitude, breweryLongitude);


        })


      }
    })
    .catch ((err) => {
  console.error(err);
});
}

//Saving search inputs as an array and then putting in local storage//

function displayCity() { 
}


//Saving search inputs as an array and then putting in local storage. Adding a button for each history item.//

////////////////////////////////////////////////////////////////

var city = [];
localStorage.setItem("City", JSON.stringify(city));
var submitBtn = document.getElementById("submitBtn");
var APIElBody = document.getElementById("APIElBody");

submitBtn.onclick = function submitCity() {
  city.push(cityInput.value.trim());
  localStorage.setItem("City", JSON.stringify(city));
  console.log(JSON.stringify(city));
  var displaycityInput = document.getElementById("APIEl");
  APIEl.innerHTML = "Showing breweries in: " + cityInput.value;
  renderCityHistory();
  getBeers();
};


//creating a button for the recent history results// 
var localHistoryContainer = document.getElementById("localStorage");
function renderCityHistory() {
  localHistoryContainer.textContent = '';
  for (var i = city.length - 1; i >= 0; i--) {
    var btn = document.createElement("button");
    btn.setAttribute("type", "button");
    btn.classList.add("history-btn");
    btn.setAttribute("class", "button large success");
    btn.setAttribute("data-search", city[i]);
    btn.textContent = city[i];
    
    btn.addEventListener("click", resubmitCity);
    localHistoryContainer.appendChild(btn);
  }
}


//creating a function to resubmit based on the city history button/////////////////

function resubmitCity() {
  event.preventDefault();
  var searchResult = this.getAttribute("data-search");
  var displaycityInput = document.getElementById("APIEl");
  APIEl.innerHTML = "Showing breweries in: " + searchResult;
 function changeCityInput() {
  cityInput.value = searchResult;
  
 }
 changeCityInput();
 getBeers();
}



// working with leaflet api/////
var map = L.map("map").setView([39.7392, -104.9903], 12);
L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmx1ZWFuZHluIiwiYSI6ImNrd3M0d3AycTEzMDgzMG80M2x0N3UzamcifQ.4QF7f-50GGZpRGTKZUiRvA',
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



var popup = L.popup();
function onMapClick(e) {
  // e.preventDefault();
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);

}
map.on('click', onMapClick);
function displayMap () {

  
    var getMap = document.getElementById("map");
}
displayMap();
var mapBoxAPIKey =
  "pk.eyJ1IjoiaHVtZXMtYW5kcmV3IiwiYSI6ImNrd3B3YmR5eTBlb2gyeHJ1Z2plbWM0b20ifQ.KXg5Wlkn2dco0TxNZN0k-g";

function addPin(latitude, longitude) {
  var marker = L.marker([latitude, longitude]).addTo(map);
 
  marker.bindPopup("<b>Your brewery!</b>").openPopup();
}

addPin();