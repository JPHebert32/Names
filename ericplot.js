var yrMaleURL = "http://127.0.0.1:5000/api/v1.0/years/M";
var yearsMaleData = []
d3.json(yrMaleURL).then(function(maleData) {
  yearsMaleData = maleData;
  
    // Populate the Table
    filteredNames(yearsMaleData);
});
yearsMaleData[0]

function filteredNames(data)

var trace1 = {
    x: [count],
    y: [year],
    type: 'scatter'
    mode: 'lines+markers'
    marker: 'circle'
    line: {
      color: 'rgb(153, 0, 0)',
      width: 3
    }
    
  };
  
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

  var data = [trace1];
  
  Plotly.newPlot('myDiv', data);