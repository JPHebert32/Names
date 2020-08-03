var yrMaleURL = "http://127.0.0.1:5000/api/v1.0/years/M";
var yearsMaleData = []
d3.json(yrMaleURL).then(function(maleData) {
  yearsMaleData = maleData;
  
    // Populate the Table
    plotLine(yearsMaleData);
});
// yearsMaleData[0]

function plotLine(data) {
  var count = data.count;
  var year = data.year;
  var name = data.name;
  var sex = data.sex;

var trace1 = {
   
    type: 'scatter',
    mode: 'lines+markers',
    name: name,
    x: count,
    y: year,
    marker: 'circle',
    line: {
      color: 'rgb(153, 0, 0)',
      width: 3
    }
  };
  
  var data = [trace1];

  var layout = {        
    xaxis: {range: []},        
    yaxis: {range: []},        
    legend: {y: 0.5,          
      yref: 'paper',          
      font: {family: 'Arial, sans-serif',            
        size: 20,            
        color: 'black'}        
      },        
      title:'Name Popularity by Year'};


  
  Plotly.newPlot('line-plot', data, layout);

    }

plotLine(yearsMaleData);
  