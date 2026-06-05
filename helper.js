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
                    <h2>Neighborhood: ${info.neighborhoods}</h2>
                    <h3>Poverty Rate: ${info.nyc_poverty_rate}</h3>
                    <p>Median Income: ${info.median_income}</p>
                    <h2>Score Rank: ${info.scorerank}</h2>
                    <hr>
                    <h2>${info.goal}</h2>
                    <h2>${info.goalfullname}</h2>
                    <h3>${info.goalfullname}</h3>
                    <span>${info.year_published}</span>
        </div>`;
  return build;


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
