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

// Map Visual
// Create a map object
var myMap = L.map("map", {
  center: [40.09, -95.71],
  zoom: 4
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/light-v10",
  accessToken: API_KEY
}).addTo(myMap);


// Table Visual
var tbody = d3.select('tbody');

//Assign the data to a descriptive variable
var yrFemaleURL = "http://127.0.0.1:5000/api/v1.0/years/F";
  var yearsFemaleData = []
  d3.json(yrFemaleURL).then(function(femaleData) {
    yearsFemaleData = femaleData;
  });

// Assign the data to a descriptive variable
var yrMaleURL = "http://127.0.0.1:5000/api/v1.0/years/M";
var yearsMaleData = []
d3.json(yrMaleURL).then(function(maleData) {
  yearsMaleData = maleData;
  
    // Populate the Table
    popTable(yearsMaleData);
});


function popTable(data) {
  console.log(`DATA: ${data}`)
  //Clear Existing Table
  tbody.html('');
  //Use d3 to update each cell's text with
  data.forEach((names) => {
    console.log(names);
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
  d3.event.preventDefault();
  console.log(filteredData);
}

// Store value from form
var submit = d3.select("#submit").on("click", handleClick);
