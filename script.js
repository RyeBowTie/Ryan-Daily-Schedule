var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

var saveBtns = document.querySelectorAll(".saveBtn");

var nineEl = document.getElementById("nineEl");
var nineSave = document.getElementById("nineSaved")

var tenEl = document.getElementById("tenEl");
var tenSave = document.getElementById("tenSaved")

var elevenEl = document.getElementById("elevenEl");
var elevenSave = document.getElementById("elevenSaved")

var twelveEl = document.getElementById("twelveEl");
var twelveSave = document.getElementById("twelveSaved")

var oneEl = document.getElementById("oneEl");
var oneSave = document.getElementById("oneSaved")

var twoEl = document.getElementById("twoEl");
var twoSave = document.getElementById("twoSaved")

var threeEl = document.getElementById("threeEl");
var threeSave = document.getElementById("threeSaved")

var fourEl = document.getElementById("fourEl");
var fourSave = document.getElementById("fourSaved")

var fiveEl = document.getElementById("fiveEl");
var fiveSave = document.getElementById("fiveSaved")


// for (button of saveBtns) {
//     button.addEventListener("click", function (event) {
//         var saved = event.target;
//         var sibling = saved.closest("tr").children[1].children;
//         console.log(sibling);
//         localStorage.setItem("nine", sibling.value);
//     })
// }
nineSave.addEventListener("click" , function (){
    localStorage.setItem("nine", nineEl.value);
})
nineEl.value = localStorage.getItem("nine");

tenSave.addEventListener("click" , function (){
    localStorage.setItem("ten", tenEl.value);
})
tenEl.value = localStorage.getItem("ten");

elevenSave.addEventListener("click" , function (){
    localStorage.setItem("eleven", elevenEl.value);
})
elevenEl.value = localStorage.getItem("eleven");

twelveSave.addEventListener("click" , function (){
    localStorage.setItem("twelve", twelveEl.value);
})
twelveEl.value = localStorage.getItem("twelve");

oneSave.addEventListener("click" , function (){
    localStorage.setItem("one", oneEl.value);
})
oneEl.value = localStorage.getItem("one");

twoSave.addEventListener("click" , function (){
    localStorage.setItem("two", twoEl.value);
})
twoEl.value = localStorage.getItem("two");

threeSave.addEventListener("click" , function (){
    localStorage.setItem("three", threeEl.value);
})
threeEl.value = localStorage.getItem("three");

fourSave.addEventListener("click" , function (){
    localStorage.setItem("four", fourEl.value);
})
fourEl.value = localStorage.getItem("four");

fiveSave.addEventListener("click" , function (){
    localStorage.setItem("five", fiveEl.value);
})
fiveEl.value = localStorage.getItem("five");

var now = today.format('hh')
console.log(now)