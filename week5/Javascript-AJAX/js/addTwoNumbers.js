function addNumbers(){
    // Collect First Number
	var firstNum = document.getElementById("number1").value;
    // Collect Second Number
    var secondNum = document.getElementById("number2").value;
    // Adds two numbers and assigns it to result
    var result = (+firstNum) + (+secondNum);
    // Returns results to users
    document.getElementById("result").innerHTML = result;
}