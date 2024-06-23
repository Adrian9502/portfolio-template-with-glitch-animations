// Export the setupIntersectionObserver function
export function setupIntersectionObserver(selector) {
  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Callback function to handle intersection changes
  function handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate"); // Add the animate class if element is in viewport
      } else {
        entry.target.classList.remove("animate"); // Remove the animate class if element is not in viewport
      }
    });
  }

  // Create an Intersection Observer
  const observer = new IntersectionObserver(handleIntersection);

  // Select the element to observe
  const observedElement = document.querySelector(selector);

  // Observe the element
  observer.observe(observedElement);
}
