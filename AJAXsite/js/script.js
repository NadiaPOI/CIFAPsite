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


    // Navigation
        // Capter le click sur les liens du Menu
        $('nav a').on('click', function(evt){
            evt.preventDefault();

            // Ajouter la class active au lien
            $('.active').removeClass('active')
            $(this).addClass('active')

            // Récupérer l'attribut href lors du click sur la balise a
            getTheContent($(this).attr('href'));

            // Fermer le burger menu
            burgerMenu.slideToggle();
            burgerIcon.removeClass('active')
        })


    // Créer une fonction qui permet de charger le bon contenu
        function getTheContent(partial){

            $('main').fadeOut(function(){
                $.get('partials/'+ partial).done(function(data){
                    // Ajouter le contenu dans le main
                    $('main').html(data)

                }).fail(function(err){
                    console.log(err.responseText);

                }).always(function(){
                    $('main').fadeIn();
                })
            })

        };
        
        // Afficher la page d'accueil
        getTheContent('home.html');
        $('nav li:first a').addClass('active');

        

}); // Fin de la fonction d'attente du chargement du DOM