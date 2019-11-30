const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('date-picker .selected-date');
const dates_element = document.querySelector('.date-picker .dates');

date_picker_element.addEventListener('click', toggleDatePicker);

function toggleDatePicker (e) {
    dates_element.classList.toggle('active')
}