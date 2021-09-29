

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCY4btmwPCE0evvj8f41Nzuk9NBwJoFmcs",
    authDomain: "fireapp-01-7f5a1.firebaseapp.com",
    databaseURL: "https://fireapp-01-7f5a1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "fireapp-01-7f5a1",
    storageBucket: "fireapp-01-7f5a1.appspot.com",
    messagingSenderId: "151203507377",
    appId: "1:151203507377:web:7009d76906423b63cc4690"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

 
    function signUp(){

        var name= document.getElementById("name");
        var email = document.getElementById("email");
        var password = document.getElementById("password");
        console.log(name.value);
        firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((res) => {
        const user = firebase.auth().currentUser;

        
        if (user != null) {
            user.updateProfile({
                displayName: name.value
            }).then(() => {
              
                window.location = 'blog.html';
            }).catch((error) => {
              console.log(error);
            });
        } else {
          alert("Some error has occured");
        }
    
      }
      ).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
      });
        
}

function signIn(){
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then((res) => {
       
        window.location = 'blog.html';
       
      }
      ).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        
      });
    }

  function googleSignIn(){
    base_provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(base_provider).then(function(result){
      console.log(result);
      alert("Success..Signed in with google");
      window.location = 'blog.html';
    }).catch(function(err){
      console.log(err);
      alert("Failed");

    });
  }