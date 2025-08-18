function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
    clock.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}
setInterval(updateClock, 1000);
updateClock();