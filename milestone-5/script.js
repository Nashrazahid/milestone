document.addEventListener("DOMContentLoaded", function () {
    var foam = document.getElementById("resume-form");
    var display = document.getElementById("resume-output");
    var editButton = document.getElementById("edit-button");
    var heading = document.getElementById("resume-heading");
    var downloadButton = document.getElementById("PDF");
    var shareableLinkDiv = document.getElementById("shareable-link");
    var resumeLink = document.getElementById("resume-link");
    // Initial state: hide certain elements
    if (editButton)
        editButton.style.display = "none";
    if (display)
        display.style.display = "none";
    if (heading)
        heading.style.display = "block";
    if (downloadButton)
        downloadButton.style.display = "none";
    foam.addEventListener("submit", function (event) {
        var _a;
        event.preventDefault();
        // Collecting input values
        var username = document.getElementById("name").value;
        var jobTitle = document.getElementById("job-title").value;
        var email = document.getElementById("email").value;
        var phonenum = document.getElementById("phone").value;
        var location = document.getElementById("location").value;
        var aboutUs = document.getElementById("about-us").value;
        var skill = document.getElementById("skill").value;
        var projects = document.getElementById("projects").value;
        var certifications = document.getElementById("certifications").value;
        var languages = document.getElementById("languages").value;
        var reference = document.getElementById("reference").value;
        // Education fields
        var degree = document.querySelector("input[placeholder='degree']").value;
        var college = document.querySelector("input[placeholder='college']").value;
        var educationYear = document.querySelector("input[placeholder='year']").value;
        // Experience fields
        var company = document.querySelector("input[placeholder='company']").value;
        var post = document.querySelector("input[placeholder='job-title']").value;
        var years = document.querySelector("input[placeholder='years']").value;
        var pic = document.querySelector(".one");
        var file = (_a = pic.files) === null || _a === void 0 ? void 0 : _a[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            var imgsrc = (_a = e.target) === null || _a === void 0 ? void 0 : _a.result;
            // Building the resume template with the requested heading format
            var resume = "<div id =\"container\">\n      <div id=\"container-1\">\n        <div>\n        <h4><img src=\"".concat(imgsrc, "\" alt=\"profile pic\" class=\"profile-img\"></h4>\n        </div>\n\n       <h2>EDUCATION</h2> \n        <p><b>Degree:</b> ").concat(degree, "</p>\n        <p><b>College:</b> ").concat(college, "</p>\n        <p><b>Year:</b> ").concat(educationYear, "</p>\n\n        <h2>SKILLS</h2>\n        <p>").concat(skill, "</p>\n       \n        <h2>CERTIFICATIONS</h2>\n        <p>").concat(certifications, "</p>\n\n        <h2>LANGUAGES</h2>\n        <p>").concat(languages, "</p> </div>\n        \n        <div id=\"container-2\">\n\n        <h1 style=\"font-weight: bold margin:0;\">").concat(username.toUpperCase(), "</h1>\n          <h1 style=\"margin: 0;\">").concat(jobTitle.toUpperCase(), "</h1>\n          <p style=\"margin: 0;\">").concat(location, " | ").concat(phonenum, " | ").concat(email, "</p>\n\n        <h2>PERSONAL INFORMATION</h2>\n        <p><b>About:</b> ").concat(aboutUs, "</p>\n\n        <h2>PROJECTS</h2>\n        <p>").concat(projects, "</p>\n\n        <h2>EXPERIENCE</h2>\n        <p><b>Company:</b> ").concat(company, "</p>\n        <p><b>Post:</b> ").concat(post, "</p>\n        <p><b>Years:</b> ").concat(years, "</p>\n\n        <h2>REFERENCE</h2>\n        <p>").concat(reference, "</p>\n\n        <h2>QR Code</h2>\n        <h3><img src=\"https://api.qrserver.com/v1/create-qr-code/?data=").concat(encodeURIComponent(window.location.href), "&size=100x100\" alt=\"QR Code\"></h3>\n      </div></div>");
            if (display) {
                display.style.display = "block";
                foam.style.display = "none"; // Hide the form
                display.innerHTML = resume;
                if (editButton)
                    editButton.style.display = "inline";
                if (downloadButton)
                    downloadButton.style.display = "inline";
                if (heading)
                    heading.style.display = "none";
            }
            var uniqueLink = "".concat(window.location.origin, "/?name=").concat(encodeURIComponent(username));
            resumeLink.href = uniqueLink;
            resumeLink.textContent = uniqueLink;
            shareableLinkDiv.style.display = "block"; // Show shareable link
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    });
    if (editButton) {
        editButton.addEventListener("click", function () {
            // Return to the form
            display.style.display = "none";
            foam.style.display = "block";
            editButton.style.display = "none";
            downloadButton.style.display = "none";
            shareableLinkDiv.style.display = "none";
        });
    }
    if (downloadButton) {
        downloadButton.addEventListener("click", function () {
            // Hide buttons before downloading the PDF
            if (editButton)
                editButton.style.display = "none";
            downloadButton.style.display = "none";
            // Trigger print, which can save the page as PDF
            window.print();
            // Show buttons again after PDF generation
            setTimeout(function () {
                if (editButton)
                    editButton.style.display = "inline";
                downloadButton.style.display = "inline";
            }, 1000);
        });
    }
});
