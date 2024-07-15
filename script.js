function openLink(evt, cityName) {
    var i, tablinks, tabcontent;
    tablinks = document.getElementsByClassName("navbarLinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";

    // Load the content dynamically
    fetch(cityName)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('tabcontent').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching page:', error);
        });
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("navBarDefaultOpen").click();

// secondary phase

function openNavLink(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("contenthigh");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("navbarTwoLinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
