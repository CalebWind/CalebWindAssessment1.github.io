const alertUser = () => {
    window.alert("Thank you for your message");
}

document.getElementById("submit").addEventListener("click", alertUser);

document.addEventListener("click", (event) => {
    if(event.target.matches(".submitText")){
      let newDiv = document.createElement("div");
      const commentValue = document.getElementById('textInput').value;
      newDiv.innerHTML = `<p><b>Comments: </b>${commentValue} <i class="fas fa-trash"></i></p>`;
      document.getElementById("text-output").append(newDiv);
    }})