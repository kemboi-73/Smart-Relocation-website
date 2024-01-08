function toggleAnimation() {
  // Clone the wrapper along with the hamburger menu
  let clone = big_wrapper.cloneNode(true);

  // Toggle the active class for the hamburger menu
  clone.classList.toggle("active");

  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reset Variables
    declare();
    events();
  });
}
