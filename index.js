    //Below stores image URL's/directories in an array and assigns them dynamically 
    //to each ".card-bg" element for the cards in the homepage.
    document.addEventListener("DOMContentLoaded", function(){
        const images = ["img/web.png", "img/brain.png", "img/assitance.png"]; // Fix typo
    
        document.querySelectorAll(".card-bg").forEach((card, index) => {
            card.style.setProperty("--bg-image", `url(${images[index]})`); // Use `style.setProperty`
        });
    });
    