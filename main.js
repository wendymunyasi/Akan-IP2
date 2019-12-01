const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element = document.querySelector('.date-picker .dates');

date_picker_element.addEventListener('click', toggleDatePicker);

function toggleDatePicker (e) {
    console.log(e.path);
    if (!checkEventPathForClass(e.path, 'dates')) {
    dates_element.classList.toggle('active');
    }
}

function checkEventPathForClass (path, selector) {
    for (let i = 0; i < path; i++) {
        if (path [i].classList && path[i].classList.contains(selector)) {
            return true;
        }
    }
    return false;
};



