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
function filterByBorough(){
  let borough= document.getElementById("boroughs").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let info = data[i];
    if(info.borough== borough){
      build += `<div class="fitted card">
                    <h1>${info.borough}</h1>
                    <h3>Poverty Rate: ${info.nyc_poverty_rate}</h3>
                    <p>Median Income: ${info.median_income}</p>
                    <h2>Score Rank: ${info.scorerank}</h2>
                    <hr>
                    <h2>${info.goal}</h2>
                    <h2>${info.goalfullname}</h2>
                    <h3>${info.goalfullname}</h3>
                    <span>${info.year_published}</span>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
function filterByPovertyrateOrMedianIncome(){
  let poverty_rate = document.getElementById("poverty_rates").value;
  let median_income = document.getElementById("median_incomes").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let info = data[i];
    if(info.nyc_poverty_rate == poverty_rate || info.median_income== median_income){
      build += `<div class="fitted card">
                    <h1>${info.borough}</h1>
                    <h3>Poverty Rate: ${info.nyc_poverty_rate}</h3>
                    <p>Median Income: ${info.median_income}</p>
                    <h2>Score Rank: ${info.scorerank}</h2>
                    <hr>
                    <h2>${info.goal}</h2>
                    <h2>${info.goalfullname}</h2>
                    <h3>${info.goalfullname}</h3>
                    <span>${info.year_published}</span>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
function filterByYearpublishedAndGoal(){
  let year_published = document.getElementById("year_publishes").value;
  let goal = document.getElementById("goals").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let info = data[i];
    if(info.year_published == year_published && info.goal == goal){
      build += `<div class="fitted card">
                    <h1>${info.borough}</h1>
                    <h3>Poverty Rate: ${info.nyc_poverty_rate}</h3>
                    <p>Median Income: ${info.median_income}</p>
                    <h2>Score Rank: ${info.scorerank}</h2>
                    <hr>
                    <h2>${info.goal}</h2>
                    <h2>${info.goalfullname}</h2>
                    <h3>${info.goalfullname}</h3>
                    <span>${info.year_published}</span>
                </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
function StatisticsByBorough(){
  let q = 0, bk = 0, bx = 0, m = 0, s = 0;
  
  for(let i = 0; i < data.length; i+=1){
    let statistic = data[i];
    if(statistic.borough == "QUEENS"){
      q+=1;
    }else if(statistic.borough == "MANHATTAN"){
      m+=1;
    }else if(statistic.borough == "BROOKLYN"){
      bk+=1;
    }else if(statistic.borough == "BRONX"){
      bx+=1;
    }else if(statistic.borough == "STATEN ISLAND"){
      s+=1;
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