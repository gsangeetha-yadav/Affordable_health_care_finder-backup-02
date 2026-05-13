const hospitals = [

  {
    name: "Apollo Hospital",
    city: "Bangalore",
    rating: "4.8"
  },

  {
    name: "Manipal Hospital",
    city: "Bangalore",
    rating: "4.7"
  },

  {
    name: "Fortis Hospital",
    city: "Mysore",
    rating: "4.6"
  },

  {
    name: "JSS Hospital",
    city: "Mysore",
    rating: "4.5"
  }

];

function displayHospitals(data) {

  const container =
    document.getElementById(
      "hospitalResults"
    );

  container.innerHTML = "";

  if (data.length === 0) {

    container.innerHTML =
      "<h3>No Hospitals Found</h3>";

    return;

  }

  data.forEach(hospital => {

    container.innerHTML += `

      <div class="card">

        <h3>${hospital.name}</h3>

        <p>📍 ${hospital.city}</p>

        <p>⭐ ${hospital.rating}</p>

        <button onclick="openMap('${hospital.name}')">

          Open Map

        </button>

      </div>

    `;

  });

}

displayHospitals(hospitals);

function searchHospital() {

  const searchText =
    document.getElementById(
      "hospitalSearch"
    ).value.toLowerCase();

  const filtered =
    hospitals.filter(hospital =>

      hospital.name
      .toLowerCase()
      .includes(searchText)

    );

  displayHospitals(filtered);

}

function findNearbyHospitals() {

  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(

      function(position) {

        alert(
          "Location Access Granted"
        );

        displayHospitals(hospitals);

      },

      function(error) {

        alert(
          "Please allow location access"
        );

      }

    );

  } else {

    alert(
      "Geolocation not supported"
    );

  }

}

function openMap(hospitalName) {

  const url =
    `https://www.google.com/maps/search/${hospitalName}`;

  window.open(url, "_blank");

}

function voiceSupport() {

  const speech =
    new SpeechSynthesisUtterance(

      "Welcome to Affordable Healthcare Finder. " +

      "This application helps users " +

      "find nearby hospitals, " +

      "doctor availability, " +

      "medicine support, " +

      "emergency support and " +

      "appointment booking."

    );

  speech.lang = "en-US";

  window.speechSynthesis.speak(speech);

}

function checkMedicine() {

  const medicine =
    document.getElementById(
      "medicineInput"
    ).value;

  document.getElementById(
    "medicineResult"
  ).innerHTML =

    "✅ " +
    medicine +
    " is available nearby.";

}

function bookAppointment() {

  alert(
    "✅ Appointment Booked Successfully"
  );

}

function callAmbulance() {

  window.location.href =
    "tel:108";

}

function callEmergency() {

  window.location.href =
    "tel:102";

}
