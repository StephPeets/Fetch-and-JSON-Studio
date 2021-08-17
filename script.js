// TODO: add code here

window.addEventListener('load', function () {
  const container = document.getElementById('container');
  fetch('https://handlers.education.launchcode.org/static/astronauts.json')
    .then((response) => response.json())
    .then((data) => {
      data.sort(function (a, b) {
        return b.hoursInSpace - a.hoursInSpace;
      });
      for (const index of data) {
        container.innerHTML += `
          <div class="astronaut">
          <div class="bio">
          <h3>${data[index].firstName} ${data[index].lastName}</h3>
            <ul>
              <li>Hours in space: ${data[index].hoursInSpace}</li>
              <li>Active: ${data[index].active}</li>
              <li>Skills: ${data[index].skills.join(', ')}</li>
            </ul>
          </div>
          <img class="avatar" src="${data[index].picture}">`;
      }
    });
});
