//custom js goes here
$(function () {	
	$('.grid-button-mod button').on('click',function(){
		var $this = $(this) ;
				classname = $this.attr('class');
				classtype = classname.substring(9);
		$('#grid-row').removeClass().addClass(classname);
		$('h1 span').text(classtype);
	});
	$('.grid-dom-add').on('click',function(){
		$( "#grid-row" ).append("<div class='grid-block'><div class='content'></div></div>");
	});
	$('.grid-dom-height').on('click',function(){
		$( ".grid-block:nth-child(4n+4) .content" ).addClass("content-special");
	});
	$('.grid-dom-clear').on('click',function(){
		$( ".grid-block:nth-child(6n+1)" ).addClass("clearleft");
	});
	$('.grid-dom-border').on('click',function(){
		$( "#grid-row" ).toggleClass("grid--border");
	});
});