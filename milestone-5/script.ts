document.addEventListener("DOMContentLoaded", function () {
  let foam = document.getElementById("resume-form") as HTMLFormElement;
  let display = document.getElementById("resume-output") as HTMLDivElement;
  let editButton = document.getElementById("edit-button") as HTMLButtonElement | null;
  let heading = document.getElementById("resume-heading") as HTMLHeadingElement | null;
  const downloadButton = document.getElementById("PDF") as HTMLButtonElement;
  const shareableLinkDiv = document.getElementById("shareable-link") as HTMLDivElement;
  const resumeLink = document.getElementById("resume-link") as HTMLAnchorElement;


   // Initial state: hide the edit button, resume-output, and resume-heading
   if (editButton) editButton.style.display = "none";
   if (display) display.style.display = "none";
   if (heading) heading.style.display = "block"; // Show heading initially
   if (downloadButton) downloadButton.style.display = "none";

foam.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phonenum = (document.getElementById("phone") as HTMLInputElement).value;
  const education = (
    document.getElementById("education") as HTMLTextAreaElement
  ).value;
  const skill = (document.getElementById("skill") as HTMLTextAreaElement).value;
  const exp = (document.getElementById("experience") as HTMLTextAreaElement)
    .value;

  const pic = document.querySelector(".one") as HTMLInputElement;
  const file = pic.files?.[0];

  const reader = new FileReader();
  reader.onload = function (e) {
    const imgsrc = e.target?.result as string;
    const resume = `
    <h1>RESUME</h1>
    <h2>PERSONAL INFORMATION</h2>
<P><b>Name:</b><span contenteditable="false">${username}</span></P>
     <p><b>Email:</b><span contenteditable="false">${email}</span</p>
     <p><b>Phone number:</b><span contenteditable="false">${phonenum}</span</p>
     <p><img src="${imgsrc}" alt="profile pic" </p>

     <h2>SKILL</h2>
     <p><b>Skills:</b><span contenteditable="false">${skill}</span></p>

     <h2>EDUCATION</h2> 
     <p><b>Education:</b><span contenteditable="false">${education}</span></p>

     <h2>EXPERIENCE</h2>
     <p><b>Experience:</b><span contenteditable="false">${exp}</span</p>`
     
    
    if (display) {
      display.style.display = "block";
      foam.style.display = "none"; // Hide the form
      display.innerHTML = resume;
      // After the resume is generated, show the edit button
      if (editButton)editButton.style.display = "inline";
      if (downloadButton) downloadButton.style.display = "inline"
      // Hide the heading after the form is hidden
      if (heading) heading.style.display = "none";
      }
  const uniqueLink = `${window.location.origin}/?name=${encodeURIComponent(username)}`;
  resumeLink.href = uniqueLink;
  resumeLink.textContent = uniqueLink;
  shareableLinkDiv.style.display = "block"; // Show link
  };
 if (file) {
    reader.readAsDataURL(file);
  }
});
  if (editButton) {
   editButton.addEventListener("click", function () {
// Return to the form (hide the resume and show the form again)
  display.style.display = "none"; // Hide the resume
   foam.style.display = "block";   // Show the form again
    editButton.style.display = "none"; // Hide the edit button until next resume generation
    downloadButton.style.display = "none"; 
    shareableLinkDiv.style.display = "none";
   });
  }
  if (downloadButton) {
    downloadButton.addEventListener("click", function () {
      // Hide buttons before downloading the PDF
      if (editButton) editButton.style.display = "none";
      downloadButton.style.display = "none";
      
      // Trigger print, which can save the page as PDF
      window.print();

      // Show buttons again after PDF generation
      setTimeout(() => {
        if (editButton) editButton.style.display = "inline";
        downloadButton.style.display = "inline";
      }, 1000); // Restore after 1 second
    });
  }
});




