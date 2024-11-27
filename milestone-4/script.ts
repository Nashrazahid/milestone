document.addEventListener("DOMContentLoaded", function () {
  const foam = document.getElementById("resume-form") as HTMLFormElement;
  const display = document.getElementById("resume-output") as HTMLDivElement;
  const editButton = document.getElementById("edit-button") as HTMLButtonElement | null;
  const heading = document.getElementById("resume-heading") as HTMLHeadingElement | null;
 
  // Initial state: hide certain elements
  if (editButton) editButton.style.display = "none";
  if (display) display.style.display = "none";
  if (heading) heading.style.display = "block";
 
  foam.addEventListener("submit", function (event) {
    event.preventDefault();

    // Collecting input values
    const username = (document.getElementById("name") as HTMLInputElement).value;
    const jobTitle = (document.getElementById("job-title") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phonenum = (document.getElementById("phone") as HTMLInputElement).value;
    const location = (document.getElementById("location") as HTMLTextAreaElement).value;
    const aboutUs = (document.getElementById("about-us") as HTMLTextAreaElement).value;
    const skill = (document.getElementById("skill") as HTMLTextAreaElement).value;
    const projects = (document.getElementById("projects") as HTMLTextAreaElement).value;
    const certifications = (document.getElementById("certifications") as HTMLTextAreaElement).value;
    const languages = (document.getElementById("languages") as HTMLTextAreaElement).value;
    const reference = (document.getElementById("reference") as HTMLTextAreaElement).value;

    // Education fields
    const degree = (document.querySelector("input[placeholder='degree']") as HTMLInputElement).value;
    const college = (document.querySelector("input[placeholder='college']") as HTMLInputElement).value;
    const educationYear = (document.querySelector("input[placeholder='year']") as HTMLInputElement).value;

    // Experience fields
    const company = (document.querySelector("input[placeholder='company']") as HTMLInputElement).value;
    const post = (document.querySelector("input[placeholder='job-title']") as HTMLInputElement).value;
    const years = (document.querySelector("input[placeholder='years']") as HTMLInputElement).value;

    const pic = document.querySelector(".one") as HTMLInputElement;
    const file = pic.files?.[0];

    const reader = new FileReader();
    reader.onload = function (e) {
      const imgsrc = e.target?.result as string;

      // Building the resume template with the requested heading format
      const resume = `
      <div id="container">
      <div id="container-1">
        <div>
        <h4><img src="${imgsrc}" alt="profile pic" class="profile-img"></h4>
        </div>

       <h2>EDUCATION</h2> 
        <p><b>Degree:</b> ${degree}</p>
        <p><b>College:</b> ${college}</p>
        <p><b>Year:</b> ${educationYear}</p>

        <h2>SKILLS</h2>
        <p>${skill}</p>
       
        <h2>CERTIFICATIONS</h2>
        <p>${certifications}</p>

        <h2>LANGUAGES</h2>
        <p>${languages}</p> </div>
        
        <div id="container-2">

        <h1 style="font-weight: bold margin:0;">${username.toUpperCase()}</h1>
          <h1 style="margin: 0;">${jobTitle.toUpperCase()}</h1>
          <p style="margin: 0;">${location} | ${phonenum} | ${email}</p>

        <h2>PERSONAL INFORMATION</h2>
        <p><b>About:</b> ${aboutUs}</p>

        <h2>PROJECTS</h2>
        <p>${projects}</p>

        <h2>EXPERIENCE</h2>
        <p><b>Company:</b> ${company}</p>
        <p><b>Post:</b> ${post}</p>
        <p><b>Years:</b> ${years}</p>

        <h2>REFERENCE</h2>
        <p>${reference}</p>

        <h2>QR Code</h2>
        <h3><img src="https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(window.location.href)}&size=100x100" alt="QR Code"></h3>
      </div> </div>`;

      if (display) {
        display.style.display = "block";
        foam.style.display = "none"; // Hide the form
        display.innerHTML = resume;

        if (editButton) editButton.style.display = "inline";
        if (heading) heading.style.display = "none";
      }
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
     
    });
  }
  if (editButton) {
    editButton .addEventListener("click", function () {
      // Hide buttons before downloading the PDF
      if (editButton) editButton.style.display = "none";
    
      // Show buttons again after PDF generation
      setTimeout(() => {
        if (editButton) editButton.style.display = "inline";
      }, 1000);
    });
  };
});
