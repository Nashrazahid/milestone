document.getElementById("toggled-wrap-skills")?.addEventListener("click", function() {
    const skillsbox = document.getElementById("skillsbox");
    if (skillsbox) {
        skillsbox.classList.toggle("hidden");
    }
});
