$(function() {

    var people = [];

    $.getJSON('samsung.json', function(data) {
        $.each(data.phone, function(i,f) {
            var tblRow = "<tr>" + "<td>" + f.itemName + "</td>" + "<td>" + f.brand + "</td>" + "<td>" + f.cost + "</td>" + "<td>" + f.review + "</td>" + "</tr>"
            $(tblRow).appendTo("#products tbody");
        });
    });
});
