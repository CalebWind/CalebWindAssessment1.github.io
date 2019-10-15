$(function() {

    var people = [];

    $.getJSON('samsung.json', function(data) {
        $.each(data.phone, function(i,f) {
            var tblRow = "<tr>" + "<td>" + f.itemName + "</td>" + "<td>" + f.brand + "</td>" + "<td>" + f.cost + "</td>" + "<td>" + f.review + "</td>" + "</tr>"
            $(tblRow).appendTo("#products tbody");
        });
    });
});

document.addEventListener("click", (event) => {
    if(event.target.matches(".submitText")){
      let newDiv = document.createElement("div");
      const commentValue = document.getElementById('textInput').value;
      newDiv.innerHTML = `<p><b>Comments: </b>${commentValue} <i class="fas fa-trash"></i></p>`;
      document.getElementById("text-output").append(newDiv);
    }})

    document.addEventListener("click", (event) => {
        if(event.target.matches(".submitText")){
          let newDiv = document.createElement("div");
          const commentValue = document.getElementById('textInput').value;
          const userName = document.getElementById('userName').value;
    
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    
          newDiv.innerHTML = `<p><b>${userName} </b>${commentValue} <i class="fas fa-trash"></i></p>` + new Date().toLocaleString();
          document.getElementById("text-output").append(newDiv);
        }})
    