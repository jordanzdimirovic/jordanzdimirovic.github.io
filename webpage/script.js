let runme = function (){
    alert("Dismiss to run...");
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "http://localhost:5001/test", false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

window.onload = () => {
    runme();
};