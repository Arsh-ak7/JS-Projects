//1st method using selectors inside the element
const question= document.querySelectorAll('.question');

question.forEach(function(e){
    const btn= e.querySelector('.question-btn');//Do console.log to see what happens
    btn.addEventListener("click",function(){
        question.forEach(function(item){
            if(item!==e)//Item returns the list of articles
            item.classList.remove('show-text');
        })
        e.classList.toggle('show-text');
    })
});


// //2nd Method traversing the dom

// const questionBtn = document.querySelectorAll('.question-btn');
// questionBtn.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         const question= e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });

