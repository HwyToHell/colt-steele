    // vars can be created before DOM is ready
    var div, btn;

// call back function for event
function toggleBgrd() {
    div.classList.toggle("div-hglt");
}

// function addListeners(ev)



// another way of making sure DOM elements have been loaded:
//   put <script> in html file after body
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM ready");

    // vars can only be assigned when DOM is ready
    div = document.querySelector("#div-outer");
    btn = document.querySelector("button");


    // add class for changed div background
    div.classList.add("div-hglt");
    toggleBgrd();

    // connect button click event
    btn.addEventListener("click", toggleBgrd)
});