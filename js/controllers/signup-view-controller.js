var newSignup = new signupForm();


// Stores img in temporary location and then reads file back in URL(base64) format
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        var avatar = document.getElementById('avatar');
        reader.onload = function (e) {
          console.log(e.target.result);
          avatar.src = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
    }
}
