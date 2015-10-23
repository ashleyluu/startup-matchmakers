var signupForm = function() {
  this.element = document.createElement ('div');
  this.avatar = document.createElement ('div');
  this.chooseFile = document.createElement ('div');
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



  this.avatar.innerHTML = '<img id="avatar" src="images/ic_person_black_48px.svg" alt="Image preview">';
  this.chooseFile.innerHTML = '<input id="chooseFile" type="file" accept="image" onchange="readURL(this)">';
  this.email.innerHTML = '<input type="email" id="email" placeholder="email address">';
  this.username.innerHTML = '<input type="text" id="name" placeholder="username">';
  this.password.innerHTML = '<input type="password" id="pass" placeholder="password">';
  this.firstName.innerHTML = '<input type="text" id="firstName" placeholder="first name">';
  this.lastName.innerHTML = '<input type="text" id="lastName" placeholder="last name">';
  this.button.innerHTML = '<button type="submit" id="submitButton" value="Submit">create user</button>';
  this.footer.innerHTML = '<div class="footer"><a href="login.html">Already have an account?</a></div>';

  this.element.appendChild(this.avatar);
  this.element.appendChild(this.chooseFile);
  this.element.appendChild(this.email);
  this.element.appendChild(this.username);
  this.element.appendChild(this.password);
  this.element.appendChild(this.firstName);
  this.element.appendChild(this.lastName);
  this.element.appendChild(this.button);
  this.element.appendChild(this.footer);

  document.getElementById('container').appendChild(this.element);

};
