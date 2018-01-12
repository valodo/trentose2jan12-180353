

var invio = function () {
  var side1 = document.getElementById("side1");
  var side2 = document.getElementById("side2");
    
  var url = "getArea/?side1=" + side1.value + "&side2=" + side2.value;
  console.log(url);
  fetch(url,{
    method: "get",
    data: JSON.stringify({ side1: side1, side2: side2 }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((response)=>{
      alert(response.body);
      var data = response.body;
      return data;
  }).then((data) =>{
      console.log(data);
      alert(data[0]);
      
      var div= document.getElementById("divResult");
      div.empty;
      div.append(data[0]);
  });
};