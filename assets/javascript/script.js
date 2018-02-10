
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAf-oCY4eMUXtGMWb1K4QF1stQG_Tpdy1M",
  authDomain: "train-scheduler-d3ebf.firebaseapp.com",
  databaseURL: "https://train-scheduler-d3ebf.firebaseio.com",
  projectId: "train-scheduler-d3ebf",
  storageBucket: "train-scheduler-d3ebf.appspot.com",
  messagingSenderId: "803039083103"
};
firebase.initializeApp(config);



var trainData = firebase.database();

// Add new train
$("#add-train-btn").on("click", function() {

});


// Function to handle database updates
trainData.ref().on("child_added", function(childSnapshot, prevChildKey) {

});






// =================
// OLD CODE
// =================



// $(document).ready(function(){

// // Initialize Firebase
// var config = {
//   apiKey: "AIzaSyAf-oCY4eMUXtGMWb1K4QF1stQG_Tpdy1M",
//   authDomain: "train-scheduler-d3ebf.firebaseapp.com",
//   databaseURL: "https://train-scheduler-d3ebf.firebaseio.com",
//   projectId: "train-scheduler-d3ebf",
//   storageBucket: "train-scheduler-d3ebf.appspot.com",
//   messagingSenderId: "803039083103"
// };
// firebase.initializeApp(config);

// var database = firebase.database();

// var addTrain = function(event) {
//   event.preventDefault();

//   var train = $("#trainName").val().trim();
//   var line = $("#line").val().trim();
//   var destination = $("#destination").val().trim();
//   var first = $("#firstTrain").val().trim();
//   var frequency = $("#frequency").val().trim();

//   database.ref().push({
//     train: train,
//     line: line,
//     destination: destination,
//     first: first,
//     frequency: frequency
//   });
//   $("#trainName").val("");
//   $("#line").val("");
//   $("#destination").val("");
//   $("#firstTrain").val("");
//   $("#frequency").val("");
// }

// database.ref().on("child_added", function(snapshot){

//     var a = snapshot.val();
//     var firstTime = moment(a.first, "HH:mm").subtract(10, "years").format("x");

//     if (firstTime >= 0) {
//       firstTrain = firstTime * -1; 
//     }else {
//       firstTrain = firstTime;
//     }

//     var minsDifferent = moment().diff(moment.unix(firstTrain), "minutes");
//     var minsAway = minsDifferent % a.frequency;
//     var nextArrival = moment().add(minsAway, "m").format("HH:mm");

//   var newTableRow = $("<tr>");

//   var newTrain = $("<td>");
//   newTrain.html(snapshot.val().train);
//   newTableRow.append(newTrain);

//   var newLine = $("<td>");
//   newLine.html(snapshot.val().line);
//   newTableRow.append(newLine);

//   var newDestination = $("<td>");
//   newDestination.html(snapshot.val().destination);
//   newTableRow.append(newDestination);

//   var newFrequency = $("<td>");
//   newFrequency.html(snapshot.val().frequency);
//   newTableRow.append(newFrequency);

//   var newNextArrival = $("<td>");
//   newNextArrival.html(nextArrival);
//   newTableRow.append(newNextArrival);

//   var newMinutesAway = $("<td>");
//   newMinutesAway.html(minsAway);
//   newTableRow.append(newMinutesAway);

//   $("#trainTable").append(newTableRow);

// }, function(error) {
//   console.log("Errors Handled: " + error.code);
// });

// $("#submitButton").on("click", addTrain);

// });