let data, mapObj;

async function init(){
  //let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json"
  let link = "311.json"
  info = await fetch(link);
  data = await info.json();
  
  let cards_output = get("cards_output");
  let build = "";
  for(let i = 0; i < data.length; i+=1) {
    let info = data[i];
    build += card(info);
  }
  cards_output.innerHTML = build;
}