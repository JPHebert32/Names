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


// var sex = "male";
// // Toggle sex
// function toggleSex(newSex) {
  
//   sex = newSex;
//   console.log(newSex);
//   //call popttable func
// }

// // Add event listener for male button
// var male = d3.select("#male-Tab").on("click", toggleSex('male'));
// // Add event listener for female button
// var female = d3.select("#female-Tab").on("click", toggleSex('female'));


// Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);


// Table Visual
var tbody = d3.select('tbody');

// //Assign the data to a descriptive variable
// var yrFemaleURL = "http://127.0.0.1:5000/api/v1.0/years/F";
//   var yearsFemaleData = []
//   d3.json(yrFemaleURL).then(function(femaleData) {
//     yearsFemaleData = femaleData;
//   });

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
//   if (sex == "male") {
//     data = yearsMaleData;
// }   else {
//     data = yearsFemaleData;
// }
  //console.log(`DATA: ${data}`)
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
