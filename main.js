const hoursHand = document.getElementById('hours-hand')
const minutesHand = document.getElementById('minutes-hand')
const secondsHand = document.getElementById('seconds-hand')


function getTime() {
    const now = new Date() 
    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()

    //Calculate angles
    const secondsAngle = seconds * 6  //6 degrees of rotation for every second that pass
    const minutesAngle = minutes * 6 + (seconds/60) * 6 //6 degrees of rotation per minute as well as the % of the current minute that has passed; this ensures smooth animation of the clock instead of only updating every minute
    const hoursAngle = (hours % 12) * 30 + (minutes/60) * 30  //30 degrees of rotation per hour + 30 degrees times the % of the current hour that's passed

    // Apply rotations
    document.getElementById("seconds-hand").style.transform = `translate(-50%, 0) rotate(${secondsAngle}deg)`;
    document.getElementById("minutes-hand").style.transform = `translate(-50%, 0) rotate(${minutesAngle}deg)`;
    document.getElementById("hours-hand").style.transform = `translate(-50%, 0) rotate(${hoursAngle}deg)`;
}

setInterval(() => getTime(), 500)

const clock = document.querySelector('.clock');

// Add numbers (1 to 12)
for (let i = 1; i <= 12; i++) {
    const number = document.createElement('div');
    number.classList.add('number');
    number.innerText = i;

    // Calculate the angle for each number
    const angle = i * 30;

    // Position the number
    number.style.transform = `
        rotate(${angle}deg) 
        translate(0, -115px) 
        rotate(-${angle}deg)
        translate(-50%, 50%)
    `;

    clock.appendChild(number);
}

// Add ticks (60 ticks for minutes/seconds)
for (let i = 0; i < 60; i++) {
    const tick = document.createElement('div');

    // Longer ticks for hours
    if (i % 5 === 0) {
        tick.classList.add('big-tick');
    } else {
        tick.classList.add('tick');
    }

    // Calculate the angle for each tick
    const angle = (i / 60) * 360;

    // Position the tick
    tick.style.transform = `
        rotate(${angle}deg)
        translate(50%, 150px)
    `;

    clock.appendChild(tick);
}