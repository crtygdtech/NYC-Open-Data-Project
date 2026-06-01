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
                    <h1>${info.borough}</h1>
                    <h2>${info.scorerank}</h2>
                    <h3>${info.nyc_poverty_rate}</h3>
                    <p>${info.median_income}</p>
                    
                    <h2>${info.goal}</h2>
                    <h2>${info.year_published}</h2>
              <input type="button" onclick="showMap( ${location} )" value="Map">
        </div>`;
  return build;
}
function get(id){
  return document.getElementById(id);
}

function displayChart( data, id, type ){
  let chart = c3.generate({
    bindto: '#' + id,
    data: {
      columns: data,
      type:type
    }
  });
}
