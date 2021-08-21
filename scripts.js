let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
let decTime = document.querySelector('.time')
let decDay = document.querySelector('.day')
let decDate = document.querySelector('.date')

let secondsClock = document.querySelector('.secondsClock');
let minutesClock = document.querySelector('.minutesClock');
let hoursClock = document.querySelector('.hoursClock');

function setDate() {
    let now = new Date();
    let seconds = now.getSeconds();
    let month = now.getMonth();
    let year = now.getFullYear();
    let day = now.getDay();
    let date = now.getDate();
    let secondsMove = ((seconds / 60) * 360) + 90;
    secondsClock.style.transform = `rotate(${secondsMove}deg)`;
    let minutes = now.getMinutes();
    let minutesMove = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minutesClock.style.transform = `rotate(${minutesMove}deg)`;
    let hour = now.getHours();
    let hourMove = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hoursClock.style.transform = `rotate(${hourMove}deg)`;
    decDay.innerHTML = `${days[day]}`;
    decDate.innerHTML = `${date} ${months[month]} ${year} `;
    decTime.innerHTML = `${hour}:${mins}:${seconds}  `;
}

setInterval(setDate, 1000);
setDate();

let onoff = document.querySelector('.onoff')
onoff.addEventListener('click', (onoff) => {
    let body = document.querySelector('body')
    if (body.classList.contains('on')) {
        body.classList.remove('on')
        onoff.target.innerHTML = 'Включить свет'
    } else {
        body.classList.add('on')
        onoff.target.innerHTML = 'Выключить свет'
    }
})