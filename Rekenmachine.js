function plus() {
  var x  = parseFloat(document.getElementById('nummerx').value);
    var y  = parseFloat(document.getElementById('nummery').value);

    var ans =  x + y;
    if(isNaN(ans)) {
      alert("X en Y moeten een getal zijn");
      return;
    }
    document.getElementById('divresult').innerHTML = ans;
}

function min() {
  var x  = parseFloat(document.getElementById('nummerx').value);
    var y  = parseFloat(document.getElementById('nummery').value);

    var ans =  x - y;
    if(isNaN(ans)) {
      alert("X en Y moeten een getal zijn");
      return;
    }
    document.getElementById('divresult').innerHTML = ans;
}

function keer() {
  var x  = parseFloat(document.getElementById('nummerx').value);
    var y  = parseFloat(document.getElementById('nummery').value);

    var ans =  x * y;
    if(isNaN(ans)) {
      alert("X en Y moeten een getal zijn");
      return;
    }
    document.getElementById('divresult').innerHTML = ans;
}
function delendoor() {
  var x  = parseFloat(document.getElementById('nummerx').value);
    var y  = parseFloat(document.getElementById('nummery').value);
if(y == 0) {
  alert("kan niet delen door 0");
  return;
}
    var ans =  x / y;
    if(isNaN(ans)) {
      alert("X en Y moeten een getal zijn");
      return;
    }
    document.getElementById('divresult').innerHTML = ans;
}

function kwadraat() {
  var x  = parseFloat(document.getElementById('nummerx').value);


    var ans =  Math.pow(x, 2);
    if(isNaN(ans)) {
      alert("X moet een getal zijn");
      return;
    }
    document.getElementById('divresult').innerHTML = ans;
}

function macht() {
  var x  = parseFloat(document.getElementById('nummerx').value);
    var y  = parseFloat(document.getElementById('nummery').value);

    var ans =  Math.pow(x, y);
    if(isNaN(ans)) {
      alert("X en Y moeten een getal zijn");
      return;
    }
    document.getElementById('divresult').innerHTML = ans;
}

function wortel() {
  var x  = parseFloat(document.getElementById('nummerx').value);


    var ans =  Math.sqrt(x);
    if(isNaN(ans)) {
      alert("X moet een getal zijn");
      return;
    }
    document.getElementById('divresult').innerHTML = ans;
}

function doen() {
  var x = parseFloat(document.getElementById('nummerx').value);
if(isNaN(x)){
  alert("X moet een getal zijn");
  return;
}
  var start = 1;
  var end = 11;
  var ans = "";

  for(start; start < end; start++){
    ans = ans + x + " keer " + start + " is " + start * x + "<br>";
  }
  document.getElementById('divresult').innerHTML = ans;
}
