// side nav
var teamNameController = function(){
  // this.lists = [];

  this.controls = document.createElement('div');
  this.controls.classList.add('team-controller');
  this.controls.innerHTML = '<div class="wrapper"><input type="text"><div class="add"></div></div>';
  this.ul = document.createElement('ul');
  this.ul.classList.add('constructorNames')
  this.controls.appendChild(this.ul);

  this.controls.querySelectorAll('input')[0].addEventListener('keydown', function(ev){
    if(ev.keyCode === 13) {
      var item = {
        content: this.controls.querySelectorAll('input')[0].value
      };
      this.addList(item);
      this.controls.querySelectorAll('input')[0].value = '';
    }
  }.bind(this));

  this.controls.querySelectorAll('.add')[0].addEventListener('click', function(){
    var item = {
      content: this.controls.querySelectorAll('input')[0].value
    };
    this.addList(item);
    this.controls.querySelectorAll('input')[0].value = '';
  }.bind(this));

  document.getElementById('nav').appendChild(this.controls);

};


// adding team names to list
teamNameController.prototype.addList = function(item){
  var teamName = document.createElement('div');
    teamName.classList.add('droppable', 'horizontal-wrap');
    teamName.innerHTML = '<div>' + item.content + '</div>';

  this.ul.appendChild(teamName);

};


// user gallery container
var Gallery = function(){
  this.gallery = document.createElement('div');
  this.ul = document.createElement('ul');
  var self=this;

  this.gallery.classList.add('gallery');
  this.gallery.appendChild(this.ul);

  var user = new xhrHandler();
  user.request('POST', 'http://vvvvvv.club/api/login', {username:'admin', password:'password'}).then(function(){
    user.request('GET','http://vvvvvv.club/api/user').then(function(user){

      for (i = 0; i < user.length; i++) {
        if (user[i].avatar){
        var li = document.createElement('li');
        li.innerHTML = '<img class="avatar" draggable="false" src="http://vvvvvv.club' + user[i].avatar.image + '">' + '<h5> @' + user[i].username + '</h5>'
        li.setAttribute("draggable", "true");
        li.setAttribute("ondragstart", "event.dataTransfer.setData('text/plain',null)");
        self.ul.appendChild(li);

        // drag and drop
        li.addEventListener("dragstart", function(ev){
          dragged = event.target;
          // make it half transparent
          event.target.style.opacity = .5;
        });

        li.addEventListener("dragend", function( event ) {
          // reset the transparency
          event.target.style.opacity = "";
        }, false);

        document.addEventListener("dragover", function( event ) {
          // prevent default to allow drop
          event.preventDefault();
        }, false);

        document.addEventListener("drop", function( event ) {
          // prevent default action (open as link for some elements)
           event.preventDefault();
            // move dragged elem to the selected drop target
            // == looked only for things equal to droppable but indexOf looks for anything that is classed as droppable
            if ( event.target.className.indexOf("droppable") >= 0) {
              event.target.appendChild(dragged);
            }
        }, false);
      }
      }

  });
})

document.getElementById('gallery-container').appendChild(this.gallery);

};
