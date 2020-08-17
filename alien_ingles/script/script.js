
/*DISPLAY DEL LINK A LA VERSION EN INGLES*/

function menuIdiomas() {

    document.getElementById('ham_icon').addEventListener('click', function() {

        let lista_idiomas = document.getElementById('idiomas');
        lista_idiomas.style.display = 'block';

        let icono_ham = document.getElementById('ham_icon');
        icono_ham.style.display = 'none';

        let icono_x = document.getElementById('x');
        icono_x.style.display = 'block';

        let ajuste_imagen = document.getElementById('weyland');
        ajuste_imagen.style.right = '34.8vw';
    });
    
};

menuIdiomas();

function cerrarIdiomas() {

    document.getElementById('x').addEventListener('click', function() {
        let lista_idiomas = document.getElementById('idiomas');
        lista_idiomas.style.display = 'none';

        let icono_ham = document.getElementById('ham_icon');
        icono_ham.style.display = 'block';

        let icono_x = document.getElementById('x');
        icono_x.style.display = 'none';

        let ajuste_imagen = document.getElementById('weyland');
        ajuste_imagen.style.right = '33vw';
    });    
};

cerrarIdiomas();

/*CAMBIO ESTILOS CSS*/

function cambioCss(sheet) {
    document.getElementById('pagestyle').setAttribute('href', sheet);
};

function cambioPantallaAlien2() {

    document.getElementById('link_alien2').addEventListener('click', function() {
        
        cambioCss('./styles/styles_alien2.css');
    });
};

cambioPantallaAlien2();

function volverPantallaAlien1() {

    document.getElementById('volver_alien1').addEventListener('click', function() {
        
        cambioCss('./styles/styles.css');
    });
};

volverPantallaAlien1();

function seguirAAlien3() {

    document.getElementById('link_alien3').addEventListener('click', function() {
        
        cambioCss('./styles/styles_alien3.css');
    });
};

seguirAAlien3();

function volverInicio() {

    document.getElementById('volver_inicio').addEventListener('click', function() {
        
        cambioCss('./styles/styles.css');
    });
};

volverInicio();

function volverAlien2() {

    document.getElementById('volver_alien2').addEventListener('click', function() {
        
        cambioCss('./styles/styles_alien2.css');
    });
};

volverAlien2();
