var list = document.querySelectorAll("li");

for(var i= 0; i < list.length; ++i) {
    list[i].addEventListener("mouseover", function() {
        this.classList.add("select");   
    })
}

for(var i= 0; i < list.length; ++i) {
    list[i].addEventListener("mouseout", function() {
        this.classList.remove("select");   
    })
}

for(var i= 0; i < list.length; ++i) {
    list[i].addEventListener("click", function() {
        this.classList.add("done");   
    })
}


/*
firstLi.addEventListener("mouseover", function() {
    firstLi.classList.add("select");
});

firstLi.addEventListener("mouseout", function() {
    firstLi.classList.remove("select");
})
*/