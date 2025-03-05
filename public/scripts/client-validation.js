// Error Handling

document.getElementById('post-form').onsubmit = () => {
     //Reset errors
     clearErrors();

     // Set Validation Flag
     let isValid = true;

     // Validate name
     let name = document.getElementById('name').value.trim();
     if (name === "" || name.includes("0") || name.includes("1") || name.includes("2") || name.includes("3") || name.includes("4") || name.includes("5") || name.includes("6") || name.includes("7") || name.includes("8") || name.includes("9"))
     {
          document.getElementById('err-name').style.display = "block";
          isValid = false;
     }

     // Validate title
     let title = document.getElementById('title').value.trim();
     if (title === "")
     {
          document.getElementById('err-title').style.display = "block";
          isValid = false;
     }

     // Validate message
     let message = document.getElementById('message').value.trim();
     if(message.length < 10)
     {
          document.getElementById('err-message').style.display = "block";
          isValid = false;
     }

     // Return flag
     return isValid;
}

function clearErrors () {
     let errors = document.getElementsByClassName("err");

     for (let i = 0; i < errors.length; i++)
     {
          errors[i].style.display = "none";
     }
}