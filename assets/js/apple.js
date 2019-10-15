// $(function() {

//     var people = [];
//     $.getJSON('apple.json', function(data) {
//         $.each(data.phone, function(i,f) {
//             var tblRow = "<tr>" + "<td>" + f.itemName + "</td>" + "<td>" + f.brand + "</td>" + "<td>" + f.cost + "</td>" + "<td>" + f.review + "</td>" + "<td>" + "<div class='star-rating'><input id='star-5' type='radio' name='rating' value='star-5'><label for='star-5' title='5 stars'><i class='active fa fa-star' ></i></label><input id='star-4' type='radio' name='rating' value='star-4'><label for='star-4' title='4 stars'><i class='active fa fa-star' ></i></label><input id='star-3' type='radio' name='rating' value='star-3'><label for='star-3' title='3 stars'><i class='active fa fa-star' ></i></label><input id='star-2' type='radio' name='rating' value='star-2'><label for='star-2' title='2 stars'><i class='active fa fa-star' ></i></label><input id='star-1' type='radio' name='rating' value='star-1'><label for='star-1' title='1 star'><i class=' active fa fa-star '></i></div>" + "</td>" + "</tr>"
//             $(tblRow).appendTo("#products tbody");
            
//         });
//     });
// });

let res = [];
fetch('apple.json')
.then(res => {
    return res.json();
})
.then(data => {
    res.forEach(function(data, index) {
        var tblRow = "<tr>" + "<td>" + data.itemName + "</td>" + "<td>" + f.brand + "</td>" + "<td>" + f.cost + "</td>" + "<td>" + f.review + "</td>" + "</tr>"
        tblRow.innerHTML("#products tbody");
    });
});


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
    }});
