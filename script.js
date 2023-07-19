document.getElementById("myform").addEventListener("submit", function(event) {
    var form = event.target;
    var requiredFields = form.querySelectorAll("[required]");
    var hasError = false;
  
    for (var i = 0; i < requiredFields.length; i++) {
      var field = requiredFields[i];
      var errorElement = document.getElementById(field.id + "-error");
      if (field.value.trim() === "") {
        errorElement.textContent = "Please complete this required field.";
        hasError = true;
      } else {
        errorElement.textContent = "";
      }
    }
  
    if (hasError) {
      event.preventDefault();
    }
  });
  