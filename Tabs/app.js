const btns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const art = document.querySelectorAll('.content');

about.addEventListener("click", function(e){
    //console.log(e.target);
    //console.log(e.target.dataset.id);

    const id=e.target.dataset.id;
    if(id){
        //remove active from other button. Remove active from all btns first then add to the target
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');    
        });
       //hide all articles first then add
       art.forEach(function(article){
           article.classList.remove('active');
       }) ;
       const element = document.getElementById(id);
       element.classList.add('active');
    }
})