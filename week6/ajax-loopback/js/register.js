function registerAJAX() {
    var location = "http://localhost:3000/api/users";
    var http_request = new XMLHttpRequest();

    http_request.onreadystatechange = function() {
        //A new XMLHttpRequest object starts in state 0
        if (http_request.readyState == 1  ) {
            console.log("Successfully called .open()");
        }
        if (http_request.readyState == 2  ) {
            console.log("Successfully called .send()");
        }
        if (http_request.readyState == 3  ) {
            console.log("The content is starting to come from the server");
        }
        if (http_request.readyState == 4  ) {
            console.log("All the content from the server has been downloaded");
            var response = JSON.parse(http_request.responseText);
            if('error' in response) {
                alert(response.error.message);
            }
            else {
                alert("Account created successfully!");
                loadDoc("login.html");
            }
        }
    }

    var jsonObj = new Object();
    jsonObj.email = document.getElementById("email").value;
    jsonObj.password = document.getElementById("password").value;
    postData = JSON.stringify(jsonObj);
    http_request.open("POST", location, true);
    http_request.setRequestHeader("Content-type", "application/json");
    http_request.send(postData);
}

if(getCookie("id")){
    alert("You are already logged in.");
    loadDoc("data.html");
}