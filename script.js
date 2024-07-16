function logBaseURL() {
    const baseURL = window.location.origin + window.location.pathname;
    console.log('Base URL:', baseURL);
}

logBaseURL();

function getFetchURL(filename) {
    temp = filename.replace(/^\.\//, '');
    const basePath = window.location.pathname.split('/').slice(0, -1).join('/');
    return `${window.location.origin}${basePath}/${temp}`;
}

function openNavLink(evt, cityName) {
    var i, tablinks;
    tablinks = document.getElementsByClassName("navbarTwoLinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
    const fetchURL2 = getFetchURL(cityName);
    console.log('Fetch URL 2:', fetchURL2);
    fetch(fetchURL2)
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

function openLink(evt, cityName) {
    var i, tablinks;
    tablinks = document.getElementsByClassName("navbarLinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
    const fetchURL = getFetchURL(cityName);
    console.log('Fetch URL:', fetchURL);
    fetch(fetchURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('tabcontent').innerHTML = data;
            document.getElementById("navDefaultOpen").click();
        })
        .catch(error => {
            console.error('Error fetching page:', error);
        });
}

function initializeDefaultTab() {
    logBaseURL();
    document.getElementById("navBarDefaultOpen").click();
}

initializeDefaultTab();

let currentIndex = 0;
const buttons = document.querySelectorAll('.navbarTwoLinks');

function navigate(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = buttons.length - 1; // Loop to the last button
    } else if (currentIndex >= buttons.length) {
        currentIndex = 0; // Loop to the first button
    }

    buttons[currentIndex].click();
}