function submission() {
	let name = document.getElementById("name").value;
	let email = document.getElementById("email").value;
	let number = document.getElementById("number").value;
	let message = document.getElementById("message").value;

	//If there is a name and an email address, then proceed to the following if statement
	if (name && email){
		//Higher priority to state that I will reach out to them via email instead of just phone number even if both exist.
		if (number){
			alert("Thank you for your submission. You will be sure to recieve a repsonse via email and SMS shortly");
		}else{
			alert("Thank you for your submission. You will be sure to recieve a repsonse via email shortly");
		}

		// Logging in details to the console for demostration purposes
        	console.log(`Name: ${name}, Email: ${email}, Number: ${number}, Message: ${message}`);

    	} else {
        	alert("Please fill in at least your name and email address.");
    	}
}
