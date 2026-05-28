let data, mapObj;

function displayMap(){
  //3: Retrieve the borough from the user via the text input, filter the data using filter(), and generate cards for this subset of data.
  let lat = get("lat").value;
  let lon = get("lon").value;

  showMap(lat,lon);


}

