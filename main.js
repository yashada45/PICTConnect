var isLoggedIn = false;
var user = '';

var iframe = document.getElementById("contentFrame");
var linkLogin = document.getElementById('lnkLogin');
var linkLogout = document.getElementById('lnkLogout');
var labelUser = document.getElementById('lblUser');

window.onLoad = onLoad();

function onLoad() {
    user = localStorage.getItem('user');
    if (user) {
        isLoggedIn= true;
    }

    ShowHideLoginElements();
}

// Function to open a page in the iframe
function openPage(page) {

    // Set the src attribute of the iframe to the desired URL
    iframe.src = page;
}

window.addEventListener('message', function(event) {
    console.log('Message received from iframe:', event.data);

    recdData = event.data;

    switch (recdData.msg) {
        case 'page':
            if (recdData.requiresLogin && !isLoggedIn)
                alert ("Please login to visit this page");
            else
                openPage(recdData.page);
            break;
        case 'Login':
            user = recdData.data;
            localStorage.setItem('user', user);
            window.history.back();
            isLoggedIn = true;
            ShowHideLoginElements();
            break;
        default:
          break;
      }    
});

function onLogin() {
    openPage("pages/login.html");
}

function onLogout() {
    localStorage.removeItem('user');
    isLoggedIn = false;
    ShowHideLoginElements();
    openPage("pages/home.html");
}

function ShowHideLoginElements() {
    if (isLoggedIn) {
        linkLogout.style.display = 'block';
        linkLogin.style.display = 'none';
        labelUser.style.display = 'block';
        labelUser.innerHTML = user;
    }
    else {
        linkLogout.style.display = 'none';
        linkLogin.style.display = 'block';
        labelUser.style.display = 'none';
    }
}
