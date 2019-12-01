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

let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursay", "Friday", "Saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function checkGender() {
    var gen = document.getElementsByName("boys");
    if(gen[0].checked == true){
        var gender = "male";
    }else if(gen[1].checked == true){
        var gender = "female";
    }else {
      console.log("pass");//Test the radio buttons
    }

}
