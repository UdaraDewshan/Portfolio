function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    clock.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}
setInterval(updateClock, 1000);
updateClock();


var typed = new Typed("#typed", {
    strings: ["Software Engineer", "Web Developer", "Designer"],
    typeSpeed: 90,      // typing speed
    backSpeed: 70,      // backspacing speed
    backDelay: 1000,    // pause before deleting
    loop: true          // repeat forever
  });