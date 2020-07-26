//Search function -User Input
// Submit Button handler
// function handleSubmit() {
//   // Prevent the page from refreshing
//   d3.event.preventDefault();
//
//   // Select the input value from the form
//   var name = d3.select("#nameInput").node().value;
//   console.log(name);
// }




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
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);



// //Table Visual
//
// // Assign the data to a descriptive variable
// var yrMaleURL = "http://127.0.0.1:5000/api/v1.0/years/M";
// var yrFemaleURL = "http://127.0.0.1:5000/api/v1.0/years/F";
//
//
// // Get a reference to the table body
// var tbody = d3.select('tbody');
//
// // Populate Table Function
// function popTable(yrMaleURL, yrFemaleURL) {
//   //Clear Existing Table
//   tbody.html('');
//   //Use d3 to update each cell's text with
//   nameData.forEach((names) => {
//     // Append table header from data
//     var row = tbody.append('tr');
//     //Use `Object.entries` data value
//     Object.entries(names).forEach(([key,value]) => {
//       // Append a cell to the row for each value
//       var cell = row.append('td');
//       cell.text(value);
// });
// });
// }
//
//
// // Filter Table by enter date Function
// function handleClick() {
//   let nameValue  = d3.select('#nameInput').property('value');
//   //Filter Data
//   let filteredData = tableData.filter(row => row.name === nameValue);
//   popTable(filteredData);
//   console.log(filteredData);
// }
//
// // Store value from form
// var submit = d3.select("#filter-btn").on("click", handleClick);
//
//
//
// // Populate the Table
// popTable(yrMaleURL);
// popTable(yrFemaleURL);
//
// // Add event listener for submit button
// d3.select("#submit").on("click", handleSubmit);
