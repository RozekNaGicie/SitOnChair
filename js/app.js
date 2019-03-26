var dropdown = document.querySelector('.dropdown-menu');
var link = document.querySelector('.navbar-menu-1');
var mobileIcon = document.querySelector('.mobile-icon');
var mobileMenu = document.querySelector('.mobile-links-container');


console.log(link)
console.log(dropdown)

link.addEventListener('mouseover', function(){
    console.log('dupa')
    dropdown.style.display = "inline-block";
});
dropdown.addEventListener('mouseout', function(){
    console.log('dupa')
    dropdown.style.display = "none";
});

mobileIcon.addEventListener('click', function(){
    if(mobileMenu.classList.contains('active') == false){
    mobileMenu.classList.add('active');        
    } else if(mobileMenu.classList.contains('active') == true){
    mobileMenu.classList.remove('active');        

    }
});

