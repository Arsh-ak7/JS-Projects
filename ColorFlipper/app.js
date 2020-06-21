const colors = ["green", "red", "rgba(133,12,100)", "#f15025"];
const btn= document.getElementById('btn');
const color = document.querySelector(".color");//gives span showing which coloer is used

btn.addEventListener("click", function(){
    //Multiply by arr size to get values less than it
    const randomNumber=Math.floor(getRandomNumbers()*4); //USed to get arrayIndexshd be betwwwn 0-3 because 3 elements in arr
    document.body.style.backgroundColor=colors[randomNumber];
    color.textContent=colors[randomNumber];
});

function getRandomNumbers(){
    return Math.random(); // returns numbers between 0-1
}