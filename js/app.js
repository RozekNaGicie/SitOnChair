var dropdown = document.querySelector('.dropdown-menu');
var link = document.querySelector('.navbar-menu-1');
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