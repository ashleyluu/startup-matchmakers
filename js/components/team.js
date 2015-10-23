/*
  var teamList = function(){
  this.element = document.createElement('div');
  this.ul = document.createElement('ul');

  this.element.appendChild(this.ul);
};
*/

var teamNameController = function(){
  this.lists = [];

  this.controls = document.createElement('div');
  this.controls.classList.add('team-controller');
  this.controls.innerHTML = '<input type="text"><div class="add"></div>';

  this.controls.querySelectorAll('input')[0].addEventListener('keydown', function(ev){
    if(ev.keyCode === 13) {
      this.addList(this.controls.querySelectorAll('input')[0].value);
      this.controls.querySelectorAll('input')[0].value = '';
    }
  }.bind(this));

  this.controls.querySelectorAll('.add')[0].addEventListener('click', function(){
    this.addList(this.controls.querySelectorAll('input')[0].value);
    this.controls.querySelectorAll('input')[0].value = '';
  }.bind(this));

  document.getElementById('nav').appendChild(this.controls);

};

teamNameController.prototype.addList = function(teamName){
  var teamList

};



//gallery-container
var Gallery = function(userCard){
  this.gallery = document.createElement('div');
  this.ul = document.createElement('ul');
  var self=this;

  this.gallery.classList.add('gallery');
  this.gallery.appendChild(this.ul);

// var user = [{
//   username: 'whatever',
//   first: 'sdf'
// },
//   {username: 'sdfsd',
//   first: 'dfsdf'
// },
//   {username: '123',
//   first: 'dfs231df'
// }
// ];


var user = new xhrHandler();
user.request('POST', 'http://vvvvvv.club/api/login', {username:'admin', password:'password'}).then(function(){
  user.request('GET','http://vvvvvv.club/api/user').then(function(user){
    console.log(user)

    for (i = 0; i < user.length; i++) {
      var li = document.createElement('li');
      li.innerHTML = '<div class="avatar"></div>' + '<h5> @' + user[i].username + '</h5>'
      self.ul.appendChild(li);
    }
  });
})





document.getElementById('gallery-container').appendChild(this.gallery);

};
