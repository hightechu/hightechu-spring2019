function checkRegex() {
    var regex = /^(\w+@)([a-z]+)(\.)([a-z]{1,5})$/;
    var inputString = document.getElementById('inputString').value;
    var x = regex.test(inputString)
    console.log(x)
}