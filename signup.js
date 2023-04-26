// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1bjARSmLG-d3snEFctp0HM6U4SsDMg0U",
    authDomain: "mydabba-2ff22.firebaseapp.com",
    databaseURL: "https://mydabba-2ff22-default-rtdb.firebaseio.com",
    projectId: "mydabba-2ff22",
    storageBucket: "mydabba-2ff22.appspot.com",
    messagingSenderId: "648709597349",
    appId: "1:648709597349:web:cb3be15e939729b189854c",
    measurementId: "G-CQPW1MQWEN"
  };

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('mydabba').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var fname = getInputVal('fname');
  var lname = getInputVal('lname');
  var email = getInputVal('email');
  var pass = getInputVal('pass');
//   var message = getInputVal('message');

  // Save message
  saveMessage(fname, lname, email, pass);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },500);

  // Clear form
  document.getElementById('mydabba').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(fname, lname, email, pass){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    fname: fname,
    lname:lname,
    email:email,
    pass:pass
  });
}