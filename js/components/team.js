var teamList = function(){
  this.element = document.createElement('div');
  this.ul = document.createElement('ul');

  this.element.appendChild(this.ul);
};


var teamNameController = function(){
  this.lists = [];

  this.controls = document.createElement('div');

  this.controls.classLIst.add('team-controller');
  this.controls.innerHTML = '<input type="text"><div class="add"></div>';

  this.controls.querySelectorAll('input')[0].addEventListener('keydown',function(enter){
    if(enter.keyCode === 13) {
      this.addList(this.controls.querySelectorAll('input')[0].value);
      this.controls.querySelectorAll('input')[0].value = '';
    }
  }.bind(this));

  this.controls.querySelectorAll('.add')[0].addEventListener('click',function(){
    this.addList(this.controls.querySelectorAll('input')[0].value);
    this.controls.querySelectorAll('input')[0].value = '';
  }.bind(this));

  document.getElementById('nav').appendChild(this.controls);

};

teamNameController.prototype.addList = function(teamName){
  var teamList


};
