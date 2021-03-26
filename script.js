var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var now = today.format('H')
var hour = moment().hour();


var saveBtns = $(".saveBtn");
var inputs = $(".col-12")
var tableRows = $(".tableRow");
var valuesArr = [];

saveBtns.each(function (index, ele) {
    ele.addEventListener("click", function () {
        valuesArr.push(inputs[index].value);
        localStorage.setItem("Key", valuesArr);
        console.log(valuesArr)
    });
});

inputs.each(function (index, ele){
    ele.value = localStorage.getItem("Key")
})

tableRows.each(function (index, ele) {
    var calHour = parseInt(ele.id);
    if (hour > calHour) {
        $(ele).addClass("past");
    } else if (hour < calHour){
        $(ele).addClass("future");
    } else {
        $(ele).addClass("present");
    };  
});