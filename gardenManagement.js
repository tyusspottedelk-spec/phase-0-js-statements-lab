const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;
if (temperature > 80 ) {console.log ("watering is on ")}
else {console.log ("watering is off")}
if (timeOfDay === "evening or night"){console.log ("lights on")}
else {console.log ("lights off")}

while (soilMoisture < 40) {soilMoisture += 5;console.log(soilMoisture)}
