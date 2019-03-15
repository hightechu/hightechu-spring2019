function setCookie(cname, cvalue, ms) {
    var d = new Date();
    d.setTime(d.getTime() + (ms));
    var expires = "expires="+ d.toUTCString();
    console.log(expires);
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function loadDoc(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        replaceDoc(this.responseText);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function replaceDoc(s) {
    var newDoc = document.open("text/html", "replace");
    newDoc.write(s);
    newDoc.close();
}