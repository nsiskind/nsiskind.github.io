
//stores the clicks and the count
var clicks = [];
var clickCount = 0

//Makes calculations when the user clicks!
document.onclick = function(e) {
  clickCount++;
  //Log event info
  console.log(e);

  //Coordinates of click on page
  var x = e.x;
  var y = e.y;

  //Stores element offset
  var count = 0;
  var eleOffT = 0;
  var eleOffL = 0;

  //Calculates the offset of the element clicked on
  while((typeof e.path[count].offsetTop !== 'undefined') && (typeof e.path[count].offsetLeft !== 'undefined')){
    eleOffL += e.path[count].offsetLeft;
    eleOffT += e.path[count].offsetTop;

    count++;
  }
  //Displays element clicked on
  var element = e.path[0].localName;
  console.log("\nI clicked " + element);

  //Calculates coordinates inside of element, top right is (0,0)
  var x_in_ele = x - eleOffL;
  var y_in_ele = y - eleOffT;

  console.log("Coordinates in element: " + x_in_ele + ", " + y_in_ele);

  var click =   {
    element : element,
    x_in_ele : x_in_ele,
    y_in_ele : y_in_ele
  }

//MAKE SURE THIS IS GOOD
  clicks.push(click)
  console.log(clicks.length);
  if(clickCount >= 5){
    sendEverything();
    clicks = [];
    clickCount = 0;
}

}



function sendEverything(){
   var encodedURL = encodeURIComponent(JSON.stringify(clicks));

  // Sending a receiving data in JSON format using GET method
  var xhr = new XMLHttpRequest();
  var url = "https://oo2xkyltna.execute-api.us-east-1.amazonaws.com/Beta/clicktracker?testQ=" + encodedURL;

xhr.open("GET", url, true);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json);//+ "\n" + json.xVal + " \n" +  json.yVal);
    }
};
xhr.send();//json);


}
