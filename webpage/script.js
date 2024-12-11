alert("Dismiss to run...");
var xmlHttp = new XMLHttpRequest();
xmlHttp.open("GET", "http://localhost:5000/test", false ); // false for synchronous request
xmlHttp.send( null );
return xmlHttp.responseText;