$(document).ready(function () {
  // Call to function with anonymous callback
  loadJSON(function(response) {

    jsonresponse = JSON.parse(response);

    console.log(jsonresponse[0]);

    console.log('boa tarde');

  });
});


function loadJSON(callback) {

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'JSON/example.json', true);

  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {

      // .open will NOT return a value but simply returns undefined in async mode so use a callback
      callback(xobj.responseText);

    }
  }
  xobj.send(null);

  console.log('bom dia');

}
