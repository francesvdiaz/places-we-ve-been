Test: printNames

Description: It will display the names of the destination objects

Code:
destinations.forEach(function (destination){
  destinationName = document.createElement("h2");
  const destinationName.textContent = destination.name;
  const body = document.querySelector("body");
  const div = document.getElementsById("destinations");
  body.append(div);
  div.appendChild(destinationName)

})

Expected Output: names in h2 tags

