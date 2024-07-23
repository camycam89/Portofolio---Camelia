
//enable smooth scrolling to the sections when you click on the navigation links
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".nav-link");
    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth",
          });
        }
      });
    });
  });


//contact form
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const responseDiv = document.getElementById("response");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        responseDiv.innerHTML = "Sending...";

        fetch("process.php", {
            method: "POST",
            body: new FormData(form),
        })
        .then(response => response.text())
        .then(data => {
            responseDiv.innerHTML = data;
        })
        .catch(error => {
            responseDiv.innerHTML = "An error occurred. Please try again later.";
        });
    });
});

//back to top button
window.onscroll = function() {
  var backToTopButton = document.getElementById("backToTop");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
     backToTopButton.style.display = "block";
  } else {
     backToTopButton.style.display = "none";
  }
 };

 //get in touch button

 document.getElementById('getInTouchBtn').addEventListener('click', function() {
  window.open('mailto:example@email.com', '_blank');
 });