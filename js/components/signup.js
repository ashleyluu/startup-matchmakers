var signupForm = function() {
  this.element = document.createElement ('div');
  this.email = document.createElement ('div');
  this.username = document.createElement ('div');
  this.password = document.createElement ('div');
  this.firstName = document.createElement ('div');
  this.lastName = document.createElement ('div');
  this.button = document.createElement ('div');
  this.footer = document.createElement ('footer');

  this.email.classList.add('email');
  this.username.classList.add('username');
  this.password.classList.add('password');
  this.firstName.classList.add('firstName');
  this.lastName.classList.add('lastName');
  this.button.classList.add('button');
  this.footer.classList.add('footer');

  this.element.appendChild(this.email);
  this.element.appendChild(this.username);
  this.element.appendChild(this.password);
  this.element.appendChild(this.firstName);
  this.element.appendChild(this.lastName);
  this.element.appendChild(this.button);
  this.element.appendChild(this.footer);

  this.email.innerHTML = '<input type="email" placeholder="email address">';
  this.username.innerHTML = '<input type="text" placeholder="username">';
  this.password.innerHTML = '<input type="password" placeholder="password">';
  this.firstName.innerHTML = '<input type="text" placeholder="first name">';
  this.lastName.innerHTML = '<input type="text" placeholder="last name">';
  this.button.innerHTML = '<button type="submit" value="Submit">create user</button>';
  this.footer.innerHTML = '<div class="footer"><a href="login.html">Already have an account?</a></div>';









  document.getElementById('container').appendChild(this.element);

};
