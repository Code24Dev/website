document.getElementById('navigation-container').innerHTML = `
  <style>

		.nav-opacity {
			opacity: 0.65; /* Set the opacity level (0 to 1) for the entire container */
		}

		.navbar {
    			background-color: #fff;
		}

		.navbar-brand {
			font-size: 30px;
			padding-left: 5%;
		}

		.navbar-nav {
			margin-right: auto;
		}

		.nav-item {
			font-size: 200%;
			padding-left: 30px;
			transition: all 0.5s ease; /* transition for smooth animation */
		}


		.nav-item:hover {
			transform: scale(1.75);
			color: rgba(98, 42, 15, 1);
		}

		.icon-hover-msg {
			display: none;
			position: absolute;
			background-color: rgba(33, 58, 92, 1);
			color: #fff;
			z-index: 5;
			padding: 2px 7px 2px 7px;
			font-size: 30%;
		}

		.nav-item:hover div{
      			display: block;
    		}
  </style>

  <nav class="navbar navbar-expand-lg navbar-light bg-light nav-opacity">
    		<a class="navbar-brand" href="index.html">
			<i class="fa fa-home"></i>
		</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            		aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
        	</button>
        	<div class="collapse navbar-collapse" id="navbarNav">
            		<ul class="navbar-nav">
                		<li class="nav-item icon-for-hover">
					<a class="nav-link" href="hobbies.html">
						<i class="fas fa-icons"></i> <!-- Icon from "font-awesome" version 5.15.3-->
						<div class="icon-hover-msg">
							Hobbies
						</div>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link icon-for-hover" href="projects.html">
						<i class="fas fa-hard-hat"></i> <!-- Icon from "font-awesome" version 5.15.3-->
						<div class="icon-hover-msg">
							Projects
						</div>
					</a>
				</li>
				<li class="nav-item">
					<a class="nav-link icon-for-hover" href="Contact Me.html">
						<i class="fas fa-envelope-square"></i> <!-- Icon from "font-awesome" version 5.15.3-->
						<div class="icon-hover-msg">
							Contact Me
						</div>
					</a>
				</li>
			</ul>
		</div>
  </nav>

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

