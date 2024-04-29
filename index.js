//for signup 
document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    if (confirm("Your form is submitted!")) {
      window.location.href = "signin.html";
    }
  });
//-----------------------------------------------------------------------------------------


  // for log out
  function toggleLogout() {
    var logoutBtn = document.querySelector('.logout-btn');
    logoutBtn.style.display = (logoutBtn.style.display === 'none') ? 'block' : 'none';
  }

  function logout() {
    // Redirect to sign-in page
    window.location.href = "signin.html";
  }

  //dard mode
  function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
  }



  
//-----------------------------------------------------------------------------------------


//QUERY

function openQueryPopup() {
    var popup = document.getElementById("queryPopup");
    popup.style.display = "block";
  }
  
  function closeQueryPopup() {
    var popup = document.getElementById("queryPopup");
    popup.style.display = "none";
  }
  
  function sendQuery() {
    var queryText = document.getElementsByClassName("d")[1].value;
    alert("Query Sent: " + queryText);
    closeQueryPopup();
  }
  //QUERY OVER
  
  
//-----------------------------------------------------------------------------------------

