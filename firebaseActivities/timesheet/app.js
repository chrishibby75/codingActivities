var config = {
    apiKey: "AIzaSyBWm_NJE3Kl_h2s3wLTTrRqzy3CpkD64o8",
    authDomain: "timesheet-a54df.firebaseapp.com",
    databaseURL: "https://timesheet-a54df.firebaseio.com",
    projectId: "timesheet-a54df",
    storageBucket: "timesheet-a54df.appspot.com",
    messagingSenderId: "342965487166"
  };
  firebase.initializeApp(config);

  database = firebase.database();

  $('#add-employee-btn').on('click', function(event) {
      event.preventDefault();

      var empName = $('#employee-name-input').val().trim();
      var empRole = $('#role-input').val().trim();
      var empStart = moment($('#start-input').val().trim(), 'MM/DD/YYYY').format("X");
      var empRate = $('#rate-input').val().trim();

      var newEmp = {
          name: empName,
          role: empRole,
          start: empStart,
          rate: empRate
      };

      database.ref().push(newEmp);
      console.log(newEmp.name);
      console.log(newEmp.role);
      console.log(newEmp.start);
      console.log(newEmp.rate);

      alert("Employee successfully added!");

      $('#employee-name-input').val("");
      $('#role-input').val("");
      $('#start-input').val("");
      $('#rate-input').val("");
  });

  database.ref().on('child_added', function(childSnapshot) {
      console.log(childSnapshot.val());

      var empName = childSnapshot.val().name;
      var empRole = childSnapshot.val().role;
      var empStart = childSnapshot.val().start;
      var empRate = childSnapshot.val().rate;

      console.log(empName);
      console.log(empRole);
      console.log(empStart);
      console.log(empRate);

      var empStartPretty = moment.unix(empStart).format("MM/DD/YYYY");
      var empMonths = moment().diff(moment(empStart, "X"), "months");
      console.log(empMonths);

      var empBilled = empMonths * empRate;
      console.log(empBilled);

      var newRow = $('<tr>').append(
          $('<td>').text(empName),
          $('<td>').text(empRole),
          $('<td>').text(empStartPretty),
          $('<td>').text(empMonths),
          $('<td>').text(empRate),
          $('<td>').text(empBilled)
      );

      $('#employee-table').append(newRow);
  });