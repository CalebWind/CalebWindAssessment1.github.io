// $(function() {

//     var people = [];
//     $.getJSON('apple.json', function(data) {
//         $.each(data.phone, function(i,f) {
//             var tblRow = "<tr>" + "<td>" + f.itemName + "</td>" + "<td>" + f.brand + "</td>" + "<td>" + f.cost + "</td>" + "<td>" + f.review + "</td>" + "<td>" + "<div class='star-rating'><input id='star-5' type='radio' name='rating' value='star-5'><label for='star-5' title='5 stars'><i class='active fa fa-star' ></i></label><input id='star-4' type='radio' name='rating' value='star-4'><label for='star-4' title='4 stars'><i class='active fa fa-star' ></i></label><input id='star-3' type='radio' name='rating' value='star-3'><label for='star-3' title='3 stars'><i class='active fa fa-star' ></i></label><input id='star-2' type='radio' name='rating' value='star-2'><label for='star-2' title='2 stars'><i class='active fa fa-star' ></i></label><input id='star-1' type='radio' name='rating' value='star-1'><label for='star-1' title='1 star'><i class=' active fa fa-star '></i></div>" + "</td>" + "</tr>"
//             $(tblRow).appendTo("#products tbody");
            
//         });
//     });
// });

// let res = [];
// fetch('apple.json')
// .then(res => {
//     return res.json();
// })
// .then(data => {
//     res.forEach(function(data, index) {
//         var tblRow = "<tr>" + "<td>" + data.itemName + "</td>" + "<td>" + f.brand + "</td>" + "<td>" + f.cost + "</td>" + "<td>" + f.review + "</td>" + "</tr>"
//         tblRow.innerHTML("#products tbody");
//     });
// });


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




    //create AJAX function to bind to button click
var getTableDataAJAX = function() {

    var getTableData = new XMLHttpRequest();

    getTableData.onreadystatechange = function() {
        //checking for when response is received from server
        if(getTableData.readyState === 4) {
            var tableInfo     = JSON.parse(getTableData.responseText);
            var tableHeading  = tableInfo.tableHeading;
            var tableCellsItemName   = tableInfo.tableCellsItemName;
            var tableCellsBrand   = tableInfo.tableCellsBrand;
            var tableCellsPrice   = tableInfo.tableCellsPrice;
            var tableCellsReview   = tableInfo.tableCellsReview;

            var createTable = function() {
                //Create Table and Heading Rows 
                var newTable = document.createElement('table');
                var tableHeadingRow = document.createElement('tr');
                var tableHeader = document.createElement('th');
                tableHeadingRow.appendChild(tableHeader);

                //Create first row with header and data
                var tableRowFirst = document.createElement('tr');
                var tableRowFirstHead = document.createElement('th');
                tableRowFirst.appendChild(tableRowFirstHead);

                for (i = 1; i < tableCellsItemName.length; i++) {
                    //create new heading
                    var phoneData = document.createElement('td');

                    // append Heading to table
                    tableRowFirst.appendChild(phoneData);

                    //set new heading text content to json information
                    petData.textContent = tableCellsPets[i];
                };

                var tableRowSecond = document.createElement('tr');
                var tableRowSecondHead = document.createElement('th');
                tableRowSecond.appendChild(tableRowSecondHead);

                for (i = 1; i < tableCellsPets.length; i++) {
                    //create new heading
                    var peopleData = document.createElement('td');

                    // append Heading to table
                    tableRowSecond.appendChild(peopleData);

                    //set new heading text content to json information
                    peopleData.textContent = tableCellsPeople[i];
                };

                // Add classes to elements
                newTable.classList.add('jsTable');
                tableHeader.classList.add('jsTableHead');
                tableRowFirstHead.classList.add('jsTableRowHead');
                tableRowSecondHead.classList.add('jsTableRowHead');

                //Add text content and colspan attribute to tableHeader
                tableHeader.textContent = tableHeading;
                tableHeader.setAttribute("colspan", "4");

                //Add text content to row headings
                tableRowFirstHead.textContent = tableCellsPets[0]
                tableRowSecondHead.textContent = tableCellsPeople[0];

                //Append table to DOM
                document.body.appendChild(newTable);

                //Append rows to new table
                newTable.appendChild(tableHeadingRow);
                newTable.appendChild(tableRowFirst);
                newTable.appendChild(tableRowSecond);
            }();
        };
    };
    getTableData.open("GET", "apple.json", true);
    getTableData.send();
};

var wrapperDiv = document.querySelector('div');
var AJAXbutton = document.getElementById('button');

AJAXbutton.addEventListener('click', getTableDataAJAX);