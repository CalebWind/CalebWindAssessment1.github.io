window.onload = loadReviews = () => {
  fetch("apple.json")
    .then(r => r.json())
    .then(t => {
      let text = "<table><tr><th>Product Name</th><th>Product Brand</th><th>Product Cost</th><th>Product Review</th><th>Rating</th></tr><tbody>";
      let i = 0;
      Array.from(t).forEach(element => {
        text += `<tr><td>${element.itemName}</td>`;
        text += `<td>${element.brand}</td>`;
        text += `<td>${element.cost}</td>`;
        text += `<td>${element.review}</td>`;
        text += `<td><form action="${i}"><input type="radio" name="stars" value="star1"><input type="radio" name="stars" value="star2"><input type="radio" name="stars" value="star3"><input type="radio" name="stars" value="star4"><input type="radio" name="stars" value="star5"></form></td></tr>`
        i += 1;
      });
      text += "</tbody></table>";
      document.getElementById("table").innerHTML += text;
    });
};

document.getElementsByName("stars",)

document.addEventListener("click", event => {
  if (event.target.matches(".submitText")) {
    let newDiv = document.createElement("div");
    const commentValue = document.getElementById("textInput").value;
    const userName = document.getElementById("userName").value;

    var today = new Date();
    var date = today.getFullYear() + "-" +(today.getMonth() + 1) +"-" +today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;

    newDiv.innerHTML = `<p><b>${userName}: </b>${commentValue} <i class="fas fa-trash"></i></p>` + new Date().toLocaleString();
    document.getElementById("text-output").append(newDiv);
  }
});