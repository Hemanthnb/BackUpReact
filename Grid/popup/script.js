document.addEventListener("scroll", () => {
    const containers = document.querySelectorAll(".container");
    containers.forEach(container => {
      const rect = container.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        container.classList.add("scale-up");
      } else {
        container.classList.remove("scale-up");
      }
    });
  });
  