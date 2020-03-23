// read from json at launch event
var getForm = document.getElementById('getForm');
getForm.addEventListener('submit', e => {
  e.preventDefault();
  
  // access url
  let urlRand = 'https://randomuser.me/api?results=10';

  axios.get(urlRand)
  .then( data => {
    var person = data.data.results;

    var html = '<h2>GET Data Result</h2>';
    for ( var x in person) {
      html += `${person[x].name.first} ${person[x].name.last}`
      html += ` <img src="${person[x].picture.thumbnail}"><br>`;
      console.log(html)
    }
    document.querySelector('#output').innerHTML = html;
    console.log(person)
  })
  .catch(err => console.log(new Error(err)));

});

var postForm = document.getElementById('postForm');
postForm.addEventListener('submit', e => {
  e.preventDefault();

  let postUrl = 'http://s179017901.onlinehome.us/discoveryvip/';
  let first = document.querySelector('#first').value;
  let last = document.querySelector('#last').value;

  const myData = `first=${first}&last=${last}`;

  axios.post(postUrl, myData)
    .then( result => {
      console.log(result.data)
    })
    .catch(err => console.log(new Error(err)));
})
