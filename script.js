var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var saveBtns = $(".saveBtn");

var nineEl = $("#nineEl");
var nineSave = $("#nineSaved")

var tenEl = $("#tenEl");
var tenSave = $("#tenSaved")

var elevenEl = $("#elevenEl");
var elevenSave = $("#elevenSaved")

var twelveEl = $("#twelveEl");
var twelveSave = $("#twelveSaved")

var oneEl = $("#oneEl");
var oneSave = $("#oneSaved")

var twoEl = $("#twoEl");
var twoSave = $("#twoSaved")

var threeEl = $("#threeEl");
var threeSave = $("#threeSaved")

var fourEl = $("#fourEl");
var fourSave = $("#fourSaved")

var fiveEl = $("#fiveEl");
var fiveSave = $("#fiveSaved")


for (button of saveBtns) {
    button.addEventListener("click", function (event) {
        var saved = event.target;
        var sibling = saved.closest('input[type="text"]');
        console.log(sibling);
        // localStorage.setItem("nine", sibling.value);
    })
}
nineSave.on("click" , function (){
    localStorage.setItem("nine", nineEl.value);
})
nineEl.value = localStorage.getItem("nine");

tenSave.on("click" , function (){
    localStorage.setItem("ten", tenEl.value);
})
tenEl.value = localStorage.getItem("ten");

elevenSave.on("click" , function (){
    localStorage.setItem("eleven", elevenEl.value);
})
elevenEl.value = localStorage.getItem("eleven");

twelveSave.on("click" , function (){
    localStorage.setItem("twelve", twelveEl.value);
})
twelveEl.value = localStorage.getItem("twelve");

oneSave.on("click" , function (){
    localStorage.setItem("one", oneEl.value);
})
oneEl.value = localStorage.getItem("one");

twoSave.on("click" , function (){
    localStorage.setItem("two", twoEl.value);
})
twoEl.value = localStorage.getItem("two");

threeSave.on("click" , function (){
    localStorage.setItem("three", threeEl.value);
})
threeEl.value = localStorage.getItem("three");

fourSave.on("click" , function (){
    localStorage.setItem("four", fourEl.value);
})
fourEl.value = localStorage.getItem("four");

fiveSave.on("click" , function (){
    localStorage.setItem("five", fiveEl.value);
})
fiveEl.value = localStorage.getItem("five");

var now = today.format('H')


var tableRows = $(".tableRow");





var hour = moment().hour();


tableRows.each(function (index, ele) {
    var calHour = parseInt(ele.id);
  
    if (hour > calHour) {
        
        $(ele).addClass("past");
    } else if (hour < calHour){
        $(ele).addClass("future");
    } else {
        $(ele).addClass("present");
    }
    
})