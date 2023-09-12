function myTimer() {
    const currentDay = new Date();
    const daysOftheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = daysOftheWeek[currentDay.getDay()];
    const time = currentDay.getTime();

    const dayElement = document.getElementById("day");
    const timeElement = document.getElementById("time");

    dayElement.textContent = day;
    timeElement.textContent = time;
}

setInterval(myTimer, 1000);
