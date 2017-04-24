$(function(){
	var header= document.getElementById('header');
	var headroom= new Headroom(header);
	headroom.init();
	//Menu Responsive
	//Calculamos el ancho de la pagina
	var ancho= $(window).width(),
	enlaces= $('#enlaces'),
	btnMenu= $('#btn-menu'),
	icono= $('#btn-menu .icono');

	if (ancho<768) {
		enlaces.hide();
		icono.addClass('fa-bars')

	}

	btnMenu.on('click', function(e){
		enlaces.slideToggle();
		icono.toggleClass('fa-times');
		icono.toggleClass('fa-bars');


	});

$(window).on('resize', function(){
	if($(this).width()>700){
		enlaces.show();
		icono.addClass('fa-times');
		icono.removeClass('fa-bars');
	}else{
		enlaces.hide;
				iconos.addClass('fa-bars');
		icono.removeClass('fa-times');
	}
});

})