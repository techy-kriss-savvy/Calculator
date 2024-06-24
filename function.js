let add=()=> {
  var x = Number(document.getElementById("q").value);
  var y= Number(document.getElementById("w").value);
  let z=x+y;
   document.getElementById("demo").value = z;
  
}
let sub=()=> {
  var x = Number(document.getElementById("q").value);
  var y= Number(document.getElementById("w").value);
  let z=x-y;
   document.getElementById("demo").value = z;
  
}
let mul=()=> {
  var x = Number(document.getElementById("q").value);
  var y= Number(document.getElementById("w").value);
  let z=x*y;
   document.getElementById("demo").value = z;
  
}
let div=()=> {
  var x = Number(document.getElementById("q").value);
  var y= Number(document.getElementById("w").value);
  let z=x/y;
   document.getElementById("demo").value = z;
  
}