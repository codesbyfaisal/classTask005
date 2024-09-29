const form = document.querySelector("form");
const userDob = document.getElementById("date");
const resultYears = document.querySelector(".years");
const resultMonths = document.querySelector(".months");
const resultDays = document.querySelector(".days");

const now = new Date();
userDob.max = now.toISOString().split("T")[0];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dob = new Date(userDob.value);

  const currentDate = {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    date: now.getDate(),
  };

  const dobDate = {
    year: dob.getFullYear(),
    month: dob.getMonth() + 1,
    date: dob.getDate(),
  };

  let ageYears = currentDate.year - dobDate.year;
  let ageMonths = currentDate.month - dobDate.month;
  let ageDays = currentDate.date - dobDate.date;

  resultYears.textContent = ageYears;
  resultMonths.textContent = ageMonths;
  resultDays.textContent = ageDays;
});
