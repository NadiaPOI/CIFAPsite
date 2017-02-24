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
            function addContent(cover, title, subtitle, desc, link, github){
                $('main section').append(''+

                     '<div class="modal">'+
                        '<div>'+
                            '<i class="fa fa-times" aria-hidden="true"></i>' +
                            '<h3>'+ title +' <span>'+ subtitle +'</span></h3>'+
                            '<img src="img/'+ cover +'" alt="Image '+ title +'">'+
                            '<p>'+ desc +'</p>'+
                            '<a href="'+ link +'" target="_blank">Voir le projet</a>'+
                            '<a href="'+ github +'" target="_blank">Voir les sources projet</a>'+
                        '</div>'+
                    '</div>'+


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
                            addContent(data[i].cover, data[i].title, data[i].subtitle, data[i].description, data[i].link, data[i].github)
                        }

                    },
                    error: function(err){
                        console.log(err)
                    },
                    complete: function(){
                        // Pour capter un bouton généré en Ajax, il faut le faire dans le complete car le bouton n'est pas sélectionnable avant qu'il soit dans le DOM
                        $('button').on('click', function(){
                            $(this).parent().prev().fadeIn();
                        });

                        $('.fa-times').click(function(){
                            $(this).parent().parent().fadeOut();
                        })
                    }

            })
        }


    
    




}); // Fin de la fonction d'attente du chargement du DOM