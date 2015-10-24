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
  this.controls.innerHTML = '<div class="wrapper"><input type="text"><div class="add"></div></div>';
  this.ul= document.createElement('ul');
  this.ul.classList.add('constructorNames')
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
    listItem.classList.add('teams')
    listItem.innerHTML= item.content;
    console.log(listItem)
  //set content of li

this.ul.appendChild(listItem);
};


//gallery-container
var Gallery = function(userCard){
  this.gallery = document.createElement('div');
  this.ul = document.createElement('ul');
  var self=this;

  this.gallery.classList.add('gallery');
  this.gallery.appendChild(this.ul);


var user = new xhrHandler();
user.request('POST', 'http://vvvvvv.club/api/login', {username:'admin', password:'password'}).then(function(){
  user.request('GET','http://vvvvvv.club/api/user').then(function(user){
    console.log(user)

    for (i = 0; i < user.length; i++) {
      var li = document.createElement('li');
      li.innerHTML = '<img class="avatar" src="http://vvvvvv.club'+user[i].avatar.image+'">' + '<h5> @' + user[i].username + '</h5>'
      li.id = "dragged";
      li.setAttribute("draggable", "true");
      li.setAttribute("ondragstart", "event.dataTransfer.setData('text/plain',null)");
      self.ul.appendChild(li);
    }
  });
})

document.getElementById('gallery-container').appendChild(this.gallery);

};
