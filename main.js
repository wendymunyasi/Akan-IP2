const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element = document.querySelector('.date-picker .dates');
const mth_element = document.querySelector('.date-picker .dates .month .mth');
const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
const days_element = document.querySelector('.date-picker .dates .days');

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let date = new Date();
let day = date.getDate ();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

mth_element.textContent = months[month] + ' ' + year;

selected_date_element.textContent = formatDate(date);

populateDates();
 


date_picker_element.addEventListener('click', toggleDatePicker);
next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click', goToPrevMonth);

//FUNCTIONS
function toggleDatePicker (e) {
    console.log(e.path)
    if (!checkEvenPathForClass(e.path, 'dates')) {
    dates_element.classList.toggle('active')
    }
}

function goToNextMonth (e) {
    month++;
    if (month > 11) {
        month=0;
        year++;
    }
    mth_element.textContent = months[month] + ' ' + year;
    populateDates();
}

function goToPrevMonth (e) {
    month--;
    if (month < 0) {
        month = 11;
        year--;
    }
    mth_element.textContent = months[month] + ' ' + year;
    populateDates();
}

function populateDates (e) {
    days_element.innerHTML = '';
    let amount_days = 31;

    if(month == 1) {
        amount_days = 28;
    } else if (month == 3) {
        amount_days = 30;
    } else if (month == 5) {
        amount_days = 30;
    } else if (month == 10) {
        amount_days = 30;
    } else {
        amount_days = 31;
    }


    for (let i = 0; i < amount_days; i++) {
        const day_element = document.createElement('div');
        day_element.classList.add ('day');
        day_element.textContent = i + 1;

        days_element.appendChild(day_element);

    }
}


//HELPER FUNCTIONS
function checkEvenPathForClass (path, selector) {
    for (let i = 0; i < path; i++) {
        if (path[i].classList && path[i].classList.contains(selector)) {
            return true;
        }
        
    }
    
    return false;
}

function formatDate (d) {
    let day = d.getDate();
    if (day < 10) {
        day = '0' + day;
    }

    let month = d.getMonth() + 1;
    if (month < 10) {
        month = '0' + day;
    }
    let year = d.getFullYear();

    return day + ' / ' + month + ' / ' + year;
}