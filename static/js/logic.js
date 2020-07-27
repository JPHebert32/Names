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
  
  // Build the plots and map with selectedName
  // create Map(selectedName);
  //popTable(selectedName);
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



//Table Visual
// const temp = [{"year":1973,"name":"Jennifer","sex":"F","count":62447},{"year":1973,"name":"Amy","sex":"F","count":26964},{"year":1973,"name":"Michelle","sex":"F","count":26934},{"year":1973,"name":"Kimberly","sex":"F","count":23533},{"year":1973,"name":"Lisa","sex":"F","count":22669},{"year":1973,"name":"Melissa","sex":"F","count":22480},{"year":1973,"name":"Angela","sex":"F","count":20896},{"year":1973,"name":"Heather","sex":"F","count":19349},{"year":1973,"name":"Stephanie","sex":"F","count":17263},{"year":1973,"name":"Rebecca","sex":"F","count":14870},{"year":1973,"name":"Nicole","sex":"F","count":13924},{"year":1973,"name":"Julie","sex":"F","count":12787},{"year":1973,"name":"Elizabeth","sex":"F","count":12357},{"year":1973,"name":"Mary","sex":"F","count":12316},{"year":1973,"name":"Tammy","sex":"F","count":11244},{"year":1973,"name":"Christina","sex":"F","count":10888},{"year":1973,"name":"Christine","sex":"F","count":10550},{"year":1973,"name":"Kelly","sex":"F","count":10517},{"year":1973,"name":"Laura","sex":"F","count":10339},{"year":1973,"name":"Tracy","sex":"F","count":9912},{"year":1973,"name":"Dawn","sex":"F","count":9890},{"year":1973,"name":"Shannon","sex":"F","count":9804},{"year":1973,"name":"Karen","sex":"F","count":9355},{"year":1973,"name":"Tina","sex":"F","count":9308},{"year":1973,"name":"Susan","sex":"F","count":9283},{"year":1973,"name":"Cynthia","sex":"F","count":8744},{"year":1973,"name":"Patricia","sex":"F","count":8476},{"year":1973,"name":"Lori","sex":"F","count":8472},{"year":1973,"name":"Wendy","sex":"F","count":7813},{"year":1973,"name":"Andrea","sex":"F","count":7767},{"year":1973,"name":"Maria","sex":"F","count":7653},{"year":1973,"name":"Stacy","sex":"F","count":7339},{"year":1973,"name":"April","sex":"F","count":7263},{"year":1973,"name":"Jessica","sex":"F","count":7226},{"year":1973,"name":"Sarah","sex":"F","count":7216},{"year":1973,"name":"Tonya","sex":"F","count":7180},{"year":1973,"name":"Tara","sex":"F","count":6707},{"year":1973,"name":"Denise","sex":"F","count":6618},{"year":1973,"name":"Sandra","sex":"F","count":6584},{"year":1973,"name":"Monica","sex":"F","count":6376},{"year":1973,"name":"Stacey","sex":"F","count":6252},{"year":1973,"name":"Rachel","sex":"F","count":6106},{"year":1973,"name":"Melanie","sex":"F","count":6079},{"year":1973,"name":"Michele","sex":"F","count":5996},{"year":1973,"name":"Teresa","sex":"F","count":5988},{"year":1973,"name":"Carrie","sex":"F","count":5836},{"year":1973,"name":"Pamela","sex":"F","count":5814},{"year":1973,"name":"Crystal","sex":"F","count":5771},{"year":1973,"name":"Danielle","sex":"F","count":5649},{"year":1973,"name":"Tanya","sex":"F","count":5631},{"year":1973,"name":"Amanda","sex":"F","count":5626},{"year":1973,"name":"Tiffany","sex":"F","count":5500},{"year":1973,"name":"Brenda","sex":"F","count":5382},{"year":1973,"name":"Holly","sex":"F","count":5115},{"year":1973,"name":"Donna","sex":"F","count":5058},{"year":1973,"name":"Deborah","sex":"F","count":4981},{"year":1973,"name":"Sharon","sex":"F","count":4964},{"year":1973,"name":"Kristen","sex":"F","count":4937},{"year":1973,"name":"Dana","sex":"F","count":4932},{"year":1973,"name":"Robin","sex":"F","count":4805},{"year":1973,"name":"Linda","sex":"F","count":4730},{"year":1973,"name":"Jill","sex":"F","count":4539},{"year":1973,"name":"Barbara","sex":"F","count":4437},{"year":1973,"name":"Katherine","sex":"F","count":4418},{"year":1973,"name":"Heidi","sex":"F","count":4396},{"year":1973,"name":"Tamara","sex":"F","count":4286},{"year":1973,"name":"Catherine","sex":"F","count":4262},{"year":1973,"name":"Kathleen","sex":"F","count":4249},{"year":1973,"name":"Theresa","sex":"F","count":4179},{"year":1973,"name":"Rhonda","sex":"F","count":4163},{"year":1973,"name":"Veronica","sex":"F","count":4151},{"year":1973,"name":"Melinda","sex":"F","count":4144},{"year":1973,"name":"Christy","sex":"F","count":4121},{"year":1973,"name":"Cheryl","sex":"F","count":4011},{"year":1973,"name":"Leslie","sex":"F","count":3954},{"year":1973,"name":"Sherry","sex":"F","count":3953},{"year":1973,"name":"Nancy","sex":"F","count":3942},{"year":1973,"name":"Kristin","sex":"F","count":3905},{"year":1973,"name":"Erin","sex":"F","count":3877},{"year":1973,"name":"Renee","sex":"F","count":3846},{"year":1973,"name":"Erica","sex":"F","count":3796},{"year":1973,"name":"Brandy","sex":"F","count":3714},{"year":1973,"name":"Gina","sex":"F","count":3698},{"year":1973,"name":"Debra","sex":"F","count":3653},{"year":1973,"name":"Diana","sex":"F","count":3521},{"year":1973,"name":"Paula","sex":"F","count":3504},{"year":1973,"name":"Anna","sex":"F","count":3499},{"year":1973,"name":"Jacqueline","sex":"F","count":3499},{"year":1973,"name":"Sara","sex":"F","count":3479},{"year":1973,"name":"Misty","sex":"F","count":3475},{"year":1973,"name":"Alicia","sex":"F","count":3432},{"year":1973,"name":"Cindy","sex":"F","count":3283},{"year":1973,"name":"Ann","sex":"F","count":3255},{"year":1973,"name":"Margaret","sex":"F","count":3168},{"year":1973,"name":"Victoria","sex":"F","count":3071},{"year":1973,"name":"Valerie","sex":"F","count":3042},{"year":1973,"name":"Kristina","sex":"F","count":3038},{"year":1973,"name":"Suzanne","sex":"F","count":3036},{"year":1973,"name":"Emily","sex":"F","count":3029},{"year":1973,"name":"Jodi","sex":"F","count":3024},{"year":1973,"name":"Sheila","sex":"F","count":2999},{"year":1973,"name":"Tracey","sex":"F","count":2978},{"year":1973,"name":"Jamie","sex":"F","count":2953},{"year":1973,"name":"Shelly","sex":"F","count":2911},{"year":1973,"name":"Allison","sex":"F","count":2904},{"year":1973,"name":"Laurie","sex":"F","count":2894},{"year":1973,"name":"Kathryn","sex":"F","count":2882},{"year":1973,"name":"Kristi","sex":"F","count":2846},{"year":1973,"name":"Brandi","sex":"F","count":2843},{"year":1973,"name":"Regina","sex":"F","count":2843},{"year":1973,"name":"Deanna","sex":"F","count":2796},{"year":1973,"name":"Bridget","sex":"F","count":2765},{"year":1973,"name":"Yolanda","sex":"F","count":2753},{"year":1973,"name":"Carla","sex":"F","count":2686},{"year":1973,"name":"Diane","sex":"F","count":2602},{"year":1973,"name":"Carolyn","sex":"F","count":2569},{"year":1973,"name":"Beth","sex":"F","count":2564},{"year":1973,"name":"Katrina","sex":"F","count":2524},{"year":1973,"name":"Janet","sex":"F","count":2521},{"year":1973,"name":"Katina","sex":"F","count":2474},{"year":1973,"name":"Carol","sex":"F","count":2457},{"year":1973,"name":"Anne","sex":"F","count":2451},{"year":1973,"name":"Tricia","sex":"F","count":2386},{"year":1973,"name":"Kathy","sex":"F","count":2371},{"year":1973,"name":"Colleen","sex":"F","count":2307},{"year":1973,"name":"Aimee","sex":"F","count":2281},{"year":1973,"name":"Shelley","sex":"F","count":2259},{"year":1973,"name":"Traci","sex":"F","count":2259},{"year":1973,"name":"Kim","sex":"F","count":2194},{"year":1973,"name":"Amber","sex":"F","count":2181},{"year":1973,"name":"Sonya","sex":"F","count":2169},{"year":1973,"name":"Erika","sex":"F","count":2156}]
// //console.log(temp);

var tbody = d3.select('tbody');

// Assign the data to a descriptive variable
var yrMaleURL = "http://127.0.0.1:5000/api/v1.0/years/M";
var yearsMaleData = []
d3.json(yrMaleURL).then(function(maleData) {
  yearsMaleData = maleData;

  // var yrFemaleURL = "http://127.0.0.1:5000/api/v1.0/years/F";
  // var yearsFemaleData = []
  // d3.json(yrFemaleURL).then(function(femaleData) {
  //   yearsFemaleData = femaleData;


    // Get a reference to the table body
    
    // Populate Table Function
    
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
