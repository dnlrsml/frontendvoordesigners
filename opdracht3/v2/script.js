var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';

fetch(requestURL)
.then(response=> response.json())
.then(result=> {
console.log(result);

  console.log(result);
     var myH1 = document.createElement('h1');
     myH1.textContent = result.title;
     header.appendChild(myH1);





  // function populateHeader(data) {
  //   console.log(result);
  //   var myH1 = document.createElement('h1');
  //   myH1.textContent = result.location.name;
  //   header.appendChild(myH1);
  //

  // }

});


// request.onload = function() {
//   populateHeader(currentWeather);
//   weatherDetail(currentWeather);
// };

// var currentWeather = request.response;

function weatherDetail(jsonObj) {

}
