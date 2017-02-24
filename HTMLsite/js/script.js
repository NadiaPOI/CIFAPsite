// Attendre le chargement du DOM
$(document).ready(function(){

    // Burger Menu
        var burgerIcon = $('.fa-bars');
        var burgerMenu = $('nav ul');

        // Quand je clique sur burgerIcon, j'affiche burgerMenu
        burgerIcon.on('click', function(){
            burgerMenu.slideToggle();
            $(this).toggleClass('active')
        });
        // Version courte : burgerIcon.click(function(){burgerMenu.slideToggle()})



}); // Fin de la fonction d'attente du chargement du DOM