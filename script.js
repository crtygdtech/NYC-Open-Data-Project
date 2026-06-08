let data, mapObj;

async function filter_init(){
  //let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json"
  let link = "data.json"
  info = await fetch(link);
  data = await info.json();
  
  let cards_output = get("cards_output");
  let build = "";
  for(let i = 0; i < data.length; i+=1) {
    let info = data[i];
    build += card(info);
    //console.log(i)
  }
  
  cards_output.innerHTML = build;

    let poverty_rates = fillDropDown("nyc_poverty_rate");
  document.getElementById("poverty_rates").innerHTML = poverty_rates;

  let median_incomes = fillDropDown("median_income");
  document.getElementById("median_incomes").innerHTML = median_incomes;

  let goals = fillDropDown("goal");
  document.getElementById("goals").innerHTML = goals;
  
}
async function chart_init(){
  //let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json"
  let link = "data.json"
  info = await fetch(link);
  data = await info.json();
  


  
}

function filterByPovertyOrIncome(){
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
function filterByBoroughAndGoal(){
  let borough = document.getElementById("boroughs").value;
  let goal = document.getElementById("goals").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let info = data[i];
    if(info.borough == borough && info.goal == goal){
      build += `<div class="fitted card">
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
    console.log(statistic.borough)
    if(statistic.borough == "Queens"){
      q+=1;
    }else if(statistic.borough == "Manhattan"){
      m+=1;
    }else if(statistic.borough == "Brooklyn"){
      bk+=1;
    }else if(statistic.borough == "Bronx"){
      bx+=1;
    }else if(statistic.borough == "Staten Island"){
      s+=1;
    }
  }
  
  let chartData = [
    ["Queens",q],
    ["Manhattan",m],
    ["Brooklyn", bk],
    ["Bronx", bx],
    ["Staten Island", s]
  ]
  
  let chartType = get("chartType").value;
  
  displayChart(chartData,"output",chartType)
}