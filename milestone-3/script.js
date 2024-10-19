var foam = document.getElementById("resume-form");
var display = document.getElementById("resume-output");
foam.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phonenum = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var skill = document.getElementById("skill").value;
    var exp = document.getElementById("experience")
        .value;
    var pic = document.querySelector(".one");
    var file = (_a = pic.files) === null || _a === void 0 ? void 0 : _a[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        var _a;
        var imgsrc = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
        var resume = "\n    <h1>RESUME</h1>\n    <h2>PERSONAL INFORMATION</h2>\n<P><b>Name:</b><span contenteditable=\"false\">".concat(name, "</span></P>\n     <p><b>Email:</b><span contenteditable=\"false\">").concat(email, "</span</p>\n     <p><b>Phone number:</b><span contenteditable=\"false\">").concat(phonenum, "</span</p>\n     <p><img src=\"").concat(imgsrc, "\" alt=\"profile pic\" </p>\n     <h2>SKILL</h2>\n     <p><b>Skills:</b><span contenteditable=\"false\">").concat(skill, "</span></p>\n\n     <h2>EDUCATION</h2> \n     <p><b>Education:</b><span contenteditable=\"false\">").concat(education, "</span></p>\n\n     <h2>EXPERIENCE</h2>\n     <p><b>Experience:</b><span contenteditable=\"false\">").concat(exp, "</span</p>;");
        if (display) {
            display.style.display = "block";
            display.innerHTML = resume;
        }
    };
    if (file) {
        reader.readAsDataURL(file);
    }
});
