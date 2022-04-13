const geoCode = require("./utils/geocode.js");
const forecast = require("./utils/forecast.js");
const locaction = process.argv[2];
if (!locaction) {
  console.log("location is not provided");
} else {
  geoCode(locaction, (error, data) => {
    if (error) {
      return console.log(error);
    } else {
      forecast(data.lat, data.long, (error, ForCastData) => {
        if (error) {
          return console.log(error);
        } else {
          console.log(ForCastData);
          console.log(data.desc);
        }
      });
    }
  });
}
