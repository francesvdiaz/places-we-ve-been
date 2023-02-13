window.onload = function() {
class Destinations {
  constructor(name,location,nearestCity,population,bestPlaceToEat,landmarks,favoriteThingToDo) {
    this.name = name;
    this.location = location;
    this.nearestCity = nearestCity;
    this.population = population;
    this.bestPlaceToEat = bestPlaceToEat;
    this.landmarks = landmarks;
    this.favoriteThingToDo = favoriteThingToDo;
  }
}

const destinations = [
  new Destinations("Walla Walla","Eastern Washington","Pasco, Washington","34,000","Brasserie Four",["Fields and fields of wheat","The Christofer Colombus statue that gets spray painted every year","The cherry blossom trees that bloom every year on Maple st."],"Drive around"),
  new Destinations("Ventura","Southern California","Santa Barbara","109,925","Brophy Bros.",["Ventura Pier and Promenade", "Rincon Point State Beach", "Old Creek Ranch Winery", "Meditation Mount", "Ventura Harbor"],"Fishing off of Catalina Island"),
  new Destinations("Fort Peck","NorthEastern Montana","Glendive, Mt","240","SomaDis Deli",["Fort Peck Dam", "Fort Peck Interpretive Center"],"Hunting and fishing")
];

const body = document.querySelector("body");
const div = document.createElement("div");
body.append(div);
div.id = "destinations";

destinations.forEach(function (destination){
  const destinationName = document.createElement("h2");
  destinationName.textContent = destination.name;
  div.appendChild(destinationName);

  destinationName.addEventListener("click", function() {
  const propertiesContainer = document.createElement("div");

  for (let property of Object.keys(destinations[0])) {
    if (property !== "name") {
      const propertyElement = document.createElement("p");
      propertyElement.textContent = `${property}: ${destination[property]}`;
      propertiesContainer.appendChild (propertyElement);
      }
    }
    document.body.appendChild(propertiesContainer);
  });
});
}