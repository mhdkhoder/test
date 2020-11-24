fetch('http://localhost:3000/services')
  .then(response => response.json())
  .then(json => {
    var servicecontent =

      `<div>
        <div icon-box"></div>
        <div class="icon"><i class="icofont-computer"></i></div>       
       <h4 class="title"><a href="">res</a></h4>
       <p style='break-word'>desc</p>
      </div>`

    var mainrow = document.getElementById("mainrow");
    for (let i = 0; i < json.services.length; i++) {
      var x = document.createElement("div");
      x.classList.add("col-sm-4");
      x.style.margin = 10;
      x.style.padding = 20;
      var currentservicecontent = servicecontent;
      currentservicecontent = currentservicecontent.replace('res', json.services[i].name);
      currentservicecontent = currentservicecontent.replace('desc', json.services[i].description);
      x.innerHTML = currentservicecontent;
      mainrow.appendChild(x);

    }
    console.log(json);
  })