var loginForm = function() {
  this.element = document.createElement ('div');
  this.username = document.createElement ('div');
  this.password = document.createElement ('div');
  this.button = document.createElement ('div');
  this.footer = document.createElement ('footer');


  this.element.appendChild(this.username);
  this.element.appendChild(this.password);
  this.element.appendChild(this.button);
  this.element.appendChild(this.footer);

  this.username.classList.add('username');
  this.password.classList.add('password');
  this.button.classList.add('button');
  this.footer.classList.add('footer');

  this.username.innerHTML = '<input type="text" id="name" placeholder="username">';
  this.password.innerHTML = '<input type="password" id="pass" placeholder="password">';
  this.button.innerHTML = '<button type="submit" value="Submit">login</button>';
  this.footer.innerHTML = '<div class="footer"><a href="login.html">Dont have an account?</a></div>';

  this.button.addEventListener('click', function(){
    var formName = document.getElementById('name').value;
    var formPassword = document.getElementById('pass').value;

  var options = {
    name: formName,
    pass: formPassword
  };

  var blah = new xhrHandler();
  blah.request('POST','http://vvvvvv.club/api/login',options).then(function(res){
    if(res === 200){
    console.log(res);
  }
  })


  });
  //console.log('hi')
  document.getElementById('container').appendChild(this.element);

};
