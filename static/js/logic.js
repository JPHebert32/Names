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
  d3.event.preventDefault();
  //console.log(filteredData);
}

// Store value from form
var submit = d3.select("#submit").on("click", handleClick);

// 2018 Data   year2018Data
var yr2018URL = "http://127.0.0.1:5000/api/v1.0/year/2018";
var year2018Data = []
d3.json(yr2018URL).then(function(yearData) {
  year2018Data = yearData;
})
