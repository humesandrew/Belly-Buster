// function getAPI() {
//   var requestUrl =
//     "https://api.openweathermap.org/data/2.5/weather?q=Denver&units=imperial&appid=bb827de844a7d6fffd664986ca5222ea";
//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })

//     .then(function (data) {
//       console.log(data);
//       // console.log(data.weather[0].description);

//       var apiIcon = document.createElement("li");
//       apiIcon.textContent = data.weather[0].icon;

//       //then use apiIcon's code (03d) to input that into the html lookup for the icon on OpenWeather.org//
//       apiResult.appendChild(apiIcon);

//       var apiDescription = document.createElement("li");
//       apiDescription.textContent = data.weather[0].description;
//       apiResult.appendChild(apiDescription);

// var body = {
//   location_id: "15333482",
//   language: "en_US",
//   currency: "USD",
//   limit: "15",
// };

// function getWWR() {

//     fetch("https://worldwide-restaurants.p.rapidapi.com/typeahead", {
//         "method": "POST",
//         "headers": {
//           "content-type": "application/json",
//           "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
//           "x-rapidapi-key": "5fc3ffbff9mshec79e24e7e91681p1c22e6jsn04d256fdad1d"
//         },
//         "body": JSON.stringify({
//           "q": "Cleveland",
//           "language": "en_US"
//         })
//       })
//         .then(response => {
//           return response.json();
//         })
//         .then(cityData => {
      
//           fetch("https://worldwide-restaurants.p.rapidapi.com/search", {
//             "method": "POST",
//             "headers": {
//               "content-type": "application/json",
//               "x-rapidapi-host": "worldwide-restaurants.p.rapidapi.com",
//               "x-rapidapi-key": "5fc3ffbff9mshec79e24e7e91681p1c22e6jsn04d256fdad1d"
//             },
//             "body": JSON.stringify({
//               "language": "en_US",
//               "limit": "30",
//               "location_id": cityData.results.data[0].resultObject.location_id,
//               "currency": "USD"
//             })
//           })
//             .then(response => {
//               console.log(response);
//               return response.json()
//             })
//             .then(data => {
//               console.log(data)
//             })
//         })
//         .catch(err => {
//           console.error(err);
//         });
// }

// getWWR();

function getBeers () {
    fetch("https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?by_state=CO", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
            "x-rapidapi-key": "e303ab8e98msh1c7a974ed999e49p1872ddjsne9f8e2e5a276"
        }
    })

    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });
}

getBeers();

function getBrewery() {
    fetch("https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries/10-barrel-brewing-co-denver-denver", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
            "x-rapidapi-key": "e303ab8e98msh1c7a974ed999e49p1872ddjsne9f8e2e5a276"
        }
    })
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });


}

getBrewery();