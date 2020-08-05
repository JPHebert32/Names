// Search function -User Input
// Submit Button handler
function handleSubmit() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input value from the form
  var selectedName = d3.select("#nameInput").node().value;
  console.log(`Selected Name: ${selectedName}`);

  // clear the input value
  d3.select("#nameInput").node().value = "";
}

// Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);


// Table Visual
var tbody = d3.select('tbody');

// Assign the data to a descriptive variable
var yrMaleURL = "http://127.0.0.1:5000/api/v1.0/years/M";
var yearsMaleData = []
d3.json(yrMaleURL).then(function(maleData) {
  yearsMaleData = maleData;
  
    // Populate the Table
    popTable(yearsMaleData);
    plotLine(yearsMaleData);

});
yearsMaleData[0]

function popTable(data) {
  //Clear Existing Table
  tbody.html('');
  //Use d3 to update each cell's text with
  data.forEach((names) => {
    //console.log(names);
    // Append table header from data
    var row = tbody.append('tr');
    //Use `Object.entries` data value
    Object.entries(names).forEach(([key,value]) => {
      // Append a cell to the row for each value
      var cell = row.append('td');
      cell.text(value);
    });
  });
};


// Filter Table by enter date Function
function handleClick() {
  let nameValue  = d3.select('#nameInput').property('value');
  //Filter Data
  let filteredData = yearsMaleData.filter(row => row.name === nameValue);
  popTable(filteredData);
  plotLine(filteredData);
  d3.event.preventDefault();
  //console.log(filteredData);
}

// Store value from form
var submit = d3.select("#submit").on("click", handleClick);



// Line Plot Function
function plotLine(data) {

  var selectedName = d3.select("#nameInput").node().value;
  console.log(`Selected Name: ${selectedName}`);

  //console.log(data);
  var countList = data.map(person => person.count)
  //console.log(countList);
  var yearList = data.map(person => person.year);
  //console.log(yearList);
  var nameList = data.map(person => person.name);
  
  // var count = data.count;
  // var year = data.year;
  // var name = data.name;
//console.log(count);
//.log(year);

  var trace1 = {

    type: 'scatter',
    mode: 'lines+marker',
    //name: nameList,
    x: yearList,
    y: countList,
    //marker: 'circle',
    line: {
      color: 'rgb(153, 0, 0)',
      width: 3
    }
  };

  var data = [trace1];

  var layout = {
    xaxis: { range: [2000, 2020] },
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
    title: `${selectedName} Popularity by Year`
  };

//console.log(data);
  Plotly.newPlot('line-plot', data, layout);
}

// 2018 Data   year2018Data
var yr2018URL = "http://127.0.0.1:5000/api/v1.0/year/2018";
var year2018Data = []
d3.json(yr2018URL).then(function(yearData) {
  year2018Data = yearData;
  //console.log(year2018Data);
  // for (var property in year2018Data) {
  //   console.log(year2018Data[property].name);
  //   console.log(year2018Data[property].count);  
});


// word cloud
ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
    zingchart.MODULESDIR = 'https://cdn.zingchart.com/modules/';

    var myConfig = {
      type: 'wordcloud',
      options: {
        words:[{count: 19837, text: "Liam"},{count: 18267, text: "Noah"},{count: 14516, text: "William"},{count: 13525, text: "James"},
               {count: 13389, text: "Oliver"},{count: 13381, text: "Benjamin"},{count: 12886, text: "Elijah"},{count: 12585, text: "Lucas"},
               {count: 12435, text: "Mason"},{count: 12352, text: "Logan"},{count: 11989, text: "Alexander"},{count: 11854, text: "Ethan"},
               {count: 11770, text: "Jacob"},{count: 11620, text: "Michael"},{count: 11173, text:"Daniel"},{count: 10649, text: "Henry"},
               {count: 10323, text: "Jackson"},{count: 10054, text: "Sebastian"},{count: 9979, text:"Aiden"},{count: 9924, text: "Matthew"},
               {count: 9734, text: "Samuel"},{count: 9697, text: "David"},{count: 9555, text:"Joseph"},{count: 9312, text: "Carter"},
               {count: 9288, text: "Owen"},{count: 9127, text: "Wyatt"},{count: 9119, text:"John"},{count: 8834, text: "Jack"},{count: 8577, text: "Luke"},
               {count: 8553, text: "Jayden"},{count: 8549, text: "Dylan"},{count: 8538, text:"Grayson"},{count: 8440, text: "Levi"},{count: 8417, text: "Isaac"},
               {count: 8335, text: "Gabriel"},{count: 8307, text: "Julian"},{count: 8169, text:"Mateo"},{count: 8003, text: "Anthony"},
               {count: 7701, text: "Jaxon"},{count: 7368, text: "Lincoln"},{count: 7364, text:"Joshua"},{count: 7261, text: "Christopher"},
               {count: 7234, text: "Andrew"},{count: 7020, text: "Theodore"},{count: 6929, text:"Caleb"},{count: 6905, text: "Ryan"},{count: 6802, text: "Asher"},
               {count: 6790, text: "Nathan"},{count: 6779, text: "Thomas"},{count: 6719, text:"Leo"},{count: 6614, text: "Isaiah"},{count: 6604,text: "Charles"},
               {count: 6603, text: "Josiah"},{count: 6540, text: "Hudson"},{count: 6509, text:"Christian"},{count: 6066, text: "Hunter"},
               {count: 6058, text: "Connor"},{count: 6027, text: "Eli"},{count: 6000, text:"Ezra"},{count: 5953, text: "Aaron"},{count: 5827, text: "Landon"},
               {count: 5788, text: "Adrian"},{count: 5712, text: "Jonathan"},{count: 5607, text:"Nolan"},{count: 5561, text: "Jeremiah"},
               {count: 5429, text: "Easton"},{count: 5310, text: "Elias"},{count: 5284, text:"Colton"},{count: 5271, text: "Cameron"},{count: 5227, text: "Carson"},
               {count: 5140, text: "Robert"},{count: 5032, text: "Angel"},{count: 5014, text:"Maverick"},{count: 4801, text: "Nicholas"},
               {count: 4753, text: "Dominic"},{count: 4734, text: "Jaxson"},{count: 4728, text:"Greyson"},{count: 4675, text: "Ian"},{count: 4675, text: "Adam"},
               {count: 4651, text: "Austin"},{count: 4647, text: "Santiago"},{count: 4646, text:"Jordan"},{count: 4441, text: "Cooper"},
               {count: 4383, text: "Brayden"},{count: 4364, text: "Roman"},{count: 4356, text:"Evan"},{count: 4319, text: "Ezekiel"},{count: 4298, text: "Xavier"},
               {count: 4292, text: "Jose"},{count: 4276, text: "Jace"},{count: 4221, text:"Jameson"},{count: 4205, text: "Leonardo"},{count: 4194, text: "Bryson"},
               {count: 4055, text: "Axel"},{count: 4001, text: "Everett"},{count: 3978, text:"Parker"},{count: 3972, text: "Kayden"},{count: 3964, text: "Miles"},
               {count: 3858, text: "Sawyer"},{count: 3847, text: "Jason"}],

        maxItems: 100,
        aspect: 'flow-center',

        colorType: 'palette',
        palette: ['#D32F2F', '#70301c', '#1976D2', '#ede247', '#8f46e3', '#5cced6', '#9c3b8d', '#94f07a', '#3e5e78', '#d1882e', '#8D6E63', '#42A5F5', '#998cde', '#2da635', '#212b91' ],

        style: {
          fontFamily: 'Crete Round',

          hoverState: {
            backgroundColor: '#D32F2F',
            borderRadius: 2,
            fontColor: 'white'
          },
          tooltip: {
            text: '%text: %hits',
            visible: true,
            alpha: 0.9,
            backgroundColor: '#1976D2',
            borderRadius: 2,
            borderColor: 'none',
            fontColor: 'white',
            fontFamily: 'Georgia',
            textAlpha: 1
          }
        }
      },

      source: {
        text: 'Top 100 Male Names in USA (2018) <br>',
        fontColor: 'Black',
        fontSize: 20,
        fontFamily: 'Georgia',
        fontWeight: 'normal',
        marginBottom: '0%'
      }
    };

    zingchart.render({
      id: 'myChart',
      data: myConfig,
      height: 500,
      width: '95%'
    });

//BAR
Highcharts.chart('container', {
  chart: {
    type: 'bar',
    marginLeft: 150
  },
  title: {
    text: 'Most popular Male Names 2018'
  },
  xAxis: {
    type: 'category',
    title: {
      text: null
    },
    min: 0,
    max: 4,
    scrollbar: {
      enabled: true
    },
    tickLength: 0
  },
  yAxis: {
    min: 1000,
    max: 20000,
    title: {
      text: 'Total Count',
      align: 'high'
    }
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    enabled: false
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Total Males Named',
    data: [
      ["Liam",19837],["Noah",18267],["William",14516],["James",13525],["Oliver",13389],["Benjamin",13381],["Elijah",12886],["Lucas",12585],["Mason",12435],
      ["Logan",12352],["Alexander",11989],["Ethan",11854],["Jacob",11770],["Michael",11620],["Daniel",11173],["Henry",10649],["Jackson",10323],["Sebastian",10054],
      ["Aiden",9979],["Matthew",9924],["Samuel",9734],["David",9697],["Joseph",9555],["Carter",9312],["Owen",9288],["Wyatt",9127],["John",9119],["Jack",8834],
      ["Luke",8577],["Jayden",8553],["Dylan",8549],["Grayson",8538],["Levi",8440],["Isaac",8417],["Gabriel",8335],["Julian",8307],["Mateo",8169],["Anthony",8003],
      ["Jaxon",7701],["Lincoln",7368],["Joshua",7364],["Christopher",7261],["Andrew",7234],["Theodore",7020],["Caleb",6929],["Ryan",6905],["Asher",6802],["Nathan",6790],
      ["Thomas",6779],["Leo",6719],["Isaiah",6614],["Charles",6604],["Josiah",6603],["Hudson",6540],["Christian",6509],["Hunter",6066],["Connor",6058],["Eli",6027],
      ["Ezra",6000],["Aaron",5953],["Landon",5827],["Adrian",5788],["Jonathan",5712],["Nolan",5607],["Jeremiah",5561],["Easton",5429],["Elias",5310],["Colton",5284],
      ["Cameron",5271],["Carson",5227],["Robert",5140],["Angel",5032],["Maverick",5014],["Nicholas",4801],["Dominic",4753],["Jaxson",4734],["Greyson",4728],["Ian",4675],
      ["Adam",4675],["Austin",4651],["Santiago",4647],["Jordan",4646],["Cooper",4441],["Brayden",4383],["Roman",4364],["Evan",4356],["Ezekiel",4319],["Xavier",4298],
      ["Jose",4292],["Jace",4276],["Jameson",4221],["Leonardo",4205],["Bryson",4194],["Axel",4055],["Everett",4001],["Parker",3978],["Kayden",3972],["Miles",3964],["Sawyer",3858],
      ["Jason",3847]
    ]
  }]
});

    //ANYCHART WORD CLOUD BUT HAVE TO PAY FOR LICENCE
// anychart.onDocumentReady(function(year2018Data) {
  
// // create a tag (word) cloud chart
//   var chart = anychart.tagCloud();
// // set a chart title
//   chart.title('2018 Male Names')
//   // set an array of angles at which the words will be laid out
//   chart.angles([0])
//   // enable a color range
//   chart.colorRange(true);
//   // set the color range length
//   chart.colorRange().length('80%');
// // display the word cloud chart
//   chart.container("cloud-plot");
//   chart.draw();
// });