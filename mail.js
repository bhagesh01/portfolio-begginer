const firebaseConfig = {
  apiKey: "AIzaSyBKz4uv3DDiLZvrL99Tzb5o7qqTzpFvADI",
  authDomain: "portfolio-bobby-contact.firebaseapp.com",
  databaseURL: "https://portfolio-bobby-contact-default-rtdb.firebaseio.com",
  projectId: "portfolio-bobby-contact",
  storageBucket: "portfolio-bobby-contact.appspot.com",
  messagingSenderId: "952898592054",
  appId: "1:952898592054:web:84bfd62c38ea4b28842797"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("portfolio-contact");

document.getElementById("form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("email");
  var msgContent = getElementVal("message");

  saveMessages(name, emailid, msgContent);
  
  //   reset the form
  document.getElementById("form").reset();
  alert("your details has been uploaded.")
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};