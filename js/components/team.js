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
  this.ul= document.createElement('ul');
  this.controls.appendChild(this.ul);


  this.controls.querySelectorAll('input')[0].addEventListener('keydown', function(ev){
    if(ev.keyCode === 13) {
      var item = {
        content: this.controls.querySelectorAll('input')[0].value
      };
      this.addList(item);
      //this.addList(this.controls.querySelectorAll('input')[0].value) ='';
      this.controls.querySelectorAll('input')[0].value = '';
    }
  }.bind(this));

  this.controls.querySelectorAll('.add')[0].addEventListener('click', function(){
    this.addList(this.controls.querySelectorAll('input')[0].value);
    this.controls.querySelectorAll('input')[0].value = '';
  }.bind(this));
//console.log('hi')
  document.getElementById('nav').appendChild(this.controls);

};

//adding team names to list- accordian exercise
teamNameController.prototype.addList = function(item){
  console.log(item)
  var listItem = document.createElement('li');
    listItem.innerHTML= item.content;
    console.log(listItem)
  //set content of li

this.ul.appendChild(listItem);
};

//lolll

//gallery-container
var Gallery = function(userCard){
  this.gallery = document.createElement('div');
  this.ul = document.createElement('ul');
  var self=this;

  this.gallery.classList.add('gallery');
  this.gallery.appendChild(this.ul);

var user = [{
  username: 'whatever',
  first: 'sdf'
},
  {username: 'sdfsd',
  first: 'dfsdf'
},
  {username: '123',
  first: 'dfs231df'
}
];

for (i = 0; i < user.length; i++) {

  var li = document.createElement('li');
  li.classList.add('galleryLi');
  li.innerHTML = '<div class="avatar"></div>' + '<h5> @' + user[i].username + '</h5>'
  this.ul.appendChild(li);
}
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
