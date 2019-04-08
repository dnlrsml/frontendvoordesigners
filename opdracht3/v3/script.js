var header = document.querySelector('header');
var content = document.querySelector('.content');
var btnname = "More";
var buttoncl = document.querySelector('button');






var requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';



fetch(requestURL)
.then(response=> response.json())
.then(result=> {
  renderData(result)
});



function renderData(data) {

  for(var item of data) {


    var div = document.createElement('div');
    div.innerHTML = '<img src="' + item.cover + '"></img>';
    var myH2 = document.createElement('h2');
    myH2.textContent = item.title;
    var plot = document.createElement('p');
    plot.textContent = item.simple_plot;
    var btn = document.createElement('button');
    btn.setAttribute("class", "plotexp");

    btn.textContent= btnname;
    var vid = document.createElement('video');
    vid.innerHTML =  '<source src=" ' + item.trailer +' " type="video/mp4">';
    var date = document.createElement('p');
    date.textContent = item.release_date;
    var actors = document.createElement('ul');
    actors.textContent = item.actors;
    var plotlarg = document.createElement('p');
    plotlarg.setAttribute("class", "btn_class");
    plotlarg.textContent = item.plot;






    var section = document.createElement('section');
        section.appendChild(div);
    section.appendChild(myH2);
    section.appendChild(date);
        section.appendChild(plot);
    section.appendChild(vid);

//    section.appendChild(btn);
    section.appendChild(plotlarg);




    content.appendChild(section);

  }
}
