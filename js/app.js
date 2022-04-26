fetch('http://127.0.0.1:5000/user')
  .then(function(response) {return response.json()})
  .then(function(data) {
      data.forEach(function(element) {
        var tag = document.createElement("p");
        var text = document.createTextNode("User: " + element.user_name + ", with email: " + element.user_email + ", with ID: " + element.user_id);
        tag.appendChild(text);
        var element = document.getElementById("users");
        element.appendChild(tag); 
      });
    });

document.getElementById("submit_user_btn").onclick = function() {
    var user_email = document.getElementById("user_email_textbox").value;
    var user_name = document.getElementById("user_name_textbox").value;
    var user_pwd = document.getElementById("user_pwd_textbox").value;

    var user_body = {
        "user_email": user_email,
        "user_name": user_name,
        "user_password": user_pwd
    }
    fetch('http://127.0.0.1:5000/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user_body)
    })
};