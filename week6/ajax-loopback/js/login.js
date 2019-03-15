function loginAJAX() {
    var location = "http://localhost:3000/api/users/login";
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
                setCookie("id", response.id, response.ttl)
                alert("Successfully logged in!");
                loadDoc("data.html");
            }
        }
    }

    var jsonObj = new Object();
    jsonObj.email = document.getElementById("email").value;
    jsonObj.password = document.getElementById("password").value;
    jsonObj.ttl = 36000
    postData = JSON.stringify(jsonObj);
    http_request.open("POST", location, true);
    http_request.setRequestHeader("Content-type", "application/json");
    auth = getCookie("id");
    if(auth) {
        http_request.setRequestHeader('Authorization', auth);
    }
    http_request.send(postData);
}

if(getCookie("id")){
    alert("You are already logged in.");
    loadDoc("data.html");
}