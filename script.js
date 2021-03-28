var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var hour = moment().hour();

var saveBtns = $(".saveBtn");
var inputs = $(".col-12")
var tableRows = $(".tableRow");
var valuesArr = [];


// Set items in local storage ---------------------------------------------- 


saveBtns.each(function (index, ele) {
    ele.addEventListener("click", function () {
        var object = {
            position: index,
            value: inputs[index].value,   
        };
        
        valuesArr.push(object);
        localStorage.setItem("Key", JSON.stringify(valuesArr));   
    });
});

// Get items from local storage -------------------------------------------

var savedInputs = JSON.parse(localStorage.getItem("Key")) || [];

for (var i = 0; i <savedInputs.length; i++){
    inputs.each(function (index, ele){
        if (index === savedInputs[i].position){
            ele.value = savedInputs[i].value;
        }
    });
};

// Change table row class based upon time ---------------------------------------

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