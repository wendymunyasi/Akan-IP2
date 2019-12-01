var century, year, month, dayOfMonth, dayOfWeek, day;

function getInput() {
    century = parseInt(document.getElementById("century").value);
    year = parseInt(document.getElementById("year").value);
    month = parseInt(document.getElementById("month").value);
    dayOfMonth = parseInt(document.getElementById("monthday").value);
}

if(century == "") {
    alert("Not Applicable");
    return false;
} else if(year == "") {
    alert("Not Applicable");
    return false;
} else if(century == "") {
    alert("Not Applicable");
    return false;
} else if(dayofMonth == "") {
    alert("Not Applicable");
    return false;
}

function calculationOfDayOfTheWeek() {
    getInput();
    dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7) -1;
    console.log(dayOfWeek);
    return (Math.floor(dayOfWeek));
    if (dayOfWeek < 0) {
      dayOfWeek = dayOfWeek * -1;
    }
    else if (dayOfWeek > 0) {
      return dayOfWeek;
    }
}

function checkDayOfWeek(){
    day = calculationOfDayOfTheWeek();
     checkGender();
     console.log("The function runs");
}