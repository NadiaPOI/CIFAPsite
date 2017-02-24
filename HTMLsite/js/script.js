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


    // Portfolio
        // Vérifier la présence de la class pagePortfolio
        if($('.pagePortfolio').length == 1){

            console.log('Vous êtes sur la page portfolio');

            // Créer une fonction pour ajouter des balises dans le DOM
            function addContent(cover, title, subtitle){
                $('main section').append(''+
                
                    '<article>' +
                        '<button>Voir le projet</button>' +
                        '<div>' +
                            '<h3>'+ title +'</h3>' +
                            '<p>'+ subtitle +'</p>' +
                        '</div>' +
                        '<span style="background-image: url(img/'+ cover +')"></span>'+
                    '</article>'
                );
            };

            $.ajax({

                // Header de la requête
                    url: 'data/portfolio.json',
                    type: 'GET',
                    dataType: 'JSON',

                // Corps de la requête
                    success: function(data){
                        
                        // Faire une boucle sur data
                        for( var i = 0; i < data.length; i++ ){
                            console.log(data[i]);
                            addContent(data[i].cover, data[i].title, data[i].subtitle)
                        }

                    },
                    error: function(err){
                        console.log(err)
                    }

            })
        }


    
    




}); // Fin de la fonction d'attente du chargement du DOM