let data, mapObj;

async function init(){
  //let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json"
  let link = "data.json"
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
function accidentsByBorough(){
  let q = 0, bk = 0, bx = 0, m = 0, s = 0;
  
  for(let i = 0; i < data.length; i++){
    let accident = data[i];
    if(accident.borough == "QUEENS"){
      q++;
    }else if(accident.borough == "MANHATTAN"){
      m++;
    }else if(accident.borough == "BROOKLYN"){
      bk++;
    }else if(accident.borough == "BRONX"){
      bx++;
    }else if(accident.borough == "STATEN ISLAND"){
      s++;
    }
  }
  
  let chartData = [
    ["QUEENS",q],
    ["MANHATTAN",m],
    ["BROOKLYN", bk],
    ["BRONX", bx],
    ["STATEN ISLAND", s]
  ]
  
  let chartType = get("chartType").value;
  
  displayChart(chartData,"output",chartType)
}