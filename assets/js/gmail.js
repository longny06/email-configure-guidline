document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("h3, p, ul, .image-step");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    },
    { threshold: 0.5 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

const today = new Date();

const day = String(today.getDate()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0");
const year = String(today.getFullYear()).slice(-2);

const formattedDate = `${day}-${month}-${year}`;

console.log("Today is:", formattedDate);
document.getElementById("dateDisplay").textContent = formattedDate;

//  Animation btn click
function animateButton() {
  const button = document.querySelector(".email-button");
  button.classList.remove("clicked");
  void button.offsetWidth;
  button.classList.add("clicked");
  button.textContent = "Sending...";
  setTimeout(() => {
    button.textContent = "Email Sent!";
    setTimeout(() => {
      button.textContent = "Send Email";
    }, 1000);
  }, 1000);
}
