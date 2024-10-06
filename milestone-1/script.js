var _a;
(_a = document.getElementById("toggled-wrap-skills")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var skillsbox = document.getElementById("skillsbox");
    if (skillsbox) {
        if (skillsbox.style.display === "none") {
            skillsbox.style.display = "block";
        }
        else {
            skillsbox.style.display = "none";
        }
    }
});
