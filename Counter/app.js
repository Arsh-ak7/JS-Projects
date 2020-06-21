// Set Initial value
let count=0;

// select value and buttons

const value = document.querySelector("#value");
const btns= document.querySelectorAll(".btn");// Returns a nodelist
//nodeList is very much like arrays.

btns.forEach(function(btn) {
    btn.addEventListener("click" , function(e){
        const styles=e.currentTarget.classList;//Returns a list of classes that the selected element has
            if(styles.contains("decrease"))
            count--;
            else if (styles.contains("increase"))
            count++;
            else
            count=0;
            value.textContent=count;
    });
});