  
document.addEventListener("DOMContentLoaded", function() {
    // Get all nav links
    const navLinks2 = document.querySelectorAll(".pop-up-menu a");
  
    // Get the current URL path
    const currentPath = window.location.pathname;
    
  
  
    // Loop through the links and add 'active' class to the matching link
    navLinks2.forEach(link2 => {
        if (link2.getAttribute("href") === currentPath) {
            link2.classList.add("active");
        }
    });
  });