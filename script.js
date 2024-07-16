function logBaseURL() {
    const baseURL = window.location.origin + window.location.pathname;
    console.log('Base URL:', baseURL);
}

logBaseURL();

function getFetchURL(filename) {
    // Remove leading './' if present
    temp = filename.replace(/^\.\//, '');

    // Get the base path without the trailing slash
    const basePath = window.location.pathname.split('/').slice(0, -1).join('/');

    // Construct the full URL
    return `${window.location.origin}${basePath}${temp}`;
}

function openLink(evt, cityName) {
    var i, tablinks;
    tablinks = document.getElementsByClassName("navbarLinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";

    // Example usage:
    const fetchURL = getFetchURL(cityName);

    console.log('Fetch URL:', fetchURL);

    // Load the content dynamically
    fetch(fetchURL)
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

function openNavLink(evt, cityName) {
    var i, tablinks;
    tablinks = document.getElementsByClassName("navbarTwoLinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";

    // Example usage:
    const fetchURL = getFetchURL(cityName);

    console.log('Fetch URL 2:', fetchURL);

    // Load the content dynamically
    fetch(fetchURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('contenthigh').innerHTML = data;
        })
        .catch(error => {
            console.error('Error fetching page:', error);
        });
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("navDefaultOpen").click();

// secondary phase
/* 
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
 */