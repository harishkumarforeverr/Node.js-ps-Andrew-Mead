const request = require("request");
const url = `http://api.weatherstack.com/current?access_key=30d19ede3d3503b981c86d9c759deba5&query=40.714,-74.006&units=f`;
const GeoLocationUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/India.json?access_token=pk.eyJ1IjoiaGFyaXNoa3VtYXJmb3JldmVyIiwiYSI6ImNsMXd6bHJ6bTNjbnYza28yNjZoNXhmNXkifQ.k74kWAPo40IOxgc_qhhtLw&limit=1`;
request({ url, json: true }, function (error, response, body) {
  const Obj = body.current;
  if (error) {
    console.log("something went wrong try again");
  } else if (body.error) {
    console.log("please search with another loc and latitude");
  } else {
    console.log(
      `${Obj.weather_descriptions}. the temperature is ${Obj.temperature} now and its feek like ${Obj.feelslike}`
    );
  }
});

// request({ url: GeoLocationUrl, json: true }, function (error, res, body) {
//   if (error) {
//     console.log("something went wrong try again");
//   } else if (body.features.length == 0) {
//     console.log("please with another location");
//   } else {
//     console.log(body.features[0].center[0]);
//     console.log(body.features[0].center[1]);
//   }
// });
