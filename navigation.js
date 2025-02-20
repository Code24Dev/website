document.getElementById('navigation-container').innerHTML = `
  <style>

		.nav-opacity {
			opacity: 0.65; /* Set the opacity level (0 to 1) for the entire container */
		}

		.navbar {
    			background-color: #005644;
		}

		.navbar-brand {
			font-size: 20px;
			padding-left: 5%;
			}
			
		.nav-item {
			font-size: 120%;
			padding-left: 15px;
			padding-right: 15px;
			transition: all 0.5s ease; /* transition for smooth animation */
			text-transform: uppercase;
		}


		.nav-item:hover {
			transform: scale(1.75);
			color: rgba(98, 42, 15, 1);
		}

		/* For now only being used for the code lambda LOGO at the top right corner */
		.icon-hover-msg {
			display: none;
			position: absolute;
			background-color: transparent;
			color: #fff;
			z-index: 5;
			padding: 2px 7px 2px 7px;
			left: 70%; /*With regards to the top right corner of the text*/
			top: 50%; /*With regards to the top right corner of the text*/
			font-size: 100%;
			transform: translateY(-50%); /* Centering it vertically */
    		white-space: nowrap; /* Preventing text from wrapping */
			opacity: 0;
		}

		.nav-item:hover div{
      			display: block;
				color: #fff;
				opacity: 1;
    		}
  </style>

	<header>
		<nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top nav-opacity"> <!--navbar-expand-lg is breakponit, the bar close when reaching this size-->
				<div class="container-fluid">    <!--fixed-top: ensures when clicking the button it stays on the directed content, but when scrolling up it does not position properly to fix that we adit the custom css file-->
					
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
						<span class="navbar-toggler-icon"></span>
					</button>
						<div class="collapse navbar-collapse" id="navmenu">
							<ul class="nav navbar-nav navbar-left">
								<li class="nav-item">
									<img src="img/code24_logo_zoomed_in.png" style="width: 3rem;" alt="Logo">

									<!-- When the mouse hovers on the image logo, it will show the user the name of the company-->
									<div class="icon-hover-msg"> 
										Code24
									</div>
								</li>
							</ul>
						</div>
						<div class="collapse navbar-collapse" id="navmenu">
							<ul class="nav navbar-nav ms-auto"> <!--"ms-auto" is margin start, the aim is to shift nav-items to right-->
								<li class="nav-item">
									<a class="nav-link active" aria-current="page" href="index.html">Home</a>
								</li>
								<li class="nav-item">
								<a class="nav-link active" aria-current="page" href="#about">About</a>
								</li>
								<li class="nav-item">
									<a class="nav-link active" aria-current="page" href="#services">Services</a>
								</li>
								<li class="nav-item">
									<a class="nav-link active" aria-current="page" href="Contact_Me.html">Contacts</a>
								</li>
							</ul>
						</div>

				</div>		
			</nav>
	</header>

	<script>
		document.addEventListener('DOMContentLoaded', function() {
			// Getting references to all image and message elements
			var icons = document.querySelectorAll('.icon-for-hover'); //Selecting all icons through their given class name. (Helps with avoiding repetition)
			var messages = document.querySelectorAll('.icon-hover-msg'); //Selecting all messages through their given class.

			// Function to show the message at a certain position away from the cursor
			function showMessage(message, e, x = 13, y = 13) {
				message.style.left = e.clientX + x + 'px';
				message.style.top = e.clientY + y + 'px';
				message.style.display = 'block';
			}

			// Adding event listeners to all icons that are of class "nav-item"
			icons.forEach(function(icon, index) {

				//When cursor actually hovers over the icon
				icon.addEventListener('mouseenter', function (event) {

					showMessage(messages[index], event);

				});

				//When cursor actually leaves the area occupied by the icon
				icon.addEventListener('mouseleave', function() {

					//Hide the message immediately
					messages[index].style.display = 'none';

				});

				// When cursor moves ontop of the icon
				icon.addEventListener('mousemove', function (event) {

						// Update the message position as the cursor moves
					showMessage(messages[index], event);
				});
			});
		});
	</script>
`;

