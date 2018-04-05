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
