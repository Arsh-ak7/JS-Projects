// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


//We use show lonk class to show the links i.e on click of the toggle btn
//if show link class is present we remove it to hide the contents if not add to show the contents

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

 navToggle.addEventListener("click",function(){
//     if(links.classList.contains("show-links")){
//         links.classList.remove('show-links');   
//     }
//     else{
//         links.classList.add('show-links');
//     }

    //In one line using toggle method
    links.classList.toggle('show-links');
});
