document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
       e.preventDefault();
       document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
       });
    });
 });
 
 // Scroll-to-Top Button
 let scrollTopBtn = document.getElementById("scrollTopBtn");
 
 // Show the button when the user scrolls down 100px from the top
 window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
       scrollTopBtn.style.display = "block";
    } else {
       scrollTopBtn.style.display = "none";
    }
 };
 
 // Scroll to the top of the document when the user clicks the button
 scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
 });