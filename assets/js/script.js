// $(function() {
//     $.getJSON('json.json', function(data) {
//         var tr;

//         for (var i = 0; i < data.length; i++) {

//             tr = $('<tr/>');
//             tr.append("<td>" + data[i][0] + "</td>");
//             tr.append("<td>" + data[i][1] + "</td>");
//             $('table').append(tr);
//         }
//     });
// });


$(function() {

    var people = [];

    $.getJSON('json.json', function(data) {
        $.each(data.phone, function(i,f) {
            var tblRow = "<tr>" + "<td>" + f.itemName + "</td>" + "<td>" + f.brand + "</td>" + "<td>" + f.cost + "</td>" + "<td>" + f.review + "</td>" + "</tr>"
            $(tblRow).appendTo("#products tbody");
        });
    });
});