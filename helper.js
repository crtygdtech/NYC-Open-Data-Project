function get(id){
  return document.getElementById(id);
}

function showMap(lat, lon){
  let location = [lat, lon];
  if(!mapObj){
      mapObj = L.map("map");
  } 
  let map = mapObj.setView(location, 14);

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  let marker = L.marker(location).addTo(map);
}

function card( info ){ 

  let location = [info.latitude || 0 , info.longitude || 0];
  let build = `<div class="card fitted">
                    <h2>${info.year_published}</h2>
                    <h2>${info.borough}</h2>
                    <h2>${info.nyc_poverty_rate}</h2>
                    <h2>${info.scorerank}</h2>
                    <h2>${info.goalname}</h2>
              <input type="button" onclick="showMap( ${location} )" value="Map">
        </div>`;
  return build;
}