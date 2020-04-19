var url = window.location.search.split('~')

console.log(url[1]);

function play() {
      document.getElementById('wrap').style.display = 'none';
      document.getElementById("paste").innerHTML = '<video src=' + url[1] + ' controls > < /video>'
}

window.history.replaceState({}, document.title, "/" + "index.html");