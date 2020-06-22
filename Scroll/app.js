// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksCont = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener("click", function(){
    //linksCont.classList.toggle('show-links'); ->Use it for height auto in css not fixed height
    const containerHeight = linksCont.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(containerHeight===0){
        linksCont.style.height = `${linksHeight}px`; // Works as inLine Style
    }
    else
    linksCont.style.height=0;
});

const navbar= document.getElementById('nav');
const topLink = document.querySelector('.top-link')
// ********** fixed navbar ************
window.addEventListener('scroll', function(){
    const scrollHeight= window.pageYOffset;
    const navHeight= navbar.getBoundingClientRect().height;
    if(scrollHeight>navHeight)
    navbar.classList.add('fixed-nav');
    else
    navbar.classList.remove('fixed-nav');
    
    if(scrollHeight>500){
        topLink.classList.add('show-link');
    }
    else
    topLink.classList.remove('show-link');
})
// ********** smooth scroll ************
// select links

const scrollLink = document.querySelectorAll('.scroll-link');
scrollLink.forEach(function(link){
    link.addEventListener("click", function(e){
        // prevent the default functionality add custom
        e.preventDefault();
        // navigate to specific spots
        const id = e.currentTarget.getAttribute('href').slice(1); //-> 1 refers to the start index
        const element = document.getElementById(id);
        //Calculate Exact heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight= linksCont.getBoundingClientRect().height;
        const fixedNav= navbar.classList.contains('fixed-nav');
        let pos= element.offsetTop-navHeight; // We just sub cause the navbar actually covers it
        //Done to overcome the fact that when the navbar is not fixed we get differnt values of navheight.
        // So we need t0 sub the extra height as well
        if(!fixedNav)
        pos=pos-navHeight;

        if(navHeight>17){ //17 is just a random number. It means that the navbar is open
            pos=pos+containerHeight;
        }
        
        window.scrollTo({
            left:0,
            top:pos,
        });
        linksCont.style.height=0;//close navbar once clicked
    });
});
