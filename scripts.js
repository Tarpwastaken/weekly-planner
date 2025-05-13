document.addEventListener("DOMContentLoaded", () => {
    const days = document.querySelectorAll(".day");
    const today = new Date();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    days.forEach((day, index) => {
        const dateElement = day.querySelector(".date");
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() + index - today.getDay());
        dateElement.textContent = `${dayNames[currentDate.getDay()]}, ${currentDate.toLocaleDateString()}`;
    });
});
