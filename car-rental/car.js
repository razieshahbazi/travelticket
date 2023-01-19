const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})






// date picker

$(function () {
    $('input[name="datetimes"]').daterangepicker({
      timePicker: true,
      startDate: moment().startOf("hour"),
      endDate: moment().startOf("hour").add(32, "hour"),
      locale: {
        format: "Y/M/DD",
      },
    });
  });