function clearTable() {
  //Clear Existing Table
  tbody.html('');
}
// Assign the data from `data.js` to a descriptive variable
var yrMaleURL = "http://127.0.0.1:5000/api/v1.0/years/M";
var yrFemaleURL = "http://127.0.0.1:5000/api/v1.0/years/F";

d3.json(yrMaleURL).then(function(maleYearData) {
  console.log(maleYearData);
  console.log([maleYearData]);
};

// Get a reference to the table body
var tbody = d3.select('tbody');

// Filter Table by enter date Function
function handleClick(data) {
  let nameValue  = d3.select('#name').property('value');
  //Filter Data
  let filteredData = tableData.filter(row => row.name === nameValue);
  popTable(filteredData);
  console.log(filteredData);
}

// Store value from form
var submit = d3.select("#filter-btn").on("click", handleClick);

// Populate Table Function
function popTable(data) {
  //Use d3 to update each cell's text with
  // UFO Sightings values (weekday, date, high, low)
  data.forEach((name) => {
    // Append table header from data
    var row = tbody.append('tr');
    //Use `Object.entries` data value
    Object.entries(name).forEach(([key,value]) => {
      // Append a cell to the row for each value
      var cell = row.append('td');
      cell.text(value);
});
});
}

// Populate the Table
popTable(yrMaleURL);
popTable(yrFemaleURL);


// Store value from form
var submit = d3.select("#filter-btn").on("click", handleClick);
