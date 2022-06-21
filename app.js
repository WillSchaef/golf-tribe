createAuth0Client({
    domain: "dev-k4isif2y.us.auth0.com",
    client_id: "GCMQlI0r58shVsBv2Gw7ckWfy1VIdZw4",
    redirect_uri: window.location.origin,
  }).then(async (auth0) => {
    // Assumes a button with id "login" in the DOM
    const loginButton = document.getElementById("login");
  
    loginButton.addEventListener("click", (e) => {
      e.preventDefault();
      auth0.loginWithRedirect();
    });
  
    if (location.search.includes("state=") && 
        (location.search.includes("code=") || 
        location.search.includes("error="))) {
      await auth0.handleRedirectCallback();
      window.history.replaceState({}, document.title, "/");
    }
  
    // Assumes a button with id "logout" in the DOM
    const logoutButton = document.getElementById("logout");
  
    logoutButton.addEventListener("click", (e) => {
      e.preventDefault();
      auth0.logout();
    });
  
    const isAuthenticated = await auth0.isAuthenticated();
    const userProfile = await auth0.getUser();
  
    // Assumes an element with id "profile" in the DOM
    const profileElement = document.getElementById("profile");
    const scheduleElement = document.getElementById("schedule");
  
    if (isAuthenticated) {
      profileElement.style.display = "block";
      loginButton.style.display = "none";
      logoutButton.style.display = "block";
      scheduleElement.style.display = "block";
      profileElement.innerHTML = `
              <p>${userProfile.name}</p>
            `;
    } else {
      profileElement.style.display = "none";
      loginButton.style.display = "block";
      logoutButton.style.display = "none";
      scheduleElement.style.display = "none";
    }
  });