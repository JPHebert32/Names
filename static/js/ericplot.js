var yrMaleURL = "http://127.0.0.1:5000/api/v1.0/years/M";
var yearsMaleData = []
d3.json(yrMaleURL).then(function (maleData) {
  yearsMaleData = maleData;

  //console.log(yearsMaleData);
  // Populate the Table
  plotLine(yearsMaleData);
});
// yearsMaleData[0]

function plotLine(data) {
  console.log(data);
  var countList = data.map(person => person.count)
  console.log(countList);
  var yearList = data.map(person => person.year);
  console.log(yearList);
  var count = data.count;
  var year = data.year;
  var name = data.name;
  var sex = data.sex;
console.log(count);
console.log(year);
  var trace1 = {

    type: 'scatter',
    mode: 'lines',
    //name: name,
    x: yearList,
    y: countList,
    //marker: 'circle',
    line: {
      color: 'rgb(153, 0, 0)',
      width: 3
    }
  };

  var data = [trace1];
  // var layout = {
  //   title: `${stock} closing prices`,
  //   xaxis: {
  //     range: [startDate, endDate],
  //     type: "date"
  //   },
  //   yaxis: {
  //     autorange: true,
  //     type: "linear"
  //   }
  // };
  var layout = {
    xaxis: { range: [2010, 2018] },
    yaxis: {
      autorange: true,
      type: "linear"
    },
    legend: {
      y: 0.5,
      yref: 'paper',
      font: {
        family: 'Arial, sans-serif',
        size: 20,
        color: 'black'
      }
    },
    title: 'Name Popularity by Year'
  };

console.log(data);
  Plotly.newPlot('line-plot', data, layout);

}

//plotLine(yearsMaleData);
