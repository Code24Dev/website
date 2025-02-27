// JavaScript code to show/hide the message on hover for all individual images in "projects.html"

document.addEventListener('DOMContentLoaded', function() {
	// Getting references to all image and message elements
	var images = document.querySelectorAll('.img-for-hover'); //Selecting all images through their given class name. (Helps with avoiding repetition)
	var messages = document.querySelectorAll('.hover-msg'); //Selecting all messages through their given class.
	var delayTimer; // Variable to store the delay timer

	// Function to show the message
	function showMessage(message, e, x = 13, y = 13) {
  		message.style.left = e.clientX + x + 'px';
  		message.style.top = e.clientY + y + 'px';
  		message.style.display = 'block';
	}

	// Adding event listeners for all images that are of class "img-for-hover"
	images.forEach(function(image, index) {

		//When cursor actually hovers over the image
		image.addEventListener('mouseenter', function (event) {

			// Clear any existing delay timer
    			clearTimeout(delayTimer);

			// Delay showing the message for 3 seconds
      			delayTimer = setTimeout(function() {

				// Set the message position and display it
			 	showMessage(messages[index], event);

				}
			, 3000); // Syntax is in milliseconds

		});

		//When cursor actually leaves the area occupied by the image
		image.addEventListener('mouseleave', function() {

			// Clear the delay timer
			clearTimeout(delayTimer);

			// and hide the message immediately
			messages[index].style.display = 'none';

		});

		// When cursor moves inside the image
  		image.addEventListener('mousemove', function (event) {

    			// Update the message position as the cursor moves
			showMessage(messages[index], event);
  		});
	});
});



/*
NOTES:

Variables declared by let are only available inside the block where they're defined.
Variables declared by var are available throughout the function in which they're declared.

"mousemove" is better than using "mouseover" because there is a continuous update in the
messages position in real-time as the cursor moves over the image
*/
