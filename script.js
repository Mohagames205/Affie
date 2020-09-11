function init() {
    loadJSON(function (response) {

      var actual_JSON = JSON.parse(response);
        console.log(actual_JSON);
      actual_JSON.pictures.forEach((element) => {
        var html = `<div class="photo-group ${element.reverse}">
        <div class="foto-container">
            <img id="img" src="assets/${element.foto}" width="400px" height=auto>
        </div>
        <div class="text-container">
            <p>${element.text}</p>
        </div>
        </div>`;
        document.getElementById("photos").innerHTML += html;
      });
    });
  }
  
  function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", "pictures.json", true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
  }