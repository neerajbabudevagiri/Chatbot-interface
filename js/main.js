document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");

  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});
