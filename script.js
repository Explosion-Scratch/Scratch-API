const header = document.querySelector('header');
const section = document.querySelector('section');
let requestURL = 'https://scratchdb.lefty.one//v2/user/info/--Explosion--';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  const data = request.response;
}