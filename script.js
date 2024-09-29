const form = document.querySelector("form");
const date = document.getElementById("date");
const resultYears = document.querySelector(".years");
const resultMonths = document.querySelector(".months");
const resultDays = document.querySelector(".days");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const now = new Date();
  const dob = new Date(date.value);

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
});
