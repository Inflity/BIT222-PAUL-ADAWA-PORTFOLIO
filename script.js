document.addEventListener("DOMContentLoaded", function () {
    // Function to handle navigation
    function navigateTo(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    // Event listeners for navigation buttons
    const homeBtn = document.getElementById("homeBtn");
    const servicesBtn = document.getElementById("servicesBtn");
    const aboutBtn = document.getElementById("aboutBtn");
    const projectsBtn = document.getElementById("projectsBtn");
    const contactBtn = document.getElementById("contactBtn");

    homeBtn.addEventListener("click", function () {
        navigateTo("home");
    });

    servicesBtn.addEventListener("click", function () {
        navigateTo("services");
    });

    aboutBtn.addEventListener("click", function () {
        navigateTo("about");
    });

    projectsBtn.addEventListener("click", function () {
        navigateTo("projects");
    });

    contactBtn.addEventListener("click", function () {
        navigateTo("contact");
    });
});
