var loginForm = function() {
  this.element = document.createElement ('div');
  this.username = document.createElement ('div');
  this.password = document.createElement ('div');
  this.button = document.createElement ('div');

  this.element.appendChild(this.username);
  this.element.appendChild(this.password);
  this.element.appendChild(this.button);

  this.username.classList.add('username');
  this.password.classList.add('password');
  this.button.classList.add('button');

  this.username.innerHTML = '<input type="text">';
  this.password.innerHTML = '<input type="text">';
  this.button.innerHTML = '<button type="submit" value="Submit">login</button>';

  document.getElementById('container').appendChild(this.element);
};
