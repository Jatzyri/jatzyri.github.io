var hamburger = document.querySelector("#hamburger");
var nav = document.querySelector(".navbar");
var count = 0;

hamburger.addEventListener('click', function() {
    if(count % 2 == 0){
        nav.style.display = "flex";
    }
    else{
        nav.style.display = "none";
    }
    count++;
});