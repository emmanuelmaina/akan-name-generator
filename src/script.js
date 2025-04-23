

const form = document.getElementById("form")
form.addEventListener("submit", function (event) {
    event.preventDefault()


    const birthDate = document.getElementById("birthDate").value;
    const [year, month, day] = birthDate.toString().split("-").map(Number)

    let CC = Math.floor(year / 100);
    let YY = year % 100;
    let MM = month;
    let DD = day;
    let dayOfWeek = Math.floor((((CC / 4) - 2 * CC - 1) + ((5 * YY) / 4) + ((26 * (MM + 1)) / 10) + DD) % 7);

    if (MM < 1 || MM > 12 || DD < 1 || DD > 31) {
        alert("Please enter a valid date.");
        return;
    }

    const gender = document.querySelector('input[name="gender"]:checked');

    if (!birthDate || !gender) {
        alert("Fill in missing information!")
        return;
    }



    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

    //const akanName = gender.value === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
    let akanName;
    if (gender.value === "male") {
        akanName = maleNames[dayOfWeek]
    } else {
        akanName = femaleNames[dayOfWeek]
    }

    document.getElementById("result").textContent = `Your Akan name is ${akanName}!`;



})
