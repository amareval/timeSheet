// Initialize Firebase with link
// Also remember to add link to html
var config = {
    apiKey: "AIzaSyBiEhdNJRMGm9mw8h5sazwM7mIMonivBw0",
    authDomain: "ateamtimesheet.firebaseapp.com",
    databaseURL: "https://ateamtimesheet.firebaseio.com",
    projectId: "ateamtimesheet",
    storageBucket: "ateamtimesheet.appspot.com",
    messagingSenderId: "620714707177"
  };
  firebase.initializeApp(config);





























// STORE USER INPUTS INTO VARIABLES
// WHEN USER SELECTS 'SUBMIT'
    // SET USER DATA INTO FIREBASE
    // CHANGE WINDOW HTML TO REFLECT USER DATA
    // APPEND NEW DATA TO PREVIOUS DATA
    // CALCULATE MONTHS WORKED..
        // ADD MONTHS FROM START DATE TO CURRENT MONTH
    // CALCULATE TOTAL BILLED..
        // MULTIPLY MONTLY RATE BY TOTAL NUMBER OF MONTHS

// WHEN FIREBASE SENSES A CHANGE ON THE PAGE
    // CHANGE WINDOW HTML TO REFLECT USER DATA

    var database = firebase.database();

    var name = '';
    var role = '';
    var startDate = '';
    var monthlyRate = '';
    var totalMonths = '';
    var totalBilled = '';

    $('#submit').on('click', function(event) {
        event.preventDefault();

        name = $('#name-input').val().trim();
        role = $('#role-input').val().trim();
        startDate = $('#startDate-input').val().trim();
        montlyRate = $('#montlyRate-input').val().trim();

        database.ref().push({
            name: name,
            role: role,
            startDate: startDate,
            montlyRate: monthlyRate,
            totalMonths: totalMonths,
            totalBilled: totalBilled
        });

    });


    database.ref().orderByChild('dataAdded').limitToLast(1).on('child-added', function(snapshot) {

        var ts = snapshot.val();


        $('#name-input').html(ts.name);
        $('#role-input').html(ts.role);
        $('#startDate-input').html(ts.startDate);
        $('#monthlyRate-input').html(ts.monthlyRate);
        $('#totalMonths-input').html(ts.totalMonths);
        $('#totalBilled-input').html(ts.totalBilled);



    })