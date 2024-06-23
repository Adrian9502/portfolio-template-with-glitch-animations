export function customCursor() {
  // Check if the device is a mobile device
  function isMobileDevice() {
    return (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    );
  }

  // Add class to body if it's a mobile device
  window.onload = function () {
    if (isMobileDevice()) {
      document.body.classList.add("mobile");
    }
  };
  let cursor = document.getElementById("cursor");
  document.addEventListener("mousemove", (e) => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
  });
}
